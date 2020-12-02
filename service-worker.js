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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","fb3ba41fc42a7867269dbdbdab789212"],["D:/Blog/public/C-algorithm/index.html","6de9223e1cf35dd9a1163f668f028d1a"],["D:/Blog/public/C-programming/index.html","489cf98617a9d7602af71f7b7eb54377"],["D:/Blog/public/Good-use-of-pointers/index.html","99b37e14f2a6f096ab77ec20e1130793"],["D:/Blog/public/about/index.html","74cde216557e3dc5c7b685c5b6912109"],["D:/Blog/public/adapter-mode/index.html","fa7afc848433420020420843d126ef16"],["D:/Blog/public/agency-model/index.html","64c53b83bcac81de3fbcf419beaa70ae"],["D:/Blog/public/appearance-mode/index.html","129e7f74c5a77af74f2ea3e067be20ff"],["D:/Blog/public/archives/2019/01/index.html","690884d9ab3f9545a3d2191b39a1dab5"],["D:/Blog/public/archives/2019/07/index.html","630b153e14b1870b2a5023a99ecb944d"],["D:/Blog/public/archives/2019/12/index.html","1a12d7e6b3051a7b6c765f1c0252a4dd"],["D:/Blog/public/archives/2019/index.html","12af37b718753a105465a53647820138"],["D:/Blog/public/archives/2020/04/index.html","34f1b53e49f91242ef5b8b8cbe0d88c2"],["D:/Blog/public/archives/2020/05/index.html","5709b084e74d5484e4f66b592e29249d"],["D:/Blog/public/archives/2020/05/page/2/index.html","9fca39a06d805337a23dfc984e9f7d54"],["D:/Blog/public/archives/2020/06/index.html","2b50cf5a1e943a1b4b247c0d1920a54e"],["D:/Blog/public/archives/2020/06/page/2/index.html","7e3e5f846c307527f3ec50a489398ca6"],["D:/Blog/public/archives/2020/06/page/3/index.html","3505df6fe01a570896ce68de7d0a371d"],["D:/Blog/public/archives/2020/06/page/4/index.html","e3e8bfd4348e211c96744728a893fe53"],["D:/Blog/public/archives/2020/07/index.html","98134425bf106f90a7f8bacb442a9418"],["D:/Blog/public/archives/2020/07/page/2/index.html","98f1f213abfd87f630b74cbeb34397c6"],["D:/Blog/public/archives/2020/07/page/3/index.html","2a6657b9526b9dc5aafd676a0fab54ca"],["D:/Blog/public/archives/2020/08/index.html","a1ac8e5605d681f5cbd21273150e9e7a"],["D:/Blog/public/archives/2020/08/page/2/index.html","b9c419ea1ea8863a1e0eee3ccfbfe0c6"],["D:/Blog/public/archives/2020/08/page/3/index.html","b0622ad91487f9562e9a314c8ece03b1"],["D:/Blog/public/archives/2020/09/index.html","e73faec05745630ac510671bbb6b999f"],["D:/Blog/public/archives/2020/09/page/2/index.html","826ffb66ff17598919870a7d4c2c4889"],["D:/Blog/public/archives/2020/10/index.html","48a892e8695e83a74d21ec5f091b6c73"],["D:/Blog/public/archives/2020/10/page/2/index.html","0baa12edaad82b265e120e14261d86f0"],["D:/Blog/public/archives/2020/11/index.html","4a5a96c0fa530a1919d58b0946f2b7da"],["D:/Blog/public/archives/2020/index.html","099c9c3776b90dacb598bb39f41b894a"],["D:/Blog/public/archives/2020/page/10/index.html","6a55669c00d056955824eedf9f257ab4"],["D:/Blog/public/archives/2020/page/11/index.html","5ca496d9752cbc2b2d2bb5860bb07b75"],["D:/Blog/public/archives/2020/page/12/index.html","e158bd95778236b15e1affd72f3c74d2"],["D:/Blog/public/archives/2020/page/13/index.html","9b9578c0e6f4f3a5ae57b5eb640cef7a"],["D:/Blog/public/archives/2020/page/14/index.html","4d47b91652ef29d779ccdd9acf64cc07"],["D:/Blog/public/archives/2020/page/2/index.html","b5b7624469b753f55d846d2a75bb43db"],["D:/Blog/public/archives/2020/page/3/index.html","0f5070c2124049478d8e206242dd7976"],["D:/Blog/public/archives/2020/page/4/index.html","221c573fd206b0a3bc8fff8dfde7dd82"],["D:/Blog/public/archives/2020/page/5/index.html","42d62c621257a4b17fc876c2a8555a09"],["D:/Blog/public/archives/2020/page/6/index.html","d8d64ce12c67c31a65b7ef0c3cda121e"],["D:/Blog/public/archives/2020/page/7/index.html","5d18dc786e0d015af4aeda64641c15a3"],["D:/Blog/public/archives/2020/page/8/index.html","ce770a16e0beca9108bf91df5bebfb65"],["D:/Blog/public/archives/2020/page/9/index.html","fa826583477dbd6384777a02c4e267ab"],["D:/Blog/public/archives/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/10/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/11/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/12/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/13/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/14/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/2/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/3/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/4/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/5/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/6/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/7/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/8/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/archives/page/9/index.html","65386f6bbf2746ae38f6fe2ad4c6eaed"],["D:/Blog/public/array/index.html","bd6df89b3cbe2da82a9f9ed1937883fe"],["D:/Blog/public/binary-search-algorithm/index.html","872170e97189c4212f58b00bdf286169"],["D:/Blog/public/binary-sort-tree/index.html","004e8433ce14df4bc62954066e579777"],["D:/Blog/public/bridge-mode/index.html","a3a076f71497e7c691a800b72c5a2cb4"],["D:/Blog/public/builder/index.html","8fb6f48ac603c911a70a376cfef69093"],["D:/Blog/public/c-pointer/index.html","0a8c9841cf6f8e86148f6ab9381931f3"],["D:/Blog/public/categories/C/index.html","66bc8dbb814d1f9b7cfd76b5f7376e0a"],["D:/Blog/public/categories/SpringMVC/index.html","081cf15efb4a718240108b853dbddc97"],["D:/Blog/public/categories/index.html","d28b59665b39d62c6dc0e1ce1890761a"],["D:/Blog/public/categories/linux/index.html","bac29446542df39e587cf08e85599e85"],["D:/Blog/public/categories/分布式/index.html","4c3175ceb64de80ca007a93bd145170e"],["D:/Blog/public/categories/分布式/page/2/index.html","8a7c9a6e2877d872139fa3bcd4d2e575"],["D:/Blog/public/categories/前端/index.html","7b991d57c488717c6e55b7ec63f6fd9d"],["D:/Blog/public/categories/设计模式/index.html","982a3ae2de36f5368fc1232bba17f2c1"],["D:/Blog/public/categories/设计模式/page/2/index.html","628e7ed7011920afa28c29e7d8fc9c05"],["D:/Blog/public/categories/高数/index.html","67e2ef5891d9d268e45390a9e78822b1"],["D:/Blog/public/chain-of-responsibility-model/index.html","720f1d35c5ff14d568dd5cddc72e382f"],["D:/Blog/public/chinese-and-english-switching/index.html","241e934ae20970e2d75581a0da5a81e4"],["D:/Blog/public/combination-mode/index.html","308c00efba152f333331d96a9fa907e9"],["D:/Blog/public/command-mode/index.html","dfe9a800ccb63a08a56cfbf31ada54b0"],["D:/Blog/public/common-commands-of-unix/index.html","21d2ed02030acb3a8da364e1f92e9524"],["D:/Blog/public/computer-network/index.html","dad0608f85f2438f17564029bd7f2890"],["D:/Blog/public/concurrency-principle/index.html","e61e63cdfa3f24f74c96491410c12500"],["D:/Blog/public/continuous/index.html","67aa6215de57037f6f3f6ce556b9127d"],["D:/Blog/public/contract/index.html","42929fb51cf57ccab969e2b90625a1d2"],["D:/Blog/public/css/first.css","85cff81a2415284023c17c9a05a04271"],["D:/Blog/public/css/style.css","fc356aeb14f22c49696f4c6d439552e7"],["D:/Blog/public/cycle-structure-programming/index.html","5514d866e74a46644f8ddd64ecde7a2f"],["D:/Blog/public/data-structures-and-algorithms/index.html","a538987d1f841436d38b1adaa153823e"],["D:/Blog/public/deb/index.html","adbabebde87c211f9a29fbc99bbbcac7"],["D:/Blog/public/decorator-mode/index.html","93170ae63d07aafab21ed76f9746dc51"],["D:/Blog/public/definite-integral/index.html","55d276d01d885a79cb2cc626e740c9a7"],["D:/Blog/public/dependence-reversal-principle/index.html","5e11372530db9521ee5339f6f3b9c9b2"],["D:/Blog/public/derivative/index.html","baee229f558eb75d96f42254d8dcdd27"],["D:/Blog/public/design-patterns/index.html","75e78e88bc3b69db5bd04399b498fb0b"],["D:/Blog/public/differential-equation/index.html","d8944a3cebd0cab76b1044876ed97dc6"],["D:/Blog/public/differential/index.html","6cb7ec702f838b5ed33a5c2bf0941ad6"],["D:/Blog/public/dimits-law/index.html","bf08c37fcb3fd20b638fdca515093959"],["D:/Blog/public/docker-virtualized-container/index.html","be17cc232faded282f2dcf4370ef2544"],["D:/Blog/public/double-integral/index.html","bc38a0eaf39cbc4aca779de568c53e32"],["D:/Blog/public/dynamic-array/index.html","2729b49e292e13963cc228e21368a0c1"],["D:/Blog/public/encoding-algorithm/index.html","ad7273d68d09a7bf89cdfe2751172353"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","b7249b799c8fa3f880f6a601c7ef9a74"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","7427fd665c71bdf0a245ca02f88a7d69"],["D:/Blog/public/factory-design-pattern/index.html","5baf4ad6c68897214a390012e1e01d46"],["D:/Blog/public/file-input-and-output/index.html","f9cb5ce0c1355aa5df1e08c63c8cd3a6"],["D:/Blog/public/flyweight-model/index.html","b701cac6ec24cf8a85120d9ea82e677b"],["D:/Blog/public/friends/index.html","30c8aee0c1f0b601e5520efd49e289f6"],["D:/Blog/public/function-graphing/index.html","0da60396116516041a638c1af008ed15"],["D:/Blog/public/gateway-service-current-limit/index.html","983aed8b07f13d356b416bcbf2493bae"],["D:/Blog/public/gc/index.html","93f21dfe4535107d6362ea2af873ba35"],["D:/Blog/public/generalized-integral/index.html","90aac5aaadd6311f0702c08dc1d80f5e"],["D:/Blog/public/google8102e2f35ce9e391.html","ca570c1e885c8d9b04af1ca74fc7470a"],["D:/Blog/public/gulp-compresses-static-resources/index.html","0e6a7cf94aa1ed80bf52032075ed6799"],["D:/Blog/public/hash-algorithm/index.html","646dbf12eb43c32551fae8babe9751e9"],["D:/Blog/public/heap-sort/index.html","ecbb0111416af641a428b29af69e2d6f"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","c733a6bf7500bbd6fa552b9a6d5ed405"],["D:/Blog/public/http/index.html","61c53cd087bda655f18f63a9e038166c"],["D:/Blog/public/indefinite-integral/index.html","134adef13eea48821c4a97da03e79ed4"],["D:/Blog/public/index.html","5042a5734514683f38c6e819918d46ed"],["D:/Blog/public/infinitesimal-and-infinite/index.html","877d6d7860aa888b464d64a56f60d35d"],["D:/Blog/public/interface-isolation-principle/index.html","a2b009f5e9b9c269846aa6791941a18d"],["D:/Blog/public/intermediary-model/index.html","b725de9fc1bd10ab7c33fdfaebc42e51"],["D:/Blog/public/interpolation-search-algorithm/index.html","27c5ac56952114b50bb1081fa6d2d1fe"],["D:/Blog/public/interpreter-mode/index.html","ab92967c5256cc6a9a1e842b887f8939"],["D:/Blog/public/introduction-to-computer-network/index.html","df72f51831ad0b85ceafc36a6db73d88"],["D:/Blog/public/introduction-to-operating-system/index.html","020cc881218bb8b0b353e2f210384c63"],["D:/Blog/public/inversion-of-control/index.html","caee91efe94acc28969ba9341d117b96"],["D:/Blog/public/io/index.html","e09ef1f40c5bb31364c55c366331d843"],["D:/Blog/public/iterator-mode/index.html","d69126a035e1bd9fb498e1b7c94b980e"],["D:/Blog/public/j2ee/index.html","9bedeb6a97f1f43de17e034ae354ebd4"],["D:/Blog/public/j2se/index.html","31c3878e2fdbb62022b820713e4104ed"],["D:/Blog/public/jdbc/index.html","19700b2075e8e2ae26af316836a1d09b"],["D:/Blog/public/jdk/index.html","70ca7f7c4958de1941305cdeaace9cc2"],["D:/Blog/public/jmm-memory-model/index.html","edc5ec3dad94980287e8648bc5e16bb6"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","2f632d7210dc319fb622d59d589ba2be"],["D:/Blog/public/law-of-robida/index.html","d9f4b13eef7233b3543d661d0358e59e"],["D:/Blog/public/limit/index.html","b5ca1482f4c79cecb6b652186bd5d12c"],["D:/Blog/public/linear-search-algorithm/index.html","407e5af17369a62eeb80bd36874be663"],["D:/Blog/public/link/index.html","96158f754ebd16686e0b9e80ee87a2b4"],["D:/Blog/public/linked-list/index.html","334bd5a10ef2c52129e94dad3428ca1d"],["D:/Blog/public/linux/index.html","f7d08bb3980ba619f2a468838b5ea6c3"],["D:/Blog/public/liskov-substitution-principle/index.html","272e6181f1ed742c50adbcf3652423e9"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","21f663e2c017bb4a29bd6372a175dff1"],["D:/Blog/public/maintenance-1/index.html","fdfd9278daeb58f305c75fa366815c4d"],["D:/Blog/public/maintenance-2/index.html","ded541b222cb837ec86690c870d9629b"],["D:/Blog/public/maintenance-3/index.html","a2f6fc801e84060715a4c8ae7798faad"],["D:/Blog/public/memo-mode/index.html","813a0de05d6ce8a7530efeae247f8c9f"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","c451577c2ab7f02f76690830df657171"],["D:/Blog/public/multi-function/index.html","afce79de6fb5607f935e9ba5f39088cb"],["D:/Blog/public/multithreading/index.html","72ebac750cc43519f08d57f7e74552e5"],["D:/Blog/public/mvc/index.html","ba8bc207a6d1efac0ce416b6a2d86ad1"],["D:/Blog/public/mybatis/index.html","decac669881977b1a697c8986c293a88"],["D:/Blog/public/mysql/index.html","26b41a5d22441e34e9ef52e97d0fea37"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","14bc01d4f5dfd79478f894c08850ed2a"],["D:/Blog/public/null/index.html","5e610f9149428f9ed497c848c593eefc"],["D:/Blog/public/objectoriented/index.html","f855bf24c16345f7e920bf5f76177e2e"],["D:/Blog/public/observer-mode/index.html","ca78b9dd13e22d2c10075e24bef53116"],["D:/Blog/public/operating-system/index.html","dc86e784593bea33d5425c5a579dcf36"],["D:/Blog/public/page/10/index.html","a8fdbf1a396ba50709cf401d4c208522"],["D:/Blog/public/page/11/index.html","26b4314399610b6d26ff6960f08a5e29"],["D:/Blog/public/page/12/index.html","ad3b6d5546e39a9c804ee9eaf6047d17"],["D:/Blog/public/page/13/index.html","b60feb2fcaeefa94eb89f6f8235b3603"],["D:/Blog/public/page/14/index.html","d3a1f2ca3a058eb9996e1261eb6c9bca"],["D:/Blog/public/page/2/index.html","0312fdfec281ce2ca3e6ae9c5697b6e9"],["D:/Blog/public/page/3/index.html","954824b7b155062f7b0a5ab49c82e172"],["D:/Blog/public/page/4/index.html","2fb91cde740e92ff069449edf4900c36"],["D:/Blog/public/page/5/index.html","3eefbacde724ec2614cacd283388bda8"],["D:/Blog/public/page/6/index.html","67ba85dbcf3d9b60522a7abe6f6317e3"],["D:/Blog/public/page/7/index.html","53444687ca3e330f8fde3c4c8a117312"],["D:/Blog/public/page/8/index.html","7c132e4b2dfc643030f017bd19d22acd"],["D:/Blog/public/page/9/index.html","be10d3f78a8ed2540f83e9271ffcd477"],["D:/Blog/public/palindrome/index.html","ca40952a4df17ab5e4343ea1715330cf"],["D:/Blog/public/partial-derivative/index.html","0ebd0405346e88fd18b36a2a2c3135c9"],["D:/Blog/public/pass-by-value/index.html","45bbe14e78bf7b2df09012fa9bcf53fd"],["D:/Blog/public/pictrue-bed/index.html","95bbdbfd6caa28ff7a231b00e0bd2b1d"],["D:/Blog/public/principle-of-opening-and-closing/index.html","3f6306f0af4b9221ac92c033ca81a697"],["D:/Blog/public/principles-of-computer-organization/index.html","0a79ca2b986bc41878caedf60918fe1a"],["D:/Blog/public/prototype/index.html","b32458668806a8e709ec6bc717b175be"],["D:/Blog/public/queue/index.html","75264e70e72e10a2bf044c99e84e9373"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","690be87813651d5a355bb9237e5d0034"],["D:/Blog/public/redis/index.html","ed66b51869f06793e553b2c22f572044"],["D:/Blog/public/reflection/index.html","ef89f36e308228e287ad65c487b1247f"],["D:/Blog/public/resume/index.html","c2c651f37a6427fd316f03ded8c98b92"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","a46a7665b09525b450953a8ddcf37292"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","041c8fca43696f34356de53b9c29d4e9"],["D:/Blog/public/select-structure-programming/index.html","a4bb770bc7f4ad9b5af5219f1a386624"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b00a2a7380aad58f5b8d18538859ab43"],["D:/Blog/public/sequential-programming/index.html","11b5e6870792aed1b3eeccf81dafc26a"],["D:/Blog/public/series/index.html","57c3a927590ea9eb925178c5e8e51596"],["D:/Blog/public/single-responsibility-principle/index.html","f0fcd5d869bf7dac5a815b3daf17547e"],["D:/Blog/public/singleton-mode/index.html","166e6e3e4f2d5073ecae2e5e652c97bf"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","2cc710019ebd17352a8beb852d2bd360"],["D:/Blog/public/sparsearray-sparse-array/index.html","6bb5466639c5f89c67d749d1eab3cf5f"],["D:/Blog/public/spring-architecture/index.html","5f1547dc0ea14c0a2af7b4f43e3ad981"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","f1bfa65b25955b6c03f7f391f26392e0"],["D:/Blog/public/spring/index.html","3c9f1a032d1875f15cbb2d6b39035797"],["D:/Blog/public/springcloud-alibaba/index.html","f941546fe221c698b1f75ba3a3b1398d"],["D:/Blog/public/springcloud-bus-message/index.html","c4d07494fd839f7c271bd9adb7ea689f"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","356865e7b1cd5959f3ed6634cc6b31a3"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","36d36fe766112c32a6ffadbf51fa0e51"],["D:/Blog/public/springcloud-stream-message-driver/index.html","151b294227530ae10d40de8f21d92468"],["D:/Blog/public/springcloud/index.html","94a76b9237f9e49b118c69fd493748ec"],["D:/Blog/public/springmvc-environment-construction/index.html","0ed7b4cdb68fc44cfc8e7b44ada08834"],["D:/Blog/public/sql-injection-attacks/index.html","f0395b4f753b1020fa1dfd74ec1903d0"],["D:/Blog/public/stack/index.html","4a6be7b55d1586dbbe4ae6fb7d2f4309"],["D:/Blog/public/state-mode/index.html","397d57c089e377c6ec03bc35eda858ab"],["D:/Blog/public/strategy-mode/index.html","bb00af236d78b316d3d5abc5fbe950af"],["D:/Blog/public/synthetic-reuse-principle/index.html","e20932613e7b5bdde1d61b8a19856a55"],["D:/Blog/public/tags/C/index.html","88e083ef68a4fbabfc6c95f178ac503f"],["D:/Blog/public/tags/C/page/2/index.html","6b0068aa9adb54cae868ff8863cbf2ff"],["D:/Blog/public/tags/Concurrency/index.html","40ee1485e54b725599d2a218f1a4cccf"],["D:/Blog/public/tags/DesignPatterns/index.html","40fbfafb014da6049f88e82df764072d"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","1df18d15fe570d19fff07f7535324251"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","28206eef75e795da0ac49bd74b6bfa29"],["D:/Blog/public/tags/DistributedMicroservices/index.html","4747667934845955d6e54ebdfba0860f"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","583585f663952e911d80d752763ecac1"],["D:/Blog/public/tags/Interview/index.html","4a1bdd98970511c121b2cb7e8addac92"],["D:/Blog/public/tags/Interview/page/2/index.html","d42af8ebb32a29e0597bf747245fb27a"],["D:/Blog/public/tags/Operating-Systems/index.html","5a9f2a871262fdf0c9ebabd847d09ab9"],["D:/Blog/public/tags/about/index.html","826fbf00e570f21f3567cfb231025ada"],["D:/Blog/public/tags/ad/index.html","7d8da15bcb25f090288118890c00d639"],["D:/Blog/public/tags/dataAlgorithm/index.html","118022bbc4c4daf8c12e8672baf56484"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","7af7037f1ef510960d669234b4027beb"],["D:/Blog/public/tags/docker/index.html","64a20e1ab27725f6a4ff76a923f9ec79"],["D:/Blog/public/tags/frame/index.html","5e78d31f74339f887635fea2561078fe"],["D:/Blog/public/tags/front/index.html","902ac5698c445c4260561f6a6d0dca0b"],["D:/Blog/public/tags/index.html","2a39d75648d476f3c659f7925cdb47a5"],["D:/Blog/public/tags/jvm/index.html","6f79b4eb33bc34a59c205ad4307faef2"],["D:/Blog/public/tags/linux/index.html","d67d26e6cffe41a4a0cbeb961e487175"],["D:/Blog/public/tags/maintain/index.html","0307082a34fb79b242df5f185133ceeb"],["D:/Blog/public/tags/math/index.html","78a08106367014d2a8253cf7f563053c"],["D:/Blog/public/tags/math/page/2/index.html","d2e9033689689f1bcd644e3c5fd3ebc8"],["D:/Blog/public/tags/network/index.html","f702988df75698b27b062bb098831f8b"],["D:/Blog/public/tags/resume/index.html","387290cd25c239766370dedd826518bb"],["D:/Blog/public/tags/safe/index.html","6595cdd079f6f10b0547a8b0946d2e72"],["D:/Blog/public/tags/sql/index.html","7db81e6f6c7be94ee85294b1cad6111f"],["D:/Blog/public/tcpip/index.html","57582a9c8b7744535a02e9ea27b29e28"],["D:/Blog/public/template-method/index.html","d4eccb513359a83eaf07ebb5fd71d7dd"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","6b99ed2fabcb76f9625a8c1f3f6ec5c8"],["D:/Blog/public/thread/index.html","ae6667bb701fe83ec84af3e9bf82101e"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","1047dcb5992e98e7e5724b37a3541ea7"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","2f86d92fd5093a0d641db26528144dda"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","15524889023c659eb4388a234d010924"],["D:/Blog/public/users-create-data-types-themselves/index.html","77106d3dfae02afb741ef06f8161f5f5"],["D:/Blog/public/visitor-mode/index.html","754ee63176f84d6a3eef7db70add4317"],["D:/Blog/public/xml/index.html","8f683d8f3e70a43da5728495eedf56ef"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","f4091e36a8cf20dd56dc577f8db2adb1"]];
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







