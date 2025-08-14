# 🚀 FolioSpace R2 使用指南

## 📋 快速開始

### 1. 設定環境變數
```powershell
# 使用 PowerShell 腳本
.\setup-env.ps1

# 或手動創建 .env 檔案
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
```

### 2. 上傳圖片到 R2
```bash
npm run upload-r2
```

### 3. 部署專案
```bash
npm run build
wrangler pages deploy dist
```

## 🔧 配置說明

- **R2 儲存桶**: `kingleung`
- **公用開發 URL**: `https://pub-85ad51a1551d4f3a8a67facf2bfcfabb.r2.dev`
- **圖片路徑**: `/assets/圖片名稱`

## 📁 檔案說明

- `upload-images.js` - R2 上傳腳本
- `setup-env.ps1` - 環境變數設定腳本
- `wrangler.toml` - Cloudflare 配置
- `.env` - 環境變數（自動生成）

## 🎯 功能特點

- ✅ 自動上傳所有專案圖片
- ✅ 生成 URL 映射檔案
- ✅ 支援大型 GIF 檔案 (30MB+)
- ✅ 全球 CDN 加速
- ✅ 無檔案大小限制
