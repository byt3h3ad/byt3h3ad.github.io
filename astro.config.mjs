import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://byt3h3ad.github.io',
  site: 'http://adhiraj.me',
  // base: '/website',
  integrations: [tailwind()],
  redirects: {
    '/resume': {
      status: 302,
      destination: 'https://drive.google.com/file/d/1Z6zYLjAf0gTjc0OF38h1PT0Az-ass93y/view'
    },
    '/blog': {
      status: 302,
      destination: 'https://bytehead.hashnode.dev/'
    }
  }
});
