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
pnpm install

# 開発サーバーの起動 | localhost:4321 で起動します。
# 万一ポートが使用済みの場合は一時的にポート番号が変更されて起動します。
pnpm dev
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
│   └── site.config.ts        # サイトの設定定数定義
├── astro.config.mjs          # Astro.js の設定
├── package.json              # スクリプト及び依存関係
└── wrangler.jsonc            # Cloudflare Workers の設定
```

## 開発ルール

- ESLintを通す前にPrettierでフォーマットを行う。
- コミット前に必ずESLintを通し、エラーや警告が出ない場合のみコミットを行う。

## ライセンス

`posts/`以下に配置されているブログ記事の本文及びそのアセット類のライセンスに関しては、こちらのリポジトリのライセンス範囲外となります。  
`siro3tsu/posts`の[Copyright Notice](https://github.com/siro3tsu/posts/blob/main/COPYING)を確認してそちらのライセンスに従ってください。

当リポジトリのソースコードは、特に記載がない限り、[GNU Affero General Public License v3.0 only](./LICENSE)のもとで提供しています。

オリジナルのテキスト、画像、イラスト、写真などのコンテンツは上記のライセンス対象外となり、特に記載がない限り、全著作権保有となっています。無断転載・複製・改変・配布等の行為を禁止します。ただし、[Copyright Notice](./COPYING)に定める通り、生成AIのモデル学習への利用や生成AIにコンテンツを参照させること等の禁止行為に該当する場合を除き、著作権法やその他の法令により認められる利用（適法な引用等）を妨げるものではありません。

ウェブサイトやソフトウェアの画面等のスクリーンショット、ロゴ、商標、引用部分その他の第三者に権利が帰属するコンテンツについては、本ブログからライセンスを付与するものではなく、それぞれの著作権者のライセンスおよび利用条件に従います。

詳細な著作権およびライセンスに関する規定については、[Copyright Notice](./COPYING) を参照してください。
