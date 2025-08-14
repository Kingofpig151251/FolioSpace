Write-Host "🔑 FolioSpace R2 環境變數設定" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

Write-Host "請輸入您的 R2 API Key 資訊：" -ForegroundColor Yellow
Write-Host ""

$accessKeyId = Read-Host "R2_ACCESS_KEY_ID"
$secretAccessKey = Read-Host "R2_SECRET_ACCESS_KEY"

if ([string]::IsNullOrWhiteSpace($accessKeyId) -or [string]::IsNullOrWhiteSpace($secretAccessKey)) {
    Write-Host "❌ API Key 不能為空" -ForegroundColor Red
    exit 1
}

$envContent = "# Cloudflare R2 配置`n"
$envContent += "R2_ACCESS_KEY_ID=$accessKeyId`n"
$envContent += "R2_SECRET_ACCESS_KEY=$secretAccessKey`n"

try {
    $envContent | Out-File -FilePath ".env" -Encoding UTF8
    Write-Host ""
    Write-Host "✅ 成功創建 .env 檔案！" -ForegroundColor Green
    Write-Host "🎯 現在您可以執行：npm run upload-r2" -ForegroundColor Cyan
} catch {
    Write-Host "❌ 創建 .env 檔案失敗：$($_.Exception.Message)" -ForegroundColor Red
}
