"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { MouseEvent, ReactNode } from "react";

type QuoteCtaLinkProps = {
  /** Where this CTA sits, e.g. "article-costs", "metro", "hub-home". */
  placement: string;
  className?: string;
  children: ReactNode;
};

/**
 * Internal link to /get-quotes that records the click as a Vercel Web
 * Analytics custom event.
 *
 * Without this, every entry point into the quote funnel is invisible: the
 * Networx dashboard reports submitted leads but not which page or which CTA
 * design sent the visitor, so there is no way to tell a placement that earns
 * its space from one that does not. `placement` plus the page path is what
 * makes that comparison possible.
 *
 * Navigation is a normal next/link client transition; `track` is fired
 * synchronously before it and is a silent no-op when analytics is blocked or
 * unavailable, so a failure here can never block the link.
 */
export function QuoteCtaLink({ placement, className = "", children }: QuoteCtaLinkProps) {
  const handleClick = (_e: MouseEvent<HTMLAnchorElement>) => {
    try {
      track("quote_cta_click", {
        placement,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } catch {
      /* analytics must never break the link */
    }
  };

  return (
    <Link href="/get-quotes" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
