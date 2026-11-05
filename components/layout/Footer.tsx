import Link from "next/link";
// Usamos FontAwesome 6 desde react-icons (ideal para marcas)
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 py-12 md:py-16 transition-colors">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          
          <Logo />
          
          <p className="max-w-md text-sm text-muted-foreground">
            Desmitificando la Inteligencia Artificial y Python. Guías sencillas, código práctico y desarrollo web para todo el mundo.
          </p>

          {/* Navegación del Footer */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Inicio</Link>
            <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</Link>
            <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">Sobre mí</Link>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-5">
            {/* GitHub - Hover neutral adaptativo */}
            <a 
              href="https://github.com/moicanbas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaGithub className="text-lg" />
              <span className="sr-only">GitHub</span>
            </a>
            
            {/* LinkedIn - Hover color marca */}
            <a 
              href="https://www.linkedin.com/in/ing-mocaba/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaLinkedin className="text-lg" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a
              href="https://www.tiktok.com/@mocadevia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaTiktok className="text-lg" />
              <span className="sr-only">TikTok</span>
            </a>

            {/* YouTube - Link con autososcribe y Hover color marca */}
            <a 
              href="https://www.youtube.com/@mocadevia?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-md p-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaYoutube className="text-lg" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-1 border-t border-border/40 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} Moises Cantillo. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}