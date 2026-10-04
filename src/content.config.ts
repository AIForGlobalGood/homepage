import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['proposal', 'active', 'shipped', 'archived']),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    partners: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { projects, news };
