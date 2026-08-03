"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Botón corregido con centrado perfecto y match visual con ThemeToggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-foreground transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <div className="flex h-4 w-4 flex-col justify-between items-center">
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          tabIndex={-1}
          role="presentation"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        />
      )}

      {/* Drawer / Panel Desplegable */}
      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-border/60 bg-background/95 p-6 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}