import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GradientText({
  children,
}: Props) {
  return (
    <span
      className="
      bg-gradient-to-r
      from-violet-500
      via-fuchsia-500
      to-orange-400
      bg-clip-text
      text-transparent
      "
    >
      {children}
    </span>
  );
}
