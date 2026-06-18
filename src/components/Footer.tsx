import { navItems, site } from "@/lib/site";

/**
 * 共通フッター。
 */
export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* ブランド */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-[0.28em]">
              {site.brand}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.3em] text-mist">
              REAL ESTATE
            </p>
            <p className="mt-8 max-w-sm text-sm leading-loose text-mist">
              {site.catch}
              <br />
              中古マンションの仕入れから買取再販まで、一気通貫で資産価値を最大化します。
            </p>
          </div>

          {/* ナビ */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] text-mist">SITE MAP</p>
            <ul className="mt-6 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-mist transition-colors duration-300 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 連絡先 */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] text-mist">CONTACT</p>
            <a
              href={`tel:${site.tel.replace(/-/g, "")}`}
              className="mt-6 block font-display text-3xl tracking-wide"
            >
              {site.telLabel}
            </a>
            <p className="mt-1 text-xs text-mist">{site.telHours}</p>
            <p className="mt-6 text-sm leading-loose text-mist">
              {site.address}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border border-paper/50 px-6 py-3 text-xs tracking-[0.12em] text-paper transition-all duration-300 hover:bg-paper hover:text-ink"
            >
              無料相談する
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-[11px] tracking-[0.1em] text-stone md:flex-row md:items-center md:justify-between">
          <p>{site.license}</p>
          <p>
            © {year} {site.company} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
