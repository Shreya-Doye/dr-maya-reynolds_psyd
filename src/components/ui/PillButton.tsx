import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200";
  const variants: Record<string, string> = {
    primary:
      "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark",
    secondary:
      "border-secondary bg-secondary text-white hover:bg-secondary-dark hover:border-secondary-dark",
    outline: "border-primary text-primary hover:bg-primary hover:text-white",
  };

  const isHash = href.startsWith("#");

  if (isHash) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
