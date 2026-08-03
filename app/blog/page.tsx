"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import PostGrid from "@/components/blog/PostGrid";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const allPosts = getPosts();
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrado reactivo por título, descripción o tags
  const filteredPosts = allPosts.filter((post) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const matchTitle = post.title.toLowerCase().includes(query);
    const matchDescription = post.description.toLowerCase().includes(query);
    const matchTags = post.tags?.some((tag) =>
      tag.toLowerCase().includes(query)
    );

    return matchTitle || matchDescription || matchTags;
  });

  return (
    <Container>
      <div className="py-20">
        <h1 className="mb-6 text-6xl font-black">Blog</h1>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Artículos sobre Inteligencia Artificial, Python y tecnología explicados
          con ejemplos sencillos.
        </p>

        {/* Input de Búsqueda */}
        <div className="relative mb-12 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por título, tema o etiqueta..."
            className="w-full rounded-xl border border-border/60 bg-background/50 py-3.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
              aria-label="Limpiar búsqueda"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Lista de Resultados o Estado Vacío */}
        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <div className="rounded-2xl border border-border/40 bg-accent/20 py-16 text-center">
            <p className="text-lg font-medium text-foreground">
              No encontramos artículos para "{searchQuery}"
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Intenta buscar con otros términos o palabras clave.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}