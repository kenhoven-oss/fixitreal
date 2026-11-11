import { z } from "zod";

export const PILLARS = [
  "diy-or-hire",
  "costs",
  "advice",
  "home-inspection-repairs",
  "senior-home-safety",
  "emergency-repairs",
  "what-is-this",
] as const;
export type Pillar = (typeof PILLARS)[number];

export const articleFrontmatterSchema = z.object({
  title: z.string().min(10).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/, "slug must be lowercase-hyphenated"),
  pillar: z.enum(PILLARS),
  description: z.string().min(100).max(160),

  author: z.string(),
  reviewedBy: z.string().optional(),

  ymyl: z.boolean().default(false),

  /**
   * Target market for this article's pricing, code references, and
   * regulatory claims. Defaults to "US" (the site's primary audience).
   * Set "CA" for Canada-specific content (CAD pricing, provincial code,
   * HST/GST). Drives hreflang (alternates.languages), og:locale, and the
   * Article JSON-LD's inLanguage — without this, Canada-targeted content
   * inherits the site-wide en-US signal and Google has no reason to treat
   * it as anything but a US page competing (badly) against US queries.
   */
  region: z.enum(["US", "CA"]).default("US"),

  publishedAt: z.string().date(),
  updatedAt: z.string().date().optional(),
  readingMinutes: z.number().int().positive().max(60),

  keywords: z.array(z.string()).min(3).max(10),

  /* Pillar-specific optional fields */
  verdict: z.enum(["diy-recommended", "maybe-diy", "hire-a-pro"]).optional(),
  costLow: z.number().nonnegative().optional(),
  costHigh: z.number().nonnegative().optional(),
  relatedCost: z.string().optional(),
  relatedDecision: z.string().optional(),
  relatedAdvice: z.array(z.string()).optional(),
  /** Must be a slug from src/content/jobs.ts — validated at build. */
  relatedJob: z.string().optional(),
  /**
   * Embed the Networx quote form directly on this article (bottom of page),
   * instead of only linking to /get-quotes. Reserved for high-intent,
   * big-ticket hire-a-pro cost pages; placement test started 2026-11-11.
   */
  inlineQuoteForm: z.boolean().optional().default(false),

  /**
   * Generic cross-pillar related articles. Renders in the article's
   * auto-Related section alongside relatedDecision/relatedCost/etc.
   * Use this when linking to articles outside the four original pillars
   * (e.g. home-inspection-repairs, senior-home-safety, emergency-repairs,
   * what-is-this) or when you need to surface arbitrary cross-pillar
   * relationships beyond what the typed shortcuts express.
   *
   * Path must be an absolute site-relative path starting with "/".
   * Label is optional — falls back to a humanized slug.
   */
  related: z
    .array(
      z.object({
        path: z.string().regex(/^\/[a-z0-9/-]+$/, "must be absolute site-relative path"),
        label: z.string().min(3).max(120).optional(),
      })
    )
    .optional(),

  /* Trust requirements */
  citations: z
    .array(z.object({ label: z.string().min(3), url: z.string().url() }))
    .min(2),
  faq: z
    .array(z.object({ question: z.string().min(5), answer: z.string().min(20) }))
    .optional(),

  /**
   * Optional structured HowTo. When present on a DIY-or-hire or advice
   * article, we emit HowTo JSON-LD alongside Article so Google can render
   * a step-by-step rich result for DIY queries (the highest-CTR result
   * format for "how to <repair>" intent).
   */
  howTo: z
    .object({
      name: z.string().min(5),
      totalMinutes: z.number().int().positive().optional(),
      estimatedCostLow: z.number().nonnegative().optional(),
      estimatedCostHigh: z.number().nonnegative().optional(),
      supplies: z.array(z.string().min(2)).optional(),
      tools: z.array(z.string().min(2)).optional(),
      steps: z
        .array(
          z.object({
            name: z.string().min(3),
            text: z.string().min(20),
          })
        )
        .min(3),
    })
    .optional(),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

export function parseFrontmatter(raw: unknown): ArticleFrontmatter {
  return articleFrontmatterSchema.parse(raw);
}
