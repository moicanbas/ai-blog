"use client";

export default function ThinkingOrb() {
  return (
    <div className="flex min-h-[65vh] w-full flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        {/* Glow difuminado externo con pulso */}
        <div className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-50 blur-3xl animate-pulse dark:opacity-30" />

        {/* Anillo exterior rotatorio */}
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-secondary p-[2px] shadow-lg animate-spin [animation-duration:8s]">
          <div className="h-full w-full rounded-full bg-background/80 backdrop-blur-md" />
        </div>

        {/* Núcleo de luz central */}
        <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary blur-xs animate-ping opacity-60" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-muted animate-pulse">
        Pensando...
      </p>
    </div>
  );
}