// rsbuild.config.mjs
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  // 使用預設配置，圖片檔案會在 build 後自動清理
});