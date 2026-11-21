/**
 * Helpers for the quote-funnel analytics events (Vercel Web Analytics custom
 * events). Event properties are limited to page paths, placement labels and
 * calculator slugs — never anything a visitor typed. The Networx form itself
 * is a cross-origin iframe, so nothing entered in it is readable here anyway.
 *
 * Events:
 *   quote_cta_click     a link or button that leads to a quote form was clicked
 *   quote_form_view     a quote form was at least half visible on screen
 *   quote_form_loaded   Networx's iframe was inserted into the page
 *   quote_form_interact the visitor clicked or tapped inside the Networx form
 *   calculator_click    a link to a Home Repair Planner calculator was clicked
 *
 * There is deliberately no "lead submitted" event: the embedded form gives
 * the page no confirmation signal, so submitted and accepted leads are only
 * reported in the Networx dashboard.
 */

const CALCULATOR_HOSTS = new Set(["homerepairplanner.com", "www.homerepairplanner.com"]);

/** Slug of the Home Repair Planner calculator an href points at, or null. */
export function calculatorSlugFromHref(href: string | null | undefined): string | null {
  if (!href) return null;
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (!CALCULATOR_HOSTS.has(url.hostname.toLowerCase())) return null;
  const match = /^\/calculators\/([a-z0-9-]+)\/?$/.exec(url.pathname);
  return match ? match[1] : null;
}
