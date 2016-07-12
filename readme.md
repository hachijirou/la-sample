# la-sample

## Gitの設定について

gitで改行コードを制御するのはよくないらしいので以下のコマンドを実行して改行コードの変換を行わないようにしてください。

```bash
$ git config --global core.autoCRLF false
```

## 開発ツールについて

ソースコードはコーディング規約を統一するためphp-cs-fixerで自動整形します。基本的にどのような形で実行してもいいですが、AtomのPluginとして実行する形を説明します。

### Atomのインストール

https://atom.io/

「Download For Mac」ボタンよりインストールしてください。

### Atomでphp-cs-fixerを利用する

下記サイトを参考に導入してください。

http://qiita.com/hachijirou/private/ea00005ff4910f89d6bf


## ReactとReduxとBootstrapの導入

ReactとReduxを使って、フロントエンド開発を可能にするためのビルド環境を構築します。
既にpackage.jsonに必要なライブラリは記載済みなので簡単です。

### Node.jsのインストール

パッケージ管理システムであるnpmを使うための準備。

```bash
$ brew install node
$ npm -v
```

### gulpのインストール

rootで作業してください。

```bash
$ npm install -g gulp
$ gulp -v
```

### bowerのインストール

rootで作業してください。

```bash
$ npm install -g bower
$ bower -v
```

### 依存パッケージの取得

プロジェクトのホームディレクトリ直下で作業してください。
エラーが出なければ終わりです。

```bash
$ npm install
```

### 動作確認

artisanで確認。Dockerで開発環境構築済みであればそっちで確認してもよいです。

```bash
$ php artisan serve
```

http://localhost:8000/sample/redux/show

※ボタンを押したら数値が増えたり減ったりする画面が表示されれば成功。
