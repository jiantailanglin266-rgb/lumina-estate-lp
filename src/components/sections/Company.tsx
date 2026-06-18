import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/**
 * 会社概要。
 */
export default function Company() {
  const rows: { label: string; value: string }[] = [
    { label: "会社名", value: site.company },
    { label: "設立", value: site.established },
    { label: "資本金", value: site.capital },
    { label: "代表者", value: site.representative },
    { label: "所在地", value: site.address },
    {
      label: "事業内容",
      value:
        "中古マンション買取／買取再販／不動産売買仲介／投資用不動産サポート／住宅ローン相談／リフォーム・バリューアップ提案",
    },
    { label: "免許番号", value: site.license },
    { label: "お問い合わせ", value: `TEL ${site.telLabel}（${site.telHours}）` },
  ];

  return (
    <section id="company" className="bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading en="Company" ja="会社概要" />
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <dl className="border-t border-ink/15">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-2 border-b border-ink/15 py-5 sm:grid-cols-[160px_1fr] sm:gap-8 sm:py-6"
                  >
                    <dt className="text-xs tracking-[0.15em] text-brand-deep">
                      {row.label}
                    </dt>
                    <dd className="text-sm leading-loose text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
