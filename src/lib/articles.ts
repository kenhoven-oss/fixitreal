import { z } from "zod";

export const PILLARS = [
  "diy-or-hire",
  "costs",
  "advice",
  "home-inspection-repairs",
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
  relatedJob: z.string().optional(),

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
