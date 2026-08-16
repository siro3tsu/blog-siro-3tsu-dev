import { siteConfig } from '@site.config';

export const sitemapFilter = (page: string) =>
  page !== siteConfig.baseUrl + '/privacy/' && page !== siteConfig.baseUrl + '/terms/';
