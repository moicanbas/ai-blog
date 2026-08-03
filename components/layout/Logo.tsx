import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-orange-400 text-lg font-bold text-white shadow-lg">
        MC
      </div>

      <div className="hidden sm:block">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Mocadevia
        </p>

        <h1 className="font-bold tracking-tight">
          IA & Python sin enredos
        </h1>
      </div>
    </Link>
  );
}