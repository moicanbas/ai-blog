"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar al cambiar de ruta
  useEffect(() => setIsOpen(false), [pathname]);

  // Prevenir scroll cuando está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Alternar menú"
      >
        {/* Icono de Hamburguesa animado */}
        <div className="flex w-4 flex-col gap-1">
          <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </div>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Panel Desplegable (Drawer) */}
      <div
        className={`fixed inset-x-4 top-24 z-50 rounded-2xl border border-border/50 bg-background/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon size={18} className={isActive ? "text-primary" : "text-muted-foreground"} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}