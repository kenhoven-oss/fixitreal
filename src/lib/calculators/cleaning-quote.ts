/**
 * Cleaning-quote calculator formulas.
 *
 * Cost-plus model for residential / commercial cleaning quotes:
 *
 *   labor       = hours × hourlyRate
 *   travel      = travelMode === 'flat'
 *                 ? travelFlatFee
 *                 : miles × mileageRate
 *   addOns      = sum of selected add-on line items
 *   directCost  = labor + supplies + travel + addOns
 *   markup      = directCost × (markupPercent / 100)
 *   quoteTotal  = directCost + markup
 *
 * The travel mode is explicit (flat fee OR miles × rate) so the UI can label
 * the input clearly and the formula never has to guess.
 *
 * This produces an estimate. State / local cleaning licensing, sales-tax
 * treatment of cleaning services, and insurance requirements vary — the UI
 * shows a disclaimer to that effect.
 */

import { round2, sanitizeNumberInput } from './shared';

export interface AddOnLine {
  /** e.g. "Inside oven", "Inside fridge", "Window cleaning". */
  name?: string;
  amount: number | string;
}

export type TravelMode = 'flat' | 'mileage';

export interface CleaningQuoteInput {
  labor?: {
    hours: number | string;
    hourlyRate: number | string;
  };
  /** Materials / cleaning products. */
  supplies?: number | string;
  travel?: {
    mode: TravelMode;
    /** Used when mode === 'flat'. */
    flatFee?: number | string;
    /** Used when mode === 'mileage'. */
    miles?: number | string;
    /** Used when mode === 'mileage'. */
    mileageRate?: number | string;
  };
  addOns?: AddOnLine[];
  markupPercent?: number | string;
}

export interface CleaningQuoteResult {
  labor: number;
  supplies: number;
  travel: number;
  addOns: number;
  directCost: number;
  markup: number;
  quoteTotal: number;
}

export function calculateCleaningQuote(input: CleaningQuoteInput): CleaningQuoteResult {
  const hours = sanitizeNumberInput(input.labor?.hours);
  const rate = sanitizeNumberInput(input.labor?.hourlyRate);
  const labor = round2(hours * rate);

  const supplies = round2(sanitizeNumberInput(input.supplies));

  let travel = 0;
  if (input.travel) {
    if (input.travel.mode === 'flat') {
      travel = sanitizeNumberInput(input.travel.flatFee);
    } else {
      const miles = sanitizeNumberInput(input.travel.miles);
      const mileageRate = sanitizeNumberInput(input.travel.mileageRate);
      travel = miles * mileageRate;
    }
  }
  travel = round2(travel);

  let addOns = 0;
  if (input.addOns) {
    for (const item of input.addOns) {
      addOns += sanitizeNumberInput(item.amount);
    }
  }
  addOns = round2(addOns);

  const directCost = round2(labor + supplies + travel + addOns);
  const markupPct = sanitizeNumberInput(input.markupPercent);
  const markup = round2(directCost * (markupPct / 100));
  const quoteTotal = round2(directCost + markup);

  return {
    labor,
    supplies,
    travel,
    addOns,
    directCost,
    markup,
    quoteTotal,
  };
}
