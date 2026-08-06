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
        <nav className="flex h-16 md:h-20 items-center justify-between">
          <Logo />

          {/* Menú Desktop - Minimalista con efecto de pastilla en hover */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/50 bg-background/50 px-3 py-2 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground transition-colors"} />
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