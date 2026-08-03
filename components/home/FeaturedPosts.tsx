import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PostCard from "../blog/PostCard";

export default function FeaturedPosts() {
  return (
    <section className="py-20 border-t border-border/40">
      <Container>
        <SectionTitle>Últimos artículos</SectionTitle>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <PostCard
            slug="como-piensa-un-llm"
            title='¿Cómo "piensa" un LLM?'
            description="Una explicación sencilla para entender cómo funcionan modelos como ChatGPT sin recurrir a fórmulas ni matemáticas complejas."
            image="/posts/llm-cover.png"
            category="Inteligencia Artificial"
            readingTime="10 min"
            date="Agosto 2026"
          />
          <PostCard
            slug="como-piensa-un-llm"
            title='¿Cómo "piensa" un LLM?'
            description="Una explicación sencilla para entender cómo funcionan modelos como ChatGPT sin recurrir a fórmulas ni matemáticas complejas."
            image="/posts/llm-cover.png"
            category="Inteligencia Artificial"
            readingTime="10 min"
            date="Agosto 2026"
          />
        </div>
      </Container>
    </section>
  );
}