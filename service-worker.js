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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","9f5e0f3319c7736db5c92c4ffeb202fc"],["D:/Blog/public/AIO-blocking-model/index.html","65eb8645e90b9e1b9bc5915eed023420"],["D:/Blog/public/BIO-blocking-model/index.html","2c476d8e648ccd25577a5b3e25d8182d"],["D:/Blog/public/C-algorithm/index.html","ebf32ee8d300c013cb7a32a59ff45805"],["D:/Blog/public/C-programming/index.html","4e1f6ffd76c82a90ad57b25c4b196770"],["D:/Blog/public/Good-use-of-pointers/index.html","11c9fb30fc021835d372ed9e6aa317a9"],["D:/Blog/public/IO-model/index.html","6cb96fcebda6e484cf296190b8d4889f"],["D:/Blog/public/IO/index.html","3a6ef95605416c89a1d576134bc5d24d"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","7c50350330f7c7629bc70a5181fe1a9d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","ebdf7cd8774122d6e63a4a13666e0b20"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","6d07a152bfe87bf645e8f6c0eacb6bd2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","f94a2e682915e6e5b69e0a779a129ade"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","8398dd7be05a4a26883b172abf2bacf9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","43c6eb653cb6ae6d11a946be8aadbacf"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1a9dff2ba893565a3f34b914f235d976"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","5f0463d6f88ed89cd8b17f00f896dc05"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","5f321bb874a65bf7c8f4681f8881080e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","029f0f3eeeb20876bd8d1144689a7e1c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","76b66c212791cde5bc973ca3e6306f9b"],["D:/Blog/public/Java-network-programming/index.html","939bf2150bfd56dc79d3981d2efa7966"],["D:/Blog/public/NIO-blocking-model/index.html","bd5a7a3554ac4abb0c49eb9e26407b1a"],["D:/Blog/public/Native-method/index.html","d48fc024e46038f4e8b99760b4c3203c"],["D:/Blog/public/Sandbox-security-mechanism/index.html","bf1d515d46a0da2c344bca6ac8b2d11e"],["D:/Blog/public/SpringBoot-startup-process/index.html","6a1d6365687ab357b07a8fe22b0f34e4"],["D:/Blog/public/about/index.html","cfaf7ffaa0f6285f2fffdf7ba2e4767c"],["D:/Blog/public/adapter-mode/index.html","1464515870a0a458ac9dca1a4056d805"],["D:/Blog/public/agency-model/index.html","cc8f414fa585f2150418b2223d146d2d"],["D:/Blog/public/appearance-mode/index.html","76e5019e0bd59655030471d6e9d04a86"],["D:/Blog/public/archives/2019/01/index.html","3e2072189d42f1899005bc02614c8c95"],["D:/Blog/public/archives/2019/07/index.html","2ecbe645b63dcb93db14dab0a4609431"],["D:/Blog/public/archives/2019/12/index.html","c23acb8825914c8ebf97a75f690b4e4d"],["D:/Blog/public/archives/2019/index.html","cb525032965aece6762a40d314a73a38"],["D:/Blog/public/archives/2020/04/index.html","4cc730054abda97a38f14c3e8fa6439c"],["D:/Blog/public/archives/2020/05/index.html","90a48cf99bda4b5d131d4b0d7b5a93c2"],["D:/Blog/public/archives/2020/05/page/2/index.html","474d33cb5f9bc5e5d19c9f627bef1714"],["D:/Blog/public/archives/2020/06/index.html","f486ade4edc741eee18d167ed0792acb"],["D:/Blog/public/archives/2020/06/page/2/index.html","125db4182c83c43a88d49c94172aea6d"],["D:/Blog/public/archives/2020/06/page/3/index.html","808891bb05a4f02e273d71218c8495c8"],["D:/Blog/public/archives/2020/06/page/4/index.html","b387f156a110799645a0b0817e33bdf7"],["D:/Blog/public/archives/2020/07/index.html","ca5b6c335a7299912e4f296d46adfb4d"],["D:/Blog/public/archives/2020/07/page/2/index.html","f4b0f9ec9581a7c95d5b6218b01f4ee0"],["D:/Blog/public/archives/2020/07/page/3/index.html","2e7d26f73cfd27258d52fae0db215aa4"],["D:/Blog/public/archives/2020/08/index.html","0b4c5857e26208ba8098572c41e1d017"],["D:/Blog/public/archives/2020/08/page/2/index.html","422da837a3ae4974c01e6af4b7ba8fc7"],["D:/Blog/public/archives/2020/08/page/3/index.html","1f9d45da38bb1d6d835e9c69cb55e4dd"],["D:/Blog/public/archives/2020/09/index.html","d46e138040e4150f214c9cd2caf12a8b"],["D:/Blog/public/archives/2020/09/page/2/index.html","9d3cd0c139f3f8b62b5fdd77abec0054"],["D:/Blog/public/archives/2020/10/index.html","2f5a6a8ae69e01d6c306e62748bd1914"],["D:/Blog/public/archives/2020/10/page/2/index.html","d15afce112fdcbe7f52504ec44e3f939"],["D:/Blog/public/archives/2020/11/index.html","04c3d515f1d1c4bb98d5396cf3af2bf8"],["D:/Blog/public/archives/2020/11/page/2/index.html","bca7ed8f40651f2e22ed1db6a36923ed"],["D:/Blog/public/archives/2020/12/index.html","0ec6154344086244ae0d7b5b39d4c131"],["D:/Blog/public/archives/2020/12/page/2/index.html","fe1230e89b5768e8b279834b43745113"],["D:/Blog/public/archives/2020/index.html","b3212858c70acb32c593d1995dff5add"],["D:/Blog/public/archives/2020/page/10/index.html","25ebf8a171f2646c52afc97dc63cac01"],["D:/Blog/public/archives/2020/page/11/index.html","1baf8dcb403bc98d3d6352baa1b2a615"],["D:/Blog/public/archives/2020/page/12/index.html","45693f6a116912358537da90315c1d25"],["D:/Blog/public/archives/2020/page/13/index.html","e54c16caf4a278e40c8cddbdc8545ff8"],["D:/Blog/public/archives/2020/page/14/index.html","c3e24c3f89485a313ff8d71ed12d4a3f"],["D:/Blog/public/archives/2020/page/15/index.html","90fe0be63eb2ae2138ef0b6ad2e3ddcf"],["D:/Blog/public/archives/2020/page/16/index.html","fcf88fe133fe43c2363b963c938cf032"],["D:/Blog/public/archives/2020/page/17/index.html","35af3383dc70b1b3a39cf9da0dfce435"],["D:/Blog/public/archives/2020/page/2/index.html","4575e49b4686283a2c13d1e1c5336051"],["D:/Blog/public/archives/2020/page/3/index.html","df1abe254245e830e833269208b1b38d"],["D:/Blog/public/archives/2020/page/4/index.html","aa85a6380561077b6144efdd176fee68"],["D:/Blog/public/archives/2020/page/5/index.html","bcd5ae75368516a31ce39c917b8dc63f"],["D:/Blog/public/archives/2020/page/6/index.html","b669d145dada64f90d2f22f59c46d7a2"],["D:/Blog/public/archives/2020/page/7/index.html","d5f6d5e914ba51f2056780d79d4ed64a"],["D:/Blog/public/archives/2020/page/8/index.html","f1765cd3d364f2fadebd1dd1cd5d59ca"],["D:/Blog/public/archives/2020/page/9/index.html","5828ae5598e03b2254a809e520638fba"],["D:/Blog/public/archives/2021/01/index.html","c6a0195bd1bb307e48ae75ebd1a8438e"],["D:/Blog/public/archives/2021/index.html","b10b5a5873fa7a5f76a648c941981105"],["D:/Blog/public/archives/index.html","e61d918f7d13fb42258b230b57902490"],["D:/Blog/public/archives/page/10/index.html","8af473b4016cedc63800e7c20f4f9e06"],["D:/Blog/public/archives/page/11/index.html","ef01b42cc462aea9722836b8aae310a8"],["D:/Blog/public/archives/page/12/index.html","4de45ce1ccbaf551b49620433b3b3ddf"],["D:/Blog/public/archives/page/13/index.html","d451ccfdea9d2b35050b09b471dda832"],["D:/Blog/public/archives/page/14/index.html","d8451340e20caf99009126c21a4fe1e7"],["D:/Blog/public/archives/page/15/index.html","f365b45b2a86c3dd8a23cd8e23b34d38"],["D:/Blog/public/archives/page/16/index.html","0e627e04939e803ecf73c2d369faabca"],["D:/Blog/public/archives/page/17/index.html","b68e43ec560b3d41643c83261bcce723"],["D:/Blog/public/archives/page/2/index.html","321a2ef0059e174e394884755e1ac171"],["D:/Blog/public/archives/page/3/index.html","9d6a8b612d505dd813045f25ab3f254a"],["D:/Blog/public/archives/page/4/index.html","c2852f9886bda27829b2d71036609e97"],["D:/Blog/public/archives/page/5/index.html","a29233d6a22c0ac8c63efb99ee9f86eb"],["D:/Blog/public/archives/page/6/index.html","04eb0c6895373bba51735fe5e7a162fc"],["D:/Blog/public/archives/page/7/index.html","da76fed3ad978acaa849e5c0820cbca1"],["D:/Blog/public/archives/page/8/index.html","7d91aed7c3d23db066f39322c4233a57"],["D:/Blog/public/archives/page/9/index.html","52804cc3c5aacdabebe00eb070d60aae"],["D:/Blog/public/array/index.html","d9fcd110c0390dc7d87e3e610238289f"],["D:/Blog/public/binary-search-algorithm/index.html","eb48937f78e881c1597c25287c5f3c8a"],["D:/Blog/public/binary-sort-tree/index.html","86764fa4644295880019908be7e83f20"],["D:/Blog/public/bionioaio/index.html","f2e0180cf008111860aeaa0dab911de9"],["D:/Blog/public/bridge-mode/index.html","0c9d55b175a3036f3387cd9ae50f3c16"],["D:/Blog/public/builder/index.html","108f678a5a0af561fea3dbf93eabd120"],["D:/Blog/public/c-pointer/index.html","e5d83a10124243866d9a44662131736a"],["D:/Blog/public/categories/C/index.html","22d9a3d014aa533faef26f56c165dcb2"],["D:/Blog/public/categories/SpringMVC/index.html","de93f0ff9a1d3eae575aeeb01abb077c"],["D:/Blog/public/categories/index.html","d9cf48c1e738514464ceae49c99f4a66"],["D:/Blog/public/categories/linux/index.html","9205bf029fb8406e8addd2646484f489"],["D:/Blog/public/categories/分布式/index.html","950637e030f7c7bc07de50eb11f536ce"],["D:/Blog/public/categories/分布式/page/2/index.html","9044adde01b831396b7f35396249b077"],["D:/Blog/public/categories/前端/index.html","76c598ac03defd384b7fe57580ce2fa4"],["D:/Blog/public/categories/设计模式/index.html","35d5ca97db4dc7b82f9c708f2b1a08ad"],["D:/Blog/public/categories/设计模式/page/2/index.html","0326631fb208c8244ff5284ddca1d89b"],["D:/Blog/public/categories/高数/index.html","a2d21702eff59cf693a9c6ddb74d6e58"],["D:/Blog/public/chain-of-responsibility-model/index.html","143f0648652e3e2b72fbcd61ef7e9ffc"],["D:/Blog/public/chinese-and-english-switching/index.html","516b28bc879c3343d948bfe100560266"],["D:/Blog/public/combination-mode/index.html","7b1cdcbc7b33da768ebde802585ca041"],["D:/Blog/public/command-mode/index.html","cfa4e8b193ea321f059cab43ff64320c"],["D:/Blog/public/common-commands-of-unix/index.html","cfc9dc369dfe82fe071fe9fb4434f37a"],["D:/Blog/public/computer-network/index.html","69e68d50c9501986cc3a36ac4316bea5"],["D:/Blog/public/concurrency-principle/index.html","58037f3f766cbf0172307e81f91ee42e"],["D:/Blog/public/continuous/index.html","6e8a27dc3f200b3b06df68ec96deb05a"],["D:/Blog/public/contract/index.html","3990301347f38aa643bdd440a821c251"],["D:/Blog/public/css/octo.css","3cf77e48c8861ae54979fcc8df5984d2"],["D:/Blog/public/cycle-structure-programming/index.html","7cab899f9b569d97788a7c186b9c10e1"],["D:/Blog/public/data-structures-and-algorithms/index.html","5c394af4906ad5fc0940fa1f11c5254c"],["D:/Blog/public/deb/index.html","292f96efd599a156cda824ebe6512bd3"],["D:/Blog/public/decorator-mode/index.html","f236e8518aec2750a42ae554a3f75314"],["D:/Blog/public/definite-integral/index.html","aa3d493fcbf6394cefaadad561cfd9e7"],["D:/Blog/public/dependence-reversal-principle/index.html","8fbc0d92da216292a23198d9a0c71a00"],["D:/Blog/public/derivative/index.html","b441817a88b3ae512f242da5c88210a0"],["D:/Blog/public/design-patterns/index.html","b2759593977bff48b578d46394a6c418"],["D:/Blog/public/differential-equation/index.html","5e9fb85d8d68a04c6fb53f5b6026b5fe"],["D:/Blog/public/differential/index.html","2ab7a384869eb1107cfea78033906023"],["D:/Blog/public/dimits-law/index.html","85baa74acbb8b0acb3e08405e20d35fc"],["D:/Blog/public/docker-virtualized-container/index.html","2fa98db9c404560f9ca8e583b7218c29"],["D:/Blog/public/double-integral/index.html","b69090a468b104c994f679ee6dd51986"],["D:/Blog/public/dynamic-array/index.html","daaf800c0ea20c17e28f72f2ede321b4"],["D:/Blog/public/encoding-algorithm/index.html","a9fe06a2c189d72194f884c64ef3c718"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","72a4896d0581fbd3d764cbfb19270e37"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","01c90e318a97ecfec4a1d216d569ecdb"],["D:/Blog/public/factory-design-pattern/index.html","50beb9b5c502aadab0d1f2e69eca9842"],["D:/Blog/public/file-input-and-output/index.html","f7d488ab9a4319294a502bc108d053f9"],["D:/Blog/public/flyweight-model/index.html","c72045b5e712d94f7e3f6951e82290a4"],["D:/Blog/public/friends/index.html","73e6aa21ffc2dcc7459fb75f868ec276"],["D:/Blog/public/function-graphing/index.html","6320b37e62d0bee1e107d274a564f3b4"],["D:/Blog/public/gateway-service-current-limit/index.html","20f68be6df50d66eafe959832fec48b6"],["D:/Blog/public/gc/index.html","160446b1c5efb7bb7759de6dc91eca93"],["D:/Blog/public/generalized-integral/index.html","c37f8be1d42c3d055ca574e4490e307f"],["D:/Blog/public/google8102e2f35ce9e391.html","bbcd853f6b00a2cf0990f9f4e892781c"],["D:/Blog/public/gulp-compresses-static-resources/index.html","2e3dbd7a9025abd099db0cf5b5d25aa8"],["D:/Blog/public/hash-algorithm/index.html","6dce356eaa6730da32dda6d760d8505c"],["D:/Blog/public/heap-sort/index.html","30ecded5487e1540bed41dcc836c5017"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","53c31c3fc8c72b06b73adbce37471dfe"],["D:/Blog/public/http/index.html","8fe1adb5dccef605dc201f8778ee44c7"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","2bc68657c71798dc9b5dadee82e56205"],["D:/Blog/public/index.html","dbd100a241ee13879df7cb321e08ad63"],["D:/Blog/public/infinitesimal-and-infinite/index.html","7e24f12237605643d526cd982615a179"],["D:/Blog/public/interface-isolation-principle/index.html","521cb64fc1c0f3698bea280b553dfa59"],["D:/Blog/public/intermediary-model/index.html","2b9a22188e644c3c0f57571f580c5be4"],["D:/Blog/public/interpolation-search-algorithm/index.html","d8805c2847290986820d3df00011a557"],["D:/Blog/public/interpreter-mode/index.html","90d549247b615499e01616bd54b0f345"],["D:/Blog/public/introduction-to-computer-network/index.html","f6f8a5e818abe6c69e741c46052002d7"],["D:/Blog/public/introduction-to-operating-system/index.html","c2e3b8f051e3af223b35b225ddd799a3"],["D:/Blog/public/inversion-of-control/index.html","f68d41268ee190507d09cec9be03f3ed"],["D:/Blog/public/io-Interview/index.html","1b5e5b71c2653db4205a904c24840184"],["D:/Blog/public/iterator-mode/index.html","049f2fc8e42cc1e603811ba05cb34859"],["D:/Blog/public/j2ee/index.html","34746d154e2a0f1d69223d4b1fd53745"],["D:/Blog/public/j2se/index.html","d15e961d8e82ba693be6611bc965af7c"],["D:/Blog/public/jdbc/index.html","5a8e2bfa6d6d56b3e5cceaa1ee62f341"],["D:/Blog/public/jdk/index.html","9b1046ee7bad3561f56c495fd77c3363"],["D:/Blog/public/jmm-memory-model/index.html","ac08635398881c7eb8a3cb945b8860f4"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","6ba31574413cf9499c3b0a2fb33f7bb2"],["D:/Blog/public/jvm/index.html","b71bbd577a975a9b22cb11d6321d75cb"],["D:/Blog/public/law-of-robida/index.html","094ed3269c0948fa8f79fcf3bb30df08"],["D:/Blog/public/limit/index.html","2d8d8de92ea159c07102c538e6ab93ad"],["D:/Blog/public/linear-search-algorithm/index.html","9233803cbe3b5a6ad86d7ab2eb6f1880"],["D:/Blog/public/link/index.html","4111b2f7bdb57c68872867cbf968b1c7"],["D:/Blog/public/linked-list/index.html","9b5b81fca2f067bfc6d6eb5799bd7f9e"],["D:/Blog/public/linux/index.html","6b0e71a9f2862c032888f2973d201329"],["D:/Blog/public/liskov-substitution-principle/index.html","3dfc384ee2c18de7b95398e93f280ab2"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","ba7c0436ea1efef8fc9262b1eee7eb5b"],["D:/Blog/public/maintenance-1/index.html","9e3a654a1e83e572bf92022fa39d7eb3"],["D:/Blog/public/maintenance-2/index.html","c4111f31e0c76061adec06630818491a"],["D:/Blog/public/maintenance-3/index.html","23b9d4d3fe0584fa13505e0c35212956"],["D:/Blog/public/memo-mode/index.html","fee73862e3aca9b9ab8be24c3bf53e09"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","0b47cff57301a4ed162eb106ebb592d2"],["D:/Blog/public/multi-function/index.html","4f096d46de58801d20b0d8ce03af60c0"],["D:/Blog/public/multithreading/index.html","00929e980e114cc5949584e842ac704b"],["D:/Blog/public/mvc/index.html","993ade5336f52465c947309004c97707"],["D:/Blog/public/mybatis/index.html","de3b1718d8033f702bf3a24d5c3f2307"],["D:/Blog/public/mysql/index.html","7b55f5b120749c544a8998a98460313e"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9171f2dd7c85dfb7e7cdec357c214033"],["D:/Blog/public/null/index.html","a30d38812e4801342d4e3d8b959a22e2"],["D:/Blog/public/objectoriented/index.html","0c13289ef94d73c27ef7382a899facdb"],["D:/Blog/public/observer-mode/index.html","d6f7f912d517343a141d68d0b8d81e76"],["D:/Blog/public/off-heap/index.html","d7ea542e21420f29373d651cf4c4916b"],["D:/Blog/public/operating-system/index.html","6016ef6e43613119ea332847ee98d5eb"],["D:/Blog/public/page/10/index.html","db0a7aea53a9124be52438689bacca80"],["D:/Blog/public/page/11/index.html","2fd74819f7621b18aa5a7e00c230f2a0"],["D:/Blog/public/page/12/index.html","bc005f00dee435a96d079c2bcdb286a1"],["D:/Blog/public/page/13/index.html","f157bd502d285e1dd4ed8aa21d62ded4"],["D:/Blog/public/page/14/index.html","49160cc44d5c9638c0e9237b0f8c591e"],["D:/Blog/public/page/15/index.html","5ff1dc069d658e28cc157198b8a7dcd7"],["D:/Blog/public/page/16/index.html","722ec3044a88185bfdbaf0b20ab9e875"],["D:/Blog/public/page/17/index.html","c6af9ba8ece93898f562e5ebfe0c8c53"],["D:/Blog/public/page/2/index.html","cde0027c4eedbc6ff6f3124b91507b4e"],["D:/Blog/public/page/3/index.html","92deb7f39f879b9184e2c84c538ce5e5"],["D:/Blog/public/page/4/index.html","1a9c002eb454a2f947280c0ea8d38a6b"],["D:/Blog/public/page/5/index.html","dc436aa8d88c1d6af4dfc897babe058d"],["D:/Blog/public/page/6/index.html","11a4b0b53d75c9a6fa420bbb8cdf6e7d"],["D:/Blog/public/page/7/index.html","707067740282b4a37d5d1bc5e216607f"],["D:/Blog/public/page/8/index.html","dcd9e28e8db060dee4db8d61556022e6"],["D:/Blog/public/page/9/index.html","7b6428994faa507f7f2e329a656b2675"],["D:/Blog/public/palindrome/index.html","07ac60e21ed3af91276b042c4df38297"],["D:/Blog/public/partial-derivative/index.html","54b93d65ce1338751fa8c5101789bcb7"],["D:/Blog/public/pass-by-value/index.html","579e93b87ceeebaff4baa27f6b0d6ffa"],["D:/Blog/public/pictrue-bed/index.html","9514f0115decc69e1759a20b5099de99"],["D:/Blog/public/principle-of-opening-and-closing/index.html","8405f179f675eac81474de6efbb0b15f"],["D:/Blog/public/principles-of-computer-organization/index.html","46c392f35e2fd5e5adf94affc77b0070"],["D:/Blog/public/program-test/index.html","36712fce47f590b1fd966506c4374fee"],["D:/Blog/public/prototype/index.html","a661b787c00274a5d41f65cd00c838f5"],["D:/Blog/public/queue/index.html","d128b5b1d4cda44e1796c7b5e162571d"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","dd8808b6368192f8f2a4f88f3b702a04"],["D:/Blog/public/redis/index.html","29597587011e578f02e0ad2380494442"],["D:/Blog/public/reflection/index.html","b20d2fe9bcce7294b3e403163b6742df"],["D:/Blog/public/resume/index.html","d538db6c525b56951c7ef4e59d7f43ac"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","93e6acd35d360806d67caee783140b8c"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","4205f064d5f8bfafddfc6de520ec6951"],["D:/Blog/public/select-structure-programming/index.html","8096beb7e007b8c61990e92a56f0c370"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","38112699d5584e55db8a7a06c4f5d772"],["D:/Blog/public/sequential-programming/index.html","6234965c7bfe1d2f142c3a82c0ca6d9e"],["D:/Blog/public/series/index.html","f949efe3adb6ff1e60516aa41cea16fa"],["D:/Blog/public/single-point-login/index.html","aac5e37e7d84b3547d093d3a6900629f"],["D:/Blog/public/single-responsibility-principle/index.html","e91a771d0827fcb3e1647c83f3bece51"],["D:/Blog/public/singleton-mode/index.html","53ce8c04cc2604da10b4c8692c05e3c9"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6d1cf98bb77eab09ed0f1e7173cbf47f"],["D:/Blog/public/sparsearray-sparse-array/index.html","288b3d2ec12f88cc65b94098f5409900"],["D:/Blog/public/spring-architecture/index.html","80a1ed406f30b8dc55d3c735116b54e9"],["D:/Blog/public/spring-relate/index.html","d07db59e7c8de46ca90a5aa1f2b5f0d3"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d8233d37a2a6e75fa8d49a31eb3c4f1c"],["D:/Blog/public/spring/index.html","6b6a259737ad00b732ef357646075156"],["D:/Blog/public/springcloud-alibaba/index.html","830a0eeb6880b515a9a2d9770a12ed8f"],["D:/Blog/public/springcloud-bus-message/index.html","1440733de0a25168ea767745c7183afd"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","50c934bbc92ad23516557a0be7ecb9ed"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","a1709c2626591ee52ce7cc9b70c6b3c1"],["D:/Blog/public/springcloud-stream-message-driver/index.html","fedc2e8c2faab862e9e1171a00dde810"],["D:/Blog/public/springcloud/index.html","64f7503464227f0b3f7398b8509f56bc"],["D:/Blog/public/springmvc-environment-construction/index.html","438e7c54ec2b0dd878a5f6125c9e980b"],["D:/Blog/public/springmvc-work-stream/index.html","c45eb3410b89cac822a2187efe4f6025"],["D:/Blog/public/sql-injection-attacks/index.html","53e656849a9e929acb8a1e64f382c3c5"],["D:/Blog/public/stack/index.html","bfc193c90a678edbc9f77a043de8ec0d"],["D:/Blog/public/state-mode/index.html","4e648aebcf23645c30dd8b037e87cbff"],["D:/Blog/public/strategy-mode/index.html","47f661253de8ae3aac15aca2141a26cc"],["D:/Blog/public/synthetic-reuse-principle/index.html","6a37f91a52fe966da72a4c4c2b157116"],["D:/Blog/public/tags/C/index.html","a0299bdd48c059c6265e4b6138948aaf"],["D:/Blog/public/tags/C/page/2/index.html","6bede8b3be64db94c2f5323ad058eb63"],["D:/Blog/public/tags/Concurrency/index.html","9f35d96f28547405ad0b80248ad2a796"],["D:/Blog/public/tags/DesignPatterns/index.html","7efec66f2082169f9d9f82e504742a77"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aead0ab22c7bf134e550739f2c33211d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2e22551126fc9d09c0583b5ecf7ffee0"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9df5afd448338fec72e55598595f8011"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","518f30fdfd965bd63f73fc1d02dcfc8d"],["D:/Blog/public/tags/Interview/index.html","a624b4339819f538d0e851de81348876"],["D:/Blog/public/tags/Interview/page/2/index.html","598232e27ce555dff6f109040ead4e73"],["D:/Blog/public/tags/JVM/index.html","92d6c8fb9ed239630cf999238313ecf0"],["D:/Blog/public/tags/Operating-Systems/index.html","d3e7cf52da4911b30cc81006ded210f6"],["D:/Blog/public/tags/about/index.html","85377009f8d0dcb84b3cf3c051c6ffc1"],["D:/Blog/public/tags/ad/index.html","0096c9cccfeb78653b5da551d91fe23c"],["D:/Blog/public/tags/dataAlgorithm/index.html","8c901710033b744ba33ccc1725306d38"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","a1fcab41101f93eafea773c4f3514596"],["D:/Blog/public/tags/docker/index.html","b641c2e5b66c5ff18cccb847af7fbf2e"],["D:/Blog/public/tags/frame/index.html","051bd7058ab8ce6030c081e1a0f21a2f"],["D:/Blog/public/tags/front/index.html","69e2c9c4f01794640226ffd64dafacef"],["D:/Blog/public/tags/index.html","a55480b8a4a444a3442ff1085c1b5836"],["D:/Blog/public/tags/index2 (2).html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","64809de15e711e36062fb8aedac4340f"],["D:/Blog/public/tags/linux/index.html","cccf95439399ccec099a90ef83e64619"],["D:/Blog/public/tags/maintain/index.html","0f5911ef9f1cbb6d3fe2b533dc87928f"],["D:/Blog/public/tags/math/index.html","8bea8c2b2f5e0e2871e1b2050dc4aa6d"],["D:/Blog/public/tags/math/page/2/index.html","b9c865c6cc3bb46c13dada9a6b1986fe"],["D:/Blog/public/tags/network/index.html","c95a030768844fdd8116c67e4c363bec"],["D:/Blog/public/tags/project/index.html","2002a3e99360c01555b11a00335d8fb6"],["D:/Blog/public/tags/resume/index.html","42708916a636bdc9b197e9dc1e250b1f"],["D:/Blog/public/tags/safe/index.html","5f6923b1e86572d607e8d5193904f405"],["D:/Blog/public/tags/sql/index.html","c4dbb9a4ee4203f5b835b57633950588"],["D:/Blog/public/tags/test/index.html","edf29d931564ac221679e61622d7d407"],["D:/Blog/public/tcpip/index.html","a9bd22b9193f90ddadf0286e8eeaf428"],["D:/Blog/public/template-method/index.html","3b93519f652a0676dcb01a5b5f713434"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","95c679b7de91e5adfbb92ba67b0f0a28"],["D:/Blog/public/thread/index.html","2d1995874f9eed285b301eb0ed8d0a51"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","61cb1e5dc5e5dcce5eea839244442a2f"],["D:/Blog/public/ubuntu-set-ip/index.html","0b521edcf3f69feb46e829ee9bec1e0e"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","db734cc77a50d91b45ef0d92fdf43cfc"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","a8a5644b3ae4436b03e5e1fd97f163cb"],["D:/Blog/public/users-create-data-types-themselves/index.html","dcb34b8725149ac8cf91cbf6752e5122"],["D:/Blog/public/visitor-mode/index.html","75439f7e8be550c88f6e247927e00ba7"],["D:/Blog/public/xml/index.html","5568c5ce3fd24ce7c8ab6eacc0cdc7a4"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","b2c4253250801c3fa401b2e6ff527122"]];
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







