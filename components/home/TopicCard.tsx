import { ReactNode } from "react";
import Card from "../ui/Card"; // Ajusta la ruta si es necesario

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function TopicCard({ icon, title, description }: Props) {
  return (
    <Card className="group relative overflow-hidden border border-border/60 bg-card/50 p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Contenedor del ícono mejorado para SVGs */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>

      <h3 className="text-xl font-bold tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}