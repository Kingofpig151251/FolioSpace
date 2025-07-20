import { Project } from '../types/global';

export const projectsData: Project[] = [
  {
    id: 'gwitter',
    name: 'Gwitter',
    title: 'Gwitter',
    icon: 'fab fa-github',
    status: 'completed',
    position: { x: 3000, y: 0, z: 0, rotateY: 30 },
    description:
      '基于 GitHub Issues 的创新微博平台。将世界上最强大的问题追踪系统转换为个人微博，支持社交互动、多语言和无限滚动，打造独特的技术社交体验。',
    tech: ['React', 'TypeScript', 'GitHub API', 'Framer Motion', 'i18n'],
    links: [
      { type: 'demo', url: 'https://simonaking.com/Gwitter', text: '在线体验' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/tree/master/Gwitter',
        text: '源码',
      },
    ],
    layout: 'standard',
  },
  {
    id: 'homepage',
    name: 'Home',
    title: 'HomePage',
    icon: 'fas fa-home',
    status: 'completed',
    position: { x: 1400, y: 1400, z: 0, rotate: 15 },
    description:
      '现代优雅的个人主页，采用 WebGL 流体动画背景。高度封装的配置系统、响应式设计和流畅的页面过渡效果，总体积控制在 18.5KB 以内。',
    tech: ['Pug', 'Less', 'Gulp', 'WebGL', 'JavaScript'],
    links: [
      { type: 'demo', url: 'https://simonaking.com', text: '访问主页' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/tree/master/Home',
        text: '源码',
      },
    ],
    layout: 'reverse',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    title: 'AnimatedGallery',
    icon: 'fas fa-images',
    status: 'completed',
    position: { x: 0, y: 2000, z: 0, rotateY: -30 },
    description:
      '现代化的响应式照片画廊项目。支持 BlurHash 渐进加载、瀑布流布局、图片放大预览和移动端优化，提供流畅优雅的视觉体验。',
    tech: ['React', 'TypeScript', 'CSS3', 'BlurHash', 'Responsive'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/AnimatedGallery',
        text: '在线体验',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/tree/master/AnimatedGallery',
        text: '源码',
      },
    ],
    layout: 'standard',
  },
  {
    id: 'termfolio',
    name: 'Terminal',
    title: 'TermFolio',
    icon: 'fas fa-terminal',
    status: 'completed',
    position: { x: -1400, y: 1400, z: 0, rotate: -15 },
    description:
      '极客风格的终端式作品集展示组件。完全模拟真实终端交互体验，支持命令行操作、多命令系统和个性化配置，让技术展示更具个性。',
    tech: ['JavaScript', 'CSS3', 'Terminal UI', 'Command Line', 'NPM Package'],
    links: [
      { type: 'demo', url: 'https://simonaking.com/about/', text: '在线体验' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/tree/master/TermFolio',
        text: '源码',
      },
    ],
    layout: 'reverse',
  },
  {
    id: 'thinking',
    name: '思考',
    title: '思考的价值社群',
    icon: 'fas fa-brain',
    status: 'completed',
    position: { x: -2000, y: 0, z: 0, rotateY: 150 },
    description:
      '专注于深度思考的技术社群平台。汇聚技术人的思维碰撞与价值输出，构建高质量的技术交流生态，分享技术见解和人生感悟。',
    tech: ['Community', 'Content', 'Discussion', 'Knowledge', 'Sharing'],
    links: [
      {
        type: 'demo',
        url: 'https://mp.weixin.qq.com/s/XSCsL68S-XRoPtBkXyQNVw',
        text: '了解详情',
      },
      {
        type: 'code',
        url: 'https://simonaking.com/blog/2023/10/06/思考的价值/',
        text: '相关文章',
      },
    ],
    layout: 'standard',
  },
  {
    id: 'scrcpy',
    name: 'scrcpy',
    title: 'scrcpy-gui',
    icon: 'fas fa-mobile-alt',
    status: 'completed',
    position: { x: -1400, y: -1400, z: 0, rotate: 165 },
    description:
      '跨平台的 Android 设备投屏工具，基于 scrcpy 的图形化界面封装。支持设备管理、录屏、截图等功能，提供简洁易用的操作体验。',
    tech: ['Electron', 'Node.js', 'scrcpy', 'Cross-platform', 'GUI'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/SimonAKing/scrcpy-gui/releases',
        text: '下载使用',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/scrcpy-gui',
        text: '源码',
      },
    ],
    layout: 'reverse',
  },
  {
    id: 'blog',
    name: '博客',
    title: '博客',
    icon: 'fas fa-blog',
    status: 'completed',
    position: { x: 0, y: -2000, z: 0, rotate: 180 },
    description:
      '基于 Hexo 构建的个人技术博客。自定义主题设计，支持多语言、代码高亮、评论系统和性能优化，记录技术成长和思考感悟的重要平台。',
    tech: ['Hexo', 'Node.js', 'Markdown', 'EJS', 'Less'],
    links: [
      { type: 'demo', url: 'https://simonaking.com/blog', text: '访问博客' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/tree/master/Blog',
        text: '源码',
      },
    ],
    layout: 'standard',
  },
  {
    id: 'italking',
    name: 'AI对话',
    title: 'italking',
    icon: 'fas fa-robot',
    status: 'in-progress',
    position: { x: 2000, y: -1400, z: 0, rotate: 30 },
    description:
      '基于大语言模型的智能对话平台。提供多模型支持、上下文管理、自定义提示词等功能，打造高效的 AI 交互体验。',
    tech: ['React', 'TypeScript', 'AI/LLM', 'Chat', 'API'],
    links: [
      { type: 'demo', url: '#', text: '即将发布' },
      { type: 'code', url: '#', text: '源码' },
    ],
    layout: 'reverse',
  },
  {
    id: 'newsletter',
    name: '周刊',
    title: 'newsletter',
    icon: 'fas fa-newspaper',
    status: 'in-progress',
    position: { x: 2000, y: -2800, z: 0, rotate: -30 },
    description:
      '技术周刊和内容聚合平台。收集整理优质技术文章、开源项目、工具资源等，为技术人提供精选的学习资料。',
    tech: ['Content', 'Newsletter', 'Curation', 'Tech News', 'Weekly'],
    links: [
      { type: 'demo', url: '#', text: '即将发布' },
      { type: 'code', url: '#', text: '源码' },
    ],
    layout: 'standard',
  },
  {
    id: 'projects',
    name: '项目页',
    title: '项目页',
    icon: 'fas fa-layer-group',
    status: 'completed',
    position: { x: 0, y: -3600, z: 0, rotate: 180 },
    description:
      '当前所在的项目展示页面。采用 impress.js 构建的 3D 演示效果，展示个人项目作品集，提供沉浸式的浏览体验。',
    tech: ['impress.js', 'CSS3', '3D Transform', 'Animation', 'Responsive'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/projects',
        text: '当前页面',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Tomotoes/blob/master/projects/index.html',
        text: '源码',
      },
    ],
    layout: 'reverse',
  },
];

export const mapData = [
  {
    id: 'title',
    name: '首页',
    icon: 'fas fa-home',
  },
  {
    id: 'global-overview',
    name: '概览',
    icon: 'fas fa-th-large',
  },
  {
    id: 'gwitter',
    name: 'Gwitter',
    icon: 'fab fa-github',
  },
  {
    id: 'homepage',
    name: 'Home',
    icon: 'fas fa-home',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    icon: 'fas fa-images',
  },
  {
    id: 'termfolio',
    name: 'Terminal',
    icon: 'fas fa-terminal',
  },
  {
    id: 'thinking',
    name: '思考',
    icon: 'fas fa-brain',
  },
  {
    id: 'scrcpy',
    name: 'scrcpy',
    icon: 'fas fa-mobile-alt',
  },
  {
    id: 'blog',
    name: '博客',
    icon: 'fas fa-blog',
  },
  {
    id: 'italking',
    name: 'AI对话',
    icon: 'fas fa-robot',
  },
  {
    id: 'newsletter',
    name: '周刊',
    icon: 'fas fa-newspaper',
  },
  {
    id: 'projects',
    name: '项目页',
    icon: 'fas fa-layer-group',
  },
  {
    id: 'conclusion',
    name: '结束',
    icon: 'fas fa-rocket',
  },
];
