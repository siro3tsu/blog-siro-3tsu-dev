import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOgpImage } from '@core/ogImage';
import { getSortedPosts } from '@/core/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPosts();
  return posts.map((post) => {
    const frontmatter = post.data;
    const publishedDate = `${frontmatter.publishedDate.getFullYear().toString()}/${(frontmatter.publishedDate.getMonth() + 1).toString().padStart(2, '0')}/${frontmatter.publishedDate.getDate().toString().padStart(2, '0')}`;
    const updatedDate =
      frontmatter.updatedDate !== undefined
        ? `${frontmatter.updatedDate.getFullYear().toString()}/${(frontmatter.updatedDate.getMonth() + 1).toString().padStart(2, '0')}/${frontmatter.updatedDate.getDate().toString().padStart(2, '0')}`
        : undefined;
    return {
      params: { slug: post.id },
      props: { title: frontmatter.title, publishedDate, updatedDate },
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const { title, publishedDate, updatedDate } = props;

  const png = await generateOgpImage(title, publishedDate, updatedDate);

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
