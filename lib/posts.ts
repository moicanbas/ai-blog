import fs from "node:fs";
import path from "node:path";

import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post } from "../types/post";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

/**
 * Devuelve:
 * [
 *   "como-piensa-un-llm/index.mdx",
 *   "que-es-un-token/index.mdx"
 * ]
 */
function getPostFiles() {
  return fg.sync("*/index.mdx", {
    cwd: POSTS_PATH,
  });
}

function readPost(file: string) {
  const fullPath = path.join(POSTS_PATH, file);

  const source = fs.readFileSync(fullPath, "utf8");

  // slug = nombre de la carpeta
  const slug = path.dirname(file);

  return {
    slug,
    source,
  };
}

function parsePost(file: string): Post {
  const { slug, source } = readPost(file);

  const { data, content } = matter(source);

  return {
    slug,

    title: data.title,

    description: data.description,

    date: data.date,

    category: data.category,

    image: data.image,

    author: data.author,

    published: data.published,

    tags: data.tags ?? [],

    readingTime: readingTime(content).text,
  };
}

export function getPosts() {
  return getPostFiles()
    .map(parsePost)
    .filter(post => post.published)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getPost(slug: string) {
  const file = path.join(slug, "index.mdx");

  const { source } = readPost(file);

  const { data, content } = matter(source);

  return {
    slug,

    title: data.title,

    description: data.description,

    author: data.author,

    category: data.category,

    image: data.image,

    date: data.date,

    featured: data.featured,

    published: data.published,

    tags: data.tags ?? [],

    readingTime: readingTime(content).text,

    content,
  };
}

export function getFeaturedPosts(limit = 3) {
  return getPosts().slice(0, limit);
}

export function getCategories() {
  return [...new Set(getPosts().map(post => post.category))];
}

export function getTags() {
  return [...new Set(getPosts().flatMap(post => post.tags))];
}