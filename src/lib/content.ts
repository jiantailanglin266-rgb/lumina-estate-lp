/**
 * 各セクションの表示コンテンツ（すべてダミー／架空のデータ）。
 * 文言・数値の差し替えはこのファイルで一元管理します。
 */

export type Service = {
  no: string;
  title: string;
  en: string;
  description: string;
};

export const services: Service[] = [
  {
    no: "01",
    title: "中古マンション買取",
    en: "Direct Purchase",
    description:
      "当社が直接買主となるため、仲介売却に比べてスピーディーかつ確実に現金化が可能です。室内の状態を問わず、まずはご相談ください。",
  },
  {
    no: "02",
    title: "買取再販",
    en: "Renovation & Resale",
    description:
      "買い取った物件に最適なリノベーションを施し、新たな価値を加えて再販します。立地と需要を読み解いた出口設計が私たちの中核です。",
  },
  {
    no: "03",
    title: "不動産売買仲介",
    en: "Brokerage",
    description:
      "売却・購入の双方をサポート。市場相場と将来性を踏まえ、お客様にとって納得感のある取引条件をご提案します。",
  },
  {
    no: "04",
    title: "投資用不動産サポート",
    en: "Investment Support",
    description:
      "利回り・資産性・出口戦略まで一貫して設計。初めての方から専業投資家まで、ポートフォリオに合わせた物件をご紹介します。",
  },
  {
    no: "05",
    title: "住宅ローン相談",
    en: "Loan Consulting",
    description:
      "提携金融機関のネットワークを活かし、資金計画から審査対策までサポート。無理のない返済プランをともに設計します。",
  },
  {
    no: "06",
    title: "リフォーム・バリューアップ提案",
    en: "Value-up Planning",
    description:
      "資産価値を高めるための改修プランをご提案。デザイン・設備・コストのバランスを最適化し、保有・売却の双方に貢献します。",
  },
];

export type Strength = {
  no: string;
  title: string;
  en: string;
  description: string;
};

export const strengths: Strength[] = [
  {
    no: "01",
    title: "1都3県の豊富な取引実績",
    en: "Track Record",
    description:
      "東京・神奈川・埼玉・千葉を中心に、数多くの仕入れと再販を実行。エリアごとの需要を熟知しています。",
  },
  {
    no: "02",
    title: "金融機関との強固な連携",
    en: "Banking Network",
    description:
      "複数の金融機関と取引関係を構築。資金調達力を背景に、スピードと確実性のある買取を実現します。",
  },
  {
    no: "03",
    title: "精緻な相場分析力",
    en: "Market Analytics",
    description:
      "成約事例と需給データを多角的に分析。適正な仕入れ価格と再販価格を見極めます。",
  },
  {
    no: "04",
    title: "最短即日のスピード査定",
    en: "Fast Assessment",
    description:
      "物件情報をいただいてから、最短即日で概算査定をご提示。意思決定をお待たせしません。",
  },
  {
    no: "05",
    title: "出口戦略まで考えた提案",
    en: "Exit Strategy",
    description:
      "「買って終わり」ではなく、売却・運用の出口まで見据えた一気通貫のご提案を行います。",
  },
];

export type Work = {
  area: string;
  type: string;
  purchase: string;
  renovation: string;
  sale: string;
  period: string;
};

export const works: Work[] = [
  {
    area: "東京都 / 港区",
    type: "中古マンション（2LDK）",
    purchase: "4,200万円",
    renovation: "フルリノベーション・水回り刷新",
    sale: "5,480万円",
    period: "売却まで 58日",
  },
  {
    area: "神奈川県 / 横浜市",
    type: "中古マンション（3LDK）",
    purchase: "2,980万円",
    renovation: "内装一新・間取り変更",
    sale: "3,880万円",
    period: "売却まで 72日",
  },
  {
    area: "東京都 / 世田谷区",
    type: "中古マンション（1LDK）",
    purchase: "2,450万円",
    renovation: "デザインリノベ・設備更新",
    sale: "3,180万円",
    period: "売却まで 41日",
  },
  {
    area: "埼玉県 / さいたま市",
    type: "中古マンション（3LDK）",
    purchase: "2,100万円",
    renovation: "全面改装・耐震補強",
    sale: "2,780万円",
    period: "売却まで 65日",
  },
  {
    area: "千葉県 / 船橋市",
    type: "中古マンション（2LDK）",
    purchase: "1,780万円",
    renovation: "水回り・床壁刷新",
    sale: "2,380万円",
    period: "売却まで 53日",
  },
  {
    area: "東京都 / 江東区",
    type: "中古マンション（2LDK）",
    purchase: "3,650万円",
    renovation: "ハイグレード仕様へ改装",
    sale: "4,680万円",
    period: "売却まで 47日",
  },
];

export type FlowStep = {
  no: string;
  title: string;
  en: string;
  description: string;
};

export const flow: FlowStep[] = [
  {
    no: "01",
    title: "お問い合わせ",
    en: "Contact",
    description:
      "フォーム・お電話よりお気軽にご連絡ください。ご相談内容を伺います。",
  },
  {
    no: "02",
    title: "ヒアリング",
    en: "Hearing",
    description:
      "ご売却・ご購入の目的やご希望条件を丁寧にお聞きします。",
  },
  {
    no: "03",
    title: "査定・調査",
    en: "Assessment",
    description:
      "物件調査と相場分析を行い、適正な価格を算出します。",
  },
  {
    no: "04",
    title: "条件提示",
    en: "Proposal",
    description:
      "査定結果と取引条件を、根拠とともに分かりやすくご提示します。",
  },
  {
    no: "05",
    title: "ご契約",
    en: "Contract",
    description:
      "条件にご納得いただいたうえで、売買契約を締結します。",
  },
  {
    no: "06",
    title: "決済・引渡し",
    en: "Settlement",
    description:
      "決済と物件の引渡しを行い、お取引が完了します。",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "査定だけの依頼でも可能ですか？",
    a: "もちろん可能です。売却をご検討中の段階での概算査定も無料で承っております。査定後に必ず売却いただく必要はありませんので、お気軽にご依頼ください。",
  },
  {
    q: "築年数が古い物件でも買取できますか？",
    a: "可能です。当社は買取再販を得意としており、築古物件や現状のままでは売却が難しい物件も積極的に買い取っています。状態を問わずまずはご相談ください。",
  },
  {
    q: "住宅ローンの相談もできますか？",
    a: "はい。提携金融機関のネットワークを活かし、資金計画から審査対策までサポートいたします。無理のない返済プランをともに設計します。",
  },
  {
    q: "相続した物件の売却にも対応していますか？",
    a: "対応しております。相続物件は権利関係や税務が複雑になりがちですが、提携する士業と連携し、手続きを含めてワンストップでサポートいたします。",
  },
];
