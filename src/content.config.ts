import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
const blog = defineCollection({
  loader: glob({
    pattern: '**/README.mdx',
    base: './posts',
    generateId(options) {
      const match = options.entry.match(/^(\d{4}-\d{2}-\d{2})-(.+)\/README\.mdx$/);
      if (match) {
        const slug = match[2];
        const date = new Date(match[1]);
        if (!isNaN(date.getTime())) {
          options.data.publishedDate = date;
        }
        return slug;
      } else {
        throw new Error(`Invalid entry format: ${options.entry}`);
      }
    },
  }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    updatedDate: z.optional(z.date()),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});
export const collections = { blog };
