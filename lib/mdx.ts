import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx/MDXComponents"; // Ajusta el path real donde esté tu MDXComponents

export async function parseMDX(source: string) {
  if (!source) return null;

  const { content } = await compileMDX({
    source,
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}