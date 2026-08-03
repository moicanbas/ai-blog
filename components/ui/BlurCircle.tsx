import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function BlurCircle({
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
        absolute
        rounded-full
        blur-[120px]
        opacity-30
        bg-violet-400
        `,
        className
      )}
    />
  );
}