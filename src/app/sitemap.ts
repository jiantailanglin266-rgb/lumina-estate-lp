import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// 静的書き出し（output: export）でも生成できるように固定化
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
