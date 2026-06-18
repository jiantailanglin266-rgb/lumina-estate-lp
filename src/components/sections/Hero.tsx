import CTAButton from "@/components/ui/CTAButton";
import { site } from "@/lib/site";

/**
 * ファーストビュー。
 * 背景は都市・街並みを想起させるCSSグラデーション＋グリッド（ダミービジュアル）。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      {/* 背景ビジュアル（ダミー：夜の都市を想起させるグラデーション） */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #0e0e10 0%, #16161a 40%, #22222a 100%)",
          }}
        />
        {/* 摩天楼のシルエット風 */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(14,14,16,1) 0%, rgba(14,14,16,0) 100%), repeating-linear-gradient(90deg, rgba(29,78,216,0.12) 0px, rgba(29,78,216,0.12) 2px, transparent 2px, transparent 60px)",
          }}
        />
        {/* 窓明かり風のドットグラデーション */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(29,78,216,0.25), transparent 35%), radial-gradient(circle at 75% 70%, rgba(29,78,216,0.18), transparent 30%)",
          }}
        />
        {/* ゴールドの斜め光 */}
        <div
          className="absolute -right-1/4 top-0 h-full w-1/2 rotate-12 opacity-20 blur-3xl"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(29,78,216,0.6), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <p className="font-display text-sm tracking-[0.4em] text-brand opacity-0 [animation:fadeUp_1s_0.1s_forwards]">
          CREATING REAL ESTATE VALUE
        </p>

        <h1 className="mt-8 max-w-4xl text-4xl font-light leading-[1.5] text-paper sm:text-5xl md:text-6xl md:leading-[1.45]">
          <span className="block opacity-0 [animation:fadeUp_1s_0.25s_forwards]">
            不動産の価値を、
          </span>
          <span className="mt-2 block text-brand opacity-0 [animation:fadeUp_1s_0.45s_forwards]">
            磨き上げる。
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-sm leading-loose text-mist opacity-0 [animation:fadeUp_1s_0.65s_forwards] md:text-base">
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
          <CTAButton href="#works" variant="ghost">
            売却査定を依頼する
          </CTAButton>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 [animation:fadeUp_1s_1.1s_forwards]">
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-[10px] tracking-[0.3em] text-mist">
            SCROLL
          </span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-brand to-transparent" />
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
