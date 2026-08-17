import { siteConfig, pathIgnoredFromSitemap } from '@site.config';

export const sitemapFilter = (page: string) =>
  !pathIgnoredFromSitemap.includes(new URL(page, siteConfig.baseUrl).pathname);
