import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import TopicCard from "./TopicCard";

export default function Topics() {
  return (
    <section className="py-20 border-t border-border/40">
      <Container>
        <SectionTitle>¿Qué encontrarás aquí?</SectionTitle>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TopicCard
            icon="🤖"
            title="Inteligencia Artificial"
            description="Explicaciones sencillas sobre IA, LLMs, Machine Learning y herramientas modernas."
          />
          <TopicCard
            icon="🐍"
            title="Python"
            description="Automatización, APIs, scripts, scraping y proyectos reales."
          />
          <TopicCard
            icon="⚙️"
            title="Tecnología"
            description="Buenas prácticas, productividad, backend, cloud y herramientas útiles."
          />
        </div>
      </Container>
    </section>
  );
}