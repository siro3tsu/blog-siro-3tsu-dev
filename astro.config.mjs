// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { siteConfig } from '@site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { rawFonts } from '@core/rawFonts';
import { sitemapFilter } from '@core/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from 'rehype-mermaid';
import rehypeSlug from 'rehype-slug';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import expressiveCode from 'astro-expressive-code';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({ imageService: 'compile' }),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans JP',
      cssVariable: '--font-noto-sans-jp',
    },
  ],
  vite: {
    plugins: [tailwindcss(), rawFonts()],
  },
  markdown: {
    syntaxHighlight: {
      excludeLangs: ['mermaid'],
    },
    processor: unified({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutoLinkHeadings,
          {
            behavior: 'append',
            properties: {
              className: [
                'not-prose',
                'absolute',
                'top-1/2',
                '-translate-y-1/2',
                'ml-1',
                'text-gray-600',
                'hover:text-gray-800',
                'dark:text-gray-400',
                'dark:hover:text-gray-200',
                'text-xl',
                'opacity-0',
                'touch:opacity-100',
                'transition-opacity',
                'duration-300',
              ],
            },
            content: {
              type: 'element',
              tagName: 'span',
              properties: { className: ['icon-[mdi--link-variant]'] },
              children: [],
            },
          },
        ],
        [
          rehypeMermaid,
          {
            strategy: 'img-svg',
            mermaidConfig: {
              theme: 'base', // ライト用のmermaidテーマ
            },
            dark: {
              theme: 'dark', // ダーク用のmermaidテーマ
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer'],
          },
        ],
      ],
    }),
  },
  integrations: [
    sitemap({ filter: sitemapFilter }),
    react(),
    expressiveCode({ themes: siteConfig.expressiveCodeTheme, emitExternalStylesheet: true }),
    mdx(),
  ],
});
