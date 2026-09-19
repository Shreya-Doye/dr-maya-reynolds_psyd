import Link from "next/link";
import type { ReactNode } from "react";

export default function UnderlineLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink underline decoration-secondary underline-offset-8 decoration-1 hover:text-primary hover:decoration-primary transition-colors ${className}`;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
