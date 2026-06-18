"use client";

import { useEffect } from "react";
import { navItems, site } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * スマホ用フルスクリーンメニュー。
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // メニュー表示中は背面スクロールを止める
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-paper" />

      <nav className="relative flex h-full flex-col justify-center px-8 pt-20">
        <ul className="space-y-1">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline gap-4 py-3 transition-colors duration-300"
                style={{
                  transitionDelay: open ? `${i * 40 + 100}ms` : "0ms",
                }}
              >
                <span className="font-display text-xs text-stone">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-light text-ink transition-colors duration-300 group-hover:text-stone">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-4">
          <a
            href="#contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm tracking-[0.12em] text-paper"
          >
            無料相談する
          </a>
          <a
            href="#works"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 border border-ink/30 px-6 py-4 text-sm tracking-[0.12em] text-ink"
          >
            売却査定を依頼する
          </a>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-8">
          <p className="text-[10px] tracking-[0.3em] text-stone">CALL</p>
          <a
            href={`tel:${site.tel.replace(/-/g, "")}`}
            className="mt-2 block font-display text-2xl tracking-wide text-ink"
          >
            {site.telLabel}
          </a>
          <p className="mt-1 text-xs text-stone">{site.telHours}</p>
        </div>
      </nav>
    </div>
  );
}
