# Cloudflare R2 設定指南

## 🚀 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 設定環境變數
在專案根目錄創建 `.env` 檔案，並添加以下內容：

```bash
# Cloudflare R2 配置
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
```

### 3. 更新 R2 配置
編輯 `r2-config.js` 檔案，將 `ACCOUNT_ID` 替換為您的 Cloudflare Account ID：

```javascript
ACCOUNT_ID: 'your-actual-account-id',
```

### 4. 上傳圖片到 R2
```bash
npm run upload-r2
```

## 📋 詳細步驟

### 獲取 R2 API Token
1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 前往 **R2** > **Manage R2 API tokens**
3. 點擊 **Create API token**
4. 選擇 **Custom token** 模板
5. 設定權限：
   - **Account** > **Cloudflare R2** > **Object Read & Write**
6. 創建並複製 Access Key ID 和 Secret Access Key

### 獲取 Account ID
1. 在 Cloudflare Dashboard 右側可以看到您的 Account ID
2. 或者在 **Workers & Pages** > **Overview** 頁面查看

## 🔧 故障排除

### 常見錯誤
- **403 Forbidden**: 檢查 API Token 權限
- **NoSuchBucket**: 確認儲存桶名稱 `kingleung` 存在
- **InvalidAccessKeyId**: 檢查環境變數是否正確設定

### 檢查上傳狀態
上傳完成後會生成 `r2-urls.json` 檔案，包含所有圖片的公開 URL。

## 📁 檔案結構
```
FolioSpace/
├── upload-to-r2.js      # R2 上傳腳本
├── r2-config.js         # R2 配置檔案
├── r2-urls.json         # 上傳後的 URL 映射（自動生成）
└── R2-SETUP.md         # 本說明檔案
```

## 🌐 部署到 Cloudflare Pages

設定完成後，您可以：
1. 將圖片上傳到 R2
2. 更新專案中的圖片引用路徑
3. 部署到 Cloudflare Pages（不再有檔案大小限制）

## 💡 提示
- R2 提供免費的 10GB 儲存空間
- 圖片會自動優化並通過 Cloudflare 的全球 CDN 分發
- 可以設定自定義域名來美化 URL
