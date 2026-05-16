import { loadAllArticles } from "@/lib/articles-loader";
import { env } from "@/lib/env";
import { site } from "@/content/site";
import { kenHoven } from "@/content/authors/ken-hoven";

/**
 * RSS 2.0 feed for FixItReal articles. Two reasons to ship this:
 *
 * 1. Feed readers (Feedly, NetNewsWire, etc.) — bringing back direct readers
 *    who don't want to rely on social discovery.
 * 2. Crawler discovery — Google can pull from RSS for faster indexing of
 *    new content, especially useful for an editorial site.
 */
export const revalidate = 3600; // 1h

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = await loadAllArticles();
  const items = articles.slice(0, 50); // newest first; cap at 50

  const feedUrl = `${env.siteUrl}/feed.xml`;
  const buildDate = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(site.name)} — ${escapeXml(site.tagline)}</title>
    <link>${env.siteUrl}</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(site.description)}</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(site.name)}</copyright>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>FixItReal (Next.js)</generator>
    <image>
      <url>${env.siteUrl}/FIXitREALlogo.png</url>
      <title>${escapeXml(site.name)}</title>
      <link>${env.siteUrl}</link>
    </image>
${items
  .map((a) => {
    const url = `${env.siteUrl}${a.path}`;
    const pubDate = new Date(
      a.frontmatter.publishedAt
    ).toUTCString();
    return `    <item>
      <title>${escapeXml(a.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.frontmatter.description)}</description>
      <dc:creator>${escapeXml(kenHoven.name)}</dc:creator>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600",
    },
  });
}
