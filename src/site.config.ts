import siro3tsuAvatar from './images/avatar.png';

export const siteConfig: {
  baseUrl: string;
  siteName: string;
  xAccount?: string;
  defaultDescription: string;
  defaultOgImage: string;
  postsPerPage: number;
} = {
  baseUrl: 'https://blog.siro.3tsu.dev',
  siteName: "しろみつ's Blog",
  xAccount: 'siro3tsu',
  defaultDescription: 'しろみつのブログです。技術的なことや日常のことなどを書いていきます。',
  defaultOgImage: 'https://blog.siro.3tsu.dev/og-image.png',
  postsPerPage: 1,
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
    label: 'Category',
    href: '/category/',
  },
  {
    label: 'Tags',
    href: '/tags/',
  },
];

export const authorConfig: {
  id: string;
  name: string;
  avatar: ImageMetadata;
}[] = [
  {
    id: 'siro3tsu',
    name: 'しろみつ',
    avatar: siro3tsuAvatar,
  },
];
