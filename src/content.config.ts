// glob ローダーをインポートする
import { glob } from 'astro/loaders';
// `astro:content` からユーティリティをインポートする
import { defineCollection } from 'astro:content';
// Zod をインポートする
import { z } from 'astro/zod';
// 各コレクションの loader と schema を定義する
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    updatedDate: z.optional(z.date()),
    author: z.string(),
    image: z.optional(
      z.object({
        url: z.string(),
        alt: z.string(),
      }),
    ),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});
// コレクションを登録するため、collections オブジェクトをエクスポートする
export const collections = { blog };
