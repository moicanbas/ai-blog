import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "content/posts");
const OUTPUT_PATH = path.join(process.cwd(), "lib/posts-data.json");

function buildPosts() {
  if (!fs.existsSync(POSTS_PATH)) {
    console.warn("No se encontró el directorio content/posts");
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify([]));
    return;
  }

  const folders = fs.readdirSync(POSTS_PATH, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const posts = folders.map((slug) => {
    const fullPath = path.join(POSTS_PATH, slug, "index.mdx");
    if (!fs.existsSync(fullPath)) return null;

    const source = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      image: data.image ?? "",
      author: data.author ?? "",
      published: Boolean(data.published),
      featured: Boolean(data.featured),
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
      content,
    };
  }).filter(Boolean);

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));
  console.log(`✅ Cargados ${posts.length} posts en lib/posts-data.json`);
}

buildPosts();