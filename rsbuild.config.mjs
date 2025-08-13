import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  // 移除硬編碼的 assetPrefix，使用相對路徑
  // output: {
  //   assetPrefix: 'https://simonaking.com/projects/',
  // },
});
