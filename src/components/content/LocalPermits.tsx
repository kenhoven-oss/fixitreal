import { ExternalLink } from "@/components/ui/ExternalLink";
import type { LocalDetail } from "@/content/local-detail-types";

type LocalPermitsProps = {
  placeName: string;
  detail: LocalDetail;
  /** Cost-guide slug, e.g. "water-heater-replacement". */
  guideSlug: string;
  /** Short job name for headings, e.g. "water heater replacement". */
  jobLabel: string;
};

/**
 * "What the permit actually costs here, and what the inspector checks" —
 * rendered only from verified fields in a metro's localDetail block.
 *
 * Mirrors LocalLicensing: every claim shows the authority it came from, the
 * URL, and the date it was checked. Nothing here is derived from the parent
 * guide or a tier multiplier; if a fee is not published, the block says the
 * authority does not publish one rather than printing an estimate.
 *
 * Renders null when this guide has no verified entry for the city, so the
 * block can be dropped into the template unconditionally.
 */
export function LocalPermits({
  placeName,
  detail,
  guideSlug,
  jobLabel,
}: LocalPermitsProps) {
  const permit = detail.byGuide[guideSlug];
  if (!permit) return null;

  const hostname = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  return (
    <section className="mt-10 rounded-lg border border-ink-200 bg-white p-5">
      <h2 className="font-serif text-2xl text-navy-900">
        {`Permits and inspection for ${jobLabel} in ${placeName}`}
      </h2>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
        Local rules, not a national average
      </p>

      <p className="mt-3 text-ink-700 leading-relaxed">{permit.requirement}</p>

      <dl className="mt-4 grid gap-2 text-sm text-ink-700 sm:grid-cols-[auto_1fr]">
        <dt className="font-semibold text-navy-900">Permit fee</dt>
        <dd>
          {permit.fee ?? `${detail.authority.name} does not publish a flat fee for this work.`}{" "}
          <ExternalLink href={permit.sourceUrl}>
            {hostname(permit.sourceUrl)}
          </ExternalLink>
          {permit.fee && permit.feeAsOf && (
            <span className="block text-xs text-ink-600">
              {`Per the fee schedule the city publishes, dated ${permit.feeAsOf}. Confirm the current figure before you budget.`}
            </span>
          )}
        </dd>

        <dt className="font-semibold text-navy-900">Authority</dt>
        <dd>
          <ExternalLink href={detail.authority.url}>
            {detail.authority.name}
          </ExternalLink>
        </dd>

        {detail.permitPolicy && (
          <>
            <dt className="font-semibold text-navy-900">Who pulls it</dt>
            <dd>
              {detail.permitPolicy.text}{" "}
              <ExternalLink href={detail.permitPolicy.sourceUrl}>
                {hostname(detail.permitPolicy.sourceUrl)}
              </ExternalLink>
            </dd>
          </>
        )}

        {detail.registration && (
          <>
            <dt className="font-semibold text-navy-900">Local registration</dt>
            <dd>
              {detail.registration.text}{" "}
              <ExternalLink href={detail.registration.sourceUrl}>
                {hostname(detail.registration.sourceUrl)}
              </ExternalLink>
            </dd>
          </>
        )}

        {detail.codeEdition && (
          <>
            <dt className="font-semibold text-navy-900">Code in force</dt>
            <dd>
              {detail.codeEdition.text}{" "}
              <ExternalLink href={detail.codeEdition.sourceUrl}>
                {hostname(detail.codeEdition.sourceUrl)}
              </ExternalLink>
            </dd>
          </>
        )}
      </dl>

      {detail.codeItems.length > 0 && (
        <>
          <h3 className="mt-6 font-semibold text-navy-900">
            {`What a ${placeName} inspector checks`}
          </h3>
          {/* data-citations: several code items often share one source PDF, so
              content-qa's duplicate-href check does not apply here. */}
          <ul
            data-citations
            className="mt-2 list-disc pl-6 space-y-2 text-sm text-ink-700 leading-relaxed"
          >
            {detail.codeItems.map((item) => (
              <li key={item.text}>
                {item.text}{" "}
                <ExternalLink href={item.sourceUrl}>
                  {hostname(item.sourceUrl)}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-4 text-xs text-ink-600 leading-relaxed">
        {`Checked against ${detail.authority.name} on ${detail.verifiedOn}. Fees and code adoptions change — confirm with the authority before you budget.`}
      </p>
    </section>
  );
}
