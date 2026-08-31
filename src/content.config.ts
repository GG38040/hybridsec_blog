import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featuredImage: z.string().optional(),
    topic: z.enum(['science', 'space', 'national-security', 'cyber-security', 'hybrid-warfare']),
    draft: z.boolean().default(false),
    articleImagesOnly: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      bio: z.string(),
      avatar: z.string()
    }).optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
