import Link from "next/link";
import { kenHoven } from "@/content/authors/ken-hoven";

type ArticleProofProps = {
  /** ISO date the article body was last reviewed. */
  lastUpdated: string;
  /** ISO date cost ranges were sanity-checked (often equals lastUpdated). */
  costDataChecked?: string;
  /** Who reviewed (defaults to Ken). */
  reviewedBy?: string;
  /** Methodology / editorial-standards link override. */
  methodologyLink?: string;
};

/**
 * Small inline "article proof" badge — surfaces freshness, who reviewed,
 * and where the methodology lives. Reinforces E-E-A-T at a glance.
 *
 * Why it matters: Google's Helpful Content guidance asks "Was the content
 * created or reviewed by an expert?" — a visible reviewer + dated review
 * answers that without overstating credentials.
 *
 * Place near the top of cost guides and YMYL articles, just under the
 * lede.
 *
 * Usage in MDX:
 *   <ArticleProof lastUpdated="2026-05-16" costDataChecked="2026-05-16" />
 */
export function ArticleProof({
  lastUpdated,
  costDataChecked,
  reviewedBy = kenHoven.name,
  methodologyLink = "/about/methodology",
}: ArticleProofProps) {
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <aside
      role="note"
      aria-label="Article proof"
      className="my-6 flex flex-col gap-2 rounded-md border border-ink-200 bg-ink-50 px-4 py-3 text-xs text-ink-700 leading-relaxed sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1"
    >
      <span>
        <span className="font-semibold text-navy-900">Last reviewed:</span>{" "}
        {fmt(lastUpdated)}
      </span>
      {costDataChecked && (
        <span>
          <span className="font-semibold text-navy-900">Cost data checked:</span>{" "}
          {fmt(costDataChecked)}
        </span>
      )}
      <span>
        <span className="font-semibold text-navy-900">Reviewed by:</span>{" "}
        <Link
          href={kenHoven.url}
          className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
        >
          {reviewedBy}
        </Link>
      </span>
      <span>
        <Link
          href={methodologyLink}
          className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
        >
          How we research costs
        </Link>
      </span>
    </aside>
  );
}
