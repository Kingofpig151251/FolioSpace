import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.GWITTER,
    name: 'Gwitter',
    title: 'Gwitter',
    preview: '', // 移除圖片引用
    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
    description:
      'A lightweight microblogging application that transforms GitHub Issues into your personal blogging platform',
    tech: ['Blogging', 'Web', 'Issues'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/Gwitter',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/Gwitter',
        text: 'Github',
        githubRepo: 'SimonAKing/Gwitter',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.HOMEPAGE,
    name: 'HomePage',
    title: 'HomePage',
    preview: '', // 移除圖片引用
    position: { x: 1200, y: 800, z: 200, rotateY: 30 },
    description:
      'A modern and elegant personal homepage with fluid animation background, responsive design and smooth page transitions',
    tech: ['WebGL', 'Blogging', 'Web', 'Homepage'],
    links: [
      { type: 'demo', url: 'https://simonaking.com', text: 'Live Demo' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/HomePage',
        text: 'Github',
        githubRepo: 'SimonAKing/HomePage',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.GALLERY,
    name: 'AnimatedGallery',
    title: 'AnimatedGallery',
    preview: '', // 移除圖片引用
    position: { x: 0, y: 1500, z: 400, rotateY: 90 },
    description: 'A beautiful and modern photo gallery application',
    tech: ['BlurHash', 'Blogging', 'Web', 'Gallery'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/AnimatedGallery',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/AnimatedGallery',
        text: 'Github',
        githubRepo: 'SimonAKing/AnimatedGallery',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.TERMFOLIO,
    name: 'TermFolio',
    title: 'TermFolio',
    preview: '', // 移除圖片引用
    position: { x: -1060, y: 1060, z: 600, rotateY: 135 },
    description: 'An elegant terminal-style portfolio component for developers',
    tech: ['Terminal UI', 'Blogging', 'Web'],
    links: [
      { type: 'demo', url: 'https://simonaking.com/about/', text: 'Live Demo' },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/TermFolio',
        text: 'Github',
        githubRepo: 'SimonAKing/TermFolio',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.THINKING,
    name: '思考的价值',
    title: '思考的价值',
    preview: '', // 移除圖片引用
    position: { x: -1500, y: 0, z: 800, rotateY: 180 },
    description:
      '我们每天都会接收到过载的信息，然而明月与砾同囊，其中的优质信息往往会被淹没。[思考的价值] 由此而来，分享内容的不限，偏向于 LLMs、科技的方向',
    tech: ['Discussion', 'Knowledge', 'Sharing'],
    links: [
      {
        type: 'demo',
        url: 'https://thinking.simonaking.com/',
        text: 'Learn More',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.SCRCPY,
    name: 'Scrcpy-GUI',
    title: 'Scrcpy-GUI',
    preview: '', // 移除圖片引用
    position: { x: -1060, y: -1060, z: 1000, rotateY: 225 },
    description: 'A simple & beautiful GUI application for scrcpy',
    tech: ['Electron', 'Scrcpy', 'Cross-platform'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/SimonAKing/scrcpy-gui/releases',
        text: 'Download',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/scrcpy-gui',
        text: 'Github',
        githubRepo: 'SimonAKing/scrcpy-gui',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.ITALKING,
    name: 'ITalking',
    title: 'ITalking',
    preview: '', // 移除圖片引用
    position: { x: 0, y: -1500, z: 1200, rotateY: 270 },
    description:
      'A voice social platform that connects strangers to relieve loneliness and enable confident self-expression',
    tech: ['WebRTC', 'Fullstack', 'P2P'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/SimonAKing/ITalking/blob/master/CONTRIBUTING.md',
        text: 'Deploy & Try',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/ITalking',
        text: 'Github',
        githubRepo: 'SimonAKing/ITalking',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.PROJECTS,
    name: 'FolioSpace',
    title: 'FolioSpace',
    preview: '', // 移除圖片引用
    position: { x: 1060, y: -1060, z: 1400, rotateY: 315 },
    description:
      'A modern and elegant personal portfolio website with smooth animations and responsive design',
    tech: ['Blogging', 'Web', 'Portfolio'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/projects',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/FolioSpace',
        text: 'Github',
        githubRepo: 'SimonAKing/FolioSpace',
      },
    ],
    layout: 'standard',
  },
];

export const mapData = [
  {
    id: SLIDE_IDS.TITLE,
    name: 'Introduction',
    icon: 'fas fa-home',
  },

  {
    id: SLIDE_IDS.GWITTER,
    name: 'Gwitter',
    icon: 'fab fa-twitter',
  },
  {
    id: SLIDE_IDS.HOMEPAGE,
    name: 'HomePage',
    icon: 'fas fa-home',
  },
  {
    id: SLIDE_IDS.GALLERY,
    name: 'AnimatedGallery',
    icon: 'fas fa-images',
  },
  {
    id: SLIDE_IDS.TERMFOLIO,
    name: 'TermFolio',
    icon: 'fas fa-terminal',
  },
  {
    id: SLIDE_IDS.THINKING,
    name: '思考的价值',
    icon: 'fas fa-brain',
  },
  {
    id: SLIDE_IDS.SCRCPY,
    name: 'Scrcpy-GUI',
    icon: 'fas fa-mobile-alt',
  },
  {
    id: SLIDE_IDS.ITALKING,
    name: 'ITalking',
    icon: 'fas fa-robot',
  },
  {
    id: SLIDE_IDS.PROJECTS,
    name: 'FolioSpace',
    icon: 'fas fa-layer-group',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];
