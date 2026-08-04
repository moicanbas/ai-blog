import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import ArticleContent from "@/components/blog/ArticleContent";
import MDXRenderer from "@/components/mdx/MDXRenderer";

import { parseMDX } from "@/lib/mdx";

// 🔴 GARANTÍA CLOUDFLARE EDGE: Forzamos Generación Estática (SSG Puro)
// Todo el código de fs y Node.js se ejecutará ÚNICAMENTE durante el 'npm run build'
export const dynamic = "error";

// SEO Metadata para la página de About
export const metadata: Metadata = {
  title: "Sobre mí | Mocadevia",
  description: "Conoce más sobre el proyecto, trayectoria y filosofía de desarrollo.",
};

export default async function AboutPage() {
  // 1. Construir la ruta absoluta de forma segura dentro del contexto de ejecución SSG
  const filePath = path.join(process.cwd(), "content", "pages", "about.mdx");

  // 2. Control anti-errores: Verificar existencia previa antes de leer
  if (!fs.existsSync(filePath)) {
    console.error(`[AboutPage Error]: Archivo no encontrado en ${filePath}`);
    notFound();
  }

  let source = "";

  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("[AboutPage Error]: Fallo al leer el archivo físico about.mdx", error);
    notFound();
  }

  // 3. Sanitizar y serializar el contenido MDX
  const mdxSource = await parseMDX(source);

  if (!mdxSource) {
    console.error("[AboutPage Error]: parseMDX no pudo procesar el contenido de about.mdx");
    notFound();
  }

  // 4. Renderizado limpio e inyectado
  return (
    <Container className="py-20">
      <ArticleContent>
        <MDXRenderer source={mdxSource} />
      </ArticleContent>
    </Container>
  );
}