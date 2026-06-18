import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  /** primary=黒塗り / outline=黒枠 / ghost=淡いグレー枠 */
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-[0.12em] transition-all duration-300 ease-out";

const variants: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary: "bg-ink text-paper hover:bg-graphite",
  outline: "border border-ink/30 text-ink hover:bg-ink hover:text-paper",
  ghost:
    "border border-ink/15 text-stone hover:border-ink hover:text-ink",
};

/**
 * 共通CTAボタン。矢印は控えめにスライド。
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const isAnchor = href.startsWith("#");
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (isAnchor) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
