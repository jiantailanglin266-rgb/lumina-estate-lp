/** @type {import('next').NextConfig} */

// GitHub Pages（プロジェクトサイト）配信用の設定。
// CI（GitHub Actions）でのビルド時のみ basePath / assetPrefix を付与し、
// ローカル開発（npm run dev）ではルート配信のまま動作させる。
const repo = "lumina-estate-lp";
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  images: {
    // 静的書き出しでは画像最適化を無効化（本サイトは next/image 未使用）
    unoptimized: true,
  },
};

export default nextConfig;
