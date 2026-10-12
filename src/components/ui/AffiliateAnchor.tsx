"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type AffiliateAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** What the link is for, in FixItReal's words (the pick name). */
  productName: string;
  /** Where the link sits: "product-picks" | "buying-guide" | "inline". */
  placement: string;
};

/**
 * Plain anchor for Amazon affiliate links that also records an outbound
 * click as a Vercel Web Analytics custom event.
 *
 * ATTRIBUTION SAFETY
 * ------------------
 * This is a normal <a href> — no redirect, no rewritten URL, no delayed
 * navigation. The click is reported asynchronously and the browser follows
 * the original amzn.to / tagged search link untouched, so the Associates tag
 * reaches Amazon exactly as written. If analytics is blocked or the plan
 * does not support custom events, `track` is a silent no-op.
 */
export function AffiliateAnchor({
  href,
  productName,
  placement,
  onClick,
  children,
  rel = "sponsored nofollow noopener noreferrer",
  target = "_blank",
  ...rest
}: AffiliateAnchorProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      track("affiliate_click", {
        product: productName.slice(0, 100),
        placement,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        host: href.includes("amzn.to") ? "amzn.to" : "amazon-search",
      });
    } catch {
      /* analytics must never break the link */
    }
    onClick?.(e);
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
