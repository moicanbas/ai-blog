import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="not-prose py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        ¿Seguimos aprendiendo?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
        Si llegaste hasta aquí, probablemente disfrutas entender cómo funciona la
        tecnología. En el blog encontrarás artículos sobre Inteligencia
        Artificial, Python, arquitectura de software y automatización.
      </p>

      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold !text-white !no-underline shadow-xs transition-all duration-200 hover:opacity-90 active:scale-95"
        >
          Explorar el blog →
        </Link>
      </div>
    </section>
  );
}