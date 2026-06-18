import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { strengths } from "@/lib/content";

/**
 * 強み。明るいグレー背景に白カードで、信頼感・洗練を演出。
 */
export default function Strengths() {
  const stats = [
    { value: "1都3県", label: "対応エリア" },
    { value: "最短即日", label: "スピード査定" },
    { value: "一気通貫", label: "仕入〜販売" },
  ];

  return (
    <section id="strengths" className="bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          en="Our Strengths"
          ja="選ばれる理由"
          lead="数字とネットワーク、そして出口までを見据える設計力。私たちの強みは、確かな実行力に裏打ちされています。"
        />

        {/* 上部スタッツ */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-y border-ink/10 py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-ink md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.2em] text-stone">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* 強みリスト */}
        <div className="mt-12 grid gap-px md:grid-cols-2">
          {strengths.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 80}>
              <div className="flex h-full gap-6 border border-ink/10 bg-paper p-8 transition-colors duration-500 hover:border-ink/30">
                <span className="font-display text-2xl text-ink">{s.no}</span>
                <div>
                  <p className="font-display text-[11px] tracking-[0.25em] uppercase text-stone">
                    {s.en}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-stone">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
