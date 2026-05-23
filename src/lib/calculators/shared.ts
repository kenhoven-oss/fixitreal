/**
 * Shared input-sanitization and formatting helpers used by every calculator.
 *
 * All calculator utilities are pure functions that operate on numbers, never
 * on strings — string parsing happens once at the form boundary via
 * `sanitizeNumberInput`. This makes every formula trivially testable.
 *
 * Invariant guarantees:
 *   - No NaN or Infinity ever escapes a calculator function. Any input that
 *     would produce one is clamped to 0.
 *   - Negatives are clamped to 0 by default. Callers that want to allow
 *     negative input must use `sanitizeNumberInput(value, { allowNegative: true })`.
 */

export interface SanitizeOptions {
  /** Permit negative numbers. Default: false (negatives clamp to 0). */
  allowNegative?: boolean;
}

/**
 * Convert a raw form-input string (or unknown) into a finite, safe number.
 * NaN, Infinity, undefined, and (by default) negatives all map to 0.
 *
 * @example
 *   sanitizeNumberInput('') => 0
 *   sanitizeNumberInput('12.5') => 12.5
 *   sanitizeNumberInput('-5') => 0
 *   sanitizeNumberInput('-5', { allowNegative: true }) => -5
 *   sanitizeNumberInput('abc') => 0
 *   sanitizeNumberInput(Infinity) => 0
 */
export function sanitizeNumberInput(value: unknown, opts: SanitizeOptions = {}): number {
  let n: number;
  if (typeof value === 'number') {
    n = value;
  } else if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '') return 0;
    n = Number(trimmed);
  } else {
    return 0;
  }
  if (!Number.isFinite(n)) return 0;
  if (!opts.allowNegative && n < 0) return 0;
  return n;
}

/**
 * Format a finite number as a USD currency string. NaN/Infinity render as
 * "$0.00" rather than the user-hostile native `Intl` output.
 */
export function formatUSD(amount: number): string {
  const safe = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(safe);
}

/**
 * Format a finite percentage as e.g. "42.50%". Non-finite inputs render as
 * the em-dash placeholder so the UI doesn't say "NaN%".
 */
export function formatPercent(value: number, fractionDigits = 2): string {
  if (!Number.isFinite(value)) return '—';
  return `${value.toFixed(fractionDigits)}%`;
}

/** Round a number to two decimal places without floating-point dust. */
export function round2(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
