import type { MetadataRoute } from "next";

import { articles } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(`/articles/${article.slug}`),
    lastModified: article.modifiedAt,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(`/articles/${article.slug}/opengraph-image`)],
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/articles"),
      lastModified: articles[0]?.modifiedAt ?? new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
