import type { APIRoute } from 'astro';

const getRobotsTxt = async (sitemapURL: URL) => {
  const request = await fetch('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt');
  const robotsTxt = await request.text();

  return `# Pulled from https://github.com/ai-robots-txt/ai.robots.txt
# ${new Date().toUTCString()}

${robotsTxt}

Sitemap: ${sitemapURL.href}
`;
};

export const GET: APIRoute = async ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  const robotsTxt = await getRobotsTxt(sitemapURL);
  return new Response(robotsTxt);
};
