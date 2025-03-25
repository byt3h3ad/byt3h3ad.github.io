import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { SITE } from "./src/consts";
import { remarkModifiedTime } from "./src/lib/modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  // site: 'https://byt3h3ad.github.io',
  site: SITE.URL,
  // base: '/website',
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  integrations: [tailwind(), mdx(), sitemap()],
});
