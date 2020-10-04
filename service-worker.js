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

var precacheConfig = [["D:/Blog/public/404.html","cf83ff9fa0d2a0982417749888d21e28"],["D:/Blog/public/7-sorting-algorithms/index.html","b5bf1990256c1051c78018543acde516"],["D:/Blog/public/adapter-mode/index.html","75c587b12c0c14485982aba73952b777"],["D:/Blog/public/agency-model/index.html","460eab4c5ad912906d5e92fb5720faa8"],["D:/Blog/public/appearance-mode/index.html","d6a9fc0daccd8792211096f1e23046e9"],["D:/Blog/public/archives/2019/01/index.html","082596b54eb283e12efd44d7ab8308ca"],["D:/Blog/public/archives/2019/07/index.html","c023fffe23b34fb2780f4e28f239cb37"],["D:/Blog/public/archives/2019/12/index.html","914acb8dba8fcd9182f137163a876dff"],["D:/Blog/public/archives/2019/index.html","c56cacf9c607233bd5415be7a38c894e"],["D:/Blog/public/archives/2020/04/index.html","2dd243f6548343e1f7ef7386cf2fb3e0"],["D:/Blog/public/archives/2020/05/index.html","979122212f427a4c7ef4511c007b94e9"],["D:/Blog/public/archives/2020/05/page/2/index.html","b61efc7b5f2aef35988ea2b3e3b95e27"],["D:/Blog/public/archives/2020/06/index.html","63c5215c017ca3674c07035217fc77f5"],["D:/Blog/public/archives/2020/06/page/2/index.html","303f3528960c54fa6a3a487b12b6f30a"],["D:/Blog/public/archives/2020/06/page/3/index.html","c5f91deab4df2340a501abaadee18e2c"],["D:/Blog/public/archives/2020/06/page/4/index.html","d79ccc4f0e3930e56d94db54332f2908"],["D:/Blog/public/archives/2020/07/index.html","2ede227a3cd6fd27c69c48b01e278806"],["D:/Blog/public/archives/2020/07/page/2/index.html","404559d1ea99285f88c5c5ea98799339"],["D:/Blog/public/archives/2020/07/page/3/index.html","17d158e504d5435d5edfe96aa414cf4b"],["D:/Blog/public/archives/2020/08/index.html","1bd22a678b3a810c145322107a489045"],["D:/Blog/public/archives/2020/08/page/2/index.html","e2f5d511fa96a79a5d85caa88abb2384"],["D:/Blog/public/archives/2020/08/page/3/index.html","ae3bb697784663ccc000079138338f2c"],["D:/Blog/public/archives/2020/09/index.html","a3fda85814289a3161b7bed1ecc8cda9"],["D:/Blog/public/archives/2020/09/page/2/index.html","648d3de812aed90471cac440e2dff76b"],["D:/Blog/public/archives/2020/10/index.html","f864c8768c58f23f5768373946a61c33"],["D:/Blog/public/archives/2020/index.html","683f17c30fedddaf7ad6272cee261f73"],["D:/Blog/public/archives/2020/page/10/index.html","e416de982a30590abb5433e97c6b5138"],["D:/Blog/public/archives/2020/page/11/index.html","d07b10e4b050f3ce2740f4ba0d345d2d"],["D:/Blog/public/archives/2020/page/12/index.html","d890d3ce8c80ef1152795fd302bbde3a"],["D:/Blog/public/archives/2020/page/13/index.html","b093667a8da3eb7e8b7cda65d7323646"],["D:/Blog/public/archives/2020/page/2/index.html","d1c42ca0293e9166c5502c1d57e4c38b"],["D:/Blog/public/archives/2020/page/3/index.html","c551d4926befe7e603a658b0416cb70d"],["D:/Blog/public/archives/2020/page/4/index.html","db0f2c0fa77e49446f858c94e46388bd"],["D:/Blog/public/archives/2020/page/5/index.html","13f897d2692c96e1fd7a10bac7cbbc1e"],["D:/Blog/public/archives/2020/page/6/index.html","9dd34ab91e0281fbb44c96917ac4eeca"],["D:/Blog/public/archives/2020/page/7/index.html","92a0f27aad01150a11ca1a41e5d8bcaf"],["D:/Blog/public/archives/2020/page/8/index.html","ff8bbf8148f3ebf2b7497e997c67b4ba"],["D:/Blog/public/archives/2020/page/9/index.html","540ec5b6ccbb4640fb95ac1b1b7b0228"],["D:/Blog/public/archives/index.html","b303d14e19bd5d565d719febf53122a3"],["D:/Blog/public/archives/page/10/index.html","0199512ec34345de9f9028f42dd9eae1"],["D:/Blog/public/archives/page/11/index.html","a00dec9e69f43c2e348dcfd576cf574f"],["D:/Blog/public/archives/page/12/index.html","9f9d9ee5512670260c5f4a0099b6c31f"],["D:/Blog/public/archives/page/13/index.html","1950f5cab7b22940b8e4fbfbb9ab9032"],["D:/Blog/public/archives/page/2/index.html","4033dda7dba5cb0df219e454d89c0847"],["D:/Blog/public/archives/page/3/index.html","788dc80e4f8db395b091c4e855019155"],["D:/Blog/public/archives/page/4/index.html","8a39f7cf62dcca531a02a3cc7232f7c5"],["D:/Blog/public/archives/page/5/index.html","209e589d5389150b4f5d03d974b19d5e"],["D:/Blog/public/archives/page/6/index.html","af2b91687bea46f22057951828be4b2f"],["D:/Blog/public/archives/page/7/index.html","e8cdf404ca6d8d408bc4991065215e1b"],["D:/Blog/public/archives/page/8/index.html","58c17cc32b9a934cdea530b947d44ea2"],["D:/Blog/public/archives/page/9/index.html","5911203d1309aa2462136774f59da2be"],["D:/Blog/public/array/index.html","ee8ba40f1c9eaaaa6ffb1c074ed13ca5"],["D:/Blog/public/binary-search-algorithm/index.html","57a4174f1d3abf19818c9074a1807d0e"],["D:/Blog/public/binary-sort-tree/index.html","52bbe0da9d15f0d5ec0c7568e903290b"],["D:/Blog/public/bridge-mode/index.html","6fcd5b51ab1576a625e15b47400fd55a"],["D:/Blog/public/builder/index.html","076b911dc807770219f27816e420700a"],["D:/Blog/public/c-pointer/index.html","8d3df37a7cc10a0c0ea7234507b37695"],["D:/Blog/public/calculus/index.html","ec34f4a565fae69d2eda3bdb639d7b6e"],["D:/Blog/public/categories/C/index.html","6e31a24095fed5099fb22c7c0fb13735"],["D:/Blog/public/categories/SpringMVC/index.html","e9506638f63a437bab97cff8abba275f"],["D:/Blog/public/categories/index.html","f131b207a3a58253fb57d2a0f957520b"],["D:/Blog/public/categories/linux/index.html","cde1151c4cc97ed0d935949b48da40f2"],["D:/Blog/public/categories/分布式/index.html","5817f1a0616c889e883718986592372c"],["D:/Blog/public/categories/分布式/page/2/index.html","b895a7f840e453831da7d5a7365987eb"],["D:/Blog/public/categories/前端/index.html","5d994cb46879b045125b318aae8285c0"],["D:/Blog/public/categories/设计模式/index.html","23a2d18940bdc343fedb2bf4e55720df"],["D:/Blog/public/categories/设计模式/page/2/index.html","78458449da7e59797be29aefc5ecc6e1"],["D:/Blog/public/categories/高数/index.html","0b6ea4b235383d5bafcf4f09143bbf34"],["D:/Blog/public/chain-of-responsibility-model/index.html","1860dbc1867a5971463059f95497af9b"],["D:/Blog/public/chinese-and-english-switching/index.html","c421268978176c276bd99815177a5046"],["D:/Blog/public/combination-mode/index.html","9ba023c9cd17e28e76e7a6fa926378d1"],["D:/Blog/public/command-mode/index.html","b945dc0e762f380ec1b412b947ba7b2e"],["D:/Blog/public/common-commands-of-unix/index.html","fdef6215395ca02445273d25ebaf61c3"],["D:/Blog/public/computer-network/index.html","2c91216a76a0cc4740be5835e38c7400"],["D:/Blog/public/concurrency-principle/index.html","c63f5998d02c4d3e24550760aa38f32b"],["D:/Blog/public/continuous/index.html","e428d8a27442bace21ae270a08414d85"],["D:/Blog/public/contract/index.html","6b074f92d61fecbc42b2c5284888da1c"],["D:/Blog/public/css/index.css","d126427f2c8fad53a023a10805db08fc"],["D:/Blog/public/css/var.css","90f3953b5a78a86a24943f90b32d5203"],["D:/Blog/public/data-structures-and-algorithms/index.html","f076e7da937e3e76c47b14029f56d3af"],["D:/Blog/public/decorator-mode/index.html","ba5b95909f9b59c602dad7a90f901998"],["D:/Blog/public/definite-integral/index.html","8421a7114436fe298f292a100774938f"],["D:/Blog/public/dependence-reversal-principle/index.html","6c22a1e48264d2c51e61fff57f49031c"],["D:/Blog/public/derivative/index.html","d881b7c2e52b9c093e4f8f86d5f688fc"],["D:/Blog/public/design-patterns/index.html","cdb71cf27e31e74f4013010a963dc88a"],["D:/Blog/public/differential/index.html","d3c1823fbc1b48be8c9d16da1c693332"],["D:/Blog/public/dimits-law/index.html","04f833a10239eef8a8dbe5ee0ac59888"],["D:/Blog/public/docker-virtualized-container/index.html","bef912097b847ccc3e5be39ea3f578c0"],["D:/Blog/public/dynamic-array/index.html","e5465ffd8b7f1e265a320333efd44cb5"],["D:/Blog/public/encoding-algorithm/index.html","b98f8bc9df312c27844ad8c81078bb37"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","d72ebe24a5101b0442f8216aed95ce46"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","a68bbc295e5cc291460fa12cb6d84ce3"],["D:/Blog/public/factory-design-pattern/index.html","ed22047568a2f3e40e4aa24451ca94f2"],["D:/Blog/public/flyweight-model/index.html","66099a7fe6d3e8ecbaa757ef0ccfea24"],["D:/Blog/public/function-graphing/index.html","bec7d23a57950593bed02d24c0a590f7"],["D:/Blog/public/gateway-service-current-limit/index.html","c024598c9eb8913c7b0609b18c72f560"],["D:/Blog/public/gc/index.html","de7b3e0d50120043f01dbdbcaa9609ad"],["D:/Blog/public/generalized-integral/index.html","dcf1adacf71b40e581972f4092c54c54"],["D:/Blog/public/google8102e2f35ce9e391.html","7b9540e8664d855f0a8e2715cc770bca"],["D:/Blog/public/gulp-compresses-static-resources/index.html","065bcfe2fe7777933dc287465ffdda38"],["D:/Blog/public/hash-algorithm/index.html","2be52daba971a2da185d2b8e2c616231"],["D:/Blog/public/heap-sort/index.html","cd846043a6688ad298f21b23fa3e1b34"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","687bb65d9426daf6e308b871d5c6fe9f"],["D:/Blog/public/http/index.html","7b95154af8b1cf602e4f12224e644d7f"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","cc0ad7b5daea2c9ebf7799d6c88c65ac"],["D:/Blog/public/index.html","f86778180db9d9e1f6b56961d54368ee"],["D:/Blog/public/infinitesimal-and-infinite/index.html","1a61bc6d638b8388f2d3b16286390483"],["D:/Blog/public/interface-isolation-principle/index.html","f9d677c5f80e9a52c3070691ac2143bb"],["D:/Blog/public/intermediary-model/index.html","e3b670dd7d642eace5bba51551ff3764"],["D:/Blog/public/interpolation-search-algorithm/index.html","65fd4b4ce9c1045c791f77f8de734448"],["D:/Blog/public/interpreter-mode/index.html","d2a386cf8d35445a5996c11f5c129559"],["D:/Blog/public/introduction-to-computer-network/index.html","4834478cb6ba3438088f3402829cefd0"],["D:/Blog/public/introduction-to-operating-system/index.html","02fd258a81f9b73436fe6225d0b54de1"],["D:/Blog/public/inversion-of-control/index.html","8251cc8f4a4512edda1fe0967cc2208f"],["D:/Blog/public/io/index.html","df26632b5fac443be7f625b245d21f03"],["D:/Blog/public/iterator-mode/index.html","6ff92cc867a93f846c4598e906065be9"],["D:/Blog/public/j2ee/index.html","daf6ce22f615013bf1ec6e7c19653fe6"],["D:/Blog/public/j2se/index.html","e5b63f0fd731c21852222ca8c2a623b5"],["D:/Blog/public/jdbc/index.html","2284ec44848e4cbac0a3c40f7742d26f"],["D:/Blog/public/jdk/index.html","1f1bcfa2f3a3a035ddeb5c0157475320"],["D:/Blog/public/jmm-memory-model/index.html","254166bd6ac7e3f27de17c5084b54fbf"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","e6a6dc5f5290e30657d95891b52b6c16"],["D:/Blog/public/law-of-robida/index.html","fa5f5caaec23f9db153884c11097a630"],["D:/Blog/public/limit/index.html","426aae04ee59902bbebc89ec06b076db"],["D:/Blog/public/linear-search-algorithm/index.html","178be4ff223923b5351fed12f10daffe"],["D:/Blog/public/link/index.html","06d27417f33718f9c9e90022d4cf0f6f"],["D:/Blog/public/linked-list/index.html","bb3bd5eadffce219dee1334f42e26c43"],["D:/Blog/public/linux/index.html","8cd1a806d6773255a4362b107665812f"],["D:/Blog/public/liskov-substitution-principle/index.html","cc0a34dd06571933e3e08306085a7fd7"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","3415b4c963efe12aaea391c61386eab2"],["D:/Blog/public/maintenance-1/index.html","0f1ce2932b70934969d5f14afd4cf7ef"],["D:/Blog/public/maintenance-2/index.html","6c3e09ebd99e66ab545a10bcfa4213f6"],["D:/Blog/public/maintenance-3/index.html","bc7aed25606f7a45c1870a9a5d234f63"],["D:/Blog/public/memo-mode/index.html","f32c1714bb7e5d4f56bc418e89d0d91f"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9474725bc7b572518adf566f5ff1d817"],["D:/Blog/public/multi-function/index.html","898fdf8f4dafeffbea93ffcce600abf5"],["D:/Blog/public/multithreading/index.html","3352e2d48f65ebf302c10f526a68dda5"],["D:/Blog/public/mvc/index.html","41df986726cc0f7b53aca56b1a8c3bf1"],["D:/Blog/public/mybatis/index.html","caf4b448280b4cd3244691fae6ff9a8a"],["D:/Blog/public/mysql/index.html","3e77f5503fff1a19ae64acfce253808c"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","f4c062ce131d94305bb103c50d609dfd"],["D:/Blog/public/objectoriented/index.html","188e2c09b3a426802bfd168fa7dd700f"],["D:/Blog/public/observer-mode/index.html","d0f52fe89199e397643590b4f54b81a7"],["D:/Blog/public/operating-system/index.html","c283700d610a49e03030fd57eaf3c945"],["D:/Blog/public/page/10/index.html","c8acbee1c6fd10f60e155a2c52f5f019"],["D:/Blog/public/page/11/index.html","2473b8be82cb5405a20dad1bb0542436"],["D:/Blog/public/page/12/index.html","bd4227de7250439275830f9b958bffa9"],["D:/Blog/public/page/13/index.html","aa4ad83f20f109675c22830bb6d7903f"],["D:/Blog/public/page/2/index.html","80ac30affe225ca73cfcc52532b45b69"],["D:/Blog/public/page/3/index.html","437d17fd45a257bbd0ae3f8d87a1a044"],["D:/Blog/public/page/4/index.html","37b725b47145f1e6f94886d9ee779b92"],["D:/Blog/public/page/5/index.html","f702ce337eb2692cf8c99745c1731943"],["D:/Blog/public/page/6/index.html","fad8cefcd29ea40cec51ba90b5a813c5"],["D:/Blog/public/page/7/index.html","ad41b33ddc8ec1254d9c0f75507da81f"],["D:/Blog/public/page/8/index.html","1eadb4208e41ec4cafc0c95ed04498ba"],["D:/Blog/public/page/9/index.html","cb6803d48e708c61080c34ac10283087"],["D:/Blog/public/palindrome/index.html","6c12e07d1163b35b8844e883ae63f0ad"],["D:/Blog/public/partial-derivative/index.html","247a4f4a91d560fc46315bb9d15527eb"],["D:/Blog/public/pass-by-value/index.html","66f8f130f710b1a01d26a96c1d7553d6"],["D:/Blog/public/pictrue-bed/index.html","cdfd6850c5e2b345ad82e8ae283bd5fa"],["D:/Blog/public/principle-of-opening-and-closing/index.html","4716c2c53e4c1f30ccc7208f410f79b6"],["D:/Blog/public/principles-of-computer-organization/index.html","42aa4b9c317adb0db106f203aeb4b968"],["D:/Blog/public/prototype/index.html","783d2effe739fbc7f7796270313fed1c"],["D:/Blog/public/queue/index.html","fb330f9b025c2fe0cd8b5a2b3cfa3941"],["D:/Blog/public/redis/index.html","3cbad0c7528b717fe0e0e8adb8189ca7"],["D:/Blog/public/reflection/index.html","a48ce6b865532f2afb427ec4018a083a"],["D:/Blog/public/resume/index.html","79fee96f1e95203bc06a8d7a8a044ee8"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","dfd878175cd680011c065bbefdc9e221"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","a0701d7aaa0c3841ee102b30fe7cd3fb"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","624ee5e5f57725435c9b350d05aaafb1"],["D:/Blog/public/single-responsibility-principle/index.html","81e7954b10c12a5a60c5a0d37cb9d54e"],["D:/Blog/public/singleton-mode/index.html","9f789e0e181484d565d1c5f23a5578d1"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","12e16ca7523e3215d72b309185152d94"],["D:/Blog/public/sparsearray-sparse-array/index.html","cb38d486f09d74af9e68d3dc44d9eb9a"],["D:/Blog/public/spring-architecture/index.html","c5849d12ad49693d6206ce58b1ca5b83"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","9b1d43c085ae020b44536521de6eb4b0"],["D:/Blog/public/spring/index.html","cf32a167ac0a509f39f7051747545361"],["D:/Blog/public/springcloud-alibaba/index.html","378ae3add731145e6ab412fdf4f26b15"],["D:/Blog/public/springcloud-bus-message/index.html","2b2ef39f6345ff4a8a2642fa48140256"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","0822d14163073515a5002af03039cc00"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","8740a26b9e277f465c2a49477a3afeb2"],["D:/Blog/public/springcloud-stream-message-driver/index.html","ada79cb25fbc63b9cdbb07de1560871f"],["D:/Blog/public/springcloud/index.html","826a2a06521bd9d2042173c1d7c9d9e7"],["D:/Blog/public/springmvc-environment-construction/index.html","223a97813ae9964363e17dc0540854cf"],["D:/Blog/public/sql-injection-attacks/index.html","98cdf27746a556b25cca352887cdc77b"],["D:/Blog/public/stack/index.html","f3d9d2c6d219d5e959175c49a0f46916"],["D:/Blog/public/state-mode/index.html","4d2b02d791c6f01ffc6d2266a0768277"],["D:/Blog/public/strategy-mode/index.html","42d85de08ebe4bc73fdea1040b7f144b"],["D:/Blog/public/synthetic-reuse-principle/index.html","d3c7afd3b8beebee58aa9c6288690356"],["D:/Blog/public/tags/C/index.html","0f41735a5ecd194594e6e7c1c9cca39d"],["D:/Blog/public/tags/Concurrency/index.html","09916cff4a435c2064c761a7480bc893"],["D:/Blog/public/tags/DesignPatterns/index.html","269e84b5bd15b66f9d8b67c28aa01e11"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","89f86ac2df976d5287d5572310683685"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5f1489cef3185027eca4eca3d82cbbcc"],["D:/Blog/public/tags/DistributedMicroservices/index.html","cb59201f0354a1e8cf36e9724c41f703"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","de90efabbb34557590abce24533e33bf"],["D:/Blog/public/tags/Interview/index.html","ba9b2b4256fb64fff7ecaaa645935e5a"],["D:/Blog/public/tags/Interview/page/2/index.html","5ef1b0d7f7782321d0775533d9b6d7c2"],["D:/Blog/public/tags/Linux/index.html","a8b6321edf9e98245270863f6b280ad0"],["D:/Blog/public/tags/Operating-Systems/index.html","65fa1a5198f1fa940d529d22e950b7fc"],["D:/Blog/public/tags/about/index.html","7ca137d5097c964936a1ff104ba57256"],["D:/Blog/public/tags/ad/index.html","4915204a8343ea9a7b5662659cf4061c"],["D:/Blog/public/tags/dataAlgorithm/index.html","06ac2c4efdebe89a1be9ef18aa8845d4"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","c83bc6b57c6e025d85292e891bb941c6"],["D:/Blog/public/tags/docker/index.html","0f605e335f8ae118950dda748af01359"],["D:/Blog/public/tags/frame/index.html","47e12ed4b7f7b9f1eff4f9701f1402da"],["D:/Blog/public/tags/front/index.html","8cb04d08126720a7e15a40832da7ebed"],["D:/Blog/public/tags/index.html","496b524f3d278ee0fa66490b16ef589a"],["D:/Blog/public/tags/jvm/index.html","9c946f3c7822dd642da2ba39ba9c905e"],["D:/Blog/public/tags/maintain/index.html","d10fc25e0e956e8d5ebc8aa023558eca"],["D:/Blog/public/tags/math/index.html","9123cfed8ecec73a9fc04ff4e62314bc"],["D:/Blog/public/tags/math/page/2/index.html","5d0dccd64682b83f69e5a5635dab2cda"],["D:/Blog/public/tags/network/index.html","9fcd8dca99ee4c3246afd86a9d6a4d24"],["D:/Blog/public/tags/resume/index.html","28cb63beaf967db96c6a8613aab47698"],["D:/Blog/public/tags/safe/index.html","7b98792df47187078826f59e3b73dd5a"],["D:/Blog/public/tags/sql/index.html","9383ce5d8a687481e8d3154efc8e66bd"],["D:/Blog/public/tcpip/index.html","37685e4f5e52f200d3006b51115e008b"],["D:/Blog/public/template-method/index.html","f3ae35c98ce6b0640984e11019960283"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","25e973090082693ae32e3495595271a2"],["D:/Blog/public/thread/index.html","4338c74690020ac7e0cae7d136ab8548"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","3b1aef43751b77b2c3c37340fd9467c6"],["D:/Blog/public/undefined/1601621561773.png","154f09bbf9324dad2dd0e070b901b8ec"],["D:/Blog/public/undefined/1601621872570.png","4dd9f78bdd783df5850f253016829142"],["D:/Blog/public/undefined/1601622019111.png","7f57eb0952f109a6d4dc0ba372bbb766"],["D:/Blog/public/undefined/1601622207780.png","89d00c31b5927f4d0d06bbc86cdd2db5"],["D:/Blog/public/undefined/1601622538512.png","bf0527643d802d5bb437f903c0f77971"],["D:/Blog/public/undefined/1601622624030.png","cdb3a454c1c5f4f5d401dd73126b8c64"],["D:/Blog/public/undefined/1601628177270.png","f2e28e97a00d537a2442dfd3dde1f303"],["D:/Blog/public/undefined/1601628194665.png","78f5ad6297e09df7030fc160c434f8af"],["D:/Blog/public/undefined/1601628338192.png","04cabe2a8b05fb6079cf29a27be3d94d"],["D:/Blog/public/undefined/1601628391367.png","1b054c380550631154bad5b97092422c"],["D:/Blog/public/undefined/1601628609123.png","053fe07d156caa95de7d80ee9115f9bf"],["D:/Blog/public/undefined/1601629244702.png","60f854f4883d021ebf3c3604c795dc3d"],["D:/Blog/public/undefined/1601629522050.png","0eaae9a822a045c53b1086f0c8748aea"],["D:/Blog/public/undefined/1601629887174.png","78e206384856848e5edb059dcccaefd2"],["D:/Blog/public/undefined/1601630012904.png","64ebb415bf87bd236c728d1da0a48bf8"],["D:/Blog/public/undefined/1601630687632.png","2b71b85c689d5c9fad13a6a8fb4d530c"],["D:/Blog/public/undefined/1601661252410.png","eeabb7b1e58b7bdb5c35c53020aae6a8"],["D:/Blog/public/undefined/1601661564115.png","8baf87ca9cdd66ec55223c59b982eeef"],["D:/Blog/public/undefined/1601662210072.png","913e1e1d462f94fc9ee3519eb9cde32d"],["D:/Blog/public/undefined/1601778511764.png","991d9ec68c5aa091183ebed7fab88a07"],["D:/Blog/public/undefined/1601779046075.png","26c608d866fab8f06f6d89edeb785707"],["D:/Blog/public/undefined/1601780186870.png","6176ee42c936c5b0335dcdf4d1d8c2c2"],["D:/Blog/public/undefined/1601780625791.png","9b013820f5c071bba634c4a82871c7dc"],["D:/Blog/public/undefined/1601782073282.png","eeb3666e5be82d44b708e78165a44aef"],["D:/Blog/public/undefined/1601790764370.png","7aa1cc84bd41b2c5d3729650cf609961"],["D:/Blog/public/undefined/1601790914893.png","6672fef71c276f72cffc5255e0be78bd"],["D:/Blog/public/undefined/1601791340789.png","7619c356228faee7c4829915cee4c2c3"],["D:/Blog/public/undefined/1601791680034.png","14ed18d42d40e3d6749dba94e4a785dc"],["D:/Blog/public/undefined/1601792414977.png","ac9835946f15e359d2d2f93d83034f91"],["D:/Blog/public/undefined/1601793241870.png","4e122188152079f8b061bfa0a41f6a4c"],["D:/Blog/public/undefined/1601793542661.png","b8cdcb902d9e9c241bfb63e4630d017e"],["D:/Blog/public/undefined/1601793732086.png","4a3ff4caee5dc6784628cbbd9817fcb2"],["D:/Blog/public/undefined/1601793936645.png","739b0285d8efa49239a9b87d009b8b95"],["D:/Blog/public/undefined/1601794096106.png","e6868af0eff19dd1799c3ee7fec1515a"],["D:/Blog/public/undefined/1601794310032.png","d06adcdbd0e19a3b97035c4779c1ae0b"],["D:/Blog/public/undefined/1601794730888.png","8b404f5b62ef93368b09d308ffad96e8"],["D:/Blog/public/undefined/1601795245209.png","16cb1dd487e62efc9d7709a981a6dfca"],["D:/Blog/public/undefined/1601795312952.png","d66dd910931d08ac354171c88f5708f2"],["D:/Blog/public/undefined/1601804217057.png","aec312b719d005bd24a1f9d9e2e7a62d"],["D:/Blog/public/undefined/1601804688577.png","e081677bc42505a89baba8164a216f74"],["D:/Blog/public/undefined/1601805099865.png","4a7d80a66c3d620427e2d36897b86521"],["D:/Blog/public/undefined/1601805233170.png","1d85889eaf2f811bd2bf8f435105a16a"],["D:/Blog/public/undefined/1601825215690.png","8ea8d87557bedf83af2d8a48533e89af"],["D:/Blog/public/undefined/1601825904805.png","fe7686a5c03c30105ac6d0c975098c7c"],["D:/Blog/public/undefined/index.html","e870e206ee7bb2570fd6bd903a0b038c"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","6585cf1f3fd5a7eaee1aff9df8d4576b"],["D:/Blog/public/visitor-mode/index.html","ebd8bd162c2eaf00a77f99d2b0303c8b"],["D:/Blog/public/xml/index.html","ecdf684cfeb7fcc4bdc7322d250cb6f6"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","d57aedeadafe3b342a1767c11cb9c4f3"]];
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







