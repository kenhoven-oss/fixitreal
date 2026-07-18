import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

/**
 * AI crawler policy — two distinct categories, two different answers.
 *
 * 1. TRAINING crawlers (blocked): bots that scrape content to train
 *    foundation models. Blocking these is an editorial-independence
 *    stance: we don't want the site silently absorbed into a model
 *    with no attribution and no click.
 *
 * 2. AI SEARCH / ASSISTANT crawlers (allowed): bots that fetch pages to
 *    answer a user's live question WITH a citation and a link back
 *    (ChatGPT Search, Perplexity, Claude search/browsing). These are a
 *    referral channel — the modern equivalent of a search engine. For
 *    the queries this site targets ("what should X cost", "DIY or
 *    hire"), AI answers are a major discovery surface; blocking them
 *    means competitors get the citation instead.
 *
 * Classic search crawlers (Googlebot, Bingbot, DuckDuckBot) are
 * unaffected and fall under the default allow.
 *
 * Sources:
 * - OpenAI bot UAs: https://platform.openai.com/docs/bots
 * - Anthropic UAs: https://support.claude.com/en/articles/8896518
 * - Perplexity UAs: https://docs.perplexity.ai/guides/bots
 * - Google-Extended: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
 * - Common Crawl: https://commoncrawl.org/ccbot
 */

/** Model-training scrapers: no attribution, no referral → blocked. */
const blockedTrainingCrawlers = [
  "GPTBot", // OpenAI training crawler
  "CCBot", // Common Crawl — feeds many training sets
  "Google-Extended", // Google opt-out UA for Gemini training
  "Applebot-Extended", // Apple training-specific UA
  "Bytespider", // ByteDance / TikTok
  "Meta-ExternalAgent", // Meta training crawler
  "cohere-ai", // Cohere
  "anthropic-ai", // Anthropic legacy training UA
  "ClaudeBot", // Anthropic training crawler
];

/** AI search / user-triggered fetchers: cite + link back → allowed. */
const allowedAiSearchCrawlers = [
  "OAI-SearchBot", // ChatGPT Search index — cites sources
  "ChatGPT-User", // Live ChatGPT browsing on behalf of a user
  "PerplexityBot", // Perplexity search index — cites sources
  "Perplexity-User", // Live Perplexity fetch for a user query
  "Claude-SearchBot", // Anthropic search index
  "Claude-User", // Live Claude fetch on behalf of a user
  "Claude-Web", // Anthropic legacy on-demand browsing UA
  "DuckAssistBot", // DuckDuckGo AI answers — cites sources
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything to regular search crawlers.
      { userAgent: "*", allow: "/" },
      // AI search / assistant crawlers: explicitly allowed (citation traffic).
      ...allowedAiSearchCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      // AI training crawlers: blocked.
      ...blockedTrainingCrawlers.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${env.siteUrl}/sitemap.xml`,
    host: env.siteUrl,
  };
}
