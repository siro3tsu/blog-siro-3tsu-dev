// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from '@site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { rawFonts } from '@core/rawFonts';
import { sitemapFilter } from '@core/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({ imageService: 'compile' }),

  vite: {
    plugins: [tailwindcss(), rawFonts()],
  },

  integrations: [sitemap({ filter: sitemapFilter }), mdx(), react()],
});
