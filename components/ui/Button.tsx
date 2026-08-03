import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: Props) {
  const styles = {
    primary:
      "bg-primary text-white shadow-xs hover:opacity-90 active:scale-95",

    outline:
      "border border-border bg-card text-foreground shadow-xs hover:border-primary/40 hover:bg-foreground/5 active:scale-95",

    ghost:
      "text-foreground hover:bg-foreground/5 active:scale-95",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}