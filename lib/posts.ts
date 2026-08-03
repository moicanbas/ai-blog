import { Post } from "../types/post";
import postsData from "./posts-data.json";

export interface SinglePost extends Post {
  featured: boolean;
  content: string;
}

const allPosts: SinglePost[] = postsData as SinglePost[];

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

  if (!post) {
    throw new Error(`Post no encontrado para el slug: ${slug}`);
  }

  return post;
}

export function getFeaturedPosts(limit = 3): Post[] {
  return getPosts().slice(0, limit);
}

export function getCategories(): string[] {
  return [...new Set(getPosts().map((post) => post.category))];
}

export function getTags(): string[] {
  return [...new Set(getPosts().flatMap((post) => post.tags))];
}