import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 載入環境變數
import dotenv from 'dotenv';
dotenv.config();

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

// 要上傳的圖片檔案
const imageFiles = [
  'src/assets/homepage.gif',
  'src/assets/animated_gallery.gif',
  'src/assets/gwitter.gif',
  'src/assets/folio_space.gif',
  'src/assets/scrcpy-gui.gif',
  'src/assets/term_folio.gif',
  'src/assets/italking.png',
  'src/assets/wechat.png',
  'src/assets/avatar.jpeg'
];

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
    return `https://${BUCKET_NAME}.r2.dev/assets/${fileName}`;
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

async function uploadAllImages() {
  console.log('🚀 開始上傳圖片到 R2...');
  
  const results = [];
  for (const filePath of imageFiles) {
    if (fs.existsSync(filePath)) {
      const url = await uploadToR2(filePath);
      if (url) {
        results.push({
          fileName: path.basename(filePath),
          url: url
        });
      }
    } else {
      console.log(`⚠️  檔案不存在: ${filePath}`);
    }
  }
  
  // 生成 URL 映射檔案
  const urlMapping = {};
  results.forEach(item => {
    urlMapping[item.fileName] = item.url;
  });
  
  fs.writeFileSync('r2-urls.json', JSON.stringify(urlMapping, null, 2));
  console.log('\n📝 已生成 r2-urls.json 檔案');
  console.log('\n🎯 上傳完成！請將 r2-urls.json 中的 URL 更新到您的專案中');
}

// 檢查環境變數
if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
  console.error('❌ 請設定環境變數:');
  console.error('export R2_ACCESS_KEY_ID=your_access_key');
  console.error('export R2_SECRET_ACCESS_KEY=your_secret_key');
  process.exit(1);
}

uploadAllImages().catch(console.error);
