import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: Props) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-border bg-card text-foreground shadow-xs transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      {children}
    </article>
  );
}