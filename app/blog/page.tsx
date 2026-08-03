import Container from "@/components/layout/Container";
import PostGrid from "@/components/blog/PostGrid";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {

    const posts = getPosts();

    return (

        <Container>
            <div className="py-20">
                <h1 className="mb-6 text-6xl font-black" > Blog</h1>
                <p className="mb-16 max-w-2xl text-lg text-zinc-600">
                    Artículos sobre Inteligencia Artificial,
                    Python y tecnología explicados con ejemplos sencillos.
                </p>

                <PostGrid posts={posts} />

            </div>

        </Container>

    )

}