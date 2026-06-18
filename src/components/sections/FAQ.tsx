import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/content";

/**
 * よくある質問。
 */
export default function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          en="FAQ"
          ja="よくあるご質問"
          align="center"
          lead="お客様からよくいただくご質問をまとめました。掲載のないご質問もお気軽にお問い合わせください。"
        />

        <Reveal className="mt-16">
          <FAQAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
