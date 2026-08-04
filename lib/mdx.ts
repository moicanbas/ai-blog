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
      mdxOptions: {
        format: "mdx",

        remarkPlugins: [remarkGfm],

        rehypePlugins: [
          rehypeSlug,

          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["anchor"],
                ariaLabel: "Enlace permanente",
              },
            },
          ],

          [
            rehypePrettyCode,
            {
              theme: {
                light: "github-light",
                dark: "github-dark",
              },
              keepBackground: false,
            },
          ]
        ],
      },
    });
  } catch (error) {
    console.error("[MDX] Error serializando contenido:", error);
    return null;
  }
}