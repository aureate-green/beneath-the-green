import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  order: z.number().optional(),
  section: z.string().optional(),
  authorNote: z.string().optional(),
  model: z.string().optional(),
  date: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const md = (name: string) => glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${name}` });

export const collections = {
  world: defineCollection({ loader: md('world'), schema: baseSchema }),
  stories: defineCollection({ loader: md('stories'), schema: baseSchema }),
  seeds: defineCollection({ loader: md('seeds'), schema: baseSchema }),
  reference: defineCollection({ loader: md('reference'), schema: baseSchema }),
};
