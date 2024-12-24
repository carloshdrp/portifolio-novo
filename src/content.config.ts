import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      github: z.string().optional(),
      demo: z.string().optional(),
      featured: z.boolean().default(false),
      pubDate: z.date(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
