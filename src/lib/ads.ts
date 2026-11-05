/**
 * Google AdSense configuration — the single source of truth for whether
 * advertising code renders anywhere on the site.
 *
 * Everything is driven by environment variables so that nothing about ads
 * is hardcoded and nothing is active by default. With no variables set,
 * every export below resolves to "off" and the ad components render
 * nothing at all (no script, no containers, no reserved space).
 *
 * Variables (all NEXT_PUBLIC_ because the ad units render client-side):
 *
 *   NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
 *     The publisher ID AdSense issues after sign-up, in the form
 *     "ca-pub-" followed by 16 digits. Nothing ad-related renders without
 *     a well-formed value. Never commit a value to the repo; set it in the
 *     Vercel dashboard (Settings -> Environment Variables).
 *
 *   NEXT_PUBLIC_ADSENSE_VERIFICATION  ("off" | "meta" | "script"; default "off")
 *     Ownership verification for the AdSense application review. This is
 *     independent of advertising: it can be on while ads stay off.
 *       meta   -> <meta name="google-adsense-account" content="ca-pub-..."> on
 *                 every page (Google's lightest verification method).
 *       script -> the AdSense code snippet (async adsbygoogle.js) in the
 *                 <head> of every page, which is what Google calls the
 *                 "AdSense code snippet" method. No ad units render.
 *
 *   NEXT_PUBLIC_ADS_ENABLED  ("true" | anything else; default off)
 *     The master switch for live advertising. Only honoured when the
 *     publisher ID is well-formed. When on, eligible pages (see
 *     src/lib/ad-policy.ts) load the AdSense script and render ad slots.
 *
 *   NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE
 *     The numeric ad-unit ID ("data-ad-slot") of a responsive display ad
 *     unit created in AdSense (Ads -> By ad unit -> Display ads). Used for
 *     every in-article placement; AdSense permits the same unit to appear
 *     more than once on a page. Without it, in-article slots render nothing
 *     even when ads are enabled.
 *
 * /ads.txt (src/app/ads.txt/route.ts) is served whenever the publisher ID
 * is configured, regardless of the other switches.
 */

export const PUBLISHER_ID_PATTERN = /^ca-pub-\d{16}$/;
export const AD_SLOT_ID_PATTERN = /^\d{6,}$/;

export const ADSENSE_SCRIPT_BASE =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

export type AdsVerificationMode = "off" | "meta" | "script";

export type AdsConfig = {
  /** Validated publisher ID (e.g. "ca-pub-1234567890123456") or null. */
  publisherId: string | null;
  /** Ownership-verification mode for the AdSense review. */
  verification: AdsVerificationMode;
  /** True only when the master switch is on AND the publisher ID is valid. */
  adsEnabled: boolean;
  /** Ad-unit IDs for each placement family. null = not configured. */
  slots: {
    inArticle: string | null;
  };
  /** Full src for the adsbygoogle loader, or null without a publisher ID. */
  scriptSrc: string | null;
  /** Whether the AdSense script belongs in the <head> of every page. */
  loadScriptSiteWide: boolean;
  /** Whether the google-adsense-account meta tag belongs on every page. */
  renderMetaTag: boolean;
};

function parsePublisherId(raw: string | undefined): string | null {
  const value = raw?.trim() ?? "";
  if (!value) return null;
  if (!PUBLISHER_ID_PATTERN.test(value)) {
    // Loud but non-fatal: a typo should never silently disable or enable ads.
    console.warn(
      `[ads] NEXT_PUBLIC_ADSENSE_PUBLISHER_ID "${value}" is not in the form ca-pub-<16 digits>; ignoring it.`
    );
    return null;
  }
  return value;
}

function parseSlotId(raw: string | undefined, name: string): string | null {
  const value = raw?.trim() ?? "";
  if (!value) return null;
  if (!AD_SLOT_ID_PATTERN.test(value)) {
    console.warn(`[ads] ${name} "${value}" is not a numeric AdSense ad-unit ID; ignoring it.`);
    return null;
  }
  return value;
}

function parseVerification(raw: string | undefined): AdsVerificationMode {
  const value = (raw ?? "off").trim().toLowerCase();
  if (value === "meta" || value === "script") return value;
  if (value !== "off" && value !== "" && value !== "false") {
    console.warn(
      `[ads] NEXT_PUBLIC_ADSENSE_VERIFICATION "${raw}" is not one of off|meta|script; treating as off.`
    );
  }
  return "off";
}

/**
 * Build the config from an environment-shaped object. Exported so the unit
 * tests can exercise every combination without touching process.env.
 */
export function buildAdsConfig(
  envLike: Record<string, string | undefined>
): AdsConfig {
  const publisherId = parsePublisherId(envLike.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID);
  const wantsAds = (envLike.NEXT_PUBLIC_ADS_ENABLED ?? "").trim().toLowerCase() === "true";
  const verificationRequested = parseVerification(envLike.NEXT_PUBLIC_ADSENSE_VERIFICATION);

  if (wantsAds && !publisherId) {
    console.warn(
      "[ads] NEXT_PUBLIC_ADS_ENABLED=true but no valid NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is set; ads stay off."
    );
  }
  if (verificationRequested !== "off" && !publisherId) {
    console.warn(
      `[ads] NEXT_PUBLIC_ADSENSE_VERIFICATION=${verificationRequested} needs a valid publisher ID; verification stays off.`
    );
  }

  const verification: AdsVerificationMode = publisherId ? verificationRequested : "off";
  const adsEnabled = wantsAds && publisherId !== null;

  return {
    publisherId,
    verification,
    adsEnabled,
    slots: {
      inArticle: parseSlotId(
        envLike.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE,
        "NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE"
      ),
    },
    scriptSrc: publisherId
      ? `${ADSENSE_SCRIPT_BASE}?client=${encodeURIComponent(publisherId)}`
      : null,
    // Site-wide <head> script only for the "script" verification method.
    // Live ads load the script per page from the AdSlot component instead,
    // so pages with no slots (home, calculators, policies) never fetch it.
    loadScriptSiteWide: publisherId !== null && verification === "script",
    renderMetaTag: publisherId !== null && (verification === "meta" || adsEnabled),
  };
}

/**
 * The live config. NEXT_PUBLIC_* values are inlined at build time by Next,
 * so each must be referenced as a literal property access (no dynamic
 * `process.env[key]`) for the client bundle to see them.
 */
export const adsConfig: AdsConfig = buildAdsConfig({
  NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID,
  NEXT_PUBLIC_ADSENSE_VERIFICATION: process.env.NEXT_PUBLIC_ADSENSE_VERIFICATION,
  NEXT_PUBLIC_ADS_ENABLED: process.env.NEXT_PUBLIC_ADS_ENABLED,
  NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE,
});

/** "ca-pub-123" -> "pub-123", the form ads.txt uses. */
export function adsTxtPublisherId(publisherId: string): string {
  return publisherId.replace(/^ca-/, "");
}
