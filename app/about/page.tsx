import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ArticleContent from "@/components/blog/ArticleContent";
import MDXRenderer from "@/components/mdx/MDXRenderer";

import { parseMDX } from "@/lib/mdx";

// Generación estática pura
export const dynamic = "error";

const ABOUT_PATH = path.join(
  process.cwd(),
  "content",
  "pages",
  "about.mdx"
);

export default async function AboutPage() {
  let source: string;

  try {
    source = fs.readFileSync(ABOUT_PATH, "utf8");
  } catch (error) {
    console.error("[About] No se pudo leer about.mdx", error);
    notFound();
  }

  const mdxSource = await parseMDX(source);

  if (!mdxSource) {
    notFound();
  }

  return (
    <Container className="py-20">
      <ArticleContent>
        <MDXRenderer source={mdxSource} />
      </ArticleContent>
    </Container>
  );
}