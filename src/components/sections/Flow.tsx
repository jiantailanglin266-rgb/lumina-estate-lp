import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { flow } from "@/lib/content";

/**
 * 取引の流れ。6ステップを縦のタイムラインで表示。
 */
export default function Flow() {
  return (
    <section id="flow" className="bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          en="Flow"
          ja="取引の流れ"
          lead="お問い合わせから決済・引渡しまで、各ステップを丁寧にご案内します。査定だけのご相談も歓迎です。"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {flow.map((step, i) => (
            <Reveal key={step.no} delay={(i % 3) * 80}>
              <div className="group relative h-full border border-ink/10 bg-paper p-8 transition-all duration-500 hover:border-brand/50">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-mist transition-colors duration-500 group-hover:text-brand">
                    {step.no}
                  </span>
                  <span className="font-display text-[11px] tracking-[0.25em] uppercase text-brand">
                    {step.en}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-loose text-stone">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
