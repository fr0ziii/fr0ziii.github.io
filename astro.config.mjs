import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fr0ziii.github.io",
  output: "static",
  integrations: [
    sitemap(),
    tailwind(),
    solidJs(),
    robotsTxt({
      sitemap: [
        "https://fr0ziii.github.io/sitemap-index.xml",
        "https://fr0ziii.github.io/sitemap-0.xml",
      ],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});