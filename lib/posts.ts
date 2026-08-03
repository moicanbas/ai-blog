import { notFound } from "next/navigation";
import { Post } from "../types/post";
import postsData from "./posts-data.json";

export interface SinglePost extends Post {
  featured: boolean;
  content: string;
}

// 1. Normalización previa de todos los posts al cargar el módulo
const rawPosts = (postsData as unknown as SinglePost[]) || [];

const allPosts: SinglePost[] = rawPosts.map((post) => ({
  ...post,
  // Si no se especifica 'published', por defecto lo tratamos como true si existe el post
  published: post.published !== undefined ? Boolean(post.published) : true,
  featured: Boolean(post.featured),
  tags: Array.isArray(post.tags) ? post.tags : [],
  category: post.category || "General",
  // Normalizar slug
  slug: post.slug ? post.slug.trim().toLowerCase() : "",
}));

// Helper seguro para parsear fechas sin romper el sort ni generar NaN
function parsePostDate(dateString: string): number {
  if (!dateString) return 0;
  // Si la fecha es YYYY-MM-DD, añadir hora neutra para evitar problemas de zona horaria UTC
  const formattedDate = dateString.length === 10 ? `${dateString}T12:00:00Z` : dateString;
  const timestamp = new Date(formattedDate).getTime();
  return isNaN(timestamp) ? 0 : timestamp;
}

/**
 * Obtiene todos los posts publicados ordenados por fecha descendente.
 */
export function getPosts(): Post[] {
  return allPosts
    .filter((post) => post.published && post.slug !== "")
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));
}

/**
 * Obtiene un post específico por su slug.
 */
export function getPost(slug: string): SinglePost {
  if (!slug) notFound();

  // Decodificar por si la URL trae caracteres codificados (%20, etc.)
  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();
  
  const post = allPosts.find((p) => p.slug === cleanSlug);

  if (!post || !post.published) {
    notFound();
  }

  return post;
}

/**
 * Obtiene los posts destacados. Si no hay suficientes destacados explícitos,
 * rellena con los más recientes para no romper la UI.
 */
export function getFeaturedPosts(limit = 3): Post[] {
  const published = getPosts();
  const featured = published.filter((post) => (post as SinglePost).featured);

  // Fallback senior: Si hay menos destacados de los solicitados, completa con los últimos publicados
  if (featured.length < limit) {
    const remaining = published.filter((p) => !featured.some((f) => f.slug === p.slug));
    return [...featured, ...remaining].slice(0, limit);
  }

  return featured.slice(0, limit);
}

/**
 * Obtiene todas las categorías únicas.
 */
export function getCategories(): string[] {
  const categories = getPosts().map((post) => post.category).filter(Boolean);
  return Array.from(new Set(categories));
}

/**
 * Obtiene todos los tags únicos.
 */
export function getTags(): string[] {
  const tags = getPosts().flatMap((post) => post.tags || []);
  return Array.from(new Set(tags.filter(Boolean)));
}