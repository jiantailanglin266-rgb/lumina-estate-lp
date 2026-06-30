import Image from "next/image";
import { site } from "@/lib/site";
// 静的インポートにすることで、GitHub Pages の basePath を含む正しいパスが出力される
import heroSlide1 from "../../../public/images/hero-slide-1.png";
import heroSlide2 from "../../../public/images/hero-slide-2.png";

/**
 * ファーストビュー。
 * 背景キービジュアルを2枚（ブランドロゴ／AIシティスケープ）で
 * 4秒ずつ・約2秒かけてゆったりクロスフェード（CSSアニメーションのみ）。
 * テキスト・CTAは表示せず画像のみ（SEO用に視覚非表示の見出しのみ保持）。
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-paper"
    >
      {/* SEO・スクリーンリーダー用の見出し（視覚的には非表示） */}
      <h1 className="sr-only">
        {site.brand}｜{site.catch}
      </h1>

      {/* 背景スライド（クロスフェード） */}
      <Image
        src={heroSlide1}
        alt={`${site.brand} ブランドキービジュアル`}
        fill
        priority
        sizes="100vw"
        className="hero-slide hero-slide--1 object-cover object-center"
      />
      <Image
        src={heroSlide2}
        alt="テクノロジーが切り拓く次世代の不動産 — 都市のスカイライン"
        fill
        priority
        sizes="100vw"
        className="hero-slide hero-slide--2 object-cover object-top"
      />

      {/* アニメーション定義 */}
      <style>{`
        /* 2枚クロスフェード：1サイクル12秒（各4秒表示・約2秒かけてゆったり交差） */
        @keyframes heroFade {
          0%      { opacity: 1; }
          33.33%  { opacity: 1; }
          50%     { opacity: 0; }
          83.33%  { opacity: 0; }
          100%    { opacity: 1; }
        }
        .hero-slide {
          animation: heroFade 12s ease-in-out infinite;
          will-change: opacity;
        }
        .hero-slide--2 { animation-delay: -6s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide { animation: none !important; }
          .hero-slide--1 { opacity: 1 !important; }
          .hero-slide--2 { opacity: 0 !important; }
        }
      `}</style>
    </section>
  );
}
