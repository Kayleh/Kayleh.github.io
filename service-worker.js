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

var precacheConfig = [["D:/Blog/public/404.html","4f46b3822b6e1bc124efc96dc97c11dd"],["D:/Blog/public/7-sorting-algorithms/index.html","07d803f789991bac2b3310bedc369a9e"],["D:/Blog/public/C-algorithm/index.html","651a962c0be8d888b113774f5706dfb7"],["D:/Blog/public/C-programming/index.html","0aa98009b0f1e0156c4b7fc2e602e1d5"],["D:/Blog/public/Good-use-of-pointers/index.html","8a27e8acc9550755c7987e7c45deff1e"],["D:/Blog/public/about/index.html","e1165fb250722ab707714ebcc8f48547"],["D:/Blog/public/adapter-mode/index.html","08021db271f07fbbf51b0a909be25cef"],["D:/Blog/public/agency-model/index.html","3dc1bd267bb24d57e1a4ec1d72a3fc17"],["D:/Blog/public/appearance-mode/index.html","d946f7c9cc316c5b7588cb5861c48e53"],["D:/Blog/public/archives/2019/01/index.html","57eee51f09dae7140532a30a991e3fd5"],["D:/Blog/public/archives/2019/07/index.html","c906ec8a3ccb1bb9781a37b0327a73f5"],["D:/Blog/public/archives/2019/12/index.html","08990326442f5bce0f6ecefbc58d74a1"],["D:/Blog/public/archives/2019/index.html","4f318d79457d3cbd31d728c526d3cd76"],["D:/Blog/public/archives/2020/04/index.html","ea0b7a40ce11088373dae56a4fc4f60a"],["D:/Blog/public/archives/2020/05/index.html","625ef1238b3008aaf36cb2c06710f5ac"],["D:/Blog/public/archives/2020/05/page/2/index.html","9ba6a38ce33ada37c7635bc7320b588c"],["D:/Blog/public/archives/2020/06/index.html","8e56b64eadedc7f1713ee8b389b7afa4"],["D:/Blog/public/archives/2020/06/page/2/index.html","31b60ff559a7aba0a7c7c728c16e9090"],["D:/Blog/public/archives/2020/06/page/3/index.html","fe88cb3163308aa58a9ee7390fecba66"],["D:/Blog/public/archives/2020/06/page/4/index.html","e0b8e8d2776f69d887283a455af8c86b"],["D:/Blog/public/archives/2020/07/index.html","64d91621a5e99890986d168384ae4d41"],["D:/Blog/public/archives/2020/07/page/2/index.html","53b116dd94064c06ceffdfb3128eb1f6"],["D:/Blog/public/archives/2020/07/page/3/index.html","f1412d4b966667d0e13246b11a09b9d8"],["D:/Blog/public/archives/2020/08/index.html","c2bdbf1e441ec99d259d422668dbc44c"],["D:/Blog/public/archives/2020/08/page/2/index.html","228b68e661804bfe7bfbb0cea5df7e33"],["D:/Blog/public/archives/2020/08/page/3/index.html","de0b3e41d041732792c92dd530bf8eae"],["D:/Blog/public/archives/2020/09/index.html","abb76e84bdbf7730585da1241fba10a6"],["D:/Blog/public/archives/2020/09/page/2/index.html","a2f5bd12ec58f61952e211b3b31d3dc8"],["D:/Blog/public/archives/2020/10/index.html","5ebc5eeaf2a29ca18c7a6c972913b93e"],["D:/Blog/public/archives/2020/10/page/2/index.html","94625258bae5951119f3a0059cb3d87a"],["D:/Blog/public/archives/2020/11/index.html","40852d6ad506d37b19a5d425535f398a"],["D:/Blog/public/archives/2020/index.html","4911b6a0f51cbf01e1adda1cd8ae4570"],["D:/Blog/public/archives/2020/page/10/index.html","7cf61e92aac89731e6f227e02687fae0"],["D:/Blog/public/archives/2020/page/11/index.html","a7ac00df27220b5eaea68ae03288506e"],["D:/Blog/public/archives/2020/page/12/index.html","f2fe66d66461515b8e243452a2ffa617"],["D:/Blog/public/archives/2020/page/13/index.html","aa306d7cfcf489fba09a6dda8e6a06fc"],["D:/Blog/public/archives/2020/page/14/index.html","b531136472265418e76dc34c8a6fe13c"],["D:/Blog/public/archives/2020/page/2/index.html","409f8d49f14675aa67211b510df4a789"],["D:/Blog/public/archives/2020/page/3/index.html","1f798e06c783a120f718a0a8cd87635f"],["D:/Blog/public/archives/2020/page/4/index.html","44901cc84a871f2ff97f7557d59885e6"],["D:/Blog/public/archives/2020/page/5/index.html","002e35b7603faa25f50c871c1c840736"],["D:/Blog/public/archives/2020/page/6/index.html","571836aff8458b5ea92c7b082c730f48"],["D:/Blog/public/archives/2020/page/7/index.html","d879cfed2d4989f98db29c9177c995a3"],["D:/Blog/public/archives/2020/page/8/index.html","045e9c65c47a2321b5ae1c41dcb5593e"],["D:/Blog/public/archives/2020/page/9/index.html","f738ebed169a69139915814940c56a6c"],["D:/Blog/public/archives/index.html","acfe5e4f8ee7c0199a7ce7267cb0ab86"],["D:/Blog/public/archives/page/10/index.html","0efa4987a3d239b1c50fbc9c85de7431"],["D:/Blog/public/archives/page/11/index.html","f7636d69f18b246a73f0bd8d02c4c1f1"],["D:/Blog/public/archives/page/12/index.html","323ad109eb03b223fa301dea7ce60162"],["D:/Blog/public/archives/page/13/index.html","dc8c6b641597ff02f1377ec1dbc3712a"],["D:/Blog/public/archives/page/14/index.html","e29c95e2d759684988f7f04eb48eee0b"],["D:/Blog/public/archives/page/2/index.html","1d8936704eeb991c4a3b46832870578b"],["D:/Blog/public/archives/page/3/index.html","3b392dc085c26abcdf5f154c57940170"],["D:/Blog/public/archives/page/4/index.html","04bd8c6f5ffc5261bc606c2a4b72d46d"],["D:/Blog/public/archives/page/5/index.html","cde244c8c0df8e4e4515f9ec9e4f251d"],["D:/Blog/public/archives/page/6/index.html","ee205da966e3d280306dc2b07aa4a19b"],["D:/Blog/public/archives/page/7/index.html","ef5a782cac8f32a0aaed74418242d189"],["D:/Blog/public/archives/page/8/index.html","9a8f9e61deed8dacf0ae566d0df42531"],["D:/Blog/public/archives/page/9/index.html","e880ba974e6ce2e6c0737d74245cd775"],["D:/Blog/public/array/index.html","83f469027096fb7dc55724eb35bbe68b"],["D:/Blog/public/binary-search-algorithm/index.html","1101fc7a698d535fa3e8b3a7f10b4566"],["D:/Blog/public/binary-sort-tree/index.html","d1140fb9298ce4bb261164069c179ffd"],["D:/Blog/public/bridge-mode/index.html","0a1f02ef725f90018ebbb7f0bda66e78"],["D:/Blog/public/builder/index.html","ad9e4226b2fc52bd482f69f892f35ca1"],["D:/Blog/public/c-pointer/index.html","06144cfe25861b280f8b0b99fd56c08a"],["D:/Blog/public/categories/C/index.html","755421980faeee05d6f004bf09d7d528"],["D:/Blog/public/categories/SpringMVC/index.html","4ce3fabd84d67f03df7a47d3ff70339c"],["D:/Blog/public/categories/index.html","10beafd95975925ac60ca923900ade86"],["D:/Blog/public/categories/linux/index.html","7ebc0f8d52e2d8b838812ed01c31fe3f"],["D:/Blog/public/categories/分布式/index.html","1837fea3b87ae9cc918984071bd89db3"],["D:/Blog/public/categories/分布式/page/2/index.html","0e412c6c3b6c0613a2711400d2f31966"],["D:/Blog/public/categories/前端/index.html","9cf35dfb5944c11223678178a77daf5a"],["D:/Blog/public/categories/设计模式/index.html","714aa57f6a497b07fbd3301f75653fab"],["D:/Blog/public/categories/设计模式/page/2/index.html","213083ee2d9d3e9d2435f0614f55d524"],["D:/Blog/public/categories/高数/index.html","9316bc552e35d8ec870918d67e12e425"],["D:/Blog/public/chain-of-responsibility-model/index.html","5acdb7fe419c1eed485d45db742c03de"],["D:/Blog/public/chinese-and-english-switching/index.html","92f5abe8fffbd7d800505e8a22377e0f"],["D:/Blog/public/combination-mode/index.html","918d3292d405039b6ee5a8abb3d5b65f"],["D:/Blog/public/command-mode/index.html","584d6d843313bb5abb90a3be7eba094e"],["D:/Blog/public/common-commands-of-unix/index.html","1daa83459074717419e1d9b811de777b"],["D:/Blog/public/computer-network/index.html","8c231f13f6f393db9fb58556dcc45a44"],["D:/Blog/public/concurrency-principle/index.html","c3d889ebc0dec4e65bd1463d5a2a8c33"],["D:/Blog/public/continuous/index.html","390a25bd5579a89d451ad2d5da26f1fe"],["D:/Blog/public/contract/index.html","2b89f5f812c738513a5b0e3917c5c499"],["D:/Blog/public/css/index.css","14296bae4e2b401e2984375653fb0353"],["D:/Blog/public/css/var.css","e5e5892d1b9001e48f1a8b88a3f7f306"],["D:/Blog/public/cycle-structure-programming/index.html","f6ed804b4313e25e8246d2247318ce3c"],["D:/Blog/public/data-structures-and-algorithms/index.html","ad3ad46889c9618bb6a4c70edb3b27e2"],["D:/Blog/public/deb/index.html","786dd8185b4d28130844f9f0b20eede7"],["D:/Blog/public/decorator-mode/index.html","5a484ad69887093d69171d8ec49eb778"],["D:/Blog/public/definite-integral/index.html","945cf481ef062f21ba1c61abc1c393c0"],["D:/Blog/public/dependence-reversal-principle/index.html","65178698f1dc1b026a731015fd954794"],["D:/Blog/public/derivative/index.html","cfbb82ca52a6d46b8c48d72125101b0c"],["D:/Blog/public/design-patterns/index.html","b9a2a687809f2bfa154fc88fb670f2f1"],["D:/Blog/public/differential-equation/index.html","e614b66dcc1cf54bbd4c0f39c71aa56c"],["D:/Blog/public/differential/index.html","088eddf3b2a2c17751f65a1802bd44cd"],["D:/Blog/public/dimits-law/index.html","3fee01478f8d1b10dcc168efb04b6337"],["D:/Blog/public/docker-virtualized-container/index.html","078479562cc25e50f820511210d6bb81"],["D:/Blog/public/double-integral/index.html","e8de7acdad5054688afa721c8c142830"],["D:/Blog/public/dynamic-array/index.html","5d257920ab13b0f50c059f49f6383c51"],["D:/Blog/public/encoding-algorithm/index.html","1d9efccdff1ab6d907c0857135cf23c4"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","f18ce0bc7889a56afb6c540029251df8"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","265f754892fe1d64d723cddc8eb4c6cc"],["D:/Blog/public/factory-design-pattern/index.html","74f15511aa70b5cc0c6f6eb942ff009f"],["D:/Blog/public/file-input-and-output/index.html","536d1628dec741498e4c95ca86fdb0b0"],["D:/Blog/public/flyweight-model/index.html","7ba43b040d213f8091f62e0d6b3a2836"],["D:/Blog/public/function-graphing/index.html","271cac3ab6002d0c3705231552efcd3d"],["D:/Blog/public/gateway-service-current-limit/index.html","e7fb3307bb0c0d86a5e03c3eb518b211"],["D:/Blog/public/gc/index.html","210672f0cf85ddd3f61530e9e8fda38c"],["D:/Blog/public/generalized-integral/index.html","bb035ab77917db0d4d110d449dff2ab6"],["D:/Blog/public/google8102e2f35ce9e391.html","2ee5a2d79195ffc1bcbfdf88500601e6"],["D:/Blog/public/gulp-compresses-static-resources/index.html","3ebd8df5255b0ba4cae3ea428697156b"],["D:/Blog/public/hash-algorithm/index.html","4380dd1b161dac41b1f9e507a2a307d9"],["D:/Blog/public/heap-sort/index.html","74c8093d37e22907f38707ea15d8bef0"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","d36497d271419efc63edc690980627b9"],["D:/Blog/public/http/index.html","cc8d2db82095a01a658b7831126a3b5c"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","58ed7ff5489ec016d4f9ee4d8ea84cdb"],["D:/Blog/public/index.html","dbc27f42bacc43bb76fbfc8c4391c933"],["D:/Blog/public/infinitesimal-and-infinite/index.html","fb16a118513fc9ca74ccb26e19bdfe6c"],["D:/Blog/public/interface-isolation-principle/index.html","31a91859d0ef4362ce1ef415562f7337"],["D:/Blog/public/intermediary-model/index.html","53cc94bceda3cc0ec632138af0cbf8a9"],["D:/Blog/public/interpolation-search-algorithm/index.html","db8d32635ebed474f130a5d2d7a80af7"],["D:/Blog/public/interpreter-mode/index.html","30da3302be8d8b85905ce6eabb160f9b"],["D:/Blog/public/introduction-to-computer-network/index.html","c2da480c9c803c11521959d2a148a6ff"],["D:/Blog/public/introduction-to-operating-system/index.html","61e946ef805fb970dd2b4af278b32de0"],["D:/Blog/public/inversion-of-control/index.html","a1c31b6fbab70d184544a3946ca6ebdf"],["D:/Blog/public/io/index.html","0e6f77cb5ea375fba63ad637ce8abe6d"],["D:/Blog/public/iterator-mode/index.html","54e4e85d142d6e0f8a0c590abc1f51e9"],["D:/Blog/public/j2ee/index.html","4ab10ae385b8c6312056cf82470a7d96"],["D:/Blog/public/j2se/index.html","8348c1507ab8a1edbf5eb444bdebdc18"],["D:/Blog/public/jdbc/index.html","d228bbb5f9e337123aa0683bb1c51c4e"],["D:/Blog/public/jdk/index.html","8c70ed0ab2bef514babe5363e042df7d"],["D:/Blog/public/jmm-memory-model/index.html","426dc5bb567f4246f24ed0379a43ab53"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","e5308567054c69396ddfd93968a95bab"],["D:/Blog/public/law-of-robida/index.html","c3ee4a1de3d518e8da276da591004a73"],["D:/Blog/public/limit/index.html","5c091e6a5f52eb70d7708d20d3693175"],["D:/Blog/public/linear-search-algorithm/index.html","3509490613ccf8ca1b94560417554e55"],["D:/Blog/public/link/index.html","f8e77e64470c2bbd4e864b46dd82c0a0"],["D:/Blog/public/linked-list/index.html","2126fde527864b0ec0cc7d46cdb002ed"],["D:/Blog/public/linux/index.html","abed214ce39d052e98574d892adc2b81"],["D:/Blog/public/liskov-substitution-principle/index.html","8cccf9a93b548b515e417c6f55139253"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","8ae2c85348f022cf3da829ec86360a1e"],["D:/Blog/public/maintenance-1/index.html","3d1e4916fca711ea3e1e39046c74632e"],["D:/Blog/public/maintenance-2/index.html","9945b937fc9fad8e89dcb8f0ea8551f5"],["D:/Blog/public/maintenance-3/index.html","7d3a206c2f5e5c94b24cc06d8700037c"],["D:/Blog/public/memo-mode/index.html","b9043b8b7547f8374cad658007ea65e9"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","529114f09fce5dd7b4aabfd6c6b99eb0"],["D:/Blog/public/multi-function/index.html","7598be8825382a48a5f9fcc6258fc63f"],["D:/Blog/public/multithreading/index.html","5f094f2035739e55625f12011f461e24"],["D:/Blog/public/mvc/index.html","337d7ecfeacedecdbf2bee3480c79f5e"],["D:/Blog/public/mybatis/index.html","65e438061a45da95e9c06c0dcc93b1cf"],["D:/Blog/public/mysql/index.html","d343deef15162bedd06728aa5468aa03"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","0fa981d9af6d15ccb3e2a189134c981b"],["D:/Blog/public/objectoriented/index.html","90f853834adbca860ac43a8b0fe241c8"],["D:/Blog/public/observer-mode/index.html","7e5a8bb5ad567869cf387b99c4d8868b"],["D:/Blog/public/operating-system/index.html","dfb565aa730819108b824508be58102e"],["D:/Blog/public/page/10/index.html","2a4eee79ac674eedf0a7774adbaf97a0"],["D:/Blog/public/page/11/index.html","627f5f7925722976fc8895a86e2a583d"],["D:/Blog/public/page/12/index.html","292babd4ca3f8c0f5577a199ae8ee1fa"],["D:/Blog/public/page/13/index.html","a3a262b3e0d0f18207acc03dbaef1f72"],["D:/Blog/public/page/14/index.html","c8f6b3b5ecffba40765ad065a2135cdb"],["D:/Blog/public/page/2/index.html","a549a8ae8474335ec16b843c6a643c50"],["D:/Blog/public/page/3/index.html","921e040b412359d90747209d16d5ba59"],["D:/Blog/public/page/4/index.html","4d9eef21ff79d2b27bfea493cec3b190"],["D:/Blog/public/page/5/index.html","c93b6ed9054bbf6f7d771e49968e202f"],["D:/Blog/public/page/6/index.html","9b5dda94be341c824cfd25b4300bfc5d"],["D:/Blog/public/page/7/index.html","ec5887794d863e35f2e6a832e50129f9"],["D:/Blog/public/page/8/index.html","543c71633b6d63e043de5969d87189f2"],["D:/Blog/public/page/9/index.html","8797d26c16805e7ce453ff81cf5ef7b7"],["D:/Blog/public/palindrome/index.html","2a5f24af17d05b5fe846ce86be38a11c"],["D:/Blog/public/partial-derivative/index.html","2e83df0a8ef5f622299c3639e90a55bf"],["D:/Blog/public/pass-by-value/index.html","f7f753bb90a9008ae1468069097c061a"],["D:/Blog/public/pictrue-bed/index.html","e4c25e4d474a68874e20a3b46b472f1f"],["D:/Blog/public/principle-of-opening-and-closing/index.html","909e476e8c79c325d2565de231935f51"],["D:/Blog/public/principles-of-computer-organization/index.html","74ae81bbcafe1c826f52a790ba95c4fb"],["D:/Blog/public/prototype/index.html","5a99f5aa3be01ca48289c8d1cddb01be"],["D:/Blog/public/queue/index.html","c9b266d35a605d1ab358a4aeb4e160a1"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","ac8f297f86e0d560c220c59712f235fa"],["D:/Blog/public/redis/index.html","2d3f90d81455cb392cd44b75bfabb3f3"],["D:/Blog/public/reflection/index.html","b96e47bc950c8f42d5b2fad8816b72ff"],["D:/Blog/public/resume/index.html","ef5fe33636251d24946a125e59e13de9"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","709b2bd21c08c817da5077cc4ad40a15"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","fd66db57bbb9126688c082c5797d33a8"],["D:/Blog/public/select-structure-programming/index.html","ea2d0ace56725394677d430214c82801"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","569cf51946ca3ea32591c07afe128a21"],["D:/Blog/public/sequential-programming/index.html","35c5b5d28a0f47a7292dbe74e238501f"],["D:/Blog/public/series/index.html","887d15a2f235bdb6961adc6bfca9db0e"],["D:/Blog/public/single-responsibility-principle/index.html","24d7b78e3595ab9b739ccef4c2b0390e"],["D:/Blog/public/singleton-mode/index.html","13810d812dde87f927e05ce3919b1d19"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","cfa2be26dabe04fe6efae3f344258a1b"],["D:/Blog/public/sparsearray-sparse-array/index.html","7efa8b88cde5793a7678b5c5898c8c14"],["D:/Blog/public/spring-architecture/index.html","b1849252a5bfa57eb9ff91bf3e0dfc1f"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","e4d77cbfc5f4cb4b8c8bd19c1d7688bd"],["D:/Blog/public/spring/index.html","403b04f37f19cb81a2d62b83b314f2de"],["D:/Blog/public/springcloud-alibaba/index.html","f82f2c5a4bb8748ca82c4914535f7362"],["D:/Blog/public/springcloud-bus-message/index.html","5b2bb7822a88fa8b866265557966a9b4"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c8613b28696465a62cf411d9c2b50b63"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","675351a9a095fc5bfce6fe125abb2256"],["D:/Blog/public/springcloud-stream-message-driver/index.html","98a976df3dfb19363ce2df9ffd43012a"],["D:/Blog/public/springcloud/index.html","32f8da81050004b9eafe466663084427"],["D:/Blog/public/springmvc-environment-construction/index.html","85a786aa8800be639ab258f1ceafd178"],["D:/Blog/public/sql-injection-attacks/index.html","93555f991863c119dba9f8c29ec6da27"],["D:/Blog/public/stack/index.html","5812aae2213e391782705ac86ea726a9"],["D:/Blog/public/state-mode/index.html","35e6708adfc20a5bb240174275b6baed"],["D:/Blog/public/strategy-mode/index.html","ba31527562b7e58655c9c96e0117081f"],["D:/Blog/public/synthetic-reuse-principle/index.html","91a9183e311d1fcc3b7fdbd13dc86842"],["D:/Blog/public/tags/C/index.html","2dbb3814dd8130e5123dbd4ad600a384"],["D:/Blog/public/tags/C/page/2/index.html","47333fd802d94344e4cac94d3f887446"],["D:/Blog/public/tags/Concurrency/index.html","76c732a901d292c6a77207f194063af4"],["D:/Blog/public/tags/DesignPatterns/index.html","4a47a6007769db5708545f45248d3594"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","607013303be038ff28d59d4cc1f51d40"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","d4f13fda04f7a7192f5a75d45be841a9"],["D:/Blog/public/tags/DistributedMicroservices/index.html","18d76c34658953c86022308f5e2ca012"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","4fe4911d3a0aea8bd5524564451a4ac0"],["D:/Blog/public/tags/Interview/index.html","eab5d5ee7d17f29f04b7474b8bd23383"],["D:/Blog/public/tags/Interview/page/2/index.html","7bcfdf7a9ec0aa565ec366f8e061ad2c"],["D:/Blog/public/tags/Operating-Systems/index.html","da780b932f469e558c2660d924f91bc1"],["D:/Blog/public/tags/about/index.html","d068905a9649f7408a39fdd3b3b801e3"],["D:/Blog/public/tags/ad/index.html","8d657cc31de4dee3ffddf7530017af6c"],["D:/Blog/public/tags/dataAlgorithm/index.html","fc81220bbd15e85ec0a9020ab219b791"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","17bfb5ded98d98b8c9aa841982669473"],["D:/Blog/public/tags/docker/index.html","271278ab35189008e8bd350993f220a7"],["D:/Blog/public/tags/frame/index.html","d96c0f9593bf96fb4f293ebf38da7ff6"],["D:/Blog/public/tags/front/index.html","341d3320d869b2a9f2f4c10b85527b52"],["D:/Blog/public/tags/index.html","a43cbcd9193ec83b0f6720e124c04718"],["D:/Blog/public/tags/jvm/index.html","aacd0a69b01f2cee026a9634042eed63"],["D:/Blog/public/tags/linux/index.html","25d50fe7790f1ab24b17254e906bc957"],["D:/Blog/public/tags/maintain/index.html","86af681cf39e5464e6259abb43b107b4"],["D:/Blog/public/tags/math/index.html","b8851c4e0724fa31693266097f3f740b"],["D:/Blog/public/tags/math/page/2/index.html","413ba99606beb4cc91ada1b1987175f4"],["D:/Blog/public/tags/network/index.html","043a4157f04e3b8260d719a132118154"],["D:/Blog/public/tags/resume/index.html","213cb2f92801d837227f5c43b0ff0a39"],["D:/Blog/public/tags/safe/index.html","35236298b36ed4e7fe7b8d6e0910718c"],["D:/Blog/public/tags/sql/index.html","ba9b079c7bce736df9e46b5a6c5d14b1"],["D:/Blog/public/tcpip/index.html","dff67955a531dc8cd35642b82b38ed92"],["D:/Blog/public/template-method/index.html","1bee8bd355d0263dfca5107079a80b96"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0942b6e9b94350f232c63cd9845a1ba8"],["D:/Blog/public/thread/index.html","994d36ef403aa59b3f5042657143bf64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","dee6fdc437f14e16a382530804764707"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","0ace5bf4a6ab673a67a77e1bcc78c586"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","fa6f85770184526282ed22e0972d2c21"],["D:/Blog/public/users-create-data-types-themselves/index.html","784f9857a4e0ddd2462152e28a8c89bf"],["D:/Blog/public/visitor-mode/index.html","bac4d8e4cd2dbaa0d3915dd7ff541265"],["D:/Blog/public/xml/index.html","808db478ea2dcd806ebe3297a5a2b87e"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de3de95d1b31abba2a7bb05af34e4324"]];
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







