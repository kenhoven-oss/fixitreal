import { env } from "@/lib/env";

/**
 * IndexNow client.
 *
 * IndexNow is an open protocol supported by Bing, Yandex, Naver, Seznam, and
 * a growing list of other search engines. POSTing a URL to a single endpoint
 * gets that URL fetched within minutes (vs. days for organic discovery).
 *
 * Google does NOT participate in IndexNow as of 2026, but for Bing alone
 * (now ~5% of search) the latency improvement is meaningful for a new
 * content site.
 *
 * Key verification: the host must serve the key as plain text at
 * /<key>.txt — we ship this as a static file in /public.
 *
 * Spec: https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = "8df9fd9b41a97c771c3e79dee96a213a";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

export function getIndexNowKey(): string {
  return INDEXNOW_KEY;
}

/**
 * Submit one or more URLs to IndexNow. URLs must be absolute and on the
 * same host as `env.siteUrl`.
 *
 * Returns the HTTP status code from the IndexNow endpoint:
 * - 200 / 202: accepted
 * - 400: malformed request
 * - 403: key file not found at /<key>.txt (verification failed)
 * - 422: URL doesn't belong to the host
 * - 429: rate-limited; back off
 */
export async function submitToIndexNow(urls: string[]): Promise<number> {
  if (urls.length === 0) return 200;

  const host = new URL(env.siteUrl).host;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${env.siteUrl}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return res.status;
}
