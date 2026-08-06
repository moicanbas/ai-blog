import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
  return (
    <section className="py-20 border-t border-border/40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto">
            <div className="relative rounded-full border border-border bg-card p-2 shadow-lg">
              <Image
                src="/avatar_2.jpeg"
                alt="Autor"
                width={420}
                height={420}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionTitle>Hola 👋</SectionTitle>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
              Soy un apasionado por la tecnología y disfruto convertir
              conceptos complejos en explicaciones fáciles de entender. En este
              blog encontrarás contenido sobre Inteligencia Artificial, Python,
              automatización y herramientas modernas explicado con ejemplos
              cotidianos y lenguaje claro.
            </p>

            <div className="mt-8">
              <Button href="/about">Conóceme</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}