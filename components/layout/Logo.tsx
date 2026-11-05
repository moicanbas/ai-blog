import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#276354] text-sm font-bold text-white">
        MC
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-base font-bold text-foreground">
          Mocadevia
        </span>
      </div>
    </Link>
  );
}