import CTAButton from "@/components/ui/CTAButton";
import { site } from "@/lib/site";

/**
 * ファーストビュー。
 * 白基調の明るいビジュアル（淡いグレーの建築的グリッド＋ソフトな陰影）。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-paper"
    >
      {/* 背景ビジュアル（ダミー：白地に淡いグレーのライン） */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #ffffff 0%, #f7f7f8 55%, #eeeeef 100%)",
          }}
        />
        {/* 建築的な縦グリッド */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/4 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%), repeating-linear-gradient(90deg, rgba(24,24,27,0.05) 0px, rgba(24,24,27,0.05) 1px, transparent 1px, transparent 64px)",
          }}
        />
        {/* ソフトなグレーの陰影 */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 85%, rgba(24,24,27,0.06), transparent 38%), radial-gradient(circle at 80% 70%, rgba(24,24,27,0.04), transparent 32%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <p className="font-display text-sm tracking-[0.4em] text-stone opacity-0 [animation:fadeUp_1s_0.1s_forwards]">
          CREATING REAL ESTATE VALUE
        </p>

        <h1 className="mt-8 max-w-4xl text-4xl font-light leading-[1.5] text-ink sm:text-5xl md:text-6xl md:leading-[1.45]">
          <span className="block opacity-0 [animation:fadeUp_1s_0.25s_forwards]">
            不動産の価値を、
          </span>
          <span className="mt-2 block font-normal opacity-0 [animation:fadeUp_1s_0.45s_forwards]">
            磨き上げる。
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-sm leading-loose text-stone opacity-0 [animation:fadeUp_1s_0.65s_forwards] md:text-base">
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

      {/* スクロール誘導 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 [animation:fadeUp_1s_1.1s_forwards]">
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-[10px] tracking-[0.3em] text-stone">
            SCROLL
          </span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-ink to-transparent" />
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
