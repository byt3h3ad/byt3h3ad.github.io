import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://byt3h3ad.github.io',
  site: 'http://adhiraj.me',
  // base: '/website',
  integrations: [tailwind()]
});
