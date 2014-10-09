/* Copyright 2014 Intelligent Technology Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var parallel_webdriver = require('wd-parallel');
var browsers = parallel_webdriver.remote();

// テストケース
browsers.test = function(browser, target) {

	// 初期化
	browser.init(target);
	// Windowのサイズを設定する
	browser.setWindowSize(640, 480, function(err) {
	});
	// グーグルページを開く
	browser.get('http://google.com');
	// 検索テキストに「Hello World」を入力
	browser.elementByName('q').type("Hello World");
	// 検索を実行
	browser.elementByName('q').type("\n");
	// 検索結果の画面に遷移するまで待つ(30秒)
	browser.waitForElementByCss('#hdtb_msb', 1000 * 30);
	// 画面のHCを撮る
	browser.saveScreenshot('results\\' + target.browserName + '.jpg', function(err, file) {
	});
	// ブラウザをクローズ
	browser.close();
	// 終了
	browser.quit();
};

// 並列で実行するブラウザの設定ファイルをロード
browsers.loadConfigFile('config.json');

// テスト実行
browsers.run();
