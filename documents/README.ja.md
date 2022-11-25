<div align="center">
    <img src="https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/icons/favicon-circle.png" width="100" />
    <h1>
        <strong>Shioru</strong>
    </h1>
    <img src="https://img.shields.io/badge/discord.js-v14-7354F6?logo=discord&logoColor=white&style=for-the-badge" />
    <img src="https://img.shields.io/github/stars/Maseshi/Shioru.svg?logo=github&style=for-the-badge" />
    <img src="https://img.shields.io/github/v/release/Maseshi/Shioru?logo=java&style=for-the-badge">
    <img src="https://img.shields.io/github/license/Maseshi/Shioru.svg?logo=github&style=for-the-badge" />
    <img src="https://img.shields.io/github/workflow/status/Maseshi/Shioru/CodeQL?label=test&logo=circleci&style=for-the-badge" />
    <img src="https://img.shields.io/github/last-commit/Maseshi/Shioru?style=for-the-badge">
    <a href="https://stats.uptimerobot.com/gXGx1iqxop">
        <img src="https://img.shields.io/uptimerobot/ratio/7/m789124615-03e67c33f3ffeade6f2b8d05?logo=google-cloud&logoColor=white&style=for-the-badge" />
    </a>
</div>

[EN](https://github.com/Maseshi/Shioru/blob/main/documents/README.en.md) | [TH](https://github.com/Maseshi/Shioru/blob/main/documents/README.th.md) | [JA](https://github.com/Maseshi/Shioru/blob/main/documents/README.ja.md)

優れたサーバー アシスタントは、サーバーをより活発に見せるのに役立ちます。 彼女ができることはたくさんあり、詳細なコマンドは `Shelp` または `/help` を入力して見つけることができます [ここ](https://discord.com/api/oauth2/authorize?client_id=704706906505347183&permissions=8&scope=applications.commands%20bot&redirect_uri=https%3A%2F%2Fshiorus.web.app%2Fthanks-you)

## 特徴

- [Discord.js](https://discord.js.org/) v14 で動作します。
- ご希望の様々なアイテムをカスタマイズ可能
- 両方から音楽を再生できます [YouTube](https://www.youtube.com/)、[Spotify](https://www.spotify.com/)、[SoundCloud](https://soundcloud.com/)の再生システムを搭載。音楽は自動的に再開します
- 複数の言語をサポート 対応言語は当リポジトリの【言語ファイル】(https://github.com/Maseshi/shioru/blob/main/source/languages)から確認できます。
- ティアシステム (レベルと経験)
- サーバー通知のカスタマイズのサポート
- `@Shioru`の後に伝えたいメッセージを入力すると、チャットできます。
- アプリケーションコマンド (/) が使用できます。

などなど、興味深い機能がたくさん...

## 前提条件

- [Node.js](https://nodejs.org/) v16.9.0 以降
- [Firebase](https://firebase.google.com/) v9.0.0 以降
- [Git](https://git-scm.com/downloads)

## クイックセットアップガイド

### 始めましょう

- ターミナルを起動し、次のコマンドを実行します。

```bash
git clone https://github.com/Maseshi/Shioru.git
cd shioru
npm install
```

- `./source/config.js` の **config** で一部の情報を編集できます。

### Firebase をセットアップする

- https://firebase.google.com/ にアクセスして、プロジェクトのセットアップを開始します。
- 新しいプロジェクトを追加し、手順に従います。
- 最初のアプリケーションを **ウェブサイト** に追加し、オプション **「このアプリの Firebase Hosting もセットアップする」** を選択せず​​にアプリに名前を付けて、アプリを登録します。
![](https://raw.githubusercontent.com/Maseshi/Shioru/main/assets/images/firebase-setup-web-application.png)
- Firebase は構成に関する情報を提供します。これらの値をファイルに適用します。 `.env.example`
- **[作成] > [リアルタイム データベース](https://console.firebase.google.com/u/0/project/_/database/data)** に移動して、ストレージ データベースを作成します。

### 発展させる

- ファイルの名前を変更します `.env.example` を `.env` として、必要なすべての値を挿入します。
- ターミナルに移動し、開発用に`npm run dev`、本番用に「npm start」を実行します。
     > **注**: 開発モードの場合 一部の機能が動作しない場合があります。

## クイックトラブルシューティング

- **sodium** パッケージをインストールできない場合は、代わりに **libsodium-wrappers** をインストールしてください。

## クレジット

これらの素晴らしい作品の使用を許可してくれたすべてのオリジナル クリエイターに感謝します。

アバターペイント: [夏月 まりな (NATSUKI MARINA)](https://www.pixiv.net/en/users/482462)/[お着替え中](https://www.pixiv.net/en/artworks/76075098)

## 問題が見つかりました

問題が発生した場合 現在の仕事から タブからお知らせください。 [issue](https://github.com/Maseshi/Shioru/issues) のリポジトリです。

## Google 翻訳

このドキュメントの内容は、[Google 翻訳](https://translate.google.com/) サービスによって翻訳されています。 エラーが発生したことをお詫び申し上げます。