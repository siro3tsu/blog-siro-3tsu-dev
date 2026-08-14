// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({imageService: 'compile'}),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({filter: (page) => page !== 'https://siro.3tsu.dev/privacy/' && page !== 'https://siro.3tsu.dev/terms/' && page !== 'https://siro.3tsu.dev/email/'})],
});