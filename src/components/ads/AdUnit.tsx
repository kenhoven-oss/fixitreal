"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type AdUnitProps = {
  publisherId: string;
  slotId: string;
  scriptSrc: string;
  placement: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One responsive AdSense display unit, requested lazily.
 *
 * - The adsbygoogle loader is attached with next/script "afterInteractive",
 *   so it never competes with the page's own JavaScript for first paint, and
 *   Next de-duplicates it when several units share a page.
 * - The ad request itself (`adsbygoogle.push({})`) waits until the unit is
 *   within ~600px of the viewport, so below-the-fold units cost nothing on
 *   pages the reader never scrolls.
 * - `<ins>` is rendered server-side (AdSense needs it in the DOM), and the
 *   wrapper in AdSlot reserves its height, so the request fills space that
 *   already exists instead of pushing content down.
 */
export function AdUnit({ publisherId, slotId, scriptSrc, placement }: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);
  const requested = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || requested.current) return;

    const request = () => {
      if (requested.current) return;
      // AdSense marks units it has already filled; never push twice.
      if (el.getAttribute("data-adsbygoogle-status")) {
        requested.current = true;
        return;
      }
      requested.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // Ad blockers throw here; the reserved box simply stays empty.
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      request();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          request();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script id="adsbygoogle-loader" src={scriptSrc} strategy="afterInteractive" crossOrigin="anonymous" />
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="false"
        data-placement={placement}
      />
    </>
  );
}
