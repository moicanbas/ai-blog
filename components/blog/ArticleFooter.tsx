import Button from "../ui/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function ArticleFooter() {
  return (
    <footer className="mx-auto mt-24 max-w-3xl overflow-hidden rounded-[2rem] border border-border/50 bg-card/50 p-10 text-center shadow-lg backdrop-blur-sm relative">
      {/* Detalle visual de fondo */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FaWandMagicSparkles className="text-xl" />
        </div>
        
        <h2 className="text-2xl font-bold md:text-3xl">
          ¿Te gustó este artículo?
        </h2>

        <p className="mt-4 max-w-md text-muted-foreground">
          Publico contenido nuevo sobre IA, Python y automatización frecuentemente. No te pierdas las próximas guías.
        </p>
        
        <div className="mt-8">
          <Button href="/blog" className="rounded-full px-8">
            Ver más artículos
          </Button>
        </div>
      </div>
    </footer>
  );
}