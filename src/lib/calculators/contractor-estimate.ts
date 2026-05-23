/**
 * Contractor estimate calculator formulas.
 *
 * Cost-plus model — the standard for residential and small commercial work:
 *
 *   labor          = hours × hourlyRate
 *   materials      = sum of materials lines
 *   equipment      = sum of equipment lines
 *   subcontractors = sum of subcontractor lines
 *   otherCosts     = sum of other-costs lines
 *   directCost     = labor + materials + equipment + subcontractors + otherCosts
 *
 *   overhead       = directCost × (overheadPercent / 100)
 *   markup         = directCost × (markupPercent  / 100)
 *
 *   preTax         = directCost + overhead + markup
 *   tax            = preTax × (taxPercent / 100)        // applied to total cost-plus-margin
 *   estimateTotal  = preTax + tax
 *
 * NOTE on terminology: contractors routinely confuse profit *margin* with
 * *markup*. This calculator uses **markup** (a percentage applied to
 * direct cost, the way most contractors actually price). The UI explains
 * the distinction explicitly. If a contractor enters 15% markup on $1,000
 * of direct cost, the markup is $150 and the resulting gross margin on
 * the line is ~13% — not 15%.
 *
 * Sales tax on contractor work varies wildly by state and trade. This
 * calculator applies a flat tax rate to the cost-plus subtotal; the
 * disclaimer in the UI recommends consulting state Department of Revenue
 * for specifics.
 */

import { round2, sanitizeNumberInput } from './shared';

export interface CostLine {
  description?: string;
  amount: number | string;
}

export interface LaborInput {
  hours: number | string;
  hourlyRate: number | string;
}

export interface ContractorEstimateInput {
  labor?: LaborInput;
  materials?: CostLine[];
  equipment?: CostLine[];
  subcontractors?: CostLine[];
  otherCosts?: CostLine[];
  /** Indirect costs as a percentage of direct cost. */
  overheadPercent?: number | string;
  /** Markup as a percentage of direct cost (not margin — see file header). */
  markupPercent?: number | string;
  /** Sales tax as a percentage of (directCost + overhead + markup). */
  taxPercent?: number | string;
}

export interface ContractorEstimateResult {
  labor: number;
  materials: number;
  equipment: number;
  subcontractors: number;
  otherCosts: number;
  directCost: number;
  overhead: number;
  markup: number;
  preTax: number;
  tax: number;
  estimateTotal: number;
}

function sumLines(lines: CostLine[] | undefined): number {
  if (!lines) return 0;
  let total = 0;
  for (const line of lines) {
    total += sanitizeNumberInput(line.amount);
  }
  return total;
}

export function calculateContractorEstimate(
  input: ContractorEstimateInput,
): ContractorEstimateResult {
  const laborHours = sanitizeNumberInput(input.labor?.hours);
  const laborRate = sanitizeNumberInput(input.labor?.hourlyRate);
  const labor = round2(laborHours * laborRate);

  const materials = round2(sumLines(input.materials));
  const equipment = round2(sumLines(input.equipment));
  const subcontractors = round2(sumLines(input.subcontractors));
  const otherCosts = round2(sumLines(input.otherCosts));

  const directCost = round2(labor + materials + equipment + subcontractors + otherCosts);

  const overheadPct = sanitizeNumberInput(input.overheadPercent);
  const markupPct = sanitizeNumberInput(input.markupPercent);
  const taxPct = sanitizeNumberInput(input.taxPercent);

  const overhead = round2(directCost * (overheadPct / 100));
  const markup = round2(directCost * (markupPct / 100));
  const preTax = round2(directCost + overhead + markup);
  const tax = round2(preTax * (taxPct / 100));
  const estimateTotal = round2(preTax + tax);

  return {
    labor,
    materials,
    equipment,
    subcontractors,
    otherCosts,
    directCost,
    overhead,
    markup,
    preTax,
    tax,
    estimateTotal,
  };
}
