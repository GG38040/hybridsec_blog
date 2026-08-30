import type { CollectionEntry } from 'astro:content';

export function getPostSlug(post: CollectionEntry<'blog'>): string {
  return post.id.replace(/\.(md|mdx)$/i, '').toLocaleLowerCase();
}
