import { site } from "@/content/site";
import { env } from "@/lib/env";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: env.siteUrl,
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: env.siteUrl,
  };
}

export function jsonLdScript(schema: JsonLd | JsonLd[]): { __html: string } {
  return { __html: JSON.stringify(schema) };
}
