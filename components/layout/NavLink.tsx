"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `
        transition-colors
        font-medium
        hover:text-violet-500
        `,
        active &&
          "text-violet-500"
      )}
    >
      {children}
    </Link>
  );
}