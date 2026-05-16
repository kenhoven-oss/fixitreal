import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { submitToIndexNow } from "@/lib/indexnow";
import { loadAllArticles } from "@/lib/articles-loader";
import { getAllJobSlugs } from "@/content/jobs";

/**
 * Manual IndexNow trigger.
 *
 * GET /api/indexnow?token=<INDEXNOW_AUTH_TOKEN>
 *
 * - With token: submits every published article + tool + job URL to IndexNow.
 *   Use after a content batch ships.
 * - Without token: returns 401.
 *
 * To wire to Vercel Cron, add a vercel.json entry:
 *   { "crons": [{ "path": "/api/indexnow?token=<token>", "schedule": "0 6 * * *" }] }
 *
 * The token is read from process.env.INDEXNOW_AUTH_TOKEN. Set it in
 * Vercel → Settings → Environment Variables (Production + Preview).
 * Generate with: openssl rand -hex 32.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const provided = url.searchParams.get("token");
  const expected = process.env.INDEXNOW_AUTH_TOKEN;

  if (!expected) {
    return NextResponse.json(
      { error: "INDEXNOW_AUTH_TOKEN not configured" },
      { status: 503 }
    );
  }
  if (provided !== expected) {
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

  const allUrls = [...staticUrls, ...articleUrls, ...jobUrls];

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
