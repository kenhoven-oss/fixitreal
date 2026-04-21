import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

/**
 * AI / LLM crawlers we explicitly disallow.
 *
 * FixItReal's value is original, consumer-advocate editorial research.
 * Blocking training-data crawlers is an editorial-independence stance:
 * we want to be read and cited, not silently absorbed into a model.
 * Search/indexing crawlers (Googlebot, Bingbot, DuckDuckBot, etc.) are
 * unaffected — those use different user-agents and fall under the
 * default "User-agent: *" allow.
 *
 * Sources:
 * - OpenAI: https://platform.openai.com/docs/bots
 * - Google-Extended: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers#google-extended
 * - Anthropic: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
 * - Common Crawl (CCBot): https://commoncrawl.org/ccbot
 * - Perplexity: https://docs.perplexity.ai/guides/bots
 */
const disallowedAiCrawlers = [
  "GPTBot",          // OpenAI training crawler
  "OAI-SearchBot",   // OpenAI search product
  "ChatGPT-User",    // On-demand ChatGPT browsing (leave? we block for consistency)
  "CCBot",           // Common Crawl — feeds many model training sets
  "Google-Extended", // Google's separate opt-out for Gemini / Vertex AI training
  "anthropic-ai",    // Anthropic crawler (legacy UA)
  "ClaudeBot",       // Anthropic crawler
  "Claude-Web",      // Anthropic on-demand browsing
  "PerplexityBot",   // Perplexity
  "Applebot-Extended", // Apple's training-specific UA
  "Bytespider",      // ByteDance / TikTok
  "Meta-ExternalAgent", // Meta's training crawler
  "cohere-ai",       // Cohere
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything to regular search crawlers.
      { userAgent: "*", allow: "/" },
      // AI training crawlers: blocked.
      ...disallowedAiCrawlers.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${env.siteUrl}/sitemap.xml`,
    host: env.siteUrl,
  };
}
