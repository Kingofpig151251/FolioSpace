# FolioSpace R2 環境變數設定腳本
Write-Host "🔑 FolioSpace R2 環境變數設定" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# 檢查是否已存在 .env 檔案
if (Test-Path ".env") {
    Write-Host "✅ 發現現有的 .env 檔案" -ForegroundColor Green
    Write-Host "內容：" -ForegroundColor Yellow
    Get-Content ".env" | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
    Write-Host ""
    
    $choice = Read-Host "是否要重新設定？(y/N)"
    if ($choice -ne "y" -and $choice -ne "Y") {
        Write-Host "保持現有設定" -ForegroundColor Green
        exit 0
    }
}

Write-Host "請輸入您的 R2 API Key 資訊：" -ForegroundColor Yellow
Write-Host ""

# 獲取 Access Key ID
$accessKeyId = Read-Host "R2_ACCESS_KEY_ID"
if ([string]::IsNullOrWhiteSpace($accessKeyId)) {
    Write-Host "❌ Access Key ID 不能為空" -ForegroundColor Red
    exit 1
}

# 獲取 Secret Access Key
$secretAccessKey = Read-Host "R2_SECRET_ACCESS_KEY"
if ([string]::IsNullOrWhiteSpace($secretAccessKey)) {
    Write-Host "❌ Secret Access Key 不能為空" -ForegroundColor Red
    exit 1
}

# 創建 .env 檔案內容
$envContent = "# Cloudflare R2 配置`n"
$envContent += "# 請將下面的值替換為您的實際 API Key`n`n"
$envContent += "# R2 API Token 的 Access Key ID`n"
$envContent += "R2_ACCESS_KEY_ID=$accessKeyId`n`n"
$envContent += "# R2 API Token 的 Secret Access Key`n"
$envContent += "R2_SECRET_ACCESS_KEY=$secretAccessKey`n`n"
$envContent += "# 可選：Cloudflare Account ID（已自動設定）`n"
$envContent += "# CLOUDFLARE_ACCOUNT_ID=caace5c085195df093eabd0fce8e010a"

# 寫入 .env 檔案
try {
    $envContent | Out-File -FilePath ".env" -Encoding UTF8
    Write-Host ""
    Write-Host "✅ 成功創建 .env 檔案！" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 檔案內容：" -ForegroundColor Yellow
    Get-Content ".env" | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
    Write-Host ""
    Write-Host "🎯 現在您可以執行：npm run upload-r2" -ForegroundColor Cyan
} catch {
    Write-Host "❌ 創建 .env 檔案失敗：$($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
