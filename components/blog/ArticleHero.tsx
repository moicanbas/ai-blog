import { Post } from "@/types/post";

interface Props {

    post: Post;

}

import Image from "next/image";

export default function ArticleHero({

    post

}: Props) {

    return (

        <header className="mb-16">

            <span
                className="
inline-flex
rounded-full
bg-violet-100
px-4
py-1
text-sm
text-violet-700
"
            >

                {post.category}

            </span>

            <h1
                className="
mt-6
text-5xl
font-black
leading-tight
md:text-7xl
"
            >

                {post.title}

            </h1>

            <p
                className="
mt-8
max-w-3xl
text-xl
text-zinc-600
dark:text-zinc-400
"
            >

                {post.description}

            </p>

            <div
                className="
mt-8
flex
flex-wrap
gap-4
text-sm
text-zinc-500
"
            >

                <span>

                    👤 {post.author}

                </span>

                <span>

                    📅 {post.date}

                </span>

                <span>

                    ⏱ {post.readingTime}

                </span>

            </div>

            <Image

                src={post.image}

                alt={post.title}

                width={1600}

                height={900}

                className="
mt-12
rounded-[40px]
"

                priority

            />

        </header>

    )

}