import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ArticleContent({ children }: Props) {
  return (
    <article className="prose mx-auto max-w-4xl prose-headings:scroll-mt-24 transition-colors">
      {children}
    </article>
  );
}