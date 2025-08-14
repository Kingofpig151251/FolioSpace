import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 獲取 __dirname 的 ES 模組等效
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// R2 配置
const R2_ENDPOINT = 'https://caace5c085195df093eabd0fce8e010a.r2.cloudflarestorage.com';
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = 'kingleung';

// 創建 S3 客戶端（R2 兼容 S3 API）
const s3Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// 目標資料夾與檔案
const SRC_ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const PUBLIC_ASSETS_DIR = path.join(__dirname, 'public', 'assets');
const PROJECTS_DATA_FILE = path.join(__dirname, 'src', 'constants', 'projectsData.ts');

// 從 projectsData.ts 解析實際被使用到的 /assets/* 圖片
function parseUsedAssetFiles(fileContent) {
  const patterns = [
    /['\"]\/?assets\/([^'\"]+\.(?:gif|png|jpe?g|webp))['\"]/gi,
    /['\"]https?:\/\/[^'\"]+\/assets\/([^'\"]+\.(?:gif|png|jpe?g|webp))['\"]/gi,
  ];
  const found = new Set();
  for (const regex of patterns) {
    let match;
    while ((match = regex.exec(fileContent)) !== null) {
      const filename = match[1];
      found.add(filename);
    }
  }
  return Array.from(found);
}

function mapToSrcAssetPath(filename) {
  return path.join(SRC_ASSETS_DIR, filename);
}

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function uploadToR2(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);
    
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `assets/${fileName}`,
      Body: fileContent,
      ContentType: getContentType(fileName),
    });

    await s3Client.send(command);
    console.log(`✅ 成功上傳: ${fileName}`);
    
    // 返回公開 URL
    return `https://pub-85ad51a1551d4f3a8a67facf2bfcfabb.r2.dev/assets/${fileName}`;
  } catch (error) {
    console.error(`❌ 上傳失敗 ${filePath}:`, error.message);
    return null;
  }
}

function getContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const mimeTypes = {
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

async function uploadUsedImagesFromProjects() {
  console.log('🚀 掃描 projectsData.ts 並上傳使用中的圖片到 R2...');

  if (!fs.existsSync(PROJECTS_DATA_FILE)) {
    console.log(`⚠️ 找不到 ${PROJECTS_DATA_FILE}`);
    return { urlMapping: {} };
  }

  const projectsContent = fs.readFileSync(PROJECTS_DATA_FILE, 'utf-8');
  const usedFilenames = parseUsedAssetFiles(projectsContent);

  if (usedFilenames.length === 0) {
    console.log('ℹ️ 在 projectsData.ts 中沒有找到 /assets/* 參考，跳過上傳。');
    return { urlMapping: {} };
  }

  if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    console.log('⚠️ 未設定 R2 環境變數，跳過上傳與回寫。');
    return { urlMapping: {}, usedFilenames };
  }

  const results = [];
  for (const filename of usedFilenames) {
    const srcPath = mapToSrcAssetPath(filename);
    if (fs.existsSync(srcPath)) {
      const url = await uploadToR2(srcPath);
      if (url) {
        results.push({ fileName: filename, url });
      }
    } else {
      console.log(`⚠️ 檔案不存在: ${srcPath}`);
    }
  }

  const urlMapping = {};
  results.forEach((item) => {
    urlMapping[item.fileName] = urlForPublicAsset(item.fileName);
  });

  // 也輸出實際 R2 URL 映射（供參考）
  const r2Mapping = {};
  results.forEach((item) => {
    r2Mapping[item.fileName] = item.url;
  });

  fs.writeFileSync('r2-urls.json', JSON.stringify(r2Mapping, null, 2));
  console.log('\n📝 已生成 r2-urls.json 檔案');

  return { urlMapping: r2Mapping, usedFilenames };
}

function urlForPublicAsset(filename) {
  // 使用預設的 R2 公用開發 URL 規則
  return `https://pub-85ad51a1551d4f3a8a67facf2bfcfabb.r2.dev/assets/${filename}`;
}

function rewriteProjectsDataWithUrls(mapping) {
  const content = fs.readFileSync(PROJECTS_DATA_FILE, 'utf-8');
  let replaced = content;

  for (const [filename, url] of Object.entries(mapping)) {
    // 取代 '/assets/filename'
    const pattern = new RegExp(`(['\"])\\/?assets\\/${escapeRegExp(filename)}(['\"])`, 'g');
    replaced = replaced.replace(pattern, `'${url}'`);
  }

  if (content !== replaced) {
    fs.writeFileSync(PROJECTS_DATA_FILE, replaced, 'utf-8');
    console.log('✍️ 已回寫 R2 URL 至 projectsData.ts（不再還原為本地路徑）');
  } else {
    console.log('ℹ️ projectsData.ts 無需回寫');
  }
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
}

function syncDevAssetsToPublic() {
  console.log('🗂️ 同步 src/assets -> public/assets');
  ensureDirSync(PUBLIC_ASSETS_DIR);
  const files = fs.readdirSync(SRC_ASSETS_DIR, { withFileTypes: true });
  for (const entry of files) {
    if (entry.isFile()) {
      const src = path.join(SRC_ASSETS_DIR, entry.name);
      const dest = path.join(PUBLIC_ASSETS_DIR, entry.name);
      fs.copyFileSync(src, dest);
    }
  }
  console.log('✅ 同步完成');
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--sync-dev')) {
    syncDevAssetsToPublic();
    return;
  }

  // 預設行為或 --update-projects
  const { urlMapping, usedFilenames } = await uploadUsedImagesFromProjects();
  if (args.includes('--update-projects')) {
    if (Object.keys(urlMapping).length > 0) {
      rewriteProjectsDataWithUrls(urlMapping);
    } else {
      // 沒有可用的 R2 URL（多半因為未設環境變數），為避免生產版找不到資源，複製本地資產到 public
      if (Array.isArray(usedFilenames) && usedFilenames.length > 0) {
        syncDevAssetsToPublic();
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
