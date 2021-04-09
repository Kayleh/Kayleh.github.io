/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","5e49ccdbb79a73e17b62dd893d3ac0ea"],["D:/Blog/public/AIO-blocking-model/index.html","9be213a5a5d883f262b510d93293d898"],["D:/Blog/public/BIO-blocking-model/index.html","5939068c84471e4d543a285df2354a69"],["D:/Blog/public/C-algorithm/index.html","1eaf2e5e26960e32b3cbc7dd5a2d9805"],["D:/Blog/public/C-programming/index.html","b45ed8b1d86725e021ecc1beaed614ef"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","655a763e4616b1a55e74a27390c25436"],["D:/Blog/public/Front-end-security/index.html","f540657134034040400bd62a656b213b"],["D:/Blog/public/Good-use-of-pointers/index.html","69a27cf41afef2bc0df636c95a7fd0fc"],["D:/Blog/public/IO-model/index.html","17d258b5ae67c1b3a5c62a71c25b5ef5"],["D:/Blog/public/IO/index.html","3e9d20e975b52909f52721921488ebf7"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","de923ba0d4fa882834e8450b6b2cdb80"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","c87b3f9cc9ea5c43fd992699c9171ea4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","260d92f9cde66d095d3e9bc0dbc927bd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3b1eefc26f426c4d2b467d24d840d6f0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","e99a65a0f65d842b2a86148bf37e5426"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","6a9c37d411e376f7b59af8941559a476"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","b8e89f3b761cea00f2168e241d154d5e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","e8d29bc0c153204d92ce16f89a181345"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","460f4b02a79210a0ad5a30701a1be421"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","4e9a45493fcdc626582f89f7867d19f0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","c787624a6b2370e5f4f85381f6693c1d"],["D:/Blog/public/Java-network-programming/index.html","eb0ad5a46d8b69007bb0feea5f3792cc"],["D:/Blog/public/NIO-blocking-model/index.html","c5c140a56248e01c9924a5103830e432"],["D:/Blog/public/Native-method/index.html","892a5416f86e76d0b1f1e2137b2b3872"],["D:/Blog/public/SQL-injection-vulnerability/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL-injection-vulnerability/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL-injection-vulnerability/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL-injection-vulnerability/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL-injection-vulnerability/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL-injection-vulnerability/index.html","bc2a72d29f8523b56824db75c2703d58"],["D:/Blog/public/Sandbox-security-mechanism/index.html","e6b48d26dbc648524e9aef896c646eef"],["D:/Blog/public/SpringBoot-startup-process/index.html","d138472f0f561f22311affe5fbec1e44"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","f7e3e57b75df634ec024450b382c75a6"],["D:/Blog/public/Unitest-framework/index.html","ead1f0876287cc1b4118a01862ea47c6"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","20a153ebd088dd449ae1770c1dd53492"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","a258a5e5cda3d04b6d5015101696dd2f"],["D:/Blog/public/agency-model/index.html","7ca22e1c390093ee184dfcb15c8a7a33"],["D:/Blog/public/app-test/index.html","785a828214ddeff12ba2535d46bd6f14"],["D:/Blog/public/appearance-mode/index.html","50fd032306e21c2eaefd8774dd394a3d"],["D:/Blog/public/archives/2019/01/index.html","37559c4a733a24969297e7c5da610002"],["D:/Blog/public/archives/2019/07/index.html","cbd39e8c593aef9b009e38a9acf78176"],["D:/Blog/public/archives/2019/12/index.html","d10cb8883d8cbbedfd319f44dc0c1f08"],["D:/Blog/public/archives/2019/index.html","9f948c88fbf94ee5e808bdbe97ac08d4"],["D:/Blog/public/archives/2020/04/index.html","e0ae01426edffe8272aa6a59bd95201f"],["D:/Blog/public/archives/2020/05/index.html","cc8df1e256753eaa6a9f5e6817155499"],["D:/Blog/public/archives/2020/05/page/2/index.html","e21753f43ecba2e7d072c6f6d105cb4b"],["D:/Blog/public/archives/2020/06/index.html","44fb86335d5e157ea4b447ca514fa95d"],["D:/Blog/public/archives/2020/06/page/2/index.html","9dd71e3aaeb363c287d2ae63932a980e"],["D:/Blog/public/archives/2020/06/page/3/index.html","9a21c4d8042532ea45cfeaf820f955b2"],["D:/Blog/public/archives/2020/06/page/4/index.html","d99a50b70152dc4a9b2c1fafdc621d36"],["D:/Blog/public/archives/2020/07/index.html","f3aaa02aee219c81f9d79358948cd25c"],["D:/Blog/public/archives/2020/07/page/2/index.html","7bf0510c930a805a7d3c524746d63aa2"],["D:/Blog/public/archives/2020/07/page/3/index.html","70997fba0d6299765332d4e07d4659ff"],["D:/Blog/public/archives/2020/08/index.html","985181dc86e9bfcc3d13eaacdef8e1ac"],["D:/Blog/public/archives/2020/08/page/2/index.html","78fda593431260f88f6fb205669c33fb"],["D:/Blog/public/archives/2020/08/page/3/index.html","a5336640ed0b006f0431dd3338eae2a9"],["D:/Blog/public/archives/2020/09/index.html","a0150fbd6d96eb68055856f522d40e28"],["D:/Blog/public/archives/2020/09/page/2/index.html","6ad8d81f869e1da05f97f1732d2ad427"],["D:/Blog/public/archives/2020/10/index.html","2ee5b5fbb2420db6e2753ab6b7516750"],["D:/Blog/public/archives/2020/10/page/2/index.html","3be396779488297cbce4deba1fadd30f"],["D:/Blog/public/archives/2020/11/index.html","8471544bd417eef655575fc0af6d59cd"],["D:/Blog/public/archives/2020/11/page/2/index.html","d1e5c549d5bff638c01335b8d959a285"],["D:/Blog/public/archives/2020/12/index.html","c3dba5e648ed24a325a602ea428ed30b"],["D:/Blog/public/archives/2020/12/page/2/index.html","d0489fe3564efe714ae2c27520e9a345"],["D:/Blog/public/archives/2020/index.html","c787108befae4d93300bb0823002397a"],["D:/Blog/public/archives/2020/page/10/index.html","eda5ba278113de1ade25f8c1867329cd"],["D:/Blog/public/archives/2020/page/11/index.html","1632bffbeb9297987c3e15fe85718722"],["D:/Blog/public/archives/2020/page/12/index.html","ea1675200e5378214a8cea6858d498fd"],["D:/Blog/public/archives/2020/page/13/index.html","3689ab5012ceb570a653d29147d8a0c4"],["D:/Blog/public/archives/2020/page/14/index.html","0d0130f7e7da4804da6401eea9b82c05"],["D:/Blog/public/archives/2020/page/15/index.html","fe6a583d89c4eee6f83a1c92f7527d5b"],["D:/Blog/public/archives/2020/page/16/index.html","511f558ae1bdba22837dd630360caf34"],["D:/Blog/public/archives/2020/page/17/index.html","f89222307edff07ddae08b29e1661cfc"],["D:/Blog/public/archives/2020/page/2/index.html","777373f299d56944e6c451ed7585f9b6"],["D:/Blog/public/archives/2020/page/3/index.html","a00593bdc221e518c7cca70ce6840b8d"],["D:/Blog/public/archives/2020/page/4/index.html","ecea84822dd8187714e2010c9e130263"],["D:/Blog/public/archives/2020/page/5/index.html","2aa6b19b87d6715cbd82045da1076e7d"],["D:/Blog/public/archives/2020/page/6/index.html","2e64338ddc2ca94b333cdfc29215a078"],["D:/Blog/public/archives/2020/page/7/index.html","6634b087b6e6c0f3af73c2ba3011ca09"],["D:/Blog/public/archives/2020/page/8/index.html","f1a766b973a8d8e676583a203a1685a0"],["D:/Blog/public/archives/2020/page/9/index.html","6ea8e87655b0a084dad377d1b3417a08"],["D:/Blog/public/archives/2021/01/index.html","ef15e6c59abd9d5d52afb48a536909be"],["D:/Blog/public/archives/2021/02/index.html","675f697c5ea23a1a7ebf28701f5383b8"],["D:/Blog/public/archives/2021/03/index.html","c559a3585bc7c8bfd9ece48e3459c62e"],["D:/Blog/public/archives/2021/04/index.html","48a7c1e4b898c4bc835a40d9884f084b"],["D:/Blog/public/archives/2021/index.html","f9fde7622fe0d3c0d36bfc4023d0c81a"],["D:/Blog/public/archives/2021/page/2/index.html","476f52a2e39c7849519a34cef63d8523"],["D:/Blog/public/archives/index.html","7d2e06d790cce85642a2bb92d7a71558"],["D:/Blog/public/archives/page/10/index.html","bc8f1c31dc36733736670c41a1f38022"],["D:/Blog/public/archives/page/11/index.html","24832871b192ab878913cdea25a613eb"],["D:/Blog/public/archives/page/12/index.html","fb03d8e4f198769cf3b5ef4d9c97fafd"],["D:/Blog/public/archives/page/13/index.html","20cd5d22cc989ddc13f1e9062533a25b"],["D:/Blog/public/archives/page/14/index.html","b7c7d69cfa9e7701a00cfc9cab364b65"],["D:/Blog/public/archives/page/15/index.html","a7d9067a57ac7c15174b938bee2ad35a"],["D:/Blog/public/archives/page/16/index.html","78314cfde71e54a138e4875be9a4451c"],["D:/Blog/public/archives/page/17/index.html","ee6f44a51ba555534402afbf610f03ba"],["D:/Blog/public/archives/page/18/index.html","0f45c29b2124c37ccc9fccb0b0df3c01"],["D:/Blog/public/archives/page/2/index.html","211dce5e4cd305cfdfa6d839dcc69db3"],["D:/Blog/public/archives/page/3/index.html","75b948aab000c6207722d0733185fb32"],["D:/Blog/public/archives/page/4/index.html","5802f9eddc04912bdd520cd7aae12071"],["D:/Blog/public/archives/page/5/index.html","5d324f1b5213255517273aa243a85305"],["D:/Blog/public/archives/page/6/index.html","2f1a429424f282119a31203f201a5174"],["D:/Blog/public/archives/page/7/index.html","2bb082585e3c0275363002ba640ed75d"],["D:/Blog/public/archives/page/8/index.html","8e7a8a4082f5cfa455f0882e1c5739eb"],["D:/Blog/public/archives/page/9/index.html","a63894105b2e6061f79c72c208857ac4"],["D:/Blog/public/array/index.html","3c2c1b511476e09fe4f3841d72d712b6"],["D:/Blog/public/automated-test-katalon/index.html","7a44ea24cea0cb8046a8b66054d92a69"],["D:/Blog/public/automated-test-selenium/index.html","09382dd5ccc16a7559ca899569cde0f1"],["D:/Blog/public/binary-search-algorithm/index.html","37b3698d7df06cc7797d7d4b0c38b9a3"],["D:/Blog/public/binary-sort-tree/index.html","a6660b15517807fb3e2f9c4ab6c8c8f9"],["D:/Blog/public/bionioaio/index.html","73af77010294515fee1ea7af76e4aaeb"],["D:/Blog/public/bridge-mode/index.html","c1fba6baee5d24491ac2a0267a97e3f7"],["D:/Blog/public/builder/index.html","dd7a620a04101b18edc23c0252bfae19"],["D:/Blog/public/c-pointer/index.html","a8d88b43cb2063567eedb92fd150ed23"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","56ec7b6349b21a5380181864965b3f27"],["D:/Blog/public/chinese-and-english-switching/index.html","c01d44b4f87ddb43d43970ea342b2e68"],["D:/Blog/public/combination-mode/index.html","cc71cbf150e35819df0621bf88e2c1b3"],["D:/Blog/public/command-mode/index.html","3e9c30c78c2780b1889f0209e5ad71fb"],["D:/Blog/public/common-commands-of-unix/index.html","241f65d624235add3cbfdd92352466a8"],["D:/Blog/public/computer-network/index.html","0a061af7d7a4f22f7d8cbe5cabe97f70"],["D:/Blog/public/concurrency-principle/index.html","238ce3ae2913c2335662986770237d33"],["D:/Blog/public/continuous/index.html","adf805ffdb4abb0831109e869c267e9b"],["D:/Blog/public/contract/index.html","94ce0e6ba1f84d78e22ee0d463053826"],["D:/Blog/public/css/octo.css","e053465cf0913f122c748769634b2e3b"],["D:/Blog/public/cycle-structure-programming/index.html","4d5255d288b708d0d5af361df6756c28"],["D:/Blog/public/data-structures-and-algorithms/index.html","f95f9326e3bb320f39cceb55dafe4e46"],["D:/Blog/public/deb/index.html","cd6faf521b063a5c90ab8c6f1e063e14"],["D:/Blog/public/decorator-mode/index.html","f3d0a0e700247746c7653ec8674ab5dc"],["D:/Blog/public/definite-integral/index.html","3c378eac17202a9b17c17f546b028017"],["D:/Blog/public/dependence-reversal-principle/index.html","6d5f538bb3e26385f61db443f0d9727c"],["D:/Blog/public/derivative/index.html","5f85c25926e9e7c2fe6a1713d0e1d46d"],["D:/Blog/public/design-patterns/index.html","2bee38b73d8836ebcc1f144926db2561"],["D:/Blog/public/differential-equation/index.html","97cfeddfe45bbea39688ce9d57a9e2b6"],["D:/Blog/public/differential/index.html","86eb9b3d377e9ccc0bfbf009f0e8746e"],["D:/Blog/public/dimits-law/index.html","e4b27ff7f107b35e3c04dd045e9a923e"],["D:/Blog/public/docker-virtualized-container/index.html","f0fef5b8bace94d3a5a229e472497728"],["D:/Blog/public/double-integral/index.html","ed0edb387eef244977b85e29c3c6c13e"],["D:/Blog/public/dynamic-array/index.html","889df37006e0edafc1bc2214d471d9eb"],["D:/Blog/public/dynamic-programming/index.html","1e9164de64b5cccb77b1d35ef28280c3"],["D:/Blog/public/encoding-algorithm/index.html","7d0aa710c3ed55202896bb2ce85b4af7"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","4041e1e4e6765220f241361511e133a5"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","f79db372f8820687dcfb196491747d3b"],["D:/Blog/public/factory-design-pattern/index.html","750a84b2bb60c6f08d05df13b87bd937"],["D:/Blog/public/file-input-and-output/index.html","d13b30ee38263998faca5519328f0698"],["D:/Blog/public/flyweight-model/index.html","bd060bc45e794c3bcf8eea53a941f3e2"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","c23b7e3b4e378c510779982e6cd80f93"],["D:/Blog/public/gateway-service-current-limit/index.html","7402350cea5371f7d9ab8ac3b4e7ecbc"],["D:/Blog/public/gc/index.html","359d2fa251955fc4352fb2688e0b5443"],["D:/Blog/public/generalized-integral/index.html","d1ec9ad5b34933aa7bcb6fba352f146a"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","e1caf550faba3c974f11cd0b32d435ff"],["D:/Blog/public/hash-algorithm/index.html","cf01135cb4d0e4e1f9dd4114f327398a"],["D:/Blog/public/heap-sort/index.html","0e98e85412e8e3d566df5eee2a026924"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","f11c9d07b9ea4cf0534023d51d46aaa3"],["D:/Blog/public/http/index.html","47c760d5710ec0441e7b764f733c01f4"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","4f64ed070fdbec6f6c3cb77c51bbfb98"],["D:/Blog/public/index.html","31ae5851ab921692c39ebadf2574e076"],["D:/Blog/public/infinitesimal-and-infinite/index.html","e0fa9e7ec397f4ff512a137c6556c374"],["D:/Blog/public/interface-isolation-principle/index.html","3ea12ce72102c921fa421dc94102c313"],["D:/Blog/public/interface-test/index.html","25b4936f0a3e15076455fd7e5cc1277a"],["D:/Blog/public/intermediary-model/index.html","a1544b538bc39deb9044bf427080ea2a"],["D:/Blog/public/interpolation-search-algorithm/index.html","e41a42a20dc05b1b6a8ee9491ce00f32"],["D:/Blog/public/interpreter-mode/index.html","6b9e659c60b1499ad17a54b19901e778"],["D:/Blog/public/introduction-to-computer-network/index.html","11c33f9b21fd5f97755c6f432616e5f3"],["D:/Blog/public/introduction-to-operating-system/index.html","73e3de6fd2176640cab7b8cabcb5dc80"],["D:/Blog/public/inversion-of-control/index.html","2ee452f70f2359c033ec0da2c2c819aa"],["D:/Blog/public/io-Interview/index.html","583e57eec5dad9cad3a298aed5344e0f"],["D:/Blog/public/iterator-mode/index.html","44c067b34b30a393577e1b81156df81c"],["D:/Blog/public/j2ee/index.html","554b0b4122362e8c52b1ba0090dd2952"],["D:/Blog/public/j2se/index.html","935c7a025dc606b14d29d0f37bbeb13e"],["D:/Blog/public/jdbc/index.html","36f37c8592da4e7cc36b6e68fa0143b7"],["D:/Blog/public/jdk/index.html","749cd5405a9b485f5f562a836aeaa174"],["D:/Blog/public/jmm-memory-model/index.html","f09dd02fcc1bd2c2bb6804531861c21e"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","b2fa56988c20fda3407043f036db9e33"],["D:/Blog/public/jvm/index.html","2ac64d9c5530a8cfbc26c78c66c4520a"],["D:/Blog/public/law-of-robida/index.html","eaa6abe069a4952775573c1349ce727e"],["D:/Blog/public/limit/index.html","3665dc18b93bbd6b49b0b776298e1870"],["D:/Blog/public/linear-search-algorithm/index.html","3a3422c8feb956993638b90161b871a3"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","39bd8d3d210e4c1126d059d882f16740"],["D:/Blog/public/linux/index.html","ad8e2a5f6e061f03ac55cabf156811d7"],["D:/Blog/public/liskov-substitution-principle/index.html","e3bb64d1ab2e595734b5a7a5ff7c3639"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","78de3eac2de59bec200b936275a248b0"],["D:/Blog/public/maintenance-1/index.html","d1371249f061c67e7538c814975699de"],["D:/Blog/public/maintenance-2/index.html","ddd88882f41f3ec0d126eed864054b2a"],["D:/Blog/public/maintenance-3/index.html","75fce057be233f8d47bd65441944723c"],["D:/Blog/public/memo-mode/index.html","c02a0ce7b141a7f6e903527394016fc4"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","72a9a3dff81a69f0f78b48448b95b762"],["D:/Blog/public/multi-function/index.html","46514629d189f3f5f2d0b17c0b372705"],["D:/Blog/public/multithreading/index.html","fdd877899fa159d51065d73dabc0efa5"],["D:/Blog/public/mvc/index.html","61e0eb2b0c7f989d8af6f884f24c9a9f"],["D:/Blog/public/mybatis/index.html","4a90afa6909aee573e40b4168b998d9f"],["D:/Blog/public/mysql/index.html","339f6bfb8aaa52d0b43ef0dc7c60f7e9"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","3aa8a91bce09fe5831da3da979a02743"],["D:/Blog/public/objectoriented/index.html","fa3d98896f6d0622ba5fc4329700fc27"],["D:/Blog/public/observer-mode/index.html","da1d2f48296b237e41b7cc04c5c969d8"],["D:/Blog/public/off-heap/index.html","ebd7e25aa17d92cbf16744ae4e631298"],["D:/Blog/public/operating-system/index.html","ee679fe3f7b9b7b123c8e1b8843efea9"],["D:/Blog/public/page/10/index.html","76dcaab98f4c78fbc4d43add8e8283b7"],["D:/Blog/public/page/11/index.html","3520c9be816cf341bfaf6dddce2b1802"],["D:/Blog/public/page/12/index.html","d9845f8f65190ae150824e5c8d444c2d"],["D:/Blog/public/page/13/index.html","f527f6235cc9bf8868e4d89033d0c49b"],["D:/Blog/public/page/14/index.html","053c2b1ddb3ce7e86bf27139cf2b21d7"],["D:/Blog/public/page/15/index.html","4b2ef03d0721c05932b9d993cea67521"],["D:/Blog/public/page/16/index.html","cbbe6368432b832ada116887f04df3a4"],["D:/Blog/public/page/17/index.html","e1e1523f0261bab9df5ae6c1bd5416d4"],["D:/Blog/public/page/18/index.html","80d4eec1816333d097ea4c0f24a54452"],["D:/Blog/public/page/2/index.html","96e22473e6a46edb5849b49f2f0172b1"],["D:/Blog/public/page/3/index.html","361ade7c072d6cae7f72a910aada500b"],["D:/Blog/public/page/4/index.html","e603c91c1b1e9e10dfcb8031e7b179e5"],["D:/Blog/public/page/5/index.html","c96ae8e094c7ee8b4dc6e3550a442000"],["D:/Blog/public/page/6/index.html","43f301322328cfea471b73f332c607d8"],["D:/Blog/public/page/7/index.html","22466936b9a9267937af84300f4b786a"],["D:/Blog/public/page/8/index.html","c92ac4c70b80bdf2b3e26ef1a4726b04"],["D:/Blog/public/page/9/index.html","655cd62616ba3314752e34d9d81695b5"],["D:/Blog/public/palindrome/index.html","39166c1a33080e0b53fa1b7a5d3d4ab0"],["D:/Blog/public/partial-derivative/index.html","7824795f267a92793c4433e3e8b8b26e"],["D:/Blog/public/pass-by-value/index.html","ef56c4c74922284423e717945c6a394c"],["D:/Blog/public/pictrue-bed/index.html","83cea38de3a29b283ed80e3a54a2469f"],["D:/Blog/public/principle-of-opening-and-closing/index.html","ca8135932631be2692244ca0a99c368b"],["D:/Blog/public/principles-of-computer-organization/index.html","cfb145aedee201eeaecea89b998d992c"],["D:/Blog/public/program-test/index.html","7e1e9f257b35819e4601fc5d6972b6bc"],["D:/Blog/public/prototype/index.html","bba80708119a574c0a9bdb40541f5b5b"],["D:/Blog/public/queue/index.html","d01f9156d41e16c65caf2c4c0ebe94b2"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","8f282b202a1549b9d0308980814d28fe"],["D:/Blog/public/redis/index.html","00c1d5b22f78c4721830fa23e9ef387d"],["D:/Blog/public/reflection/index.html","f6b98f219d6bed784ade3110d81dfe3e"],["D:/Blog/public/resume/index.html","4a361db22105c347879a19aa1170c7cc"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","3c17fd6cf6556afb77e2083491f68758"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","f876622f566624427dcdaae2c7f7a0d9"],["D:/Blog/public/select-structure-programming/index.html","b96897991c17edf6ccbbad0a6a94eecd"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","4c443bac47a683ce86dfd67e82089a1c"],["D:/Blog/public/sequential-programming/index.html","246833536fcbc9e032dda754cbac8be3"],["D:/Blog/public/series/index.html","167f18be63687a894882ef43651a47c4"],["D:/Blog/public/single-point-login/index.html","b8a8e8743b060c2d236a1ac32b10c951"],["D:/Blog/public/single-responsibility-principle/index.html","7110765f3357c8bc89e99fe50b1c5bf8"],["D:/Blog/public/singleton-mode/index.html","d9826a90403a64d64b5a4b7c8d175040"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","7a970a0a96f7987ca1fd7323ea2492f7"],["D:/Blog/public/sparsearray/index.html","4fc76b0b0cf73619d246e4d26a8974c5"],["D:/Blog/public/spring-architecture/index.html","9e5bd0e907a23d689de6859a23dc8c75"],["D:/Blog/public/spring-relate/index.html","7c080a09d9b12a62edf1322b1ffbbcdc"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","c341b59963c6c68d26067492b9bf02e1"],["D:/Blog/public/spring/index.html","9f9f6be00f13fdadd1b99c7a7a677c56"],["D:/Blog/public/springcloud-alibaba/index.html","351e111daada669407b211f5ed92c725"],["D:/Blog/public/springcloud-bus-message/index.html","aa055d06006eb91ad1d3aa07fabe2e12"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","4ea1ddbe25641ac7432c1ad571180289"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","0fbb0f517ecb6708916ff48fb2c66fb8"],["D:/Blog/public/springcloud-stream-message-driver/index.html","09e5a479e0f46936b07e807921caff41"],["D:/Blog/public/springcloud/index.html","f2a38bbebe18fca520461b3d26a61ac8"],["D:/Blog/public/springmvc-environment-construction/index.html","f5d65cf47dd013f5c3790561979c565e"],["D:/Blog/public/springmvc-work-stream/index.html","83105ad7179b4f320e4e01a0ee14f83b"],["D:/Blog/public/sql-injection-attacks/index.html","c1c1e1e6590dd6bdc716cba73ddcc195"],["D:/Blog/public/stack/index.html","a5461c51441b4da4205f14e980ff55c9"],["D:/Blog/public/state-mode/index.html","bc06074a3f0acc2741b43db27e02dd4a"],["D:/Blog/public/strategy-mode/index.html","d21d409d3763c45b8bdc4ec86cfdf162"],["D:/Blog/public/synthetic-reuse-principle/index.html","42826c884b8426998e5ca26f3f2aec34"],["D:/Blog/public/tags/C/index.html","3f277c35e5f0ac4d9dada38b9b98dea2"],["D:/Blog/public/tags/C/page/2/index.html","980b1b8d1f8923ea017e026ed87b2b7c"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","7e88fd4dca23c80401bc462375e29bb4"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/security/index.html","7eefe28be043c5945e166ccff480270f"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","db9f9e514c1339a73b8220ee1bfaea99"],["D:/Blog/public/template-method/index.html","6e99650fd00ddc8c6628141a6f598e96"],["D:/Blog/public/test-case/index.html","f69d0826c484bae3f9fce38f9a948bab"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","584b1e1a65e6d4fa8384f2498781de26"],["D:/Blog/public/thread/index.html","ff56073fcffa2e50f6db54347cc1a725"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","3b49db274f7e3c682f2f709fda10acce"],["D:/Blog/public/ubuntu-set-ip/index.html","9d7c6e0d56e366354d607b2d26c474d3"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","56d0e22386aa72a2f6109a521955a808"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ab773b86c4eaa54f080263232dc44abf"],["D:/Blog/public/users-create-data-types-themselves/index.html","d1403fe5a2e8d635fe386d635720dba0"],["D:/Blog/public/visitor-mode/index.html","f4e5388352d30995432b96642b9f5096"],["D:/Blog/public/xml/index.html","45bf52f5c5f7c041d6743426fc1671a9"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","9f82c50129a7e8afb2c362aa5c25541f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







