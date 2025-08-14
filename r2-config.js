// R2 配置檔案
export const R2_CONFIG = {
  // 請替換為您的 Cloudflare Account ID
  ACCOUNT_ID: 'caace5c085195df093eabd0fce8e010a',
  
  // R2 儲存桶名稱
  BUCKET_NAME: 'kingleung',
  
  // R2 端點 URL 格式
  get ENDPOINT() {
    return `https://${this.ACCOUNT_ID}.r2.cloudflarestorage.com`;
  },
  
  // 公開訪問 URL 格式
  get PUBLIC_URL() {
    return `https://${this.BUCKET_NAME}.r2.dev`;
  },
  
  // 圖片路徑前綴
  ASSETS_PREFIX: 'assets/',
  
  // 支援的圖片格式
  SUPPORTED_FORMATS: ['.gif', '.png', '.jpg', '.jpeg', '.webp']
};

// 環境變數檢查
export function validateR2Config() {
  const requiredEnvVars = ['R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY'];
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    console.error('❌ 缺少必要的環境變數:');
    missing.forEach(envVar => {
      console.error(`   - ${envVar}`);
    });
    console.error('\n請在 .env 檔案中設定這些變數，或使用 export 命令設定');
    return false;
  }
  
  if (R2_CONFIG.ACCOUNT_ID === 'your-account-id-here') {
    console.error('❌ 請在 r2-config.js 中設定您的 Cloudflare Account ID');
    return false;
  }
  
  return true;
}
