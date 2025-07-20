# FolioSpace

现代化的React项目展示平台，基于impress.js构建的3D演示效果。

## 🎯 特性

- **3D演示效果**: 基于impress.js的流畅3D转场动画
- **组件化架构**: 模块化的React组件设计
- **响应式设计**: 完美适配移动端和桌面端
- **项目地图**: 创新的minimal map导航系统
- **实时进度**: 动态进度条显示浏览进度
- **现代化UI**: 平面化设计风格，优雅的动画效果

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
pnpm dev
```

### 构建项目

```bash
npm run build
# 或
pnpm build
```

## 📁 项目结构

```
FolioSpace/
├── src/
│   ├── components/
│   │   ├── ProjectShowcase/     # 主展示组件
│   │   ├── slides/              # 幻灯片组件
│   │   │   ├── TitleSlide.jsx
│   │   │   ├── OverviewSlide.jsx
│   │   │   ├── ProjectSlide.jsx
│   │   │   └── ConclusionSlide.jsx
│   │   ├── MiniProjectCard/     # 小项目卡片
│   │   ├── ProjectCard/         # 项目详情卡片
│   │   ├── MiniMap/             # 项目地图
│   │   ├── Navigation/          # 导航控制
│   │   └── ProgressBar/         # 进度条
│   ├── data/
│   │   └── projectsData.js      # 项目数据配置
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── public/
│   └── index.html
└── package.json
```

## 🎨 主要组件

### ProjectShowcase
主要的展示容器，负责初始化impress.js和管理所有子组件。

### 幻灯片组件
- **TitleSlide**: 标题页
- **OverviewSlide**: 项目概览页
- **ProjectSlide**: 项目详情页
- **ConclusionSlide**: 结束页

### MiniMap
创新的项目地图功能：
- 实时显示当前位置
- 可点击快速导航
- 支持展开大地图
- 动画聚焦效果

### 数据配置
所有项目数据都在 `src/data/projectsData.js` 中配置，支持：
- 项目基本信息
- 3D位置坐标
- 技术栈标签
- 链接配置
- 状态管理

## 🛠️ 技术栈

- **React 18+**: 现代化的前端框架
- **CSS3**: 丰富的动画和样式效果
- **impress.js**: 3D演示框架
- **FontAwesome**: 图标库
- **Rsbuild**: 现代化的构建工具

## 📱 响应式支持

项目完美支持各种设备：
- 桌面端：完整的3D效果和交互
- 平板端：优化的布局和触摸支持
- 移动端：简化的界面和手势导航

## 🎮 交互方式

- **键盘**: 空格键/方向键导航
- **鼠标**: 点击按钮或地图节点
- **触摸**: 滑动手势支持
- **地图**: 点击节点快速跳转

## 🔧 自定义配置

### 添加新项目

在 `src/data/projectsData.js` 中添加新的项目配置：

```javascript
{
  id: 'new-project',
  name: '项目名称',
  title: '显示标题',
  icon: 'fas fa-star',
  status: 'completed', // 或 'in-progress'
  position: { x: 1000, y: 500, z: 0 },
  description: '项目描述...',
  tech: ['React', 'TypeScript'],
  links: [
    { type: 'demo', url: 'https://demo.com', text: '在线体验' },
    { type: 'code', url: 'https://github.com', text: '源码' }
  ],
  layout: 'standard' // 或 'reverse'
}
```

### 修改样式

每个组件都有独立的CSS文件，可以根据需要进行定制。

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- 作者: SimonAKing
- 网站: https://simonaking.com
- GitHub: https://github.com/SimonAKing
