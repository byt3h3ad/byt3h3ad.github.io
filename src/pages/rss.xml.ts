import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
    );
  return rss({
    title: `${SITE.NAME}'s Ramblings`,
    description: "A curious nerd exploring the cosmos.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.collection}/${post.slug}/`,
    })),
  });
}
