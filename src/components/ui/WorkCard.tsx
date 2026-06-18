import type { Work } from "@/lib/content";

/**
 * 実績カード。仕入価格 → 販売価格を視覚的に対比。
 * 画像はダミー（CSSグラデーションのプレースホルダー）。
 */
export default function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <article className="group overflow-hidden border border-ink/10 bg-paper transition-all duration-500 hover:border-brand/50 hover:shadow-[0_24px_60px_-30px_rgba(14,14,16,0.45)]">
      {/* ダミー画像エリア */}
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
        <div
          className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #1a1a1e 0%, #2b2b30 45%, #3a3a40 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 26px)",
          }}
          aria-hidden="true"
        />
        <span className="absolute left-5 top-5 font-display text-xs tracking-[0.3em] text-paper/70">
          CASE {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-5 left-5 text-sm font-medium text-paper">
          {work.area}
        </span>
      </div>

      <div className="p-7 md:p-8">
        <p className="text-xs tracking-[0.18em] text-stone">{work.type}</p>

        <dl className="mt-6 space-y-4">
          <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
            <dt className="text-xs text-stone">仕入価格</dt>
            <dd className="text-lg font-medium text-stone">{work.purchase}</dd>
          </div>
          <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
            <dt className="text-xs text-stone">改修内容</dt>
            <dd className="text-right text-sm text-ink">{work.renovation}</dd>
          </div>
          <div className="flex items-end justify-between gap-4">
            <dt className="text-xs text-brand">販売価格</dt>
            <dd className="font-display text-2xl text-brand-deep">
              {work.sale}
            </dd>
          </div>
        </dl>

        <p className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-stone">
          <span className="h-px w-5 bg-brand" aria-hidden="true" />
          {work.period}
        </p>
      </div>
    </article>
  );
}
