import type { Metadata } from "next";
import { site } from "@/content/site";
import { env } from "@/lib/env";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  /**
   * Override the canonical URL. Use when this page intentionally
   * consolidates ranking signals into a different URL — for example, a
   * decision-tool page (/tools/diy-or-hire/<slug>) whose long-form
   * coverage lives at a different article URL (/diy-or-hire/<slug>).
   *
   * Must be a site-relative absolute path (starting with "/"). When
   * provided, alternates.canonical and the hreflang entries point at
   * this path; alternates.openGraph.url stays on `path` for sharing.
   */
  canonicalPath?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  section?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  canonicalPath,
  noIndex = false,
  type = "website",
  publishedAt,
  updatedAt,
  authorName,
  section,
  image,
}: BuildMetadataInput = {}): Metadata {
  // SEO: drop the " | FixItReal" suffix when the per-page title is long enough
  // to be self-identifying. Google renders the site name from og:site_name + the
  // favicon anyway, so the suffix wastes SERP pixels on long titles. Keep the
  // suffix only for short utility-page titles where it adds useful brand context.
  const fullTitle = title
    ? (title.length >= 30 ? title : `${title} | ${site.name}`)
    : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = new URL(path, env.siteUrl).toString();
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, env.siteUrl).toString()
    : url;
  // Default OG image falls back to the root /opengraph-image dynamic endpoint
  // so every page has a branded social card even without a per-route override.
  const ogImage = image
    ? new URL(image, env.siteUrl).toString()
    : new URL("/opengraph-image", env.siteUrl).toString();

  return {
    metadataBase: new URL(env.siteUrl),
    title: fullTitle,
    description: desc,
    alternates: {
      canonical: canonicalUrl,
      // Site is US-focused (cost ranges in USD, US code references, US-trade
      // rates). Declaring en-us + x-default tells Search the regional variant
      // precisely and keeps us future-proof if any international variants
      // are ever added.
      languages: {
        "en-us": canonicalUrl,
        "x-default": canonicalUrl,
      },
      types: {
        "application/rss+xml": [
          { url: new URL("/feed.xml", env.siteUrl).toString(), title: `${site.name} — RSS feed` },
        ],
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          // Allow Google Image Search; allow long snippet and large image
          // previews in SERP rich results. These flags don't change ranking
          // but they unlock Google's richest result types.
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    verification: site.verification.google
      ? { google: site.verification.google }
      : undefined,
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      locale: site.locale,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
      ...(type === "article"
        ? {
            publishedTime: publishedAt,
            modifiedTime: updatedAt,
            authors: authorName ? [authorName] : undefined,
            section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
