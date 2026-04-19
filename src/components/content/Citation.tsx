import { ExternalLink } from "@/components/ui/ExternalLink";
import type { ReactNode } from "react";

export function Citation({ url, children }: { url: string; children: ReactNode }) {
  return <ExternalLink href={url}>{children}</ExternalLink>;
}
