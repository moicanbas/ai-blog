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
        "rounded-md border border-border bg-card text-foreground transition-colors",
        className
      )}
    >
      {children}
    </article>
  );
}