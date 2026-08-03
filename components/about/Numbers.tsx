import { ReactNode } from "react";

interface NumbersProps {
  children: ReactNode;
}

export default function Numbers({ children }: NumbersProps) {
  return (
    <section className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </section>
  );
}