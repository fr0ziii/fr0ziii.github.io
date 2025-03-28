import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Removed unused 'file' import

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string(),
        tags: z.string().array(),
    }),
});

export const collections = { blog };
