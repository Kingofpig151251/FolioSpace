# FolioSpace 命令說明

## 開發命令

### 本地開發
```bash
npm run dev
```
- 啟動開發伺服器
- 自動同步 `src/assets` → `public/assets`
- 圖片從 `public/assets` 載入（本地路徑）

### 建置與部署
```bash
npm run build
```
- 建置專案到 `dist` 目錄
- **自動清理圖片檔案**，確保 `dist` 目錄沒有大圖片
- 適合部署到 Cloudflare Pages

### 圖片管理
```bash
npm run upload-r2
```
- 掃描 `projectsData.ts` 中使用的圖片
- 上傳圖片到 Cloudflare R2
- 更新 `projectsData.ts` 中的圖片路徑為 R2 URL

### 其他命令
```bash
npm run preview        # 預覽建置結果
npm run format         # 格式化程式碼
npm run lint           # 檢查程式碼品質
```

## 工作流程

### 1. 開發階段
```bash
npm run dev
```
- 圖片使用本地路徑 `/assets/...`
- 自動同步資產到 `public/assets`

### 2. 部署準備
```bash
# 上傳圖片到 R2
npm run upload-r2

# 建置並清理
npm run build
```

### 3. 部署
- `dist` 目錄已清理，沒有圖片檔案
- 圖片從 R2 URL 載入
- 適合部署到 Cloudflare Pages

## 環境變數

在專案根目錄建立 `.env` 檔案：
```env
R2_ACCESS_KEY_ID=你的_access_key_id
R2_SECRET_ACCESS_KEY=你的_secret_access_key
```

## 注意事項

- `npm run build` 會自動清理圖片，不需要手動清理
- 開發時圖片從本地載入，部署時從 R2 載入
- 確保 `.env` 檔案已設定 R2 憑證才能使用 `upload-r2` 命令
