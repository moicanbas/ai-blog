import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegCalendar } from "react-icons/fa6";
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

export default function PostCard({ slug, title, description, image, category, readingTime, date }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group h-full block">
      <Card className="flex flex-col h-full overflow-hidden hover:border-primary">
        
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {category}
          </span>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="mt-3 flex-1 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <FaRegCalendar />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaRegClock />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>

      </Card>
    </Link>
  );
}