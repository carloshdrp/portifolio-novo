import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().min(10).max(200),
      cover: image(),
      tags: z.array(z.string()),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      featured: z.boolean().default(false),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
    }),
});

export const collections = { projects };
