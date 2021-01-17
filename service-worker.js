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

var precacheConfig = [["D:/Blog/public/404.html","cb5962edb62ee741a42511beb06b9e00"],["D:/Blog/public/7-sorting-algorithms/index.html","63cbd00ab39d9e6103f463acd42e4ea2"],["D:/Blog/public/AIO-blocking-model/index.html","bc02a2253263cb721202cd86d409cd97"],["D:/Blog/public/BIO-blocking-model/index.html","b93728a4399ab840554ff3da94fa0d64"],["D:/Blog/public/C-algorithm/index.html","82ba16054fecda86419b9850366d4264"],["D:/Blog/public/C-programming/index.html","00fbdc87aef0b93ec6e627ba72eca277"],["D:/Blog/public/Good-use-of-pointers/index.html","297d922c0f435d97653705143e6692cb"],["D:/Blog/public/IO-model/index.html","7c91633324630f60697e2b117177db9e"],["D:/Blog/public/IO/index.html","00c89e90277336eae8f7f3d316e65e02"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","ccc943dc01e05cdbd4c79f562b672009"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","023e2aa86e5f64b5390d31c75a3b22a6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","499fe35cc7caba760a6c472b148adeeb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","eae96c1959cfbf085147f7f079cc107e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","df3fa3399671b03a0458e3d48b9c4c5d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","9bd234d151efd2eff0e81da6e5c75827"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","0521a8995953bdd948074cd2a71efd13"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","cf5477c53a348c9a42389c3328c4864b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","c776bb8a1825bee8edd047fd1d6aaac5"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","a411e3342ed11b8a27ffcff87af666f9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","e7c6b70f12d868e7899a3f6911acbdea"],["D:/Blog/public/Java-network-programming/index.html","894a4e330555bd12e211119f723184b1"],["D:/Blog/public/NIO-blocking-model/index.html","f9482f9e8ed86cc9fcc5bcd74a2f6ce5"],["D:/Blog/public/Native-method/index.html","8b272c66b352a4891762a2ce234882ad"],["D:/Blog/public/Sandbox-security-mechanism/index.html","258475a4d93edcdc6c685d9b71b8e606"],["D:/Blog/public/SpringBoot-startup-process/640.jpg","92157f8b7a12cf7b692600d96f615542"],["D:/Blog/public/SpringBoot-startup-process/index.html","c105fd3671a3e2eb6f7ce23099327dd8"],["D:/Blog/public/about/index.html","a82359817091281fbcfc6d052c0431ce"],["D:/Blog/public/adapter-mode/index.html","43a84b52b8ff7cc6e6dfa6eb83a52c69"],["D:/Blog/public/agency-model/index.html","9b2b8f623210c0f505266a6d3c34bb3c"],["D:/Blog/public/appearance-mode/index.html","2bac9f41f597fd840cae193863e30aad"],["D:/Blog/public/archives/2019/01/index.html","abf210865b2e86051a27925f7e54a983"],["D:/Blog/public/archives/2019/07/index.html","5588f2cad8ef8ba07e621aa5dc08650b"],["D:/Blog/public/archives/2019/12/index.html","1e9c548a455cd4ed232fb36601cd9ba5"],["D:/Blog/public/archives/2019/index.html","af5629ad632769f0b9cf574850c4bbc6"],["D:/Blog/public/archives/2020/04/index.html","aedd029630f98311b3e54f3995e25ff4"],["D:/Blog/public/archives/2020/05/index.html","9f501a876be930d705356be6524f6b48"],["D:/Blog/public/archives/2020/05/page/2/index.html","6056b0c82cf8d8b68143acef09405396"],["D:/Blog/public/archives/2020/06/index.html","cdb7a72faaa608b4377f02bbfd4d5ced"],["D:/Blog/public/archives/2020/06/page/2/index.html","11dace47860c6f07235f2ef2305e1c97"],["D:/Blog/public/archives/2020/06/page/3/index.html","29d8789eee02f070a719f97842b2d96e"],["D:/Blog/public/archives/2020/06/page/4/index.html","1c8c376e997780627d8123f6b01174ca"],["D:/Blog/public/archives/2020/07/index.html","6cf4d83ebc399790027befa6b24b2e29"],["D:/Blog/public/archives/2020/07/page/2/index.html","9d144370ac6f651057e672d919ae286a"],["D:/Blog/public/archives/2020/07/page/3/index.html","c66be295638ed547a6125ece3518f2c1"],["D:/Blog/public/archives/2020/08/index.html","9780558de44b15521b4a3c7749b4572e"],["D:/Blog/public/archives/2020/08/page/2/index.html","1b1b0c7373b4b32cb6075e53826b5961"],["D:/Blog/public/archives/2020/08/page/3/index.html","13a12036eb4262262e7e1625b4944950"],["D:/Blog/public/archives/2020/09/index.html","666e5f3fad3425b964d27258b4665ac3"],["D:/Blog/public/archives/2020/09/page/2/index.html","077e875c1f31d2904490be56135aa66e"],["D:/Blog/public/archives/2020/10/index.html","c1a00150b98472a36dce823de0b1fdde"],["D:/Blog/public/archives/2020/10/page/2/index.html","679e5ffbb9e0e01e02db3521ae4d518d"],["D:/Blog/public/archives/2020/11/index.html","c6d87a1dcd05bb69cda69ffcda66052b"],["D:/Blog/public/archives/2020/12/index.html","fc8af87cdf6edd1835c641e7dda4d0e8"],["D:/Blog/public/archives/2020/12/page/2/index.html","e4f0f337a4249e7a9ad5eab744bddfc0"],["D:/Blog/public/archives/2020/12/page/3/index.html","74bd3da72db8f6def03d457183ab37ed"],["D:/Blog/public/archives/2020/index.html","6738a2219a9e4f96d3e68320315bd250"],["D:/Blog/public/archives/2020/page/10/index.html","19d879bb59ed1acbe71a956840c9cd56"],["D:/Blog/public/archives/2020/page/11/index.html","4b818b3f160b36f99ad962c92d3a9961"],["D:/Blog/public/archives/2020/page/12/index.html","9a250b3e398eeea907b9b31a48569e19"],["D:/Blog/public/archives/2020/page/13/index.html","585299bebbc824835158b8a5d4185a0a"],["D:/Blog/public/archives/2020/page/14/index.html","22e871f5cd979bdaab933e16bd9cd166"],["D:/Blog/public/archives/2020/page/15/index.html","2aff1d615bdb2bda5fd6b6d3a58d5fd9"],["D:/Blog/public/archives/2020/page/16/index.html","b9fcb8d3fc3bfa6f15c9e7321b1d2044"],["D:/Blog/public/archives/2020/page/17/index.html","5fb5647b9439d310067c72be38b4f8b3"],["D:/Blog/public/archives/2020/page/2/index.html","be6ac29e5f35e2912417a9738867d1a4"],["D:/Blog/public/archives/2020/page/3/index.html","470078ecdc367790249e29df25afdbb2"],["D:/Blog/public/archives/2020/page/4/index.html","2b7443e5c0015f61bf16424e0396a2fe"],["D:/Blog/public/archives/2020/page/5/index.html","63ac022602986fc9f634667a34da033d"],["D:/Blog/public/archives/2020/page/6/index.html","057d52687e2ae6cd5ec692185a7f116b"],["D:/Blog/public/archives/2020/page/7/index.html","5893a30dfa14da459c67e3b4ef63a161"],["D:/Blog/public/archives/2020/page/8/index.html","9ae178ab374beb5c270324b0019d2ec3"],["D:/Blog/public/archives/2020/page/9/index.html","1cf7ac6c1838e9d41675f70746f5cb8b"],["D:/Blog/public/archives/2021/01/index.html","189a7e762f0dee6c2894736ffe1ccab5"],["D:/Blog/public/archives/2021/index.html","3c4223ad3b740ddb11177f73a5d17b2b"],["D:/Blog/public/archives/index.html","bc051204e8063450797948dd2525daf5"],["D:/Blog/public/archives/page/10/index.html","13363a086845304ef48a52437de88aac"],["D:/Blog/public/archives/page/11/index.html","98ed03ce8c2c59d7b506a31780d543f9"],["D:/Blog/public/archives/page/12/index.html","98ed03ce8c2c59d7b506a31780d543f9"],["D:/Blog/public/archives/page/13/index.html","4b1fce5f9d2d7341422412d46082d74b"],["D:/Blog/public/archives/page/14/index.html","4b1fce5f9d2d7341422412d46082d74b"],["D:/Blog/public/archives/page/15/index.html","671878660a5bdb200137299bcf5e1fc0"],["D:/Blog/public/archives/page/16/index.html","671878660a5bdb200137299bcf5e1fc0"],["D:/Blog/public/archives/page/17/index.html","dcedf0b290304835fb8b945a50257b9c"],["D:/Blog/public/archives/page/2/index.html","8c46fb1c9277157f7c29a20fb42ab3a6"],["D:/Blog/public/archives/page/3/index.html","00a1fd2044f13d5d214b9a5c3f10a37c"],["D:/Blog/public/archives/page/4/index.html","8002130085ca4bb68eced8c55fa7e1d0"],["D:/Blog/public/archives/page/5/index.html","abaa21be420c329ed5d59162e2cf36e4"],["D:/Blog/public/archives/page/6/index.html","abaa21be420c329ed5d59162e2cf36e4"],["D:/Blog/public/archives/page/7/index.html","27e2e4194d85b95548d6d60ebfd4ab28"],["D:/Blog/public/archives/page/8/index.html","27e2e4194d85b95548d6d60ebfd4ab28"],["D:/Blog/public/archives/page/9/index.html","13363a086845304ef48a52437de88aac"],["D:/Blog/public/array/index.html","ff942bf75bdbe9889bdf6bf20b0b60ae"],["D:/Blog/public/binary-search-algorithm/index.html","a9408569debe9b198aa230c61358177d"],["D:/Blog/public/binary-sort-tree/index.html","46a24c3818280e10f67618db6a037f09"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","e38e1914ed5daf6b34ff7f0fae024183"],["D:/Blog/public/bridge-mode/index.html","897bc1d908fa948d7d143a58187dadb0"],["D:/Blog/public/builder/index.html","3b86962a14723fd5256588c58eedfa7f"],["D:/Blog/public/c-pointer/index.html","2db67c180036cfe9a82863bdbc61a359"],["D:/Blog/public/categories/C/index.html","8f0c8de26ff3fdff74258cd1cb70d463"],["D:/Blog/public/categories/SpringMVC/index.html","d399ff5d6d1a6172f0e191b268a04744"],["D:/Blog/public/categories/index.html","d67d3c548009b7d93486b406a6c50721"],["D:/Blog/public/categories/linux/index.html","5e6a0bbbdd179bf78c190fdcbda908ca"],["D:/Blog/public/categories/分布式/index.html","f237305601cc02ac0d93f901d27801cf"],["D:/Blog/public/categories/分布式/page/2/index.html","a59a614db3624830d6f9582f57fde919"],["D:/Blog/public/categories/前端/index.html","b8c5cebff41b39af2709550dde6f4174"],["D:/Blog/public/categories/设计模式/index.html","9f0de2a36b81b8389e0b224201a8362f"],["D:/Blog/public/categories/设计模式/page/2/index.html","77060f50f7698253dc984d17b997d30c"],["D:/Blog/public/categories/高数/index.html","419bc1cee52927b6a1d6a1c229c018f4"],["D:/Blog/public/chain-of-responsibility-model/index.html","9621b78e277c3a8d8b8186156b5a1ad0"],["D:/Blog/public/chinese-and-english-switching/index.html","3fad32aa3ac825f1460e3343135a644d"],["D:/Blog/public/combination-mode/index.html","0b6e0189d97757f50f8ff7228dc69829"],["D:/Blog/public/command-mode/index.html","aacae4a07ae6d9021d7ff854699d7c53"],["D:/Blog/public/common-commands-of-unix/index.html","ab21d02e0ab946835fae5fa0a0ee1332"],["D:/Blog/public/computer-network/index.html","9de71ff1b2182d31c0f4b2782fada028"],["D:/Blog/public/concurrency-principle/index.html","9f726b8f64ef7eee5cacb3e35658e73e"],["D:/Blog/public/continuous/index.html","bbf42f748dae4217cf21f1a7ed5b98d4"],["D:/Blog/public/contract/index.html","a0e40bd0ddbc545fb403dc25f465154d"],["D:/Blog/public/css/first.css","66ef5e0ca02e00a122c5913ceb483c94"],["D:/Blog/public/css/style.css","c163e7f2dbabc56dbe939101c937913f"],["D:/Blog/public/cycle-structure-programming/index.html","73a9bfe50b1aed290e55c0bcf045216e"],["D:/Blog/public/data-structures-and-algorithms/index.html","6791a541b17163ac64eea3c98277eb33"],["D:/Blog/public/deb/index.html","86cb2b0ce67bb79b1de7c905b190408d"],["D:/Blog/public/decorator-mode/index.html","d7a512c44ec5da228403fa691193bbb0"],["D:/Blog/public/definite-integral/index.html","eba265f32d691241cb9f4ddf9d4fe1e2"],["D:/Blog/public/dependence-reversal-principle/index.html","c560354ef73a32750bf7597a4c0f284d"],["D:/Blog/public/derivative/index.html","f772e6b1dd2a53a2ed29c2d27fa930ae"],["D:/Blog/public/design-patterns/index.html","171a901289be78f1e52bbb2f6e07e758"],["D:/Blog/public/differential-equation/index.html","a4a82378a2606588aea61fc2478d7d10"],["D:/Blog/public/differential/index.html","5bdce648d59c314afea09a126115dc7f"],["D:/Blog/public/dimits-law/index.html","b57939965c8192addf9c03c7d47bb881"],["D:/Blog/public/docker-virtualized-container/index.html","6c385339cb727711cc14ac4b371599c8"],["D:/Blog/public/double-integral/index.html","0db39982a0ee4e0215272f6abc8f459c"],["D:/Blog/public/dynamic-array/index.html","b2eb2faa1aec76f66ff7eb0fd34d4f49"],["D:/Blog/public/encoding-algorithm/index.html","82f3b250ac2411ddb411ef38cea27c62"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","ca849edea37b2ec74d9802e714387504"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","295259a6903948c5cdd38667a4d3463a"],["D:/Blog/public/factory-design-pattern/index.html","828d88167baad03ea07c1cc57f57ba74"],["D:/Blog/public/file-input-and-output/index.html","16fbaaddb86feca04e0b138c0b8744da"],["D:/Blog/public/flyweight-model/index.html","c2e5e87852763b42ad439eb0b3241312"],["D:/Blog/public/friends/index.html","5e0607490f634382d7fb9a11d1c78f51"],["D:/Blog/public/function-graphing/index.html","5b32154a8e5f0772f0f6ad724bb7af7b"],["D:/Blog/public/gateway-service-current-limit/index.html","7704dd8c9a44279d0d2ca947a860d864"],["D:/Blog/public/gc/index.html","23ab1f77a914ed3e6e2b5b4216f9cc11"],["D:/Blog/public/generalized-integral/index.html","8f175c7a3be9fd4456420549af74c96b"],["D:/Blog/public/google8102e2f35ce9e391.html","a8b6bdd92fd5d55af0306a8f745b9c9e"],["D:/Blog/public/gulp-compresses-static-resources/index.html","d4b478baafc86dbf9096f6129c10401b"],["D:/Blog/public/hash-algorithm/index.html","0d39a91915daf62aa43b94805730d052"],["D:/Blog/public/heap-sort/index.html","1e6e13cfde3020202e1e89514a2a0933"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","c22f3b410853bfa2cb5717ba3224d3d8"],["D:/Blog/public/http/index.html","ed5c6152193dfdc083beceba2d8a879d"],["D:/Blog/public/indefinite-integral/index.html","7694d6045bc32c39ec4fdffd5936c498"],["D:/Blog/public/index.html","341978cc9fc2e67710c5d279338dd50d"],["D:/Blog/public/infinitesimal-and-infinite/index.html","e2a0634f1fd659aca36616cddfcb3a7c"],["D:/Blog/public/interface-isolation-principle/index.html","57042a5f23f0f2640676f0c000c1c613"],["D:/Blog/public/intermediary-model/index.html","9a1321089298d4b33654f426d8e11663"],["D:/Blog/public/interpolation-search-algorithm/index.html","446e289935570822818162919f212f3b"],["D:/Blog/public/interpreter-mode/index.html","752eb35516818eed189bcacf953f0c94"],["D:/Blog/public/introduction-to-computer-network/index.html","ba554a3418e65f9be0e45c6cfafc8417"],["D:/Blog/public/introduction-to-operating-system/index.html","1295467d5002eb530c5565e04ca47678"],["D:/Blog/public/inversion-of-control/index.html","84baf8e65444e34e8036ecd68af61eab"],["D:/Blog/public/io-Interview/index.html","f22e955b4cd9706cff8c5c04948d2065"],["D:/Blog/public/iterator-mode/index.html","9d72d917a07983479f20db03b387f7f9"],["D:/Blog/public/j2ee/index.html","d4a6b35ef721637cc661990e86dc8792"],["D:/Blog/public/j2se/index.html","a199783f4bd8b16a4d11958e0b527c86"],["D:/Blog/public/jdbc/index.html","b382770cd31a8d2e68d0964b92009a4a"],["D:/Blog/public/jdk/index.html","2a236b6ec0ccbe142ef442b2dd702747"],["D:/Blog/public/jmm-memory-model/index.html","79f14059d24e3d90b5b46678a3decede"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","6150e245dee676ca5128ffd9018e8f37"],["D:/Blog/public/jvm/index.html","4c8bb840fc86a611c5ca4a67d6220e8e"],["D:/Blog/public/law-of-robida/index.html","b9d721aa5319f42e42f8e687511f9fba"],["D:/Blog/public/limit/index.html","169e54d9aa51957d7ab4958364c5feda"],["D:/Blog/public/linear-search-algorithm/index.html","8c009567c80d83e09f80e721db698c7b"],["D:/Blog/public/link/index.html","95e42014f57a6a1e279f48133d7eca29"],["D:/Blog/public/linked-list/index.html","3f4dc148482f2c1f22687c73cc875290"],["D:/Blog/public/linux/index.html","874b881ef06358a5efd28cb4ea0dd2c4"],["D:/Blog/public/liskov-substitution-principle/index.html","585fc122564137cadb7e539abe57c170"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","aa28878b5863fc6eb88495fa98ebf81d"],["D:/Blog/public/maintenance-1/index.html","3f6447e84d826e13e4a2d45d6a400d38"],["D:/Blog/public/maintenance-2/index.html","8d6b58bad07503814349ec69658aec93"],["D:/Blog/public/maintenance-3/index.html","ff3a0c7825e90aff74d5d6226cfca3dd"],["D:/Blog/public/memo-mode/index.html","40cef81a741616315e86f3acd4c18cae"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","023943d79566aacbd86ecb1726803c3f"],["D:/Blog/public/multi-function/index.html","ba7bcfbf40e0762f7d2bc8c2922d73ea"],["D:/Blog/public/multithreading/index.html","1ec67df6c30a4505a381b41ed4e38800"],["D:/Blog/public/mvc/index.html","66219100bf1a5956d673f2abfe4fbce6"],["D:/Blog/public/mybatis/index.html","aca8cfd17071059467ea38bd7c1a4e58"],["D:/Blog/public/mysql/index.html","508a118ac72e2f1ab4cb5257a4981800"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","98b41c058ce6ad4aa7efaa58b764bf11"],["D:/Blog/public/null/index.html","d68a9b57c71df3c602b6f77537e01bed"],["D:/Blog/public/objectoriented/index.html","35e63a8be24a0f7a5518e0741cdfadb7"],["D:/Blog/public/observer-mode/index.html","7b7b488477874623997f054ac43a8649"],["D:/Blog/public/off-heap/index.html","aa58c4aadbc81dbb0ba553742fc1d939"],["D:/Blog/public/operating-system/index.html","c8623f4953a60ef006eb6c906afe26ae"],["D:/Blog/public/page/10/index.html","7538331d51bd74969db3bb5674aa9939"],["D:/Blog/public/page/11/index.html","ebf828a6024d30b3649241859f702db6"],["D:/Blog/public/page/12/index.html","1d6cbf3cc454f76a2b80fda4feb34911"],["D:/Blog/public/page/13/index.html","92de10451b8c0b86304fb403954b1a14"],["D:/Blog/public/page/14/index.html","ecaf7a6b8c01b1e362478e5a24d5a467"],["D:/Blog/public/page/15/index.html","6e92a785eef81e59c72be74730557ddb"],["D:/Blog/public/page/16/index.html","262fb76a1d4ee4a3d7f5c623fc65efd8"],["D:/Blog/public/page/17/index.html","0a51f61c5a02f1981849e7d614ddc9da"],["D:/Blog/public/page/2/index.html","ea821314a95a780c4240f5eac9834261"],["D:/Blog/public/page/3/index.html","c6a28658751f887d5f334ab0d66a6b70"],["D:/Blog/public/page/4/index.html","993c23562aef8a83254ec7acc006911a"],["D:/Blog/public/page/5/index.html","bf30961cc5b81ee829d0e563c74bc925"],["D:/Blog/public/page/6/index.html","d25b8b3c15988496863fa7bb08f5033d"],["D:/Blog/public/page/7/index.html","c41d263c535d55c9660f5388c193839b"],["D:/Blog/public/page/8/index.html","6f150e7fcb670dc71f7f408655a0e912"],["D:/Blog/public/page/9/index.html","42d19dc6789ac96498f445c3bd4f5ef8"],["D:/Blog/public/palindrome/index.html","fdd8d5f5f2c5d93c4acc0caddb8900b3"],["D:/Blog/public/partial-derivative/index.html","2a9759430565cb55bf2e95e6bd04f9e4"],["D:/Blog/public/pass-by-value/index.html","908211bb0f10651404758dd441a3e88d"],["D:/Blog/public/pictrue-bed/index.html","beedb3ebfd3d525ae4497fe4ca9a0ccc"],["D:/Blog/public/principle-of-opening-and-closing/index.html","0a73fc636becbf135280e783d929773d"],["D:/Blog/public/principles-of-computer-organization/index.html","a2e7a92f4fac3792964c56aa4af8fea9"],["D:/Blog/public/program-test/1610797689455.png","a4b33f955b61540d5b47fe601df04ae9"],["D:/Blog/public/program-test/1610798317382.png","7acf7560090b9706a2af39f59867fe7e"],["D:/Blog/public/program-test/1610799034052.png","6dff4454cf1063bdc7afd743759b6097"],["D:/Blog/public/program-test/1610800924088.png","1f1fde784b973754b7ce9f984c579bea"],["D:/Blog/public/program-test/1610801339901.png","9bc92a62cd9960d5801b60e4482a1167"],["D:/Blog/public/program-test/1610802495380.png","65e2274248325c5de079bd479c29c9ba"],["D:/Blog/public/program-test/1610811373564.png","a6be023303bb87540addafca4fef624e"],["D:/Blog/public/program-test/1610811498245.png","17afbc35ac2f32ce5009c584c317b046"],["D:/Blog/public/program-test/index.html","5c8872f1369fac736622ee3aa3e68ebd"],["D:/Blog/public/prototype/index.html","0646c95d0310116209a8657c1545e5c6"],["D:/Blog/public/queue/index.html","34dd7d8528842c5852ca3837d1fdcc8a"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","1480e8ea7f9b14be0a9e67fe464741aa"],["D:/Blog/public/redis/index.html","a37170fe1c08827de5bfdb0696f45ad1"],["D:/Blog/public/reflection/index.html","cba9cf2038f88b8a9e30c04f8a2aa38a"],["D:/Blog/public/resume/index.html","f3278097f39c968bb12eb5194e0f5ce8"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","4457652176c00a47ee80e5c372f6b235"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","b1b40cb2a57a76d155ca63dce9833b3f"],["D:/Blog/public/select-structure-programming/index.html","1987250b03e18763c1f2b864b9fb30f5"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","dcb322f7870b80227ecb2cf5a4cee679"],["D:/Blog/public/sequential-programming/index.html","11aa7d0d79b470be49df7c998fa4d44a"],["D:/Blog/public/series/index.html","2d76c2c17f4936f73a5092e13b18f2be"],["D:/Blog/public/single-point-login/index.html","efc5f365430eb621a930c06a9e31b0fe"],["D:/Blog/public/single-responsibility-principle/index.html","fa16944247e0e999c8de3e3021a6f85c"],["D:/Blog/public/singleton-mode/index.html","9fad3e3a3efeeda690db370c89735c77"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","983420683ed25c93e2f44ce5797b0e04"],["D:/Blog/public/sparsearray-sparse-array/index.html","a76cc7f1ea272c85e02e1a0e77b4a069"],["D:/Blog/public/spring-architecture/index.html","b50d50c52acfd4841f3f781599d49758"],["D:/Blog/public/spring-relate/index.html","aee3fdda5384445cbdf8eb0dd1aac1ec"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d11b81b6cb5db9dc57613da9f1ec13ee"],["D:/Blog/public/spring/index.html","32781a4e61dbd2805190664fdc14a294"],["D:/Blog/public/springcloud-alibaba/index.html","759034bfcdf3208ed5426f41aa1e001a"],["D:/Blog/public/springcloud-bus-message/index.html","aec42f3c2c4323c7b22ae6f88aa76b75"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","746cd90f565e0c384205650dd4902732"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b282baf33aeec03434dae28d8ac4daac"],["D:/Blog/public/springcloud-stream-message-driver/index.html","9b25505e1e88cb59e8a4d6ca5b838ef6"],["D:/Blog/public/springcloud/index.html","04882e7430318167d16f2a90b45b4966"],["D:/Blog/public/springmvc-environment-construction/index.html","7867952400dcec327c82d9d34447ae44"],["D:/Blog/public/springmvc-work-stream/index.html","92eb4e6f0275c5ee74c4e109eaaa2bae"],["D:/Blog/public/sql-injection-attacks/index.html","75864c16c4fa3011c3d091b3706b49de"],["D:/Blog/public/stack/index.html","3000a6213ebf2797b7ed4ff7c3c4eb6b"],["D:/Blog/public/state-mode/index.html","cff04c7958a801b667c705eecc52131c"],["D:/Blog/public/strategy-mode/index.html","313603c19b33ad68791fa8c0f8eece01"],["D:/Blog/public/synthetic-reuse-principle/index.html","f3bb29dbc99862b18f34137b8c3432e2"],["D:/Blog/public/tags/C/index.html","f60f90d94f78881ec9991c96ec4b3ce6"],["D:/Blog/public/tags/C/page/2/index.html","9de260f540fa5a52eda7233f596dfcbe"],["D:/Blog/public/tags/Concurrency/index.html","cb120546f016f7d4210efb4de47b738c"],["D:/Blog/public/tags/DesignPatterns/index.html","e9660483b703c5c16b38189db093fd0c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aa1b555bb38f5fa4e864caff587f398c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","a1838f31ad6d5a04a86305008efcc61c"],["D:/Blog/public/tags/DistributedMicroservices/index.html","21f87fdfab1ee824a77c16824215ad40"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","fbf33ae63a8fa5d85f3cdf13f0a76b0f"],["D:/Blog/public/tags/Interview/index.html","8d114bfea2065a965abc5489dcda1aea"],["D:/Blog/public/tags/Interview/page/2/index.html","df1b999270b555b67f63878897fa20ea"],["D:/Blog/public/tags/JVM/index.html","32d471734f31de0ee981fdba3105f6fe"],["D:/Blog/public/tags/Operating-Systems/index.html","d93064d862a7d21a59ac3dbb74306602"],["D:/Blog/public/tags/about/index.html","cc2404790392bacaaf8fec1b16d73eaa"],["D:/Blog/public/tags/ad/index.html","bb41d6ca936cdf0cc6d62b8587f0e5ad"],["D:/Blog/public/tags/dataAlgorithm/index.html","3b7a27f16e64317daf3a19f4ccb0c013"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","6af84688eaf09c0f840b9a16bafa9ba5"],["D:/Blog/public/tags/docker/index.html","3c6ec07870e5034a359b4de60fb685d1"],["D:/Blog/public/tags/frame/index.html","41d1c00a4ca07b460b90c7cad65480c3"],["D:/Blog/public/tags/front/index.html","4aad3c5d5cea9197bbe89a561086d9f3"],["D:/Blog/public/tags/index.html","e4a988419bf2233066865570d88b9f04"],["D:/Blog/public/tags/index2.html","2cfc30e5cdd2398155f16c05d54ac0fa"],["D:/Blog/public/tags/io/index.html","cae7f89b2694e1bb73343610e146f27e"],["D:/Blog/public/tags/linux/index.html","cfe7e4a2cc9c1aacea2fb24bbc50e431"],["D:/Blog/public/tags/maintain/index.html","bbb5b3ebe22795344f231845f0dd3c2a"],["D:/Blog/public/tags/math/index.html","b1964f7070620adb3fadb9a68d12d418"],["D:/Blog/public/tags/math/page/2/index.html","7afa8d14a8e353142b3e6560871125b5"],["D:/Blog/public/tags/network/index.html","ec50866d28b4f5405e9c241413815f5f"],["D:/Blog/public/tags/project/index.html","c7ef8e2a7b0353fdcf563edbe0f25450"],["D:/Blog/public/tags/resume/index.html","266d4f1acacd667545738d6f7d175e1e"],["D:/Blog/public/tags/safe/index.html","4b524954a21e2ef9996e5eeff8a86fab"],["D:/Blog/public/tags/sql/index.html","4fea7806a2de17646ebb12173d769ec9"],["D:/Blog/public/tags/test/index.html","08b14f9ac53ea04254bb04e6b06c49b3"],["D:/Blog/public/tcpip/index.html","9ccfc77ff2df8574fd63acefa759f1dd"],["D:/Blog/public/template-method/index.html","69565d6dbfda49b516ebe081a004759f"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","b1d2b7d0f5dda2cf6b63400014280b44"],["D:/Blog/public/thread/index.html","550a7de8699853ad996809e945b8e864"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","90d7ecca06159b781014abae77d77ded"],["D:/Blog/public/ubuntu-set-ip/index.html","e534ae631ff073b70db3a9c86b4b6ed2"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","7ac40b4d1390df3891af4eb0d1fec4f8"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","16e26320a8be37e4ff5e6051f94bf6b5"],["D:/Blog/public/users-create-data-types-themselves/index.html","52b41f77e180d62c5524d07b59f7709f"],["D:/Blog/public/visitor-mode/index.html","c544703a343ec277257f719b7a3d1eef"],["D:/Blog/public/xml/index.html","81c2c6e4a56edb39453399ef8767f9d9"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","7fa086763bb60e425a2e6931fa127fdd"]];
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







