import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: Props) {
  return (
    <h2
      className={cn(
        `
        text-3xl
        md:text-5xl
        font-bold
        tracking-tight
        mb-8
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}