import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** 英字の見出し */
  en: string;
  /** 日本語の見出し */
  ja: string;
  /** リード文（任意） */
  lead?: string;
  /** 明るい背景=dark文字 / 暗い背景=light文字 */
  tone?: "light" | "dark";
  align?: "left" | "center";
};

/**
 * 英字＋日本語の組み合わせ見出し。
 */
export default function SectionHeading({
  en,
  ja,
  lead,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`font-display text-sm tracking-[0.35em] uppercase ${
          isDark ? "text-gold-soft" : "text-gold"
        }`}
      >
        {en}
      </p>
      <h2
        className={`mt-4 text-3xl md:text-4xl font-medium leading-snug ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {ja}
      </h2>
      <span
        className={`mt-6 block h-px w-12 bg-gold ${isCenter ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {lead ? (
        <p
          className={`mt-6 text-sm md:text-base leading-loose ${
            isDark ? "text-mist" : "text-stone"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
