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

var precacheConfig = [["D:/Blog/public/404.html","beffb5ee04e7dff5b17e0221831ad827"],["D:/Blog/public/7-sorting-algorithms/index.html","a0b029d7bae8869980b20a0a6826df12"],["D:/Blog/public/adapter-mode/index.html","28741a4fc7c3491d01f1eb57f30540b0"],["D:/Blog/public/agency-model/index.html","2114afb724af94c834370084cdc3247f"],["D:/Blog/public/appearance-mode/index.html","d94c2b2058c3c140385505977e8c6d01"],["D:/Blog/public/archives/2019/01/index.html","21c56bd3da644245069abdf61d525641"],["D:/Blog/public/archives/2019/07/index.html","19b26c7ff367c472a19a817a9d8bf267"],["D:/Blog/public/archives/2019/12/index.html","1d2a1c067ce52787d2582d544492145d"],["D:/Blog/public/archives/2019/index.html","0db2d9f0067bbd9c5fcfaecc96124d8c"],["D:/Blog/public/archives/2020/04/index.html","630e2fa6a3e1918bb01f54f2d64457f2"],["D:/Blog/public/archives/2020/05/index.html","4ecd963307b0aef3552e86406fba4868"],["D:/Blog/public/archives/2020/05/page/2/index.html","3642f25175bcf9f5c4938d6c8b95a18a"],["D:/Blog/public/archives/2020/06/index.html","6898e826cbde988b42a68158e4d28bd4"],["D:/Blog/public/archives/2020/06/page/2/index.html","09dc3da735c6f27bc7915889789ca3a2"],["D:/Blog/public/archives/2020/06/page/3/index.html","339165a13dcb7bcea8f2c9b5b1f1ba54"],["D:/Blog/public/archives/2020/06/page/4/index.html","f3dd958e31630c251580b67673a754ed"],["D:/Blog/public/archives/2020/07/index.html","3189392bbe2f69895adf4d0babca4280"],["D:/Blog/public/archives/2020/07/page/2/index.html","880c428c26fe15bab14ea3da35f48704"],["D:/Blog/public/archives/2020/07/page/3/index.html","d958c5c96dd69576d878fc8c3c597075"],["D:/Blog/public/archives/2020/08/index.html","ca658a608b1ad864cc65b8bd0d81b50d"],["D:/Blog/public/archives/2020/08/page/2/index.html","ba72eaa204b8cfb0f6f2652d6368e8c6"],["D:/Blog/public/archives/2020/08/page/3/index.html","f3dfdde1a277db9aa71e377e59e26fa8"],["D:/Blog/public/archives/2020/09/index.html","49f3654235e7eac10759f5b83035bd39"],["D:/Blog/public/archives/2020/09/page/2/index.html","68b9a23a9cf63d9e6f3fe75829c542c9"],["D:/Blog/public/archives/2020/index.html","d0f633439b0a05462e0e221e91e75e36"],["D:/Blog/public/archives/2020/page/10/index.html","91318df4d0aef08fe6232219d1e2dba4"],["D:/Blog/public/archives/2020/page/11/index.html","8d8724119f3e0015472517a74c81471c"],["D:/Blog/public/archives/2020/page/12/index.html","14ebe15f96ab5f1c4069d686ed3f135c"],["D:/Blog/public/archives/2020/page/2/index.html","208b5d8370f1c9a3c294691ed2d49ee2"],["D:/Blog/public/archives/2020/page/3/index.html","5deda234d5ef5d3e1095f6059f8746f6"],["D:/Blog/public/archives/2020/page/4/index.html","9175293c5e3e11c856055a717baab27c"],["D:/Blog/public/archives/2020/page/5/index.html","fd571f7644d26913e0b316b1e6602a1b"],["D:/Blog/public/archives/2020/page/6/index.html","6315bd644ab8fd1cdf63dd9de6ab716b"],["D:/Blog/public/archives/2020/page/7/index.html","4fe6c8580e18268ef07ecf99e26385d6"],["D:/Blog/public/archives/2020/page/8/index.html","fc4ac232df8af376fe320c6f52ca71cc"],["D:/Blog/public/archives/2020/page/9/index.html","3937848012b561a31db2d15181c72df9"],["D:/Blog/public/archives/index.html","936168dc93c1bc1455e675b72f9e7663"],["D:/Blog/public/archives/page/10/index.html","7a461d6bfc41d00f626839a8d18d1500"],["D:/Blog/public/archives/page/11/index.html","34ce8a467741f963bb7a30d9e65caeb0"],["D:/Blog/public/archives/page/12/index.html","916c3cec5bd2ab1fa43fd9ae3e59d5b4"],["D:/Blog/public/archives/page/2/index.html","e4d29723acb1594a5fccced5444754ff"],["D:/Blog/public/archives/page/3/index.html","c0b01354133e0e6cedc47883b5386607"],["D:/Blog/public/archives/page/4/index.html","d4e14188bda007ba1c46fee709d8dc6e"],["D:/Blog/public/archives/page/5/index.html","0dfbbd0074d8006b98887661d1ed0bd5"],["D:/Blog/public/archives/page/6/index.html","8ddb26c914a76f1b07b92b101960657d"],["D:/Blog/public/archives/page/7/index.html","6a4ff6b05f20215a41f8b5557224604c"],["D:/Blog/public/archives/page/8/index.html","de815397b95afc2be6b81f7f6fc3ece6"],["D:/Blog/public/archives/page/9/index.html","faef57459ae46e92cbdb8ec8fa4fc31c"],["D:/Blog/public/array/index.html","49241a8f6a48b41c6a9d23c807a534a1"],["D:/Blog/public/binary-search-algorithm/index.html","11f09cd492024370cd852d8e65b85c7b"],["D:/Blog/public/binary-sort-tree/index.html","18a8aa775aae74f02ee0ad3dcd72797f"],["D:/Blog/public/bridge-mode/index.html","16fdd615aa32ea87d41caff0100b9193"],["D:/Blog/public/builder/index.html","9fd972e14bd6004993068f11c1322a33"],["D:/Blog/public/c-pointer/index.html","f307e754ffea9e854081d6ad896a26f2"],["D:/Blog/public/categories/C/index.html","d20094286613abe386420e22244c2ae6"],["D:/Blog/public/categories/SpringMVC/index.html","4813e02cfb60d7e4bd145b5f36c2373f"],["D:/Blog/public/categories/index.html","98fb7d2a29b4a6e8e1e58cc791c0c7b4"],["D:/Blog/public/categories/linux/index.html","445e6ca1a7e6061f5d7791aa7dde9826"],["D:/Blog/public/categories/分布式/index.html","622a049d3343010805092f20f49a1cde"],["D:/Blog/public/categories/分布式/page/2/index.html","1df9a53bd1d3acd7a3da0331dfac6ad5"],["D:/Blog/public/categories/前端/index.html","3a7ba480538aedb635a3d63e7b8b02e6"],["D:/Blog/public/categories/设计模式/index.html","bbaf87d384c4c4ba755325e0d5c25dc0"],["D:/Blog/public/categories/设计模式/page/2/index.html","6647c3f6b473930fa2b27dc787ec83e9"],["D:/Blog/public/categories/高数/index.html","50e37356ef1a7f0580883cf66677f37e"],["D:/Blog/public/chain-of-responsibility-model/index.html","3244f67f8dec2f0109516d94d10f4e20"],["D:/Blog/public/chinese-and-english-switching/index.html","caf745b32b36450fe0e253e811ae0b0d"],["D:/Blog/public/combination-mode/index.html","697da08d8b6ff6e38d73dbf43f4c1c6b"],["D:/Blog/public/command-mode/index.html","a4f0a795647d144c29febfb2eae9e008"],["D:/Blog/public/common-commands-of-unix/index.html","c867a980b3225a47c175af34beb2ad37"],["D:/Blog/public/computer-network/index.html","74bdd38976a820db4284ea0a5da61845"],["D:/Blog/public/concurrency-principle/index.html","c280b599d73f6d27368a4d3c70a7e737"],["D:/Blog/public/continuous/index.html","01f29bd983a955db2770dcffd24fc707"],["D:/Blog/public/contract/index.html","5458072fe802560e59df075a1850ef9d"],["D:/Blog/public/css/index.css","747c6d81e40ddfd2147efd4828011543"],["D:/Blog/public/css/var.css","f8592098bc97bb81f94df41fe4e953c8"],["D:/Blog/public/data-structures-and-algorithms/index.html","41bff91517023627d88031f24e0dec47"],["D:/Blog/public/decorator-mode/index.html","df6592f6ef974e01c1063bdfdb16b55b"],["D:/Blog/public/definite-integral/1601053742391.png","83f9a6853f9f3699aa9a2b1b795cda27"],["D:/Blog/public/definite-integral/1601055940188.png","874768b432eece5eefe993e934d31cef"],["D:/Blog/public/definite-integral/1601056351353.png","d0ce3ce9ec27ef4fcf60e1b330105399"],["D:/Blog/public/definite-integral/1601056797153.png","40627bc113eee963f7c511e88509ced7"],["D:/Blog/public/definite-integral/index.html","aa16c705de728717a7e1983baa8ea8e1"],["D:/Blog/public/dependence-reversal-principle/index.html","b2c66ec4b43ba5c50da701429b0d25bb"],["D:/Blog/public/derivative/index.html","0866be55548c580ff2b52d685fdc24ac"],["D:/Blog/public/design-patterns/index.html","5c1edf503855990f7eee7992b0ceba1b"],["D:/Blog/public/differential/index.html","89d8daa5e3dc64bb33fde50f23eac723"],["D:/Blog/public/dimits-law/index.html","f3095b8bfd20048a92e755ea294f4d1e"],["D:/Blog/public/docker-virtualized-container/index.html","72d1b432b2760863a14ab090155817c2"],["D:/Blog/public/dynamic-array/index.html","e972cdfcd9f3845c9696f27b0747aed2"],["D:/Blog/public/encoding-algorithm/index.html","97f4c70c91523e458ac9584cfdda0823"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","320393470caf8fb8816856aa8f4dc9ab"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","cb852a578657897c9f21b18042db1e67"],["D:/Blog/public/factory-design-pattern/index.html","d9f72c48d763ed8dc82d9e0595378bff"],["D:/Blog/public/flyweight-model/index.html","402be74294f0123c34931ad00becce28"],["D:/Blog/public/function-graphing/index.html","d563f2b7bfd5c7eaea96f05079a54bb5"],["D:/Blog/public/gateway-service-current-limit/index.html","4cfa33e5ea3c450114fa7171129b30bc"],["D:/Blog/public/gc/index.html","c0e4c9c6884f5173bf8e177be8a42fce"],["D:/Blog/public/google8102e2f35ce9e391.html","add4a13f6f5514666f3289c7a51fc8ef"],["D:/Blog/public/gulp-compresses-static-resources/index.html","795cec2e0e6a22187cea89ad52434ba0"],["D:/Blog/public/hash-algorithm/index.html","115efdf3ec313edd348f85aabd11e8c7"],["D:/Blog/public/heap-sort/index.html","504e5c1c2997a2f857bbf603160f1405"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","8bd628ecb85846dfc8a5b414ef6eea6e"],["D:/Blog/public/http/index.html","6391fada0c3e09d6103d07b871ec2c30"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","3d803b96dc71762541415bfa7d7835f0"],["D:/Blog/public/index.html","941cc6409f2bcf782a94725a00b0d686"],["D:/Blog/public/infinitesimal-and-infinite/index.html","eb32796c5c88fdb9a811877c6b852e6e"],["D:/Blog/public/interface-isolation-principle/index.html","3b253709c867192f27d9758d680a3933"],["D:/Blog/public/intermediary-model/index.html","306600572afff010772375e0ffbeadad"],["D:/Blog/public/interpolation-search-algorithm/index.html","436fc2176b6c39e321c684c7d9e95b62"],["D:/Blog/public/interpreter-mode/index.html","5588e4df440fa2051347cbf1a868b143"],["D:/Blog/public/introduction-to-computer-network/index.html","c356e4379bf4e9174022043f0216bfa8"],["D:/Blog/public/introduction-to-operating-system/index.html","ae8d72936f5b092e5020939246e77378"],["D:/Blog/public/inversion-of-control/index.html","c3099b1805dc90605aab0b7859b5dc63"],["D:/Blog/public/io/index.html","7c58b0965c6ab0982cd6654b84de2e27"],["D:/Blog/public/iterator-mode/index.html","cda4fd8d776c8de918c2818419f79d99"],["D:/Blog/public/j2ee/index.html","2f449d723be9f39788b40ed4e568b6b3"],["D:/Blog/public/j2se/index.html","20f724aa13df51a9580bf179353a0aa6"],["D:/Blog/public/jdbc/index.html","018accedd8f9faafd14dac735e2b8e90"],["D:/Blog/public/jdk/index.html","cb0c845d5cad685225955c67db1d787f"],["D:/Blog/public/jmm-memory-model/index.html","141945a96afc7f094b6c833bc6f47586"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","9bddc27e4358704d9f69136371e74fc9"],["D:/Blog/public/law-of-robida/index.html","d33c59fc6cef8b3e64197d33b8b545e0"],["D:/Blog/public/limit/index.html","49e99ee81c8212aff512ca45789ddcf2"],["D:/Blog/public/linear-search-algorithm/index.html","cd6a1acecf39a561d2aa7999a0caea17"],["D:/Blog/public/link/index.html","3a1ecbb1eebf81227735a6abc9333b43"],["D:/Blog/public/linked-list/index.html","08c8b2b01dfa3f1a77ae27c7ec7810fd"],["D:/Blog/public/linux/index.html","23d41f3f5938becf33c213acbb3f1ae9"],["D:/Blog/public/liskov-substitution-principle/index.html","79777c834f92d3c0e3b721e40b150ebf"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","d1c43ae850c0df4e70c6e5e7101eb154"],["D:/Blog/public/maintenance-1/index.html","54ac6dd0481b034caf2d70f1f78c4e60"],["D:/Blog/public/maintenance-2/index.html","524e16847cf6203715eaa8b17d87fae1"],["D:/Blog/public/maintenance-3/index.html","8d00f53c92f0f4943584b18355ba33c4"],["D:/Blog/public/memo-mode/index.html","7f6407bb57e8bd9e89bf53ab4f66b2fd"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","c58e9755d3b3ff4b09f79c59ca37a883"],["D:/Blog/public/multithreading/index.html","fda1b0194af352c2b2f377e4828bf053"],["D:/Blog/public/mvc/index.html","80660192bfa1a7471f3838cc0d8ac22e"],["D:/Blog/public/mybatis/index.html","ec5efd8bcb9928bad4e54da7f140c739"],["D:/Blog/public/mysql/index.html","25f68b8380b8dbfede85ffa8bd2ce80c"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","372bec368037e6bcc9709c4d14450a4c"],["D:/Blog/public/objectoriented/index.html","48ab55e858f2572e201adf33f86cb75a"],["D:/Blog/public/observer-mode/index.html","e1ae07f5fca405b39f0198e1ace949a0"],["D:/Blog/public/operating-system/index.html","23d6da4f9245022d807a4743eff8de48"],["D:/Blog/public/page/10/index.html","7bb3af2e7a37e49165830c4580de324e"],["D:/Blog/public/page/11/index.html","baec552fa81cb874304740882eff931a"],["D:/Blog/public/page/12/index.html","80213ed659c2e5fe25959e83aa6d902f"],["D:/Blog/public/page/2/index.html","86c46ed90f5ca52731bea24e98615af7"],["D:/Blog/public/page/3/index.html","8b9a402528e0d349ee682819dfc3a31f"],["D:/Blog/public/page/4/index.html","70efe936249f9ff6708fdbd2d3704e79"],["D:/Blog/public/page/5/index.html","98ca8c5c5800ed2527449ed409b0f2bc"],["D:/Blog/public/page/6/index.html","1ab7b05f7be09988c6984067fd5b4129"],["D:/Blog/public/page/7/index.html","d1103da0ce5cbfccd672d45d8c1b2cd0"],["D:/Blog/public/page/8/index.html","d4fdb745f44122f02de7e6c15912943f"],["D:/Blog/public/page/9/index.html","4d79c8c0d2319ec31f6a4822a7be49fe"],["D:/Blog/public/palindrome/index.html","1789dcf6c782e39198606e540ae87095"],["D:/Blog/public/pass-by-value/index.html","4b9d71657feff63795a08982f73460b6"],["D:/Blog/public/pictrue-bed/index.html","2c2a8126583d5762702a92e1b63f284c"],["D:/Blog/public/principle-of-opening-and-closing/index.html","29b11c1bb1d66f09d59352f6d2001761"],["D:/Blog/public/principles-of-computer-organization/index.html","fd92d3db791cf9b9631e7ea9951aebe9"],["D:/Blog/public/prototype/index.html","c3e803353427cd7199eb6acc8c2ee763"],["D:/Blog/public/queue/index.html","56c35b19204444afaa87ca68128adbbc"],["D:/Blog/public/redis/index.html","6f082255e87640e5703bd571513cd59f"],["D:/Blog/public/reflection/index.html","b5be3b638deebbaf1f031852480b4d62"],["D:/Blog/public/resume/index.html","742543be70946ae73ec98284caea7674"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","b53de9a06f04da1b132b6b8a53494740"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","9fd7e9d9e493263cfa97f392ac9929fc"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","8526403004f4bbb321b16b76172918e2"],["D:/Blog/public/single-responsibility-principle/index.html","f65d524b63205d193bedb2f2fcf5b8b7"],["D:/Blog/public/singleton-mode/index.html","6a5585b67b0868232e3fb5f1b393e3e4"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","1a763e50f4e767e54ff52a9a08154d28"],["D:/Blog/public/sparsearray-sparse-array/index.html","0601d1986a100027453f0d21ce17aace"],["D:/Blog/public/spring-architecture/index.html","8ae7dee26306722e2bd5b7ca10fd54cf"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","21afabfca57895b2509bc56f1e099263"],["D:/Blog/public/spring/index.html","cde297f9e454189a7cb4904bffec11ba"],["D:/Blog/public/springcloud-alibaba/index.html","7d82b7b6d52a18c1b3336379bcc16aaf"],["D:/Blog/public/springcloud-bus-message/index.html","36fcd89a4bdf4c779354c2cbfd40d964"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","d16883314a6a4051c396ada6710ae7cc"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","6477f00ad9e98fab668a85642248ac63"],["D:/Blog/public/springcloud-stream-message-driver/index.html","3a4e4d7306e21634c551c92b5eb71f60"],["D:/Blog/public/springcloud/index.html","986ab6e361734e1d676d33fb5d03f38e"],["D:/Blog/public/springmvc-environment-construction/index.html","034f4cd539618da1389e07ab7b817094"],["D:/Blog/public/sql-injection-attacks/index.html","da4eb29779fe9efc925b0d006ad87e0f"],["D:/Blog/public/stack/index.html","cb98d4f81a7d2a425a9133680b3ad12e"],["D:/Blog/public/state-mode/index.html","2743b3b234299521bcb2d82e8fab8867"],["D:/Blog/public/strategy-mode/index.html","c07b54d23b02cd8c9d3d13554ef248d3"],["D:/Blog/public/synthetic-reuse-principle/index.html","7cebedabfafcfe9a2ae4e1e5c2f45888"],["D:/Blog/public/tags/C/index.html","25f06570f3a1e3de37d167abef4441e1"],["D:/Blog/public/tags/Concurrency/index.html","6925cbe5103b715bab33bbd53c79b6b2"],["D:/Blog/public/tags/DesignPatterns/index.html","343743bb3ef9acc065eabd163668a0b8"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","b16096d8e9fbb170f2862b795580d113"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","14425f0d092af82cf2f2df959b9bd762"],["D:/Blog/public/tags/DistributedMicroservices/index.html","c30503beeb7793f74923e158821f73b9"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","dfade9748fb20ab221499399066dd03a"],["D:/Blog/public/tags/Interview/index.html","03e144c19be6f67be1cde6765d932a9c"],["D:/Blog/public/tags/Interview/page/2/index.html","cd5a83183d6e5d8bc391b39850f4e5d6"],["D:/Blog/public/tags/Linux/index.html","02a338eb983d2c92e6f57b1b5b9ae811"],["D:/Blog/public/tags/Operating-Systems/index.html","71ca5117c41479d249e9802ae5a6d83e"],["D:/Blog/public/tags/about/index.html","e6bd2bb179b261b02bd3eb5c04ba5786"],["D:/Blog/public/tags/ad/index.html","85318b8d68438db4d2d793f017a8aaef"],["D:/Blog/public/tags/dataAlgorithm/index.html","37ceb5f1f1d9022daac068a596834244"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","ac5b94e9b52d1775999a85e317fc83a3"],["D:/Blog/public/tags/docker/index.html","a0f6d6cb6f83621a3919f08413675a5e"],["D:/Blog/public/tags/frame/index.html","77c61f76a3a57b3d63b504ac05b33b3c"],["D:/Blog/public/tags/front/index.html","dc2db196f276d7e9011f8f4f88fefba3"],["D:/Blog/public/tags/index.html","bd27f7f84b752203ab826a06f75bb2fb"],["D:/Blog/public/tags/jvm/index.html","be95d0e722a349b5991aa86b6881ac25"],["D:/Blog/public/tags/maintain/index.html","96b50580a4c3ff022a40e2828c260eb7"],["D:/Blog/public/tags/math/index.html","e8c5288476bb975a9a99291f35737fd1"],["D:/Blog/public/tags/math/page/2/index.html","a302f8090c6f7dddf842de2c79b49be6"],["D:/Blog/public/tags/network/index.html","28b1fc78ac4cefb0615a422ea6dd7134"],["D:/Blog/public/tags/resume/index.html","70b82ee7654f36dc1bacfc46ad1b0d1f"],["D:/Blog/public/tags/safe/index.html","7a3f4fff3d37da86546e7e9cbe7e36c8"],["D:/Blog/public/tags/sql/index.html","fa6f20dfdcd8b2872a84934117cbe372"],["D:/Blog/public/tcpip/index.html","36e792edaa4ba21bb9adae9879c268e7"],["D:/Blog/public/template-method/index.html","2d0d8da58e80ef00ea5961d546d3af30"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","9a150a0ecada17d926354d1fd194671d"],["D:/Blog/public/thread/index.html","bdb59b09973468234860fd6273993feb"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","1f712a9814280c1c934034972e5b832b"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","6f4b864256b464c60cb29fcdae6ee210"],["D:/Blog/public/visitor-mode/index.html","a9796de5079de0d586c2443c23f4b767"],["D:/Blog/public/xml/index.html","94c56adc82cc547d0d32ae2a78ef9f43"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","c46e7b6a2587df632d142ba3ddc78bd1"]];
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







