# la-sample

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

artisanで確認。Dockerで環境構築済みであればそっちで確認してもよいです。

```bash
$ php artisan serve
```

http://localhost:8000/sample/redux/show

※ボタンを押したら数値が増えたり減ったりする画面が表示されれば成功。
