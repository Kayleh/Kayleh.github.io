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

var precacheConfig = [["D:/Blog/public/404.html","111c481c12726ccbc11b4ab6b017bd87"],["D:/Blog/public/7-sorting-algorithms/index.html","bd682dda86de5918ff833bec89b50884"],["D:/Blog/public/C-algorithm/index.html","3bde4db980db300851cb7ee430e855df"],["D:/Blog/public/C-programming/index.html","328f75788bd799ca9beff8297d05cfc9"],["D:/Blog/public/Good-use-of-pointers/index.html","ac0147092517f5cc8a444508211334bc"],["D:/Blog/public/about/index.html","fe6a037ffcd148c253a10edd6fab217a"],["D:/Blog/public/adapter-mode/index.html","ce4e4cea59688db59cbc1a78fd0520d8"],["D:/Blog/public/agency-model/index.html","81603458d28bb556f511e6af332de84e"],["D:/Blog/public/appearance-mode/index.html","90d7d0cfc4d194c7c371b21eb878b747"],["D:/Blog/public/archives/2019/01/index.html","7e3f1d1bff0acf0db425116275799622"],["D:/Blog/public/archives/2019/07/index.html","c7aa663a47e2903286b4696ae164d6c3"],["D:/Blog/public/archives/2019/12/index.html","29a288a993cc725217d610330129d0ea"],["D:/Blog/public/archives/2019/index.html","b9066973e8baba7f4f6c06a91a2f9168"],["D:/Blog/public/archives/2020/04/index.html","dac6aff7c8465df6c108f02374806609"],["D:/Blog/public/archives/2020/05/index.html","cf3640297bf103d8d51fc443fd1b666d"],["D:/Blog/public/archives/2020/05/page/2/index.html","d8620b5bbb5771f03acad6be41f9d7cf"],["D:/Blog/public/archives/2020/06/index.html","8528afac8db1808e7b0128db5a923c1d"],["D:/Blog/public/archives/2020/06/page/2/index.html","533dafbdd0373ab00bd32a2f210ac7dd"],["D:/Blog/public/archives/2020/06/page/3/index.html","ed1b1b64f6f0b0b1fe6e08ed7d2adb4e"],["D:/Blog/public/archives/2020/06/page/4/index.html","da6cc3105cba87798168318990809a8f"],["D:/Blog/public/archives/2020/07/index.html","93b62d738f32d104b442d89406a81022"],["D:/Blog/public/archives/2020/07/page/2/index.html","c0edc59b9e1ff08bfd1cbefe9b977f62"],["D:/Blog/public/archives/2020/07/page/3/index.html","7195e7bf3e7eed77294c1a3090cc20f5"],["D:/Blog/public/archives/2020/08/index.html","6390beef5d2f2fd3c769dbd3af5ccec7"],["D:/Blog/public/archives/2020/08/page/2/index.html","b7727d98753172efc1fecf516687848a"],["D:/Blog/public/archives/2020/08/page/3/index.html","577747a2c3327bda9fbac8cfac7dedc0"],["D:/Blog/public/archives/2020/09/index.html","5a65384ea6138e31606303d4135b6cfe"],["D:/Blog/public/archives/2020/09/page/2/index.html","f3bdd5c3f40071ec54485b2e65312d34"],["D:/Blog/public/archives/2020/10/index.html","5d5b5742514b23be45c8a596779bb59f"],["D:/Blog/public/archives/2020/10/page/2/index.html","8fc046969b3b0115b90be71f0cee9ace"],["D:/Blog/public/archives/2020/index.html","8d077d76a48faaef20cd12b52cd43b05"],["D:/Blog/public/archives/2020/page/10/index.html","c76f9e9d5c878d16c07d5f5e0c960179"],["D:/Blog/public/archives/2020/page/11/index.html","1cea6fdb98d3bd12e8f382eae2a51ea8"],["D:/Blog/public/archives/2020/page/12/index.html","408fddd0299767fe988b79b715780791"],["D:/Blog/public/archives/2020/page/13/index.html","2f52fb9372354e03377417b92a0685af"],["D:/Blog/public/archives/2020/page/14/index.html","f8528fce4852201d38a2de1c10ef6fc5"],["D:/Blog/public/archives/2020/page/2/index.html","b8fef63cfb646b49e8833b97047530eb"],["D:/Blog/public/archives/2020/page/3/index.html","48834d493695de5076f31c7f2ee8aa4e"],["D:/Blog/public/archives/2020/page/4/index.html","75df032720847c850227cd7801a8a0df"],["D:/Blog/public/archives/2020/page/5/index.html","a7c337ca4372724d7c4fb7650746526a"],["D:/Blog/public/archives/2020/page/6/index.html","6339487184b8a894ed4fd0b60a0a062b"],["D:/Blog/public/archives/2020/page/7/index.html","bb99d1cf4fb0df10bc818ebaae86b95a"],["D:/Blog/public/archives/2020/page/8/index.html","dad5d45da3e9f4d5b8482a5e202c1254"],["D:/Blog/public/archives/2020/page/9/index.html","057e12d3dcfc38afe12fc7738ea6a85b"],["D:/Blog/public/archives/index.html","8f164487151fae6e25d992d7d6531f45"],["D:/Blog/public/archives/page/10/index.html","51031b0ea23fbd92084ea8e6d11b333f"],["D:/Blog/public/archives/page/11/index.html","44c4f9cc4bc9ee3422f3288ec462c96a"],["D:/Blog/public/archives/page/12/index.html","ad49867614dcc81a605f1bf9300126a8"],["D:/Blog/public/archives/page/13/index.html","0b56ba4503dcf48689bde738ef4202f7"],["D:/Blog/public/archives/page/14/index.html","916c3a644adb12b8540af60155cb7548"],["D:/Blog/public/archives/page/2/index.html","a5dbd51dcab921620e7085625a82bcbc"],["D:/Blog/public/archives/page/3/index.html","8eaed0e91366fab8aac324506630e4fc"],["D:/Blog/public/archives/page/4/index.html","42bd49f6d17a6d4a7d0a60fd894855a0"],["D:/Blog/public/archives/page/5/index.html","a0a45488fc00fd343fbcd0fb567dfdef"],["D:/Blog/public/archives/page/6/index.html","05d1c756695cf18f5626b01ce28dd892"],["D:/Blog/public/archives/page/7/index.html","57e7fc38e42555efeb458b83c68d3d4b"],["D:/Blog/public/archives/page/8/index.html","4cf0a8a631c8949925c9d437648d5a0a"],["D:/Blog/public/archives/page/9/index.html","c0cbb7bb38fad32efbc65ba68b849b5a"],["D:/Blog/public/array/index.html","b9640137504957f7b51aef085b51bf11"],["D:/Blog/public/binary-search-algorithm/index.html","2ec26a77047dd38ec3c5d444e503cc70"],["D:/Blog/public/binary-sort-tree/index.html","98fc08bda03c2d7f0aa0093eb0f67138"],["D:/Blog/public/bridge-mode/index.html","7269f1cd5b093f820588f4f2b51ef620"],["D:/Blog/public/builder/index.html","350462eada06c4628489267550fd29ae"],["D:/Blog/public/c-pointer/index.html","9f46937aa662a1695ef66d2467e3993b"],["D:/Blog/public/categories/C/index.html","2e7035fa1dae827b12c1115c8b680411"],["D:/Blog/public/categories/SpringMVC/index.html","2864354abc8e92bea3236aa6745eb38f"],["D:/Blog/public/categories/index.html","00035c829243ad76d56b95be4d798903"],["D:/Blog/public/categories/linux/index.html","574bfeb3bf807319712232b37ae43581"],["D:/Blog/public/categories/分布式/index.html","0e61274e371aa3bd17d3a5f2d8810d54"],["D:/Blog/public/categories/分布式/page/2/index.html","e8837129a33ed4ffc9bcbdfb05fa8a07"],["D:/Blog/public/categories/前端/index.html","5bbbdcf215f7334e3222c91a2c23437f"],["D:/Blog/public/categories/设计模式/index.html","10bbbd24d9e0e9abb9c2416a6ae1bd6c"],["D:/Blog/public/categories/设计模式/page/2/index.html","692c9cd6ec902f050bbd3312637445e7"],["D:/Blog/public/categories/高数/index.html","84b9564ca9012746b9259b12db084572"],["D:/Blog/public/chain-of-responsibility-model/index.html","5078dbbc3405f993bd1a324d0b272811"],["D:/Blog/public/chinese-and-english-switching/index.html","9da27170095e2669e2c4c5f528f31f0d"],["D:/Blog/public/combination-mode/index.html","47183e0cac3b05b7afc93c1ba7ba8491"],["D:/Blog/public/command-mode/index.html","182a76ce2f562c30bf1da3efcacd9efa"],["D:/Blog/public/common-commands-of-unix/index.html","8fe1ef69b91d7f740aae94669f108965"],["D:/Blog/public/computer-network/index.html","a8b03deefb24a22c0329db3668fbc501"],["D:/Blog/public/concurrency-principle/index.html","33430f17aa827f13a3e9c1cdf4e3653a"],["D:/Blog/public/continuous/index.html","948bd5c3f21b6df369c13e5938add964"],["D:/Blog/public/contract/index.html","fe270d36a646d30d532ec2b132673a00"],["D:/Blog/public/css/index.css","0d5eb372aaaddfc8147f95982c265cf8"],["D:/Blog/public/css/var.css","a7faff893beecc0bd70d996462741b6f"],["D:/Blog/public/cycle-structure-programming/index.html","8a9bac5e50450779075b590d3f88de51"],["D:/Blog/public/data-structures-and-algorithms/index.html","7daf97e01a4c0436230bb53d4501b9aa"],["D:/Blog/public/deb/index.html","aa22d3083e6c40da39e4742a536e59ae"],["D:/Blog/public/decorator-mode/index.html","5e780dac2b838e4a22f35c8179509e94"],["D:/Blog/public/definite-integral/index.html","e9565b7def22f0a977d8888dbd8bc69b"],["D:/Blog/public/dependence-reversal-principle/index.html","a8cb03b1694b24067ba2727e0017bc02"],["D:/Blog/public/derivative/index.html","9ce0fb345c579bc7eb1cc00218fa89f7"],["D:/Blog/public/design-patterns/index.html","32c6aa6fb1a8fea0eafb333df2e1999a"],["D:/Blog/public/differential-equation/index.html","265df3ccdd22175c4c3c03a62a55b2d0"],["D:/Blog/public/differential/index.html","0c1c8854d09d048ac605f54b546f8a49"],["D:/Blog/public/dimits-law/index.html","2cd23eb69d1488483d4eceedac0881fd"],["D:/Blog/public/docker-virtualized-container/index.html","340e557a361816c20cb5eb1ddc2a11ff"],["D:/Blog/public/double-integral/index.html","b1774cba3383a106dde2baa2eaa70661"],["D:/Blog/public/dynamic-array/index.html","a1775325d42d3de9ada37f4a8bd43cdc"],["D:/Blog/public/encoding-algorithm/index.html","9919937efacb3d47f912a242fd6ce81e"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","394ddf20bc165ce76dee3841ad967501"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","904c3e73588bc7ab598a58bf783972cb"],["D:/Blog/public/factory-design-pattern/index.html","6f1600fccf0a9332d69f0f66cd292512"],["D:/Blog/public/flyweight-model/index.html","5b0a4e9428f3e67fd27500cd3ea5b0b1"],["D:/Blog/public/function-graphing/index.html","fc4b35a5d0fb8299f628624c3ae1825d"],["D:/Blog/public/gateway-service-current-limit/index.html","1498b7467d268b97a7f525e939d6ec2b"],["D:/Blog/public/gc/index.html","23483a3ea6b1da12c183881fa6098f46"],["D:/Blog/public/generalized-integral/index.html","8217dc89187d6d1135529e2a4cb0b559"],["D:/Blog/public/google8102e2f35ce9e391.html","75375e99fa94c4a00484d8f30ddd9385"],["D:/Blog/public/gulp-compresses-static-resources/index.html","408211548563b346a87664569715376b"],["D:/Blog/public/hash-algorithm/index.html","4dd83bb46923de0307472d678e1a6fe1"],["D:/Blog/public/heap-sort/index.html","b764e04ea360dba8d54fdbf05b96a11b"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","f2b528533986be70673e72873dd7e51d"],["D:/Blog/public/http/index.html","7c9fcf8b3b101b8dc6e86717571b5d0b"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","4d6ffe15ea5c23c1feade57d33116eab"],["D:/Blog/public/index.html","4538901a95a8ebc6c215f4cc664005ba"],["D:/Blog/public/infinitesimal-and-infinite/index.html","adb35ddcf20d7d45ff75bf8e3e4ccb1d"],["D:/Blog/public/interface-isolation-principle/index.html","131dd3a102a27da8170079d8da1d1676"],["D:/Blog/public/intermediary-model/index.html","05dcdc7f2b2aad4d41d74fafa041b672"],["D:/Blog/public/interpolation-search-algorithm/index.html","934cf4b66926625394b3996d1806858f"],["D:/Blog/public/interpreter-mode/index.html","0c7bb01dd0edee561fe11733980c1ab4"],["D:/Blog/public/introduction-to-computer-network/index.html","b429e713fd957ae3663dd229d58a248d"],["D:/Blog/public/introduction-to-operating-system/index.html","2a885653c4accc59050ce334b57d7643"],["D:/Blog/public/inversion-of-control/index.html","472f05ad5c33a496df810c0f508d9995"],["D:/Blog/public/io/index.html","6518c952f6f3bd4e32a40b30be78a2a6"],["D:/Blog/public/iterator-mode/index.html","b4d45c89503fea5c6ff155947f1ada78"],["D:/Blog/public/j2ee/index.html","d96a3f50221f93f94e0e2892998409db"],["D:/Blog/public/j2se/index.html","59e7ae57baa07f4a9b52c63abfccdf9c"],["D:/Blog/public/jdbc/index.html","6b4b88f6c2c90bc9bf8dcdb8b2faf6d1"],["D:/Blog/public/jdk/index.html","1123564f6e188995c6f4587ee2b5ce0b"],["D:/Blog/public/jmm-memory-model/index.html","102557bedfbc9a7c5e10c3e2efbce828"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","bd00f66217ed50fa9e3d8f5cbe0feb8b"],["D:/Blog/public/law-of-robida/index.html","c67fd61b6f88e3f905f47fe0af266d60"],["D:/Blog/public/limit/index.html","1011a07611f7a4426c5314cffb2a142b"],["D:/Blog/public/linear-search-algorithm/index.html","b249bb3ee3a12b41c047bdef09c26b6b"],["D:/Blog/public/link/index.html","b73898606cbe0d89235d07981f0b4202"],["D:/Blog/public/linked-list/index.html","babcae3b01474e843fa0cfa1d93dd2b8"],["D:/Blog/public/linux/index.html","d3eacd2215ec87340170972207a9c594"],["D:/Blog/public/liskov-substitution-principle/index.html","36e7e23fc7ab82adf6aaba8dfe3fcc65"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","46159fde1a052f91fa95d2caae930521"],["D:/Blog/public/maintenance-1/index.html","7da17725e85be6a6ff0a51a38c92311c"],["D:/Blog/public/maintenance-2/index.html","c45a4473d2186e914cb42e7cf700de22"],["D:/Blog/public/maintenance-3/index.html","278f4ce3daecf5e437135754e2485bb2"],["D:/Blog/public/memo-mode/index.html","2605b591100a430906b1320539096dcb"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","8d33c00b4e5faba729ebad79f1b16660"],["D:/Blog/public/multi-function/index.html","8b3074ac88f296dc2a9b2c0d001c8068"],["D:/Blog/public/multithreading/index.html","716df24893da5164e21cf34c72e0bfc7"],["D:/Blog/public/mvc/index.html","e10b33eef16611430b8cbf6a98c1c577"],["D:/Blog/public/mybatis/index.html","278cf257876ac7869148c479a11bf916"],["D:/Blog/public/mysql/index.html","bb3232352acfcfb6c1b7e2be9a491f26"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9e6167917a21686923791cc188400ed8"],["D:/Blog/public/objectoriented/index.html","10e4cc6e072ba8c1cc3a252e304be5a3"],["D:/Blog/public/observer-mode/index.html","c84921299129453e805fd9b5e75e66b1"],["D:/Blog/public/operating-system/index.html","b1510d5269affd27f891de1c378a5bd7"],["D:/Blog/public/page/10/index.html","24d1f4c29552b7ff2571c6d625bf1c63"],["D:/Blog/public/page/11/index.html","05cf63e56c995be2457fd4272344c55e"],["D:/Blog/public/page/12/index.html","1629e1bf2463b25affa8f8b9f1a795be"],["D:/Blog/public/page/13/index.html","48ef1124803262423c415be8fc427b04"],["D:/Blog/public/page/14/index.html","eae29cacbb016306d85fa9008badc24d"],["D:/Blog/public/page/2/index.html","25b1342e1e06fe3c58a2ccb79a562464"],["D:/Blog/public/page/3/index.html","9073ef5940fa5a32a93f52d1a30d7d10"],["D:/Blog/public/page/4/index.html","b9860113dc5d583269a972bf0d1d4ad4"],["D:/Blog/public/page/5/index.html","642debeb56cc0cb3e50a59502b6dfcb2"],["D:/Blog/public/page/6/index.html","a0b8ff1b48adc40a7624796256d50e92"],["D:/Blog/public/page/7/index.html","1709bd8d750f9d2b12e8b80986834e25"],["D:/Blog/public/page/8/index.html","055f55d66ea94c7bf07193669fd59f8b"],["D:/Blog/public/page/9/index.html","f837a5210012c41da308d0f02b1d5910"],["D:/Blog/public/palindrome/index.html","66e8c69b3bd21598f23be929b4f23935"],["D:/Blog/public/partial-derivative/index.html","2f4184b0261b3274e385954a67a5569a"],["D:/Blog/public/pass-by-value/index.html","d584da3b497bc2ed86ccfebd4dc3d24c"],["D:/Blog/public/pictrue-bed/index.html","d6ee9aefb894474e71a955a625106279"],["D:/Blog/public/principle-of-opening-and-closing/index.html","85555c1fa4f818c7ead08ead838fc144"],["D:/Blog/public/principles-of-computer-organization/index.html","32de3337639b96fd5292b77b853c8383"],["D:/Blog/public/prototype/index.html","79d41274a24f403471b22a1db40ffcfe"],["D:/Blog/public/queue/index.html","f0e0e9cd08156742b5600739ff8ca322"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","0b9fead0b032ac0e3931f11ec4a27368"],["D:/Blog/public/redis/index.html","0138d49d2e66251332f35b0e4c205d25"],["D:/Blog/public/reflection/index.html","33776b10628a7790d49d0523b992ef82"],["D:/Blog/public/resume/index.html","083f35ef957fd41832af218dcd8d3f54"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","d5fd8f87b00d180bfbea103b56bd8096"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","3da5a508cbf1c29c360afcbbd464044c"],["D:/Blog/public/select-structure-programming/index.html","b4fc0de9e748d7b33266986c5796b69d"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","a5983816d0480400212c12b914ccbd1b"],["D:/Blog/public/sequential-programming/index.html","5afc409b7bf8cae11841243b2f865b6a"],["D:/Blog/public/series/index.html","8dbc34e9f2892198fd3ff293076e7366"],["D:/Blog/public/single-responsibility-principle/index.html","e5ef46abcea5bcddc8458833fa6351ed"],["D:/Blog/public/singleton-mode/index.html","68ce71d6178b4edb74ad419ce9ad2e60"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","fdb3d96f96cb9e5d32fd13a457623f93"],["D:/Blog/public/sparsearray-sparse-array/index.html","ba54cc856b15325a99033c88462210bb"],["D:/Blog/public/spring-architecture/index.html","00e067d56cb654c7885530abbd135349"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","7e36fcf564072f7f6fd052118daa35c7"],["D:/Blog/public/spring/index.html","f5e073eb8596fa34f8c25039043581e3"],["D:/Blog/public/springcloud-alibaba/index.html","847e1ab2f415f54164379d441eb4e8a7"],["D:/Blog/public/springcloud-bus-message/index.html","463f9966f1ee6a6c06dd920ec26d3b63"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","ad414a977bc7550aed429d06b0eeb531"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","69e5aca2e5f3055c9c644701c7e51a8b"],["D:/Blog/public/springcloud-stream-message-driver/index.html","1ab907a316ec14af7ea6eeba877a239f"],["D:/Blog/public/springcloud/index.html","b62ad3c01af7be51a907c8d65de5e9a1"],["D:/Blog/public/springmvc-environment-construction/index.html","43534141118594f7e1660906573a3a00"],["D:/Blog/public/sql-injection-attacks/index.html","fccfbd601d002a090d7cba6ac70db4b1"],["D:/Blog/public/stack/index.html","5bad3e83bade8ca5c03cfe0c788d1f27"],["D:/Blog/public/state-mode/index.html","f02bfcb5f7c8371add410c71913d56ca"],["D:/Blog/public/strategy-mode/index.html","3a28134c3543f4af4babc38e30e7fb5a"],["D:/Blog/public/synthetic-reuse-principle/index.html","63557d553c4a39d1c55d4eb158bda8aa"],["D:/Blog/public/tags/C/index.html","d213fa6544117b0b37fadacd17d44c2f"],["D:/Blog/public/tags/Concurrency/index.html","1aa7410a88c7e823fe0b81a97f033eac"],["D:/Blog/public/tags/DesignPatterns/index.html","249cd9c955a5f0d5fa8292cccfbec2dd"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","038a3c8d622cb8cf9918d60dff671072"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","f616adc253dab95595cf2c95612ab2f7"],["D:/Blog/public/tags/DistributedMicroservices/index.html","18dd6a36cf89417d00a479cdabbfeb68"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","5509225f0c5190802f5b67250e0a7407"],["D:/Blog/public/tags/Interview/index.html","f70ca43482c236514835a16d827ec9bd"],["D:/Blog/public/tags/Interview/page/2/index.html","d379f17fbc65c7981f80e68539b75f7f"],["D:/Blog/public/tags/Operating-Systems/index.html","3054c3b5d9249b36225d6023908bd951"],["D:/Blog/public/tags/about/index.html","a13a457e3e08fc36b632098452f54218"],["D:/Blog/public/tags/ad/index.html","78f4aa2a00502e5f62be39e8cab6fbb7"],["D:/Blog/public/tags/dataAlgorithm/index.html","90412b455e1bf773a25a9cc10a9b07c6"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","535d66922a90f6e1fbc72c5dbb650579"],["D:/Blog/public/tags/docker/index.html","24f90b16592937b56a187b9c4be169eb"],["D:/Blog/public/tags/frame/index.html","f0e3896a16537718d78149124ebb0a93"],["D:/Blog/public/tags/front/index.html","ababb2d68d0f02ea10d9b6d2f9a1cfe4"],["D:/Blog/public/tags/index.html","34f58e050d66c86946e042e03e73c2e6"],["D:/Blog/public/tags/jvm/index.html","ff1c104538e7b6702c4a0c5a91f62b20"],["D:/Blog/public/tags/linux/index.html","7acd5e0477c2c4d86b7fc85377f5e3ab"],["D:/Blog/public/tags/maintain/index.html","0e05f6b2109b6748b879bd51e4f49a88"],["D:/Blog/public/tags/math/index.html","cbe2d03bea933103383063a12c3a96db"],["D:/Blog/public/tags/math/page/2/index.html","231cd23ac3547e4129d1714a15f6979f"],["D:/Blog/public/tags/network/index.html","53f553e516cb1526655690c8a35cabd2"],["D:/Blog/public/tags/resume/index.html","35a1b4712422700d32ab184172daf2c9"],["D:/Blog/public/tags/safe/index.html","2ddac1489d7ec3e8d7433db8930c0bb6"],["D:/Blog/public/tags/sql/index.html","509421fa94f452383ae0e88f28f6becf"],["D:/Blog/public/tcpip/index.html","69cbe87c40d53650b1b4193d762c3be2"],["D:/Blog/public/template-method/index.html","53440dd23509f869397ed4aa89978671"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","a5f86c2adbed17a537231a739c95d5e7"],["D:/Blog/public/thread/index.html","886a6d68b9a4211f6ab0296bd7519dae"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","a2307775043f8911494b19689bc21923"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","7502102eb11c8d0b26196b5094fd496f"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","82edd1721d7454a808313e0b3127c265"],["D:/Blog/public/visitor-mode/index.html","afad2173a78130b17dc2ed891b9e89b9"],["D:/Blog/public/xml/index.html","74f5968165b3e515806837f7160e2f3f"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","15ba47aa59f440dcef49d5a5ed847393"]];
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







