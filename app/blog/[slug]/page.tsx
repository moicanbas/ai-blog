import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleFooter from "@/components/blog/ArticleFooter";

import { getPost, getPosts } from "@/lib/posts";
import { parseMDX } from "@/lib/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

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

  // Obtenemos el elemento compilado con los componentes MDX pre-inyectados
  const mdxContent = await parseMDX(post.content);

  return (
    <Container className="py-16">
      <ArticleHero post={post} />

      <ArticleContent>
        {mdxContent}
      </ArticleContent>

      <ArticleFooter />
    </Container>
  );
}