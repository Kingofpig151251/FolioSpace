import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // 使用相對路徑，適合部署到任何域名
    // assetPrefix: 'https://simonaking.com/projects/',
  },
});
