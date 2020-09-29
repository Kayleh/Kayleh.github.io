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

var precacheConfig = [["D:/Blog/public/404.html","d054e2da14b666c09e8bc3eaef896039"],["D:/Blog/public/7-sorting-algorithms/index.html","4598813d3da99ab1374ac36f3bf49967"],["D:/Blog/public/adapter-mode/index.html","8eccf55fc8a09465ac261dcd8f228241"],["D:/Blog/public/agency-model/index.html","d9a464324b6949d40019b8655acb6487"],["D:/Blog/public/appearance-mode/index.html","c8fc9951c834fa575a859d95f446bd6c"],["D:/Blog/public/archives/2019/01/index.html","90823f454d48e2c49893daa097ab3563"],["D:/Blog/public/archives/2019/07/index.html","de3725a49bde0eed640a57a829b04d10"],["D:/Blog/public/archives/2019/12/index.html","11b1f28c19eca197e1da255c82dbf816"],["D:/Blog/public/archives/2019/index.html","835ebca06cc830600302194740bce67c"],["D:/Blog/public/archives/2020/04/index.html","f70ea146a7f8262a2bbbf195babd907b"],["D:/Blog/public/archives/2020/05/index.html","2a19c1cfd3349ed9776cd26e5ad291b3"],["D:/Blog/public/archives/2020/05/page/2/index.html","b6566021929a90f6aab6904410f559c3"],["D:/Blog/public/archives/2020/06/index.html","d0b7c2273928e1a7e03239b877933ac7"],["D:/Blog/public/archives/2020/06/page/2/index.html","a97e31eba6168ac90beddc2fed850a82"],["D:/Blog/public/archives/2020/06/page/3/index.html","9be2e3ccc140593d57034c3972b82224"],["D:/Blog/public/archives/2020/06/page/4/index.html","8b7a5de5d4a7883ce9cc45865437be0e"],["D:/Blog/public/archives/2020/07/index.html","2fa656e0d6019137206982bd6af16440"],["D:/Blog/public/archives/2020/07/page/2/index.html","cea109acd294c8ce2aeaa8e64c6feebc"],["D:/Blog/public/archives/2020/07/page/3/index.html","8c2dce199ddef50c11bb290ffc89327d"],["D:/Blog/public/archives/2020/08/index.html","39b5c7aa42a59e6d1dbfd9384c041ddd"],["D:/Blog/public/archives/2020/08/page/2/index.html","2f4135be74efc18da59425a570470be5"],["D:/Blog/public/archives/2020/08/page/3/index.html","54d5b4e78ab42009c0f708940c364820"],["D:/Blog/public/archives/2020/09/index.html","f95f503906d99556b23f5b55b9f5a9fc"],["D:/Blog/public/archives/2020/09/page/2/index.html","6729d9bbb9a98f1e41b59f555c609d78"],["D:/Blog/public/archives/2020/index.html","84d89c8e4ed21e8b439a2ca05e6a7ea1"],["D:/Blog/public/archives/2020/page/10/index.html","4238d9430fe4128894612b8d42aa69f4"],["D:/Blog/public/archives/2020/page/11/index.html","4b543707be79f4049dfed3cd47ce79d9"],["D:/Blog/public/archives/2020/page/12/index.html","f13200f18173e42e2773529f1eb73131"],["D:/Blog/public/archives/2020/page/2/index.html","b9eb29fcac522acdacf6b6559060cd6c"],["D:/Blog/public/archives/2020/page/3/index.html","b90c54512dc3dfd258e609992b60d6d6"],["D:/Blog/public/archives/2020/page/4/index.html","768f8892872c5e4039eac1014594c4f5"],["D:/Blog/public/archives/2020/page/5/index.html","bcc812142fe66093a596de08d6b56dc3"],["D:/Blog/public/archives/2020/page/6/index.html","31a3f2d078638edd8e35fe9d11220f0c"],["D:/Blog/public/archives/2020/page/7/index.html","c6e6188d6732d685857ba0680c965ba5"],["D:/Blog/public/archives/2020/page/8/index.html","070cc1938290701ee3523cab63b10186"],["D:/Blog/public/archives/2020/page/9/index.html","c7d9d159faa4c6cb14cb19033bc8da52"],["D:/Blog/public/archives/index.html","238ac924d5534437d0baf6a65d30369b"],["D:/Blog/public/archives/page/10/index.html","a6f2465c095e9a4a0ec67037123dc1d0"],["D:/Blog/public/archives/page/11/index.html","13c0209c4c98f6ca705b7fb41ae05a89"],["D:/Blog/public/archives/page/12/index.html","784b0c685805c7238e6c16d06168c58f"],["D:/Blog/public/archives/page/13/index.html","180b3f320f924cdb8f6647384b921bd8"],["D:/Blog/public/archives/page/2/index.html","21bd48c3ec261a203ea0a326c357ded8"],["D:/Blog/public/archives/page/3/index.html","7dcb65f9deb950de52a9b465f0913d1c"],["D:/Blog/public/archives/page/4/index.html","d3acfdc83459ffe09d6a77219afb8221"],["D:/Blog/public/archives/page/5/index.html","55aeeeab6d519d41289ee9dc8cb65d8f"],["D:/Blog/public/archives/page/6/index.html","f45917cc6978232d9aa10a5a2fd9f1a7"],["D:/Blog/public/archives/page/7/index.html","2fb9fe020baf38357c1060623ccc202c"],["D:/Blog/public/archives/page/8/index.html","0876de52e076c68110c1fb8a5236a380"],["D:/Blog/public/archives/page/9/index.html","5cd2d7113fa40aa35a16c577c1e50b9d"],["D:/Blog/public/array/index.html","7d921b627cbf13e82aace06036e07eb8"],["D:/Blog/public/binary-search-algorithm/index.html","cc89628f9834064ec624ead55e462d9c"],["D:/Blog/public/binary-sort-tree/index.html","3baea6e77d3d471f76a1d9135753580c"],["D:/Blog/public/bridge-mode/index.html","852ea8b447dfa28301e1ff6d833ff11f"],["D:/Blog/public/builder/index.html","739a794ca07f7327a5d1bebd931928e6"],["D:/Blog/public/c-pointer/index.html","f217b3ba387c4359397641145dc548bb"],["D:/Blog/public/calculus/1601110706936.png","3b99d2c6feca49b964323b4884d48704"],["D:/Blog/public/calculus/1601110816738.png","506cebcbc23fe81a0b817623880d2473"],["D:/Blog/public/calculus/1601111539113.png","e1b61f5218a81b48dd5576187ee5cd3f"],["D:/Blog/public/calculus/1601111632965.png","977988c9ecaa93dbd93c046dfecd74e3"],["D:/Blog/public/calculus/1601111926046.png","2e4c0e45b8456fc9a8d77d5ee49a6ccc"],["D:/Blog/public/calculus/1601112251309.png","f2fe0292f3965300b7d7f887617400cf"],["D:/Blog/public/calculus/1601112870379.png","43976c9613afeecce869831a57b956dc"],["D:/Blog/public/calculus/1601139602455.png","28ad6a08198ed9ed4e10594478ecabed"],["D:/Blog/public/calculus/1601140289642.png","6f7bfe1e661eb59469a28c7f8f2d8076"],["D:/Blog/public/calculus/1601141863229.png","1ccb1bd940ecfe61e4681e0f833cde42"],["D:/Blog/public/calculus/1601142031603.png","5bb16408463e4c5ab7afc63965de1744"],["D:/Blog/public/calculus/1601142825530.png","fc3999775ab1b57c7f565a58ebf5cb69"],["D:/Blog/public/calculus/1601183156945.png","7941e3eadff0a3a11d2e8d95268ed38b"],["D:/Blog/public/calculus/index.html","1549a1a3d0fad6ed438d696f2dfaa124"],["D:/Blog/public/categories/C/index.html","d0c453f54d5393f93c804d1efbbf8489"],["D:/Blog/public/categories/SpringMVC/index.html","27ba67445d9ba550f45e8b037b09cf2d"],["D:/Blog/public/categories/index.html","43831e4b1e4446b4a23c110ee9f8bdd5"],["D:/Blog/public/categories/linux/index.html","c9d74fa6966faa575331c44a740dc429"],["D:/Blog/public/categories/分布式/index.html","a9a22f1546dae16ae67138351889382a"],["D:/Blog/public/categories/分布式/page/2/index.html","fe0dac2c41c14df9e532315af66d1f27"],["D:/Blog/public/categories/前端/index.html","cebdf1a6d0206bc5c7ea23883456b33b"],["D:/Blog/public/categories/设计模式/index.html","b8fb0be7b98d7d2fd361bf95343c2ae2"],["D:/Blog/public/categories/设计模式/page/2/index.html","94b7d070b1ef8b2707f55d5772b48eec"],["D:/Blog/public/categories/高数/index.html","39ef51ea88120409013f2350a1c2a66a"],["D:/Blog/public/chain-of-responsibility-model/index.html","e72aed4337d7693e5ed9de283ef015df"],["D:/Blog/public/chinese-and-english-switching/index.html","c072ebb98b50b0b7632a589ea6040d4f"],["D:/Blog/public/combination-mode/index.html","ba446ab609cac0c04a5fb0ca0eb251ff"],["D:/Blog/public/command-mode/index.html","e604ea8f837e9581e0bf4ddcb8f1c4eb"],["D:/Blog/public/common-commands-of-unix/index.html","e09ff6da9515eb40fcb6282f4249c149"],["D:/Blog/public/computer-network/index.html","d9bd55558072fe00f97a65c0631dea08"],["D:/Blog/public/concurrency-principle/index.html","97ee4fcd4d470b36ca2ea463905fecb6"],["D:/Blog/public/continuous/index.html","9eec28563adc30ba00d62ea9886b44a3"],["D:/Blog/public/contract/index.html","489e068fbac40a7e446723b038bd9bc1"],["D:/Blog/public/css/index.css","96d264a64e1f1e1dceec08210c268944"],["D:/Blog/public/css/var.css","674f0aa6eefeb961d943859d6b058323"],["D:/Blog/public/data-structures-and-algorithms/index.html","017e2a6977fc533e8cfa1677eec6788e"],["D:/Blog/public/decorator-mode/index.html","246118a4721a514d5586beadcd830160"],["D:/Blog/public/definite-integral/1601053742391.png","83f9a6853f9f3699aa9a2b1b795cda27"],["D:/Blog/public/definite-integral/1601055940188.png","874768b432eece5eefe993e934d31cef"],["D:/Blog/public/definite-integral/1601056351353.png","d0ce3ce9ec27ef4fcf60e1b330105399"],["D:/Blog/public/definite-integral/1601056797153.png","40627bc113eee963f7c511e88509ced7"],["D:/Blog/public/definite-integral/1601089155704.png","6c7aca3f17bc8fc94b83187253f23874"],["D:/Blog/public/definite-integral/1601090462955.png","0213b8754e5d9b492deb66e5ee5dd42c"],["D:/Blog/public/definite-integral/1601090743620.png","4f845f3b9900618732e1733e719ff230"],["D:/Blog/public/definite-integral/1601100327822.png","2886d112ae1864515091ea13c58ac578"],["D:/Blog/public/definite-integral/1601100611938.png","b29a27c94cfa4024204a0f4e37c23966"],["D:/Blog/public/definite-integral/1601100749415.png","141427d22f25993008f6efae52b6d820"],["D:/Blog/public/definite-integral/1601101052364.png","fd80db8423ba24d0a575942b3258875c"],["D:/Blog/public/definite-integral/1601101655002.png","f40bf1bc378935ba320f4a8307edf6b3"],["D:/Blog/public/definite-integral/1601110706936.png","3b99d2c6feca49b964323b4884d48704"],["D:/Blog/public/definite-integral/1601110816738.png","506cebcbc23fe81a0b817623880d2473"],["D:/Blog/public/definite-integral/1601111539113.png","e1b61f5218a81b48dd5576187ee5cd3f"],["D:/Blog/public/definite-integral/1601111632965.png","977988c9ecaa93dbd93c046dfecd74e3"],["D:/Blog/public/definite-integral/1601111926046.png","2e4c0e45b8456fc9a8d77d5ee49a6ccc"],["D:/Blog/public/definite-integral/1601112251309.png","f2fe0292f3965300b7d7f887617400cf"],["D:/Blog/public/definite-integral/1601112870379.png","43976c9613afeecce869831a57b956dc"],["D:/Blog/public/definite-integral/1601139602455.png","28ad6a08198ed9ed4e10594478ecabed"],["D:/Blog/public/definite-integral/1601140289642.png","6f7bfe1e661eb59469a28c7f8f2d8076"],["D:/Blog/public/definite-integral/1601141863229.png","1ccb1bd940ecfe61e4681e0f833cde42"],["D:/Blog/public/definite-integral/1601142031603.png","5bb16408463e4c5ab7afc63965de1744"],["D:/Blog/public/definite-integral/1601142825530.png","fc3999775ab1b57c7f565a58ebf5cb69"],["D:/Blog/public/definite-integral/1601183156945.png","7941e3eadff0a3a11d2e8d95268ed38b"],["D:/Blog/public/definite-integral/1601184315091.png","6594d6c3d1d7068418749c99b7972f07"],["D:/Blog/public/definite-integral/1601185910499.png","e119c1eef60af01c95c0911653340e7e"],["D:/Blog/public/definite-integral/1601186045641.png","e6652525a70f9dbaa7f6c07c4c45ca41"],["D:/Blog/public/definite-integral/1601186556806.png","df5661e2bd8db1ae4f39210db4b20153"],["D:/Blog/public/definite-integral/1601187310285.png","9e0b074c5dc6a656183f5fe32db1dc5a"],["D:/Blog/public/definite-integral/1601187747971.png","401041e0fa011d076963fe835a12342e"],["D:/Blog/public/definite-integral/1601189272798.png","9ca995184463c963ba1ec3950da9a7ea"],["D:/Blog/public/definite-integral/1601190092256.png","b04b9923c51898ec5f58453b27c638a1"],["D:/Blog/public/definite-integral/1601190921495.png","4fca742046ef09d6266e8764f10c2db0"],["D:/Blog/public/definite-integral/1601191359757.png","d6856ed1843bfa2f44142c85f0b9bb13"],["D:/Blog/public/definite-integral/1601192056564.png","343a4e1b107583e58cd9866c45e6fe8f"],["D:/Blog/public/definite-integral/1601224434165.png","d071aea98002af60e8d19540d7766fe1"],["D:/Blog/public/definite-integral/1601225369727.png","fe7bd8aa93e1483bd3d274f8311b7f89"],["D:/Blog/public/definite-integral/1601225743031.png","ff7ecfdf9447b16a1088cc2ae79499ef"],["D:/Blog/public/definite-integral/1601226092741.png","da1b8246a63b0da7ba0457ae1455f1b1"],["D:/Blog/public/definite-integral/1601226647106.png","95bfffbeb7949c31e098f4e169b54c96"],["D:/Blog/public/definite-integral/1601226802688.png","8ce39abd59d0f949e490958ae396e722"],["D:/Blog/public/definite-integral/1601226875100.png","1d53e08f0c85884483100178613f31a7"],["D:/Blog/public/definite-integral/1601227123788.png","9118dd3f73a51165a27472756725f9c9"],["D:/Blog/public/definite-integral/index.html","e97fe0cd5b2e9f2548c4368732d7fb05"],["D:/Blog/public/dependence-reversal-principle/index.html","917dae72d2f7ac733637a7ccdfa4b5b9"],["D:/Blog/public/derivative/index.html","9666c395f5a52bd866d142ab80e2f94f"],["D:/Blog/public/design-patterns/index.html","4feb975870b52ed417e00b1e1a5f1095"],["D:/Blog/public/differential/index.html","76cf043de248c33bfae9256f7cd479c8"],["D:/Blog/public/dimits-law/index.html","b12438abe249f0fa4bccde792c7b3ef3"],["D:/Blog/public/docker-virtualized-container/index.html","b687da247d758fb8faccdc43fb3094b2"],["D:/Blog/public/dynamic-array/index.html","1600d3245311e748787f1cb6273a7d68"],["D:/Blog/public/encoding-algorithm/index.html","75cb2afee9c911469398d6ab291a9f8f"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","216e03562b9761ecfb7ae40e0020d625"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","01e98594ebe20fe03d598782df2a4153"],["D:/Blog/public/factory-design-pattern/index.html","aa2db8285556ee3f1a716c77c8acfabd"],["D:/Blog/public/flyweight-model/index.html","2bf934c7bec05f262e2ac3a38bdfe2e3"],["D:/Blog/public/function-graphing/index.html","23865989ef3e29ae8d5f22c0da82a323"],["D:/Blog/public/gateway-service-current-limit/index.html","a0c640c1422f1943d266942e3bd9f4f7"],["D:/Blog/public/gc/index.html","5794556f2cb90a85040c3490174dfa1d"],["D:/Blog/public/generalized-integral/1601302982305.png","4081ac7ef93d7a4f726cea49a080dfc2"],["D:/Blog/public/generalized-integral/1601303240702.png","18950c0893436a66ba61bd4b057c0676"],["D:/Blog/public/generalized-integral/1601303277989.png","4b70cf89fb5c80d3c7add63efcad9a52"],["D:/Blog/public/generalized-integral/1601303420141.png","907a211cb0400bc94a5150506a126fe1"],["D:/Blog/public/generalized-integral/1601303693780.png","adf9065f0a0595908fdbe13619e118b4"],["D:/Blog/public/generalized-integral/1601303809560.png","cae752ef10f09ae77fb3ec92f4d8c7c9"],["D:/Blog/public/generalized-integral/1601303899003.png","1ca4aa8178638b778ec21d92150e4ce7"],["D:/Blog/public/generalized-integral/1601304242138.png","97f345c9262c148fb2ad741543d50acd"],["D:/Blog/public/generalized-integral/1601304752667.png","c98259eb4172db6dcb10f24ab51fd153"],["D:/Blog/public/generalized-integral/1601305473068.png","65230bfaa5905950e6340c827e434234"],["D:/Blog/public/generalized-integral/1601305670196.png","c389b7bd644f883de896b7aaa7a75375"],["D:/Blog/public/generalized-integral/1601306623507.png","10961a785fe13c31f0514fb0352324a5"],["D:/Blog/public/generalized-integral/1601307238632.png","b1f87c146b466e7b0a199c9091e5dde7"],["D:/Blog/public/generalized-integral/1601308675891.png","976ba45bc4e4e54920cdc37321f9ba8f"],["D:/Blog/public/generalized-integral/index.html","fbc2b93315a24f3860e7bbadec8cd533"],["D:/Blog/public/google8102e2f35ce9e391.html","5daea72471935c6698a2e31a599e4abc"],["D:/Blog/public/gulp-compresses-static-resources/index.html","ce71869282c67277ccc7aab85717a6d3"],["D:/Blog/public/hash-algorithm/index.html","9e412f7f3ea278cfdcd9ea4e7678d2f3"],["D:/Blog/public/heap-sort/index.html","b6dc17b7372a7bd9d16abf3ea1e5ba40"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","67d51105e051ce1b0e9bfa83dc215d69"],["D:/Blog/public/http/index.html","fe797133e1e1b0b5102c1a5099ecc042"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","e0a1e7740025c6902587d9b805e1bc56"],["D:/Blog/public/index.html","08f9fef37ac17443a50b55dd9a857d80"],["D:/Blog/public/infinitesimal-and-infinite/index.html","23ce960a9e54b4b5ac01c9acd273642b"],["D:/Blog/public/interface-isolation-principle/index.html","fb3bd064667606e1237f5e71261853b6"],["D:/Blog/public/intermediary-model/index.html","cfab4a5c435f401cc538f2f11305cbc2"],["D:/Blog/public/interpolation-search-algorithm/index.html","2fbedac0f44578f9f53d0f63e9680adc"],["D:/Blog/public/interpreter-mode/index.html","bc1092445e281cd9937232622ca314fc"],["D:/Blog/public/introduction-to-computer-network/index.html","651b168f6be211ff46186e1bb260ce33"],["D:/Blog/public/introduction-to-operating-system/index.html","1b72ab9ddc6308990652ca4d14d9c4b8"],["D:/Blog/public/inversion-of-control/index.html","62f98d628ed08a9111dc773f0d68a8ae"],["D:/Blog/public/io/index.html","e1cd5d6b47c26e3c16dbae6783e6a5cd"],["D:/Blog/public/iterator-mode/index.html","adf2f7ca3b9dc77ceb8cb2129545ddea"],["D:/Blog/public/j2ee/index.html","cd212ce099d736359330c05611b45e80"],["D:/Blog/public/j2se/index.html","d6c9becf388bc76964ca85cac931e016"],["D:/Blog/public/jdbc/index.html","e5605884e293f306029fdf54f274f649"],["D:/Blog/public/jdk/index.html","362bb3a8f0613b0124c7dfa9ae4a11b2"],["D:/Blog/public/jmm-memory-model/index.html","0c93bfd6fd1054f09fb9bb9d3d7673c3"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","571ee8e5da7889713cb41048d0a9d25f"],["D:/Blog/public/law-of-robida/index.html","c5eed8a53742062a99446974775550d0"],["D:/Blog/public/limit/index.html","6ffa883ad4e2d257e3867b79676db594"],["D:/Blog/public/linear-search-algorithm/index.html","4f7add041350c5b748de8ce09f4a67aa"],["D:/Blog/public/link/index.html","bd7e8effb2d1e58b97a16b354a9de1a3"],["D:/Blog/public/linked-list/index.html","e7e8e7ce4d32166cdf0688a453f05f7e"],["D:/Blog/public/linux/index.html","ac2110fcecd462143068fc4d8d050e25"],["D:/Blog/public/liskov-substitution-principle/index.html","f9d4b8a4e76651b8d29d846d368736fd"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","b34994c46453ce0c661fb907126550da"],["D:/Blog/public/maintenance-1/index.html","564d5353fdc7a7a957b2bb87be5efa49"],["D:/Blog/public/maintenance-2/index.html","b38f9a28f91069820fb6f43d3e079cc3"],["D:/Blog/public/maintenance-3/index.html","7df2380d9c2ff86b0e33db5e81698836"],["D:/Blog/public/memo-mode/index.html","840197e020f55633ab0ac6a5baa213dc"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","3682ac49f1a156e5c87df6dfaa58fb19"],["D:/Blog/public/multi-function/1601354294435.png","bdc7932d3d866059a2b01661513a328b"],["D:/Blog/public/multi-function/1601354442692.png","215f581f0bb77ee5228a51fecee39c5b"],["D:/Blog/public/multi-function/1601354799490.png","f15b5a502b85ef9a5ec0b62c359654f9"],["D:/Blog/public/multi-function/1601354842773.png","71cdf1dfd2ecf5824d113d12618924b7"],["D:/Blog/public/multi-function/1601354949365.png","a308776e76789118d48f826e33b62c46"],["D:/Blog/public/multi-function/1601355067816.png","a91a722c986aa5a23ad86ba540b85c3c"],["D:/Blog/public/multi-function/1601355316536.png","ee3474a9094a20e572e5f0900721c140"],["D:/Blog/public/multi-function/1601355447432.png","e64743ff346eb9fe7239ef7853bed2cd"],["D:/Blog/public/multi-function/1601398417032.png","9968ed84967d05e5e1569c00fc4a7b89"],["D:/Blog/public/multi-function/1601399459395.png","e558e2d0da378b0a5c5bfe4e75645c4c"],["D:/Blog/public/multi-function/1601399650482.png","4ba8c6631703877782d133af07ec9568"],["D:/Blog/public/multi-function/1601399792399.png","599526b170e98ca4076386a0c546782b"],["D:/Blog/public/multi-function/1601400065760.png","26ab858f4865f35349a74de41acffb13"],["D:/Blog/public/multi-function/1601400252209.png","71f21ef82429400523ecfc53d091b974"],["D:/Blog/public/multi-function/1601400533096.png","768d2153a7f4d3bfaf7525aafea6b1e2"],["D:/Blog/public/multi-function/1601400850590.png","a8062a0e634c094adf5d990fdffab375"],["D:/Blog/public/multi-function/index.html","0c8604ad43603cdf7a2aff2d914ecd01"],["D:/Blog/public/multithreading/index.html","463b0c30db6eebbc55eb1636cadd36ae"],["D:/Blog/public/mvc/index.html","b4428b219ff942453c9fc709c39ec252"],["D:/Blog/public/mybatis/index.html","9c3f4027a85a52865f48b41fda49ae41"],["D:/Blog/public/mysql/index.html","4d57240dcc7b57e451f0aa6099fccfd5"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","83393920f7f181a9458d7602cacd77eb"],["D:/Blog/public/objectoriented/index.html","d707d17dfb75229614910589a62cb7f6"],["D:/Blog/public/observer-mode/index.html","535716e0ec76da90b51847dc1227f4f7"],["D:/Blog/public/operating-system/index.html","293d4ecde25896383ec91f3aa77e9234"],["D:/Blog/public/page/10/index.html","a0ae545e17e5d65a83c6e627d1e2ae9a"],["D:/Blog/public/page/11/index.html","e20a2ce4251ec0b7864d5e43235cb324"],["D:/Blog/public/page/12/index.html","0e8035c31095a7b36739da958ca74214"],["D:/Blog/public/page/13/index.html","aeb79d672a8e21b7b1592d50d96f15d0"],["D:/Blog/public/page/2/index.html","2b5ccc6af959355eb91e00b328f9b7cc"],["D:/Blog/public/page/3/index.html","a61b29f60f12f0d0e8aa4966ec65f04a"],["D:/Blog/public/page/4/index.html","5fdffeadfc018795329d9600e974cf50"],["D:/Blog/public/page/5/index.html","13a089dad1a0146b07dc02ce727f0d4b"],["D:/Blog/public/page/6/index.html","5df6294c9b76ab07438d990cc7810c87"],["D:/Blog/public/page/7/index.html","9df7c99e090796d7b6030b6114a32977"],["D:/Blog/public/page/8/index.html","5b1c58d5ace5ee8c7b897da5c53d21b2"],["D:/Blog/public/page/9/index.html","bf77a5b5f030d66566d26290d31f25f7"],["D:/Blog/public/palindrome/index.html","405f319bd8c0db4eda0b6dd534e3827e"],["D:/Blog/public/pass-by-value/index.html","4b09998ebf0cc41134fa3d294a5bfda8"],["D:/Blog/public/pictrue-bed/index.html","7c9adb1b803e6ff8fd3d46e2121a5b24"],["D:/Blog/public/principle-of-opening-and-closing/index.html","73c60cf397265d164a177bcbcf29084b"],["D:/Blog/public/principles-of-computer-organization/index.html","aa057fa04b960c743903b9840d389f0b"],["D:/Blog/public/prototype/index.html","766f99098c5b37539922b6c9bfddc563"],["D:/Blog/public/queue/index.html","0a533edc9d557827dee6558d984d3174"],["D:/Blog/public/redis/index.html","05be15513593dad4c3913e623b426b74"],["D:/Blog/public/reflection/index.html","025ef8cfa17b4d579c0ddffd5c1f33e4"],["D:/Blog/public/resume/index.html","4c9c82be9d9e6158cb7ea98851589769"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","52baf20761dbbc409a915d84dc067a67"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","b8fef400aa65b02aeee2638a4bf88bae"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","97bbb3f9123c405a7adcdc0d9f05f2da"],["D:/Blog/public/single-responsibility-principle/index.html","2986ece47cca9b0c3d9a7138d9c786c0"],["D:/Blog/public/singleton-mode/index.html","935be446266f955db82aa401d76c0b50"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","90182bce097e42c8280fcf939fcca399"],["D:/Blog/public/sparsearray-sparse-array/index.html","42c337d17be879dc359dd8729549dddf"],["D:/Blog/public/spring-architecture/index.html","67f8e6c0416c97b43521a6d00a0222c0"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","9eff713fda86b16f20288f0c562f6dfb"],["D:/Blog/public/spring/index.html","c9c864171416e907bf0ddba9b3a4e8e4"],["D:/Blog/public/springcloud-alibaba/index.html","0f7fb74b5145282fd63eb8bcb87e5042"],["D:/Blog/public/springcloud-bus-message/index.html","5fa9451f1ceee58ea1da7716fad8db85"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c6bf0165f183ba9069b6f5e7fae81e2c"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","8469605db0840ff3c5bef58d8516ea22"],["D:/Blog/public/springcloud-stream-message-driver/index.html","fb97bf7928525f23ce36ece9f8119e58"],["D:/Blog/public/springcloud/index.html","4489da7c0217fc715161b5029de6323c"],["D:/Blog/public/springmvc-environment-construction/index.html","5e9be502da2dbc8309ce17cfdc4bc06b"],["D:/Blog/public/sql-injection-attacks/index.html","c8cec7addfcfb0bf5fc16d3b07f07f28"],["D:/Blog/public/stack/index.html","1414e0bed30507c0634544be0d043aec"],["D:/Blog/public/state-mode/index.html","6e5a04430a1c1f228efeb1317e819d3c"],["D:/Blog/public/strategy-mode/index.html","509b3f02c75cb82a19350d8ca2c7f745"],["D:/Blog/public/synthetic-reuse-principle/index.html","adc83c1353036e41abefc93a79db4b91"],["D:/Blog/public/tags/C/index.html","7f8d04df489ded24f18a78a41ffb9ad1"],["D:/Blog/public/tags/Concurrency/index.html","21a732e3f2569be91de6fd6e6f8340c1"],["D:/Blog/public/tags/DesignPatterns/index.html","749d4be6bb1d64afe36a8b15aef3293e"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","e075eab074f0385d1d1f9dea9f41114a"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5b6c4f08f05155951722f1b215dfbf69"],["D:/Blog/public/tags/DistributedMicroservices/index.html","f1a2bb85d72caf8e51e19842e4a73767"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","c0d10b8fe9764d19a877e1f43bce718a"],["D:/Blog/public/tags/Interview/index.html","f43d6b05f6b2785d35fa01d1e403cdda"],["D:/Blog/public/tags/Interview/page/2/index.html","1c7bfc9d3e1690cc17b3edd2947f2af3"],["D:/Blog/public/tags/Linux/index.html","81dd568f8b86a737bbb7df1361daae04"],["D:/Blog/public/tags/Operating-Systems/index.html","285165b0baca978a01d0f902596f9828"],["D:/Blog/public/tags/about/index.html","94e8fdb7b1d0cc7bf0414175fed6f532"],["D:/Blog/public/tags/ad/index.html","2c9a16313c5912951c69c937f2955089"],["D:/Blog/public/tags/dataAlgorithm/index.html","f11ffe3c9fd998d856b9518bc0512ff6"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","4e31a7c3322123b1df143b51620052e5"],["D:/Blog/public/tags/docker/index.html","018fef7a9d249c296318ec573556d911"],["D:/Blog/public/tags/frame/index.html","502a4d596b9cd54f5dd3b8d2d189714c"],["D:/Blog/public/tags/front/index.html","797182238aa74be811449c62dd13a7bf"],["D:/Blog/public/tags/index.html","282af07c61df267254e777198db91c86"],["D:/Blog/public/tags/jvm/index.html","8f91fed962b472899787d82800659019"],["D:/Blog/public/tags/maintain/index.html","1c716afc3f311a50ac56165e5704c36a"],["D:/Blog/public/tags/math/index.html","f505abb682389eb44ca6bb493e0c293d"],["D:/Blog/public/tags/math/page/2/index.html","9c8c5c63441af2f5395a76795d0e107c"],["D:/Blog/public/tags/network/index.html","b7468f43faf00f3c2b0c49960a059197"],["D:/Blog/public/tags/resume/index.html","b83bd1e7b3922b0939e3119e884e82f1"],["D:/Blog/public/tags/safe/index.html","35d2756e6d09e1b306e4c98e63e53a5f"],["D:/Blog/public/tags/sql/index.html","63d018e1f95533ae819b2455b0e8ca9d"],["D:/Blog/public/tcpip/index.html","c7252dd5823bf92c373f42ec75849caa"],["D:/Blog/public/template-method/index.html","27abaa37f8f9bb82c8e1dafb5e15c50f"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","493356530df51a8cee5d8d4b0b97a3a0"],["D:/Blog/public/thread/index.html","d2ca6fe47018efa18b4e2520bfba9783"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","68d7b5e248996b23c0ee648e3f0236e6"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","afe63839c498335074680407991e6407"],["D:/Blog/public/visitor-mode/index.html","24816568180806f3044c1207b7fe17b9"],["D:/Blog/public/xml/index.html","914d64e939c771d11a1d54c808581842"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","6a3568b2a584c79754ee94bd0f566a61"]];
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







