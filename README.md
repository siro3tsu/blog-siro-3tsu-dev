# blog-siro-3tsu-dev

しろみつの個人ブログのソースコードを置いているリポジトリです。  
SSGであるAstro.jsをベースに、TailwindCSSでスタイル付け、MDXで記事執筆を行い、最終的にCloudflare Workersへデプロイされます。

## 主要な技術構成

- Astro.js
- Tailwindcss
- TypeScript
- MDX
- ESLint
- Prettier
- Cloudflare Workers
- GitHub Actions

## セットアップ

当プロジェクトはWindows環境においてNVM for Windows経由でインストールされたNode.js v26.7.0で開発されています。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 | localhost:4321 で起動します。
# 万一ポートが使用済みの場合は一時的にポート番号が変更されて起動します。
npm run dev
```

### コマンド類

| コマンド        | Action                                                                      |
| --------------- | --------------------------------------------------------------------------- |
| `pnpm dev`      | 開発サーバーを`localhost:4321`で起動します                                  |
| `pnpm build`    | `./dist/`へビルドします                                                     |
| `pnpm preview`  | `./dist/`へビルドを行い、プレビューサーバーを`localhost:4321`で起動します。 |
| `pnpm lint`     | ESLint による静的解析                                                       |
| `pnpm lint:fix` | ESLint による自動修正                                                       |
| `pnpm format`   | Prettier によるフォーマット                                                 |

## プロジェクト構造(概要)

```text
/
├── posts/                    # Git Submodules を利用して配置されたブログ記事
├── public/                   # favicon などの静的アセット（Astro.js の処理対象外）
├── src/
│   ├── assets/img/           # Astro.js によって処理される画像アセット
│   ├── components/           # 再使用可能な Astro.js/React コンポーネント
│   │   ├── blog/             # ブログ記事で主に使用するコンポーネント
│   │   └── header/           # ヘッダーで主に使用するコンポーネント
│   ├── core/                 # 再使用可能なスクリプト群
│   ├── layouts/              # レイアウト
│   ├── pages/                # ルーティング対象ディレクトリ
│   ├── styles/               # Tailwindcss スタイルシート
│   ├── content.config.ts     # Astro.js のコンテンツコレクションの設定ファイル
│   ├── site.config.ts        # サイトの設定定数定義
├── astro.config.mjs          # Astro.js の設定
├── package.json              # スクリプト及び依存関係
└── wrangler.jsonc            # Cloudflare Workers の設定
```
