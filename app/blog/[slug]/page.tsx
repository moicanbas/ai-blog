import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import Container from "@/components/layout/Container";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleFooter from "@/components/blog/ArticleFooter";
import MDXComponents from "@/components/mdx/MDXComponents";

import { getPost, getPosts } from "@/lib/posts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 🔴 OBLIGATORIO PARA CLOUDFLARE: Forzar a Next.js a no renderizar nada dinámicamente en runtime
export const dynamic = "error"; // Si una ruta no se pre-renderiza en build, el build fallará en vez de romper en prod
export const dynamicParams = false; // Retorna 404 de inmediato para slugs no generados en build

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // Se compila únicamente durante el 'npm run build'
  const { content } = await compileMDX({
    source: post.content,
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <Container className="py-16">
      <ArticleHero post={post} />

      <ArticleContent>
        {content}
      </ArticleContent>

      <ArticleFooter />
    </Container>
  );
}