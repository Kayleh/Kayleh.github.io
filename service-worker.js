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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","94f876fec361e17a3c3c6e8b367b98c4"],["D:/Blog/public/AIO-blocking-model/index.html","cab68ecb669b30a899f6e997de8f7ed1"],["D:/Blog/public/BIO-blocking-model/index.html","da48572ec0425c1514b3890b74896f27"],["D:/Blog/public/C-algorithm/index.html","4c373effce2fc903219024e863509bee"],["D:/Blog/public/C-programming/index.html","4a4f40dc757ee1a8338ff740be52bc8e"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","5345a7e4cdb339664662c68cccf33305"],["D:/Blog/public/Front-end-security/index.html","6bd60f170675336cc19194e8baca5499"],["D:/Blog/public/Good-use-of-pointers/index.html","aba6a3a34ccc1a86d012ce22c3cb979a"],["D:/Blog/public/IO-model/index.html","9051df344f12ba37ca78e0f469e32ba7"],["D:/Blog/public/IO/index.html","381b6a0fabd0614c69d107231550137a"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","cba32b92b6236a41fc00a2179532d2f3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","96a3a934fbd5d429e4768c5a981d60be"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","af59e11ed3fedcafc804fde1789b37e3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c7ae8e7b5c6321d17dd2afd7b4adc2a0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","4a0caa1624cf7eea57dcd3c9ea2d43fb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","3d9cf5b265c6afe5d825323d32d64187"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","6299523d61b8922124ac1169618b92b3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","77a1878aeaa52d65fbb89afffaad00e2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","e18db86a98ace1f63ee7ca8f880fa134"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","2157069481c71df9faa755f2fba22b84"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","c398751e3e6acb91ef881d28c270be83"],["D:/Blog/public/Java-network-programming/index.html","e27292ac0e9430a741c0439ede56f91e"],["D:/Blog/public/NIO-blocking-model/index.html","3c9308f8e73eae0daf5eb96e1145fc7f"],["D:/Blog/public/Native-method/index.html","83cf1fdf0ab8997b42cf784e9b2f6045"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","f389895f5486885c5b3147a74a776507"],["D:/Blog/public/SQL-injection-vulnerability/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL-injection-vulnerability/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL-injection-vulnerability/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL-injection-vulnerability/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL-injection-vulnerability/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL-injection-vulnerability/index.html","329613c1d88b84c550963e10c559c390"],["D:/Blog/public/Sandbox-security-mechanism/index.html","ad3753bfd470b5468ee27d9333ac995c"],["D:/Blog/public/SpringBoot-startup-process/index.html","15f50c59c2cff56a525e06fa0b194d4f"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","7e863583eb999110cfba52742515e3f9"],["D:/Blog/public/Unitest-framework/index.html","9ac6e1a1a07e51721611b6c64d85a9f1"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","4327c3fd8c0406c5b981eb312c5a0ced"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","b658ceae260154fa3a956432fa25ca45"],["D:/Blog/public/agency-model/index.html","c528f151ada69e03b550dcfac135d1a0"],["D:/Blog/public/app-test/index.html","27ba758522b6795386c21eccc13ac69b"],["D:/Blog/public/appearance-mode/index.html","baa781351e910b713b5624beaf534c3f"],["D:/Blog/public/archives/2019/01/index.html","d746e2c317d5fd74a5c1050d2f203741"],["D:/Blog/public/archives/2019/07/index.html","7d75c4dfa7e534f22a50f13350f92d7b"],["D:/Blog/public/archives/2019/12/index.html","312b53b9e795d18d943299b37eaa6616"],["D:/Blog/public/archives/2019/index.html","dd392608efc5263d3262c18d14903e67"],["D:/Blog/public/archives/2020/04/index.html","d04c527eeaba8b9cd9ddd6c26d084f14"],["D:/Blog/public/archives/2020/05/index.html","b9cc7bf53e1f73e285d3ce240e8f6fbd"],["D:/Blog/public/archives/2020/05/page/2/index.html","932b5a91589a87fabe975b8905dcf75e"],["D:/Blog/public/archives/2020/06/index.html","0d42658ae719adb8f5b2fbce31f159d1"],["D:/Blog/public/archives/2020/06/page/2/index.html","c3f2f989b574c1597369113316cf3293"],["D:/Blog/public/archives/2020/06/page/3/index.html","d5aacd64aa45bbadbb7370f4ef55669e"],["D:/Blog/public/archives/2020/06/page/4/index.html","9dbde6f5896a8f72300f3cfb52d080e3"],["D:/Blog/public/archives/2020/07/index.html","ddd25d41ca5c561bc4a6dce5be7c7695"],["D:/Blog/public/archives/2020/07/page/2/index.html","94869967c136d373c0eefe4267054fd4"],["D:/Blog/public/archives/2020/07/page/3/index.html","9a181cd633fa4c520ab8a83ad7e0856f"],["D:/Blog/public/archives/2020/08/index.html","31637b5627e02ea9b5c2b9b2170f365b"],["D:/Blog/public/archives/2020/08/page/2/index.html","e9211e07a243871f42f774f4b894e77e"],["D:/Blog/public/archives/2020/08/page/3/index.html","ff7714f6ac30dfd9f706f7955661eaee"],["D:/Blog/public/archives/2020/09/index.html","b7e4a2b9d41e2ce8afe27b514f42aa92"],["D:/Blog/public/archives/2020/09/page/2/index.html","2c2fe5876217a25adc18a3e6843f526c"],["D:/Blog/public/archives/2020/10/index.html","f673798634d726d3410c82938f7b2c1f"],["D:/Blog/public/archives/2020/10/page/2/index.html","624fc34ea1ee09189a50d7653999ed4b"],["D:/Blog/public/archives/2020/11/index.html","b1677fd41be1bd006fba7c03c9acf789"],["D:/Blog/public/archives/2020/11/page/2/index.html","248719e473d6c00b9f9b98a57ad6f3af"],["D:/Blog/public/archives/2020/12/index.html","4a1cc1068a11d7ca341bbd5562f7ca1d"],["D:/Blog/public/archives/2020/12/page/2/index.html","3665ad96d590eb903214773c23808ede"],["D:/Blog/public/archives/2020/index.html","0dcca5f1677bac09624a84afadb3e3ae"],["D:/Blog/public/archives/2020/page/10/index.html","8eefff4745995a69210d4bcf8ec25024"],["D:/Blog/public/archives/2020/page/11/index.html","c6d1392515bb774069ac778f16f02c3d"],["D:/Blog/public/archives/2020/page/12/index.html","f6afcaa1fcdeadfdfc429185f4d98bc7"],["D:/Blog/public/archives/2020/page/13/index.html","62e12e2bb40e8190d7a1f47409ba74fc"],["D:/Blog/public/archives/2020/page/14/index.html","f8c3c5ef5d6fb913331f5a896fc6784d"],["D:/Blog/public/archives/2020/page/15/index.html","4c3c6b69b2fb2c37e14e2236f161d21d"],["D:/Blog/public/archives/2020/page/16/index.html","23363a06c77fc8caa0f1f4df6469565d"],["D:/Blog/public/archives/2020/page/17/index.html","fd799b673899799712f4720a418b8318"],["D:/Blog/public/archives/2020/page/2/index.html","5c310f549855304bbefdfd0b62d5a8be"],["D:/Blog/public/archives/2020/page/3/index.html","8dd47272ce027807caf1c422e7af84cc"],["D:/Blog/public/archives/2020/page/4/index.html","a6b675158bb4f2d5e9b9717881cb6942"],["D:/Blog/public/archives/2020/page/5/index.html","e83ae3824b0630e2c2cf8a40edb602ab"],["D:/Blog/public/archives/2020/page/6/index.html","da783e6bd0d604997d212600ae59a7e2"],["D:/Blog/public/archives/2020/page/7/index.html","7459ce5ca183f67dc4980e88402efb68"],["D:/Blog/public/archives/2020/page/8/index.html","eebddd7b43e656cd4b1ee7a77910d9b3"],["D:/Blog/public/archives/2020/page/9/index.html","2e7ca7b0c18f4058fe5b9985d85539c3"],["D:/Blog/public/archives/2021/01/index.html","9a598da7871f6ffc2ecdfe22490c3b4d"],["D:/Blog/public/archives/2021/02/index.html","1d0e43093a3c05cd111ec39b5bb8dc76"],["D:/Blog/public/archives/2021/03/index.html","4f601558cc5a21b49653c683a9d49cc6"],["D:/Blog/public/archives/2021/04/index.html","fac110b68de634cc39d19547b4066033"],["D:/Blog/public/archives/2021/index.html","2972eccc66f8bc1b40c84d35cae70519"],["D:/Blog/public/archives/2021/page/2/index.html","6603005f78c28f42fe91e1920a8c2941"],["D:/Blog/public/archives/index.html","de52002a4645e4f15ae44e5c238e5730"],["D:/Blog/public/archives/page/10/index.html","9162987f4f5569746aaa4fe188356122"],["D:/Blog/public/archives/page/11/index.html","47da7ffe2a2057623c49dc9ca77c210b"],["D:/Blog/public/archives/page/12/index.html","da51a12ab85d5b694c1274f64ffa5957"],["D:/Blog/public/archives/page/13/index.html","f8cb22a427f4f66ff100ac2dac58ebf3"],["D:/Blog/public/archives/page/14/index.html","0aba72225a6956a16afe0c155adb1ca3"],["D:/Blog/public/archives/page/15/index.html","cd7c528d259c5134746a2e0ad9b0d31d"],["D:/Blog/public/archives/page/16/index.html","e7eb2cf7809c1e3a3972e5d19ab15d73"],["D:/Blog/public/archives/page/17/index.html","44b96391c71d8be91c9b26a3203eb815"],["D:/Blog/public/archives/page/18/index.html","b8a68131df2285acea14626e6acab397"],["D:/Blog/public/archives/page/2/index.html","5eee8c3d55586d2666db6334559b2ea3"],["D:/Blog/public/archives/page/3/index.html","7986ac012bfdea9fad173523dcfaa148"],["D:/Blog/public/archives/page/4/index.html","47739f2099d6253ffec141505e609f27"],["D:/Blog/public/archives/page/5/index.html","a93d306f1de5cf5a9f4b6d23900497f5"],["D:/Blog/public/archives/page/6/index.html","3b2a23a413a234eed63fdcd2171207a6"],["D:/Blog/public/archives/page/7/index.html","e80ee9fcd8b3ece45f734300fcff6de0"],["D:/Blog/public/archives/page/8/index.html","51f77a95408609f68111cf543740a69a"],["D:/Blog/public/archives/page/9/index.html","8a84f81318b58243b6bd5c26201a6078"],["D:/Blog/public/array/index.html","57e9de1af95d757b3f1b3e3074fda97e"],["D:/Blog/public/automated-test-katalon/index.html","cb47b840fb429790064ead4c035d798e"],["D:/Blog/public/automated-test-selenium/index.html","aaba496dc7d2d9588d8d53cd1ad85bd1"],["D:/Blog/public/binary-search-algorithm/index.html","193ae40668a9e91b834117b5b4a48d90"],["D:/Blog/public/binary-sort-tree/index.html","ea4999d06073e11119a32fca722f4233"],["D:/Blog/public/bionioaio/index.html","2755fffd78409e44761f5f8a4caae2ae"],["D:/Blog/public/bridge-mode/index.html","c0872aca302667af47040762c06edc24"],["D:/Blog/public/builder/index.html","1ddcfa078d66f0097143c5f9a19bee8e"],["D:/Blog/public/c-pointer/index.html","d40c52ef24e5a7ddc433f56dfc93f3b8"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","476c0dd9d75d04452e7cb3936af86822"],["D:/Blog/public/chinese-and-english-switching/index.html","7e84fe0bf6642556813013ac5bf12410"],["D:/Blog/public/combination-mode/index.html","c46d5d8cbc2db40d5c9553c46be130ac"],["D:/Blog/public/command-mode/index.html","529d1974b5a04095f2f55be6c9ed964f"],["D:/Blog/public/common-commands-of-unix/index.html","302c4730d70dea31b94466599f66d38f"],["D:/Blog/public/computer-network/index.html","fbff93a1b759ce4bdf1688f6f09f9c59"],["D:/Blog/public/concurrency-principle/index.html","aa4b9f79ccd56f3e391e9921d3dfc31e"],["D:/Blog/public/continuous/index.html","e73c1632bb3b69bb79052d3743ac6821"],["D:/Blog/public/contract/index.html","0de5cd169333f79eeb0f74c8b360c3de"],["D:/Blog/public/css/octo.css","0aea086cb7d84d3c92e881e89399bd79"],["D:/Blog/public/cycle-structure-programming/index.html","ccd5b44ffaaf66d6522829e0de4e25a7"],["D:/Blog/public/data-structures-and-algorithms/index.html","7e5221fdd3d7254a22d1a2787ae6d131"],["D:/Blog/public/deb/index.html","33671a4516f45a27afa6905cf92aa643"],["D:/Blog/public/decorator-mode/index.html","17441aa15c5031f43b5eea9d20b46a09"],["D:/Blog/public/definite-integral/index.html","4632e25651f696149f09fa95bfe1ef21"],["D:/Blog/public/dependence-reversal-principle/index.html","383f28d948d33829b339f730824c1897"],["D:/Blog/public/derivative/index.html","32e4d846d1791aa67d307f55276da1ce"],["D:/Blog/public/design-patterns/index.html","651ad58559e51412d9b2c2ce7c73aef0"],["D:/Blog/public/differential-equation/index.html","fec255675ffc980c8a627af5a5df1436"],["D:/Blog/public/differential/index.html","2ea14d7049c913ad49d6d4d31265108e"],["D:/Blog/public/dimits-law/index.html","72b33cde0dca04ca7c58eba5ef57de47"],["D:/Blog/public/docker-virtualized-container/index.html","2ee2a60e2ba72ac7dd29ded1321cebe1"],["D:/Blog/public/double-integral/index.html","8c8d7924a47fb19d6fb83bbca70b9acb"],["D:/Blog/public/dynamic-array/index.html","e3c247197d679095d28c7cde7f7f6fe6"],["D:/Blog/public/dynamic-programming/index.html","c3c93887586aa89b9312d74e68ce1a95"],["D:/Blog/public/encoding-algorithm/index.html","6f21258c37d0dd03d5f9369069f89e05"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","445c5068729cd9b589290474078ed1dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","46eedfd9bfc6898e84568595c00370e9"],["D:/Blog/public/factory-design-pattern/index.html","3f5aab3057318a7d30b0a7f644311e64"],["D:/Blog/public/file-input-and-output/index.html","935392fbaa2b96eb532028b5d3f054d2"],["D:/Blog/public/flyweight-model/index.html","b5341143470d3d8edf54a6b78ac67f05"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","986f8ae057adada7730eeecf4d2f3691"],["D:/Blog/public/gateway-service-current-limit/index.html","d671e6a92a9d67633905d534215cf37b"],["D:/Blog/public/gc/index.html","b0b26989617294fa97128bfd00f58f1c"],["D:/Blog/public/generalized-integral/index.html","cfe40e4eef67ffcbe98755881d85eb67"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","bd8bfefde88d3af62e389c31405168be"],["D:/Blog/public/hash-algorithm/index.html","092a2184f416a651e43814d217f01b89"],["D:/Blog/public/heap-sort/index.html","6dc97d6435411a5761818cd6e742d7a2"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","0bcafee2231b29b7b04080a588c96922"],["D:/Blog/public/http/index.html","ade4da6bfa110adebb2b1ac088060f9b"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","425b9f39624732364085a0f3ef41b5dc"],["D:/Blog/public/index.html","e2055e596529c5224b9347cc04a2d73f"],["D:/Blog/public/infinitesimal-and-infinite/index.html","4813da70b0c898d959aa077c286ceeb7"],["D:/Blog/public/interface-isolation-principle/index.html","c2577d28b31ed53a86e880bd66537430"],["D:/Blog/public/interface-test/index.html","ccc0658fbe9b0bad981c5361e93e0fd0"],["D:/Blog/public/intermediary-model/index.html","e5afd09015509cdb6d8ea3e0d66cee6a"],["D:/Blog/public/interpolation-search-algorithm/index.html","57818d4a6a8a91a4ccd70a57f5a16804"],["D:/Blog/public/interpreter-mode/index.html","3c1fc3bc82c62ca2ef787f2e6f2e0257"],["D:/Blog/public/introduction-to-computer-network/index.html","0c187df2b5a9a6780ef1aebc8fe2abb4"],["D:/Blog/public/introduction-to-operating-system/index.html","0dbe5e424692f12528618b9b61bf7b65"],["D:/Blog/public/inversion-of-control/index.html","5c17d93afee8d13ccbebe0eb837991d8"],["D:/Blog/public/io-Interview/index.html","f45c2d5e016decc2b632e26ae92cee45"],["D:/Blog/public/iterator-mode/index.html","d7354b87d47936fca74b9e214b7feef8"],["D:/Blog/public/j2ee/index.html","07425fa103b415b23160ca6cc6fa4044"],["D:/Blog/public/j2se/index.html","6f850cb7d964a82846200c766c867e2e"],["D:/Blog/public/jdbc/index.html","05fa9c89713cce177a2b5ad8c8975b36"],["D:/Blog/public/jdk/index.html","41eaa83c4ecc655cb4c92e3dd04fa52a"],["D:/Blog/public/jmm-memory-model/index.html","5ebba4e38c35dcac52fd70144a327b38"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","de2f673dd7749cfa55f1d57bfb1c42a3"],["D:/Blog/public/jvm/index.html","88277b324d3e0cda58b91943b43cd0a9"],["D:/Blog/public/law-of-robida/index.html","dab8db891d66abb5606d27c0e5327aa1"],["D:/Blog/public/limit/index.html","2de6347f3538e84e751b1e98fa2098fb"],["D:/Blog/public/linear-search-algorithm/index.html","b81665f3bf579fbab5bbfc04c428c354"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","83555a2316d12907c226a45113e5b381"],["D:/Blog/public/linux/index.html","6b28c25e87175f8eaa3b473e4ddec213"],["D:/Blog/public/liskov-substitution-principle/index.html","1f3a875db80b265e49813f509557daec"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","292ddd2b13ca1dd242a63f6c3186ce17"],["D:/Blog/public/maintenance-1/index.html","82869749f0d24d0d79fc0dda390bbe49"],["D:/Blog/public/maintenance-2/index.html","5d40d37457c3a86676b050d8ca78099e"],["D:/Blog/public/maintenance-3/index.html","4066c23b71b62eec95f052a7921ee27f"],["D:/Blog/public/memo-mode/index.html","49e7ad883e66f6868104d3387dc5f733"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","87fc46a361dd01a11623dea3e12cf062"],["D:/Blog/public/multi-function/index.html","84f288e7f7ffd996eedb7a13bc1a5151"],["D:/Blog/public/multithreading/index.html","ea407f56a81e7fb28a6e82833b9e0dce"],["D:/Blog/public/mvc/index.html","2f437f4b9dd1b2f61e6033a02958e60d"],["D:/Blog/public/mybatis/index.html","2fcee54d3bdda93f65621fca93e4e0e0"],["D:/Blog/public/mysql/index.html","79ed7bea7f5e76e8464a93aec4e192cd"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","4be4f6d57ef2099eb169403215cd1504"],["D:/Blog/public/objectoriented/index.html","9c9ebf64f601f91a9d83eee89bdbe150"],["D:/Blog/public/observer-mode/index.html","cd843a43b3616f13decd3dbed9ea32bb"],["D:/Blog/public/off-heap/index.html","3c0871bfc8497e3a23cf17441f3c977f"],["D:/Blog/public/operating-system/index.html","6063b5bf949005c837f3b20c5beae409"],["D:/Blog/public/page/10/index.html","03c859db891301b7c29e3e43e9701f2e"],["D:/Blog/public/page/11/index.html","0f2b97c92063989cce8d9d10cc08824d"],["D:/Blog/public/page/12/index.html","20e9546cb5ff2bf813eea185f4efcc4e"],["D:/Blog/public/page/13/index.html","04f8d1e72a80771c45b709d9540601bc"],["D:/Blog/public/page/14/index.html","27d46125b260a014a472ff35072826eb"],["D:/Blog/public/page/15/index.html","a288896106ab71e598541a2f2dd10466"],["D:/Blog/public/page/16/index.html","f37e7da04ef6d23353cd1636d06340d5"],["D:/Blog/public/page/17/index.html","0849d70937355399d063c75cd0517021"],["D:/Blog/public/page/18/index.html","26e8ecd25d10b893ae93b8f651f8170c"],["D:/Blog/public/page/2/index.html","7db64ae2728886b7332ce9236c2229ce"],["D:/Blog/public/page/3/index.html","e2e688c3b4bc78debd0b82402e9a3b0b"],["D:/Blog/public/page/4/index.html","311a2a024889da225bbecf6b34475a57"],["D:/Blog/public/page/5/index.html","4b1f98cc3101fe708c488602daaafe27"],["D:/Blog/public/page/6/index.html","6730da6df3747f0a975f86ff7718c711"],["D:/Blog/public/page/7/index.html","c63f4383fa7f0951440d58e217191c5a"],["D:/Blog/public/page/8/index.html","c9394c6ea2bcee8a73a486b8fe667742"],["D:/Blog/public/page/9/index.html","87ef638344cc0fb8440279e5b81f1018"],["D:/Blog/public/palindrome/index.html","33b786ee5521e4ca8e721857a041d249"],["D:/Blog/public/partial-derivative/index.html","c6e25542ba56d3c34cf59b45916f5b46"],["D:/Blog/public/pass-by-value/index.html","45a0b3245dc9fbe6b90d74bb97c23ead"],["D:/Blog/public/pictrue-bed/index.html","80216cb0654f74ff635c1630cbfd22b0"],["D:/Blog/public/principle-of-opening-and-closing/index.html","a450a59eb148ffecb694503e7a96558a"],["D:/Blog/public/principles-of-computer-organization/index.html","b6c1e2a09abda902b0f263248f13f3ad"],["D:/Blog/public/program-test/index.html","3b0e932392fa67427e2a1f597451af2b"],["D:/Blog/public/prototype/index.html","7354c417140cb5ebb4a3ba3b0cb1efc0"],["D:/Blog/public/queue/index.html","2ee5fed17d256c6a3dbade82d4e9c78b"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","b91aa1a6da7bf4e86959f7310abb2b3b"],["D:/Blog/public/redis/index.html","af26bc396e1ce15c0d0390f3a3289234"],["D:/Blog/public/reflection/index.html","7f94b8a9797b0b8cf2cc05a66b94036e"],["D:/Blog/public/resume/index.html","314325e4dcc719dd95aecb83d5a76a3f"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","48aa9895ca35d84b1e4f854cc51837d6"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","9f0a15011e0372b799eb49e02db79bbd"],["D:/Blog/public/select-structure-programming/index.html","f3e446f8504bc0d699c7a0cb6beb34af"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","8263d4b6ac463f95b3c741d8ed8faae8"],["D:/Blog/public/sequential-programming/index.html","57c15c14e1351653af376cfa13a0e1dc"],["D:/Blog/public/series/index.html","4a105c6318f9725d3fc1fd782c71eaae"],["D:/Blog/public/single-point-login/index.html","d720b771c6b85adab9f8b189c834df6c"],["D:/Blog/public/single-responsibility-principle/index.html","44ed164f9c681930c0255aab4033434b"],["D:/Blog/public/singleton-mode/index.html","4ba07cd428acde46cfacb7c07127a51f"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","61ecbf0671dd220e1a909310dd5a637a"],["D:/Blog/public/sparsearray/index.html","58c6e023964c6fe52f8ee724076570d2"],["D:/Blog/public/spring-architecture/index.html","c41cd38991fcc3be95d86d0696b60070"],["D:/Blog/public/spring-relate/index.html","0bbf5b624099668ac3c2b44f19e890d9"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d1a724ae0fc900e3f018a078332cadc7"],["D:/Blog/public/spring/index.html","0781d8499b50e44438263e0ce6854a73"],["D:/Blog/public/springcloud-alibaba/index.html","bec7f7f234678b2d4b8fa4a2b138add4"],["D:/Blog/public/springcloud-bus-message/index.html","793e4dbd9c5011c75abe7fd1ecc2cb97"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","4d6d7d9667c96fdafbdcd52e10023dc2"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","1bc71672a3e8a66583b582919010b670"],["D:/Blog/public/springcloud-stream-message-driver/index.html","16829e2814a5860dfa5b6539b8d865a5"],["D:/Blog/public/springcloud/index.html","e1dd678b0634c6290ec053a52ebef454"],["D:/Blog/public/springmvc-environment-construction/index.html","4575cac2bedfb69ba3de9a13cefcb0a4"],["D:/Blog/public/springmvc-work-stream/index.html","5e7b73b97e2dd8328874d4a0148823e0"],["D:/Blog/public/sql-injection-attacks/index.html","645da1fe95afeada891f667193532bed"],["D:/Blog/public/stack/index.html","78e3b3b4aa9fbd0390e0fadfdf61ad55"],["D:/Blog/public/state-mode/index.html","368c6f29607e1535fce152e7cf80cf74"],["D:/Blog/public/strategy-mode/index.html","b9e545784209d4e4f8b8e97b20b23b3d"],["D:/Blog/public/synthetic-reuse-principle/index.html","65cbc7932352dc91d62426c5385a33b7"],["D:/Blog/public/tags/C/index.html","3f277c35e5f0ac4d9dada38b9b98dea2"],["D:/Blog/public/tags/C/page/2/index.html","980b1b8d1f8923ea017e026ed87b2b7c"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","7e88fd4dca23c80401bc462375e29bb4"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/safety/index.html","838616f9b22c4621d79a4548a0a9a7b1"],["D:/Blog/public/tags/security/index.html","7eefe28be043c5945e166ccff480270f"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","778e4b1e1fd14eb9c715f7dfaf8b60cc"],["D:/Blog/public/template-method/index.html","a9474d8316752cb753c776cb59f5f5a5"],["D:/Blog/public/test-case/index.html","cefc2c47927957dd3e743ee25712c85a"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","2727a716a814d13ec0c7500a78602e12"],["D:/Blog/public/thread/index.html","61aa4c28de4da9b5bdc9bfe2076416db"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","06455c3a0fd20f50ff6094a1aa197bf5"],["D:/Blog/public/ubuntu-set-ip/index.html","3bd16a2883e93ddb52fd2e64b373d55c"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","face4dd30f3533fe41a28e95a799b035"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","0b5ecac97e203908f655842f61cbe101"],["D:/Blog/public/users-create-data-types-themselves/index.html","4878b6aad1dcf2b3b976850755c1669f"],["D:/Blog/public/visitor-mode/index.html","cd8c6eb5ec502a15da1a08c32998b285"],["D:/Blog/public/xml/index.html","37f5ee4409914c8c3ce8f55cada2c3c1"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","f84887415714278c7a0eb8cc78177adb"]];
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







