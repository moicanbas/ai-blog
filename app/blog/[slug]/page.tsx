// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleFooter from "@/components/blog/ArticleFooter";
import MDXRenderer from "@/components/mdx/MDXRenderer";

import { getPost, getPosts } from "@/lib/posts";
import { parseMDX } from "@/lib/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 🔴 GARANTÍA SR: Forzar a Next.js a compilar todas las páginas en el build (SSG puro)
export const dynamic = "error";
export const dynamicParams = false;

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

  // Serializamos el contenido en tiempo de build
  const mdxSource = await parseMDX(post.content);

  if (!mdxSource) {
    notFound();
  }

  return (
    <Container className="py-16">
      <ArticleHero post={post} />

      <ArticleContent>
        {/* Renderizado ultra-seguro libre de eval() en runtime */}
        <MDXRenderer source={mdxSource} />
      </ArticleContent>

      <ArticleFooter />
    </Container>
  );
}