import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script"; // Importante para el JSON-LD

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

export const dynamic = "error";
export const dynamicParams = false;

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

// 🚀 METADATA AVANZADA PARA SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const ogImage = post.image;
  const publishedAt = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: publishedAt,
      url: `https://mocadevia.online/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await parseMDX(post.content);

  if (!mdxSource) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://mocadevia.online${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://mocadevia.online/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Mocadevia",
      logo: {
        "@type": "ImageObject",
        url: "https://mocadevia.online/logo.png",
      },
    },
  };

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Container className="py-16 md:py-24">
        <ArticleHero post={post} />

        <ArticleContent>
          <MDXRenderer source={mdxSource} />
        </ArticleContent>

        <ArticleFooter />
      </Container>
    </>
  );
}