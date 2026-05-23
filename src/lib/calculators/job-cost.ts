/**
 * Job-cost calculator formulas.
 *
 * Two parts: (a) build a total job cost from labor + materials + equipment +
 * subcontractors + other costs, and (b) compute profit and profit-margin %
 * against an entered contract/quote price.
 *
 *   labor          = laborHours × laborRate
 *   materials      = sum of materials lines
 *   equipment      = sum of equipment lines
 *   subcontractors = sum of subcontractor lines
 *   otherCosts     = sum of other-costs lines
 *   totalJobCost   = labor + materials + equipment + subcontractors + otherCosts
 *
 *   profit         = contractPrice − totalJobCost          (can be negative)
 *   profitMargin % = profit / contractPrice × 100          (null when contractPrice = 0)
 *
 * Profit margin uses the selling-price denominator (true margin), not markup.
 * If the user wants to see the same job priced via markup-on-cost, that is
 * what the markup-vs-margin calculator is for.
 */

import { round2, sanitizeNumberInput } from './shared';

export interface CostLine {
  description?: string;
  amount: number | string;
}

export interface JobCostInput {
  labor?: {
    hours: number | string;
    hourlyRate: number | string;
  };
  materials?: CostLine[];
  equipment?: CostLine[];
  subcontractors?: CostLine[];
  otherCosts?: CostLine[];
  /** Optional. If provided, profit and profitMargin % are computed. */
  contractPrice?: number | string;
}

export interface JobCostResult {
  labor: number;
  materials: number;
  equipment: number;
  subcontractors: number;
  otherCosts: number;
  totalJobCost: number;
  contractPrice: number;
  /** contractPrice − totalJobCost. Can be negative if the quote is under cost. */
  profit: number;
  /** profit / contractPrice × 100. null when contractPrice = 0. */
  profitMarginPercent: number | null;
}

function sumLines(lines: CostLine[] | undefined): number {
  if (!lines) return 0;
  let total = 0;
  for (const line of lines) total += sanitizeNumberInput(line.amount);
  return total;
}

export function calculateJobCost(input: JobCostInput): JobCostResult {
  const laborHours = sanitizeNumberInput(input.labor?.hours);
  const laborRate = sanitizeNumberInput(input.labor?.hourlyRate);
  const labor = round2(laborHours * laborRate);

  const materials = round2(sumLines(input.materials));
  const equipment = round2(sumLines(input.equipment));
  const subcontractors = round2(sumLines(input.subcontractors));
  const otherCosts = round2(sumLines(input.otherCosts));
  const totalJobCost = round2(labor + materials + equipment + subcontractors + otherCosts);

  const contractPrice = round2(sanitizeNumberInput(input.contractPrice));
  // Profit allows negatives so the user can see when they're underwater on a
  // quote — that's a useful diagnostic, not an error to suppress.
  const profit = round2(contractPrice - totalJobCost);
  const profitMarginPercent = contractPrice > 0 ? round2((profit / contractPrice) * 100) : null;

  return {
    labor,
    materials,
    equipment,
    subcontractors,
    otherCosts,
    totalJobCost,
    contractPrice,
    profit,
    profitMarginPercent,
  };
}
