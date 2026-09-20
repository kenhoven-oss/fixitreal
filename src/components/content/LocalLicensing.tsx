import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  licensingSentence,
  type StateLicensing,
  type Trade,
} from "@/content/state-licensing";

type LocalLicensingProps = {
  stateName: string;
  licensing: StateLicensing;
  /** The trade this cost guide's work falls under. */
  trade: Trade;
};

const LEVEL_LABEL: Record<StateLicensing["electrician"]["level"], string> = {
  state: "Statewide license",
  "state-commercial-only": "State license for commercial work; residential is local",
  "state-optional": "Optional statewide license; usually local",
  "state-threshold": "Statewide license under a job-size threshold; local above or where a local program exists",
  local: "Licensed by city or county — no statewide license",
  mixed: "Depends on job size — state above a threshold, local below",
};

/**
 * "Who licenses this trade here" — generated from src/content/state-licensing.ts
 * and nothing else. Every sentence carries the licensing body, the scope of
 * the rule, a source link, and the date it was checked. Where the answer is
 * "it depends on your city", the block says that instead of inventing a
 * statewide rule.
 */
export function LocalLicensing({ stateName, licensing, trade }: LocalLicensingProps) {
  const t = licensing[trade];
  const other: Trade = trade === "electrician" ? "plumber" : "electrician";
  const o = licensing[other];
  const hi = licensing.homeImprovement;

  return (
    <section className="mt-10 rounded-lg border border-ink-200 bg-white p-5">
      <h2 className="font-serif text-2xl text-navy-900">
        {`Who licenses ${trade === "electrician" ? "electricians" : "plumbers"} in ${stateName}`}
      </h2>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
        {LEVEL_LABEL[t.level]}
      </p>
      <p className="mt-3 text-ink-700 leading-relaxed">{licensingSentence(stateName, t, trade)}</p>
      {t.note && <p className="mt-2 text-sm text-ink-700 leading-relaxed">{t.note}</p>}
      <dl className="mt-4 grid gap-2 text-sm text-ink-700 sm:grid-cols-[auto_1fr]">
        <dt className="font-semibold text-navy-900">Licensing body</dt>
        <dd>{t.body}</dd>
        <dt className="font-semibold text-navy-900">Scope</dt>
        <dd>{t.scope}</dd>
        <dt className="font-semibold text-navy-900">Source</dt>
        <dd>
          <ExternalLink href={t.sourceUrl}>{new URL(t.sourceUrl).hostname}</ExternalLink>
          {` · checked ${t.verified}`}
        </dd>
      </dl>
      <p className="mt-4 text-sm text-ink-600 leading-relaxed">
        {`${other === "electrician" ? "Electricians" : "Plumbers"} in ${stateName}: ${LEVEL_LABEL[o.level].toLowerCase()} (${o.body}).`}
      </p>
      {hi && (
        <p className="mt-2 text-sm text-ink-600 leading-relaxed">
          <strong className="text-navy-900">Consumer protection: </strong>
          {hi.note}{" "}
          <ExternalLink href={hi.sourceUrl}>{hi.body}</ExternalLink>
          {` · checked ${hi.verified}`}
        </p>
      )}
      <p className="mt-3 text-xs text-ink-600">
        Licensing rules change and local ordinances add to them. This block is
        reviewed annually; if it is wrong for your city, tell us on the{" "}
        <a href="/corrections" className="underline decoration-amber-500">corrections page</a>.
      </p>
    </section>
  );
}
