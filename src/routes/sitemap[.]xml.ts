import { createFileRoute } from "@tanstack/react-router";
import { cases } from "@/data/cases";

const STATIC_PATHS = [
  "/",
  "/ai-solutions",
  "/telegram-bots",
  "/web-development",
  "/seo",
  "/cases",
  "/pricing",
  "/about",
  "/contacts",
  "/privacy",
  "/terms",
  "/cookies",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...STATIC_PATHS.map((p) => ({ loc: `${origin}${p}`, priority: p === "/" ? "1.0" : "0.8" })),
          ...cases.map((c) => ({
            loc: `${origin}/cases/${c.slug}`,
            priority: "0.7",
          })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
