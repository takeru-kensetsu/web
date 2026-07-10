# 尊建設 Webサイト（参考サイト構成反映版）

株式会社尾上建設の公式サイトで使われている、以下の情報設計を参考にした独自デザインです。

- 大きなメインメッセージと仕事のビジュアル
- お知らせ
- 番号付きの事業紹介
- 施工実績
- 会社案内
- 採用情報
- お問い合わせ

文章・画像・配色・レイアウトは尊建設用に独自作成しており、参考サイトの素材は使用していません。

## GitHub Pagesへの配置

このフォルダの中身を、リポジトリの `main` ブランチ直下へアップロードしてください。

- `index.html`
- `.nojekyll`
- `README.md`
- `assets` フォルダ一式

その後、GitHubの以下の画面で設定します。

1. Settings
2. Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /(root)
6. Save

公開URL:

`https://takeru-kensetsu.github.io/web/`

## 公開前に更新する情報

- 代表者名
- 住所
- 電話番号
- 営業時間
- 正式な事業内容
- 施工実績
- 採用情報
- 問い合わせ方法

## 画像について

現在の画像は、このWebサイト用に作成したSVGイラストです。
実際の現場写真や施工写真が用意できたら、`assets/images` 内の画像と差し替えられます。


## ロゴ・ファビコン

- ユーザー提供のロゴを `assets/images/logo.png` として配置
- `favicon.ico` をサイト直下に配置
- `assets/favicon.png` と `assets/apple-touch-icon.png` も追加
