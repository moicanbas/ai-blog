import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Philosophy({ children }: Props) {
  return (
    <section className="mx-auto max-w-4xl py-16 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Mi filosofía
      </h2>

      <blockquote className="mt-8 text-xl sm:text-2xl font-light italic leading-relaxed text-foreground/90">
        "{children}"
      </blockquote>
    </section>
  );
}