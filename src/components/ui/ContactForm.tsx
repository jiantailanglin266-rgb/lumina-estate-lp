"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success";

const inputBase =
  "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist transition-colors duration-200 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand/40";

const labelBase = "block text-xs tracking-[0.12em] text-stone";

/**
 * お問い合わせフォーム。送信処理はダミー（実際の送信は行わない）。
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // ダミー送信：実際のAPI連携の代わりに擬似的な遅延を入れる
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-brand/40 bg-paper px-8 py-16 text-center">
        <span className="font-display text-sm tracking-[0.3em] text-brand">
          THANK YOU
        </span>
        <p className="mt-6 text-lg font-medium text-ink">
          お問い合わせを受け付けました。
        </p>
        <p className="mt-4 max-w-md text-sm leading-loose text-stone">
          担当者より2営業日以内にご連絡いたします。お急ぎの場合はお電話にてお問い合わせください。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[0.12em] text-brand underline-offset-4 hover:underline"
        >
          フォームに戻る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            お名前 <span className="text-brand">必須</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="山田 太郎"
            className={`mt-2 ${inputBase}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            メールアドレス <span className="text-brand">必須</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="example@email.com"
            className={`mt-2 ${inputBase}`}
          />
        </div>

        <div>
          <label htmlFor="tel" className={labelBase}>
            電話番号
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            placeholder="090-0000-0000"
            className={`mt-2 ${inputBase}`}
          />
        </div>

        <div>
          <label htmlFor="category" className={labelBase}>
            相談内容
          </label>
          <select
            id="category"
            name="category"
            defaultValue=""
            className={`mt-2 ${inputBase}`}
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="sell">不動産の売却・査定</option>
            <option value="buy">中古マンションの購入</option>
            <option value="invest">不動産投資について</option>
            <option value="loan">住宅ローンの相談</option>
            <option value="other">その他</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="property" className={labelBase}>
          物件情報（所在地・面積・築年数など）
        </label>
        <textarea
          id="property"
          name="property"
          rows={3}
          placeholder="例：東京都港区 / 2LDK / 専有面積55㎡ / 築18年"
          className={`mt-2 resize-y ${inputBase}`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          ご相談・ご質問
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="ご相談内容をご記入ください。"
          className={`mt-2 resize-y ${inputBase}`}
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-stone">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 accent-[#18181b]"
        />
        <span>
          個人情報の取り扱いに同意します。ご入力いただいた情報はお問い合わせ対応の目的にのみ使用します。
        </span>
      </label>

      <button
        type="submit"
        disabled={!consent || status === "submitting"}
        className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-sm tracking-[0.12em] text-paper transition-all duration-300 hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "submitting" ? "送信中…" : "この内容で送信する"}
        {status !== "submitting" && (
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </button>

      <p className="text-center text-[11px] text-mist">
        ※ こちらはデモ用フォームです。送信処理は実際には行われません。
      </p>
    </form>
  );
}
