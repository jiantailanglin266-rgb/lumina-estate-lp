import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { site } from "@/lib/site";
// 静的インポートにすることで、GitHub Pages の basePath を含む正しいパスが出力される
import heroSlide1 from "../../../public/images/hero-slide-1.png";
import heroSlide2 from "../../../public/images/hero-slide-2.png";

/**
 * ファーストビュー。
 * 背景キービジュアルを2枚（ブランドロゴ／AIシティスケープ）で
 * 4秒ずつクロスフェード（CSSアニメーションのみ・JS不要）。
 * 下部に日本語コピー＋CTAを白スクリム上に重ねる。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-paper"
    >
      {/* 背景スライド（クロスフェード） */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroSlide1}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-slide hero-slide--1 object-cover object-center"
        />
        <Image
          src={heroSlide2}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-slide hero-slide--2 object-cover object-top"
        />
      </div>

      {/* 下部の可読性スクリム（白）。日本語コピーを座らせる */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 12%, rgba(255,255,255,0.55) 24%, rgba(255,255,255,0) 40%)",
        }}
      />

      {/* コピー（下部・左寄せ） */}
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

      {/* アニメーション定義 */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* 2枚クロスフェード：1サイクル8秒（各4秒表示・約0.5秒で交差） */
        @keyframes heroFade {
          0%     { opacity: 1; }
          43.75% { opacity: 1; }
          50%    { opacity: 0; }
          93.75% { opacity: 0; }
          100%   { opacity: 1; }
        }
        .hero-slide {
          animation: heroFade 8s ease-in-out infinite;
          will-change: opacity;
        }
        .hero-slide--2 { animation-delay: -4s; }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeUp"] { opacity: 1 !important; animation: none !important; transform: none !important; }
          .hero-slide { animation: none !important; }
          .hero-slide--1 { opacity: 1 !important; }
          .hero-slide--2 { opacity: 0 !important; }
        }
      `}</style>
    </section>
  );
}
