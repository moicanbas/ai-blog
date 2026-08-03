"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = useCallback(() => {
    if (isPending) return;
    setIsPending(true);

    const nextTheme = isDark ? "light" : "dark";

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }

    setTimeout(() => {
      setIsPending(false);
    }, 300);
  }, [isDark, isPending, setTheme]);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-xl border border-border bg-card opacity-50" />
    );
  }

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      disabled={isPending}
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-foreground/5 hover:shadow-md active:scale-90 cursor-pointer disabled:opacity-80"
    >
      {/* Icono del Sol (Tema Oscuro activo) */}
      <Sun
        size={18}
        className={`absolute text-amber-400 transition-all duration-500 ease-out ${
          isDark
            ? "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Icono de la Luna (Tema Claro activo) */}
      <Moon
        size={18}
        className={`absolute text-indigo-600 dark:text-indigo-400 transition-all duration-500 ease-out ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_6px_rgba(79,70,229,0.3)]"
        }`}
      />
    </button>
  );
}