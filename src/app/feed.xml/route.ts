import { articles } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = articles
    .map((article) => {
      const url = absoluteUrl(`/articles/${article.slug}`);

      return `<item>
  <title>${escapeXml(article.title.id)}</title>
  <link>${escapeXml(url)}</link>
  <guid isPermaLink="true">${escapeXml(url)}</guid>
  <description>${escapeXml(article.excerpt.id)}</description>
  <category>${escapeXml(article.category.id)}</category>
  <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
  <dc:creator>Muhammad Rizal</dc:creator>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <title>Muhammad Rizal — Engineering Articles</title>
  <link>${escapeXml(absoluteUrl("/articles"))}</link>
  <description>Panduan tentang CQRS, API contract, dan integrasi backend–frontend.</description>
  <language>id-ID</language>
  <lastBuildDate>${new Date(
    articles[0]?.modifiedAt ?? Date.now(),
  ).toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
