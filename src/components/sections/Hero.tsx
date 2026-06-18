import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { site } from "@/lib/site";

/**
 * ファーストビュー（分割レイアウト）。
 * 左：白地に黒文字のキャッチコピー＋CTA／右：都市・マンションのキービジュアル。
 * モバイルは「写真 → コピー」の縦積み。
 */
export default function Hero() {
  return (
    <section id="hero" className="relative bg-paper">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ビジュアル（モバイル=上 / PC=右） */}
        <div className="relative order-1 min-h-[52vh] overflow-hidden lg:order-2 lg:min-h-screen">
          <Image
            src="/images/hero-city.png"
            alt="夕暮れの都市と高層マンションの街並み"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* 左端をほんのり白へなじませ、テキスト面との境界を柔らかく（PCのみ） */}
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 22%)",
            }}
          />
        </div>

        {/* コピー（モバイル=下 / PC=左） */}
        <div className="relative order-2 flex items-center px-6 py-16 lg:order-1 lg:px-12 lg:py-0 xl:px-20">
          <div className="w-full max-w-xl">
            <p className="font-display text-sm tracking-[0.4em] text-stone opacity-0 [animation:fadeUp_1s_0.1s_forwards]">
              CREATING REAL ESTATE VALUE
            </p>

            <h1 className="mt-8 text-4xl font-light leading-[1.5] text-ink sm:text-5xl md:leading-[1.45] xl:text-6xl">
              <span className="block opacity-0 [animation:fadeUp_1s_0.25s_forwards]">
                不動産の価値を、
              </span>
              <span className="mt-2 block font-normal opacity-0 [animation:fadeUp_1s_0.45s_forwards]">
                磨き上げる。
              </span>
            </h1>

            <p className="mt-10 max-w-md text-sm leading-loose text-stone opacity-0 [animation:fadeUp_1s_0.65s_forwards] md:text-base">
              中古マンションの仕入れから買取再販まで。
              <br className="hidden sm:block" />
              相場分析・金融機関との連携・出口戦略を一気通貫で。
              <br className="hidden sm:block" />
              私たち{site.company.replace("株式会社", "")}が、資産価値を最大化します。
            </p>

            <div className="mt-12 flex flex-col gap-4 opacity-0 [animation:fadeUp_1s_0.85s_forwards] sm:flex-row">
              <CTAButton href="#contact" variant="primary">
                無料相談する
              </CTAButton>
              <CTAButton href="#works" variant="outline">
                売却査定を依頼する
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* キーフレーム */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeUp"] { opacity: 1 !important; animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
