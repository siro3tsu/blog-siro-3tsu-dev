import { getCollection } from 'astro:content';
import removeMd from 'remove-markdown';

export async function getSortedPosts() {
  const allPosts = await getCollection('blog');
  return [...allPosts].sort((a, b) => {
    const dateA = a.data.publishedDate || new Date(0);
    const dateB = b.data.publishedDate || new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
}

export const convertToSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace('c++', 'cpp')
    .replace(/\s/g, '-')
    .replace(/#/g, 'sharp')
    .replace(/\+/g, 'plus')
    .replace(/&/g, 'and');

export const getAltDescription = (content: string | undefined) => {
  const textContent = removeMd(content || '');
  return textContent.slice(0, 100) + (textContent.length > 100 ? '...' : '');
};
