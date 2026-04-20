import { site } from "@/content/site";
import { env } from "@/lib/env";
import type { BreadcrumbItem } from "@/lib/seo";
import { absoluteUrl } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

/* -------------------- Core site schemas -------------------- */

export function organizationSchema(): JsonLd {
  const sameAs = [site.social.twitter, site.social.linkedin].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: env.siteUrl,
    logo: absoluteUrl("/FIXitREALlogo.png"),
    description: site.description,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: env.siteUrl,
    description: site.description,
  };
}

/* -------------------- Person (author / expert) -------------------- */

type PersonInput = {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  description?: string;
  sameAs?: string[];
};

export function personSchema(p: PersonInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    url: absoluteUrl(p.url),
    ...(p.image ? { image: absoluteUrl(p.image) } : {}),
    ...(p.jobTitle ? { jobTitle: p.jobTitle } : {}),
    ...(p.description ? { description: p.description } : {}),
    ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
  };
}

/* -------------------- Breadcrumb -------------------- */

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/* -------------------- Article -------------------- */

type ArticleInput = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorUrl: string;
  authorName: string;
  /** Optional richer author fields for a full Person sub-graph. */
  authorImage?: string;
  authorJobTitle?: string;
  authorDescription?: string;
  authorSameAs?: string[];
  reviewerUrl?: string;
  reviewerName?: string;
  image?: string;
  articleSection?: string;
};

export function articleSchema(a: ArticleInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.url),
    url: absoluteUrl(a.url),
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: {
      "@type": "Person",
      name: a.authorName,
      url: absoluteUrl(a.authorUrl),
      ...(a.authorImage ? { image: absoluteUrl(a.authorImage) } : {}),
      ...(a.authorJobTitle ? { jobTitle: a.authorJobTitle } : {}),
      ...(a.authorDescription ? { description: a.authorDescription } : {}),
      ...(a.authorSameAs?.length ? { sameAs: a.authorSameAs } : {}),
    },
    ...(a.reviewerUrl && a.reviewerName
      ? {
          reviewedBy: {
            "@type": "Person",
            name: a.reviewerName,
            url: absoluteUrl(a.reviewerUrl),
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: env.siteUrl,
      logo: { "@type": "ImageObject", url: absoluteUrl("/FIXitREALlogo.png") },
    },
    ...(a.image ? { image: absoluteUrl(a.image) } : {}),
    ...(a.articleSection ? { articleSection: a.articleSection } : {}),
  };
}

/* -------------------- HowTo -------------------- */

type HowToStep = { name: string; text: string };

type HowToInput = {
  name: string;
  description: string;
  url: string;
  totalMinutes?: number;
  estimatedCostLow?: number;
  estimatedCostHigh?: number;
  supplies?: string[];
  tools?: string[];
  steps: HowToStep[];
};

export function howToSchema(h: HowToInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: h.name,
    description: h.description,
    url: absoluteUrl(h.url),
    ...(h.totalMinutes ? { totalTime: `PT${h.totalMinutes}M` } : {}),
    ...(h.estimatedCostLow !== undefined && h.estimatedCostHigh !== undefined
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            minValue: h.estimatedCostLow,
            maxValue: h.estimatedCostHigh,
          },
        }
      : {}),
    ...(h.supplies?.length
      ? { supply: h.supplies.map((s) => ({ "@type": "HowToSupply", name: s })) }
      : {}),
    ...(h.tools?.length
      ? { tool: h.tools.map((t) => ({ "@type": "HowToTool", name: t })) }
      : {}),
    step: h.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/* -------------------- FAQPage -------------------- */

export function faqSchema(items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

/* -------------------- CollectionPage (pillar hubs) -------------------- */

type CollectionInput = {
  name: string;
  description: string;
  url: string;
  hasPart?: Array<{ name: string; url: string }>;
};

export function collectionPageSchema(c: CollectionInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.name,
    description: c.description,
    url: absoluteUrl(c.url),
    ...(c.hasPart?.length
      ? {
          hasPart: c.hasPart.map((p) => ({
            "@type": "Article",
            name: p.name,
            url: absoluteUrl(p.url),
          })),
        }
      : {}),
  };
}

/* -------------------- WebApplication (tool) -------------------- */

type WebApplicationInput = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
};

export function webApplicationSchema(w: WebApplicationInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: w.name,
    description: w.description,
    url: absoluteUrl(w.url),
    applicationCategory: w.applicationCategory ?? "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

/* -------------------- AboutPage / ContactPage -------------------- */

export function aboutPageSchema(opts: { name: string; description: string; url: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
  };
}

export function contactPageSchema(opts: { name: string; url: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: opts.name,
    url: absoluteUrl(opts.url),
  };
}

/* -------------------- Output helper -------------------- */

export function jsonLdScript(schema: JsonLd | JsonLd[]): { __html: string } {
  return { __html: JSON.stringify(schema) };
}
