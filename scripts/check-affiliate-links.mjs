#!/usr/bin/env node
/**
 * FixItReal affiliate link health check.
 *
 * Finds every amzn.to/... URL in the codebase (Tools pages + MDX articles),
 * follows redirects on each, and flags anything that looks broken.
 *
 * Run:   npm run check-links
 * Exit:  0 = all good. 1 = one or more broken links (CI-friendly).
 *
 * Notes:
 *   - Uses GET instead of HEAD because Amazon returns 405 to HEAD on amzn.to.
 *   - Sets a realistic User-Agent so the CDN doesn't block us.
 *   - Throttles to 3 concurrent requests with ~300ms jitter; amzn.to handles
 *     this fine at our volume.
 *   - "Broken" = final status != 200, OR final URL looks like an error page
 *     (e.g. /gp/errors/, /product-not-found/).
 */

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();

const TARGET_DIRS = [
  path.join(ROOT, "src", "app", "tools"),
  path.join(ROOT, "src", "content", "articles"),
];

const URL_RE = /https?:\/\/amzn\.to\/[A-Za-z0-9]+/g;

// Known placeholder / example links used in docs or inline comments.
// Skip these so they don't show up as "broken" every month.
const EXCLUDE = new Set([
  "https://amzn.to/4tlV9dU", // example used in the RecommendedProduct JSDoc
]);

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36 FixItReal-LinkChecker";

const ERROR_URL_PATTERNS = [
  /\/gp\/errors\//i,
  /\/product-not-found/i,
  /\/errors\/validate(Captcha)?/i,
];

/** Walk a directory and return every file matching the allowed extensions. */
async function walk(dir, exts = [".tsx", ".ts", ".mdx", ".md"]) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full, exts)));
    } else if (exts.includes(path.extname(entry.name))) {
      out.push(full);
    }
  }
  return out;
}

/** Return [{ url, file, line }] for every amzn.to link in every target file. */
async function collectLinks() {
  const hits = [];
  for (const dir of TARGET_DIRS) {
    try {
      await stat(dir);
    } catch {
      continue;
    }
    const files = await walk(dir);
    for (const file of files) {
      const body = await readFile(file, "utf8");
      const lines = body.split(/\r?\n/);
      lines.forEach((line, i) => {
        const matches = line.match(URL_RE);
        if (matches) {
          for (const url of matches) {
            hits.push({
              url,
              file: path.relative(ROOT, file),
              line: i + 1,
            });
          }
        }
      });
    }
  }
  return hits;
}

/** Check a single URL by following redirects with GET. */
async function checkOne(url) {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "User-Agent": UA, Accept: "text/html,*/*" },
      signal: AbortSignal.timeout(15000),
    });
    const finalUrl = res.url;
    const status = res.status;

    let issue = null;
    if (status !== 200) issue = `HTTP ${status}`;
    else if (ERROR_URL_PATTERNS.some((re) => re.test(finalUrl))) {
      issue = "landed on Amazon error page";
    }
    // Don't read the body — we've already got redirect + status we need.
    res.body?.cancel?.();

    return { ok: !issue, status, finalUrl, issue };
  } catch (err) {
    return { ok: false, status: 0, finalUrl: null, issue: err.message };
  }
}

/** Run checks with limited concurrency. */
async function runPool(items, concurrency, worker) {
  const results = new Array(items.length);
  let i = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      // small jitter to be polite
      await new Promise((r) => setTimeout(r, 100 + Math.random() * 200));
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
  return results;
}

function colour(s, code) {
  if (!process.stdout.isTTY) return s;
  return `\x1b[${code}m${s}\x1b[0m`;
}
const green = (s) => colour(s, "32");
const red = (s) => colour(s, "31");
const yellow = (s) => colour(s, "33");
const dim = (s) => colour(s, "90");

async function main() {
  const hits = await collectLinks();
  if (hits.length === 0) {
    console.log(yellow("No amzn.to links found anywhere under src/. Nothing to check."));
    return 0;
  }

  // Group by URL so we don't hit the same URL twice.
  const byUrl = new Map();
  for (const h of hits) {
    if (EXCLUDE.has(h.url)) continue;
    if (!byUrl.has(h.url)) byUrl.set(h.url, []);
    byUrl.get(h.url).push(h);
  }
  const urls = [...byUrl.keys()];

  console.log(
    `Checking ${urls.length} unique amzn.to link${urls.length === 1 ? "" : "s"} across ${hits.length} reference${hits.length === 1 ? "" : "s"}…\n`
  );

  const results = await runPool(urls, 3, (url) => checkOne(url));

  let broken = 0;
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const r = results[i];
    const refs = byUrl.get(url);
    const loc = refs.map((h) => `${h.file}:${h.line}`).join(", ");

    if (r.ok) {
      console.log(`${green("OK  ")} ${url}  ${dim("→ " + (r.finalUrl ?? "").slice(0, 80))}`);
      console.log(`     ${dim(loc)}`);
    } else {
      broken++;
      console.log(`${red("FAIL")} ${url}  ${red(r.issue ?? "unknown")}`);
      if (r.finalUrl) console.log(`     ${dim("final: " + r.finalUrl.slice(0, 120))}`);
      console.log(`     ${yellow(loc)}`);
    }
  }

  console.log("");
  const summary = `${urls.length - broken} OK, ${broken} broken, ${urls.length} total`;
  console.log(broken === 0 ? green(summary) : red(summary));

  // If *every* request failed with a network error, that's almost certainly
  // a local connectivity issue — not actually broken products.
  if (broken === urls.length && urls.length > 0) {
    const allNetwork = results.every(
      (r) => !r.ok && (r.status === 0 || /fetch failed|ENOTFOUND|ETIMEDOUT/i.test(r.issue ?? ""))
    );
    if (allNetwork) {
      console.log("");
      console.log(yellow("Every check failed with a network error."));
      console.log(yellow("Verify your internet connection (or VPN/proxy) and retry."));
    }
  }

  return broken === 0 ? 0 : 1;
}

main().then((code) => process.exit(code));
