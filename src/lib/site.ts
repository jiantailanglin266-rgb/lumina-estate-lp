/**
 * サイト全体で利用する基本情報・連絡先などの定数。
 * すべて架空（ダミー）の情報です。実運用時はここを差し替えてください。
 */
export const site = {
  brand: "KACHINOVA",
  tagline: "Technology Meets Estate",
  company: "KACHINOVA株式会社",
  catch: "不動産の価値を、磨き上げる。",
  description:
    "中古マンションの仕入れ・買取再販・不動産売買・資産形成サポート。テクノロジーと相場分析を掛け合わせ、仕入れから販売まで一気通貫で資産価値を最大化する不動産会社です。",
  url: "https://jiantailanglin266-rgb.github.io/lumina-estate-lp",
  tel: "03-0000-0000",
  telLabel: "03-0000-0000",
  telHours: "平日 10:00–19:00",
  email: "info@example.com",
  address: "〒100-0000 東京都千代田区丸の内0-0-0 KACHINOVAビル10F",
  license: "東京都知事免許（1）第00000号",
  representative: "代表取締役　日向 玲二",
  established: "2014年4月",
  capital: "1億円",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "私たちについて", href: "#about" },
  { label: "サービス", href: "#services" },
  { label: "強み", href: "#strengths" },
  { label: "実績", href: "#works" },
  { label: "取引の流れ", href: "#flow" },
  { label: "FAQ", href: "#faq" },
  { label: "会社概要", href: "#company" },
];
