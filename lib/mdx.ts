import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export async function parseMDX(content: string) {
  if (!content?.trim()) {
    return null;
  }

  try {
    return await serialize(content, {
      parseFrontmatter: true, // 👈 CRUCIAL: limpia el frontmatter (--- title: ... ---) automáticamente
      mdxOptions: {
        format: "mdx",
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings as any,
            {
              behavior: "append",
              properties: {
                className: ["anchor"],
                ariaLabel: "Enlace permanente",
              },
            },
          ],
          [
            rehypePrettyCode as any,
            {
              theme: {
                light: "github-light",
                dark: "github-dark",
              },
              keepBackground: false,
              // Evita inyectar wrappers complejos que rompan la hidratación en RSC
              grid: false,
            },
          ],
        ],
      },
    });
  } catch (error) {
    console.error("[MDX Error] Error serializando contenido:", error);
    return null;
  }
}