# 🚀 FolioSpace + Cloudflare R2 整合指南

## 📋 概述

這個專案已經整合了 Cloudflare R2 物件儲存空間，解決了大型圖片檔案無法上傳到 Cloudflare Pages 的問題。

## 🎯 主要優勢

- ✅ **無檔案大小限制**: 圖片可以任意大小
- ✅ **全球 CDN**: 通過 Cloudflare 的全球網路分發
- ✅ **成本效益**: R2 提供免費的 10GB 儲存空間
- ✅ **自動優化**: 圖片自動優化並快取

## 🛠️ 快速設定

### 1. 安裝依賴
```bash
npm install
```

### 2. 設定環境變數
創建 `.env` 檔案：
```bash
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
```

### 3. 更新 R2 配置
編輯 `r2-config.js`，設定您的 Account ID：
```javascript
ACCOUNT_ID: 'your-actual-account-id',
```

### 4. 上傳圖片
```bash
npm run upload-r2
```

### 5. 部署
```bash
# 使用 PowerShell 腳本（推薦）
.\deploy.ps1

# 或手動執行
npm run build
wrangler pages deploy dist
```

## 📁 新增的檔案

- `upload-to-r2.js` - R2 上傳腳本
- `r2-config.js` - R2 配置檔案
- `deploy.ps1` - PowerShell 部署腳本
- `deploy.sh` - Bash 部署腳本
- `R2-SETUP.md` - 詳細設定說明

## 🔧 技術細節

### R2 整合
- 使用 AWS S3 相容的 API
- 自動設定正確的 MIME 類型
- 生成公開訪問 URL

### 部署流程
1. 圖片上傳到 R2
2. 生成 URL 映射檔案
3. 構建專案
4. 部署到 Cloudflare Pages

## 🌐 部署後

部署完成後，您的專案將：
- 從 R2 載入大型圖片
- 享受 Cloudflare 的全球 CDN
- 不再有檔案大小限制

## 📚 更多資源

- [Cloudflare R2 文檔](https://developers.cloudflare.com/r2/)
- [R2 API 參考](https://developers.cloudflare.com/r2/api/)
- [Cloudflare Pages 文檔](https://developers.cloudflare.com/pages/)

## 🆘 需要幫助？

如果遇到問題，請檢查：
1. 環境變數是否正確設定
2. R2 API Token 權限是否足夠
3. Account ID 是否正確
4. 儲存桶名稱是否為 `kingleung`
