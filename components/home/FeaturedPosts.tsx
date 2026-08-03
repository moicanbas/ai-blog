import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import PostCard from "../blog/PostCard";
import { getFeaturedPosts } from "@/lib/posts";

export default function FeaturedPosts() {
  // Obtenemos los últimos 3 posts destacados o recientes
  const posts = getFeaturedPosts(3);

  return (
    <section className="py-20 border-t border-border/40">
      <Container>
        <SectionTitle>Últimos artículos</SectionTitle>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              category={post.category}
              readingTime={post.readingTime}
              date={post.date}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}