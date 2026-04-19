import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "navy" | "amber" | "green" | "yellow" | "red";
  size?: "sm" | "md";
};

const toneMap = {
  neutral: "bg-ink-100 text-ink-700 ring-ink-200",
  navy: "bg-navy-50 text-navy-900 ring-navy-200",
  amber: "bg-amber-50 text-amber-800 ring-amber-200",
  green: "bg-green-50 text-green-800 ring-green-200",
  yellow: "bg-yellow-50 text-yellow-900 ring-yellow-200",
  red: "bg-red-50 text-red-800 ring-red-200",
};

const sizeMap = {
  sm: "text-[11px] px-1.5 py-0.5",
  md: "text-xs px-2 py-1",
};

export function Badge({ children, tone = "neutral", size = "md" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ring-1 ring-inset ${toneMap[tone]} ${sizeMap[size]}`}
    >
      {children}
    </span>
  );
}
