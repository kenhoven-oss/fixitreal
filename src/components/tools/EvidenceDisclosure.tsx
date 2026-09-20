import Link from "next/link";
import { kenHoven } from "@/content/authors/ken-hoven";

export type EvidenceBasis = "hands-on-tested" | "personally-used" | "editorial-research";

export type EvidenceDisclosureProps = {
  /** How the picks were arrived at. Exactly one of the three site-wide labels. */
  basis: EvidenceBasis;
  /** Who did the evaluation. Defaults to the site author. */
  evaluatedBy?: { name: string; url: string };
  /** ISO date the picks and links were last checked. */
  lastChecked: string;
  /** What the evaluation drew on — specifications, standards, owner reports, etc. */
  sources: string[];
  /** Whether any product link on the page is an affiliate link. */
  hasAffiliateLinks: boolean;
};

const LABEL: Record<EvidenceBasis, { title: string; body: string }> = {
  "hands-on-tested": {
    title: "Hands-on tested",
    body: "We bought or borrowed these units and used them on real jobs. Measurements and photos in the guide are ours.",
  },
  "personally-used": {
    title: "Personally used",
    body: "The author has used the recommended products in his own home or on his own repairs, but did not run a controlled comparison against the alternatives.",
  },
  "editorial-research": {
    title: "Editorial research only",
    body: "No unit on this page was tested by us. Picks come from the sources listed below and the author's repair experience — not from lab testing of each product.",
  },
};

/**
 * The standardized evidence disclosure that every buying guide carries.
 *
 * WHY
 * ---
 * The homepage promises that every buying guide says whether its picks
 * were tested or researched. This block is what makes that true: one of
 * three fixed labels, who evaluated, when it was last checked, what it
 * drew on, and whether affiliate links are present. It is rendered by
 * RecommendedProductsSection so a guide cannot ship without it.
 */
export function EvidenceDisclosure({
  basis,
  evaluatedBy = { name: kenHoven.name, url: kenHoven.url },
  lastChecked,
  sources,
  hasAffiliateLinks,
}: EvidenceDisclosureProps) {
  const l = LABEL[basis];
  const checked = new Date(lastChecked + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <aside
      role="note"
      aria-label="How these picks were evaluated"
      className="mt-3 rounded-md border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-700 leading-relaxed"
    >
      <p>
        <span className="mr-2 inline-block rounded bg-navy-900 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          {l.title}
        </span>
        {l.body}
      </p>
      <dl className="mt-2 grid gap-x-4 gap-y-1 text-xs sm:grid-cols-[auto_1fr]">
        <dt className="font-semibold text-navy-900">Evaluated by</dt>
        <dd>
          <Link href={evaluatedBy.url} className="underline decoration-amber-500 hover:text-navy-900">
            {evaluatedBy.name}
          </Link>
        </dd>
        <dt className="font-semibold text-navy-900">Last checked</dt>
        <dd>{checked}</dd>
        <dt className="font-semibold text-navy-900">Sources used</dt>
        <dd>{sources.join("; ")}.</dd>
        <dt className="font-semibold text-navy-900">Affiliate links</dt>
        <dd>
          {hasAffiliateLinks ? (
            <>
              Yes — product links on this page are Amazon affiliate links; we may earn a commission at no extra cost to you.{" "}
              <Link href="/affiliate-disclosure" className="underline decoration-amber-500 hover:text-navy-900">
                How that works
              </Link>
              .
            </>
          ) : (
            "None on this page."
          )}
        </dd>
      </dl>
    </aside>
  );
}
