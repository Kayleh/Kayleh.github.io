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

var precacheConfig = [["D:/Blog/public/404.html","3e95bcf951d992b70322395da966d5d3"],["D:/Blog/public/7-sorting-algorithms/index.html","62d43ccccdb13c2aa1cbd4772989eb44"],["D:/Blog/public/adapter-mode/index.html","550ac17d5c21b4892f71367d6e97e792"],["D:/Blog/public/agency-model/index.html","72b5ac8e47ee8d93118a3e6210f7f887"],["D:/Blog/public/appearance-mode/index.html","799abaae69aa17a852b59f5d1269a44a"],["D:/Blog/public/archives/2019/01/index.html","de1d4673150b16583cb13c2d65a8cc73"],["D:/Blog/public/archives/2019/07/index.html","ca5686a787c4cfd60e364331d3c9f8c1"],["D:/Blog/public/archives/2019/12/index.html","c84a7f4f0fe7dadcb3b3962ac4b7b370"],["D:/Blog/public/archives/2019/index.html","c68b34f4c03519827ca6ba7e44caffb4"],["D:/Blog/public/archives/2020/04/index.html","f0421f08aae6fa585615ebcc67236420"],["D:/Blog/public/archives/2020/05/index.html","bca47fb807113045df429415f314e77f"],["D:/Blog/public/archives/2020/05/page/2/index.html","a1555f7f6ab455f02222f97b57f50ac1"],["D:/Blog/public/archives/2020/06/index.html","b889d2c506fb009aaf2fc0a2762da5d9"],["D:/Blog/public/archives/2020/06/page/2/index.html","adf4c07caa1ed1d7e94ea40c0d522834"],["D:/Blog/public/archives/2020/06/page/3/index.html","0c9d79c81e6b39b4fd1ad2d067c5bb75"],["D:/Blog/public/archives/2020/06/page/4/index.html","346e4f4dd79e0f2a8ac60033a4138857"],["D:/Blog/public/archives/2020/07/index.html","5a3b360b27f92a5b3a91a2ae859214f8"],["D:/Blog/public/archives/2020/07/page/2/index.html","37c292f57995f9411efa0c9958d988b2"],["D:/Blog/public/archives/2020/07/page/3/index.html","647e2a404b0c90f139cbcebd962fcb1d"],["D:/Blog/public/archives/2020/08/index.html","f63fc4e6857d512fa45f7a72c21cb49e"],["D:/Blog/public/archives/2020/08/page/2/index.html","36018ae4837927a2924a68fdaa27a594"],["D:/Blog/public/archives/2020/08/page/3/index.html","58890764d5303e1d7385477a688c3efa"],["D:/Blog/public/archives/2020/09/index.html","f8171b68a068401a8b8233dc4b137652"],["D:/Blog/public/archives/2020/09/page/2/index.html","4b67975488738cb4b47fbee28b190126"],["D:/Blog/public/archives/2020/index.html","98bf9f92c7de4b645ac67ab1fbda91ec"],["D:/Blog/public/archives/2020/page/10/index.html","4597ae5c4f46557e51bb7fb819eee9e1"],["D:/Blog/public/archives/2020/page/11/index.html","bbb3991a57c79a5d7c5a9f2cb424281d"],["D:/Blog/public/archives/2020/page/12/index.html","11a24b0f9447e88ab0414ec8e32226fe"],["D:/Blog/public/archives/2020/page/2/index.html","a66184d7b924b0f04da622bc2bbebc29"],["D:/Blog/public/archives/2020/page/3/index.html","b42a16f6b885be11c322fd97e59263d2"],["D:/Blog/public/archives/2020/page/4/index.html","d46ddbbf546cc8228143574d65c36a44"],["D:/Blog/public/archives/2020/page/5/index.html","ad65e100600617a95ca197d0e10b2284"],["D:/Blog/public/archives/2020/page/6/index.html","f882017665fc5d11426bcbe3932a9990"],["D:/Blog/public/archives/2020/page/7/index.html","9436a6e924ee9fc493ab90acfd8e184c"],["D:/Blog/public/archives/2020/page/8/index.html","5db48e9d89e689a06d6b545c167f909b"],["D:/Blog/public/archives/2020/page/9/index.html","02b75d635de2f8ddd9ddf743b64a2dd9"],["D:/Blog/public/archives/index.html","7949041e435ec3a853dccdfa98441fd5"],["D:/Blog/public/archives/page/10/index.html","dd20d1267a6829597623e4646866ed1f"],["D:/Blog/public/archives/page/11/index.html","4db20f4b35716ab7d0900657ad32199c"],["D:/Blog/public/archives/page/12/index.html","8e7013c652b40458091bc4e50cc62d47"],["D:/Blog/public/archives/page/13/index.html","6110b25919aab15d61f0c04d212f372c"],["D:/Blog/public/archives/page/2/index.html","ad23b308684c04dfb1f20866606b4ee7"],["D:/Blog/public/archives/page/3/index.html","06922fb650553043d18117269e2a998f"],["D:/Blog/public/archives/page/4/index.html","b43230cc9ef468efd3dca8673bbd74ed"],["D:/Blog/public/archives/page/5/index.html","9f0708ba46b37bb2a3ab2fb90a8b886b"],["D:/Blog/public/archives/page/6/index.html","23e12c5f90c445b278adc064c5e2d892"],["D:/Blog/public/archives/page/7/index.html","43eef75a541deb7528c94beedf73c0fe"],["D:/Blog/public/archives/page/8/index.html","50feac038ac0e7cf26f4b7127fb83108"],["D:/Blog/public/archives/page/9/index.html","9a8ea82d1a35451ee6b96bc686d197cf"],["D:/Blog/public/array/index.html","4473161510676a77f3d6b8e796f6e076"],["D:/Blog/public/binary-search-algorithm/index.html","f9dcce522b29cd815e89f45358da7c0b"],["D:/Blog/public/binary-sort-tree/index.html","14fd43a1d8ff420f74804b5fb42bf9d4"],["D:/Blog/public/bridge-mode/index.html","bc7e30a56050666f7344a00d1a773b96"],["D:/Blog/public/builder/index.html","5bf59f939b77915e968a8ced23284588"],["D:/Blog/public/c-pointer/index.html","3e44eb10ac739eea3744cf1b377a02f1"],["D:/Blog/public/calculus/1601110706936.png","3b99d2c6feca49b964323b4884d48704"],["D:/Blog/public/calculus/1601110816738.png","506cebcbc23fe81a0b817623880d2473"],["D:/Blog/public/calculus/1601111539113.png","e1b61f5218a81b48dd5576187ee5cd3f"],["D:/Blog/public/calculus/1601111632965.png","977988c9ecaa93dbd93c046dfecd74e3"],["D:/Blog/public/calculus/1601111926046.png","2e4c0e45b8456fc9a8d77d5ee49a6ccc"],["D:/Blog/public/calculus/1601112251309.png","f2fe0292f3965300b7d7f887617400cf"],["D:/Blog/public/calculus/1601112870379.png","43976c9613afeecce869831a57b956dc"],["D:/Blog/public/calculus/1601139602455.png","28ad6a08198ed9ed4e10594478ecabed"],["D:/Blog/public/calculus/1601140289642.png","6f7bfe1e661eb59469a28c7f8f2d8076"],["D:/Blog/public/calculus/1601141863229.png","1ccb1bd940ecfe61e4681e0f833cde42"],["D:/Blog/public/calculus/1601142031603.png","5bb16408463e4c5ab7afc63965de1744"],["D:/Blog/public/calculus/1601142825530.png","fc3999775ab1b57c7f565a58ebf5cb69"],["D:/Blog/public/calculus/1601183156945.png","7941e3eadff0a3a11d2e8d95268ed38b"],["D:/Blog/public/calculus/index.html","703c4d2c102104601ffe5a0f4771cf2b"],["D:/Blog/public/categories/C/index.html","bdd986a4f9d7506e55337c1c20641779"],["D:/Blog/public/categories/SpringMVC/index.html","d639a5ab9716e0079a7bcf30b84fb82e"],["D:/Blog/public/categories/index.html","671b9f5d51eaeda922e48cdb4c1dce55"],["D:/Blog/public/categories/linux/index.html","b6c8f1f650a45baab5668b56440838ab"],["D:/Blog/public/categories/分布式/index.html","ef97610533f25fedb26b9069e39c78fb"],["D:/Blog/public/categories/分布式/page/2/index.html","ee9beaeb08b2ebb0f9962967093eb1bf"],["D:/Blog/public/categories/前端/index.html","020b7864711a0a26e6fc307128931f7f"],["D:/Blog/public/categories/设计模式/index.html","46673f22d422d318371d89785c67af47"],["D:/Blog/public/categories/设计模式/page/2/index.html","c30c6d5715b0bb5c48b62c3554e64b4f"],["D:/Blog/public/categories/高数/index.html","13ab0cdaf1fbae222e4966401de31d7c"],["D:/Blog/public/chain-of-responsibility-model/index.html","cf0881374de97ad2d0123afa0698056f"],["D:/Blog/public/chinese-and-english-switching/index.html","538cbd134061454ba161b94073472cc5"],["D:/Blog/public/combination-mode/index.html","6b428daaa1ff14644777b2f436227d77"],["D:/Blog/public/command-mode/index.html","604d80cdece907e4677991dd5880c34e"],["D:/Blog/public/common-commands-of-unix/index.html","f99bd3774833914e05978fe1d7b9590a"],["D:/Blog/public/computer-network/index.html","efc59ebbfb8edf7e5b255b6a9b8fad7e"],["D:/Blog/public/concurrency-principle/index.html","f27f2f44a6d4433186c01858a72f97b9"],["D:/Blog/public/continuous/index.html","4f0c00bc2d1a43f5a83adf0094a51b99"],["D:/Blog/public/contract/index.html","925afb4bfdb9d3cf7980d2ea45fa7e7a"],["D:/Blog/public/css/index.css","847c1f8489fc7acf3a7a030414fc7970"],["D:/Blog/public/css/var.css","1a7421f2930c3716efa1118e9a945025"],["D:/Blog/public/data-structures-and-algorithms/index.html","dcf984c9b3e9323087df413399c0442f"],["D:/Blog/public/decorator-mode/index.html","eee6faf33e672d6ddc515b898dc5b812"],["D:/Blog/public/definite-integral/1601053742391.png","83f9a6853f9f3699aa9a2b1b795cda27"],["D:/Blog/public/definite-integral/1601055940188.png","874768b432eece5eefe993e934d31cef"],["D:/Blog/public/definite-integral/1601056351353.png","d0ce3ce9ec27ef4fcf60e1b330105399"],["D:/Blog/public/definite-integral/1601056797153.png","40627bc113eee963f7c511e88509ced7"],["D:/Blog/public/definite-integral/1601089155704.png","6c7aca3f17bc8fc94b83187253f23874"],["D:/Blog/public/definite-integral/1601090462955.png","0213b8754e5d9b492deb66e5ee5dd42c"],["D:/Blog/public/definite-integral/1601090743620.png","4f845f3b9900618732e1733e719ff230"],["D:/Blog/public/definite-integral/1601100327822.png","2886d112ae1864515091ea13c58ac578"],["D:/Blog/public/definite-integral/1601100611938.png","b29a27c94cfa4024204a0f4e37c23966"],["D:/Blog/public/definite-integral/1601100749415.png","141427d22f25993008f6efae52b6d820"],["D:/Blog/public/definite-integral/1601101052364.png","fd80db8423ba24d0a575942b3258875c"],["D:/Blog/public/definite-integral/1601101655002.png","f40bf1bc378935ba320f4a8307edf6b3"],["D:/Blog/public/definite-integral/1601110706936.png","3b99d2c6feca49b964323b4884d48704"],["D:/Blog/public/definite-integral/1601110816738.png","506cebcbc23fe81a0b817623880d2473"],["D:/Blog/public/definite-integral/1601111539113.png","e1b61f5218a81b48dd5576187ee5cd3f"],["D:/Blog/public/definite-integral/1601111632965.png","977988c9ecaa93dbd93c046dfecd74e3"],["D:/Blog/public/definite-integral/1601111926046.png","2e4c0e45b8456fc9a8d77d5ee49a6ccc"],["D:/Blog/public/definite-integral/1601112251309.png","f2fe0292f3965300b7d7f887617400cf"],["D:/Blog/public/definite-integral/1601112870379.png","43976c9613afeecce869831a57b956dc"],["D:/Blog/public/definite-integral/1601139602455.png","28ad6a08198ed9ed4e10594478ecabed"],["D:/Blog/public/definite-integral/1601140289642.png","6f7bfe1e661eb59469a28c7f8f2d8076"],["D:/Blog/public/definite-integral/1601141863229.png","1ccb1bd940ecfe61e4681e0f833cde42"],["D:/Blog/public/definite-integral/1601142031603.png","5bb16408463e4c5ab7afc63965de1744"],["D:/Blog/public/definite-integral/1601142825530.png","fc3999775ab1b57c7f565a58ebf5cb69"],["D:/Blog/public/definite-integral/1601183156945.png","7941e3eadff0a3a11d2e8d95268ed38b"],["D:/Blog/public/definite-integral/1601184315091.png","6594d6c3d1d7068418749c99b7972f07"],["D:/Blog/public/definite-integral/1601185910499.png","e119c1eef60af01c95c0911653340e7e"],["D:/Blog/public/definite-integral/1601186045641.png","e6652525a70f9dbaa7f6c07c4c45ca41"],["D:/Blog/public/definite-integral/1601186556806.png","df5661e2bd8db1ae4f39210db4b20153"],["D:/Blog/public/definite-integral/1601187310285.png","9e0b074c5dc6a656183f5fe32db1dc5a"],["D:/Blog/public/definite-integral/1601187747971.png","401041e0fa011d076963fe835a12342e"],["D:/Blog/public/definite-integral/1601189272798.png","9ca995184463c963ba1ec3950da9a7ea"],["D:/Blog/public/definite-integral/1601190092256.png","b04b9923c51898ec5f58453b27c638a1"],["D:/Blog/public/definite-integral/1601190921495.png","4fca742046ef09d6266e8764f10c2db0"],["D:/Blog/public/definite-integral/1601191359757.png","d6856ed1843bfa2f44142c85f0b9bb13"],["D:/Blog/public/definite-integral/1601192056564.png","343a4e1b107583e58cd9866c45e6fe8f"],["D:/Blog/public/definite-integral/1601224434165.png","d071aea98002af60e8d19540d7766fe1"],["D:/Blog/public/definite-integral/1601225369727.png","fe7bd8aa93e1483bd3d274f8311b7f89"],["D:/Blog/public/definite-integral/1601225743031.png","ff7ecfdf9447b16a1088cc2ae79499ef"],["D:/Blog/public/definite-integral/1601226092741.png","da1b8246a63b0da7ba0457ae1455f1b1"],["D:/Blog/public/definite-integral/1601226647106.png","95bfffbeb7949c31e098f4e169b54c96"],["D:/Blog/public/definite-integral/1601226802688.png","8ce39abd59d0f949e490958ae396e722"],["D:/Blog/public/definite-integral/1601226875100.png","1d53e08f0c85884483100178613f31a7"],["D:/Blog/public/definite-integral/1601227123788.png","9118dd3f73a51165a27472756725f9c9"],["D:/Blog/public/definite-integral/index.html","508cbac7fe254742403ec9147e6805e7"],["D:/Blog/public/dependence-reversal-principle/index.html","c51184764cd085b0df4642d4dee2378f"],["D:/Blog/public/derivative/index.html","d15d955e1970ca6e41c2d33663dd2465"],["D:/Blog/public/design-patterns/index.html","058d9da1d39d25af4bb579265f24ea47"],["D:/Blog/public/differential/index.html","ed76f26aa7aa2912514cb7ccda42836f"],["D:/Blog/public/dimits-law/index.html","8aff189330bf5a75e53bfe93281d8144"],["D:/Blog/public/docker-virtualized-container/index.html","2963cf4d2a7d65cc554ea5320894cf4e"],["D:/Blog/public/dynamic-array/index.html","1a4a7c4948b131f03c265d42cec4d2b9"],["D:/Blog/public/encoding-algorithm/index.html","e9b466d662d1a9469d34afcc12eb0cf4"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","40062399a386021566a23b238a8f244b"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","bc5767a79453fe1c060fac7b94739504"],["D:/Blog/public/factory-design-pattern/index.html","b14351328c5cdedc4cf73fd6290b4c69"],["D:/Blog/public/flyweight-model/index.html","7be972cbdd85bfcf3ffff1db63344324"],["D:/Blog/public/function-graphing/index.html","5d18e24204f31f63f32ba4a31f6f24e4"],["D:/Blog/public/gateway-service-current-limit/index.html","ce2f99727954387afd4f596bb1b38853"],["D:/Blog/public/gc/index.html","6e3c7c574feb29eb5229df5ae072da4b"],["D:/Blog/public/generalized-integral/1601302982305.png","4081ac7ef93d7a4f726cea49a080dfc2"],["D:/Blog/public/generalized-integral/1601303240702.png","18950c0893436a66ba61bd4b057c0676"],["D:/Blog/public/generalized-integral/1601303277989.png","4b70cf89fb5c80d3c7add63efcad9a52"],["D:/Blog/public/generalized-integral/1601303420141.png","907a211cb0400bc94a5150506a126fe1"],["D:/Blog/public/generalized-integral/1601303693780.png","adf9065f0a0595908fdbe13619e118b4"],["D:/Blog/public/generalized-integral/1601303809560.png","cae752ef10f09ae77fb3ec92f4d8c7c9"],["D:/Blog/public/generalized-integral/1601303899003.png","1ca4aa8178638b778ec21d92150e4ce7"],["D:/Blog/public/generalized-integral/1601304242138.png","97f345c9262c148fb2ad741543d50acd"],["D:/Blog/public/generalized-integral/1601304752667.png","c98259eb4172db6dcb10f24ab51fd153"],["D:/Blog/public/generalized-integral/1601305473068.png","65230bfaa5905950e6340c827e434234"],["D:/Blog/public/generalized-integral/1601305670196.png","c389b7bd644f883de896b7aaa7a75375"],["D:/Blog/public/generalized-integral/1601306623507.png","10961a785fe13c31f0514fb0352324a5"],["D:/Blog/public/generalized-integral/1601307238632.png","b1f87c146b466e7b0a199c9091e5dde7"],["D:/Blog/public/generalized-integral/1601308675891.png","976ba45bc4e4e54920cdc37321f9ba8f"],["D:/Blog/public/generalized-integral/index.html","3060e34ab3eaa849aafb200ce444dfc0"],["D:/Blog/public/google8102e2f35ce9e391.html","8ef1df3ca669b488c3747bd06dc3ee2f"],["D:/Blog/public/gulp-compresses-static-resources/index.html","7b927abed13a1f6d4021073f469fb325"],["D:/Blog/public/hash-algorithm/index.html","d6afa34f4dcf9ebbed82305999a89b20"],["D:/Blog/public/heap-sort/index.html","c760963f97cc5c559248137fdf28a14f"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","34f3d7cbfbf792c17a1d5d13f167d71b"],["D:/Blog/public/http/index.html","1dcd0d1bc384c28e90a16c9741f814fa"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","6bb897605ab26e1c3f404c91cab47172"],["D:/Blog/public/index.html","8835d6b4765304d1df36c688be87b2c1"],["D:/Blog/public/infinitesimal-and-infinite/index.html","5f0b73fa3aa8aa492757fbe6039504a1"],["D:/Blog/public/interface-isolation-principle/index.html","997c385cf29cf31c50f3338f086aa09c"],["D:/Blog/public/intermediary-model/index.html","a37799d1f8342326d99468d73ac1edfb"],["D:/Blog/public/interpolation-search-algorithm/index.html","0579a0f449080790105efc5825469d86"],["D:/Blog/public/interpreter-mode/index.html","1549de1e1f60f6b5d1641b50cffb7e1c"],["D:/Blog/public/introduction-to-computer-network/index.html","53df811630bcb747b6313fcdaed3dc5b"],["D:/Blog/public/introduction-to-operating-system/index.html","591aab77f28bc5cfcf8542f5686918c6"],["D:/Blog/public/inversion-of-control/index.html","62b6862a0075d2e6bf830eb58d75d7bb"],["D:/Blog/public/io/index.html","f866a3b0d629624f36764efeb6891604"],["D:/Blog/public/iterator-mode/index.html","0133c4cb25be9272e8012d87d646108e"],["D:/Blog/public/j2ee/index.html","98c633ce4888536536ef5eb9c6b93171"],["D:/Blog/public/j2se/index.html","7b0b54e0a03cebe65ea4ea86c1f9102c"],["D:/Blog/public/jdbc/index.html","8bfea8169650612e0c52b235289be1bf"],["D:/Blog/public/jdk/index.html","fedb4879045d8997ef1f7d02fdca1571"],["D:/Blog/public/jmm-memory-model/index.html","d52aa54a39b298fc6788cec8ab4c31cd"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","11df05b2aba9b8adfd9564442a5bd412"],["D:/Blog/public/law-of-robida/index.html","78df214e812e24f131a928a1d4bfb822"],["D:/Blog/public/limit/index.html","66674e45e7778313dce0db4f62122d24"],["D:/Blog/public/linear-search-algorithm/index.html","b8f7aea86d9836100fd7b8e1b10ad2ce"],["D:/Blog/public/link/index.html","8485ad7371f57dda2ad0c3427af834ce"],["D:/Blog/public/linked-list/index.html","913d7d4dab91d6f6ae34f5ef06403927"],["D:/Blog/public/linux/index.html","02b7239cfc2c4da1083c980697fe4213"],["D:/Blog/public/liskov-substitution-principle/index.html","d952349dbcee42fad397664b18eccb83"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","95436d6fda08f5b408f1280e6a9b3860"],["D:/Blog/public/maintenance-1/index.html","4897e78ff99c706cb80020c8c52b66bd"],["D:/Blog/public/maintenance-2/index.html","0ce6ea26084a832fdbe482f69b898cf9"],["D:/Blog/public/maintenance-3/index.html","b452306b6c8fd45542581339b66b2b9e"],["D:/Blog/public/memo-mode/index.html","b3707c9309675bbc2ff9746ac47b9625"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","90d8aed08371838f67adbe46dd1495d8"],["D:/Blog/public/multithreading/index.html","285da3ce1a74d2e4b0fa8f73b3523ed5"],["D:/Blog/public/mvc/index.html","5364035bd575f5afd4b18bc1bc326476"],["D:/Blog/public/mybatis/index.html","0ee50b671be402920daaf94aa5d19e4f"],["D:/Blog/public/mysql/index.html","7c2b1ff6be9b8dd2ee48935fede0bbcf"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9572e8e0580479bdbed359c9d00568b7"],["D:/Blog/public/objectoriented/index.html","3a91fd0075eff9b833b146ee51086a65"],["D:/Blog/public/observer-mode/index.html","7f1a843bf3fdfbd0c85dfcae768b70f1"],["D:/Blog/public/operating-system/index.html","bc2f6b3a48472df545d981d4a715818d"],["D:/Blog/public/page/10/index.html","f57caa153a4af772f47534f093e6d805"],["D:/Blog/public/page/11/index.html","0791392a45747164d102ab2548cdfb05"],["D:/Blog/public/page/12/index.html","b808551cd101673de29f1c8dbaeb7b92"],["D:/Blog/public/page/13/index.html","bc1dd79fc20b876952258b8447df7203"],["D:/Blog/public/page/2/index.html","8f178239a91dc7d66486edc4c7a6753a"],["D:/Blog/public/page/3/index.html","6e1d860fbd13c5b80db0e475ad266ee4"],["D:/Blog/public/page/4/index.html","bbb7512dc626f5b235ff9d6a28a42067"],["D:/Blog/public/page/5/index.html","05fb1d0a299c3a72bdbe61b070f2cf29"],["D:/Blog/public/page/6/index.html","40d0b9f0322a71df2871113974295dbb"],["D:/Blog/public/page/7/index.html","be504b8496abffb8d31bc92adf0daf61"],["D:/Blog/public/page/8/index.html","2831a299b8b7a2cedf420c948566611a"],["D:/Blog/public/page/9/index.html","9ac255ba56fa04732df1468762a8e2a9"],["D:/Blog/public/palindrome/index.html","1b06588cae26101411cfc3a8a1bb218f"],["D:/Blog/public/pass-by-value/index.html","e12d16e8afef15f7e7cac5a48b58430a"],["D:/Blog/public/pictrue-bed/index.html","f423cee5865dfae5ea11d34fc79cbe98"],["D:/Blog/public/principle-of-opening-and-closing/index.html","a17716e800cb7a16c10d7c915b968038"],["D:/Blog/public/principles-of-computer-organization/index.html","50021ed2e7299fd172307b0022fe62b9"],["D:/Blog/public/prototype/index.html","5ac9f69ac588528955b42d4572cde194"],["D:/Blog/public/queue/index.html","8ba38a33d8f5f28d7aa231c8728e106f"],["D:/Blog/public/redis/index.html","073a049b2641f3b7bf298fea42b8472e"],["D:/Blog/public/reflection/index.html","cdaafd5fb3e856c1c0a1b1b9ae64f152"],["D:/Blog/public/resume/index.html","8f60fc4a2d449568da0a75cba77d17f3"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5037b006444a27fde8229a325500b9df"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","006ddb4b273b6bf853fb7b450b015c3d"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","d7788705a6fbac0301a2ae6bbb8ad825"],["D:/Blog/public/single-responsibility-principle/index.html","d724ed3343c09da20d90fd71c49a97b8"],["D:/Blog/public/singleton-mode/index.html","de135f3eb127816dbc8cb53716bdf392"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","62e552791bbc2446c1d8b5073b808a34"],["D:/Blog/public/sparsearray-sparse-array/index.html","f4edc0c2ecfd9862d7caf1303aa087a5"],["D:/Blog/public/spring-architecture/index.html","a5a029f79263a6d731cc45743fcc2650"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","611a6f33f1a24fccf98e3b948249fd75"],["D:/Blog/public/spring/index.html","f0d345ba0bb1be8b430cedb41d26dff2"],["D:/Blog/public/springcloud-alibaba/index.html","a75210a4af3a8fc0fefc09cae4530ff2"],["D:/Blog/public/springcloud-bus-message/index.html","91e0e02c4832426cccf624ec3ffbf08e"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","948fff354d30e3468963596c0495ed08"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","cfa70dd5051f1138d6caaf177e9b3e8d"],["D:/Blog/public/springcloud-stream-message-driver/index.html","66449cd5dc6eed749bf0fe080a7c1639"],["D:/Blog/public/springcloud/index.html","e90d8ac32daa791ce36cc0dc5fc02b87"],["D:/Blog/public/springmvc-environment-construction/index.html","da9ec11ab25c707bbf7bb8b6b6702d46"],["D:/Blog/public/sql-injection-attacks/index.html","94685336ff0ff584ca124da6e64e9ab0"],["D:/Blog/public/stack/index.html","f43c6e02be04ab44645195cb900b5b3c"],["D:/Blog/public/state-mode/index.html","ca09f1462656a4a02020bcc9f39fc339"],["D:/Blog/public/strategy-mode/index.html","fadf5874ec901b606dcabb92a9e677d9"],["D:/Blog/public/synthetic-reuse-principle/index.html","f5f9b0d8747e03f403347fd6e06ede4a"],["D:/Blog/public/tags/C/index.html","6a1b120b76dae9b9bb05f0c8dcb97179"],["D:/Blog/public/tags/Concurrency/index.html","2ab9f46ab3e1c007b91ec84ccd541b51"],["D:/Blog/public/tags/DesignPatterns/index.html","d532dab5a3a4de036229c4a2214e14be"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","2092a18c9ba33656179dc56f3ed6fe7d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","c059c4045efc658ed673471a654acf58"],["D:/Blog/public/tags/DistributedMicroservices/index.html","07c0b22744e221314680c45d2aceada7"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","9b5bd4f66f0ffc2e839b4110871bcc14"],["D:/Blog/public/tags/Interview/index.html","0d4a346bf5c298c503eb02916f1c9c95"],["D:/Blog/public/tags/Interview/page/2/index.html","64f970ca5f9b1e22f6849a495715542e"],["D:/Blog/public/tags/Linux/index.html","d1a9de8861e5815a68e1cbcd5a4f3cfa"],["D:/Blog/public/tags/Operating-Systems/index.html","66cc775f25011a91e23e846efb125950"],["D:/Blog/public/tags/about/index.html","3eed621c9a93a3fac44c8838f64acdc9"],["D:/Blog/public/tags/ad/index.html","1ab920a46fe77f224fe2b88aa82a35ea"],["D:/Blog/public/tags/dataAlgorithm/index.html","0a14a1255fc22f1f754b42b3f836cb90"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","7d1947e6e560725d8d029f215e7606dd"],["D:/Blog/public/tags/docker/index.html","4a7fddbe819b0df9ffe4e0cf47db5e5c"],["D:/Blog/public/tags/frame/index.html","7551f23023a4f94f406fece16d996502"],["D:/Blog/public/tags/front/index.html","7753186fbbdfc22d6e54ecc8f3a9a350"],["D:/Blog/public/tags/index.html","d36a6f24cf4ede679d7216fb436d3f8b"],["D:/Blog/public/tags/jvm/index.html","6d8aae0d9a832ad3de3d636b3c875921"],["D:/Blog/public/tags/maintain/index.html","a1035462281bc0b0d49ff9b9b757a353"],["D:/Blog/public/tags/math/index.html","a2be1bf0e396a983f21b0c87e125f006"],["D:/Blog/public/tags/math/page/2/index.html","59b26cb5f90bf529c872bc5657ff38ae"],["D:/Blog/public/tags/network/index.html","9f89b2af11455be59f72293c41cdec11"],["D:/Blog/public/tags/resume/index.html","e0ab54f256a1556c15bed2a5e1a2835d"],["D:/Blog/public/tags/safe/index.html","c5007cce009d8818f9622b58a073906a"],["D:/Blog/public/tags/sql/index.html","5ddd7bedc7de95acd673af3e8b76deb4"],["D:/Blog/public/tcpip/index.html","8fad84dbf8be4e136a4f5ff63550feda"],["D:/Blog/public/template-method/index.html","f6bac7b5ec3676be976bd792e75e65aa"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","74bad58109bb0bd9a3f6b444c77e7d28"],["D:/Blog/public/thread/index.html","8ee51c389eb5edf12edf7fd5051529e6"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","37e93168a318155824835c054f205447"],["D:/Blog/public/undefined/index.html","98a22026f21658f2e7c9d4c669d41847"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","c47b0d16babff2c789b1977c2e7cb94d"],["D:/Blog/public/visitor-mode/index.html","a9aa9f47fe5528b6bd740696b4f3d418"],["D:/Blog/public/xml/index.html","3e5e62d71247694614979c5f14ad3adc"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","7d234e01dc77719d430bfeb06e65b7c6"]];
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







