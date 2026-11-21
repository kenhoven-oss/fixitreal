"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { track } from "@vercel/analytics";
import { NETWORX_FORM_DEFAULT_HEIGHT, networxConfig, networxEmbedSrc } from "@/lib/networx";

type NetworxQuoteFormProps = {
  /** Override the default form (e.g. a trade-specific form ID from the Networx dashboard). */
  formId?: string;
  /**
   * Height of the embed container in px. Networx's standard embed is 435.
   * On screens up to 480px wide the container is a fixed 480px instead: the
   * form's heading wraps there and the iframe cannot scroll, so 435px clips
   * the bottom of the form (measured at a 326px-wide container, 2026-11-20).
   */
  height?: number;
  /** Label used for analytics/debugging only; never sent to Networx. */
  placement?: string;
  className?: string;
};

/**
 * Networx embedded quote-request form.
 *
 * Reproduces Networx's standard embed exactly — a `#nx_form` container plus
 * their loader script — but injects the script on mount so the form also
 * renders after client-side navigation (a static <script> tag would only
 * execute on the first full page load). Networx's loader looks up
 * `document.getElementById("nx_form")`, empties it, and appends an <iframe>
 * of their hosted form; the homeowner's details are typed into that iframe
 * and go to Networx directly. Only one form can be on a page because the
 * loader keys off that fixed element id.
 *
 * When the form is not configured (no affiliate/form ID in the environment)
 * this renders a clearly labelled placeholder instead of an empty box, so
 * preview deployments can be reviewed before go-live.
 */
export function NetworxQuoteForm({
  formId,
  height = NETWORX_FORM_DEFAULT_HEIGHT,
  placement = "get-quotes",
  className = "",
}: NetworxQuoteFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const src = networxEmbedSrc(networxConfig, formId);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return;

    // Networx's loader reads the container by id and then *renames* it to the
    // affiliate ID, so reset the id on every mount before loading.
    container.id = "nx_form";
    container.innerHTML = "";

    const load = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.async = true;
      script.dataset.placement = placement;
      container.appendChild(script);
    };

    // Load Networx's script only when the form is close to the viewport. On
    // articles the form sits below the content, so the third-party script and
    // iframe stay out of the initial page load (Core Web Vitals); on
    // /get-quotes the form is near the top and loads immediately.
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === "undefined") {
      load();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            load();
          }
        },
        { rootMargin: "800px 0px" },
      );
      observer.observe(container);
    }

    // Funnel analytics (see src/lib/funnel-events.ts). Properties are the
    // placement label and page path only; nothing typed into Networx's
    // cross-origin iframe is readable from this page.
    const sent = new Set<string>();
    const send = (name: string) => {
      if (sent.has(name)) return;
      sent.add(name);
      try {
        track(name, { placement, page: window.location.pathname });
      } catch {
        /* analytics must never affect the form */
      }
    };

    let viewObserver: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      viewObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            viewObserver?.disconnect();
            send("quote_form_view");
          }
        },
        { threshold: 0.5 },
      );
      viewObserver.observe(container);
    }

    let frameObserver: MutationObserver | undefined;
    if (typeof MutationObserver !== "undefined") {
      frameObserver = new MutationObserver(() => {
        if (container.querySelector("iframe")) {
          frameObserver?.disconnect();
          send("quote_form_loaded");
        }
      });
      frameObserver.observe(container, { childList: true, subtree: true });
    }

    // A click or tap inside a cross-origin iframe moves focus into it, which
    // the parent page sees as a window blur with the iframe as activeElement.
    const onBlur = () => {
      const active = document.activeElement;
      if (active instanceof HTMLIFrameElement && container.contains(active)) {
        send("quote_form_interact");
      }
    };
    window.addEventListener("blur", onBlur);

    return () => {
      observer?.disconnect();
      viewObserver?.disconnect();
      frameObserver?.disconnect();
      window.removeEventListener("blur", onBlur);
      container.innerHTML = "";
      container.id = "nx_form";
    };
  }, [src, placement]);

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-ink-300 bg-white px-6 text-center text-sm text-ink-600 ${className}`}
        style={{ height }}
        role="status"
        aria-label="Quote request form not yet active"
      >
        <p>
          <strong className="block text-ink-800">Quote request form</strong>
          The contractor quote form appears here once our referral partner activates the account. Until then, use the
          hiring checklist below to collect quotes directly.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="nx_form"
      className={`h-[var(--nx-form-height)] w-full overflow-hidden rounded-lg border border-ink-200 bg-white max-[480px]:h-[480px] ${className}`}
      style={{ "--nx-form-height": `${height}px` } as CSSProperties}
      aria-label="Request contractor quotes"
    />
  );
}
