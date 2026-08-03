import { ReactNode } from "react";

interface TechStackProps {
  children: ReactNode;
}

export default function TechStack({ children }: TechStackProps) {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Tecnologías favoritas
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {children}
      </div>
    </section>
  );
}