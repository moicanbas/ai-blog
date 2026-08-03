import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ArticleContent from "@/components/blog/ArticleContent";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import { parseMDX } from "@/lib/mdx";

// 🔴 GARANTÍA SR PARA CLOUDFLARE: Forzamos generación estática pura
export const dynamic = "error";

export default async function AboutPage() {
  // 1. Ruta exacta al archivo en tu estructura
  const filePath = path.join(process.cwd(), "content", "pages", "about.mdx");
  let rawContent = "";

  try {
    if (!fs.existsSync(filePath)) {
      console.error(`Archivo no encontrado en la ruta: ${filePath}`);
      notFound();
    }
    rawContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error leyendo el archivo about.mdx:", error);
    notFound();
  }

  // 2. Serialización estática del MDX
  const mdxSource = await parseMDX(rawContent);

  if (!mdxSource) {
    notFound();
  }

  // 3. Renderizado con el componente preparado para Client-Hydration
  return (
    <Container className="py-20">
      <ArticleContent>
        <MDXRenderer source={mdxSource} />
      </ArticleContent>
    </Container>
  );
}