import type { Metadata, Viewport } from "next";
import { Zen_Kaku_Gothic_New, Cormorant_Garamond } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.company} | ${site.catch}`,
    template: `%s | ${site.company}`,
  },
  description: site.description,
  keywords: [
    "KACHINOVA",
    "カチノヴァ",
    "不動産",
    "中古マンション買取",
    "買取再販",
    "リノベーション",
    "不動産売買",
    "不動産投資",
    "資産形成",
    "売却査定",
  ],
  authors: [{ name: site.company }],
  // noindex,nofollow は使用しない。常に index,follow とする。
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: site.url,
    siteName: site.company,
    title: `${site.company} | ${site.catch}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company} | ${site.catch}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.company,
    description: site.description,
    url: site.url,
    telephone: site.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "JP",
    },
  };

  return (
    <html lang="ja" className={`${zenKaku.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
