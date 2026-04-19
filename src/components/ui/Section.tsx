import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article" | "aside";
  size?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
};

const paddingMap = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-24",
};

export function Section({
  children,
  className = "",
  as: As = "section",
  size = "lg",
  padding = "md",
}: SectionProps) {
  return (
    <As className={`${paddingMap[padding]} ${className}`}>
      <div className={`mx-auto ${sizeMap[size]} px-6`}>{children}</div>
    </As>
  );
}
