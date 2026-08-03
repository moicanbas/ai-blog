import { ReactNode } from "react";

interface JourneyProps {
  children: ReactNode;
}

export default function Journey({ children }: JourneyProps) {
  return (
    <section className="mx-auto max-w-3xl py-16">
      <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Mi recorrido
      </h2>

      <div className="space-y-10">{children}</div>
    </section>
  );
}