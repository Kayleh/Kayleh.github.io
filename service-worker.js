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

var precacheConfig = [["D:/Blog/public/404.html","3274286d6af93f7570323fcef75c7704"],["D:/Blog/public/7-sorting-algorithms/index.html","bd92882041af2c1232c04e48552c4f97"],["D:/Blog/public/about/index.html","8ace80a3b314d2ebe95d7ab4e4077222"],["D:/Blog/public/adapter-mode/index.html","9f18823ce2cf7e4a0dd7abd0cc085a35"],["D:/Blog/public/agency-model/index.html","358d104d68a4a1642bac22f6934ac9e9"],["D:/Blog/public/appearance-mode/index.html","c416535f60c214203917803c4b228238"],["D:/Blog/public/archives/2019/01/index.html","84a75e6c0cf8626aeef70b68e602800f"],["D:/Blog/public/archives/2019/07/index.html","dd13c580cbe9e238ac9ac1227c4797de"],["D:/Blog/public/archives/2019/12/index.html","7b652822be44ed2f3ecf054c21f954e0"],["D:/Blog/public/archives/2019/index.html","ecb50d29bf9a3f60e32c38029500e57d"],["D:/Blog/public/archives/2020/04/index.html","03f4c66607e8bb98a97091707e20eb5f"],["D:/Blog/public/archives/2020/05/index.html","61a4b5a6eb5034b08a397d5dcffbf08f"],["D:/Blog/public/archives/2020/05/page/2/index.html","8ab4b1bf53008051a646c3a26b1581e3"],["D:/Blog/public/archives/2020/06/index.html","136a481d1a4f964bed1303bf42c457df"],["D:/Blog/public/archives/2020/06/page/2/index.html","e4afe2c0ad17c30abb332d74669cec78"],["D:/Blog/public/archives/2020/06/page/3/index.html","28ef7899e07f4dc52c7b088401c7e301"],["D:/Blog/public/archives/2020/06/page/4/index.html","19a6b583b7fc3471f74414cf93f03d4e"],["D:/Blog/public/archives/2020/07/index.html","442bd6beb0f0f4b14ce01ba47cb1e6fb"],["D:/Blog/public/archives/2020/07/page/2/index.html","339503d7dc84f54b5357f0dc87f8bee5"],["D:/Blog/public/archives/2020/07/page/3/index.html","ca092298ba4c6b2f5eaef0afd1d2aa74"],["D:/Blog/public/archives/2020/08/index.html","1eb59149209f3d4e6e363a1f9e417042"],["D:/Blog/public/archives/2020/08/page/2/index.html","a00af339a0c8cf35123a2c55a927ae4f"],["D:/Blog/public/archives/2020/08/page/3/index.html","8393b86b355b7f515ce79e71353b4923"],["D:/Blog/public/archives/2020/09/index.html","c42c4849b79ed695ca8d6750249cf95a"],["D:/Blog/public/archives/2020/09/page/2/index.html","2489c6398c6895f0af833dca362b8f53"],["D:/Blog/public/archives/2020/10/index.html","127ea357c9735402bf8af8c6429c58cb"],["D:/Blog/public/archives/2020/index.html","74e5d607a427ea56289597cefe4ca5f7"],["D:/Blog/public/archives/2020/page/10/index.html","c66c69e183a11727caff8916ff8f6a88"],["D:/Blog/public/archives/2020/page/11/index.html","2b1463a03506ead50d1a7eaa89978cc0"],["D:/Blog/public/archives/2020/page/12/index.html","d79b09d6e3a8be1645ecac5837eca44b"],["D:/Blog/public/archives/2020/page/13/index.html","3a7a66f3099b822c4801d9bbfa6a50e5"],["D:/Blog/public/archives/2020/page/2/index.html","94c74c68e2744f4b164e81bdfe79aad7"],["D:/Blog/public/archives/2020/page/3/index.html","388ad718ff2d921700f512eb64d37d0a"],["D:/Blog/public/archives/2020/page/4/index.html","4d792d1857fd9d282368892b728b8aaa"],["D:/Blog/public/archives/2020/page/5/index.html","3af389af34c934de8f6f06166c328dad"],["D:/Blog/public/archives/2020/page/6/index.html","e45a5f00714d4d2d3083da051a516099"],["D:/Blog/public/archives/2020/page/7/index.html","cbfd1282efae9f040781de99ce5095a3"],["D:/Blog/public/archives/2020/page/8/index.html","308bd5b72139b5aab9621504c1152296"],["D:/Blog/public/archives/2020/page/9/index.html","e6d0cf66fbd88531770de82da57ad0d7"],["D:/Blog/public/archives/index.html","eb6a282b228c9529d06aa1deb792000a"],["D:/Blog/public/archives/page/10/index.html","e62c8d302599462926b836ee27fb448f"],["D:/Blog/public/archives/page/11/index.html","0a2c0d0e3d10dc6789eafd0ea7a8999a"],["D:/Blog/public/archives/page/12/index.html","1c28b1de7dad22c281e966d5d2cb937f"],["D:/Blog/public/archives/page/13/index.html","8f8bc571267403b39c4a183f20df126d"],["D:/Blog/public/archives/page/2/index.html","88ba0a7af4ef47dc0194b14691099e75"],["D:/Blog/public/archives/page/3/index.html","fd108a8d7fb3bb3763f43464f6e4b292"],["D:/Blog/public/archives/page/4/index.html","dfda16693e08d5245d7a9091f8345000"],["D:/Blog/public/archives/page/5/index.html","bb7d4cd33f54ee6c17b29aba7507ddd8"],["D:/Blog/public/archives/page/6/index.html","5dc90ac7f72c477c0012ce8c0952a66c"],["D:/Blog/public/archives/page/7/index.html","a5d84ac0b2e4aba3836ebdb28e35cefd"],["D:/Blog/public/archives/page/8/index.html","eb5ec8223a3cf3e29e320337326b3dc8"],["D:/Blog/public/archives/page/9/index.html","1ba8b2ea1581e4d61204fd1a84404481"],["D:/Blog/public/array/index.html","75784ca0b5f3966c3c414e3b271783e0"],["D:/Blog/public/binary-search-algorithm/index.html","04ef64e3aa080eb6bf9f9f846e71700d"],["D:/Blog/public/binary-sort-tree/index.html","d36d1ac3acbabad436ab77123143df64"],["D:/Blog/public/bridge-mode/index.html","760a7bef8ad2ab930b805b6838d78527"],["D:/Blog/public/builder/index.html","b84424cf9be39b402847ac866a874fce"],["D:/Blog/public/c-pointer/index.html","8363a86b7f31b205c219f7673bd40522"],["D:/Blog/public/categories/C/index.html","1af053b91116efc3df55ae85d46a403c"],["D:/Blog/public/categories/SpringMVC/index.html","adcc96b55317d3d6c026a2ae3dd28184"],["D:/Blog/public/categories/index.html","055129cc943f66a3a403a37d28b76346"],["D:/Blog/public/categories/linux/index.html","1a7d74968fae59efb5c179b262da3c41"],["D:/Blog/public/categories/分布式/index.html","98eff9032b8dcc883b0e0ab37091399f"],["D:/Blog/public/categories/分布式/page/2/index.html","51deff7babdf0ab721d5c4831a758e67"],["D:/Blog/public/categories/前端/index.html","464f736526add286e502a8ee20da4375"],["D:/Blog/public/categories/设计模式/index.html","8cfd1a9f579f1e5e8bb2347caba121f1"],["D:/Blog/public/categories/设计模式/page/2/index.html","7c5fb3add617706bede995cf599abf4d"],["D:/Blog/public/categories/高数/index.html","159dcb18e4acf62e53cdd2da39e602aa"],["D:/Blog/public/chain-of-responsibility-model/index.html","3df159c0754e0195732c52520f56d57f"],["D:/Blog/public/chinese-and-english-switching/index.html","75cccbe48392e52254a14f21cbf02a03"],["D:/Blog/public/combination-mode/index.html","b3e3461b58a567df4cd44f952aacf722"],["D:/Blog/public/command-mode/index.html","d7f740f7501d222fc47f8c4dc86cd96e"],["D:/Blog/public/common-commands-of-unix/index.html","49d189dea39799547085501df24e2b0d"],["D:/Blog/public/computer-network/index.html","a1961329459eabbbd40641e3b87781e5"],["D:/Blog/public/concurrency-principle/index.html","a2b9d4a31e7e1e7f9439c7d3f07d6c13"],["D:/Blog/public/continuous/index.html","bf5346387ec1254cdda1b6b73af9447c"],["D:/Blog/public/contract/index.html","847b11ed9914bd0321a18d455c12b918"],["D:/Blog/public/css/index.css","550b7aa256de7b4164b0bfcdbd67d14d"],["D:/Blog/public/css/var.css","5abd761a8c458d8d063298277f1333a5"],["D:/Blog/public/data-structures-and-algorithms/index.html","f74e114580186b5f251e02d35fabd23c"],["D:/Blog/public/deb/index.html","a6355b373a7aceb1a3c7b11fdd3bb1f6"],["D:/Blog/public/decorator-mode/index.html","0fdf8ca22ac4e8f3e3bf7c07104c73dc"],["D:/Blog/public/definite-integral/index.html","f05ae78a2960029dab58ae4604926760"],["D:/Blog/public/dependence-reversal-principle/index.html","19bf67c2658f844738169a851b01e1bf"],["D:/Blog/public/derivative/index.html","f1e7ac725451e7ca738e6b8c1262edd8"],["D:/Blog/public/design-patterns/index.html","1e78b95ee3bde4f689e8ab4c5d70506f"],["D:/Blog/public/differential-equation/index.html","a747b6f807f813488394259719924135"],["D:/Blog/public/differential/index.html","de5ec12f65d51deed64e58c99328befa"],["D:/Blog/public/dimits-law/index.html","66b6a1225c49da0533cca6cbe220b534"],["D:/Blog/public/docker-virtualized-container/index.html","9de538859ebac163313279e6fb1cd4c3"],["D:/Blog/public/double-integral/index.html","8ddefadac1bf8c119c1512caff2cfbce"],["D:/Blog/public/dynamic-array/index.html","c2b74b9be2c4dfa20f986f6833666177"],["D:/Blog/public/encoding-algorithm/index.html","a844b62d91b879dcceef4705a38bbc0c"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","7f75f9e22441a6111b778e95d65d6a36"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","0b8964a97be8ad9efd63d5c237e4c3c0"],["D:/Blog/public/factory-design-pattern/index.html","2966add60fab327a8491de231c0e61c6"],["D:/Blog/public/flyweight-model/index.html","bb94278a26c4d68d49ed1f78d9a0582f"],["D:/Blog/public/function-graphing/index.html","2a87f8bde66984015b009484730c3ab9"],["D:/Blog/public/gateway-service-current-limit/index.html","21c3f8b906df670cb90e6b8376ebe1d0"],["D:/Blog/public/gc/index.html","88973a99455a91725635509fa815a791"],["D:/Blog/public/generalized-integral/index.html","d2f5bd254615a1e114de75c569547172"],["D:/Blog/public/google8102e2f35ce9e391.html","db9a125eb8562dfe4ebc894c9aab8525"],["D:/Blog/public/gulp-compresses-static-resources/index.html","1a71e68f9b311fca127490976779f772"],["D:/Blog/public/hash-algorithm/index.html","bf3ff4050d4f971476152339b6ea1069"],["D:/Blog/public/heap-sort/index.html","92fec24cf678581c49690a3b551ff938"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","bc52cec311540847c51375ba928a4197"],["D:/Blog/public/http/index.html","529f77009533f584e32e1a9d79597258"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","35403ac1d3b36c04d0314596f73905bf"],["D:/Blog/public/index.html","d3afa7d608fb42bee79ff1da5e800679"],["D:/Blog/public/infinitesimal-and-infinite/index.html","1386438d4b404d8ef69dbb23706f119b"],["D:/Blog/public/interface-isolation-principle/index.html","53a841ff9592c8f8216330fb0d5bac37"],["D:/Blog/public/intermediary-model/index.html","15bb411b478e733b22d38581e0e5b756"],["D:/Blog/public/interpolation-search-algorithm/index.html","cb8fed55194409977b1b29104f6e19d1"],["D:/Blog/public/interpreter-mode/index.html","2ed4a8ec624d916c7851683f353d6a9e"],["D:/Blog/public/introduction-to-computer-network/index.html","d43dabf3bb4345587161fbfad5263129"],["D:/Blog/public/introduction-to-operating-system/index.html","d1e55b50d8b6a3f3b59589671fa68eb6"],["D:/Blog/public/inversion-of-control/index.html","5cac38c6576f2b4827057462f0831da7"],["D:/Blog/public/io/index.html","223f52d8979fbb025959d9af67ff16f6"],["D:/Blog/public/iterator-mode/index.html","6be9a60ae9dd7fbe6bdfe15cbb6f351f"],["D:/Blog/public/j2ee/index.html","7cf5e5f409c4a8ecb49da223934dd77a"],["D:/Blog/public/j2se/index.html","f3afa7a04d37ee28fd56af105ebd056f"],["D:/Blog/public/jdbc/index.html","77ae73506b06ecf2f5a4ac92326845e7"],["D:/Blog/public/jdk/index.html","d6b78d49bc49b8f09ffbdfffa940f136"],["D:/Blog/public/jmm-memory-model/index.html","bf7cb13225d8d315ad279b5b0315bf78"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","45466fb586ff824fa027ece5bd1ba5fa"],["D:/Blog/public/law-of-robida/index.html","ef3fdbb7414540472ff222ca44ee1c95"],["D:/Blog/public/limit/index.html","f92dc3c2ddc260ed2c81186c62a6e1bf"],["D:/Blog/public/linear-search-algorithm/index.html","8e11593b4767e82c4e91bcfb176f1d6e"],["D:/Blog/public/link/index.html","c70d6e191dbfe256b08ea1433f9c25d9"],["D:/Blog/public/linked-list/index.html","fbbce14c4c4e09d321a0b179b6fb44db"],["D:/Blog/public/linux/index.html","b1f3e2c5ca3608a54a2ff5d9b9ce206a"],["D:/Blog/public/liskov-substitution-principle/index.html","925eb1d5fc6b51fcb450c86bb86b21d3"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","a6c5b37a03ad9eeafc60f1817f454fd3"],["D:/Blog/public/maintenance-1/index.html","8c729670c018703a4bac6ad77e0a024a"],["D:/Blog/public/maintenance-2/index.html","b7a4c260d52e3660b78c0c2df558f7db"],["D:/Blog/public/maintenance-3/index.html","09d7f8a039d5e1c38b2b0fe7d2bb5767"],["D:/Blog/public/memo-mode/index.html","01cfa1d3909cdeb89702d200eb4a54eb"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","6a96cb278f057f599ea4f69abf9485a5"],["D:/Blog/public/multi-function/index.html","0b4967a2ce62d3e7d65082147e3226c4"],["D:/Blog/public/multithreading/index.html","e3599aa8efb69fa0c34fe8b52463b391"],["D:/Blog/public/mvc/index.html","5c804c55b7e681228ef02da6c1b0431d"],["D:/Blog/public/mybatis/index.html","93b3ddba774c1873954bc0ddee9426f5"],["D:/Blog/public/mysql/index.html","a2da1223da2a89151274c9b1841b317d"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","e1866719e38770af704e74b5c0ab5afa"],["D:/Blog/public/objectoriented/index.html","f35ab403f9220c57a2913b441c836abf"],["D:/Blog/public/observer-mode/index.html","1844d919841b0af044bd6c0059a5302a"],["D:/Blog/public/operating-system/index.html","f4c4590bd9e571fa685c64661f0fdf92"],["D:/Blog/public/page/10/index.html","097a16d9f64aa427a9610e7b0508e3b4"],["D:/Blog/public/page/11/index.html","5b13b983c6b8799d98b6584d5802504a"],["D:/Blog/public/page/12/index.html","7c7f7d8168596d2f9c8a69c7b3f27db3"],["D:/Blog/public/page/13/index.html","4f36be209bbf1f7df678e0f9d701acb5"],["D:/Blog/public/page/2/index.html","32bb56d48ae34a87734a548ef1994731"],["D:/Blog/public/page/3/index.html","f1910034020beffca4548bfb8a57dc2e"],["D:/Blog/public/page/4/index.html","8e07064b3df6e96971657384e4fbaef5"],["D:/Blog/public/page/5/index.html","373cb852481ad5da0491cd6ec64a99c1"],["D:/Blog/public/page/6/index.html","cf37833771f74f0c84bdc463d8821e75"],["D:/Blog/public/page/7/index.html","4baeabe26345bc1ac0640de16b85c276"],["D:/Blog/public/page/8/index.html","a0fb8a2171aafad3a7509ae5bfe76cde"],["D:/Blog/public/page/9/index.html","df4a8d896b7a9cb345a381d75447a45b"],["D:/Blog/public/palindrome/index.html","4a72453213aabaea2bd960d4f3e1bea2"],["D:/Blog/public/partial-derivative/index.html","5309cfb8bd5900035f41ea0ea91d7af2"],["D:/Blog/public/pass-by-value/index.html","b243b6bb2b32fd2a9ef3eb934da5f054"],["D:/Blog/public/pictrue-bed/index.html","baaa2b32d199528bce7308c4da6e5b8b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","c335961add1c8039fe0e696e98644691"],["D:/Blog/public/principles-of-computer-organization/index.html","acfc32a73b76c191c5f0d0d6ebd8affc"],["D:/Blog/public/prototype/index.html","94881d2382b381756f080f9ae4c48c93"],["D:/Blog/public/queue/index.html","b5eebaf0ce44f7f5d66072719494f9a1"],["D:/Blog/public/redis/index.html","694fe575261ae0b8f59492842618a56d"],["D:/Blog/public/reflection/index.html","326c7b4db604466048e231e9aa4111e0"],["D:/Blog/public/resume/index.html","8e11b8995b61a3b43fed4bb6b296903f"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","4b846c382e26d7772e3fb33470e6f555"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","c6a530c16f9bb9f3301b101b8b3ce483"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","9f9939520cda00d7c4f8edd0fe58cb7e"],["D:/Blog/public/series/index.html","5c788169c5da8e6b38cf9d73a29146d9"],["D:/Blog/public/single-responsibility-principle/index.html","52b0c0655992c6289d401f48e5f1ca46"],["D:/Blog/public/singleton-mode/index.html","178164f6f11339f61b4a63184511198f"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6afa52c2b4fe5ae7610d70f3ad905005"],["D:/Blog/public/sparsearray-sparse-array/index.html","c399bd5e84c1e60132bccf5a650f0adf"],["D:/Blog/public/spring-architecture/index.html","77a62a4c6ae44c1f7145d173db8d20a3"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","fc6a7ccf43156354a164cf278f93a618"],["D:/Blog/public/spring/index.html","f76ee9597a5ef36b2cf3360d34df49ef"],["D:/Blog/public/springcloud-alibaba/index.html","6c6cdd952bf5127074f3ede162e05555"],["D:/Blog/public/springcloud-bus-message/index.html","fc5208c19a68e848453d6698ac8f5b4d"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","0c4f94c59ee585d761b5c8134714f2de"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","3d710390beb4e756713dff5b0304115b"],["D:/Blog/public/springcloud-stream-message-driver/index.html","a009ff15cd842c98a0e230ec621aac08"],["D:/Blog/public/springcloud/index.html","903dbd8687b02148d23a8d1003ec9569"],["D:/Blog/public/springmvc-environment-construction/index.html","9b611061a859d33556691b3dd0e43855"],["D:/Blog/public/sql-injection-attacks/index.html","8e77790153d076670a818b1b6737ad8b"],["D:/Blog/public/stack/index.html","4808059094a37ccd73ef45163390b226"],["D:/Blog/public/state-mode/index.html","0050a65b77320c77f89e7bec5edb3440"],["D:/Blog/public/strategy-mode/index.html","13e7da8e8fceab84351bd7645aa6094d"],["D:/Blog/public/synthetic-reuse-principle/index.html","67d27d40eff253bd1c1acaa4ab279c94"],["D:/Blog/public/tags/C/index.html","0d68cf36612686956dd0ef93cd07a957"],["D:/Blog/public/tags/Concurrency/index.html","450fb050f686fe5233cbabfe96adc543"],["D:/Blog/public/tags/DesignPatterns/index.html","7b78ee63b49e3aac92d76ea0da7e9a1c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","e6b0d64282209db7b6d50feeec62ef52"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","f8a09e8504e5120ea9f3f46f7a4c30f0"],["D:/Blog/public/tags/DistributedMicroservices/index.html","5dea02142db8369beb71e81ddf1388a7"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","52c176dddecac5b00a558fb7698e34a7"],["D:/Blog/public/tags/Interview/index.html","8ae06ba97a29643906ad4b5cbd1dbfd4"],["D:/Blog/public/tags/Interview/page/2/index.html","495d7fe1ed583eed8f7a009302d7617c"],["D:/Blog/public/tags/Linux/index.html","c1f07c7f70f9297ef307be80be598856"],["D:/Blog/public/tags/Operating-Systems/index.html","0b22d800682c23c4632fc630c718ee33"],["D:/Blog/public/tags/about/index.html","12c3d0aeb9cfeacf762d4d10d7b26174"],["D:/Blog/public/tags/ad/index.html","6bd58c38b764048c7b72631423a1a839"],["D:/Blog/public/tags/dataAlgorithm/index.html","91d9faf75d8080f20685a344a2161073"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","f7b5e73352bffa7731e906b420dfbc02"],["D:/Blog/public/tags/docker/index.html","34ac2ca18e231f7dc79c6b2cae6c6265"],["D:/Blog/public/tags/frame/index.html","31186339df45595ef1947a66508bd843"],["D:/Blog/public/tags/front/index.html","f10adde826326a8e3d6bc39946e00f3e"],["D:/Blog/public/tags/index.html","249ae3714f2920eb795ec046f9a84ed6"],["D:/Blog/public/tags/jvm/index.html","cff5191733db8bb3617428c6f130f3d0"],["D:/Blog/public/tags/maintain/index.html","385131dbda708d5f52ac9f4779895075"],["D:/Blog/public/tags/math/index.html","75b9f81f9fcd7d998633264b53f18ec5"],["D:/Blog/public/tags/math/page/2/index.html","bd4448e88ce83d5092327eb80cf75790"],["D:/Blog/public/tags/network/index.html","55f8cee909b497efd67a9330391a7ed6"],["D:/Blog/public/tags/resume/index.html","90a7139ccfa693573799e940323da273"],["D:/Blog/public/tags/safe/index.html","01c4a8ee42db6ebcfd967d69e8a2c1ad"],["D:/Blog/public/tags/sql/index.html","bc52d1777302a1765364c0447bdaa43b"],["D:/Blog/public/tcpip/index.html","5d755feb441013488fbaf3e4c9707fe0"],["D:/Blog/public/template-method/index.html","bab3872ff02deef4029527965f9c6f86"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","fc9895339f88d2b4a748b04d7908e66c"],["D:/Blog/public/thread/index.html","ef486fb4719a00e420ac448cff72da06"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","453ce17f1f600070a20b1a8d026eeedf"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","bf6e5bd5763a3cd8cae2a38eca56168d"],["D:/Blog/public/visitor-mode/index.html","f343b4efdf2134dfc03b034383dcaf8b"],["D:/Blog/public/xml/index.html","36985ffa6f5e852181e8627e9e24ff52"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","4e17961f0faf905c811ab4c2ee234d0b"]];
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







