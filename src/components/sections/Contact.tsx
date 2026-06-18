import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/lib/site";

/**
 * お問い合わせ。CTAバナー＋フォーム。
 */
export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* リード */}
        <div className="text-center">
          <SectionHeading
            en="Contact"
            ja="まずは、お気軽にご相談ください。"
            tone="dark"
            align="center"
            lead="売却査定・購入相談・投資のご相談まで、すべて無料で承ります。しつこい営業は一切いたしません。"
          />
        </div>

        {/* 電話CTA */}
        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 border border-paper/15 bg-ink-soft px-8 py-10 text-center">
            <p className="font-display text-[11px] tracking-[0.3em] text-brand">
              CALL US
            </p>
            <a
              href={`tel:${site.tel.replace(/-/g, "")}`}
              className="font-display text-4xl tracking-wide text-paper md:text-5xl"
            >
              {site.telLabel}
            </a>
            <p className="text-xs text-mist">{site.telHours}</p>
          </div>
        </Reveal>

        {/* フォーム */}
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="bg-paper p-8 text-ink md:p-12">
            <p className="font-display text-[11px] tracking-[0.3em] text-brand">
              CONTACT FORM
            </p>
            <h3 className="mt-3 text-xl font-medium">お問い合わせフォーム</h3>
            <p className="mt-3 text-sm leading-loose text-stone">
              以下のフォームに必要事項をご入力ください。担当者より2営業日以内にご連絡いたします。
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
