import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

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
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              en="About Us"
              ja="価値を見極め、価値を創る。"
              lead="私たちは、不動産という資産に新たな価値を吹き込む会社です。市場をデータで読み解き、磨き上げ、次の所有者へとつなぐ。その一連のプロセスすべてに、誠実さと専門性を込めています。"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px border-t border-ink/10">
              {pillars.map((p, i) => (
                <Reveal key={p.no} delay={i * 80}>
                  <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/10 py-8 md:gap-10 md:py-10">
                    <span className="font-display text-3xl text-brand md:text-4xl">
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
