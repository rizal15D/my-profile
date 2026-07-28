import { articles } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const articleLinks = articles
    .map(
      (article) =>
        `- [${article.title.id}](${absoluteUrl(`/articles/${article.slug}`)}): ${article.excerpt.id}`,
    )
    .join("\n");

  const sourceNotes = articles
    .flatMap((article) => article.references)
    .map(
      (reference) =>
        `- [${reference.title}](${reference.url}) — ${reference.authors}, ${reference.year}`,
    )
    .join("\n");

  const content = `# Muhammad Rizal — Engineering Articles

> Artikel teknis berbahasa Indonesia tentang software architecture, backend, frontend, dan API engineering. Setiap artikel menyertakan definisi langsung, trade-off, contoh, FAQ, serta sumber primer yang dapat ditelusuri.

## Artikel utama

${articleLinks}

## Tentang penulis

- [Portfolio Muhammad Rizal](${absoluteUrl("/")})
- [Indeks artikel](${absoluteUrl("/articles")})
- Muhammad Rizal adalah Fullstack Software Developer di Surabaya, Indonesia.

## Sumber primer yang dirujuk

${sourceNotes}

## Kebijakan penggunaan

- Kutip artikel dengan menyertakan judul, penulis Muhammad Rizal, dan URL kanonis.
- Verifikasi klaim akademik melalui tautan DOI atau spesifikasi primer yang tercantum pada artikel.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
