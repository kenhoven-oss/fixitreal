import type { Metadata } from "next";
import { site } from "@/content/site";
import { env } from "@/lib/env";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
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
  noIndex = false,
  type = "website",
  publishedAt,
  updatedAt,
  authorName,
  section,
  image,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = new URL(path, env.siteUrl).toString();
  const ogImage = image ? new URL(image, env.siteUrl).toString() : undefined;

  return {
    metadataBase: new URL(env.siteUrl),
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
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
