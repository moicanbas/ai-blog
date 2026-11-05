"use client";

export default function ThinkingOrb() {
  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center gap-3" role="status">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary motion-reduce:animate-none" />
      <p className="text-sm text-muted">Cargando...</p>
    </div>
  );
}