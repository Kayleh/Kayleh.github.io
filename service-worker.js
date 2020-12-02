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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","6bdec0c64619ebee8a342fc23c581637"],["D:/Blog/public/C-algorithm/index.html","00d8044145208266e7717c67f02dcc6f"],["D:/Blog/public/C-programming/index.html","ae30833a7549ef148e1a21ca52170a92"],["D:/Blog/public/Good-use-of-pointers/index.html","46cc0ae27b9a6364feab69d1afd9ac9c"],["D:/Blog/public/about/index.html","24a7d6579bd55c2ff32aef2537a21ebe"],["D:/Blog/public/adapter-mode/index.html","243a41c838b555df1b289fb6c4129788"],["D:/Blog/public/agency-model/index.html","a6502270bf49617783de87e22a4b2f77"],["D:/Blog/public/appearance-mode/index.html","d4eea94e56db1f9d9bd53f7808e5bd2c"],["D:/Blog/public/archives/2019/01/index.html","08bf325a5c2cb135de20018bf47ce206"],["D:/Blog/public/archives/2019/07/index.html","9dea4141d75528a7056034c97ab4c246"],["D:/Blog/public/archives/2019/12/index.html","0043312d24a1551cd12277bc6efdf1b1"],["D:/Blog/public/archives/2019/index.html","590d8b040ebdc6c3e08587329808ac88"],["D:/Blog/public/archives/2020/04/index.html","1c861e4ca89d921822d1f0265f808c63"],["D:/Blog/public/archives/2020/05/index.html","db648c4b30886e7f815884f2ca001118"],["D:/Blog/public/archives/2020/05/page/2/index.html","e5508a6ca2489b7952878c1cf6f73e5c"],["D:/Blog/public/archives/2020/06/index.html","1286c216fbc332a0de84184833cd148e"],["D:/Blog/public/archives/2020/06/page/2/index.html","ecc89ea6f48989471e9de2d88a8d7320"],["D:/Blog/public/archives/2020/06/page/3/index.html","e5a8d752f31b077cb1b4345412814439"],["D:/Blog/public/archives/2020/06/page/4/index.html","2e39e38bfac3561473728bc7b493ef72"],["D:/Blog/public/archives/2020/07/index.html","82bba885157f2099486125c3b302f57f"],["D:/Blog/public/archives/2020/07/page/2/index.html","2d6868e43dfd505547269d8d6fc63be6"],["D:/Blog/public/archives/2020/07/page/3/index.html","db0b0f277465de7c3d5caf131c3f18df"],["D:/Blog/public/archives/2020/08/index.html","13127397f95d9070312465771dc5b992"],["D:/Blog/public/archives/2020/08/page/2/index.html","dea56f5e579793b3302a1f8ef9a6e6f8"],["D:/Blog/public/archives/2020/08/page/3/index.html","75132e290175f8a13b51e2ed3e7fc1b6"],["D:/Blog/public/archives/2020/09/index.html","ebca25e603482bb3c6f81e5bed489fc6"],["D:/Blog/public/archives/2020/09/page/2/index.html","09051a0df4baaa54835336643057f425"],["D:/Blog/public/archives/2020/10/index.html","146c4fa09dc5902338866f79105504bf"],["D:/Blog/public/archives/2020/10/page/2/index.html","84e4e82235d6710876185bdadc63208f"],["D:/Blog/public/archives/2020/11/index.html","5297994945936a7291f76087f08345a2"],["D:/Blog/public/archives/2020/index.html","0ecc9808a8a34b4d3a7aea3d30aa774e"],["D:/Blog/public/archives/2020/page/10/index.html","845ba9e77d13318fe3d08d4d7333ae5d"],["D:/Blog/public/archives/2020/page/11/index.html","473a9bca6f7eb52a9ac6d9df541f5e23"],["D:/Blog/public/archives/2020/page/12/index.html","28e379fddf5728346c3c3b64f99ad8e0"],["D:/Blog/public/archives/2020/page/13/index.html","9839044348507058d5cab8aa9219208c"],["D:/Blog/public/archives/2020/page/14/index.html","65da237860dbc353582823cb4baa4268"],["D:/Blog/public/archives/2020/page/2/index.html","c42d546a877dbf2b194b73912328b573"],["D:/Blog/public/archives/2020/page/3/index.html","3932c17b8fa3973e48337b9efdb4ce11"],["D:/Blog/public/archives/2020/page/4/index.html","e6a203335c3011e327948f7de8bc6833"],["D:/Blog/public/archives/2020/page/5/index.html","598813ce49fe2b111384f3a26e5e4afc"],["D:/Blog/public/archives/2020/page/6/index.html","460a9d265398fbc95c4757b2747a5ebe"],["D:/Blog/public/archives/2020/page/7/index.html","7153834609e71b5cac32f87e42de3ec5"],["D:/Blog/public/archives/2020/page/8/index.html","7a4c5d84dfca404a883a75d7398c62d7"],["D:/Blog/public/archives/2020/page/9/index.html","fa58a2f80cf1d10068c42f2b453200ef"],["D:/Blog/public/archives/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/10/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/11/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/12/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/13/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/14/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/2/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/3/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/4/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/5/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/6/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/7/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/8/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/archives/page/9/index.html","c2a62db97ca3b8fdc59144e8764951eb"],["D:/Blog/public/array/index.html","23acce8fb9593ddb003ac7f6f524a21d"],["D:/Blog/public/binary-search-algorithm/index.html","41f039398d26b8f6b4a606c91184e5e9"],["D:/Blog/public/binary-sort-tree/index.html","2feb0eef8e4771cb309d509bfb4b9a9b"],["D:/Blog/public/bridge-mode/index.html","4cda2528cafb76e536d3b21ffbeeae7a"],["D:/Blog/public/builder/index.html","45c59710143e2f1d3d0555cc9fe3dbb4"],["D:/Blog/public/c-pointer/index.html","fe2518c14e40238bd0d8a73c90477fbd"],["D:/Blog/public/categories/C/index.html","cbb22f45a5626cbe1e86ddfe4bf54b2e"],["D:/Blog/public/categories/SpringMVC/index.html","e57660dae42869aad4a03ca24e56e2c7"],["D:/Blog/public/categories/index.html","ea6df26f49543a4118260663295aa8ac"],["D:/Blog/public/categories/linux/index.html","065f704fb81f27f10aa96d65263c1c07"],["D:/Blog/public/categories/分布式/index.html","327dd330fb4b6fffb38f29dddf4f29df"],["D:/Blog/public/categories/分布式/page/2/index.html","39c4df628cff34b878bcb94ef5ea5f06"],["D:/Blog/public/categories/前端/index.html","b85511e3759af6008f5a665ab990de52"],["D:/Blog/public/categories/设计模式/index.html","8333382e7b23fc5047eba3730163d69c"],["D:/Blog/public/categories/设计模式/page/2/index.html","9edd91a796330087c222c7a78b716622"],["D:/Blog/public/categories/高数/index.html","aacb035301362b350005da9f91693b28"],["D:/Blog/public/chain-of-responsibility-model/index.html","27ff9036a240a55329566d3ae6a35876"],["D:/Blog/public/chinese-and-english-switching/index.html","ee2ad676950be31408ae24296077cc40"],["D:/Blog/public/combination-mode/index.html","cdf5eb25b8d162904ce1c9c99e1cd230"],["D:/Blog/public/command-mode/index.html","b39fe60929c256ca08276adc2adb2c74"],["D:/Blog/public/common-commands-of-unix/index.html","1a19d545e35e6f3a4a6d96e8ff854cb9"],["D:/Blog/public/computer-network/index.html","ef55f554b5700fbb9d0a060da61f8b83"],["D:/Blog/public/concurrency-principle/index.html","29684935eb013e0648cab5c93da67fae"],["D:/Blog/public/continuous/index.html","cb13c8f17ae598288198d9cd73ebd35b"],["D:/Blog/public/contract/index.html","73b943ee77eb68bbe380071cb42195c1"],["D:/Blog/public/css/first.css","0ddceb48dc0cd49f45ee94706ed992a0"],["D:/Blog/public/css/style.css","1d0c80bc8b46207465d1b553352281c2"],["D:/Blog/public/cycle-structure-programming/index.html","b0d9eacb1150164b6f527698c41912d7"],["D:/Blog/public/data-structures-and-algorithms/index.html","c52b0c8edee6dc6c702615be607198a8"],["D:/Blog/public/deb/index.html","88ca385b969c904b62f159c7f425a715"],["D:/Blog/public/decorator-mode/index.html","ce017d774379d64296a7ac1f68a32885"],["D:/Blog/public/definite-integral/index.html","6520c247ddc5db08b7406c1bcf713df5"],["D:/Blog/public/dependence-reversal-principle/index.html","8288170fa0740967041d91287671c690"],["D:/Blog/public/derivative/index.html","1d0fb09c44f532fae2d116a1fc7b45af"],["D:/Blog/public/design-patterns/index.html","d88957fa54583a8b8088228ee6e303e0"],["D:/Blog/public/differential-equation/index.html","0dcbd245292b148416ca9529b2b56e96"],["D:/Blog/public/differential/index.html","1c471297151fcad6550907e68960c9f9"],["D:/Blog/public/dimits-law/index.html","50dc3202a9626b54a369f58f1ab3bc4a"],["D:/Blog/public/docker-virtualized-container/index.html","575c6e98a41d54756fb148b554a0ea66"],["D:/Blog/public/double-integral/index.html","f0571830dc96380e17a354c8a804c314"],["D:/Blog/public/dynamic-array/index.html","7f72b763fe4f9389db9747b04dab1e49"],["D:/Blog/public/encoding-algorithm/index.html","afabc1c199f2ad2a113b5b837acae1fc"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","a917d732bdf79dc75d831feae9f05e54"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","c60e2c2f57f3aafe756bef5082cedb74"],["D:/Blog/public/factory-design-pattern/index.html","a7ae91ba79000ab5551d5cc03967837a"],["D:/Blog/public/file-input-and-output/index.html","da5589f742fe1fb074e9760f5bc1b7e9"],["D:/Blog/public/flyweight-model/index.html","b951ef83239cf14981c44f6b24383ab3"],["D:/Blog/public/friends/index.html","e5498812a1d59a110d6097dd7da126ac"],["D:/Blog/public/function-graphing/index.html","71743e9e930cc43be7ab4796144d3a96"],["D:/Blog/public/gateway-service-current-limit/index.html","a02fcf8e1e1eafc1ec86ec364a792fa4"],["D:/Blog/public/gc/index.html","c556f925c190bcfd8c0bbf10354680c8"],["D:/Blog/public/generalized-integral/index.html","787ed64967b7bcb5cc8efb66577f8eff"],["D:/Blog/public/google8102e2f35ce9e391.html","5615a780f48041ba34ac77ff2b26f59f"],["D:/Blog/public/gulp-compresses-static-resources/index.html","aba4b420c70e3a18aafdde489a4dba98"],["D:/Blog/public/hash-algorithm/index.html","283ad7a120045b533b05c428944e5bbd"],["D:/Blog/public/heap-sort/index.html","fda9013a13b6a7b2c42356bc4057a359"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","2bced27d5e85e09ca1d782d7cf1453aa"],["D:/Blog/public/http/index.html","04c50f7d06501b630b24a44ea90a8d39"],["D:/Blog/public/indefinite-integral/index.html","78ce00202d676c2d2c6d76024c1a5332"],["D:/Blog/public/index.html","75cb031bb80c131b3a416d46f42493ca"],["D:/Blog/public/infinitesimal-and-infinite/index.html","d0950c42e80fb2adbfcfe54a7fbe8d07"],["D:/Blog/public/interface-isolation-principle/index.html","1e928c99efd71db40c730da88cd4bd9b"],["D:/Blog/public/intermediary-model/index.html","eb75175b3683294d735ae93ec7910891"],["D:/Blog/public/interpolation-search-algorithm/index.html","6d1c1d267828f2279f6bdab81b3f79d6"],["D:/Blog/public/interpreter-mode/index.html","e97c9f2a7fa2b3d268acbfcc8bbd3072"],["D:/Blog/public/introduction-to-computer-network/index.html","52fbb5abf7ebdf53a01cd0bac2dfac8d"],["D:/Blog/public/introduction-to-operating-system/index.html","88daa6d7af1e2744e09ee1bb52c28e84"],["D:/Blog/public/inversion-of-control/index.html","bdbd9f84b68aeada12690149ec39f953"],["D:/Blog/public/io/index.html","4bf31b56af3ae2c3787fdb3c734f57b3"],["D:/Blog/public/iterator-mode/index.html","eee28dae1b3301d786e00c6c69e209f2"],["D:/Blog/public/j2ee/index.html","cbb978b5fec6bc9e86f6cd9780d66393"],["D:/Blog/public/j2se/index.html","cceebd28543748c2d3ec2ee111e27545"],["D:/Blog/public/jdbc/index.html","6d53d5aa090834bf4d2b6a47a8f3fb43"],["D:/Blog/public/jdk/index.html","9577779f42d9daf7ac57637b369ae6c6"],["D:/Blog/public/jmm-memory-model/index.html","51cf63a216bd7d10c582fbb89f48bc2e"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","64e9c353d5372aabf36941d60ba0cb31"],["D:/Blog/public/law-of-robida/index.html","cfd4c1b244c68fdf7ecdc3bbc4b5e268"],["D:/Blog/public/limit/index.html","231fdb95cdb502fb99f3357e30ec15a5"],["D:/Blog/public/linear-search-algorithm/index.html","659990e6e0dbc6b3ac701e6a5f90a5b2"],["D:/Blog/public/link/index.html","3ddd8f6be02898a4ed6a9a4c285f533f"],["D:/Blog/public/linked-list/index.html","2becca11875384b34bc73df9a2aea652"],["D:/Blog/public/linux/index.html","9975db20a50167cbdbe0d6b40cbd1016"],["D:/Blog/public/liskov-substitution-principle/index.html","e160818e5c69d2a14062e7194054394c"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","164066e2a64679db9c726234e9997779"],["D:/Blog/public/maintenance-1/index.html","dba1c6d31f8440d5044b1551e2089e3d"],["D:/Blog/public/maintenance-2/index.html","4d8466e696abc556163d43c1c6168bd1"],["D:/Blog/public/maintenance-3/index.html","5ae4e90bd53f43082b85b7b44d7eca73"],["D:/Blog/public/memo-mode/index.html","93560ce3d43a879228bce7bb1a2ed1af"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","6832cbb1224aee7000bc6e197eb6cc0f"],["D:/Blog/public/multi-function/index.html","dac6dd343fc5d112ace7fe5b18014e15"],["D:/Blog/public/multithreading/index.html","64a30f8ac6ac31b833eca9496634b589"],["D:/Blog/public/mvc/index.html","b662a9c005f8b2054ce1fb8a08800d83"],["D:/Blog/public/mybatis/index.html","0dfe0aed9b2795528884bcdf2f7fbcae"],["D:/Blog/public/mysql/index.html","ba22d76fa1335a9f064d654cad566466"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","3befd007a2b4fa5c6b6524ad01c3e4af"],["D:/Blog/public/null/index.html","2ea19e317647b5cbf73df216a273ee74"],["D:/Blog/public/objectoriented/index.html","05057abaaad66894c60d4ffcf2cf1143"],["D:/Blog/public/observer-mode/index.html","ac3d1bfbe62d8f8f93245a21790b21fd"],["D:/Blog/public/operating-system/index.html","242d2c24834ce54ae23ca702a227f565"],["D:/Blog/public/page/10/index.html","7d1bde8ec5838e067ad45e85b465a4ac"],["D:/Blog/public/page/11/index.html","ef816f43323192a5211f2fbb3e3f4b4a"],["D:/Blog/public/page/12/index.html","b31b25be5fdea1dea061f48edac6e7df"],["D:/Blog/public/page/13/index.html","0b81c144118fda1b1e2bd6270234b1e4"],["D:/Blog/public/page/14/index.html","87e269fbd670edaa5fcba5ffd0a75bcc"],["D:/Blog/public/page/2/index.html","6e5f8f60f4cbaa22b3e909eec5d8e46a"],["D:/Blog/public/page/3/index.html","452ec65af4b7faae010532276b445c60"],["D:/Blog/public/page/4/index.html","ec27616d417395f1b2572e9475b60fdb"],["D:/Blog/public/page/5/index.html","1c3c1ffa762c62aa40a62eb3eafa3edf"],["D:/Blog/public/page/6/index.html","134abb2863403ff1257461e81ddb9de4"],["D:/Blog/public/page/7/index.html","bdc62fe9c4d269bf67b9e5790665efd6"],["D:/Blog/public/page/8/index.html","07ab417775b17f293dcf343786e2b650"],["D:/Blog/public/page/9/index.html","d0017834c8beb8fd973f5558e8bee5ff"],["D:/Blog/public/palindrome/index.html","46941ff08b4b24a12d97bc1039ff3b7b"],["D:/Blog/public/partial-derivative/index.html","b1031f21e5dcca3c313daf35b5aa11a5"],["D:/Blog/public/pass-by-value/index.html","48b6aef5dc7f9719ee375bf64f943fae"],["D:/Blog/public/pictrue-bed/index.html","520e0b0f5789edfdfebbc59d205d58c3"],["D:/Blog/public/principle-of-opening-and-closing/index.html","d2085a7e040a34e239650fdd1991155b"],["D:/Blog/public/principles-of-computer-organization/index.html","82b1889a0c23372b6b528a557318d309"],["D:/Blog/public/prototype/index.html","f20c3f7ab9b1d3ad313213c4ef23cfa5"],["D:/Blog/public/queue/index.html","37e324eedbefd11d47a0d29808a6dfbf"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","648fd4969538e30c29f00657a3adb14b"],["D:/Blog/public/redis/index.html","a00b15239de647d3118596a313444f16"],["D:/Blog/public/reflection/index.html","4717e89800ef50cfb1a66712623bb4fd"],["D:/Blog/public/resume/index.html","70d8d76f5a0fab186a0cfb3e59ae28a1"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","2c3872ce4a6f3a1f6e9bbbc11f0d8bac"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","d33744fa2ba76f0e1367bd974d96e609"],["D:/Blog/public/select-structure-programming/index.html","04dee10f55b5207ea465474cac7c1afc"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","327718118c9fa3209ceb28e36536eb03"],["D:/Blog/public/sequential-programming/index.html","e20ce42a2279900c25901ce32ea500b7"],["D:/Blog/public/series/index.html","a102099e7cbdb5ef6688bebc3da1dbf3"],["D:/Blog/public/single-responsibility-principle/index.html","716f757ed2035e6cc8d8f30d2e8e5067"],["D:/Blog/public/singleton-mode/index.html","186e3516affb33a68d8d4600c0290bd1"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","88a8e9589833e799ebe08c1f44435125"],["D:/Blog/public/sparsearray-sparse-array/index.html","5a99d2e04c639be1bffd50828d7a2428"],["D:/Blog/public/spring-architecture/index.html","ac9da95f7ed4823e00be7f441a86787e"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","bace6e53e88fdfe855d3698cfacc4346"],["D:/Blog/public/spring/index.html","11fde19179469c2e71b70f9eee7ed641"],["D:/Blog/public/springcloud-alibaba/index.html","1196e7964231138edacea47a98b253d1"],["D:/Blog/public/springcloud-bus-message/index.html","89b2c4fc5a6c40ba8cc5cebcb2e95283"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","71a69c089c93bf8431cdc295672a0779"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b2219deb1ec135ef84bd183073b9b44d"],["D:/Blog/public/springcloud-stream-message-driver/index.html","342f462eb334cca5976a00e9986135a5"],["D:/Blog/public/springcloud/index.html","d4678f5a4a8560941dd35012f5bbe670"],["D:/Blog/public/springmvc-environment-construction/index.html","34f6de53c187707027a23f071277d966"],["D:/Blog/public/sql-injection-attacks/index.html","a29900c9b096df3f49c830185a013b17"],["D:/Blog/public/stack/index.html","0bd9f5fe0fac778dac78ff586ef070a8"],["D:/Blog/public/state-mode/index.html","dac2b8f50ab5700bdb8b4e212d186ce7"],["D:/Blog/public/strategy-mode/index.html","e08d22303ee426d795c7ee8130d96104"],["D:/Blog/public/synthetic-reuse-principle/index.html","be063b47d1d0ecc7ef2d9c29a67c9c0d"],["D:/Blog/public/tags/C/index.html","abd63f9b2fab9d2ee74f0c48388c8ecf"],["D:/Blog/public/tags/C/page/2/index.html","18580e1fcd3e885b5a7ac6052f2dc5aa"],["D:/Blog/public/tags/Concurrency/index.html","cb39803dac146a37a50dd8b45e33e431"],["D:/Blog/public/tags/DesignPatterns/index.html","bf1caa0c79fd1f2df54b9f2f02c9cfc2"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","c4e0a7408d63e503b17ac58fe28660c3"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5e643127f2cb9283cca38005a611b693"],["D:/Blog/public/tags/DistributedMicroservices/index.html","5c9926b15dda087be815b69a89b2d9ad"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","a11dc0653b1f88b81f545de63dc2d6e8"],["D:/Blog/public/tags/Interview/index.html","321278a65d4dfb953dfc8e8686f3a4fd"],["D:/Blog/public/tags/Interview/page/2/index.html","0158ad9e54bb10b842b5be5b14430828"],["D:/Blog/public/tags/Operating-Systems/index.html","67ca4e4fcdb1ad8ccb79e37bafdf57ab"],["D:/Blog/public/tags/about/index.html","004338525f5a2ef9efc055827ca0bc52"],["D:/Blog/public/tags/ad/index.html","9435fc7b6f190ee9ac9366ea84553db9"],["D:/Blog/public/tags/dataAlgorithm/index.html","b97e669c9719c7c389e6d572714ca54e"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","3082a4da566638cb45ba0d766335a554"],["D:/Blog/public/tags/docker/index.html","c48f6775f43a2946dd39ed7dd46c3135"],["D:/Blog/public/tags/frame/index.html","56ef54c83cb3afb6ac42d781e0cbd3e0"],["D:/Blog/public/tags/front/index.html","aa53e0e3e5772f60cf1e3a970cfa2971"],["D:/Blog/public/tags/index.html","6f7f29a66d708d64af5d3566d11e6f9c"],["D:/Blog/public/tags/jvm/index.html","c530f4e30c9d379e9759a7583d5fe829"],["D:/Blog/public/tags/linux/index.html","dd2fa3fee4115c444443368e32e03ce0"],["D:/Blog/public/tags/maintain/index.html","f9c3e911d13c864f586b9748483702f9"],["D:/Blog/public/tags/math/index.html","5953b319f576aa67c23d2123779d3e20"],["D:/Blog/public/tags/math/page/2/index.html","c7daa4ca8ebed6a50e4297e663f5b197"],["D:/Blog/public/tags/network/index.html","60b26141c69077668b4ace513cc2dd9c"],["D:/Blog/public/tags/resume/index.html","47af5921d9e48aaaab4dc0ffd085259a"],["D:/Blog/public/tags/safe/index.html","8dd569c9d7f1bc19df0ce8f72423e45b"],["D:/Blog/public/tags/sql/index.html","e38ee27412c86179abaaa599036c2803"],["D:/Blog/public/tcpip/index.html","656b5e3ef62aa54a6b7da28d3673fdae"],["D:/Blog/public/template-method/index.html","1ed1dc96989b40df3db7e7cdd5c732bf"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","2ba466ba02e860eb10547d60e3991b8e"],["D:/Blog/public/thread/index.html","2f650d99a5df52cda0dbdec78a477d56"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","5a1bd892bbd5f21c244960f8096a788b"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","510a3ad37f1eccd17ef3946168e41d69"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","35df47acd54fea3984fa3511ef5e7a27"],["D:/Blog/public/users-create-data-types-themselves/index.html","1b92668af2a22c76a3f8e5ae9482ffd0"],["D:/Blog/public/visitor-mode/index.html","a5cc9efa52d97e304fb12cadb6e7796a"],["D:/Blog/public/xml/index.html","0d258e7682087163a13d2dbb47088f7f"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","64cb49be45c5110b441114b9b2a29a70"]];
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







