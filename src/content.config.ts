// glob ローダーをインポートする
import { glob } from 'astro/loaders';
// `astro:content` からユーティリティをインポートする
import { defineCollection } from 'astro:content';
// Zod をインポートする
import { z } from 'astro/zod';
// 各コレクションの loader と schema を定義する
const blog = defineCollection({
  loader: glob({
    pattern: '**/README.mdx',
    base: './posts',
    generateId(options) {
      // yyyy-mm-dd-slug形式のフォルダ名からregexで日付とslugを抽出する
      const match = options.entry.match(/^(\d{4}-\d{2}-\d{2})-(.+)\/README\.mdx$/);
      if (match) {
        const slug = match[2];
        // 日付が無効でないなら日付をpublishedDateとして設定する
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
// コレクションを登録するため、collections オブジェクトをエクスポートする
export const collections = { blog };
