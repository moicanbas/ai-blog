interface NumberCardProps {
  number: string;
  label: string;
}

export function NumberCard({ number, label }: NumberCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
        {number}
      </div>

      <p className="mt-2 text-sm font-medium text-muted">
        {label}
      </p>
    </div>
  );
}