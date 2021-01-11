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

var precacheConfig = [["D:/Blog/public/404.html","047124fe09d1926caa7f5039040d2096"],["D:/Blog/public/7-sorting-algorithms/index.html","5599ee498fbe307464549552c6432b7b"],["D:/Blog/public/AIO-blocking-model/index.html","c267ef9c2b16c98185e1e1fa5d829e09"],["D:/Blog/public/BIO-blocking-model/index.html","f5d12c2e2b3760868429c8fbee26dc88"],["D:/Blog/public/C-algorithm/index.html","81a5fd825c98c25c15368b21deac3949"],["D:/Blog/public/C-programming/index.html","2608987385355045a985cdd35707bf91"],["D:/Blog/public/Good-use-of-pointers/index.html","7748d5b70044a413ac7df252de980694"],["D:/Blog/public/IO-model/index.html","1de6e5d714f045289a11ad909ac0fb89"],["D:/Blog/public/IO/index.html","403895e14181acc92711a6cd3a40604a"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","f80e0b052a12eb5f11832794a8b19797"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5619c0b492a41a48f324b36fa1bc1a3c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","662210b08982475be63536772a5994d4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","12864d8456d1f77406e50bfca277182a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","e57f144b48f2be4382624d6895e23eee"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","7bf5abca394fe283ef108f13fc606a94"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","b5933f8d5d0505493596e81d54fb5a1e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","46de568910a8d9c761a81778a9cc2cf2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","0ac7204060b0fe8b578727fb89601881"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b5be9a82baa33588daae048f05434c19"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","01657febbb633a2b0c065ecea9eed51c"],["D:/Blog/public/Java-network-programming/index.html","4a062c26196fb2ed31d1b3523613c3f1"],["D:/Blog/public/NIO-blocking-model/index.html","fba1b6d4ea7b26edb18f4b6c3b59e6ab"],["D:/Blog/public/Native-method/index.html","b030af639845a5949db1813c5000dc68"],["D:/Blog/public/Sandbox-security-mechanism/index.html","83e784bf76a6d3c9f448bee9d6ac4b01"],["D:/Blog/public/about/index.html","73264aab5b70fa55ac9dfcfd08fc9be4"],["D:/Blog/public/adapter-mode/index.html","64cc114dafa185b85708dfd2dee5ae3f"],["D:/Blog/public/agency-model/index.html","8698a73c09b73773ed58229805045b88"],["D:/Blog/public/appearance-mode/index.html","4a376324d489828777322a7c63079914"],["D:/Blog/public/archives/2019/01/index.html","7efe228539900cdb696e9db277cb7b1d"],["D:/Blog/public/archives/2019/07/index.html","bb3d6c5d08cbe486c15675d2b72ed6ef"],["D:/Blog/public/archives/2019/12/index.html","55c13db7e9c81dd54b7aa07846f17646"],["D:/Blog/public/archives/2019/index.html","94374a5e372cc3d77c3d33c47180ae84"],["D:/Blog/public/archives/2020/04/index.html","c38b232c2021a7666210cdc714c230f8"],["D:/Blog/public/archives/2020/05/index.html","94561bba32beed5d2824d2b81a6092f9"],["D:/Blog/public/archives/2020/05/page/2/index.html","2f459f313c3f9818875b4c06fa8e0729"],["D:/Blog/public/archives/2020/06/index.html","535b9b6345279059c221d8f9d07bb1ce"],["D:/Blog/public/archives/2020/06/page/2/index.html","6eb5763fde7f7c720deca87f0b06d308"],["D:/Blog/public/archives/2020/06/page/3/index.html","209358c1812299714667d39c100b1389"],["D:/Blog/public/archives/2020/06/page/4/index.html","9b8984dbeb3753911eca6ff744b5f0f7"],["D:/Blog/public/archives/2020/07/index.html","c516d362d19d59e024140aba6f3b07bc"],["D:/Blog/public/archives/2020/07/page/2/index.html","5e9be2d79ec7a0b83ff74d86603983d0"],["D:/Blog/public/archives/2020/07/page/3/index.html","640f4c67a4040f71c8e6eaf5920c1a3a"],["D:/Blog/public/archives/2020/08/index.html","f3f04e14a52ccc56c2545768a213370c"],["D:/Blog/public/archives/2020/08/page/2/index.html","d4c72507ac0bb7428b8b79e88d2e5493"],["D:/Blog/public/archives/2020/08/page/3/index.html","52be802f9648eed3749c9c957ce17829"],["D:/Blog/public/archives/2020/09/index.html","34b271b15a913543c557578e23649fc9"],["D:/Blog/public/archives/2020/09/page/2/index.html","101acd11aa2f6016d3fd2c8103e1ca5f"],["D:/Blog/public/archives/2020/10/index.html","28f1614096710ffe6afd4a6fd3c0ca80"],["D:/Blog/public/archives/2020/10/page/2/index.html","aa053493bd4422e653183c8f522dfed6"],["D:/Blog/public/archives/2020/11/index.html","235bf1e48a5807ad1a6fc26c098d70dc"],["D:/Blog/public/archives/2020/12/index.html","d3ebc1b44369c101a3a9b16f6200d9bb"],["D:/Blog/public/archives/2020/12/page/2/index.html","293438702992d8e95003c01b93a0faea"],["D:/Blog/public/archives/2020/12/page/3/index.html","d837929b78745e81ed3586b65de97f32"],["D:/Blog/public/archives/2020/index.html","41112f4614b11f1970792277138bd63e"],["D:/Blog/public/archives/2020/page/10/index.html","076e1bdbb012422d7b52379da50a3228"],["D:/Blog/public/archives/2020/page/11/index.html","7cc6b13d1a72f4eaba4190ff10122eaf"],["D:/Blog/public/archives/2020/page/12/index.html","b9c157ed00e0f826b5d1a98811e9ce2c"],["D:/Blog/public/archives/2020/page/13/index.html","b648f8209317f963155af1d533c8f213"],["D:/Blog/public/archives/2020/page/14/index.html","4ede59c1a0a6f439f87201d1ffdfb344"],["D:/Blog/public/archives/2020/page/15/index.html","7abb481f904fc26ec4e26487f24e632f"],["D:/Blog/public/archives/2020/page/16/index.html","74e0a1c6412b7ae7e36eb5f2b2a3f0e4"],["D:/Blog/public/archives/2020/page/17/index.html","a242bc9c1af18f32b04fc01fe68a49ae"],["D:/Blog/public/archives/2020/page/2/index.html","9b4588fb9cafc1e29a1df2ef2548cf74"],["D:/Blog/public/archives/2020/page/3/index.html","da39604417eb856e47953fb07c9e81ea"],["D:/Blog/public/archives/2020/page/4/index.html","0f84df7a53af04fd9086a0b44972e41d"],["D:/Blog/public/archives/2020/page/5/index.html","694e66ae26b25a5a4b52f15da9bc85ec"],["D:/Blog/public/archives/2020/page/6/index.html","69e7054d7187fb7702fc6528992474a6"],["D:/Blog/public/archives/2020/page/7/index.html","3a4b95d77362477bddc94c1bac181411"],["D:/Blog/public/archives/2020/page/8/index.html","b03760ccbee23d6e539d9c6966d8d066"],["D:/Blog/public/archives/2020/page/9/index.html","d6cb2a4d9cca81a1259062c7e9ce18c1"],["D:/Blog/public/archives/index.html","5cf0d05b1de50a785f666651b987384e"],["D:/Blog/public/archives/page/10/index.html","b7047569e4f1f2210b3f7c5cd3e9027d"],["D:/Blog/public/archives/page/11/index.html","21f0fc44b42d3ef0b080ac49adb8638d"],["D:/Blog/public/archives/page/12/index.html","cdaaef9ad26062baf5a5516e867a88ca"],["D:/Blog/public/archives/page/13/index.html","8a618be4313d3cc81f59aa6366142d27"],["D:/Blog/public/archives/page/14/index.html","8a618be4313d3cc81f59aa6366142d27"],["D:/Blog/public/archives/page/15/index.html","cb56904a55f9a0e40eff8f7d9453f250"],["D:/Blog/public/archives/page/16/index.html","00dac146562fa5fdf602cfb6d8495357"],["D:/Blog/public/archives/page/17/index.html","0589d645da83c21beb1b3dd09ed39022"],["D:/Blog/public/archives/page/2/index.html","226354adb1b5d376b4920ce999add439"],["D:/Blog/public/archives/page/3/index.html","226354adb1b5d376b4920ce999add439"],["D:/Blog/public/archives/page/4/index.html","5c1c49961c4990204d782a33bf0e3853"],["D:/Blog/public/archives/page/5/index.html","5c1c49961c4990204d782a33bf0e3853"],["D:/Blog/public/archives/page/6/index.html","bbce39d45f5f522c6cad75eb0bc2459b"],["D:/Blog/public/archives/page/7/index.html","bbce39d45f5f522c6cad75eb0bc2459b"],["D:/Blog/public/archives/page/8/index.html","b7047569e4f1f2210b3f7c5cd3e9027d"],["D:/Blog/public/archives/page/9/index.html","cdaaef9ad26062baf5a5516e867a88ca"],["D:/Blog/public/array/index.html","cea5fafffbda6eafcdbfd4524cbafb15"],["D:/Blog/public/binary-search-algorithm/index.html","34780d1980aca7620c8a6b6c102f6301"],["D:/Blog/public/binary-sort-tree/index.html","d7d3be9f989fedf08b71e40e7fb2cf3a"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","dcf22ddcfe44a10ff1b8e7b612c55af2"],["D:/Blog/public/bridge-mode/index.html","411beec938a39cdcb495c2629bc12330"],["D:/Blog/public/builder/index.html","95f1b50e7f4b55ca6a6edc5552a6115e"],["D:/Blog/public/c-pointer/index.html","79e8929a122600e6268d7fedd722d1d3"],["D:/Blog/public/categories/C/index.html","59090b8a1bb7269f29e46de9b29d33c0"],["D:/Blog/public/categories/SpringMVC/index.html","71f1b9f6364ba3dd746715928bc7c03a"],["D:/Blog/public/categories/index.html","48370a5a39074ec12afbc154dd619f71"],["D:/Blog/public/categories/linux/index.html","454a8ce107f5edd5c35154adea513075"],["D:/Blog/public/categories/分布式/index.html","87715127cb7b420a7637cc853d75cfd0"],["D:/Blog/public/categories/分布式/page/2/index.html","43566cf06ef25f2470203ece227dbc02"],["D:/Blog/public/categories/前端/index.html","2129257a8b2b99c4292062e1db3ffd4c"],["D:/Blog/public/categories/设计模式/index.html","3894d3234cd0e363b9e0e0203f16a27c"],["D:/Blog/public/categories/设计模式/page/2/index.html","6b6b88108074ae200ed721b173ed4112"],["D:/Blog/public/categories/高数/index.html","025110c0c225feb028654a91784ea1a1"],["D:/Blog/public/chain-of-responsibility-model/index.html","077cc4a3e9fefb00d89be4060503b15f"],["D:/Blog/public/chinese-and-english-switching/index.html","e6db6313dd9ec180bcbd4c4947b9ef43"],["D:/Blog/public/combination-mode/index.html","9d6cdafaccca6437132b50fb4ca26511"],["D:/Blog/public/command-mode/index.html","b58933f9e4b5f79b6c17431d457e7451"],["D:/Blog/public/common-commands-of-unix/index.html","eac9c58c39990660438cea465ca1f3ad"],["D:/Blog/public/computer-network/index.html","d6ea22fe0e68d4e854f5942843e2e3c9"],["D:/Blog/public/concurrency-principle/index.html","34851987c4fe3ae1cba620719512ee3c"],["D:/Blog/public/continuous/index.html","a59a61b7a37b7a13f9beda3fa59e8023"],["D:/Blog/public/contract/index.html","b65c5d414448fd520b6210a4e2144b5b"],["D:/Blog/public/css/first.css","91c5989199918d6de9dc1983686981cf"],["D:/Blog/public/css/style.css","fa411d9bd8f720300767b150ef21dfb7"],["D:/Blog/public/cycle-structure-programming/index.html","049574deaab505b59e4fc1b02bc11f25"],["D:/Blog/public/data-structures-and-algorithms/index.html","859c0db5aa8dd48c556086107d6b5247"],["D:/Blog/public/deb/index.html","9c61ed00eb3ba540dea95a347ad975ed"],["D:/Blog/public/decorator-mode/index.html","8ebbd3d5e782af443ee2aac7059a5713"],["D:/Blog/public/definite-integral/index.html","c39efd4ed1d8d0a648836631da687b16"],["D:/Blog/public/dependence-reversal-principle/index.html","a8ff3b4c069489d252f8488ea0e4eb0c"],["D:/Blog/public/derivative/index.html","2a9132870c57b77131d37654ac72d9c9"],["D:/Blog/public/design-patterns/index.html","c041b18a02621511e38f5355cc3d6f8f"],["D:/Blog/public/differential-equation/index.html","9d5246286e42aa9318c2bc927f7a6541"],["D:/Blog/public/differential/index.html","6c3413afa8eadad99a2ca9c1db7b7494"],["D:/Blog/public/dimits-law/index.html","15ddcc96eaff443d4eca98bdeff3eb0c"],["D:/Blog/public/docker-virtualized-container/index.html","d7fbec8123e17554bd318dd669016f8b"],["D:/Blog/public/double-integral/index.html","59cc1fe9785c679d3ce8b61311ff8cc1"],["D:/Blog/public/dynamic-array/index.html","d2386a7bfc713580377aa384b607e50c"],["D:/Blog/public/encoding-algorithm/index.html","fc982c33524a476d20400d352cbd9959"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c9f364d90bb2ce1eda5534ebc92ff8dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","e657bde94483b56de43250262f310d35"],["D:/Blog/public/factory-design-pattern/index.html","fd608af104b4e0ca126c6c97f3e4e8f1"],["D:/Blog/public/file-input-and-output/index.html","9f9f9d53125dc468cf2722851f26208c"],["D:/Blog/public/flyweight-model/index.html","2df5062a83e403086e1f9f9280d3f0ab"],["D:/Blog/public/friends/index.html","d51fc934080c4d0e89e8fe98c3aaeb2d"],["D:/Blog/public/function-graphing/index.html","4996490555bdb61a712221dfc5d77446"],["D:/Blog/public/gateway-service-current-limit/index.html","a7b510b888a6b1eab13ef8efe446758e"],["D:/Blog/public/gc/index.html","e6afeb20f70f23facdb27f2f589e426d"],["D:/Blog/public/generalized-integral/index.html","37b7c56ccd3c2e542ba28804fe9d0508"],["D:/Blog/public/google8102e2f35ce9e391.html","1cec4d02119ffff991a9b6e753dc0d75"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6cac42796756dae25d22a90a0c5ae5c6"],["D:/Blog/public/hash-algorithm/index.html","e230e7b6b76e7e4924474a4ef814f468"],["D:/Blog/public/heap-sort/index.html","c1fa82bc63c7549dc3938923f1d333c4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1e0a538350160a04b4cd9b29b4b0bb95"],["D:/Blog/public/http/index.html","4a3250c5e0d23906e727410313236e3b"],["D:/Blog/public/indefinite-integral/index.html","2fc2f82da35afb13c49279ac180b742c"],["D:/Blog/public/index.html","d0d1837441c7733214f29a7eca170dea"],["D:/Blog/public/infinitesimal-and-infinite/index.html","66825310b7128c4e2f4a3fddf88ba00c"],["D:/Blog/public/interface-isolation-principle/index.html","79d6933a3bf4894357da306ea0b8a702"],["D:/Blog/public/intermediary-model/index.html","9ad919af47b9c0ebc917459ecdb82071"],["D:/Blog/public/interpolation-search-algorithm/index.html","6ad699c7799c774b6ed266c93e6e8d52"],["D:/Blog/public/interpreter-mode/index.html","8a0cbc9bcbe0e4fab2c6cee8b2e11421"],["D:/Blog/public/introduction-to-computer-network/index.html","ec74fb1ab6f7c83f5e4f44d8ac4aeaba"],["D:/Blog/public/introduction-to-operating-system/index.html","7c998018b08933bfe61764887f9084d5"],["D:/Blog/public/inversion-of-control/index.html","92bac31aba5cb8bb4e9bef858283c0b8"],["D:/Blog/public/io-Interview/index.html","82ac7216492f1853bdbc668f7ef3a411"],["D:/Blog/public/iterator-mode/index.html","9d2aa871174fa75f82584bbcf0b112d2"],["D:/Blog/public/j2ee/index.html","4af38733f7bf467831ad65117d95c42d"],["D:/Blog/public/j2se/index.html","4636f441aae1e2e3211f3beb5dac8850"],["D:/Blog/public/jdbc/index.html","123d132e70da060e121f583bb10176d7"],["D:/Blog/public/jdk/index.html","073676885bdd403c586320d0303a5ccc"],["D:/Blog/public/jmm-memory-model/index.html","8a61722729e24909526a38cc846aae4c"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","7a167cba001bc40dfd0999e6aca20b96"],["D:/Blog/public/jvm/index.html","23c492672e3fccba116b32b1641c2831"],["D:/Blog/public/law-of-robida/index.html","e4f73979f3e01f6a194aa19c2f7afeda"],["D:/Blog/public/limit/index.html","02e216ca987afd1e02413ef6568f2be9"],["D:/Blog/public/linear-search-algorithm/index.html","294be538080226d891406ae9fc6ca96b"],["D:/Blog/public/link/index.html","55fe7dc45359f6d93be3a649fdc33fcd"],["D:/Blog/public/linked-list/index.html","fce9cd682b8003aba6e9921d3eafb891"],["D:/Blog/public/linux/index.html","d8fd9ab3cd216ea5e751b03607762701"],["D:/Blog/public/liskov-substitution-principle/index.html","998815a3a957a40b45d642889a0d160d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c395ec23c708c0a174886ce23516e412"],["D:/Blog/public/maintenance-1/index.html","ecd47eeb8bfcb989a87a62cd9e0d1024"],["D:/Blog/public/maintenance-2/index.html","fe990add26d8560302caaaecc34f29d3"],["D:/Blog/public/maintenance-3/index.html","b154d636398bb52d913c0291ea812e5b"],["D:/Blog/public/memo-mode/index.html","c9f0574cd2aefe17395e30987b3e3dfe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9276ab97ec6b18c2ead999cbb7939621"],["D:/Blog/public/multi-function/index.html","7dc8eb7aed113cb612f33664d6e771ec"],["D:/Blog/public/multithreading/index.html","ced4c93f1bcf63f4a2fafa7b7c8ca548"],["D:/Blog/public/mvc/index.html","7e8b4023ff800a69171cabd276df78a0"],["D:/Blog/public/mybatis/index.html","883f90d89160af5f0f46bd0d9615a034"],["D:/Blog/public/mysql/index.html","c5edbd25c25c5c2f37088a1ab6b9dce3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","81314b2877e607bc356f886d4aec40dd"],["D:/Blog/public/null/index.html","3385aedac9dce43fa00df1c2b6477ea2"],["D:/Blog/public/objectoriented/index.html","6ad25432b41b3b6942d4407b123e0f04"],["D:/Blog/public/observer-mode/index.html","3aa3c565a1e8582f8b7cb485518b6e1d"],["D:/Blog/public/off-heap/index.html","8435177514bb7eca7f8ffaffc9336403"],["D:/Blog/public/operating-system/index.html","f76a84151dbc7a29ad7f684f8ec474a8"],["D:/Blog/public/page/10/index.html","5314441f5ea41496ba46e79ce1705780"],["D:/Blog/public/page/11/index.html","fe8b681061453ad4490275d93fce3de2"],["D:/Blog/public/page/12/index.html","c365b0b06db6753a276df0cd3b171761"],["D:/Blog/public/page/13/index.html","4881317b14757e2c6f8de058db88fd8e"],["D:/Blog/public/page/14/index.html","d15b95c1d5fafdea054360212a3142ca"],["D:/Blog/public/page/15/index.html","15165fdd26b3907839a128ba6e6db5c6"],["D:/Blog/public/page/16/index.html","c97bacd30bddac921591913223c3fbb6"],["D:/Blog/public/page/17/index.html","10d7f2d3fc9797c36d0740ad4e30c329"],["D:/Blog/public/page/2/index.html","56b85bdf6c870889731c9bf449a91523"],["D:/Blog/public/page/3/index.html","fecadcc8ecd59313311ecfc9a7d3dd1c"],["D:/Blog/public/page/4/index.html","d87e4b60098457dda8497f0f89df6f0b"],["D:/Blog/public/page/5/index.html","d6f01c35a1a34642f471c6ee17ae0879"],["D:/Blog/public/page/6/index.html","5bf3d667db427856bee8206817c358c3"],["D:/Blog/public/page/7/index.html","ad481f4849e3f1a8e34a1330c26a9572"],["D:/Blog/public/page/8/index.html","b2adfd8f79dd07611967592f4e9682e7"],["D:/Blog/public/page/9/index.html","46b1905bcb8a406965d848bf27917224"],["D:/Blog/public/palindrome/index.html","1b1ddf7352ae00fa60a2bcfaf76ba6bd"],["D:/Blog/public/partial-derivative/index.html","e4db2173518797c528d774ef7d3c4505"],["D:/Blog/public/pass-by-value/index.html","7573e5ce150c4b7aeca7a8d15334e38c"],["D:/Blog/public/pictrue-bed/index.html","e97596e29814d34a9b7af3aac1c88179"],["D:/Blog/public/principle-of-opening-and-closing/index.html","eb6ef073c9f3d5d6beeb261dc6951a4e"],["D:/Blog/public/principles-of-computer-organization/index.html","2fe4afa5ef7edb95de59baa139d0aa84"],["D:/Blog/public/prototype/index.html","05e1db214e7d8950140aeb1e4527ec72"],["D:/Blog/public/queue/index.html","e9c8228e2c618b9fa210d1b7e5c8fb29"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f977524b6ac0fa2dcee4a3fd6dd4257"],["D:/Blog/public/redis/index.html","70ca21d1ae665d50f001b2c9bf499129"],["D:/Blog/public/reflection/index.html","d0ca09c2624684255cf627e4200703ea"],["D:/Blog/public/resume/index.html","00a1095fdce2e544b3c8090c8aa9d30e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5126f6572dce03dd7e3c417d1fc62b4b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cf25134359bacda027a2e5a033004789"],["D:/Blog/public/select-structure-programming/index.html","a4a8903b81e55549e44a87a8c2989be2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b92a1add05d16daba5f1ca2e84d430f2"],["D:/Blog/public/sequential-programming/index.html","ea9cd0f06400af29f81246a86266535c"],["D:/Blog/public/series/index.html","95531a7f4380ff134dd05235c1193c0f"],["D:/Blog/public/single-point-login/index.html","b3136a204d72dee4f2e3509b52495194"],["D:/Blog/public/single-responsibility-principle/index.html","1864705a4aa8e9c4535c0b4bf1316859"],["D:/Blog/public/singleton-mode/index.html","0c8def19f5008965820ec9ff0a3150b7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6dabd8c715f923e33b885c7777737494"],["D:/Blog/public/sparsearray-sparse-array/index.html","dffea52168a7f1b74cd2441e08af1d79"],["D:/Blog/public/spring-architecture/index.html","b774cea834df7c9268cc5a66fd54d2a8"],["D:/Blog/public/spring-relate/index.html","d5221a72c9c3004783e91accb6ee838a"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d917f520a02eacadfc13bae25ecb79a0"],["D:/Blog/public/spring/index.html","2b3430932ae8775367cfda210662f41b"],["D:/Blog/public/springcloud-alibaba/index.html","e1d7748066c51cb28b6c2765a29da54a"],["D:/Blog/public/springcloud-bus-message/index.html","6ffef23a392528db07e1047a3ff97529"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be611eda9d29d1c15548704969522a4e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ee5b97a18a286dfa21321872e1c3e8ec"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6f332e7133d3c26e26a52b300274457b"],["D:/Blog/public/springcloud/index.html","4b48291749fa0bc29f3948692f50b663"],["D:/Blog/public/springmvc-environment-construction/index.html","29904ad8a29f8720b750012b54138fd1"],["D:/Blog/public/springmvc-work-stream/index.html","7c5d78f28beb6eb909fccae3c6246439"],["D:/Blog/public/sql-injection-attacks/index.html","b11eba75ac0e017ffaf9d874fd67fb28"],["D:/Blog/public/stack/index.html","682cde39b57095ff9bc3559d6b6011ab"],["D:/Blog/public/state-mode/index.html","8938a204cc9a9f53f5d73a4ed0587138"],["D:/Blog/public/strategy-mode/index.html","f8054f7f981344d8197eff5b89ecbc0d"],["D:/Blog/public/synthetic-reuse-principle/index.html","a7e858d5c44394bfcb64eaf0dfb4b3be"],["D:/Blog/public/tags/C/index.html","2a5beef8197ba5d738dfede0fe08f8b8"],["D:/Blog/public/tags/C/page/2/index.html","8b544dc3cf1998f11e9d062d8c632a63"],["D:/Blog/public/tags/Concurrency/index.html","f215ac61039b350391d637f4ec1d9d83"],["D:/Blog/public/tags/DesignPatterns/index.html","5f8edda7dda2067c96e738614d681854"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","42c63951182316c8700ea9f8f2eea56a"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","3bfe22f870ad317d66ee553348350f37"],["D:/Blog/public/tags/DistributedMicroservices/index.html","aa964f011f0fec6c5d5068b7de846a21"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","820385b251852e2c34e56ae7d446202f"],["D:/Blog/public/tags/Interview/index.html","585568de0516defa715ef034efc8de19"],["D:/Blog/public/tags/Interview/page/2/index.html","f8bfe9529976a9ef7147872b73e40115"],["D:/Blog/public/tags/JVM/index.html","81307c6be06efc888b1ea9e55d29cdb1"],["D:/Blog/public/tags/Operating-Systems/index.html","a468f976d00331ab9ec8837024e5da9d"],["D:/Blog/public/tags/about/index.html","00d1e52a8cf2669bcf4a5b65ea6da2a2"],["D:/Blog/public/tags/ad/index.html","7568d1a168e4ded6954ff7f67fd50347"],["D:/Blog/public/tags/dataAlgorithm/index.html","0c96bcc1121052ccaefa4a965a332bcc"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","2e0e9a8bd016504c60b4fddc510ddbf3"],["D:/Blog/public/tags/docker/index.html","f21d1f4be295bdf9eafa232fe137a5e0"],["D:/Blog/public/tags/frame/index.html","671d81d22bd577d8ea2e00a4a5e34b54"],["D:/Blog/public/tags/front/index.html","3b5ee6f9c5ab8be0f912837c36dc7f34"],["D:/Blog/public/tags/index.html","4415a339258130276f36d55b788a6008"],["D:/Blog/public/tags/index2.html","4b2bd0a0d332b6dc834a46a045b4add6"],["D:/Blog/public/tags/io/index.html","2005911a16458c815f1367f3c34972b0"],["D:/Blog/public/tags/linux/index.html","b9e8b9241d5a12dd730d2f7af12b0547"],["D:/Blog/public/tags/maintain/index.html","976cc180a6dae6ad969e51513ade80f0"],["D:/Blog/public/tags/math/index.html","ccd91e93beed7ddcae89f7544374cbef"],["D:/Blog/public/tags/math/page/2/index.html","fd83de60cd09a244454bbb55590b7f89"],["D:/Blog/public/tags/network/index.html","2822ad9db41f114d5b047f51cef8f857"],["D:/Blog/public/tags/project/index.html","7cf5c7fb780c217d7a34693c59f59a68"],["D:/Blog/public/tags/resume/index.html","96b541c4e37e7273382046cce03191c9"],["D:/Blog/public/tags/safe/index.html","8ab21cb541e07ec82b7dff75bc32b22a"],["D:/Blog/public/tags/sql/index.html","925b93677103a34f1667b2b928811199"],["D:/Blog/public/tcpip/index.html","d6d3455e303ffb935c3739df7eb63bdb"],["D:/Blog/public/template-method/index.html","f59128e1f74f6a7c307d9c8f07acc250"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e37595317300e836dcd01730caa0b5ba"],["D:/Blog/public/thread/index.html","7575c27ea64a1bf204e1ddcf09c6aa64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","52c1570dff47e757e1090b071c155135"],["D:/Blog/public/ubuntu-set-ip/index.html","81c8bc225c2016bd9a0556b11d52d177"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1626d6930c477067dc8880926e0af338"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ae94ce26db5d45a31a618be4f96cbd96"],["D:/Blog/public/users-create-data-types-themselves/index.html","78061a26e7ebd063a0faa397c95a9586"],["D:/Blog/public/visitor-mode/index.html","4812261d310e79031d8622f2534fb3a4"],["D:/Blog/public/xml/index.html","2b3dff61f7916c908247b2bd1ab4212b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de0c5f3a15e80d5a45792fc3524f440c"]];
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







