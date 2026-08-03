import { ReactNode } from "react";

interface JourneyItemProps {
  year: string;
  company: string;
  role: string;
  children: ReactNode;
}

export function JourneyItem({
  year,
  company,
  role,
  children,
}: JourneyItemProps) {
  return (
    <div className="relative border-l-2 border-border/80 pl-8 transition-colors">
      {/* Indicador de punto */}
      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary shadow-xs" />

      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
        {year}
      </span>

      <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground">
        {role}
      </h3>

      <p className="text-sm font-medium text-muted">
        {company}
      </p>

      <div className="mt-3 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}