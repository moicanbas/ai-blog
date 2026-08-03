// lib/mdx.ts
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm"; // Opcional: para soporte de tablas/markdown extendido

export async function parseMDX(content: string) {
  if (!content) return null;

  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        format: "mdx",
      },
    });

    return mdxSource;
  } catch (error) {
    console.error("Error serializando el contenido MDX:", error);
    return null;
  }
}