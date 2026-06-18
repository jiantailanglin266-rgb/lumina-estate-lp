import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// 静的書き出し（output: export）でも生成できるように固定化
export const dynamic = "force-static";

// 全ページをクロール許可（index,follow 相当）。noindex/nofollow は設定しない。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
