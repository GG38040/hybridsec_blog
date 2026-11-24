import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostSlug } from '../utils/posts';

export async function GET(context) {
  const blog = (await getCollection('blog', ({ data }) => data.draft !== true))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: 'HybridSec | Security, Science, and Technology Analysis',
    description: 'Expert analysis on science, space, and global security challenges that shape our future.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${getPostSlug(post)}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
