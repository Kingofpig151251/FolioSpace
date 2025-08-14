# FolioSpace 部署腳本 (PowerShell)
Write-Host "🚀 FolioSpace 部署腳本" -ForegroundColor Green
Write-Host "==========================" -ForegroundColor Green

# 檢查是否已安裝依賴
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 安裝依賴..." -ForegroundColor Yellow
    npm install
}

# 檢查環境變數
if (-not $env:R2_ACCESS_KEY_ID -or -not $env:R2_SECRET_ACCESS_KEY) {
    Write-Host "❌ 請先設定環境變數:" -ForegroundColor Red
    Write-Host "`$env:R2_ACCESS_KEY_ID = 'your_access_key'" -ForegroundColor Cyan
    Write-Host "`$env:R2_SECRET_ACCESS_KEY = 'your_secret_key'" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "或者使用以下命令:" -ForegroundColor Cyan
    Write-Host "Set-Item -Path Env:R2_ACCESS_KEY_ID -Value 'your_access_key'" -ForegroundColor Cyan
    Write-Host "Set-Item -Path Env:R2_SECRET_ACCESS_KEY -Value 'your_secret_key'" -ForegroundColor Cyan
    exit 1
}

# 上傳圖片到 R2
Write-Host "📤 上傳圖片到 R2..." -ForegroundColor Yellow
npm run upload-r2

# 檢查上傳是否成功
if (-not (Test-Path "r2-urls.json")) {
    Write-Host "❌ 圖片上傳失敗，請檢查錯誤訊息" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 圖片上傳完成！" -ForegroundColor Green

# 構建專案
Write-Host "🔨 構建專案..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 構建成功！" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 下一步：" -ForegroundColor Cyan
    Write-Host "1. 將 dist/ 目錄部署到 Cloudflare Pages" -ForegroundColor White
    Write-Host "2. 或者使用 wrangler 部署：" -ForegroundColor White
    Write-Host "   wrangler pages deploy dist" -ForegroundColor White
    Write-Host ""
    Write-Host "📁 部署目錄: ./dist" -ForegroundColor White
    Write-Host "🌐 R2 圖片已上傳到儲存桶: kingleung" -ForegroundColor White
} else {
    Write-Host "❌ 構建失敗，請檢查錯誤訊息" -ForegroundColor Red
    exit 1
}
