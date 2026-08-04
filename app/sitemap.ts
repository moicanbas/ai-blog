import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

// Modifica esta URL según el dominio final de tu proyecto
const SITE_URL = "https://mocadevia.online";

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Obtenemos todos los posts publicados
  const posts = getPosts();

  // Mapeamos las publicaciones a URLs dinámicas del sitemap
  const blogPostsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Definimos las páginas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...blogPostsEntries];
}