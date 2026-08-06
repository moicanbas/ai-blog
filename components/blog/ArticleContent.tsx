import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ArticleContent({ children }: Props) {
  return (
    <article className="
      prose prose-zinc dark:prose-invert mx-auto max-w-3xl
      prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight
      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
      prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-4
      prose-strong:text-foreground prose-strong:font-semibold
      prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-xl
      prose-img:rounded-3xl prose-img:shadow-lg
      transition-colors
    ">
      {children}
    </article>
  );
}