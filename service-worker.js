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

var precacheConfig = [["D:/Blog/public/404.html","5cdfae17a79dd2cf5c2a2cc8dee893d1"],["D:/Blog/public/7-sorting-algorithms/index.html","366cfe44ca4d527135fb9a380aa6aa51"],["D:/Blog/public/adapter-mode/index.html","00291c2c00284c6ee403c87bf9a1d3bc"],["D:/Blog/public/agency-model/index.html","6ae6b78f9d26bccdce7b0434f263d97a"],["D:/Blog/public/appearance-mode/index.html","e0424e7e7353891f73eb88ef72fc0a39"],["D:/Blog/public/archives/2019/01/index.html","53b2410ae7b370feb54dc816839ad424"],["D:/Blog/public/archives/2019/07/index.html","a1d3da65f37ab45362aa2b2346993616"],["D:/Blog/public/archives/2019/12/index.html","bd0a8821484f6ab9466b89924326cc9d"],["D:/Blog/public/archives/2019/index.html","ea4054e1628282b7cc5c8afd161a8c4e"],["D:/Blog/public/archives/2020/04/index.html","67fb9af64201ca5f96994e97ebdf5928"],["D:/Blog/public/archives/2020/05/index.html","41c7aaa84eeae2506bf76df1ba5218eb"],["D:/Blog/public/archives/2020/05/page/2/index.html","a486b1c8c91734bc810f188cb08dfcc6"],["D:/Blog/public/archives/2020/06/index.html","49c4b82e5d69afcdd8e9f352ed677528"],["D:/Blog/public/archives/2020/06/page/2/index.html","6dd8a09207d67f0ca2fe0a4861b44643"],["D:/Blog/public/archives/2020/06/page/3/index.html","80ec1a0f745b534ee9b8a37d0eec648b"],["D:/Blog/public/archives/2020/06/page/4/index.html","2207ade8a0586787b67593ac88090aac"],["D:/Blog/public/archives/2020/07/index.html","89b10b23e1244983d98c0519c4c86b44"],["D:/Blog/public/archives/2020/07/page/2/index.html","5e6f1b4bdc53a00accc49bd90b1471fe"],["D:/Blog/public/archives/2020/07/page/3/index.html","2b83e21a520bcdb4c672137abfd7ace0"],["D:/Blog/public/archives/2020/08/index.html","58080c0390ac95545f39d1d7d976a8e9"],["D:/Blog/public/archives/2020/08/page/2/index.html","9724a9a658d60153151f0aad2dc2ccf8"],["D:/Blog/public/archives/2020/08/page/3/index.html","072a7555f31424b1ca7382a70c75821f"],["D:/Blog/public/archives/2020/09/index.html","b7269896eba32d0656554fb478ad32b3"],["D:/Blog/public/archives/2020/09/page/2/index.html","0751347da5a488f70e9dd77c90e787cd"],["D:/Blog/public/archives/2020/10/index.html","1abf0b44540ff3171e92816fc67dee50"],["D:/Blog/public/archives/2020/index.html","bf663d729fb2553b6e3db4c1c105de38"],["D:/Blog/public/archives/2020/page/10/index.html","4ec290f69b9faf2434db9b28311ef2c9"],["D:/Blog/public/archives/2020/page/11/index.html","3b3ec5e8aeb867bd98ea4c5dd4586d5f"],["D:/Blog/public/archives/2020/page/12/index.html","d7d085f3663cd94c7c34a8de9752f800"],["D:/Blog/public/archives/2020/page/13/index.html","e6cb86d08ef8b25eb1899a8b6e7fbd7f"],["D:/Blog/public/archives/2020/page/2/index.html","880da210d2c8c81475eb0e440a06959f"],["D:/Blog/public/archives/2020/page/3/index.html","7662012c065b00b801a023e042e22c92"],["D:/Blog/public/archives/2020/page/4/index.html","6e54ee346a61ac8bbb8ec60f8b5e58cc"],["D:/Blog/public/archives/2020/page/5/index.html","dc6484ca4e73fae1a7b94990bf6e39b7"],["D:/Blog/public/archives/2020/page/6/index.html","0f8087ba08f495257c01c85ce1c2b4a5"],["D:/Blog/public/archives/2020/page/7/index.html","660e76d1e7bb8792c479de510659150e"],["D:/Blog/public/archives/2020/page/8/index.html","a8d9b83d119f4a9336fff620fac73b54"],["D:/Blog/public/archives/2020/page/9/index.html","31ef8abdafae9596e8e56aca774893b2"],["D:/Blog/public/archives/index.html","dae81896c709894f89293e522e5a9933"],["D:/Blog/public/archives/page/10/index.html","8a634e86de1ffe454db006b91d8f9ee5"],["D:/Blog/public/archives/page/11/index.html","f8ae48f04725c7be72ad66427bab2a17"],["D:/Blog/public/archives/page/12/index.html","2e6ce8d0cef2a650a3cbda53daa2d791"],["D:/Blog/public/archives/page/13/index.html","6424d3bd97b69e5212e03228cdff44d0"],["D:/Blog/public/archives/page/2/index.html","a8d102db15a66b87d9143e521b28e8ae"],["D:/Blog/public/archives/page/3/index.html","035c4db3f9aeeaa71860585cc87fb35a"],["D:/Blog/public/archives/page/4/index.html","3f400f69e0ffaf5a6f6937a2b13c6dec"],["D:/Blog/public/archives/page/5/index.html","ca49f022820551a3c2434b0fd3b1d2f7"],["D:/Blog/public/archives/page/6/index.html","dd6c8f46e056348d596638a0fd37a701"],["D:/Blog/public/archives/page/7/index.html","8988d0ee223dec0bc1b1dfa19d11537d"],["D:/Blog/public/archives/page/8/index.html","0f471dc18137183717f7f7b2312e9ad0"],["D:/Blog/public/archives/page/9/index.html","e6ef4831bc8533958c3af59b19f9ac1a"],["D:/Blog/public/array/index.html","a9e4339406bd3ca3e5846b1707902035"],["D:/Blog/public/binary-search-algorithm/index.html","d7e04d2f70d1eab2e1cc1464610aa85d"],["D:/Blog/public/binary-sort-tree/index.html","819f71ef7ba00264f70475ea9c6b6a08"],["D:/Blog/public/bridge-mode/index.html","6c7ba90a38e7c6968d72cdd26ebf1564"],["D:/Blog/public/builder/index.html","98368c3f6bb599d0fbbaf29732b91705"],["D:/Blog/public/c-pointer/index.html","f1799a297a7e485d6ec909ce24cf411c"],["D:/Blog/public/calculus/index.html","5e5acae848363ccffbeb9b754b6d91f8"],["D:/Blog/public/categories/C/index.html","66ca3a91cd267b6caf6bf5ef65032d50"],["D:/Blog/public/categories/SpringMVC/index.html","89b840e9ded2b7ef9e9d82034027abe7"],["D:/Blog/public/categories/index.html","0f145fbd6abf0ec6738b22a01c1de2db"],["D:/Blog/public/categories/linux/index.html","f94a1d12a046daa3ffdc2b603f29958f"],["D:/Blog/public/categories/分布式/index.html","c8b8e1d50be620df8f25c332e40a1af9"],["D:/Blog/public/categories/分布式/page/2/index.html","eed504765837bad444e5b1886eb053f9"],["D:/Blog/public/categories/前端/index.html","f6d1f24519969d6dce4ce8cf7f4c6333"],["D:/Blog/public/categories/设计模式/index.html","f7cd61e17fad156125e5a85126939808"],["D:/Blog/public/categories/设计模式/page/2/index.html","50ebe3b2fcdc1c98b57b1d69fe01bd75"],["D:/Blog/public/categories/高数/index.html","1b74fba6d583dcb4e7a7e0a52fc2b97d"],["D:/Blog/public/chain-of-responsibility-model/index.html","2f295af7fdd05ac46d20b5e68ca539c4"],["D:/Blog/public/chinese-and-english-switching/index.html","2e7f8538c37f56e1d6313f2996c3e42f"],["D:/Blog/public/combination-mode/index.html","ec768778f66a7678d624d265ba28d383"],["D:/Blog/public/command-mode/index.html","ffebc7061ba9934a0d6f62058bf1e31a"],["D:/Blog/public/common-commands-of-unix/index.html","6f061302cacb86c4c4f34cb0fa49ef33"],["D:/Blog/public/computer-network/index.html","6aefa45908b1edbe73fe81af79981e1a"],["D:/Blog/public/concurrency-principle/index.html","caec8e4b29c9b018e742782ea08aa0ba"],["D:/Blog/public/continuous/index.html","a048a22445b64e1a015af9d4cd6a3ce7"],["D:/Blog/public/contract/index.html","fd3cc225c17a6dcf7db1cda62024c1ee"],["D:/Blog/public/css/index.css","a69d0d9824b742160795e8a1ea79407f"],["D:/Blog/public/css/var.css","8930c26a6c3978e65a72c2c8d1c47694"],["D:/Blog/public/data-structures-and-algorithms/index.html","79337b53e1889706b2675ff4b69b9359"],["D:/Blog/public/decorator-mode/index.html","209fd5a1d7a0961ef8c7b264942b954d"],["D:/Blog/public/definite-integral/index.html","3f0a43e07c9c05e7ccebf4a5955f3dd3"],["D:/Blog/public/dependence-reversal-principle/index.html","359bc50bbc9a66a04656be81fa0c67b1"],["D:/Blog/public/derivative/index.html","0e7bcf77beb1333062f93d767f53597b"],["D:/Blog/public/design-patterns/index.html","b365e6ad3c5b69201febfae905038691"],["D:/Blog/public/differential/index.html","2831a0b91504a9b446739904a5862b70"],["D:/Blog/public/dimits-law/index.html","38996f5c30e941db62daf8a393a23d0d"],["D:/Blog/public/docker-virtualized-container/index.html","ee8d780ad5611037d15ce78d1f46e242"],["D:/Blog/public/dynamic-array/index.html","492f789d7beca59966c33e0150ad0a07"],["D:/Blog/public/encoding-algorithm/index.html","24a5d37dffe730aca49605b7e04d81f6"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","043a2e88e7d31c9c644869f46b26cb0c"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","bf9747cb5c5c0c9531efc45d30d77fe2"],["D:/Blog/public/factory-design-pattern/index.html","5e89cf7fbd7956c2cc7570190711568c"],["D:/Blog/public/flyweight-model/index.html","6f67b0fd9f6a3b4fcac11c9a1b82bed6"],["D:/Blog/public/function-graphing/index.html","409e28e31224918ded7a5091b858dae7"],["D:/Blog/public/gateway-service-current-limit/index.html","2e8ba34f2874a1d2249713d87b51587f"],["D:/Blog/public/gc/index.html","25ffd0596f4838beb64b402b6a76dd27"],["D:/Blog/public/generalized-integral/index.html","522ca9df9c6848572cdfd7943202d49d"],["D:/Blog/public/google8102e2f35ce9e391.html","17c13e2b191a2ac18def9ec35944f234"],["D:/Blog/public/gulp-compresses-static-resources/index.html","0b4cde80c486d09a4495c3de662ec2b6"],["D:/Blog/public/hash-algorithm/index.html","a3f53edd5a1cf61a10700049053d0bab"],["D:/Blog/public/heap-sort/index.html","df801b68bcbb933985b8a2b1deaef6bc"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","57f3cee2eed9bf241cba09e99e35806f"],["D:/Blog/public/http/index.html","e35aa82d36eb306d86304604e89e660f"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","b37748d91ee7f98069fd534302ad65ee"],["D:/Blog/public/index.html","0fe3e5d9b321d7bfff2559b912285f44"],["D:/Blog/public/infinitesimal-and-infinite/index.html","035830fc6320700315b61ceac3c06157"],["D:/Blog/public/interface-isolation-principle/index.html","8d99d4bac55b4ffa5493257792f8e9fe"],["D:/Blog/public/intermediary-model/index.html","eefba8924cc97dffc3b7196d10881cf4"],["D:/Blog/public/interpolation-search-algorithm/index.html","001cdfe0a1bed2c3a537fd61cae09917"],["D:/Blog/public/interpreter-mode/index.html","aac7f97665e39f47bef8b3009a4a7a70"],["D:/Blog/public/introduction-to-computer-network/index.html","6dcea4a6438e290e310a0c2ec95390ca"],["D:/Blog/public/introduction-to-operating-system/index.html","272a731fc553a5422dd4dc96ca1eed1f"],["D:/Blog/public/inversion-of-control/index.html","15dcd5b492ce9aae60fb037ad3ff8bb8"],["D:/Blog/public/io/index.html","25d4717ad23ef7a0dccb20b2c2e30a59"],["D:/Blog/public/iterator-mode/index.html","d9a1de7ef3cc976b495e34ade50fbccf"],["D:/Blog/public/j2ee/index.html","02a0df887e148e8153c02741507ed98d"],["D:/Blog/public/j2se/index.html","8a2a98fa2d080accbe810e684e7b832b"],["D:/Blog/public/jdbc/index.html","b1a09a1231cd46d2120cdbcad149d30f"],["D:/Blog/public/jdk/index.html","5e057ae08cb37dea3e927820fee8df20"],["D:/Blog/public/jmm-memory-model/index.html","45e6cba25669a6c5d252c7c4c37ab76f"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","2fb24e12dbf79ae082526a004f100785"],["D:/Blog/public/law-of-robida/index.html","b6e239b1bd6d1bde7f02a715a924e44d"],["D:/Blog/public/limit/index.html","bdf7991094444ab7540f64a0405deea3"],["D:/Blog/public/linear-search-algorithm/index.html","fb8e84fa1e0a6c5de8b1b0427c6a6bb7"],["D:/Blog/public/link/index.html","2ace5c19539c0b22199de316abc3c4db"],["D:/Blog/public/linked-list/index.html","5d019acb2a4113f3c21a6be0e56770dc"],["D:/Blog/public/linux/index.html","5e77b0b910947927b4869e665b86930a"],["D:/Blog/public/liskov-substitution-principle/index.html","c5f460b77eb5fb65e980e52b3c355f40"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","ef5616366f1569bb4bead7231d7c41f8"],["D:/Blog/public/maintenance-1/index.html","f4f5d4c139c4fe7a1ca61b0ecedf5634"],["D:/Blog/public/maintenance-2/index.html","952c917ca2398ad801e1829a972f239d"],["D:/Blog/public/maintenance-3/index.html","538182d0ca83328845c0337420f977d1"],["D:/Blog/public/memo-mode/index.html","1189bca147178ee6c52a098a0526de01"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","a7994ccb435c062c63a86b393b6a2760"],["D:/Blog/public/multi-function/index.html","7183afc151b39d5338cfe7f8c249449d"],["D:/Blog/public/multithreading/index.html","249e8f47d4b453fe43565f30e21fe204"],["D:/Blog/public/mvc/index.html","05f767c4ca6f21a80a3e1679dc119243"],["D:/Blog/public/mybatis/index.html","4784f75195be64d35a065221e3a7f062"],["D:/Blog/public/mysql/index.html","bb6e176ed062cf2700fcd55aa0c75142"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","87bfde5ab615cb43afb6e78ec1e4b13d"],["D:/Blog/public/objectoriented/index.html","aa7bedbbd064e7c25718779157b0b9fc"],["D:/Blog/public/observer-mode/index.html","cc7d5359bb944d046f25440eb909bfa6"],["D:/Blog/public/operating-system/index.html","41356ba8361b44df02e4db211bcad46e"],["D:/Blog/public/page/10/index.html","ef1701974910d555578d59265f8a63ec"],["D:/Blog/public/page/11/index.html","dd96af99a288b383143a150f4f08a277"],["D:/Blog/public/page/12/index.html","b733e88b22dca24120a9875394619959"],["D:/Blog/public/page/13/index.html","fbe76882509ebadd8de0a422748357a4"],["D:/Blog/public/page/2/index.html","b02f6fbfd2f22d8f5beafaa60a0eb594"],["D:/Blog/public/page/3/index.html","5431e328acdb4c0e8bdb4a7dcd02d604"],["D:/Blog/public/page/4/index.html","de78f5270adbae1497381cdaa6dcc909"],["D:/Blog/public/page/5/index.html","4722e948b372540b6791a84d9711e978"],["D:/Blog/public/page/6/index.html","1416491224ee5a7801af2e6dd3b4ced2"],["D:/Blog/public/page/7/index.html","6be60dc909cbbaf0ff5b7d0dc48403bd"],["D:/Blog/public/page/8/index.html","c878a6333eac292eda41fabb7a9ca645"],["D:/Blog/public/page/9/index.html","d958a0c23205d176be36b04f1202d6d4"],["D:/Blog/public/palindrome/index.html","ae9a9c028ebacc5361eff1d2c00fc1f3"],["D:/Blog/public/partial-derivative/index.html","14204d3ff7c45e6a76bc63a2319f4ff2"],["D:/Blog/public/pass-by-value/index.html","d817978bc5a24abbcc37b2bb6328da11"],["D:/Blog/public/pictrue-bed/index.html","2b2b7ea60767249114cf873039955d5b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","29385ae7d636da2faedc165af4697a74"],["D:/Blog/public/principles-of-computer-organization/index.html","5c8b08509053880825a685b57d61376f"],["D:/Blog/public/prototype/index.html","12b29ccc1880f348581c5edf2cd7f2b0"],["D:/Blog/public/queue/index.html","63f88348a2fdc172770992e0ffe116b3"],["D:/Blog/public/redis/index.html","a36fe69b0d08c087e2b0a53be4ccc883"],["D:/Blog/public/reflection/index.html","b84abb61bedd22d3918a5e49324f9020"],["D:/Blog/public/resume/index.html","3740e2c618111ce307584fca3e238e7f"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","88d622f0ced2d8b10da656870e4ad9d2"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","61366fa1c6a00789ac00b672df1ff55b"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","67c6ebe32f57bae4c6ee4fd855f8a493"],["D:/Blog/public/single-responsibility-principle/index.html","af43dbe55d87d910e0b3837d90ed77f7"],["D:/Blog/public/singleton-mode/index.html","37f80d56dfea76a249963cc2a30fdb10"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","af58161f8cbaf00fc95910a96e95474e"],["D:/Blog/public/sparsearray-sparse-array/index.html","7ff06f25f93e30891c9d0a818da9470e"],["D:/Blog/public/spring-architecture/index.html","3c24a51d5a94c641944ca51d1ca6f508"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","45f81c3c7c4281569642c30080a6a762"],["D:/Blog/public/spring/index.html","f08401a51d0fc4d594ccdacc5c6e5a63"],["D:/Blog/public/springcloud-alibaba/index.html","cbaf05cd69fd06171d47424aa727fccc"],["D:/Blog/public/springcloud-bus-message/index.html","b7c205f9be6f73ffbbfc26faffda231b"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","9a9f1edd8f1d068b5f8a89fee54544c0"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","fb489be5adac4b328b365a1d929d1d2c"],["D:/Blog/public/springcloud-stream-message-driver/index.html","e863e9ddbda7b51f8836f5d5eef6b4e6"],["D:/Blog/public/springcloud/index.html","64cfea01039b4a632cb4d6f9fcfaadea"],["D:/Blog/public/springmvc-environment-construction/index.html","a2d3a523c61cec52d189d8654ca63fb1"],["D:/Blog/public/sql-injection-attacks/index.html","401e695f8199f8663c6dfc391c59cb3d"],["D:/Blog/public/stack/index.html","f20d736484b716f6a2518d8e3b6f2fb2"],["D:/Blog/public/state-mode/index.html","98400c437e43ea6c53b77ad3f42b69ba"],["D:/Blog/public/strategy-mode/index.html","60646e78b67fdafdc9380efe6913e0d2"],["D:/Blog/public/synthetic-reuse-principle/index.html","1eff488d88741768d96ccfe39b67cd57"],["D:/Blog/public/tags/C/index.html","bcec24002110b733ce345657f86dcd95"],["D:/Blog/public/tags/Concurrency/index.html","76071014a7b533650cf4f83b73bd3d57"],["D:/Blog/public/tags/DesignPatterns/index.html","6a64dc5a0537fb501012a35f9ed5d68c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f4db60a24930275823a4aec9801e7c83"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","427242b92d449d3ff01f41058146fb1b"],["D:/Blog/public/tags/DistributedMicroservices/index.html","f909288c571a14a0ab1f97354b114bb8"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","1580e7dc37a246115e58052db5e23dc2"],["D:/Blog/public/tags/Interview/index.html","1e448e0244c3b9cd698fd7bec9553b56"],["D:/Blog/public/tags/Interview/page/2/index.html","d08cf193173a0f69770796bb0120c72b"],["D:/Blog/public/tags/Linux/index.html","2f540a9be2a0b51d000b3d4a1a0425c7"],["D:/Blog/public/tags/Operating-Systems/index.html","ccc0088b78965495c5984961c4b4876f"],["D:/Blog/public/tags/about/index.html","46cb59d12268b9c5dde77387f4bfdb96"],["D:/Blog/public/tags/ad/index.html","ea4feac6dd328d0820495d991472141b"],["D:/Blog/public/tags/dataAlgorithm/index.html","db381309a4ed779394282f353d886528"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","30dc72f583bedbcfca17f9cd440e633c"],["D:/Blog/public/tags/docker/index.html","8e44093a68c2cd2ea3df70717893cb2b"],["D:/Blog/public/tags/frame/index.html","53225b57f5f00552065141e7b3e6c067"],["D:/Blog/public/tags/front/index.html","5ceb43dc9c4e77e440add5700dae1ab9"],["D:/Blog/public/tags/index.html","00d60929f171563c1a36979514eaefc3"],["D:/Blog/public/tags/jvm/index.html","89fb3edb02a5a9da134cf412b902f240"],["D:/Blog/public/tags/maintain/index.html","09393233f5fa0457ed61676019cbbdf1"],["D:/Blog/public/tags/math/index.html","70da146fed360f86a1a1fab975cbe30e"],["D:/Blog/public/tags/math/page/2/index.html","56a8299f8bba1846307241ab66051542"],["D:/Blog/public/tags/network/index.html","74b29d580a9768adafe8a6af9d36649c"],["D:/Blog/public/tags/resume/index.html","8664b7648a33b234209a87a0fee0fc67"],["D:/Blog/public/tags/safe/index.html","e9bc58c6e1fe096f98dde57bac160eef"],["D:/Blog/public/tags/sql/index.html","0cac152895c8d6025a32dc591fbbd89d"],["D:/Blog/public/tcpip/index.html","63c783030104533f0d9fc09010cc42ac"],["D:/Blog/public/template-method/index.html","630bb0d4a7fee8e3d7fc3a562fb4052f"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","65d11f5a957167c55fe8df14be91d279"],["D:/Blog/public/thread/index.html","ad1f8fd4f12ce39f3f03f2787bd746cd"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","8017c919babd022b098cc37a5534d255"],["D:/Blog/public/undefined/1601621561773.png","154f09bbf9324dad2dd0e070b901b8ec"],["D:/Blog/public/undefined/1601621872570.png","4dd9f78bdd783df5850f253016829142"],["D:/Blog/public/undefined/1601622019111.png","7f57eb0952f109a6d4dc0ba372bbb766"],["D:/Blog/public/undefined/1601622207780.png","89d00c31b5927f4d0d06bbc86cdd2db5"],["D:/Blog/public/undefined/1601622538512.png","bf0527643d802d5bb437f903c0f77971"],["D:/Blog/public/undefined/1601622624030.png","cdb3a454c1c5f4f5d401dd73126b8c64"],["D:/Blog/public/undefined/1601628177270.png","f2e28e97a00d537a2442dfd3dde1f303"],["D:/Blog/public/undefined/1601628194665.png","78f5ad6297e09df7030fc160c434f8af"],["D:/Blog/public/undefined/1601628338192.png","04cabe2a8b05fb6079cf29a27be3d94d"],["D:/Blog/public/undefined/1601628391367.png","1b054c380550631154bad5b97092422c"],["D:/Blog/public/undefined/1601628609123.png","053fe07d156caa95de7d80ee9115f9bf"],["D:/Blog/public/undefined/1601629244702.png","60f854f4883d021ebf3c3604c795dc3d"],["D:/Blog/public/undefined/1601629522050.png","0eaae9a822a045c53b1086f0c8748aea"],["D:/Blog/public/undefined/1601629887174.png","78e206384856848e5edb059dcccaefd2"],["D:/Blog/public/undefined/1601630012904.png","64ebb415bf87bd236c728d1da0a48bf8"],["D:/Blog/public/undefined/1601630687632.png","2b71b85c689d5c9fad13a6a8fb4d530c"],["D:/Blog/public/undefined/1601661252410.png","eeabb7b1e58b7bdb5c35c53020aae6a8"],["D:/Blog/public/undefined/1601661564115.png","8baf87ca9cdd66ec55223c59b982eeef"],["D:/Blog/public/undefined/1601662210072.png","913e1e1d462f94fc9ee3519eb9cde32d"],["D:/Blog/public/undefined/1601778511764.png","991d9ec68c5aa091183ebed7fab88a07"],["D:/Blog/public/undefined/1601779046075.png","26c608d866fab8f06f6d89edeb785707"],["D:/Blog/public/undefined/1601780186870.png","6176ee42c936c5b0335dcdf4d1d8c2c2"],["D:/Blog/public/undefined/1601780625791.png","9b013820f5c071bba634c4a82871c7dc"],["D:/Blog/public/undefined/1601782073282.png","eeb3666e5be82d44b708e78165a44aef"],["D:/Blog/public/undefined/1601790764370.png","7aa1cc84bd41b2c5d3729650cf609961"],["D:/Blog/public/undefined/1601790914893.png","6672fef71c276f72cffc5255e0be78bd"],["D:/Blog/public/undefined/1601791340789.png","7619c356228faee7c4829915cee4c2c3"],["D:/Blog/public/undefined/1601791680034.png","14ed18d42d40e3d6749dba94e4a785dc"],["D:/Blog/public/undefined/1601792414977.png","ac9835946f15e359d2d2f93d83034f91"],["D:/Blog/public/undefined/1601793241870.png","4e122188152079f8b061bfa0a41f6a4c"],["D:/Blog/public/undefined/1601793542661.png","b8cdcb902d9e9c241bfb63e4630d017e"],["D:/Blog/public/undefined/1601793732086.png","4a3ff4caee5dc6784628cbbd9817fcb2"],["D:/Blog/public/undefined/1601793936645.png","739b0285d8efa49239a9b87d009b8b95"],["D:/Blog/public/undefined/1601794096106.png","e6868af0eff19dd1799c3ee7fec1515a"],["D:/Blog/public/undefined/1601794310032.png","d06adcdbd0e19a3b97035c4779c1ae0b"],["D:/Blog/public/undefined/1601794730888.png","8b404f5b62ef93368b09d308ffad96e8"],["D:/Blog/public/undefined/1601795245209.png","16cb1dd487e62efc9d7709a981a6dfca"],["D:/Blog/public/undefined/1601795312952.png","d66dd910931d08ac354171c88f5708f2"],["D:/Blog/public/undefined/1601804217057.png","aec312b719d005bd24a1f9d9e2e7a62d"],["D:/Blog/public/undefined/1601804688577.png","e081677bc42505a89baba8164a216f74"],["D:/Blog/public/undefined/1601805099865.png","4a7d80a66c3d620427e2d36897b86521"],["D:/Blog/public/undefined/1601805233170.png","1d85889eaf2f811bd2bf8f435105a16a"],["D:/Blog/public/undefined/1601825215690.png","8ea8d87557bedf83af2d8a48533e89af"],["D:/Blog/public/undefined/1601825904805.png","fe7686a5c03c30105ac6d0c975098c7c"],["D:/Blog/public/undefined/1601826789198.png","bac9d3b1e2b95d6516a959c1fb5323bc"],["D:/Blog/public/undefined/1601827007419.png","772860d3edb1e0051bf185b47e0b3c5b"],["D:/Blog/public/undefined/1601827327209.png","b2f97869a1d34a55d13cf9ce60df3fc1"],["D:/Blog/public/undefined/1601827440373.png","7592ae52834bda3c4fb37cef90a398ad"],["D:/Blog/public/undefined/1601828186038.png","70177277dea22bde79f663fd359e3a83"],["D:/Blog/public/undefined/1601828466075.png","85c8295bd2e122616ea0a87d6b26a7d2"],["D:/Blog/public/undefined/1601828887182.png","9ee8c780a27e7eabf415bd6b17b047ef"],["D:/Blog/public/undefined/1601829465113.png","753e315e9f828810460c507bc4ba11fb"],["D:/Blog/public/undefined/1601829594795.png","866957974f1cc7aef8c69120cc802d92"],["D:/Blog/public/undefined/1601871650150.png","792cdb59e6ed31b5ad6ffeed03679e02"],["D:/Blog/public/undefined/1601872096360.png","ccd3d48610996451cbbad3a6c805ae08"],["D:/Blog/public/undefined/1601872183627.png","8bcfdbb90385778c5e5162c671d10eca"],["D:/Blog/public/undefined/1601872339329.png","060c25d62804db5045e303b0382f4121"],["D:/Blog/public/undefined/1601872386548.png","b12f541793a3f3b30c539048a895f297"],["D:/Blog/public/undefined/1601872739222.png","c49ca96e2e554df0bb6021a1b24999cf"],["D:/Blog/public/undefined/1601872820329.png","d4ecacd64666bbbeccabec34ff85fd80"],["D:/Blog/public/undefined/1601872908387.png","9c1b36c3c63f30fc2de0a6d21a5bacf1"],["D:/Blog/public/undefined/1601873036417.png","ef3cb811b0becdd895362c047f2f3f8f"],["D:/Blog/public/undefined/1601873460780.png","050573064efaecb7428f7cd19aa11c09"],["D:/Blog/public/undefined/index.html","ab465e58bb5a5008604a1f59da4b7788"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","cb82d25b0a80ee8d0a5128db72295a9d"],["D:/Blog/public/visitor-mode/index.html","b5b353a34f532cc236037672c8ea7ab0"],["D:/Blog/public/xml/index.html","3005786013e64106cdc72af413b8d7b1"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","d14b6d583139187e54675c40fee4b9f0"]];
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







