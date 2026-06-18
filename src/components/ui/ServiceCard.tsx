import type { Service } from "@/lib/content";

/**
 * サービスカード。No.＋英字＋日本語＋説明。
 */
export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full border border-ink/10 bg-paper p-8 md:p-10 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_24px_60px_-30px_rgba(14,14,16,0.45)]">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-4xl text-mist transition-colors duration-500 group-hover:text-brand">
          {service.no}
        </span>
        <span className="font-display text-xs tracking-[0.3em] uppercase text-brand">
          {service.en}
        </span>
      </div>

      <h3 className="mt-8 text-xl font-medium text-ink">{service.title}</h3>

      <p className="mt-4 text-sm leading-loose text-stone">
        {service.description}
      </p>

      <span
        className="mt-8 block h-px w-0 bg-brand transition-all duration-500 group-hover:w-12"
        aria-hidden="true"
      />
    </article>
  );
}
