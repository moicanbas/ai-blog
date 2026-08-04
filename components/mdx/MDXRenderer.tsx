"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents from "./MDXComponents";

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!source) return null;

  // Si aún no se ha montado en el cliente, renderizamos un skeleton/fallback
  // Esto evita que el ejecutor del servidor choque con el 'useState' durante el prerender.
  if (!isMounted) {
    return (
      <div className="animate-pulse space-y-4 py-4">
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6"></div>
      </div>
    );
  }

  return <MDXRemote {...source} components={MDXComponents} />;
}