import Container from "@/components/layout/Container";
import ArticleContent from "@/components/blog/ArticleContent";
import { parseMDX } from "@/lib/mdx";

export default async function AboutPage() {
  const content = await parseMDX("pages/about.mdx");

  return (
    <Container className="py-20">
      <ArticleContent>
        {content}
      </ArticleContent>
    </Container>
  );
}