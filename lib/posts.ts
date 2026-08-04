import { notFound } from "next/navigation";
import { Post } from "../types/post";
import postsData from "./posts-data.json";

export interface SinglePost extends Post {
  featured: boolean;
  content: string;
}

const rawPosts: SinglePost[] = postsData as SinglePost[];

/**
 * Normaliza todos los posts una sola vez al cargar el módulo.
 */
const allPosts: SinglePost[] = rawPosts.map((post) => ({
  ...post,

  published: post.published ?? true,

  featured: Boolean(post.featured),

  slug: post.slug?.trim().toLowerCase() ?? "",

  category: post.category?.trim() || "General",

  tags: Array.isArray(post.tags)
    ? post.tags
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [],
}));

/**
 * Índice para búsquedas O(1).
 */
const postsMap = new Map(
  allPosts.map((post) => [post.slug, post] as const)
);

/**
 * Convierte una fecha a timestamp sin producir NaN.
 */
function parsePostDate(date: string): number {
  if (!date) return 0;

  const formatted =
    /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? `${date}T12:00:00Z`
      : date;

  const timestamp = Date.parse(formatted);

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

/**
 * Devuelve todos los posts publicados ordenados
 * por fecha descendente.
 */
export function getPosts(): Post[] {
  const published = allPosts.filter(
    (post) => post.published && post.slug.length > 0
  );

  return published.sort(
    (a, b) => parsePostDate(b.date) - parsePostDate(a.date)
  );
}

/**
 * Obtiene un post por slug.
 */
export function getPost(slug: string): SinglePost {
  if (!slug) {
    notFound();
  }

  let cleanSlug: string;

  try {
    cleanSlug = decodeURIComponent(slug)
      .trim()
      .toLowerCase();
  } catch {
    notFound();
  }

  const post = postsMap.get(cleanSlug);

  if (!post || !post.published) {
    notFound();
  }

  return post;
}

/**
 * Devuelve los posts destacados.
 * Si no existen suficientes, completa con los más recientes.
 */
export function getFeaturedPosts(limit = 3): Post[] {
  const published = getPosts();

  const featured = published.filter(
    (post) => (post as SinglePost).featured
  );

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  const remaining = published.filter(
    (post) => !featured.some((item) => item.slug === post.slug)
  );

  return [...featured, ...remaining].slice(0, limit);
}

/**
 * Categorías únicas ordenadas alfabéticamente.
 */
export function getCategories(): string[] {
  return [...new Set(getPosts().map((post) => post.category))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

/**
 * Tags únicos ordenados alfabéticamente.
 */
export function getTags(): string[] {
  return [
    ...new Set(
      getPosts().flatMap((post) => post.tags)
    ),
  ]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}