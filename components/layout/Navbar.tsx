"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, UserCircle2 } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

// Añadimos los iconos directamente a la configuración de rutas
export const navLinks = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Sobre mí", href: "/about", icon: UserCircle2 },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          {/* Menú Desktop - Minimalista con efecto de pastilla en hover */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <MobileMenu links={navLinks} />
          </div>
        </nav>
      </Container>
    </header>
  );
}