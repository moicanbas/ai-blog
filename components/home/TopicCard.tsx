import { ReactNode } from "react";
import Card from "../ui/Card";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function TopicCard({ icon, title, description }: Props) {
  return (
    <Card className="group relative overflow-hidden border border-border bg-card p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-2xl transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="text-xl font-bold tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </Card>
  );
}