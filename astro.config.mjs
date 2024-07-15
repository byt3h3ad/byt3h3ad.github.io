import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: 'https://byt3h3ad.github.io',
  site: "http://adhiraj.me",
  // base: '/website',
  integrations: [tailwind(), mdx(), sitemap()],
  redirects: {
    "/Resume": {
      status: 302,
      destination:
        "https://drive.google.com/file/d/1Z6zYLjAf0gTjc0OF38h1PT0Az-ass93y/view",
    },
    "/resume": {
      status: 302,
      destination:
        "https://drive.google.com/file/d/1Y0mkUytuV1nXixLeiftlb_1rPFtN4tfw/view?usp=sharing",
    },
    "/links": {
      status: 302,
      destination: "https://bento.me/bytehead",
    },
  },
});
