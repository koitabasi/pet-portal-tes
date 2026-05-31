# 侍クリーニング Next.js版 - セットアップ＆起動ガイド

このドキュメントは、Next.js（React + Tailwind CSS）で構築された侍クリーニングのウェブサイトをローカル環境で起動・開発するための完全なガイドです。

---

## 📋 前提条件

以下がインストール済みであることを確認してください：

- **Node.js** 18.0 以上（推奨：20.x または 22.x）
- **pnpm** 10.0 以上（npm でも可能ですが、pnpm を推奨）

### バージョン確認コマンド

```bash
node --version
pnpm --version
```

---

## 🚀 クイックスタート（3ステップ）

### ステップ 1: 依存パッケージのインストール

```bash
cd samurai-cleaning-nextjs
pnpm install
```

**npm を使用する場合：**
```bash
npm install
```

### ステップ 2: 開発サーバーの起動

```bash
pnpm dev
```

**npm を使用する場合：**
```bash
npm run dev
```

### ステップ 3: ブラウザで確認

ターミナルに以下のようなメッセージが表示されます：

```
➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

ブラウザで **http://localhost:3000/** にアクセスしてください。

---

## 📁 プロジェクト構成

```
samurai-cleaning-nextjs/
├── client/
│   ├── public/                 # 静的ファイル（favicon、robots.txt など）
│   ├── src/
│   │   ├── components/         # React コンポーネント
│   │   │   ├── Header.tsx      # ヘッダー（透明→スクロール変化）
│   │   │   ├── Hero.tsx        # ヒーロー（背景スライダー）
│   │   │   ├── Stats.tsx       # 統計セクション（カウントアップ）
│   │   │   ├── About.tsx       # 会社概要
│   │   │   ├── Services.tsx    # サービス一覧
│   │   │   ├── Reasons.tsx     # 選ばれる理由
│   │   │   ├── Partners.tsx    # 取引先ホテル
│   │   │   ├── Flow.tsx        # ご依頼の流れ
│   │   │   ├── Company.tsx     # 会社情報
│   │   │   ├── Contact.tsx     # お問い合わせフォーム
│   │   │   ├── Footer.tsx      # フッター
│   │   │   └── ui/             # shadcn/ui コンポーネント
│   │   ├── pages/
│   │   │   ├── Home.tsx        # ホームページ（全セクション統合）
│   │   │   └── NotFound.tsx    # 404 ページ
│   │   ├── lib/
│   │   │   ├── constants.ts    # 定数（会社情報、サービス内容など）
│   │   │   └── utils.ts        # ユーティリティ関数
│   │   ├── contexts/           # React Context（テーマなど）
│   │   ├── App.tsx             # ルーティング＆SEO設定
│   │   ├── main.tsx            # エントリーポイント
│   │   └── index.css           # グローバルスタイル（Tailwind）
│   └── index.html              # HTML テンプレート
├── server/                     # バックエンド（静的サイトでは不使用）
├── package.json                # 依存パッケージ定義
├── tsconfig.json               # TypeScript 設定
├── vite.config.ts              # Vite 設定
└── tailwind.config.js          # Tailwind CSS 設定
```

---

## 🛠 よく使うコマンド

### 開発サーバーの起動（ホットリロード対応）
```bash
pnpm dev
```

### 本番用ビルド
```bash
pnpm build
```

### ビルド後のプレビュー
```bash
pnpm preview
```

### TypeScript の型チェック
```bash
pnpm check
```

### コード自動フォーマット
```bash
pnpm format
```

---

## 🎨 デザイン・カラーパレット

### 色設定（`client/src/index.css`）

- **Primary（ダークネイビー）**: `#0a0a19`
- **Secondary（ライトネイビー）**: `#1a1a2e`
- **Accent（ゴールド）**: `#c9a84c`
- **Background**: `#ffffff`（ライトモード）

### フォント設定

- **見出し**: Noto Serif JP（日本語）
- **本文**: Noto Sans JP（日本語）
- **装飾**: Cormorant Garamond（英字）

---

## 📝 主要コンポーネントの説明

### Header（ヘッダー）
- **透明ヘッダー** — 初期状態は透明、スクロール時に背景色が変わる
- **モバイルメニュー** — ハンバーガーメニュー対応
- **固定位置** — `position: fixed` で常に表示

### Hero（ヒーロー）
- **背景スライダー** — 3枚の画像が5秒間隔で自動切り替わり
- **フルスクリーン** — `h-screen` で画面高さいっぱい
- **スクロールインジケーター** — アニメーション付きの下矢印

### Stats（統計）
- **カウントアップアニメーション** — Intersection Observer で表示時に発動
- **4つの指標** — 契約実績、受付時間、対応率、相談料金

### Services（サービス）
- **3カラムグリッド** — モバイルは1列、タブレット以上は3列
- **ホバーエフェクト** — 画像ズーム、シャドウ拡大

### Contact（お問い合わせ）
- **フォームバリデーション** — 必須項目チェック
- **Toast 通知** — 送信成功・エラーメッセージ表示
- **レスポンシブ** — 2カラム（デスクトップ）→ 1カラム（モバイル）

### Footer（フッター）
- **フローティングCTA** — 右下に電話・メールボタン
- **トップへ戻るボタン** — 左下（デスクトップのみ）

---

## 🔍 SEO 対策

### 実装済みの SEO 機能

1. **メタタグ**
   - `<meta name="description">` — ページ説明
   - `<meta name="keywords">` — キーワード
   - `<meta name="robots" content="index, follow">` — インデックス許可

2. **OGP（Open Graph Protocol）**
   - `og:title`, `og:description`, `og:type`, `og:locale`
   - SNS シェア時に正しく表示

3. **JSON-LD 構造化データ**
   - LocalBusiness スキーマ
   - 会社名、住所、電話番号、営業時間、サービス内容

4. **適切な見出し階層**
   - `<h1>` — ページタイトル（ヒーロー）
   - `<h2>` — セクションタイトル
   - `<h3>` — 小見出し

5. **画像の alt 属性**
   - すべての画像に説明文を付与

---

## 🚀 デプロイ方法

### Vercel（推奨）
```bash
# Vercel CLI をインストール
npm i -g vercel

# デプロイ
vercel
```

### Netlify
```bash
# Netlify CLI をインストール
npm i -g netlify-cli

# デプロイ
netlify deploy --prod --dir=dist
```

### 自社サーバー（静的ホスティング）
```bash
# ビルド
pnpm build

# dist フォルダをサーバーにアップロード
# サーバーの Web ルートに配置
```

---

## 🐛 トラブルシューティング

### ポート 3000 が既に使用されている場合

```bash
# 別のポートで起動
pnpm dev -- --port 3001
```

### 依存パッケージのエラー

```bash
# キャッシュをクリア
pnpm store prune

# 再インストール
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript エラー

```bash
# 型チェック実行
pnpm check

# 修正が必要な場合は、エラーメッセージに従って修正
```

---

## 📞 サポート情報

- **会社名**: 株式会社士（SAMURAI CORPORATION）
- **電話**: 080-5706-1234
- **住所**: 〒556-0022 大阪府大阪市浪速区元町3丁目1-3 第6辻本ビル201号
- **Instagram**: @osaka.cleaning.samurai

---

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

---

## 🎯 今後の拡張予定

- [ ] ブログセクション
- [ ] 施工事例ギャラリー
- [ ] 顧客レビュー・評価表示
- [ ] 予約システム統合
- [ ] 多言語対応（英語、中国語）
- [ ] ダークモード対応

---

**最終更新**: 2026年5月29日
