import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import aboutCity from "../../../public/images/about-city.png";

/**
 * 私たちについて。理念／買取再販の強み／一気通貫。
 */
export default function About() {
  const pillars = [
    {
      no: "01",
      title: "買取再販に強い",
      body: "築古・現状渡しの物件も、最適なリノベーションで再生。立地と需要を読み、新たな価値を加えて市場へ送り出します。",
    },
    {
      no: "02",
      title: "一気通貫の対応",
      body: "仕入れ・改修・販売までを自社で完結。スピードと品質、価格のすべてに責任を持って取り組みます。",
    },
    {
      no: "03",
      title: "出口から逆算",
      body: "「いくらで・いつ売れるか」を起点に設計。お客様の資産形成と、私たちの事業の双方に誠実であり続けます。",
    },
  ];

  return (
    <section id="about" className="bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              en="About Us"
              ja="価値を見極め、価値を創る。"
              lead="私たちは、不動産という資産に新たな価値を吹き込む会社です。市場をデータで読み解き、磨き上げ、次の所有者へとつなぐ。その一連のプロセスすべてに、誠実さと専門性を込めています。"
            />

            {/* 街並みビジュアル（ゴールドのオフセット額装） */}
            <Reveal className="mt-12" delay={120}>
              <figure>
                <div className="relative">
                  <span
                    className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold/50 sm:block"
                    aria-hidden="true"
                  />
                  <div className="group relative aspect-[4/5] overflow-hidden bg-cloud">
                    <Image
                      src={aboutCity}
                      alt="水辺に建つモダンなタワーマンションの街並み"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.14em] text-stone">
                  <span className="h-px w-6 bg-gold" aria-hidden="true" />
                  水辺に広がる、次世代の住まい。
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px border-t border-ink/10">
              {pillars.map((p, i) => (
                <Reveal key={p.no} delay={i * 80}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/10 py-8 md:gap-10 md:py-10">
                    <span className="font-display text-3xl text-gold md:text-4xl">
                      {p.no}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-ink md:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-loose text-stone">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
