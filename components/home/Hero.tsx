import Container from "../layout/Container";
import HeroImage from "./HeroImage";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";
import BlurCircle from "../ui/BlurCircle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <BlurCircle className="-left-32 top-0 h-96 w-96 bg-primary/20 opacity-30 dark:opacity-20 blur-3xl" />
      <BlurCircle className="right-0 bottom-0 h-80 w-80 bg-secondary/20 opacity-30 dark:opacity-20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md">
              🚀 Código, IA y automatización en la práctica
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              IA, Python y código real{" "}
              <GradientText>explicados sin rodeos.</GradientText>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              Aprende Inteligencia Artificial, automatización y desarrollo con Python
              mediante ejemplos prácticos, arquitectura modular y proyectos diseñados para
              llevar a producción.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/blog">Leer artículos</Button>
              <Button href="/about" variant="outline">
                Sobre mí
              </Button>
            </div>
          </div>

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}