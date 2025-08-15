// rsbuild.config.mjs
export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // 排除大圖片檔案
    copy: {
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          globOptions: {
            ignore: ['**/*.gif', '**/*.png', '**/*.jpg', '**/*.jpeg']
          }
        }
      ]
    }
  },
});