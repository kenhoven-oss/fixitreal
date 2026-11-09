/**
 * Networx contractor-referral (lead-gen) configuration — the single source of
 * truth for whether any Networx code renders on the site.
 *
 * Nothing is active by default. With no environment variables set, every
 * export below resolves to "off": the quote-request page returns 404 in
 * production and no Networx script is loaded anywhere.
 *
 * How the Networx embedded form works (confirmed against a live Networx
 * partner page, November 2026): the publisher places
 *
 *   <div id="nx_form" style="height: 435px">
 *     <script src="https://api.networx.com/iframe.php?aff_id=<AFF_ID>&aff_to_form_id=<FORM_ID>"></script>
 *   </div>
 *
 * and Networx's loader replaces the div's contents with an <iframe> of their
 * hosted form. The homeowner's name, phone, email and zip are typed into
 * Networx's iframe and go straight to Networx; FixItReal's servers never
 * receive them.
 *
 * Variables (NEXT_PUBLIC_ because the form renders client-side):
 *
 *   NEXT_PUBLIC_NETWORX_AFF_ID
 *     The affiliate ID from the Networx affiliate dashboard — a 32-character
 *     hexadecimal string. Nothing renders without a well-formed value. Never
 *     commit a value to the repo; set it in Vercel (Settings -> Environment
 *     Variables).
 *
 *   NEXT_PUBLIC_NETWORX_FORM_ID
 *     The numeric "aff_to_form_id" of the form you created in the dashboard
 *     (Networx issues one per form; a general home-repair form is the
 *     default for /get-quotes).
 *
 *   NEXT_PUBLIC_NETWORX_URL  (optional)
 *     A full https:// text-link / tracking URL issued by Networx, for places
 *     where an outbound link is better than an embedded form. Used verbatim.
 *
 * TCPA: Networx requires the publisher's consent language to (a) cover calls
 * and texts placed with automated technology and (b) name
 * "Networx Systems, Inc. and its Partners" with "Partners" linked to their
 * third-party-contractors page. `TCPA_PARTNERS_URL` and the copy in
 * src/components/leadgen/TcpaConsent.tsx implement that. Do not reword the
 * consent copy without re-confirming it with Networx.
 */

export const NETWORX_AFF_ID_PATTERN = /^[0-9a-f]{32}$/i;
export const NETWORX_FORM_ID_PATTERN = /^\d{1,10}$/;

export const NETWORX_EMBED_BASE = "https://api.networx.com/iframe.php";

/** The partner page Networx requires the consent language to link to. */
export const TCPA_PARTNERS_URL = "https://www.networx.com/third-party-contractors";

/**
 * Version stamp of the consent wording in TcpaConsent.tsx. Bump it whenever
 * the wording changes; the Networx agreement requires us to be able to show
 * the exact consent language a consumer saw, and git history + this stamp
 * is how a capture is matched to the text.
 */
export const TCPA_CONSENT_VERSION = "2026-11-09";

/** Default height of the embedded form container (Networx's standard embed). */
export const NETWORX_FORM_DEFAULT_HEIGHT = 435;

export type NetworxConfig = {
  /** Validated affiliate ID or null. */
  affId: string | null;
  /** Validated form ID or null. */
  formId: string | null;
  /** Validated outbound tracking URL or null. */
  trackingUrl: string | null;
  /** True only when both the affiliate ID and form ID are well-formed. */
  formEnabled: boolean;
  /** True when a text-link tracking URL is configured. */
  linksEnabled: boolean;
  /** True when anything Networx-related is live. */
  enabled: boolean;
};

function parseAffId(raw: string | undefined): string | null {
  const value = raw?.trim() ?? "";
  if (!value) return null;
  if (!NETWORX_AFF_ID_PATTERN.test(value)) {
    console.warn(
      `[networx] NEXT_PUBLIC_NETWORX_AFF_ID "${value}" is not a 32-character hex affiliate ID; ignoring it.`
    );
    return null;
  }
  return value.toLowerCase();
}

function parseFormId(raw: string | undefined): string | null {
  const value = raw?.trim() ?? "";
  if (!value) return null;
  if (!NETWORX_FORM_ID_PATTERN.test(value)) {
    console.warn(`[networx] NEXT_PUBLIC_NETWORX_FORM_ID "${value}" is not a numeric form ID; ignoring it.`);
    return null;
  }
  return value;
}

function parseTrackingUrl(raw: string | undefined): string | null {
  const value = raw?.trim() ?? "";
  if (!value) return null;
  try {
    const u = new URL(value);
    if (u.protocol !== "https:" || !/(^|\.)networx\.com$/i.test(u.hostname)) {
      console.warn(`[networx] NEXT_PUBLIC_NETWORX_URL must be an https://*.networx.com URL; ignoring "${value}".`);
      return null;
    }
    return u.toString();
  } catch {
    console.warn(`[networx] NEXT_PUBLIC_NETWORX_URL "${value}" is not a valid URL; ignoring it.`);
    return null;
  }
}

/**
 * Build the config from an environment-shaped object. Exported so the unit
 * tests can exercise every combination without touching process.env.
 */
export function buildNetworxConfig(envLike: Record<string, string | undefined>): NetworxConfig {
  const affId = parseAffId(envLike.NEXT_PUBLIC_NETWORX_AFF_ID);
  const formId = parseFormId(envLike.NEXT_PUBLIC_NETWORX_FORM_ID);
  const trackingUrl = parseTrackingUrl(envLike.NEXT_PUBLIC_NETWORX_URL);

  if ((affId && !formId) || (!affId && formId)) {
    console.warn("[networx] Both NEXT_PUBLIC_NETWORX_AFF_ID and NEXT_PUBLIC_NETWORX_FORM_ID are required; form stays off.");
  }

  const formEnabled = Boolean(affId && formId);
  const linksEnabled = Boolean(trackingUrl);
  return { affId, formId, trackingUrl, formEnabled, linksEnabled, enabled: formEnabled || linksEnabled };
}

/** Full src for Networx's embed loader, or null when the form is off. */
export function networxEmbedSrc(config: NetworxConfig, formId?: string): string | null {
  if (!config.affId) return null;
  const id = formId && NETWORX_FORM_ID_PATTERN.test(formId) ? formId : config.formId;
  if (!id) return null;
  const params = new URLSearchParams({ aff_id: config.affId, aff_to_form_id: id });
  return `${NETWORX_EMBED_BASE}?${params.toString()}`;
}

// Next.js inlines NEXT_PUBLIC_* only when each variable is referenced by its
// full name, so read them explicitly rather than looping over process.env.
export const networxConfig: NetworxConfig = buildNetworxConfig({
  NEXT_PUBLIC_NETWORX_AFF_ID: process.env.NEXT_PUBLIC_NETWORX_AFF_ID,
  NEXT_PUBLIC_NETWORX_FORM_ID: process.env.NEXT_PUBLIC_NETWORX_FORM_ID,
  NEXT_PUBLIC_NETWORX_URL: process.env.NEXT_PUBLIC_NETWORX_URL,
});

/**
 * Whether the /get-quotes page should render at all. In production it exists
 * only once the form is configured. On Vercel preview deployments it always
 * renders (with a placeholder where the form would be) so the consent
 * language can be reviewed — by us and by Networx — before anything goes
 * live.
 */
export function quotePageVisible(
  config: NetworxConfig = networxConfig,
  vercelEnv: string | undefined = process.env.VERCEL_ENV
): boolean {
  return config.formEnabled || vercelEnv === "preview" || vercelEnv === "development" || vercelEnv === undefined;
}
