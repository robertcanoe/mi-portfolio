import type { APIRoute } from "astro"

const pages = [
  {
    path: "/",
    changefreq: "monthly",
    priority: "1.0",
    lastmod: "2026-05-12"
  }
]

export const GET: APIRoute = ({ url }) => {
  const origin = import.meta.env.SITE || `${url.protocol}//${url.host}`

  const urls = pages
    .map(
      (page) => `<url>
  <loc>${new URL(page.path, origin).toString()}</loc>
  <lastmod>${page.lastmod}</lastmod>
  <changefreq>${page.changefreq}</changefreq>
  <priority>${page.priority}</priority>
</url>`
    )
    .join("\n")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  })
}
