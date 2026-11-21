"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { calculatorSlugFromHref } from "@/lib/funnel-events";

/**
 * Site-wide click listener that records clicks on links to Home Repair
 * Planner calculators as a `calculator_click` event. One delegated listener
 * covers every article without touching the link components. Renders nothing.
 */
export function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const calculator = calculatorSlugFromHref(anchor.href);
      if (!calculator) return;
      try {
        track("calculator_click", { calculator, page: window.location.pathname });
      } catch {
        /* analytics must never break the link */
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
