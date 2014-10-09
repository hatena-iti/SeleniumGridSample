selenium grid sample
===============

selenimu gridによる並列実行のサンプル

## 実行環境 準備

事前に下記をインストール、セットアップしておく。

* jre
* node.js


### セレニウムサーバー(java jar)

seleniumServer/selenium-server-standalone-2.43.1.jar

#### ブラウザドライバ

* chrome
  webdriver/chromedriver.exe
* IE(64bit)
  webdriver/IEDriverServer.exe

## 使い方

並列実行で使用するモジュール(wd-parallel)をインストールする.

    npm install


コマンドプロンプトからhub(selenium grid server)を起動する.

    setup_hub.cmd

コマンドプロンプトからnodeを起動する.

    setup_node.cmd

※それぞれ別のコマンドプロンプトから起動する

テストモジュールを実行する.

    npm start



