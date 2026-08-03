import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center shadow-lg sm:px-12 md:py-20">
          {/* Resplandor ambiental de fondo */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-xl rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-60" />

          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              La tecnología no tiene por qué ser difícil.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
              Explora artículos escritos para ayudarte a comprender conceptos
              complejos con ejemplos simples, analogías y aplicaciones prácticas.
            </p>

            <div className="mt-8">
              <Button href="/blog">Explorar artículos</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}