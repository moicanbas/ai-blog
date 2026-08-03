import fs from "node:fs";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";

import MDXComponents from "@/components/mdx/MDXComponents";

export async function parseMDX(source: string) {
  const { content } = await compileMDX({
    source,

    components: MDXComponents,

    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}

export async function parseMDXFile(file: string) {
  const fullPath = path.join(process.cwd(), "content", file);

  const source = fs.readFileSync(fullPath, "utf8");

  return parseMDX(source);
}