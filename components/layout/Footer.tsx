import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12 transition-colors">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="font-bold text-foreground">
              IA & Python sin enredos
            </h3>

            <p className="mt-2 text-sm text-muted">
              Tecnología explicada para todos.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-muted transition-colors hover:text-foreground"
            >
              Inicio
            </Link>

            <Link
              href="/blog"
              className="text-muted transition-colors hover:text-foreground"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="text-muted transition-colors hover:text-foreground"
            >
              Sobre mí
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Moises Cantillo.
        </div>
      </Container>
    </footer>
  );
}