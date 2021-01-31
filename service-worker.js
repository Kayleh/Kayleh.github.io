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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","84acfe9d161c090634cf25704784f225"],["D:/Blog/public/AIO-blocking-model/index.html","50f0a3f9bbdb32b957205356861906a3"],["D:/Blog/public/BIO-blocking-model/index.html","c92cb0cb1eb8f3ee648f3613e12e1707"],["D:/Blog/public/C-algorithm/index.html","766e513b942961fcc04ddbacb5562131"],["D:/Blog/public/C-programming/index.html","61a8bff5d97c4afeef974dc538148fa8"],["D:/Blog/public/Good-use-of-pointers/index.html","458a293c9c7b72b1118f177652f43ed8"],["D:/Blog/public/IO-model/index.html","93f91b202cfb91b4f89b381f428b4f12"],["D:/Blog/public/IO/index.html","a4528adfe7f593e550a46ab2c8eff5fe"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","2cef436af6a4aec8ae01e6559fd01170"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","ecc2ad5f8de5325da39e6c7b551c7e0a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","efac18958dabe65894b6613cdb6480c7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","578cb13d492c961556465a637c8df65a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","fab1e537224925b9c1944d1b36d98d9c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","f767e59fd88c7af60c30b3b1e2b80998"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","8ccf6cb3af559410b43207ff89c7fdb8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","3140731ac6a3d6c201d1f6b3572f18d9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","693896ec109d417f2374417bd2750367"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","524482d0a60b13bf454eb1dccf678efd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","0acf1402742b195afc8f5b87a2914b5c"],["D:/Blog/public/Java-network-programming/index.html","9861b97ad1f0e66363abb67928fd115f"],["D:/Blog/public/NIO-blocking-model/index.html","8fb7d1fd8717118d8cb3c05a8c02f25d"],["D:/Blog/public/Native-method/index.html","b38377554285858f2b80d7666c9b2d8f"],["D:/Blog/public/Sandbox-security-mechanism/index.html","51a565031a6da2577c78313bb6c2d735"],["D:/Blog/public/SpringBoot-startup-process/index.html","22386123557e269990268b3d7fa6a9a1"],["D:/Blog/public/about/index.html","cfaf7ffaa0f6285f2fffdf7ba2e4767c"],["D:/Blog/public/adapter-mode/index.html","8a58d284f8178b88dc240d0231895583"],["D:/Blog/public/agency-model/index.html","34851db07e0ae6ccc12f67593d3d6e5d"],["D:/Blog/public/appearance-mode/index.html","96a825b095d38ff94e8dcc4bdc5c33b6"],["D:/Blog/public/archives/2019/01/index.html","84cd8ed2932308517595e403f81df385"],["D:/Blog/public/archives/2019/07/index.html","779989cb7f21017e726a544cd527e778"],["D:/Blog/public/archives/2019/12/index.html","35b8d2546c11262138c6eb71f690c8ab"],["D:/Blog/public/archives/2019/index.html","680e95ec0d67ad91531af9a4d7dcdbd5"],["D:/Blog/public/archives/2020/04/index.html","47b8bf83e14686c41ff02c73e918d396"],["D:/Blog/public/archives/2020/05/index.html","2043359e32ea039a77fd2753ab483241"],["D:/Blog/public/archives/2020/05/page/2/index.html","54228d0e2b4d52581c13bafe887d115c"],["D:/Blog/public/archives/2020/06/index.html","0375b4502184dcda038cd014fe41ba78"],["D:/Blog/public/archives/2020/06/page/2/index.html","7d6ea0a2cd1a8d844064c1e6f9b3f9b2"],["D:/Blog/public/archives/2020/06/page/3/index.html","a5b4e9f97bb0d5d52a9bf48f06fc9bca"],["D:/Blog/public/archives/2020/06/page/4/index.html","1bcab619e0b2e06d85728fa6e2d785f5"],["D:/Blog/public/archives/2020/07/index.html","be0ecd73d4589c1a8e8f90d03c9eb7c9"],["D:/Blog/public/archives/2020/07/page/2/index.html","1111428e57aa1273d15c6bfe81d3ac1b"],["D:/Blog/public/archives/2020/07/page/3/index.html","ae0cebcf265743213f667b863f973eb8"],["D:/Blog/public/archives/2020/08/index.html","632c4603ab58a5cfd80570ed588207c3"],["D:/Blog/public/archives/2020/08/page/2/index.html","e6cec464adf3e19cd2ea1d77077584ea"],["D:/Blog/public/archives/2020/08/page/3/index.html","ae362b18f98d1b3347fbea7fb8a62440"],["D:/Blog/public/archives/2020/09/index.html","f39e43103dbc7c2f7609d917826f2475"],["D:/Blog/public/archives/2020/09/page/2/index.html","c785bce0cf187983748e6a07a97bf3d2"],["D:/Blog/public/archives/2020/10/index.html","ae650f658cd2cd920ebda6c4df068eb4"],["D:/Blog/public/archives/2020/10/page/2/index.html","f4c0050c04bed75465d98141375feb9c"],["D:/Blog/public/archives/2020/11/index.html","a759dafdc86bd3baed95be7d7a2882a5"],["D:/Blog/public/archives/2020/11/page/2/index.html","5937788d25bc199a4a82cd3f90cd953c"],["D:/Blog/public/archives/2020/12/index.html","46eb47138d1a0b834f5bd57bdb190752"],["D:/Blog/public/archives/2020/12/page/2/index.html","239ba22ea9acb5739faa377ea5d2f9a3"],["D:/Blog/public/archives/2020/index.html","63ad3d2d7a1e111ae2214d4a71b2f471"],["D:/Blog/public/archives/2020/page/10/index.html","e1a5c6655d8bdf3f02dc9ae2c9f6171a"],["D:/Blog/public/archives/2020/page/11/index.html","e2a494181fbc8db6f38b77c5de0a4de5"],["D:/Blog/public/archives/2020/page/12/index.html","2eb5d8f0ff15fe6c3c7dfcfda12e154c"],["D:/Blog/public/archives/2020/page/13/index.html","8009445356b840ff9b3a3246f9cc27aa"],["D:/Blog/public/archives/2020/page/14/index.html","6ddf23c0acb5821591d5e553ee32f80e"],["D:/Blog/public/archives/2020/page/15/index.html","c5f5309cbc6bb7606c9da68ccaf8961e"],["D:/Blog/public/archives/2020/page/16/index.html","debcf8b6c8bc0fec835118409528e237"],["D:/Blog/public/archives/2020/page/17/index.html","07054b69f62dc94c0c95adc69db04042"],["D:/Blog/public/archives/2020/page/2/index.html","e6f1a920f1eeb3a2f98ec8f74e0cc917"],["D:/Blog/public/archives/2020/page/3/index.html","34d2d2c8d561dfd564608c2058aa233d"],["D:/Blog/public/archives/2020/page/4/index.html","b533be1c5b3c3afb45aa9e3169d956f7"],["D:/Blog/public/archives/2020/page/5/index.html","e087a4f78ea8726f1d0b4aa2f6663e2e"],["D:/Blog/public/archives/2020/page/6/index.html","d99cd3dc6ff49510df9713ec4a81426b"],["D:/Blog/public/archives/2020/page/7/index.html","cd3e8c03f54e49d907476f89dfd27f2a"],["D:/Blog/public/archives/2020/page/8/index.html","6ab12df1fcfc7d241802faba82803927"],["D:/Blog/public/archives/2020/page/9/index.html","203989bfa5c30842cf23e39bcb69df1a"],["D:/Blog/public/archives/2021/01/index.html","cde64d06b16b9d61132c3b9d61e58801"],["D:/Blog/public/archives/2021/02/index.html","ecb703c0c47af97d6b14ff2270ea745c"],["D:/Blog/public/archives/2021/index.html","c0cc53d98aed3c47640c3840b7fd03f7"],["D:/Blog/public/archives/index.html","f015a0fc08cc8de310be963b263f76a5"],["D:/Blog/public/archives/page/10/index.html","9792279e8afc4792a30fb55cd290aa35"],["D:/Blog/public/archives/page/11/index.html","de44f7b177d665b9cb4c4b9d17c8f1e7"],["D:/Blog/public/archives/page/12/index.html","3065bf5e4723415f8b13234abb5ee326"],["D:/Blog/public/archives/page/13/index.html","ad5de17a75bbc0df3004adf95af0df2d"],["D:/Blog/public/archives/page/14/index.html","7220955cdeabed2e4026f55d14d55fff"],["D:/Blog/public/archives/page/15/index.html","638b2b9dba73348d0fc5f14d9c43b669"],["D:/Blog/public/archives/page/16/index.html","6789b0e4593f93901a3b1b3a1ad34510"],["D:/Blog/public/archives/page/17/index.html","7a53f4c449cdd2f5a4037e386e978ca1"],["D:/Blog/public/archives/page/2/index.html","d19fb62fe26cca88de835c598434f348"],["D:/Blog/public/archives/page/3/index.html","e5c8dccdbf79fa8a8f2f84f7dae3b80b"],["D:/Blog/public/archives/page/4/index.html","a708bf423b0437c9011bc34dc233fc35"],["D:/Blog/public/archives/page/5/index.html","40041eb8e0aa89b546847bfefb5ce0a9"],["D:/Blog/public/archives/page/6/index.html","7c408d2e333cbb9a0b278f55ba6863d0"],["D:/Blog/public/archives/page/7/index.html","d21693c366553e0f54abdfd76b1eae28"],["D:/Blog/public/archives/page/8/index.html","77cfe4f486e648d61f3e7cddade0ddb3"],["D:/Blog/public/archives/page/9/index.html","03737d9924981fa3280cb5cd46bd9ed7"],["D:/Blog/public/array/index.html","2a9fdedd9fdfd986e9d4c1f7a19b7d05"],["D:/Blog/public/automated test/index.html","3d2a127a8950b03334d0001866b751b2"],["D:/Blog/public/binary-search-algorithm/index.html","205a48b6c6c664f2e4eec124151d2334"],["D:/Blog/public/binary-sort-tree/index.html","19f5fc5cae31b11ad8079598f64cb027"],["D:/Blog/public/bionioaio/index.html","8a2fbf0ee67492d31bf1e53b7e7ba7a5"],["D:/Blog/public/bridge-mode/index.html","c664b819020d2d597f178bb884800669"],["D:/Blog/public/builder/index.html","8a20009a953e17a6c1dff059cc01ea0c"],["D:/Blog/public/c-pointer/index.html","9671306c146ed496e8a5f6869f855d38"],["D:/Blog/public/categories/C/index.html","22d9a3d014aa533faef26f56c165dcb2"],["D:/Blog/public/categories/SpringMVC/index.html","de93f0ff9a1d3eae575aeeb01abb077c"],["D:/Blog/public/categories/index.html","d9cf48c1e738514464ceae49c99f4a66"],["D:/Blog/public/categories/linux/index.html","9205bf029fb8406e8addd2646484f489"],["D:/Blog/public/categories/分布式/index.html","950637e030f7c7bc07de50eb11f536ce"],["D:/Blog/public/categories/分布式/page/2/index.html","9044adde01b831396b7f35396249b077"],["D:/Blog/public/categories/前端/index.html","76c598ac03defd384b7fe57580ce2fa4"],["D:/Blog/public/categories/设计模式/index.html","35d5ca97db4dc7b82f9c708f2b1a08ad"],["D:/Blog/public/categories/设计模式/page/2/index.html","0326631fb208c8244ff5284ddca1d89b"],["D:/Blog/public/categories/高数/index.html","a2d21702eff59cf693a9c6ddb74d6e58"],["D:/Blog/public/chain-of-responsibility-model/index.html","99795e8864cc4e2055b5b5262a10009d"],["D:/Blog/public/chinese-and-english-switching/index.html","d09a30fede8a06b80a395c56e71ce820"],["D:/Blog/public/combination-mode/index.html","81dda988e6b0faae65277be142546b88"],["D:/Blog/public/command-mode/index.html","e6723bf9228a3ae621844da52fab0807"],["D:/Blog/public/common-commands-of-unix/index.html","3f9f4bb7300f6c5c5d2422b44ceba084"],["D:/Blog/public/computer-network/index.html","48b5c783243c65d1050549b66842f780"],["D:/Blog/public/concurrency-principle/index.html","1df2257326980d906e25da4b0d744923"],["D:/Blog/public/continuous/index.html","01bd92e3ba830f2174045f5b1d229488"],["D:/Blog/public/contract/index.html","4834d73608b45bd82fafc5ace5353867"],["D:/Blog/public/css/octo.css","cf6ae854264586dc0b55a6050e6fc2b9"],["D:/Blog/public/cycle-structure-programming/index.html","2dda703379eb53c48c6b1a10924675b2"],["D:/Blog/public/data-structures-and-algorithms/index.html","e26af56e5e6b1a9d2448bbd86c8bf5e5"],["D:/Blog/public/deb/index.html","2e0e10e0c731006badefa4663fd384db"],["D:/Blog/public/decorator-mode/index.html","bf9014cc630270593b1478dee539228a"],["D:/Blog/public/definite-integral/index.html","1d2d4a2282ca1a4d37c7488f36812a31"],["D:/Blog/public/dependence-reversal-principle/index.html","7575bc41c0e113fe1d6b05cd522b0496"],["D:/Blog/public/derivative/index.html","f1bf282f6550285b19718bd4911d9f7b"],["D:/Blog/public/design-patterns/index.html","282c1129893ae5130b427c4f0b61b242"],["D:/Blog/public/differential-equation/index.html","4b813c775dc37a22b0ee6c6469219358"],["D:/Blog/public/differential/index.html","830edb154126e51197347b7df0a545a4"],["D:/Blog/public/dimits-law/index.html","ab5a975662a5bfebdb13136fe2ce1a40"],["D:/Blog/public/docker-virtualized-container/index.html","e5a169b5ddbeb7922bfee88224d1defb"],["D:/Blog/public/double-integral/index.html","b7c932b1d6c7c37c17f9c89f2ed2a507"],["D:/Blog/public/dynamic-array/index.html","393b3c2658081c010eed33cce2bc3e44"],["D:/Blog/public/encoding-algorithm/index.html","cd4bf063e58ac11d075cc357b01a727b"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","a29a03445d78c9c304174517d64bf77b"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","766826b09c05ac18885c589ee551b5b8"],["D:/Blog/public/factory-design-pattern/index.html","5891ef8bb9e6068d1a949e973efccfc1"],["D:/Blog/public/file-input-and-output/index.html","25871daa7b3935a920ea95627d3c7477"],["D:/Blog/public/flyweight-model/index.html","d1914e3d09fc153c33522cecb536c4f4"],["D:/Blog/public/friends/index.html","73e6aa21ffc2dcc7459fb75f868ec276"],["D:/Blog/public/function-graphing/index.html","5581ab3621f636069a5cbf860b043ec5"],["D:/Blog/public/gateway-service-current-limit/index.html","3d738b20c2021eadb6a8c41f5a39acc3"],["D:/Blog/public/gc/index.html","3cf99e6fac3708096a52fc88a85ebd39"],["D:/Blog/public/generalized-integral/index.html","78735a8b0dfec2fbef634048236d6811"],["D:/Blog/public/google8102e2f35ce9e391.html","bbcd853f6b00a2cf0990f9f4e892781c"],["D:/Blog/public/gulp-compresses-static-resources/index.html","4137d91b77e1090620eaeb6ed77e699c"],["D:/Blog/public/hash-algorithm/index.html","def70fac63addd2ea7fcaf6feb4eee36"],["D:/Blog/public/heap-sort/index.html","9b0975a2f2b6539d1629d0f22e195b08"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","515ad1e3bb6f197d530b7cc496baba7f"],["D:/Blog/public/http/index.html","ed394a9897a6e6a1f8e288ea33e2cc2c"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","ff733e450443c8d702ae3c0070c60b9e"],["D:/Blog/public/index.html","c40e4a5056adc64f25f4cefbf36eb65e"],["D:/Blog/public/infinitesimal-and-infinite/index.html","27fd7a0784ac49ac933593b1c85e843e"],["D:/Blog/public/interface-isolation-principle/index.html","b6dead2d715a3feeb67ccf11779caa4b"],["D:/Blog/public/intermediary-model/index.html","c07a21cc9fa264037b54a95d1c62c7d2"],["D:/Blog/public/interpolation-search-algorithm/index.html","78c09113ef348b80b444dd71b14ea0fa"],["D:/Blog/public/interpreter-mode/index.html","d0e3af3c9cfed4818f6c77778333ffa1"],["D:/Blog/public/introduction-to-computer-network/index.html","0954bb92f78d3e556871009ff60d03e3"],["D:/Blog/public/introduction-to-operating-system/index.html","9c854ebe2e05c0002944c4d7be9a385c"],["D:/Blog/public/inversion-of-control/index.html","c444b51343202900f620a54556f73170"],["D:/Blog/public/io-Interview/index.html","758b061b9d33a906950d237488490904"],["D:/Blog/public/iterator-mode/index.html","7485835fa225239a4ae65b416aae136b"],["D:/Blog/public/j2ee/index.html","b3882e7e46c7ea84971566f3ca1a27db"],["D:/Blog/public/j2se/index.html","3c3eb12afd3255c037298c181cfbf6f4"],["D:/Blog/public/jdbc/index.html","1bd08daaad377c825fe9b97943b957f1"],["D:/Blog/public/jdk/index.html","10ca6173b0c4d46e1fa1c3bb73a2f626"],["D:/Blog/public/jmm-memory-model/index.html","ea3bd67a1ab0be7cfd4a6a36255a7b3a"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","0fd8308b12f5e5e50776272b1fd6a3fb"],["D:/Blog/public/jvm/index.html","852ba61c0e2720b5f654f1de4064b6df"],["D:/Blog/public/law-of-robida/index.html","b1bcef6b9262ce986210e136807ec343"],["D:/Blog/public/limit/index.html","bee8db1cc6d3c87e76ec6bc96aad88db"],["D:/Blog/public/linear-search-algorithm/index.html","a45510c7903531fe4e2ffdd3fd31a977"],["D:/Blog/public/link/index.html","4111b2f7bdb57c68872867cbf968b1c7"],["D:/Blog/public/linked-list/index.html","f267a9308711a3244cb2364938fc6898"],["D:/Blog/public/linux/index.html","ee639203dda98f18f03edb7389ce4e04"],["D:/Blog/public/liskov-substitution-principle/index.html","3b557018219591795fee8668b4799043"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","bc0713044774cf050558d8254effadac"],["D:/Blog/public/maintenance-1/index.html","07d38ffa97b7f7846ad02c69f4d85b7e"],["D:/Blog/public/maintenance-2/index.html","bbf4fc6868bd2285c10ad6c14fb19ef2"],["D:/Blog/public/maintenance-3/index.html","f6864371f845049ae57e6b39446ba97f"],["D:/Blog/public/memo-mode/index.html","ef48b4ae856b66089aa306e9f037ae78"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","0fb6c1a6a9012c857a50b99aa951456e"],["D:/Blog/public/multi-function/index.html","d9986bb3c7be376bf9aba5fbf3d2591b"],["D:/Blog/public/multithreading/index.html","b38308643ff84035274df9a75ab5d25a"],["D:/Blog/public/mvc/index.html","a993eeecbd703789bd9843bc05164de5"],["D:/Blog/public/mybatis/index.html","41880d917f74111b424fcc0f7462944a"],["D:/Blog/public/mysql/index.html","7ffd7b82a1c6b1a01c92325920be908f"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","c3a171e432d26d0796ae4127201d29d4"],["D:/Blog/public/null/index.html","61933f6ecf060aa2ef455400b78452d4"],["D:/Blog/public/objectoriented/index.html","87d40f7e61676939c9ccad56cd7cf09c"],["D:/Blog/public/observer-mode/index.html","cd6a06cb4e7893dac131202fba24ba56"],["D:/Blog/public/off-heap/index.html","03c9ff93ffeb91ad92b6c1f21c793227"],["D:/Blog/public/operating-system/index.html","189a58021d10eb832ad31a15e612ab06"],["D:/Blog/public/page/10/index.html","649a8f88a0034f293e3954a5efafe555"],["D:/Blog/public/page/11/index.html","32c08fceb23f0c2418c61a22f696fa79"],["D:/Blog/public/page/12/index.html","44d51b165682488d10c1beed02615ba7"],["D:/Blog/public/page/13/index.html","565e70b6927a4ddac6d584e6f97b9a7e"],["D:/Blog/public/page/14/index.html","f980d3b0d09a4082935facf8f5abd4ab"],["D:/Blog/public/page/15/index.html","2b882cbb45d577f366211f49d16a2920"],["D:/Blog/public/page/16/index.html","bab33d35f4fcc93e28a3709cd1994c7d"],["D:/Blog/public/page/17/index.html","4c5ddf185feec7f59958dca584afbea6"],["D:/Blog/public/page/2/index.html","a24a8dceb5b49c190ee4f19c44311b4d"],["D:/Blog/public/page/3/index.html","ac0677d405e7586c42ea047f21dce322"],["D:/Blog/public/page/4/index.html","5d7a47a4a1029bf57acc92478e318dfc"],["D:/Blog/public/page/5/index.html","f7200420113a48c1912ccd272dbe7c62"],["D:/Blog/public/page/6/index.html","25651cf1d17e97430de95ae16f58116f"],["D:/Blog/public/page/7/index.html","db3cc228c5b6e9a1dacb14e3b76cbfca"],["D:/Blog/public/page/8/index.html","b77e762b09eb6553a0106e379c53caad"],["D:/Blog/public/page/9/index.html","da79da60625a9b3e8b6ed046df73182a"],["D:/Blog/public/palindrome/index.html","c15f23eb1c0cc7c9afdd800e98d200f6"],["D:/Blog/public/partial-derivative/index.html","c504137fa75ffc75989e82d39410056e"],["D:/Blog/public/pass-by-value/index.html","0776b83b1d5a0c06e77850efad8b2c99"],["D:/Blog/public/pictrue-bed/index.html","4133141a41cb3a59338c220938e0615c"],["D:/Blog/public/principle-of-opening-and-closing/index.html","adeedd7c11185d8c13c688fc84e6d293"],["D:/Blog/public/principles-of-computer-organization/index.html","c5fe9b56f5d10f4d3a3efda46f8bb826"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","7eb5de76391a1d3746479169e76eecf1"],["D:/Blog/public/prototype/index.html","50d88c2bad71be55e6b250b23e277920"],["D:/Blog/public/queue/index.html","002fe8c5d9b714f5eb1f9ddec3f60008"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","b27506375c654414626cdec5cba481b2"],["D:/Blog/public/redis/index.html","5c593420604386b8d535e162475f3f4b"],["D:/Blog/public/reflection/index.html","46c980024dfb18e791f2d20a6b8231a8"],["D:/Blog/public/resume/index.html","f1eca052ce1db72f0b390387c98f6e94"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","21ff54c068875944384ac6cdde95644a"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","ab37c7d632689994da6f3d06ae9b719b"],["D:/Blog/public/select-structure-programming/index.html","7e117849eda670e69c7ab47005bad6bc"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","54f674718bc30c88e413d3d97457ad33"],["D:/Blog/public/sequential-programming/index.html","8d6d51aa0088fcf9445b542074334a1f"],["D:/Blog/public/series/index.html","f6a4243e8fd02033ec27714bbd1ed8f9"],["D:/Blog/public/single-point-login/index.html","478b133db3bce0f238905e764f96cd3c"],["D:/Blog/public/single-responsibility-principle/index.html","6e6c5d807705684f9cb0abf037f5abc0"],["D:/Blog/public/singleton-mode/index.html","c36ede87375626669a9b520f94aa7918"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","a7a8dd7f51ce2eed4a94f37bb5dcde14"],["D:/Blog/public/sparsearray-sparse-array/index.html","36a1f34dec7df910772b48cf73379f34"],["D:/Blog/public/spring-architecture/index.html","537c912bd470d31655c509d31bafe62e"],["D:/Blog/public/spring-relate/index.html","d9de85debd7aaf014631ebd539e1458a"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","3693d42415f93c1a8fab86fefb32e0c0"],["D:/Blog/public/spring/index.html","f095b22ce3b20f2dd19ea286b8e34e69"],["D:/Blog/public/springcloud-alibaba/index.html","3eac6d53402fd9eae5e6bd068ff77639"],["D:/Blog/public/springcloud-bus-message/index.html","f685fa3c48ed8b9ad16929be35b41bb4"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","8d8ab7404e10a239ae55d043207b2c54"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","f86a3020379c965910e16c6aa091c68b"],["D:/Blog/public/springcloud-stream-message-driver/index.html","74f73c89b459424135f643dac38734f2"],["D:/Blog/public/springcloud/index.html","a2199c27fb46d79bf844eaf57c38eeb7"],["D:/Blog/public/springmvc-environment-construction/index.html","4aa63ed6a61b7a1745f895be50caa979"],["D:/Blog/public/springmvc-work-stream/index.html","055e9b296fc956fbc04b9bd3ce001812"],["D:/Blog/public/sql-injection-attacks/index.html","c71ddd512f39c0b084de6e73e5ba40f8"],["D:/Blog/public/stack/index.html","823d36494a7324d3da1d792c7d59c991"],["D:/Blog/public/state-mode/index.html","5d5b4328ec08da8733ec069510ca1809"],["D:/Blog/public/strategy-mode/index.html","6dbeb391a639f781de5b67add4aa227b"],["D:/Blog/public/synthetic-reuse-principle/index.html","d121c5633ca32b60e7b3e70436a53c96"],["D:/Blog/public/tags/C/index.html","a0299bdd48c059c6265e4b6138948aaf"],["D:/Blog/public/tags/C/page/2/index.html","6bede8b3be64db94c2f5323ad058eb63"],["D:/Blog/public/tags/Concurrency/index.html","9f35d96f28547405ad0b80248ad2a796"],["D:/Blog/public/tags/DesignPatterns/index.html","7efec66f2082169f9d9f82e504742a77"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aead0ab22c7bf134e550739f2c33211d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2e22551126fc9d09c0583b5ecf7ffee0"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9df5afd448338fec72e55598595f8011"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","518f30fdfd965bd63f73fc1d02dcfc8d"],["D:/Blog/public/tags/Interview/index.html","a624b4339819f538d0e851de81348876"],["D:/Blog/public/tags/Interview/page/2/index.html","598232e27ce555dff6f109040ead4e73"],["D:/Blog/public/tags/JVM/index.html","92d6c8fb9ed239630cf999238313ecf0"],["D:/Blog/public/tags/Operating-Systems/index.html","d3e7cf52da4911b30cc81006ded210f6"],["D:/Blog/public/tags/about/index.html","85377009f8d0dcb84b3cf3c051c6ffc1"],["D:/Blog/public/tags/ad/index.html","0096c9cccfeb78653b5da551d91fe23c"],["D:/Blog/public/tags/dataAlgorithm/index.html","8c901710033b744ba33ccc1725306d38"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","a1fcab41101f93eafea773c4f3514596"],["D:/Blog/public/tags/docker/index.html","b641c2e5b66c5ff18cccb847af7fbf2e"],["D:/Blog/public/tags/frame/index.html","051bd7058ab8ce6030c081e1a0f21a2f"],["D:/Blog/public/tags/front/index.html","69e2c9c4f01794640226ffd64dafacef"],["D:/Blog/public/tags/index.html","a55480b8a4a444a3442ff1085c1b5836"],["D:/Blog/public/tags/index1.html","3f211f6273ac6f6d0dbb999ca056c676"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","64809de15e711e36062fb8aedac4340f"],["D:/Blog/public/tags/linux/index.html","cccf95439399ccec099a90ef83e64619"],["D:/Blog/public/tags/maintain/index.html","0f5911ef9f1cbb6d3fe2b533dc87928f"],["D:/Blog/public/tags/math/index.html","8bea8c2b2f5e0e2871e1b2050dc4aa6d"],["D:/Blog/public/tags/math/page/2/index.html","b9c865c6cc3bb46c13dada9a6b1986fe"],["D:/Blog/public/tags/network/index.html","c95a030768844fdd8116c67e4c363bec"],["D:/Blog/public/tags/project/index.html","2002a3e99360c01555b11a00335d8fb6"],["D:/Blog/public/tags/resume/index.html","42708916a636bdc9b197e9dc1e250b1f"],["D:/Blog/public/tags/safe/index.html","5f6923b1e86572d607e8d5193904f405"],["D:/Blog/public/tags/sql/index.html","c4dbb9a4ee4203f5b835b57633950588"],["D:/Blog/public/tags/test/index.html","6df79b50bf315213a2c8374c0919cb2b"],["D:/Blog/public/tcpip/index.html","468a4e2c5d14957b3c861f1e86bfc252"],["D:/Blog/public/template-method/index.html","7c7a65b9061f6e15f6e6979935c08c1e"],["D:/Blog/public/test-case/index.html","ecf09c0420dd9bf99a746fd76887789e"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","54270af1020d7a98e7cfd7b2f21e577c"],["D:/Blog/public/thread/index.html","dbe8bbebdd696a04c60c3bfd3f4632b1"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","a309c0bf4466ca191469215902073973"],["D:/Blog/public/ubuntu-set-ip/index.html","9eecc7bb078b56832270838a8a99879f"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","e8cc5ac982f1562d5156654a248461d9"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","5dfcab36d2c71c19215bac465ab1a207"],["D:/Blog/public/users-create-data-types-themselves/index.html","329b38e54412a0de9a33557914eba216"],["D:/Blog/public/visitor-mode/index.html","562e3f862d9f19731a8c90a0d6b8178e"],["D:/Blog/public/xml/index.html","c16e7f6f898441537e0ff7fab1506678"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","26cb81b41004215d1c7cdd088b2389b6"]];
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







