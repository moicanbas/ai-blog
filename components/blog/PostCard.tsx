import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";

interface Props {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readingTime: string;
  date: string;
}

export default function PostCard({
  slug,
  title,
  description,
  image,
  category,
  readingTime,
  date,
}: Props) {
  return (
    <Link href={`/blog/${slug}`}>

      <Card className="overflow-hidden h-full">

        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="aspect-video w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="p-6">

          <span className="text-sm font-medium text-violet-500">
            {category}
          </span>

          <h3 className="mt-3 text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          <div className="mt-6 flex justify-between text-sm text-zinc-500">
            <span>{date}</span>
            <span>{readingTime}</span>
          </div>

        </div>

      </Card>

    </Link>
  );
}