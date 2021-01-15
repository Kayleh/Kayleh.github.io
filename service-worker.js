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

var precacheConfig = [["D:/Blog/public/404.html","c7bddf967e3b87bc3922c7027de36a39"],["D:/Blog/public/7-sorting-algorithms/index.html","480135bc1bb10a772f6bbf2d15284d10"],["D:/Blog/public/AIO-blocking-model/index.html","b760c79187fc789a70de6df5f959bc43"],["D:/Blog/public/BIO-blocking-model/index.html","a345ed9844c2289eb038d3f125cb1098"],["D:/Blog/public/C-algorithm/index.html","ac4f80ebf0d4d171fc4abe9ec0900ef2"],["D:/Blog/public/C-programming/index.html","66c9eda772c9faefc304fa282c4efc5c"],["D:/Blog/public/Good-use-of-pointers/index.html","632be720de253d371ca6b91ec0c04888"],["D:/Blog/public/IO-model/index.html","31d9b0ca0169a6b073fa7329680594cb"],["D:/Blog/public/IO/index.html","11ceadb98c91b95588dd727b60cde7ad"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","ff628dc9b8ce66e6af77f8fc2967baef"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5184ab30d56fbbfaeb4eb66b454c2311"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","c395ff7824dd5ae2f12d52f3ab00e3c3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","4937d75f93957a2aad574967c3841e4c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","3638f87e476fc01ddbb8708f79345f58"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","6988c3c3f9d2a46a983255af4ef09985"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","4eecc9d7bde65c193b7ce267beb0303c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","7e668ec8ebd200a93513095b18b37a2d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","671fd48aeea2ff2da1a88db7fbc5cc7b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","58f1ad3000fef0a0a98238de2049801b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","b984b2d29b1761272275010bcf44c53d"],["D:/Blog/public/Java-network-programming/index.html","52ecdf77fc9018267218d4507324ca72"],["D:/Blog/public/NIO-blocking-model/index.html","40855a85882773229d21dcf76a89bc7e"],["D:/Blog/public/Native-method/index.html","6cb208d6dcdda594f686b26239d4a3b2"],["D:/Blog/public/Sandbox-security-mechanism/index.html","81ee9fda77dece912bfab8d96f867c3b"],["D:/Blog/public/about/index.html","d043860fe47c4ee5dab34114562f9358"],["D:/Blog/public/adapter-mode/index.html","ba638e9dbb52679202f22075603d2647"],["D:/Blog/public/agency-model/index.html","9da4adeeaad091d87a44ae94c30d9901"],["D:/Blog/public/appearance-mode/index.html","b1124a2302789211fd906c133cb88851"],["D:/Blog/public/archives/2019/01/index.html","d86d3ca9443d6775fbda2f2ba6895019"],["D:/Blog/public/archives/2019/07/index.html","6976f84bdfd6063d9372f63b65ebc0d5"],["D:/Blog/public/archives/2019/12/index.html","4b2e370aff778cd798741530be507f6e"],["D:/Blog/public/archives/2019/index.html","f1deb847006664fdb28387b8f180af2a"],["D:/Blog/public/archives/2020/04/index.html","979887bd28206f6fc846a71d037f1d02"],["D:/Blog/public/archives/2020/05/index.html","2bcb8cc9a0accec97c165bf8a42c9cc4"],["D:/Blog/public/archives/2020/05/page/2/index.html","e1c817c1aeb0b57032ee7fc24817804e"],["D:/Blog/public/archives/2020/06/index.html","9b3ec2bd61060b8bf88260bc13922623"],["D:/Blog/public/archives/2020/06/page/2/index.html","3694b5ee53be2128dfc4b22376639dd7"],["D:/Blog/public/archives/2020/06/page/3/index.html","cc0a9facaacc0f40aac01419ed43ab44"],["D:/Blog/public/archives/2020/06/page/4/index.html","31a5b1d78e0f7aa46ff432f07764fb4b"],["D:/Blog/public/archives/2020/07/index.html","f55817792f125a20db3c1faf19cfde9c"],["D:/Blog/public/archives/2020/07/page/2/index.html","2313059a4cfdcbaaeb0b1d39aba58342"],["D:/Blog/public/archives/2020/07/page/3/index.html","285ae8f60af3e22137b3dd3e6e9904f4"],["D:/Blog/public/archives/2020/08/index.html","c592291621e076c1053da300c89fbe19"],["D:/Blog/public/archives/2020/08/page/2/index.html","26f3199ce4e059e81a75d65ceb63fe56"],["D:/Blog/public/archives/2020/08/page/3/index.html","80e02eeeada5656c972d3ae25db0342a"],["D:/Blog/public/archives/2020/09/index.html","28995ef272122a4ee23c1de8b9f14c5f"],["D:/Blog/public/archives/2020/09/page/2/index.html","f309e47d6cc3ad3d0a3dcc1f99d77271"],["D:/Blog/public/archives/2020/10/index.html","e110cfb23d4267183fcee3e44be891d5"],["D:/Blog/public/archives/2020/10/page/2/index.html","7a4050d2abac38d90ee76e1369ff1100"],["D:/Blog/public/archives/2020/11/index.html","8f595bf300e089790568da6d19c152a1"],["D:/Blog/public/archives/2020/12/index.html","4ae35d23246dbff5add8ea3513a72a4d"],["D:/Blog/public/archives/2020/12/page/2/index.html","98bac948db79cf70ce45d61838a21c53"],["D:/Blog/public/archives/2020/12/page/3/index.html","89c2286e23bfac6abbed3b5dd25471e5"],["D:/Blog/public/archives/2020/index.html","56cdbf57d180d203b66c33d250bf6dba"],["D:/Blog/public/archives/2020/page/10/index.html","f164b2274f1875946e780c7484f5cbc4"],["D:/Blog/public/archives/2020/page/11/index.html","8518c8b1b4dad320b70966732afe5289"],["D:/Blog/public/archives/2020/page/12/index.html","8176087ed450d6bbffc49411f1ae0259"],["D:/Blog/public/archives/2020/page/13/index.html","b9cb351cbb9dbfc9053ea9e774885a74"],["D:/Blog/public/archives/2020/page/14/index.html","fe2d9fb8f94b3fee92314188c0377eb6"],["D:/Blog/public/archives/2020/page/15/index.html","4af0932690bed88e96f778d039616446"],["D:/Blog/public/archives/2020/page/16/index.html","e39c848acebf5b153b39a12c85ead8eb"],["D:/Blog/public/archives/2020/page/17/index.html","230be8704a4032586b7a3eac4ee89939"],["D:/Blog/public/archives/2020/page/2/index.html","f0d7d2c088a628d4a946039f48a78c27"],["D:/Blog/public/archives/2020/page/3/index.html","82e21d1c1ce0065bd18ab5ef29dfe143"],["D:/Blog/public/archives/2020/page/4/index.html","b7ecd1b63f1d0e95bee8512f4a77aea5"],["D:/Blog/public/archives/2020/page/5/index.html","87d85c6a4cf4929ec8cb3dccb611eb00"],["D:/Blog/public/archives/2020/page/6/index.html","d43e8974f028524d64a1412dcaa2b413"],["D:/Blog/public/archives/2020/page/7/index.html","ef383afac355b86d0d7d32b601d4fa1b"],["D:/Blog/public/archives/2020/page/8/index.html","e3483d4ebd4b15fd64dc4512264209ce"],["D:/Blog/public/archives/2020/page/9/index.html","638b1f8a95337197ccf4139f00632dc8"],["D:/Blog/public/archives/2021/01/index.html","1f8507350e743d625dbd44ddc21ef378"],["D:/Blog/public/archives/2021/index.html","e5cacbd9ce9cbad7886153a67d4c2f3b"],["D:/Blog/public/archives/index.html","122d6690335691c489fb759a92a36dbf"],["D:/Blog/public/archives/page/10/index.html","2ae1cad0a0065ab59bcd749f11a6f093"],["D:/Blog/public/archives/page/11/index.html","9be5ab1e79a1aee99de63e64a126dda0"],["D:/Blog/public/archives/page/12/index.html","9be5ab1e79a1aee99de63e64a126dda0"],["D:/Blog/public/archives/page/13/index.html","d5e8ca52e866ebe5e3d7cec298125a34"],["D:/Blog/public/archives/page/14/index.html","d5e8ca52e866ebe5e3d7cec298125a34"],["D:/Blog/public/archives/page/15/index.html","d5e8ca52e866ebe5e3d7cec298125a34"],["D:/Blog/public/archives/page/16/index.html","d5e8ca52e866ebe5e3d7cec298125a34"],["D:/Blog/public/archives/page/17/index.html","7a574fd6747cf7f888c668b363bb16d7"],["D:/Blog/public/archives/page/2/index.html","122d6690335691c489fb759a92a36dbf"],["D:/Blog/public/archives/page/3/index.html","122d6690335691c489fb759a92a36dbf"],["D:/Blog/public/archives/page/4/index.html","122d6690335691c489fb759a92a36dbf"],["D:/Blog/public/archives/page/5/index.html","678ac505f7d9f530bfb18b1cfa36fb1d"],["D:/Blog/public/archives/page/6/index.html","678ac505f7d9f530bfb18b1cfa36fb1d"],["D:/Blog/public/archives/page/7/index.html","678ac505f7d9f530bfb18b1cfa36fb1d"],["D:/Blog/public/archives/page/8/index.html","2ae1cad0a0065ab59bcd749f11a6f093"],["D:/Blog/public/archives/page/9/index.html","2ae1cad0a0065ab59bcd749f11a6f093"],["D:/Blog/public/array/index.html","73ed59c00d04d0ec54caa03412ade1d1"],["D:/Blog/public/binary-search-algorithm/index.html","24c929137fa30d49d9f490607ad95d17"],["D:/Blog/public/binary-sort-tree/index.html","49fe28d31c5fa6c947a8a38ba5a383fc"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","c77ed7eedfa6f5770fa29c5fe38a73f5"],["D:/Blog/public/bridge-mode/index.html","b232d4abc0a7ed2469384432a97415cd"],["D:/Blog/public/builder/index.html","3ff341a9a9cc6ebca86b6fcc8ec6b331"],["D:/Blog/public/c-pointer/index.html","8b243bde71e49b32d725d5e4ee65d69c"],["D:/Blog/public/categories/C/index.html","17b7ac6bd77b6a2b4b277a9c30d0d07d"],["D:/Blog/public/categories/SpringMVC/index.html","234cbf324f789306dde19cf5a2a82f3f"],["D:/Blog/public/categories/index.html","58169e8e100d9d67589929f8aa63f384"],["D:/Blog/public/categories/linux/index.html","97c472026381d3119ab8a44349632a3b"],["D:/Blog/public/categories/分布式/index.html","9497d96885f29508e771948dd894fd65"],["D:/Blog/public/categories/分布式/page/2/index.html","3f185757544231b95e2f1c5875fb467c"],["D:/Blog/public/categories/前端/index.html","d8041dec3d269f792e57040dd82ba15e"],["D:/Blog/public/categories/设计模式/index.html","ecdc8efe5e93db631c13f9835a59b350"],["D:/Blog/public/categories/设计模式/page/2/index.html","2d24a957766b28061423d0bbfddb86be"],["D:/Blog/public/categories/高数/index.html","ccb5f4ace5ec0eb32a38e8599bec3f14"],["D:/Blog/public/chain-of-responsibility-model/index.html","e7b333561f3a30662ccca0c645e0a80c"],["D:/Blog/public/chinese-and-english-switching/index.html","fa0c16f0fe67765c3616f30f1ffc52e2"],["D:/Blog/public/combination-mode/index.html","2ce6cd6e4cda1d144d0462d7fa7223c3"],["D:/Blog/public/command-mode/index.html","a7a6b96271e20b01ecc9b7f6e81e7d1f"],["D:/Blog/public/common-commands-of-unix/index.html","2807cf47d040072e6d36cbe90e1291fd"],["D:/Blog/public/computer-network/index.html","dd254fe82256154324ab59ad77f67256"],["D:/Blog/public/concurrency-principle/index.html","3a23877ce18f6d5fab64e00bd1ca0d21"],["D:/Blog/public/continuous/index.html","e94772c63ef201c11746fed83a7abfb1"],["D:/Blog/public/contract/index.html","4a3258b7e08f123d5bf46414da817e63"],["D:/Blog/public/css/first.css","f2b877a65e66a1a917a2ced568c3cb7a"],["D:/Blog/public/css/style.css","dd88391bb53ea63a99b8408dfe70854b"],["D:/Blog/public/cycle-structure-programming/index.html","cdd319279702d1db6e2ee32b71d7d7dc"],["D:/Blog/public/data-structures-and-algorithms/index.html","4e91e50d300c7ed143a8bfe0bde96a42"],["D:/Blog/public/deb/index.html","1311092a921568f729c9d34a1ba10da3"],["D:/Blog/public/decorator-mode/index.html","2aa643d2932a8c55b9289a4c66fdd3ae"],["D:/Blog/public/definite-integral/index.html","520418f5af42b82ee3344ea1b97f2e4d"],["D:/Blog/public/dependence-reversal-principle/index.html","68c8357d567943c5d680d9b12c1a4679"],["D:/Blog/public/derivative/index.html","57c467a21a1cf0377be7f8c60a811d54"],["D:/Blog/public/design-patterns/index.html","1c71427dc827791ec90d053183304892"],["D:/Blog/public/differential-equation/index.html","91c45c18af9bf751d3918831b8721340"],["D:/Blog/public/differential/index.html","a7e66b5fcdc5bada30b730a3f1cd6843"],["D:/Blog/public/dimits-law/index.html","9d02dff9d4523adf66a7665293723baf"],["D:/Blog/public/docker-virtualized-container/index.html","f3b4ead547ba5bd988c7d03e5fca0ad4"],["D:/Blog/public/double-integral/index.html","5277c99ced10e95be739a58442b4e24f"],["D:/Blog/public/dynamic-array/index.html","469ac96eb8ae896f36020347f651c4ca"],["D:/Blog/public/encoding-algorithm/index.html","cbaea568674abcb4b8fbd33ca4fee010"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","9f87e45bf90e800e79fa4ea79dc0b959"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","2b8ece698f9c0fadbda2bdb3c02747ca"],["D:/Blog/public/factory-design-pattern/index.html","44ed580ce21155fe378a7ba02e5ecf81"],["D:/Blog/public/file-input-and-output/index.html","1e7bd905fbedf510404fa5aec15b7e60"],["D:/Blog/public/flyweight-model/index.html","556ce3fe845f1b7470010730d212d834"],["D:/Blog/public/friends/index.html","e0407493ee57004147ab4116c7f99ef5"],["D:/Blog/public/function-graphing/index.html","1ec628532f175c4e215a47a3fd2b1824"],["D:/Blog/public/gateway-service-current-limit/index.html","9940416208d6fad2598748d09cb30b40"],["D:/Blog/public/gc/index.html","c4678d9385f27e09c0c7b557f7bd7479"],["D:/Blog/public/generalized-integral/index.html","339d55bcb4c9ffac75b0417bf713b6f8"],["D:/Blog/public/google8102e2f35ce9e391.html","47cbbddb739146fdd9cbbcb36f911404"],["D:/Blog/public/gulp-compresses-static-resources/index.html","860fafb1c2579b672184ebd25304dfe0"],["D:/Blog/public/hash-algorithm/index.html","44ff98cf3043706447007dc9bf9a6b01"],["D:/Blog/public/heap-sort/index.html","63bdb01405707bbf0ab09cd6a34aaf4e"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","9c7b3fea2862dbe5bff0612cd029bcf5"],["D:/Blog/public/http/index.html","08ed1d484cb16bff261584c789dce3f7"],["D:/Blog/public/indefinite-integral/index.html","6787255aeb563e4812989b40be15bd87"],["D:/Blog/public/index.html","badd4b5c87f88f2afb3f75913fcc5b74"],["D:/Blog/public/infinitesimal-and-infinite/index.html","53fa24b845b9fd84714f5701d0c0a2c6"],["D:/Blog/public/interface-isolation-principle/index.html","3f890635c2b18f482e01442627f5c6fe"],["D:/Blog/public/intermediary-model/index.html","5b571189edf5781d689bdce9779f1c59"],["D:/Blog/public/interpolation-search-algorithm/index.html","757a065f4a86b51485bd739b1fb4adcc"],["D:/Blog/public/interpreter-mode/index.html","a14a8586afeb0074761c977eeb801379"],["D:/Blog/public/introduction-to-computer-network/index.html","4850441ae421bbbf80b2f956f9ac3e52"],["D:/Blog/public/introduction-to-operating-system/index.html","c99014fa96c96a637435a290bab9edfa"],["D:/Blog/public/inversion-of-control/index.html","fac511679e7e1d6497f70d13804b40dc"],["D:/Blog/public/io-Interview/index.html","ba3cd0aba56dc641025a5dfe8a4a29be"],["D:/Blog/public/iterator-mode/index.html","43fb18cee62ed2041b21cf8951b97ba9"],["D:/Blog/public/j2ee/index.html","3ce0ee52f3da232e7a588fed2a753e76"],["D:/Blog/public/j2se/index.html","9afde4b9c8b0414f568145d31cd22648"],["D:/Blog/public/jdbc/index.html","3a05481b5f6117e43053ed5aa3c30c75"],["D:/Blog/public/jdk/index.html","ecb8c1a88302c2a8ed7ebe3a3ebd52bc"],["D:/Blog/public/jmm-memory-model/index.html","cdebf841e7f4d6e96802ee16dba92a31"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","75a5bd6581038b9eb43258fed0c83bb6"],["D:/Blog/public/jvm/index.html","60c590641365effc332bd69bf2d5af7a"],["D:/Blog/public/law-of-robida/index.html","9616fdde9267cf598f2517b35ddaa456"],["D:/Blog/public/limit/index.html","f8ae29b906a41f4e5a148514ae707238"],["D:/Blog/public/linear-search-algorithm/index.html","99ca78af1a6b9011d7dcba81f3c714e5"],["D:/Blog/public/link/index.html","7250506f2f3bbca51ca36849b6447ea3"],["D:/Blog/public/linked-list/index.html","552e1a3e625e5cdda06b952b0a29fb03"],["D:/Blog/public/linux/index.html","cbff1977b8f1107e18aca7247dc84fd9"],["D:/Blog/public/liskov-substitution-principle/index.html","55fe969ea08eaed9f6497860bf1ab2db"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","d9f1391fa31a69c42093d4511665edb5"],["D:/Blog/public/maintenance-1/index.html","baf6d2e3cf35bff91cb2e686c1f2e162"],["D:/Blog/public/maintenance-2/index.html","8f16fddc100b9a92e4538fdf21535bb7"],["D:/Blog/public/maintenance-3/index.html","e8f8588ab974083b4f7c6ce1fecc8957"],["D:/Blog/public/memo-mode/index.html","6896047fcc1131de6b779c7a16268b3a"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","88387adb4396ba369224cb56c9f078ac"],["D:/Blog/public/multi-function/index.html","e2a6a635e7b7e07b40d7cdf807a817cf"],["D:/Blog/public/multithreading/index.html","7baae5aaa6d9d4de722c0c1c8f92dbc9"],["D:/Blog/public/mvc/index.html","1c6743e821bd4863595c9ea050c86baf"],["D:/Blog/public/mybatis/index.html","bd1decf4f88492aa16f95723a68bf2d4"],["D:/Blog/public/mysql/index.html","69c32b2dc2495a2f909f4ab5563d2960"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9a0185bee495be2b5bcb0b1f42a03098"],["D:/Blog/public/null/index.html","26dea3de36740bd79f8f6eef8674e2b4"],["D:/Blog/public/objectoriented/index.html","8f85c8d3c3c832fa9c180691ca3e7313"],["D:/Blog/public/observer-mode/index.html","a2cf0f66ac735d03c12629580a971ac1"],["D:/Blog/public/off-heap/index.html","4644918a11f61096fd3dcdce0a05e0cf"],["D:/Blog/public/operating-system/index.html","6d7b19a92644999a8a0ffb09e3281d07"],["D:/Blog/public/page/10/index.html","5c2c7c6c6c80f70f3251b9c488972659"],["D:/Blog/public/page/11/index.html","69e029708d260173570b43f835059c0d"],["D:/Blog/public/page/12/index.html","9e9a9727be74b1f7918f907f311f20e6"],["D:/Blog/public/page/13/index.html","5d991c25a285fe86f3dd0c24309eec0c"],["D:/Blog/public/page/14/index.html","2f022d8ec05e68e5e9800aa906c03725"],["D:/Blog/public/page/15/index.html","2ab6964d64a64d880c74e9b50748034c"],["D:/Blog/public/page/16/index.html","9adfb31582c52e90d9be5e518cb5ab51"],["D:/Blog/public/page/17/index.html","d86759b2b9e364f75e2826595601cccf"],["D:/Blog/public/page/2/index.html","baa25eb3bf681f95d202c2c8408c8111"],["D:/Blog/public/page/3/index.html","2961163d3ccfc3899a07d6e7bceb459c"],["D:/Blog/public/page/4/index.html","0bd2be8925e2057b377b54cb9b8a416a"],["D:/Blog/public/page/5/index.html","bc3201b3ed3ae369e12fed033149c701"],["D:/Blog/public/page/6/index.html","e164da6b92c8da7309d7ab805e4bcbab"],["D:/Blog/public/page/7/index.html","439bf638c2be232ed544cadbbb15111c"],["D:/Blog/public/page/8/index.html","5cc00e915b68b24c63a2874a2ee2d103"],["D:/Blog/public/page/9/index.html","c88084856e80d92af7c182b8b76d49b3"],["D:/Blog/public/palindrome/index.html","31a153ee111ea379be873439c34440ca"],["D:/Blog/public/partial-derivative/index.html","839bddb4f4df8b97b919ec59728ab67e"],["D:/Blog/public/pass-by-value/index.html","1dd0f3f47131eeed4e897690832ea20f"],["D:/Blog/public/pictrue-bed/index.html","630806dde3dec0b53b4f6dfedc1e1263"],["D:/Blog/public/principle-of-opening-and-closing/index.html","7fcb66a988619ae59613d214a4514ad5"],["D:/Blog/public/principles-of-computer-organization/index.html","9a08c32473f76f04f24e42f04120410a"],["D:/Blog/public/prototype/index.html","6a8a699f08b97a0c948ec7fecc050c46"],["D:/Blog/public/queue/index.html","d1ac58fcc685ed616fd3d140181c14fb"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f04bd341ad25228d4b181c2d4b02f4c9"],["D:/Blog/public/redis/index.html","49b35841c449ea894e05c5c843f2caad"],["D:/Blog/public/reflection/index.html","b1372176656972ee013a4235907efc3f"],["D:/Blog/public/resume/index.html","9c3f0fc978dea663893eb323eb000dba"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","0572fabc190c2680c4469a53ec3710aa"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","32a7e9c4be617bd44629d6495df0797d"],["D:/Blog/public/select-structure-programming/index.html","6386ebc060f22bafdcd6a39bf3625a18"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","801d43a63b9e4bddf60a67f123e19eca"],["D:/Blog/public/sequential-programming/index.html","dc762f93e92f3be84a186341ddf74819"],["D:/Blog/public/series/index.html","e47ff1813f32c68d72370f14786708b7"],["D:/Blog/public/single-point-login/index.html","d92bbc46e69d82d9cddc27de68102fb4"],["D:/Blog/public/single-responsibility-principle/index.html","b2363636a3bea8963719c8aebd8e4de2"],["D:/Blog/public/singleton-mode/index.html","3d08398fd7c7ee07b4991a0727930fbf"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","03494f8a12eed883c4e348aff21b65dd"],["D:/Blog/public/sparsearray-sparse-array/index.html","2003a36206c54e05a2924be21a091600"],["D:/Blog/public/spring-architecture/index.html","960a326133458c3b10d55a3cf13ef3f9"],["D:/Blog/public/spring-relate/index.html","a78d4ab2943c22c56d82625f52f686ba"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","8229b06080e5a33318f20aeb227793a0"],["D:/Blog/public/spring/index.html","d68191af4902f597f7687f91b6d87414"],["D:/Blog/public/springcloud-alibaba/index.html","de88ebb86c1d3a47f2166af83f8969a6"],["D:/Blog/public/springcloud-bus-message/index.html","5627ac8cf7e50f5ff615b19f3e315772"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","e26500bdbf70276f66ee3e49b52bebed"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ab512596135dfc6831646683ecca53f1"],["D:/Blog/public/springcloud-stream-message-driver/index.html","21aca424cae0388d17f50f9c2058f7a6"],["D:/Blog/public/springcloud/index.html","d0ad3ae84c0699061dac182ebe4a874c"],["D:/Blog/public/springmvc-environment-construction/index.html","546438d307020cd8e28f2e9f36372743"],["D:/Blog/public/springmvc-work-stream/index.html","d45b08f672bf1699d02441299f6e0c40"],["D:/Blog/public/sql-injection-attacks/index.html","e171cd79492b81291117453183864b17"],["D:/Blog/public/stack/index.html","5724a0173481556e663a88305f87b00c"],["D:/Blog/public/state-mode/index.html","8a0baeed94db634ca671a9e6a0608aa5"],["D:/Blog/public/strategy-mode/index.html","12ced82027bd54aa2cc0e146009a5071"],["D:/Blog/public/synthetic-reuse-principle/index.html","b6ddd754411d9833457466081e32f509"],["D:/Blog/public/tags/C/index.html","7c2921d8f0a5833b4378adc39f951be0"],["D:/Blog/public/tags/C/page/2/index.html","22e40ccbd971191c71084b2b2e2d2a2d"],["D:/Blog/public/tags/Concurrency/index.html","94dd16dba2729e659276bb73fcdb4057"],["D:/Blog/public/tags/DesignPatterns/index.html","0e0d85ac9757e392d396966bad1c44cd"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","b43d439c0e0fbf03dcf6acc91f125c5c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","39a8e49cf6051544a8eb5a3a382abfff"],["D:/Blog/public/tags/DistributedMicroservices/index.html","3f5b6fcd2e71a72b72ccfbaf55c89370"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","040cd4e32bf9649745ebfdc1a9b664a3"],["D:/Blog/public/tags/Interview/index.html","87a6743d53c39ef4f3130cd9fa631a5f"],["D:/Blog/public/tags/Interview/page/2/index.html","ea687a19f95eb4dba3f97858a33313e3"],["D:/Blog/public/tags/JVM/index.html","5a00b68d59c9e41e8db828977d4d91f2"],["D:/Blog/public/tags/Operating-Systems/index.html","07ce4f0dce55c70f686267895a73a70e"],["D:/Blog/public/tags/about/index.html","857dfd3eec3eae370fe4f22cfb1d89a6"],["D:/Blog/public/tags/ad/index.html","1e66ffd32633217cce6dff5b760a036b"],["D:/Blog/public/tags/dataAlgorithm/index.html","80c144657018db38f8f23cf8536b8a23"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","f2918638dae2d80a3d66f78e09045137"],["D:/Blog/public/tags/docker/index.html","9ab0d359f3c9e54de8c81378595c890e"],["D:/Blog/public/tags/frame/index.html","766c9f8e5e871451d7c6c32d0213d7c3"],["D:/Blog/public/tags/front/index.html","113f6a4b4969b8c03b15b79a1c7dc814"],["D:/Blog/public/tags/index.html","97d5a30b44358709b138d07622d7d94e"],["D:/Blog/public/tags/index2.html","bdb25d07d3da2d6d7520761bfbc95f71"],["D:/Blog/public/tags/io/index.html","ae0563a357450938a01648a646bd2815"],["D:/Blog/public/tags/linux/index.html","9ebebd03413c81538c6087e0cb787d82"],["D:/Blog/public/tags/maintain/index.html","541ebd0249bb16bd3ac016d122099ca6"],["D:/Blog/public/tags/math/index.html","43f538a46d50662c48492fe293da4ee9"],["D:/Blog/public/tags/math/page/2/index.html","37ffcef022519534ab7baf22077f110a"],["D:/Blog/public/tags/network/index.html","45409a0d76e2747d4088e2f74542e75b"],["D:/Blog/public/tags/project/index.html","63706aa18c18463b146067919219057c"],["D:/Blog/public/tags/resume/index.html","3f4d28a76d257980f32561728721e0dc"],["D:/Blog/public/tags/safe/index.html","7bb50d710f754398398accdd038773ec"],["D:/Blog/public/tags/sql/index.html","e2940abfa1d9eccf4487e5c3299a9d2b"],["D:/Blog/public/tcpip/index.html","9008b13cebb12399f8ee20a8d4c801b3"],["D:/Blog/public/template-method/index.html","a01ad06e62939b5fdc8356912a725963"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","120846ef0f83261be299b3b115bc7605"],["D:/Blog/public/thread/index.html","282edd95e65e7d18f9e87c44fe792ba0"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","e0cee3137783f0e53675de2ddbbfbeb4"],["D:/Blog/public/ubuntu-set-ip/index.html","c7af75f1c52c6a11667fefa05762ad6a"],["D:/Blog/public/undefined/index.html","6a2eb135e74a518222ed822951925a73"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","2976ff1d33e7778f06bee6a8a32cb821"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","99182ea288c409893edc7c431e414a4b"],["D:/Blog/public/users-create-data-types-themselves/index.html","60002295bb8e2305fa7308d8dec607f3"],["D:/Blog/public/visitor-mode/index.html","54c4ea96f989c19681234c43098cbf79"],["D:/Blog/public/xml/index.html","38ea20530615fc3abfb7b40b5f755ed1"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","913fd187b229eab88aae0ecf4681dfd9"]];
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







