import { ReactNode } from "react";

interface SkillChipProps {
  children: ReactNode;
}

export function SkillChip({ children }: SkillChipProps) {
  return (
    <span className="inline-flex items-center rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
      {children}
    </span>
  );
}