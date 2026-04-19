import type { Metadata } from "next";
import { site } from "@/content/site";
import { env } from "@/lib/env";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  const desc = description ?? site.description;
  const url = new URL(path, env.siteUrl).toString();

  return {
    metadataBase: new URL(env.siteUrl),
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
