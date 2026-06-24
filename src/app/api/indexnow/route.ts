import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { submitToIndexNow } from "@/lib/indexnow";
import { loadAllArticles } from "@/lib/articles-loader";
import { getAllJobSlugs } from "@/content/jobs";

/**
 * IndexNow trigger — manual or via Vercel Cron.
 *
 * Auth accepts ANY of:
 *   1. Genuine Vercel Cron invocation — identified by Vercel's
 *      `user-agent: vercel-cron/1.0` request header. This is what the
 *      daily cron in vercel.json uses, so the cron works with ZERO env
 *      configuration. The action is low-risk (it only submits our own
 *      public sitemap URLs to IndexNow), so this is an appropriate bar.
 *   2. Authorization: Bearer <CRON_SECRET> — the stricter Vercel-
 *      recommended pattern. If you set CRON_SECRET in Project Settings →
 *      Environment Variables, Vercel auto-injects this header and we
 *      verify it. Optional hardening on top of (1).
 *   3. GET /api/indexnow?token=<INDEXNOW_AUTH_TOKEN> — ad-hoc manual
 *      trigger (curl/postman) after a content batch ships. Optional.
 *
 * vercel.json wires the daily cron:
 *   { "crons": [{ "path": "/api/indexnow", "schedule": "0 6 * * *" }] }
 *
 * Note: Google does not use IndexNow; this primarily speeds Bing/Yandex.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const provided = url.searchParams.get("token");
  const manualToken = process.env.INDEXNOW_AUTH_TOKEN;
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get("authorization");
  const userAgent = req.headers.get("user-agent") ?? "";

  // Vercel cron invocations carry this user-agent. Documented at
  // https://vercel.com/docs/cron-jobs — lets the cron run with no env setup.
  const isVercelCron = userAgent.startsWith("vercel-cron/");
  const isCronSecretCall =
    cronSecret !== undefined && authHeader === `Bearer ${cronSecret}`;
  const isManualCall = manualToken !== undefined && provided === manualToken;

  if (!isVercelCron && !isCronSecretCall && !isManualCall) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Gather every indexable URL from existing data sources.
  const articles = await loadAllArticles();
  const articleUrls = articles.map((a) => `${env.siteUrl}${a.path}`);

  const jobUrls = getAllJobSlugs().map(
    (slug) => `${env.siteUrl}/tools/diy-or-hire/${slug}`
  );

  // High-priority static pages most likely to benefit from fast re-indexing.
  const staticUrls = [
    "/",
    "/diy-or-hire",
    "/costs",
    "/advice",
    "/home-inspection-repairs",
    "/senior-home-safety",
    "/emergency-repairs",
    "/what-is-this",
    "/contractor-red-flags",
    "/tools",
  ].map((p) => `${env.siteUrl}${p}`);

  // Programmatic state-cost pages: STATES × STATE_COST_GUIDES.
  const { getAllStateCostParams } = await import("@/content/state-cost-data");
  const stateCostUrls = getAllStateCostParams().map(
    ({ slug, state }) => `${env.siteUrl}/costs/${slug}/${state}`
  );

  // Programmatic metro-cost pages: CITIES × STATE_COST_GUIDES.
  const { getAllCityCostParams } = await import("@/content/city-cost-data");
  const metroCostUrls = getAllCityCostParams().map(
    ({ slug, city }) => `${env.siteUrl}/costs/${slug}/metro/${city}`
  );

  // Glossary pages.
  const { getAllGlossarySlugs } = await import("@/content/glossary");
  const glossaryUrls = getAllGlossarySlugs().map(
    (slug) => `${env.siteUrl}/glossary/${slug}`
  );

  const allUrls = [
    ...staticUrls,
    ...articleUrls,
    ...jobUrls,
    ...stateCostUrls,
    ...metroCostUrls,
    ...glossaryUrls,
  ];

  // IndexNow accepts up to 10,000 URLs per request. We chunk at 1,000 to
  // be friendly and let us see per-batch status.
  const chunkSize = 1000;
  const results: Array<{ batch: number; count: number; status: number }> = [];

  for (let i = 0; i < allUrls.length; i += chunkSize) {
    const chunk = allUrls.slice(i, i + chunkSize);
    const status = await submitToIndexNow(chunk);
    results.push({
      batch: i / chunkSize + 1,
      count: chunk.length,
      status,
    });
    // Tiny pause between batches to avoid rate limits.
    if (i + chunkSize < allUrls.length) {
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  return NextResponse.json({
    submitted: allUrls.length,
    batches: results,
  });
}
