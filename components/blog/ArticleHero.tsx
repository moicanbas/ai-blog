import Image from "next/image";
import { FaUser, FaCalendarDay, FaClock } from "react-icons/fa6";
import { Post } from "@/types/post";

interface Props {
  post: Post;
}

export default function ArticleHero({ post }: Props) {
  return (
    <header className="mx-auto max-w-4xl mb-12 md:mb-20 text-center">
      <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
        {post.category}
      </span>

      <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
        {post.title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-balance">
        {post.description}
      </p>

      {/* Metadatos con Iconos */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
        <div className="flex items-center gap-2">
          <FaUser className="text-primary/70" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarDay className="text-primary/70" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-primary/70" />
          <span>{post.readingTime}</span>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-md border border-border">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="aspect-video w-full object-cover"
          priority
        />
      </div>
    </header>
  );
}