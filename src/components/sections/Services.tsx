import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

/**
 * サービス一覧。
 */
export default function Services() {
  return (
    <section id="services" className="bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          en="Services"
          ja="提供するサービス"
          lead="売る・買う・育てる。不動産にまつわるあらゆるニーズに、専門チームがワンストップでお応えします。"
        />

        <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.no} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
