import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
      {/* Icono del Logo */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-orange-400 text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-violet-500/25">
        <span className="text-sm font-bold tracking-wider">MC</span>
        {/* Destello sutil */}
        <Sparkles size={10} className="absolute -right-1 -top-1 text-orange-300" />
      </div>

      {/* Texto del Logo */}
      <div className="hidden sm:flex flex-col justify-center">
        <span className="text-base font-bold tracking-tight text-foreground">
          Mocadevia
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          IA & Python sin enredos
        </span>
      </div>
    </Link>
  );
}