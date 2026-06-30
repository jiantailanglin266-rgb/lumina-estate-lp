# KACHINOVA — 不動産会社コーポレート兼LPサイト

中古マンションの仕入れ・買取再販・不動産売買・資産形成サポートを行う不動産会社（架空：**KACHINOVA株式会社** / Technology Meets Estate）の公式サイトです。

> 高級不動産企業サイトの構成・情報設計・導線をTTPし、**完全オリジナルデザイン**として実装したサンプルです。文章・画像・数値はすべてダミーです。

## 技術スタック

- **Next.js 15**（App Router）
- **TypeScript**
- **Tailwind CSS v4**
- レスポンシブ対応／スマホ最適化
- SEO対応（`metadata` / `robots.ts` / `sitemap.ts` / JSON-LD）
- `robots` は常に **`index, follow`**（noindex/nofollow は使用していません）

## セットアップ

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
```

## ディレクトリ構成

```
realestate-corp-lp/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── README.md
└── src/
    ├── app/
    │   ├── layout.tsx        # 共通レイアウト・SEOメタデータ・フォント・JSON-LD
    │   ├── page.tsx          # トップページ（全セクションを組み立て）
    │   ├── globals.css       # Tailwind v4 + デザイントークン
    │   ├── robots.ts         # index,follow
    │   └── sitemap.ts        # サイトマップ
    ├── components/
    │   ├── Header.tsx        # 共通ヘッダー（スクロール追従）
    │   ├── MobileMenu.tsx    # スマホ用フルスクリーンメニュー
    │   ├── Footer.tsx        # 共通フッター
    │   ├── sections/         # 各セクション
    │   │   ├── Hero.tsx          # 1. ファーストビュー
    │   │   ├── About.tsx         # 2. 私たちについて
    │   │   ├── Services.tsx      # 3. サービス
    │   │   ├── Strengths.tsx     # 4. 強み
    │   │   ├── Works.tsx         # 5. 実績
    │   │   ├── Flow.tsx          # 6. 取引の流れ
    │   │   ├── FAQ.tsx           # 7. よくある質問
    │   │   ├── Company.tsx       # 8. 会社概要
    │   │   └── Contact.tsx       # 9. お問い合わせ
    │   └── ui/               # 再利用UI
    │       ├── SectionHeading.tsx  # 英字＋日本語の見出し
    │       ├── CTAButton.tsx       # CTAボタン
    │       ├── ServiceCard.tsx     # サービスカード
    │       ├── WorkCard.tsx        # 実績カード
    │       ├── FAQAccordion.tsx    # FAQアコーディオン
    │       ├── ContactForm.tsx     # 問い合わせフォーム（ダミー送信）
    │       └── Reveal.tsx          # 控えめなスクロールフェードイン
    └── lib/
        ├── site.ts          # 会社情報・ナビ等の基本定数
        └── content.ts       # 各セクションの表示コンテンツ
```

## デザイン方針

- 基調カラー：**白ベース ＋ ブルー ＋ 黒**（`globals.css` の `@theme` で定義。アクセントは `brand`）
- 余白を広く取り、セクションごとに背景色を切り替え（`paper` / `cloud` / `ink`）
- 見出しは英字（セリフ体）＋日本語の組み合わせ
- アニメーションは控えめ（IntersectionObserver によるフェードインのみ。`prefers-reduced-motion` 対応）

## カスタマイズ

- 会社情報・連絡先：`src/lib/site.ts`
- サービス・強み・実績・FAQの文言：`src/lib/content.ts`
- カラー・フォント：`src/app/globals.css` の `@theme`

## 注意

- 画像はすべてCSSによるダミービジュアルです。実画像は `public/` に配置し各コンポーネントで `next/image` に差し替えてください。
- お問い合わせフォームは**ダミー送信**です。実運用時は `src/components/ui/ContactForm.tsx` の `handleSubmit` をAPI連携に置き換えてください。
