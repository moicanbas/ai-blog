"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import MDXComponents from "./MDXComponents";

interface Props {
  source: MDXRemoteSerializeResult;
}

export default function MDXRenderer({ source }: Props) {
  if (!source) return null;

  return (
    <MDXRemote
      {...source}
      components={MDXComponents}
    />
  );
}