import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL: 'https://avatars.githubusercontent.com/u/31370133?v=4',
  NAME: 'SimonAKing',
  REAL_NAME: 'SimonAKing',
  JOB_TITLE: '全栈开发工程师 · 项目作品集',
  BIO: '专注于现代Web技术栈，热爱开源和技术分享',
  WECHAT_ID: 'SimonAKing',

  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/SimonAKing',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'mailto:hello@simonaking.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'blog',
      url: 'https://simonaking.com/blog',
      icon: 'fas fa-blog',
      text: '博客',
    },
    {
      type: 'twitter',
      url: 'https://x.com/simonaking',
      icon: 'fab fa-x-twitter',
      text: 'X (Twitter)',
    },
    {
      type: 'telegram',
      url: 'https://t.me/simonaking',
      icon: 'fab fa-telegram',
      text: 'Telegram',
    },
    {
      type: 'wechat',
      icon: 'fab fa-weixin',
      text: '微信',
      isSpecial: true,
    },
  ] as ContactLink[],
} as const;
