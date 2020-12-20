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

var precacheConfig = [["D:/Blog/public/404.html","047124fe09d1926caa7f5039040d2096"],["D:/Blog/public/7-sorting-algorithms/index.html","5599ee498fbe307464549552c6432b7b"],["D:/Blog/public/AIO-blocking-model/index.html","c267ef9c2b16c98185e1e1fa5d829e09"],["D:/Blog/public/BIO-blocking-model/index.html","f5d12c2e2b3760868429c8fbee26dc88"],["D:/Blog/public/C-algorithm/index.html","81a5fd825c98c25c15368b21deac3949"],["D:/Blog/public/C-programming/index.html","2608987385355045a985cdd35707bf91"],["D:/Blog/public/Good-use-of-pointers/index.html","7748d5b70044a413ac7df252de980694"],["D:/Blog/public/IO-model/index.html","1de6e5d714f045289a11ad909ac0fb89"],["D:/Blog/public/IO/index.html","f12b2e8df0214ade95ffa8d7778ce236"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","f80e0b052a12eb5f11832794a8b19797"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5619c0b492a41a48f324b36fa1bc1a3c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","662210b08982475be63536772a5994d4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","12864d8456d1f77406e50bfca277182a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","e57f144b48f2be4382624d6895e23eee"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","7bf5abca394fe283ef108f13fc606a94"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","b5933f8d5d0505493596e81d54fb5a1e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","46de568910a8d9c761a81778a9cc2cf2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","0ac7204060b0fe8b578727fb89601881"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b5be9a82baa33588daae048f05434c19"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","01657febbb633a2b0c065ecea9eed51c"],["D:/Blog/public/Java-network-programming/index.html","4a062c26196fb2ed31d1b3523613c3f1"],["D:/Blog/public/NIO-blocking-model/index.html","fba1b6d4ea7b26edb18f4b6c3b59e6ab"],["D:/Blog/public/Native-method/index.html","b030af639845a5949db1813c5000dc68"],["D:/Blog/public/Sandbox-security-mechanism/index.html","83e784bf76a6d3c9f448bee9d6ac4b01"],["D:/Blog/public/about/index.html","73264aab5b70fa55ac9dfcfd08fc9be4"],["D:/Blog/public/adapter-mode/index.html","64cc114dafa185b85708dfd2dee5ae3f"],["D:/Blog/public/agency-model/index.html","8698a73c09b73773ed58229805045b88"],["D:/Blog/public/appearance-mode/index.html","4a376324d489828777322a7c63079914"],["D:/Blog/public/archives/2019/01/index.html","00c6b68b94e0ccdab1ec83ceb8ffe0b1"],["D:/Blog/public/archives/2019/07/index.html","c8e067be1af420841ba8d53cb234d93a"],["D:/Blog/public/archives/2019/12/index.html","bbabbdf022b94563c61911e59af3318f"],["D:/Blog/public/archives/2019/index.html","93240a8892845269d7caec418971fd27"],["D:/Blog/public/archives/2020/04/index.html","113aff47af8070614df0eed1c14f000d"],["D:/Blog/public/archives/2020/05/index.html","ba2ae85ee5ef83d1f9c0ab2d2179b4fa"],["D:/Blog/public/archives/2020/05/page/2/index.html","c8fd206be43d6f57e34dc1998811da03"],["D:/Blog/public/archives/2020/06/index.html","2fdc93a946c7aa868c7f4928db6d18d6"],["D:/Blog/public/archives/2020/06/page/2/index.html","a139df94e4f8b91d88dd3f5acb4c2be0"],["D:/Blog/public/archives/2020/06/page/3/index.html","5140a0b47fd86332024f36655781552a"],["D:/Blog/public/archives/2020/06/page/4/index.html","fbc64a7fc0666d02e77b29ea776a0d49"],["D:/Blog/public/archives/2020/07/index.html","f900ecdbf6c8147c87fadde906b960c3"],["D:/Blog/public/archives/2020/07/page/2/index.html","064bb4882ea3044b54a8bd090e2a3967"],["D:/Blog/public/archives/2020/07/page/3/index.html","d219f70a116a9aad6f7fceb345d75d34"],["D:/Blog/public/archives/2020/08/index.html","fd29ac28a6e32c5dafc61582c922a455"],["D:/Blog/public/archives/2020/08/page/2/index.html","54978157b29e0ca7f18f6f6f8806c7d6"],["D:/Blog/public/archives/2020/08/page/3/index.html","d0404c06a22cd7b88a5ad663e367e3f9"],["D:/Blog/public/archives/2020/09/index.html","aa08a597375ddf4b55561440f38559c2"],["D:/Blog/public/archives/2020/09/page/2/index.html","3c7ee6513995bf3470c7899308c78c40"],["D:/Blog/public/archives/2020/10/index.html","4683e880144e578225f5851e27ad4372"],["D:/Blog/public/archives/2020/10/page/2/index.html","ede4e8f9a1cce23a2a67e390862f22da"],["D:/Blog/public/archives/2020/11/index.html","cc92a0e1303563e6f4bc562409467e15"],["D:/Blog/public/archives/2020/12/index.html","6c0e13591dff7b3843c5c4c7636785d9"],["D:/Blog/public/archives/2020/12/page/2/index.html","a9939bf70365812aa4070caf91d39698"],["D:/Blog/public/archives/2020/12/page/3/index.html","2369a5a799c06dde07993c1e938f3e86"],["D:/Blog/public/archives/2020/index.html","6c7e21ed955ceb15374e16f86eb679f7"],["D:/Blog/public/archives/2020/page/10/index.html","f70252496229681ba26284184ba2102a"],["D:/Blog/public/archives/2020/page/11/index.html","026bcd7ca1ee00ea1e2ac989f0db9ede"],["D:/Blog/public/archives/2020/page/12/index.html","e173684e6b9886ac0d3de970eca35cdc"],["D:/Blog/public/archives/2020/page/13/index.html","79845229600ae95ae1f4a8add4104695"],["D:/Blog/public/archives/2020/page/14/index.html","b6b2c3e2d18a3bce52bb61c6276357e4"],["D:/Blog/public/archives/2020/page/15/index.html","6a86ec40884e14d3965a434cbc841f21"],["D:/Blog/public/archives/2020/page/16/index.html","089069532af133037eff06d9630ed3c4"],["D:/Blog/public/archives/2020/page/17/index.html","ee54f0554d96e91b4de29326841ee9a1"],["D:/Blog/public/archives/2020/page/2/index.html","435dfa1591a44e924e18ade2f2e88064"],["D:/Blog/public/archives/2020/page/3/index.html","b3d60afbe99dd654a6c66b559480b66b"],["D:/Blog/public/archives/2020/page/4/index.html","ff5c2578abcf77041ae1aaff30ab5ded"],["D:/Blog/public/archives/2020/page/5/index.html","5fd991e5cf012fb5783a888a88f6e8a4"],["D:/Blog/public/archives/2020/page/6/index.html","5a0e8457041b6773ff1bd98435e7b3d7"],["D:/Blog/public/archives/2020/page/7/index.html","ac7ac3ae23e68cfb1e368e008e14423b"],["D:/Blog/public/archives/2020/page/8/index.html","fffe133d4a9c218d097f6dfcdaff50be"],["D:/Blog/public/archives/2020/page/9/index.html","a3e319d7d7a734980a382fbae312a750"],["D:/Blog/public/archives/index.html","ad71a0250041ee2001d5873223ac56f4"],["D:/Blog/public/archives/page/10/index.html","6f6e789a504e117695c7d9bba76a2ed0"],["D:/Blog/public/archives/page/11/index.html","6f6e789a504e117695c7d9bba76a2ed0"],["D:/Blog/public/archives/page/12/index.html","6f6e789a504e117695c7d9bba76a2ed0"],["D:/Blog/public/archives/page/13/index.html","6f6e789a504e117695c7d9bba76a2ed0"],["D:/Blog/public/archives/page/14/index.html","a82cc0410a237d42d46cb3fa6f2e3ecf"],["D:/Blog/public/archives/page/15/index.html","a82cc0410a237d42d46cb3fa6f2e3ecf"],["D:/Blog/public/archives/page/16/index.html","a82cc0410a237d42d46cb3fa6f2e3ecf"],["D:/Blog/public/archives/page/17/index.html","a82cc0410a237d42d46cb3fa6f2e3ecf"],["D:/Blog/public/archives/page/2/index.html","0fd680c1d75311ccfec1e6dd3091655b"],["D:/Blog/public/archives/page/3/index.html","0fd680c1d75311ccfec1e6dd3091655b"],["D:/Blog/public/archives/page/4/index.html","0fd680c1d75311ccfec1e6dd3091655b"],["D:/Blog/public/archives/page/5/index.html","0fd680c1d75311ccfec1e6dd3091655b"],["D:/Blog/public/archives/page/6/index.html","d0e00e22985e2d537fb9575aacc81d3c"],["D:/Blog/public/archives/page/7/index.html","d0e00e22985e2d537fb9575aacc81d3c"],["D:/Blog/public/archives/page/8/index.html","d0e00e22985e2d537fb9575aacc81d3c"],["D:/Blog/public/archives/page/9/index.html","d0e00e22985e2d537fb9575aacc81d3c"],["D:/Blog/public/array/index.html","cea5fafffbda6eafcdbfd4524cbafb15"],["D:/Blog/public/binary-search-algorithm/index.html","34780d1980aca7620c8a6b6c102f6301"],["D:/Blog/public/binary-sort-tree/index.html","d7d3be9f989fedf08b71e40e7fb2cf3a"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","dcf22ddcfe44a10ff1b8e7b612c55af2"],["D:/Blog/public/bridge-mode/index.html","411beec938a39cdcb495c2629bc12330"],["D:/Blog/public/builder/index.html","95f1b50e7f4b55ca6a6edc5552a6115e"],["D:/Blog/public/c-pointer/index.html","79e8929a122600e6268d7fedd722d1d3"],["D:/Blog/public/categories/C/index.html","86669d454c1494a19d12e4b31ea0e028"],["D:/Blog/public/categories/SpringMVC/index.html","91c9256484c0944c4c181633893e640b"],["D:/Blog/public/categories/index.html","48370a5a39074ec12afbc154dd619f71"],["D:/Blog/public/categories/linux/index.html","caebc1879a3bd4fec9a14ee80c1c48a9"],["D:/Blog/public/categories/分布式/index.html","433194ef65865f8a18c92a857af76bcb"],["D:/Blog/public/categories/分布式/page/2/index.html","7fcadf41f0617b116d3da616eebb5dbf"],["D:/Blog/public/categories/前端/index.html","53fe2f7e0e3fa2a364126ea989efae74"],["D:/Blog/public/categories/设计模式/index.html","5ea5b31ab6f2d0beed8f9cd8347cf5aa"],["D:/Blog/public/categories/设计模式/page/2/index.html","5f55ea64f77d8adfd5942cc7c7a87ac6"],["D:/Blog/public/categories/高数/index.html","04741e37aada40f6c93722d18f375646"],["D:/Blog/public/chain-of-responsibility-model/index.html","077cc4a3e9fefb00d89be4060503b15f"],["D:/Blog/public/chinese-and-english-switching/index.html","e6db6313dd9ec180bcbd4c4947b9ef43"],["D:/Blog/public/combination-mode/index.html","9d6cdafaccca6437132b50fb4ca26511"],["D:/Blog/public/command-mode/index.html","b58933f9e4b5f79b6c17431d457e7451"],["D:/Blog/public/common-commands-of-unix/index.html","eac9c58c39990660438cea465ca1f3ad"],["D:/Blog/public/computer-network/index.html","d6ea22fe0e68d4e854f5942843e2e3c9"],["D:/Blog/public/concurrency-principle/index.html","34851987c4fe3ae1cba620719512ee3c"],["D:/Blog/public/continuous/index.html","a59a61b7a37b7a13f9beda3fa59e8023"],["D:/Blog/public/contract/index.html","b65c5d414448fd520b6210a4e2144b5b"],["D:/Blog/public/css/first.css","327b8fa508600f1576d4f3ce25d8bcf2"],["D:/Blog/public/css/style.css","e222d15426252074b49660583b533fa1"],["D:/Blog/public/cycle-structure-programming/index.html","049574deaab505b59e4fc1b02bc11f25"],["D:/Blog/public/data-structures-and-algorithms/index.html","859c0db5aa8dd48c556086107d6b5247"],["D:/Blog/public/deb/index.html","9c61ed00eb3ba540dea95a347ad975ed"],["D:/Blog/public/decorator-mode/index.html","8ebbd3d5e782af443ee2aac7059a5713"],["D:/Blog/public/definite-integral/index.html","c39efd4ed1d8d0a648836631da687b16"],["D:/Blog/public/dependence-reversal-principle/index.html","a8ff3b4c069489d252f8488ea0e4eb0c"],["D:/Blog/public/derivative/index.html","2a9132870c57b77131d37654ac72d9c9"],["D:/Blog/public/design-patterns/index.html","c041b18a02621511e38f5355cc3d6f8f"],["D:/Blog/public/differential-equation/index.html","9d5246286e42aa9318c2bc927f7a6541"],["D:/Blog/public/differential/index.html","6c3413afa8eadad99a2ca9c1db7b7494"],["D:/Blog/public/dimits-law/index.html","15ddcc96eaff443d4eca98bdeff3eb0c"],["D:/Blog/public/docker-virtualized-container/index.html","d7fbec8123e17554bd318dd669016f8b"],["D:/Blog/public/double-integral/index.html","59cc1fe9785c679d3ce8b61311ff8cc1"],["D:/Blog/public/dynamic-array/index.html","d2386a7bfc713580377aa384b607e50c"],["D:/Blog/public/encoding-algorithm/index.html","fc982c33524a476d20400d352cbd9959"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c9f364d90bb2ce1eda5534ebc92ff8dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","e657bde94483b56de43250262f310d35"],["D:/Blog/public/factory-design-pattern/index.html","fd608af104b4e0ca126c6c97f3e4e8f1"],["D:/Blog/public/file-input-and-output/index.html","9f9f9d53125dc468cf2722851f26208c"],["D:/Blog/public/flyweight-model/index.html","2df5062a83e403086e1f9f9280d3f0ab"],["D:/Blog/public/friends/index.html","d51fc934080c4d0e89e8fe98c3aaeb2d"],["D:/Blog/public/function-graphing/index.html","4996490555bdb61a712221dfc5d77446"],["D:/Blog/public/gateway-service-current-limit/index.html","a7b510b888a6b1eab13ef8efe446758e"],["D:/Blog/public/gc/index.html","e6afeb20f70f23facdb27f2f589e426d"],["D:/Blog/public/generalized-integral/index.html","37b7c56ccd3c2e542ba28804fe9d0508"],["D:/Blog/public/google8102e2f35ce9e391.html","1cec4d02119ffff991a9b6e753dc0d75"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6cac42796756dae25d22a90a0c5ae5c6"],["D:/Blog/public/hash-algorithm/index.html","e230e7b6b76e7e4924474a4ef814f468"],["D:/Blog/public/heap-sort/index.html","c1fa82bc63c7549dc3938923f1d333c4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1e0a538350160a04b4cd9b29b4b0bb95"],["D:/Blog/public/http/index.html","4a3250c5e0d23906e727410313236e3b"],["D:/Blog/public/indefinite-integral/index.html","2fc2f82da35afb13c49279ac180b742c"],["D:/Blog/public/index.html","92d629773192ef6ff90643cc2783f9c5"],["D:/Blog/public/infinitesimal-and-infinite/index.html","66825310b7128c4e2f4a3fddf88ba00c"],["D:/Blog/public/interface-isolation-principle/index.html","79d6933a3bf4894357da306ea0b8a702"],["D:/Blog/public/intermediary-model/index.html","9ad919af47b9c0ebc917459ecdb82071"],["D:/Blog/public/interpolation-search-algorithm/index.html","6ad699c7799c774b6ed266c93e6e8d52"],["D:/Blog/public/interpreter-mode/index.html","8a0cbc9bcbe0e4fab2c6cee8b2e11421"],["D:/Blog/public/introduction-to-computer-network/index.html","ec74fb1ab6f7c83f5e4f44d8ac4aeaba"],["D:/Blog/public/introduction-to-operating-system/index.html","7c998018b08933bfe61764887f9084d5"],["D:/Blog/public/inversion-of-control/index.html","92bac31aba5cb8bb4e9bef858283c0b8"],["D:/Blog/public/io-Interview/index.html","82ac7216492f1853bdbc668f7ef3a411"],["D:/Blog/public/iterator-mode/index.html","9d2aa871174fa75f82584bbcf0b112d2"],["D:/Blog/public/j2ee/index.html","4af38733f7bf467831ad65117d95c42d"],["D:/Blog/public/j2se/index.html","4636f441aae1e2e3211f3beb5dac8850"],["D:/Blog/public/jdbc/index.html","123d132e70da060e121f583bb10176d7"],["D:/Blog/public/jdk/index.html","073676885bdd403c586320d0303a5ccc"],["D:/Blog/public/jmm-memory-model/index.html","8a61722729e24909526a38cc846aae4c"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","7a167cba001bc40dfd0999e6aca20b96"],["D:/Blog/public/jvm/index.html","23c492672e3fccba116b32b1641c2831"],["D:/Blog/public/law-of-robida/index.html","e4f73979f3e01f6a194aa19c2f7afeda"],["D:/Blog/public/limit/index.html","02e216ca987afd1e02413ef6568f2be9"],["D:/Blog/public/linear-search-algorithm/index.html","294be538080226d891406ae9fc6ca96b"],["D:/Blog/public/link/index.html","55fe7dc45359f6d93be3a649fdc33fcd"],["D:/Blog/public/linked-list/index.html","fce9cd682b8003aba6e9921d3eafb891"],["D:/Blog/public/linux/index.html","d8fd9ab3cd216ea5e751b03607762701"],["D:/Blog/public/liskov-substitution-principle/index.html","998815a3a957a40b45d642889a0d160d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c395ec23c708c0a174886ce23516e412"],["D:/Blog/public/maintenance-1/index.html","ecd47eeb8bfcb989a87a62cd9e0d1024"],["D:/Blog/public/maintenance-2/index.html","fe990add26d8560302caaaecc34f29d3"],["D:/Blog/public/maintenance-3/index.html","b154d636398bb52d913c0291ea812e5b"],["D:/Blog/public/memo-mode/index.html","c9f0574cd2aefe17395e30987b3e3dfe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9276ab97ec6b18c2ead999cbb7939621"],["D:/Blog/public/multi-function/index.html","7dc8eb7aed113cb612f33664d6e771ec"],["D:/Blog/public/multithreading/index.html","ced4c93f1bcf63f4a2fafa7b7c8ca548"],["D:/Blog/public/mvc/index.html","7e8b4023ff800a69171cabd276df78a0"],["D:/Blog/public/mybatis/index.html","883f90d89160af5f0f46bd0d9615a034"],["D:/Blog/public/mysql/index.html","c5edbd25c25c5c2f37088a1ab6b9dce3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","81314b2877e607bc356f886d4aec40dd"],["D:/Blog/public/null/index.html","3385aedac9dce43fa00df1c2b6477ea2"],["D:/Blog/public/objectoriented/index.html","6ad25432b41b3b6942d4407b123e0f04"],["D:/Blog/public/observer-mode/index.html","3aa3c565a1e8582f8b7cb485518b6e1d"],["D:/Blog/public/off-heap/index.html","8435177514bb7eca7f8ffaffc9336403"],["D:/Blog/public/operating-system/index.html","f76a84151dbc7a29ad7f684f8ec474a8"],["D:/Blog/public/page/10/index.html","bb7cffaaa2a5086b2d63409728f763af"],["D:/Blog/public/page/11/index.html","4d7d113daa493f29dd5d944f6a64ffa5"],["D:/Blog/public/page/12/index.html","0934315b9217c3c28c8ff1745d118987"],["D:/Blog/public/page/13/index.html","7b0a47d37420e943f932ed8ae347bdcf"],["D:/Blog/public/page/14/index.html","a70abb45ece7a57373ef38b30aae5a13"],["D:/Blog/public/page/15/index.html","e79e01657f0d1c76a7ca219ae897527c"],["D:/Blog/public/page/16/index.html","74a72b2bf78e6caaa16b0dc408470f54"],["D:/Blog/public/page/17/index.html","eb19704bdd2e308197002334bf6bda0f"],["D:/Blog/public/page/2/index.html","3c5dd1bffff2fb118c2e0e719fcddf07"],["D:/Blog/public/page/3/index.html","0da5344f571db1e0ff165f26dce89141"],["D:/Blog/public/page/4/index.html","7f50ee641c88fea746061819cce857f6"],["D:/Blog/public/page/5/index.html","2dd9a1d16b31cc31af00afb699147be1"],["D:/Blog/public/page/6/index.html","1c6fcbb7fcf06954e8ebea69f582f570"],["D:/Blog/public/page/7/index.html","b05c1afa2a505284373d025c15cf38a3"],["D:/Blog/public/page/8/index.html","1b0ff9163d125eaf38594ed0923d0752"],["D:/Blog/public/page/9/index.html","9560ebb1b81d7eccb656193a7ce3b1ed"],["D:/Blog/public/palindrome/index.html","1b1ddf7352ae00fa60a2bcfaf76ba6bd"],["D:/Blog/public/partial-derivative/index.html","e4db2173518797c528d774ef7d3c4505"],["D:/Blog/public/pass-by-value/index.html","7573e5ce150c4b7aeca7a8d15334e38c"],["D:/Blog/public/pictrue-bed/index.html","e97596e29814d34a9b7af3aac1c88179"],["D:/Blog/public/principle-of-opening-and-closing/index.html","eb6ef073c9f3d5d6beeb261dc6951a4e"],["D:/Blog/public/principles-of-computer-organization/index.html","2fe4afa5ef7edb95de59baa139d0aa84"],["D:/Blog/public/prototype/index.html","05e1db214e7d8950140aeb1e4527ec72"],["D:/Blog/public/queue/index.html","e9c8228e2c618b9fa210d1b7e5c8fb29"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f977524b6ac0fa2dcee4a3fd6dd4257"],["D:/Blog/public/redis/index.html","70ca21d1ae665d50f001b2c9bf499129"],["D:/Blog/public/reflection/index.html","d0ca09c2624684255cf627e4200703ea"],["D:/Blog/public/resume/index.html","00a1095fdce2e544b3c8090c8aa9d30e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5126f6572dce03dd7e3c417d1fc62b4b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cf25134359bacda027a2e5a033004789"],["D:/Blog/public/select-structure-programming/index.html","a4a8903b81e55549e44a87a8c2989be2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b92a1add05d16daba5f1ca2e84d430f2"],["D:/Blog/public/sequential-programming/index.html","ea9cd0f06400af29f81246a86266535c"],["D:/Blog/public/series/index.html","95531a7f4380ff134dd05235c1193c0f"],["D:/Blog/public/single-point-login/index.html","b3136a204d72dee4f2e3509b52495194"],["D:/Blog/public/single-responsibility-principle/index.html","1864705a4aa8e9c4535c0b4bf1316859"],["D:/Blog/public/singleton-mode/index.html","0c8def19f5008965820ec9ff0a3150b7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6dabd8c715f923e33b885c7777737494"],["D:/Blog/public/sparsearray-sparse-array/index.html","dffea52168a7f1b74cd2441e08af1d79"],["D:/Blog/public/spring-architecture/index.html","b774cea834df7c9268cc5a66fd54d2a8"],["D:/Blog/public/spring-relate/index.html","d5221a72c9c3004783e91accb6ee838a"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d917f520a02eacadfc13bae25ecb79a0"],["D:/Blog/public/spring/index.html","2b3430932ae8775367cfda210662f41b"],["D:/Blog/public/springcloud-alibaba/index.html","e1d7748066c51cb28b6c2765a29da54a"],["D:/Blog/public/springcloud-bus-message/index.html","6ffef23a392528db07e1047a3ff97529"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be611eda9d29d1c15548704969522a4e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ee5b97a18a286dfa21321872e1c3e8ec"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6f332e7133d3c26e26a52b300274457b"],["D:/Blog/public/springcloud/index.html","4b48291749fa0bc29f3948692f50b663"],["D:/Blog/public/springmvc-environment-construction/index.html","29904ad8a29f8720b750012b54138fd1"],["D:/Blog/public/springmvc-work-stream/index.html","7c5d78f28beb6eb909fccae3c6246439"],["D:/Blog/public/sql-injection-attacks/index.html","b11eba75ac0e017ffaf9d874fd67fb28"],["D:/Blog/public/stack/index.html","682cde39b57095ff9bc3559d6b6011ab"],["D:/Blog/public/state-mode/index.html","8938a204cc9a9f53f5d73a4ed0587138"],["D:/Blog/public/strategy-mode/index.html","f8054f7f981344d8197eff5b89ecbc0d"],["D:/Blog/public/synthetic-reuse-principle/index.html","a7e858d5c44394bfcb64eaf0dfb4b3be"],["D:/Blog/public/tags/C/index.html","6861e33ab2d61716cf7eeea29acd36c5"],["D:/Blog/public/tags/C/page/2/index.html","bc4789791246c779a42b31300209c3ab"],["D:/Blog/public/tags/Concurrency/index.html","35524c20da9cf34e3c7c9b443487f813"],["D:/Blog/public/tags/DesignPatterns/index.html","221c3affa04866689e2982d4e4c4d939"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","9ed8b343ce72411868ea7c8e26a78425"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","108cf4d6361c0fb8f00eb642d9ec7e66"],["D:/Blog/public/tags/DistributedMicroservices/index.html","bfd5cd9824dde30ed68ee4ba7a922672"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","44c3a11133bdbab83cf058b43595f639"],["D:/Blog/public/tags/Interview/index.html","1e003ada36e6d7aeff742b52a7011de4"],["D:/Blog/public/tags/Interview/page/2/index.html","8edd9fe7d0062e22b256148d8868e1b4"],["D:/Blog/public/tags/JVM/index.html","a1a82ad0f3e4d8f42656bb35500f2dcf"],["D:/Blog/public/tags/Operating-Systems/index.html","dc310af27b1c30dd65f3a7edcc223abd"],["D:/Blog/public/tags/about/index.html","9996525e79d484b2645bddbabc49b711"],["D:/Blog/public/tags/ad/index.html","b662fc0dae3e1f2d4eda325e90150539"],["D:/Blog/public/tags/dataAlgorithm/index.html","78f664067a06071809ee45a3d3c501a4"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","55579525ecd4c55416bdbd8423a2f5c1"],["D:/Blog/public/tags/docker/index.html","c9f3bd1cec8ffc033e213c7a8a1a00e1"],["D:/Blog/public/tags/frame/index.html","617053e03d3457377475c2cb0653b5a7"],["D:/Blog/public/tags/front/index.html","563e00438281685714618fada291a965"],["D:/Blog/public/tags/index.html","4415a339258130276f36d55b788a6008"],["D:/Blog/public/tags/index2.html","4b2bd0a0d332b6dc834a46a045b4add6"],["D:/Blog/public/tags/io/index.html","d665bba318476bd5548a274a46a7d232"],["D:/Blog/public/tags/linux/index.html","5c3fa87eeaeaca961980c6c39f3cc43f"],["D:/Blog/public/tags/maintain/index.html","aaae95b78ad09ea43e140a0aba9b6662"],["D:/Blog/public/tags/math/index.html","6127855b170b9413045e971f154f1c74"],["D:/Blog/public/tags/math/page/2/index.html","dbc7bba7525085877d18f072087fbee9"],["D:/Blog/public/tags/network/index.html","8fda0976f5c8e4cce93f472d19f9799f"],["D:/Blog/public/tags/project/index.html","f1c3f750ff4c8e9760a282271cf94113"],["D:/Blog/public/tags/resume/index.html","3754061cc04aad2ecd4c38432e906e9d"],["D:/Blog/public/tags/safe/index.html","3ff44142469d12ac910f9b0c5f2ae0b4"],["D:/Blog/public/tags/sql/index.html","51f46ba5182e6b34c775c200b28eadad"],["D:/Blog/public/tcpip/index.html","d6d3455e303ffb935c3739df7eb63bdb"],["D:/Blog/public/template-method/index.html","f59128e1f74f6a7c307d9c8f07acc250"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e37595317300e836dcd01730caa0b5ba"],["D:/Blog/public/thread/index.html","7575c27ea64a1bf204e1ddcf09c6aa64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","52c1570dff47e757e1090b071c155135"],["D:/Blog/public/ubuntu-set-ip/index.html","81c8bc225c2016bd9a0556b11d52d177"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1626d6930c477067dc8880926e0af338"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ae94ce26db5d45a31a618be4f96cbd96"],["D:/Blog/public/users-create-data-types-themselves/index.html","78061a26e7ebd063a0faa397c95a9586"],["D:/Blog/public/visitor-mode/index.html","4812261d310e79031d8622f2534fb3a4"],["D:/Blog/public/xml/index.html","2b3dff61f7916c908247b2bd1ab4212b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de0c5f3a15e80d5a45792fc3524f440c"]];
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







