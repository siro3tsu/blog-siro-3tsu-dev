import siro3tsuAvatar from '@assets/img/avatar.png';
import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code';

export const siteConfig: {
  baseUrl: string;
  siteName: string;
  xAccount?: string;
  defaultDescription: string;
  defaultOgImagePath: string;
  postsPerPage: number;
  expressiveCodeTheme: ThemeObjectOrShikiThemeName[];
} = {
  baseUrl: 'https://blog.siro.3tsu.dev',
  siteName: "しろみつ's Blog",
  xAccount: 'siro3tsu',
  defaultDescription: 'しろみつのブログです。技術的なことや日常のことなどを書いていきます。',
  defaultOgImagePath: '/og-image.png',
  postsPerPage: 10,
  expressiveCodeTheme: ['dark-plus', 'light-plus'],
};

export const pathIgnoredFromSitemap = ['/privacy/', '/terms/'];

export const headerItems: {
  label: string;
  href: string;
}[] = [
  {
    label: 'Archive',
    href: '/archive/',
  },
  {
    label: 'Tags',
    href: '/tags/',
  },
];

export const authorConfig: {
  id: string;
  name: string;
  bio: string;
  avatar: ImageMetadata;
  socialLinks: { name: string; userId: string; url?: string; iconClass: string }[];
}[] = [
  {
    id: 'siro3tsu',
    name: 'しろみつ',
    bio: 'プログラミングが趣味の日本の高校生です。',
    avatar: siro3tsuAvatar,
    socialLinks: [
      {
        name: 'GitHub',
        userId: 'siro3tsu',
        url: 'https://github.com/siro3tsu/',
        iconClass: 'icon-[simple-icons--github]',
      },
      { name: 'X', userId: '@siro3tsu', url: 'https://x.com/siro3tsu/', iconClass: 'icon-[simple-icons--x]' },
      {
        name: 'Bluesky',
        userId: '@siro.3tsu.dev',
        url: 'https://bsky.app/profile/siro.3tsu.dev/',
        iconClass: 'icon-[simple-icons--bluesky]',
      },
      {
        name: 'Discord',
        userId: 'siro3tsu',
        iconClass: 'icon-[simple-icons--discord]',
      },
      {
        name: 'Signal',
        userId: '@siro.32',
        iconClass: 'icon-[simple-icons--signal]',
      },
      {
        name: 'Session',
        userId: '05fa5d055317428f1809a00c96236efd8be3ecbbab7d726a933e1e05e8e0f7ec64',
        iconClass: 'icon-[simple-icons--session]',
      },
      {
        name: 'Email',
        userId: 'Email Page',
        url: 'https://siro.3tsu.dev/email/',
        iconClass: 'icon-[simple-icons--tuta]',
      },
    ],
  },
];

export const slugConfig: { regex: RegExp; replacement: string }[] = [
  {
    regex: /c\+\+/g,
    replacement: 'cpp',
  },
  {
    regex: /c#/g,
    replacement: 'csharp',
  },
  {
    regex: /\s/g,
    replacement: '-',
  },
];
