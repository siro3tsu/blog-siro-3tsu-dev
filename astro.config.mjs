// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import { sitemapFilter } from './src/core/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({imageService: 'compile'}),
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({filter: sitemapFilter}), mdx(), react()],
});