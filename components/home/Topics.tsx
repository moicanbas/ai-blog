import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import TopicCard from "./TopicCard";
import { FaRobot, FaPython, FaMicrochip } from "react-icons/fa6";

export default function Topics() {
  return (
    <section className="py-20 border-t border-border/40">
      <Container>
        <SectionTitle>¿Qué encontrarás aquí?</SectionTitle>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TopicCard
            icon={<FaRobot />}
            title="Inteligencia Artificial"
            description="Explicaciones sencillas sobre IA, LLMs, Machine Learning y herramientas modernas."
          />
          <TopicCard
            icon={<FaPython />}
            title="Python"
            description="Automatización, APIs, scripts, scraping y proyectos reales."
          />
          <TopicCard
            icon={<FaMicrochip />}
            title="Tecnología"
            description="Buenas prácticas, productividad, backend, cloud y herramientas útiles."
          />
        </div>
      </Container>
    </section>
  );
}
