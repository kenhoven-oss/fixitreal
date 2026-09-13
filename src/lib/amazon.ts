/**
 * Amazon Associates helpers.
 *
 * WHY THIS EXISTS
 * ---------------
 * Every affiliate link on the site used to be an `amzn.to` SiteStripe short
 * link pasted by hand from docs/product-links.csv. Those are fine — they
 * carry the tag inside the shortener — but they can only be created by a
 * human logged into Associates. They cannot be written by tooling, and a
 * guessed one either 404s or, worse, credits somebody else.
 *
 * So: any product that does not already have a verified SiteStripe link on
 * FixItReal gets a *search* Special Link instead. It is a legitimate
 * Associates link format, it is honest (we are pointing at a category, not
 * claiming to have picked a specific unit), and it is impossible to
 * fabricate wrongly because the tag is appended here rather than typed.
 *
 * Replace a search link with a SiteStripe link whenever one is added to
 * docs/product-links.csv — the search form is the floor, not the target.
 */

/** The site's Amazon Associates tracking ID. Single source of truth. */
export const AMAZON_TAG = "fixitreal-20";

/**
 * Build a tagged Amazon search Special Link for a product category.
 *
 * @param query Plain search terms, e.g. "25 ft drain auger hand crank".
 */
export function amazonSearch(query: string): string {
  const k = encodeURIComponent(query.trim().replace(/\s+/g, " "));
  return `https://www.amazon.com/s?k=${k}&tag=${AMAZON_TAG}`;
}

/** True for any URL that is an affiliate link we control. */
export function isAffiliateUrl(href: string): boolean {
  return (
    /^https?:\/\/amzn\.to\//i.test(href) ||
    /amazon\.[a-z.]+\/.+[?&]tag=/i.test(href)
  );
}
