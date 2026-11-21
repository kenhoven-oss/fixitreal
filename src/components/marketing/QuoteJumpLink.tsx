"use client";

import { track } from "@vercel/analytics";

type QuoteJumpLinkProps = {
  /** Where this link sits, e.g. "advice-jump". */
  placement: string;
};

/**
 * One-line link from the end of an article body down to the quote form on
 * the same page (`#quote-form`, rendered by InlineQuoteSection). The form
 * sits below the FAQ, a long way down on a phone; this gives a reader who
 * has decided to hire the job out a way to reach it. Kept to a single plain
 * sentence — copy here is governed by the Networx MSA Exhibit A (phrase list
 * in scripts/check-networx-copy.mjs).
 */
export function QuoteJumpLink({ placement }: QuoteJumpLinkProps) {
  const handleClick = () => {
    try {
      track("quote_cta_click", { placement, page: window.location.pathname });
    } catch {
      /* analytics must never break the link */
    }
  };

  return (
    <p className="mt-8 text-ink-700">
      Hiring this job out?{" "}
      <a
        href="#quote-form"
        onClick={handleClick}
        className="text-navy-700 hover:text-navy-900 underline decoration-amber-500 decoration-[1.5px] underline-offset-[3px]"
      >
        Request quotes from local contractors
      </a>{" "}
      at the end of this page.
    </p>
  );
}
