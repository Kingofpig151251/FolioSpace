#!/bin/bash

echo "🚀 FolioSpace 部署腳本"
echo "=========================="

# 檢查是否已安裝依賴
if [ ! -d "node_modules" ]; then
    echo "📦 安裝依賴..."
    npm install
fi

# 檢查環境變數
if [ -z "$R2_ACCESS_KEY_ID" ] || [ -z "$R2_SECRET_ACCESS_KEY" ]; then
    echo "❌ 請先設定環境變數:"
    echo "export R2_ACCESS_KEY_ID=your_access_key"
    echo "export R2_SECRET_ACCESS_KEY=your_secret_key"
    exit 1
fi

# 上傳圖片到 R2
echo "📤 上傳圖片到 R2..."
npm run upload-r2

# 檢查上傳是否成功
if [ ! -f "r2-urls.json" ]; then
    echo "❌ 圖片上傳失敗，請檢查錯誤訊息"
    exit 1
fi

echo "✅ 圖片上傳完成！"

# 構建專案
echo "🔨 構建專案..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 構建成功！"
    echo ""
    echo "🎯 下一步："
    echo "1. 將 dist/ 目錄部署到 Cloudflare Pages"
    echo "2. 或者使用 wrangler 部署："
    echo "   wrangler pages deploy dist"
    echo ""
    echo "📁 部署目錄: ./dist"
    echo "🌐 R2 圖片已上傳到儲存桶: kingleung"
else
    echo "❌ 構建失敗，請檢查錯誤訊息"
    exit 1
fi
