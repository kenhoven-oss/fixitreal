import Link from "next/link";
import { networxConfig } from "@/lib/networx";

type QuoteRequestCTAProps = {
  /** Short description of the job, used in the headline. e.g. "a water heater replacement". */
  job?: string;
  className?: string;
};

/**
 * In-article call to action that sends a reader who has already decided to
 * hire a pro to the /get-quotes page.
 *
 * Renders nothing until the Networx form is configured, so it can sit in
 * article templates ahead of go-live without leaving an empty box. Place it
 * after the "hire a pro" verdict in cost and DIY-or-hire articles — never
 * beside safety instructions, never on tools, calculators, the homepage or
 * policy pages (same placement rules as advertising; see
 * docs/networx-setup.md).
 */
export function QuoteRequestCTA({ job, className = "" }: QuoteRequestCTAProps) {
  if (!networxConfig.formEnabled) return null;

  return (
    <aside
      className={`my-8 rounded-lg border border-ink-200 bg-ink-50 px-5 py-5 ${className}`}
      aria-label="Request contractor quotes"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Hiring this out?</p>
      <p className="mt-2 font-serif text-xl text-navy-900 leading-tight">
        Get quotes from local contractors{job ? ` for ${job}` : ""}
      </p>
      <p className="mt-2 text-sm text-ink-700 leading-relaxed">
        Three written quotes is the minimum worth collecting. Our referral partner Networx matches your zip code to
        contractors who call or text to bid the job — no charge, no obligation. We earn a referral fee when you submit
        a request; it never changes who you are matched with or what they charge.
      </p>
      <Link
        href="/get-quotes"
        className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-navy-900 no-underline"
      >
        Request quotes →
      </Link>
    </aside>
  );
}
