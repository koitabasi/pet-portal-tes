# 侍クリーニング Next.js版 - コマンドリファレンス

このドキュメントは、プロジェクトを操作するための全コマンドをまとめたリファレンスです。

---

## 🚀 基本コマンド

### 1. 開発サーバーの起動（ホットリロード対応）

```bash
# pnpm を使用する場合（推奨）
pnpm dev

# npm を使用する場合
npm run dev

# yarn を使用する場合
yarn dev
```

**動作**:
- ローカルサーバーが `http://localhost:3000/` で起動
- ファイル変更時に自動リロード（HMR）
- ブラウザで即座に変更が反映

**終了方法**: ターミナルで `Ctrl + C`

---

### 2. 本番用ビルド

```bash
pnpm build
```

**動作**:
- 本番環境用に最適化されたビルド生成
- `dist/` フォルダに出力
- CSS・JavaScript の圧縮・最小化
- ツリーシェイキング（不要なコード削除）

**出力例**:
```
✓ 1234 modules transformed
✓ built in 12.34s
```

---

### 3. ビルド後のプレビュー

```bash
pnpm preview
```

**動作**:
- ビルド済みの本番ファイルをローカルでプレビュー
- 本番環境に近い動作確認が可能
- `http://localhost:4173/` で起動

---

### 4. TypeScript 型チェック

```bash
pnpm check
```

**動作**:
- TypeScript の型エラーをチェック
- ビルドなしで型チェックのみ実行
- CI/CD パイプラインで使用

**出力例**:
```
✓ No errors found
```

---

### 5. コード自動フォーマット

```bash
pnpm format
```

**動作**:
- Prettier を使用してコードを自動フォーマット
- インデント、スペース、セミコロンなどを統一
- `.prettierrc` の設定に従う

---

## 📦 パッケージ管理コマンド

### 新しいパッケージをインストール

```bash
# pnpm を使用する場合
pnpm add package-name

# npm を使用する場合
npm install package-name

# 開発依存として追加
pnpm add -D package-name
```

### パッケージの更新

```bash
# 全パッケージを更新
pnpm update

# 特定のパッケージを更新
pnpm update package-name
```

### パッケージの削除

```bash
pnpm remove package-name
```

---

## 🔧 開発時のよくあるシナリオ

### シナリオ 1: ローカル開発環境のセットアップ

```bash
# 1. プロジェクトディレクトリに移動
cd samurai-cleaning-nextjs

# 2. 依存パッケージをインストール
pnpm install

# 3. 開発サーバーを起動
pnpm dev

# 4. ブラウザで http://localhost:3000/ を開く
```

### シナリオ 2: 新しいコンポーネントを追加

```bash
# 1. コンポーネントファイルを作成
# client/src/components/NewComponent.tsx を作成

# 2. 開発サーバーで確認（既に起動していれば自動リロード）
pnpm dev

# 3. ブラウザで動作確認
```

### シナリオ 3: 本番環境へのデプロイ準備

```bash
# 1. 型チェック
pnpm check

# 2. コードフォーマット
pnpm format

# 3. 本番ビルド
pnpm build

# 4. ビルド結果をプレビュー
pnpm preview

# 5. 問題なければ dist/ をサーバーにアップロード
```

---

## 🌐 ポート設定

### デフォルトポート

- **開発サーバー**: `3000`
- **プレビューサーバー**: `4173`

### ポート番号を変更する場合

```bash
# 開発サーバーを別のポートで起動
pnpm dev -- --port 3001

# プレビューサーバーを別のポートで起動
pnpm preview -- --port 4174
```

---

## 📂 ファイル構成と編集ガイド

### コンポーネント追加時

```bash
# 新規コンポーネントを作成
# client/src/components/MyComponent.tsx

# 例:
cat > client/src/components/MyComponent.tsx << 'EOF'
export function MyComponent() {
  return <div>My Component</div>;
}
EOF
```

### ページ追加時

```bash
# 新規ページを作成
# client/src/pages/MyPage.tsx

# App.tsx でルーティング設定
# <Route path="/mypage" component={MyPage} />
```

### スタイル編集時

```bash
# グローバルスタイルを編集
# client/src/index.css

# Tailwind CSS ユーティリティを使用
# 例: className="bg-accent text-primary"
```

---

## 🔍 デバッグコマンド

### ブラウザ DevTools

```bash
# Chrome DevTools を開く
F12 または Ctrl+Shift+I

# Console タブで JavaScript エラーを確認
# Network タブで HTTP リクエストを確認
# Elements タブで DOM を確認
```

### ターミナルでのログ確認

```bash
# 開発サーバーのログを確認
# pnpm dev で起動時に表示

# エラーがある場合は赤色で表示
# ファイル変更時のリビルドログも表示
```

---

## 📋 CI/CD パイプライン用コマンド

### GitHub Actions での使用例

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm check
      - run: pnpm format
      - run: pnpm build
      
      - name: Deploy
        run: |
          # デプロイスクリプト
          echo "Deploying..."
```

---

## 🚨 トラブルシューティング

### エラー: "Port 3000 is already in use"

```bash
# 別のポートで起動
pnpm dev -- --port 3001

# または、既存プロセスを終了
lsof -i :3000
kill -9 <PID>
```

### エラー: "Module not found"

```bash
# 依存パッケージを再インストール
pnpm install

# キャッシュをクリア
pnpm store prune
```

### エラー: "TypeScript errors found"

```bash
# 型チェックを実行して詳細を確認
pnpm check

# エラーメッセージに従ってコードを修正
```

---

## 📊 パフォーマンス計測

### ビルド時間の計測

```bash
# ビルド時間を表示
time pnpm build
```

### バンドルサイズの確認

```bash
# ビルド後、dist/ フォルダのサイズを確認
du -sh dist/

# 個別ファイルのサイズ
ls -lh dist/
```

---

## 🔐 セキュリティ

### 依存パッケージの脆弱性チェック

```bash
# npm audit を実行
npm audit

# 脆弱性を修正
npm audit fix
```

---

## 📞 サポート

コマンド実行時にエラーが発生した場合は、以下を確認してください：

1. **Node.js バージョン**: `node --version` で 18.0 以上か確認
2. **pnpm バージョン**: `pnpm --version` で 10.0 以上か確認
3. **ディレクトリ**: `samurai-cleaning-nextjs` ディレクトリにいるか確認
4. **依存パッケージ**: `pnpm install` で全パッケージがインストールされているか確認

---

**最終更新**: 2026年5月29日
