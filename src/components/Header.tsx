"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import MobileMenu from "./MobileMenu";

/**
 * 共通ヘッダー。スクロールで背景を出し、PCはナビ、SPはハンバーガー。
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_rgba(29,78,216,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* ロゴ */}
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.28em] text-paper">
              {site.brand}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.3em] text-brand">
              REAL ESTATE
            </span>
          </a>

          {/* PCナビ */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.1em] text-mist transition-colors duration-300 hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 border border-brand px-5 py-2.5 text-xs tracking-[0.12em] text-brand transition-all duration-300 hover:bg-brand hover:text-ink"
            >
              無料相談する
            </a>
          </nav>

          {/* SPハンバーガー */}
          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative h-8 w-8 lg:hidden"
          >
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 bg-paper transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 bg-paper transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 bg-paper transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
