import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    featuredImage: z.string().optional(),
    topic: z.enum(['science', 'space', 'national-security', 'cyber-security', 'hybrid-warfare']),
    draft: z.boolean().optional(),
    author: z.object({
      name: z.string(),
      bio: z.string(),
      avatar: z.string()
    }).optional(),
    tags: z.array(z.string()).optional()
  }),
});

// Export collections
export const collections = {
  'blog': blogCollection,
};