import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL: '/assets/avatar.jpeg',
  NAME: 'SimonAKing',
  GREETING: "Hey 👋, I'm SimonAKing!",
  JOB_TITLE: 'SimonAKing',
  BIO: [
    '👨‍💻 Front | Back | Left | Right | End Engineer',
    '✨ Indie Hacker | Building What People Want',
    '🤖 AI Enthusiast | Exploring AI-powered Products',
  ],
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
      url: 'mailto:hi@simonaking.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://simonaking.com',
      icon: 'fas fa-globe',
      text: '个人网站',
    },
    {
      type: 'twitter',
      url: 'https://x.com/simon_aking',
      icon: 'fab fa-twitter',
      text: 'X',
    },
    {
      type: 'wechat',
      icon: 'fab fa-weixin',
      text: '微信',
      isSpecial: true,
    },
  ] as ContactLink[],
} as const;

export const GITHUB_TOKEN = '9c48ed2297d7d9bf94476de723dbf1a6e4adeacd';