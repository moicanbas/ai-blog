import { notFound } from "next/navigation";
import { Post } from "../types/post";
import postsData from "./posts-data.json";

export interface SinglePost extends Post {
  featured: boolean;
  content: string;
}

// Aseguramos el casteo explícito desde el JSON importado
const allPosts: SinglePost[] = (postsData as unknown as SinglePost[]) || [];

export function getPosts(): Post[] {
  return allPosts
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPost(slug: string): SinglePost {
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    // En lugar de hacer un throw Error genérico, Next.js renderizará la página 404
    notFound();
  }

  return post;
}

export function getFeaturedPosts(limit = 3): Post[] {
  return allPosts
    .filter((post) => post.published && post.featured)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, limit);
}

export function getCategories(): string[] {
  return Array.from(new Set(getPosts().map((post) => post.category).filter(Boolean)));
}

export function getTags(): string[] {
  return Array.from(new Set(getPosts().flatMap((post) => post.tags || [])));
}