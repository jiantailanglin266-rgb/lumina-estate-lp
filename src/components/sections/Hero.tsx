import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { site } from "@/lib/site";
// 静的インポートにすることで、GitHub Pages の basePath を含む正しいパスが出力される
import heroKey from "../../../public/images/hero-key.png";

/**
 * ファーストビュー。
 * 都市キービジュアルを全面背景に敷き、下部に日本語コピー＋CTAを重ねる。
 * 下部には白のスクリムを敷き、ダーク文字の可読性を確保。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-paper"
    >
      {/* キービジュアル */}
      <Image
        src={heroKey}
        alt="夕景の都市と高層ビル群のスカイライン"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* 下部の可読性スクリム（白）。日本語コピーを英語見出しと分離 */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.97) 24%, rgba(255,255,255,0.7) 38%, rgba(255,255,255,0) 52%)",
        }}
      />

      {/* コピー（下部・左寄せ）。英語見出しと衝突しないよう下部にコンパクトに配置 */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10 lg:pb-16">
          <div className="max-w-2xl">
            <span
              className="mb-5 block h-px w-16 bg-gold opacity-0 [animation:fadeUp_1s_0.5s_forwards]"
              aria-hidden="true"
            />

            <h1 className="text-2xl font-medium leading-[1.5] text-ink sm:text-3xl md:text-4xl">
              <span className="opacity-0 [animation:fadeUp_1s_0.6s_forwards]">
                不動産の価値を、
              </span>
              <span className="text-gold opacity-0 [animation:fadeUp_1s_0.7s_forwards]">
                磨き上げる。
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone opacity-0 [animation:fadeUp_1s_0.8s_forwards] md:text-base">
              中古マンションの仕入れから買取再販まで。テクノロジーと相場分析で、出口戦略まで一気通貫。私たち{site.brand}が資産価値を最大化します。
            </p>

            <div className="mt-8 flex flex-col gap-4 opacity-0 [animation:fadeUp_1s_0.95s_forwards] sm:flex-row">
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
