import { Post } from "@/types/post";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

export default function PostGrid({ posts }: Props) {
  if (!posts.length) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold">
          Aún no hay artículos.
        </h2>

        <p className="mt-4 text-zinc-500">
          Muy pronto aparecerán nuevas publicaciones.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
      {posts.map(post => (
        <PostCard
          key={post.slug}
          {...post}
        />
      ))}
    </div>
  );
}