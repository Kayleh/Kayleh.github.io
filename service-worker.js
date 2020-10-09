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

var precacheConfig = [["D:/Blog/public/404.html","272e4a713a872cfa00b4ca06e9bfb091"],["D:/Blog/public/7-sorting-algorithms/index.html","81b9f6a7db28b8e5f05a092e325eef71"],["D:/Blog/public/adapter-mode/index.html","7a7a4f7b159e9b473b5c0bda7e70a0fc"],["D:/Blog/public/agency-model/index.html","aee46942224f1060da1e9e8bd515cb90"],["D:/Blog/public/appearance-mode/index.html","cd45f8a310cb30da8618fc1e07329f98"],["D:/Blog/public/archives/2019/01/index.html","b94bf9beb88ae6363370a21f546500cb"],["D:/Blog/public/archives/2019/07/index.html","0db675fde92d67996bb0496a409bbe4f"],["D:/Blog/public/archives/2019/12/index.html","4625c3abba6ba1e77b335d63c61e123e"],["D:/Blog/public/archives/2019/index.html","e0c925414f2af4ad89a1791a089cb69d"],["D:/Blog/public/archives/2020/04/index.html","a1af6fd9117ad7ea885a0eb9871dc762"],["D:/Blog/public/archives/2020/05/index.html","424b72e068a7b9d54d11d24ece356a19"],["D:/Blog/public/archives/2020/05/page/2/index.html","42e3c8b35cac5db357b22d98f4c5f8ea"],["D:/Blog/public/archives/2020/06/index.html","e314541437ee7c3b9c5667c86e21bf6a"],["D:/Blog/public/archives/2020/06/page/2/index.html","8b2cc4673ff1cdeb9cf003da8942027c"],["D:/Blog/public/archives/2020/06/page/3/index.html","6ca768d8ba8d309aac08f6df054ca3a2"],["D:/Blog/public/archives/2020/06/page/4/index.html","2d78bda4178fa39652e2b7f5c125abfa"],["D:/Blog/public/archives/2020/07/index.html","c305fec4f58ce80ba1a4b8266f7c83f9"],["D:/Blog/public/archives/2020/07/page/2/index.html","450dd0c8950f002d41f8469c3424fb4a"],["D:/Blog/public/archives/2020/07/page/3/index.html","7888f2923d1a8b7543df3ad623cc887c"],["D:/Blog/public/archives/2020/08/index.html","461a76163c3d8a22b5a45dc3fb878874"],["D:/Blog/public/archives/2020/08/page/2/index.html","9c26919907b012e124f1f398cfbb5832"],["D:/Blog/public/archives/2020/08/page/3/index.html","c438c97550fbebcb4e36053e79df7ef8"],["D:/Blog/public/archives/2020/09/index.html","1b5d6d8abc36fd8903f50992a82fe16b"],["D:/Blog/public/archives/2020/09/page/2/index.html","98076d478efe00939a7e129d9dbfb2d3"],["D:/Blog/public/archives/2020/10/index.html","f468fd8d414a82f63dc6a9c0a9d80d6c"],["D:/Blog/public/archives/2020/index.html","8cf09df8f18bb0fbcf89ea71c36c96e3"],["D:/Blog/public/archives/2020/page/10/index.html","04706e811a6f279752cfeefaf3bad658"],["D:/Blog/public/archives/2020/page/11/index.html","140cac5ff2e3a340ac57279870f047f4"],["D:/Blog/public/archives/2020/page/12/index.html","47e8afd95deda81802326d521eaf6b95"],["D:/Blog/public/archives/2020/page/13/index.html","0877899bcc0912c50a1dbad0b0f2492d"],["D:/Blog/public/archives/2020/page/2/index.html","00c9194866fbc23e5cc00f079751472a"],["D:/Blog/public/archives/2020/page/3/index.html","2a9bec74bb63abfeeb8a60f439c8acde"],["D:/Blog/public/archives/2020/page/4/index.html","f0e4a8381bc6a4dc7bcc57b5432c684b"],["D:/Blog/public/archives/2020/page/5/index.html","7ded91a55f34ce51b7ebbf7f48e47dfb"],["D:/Blog/public/archives/2020/page/6/index.html","2538b068e927f8acafbc3471a4c0c032"],["D:/Blog/public/archives/2020/page/7/index.html","901c2f6cc11719959ac5bf481ab66534"],["D:/Blog/public/archives/2020/page/8/index.html","cf27b0c96929b7c5750a43d75efc0439"],["D:/Blog/public/archives/2020/page/9/index.html","fae2f0027b9690495fea01f950a0dbe5"],["D:/Blog/public/archives/index.html","d5b49cd32d70034be7f9708b7adab289"],["D:/Blog/public/archives/page/10/index.html","dd11f2eb8ba59a273efd2c848ac67237"],["D:/Blog/public/archives/page/11/index.html","c1dfe9245200ebb5a5fd60ccfece22ae"],["D:/Blog/public/archives/page/12/index.html","139b79c72e806454a454635482777d57"],["D:/Blog/public/archives/page/13/index.html","396d6dbdd8e9bc3300e034beb7064bf0"],["D:/Blog/public/archives/page/2/index.html","dea51e5f490252800d03b85332303373"],["D:/Blog/public/archives/page/3/index.html","cee5682dbe910d3f154ef9102708bf57"],["D:/Blog/public/archives/page/4/index.html","e580bfe58fccbe814058ef2db2ff2f04"],["D:/Blog/public/archives/page/5/index.html","252c0c5fe8ce092a17d7ef8f9bdb4d64"],["D:/Blog/public/archives/page/6/index.html","65b1cf806837f4af910f1a59a7ebb72a"],["D:/Blog/public/archives/page/7/index.html","35c763866cf1d1f45aa8b249ececa348"],["D:/Blog/public/archives/page/8/index.html","ecdbe392cce0b3449dfef678a592ee25"],["D:/Blog/public/archives/page/9/index.html","2829b6704464302cdd1dd4528d47c7db"],["D:/Blog/public/array/index.html","e3fd9ed058a8edbd0a7e5e24313e1d7e"],["D:/Blog/public/binary-search-algorithm/index.html","613649a9ff555caa94a82fd77efb5a16"],["D:/Blog/public/binary-sort-tree/index.html","dc7f1da6eb4fe15fb80b16bb6616a674"],["D:/Blog/public/bridge-mode/index.html","49e7327f995679c6c2477337fd587879"],["D:/Blog/public/builder/index.html","82c089e1c6bf974c78379ef3b7d40e2e"],["D:/Blog/public/c-pointer/index.html","1388b3f3afee768cf773f2d6717583fe"],["D:/Blog/public/categories/C/index.html","994a2b27b6f6bcd4e66722b38479efb4"],["D:/Blog/public/categories/SpringMVC/index.html","82b59312a3e3eb533a1b4759d5781e3f"],["D:/Blog/public/categories/index.html","884076368cc3434aa94758d470b29c55"],["D:/Blog/public/categories/linux/index.html","b39ad6eb053d9d853fd3196e7d247c17"],["D:/Blog/public/categories/分布式/index.html","5c6a6d11befbd30f986ffbb04524506f"],["D:/Blog/public/categories/分布式/page/2/index.html","34b95c3addd425d42e63250fa0c4114d"],["D:/Blog/public/categories/前端/index.html","7e5dda86c7d40d42878b868ce5070905"],["D:/Blog/public/categories/设计模式/index.html","8bab2df18e4ae2c45aad2f6a21a2c3fa"],["D:/Blog/public/categories/设计模式/page/2/index.html","5deb4b42e4d07b0e29c96490c40db9f3"],["D:/Blog/public/categories/高数/index.html","3bbaf961c96b9796845e82036f8ffcba"],["D:/Blog/public/chain-of-responsibility-model/index.html","41f17c00e43a4a03258c43be3d7d5be4"],["D:/Blog/public/chinese-and-english-switching/index.html","85a19df086ab63694b57665321cb6820"],["D:/Blog/public/combination-mode/index.html","74811789317e4e360304431cfc9c401f"],["D:/Blog/public/command-mode/index.html","b332050f892e753abe91f2e3d436a7b6"],["D:/Blog/public/common-commands-of-unix/index.html","adc6ce631a52e6d3ea50fee14cf3cfe6"],["D:/Blog/public/computer-network/index.html","be8ad95679db654287a01f4c6eec5931"],["D:/Blog/public/concurrency-principle/index.html","eac08031ec7275de2bb6df442c4be4ab"],["D:/Blog/public/continuous/index.html","65158f2bd395c5aa2e4ca154a3e81ef2"],["D:/Blog/public/contract/index.html","0d65a1c14b9f41e8f04af36fa9a57479"],["D:/Blog/public/css/index.css","547f2cfcfa075d3d5750a2d18c95e59b"],["D:/Blog/public/css/var.css","9d72a4b723dd5d139cdccc8f35cad4ef"],["D:/Blog/public/data-structures-and-algorithms/index.html","7f8ee779c75dd6f35fe9732d0bb90a8f"],["D:/Blog/public/deb/index.html","c335f8b235bf512615b1e08186a539aa"],["D:/Blog/public/decorator-mode/index.html","7307c5bb82220ecc04b2394d56da5544"],["D:/Blog/public/definite-integral/index.html","d0ba80b780cb919c9101912a6cf5727a"],["D:/Blog/public/dependence-reversal-principle/index.html","a2cc63a0b4aa62b698c92ec4e6fba9da"],["D:/Blog/public/derivative/index.html","5e55044cb6443af33c8bd4636f8ed43e"],["D:/Blog/public/design-patterns/index.html","11af3abda6e807a28cc78931437ae291"],["D:/Blog/public/differential-equation/index.html","c9ae039075150dd50906c33e03b5e6a7"],["D:/Blog/public/differential/index.html","d963f98e5514e42146eeb54838c78c77"],["D:/Blog/public/dimits-law/index.html","ad9efdaa4ec1a7c831452fc055589a30"],["D:/Blog/public/docker-virtualized-container/index.html","f78c8677e421012831e6550abbaec033"],["D:/Blog/public/double-integral/index.html","008fa9ee903fc7178754196b42e3fc0b"],["D:/Blog/public/dynamic-array/index.html","13a9847760a893969f24766be7de8f38"],["D:/Blog/public/encoding-algorithm/index.html","e860dd5ae33f622eb06cf4ff71af11f3"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c0eec1d52fdb9de2454f41d84473e39d"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","da0365dcc9c51422112ae7a7bf333024"],["D:/Blog/public/factory-design-pattern/index.html","6e05c01623eee6edaddd8f85e929ab10"],["D:/Blog/public/flyweight-model/index.html","19c3afd5212c5be5d0a2751db5d3009a"],["D:/Blog/public/function-graphing/index.html","793fbac46c8f84ab3f3cd50b19665196"],["D:/Blog/public/gateway-service-current-limit/index.html","aa97af5d6d986823ace05396079c8389"],["D:/Blog/public/gc/index.html","72ffcb2255ea10e321d3a86c2ce702e9"],["D:/Blog/public/generalized-integral/index.html","b84cb26be3a49a54278147458045c545"],["D:/Blog/public/google8102e2f35ce9e391.html","625f9b185a5b2be002336b444a2ff680"],["D:/Blog/public/gulp-compresses-static-resources/index.html","39d9b61dcc49f330fe9e8bfb138c7d7d"],["D:/Blog/public/hash-algorithm/index.html","2d826efdc1debd3b35d1734282d5dcc7"],["D:/Blog/public/heap-sort/index.html","168b3a30cc63ad48b5fa9fce9f9e8a7b"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","72f6561dba8f4dc6020af6eded2b1e9c"],["D:/Blog/public/http/index.html","2d9d08069665c558d066d69c23b90fa2"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","a6c04d73831b3d786462ad5ff79461e8"],["D:/Blog/public/index.html","13ad91a49c66d191bbdf761879b2e0a1"],["D:/Blog/public/infinitesimal-and-infinite/index.html","9f5b0eb9842f7b2b3b86e218ae723589"],["D:/Blog/public/interface-isolation-principle/index.html","63a0af3077d9ab19ebb86c7e8677688c"],["D:/Blog/public/intermediary-model/index.html","3003cce8f086f9ece70795d51d20a543"],["D:/Blog/public/interpolation-search-algorithm/index.html","ac5900a024288bb699f1c9db5e9a6c69"],["D:/Blog/public/interpreter-mode/index.html","3b172ae44b611a858b9d9754d2888fa9"],["D:/Blog/public/introduction-to-computer-network/index.html","b8147b040c149e87a4bafb258d67f86c"],["D:/Blog/public/introduction-to-operating-system/index.html","866f8712f6e66b5c500e0878cd474236"],["D:/Blog/public/inversion-of-control/index.html","2930795816aed91f7736c8edc018b2f8"],["D:/Blog/public/io/index.html","955e62c47d3112a955dacf3c29c0a2f8"],["D:/Blog/public/iterator-mode/index.html","720907831ac67486cce8e02f78b090a8"],["D:/Blog/public/j2ee/index.html","cb69fdda2e60cc2751c13829d03df773"],["D:/Blog/public/j2se/index.html","a4359ea0a1ad2dab7de387ad5cecf0c8"],["D:/Blog/public/jdbc/index.html","42b9f3e77317e614101c65ae3fcc1a43"],["D:/Blog/public/jdk/index.html","d77dbd1570f058f79c7f9b75fb5bd7f8"],["D:/Blog/public/jmm-memory-model/index.html","a4588405199452f1afede51efe14d333"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","0460688b335447b3df4fb6bc17726015"],["D:/Blog/public/law-of-robida/index.html","bdd377abbc59fd5a11886fa1c52bc0ca"],["D:/Blog/public/limit/index.html","237cc1f9363e1e6bf52f47e352109a86"],["D:/Blog/public/linear-search-algorithm/index.html","c11d8b0dc12676d97926ec702947520c"],["D:/Blog/public/link/index.html","f5f6afa2bbff04d2c6783a1c5483df40"],["D:/Blog/public/linked-list/index.html","99b73682ce538520abdab9e8c0b7db00"],["D:/Blog/public/linux/index.html","d58fc1eda3d580f3729b94cb01797363"],["D:/Blog/public/liskov-substitution-principle/index.html","fc5502512ca34fad83b46b57877b42bf"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","768144afcfe54565bd132802caab39c9"],["D:/Blog/public/maintenance-1/index.html","ec8a5874af7b725322f89fef2b41d9b1"],["D:/Blog/public/maintenance-2/index.html","e3046d02434f9934f415cfb46dfc05e1"],["D:/Blog/public/maintenance-3/index.html","e4eb15ab1450e77e4d2afd76ba9b1aa3"],["D:/Blog/public/memo-mode/index.html","b534b8d9ab1c9cbb1c6941f59fb69edc"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","59a08b2b2cca475e6cba0de56266d0bd"],["D:/Blog/public/multi-function/index.html","b05f0a051435aeee5c1bc877e4e27ddc"],["D:/Blog/public/multithreading/index.html","eb38ca1d5fd7eeff44d9826b09f54f8f"],["D:/Blog/public/mvc/index.html","97b2482f6a5a2a6430edc77259d42621"],["D:/Blog/public/mybatis/index.html","f0645c863347af2f1753e82c88e76ed3"],["D:/Blog/public/mysql/index.html","060e32f382252dd355279cebb4bb0e25"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9f1f002252604f60f56cb54f59d76c1d"],["D:/Blog/public/objectoriented/index.html","39a8ac1c4e51a1e94cad29a51b69f6ff"],["D:/Blog/public/observer-mode/index.html","0b203b8a253a33b321357ef9593aff2a"],["D:/Blog/public/operating-system/index.html","3f0088f130bdde74347f972b973ead98"],["D:/Blog/public/page/10/index.html","8b03a38704cec0a4c5c36426d21b7f03"],["D:/Blog/public/page/11/index.html","d5ac9cb6669996201f84fe28dc58c458"],["D:/Blog/public/page/12/index.html","31e0818c0cf9b6b0756de9bb6763fd2b"],["D:/Blog/public/page/13/index.html","4888521b0fddab8b05cb9c43dac0d310"],["D:/Blog/public/page/2/index.html","235105dfe5df70361b7a593ed91c5cd7"],["D:/Blog/public/page/3/index.html","f6c531b56d32fb53465ad88a243abc73"],["D:/Blog/public/page/4/index.html","859557391b4b9846260991debaf8aa47"],["D:/Blog/public/page/5/index.html","bd3b560976e96a013d0ea78383c5d149"],["D:/Blog/public/page/6/index.html","39c394914a45b0b3fb052b510f150f8a"],["D:/Blog/public/page/7/index.html","4dddecd50cc57afe42da64737e21c329"],["D:/Blog/public/page/8/index.html","412409d29e4076251b34d4a76c90fcda"],["D:/Blog/public/page/9/index.html","a252aa7fa5489fbbc0ea78bef69dc340"],["D:/Blog/public/palindrome/index.html","94483888336f3f36550677f5984b14c8"],["D:/Blog/public/partial-derivative/index.html","941827657506ba2f2f30edf7571358f0"],["D:/Blog/public/pass-by-value/index.html","78596d51c3cc5be82ab17d7485a08174"],["D:/Blog/public/pictrue-bed/index.html","6ef149483871b65a6932e49f2756d17b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","f4e44fdb1276ac243716f697f1886f9a"],["D:/Blog/public/principles-of-computer-organization/index.html","9b088aa7135e074612369fbab4572ac1"],["D:/Blog/public/prototype/index.html","6401a051a0559c2966ff2ce0371b1225"],["D:/Blog/public/queue/index.html","df847b00ae95177fccb82473bd8f783a"],["D:/Blog/public/redis/index.html","89cf926547261ba36213141728c48c15"],["D:/Blog/public/reflection/index.html","c13175213d19c2e1a1248f76af94e45a"],["D:/Blog/public/resume/index.html","3f886e0e45057682cd6150b9e9c0668c"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","81a160cbbd22bdebd40d718654333985"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","8fa3033550dd9addb6758a229b462b7b"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","797731e677ee12ce4b20f18a6ceece79"],["D:/Blog/public/series/index.html","35739d2735d615cbde8e9ddbf21a7fdb"],["D:/Blog/public/single-responsibility-principle/index.html","453e40b09625d39a1271ca8cf5b9ebd0"],["D:/Blog/public/singleton-mode/index.html","e5a535f5060159784deb3cf3f35df43d"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","56f88f850ef2ae24bed773f8c39b0cfa"],["D:/Blog/public/sparsearray-sparse-array/index.html","2cb629802fbbab30ae475ba45ae4ca25"],["D:/Blog/public/spring-architecture/index.html","c6a5a5be3236118859bc33fb182c983e"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","67a78f0dca53c52cd8dac34a2ca162c7"],["D:/Blog/public/spring/index.html","160d876eb750686ae2fd3b95446684e1"],["D:/Blog/public/springcloud-alibaba/index.html","e535849fe9425940e5ce17c9d6926edd"],["D:/Blog/public/springcloud-bus-message/index.html","ef190287dfbf71114ceea544ac6e44de"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","0f676eb0921a152a979a28b7df498921"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","8ffc0f7e2718fdda3ec32a9c3b98c077"],["D:/Blog/public/springcloud-stream-message-driver/index.html","fdaf8397c3c7aae6c35304d312280fde"],["D:/Blog/public/springcloud/index.html","c9fc598ffa5107afb486bcaabd1aeea4"],["D:/Blog/public/springmvc-environment-construction/index.html","82e4943774c65070b576ee36626ca283"],["D:/Blog/public/sql-injection-attacks/index.html","44822def7c6b145433cd00a02e8cdc75"],["D:/Blog/public/stack/index.html","4d005e6aa060ad165e9e1531623ca43b"],["D:/Blog/public/state-mode/index.html","ec7d62e71e9f25f640dc79d407a9e964"],["D:/Blog/public/strategy-mode/index.html","7bf715d1546fff6de3f79b284a6ca155"],["D:/Blog/public/synthetic-reuse-principle/index.html","a0a4b39955e6d6627941baff76ce09b9"],["D:/Blog/public/tags/C/index.html","7ce6cf35e3d6c6667b007f1bdfc233e5"],["D:/Blog/public/tags/Concurrency/index.html","c80ecc2bffd77efbb036e80ec2e82875"],["D:/Blog/public/tags/DesignPatterns/index.html","4fdbf6dcc8ea1650bfe97bcfa6cec414"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","910ceb4f0796ce4211836a82df6d2c8d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","9aedcde91afdb93884d462b80d22fa99"],["D:/Blog/public/tags/DistributedMicroservices/index.html","63e7c9eda548754a3b46fddbccd9138d"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","b8213b78c04d27f5dc2260313c6a14ad"],["D:/Blog/public/tags/Interview/index.html","d1d18fd790bcb3954bc33965f194a06f"],["D:/Blog/public/tags/Interview/page/2/index.html","55ce9d0332e1eba5434262fc31d76035"],["D:/Blog/public/tags/Operating-Systems/index.html","889db841f6bf13526ff7a8a1ccfab5c4"],["D:/Blog/public/tags/about/index.html","a4e70167d69e57bba3b1302330dda072"],["D:/Blog/public/tags/ad/index.html","3a1bb46cdc82ba1746474ff6449c216d"],["D:/Blog/public/tags/dataAlgorithm/index.html","88ea35563e35b9c9338c17949c9d3de3"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","93899fdb5af75a981a043d9a459a32c4"],["D:/Blog/public/tags/docker/index.html","3d56554d1d473e59da5a2d9bce03a315"],["D:/Blog/public/tags/frame/index.html","a5e433c155aa5950c4d31d6990fd5cb7"],["D:/Blog/public/tags/front/index.html","6383251903c0a00559a63d3f4a1b2d0f"],["D:/Blog/public/tags/index.html","926325910584064b7eb3926a1885e789"],["D:/Blog/public/tags/jvm/index.html","96205efe5c99853e6843da440716edb9"],["D:/Blog/public/tags/linux/index.html","bf6499556b8d4616be21f219691c2297"],["D:/Blog/public/tags/maintain/index.html","98a65c0f3b7e5ab82da6e063b65c2987"],["D:/Blog/public/tags/math/index.html","dc1f50ce032dd1ca9b2d55475e3cef3b"],["D:/Blog/public/tags/math/page/2/index.html","52103246a4b3fa46202c57ebe55d3c14"],["D:/Blog/public/tags/network/index.html","338ba7682cadaec9ebe13a67ecfb9371"],["D:/Blog/public/tags/resume/index.html","ec50d1781f341e31adfd5347107eaa5c"],["D:/Blog/public/tags/safe/index.html","94b339fb403fb7ec1fa559fb70a8cbff"],["D:/Blog/public/tags/sql/index.html","fbf091bc522ab44d1687b7744e5eea70"],["D:/Blog/public/tcpip/index.html","90cb939130e04f337ed15a0d78c31c9c"],["D:/Blog/public/template-method/index.html","138ed843341afb68e8794153d59b0748"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","879f788b442c7abeb6025eb852fb7a45"],["D:/Blog/public/thread/index.html","73ae17b6e666e3723bdfca7e79ae6820"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","0d7e3d796bc4dfd61bdc5353a0da239a"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","09cd4ff52b722a2da93daa5ba34ea341"],["D:/Blog/public/visitor-mode/index.html","08565d1dd9f063af841a094d17cdd754"],["D:/Blog/public/xml/index.html","59306a3c2b8c3d50cfbb2e1ae1d76896"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","f081f0d1aec3962a6eda2a0c51fdc17a"]];
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







