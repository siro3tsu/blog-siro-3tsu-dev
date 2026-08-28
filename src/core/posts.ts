import { getCollection } from 'astro:content';
import removeMd from 'remove-markdown';
import { slugConfig } from '@site.config';

export async function getSortedPosts() {
  const allPosts = await getCollection('blog');
  return [...allPosts].sort((a, b) => {
    const dateA = a.data.publishedDate || new Date(0);
    const dateB = b.data.publishedDate || new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
}

export const convertToSlug = (tag: string) => {
  const lowerTag = tag.toLowerCase();
  return slugConfig.reduce((slug, config) => {
    return slug.replace(config.regex, config.replacement);
  }, lowerTag);
};

export const getDescription = (content: string | undefined) => {
  const textContent = removeMd(content || '');
  const description = textContent.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  return description.slice(0, 100) + (description.length > 100 ? '...' : '');
};
