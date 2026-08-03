import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post } from "../types/post";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

/**
 * Lee los directorios dentro de content/posts de forma nativa sin depender de globs
 */
function getPostFolders(): string[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }

  return fs.readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function readPost(slug: string) {
  const fullPath = path.join(POSTS_PATH, slug, "index.mdx");

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post no encontrado en la ruta: ${fullPath}`);
  }

  const source = fs.readFileSync(fullPath, "utf8");

  return {
    slug,
    source,
  };
}

function parsePost(slug: string): Post {
  const { source } = readPost(slug);
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    image: data.image,
    author: data.author,
    published: Boolean(data.published),
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
  };
}

export function getPosts(): Post[] {
  return getPostFolders()
    .map(parsePost)
    .filter((post) => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPost(slug: string) {
  const { source } = readPost(slug);
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    author: data.author,
    category: data.category,
    image: data.image,
    date: data.date,
    featured: Boolean(data.featured),
    published: Boolean(data.published),
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  };
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