import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Sobre mí",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* MobileMenu */}
          </div>
        </nav>
      </Container>
    </header>
  );
}