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

var precacheConfig = [["D:/Blog/public/404.html","3a25b8609973e2871b5a802ee481bce8"],["D:/Blog/public/7-sorting-algorithms/index.html","bd9784be62f2f34f761b77a2287eb9f3"],["D:/Blog/public/AIO-blocking-model/index.html","c9c85122fd040bfbafd6b192ac84107e"],["D:/Blog/public/BIO-blocking-model/index.html","9d5a269b02eeac2bd2ac5b7b43943672"],["D:/Blog/public/C-algorithm/index.html","7a5c091e09869e62ebfc122f21d63052"],["D:/Blog/public/C-programming/index.html","9846ceb153ea8c806f5ec66d8246e6c9"],["D:/Blog/public/Good-use-of-pointers/index.html","ec0d85f6768ad48fdb602d87863f09e3"],["D:/Blog/public/IO-model/index.html","da79d3d6a82c1f7f6ffcb10e27f8e730"],["D:/Blog/public/IO/index.html","7ed4313fdd12686a9c72eddd6128beaa"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","b8e7e5a26f4fcb59678922a9dd6a188c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1160b479f385717a2a4ad167d372a466"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","a80ba2f1b1ca85c9f05245373c39869e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","4543b4eaeb6180f18a2eb03c33b442c0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","598c6a21e30e1f7a5dcfbf03558ef88e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","41f4d4df9d3e00ea3994cca4da1d4140"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","47818a6a1fd53b9ecfc13e48db05ee1b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","dfa5251b7bdf8c1eeab4286b8c13199d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7f4b0f88be914da0e104c470b0d892a6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","c330387ea33a2839ac2f2f0f39fea601"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","abe7766d9582681995a1cd26eb41d4c8"],["D:/Blog/public/Java-network-programming/index.html","6641ce085642bc6c76755eb6ea9f63ab"],["D:/Blog/public/NIO-blocking-model/index.html","0edbcba1f2a64f07cec6113111eb56d5"],["D:/Blog/public/Native-method/index.html","c0ce644913bce3a93634f493fc75d04d"],["D:/Blog/public/Sandbox-security-mechanism/index.html","f544ebd2db71f88118da3579c13aa647"],["D:/Blog/public/about/index.html","e5f99a984988e53826be1bf96d77cefc"],["D:/Blog/public/adapter-mode/index.html","3e21c08fd842c0918766ec634902c4f9"],["D:/Blog/public/agency-model/index.html","40e3789b3dbaf27d8d4b49a9946acc93"],["D:/Blog/public/appearance-mode/index.html","a1196496075317443e3e91b7dc1c669b"],["D:/Blog/public/archives/2019/01/index.html","0eeb344f0df4df7da074da78cc7ad360"],["D:/Blog/public/archives/2019/07/index.html","e9153ae67cae0bb32f26e5cc29376d9b"],["D:/Blog/public/archives/2019/12/index.html","365082637b16dbc66ba323b4eb842efc"],["D:/Blog/public/archives/2019/index.html","685ef6772602b400803c7c2bfb21b666"],["D:/Blog/public/archives/2020/04/index.html","2827ba9e86b87bfe6070662c1b57adaa"],["D:/Blog/public/archives/2020/05/index.html","2f379b6436994ead87205d01f646c96d"],["D:/Blog/public/archives/2020/05/page/2/index.html","f91c0b4291b1ecb6f809360cbc70c135"],["D:/Blog/public/archives/2020/06/index.html","2ab9fdd2cc4d92407b8cee22023f9d90"],["D:/Blog/public/archives/2020/06/page/2/index.html","3966434178547fa7789db718680c93b7"],["D:/Blog/public/archives/2020/06/page/3/index.html","335636fbaddffe93c536ca64a25a238c"],["D:/Blog/public/archives/2020/06/page/4/index.html","ec59468a8df1cad2bdead6d45fc43205"],["D:/Blog/public/archives/2020/07/index.html","7000615320ac59b8cf2f1bc3c8dcfb0e"],["D:/Blog/public/archives/2020/07/page/2/index.html","904ec2613f5aa828fbcea55f948e494f"],["D:/Blog/public/archives/2020/07/page/3/index.html","002ad6d7ba885b2bbd2ae158b44c144e"],["D:/Blog/public/archives/2020/08/index.html","eac14d2f87fc93cd119c1f7454ff083c"],["D:/Blog/public/archives/2020/08/page/2/index.html","ffcccfacd531a0b9381070644ecf12ed"],["D:/Blog/public/archives/2020/08/page/3/index.html","661fafa1734df827dec0eac85ded0452"],["D:/Blog/public/archives/2020/09/index.html","a06fe1729fd07864e70d31bd3bcea644"],["D:/Blog/public/archives/2020/09/page/2/index.html","8cedcd8d28bfded37b8a28cbedd565c5"],["D:/Blog/public/archives/2020/10/index.html","86b1fe008b87e5f7793d29464f08b6ce"],["D:/Blog/public/archives/2020/10/page/2/index.html","8898eaac31a35f6ec3fecfd0ff344d52"],["D:/Blog/public/archives/2020/11/index.html","b9ae5cc4b52c2600eb0e47101faba067"],["D:/Blog/public/archives/2020/12/index.html","002dbbba119edadabb1ad4ec983e45eb"],["D:/Blog/public/archives/2020/12/page/2/index.html","5e05fa39060e5d997850d65e53632b56"],["D:/Blog/public/archives/2020/12/page/3/index.html","369fab245ec0fe02726fff64bac53364"],["D:/Blog/public/archives/2020/index.html","886017e10d97d42e7c44e0ec2db8b24a"],["D:/Blog/public/archives/2020/page/10/index.html","a6545c83b209fb49e9a72976dba60746"],["D:/Blog/public/archives/2020/page/11/index.html","2ba85d4a737c24741ec8b929c171547b"],["D:/Blog/public/archives/2020/page/12/index.html","b5adafc9b5f2231ed6c116281629593f"],["D:/Blog/public/archives/2020/page/13/index.html","3a80233b3bf3b666f7d03f1c201db275"],["D:/Blog/public/archives/2020/page/14/index.html","2f8f2b60b1ca542f8f9338fb7ba7bb74"],["D:/Blog/public/archives/2020/page/15/index.html","fc3bfd70c2ae2878e2a13479307bcbc8"],["D:/Blog/public/archives/2020/page/16/index.html","b855fea9d12429ac7eecc63a55ec7365"],["D:/Blog/public/archives/2020/page/17/index.html","693afbdf31a2aea8f07f3c1e4a86301b"],["D:/Blog/public/archives/2020/page/2/index.html","1e3c690739109d1d8b1e18e23c251a3f"],["D:/Blog/public/archives/2020/page/3/index.html","c74b24d49cd76d8990c98213b2c28e5f"],["D:/Blog/public/archives/2020/page/4/index.html","280d5bf0d10b808be13f15b7432df8c7"],["D:/Blog/public/archives/2020/page/5/index.html","6c57a21a26e215126324739d12f54a1f"],["D:/Blog/public/archives/2020/page/6/index.html","eb14b2548e923b5a67eb8cfcde794966"],["D:/Blog/public/archives/2020/page/7/index.html","bc6438f780f52794d010ac585f4613a2"],["D:/Blog/public/archives/2020/page/8/index.html","5135fb94ccc943055271e6a98bdaffa4"],["D:/Blog/public/archives/2020/page/9/index.html","acb9c479e6ecee420d2ed5227e7ae564"],["D:/Blog/public/archives/index.html","92dd0da33a277b1c572cd121a7201f47"],["D:/Blog/public/archives/page/10/index.html","675de4094c7b4d438588e94275b3a531"],["D:/Blog/public/archives/page/11/index.html","f3a70934fea3174e869a944c23cfb650"],["D:/Blog/public/archives/page/12/index.html","f3a70934fea3174e869a944c23cfb650"],["D:/Blog/public/archives/page/13/index.html","f3a70934fea3174e869a944c23cfb650"],["D:/Blog/public/archives/page/14/index.html","935a2df6cd1118f6da59a85e799fa69f"],["D:/Blog/public/archives/page/15/index.html","935a2df6cd1118f6da59a85e799fa69f"],["D:/Blog/public/archives/page/16/index.html","935a2df6cd1118f6da59a85e799fa69f"],["D:/Blog/public/archives/page/17/index.html","53a4175c1888db859508d5580247d2b7"],["D:/Blog/public/archives/page/2/index.html","92dd0da33a277b1c572cd121a7201f47"],["D:/Blog/public/archives/page/3/index.html","e33c36f03a9258ebbcfa6e1a71d76c80"],["D:/Blog/public/archives/page/4/index.html","e33c36f03a9258ebbcfa6e1a71d76c80"],["D:/Blog/public/archives/page/5/index.html","e33c36f03a9258ebbcfa6e1a71d76c80"],["D:/Blog/public/archives/page/6/index.html","48589b8ea4752b7f50edc215018959c8"],["D:/Blog/public/archives/page/7/index.html","48589b8ea4752b7f50edc215018959c8"],["D:/Blog/public/archives/page/8/index.html","48589b8ea4752b7f50edc215018959c8"],["D:/Blog/public/archives/page/9/index.html","675de4094c7b4d438588e94275b3a531"],["D:/Blog/public/array/index.html","8af0c10bf61bd42b7df9828ab731ae30"],["D:/Blog/public/binary-search-algorithm/index.html","1f0a75ca092838dcbe43eac0993bcdad"],["D:/Blog/public/binary-sort-tree/index.html","9e2e028f2725b91cb150144bd304dffe"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","2cfce71d37332f36aa1e473616f663b9"],["D:/Blog/public/bridge-mode/index.html","d5ba515b298318baf5e0a56fa3bc8730"],["D:/Blog/public/builder/index.html","888af6ff768bca2e8d6ab224a933e687"],["D:/Blog/public/c-pointer/index.html","1c9bf8a3caa25da79b34b8ecdcabbbbf"],["D:/Blog/public/categories/C/index.html","2ba8893a7ac37101138986c7844c9bc3"],["D:/Blog/public/categories/SpringMVC/index.html","3e6868d872e5a79747fd70e43adee14e"],["D:/Blog/public/categories/index.html","2f14ca25665bed9cf2a876e300afb61c"],["D:/Blog/public/categories/linux/index.html","332b5d688bdd74e3fb92403e5fa4a32f"],["D:/Blog/public/categories/分布式/index.html","cd3dbb51ade118569cc54d06632428bc"],["D:/Blog/public/categories/分布式/page/2/index.html","def53b3db4da9eb29b54e4846212016f"],["D:/Blog/public/categories/前端/index.html","7b05f262f914c6f907854cb83f9f5b99"],["D:/Blog/public/categories/设计模式/index.html","917afe4d58d8bccf25d60726165f1fbc"],["D:/Blog/public/categories/设计模式/page/2/index.html","a257bf357f7e146d7d373a1fcd8dd345"],["D:/Blog/public/categories/高数/index.html","72e16192e58ecb077dc5af0a1cf28530"],["D:/Blog/public/chain-of-responsibility-model/index.html","33aed6c17386eb106ea7d49ffc36be9e"],["D:/Blog/public/chinese-and-english-switching/index.html","6fcc8047f0489ce4a1a367aa48f824ab"],["D:/Blog/public/combination-mode/index.html","306e1eb0bc2469170ea75d39da4ce9ea"],["D:/Blog/public/command-mode/index.html","6e6fbf8e45475c3fbad028bb13a88dab"],["D:/Blog/public/common-commands-of-unix/index.html","d4e706e56759b989b9bbd69917ca1502"],["D:/Blog/public/computer-network/index.html","7a481f3a3f42a4f08c647f98bd6f403c"],["D:/Blog/public/concurrency-principle/index.html","381f2b5942fd8c2555db42b219fc1663"],["D:/Blog/public/continuous/index.html","1f378c332a53014b37df9835dee517b4"],["D:/Blog/public/contract/index.html","f2d51137fd4647528f7955521493c269"],["D:/Blog/public/css/first.css","5d34775c0d8f8b86488213a8e46a146a"],["D:/Blog/public/css/style.css","fd03a4f41ca6de9a971d5c97a825179f"],["D:/Blog/public/cycle-structure-programming/index.html","aa30aba094bee0c91ba992b4a74adb97"],["D:/Blog/public/data-structures-and-algorithms/index.html","e90e56a71f18830fd443906ad6a31338"],["D:/Blog/public/deb/index.html","0ccf70437805d518478d33ea176f25fb"],["D:/Blog/public/decorator-mode/index.html","9a84f0d7564d36119e882f8f8f8ccb80"],["D:/Blog/public/definite-integral/index.html","1e7d25c38c540af2d6e0ce4fa593c5c3"],["D:/Blog/public/dependence-reversal-principle/index.html","af68df33d260dfef98e08e38d67b5a64"],["D:/Blog/public/derivative/index.html","46aee172dd86652f399ba422f31d4668"],["D:/Blog/public/design-patterns/index.html","7264321deb904b442b0e16382b5e3a98"],["D:/Blog/public/differential-equation/index.html","bc13d14d0f088e3d1e4b6cf93aea9d66"],["D:/Blog/public/differential/index.html","4b61e741eac7c6532730c264a8f00df0"],["D:/Blog/public/dimits-law/index.html","bf477180a6a98f53a7c1b29e44994675"],["D:/Blog/public/docker-virtualized-container/index.html","2ab2a8174d2a3c15b15e5b8a1860be20"],["D:/Blog/public/double-integral/index.html","ed37bee32d8f4674e61334ad1b877b69"],["D:/Blog/public/dynamic-array/index.html","c002b16a79a5714f3ce967ccd74d1ba8"],["D:/Blog/public/encoding-algorithm/index.html","66dbb02d141fb640e7f47760f4af32f2"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","8b873b8c4f966b12b72f99cdd2e7ff58"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","c27e69e0e40081add698693514c44128"],["D:/Blog/public/factory-design-pattern/index.html","8ac782e5f256d04446435fc1f824af16"],["D:/Blog/public/file-input-and-output/index.html","3e2d48e91cdaac9236ae95035104ac6f"],["D:/Blog/public/flyweight-model/index.html","7ea326d13399afacab60fa537b4967f6"],["D:/Blog/public/friends/index.html","1c532b65f1fa7a303546516c949ff69e"],["D:/Blog/public/function-graphing/index.html","f2e19578afc0b0bcc1aa59c36a23f0d7"],["D:/Blog/public/gateway-service-current-limit/index.html","878fe37169645a5837aeb211bde71a44"],["D:/Blog/public/gc/index.html","d9e59d26a19d123d0a6e5d07805e3f3f"],["D:/Blog/public/generalized-integral/index.html","03be1d32e192115f981d37f278acba1a"],["D:/Blog/public/google8102e2f35ce9e391.html","19ce2ea654c8a1c895494323d1625169"],["D:/Blog/public/gulp-compresses-static-resources/index.html","701d539676503a14d773ab8b1c0f879d"],["D:/Blog/public/hash-algorithm/index.html","04e6da4616dd613b867b164669b04ea5"],["D:/Blog/public/heap-sort/index.html","90cb75abee2d6e5f25ea6daf416378f2"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","f11550f5b2263e88aadd5786643877ec"],["D:/Blog/public/http/index.html","ec8995105730eedca8054ac0c73132d4"],["D:/Blog/public/indefinite-integral/index.html","cd2ee5308a351b2b11145f47b58b3975"],["D:/Blog/public/index.html","f5948761e3f57aaa99b0fdd2591eea90"],["D:/Blog/public/infinitesimal-and-infinite/index.html","0442e1fcd709720d71ed50225e3b5c3d"],["D:/Blog/public/interface-isolation-principle/index.html","698bffc9c137301b17941790b6df1867"],["D:/Blog/public/intermediary-model/index.html","eebbff41ea6e3123cbc676e163c0f661"],["D:/Blog/public/interpolation-search-algorithm/index.html","11fc3a2cef45d6622fcf069aa3acd1fe"],["D:/Blog/public/interpreter-mode/index.html","20d537b11e12ddfb0e77bedc59da9f2b"],["D:/Blog/public/introduction-to-computer-network/index.html","f407e2c45bacea7a93c635e71bda3780"],["D:/Blog/public/introduction-to-operating-system/index.html","e43393f68e96a94cba815d331acb0496"],["D:/Blog/public/inversion-of-control/index.html","e1ab67aef4102a3032791e02a282b1c2"],["D:/Blog/public/io-Interview/index.html","ae5ddc0ce0ee3af5a7210b0f98d98999"],["D:/Blog/public/iterator-mode/index.html","630f28c74f530e7f63199c3f474934ff"],["D:/Blog/public/j2ee/index.html","92df73d7c9b609bd533dd8d7f03b9fff"],["D:/Blog/public/j2se/index.html","d9e56f593449210cc9737e8ba68adad3"],["D:/Blog/public/jdbc/index.html","d8176c029f7d31981fd63fe9f915128e"],["D:/Blog/public/jdk/index.html","97a00d3ee9dbf8351ccc0f60f05c63f0"],["D:/Blog/public/jmm-memory-model/index.html","14fbf70585d7b35f6cb7a1b5a2e0c95a"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","38aa1a2d0275389d5057cf1f123912f5"],["D:/Blog/public/jvm/index.html","daf05a65bb4e73365c7b169b14dc3b53"],["D:/Blog/public/law-of-robida/index.html","2396b484fa5433f1e1e3727e8f503ea4"],["D:/Blog/public/limit/index.html","21eec7957ee7a690aecbfcc548dd5d70"],["D:/Blog/public/linear-search-algorithm/index.html","7dc342282a246f6caac6af8a7c8d5df7"],["D:/Blog/public/link/index.html","36ee2b504f602c53e3f2954eb88222ca"],["D:/Blog/public/linked-list/index.html","3431be91a4a5a399137ddd067249b018"],["D:/Blog/public/linux/index.html","d111023a27f2c137da0cd5b56df6e3ab"],["D:/Blog/public/liskov-substitution-principle/index.html","b4a262e958163a34e6cce5e452e05709"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","7f2e5f2d7dbb24347a29208c9e24c3d9"],["D:/Blog/public/maintenance-1/index.html","5de9c9f2f6875e84cef68f4373ae2c80"],["D:/Blog/public/maintenance-2/index.html","8dae89236bfb3327684d88f36ca58d45"],["D:/Blog/public/maintenance-3/index.html","1e9816991bdb820203e9e9e60ac6f8e8"],["D:/Blog/public/memo-mode/index.html","dd6509bad27c39966ae9e38291c8ae53"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","ac481bd3820f5021eaed4b7624319e63"],["D:/Blog/public/multi-function/index.html","350290f2b61e9ddde33c82f898b98850"],["D:/Blog/public/multithreading/index.html","f278789595fb770bf787dc4ed9845a66"],["D:/Blog/public/mvc/index.html","c093b19583b6a250db4391455b62a39e"],["D:/Blog/public/mybatis/index.html","7849aa1e7b5e77aa34f76b513c2bf582"],["D:/Blog/public/mysql/index.html","557a6989a7486137f44e80b8385cc01d"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","20c30424a7d8feca307734dc5964ce8e"],["D:/Blog/public/null/index.html","86683a34efce43f14f92ee9aa25da8a1"],["D:/Blog/public/objectoriented/index.html","898bc7829b334a05db893160665697c5"],["D:/Blog/public/observer-mode/index.html","2a9a81431085581d12fa7ed13a50a5f1"],["D:/Blog/public/off-heap/index.html","7b00f6250f88e3015e46203bfbdc2e6b"],["D:/Blog/public/operating-system/index.html","04b55817e435e7ee3a392263ac7ae15b"],["D:/Blog/public/page/10/index.html","a25f94a4205eddaf6fab664d5ef398c4"],["D:/Blog/public/page/11/index.html","0565ee0eb60c500a4ee78a996b2a267e"],["D:/Blog/public/page/12/index.html","f11233733734d8f862e5a3c14663c27d"],["D:/Blog/public/page/13/index.html","662314fd44effa97fb9b0cfcba73d544"],["D:/Blog/public/page/14/index.html","1bdc3668926f547cecc6ffcdecac8ced"],["D:/Blog/public/page/15/index.html","ad003a42d32bd45a31616dda5379d735"],["D:/Blog/public/page/16/index.html","79f26b168e87601b0b56cc0808b60021"],["D:/Blog/public/page/17/index.html","c31f35db72c5f8f924b6ab19856df660"],["D:/Blog/public/page/2/index.html","63cb784ca9d9b507dbd19635363b0cd7"],["D:/Blog/public/page/3/index.html","3ab970c604afd278799f62ad6262091f"],["D:/Blog/public/page/4/index.html","252abf21f23e29b876aae00280267e83"],["D:/Blog/public/page/5/index.html","ef4432efe11a18d126e77a7ce6a310f7"],["D:/Blog/public/page/6/index.html","3acac3727448c7045788eff7f11b33ff"],["D:/Blog/public/page/7/index.html","01763e6f00775e7d3472dd0c965f9cc3"],["D:/Blog/public/page/8/index.html","3244327d06671d59bacff8ff6ca92617"],["D:/Blog/public/page/9/index.html","6518dd1f691598565f2d65482d840903"],["D:/Blog/public/palindrome/index.html","a8c4d27c54dfe9be27355ef0031106ac"],["D:/Blog/public/partial-derivative/index.html","925f8ff67711b998d475de27d6feddf5"],["D:/Blog/public/pass-by-value/index.html","0c4995e322d49e7adbf950fc4ec828df"],["D:/Blog/public/pictrue-bed/index.html","253d60832dac8b61e6e4d511dfc90d77"],["D:/Blog/public/principle-of-opening-and-closing/index.html","0f51bb67ed238aa6708c9e43ee90a719"],["D:/Blog/public/principles-of-computer-organization/index.html","cd412421698f1a957e764434344d4fc2"],["D:/Blog/public/prototype/index.html","af89b8d8548529cb73f5457146eb5728"],["D:/Blog/public/queue/index.html","616042263325ce3335d3d61aa8e372e7"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f72131e028f8bdeadeffb2b38bec4365"],["D:/Blog/public/redis/index.html","fa3263887e2d4064328065fef6adf0a2"],["D:/Blog/public/reflection/index.html","fe7312cbc6478e8072e95b61ddf7d66d"],["D:/Blog/public/resume/index.html","76bc84a10e72afdb00b5574629e39bf8"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","2bc000282da1d607d4790137ebf53642"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","b78a549d12e9c3b4cbb69fc7d77a2830"],["D:/Blog/public/select-structure-programming/index.html","d6d4066ba4d321abcd90c08508c956ef"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","643e1d6abdaab5da203d9f99ed0f37bc"],["D:/Blog/public/sequential-programming/index.html","e90e0deb030990bc96f73fb4e465bb7e"],["D:/Blog/public/series/index.html","fa2ebd13fcdbca9e232235b98a648f21"],["D:/Blog/public/single-point-login/index.html","882096e85dcf919fdd241729fe6c9cb7"],["D:/Blog/public/single-responsibility-principle/index.html","95bc39cc569bd40060d8683187f43025"],["D:/Blog/public/singleton-mode/index.html","9f65d9c8c1d05ca298cb03ba1348ee06"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","50dc8167870d1e975508deb1fe878b84"],["D:/Blog/public/sparsearray-sparse-array/index.html","7efb9f4dfca3f4d316b910dd26f4146e"],["D:/Blog/public/spring-architecture/index.html","13350eb1981e1f38701832a67902b1bb"],["D:/Blog/public/spring-relate/index.html","9d8ed975760c34ac6a95b049d9603c4f"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","f4f9a95b0cf40180b98a79e9a8c568b3"],["D:/Blog/public/spring/index.html","1518d580dccdb1bde06edf486e8ed91c"],["D:/Blog/public/springcloud-alibaba/index.html","cda17e76911020857380ff87e764922c"],["D:/Blog/public/springcloud-bus-message/index.html","4a0e14378622484a31b56bcd12208d49"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","06d45f606b64b89b2343caf2090ebf21"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","8d9d7f0bc76fa75ac129be48afc03ec1"],["D:/Blog/public/springcloud-stream-message-driver/index.html","d0907aa6f5c0489a83e5ebc47f2cbaa9"],["D:/Blog/public/springcloud/index.html","10613f1502b9ddb18a2404802ab641e2"],["D:/Blog/public/springmvc-environment-construction/index.html","4c0e88cc5868c88d6bcd71ba2381cc4f"],["D:/Blog/public/springmvc-work-stream/index.html","01333e099a7bbd5e9db646c0abcc25f7"],["D:/Blog/public/sql-injection-attacks/index.html","d2947a29a111ffa7e169fcfb42466019"],["D:/Blog/public/stack/index.html","adc0712fb61e738bcd2baff37ca21b05"],["D:/Blog/public/state-mode/index.html","ebd3a0f8c3b2800fa320912fe5bab7bc"],["D:/Blog/public/strategy-mode/index.html","df78a1c549ae86727aa9ee29f79de239"],["D:/Blog/public/synthetic-reuse-principle/index.html","4e0cf11aff82b9cfa4caa9654516183a"],["D:/Blog/public/tags/C/index.html","bd7a48aaabbe2c778c1e47946d72a19f"],["D:/Blog/public/tags/C/page/2/index.html","08bb71e1aada48e2ab979dffb8d11f09"],["D:/Blog/public/tags/Concurrency/index.html","e4e3b06f354f3690aa637ce028ba637b"],["D:/Blog/public/tags/DesignPatterns/index.html","66a7dbba3f0361cac3012eafc273bbd3"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","691f3a811a90fb0cce2268cadd13de16"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","89d2f3b6f6d6a5b754a25257bbe7db12"],["D:/Blog/public/tags/DistributedMicroservices/index.html","38613f23145d0a9b66516a4b5df39776"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","4614add533563038eb1ba89ba1374fd8"],["D:/Blog/public/tags/Interview/index.html","eff9cb823fb14072254ac2f364d38f53"],["D:/Blog/public/tags/Interview/page/2/index.html","472d500e78cb38d6fef9b5c7254b5fa6"],["D:/Blog/public/tags/JVM/index.html","53527a828799a6edf2a1572722c6feec"],["D:/Blog/public/tags/Operating-Systems/index.html","d732357d6be9615d21c8be4d147aa71d"],["D:/Blog/public/tags/about/index.html","0a273ace9b8a62f74401d6bd90510f8b"],["D:/Blog/public/tags/ad/index.html","7405b5a02d3ff751ed157225d7130f5a"],["D:/Blog/public/tags/dataAlgorithm/index.html","3ff6d748c1079dcb4796afe0ecff2268"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","23342c1e4fcafe2c4595ad40c5db7330"],["D:/Blog/public/tags/docker/index.html","6eb5cfda843c2e29cce20bf75656274a"],["D:/Blog/public/tags/frame/index.html","4dcbba1eeca870cb14f39e837ad4c8ce"],["D:/Blog/public/tags/front/index.html","30e863ca82ed7c4e88100c2e6c7895bd"],["D:/Blog/public/tags/index.html","ee051fa619e03e63c134bf5c9f2d01c1"],["D:/Blog/public/tags/index2.html","647cce3d124afae68e6a5ad24ecf3ec5"],["D:/Blog/public/tags/io/index.html","2bc84a132045a3c44f2867b5dc669519"],["D:/Blog/public/tags/linux/index.html","c594090a509a783e8ed0997c954cc2f2"],["D:/Blog/public/tags/maintain/index.html","b14ebaa2df4fde1487132989317adfad"],["D:/Blog/public/tags/math/index.html","21ae710bc26ab315717181f7c09c0e7a"],["D:/Blog/public/tags/math/page/2/index.html","016aff6a4147decf6f506806c3292fd3"],["D:/Blog/public/tags/network/index.html","1aef172a345bd8f5f7b06db940dad17f"],["D:/Blog/public/tags/project/index.html","64e416a12927415b2beb60c0cad569c1"],["D:/Blog/public/tags/resume/index.html","09924d0b1eb2887f4ae3a68707809db2"],["D:/Blog/public/tags/safe/index.html","c6574e11b8cff346a1499ab37bac92ad"],["D:/Blog/public/tags/sql/index.html","4129d4236596f96907dbe2693f4a1082"],["D:/Blog/public/tcpip/index.html","257a9fc44b0a1e4b3fe9b1194d2180a7"],["D:/Blog/public/template-method/index.html","a8de2db6a892723f83778e5487e47324"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","8e2dd62022f4babc657dc7597b457b7d"],["D:/Blog/public/thread/index.html","2f3dfcc2cc71a8a56187809192f3d6fc"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","8ad00568dddb3d785b6d3eb219a70fe2"],["D:/Blog/public/ubuntu-set-ip/index.html","97ceed0dc9570b45c625c2f52ee75ab7"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","00bc1c7aa0fd2fe5a07d285699a1aa69"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","eade1a80cc08104f3b70b32d7c61e635"],["D:/Blog/public/users-create-data-types-themselves/index.html","c5c5bd2d04dd1e2ed6190b225f98b299"],["D:/Blog/public/visitor-mode/index.html","deffc5a3a6236c0418480d74c4bbcbd1"],["D:/Blog/public/xml/index.html","e57164ab487c20ea83c8c0eb799ea9b9"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","53c4438a7087f346c5c3c8f2df8e8909"]];
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







