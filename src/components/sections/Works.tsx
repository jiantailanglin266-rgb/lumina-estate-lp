import SectionHeading from "@/components/ui/SectionHeading";
import WorkCard from "@/components/ui/WorkCard";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { works } from "@/lib/content";

/**
 * 実績セクション。仕入価格／改修内容／販売価格／売却期間（ダミー）。
 */
export default function Works() {
  return (
    <section id="works" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          en="Works"
          ja="買取再販の実績"
          lead="仕入れから改修、再販までの取引事例をご紹介します。立地と需要に応じた最適なバリューアップで、確かな成果を積み重ねています。"
        />

        <p className="mt-4 text-[11px] tracking-[0.1em] text-mist">
          ※ 掲載内容はすべてイメージ用のダミーデータです。
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <WorkCard work={work} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton href="#contact" variant="outline">
            あなたの物件も査定する
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
