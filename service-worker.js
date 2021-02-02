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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","aca7abdbba141443c44b27fbefd18125"],["D:/Blog/public/AIO-blocking-model/index.html","337fe9c28e582e4ac5a0d0a9382657c1"],["D:/Blog/public/BIO-blocking-model/index.html","1a964d97d1392bcf905c5299897a256c"],["D:/Blog/public/C-algorithm/index.html","61a0b52e3f99e2631add7429259d2e75"],["D:/Blog/public/C-programming/index.html","01ad4199c7dffac6527c52dd49dcca6f"],["D:/Blog/public/Good-use-of-pointers/index.html","c5ac6f22532f183f37fcb9fd43d7b0d6"],["D:/Blog/public/IO-model/index.html","7662e84ce47c6128119f57c506851e2c"],["D:/Blog/public/IO/index.html","82db351275f53e226e78818773b94c6c"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","17e87814a21fd9fa546046ae4c127dbe"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","53e4dda649999192f93ab814df38347f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","fbf4bd35643b2cc8fb53a928906e1244"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","58fb3dec3985db12d14a7ab0445bdeb2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","0682a6b80282b46f7aa98282c3fcdf70"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","bd1a9b0eb298cc6eb3dc828d3b7566fb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","86f6bb110b21f3a1715162f6c0059552"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","3c40160b3a7b97eef7e9d4151c70654c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","e16d0ae1607ec4f0da617edaccee0953"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","1bf8bcc26916f84c315d1c5f547de926"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","9cb19668a890427bf3cb4e132ecfa62f"],["D:/Blog/public/Java-network-programming/index.html","39356cdceb78fb6d93691735a5171bbd"],["D:/Blog/public/NIO-blocking-model/index.html","2d4bb6a40f73feb7c66aa8dd8bc549a9"],["D:/Blog/public/Native-method/index.html","04cfd6c5ef8c4cab6dcae8db468c0ec9"],["D:/Blog/public/Sandbox-security-mechanism/index.html","c589f560011503dcb42cd8db343ad0b4"],["D:/Blog/public/SpringBoot-startup-process/index.html","745649d1fdfb6d9800b8803bcfcd9295"],["D:/Blog/public/Transaction-isolation-level/index.html","2ecca1b425e5b3ab5991e3ec76ce6c6b"],["D:/Blog/public/about/index.html","cfaf7ffaa0f6285f2fffdf7ba2e4767c"],["D:/Blog/public/adapter-mode/index.html","083dc2f68794e916402a17ad5e68cfdf"],["D:/Blog/public/agency-model/index.html","357a844cf282cf2efa4a64401e9bafae"],["D:/Blog/public/appearance-mode/index.html","b709d9b536cb7c3f76b6a61c481a3c5e"],["D:/Blog/public/archives/2019/01/index.html","e5bbc441fe4e005d000dbd1a5ad251a7"],["D:/Blog/public/archives/2019/07/index.html","5da3444f7da4ad410d0adc279f574bc9"],["D:/Blog/public/archives/2019/12/index.html","dfa978bbbee71103e525f9992aeddd0e"],["D:/Blog/public/archives/2019/index.html","d34e8b71e9b220db9091d09ef263f657"],["D:/Blog/public/archives/2020/04/index.html","d2883cfd005d08c5a61100ffc5600c33"],["D:/Blog/public/archives/2020/05/index.html","d7c110a77ae511661f63a3d81713f24c"],["D:/Blog/public/archives/2020/05/page/2/index.html","e0df3d4d3af8b38092bf5ed095971e63"],["D:/Blog/public/archives/2020/06/index.html","96d16ed62a3db20889da08837fbe5e96"],["D:/Blog/public/archives/2020/06/page/2/index.html","a506d584f34936effdb0834df8536d5f"],["D:/Blog/public/archives/2020/06/page/3/index.html","9aa0ec910fb229b6e21a3050fdc801e6"],["D:/Blog/public/archives/2020/06/page/4/index.html","ca09481233b0529ff054e2f1b8a988d0"],["D:/Blog/public/archives/2020/07/index.html","c8b44d05626a88973f2932a83413ccbe"],["D:/Blog/public/archives/2020/07/page/2/index.html","0483ba0868d8eec9d93de0658638c6d4"],["D:/Blog/public/archives/2020/07/page/3/index.html","f83f76cfb0a990bdb4cb85c608096b93"],["D:/Blog/public/archives/2020/08/index.html","2afde9ee2bff01927d37982296020923"],["D:/Blog/public/archives/2020/08/page/2/index.html","6ef24c837a52d4c52429055d90b591e4"],["D:/Blog/public/archives/2020/08/page/3/index.html","c6c35a4396c72353b69253b6ec5b29b5"],["D:/Blog/public/archives/2020/09/index.html","ec9356c4cdfbd4918747f826ed744221"],["D:/Blog/public/archives/2020/09/page/2/index.html","e7d35f7cb454674b7e24d8f6451089dc"],["D:/Blog/public/archives/2020/10/index.html","855f4d82c583bfc806d8ecf0ce5d1b93"],["D:/Blog/public/archives/2020/10/page/2/index.html","a2e3611e7e14c1500b3e6419c23d3b9b"],["D:/Blog/public/archives/2020/11/index.html","a4c4c6f1143704026b2554be11fce3e6"],["D:/Blog/public/archives/2020/11/page/2/index.html","d08e07f82c6d5aeb4fb51f8ed2a3b9e4"],["D:/Blog/public/archives/2020/12/index.html","f3b40709503873270a8158f865b91dc4"],["D:/Blog/public/archives/2020/12/page/2/index.html","2212ed795b488cc9fd3d65bb9bd1aa40"],["D:/Blog/public/archives/2020/index.html","8dd214998d6a2f06e609c76c6cbce393"],["D:/Blog/public/archives/2020/page/10/index.html","5763d82288b409e7efd84bffffb3eba0"],["D:/Blog/public/archives/2020/page/11/index.html","acc69e526bf5d888f0720229133095a4"],["D:/Blog/public/archives/2020/page/12/index.html","e118ce07913e868d7b75c3049a820b61"],["D:/Blog/public/archives/2020/page/13/index.html","41f7ed9d649cebc0f2d7cdf025faff84"],["D:/Blog/public/archives/2020/page/14/index.html","0543ea09ebb9bc32a0d9c6b2113a2f57"],["D:/Blog/public/archives/2020/page/15/index.html","cf7c9b67c0cf3e812bafc91864149861"],["D:/Blog/public/archives/2020/page/16/index.html","e010d4f0eed5202db397df8619e59d01"],["D:/Blog/public/archives/2020/page/17/index.html","b653ba5a17e4fb9237990adbe5a94578"],["D:/Blog/public/archives/2020/page/2/index.html","bb45424e517d7f80ed0a3239662155fa"],["D:/Blog/public/archives/2020/page/3/index.html","29988c923abdb5d509ac9a49f1ba1609"],["D:/Blog/public/archives/2020/page/4/index.html","ec720f2b5ce347db52e1ef8ce1af12f9"],["D:/Blog/public/archives/2020/page/5/index.html","ab232150cf54e23c2711ba27c747e3a6"],["D:/Blog/public/archives/2020/page/6/index.html","7db1ff2423d3fc6c6159cc6ffdeb5ff6"],["D:/Blog/public/archives/2020/page/7/index.html","93ffb884f2df3b7a72e33c53c1116460"],["D:/Blog/public/archives/2020/page/8/index.html","cbcae953c8ac7a4422c274ba64799c21"],["D:/Blog/public/archives/2020/page/9/index.html","b01f0652582f8e1db880909a76f2af65"],["D:/Blog/public/archives/2021/01/index.html","30ce1d0026ca2b2a6696291fd41c1d7e"],["D:/Blog/public/archives/2021/02/index.html","1e1aafcf29de6f5276d5d97d3fea55f4"],["D:/Blog/public/archives/2021/index.html","99181186e365bcbba78750315807a3c7"],["D:/Blog/public/archives/index.html","7177acd897d381f67679fccfd4c35757"],["D:/Blog/public/archives/page/10/index.html","a81d7ad3ef4b0d3fc55237803c024d86"],["D:/Blog/public/archives/page/11/index.html","840729f599b6fb2824b4b4e7b640e882"],["D:/Blog/public/archives/page/12/index.html","cd1ee59b721228fcd11dc23444ec9796"],["D:/Blog/public/archives/page/13/index.html","0f919f6993672366ca4ef0be3a315df3"],["D:/Blog/public/archives/page/14/index.html","8e0ebfc365a7250bd347ea82f9ae0db1"],["D:/Blog/public/archives/page/15/index.html","5a62dedc63db8891ac91cbc60f350b6f"],["D:/Blog/public/archives/page/16/index.html","6c57ddbf9e26ec9d245a0a70326bfcfb"],["D:/Blog/public/archives/page/17/index.html","fe9606cb4eb4fd3fb17d8991a8947947"],["D:/Blog/public/archives/page/2/index.html","8edc10a7d407947de9fdd9be0304fb0e"],["D:/Blog/public/archives/page/3/index.html","f9655bd6f04c0abde26605e93ddc0139"],["D:/Blog/public/archives/page/4/index.html","f64456ed71c64152f2352bcece31ecb2"],["D:/Blog/public/archives/page/5/index.html","197080a2020a2294b8292ac0a3dd62d5"],["D:/Blog/public/archives/page/6/index.html","f94c798ca8ade922a24a294aa4c3542d"],["D:/Blog/public/archives/page/7/index.html","b4beade70b00f7dda2e24acc17f1cfdc"],["D:/Blog/public/archives/page/8/index.html","2ab40d9bf35d16524d4b76fa5cf85892"],["D:/Blog/public/archives/page/9/index.html","2201644e97ceb5e6c8bf209a07b9dbf2"],["D:/Blog/public/array/index.html","df9115fb9555ef40b64a503b850393d2"],["D:/Blog/public/automated-test-katalon/index.html","c5062901cefc6548577167a26add6788"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/index.html","c1385d8734b715766af4433f31dfce20"],["D:/Blog/public/binary-search-algorithm/index.html","8c90c81bb5cfcc3be61fd6a8a8fd794e"],["D:/Blog/public/binary-sort-tree/index.html","f764b7fbcf3f4365ff51c8fb873de5cd"],["D:/Blog/public/bionioaio/index.html","7c8064f57df7c26d2e5858178f27533f"],["D:/Blog/public/bridge-mode/index.html","87d6949ae133a3f4e931f11660a22621"],["D:/Blog/public/builder/index.html","dee58f466913921a8d4896bbe6f8f351"],["D:/Blog/public/c-pointer/index.html","07ef73f7093a65e73cc9f95bdd138e19"],["D:/Blog/public/categories/C/index.html","22d9a3d014aa533faef26f56c165dcb2"],["D:/Blog/public/categories/SpringMVC/index.html","de93f0ff9a1d3eae575aeeb01abb077c"],["D:/Blog/public/categories/index.html","d9cf48c1e738514464ceae49c99f4a66"],["D:/Blog/public/categories/linux/index.html","9205bf029fb8406e8addd2646484f489"],["D:/Blog/public/categories/分布式/index.html","950637e030f7c7bc07de50eb11f536ce"],["D:/Blog/public/categories/分布式/page/2/index.html","9044adde01b831396b7f35396249b077"],["D:/Blog/public/categories/前端/index.html","76c598ac03defd384b7fe57580ce2fa4"],["D:/Blog/public/categories/设计模式/index.html","35d5ca97db4dc7b82f9c708f2b1a08ad"],["D:/Blog/public/categories/设计模式/page/2/index.html","0326631fb208c8244ff5284ddca1d89b"],["D:/Blog/public/categories/高数/index.html","a2d21702eff59cf693a9c6ddb74d6e58"],["D:/Blog/public/chain-of-responsibility-model/index.html","09f6542233363db928e25880a98edbdc"],["D:/Blog/public/chinese-and-english-switching/index.html","788188ce9df348c6a792c20cad5dc0b5"],["D:/Blog/public/combination-mode/index.html","5a0512564b832526fe49be688c74d1e8"],["D:/Blog/public/command-mode/index.html","7f0abe54cb5b80f4d2c20abcb90c7532"],["D:/Blog/public/common-commands-of-unix/index.html","b2ab58a4824bfcc82eed966515317427"],["D:/Blog/public/computer-network/index.html","f9628faf603f62c820946d64ca29adf2"],["D:/Blog/public/concurrency-principle/index.html","02bb9689604dcdc19b5187eacbc51347"],["D:/Blog/public/continuous/index.html","f16f29971064b629880681051146fd13"],["D:/Blog/public/contract/index.html","eaeac3a0c5fc8e8cfb9edbbc40a4f60a"],["D:/Blog/public/css/octo.css","4b2ee2f5285ffa3f3212253aa2ebcaca"],["D:/Blog/public/cycle-structure-programming/index.html","ad691870f7729707b39800cc5e242d37"],["D:/Blog/public/data-structures-and-algorithms/index.html","aa56f090d24ba555143a32d1504c3ed6"],["D:/Blog/public/deb/index.html","4b3c33b2b5496b0158f53413a07f7367"],["D:/Blog/public/decorator-mode/index.html","2fa1bc90cf11a6971eeb623e2175acf8"],["D:/Blog/public/definite-integral/index.html","155e0e7c4822f34f05bafa15e4a598a3"],["D:/Blog/public/dependence-reversal-principle/index.html","8ae1fda7836bc6364d735af81ab16066"],["D:/Blog/public/derivative/index.html","7028680d935c6e021dbdddfcb07ca7bc"],["D:/Blog/public/design-patterns/index.html","59a946227a9d7452a45cab4c3a1171b3"],["D:/Blog/public/differential-equation/index.html","b9b49f17e4c7e8d2cb029b1a92dcca28"],["D:/Blog/public/differential/index.html","2f00bb9f8540663cbc92067e9cc7ad9d"],["D:/Blog/public/dimits-law/index.html","51f21d8cdcf9d307bae864b5013b0fa1"],["D:/Blog/public/docker-virtualized-container/index.html","70eae1748d903d7a07dacf75d911dfb8"],["D:/Blog/public/double-integral/index.html","51e565de01f56da830ac02688791c6f4"],["D:/Blog/public/dynamic-array/index.html","00e05a77a988e1ccdbf4e5c7dfa451b7"],["D:/Blog/public/dynamic-programming/index.html","862169b83927912c66da692ee2a6c3ad"],["D:/Blog/public/encoding-algorithm/index.html","3fbfeaf54767516f430df1b4dc7e5a22"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","af353fa6e712de30e58716780423334b"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","1be7baa539499f7691ddfc24bdaada5d"],["D:/Blog/public/factory-design-pattern/index.html","93aa77c71157fc6cf2b0c54cc3cfde3e"],["D:/Blog/public/file-input-and-output/index.html","b071c2714398a8d98d3f9d2a7c1a24ad"],["D:/Blog/public/flyweight-model/index.html","6e04f00907fb9b254fc07da6f52e54eb"],["D:/Blog/public/friends/index.html","73e6aa21ffc2dcc7459fb75f868ec276"],["D:/Blog/public/function-graphing/index.html","1199fa6f1cabdefedb2f2401c356c7cd"],["D:/Blog/public/gateway-service-current-limit/index.html","c71869d09215386f63a73ba8b8efae05"],["D:/Blog/public/gc/index.html","aa59932f4c685d9512ad16f55b75f14b"],["D:/Blog/public/generalized-integral/index.html","96cf9acd562383ec3f1443afa9f4c629"],["D:/Blog/public/google8102e2f35ce9e391.html","bbcd853f6b00a2cf0990f9f4e892781c"],["D:/Blog/public/gulp-compresses-static-resources/index.html","10750f74d4a86fefb5d3e904d5073b08"],["D:/Blog/public/hash-algorithm/index.html","8875afdb27b4e52c1688e5d7bb1d85a5"],["D:/Blog/public/heap-sort/index.html","4ef6a5c0037e3111e8aa33f7d4a72a1a"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","8b66156fe165f233171a84b5d93368e0"],["D:/Blog/public/http/index.html","929057f43c5b8f0b4a6ba40f14472158"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","43b67fdc9c17c334d3d719755d12cf64"],["D:/Blog/public/index.html","613ff2602d01e242c114479f93d0f9e0"],["D:/Blog/public/infinitesimal-and-infinite/index.html","d7092a2a107bb60e72e4ad1a643738b1"],["D:/Blog/public/interface-isolation-principle/index.html","8e5c6fa45a4f6b37bd8607cf190e6e27"],["D:/Blog/public/intermediary-model/index.html","3f17a22687763e7613606c809840b3ee"],["D:/Blog/public/interpolation-search-algorithm/index.html","1c68d5ce9b14ea97eaf67b48890bbb25"],["D:/Blog/public/interpreter-mode/index.html","b2bd7fc83af5a3567a46462c14e1aa89"],["D:/Blog/public/introduction-to-computer-network/index.html","575847e089ece1c6a2f49e03bb3274f4"],["D:/Blog/public/introduction-to-operating-system/index.html","c20c98a8224ac2523d038b85fa6d66a7"],["D:/Blog/public/inversion-of-control/index.html","e760a95a7d0b347514c4ef3c7a8d7212"],["D:/Blog/public/io-Interview/index.html","6b834e1e28862a14021d373312e258be"],["D:/Blog/public/iterator-mode/index.html","d9a3dfae0fc740b64744d82cc09a98cf"],["D:/Blog/public/j2ee/index.html","4f0385316763f5f477d718cb68e878c1"],["D:/Blog/public/j2se/index.html","60bdfea1f0486c8dcd8dfcbc71856efe"],["D:/Blog/public/jdbc/index.html","b66756d67f76d2c8c2a30a4564f04cef"],["D:/Blog/public/jdk/index.html","93d1637abcbdd1d91a03bca29794e200"],["D:/Blog/public/jmm-memory-model/index.html","dbab9e1954eed0b360a4d09d4c258bb3"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","4c76bfd1397e71d9d2d530607656bf4d"],["D:/Blog/public/jvm/index.html","086a83b1926765f43baa2cfd56b1678d"],["D:/Blog/public/law-of-robida/index.html","cd16dc0e3fffadf976b4af09de862d2b"],["D:/Blog/public/limit/index.html","f8f5a1528e57b12d1fceab76fc1df4d8"],["D:/Blog/public/linear-search-algorithm/index.html","86618b85367b0fcbe2e5faded80c2243"],["D:/Blog/public/link/index.html","4111b2f7bdb57c68872867cbf968b1c7"],["D:/Blog/public/linked-list/index.html","14674f0d752e9d9e03525d5da4dc6984"],["D:/Blog/public/linux/index.html","b0eb788f48377507cc8e342b668f6bbd"],["D:/Blog/public/liskov-substitution-principle/index.html","1e60d3ad985d826a14be6a00d22490a4"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","23a97b8073ee90f08d8d7892edaa6f47"],["D:/Blog/public/maintenance-1/index.html","36287945e3f613f807bd7551fad5292b"],["D:/Blog/public/maintenance-2/index.html","c18dbcdb83e25c9b9ad3666d7bdfdfec"],["D:/Blog/public/maintenance-3/index.html","4994dd61c1f4ee978192c7dbd3374cf9"],["D:/Blog/public/memo-mode/index.html","3c5c14ed351e618347f105da7cbb670f"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","50621e3d8da4dae8978d33cb9fa1d4a7"],["D:/Blog/public/multi-function/index.html","924971c95e04713b30e1cf78ad7711e8"],["D:/Blog/public/multithreading/index.html","902d8020802b072ffca0ccdb4328b109"],["D:/Blog/public/mvc/index.html","111882996048d4c7b224b45e417685bc"],["D:/Blog/public/mybatis/index.html","cd11b33d2f2409a370d4893bbd93d754"],["D:/Blog/public/mysql/index.html","810d56c4a66cda54ddeee971fa6e6e14"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","870c2db3fc66da3f8c7456f06662e616"],["D:/Blog/public/objectoriented/index.html","b485dd7ad9aa2d2937a5986d0adfadd8"],["D:/Blog/public/observer-mode/index.html","4215936a6e88b4aad7e5ba51c5b0e844"],["D:/Blog/public/off-heap/index.html","b1cea1981007526e46b0437b47668706"],["D:/Blog/public/operating-system/index.html","eccd1106b44abb371651f7d7a430332e"],["D:/Blog/public/page/10/index.html","845e9cf8311e5496b75f4739b2ccbc76"],["D:/Blog/public/page/11/index.html","cb8e8f4cc82cb18c908f7adaf46940da"],["D:/Blog/public/page/12/index.html","fcc8456948ae97583eca6cd039375a13"],["D:/Blog/public/page/13/index.html","5772e56ad8ea6dacc42041d84b9177c1"],["D:/Blog/public/page/14/index.html","601eb0730182ab4fa8ba37168619660a"],["D:/Blog/public/page/15/index.html","b4743e933ec1616a264d9c1ce8b71213"],["D:/Blog/public/page/16/index.html","5a3acc11e82cc61647921c64ea68b763"],["D:/Blog/public/page/17/index.html","cd7647b3b75174e0fdc0b073a7d3ca08"],["D:/Blog/public/page/2/index.html","f66db01d1a82ebf2ca1af969e4f8a54a"],["D:/Blog/public/page/3/index.html","d4d3bf853df14d3920e62529f4f5ce8c"],["D:/Blog/public/page/4/index.html","18a3d7d881a940178776c7cb8aabd25c"],["D:/Blog/public/page/5/index.html","c07b2469349e0ba56ec4d46eb443313e"],["D:/Blog/public/page/6/index.html","4105c70d6f837c5c514941f20e382f24"],["D:/Blog/public/page/7/index.html","98eb3c8b8969445eae3d84911ddfab49"],["D:/Blog/public/page/8/index.html","dd05aae954a972cd5b6ec8ddbe1c2a24"],["D:/Blog/public/page/9/index.html","43a56277500a51069c94c294475b069f"],["D:/Blog/public/palindrome/index.html","d38491e42b2849034603789365fa01d9"],["D:/Blog/public/partial-derivative/index.html","1b5546a97cfbaced000f72d44fe6c29d"],["D:/Blog/public/pass-by-value/index.html","8ba0306ce6567be1e4bfbc6201fd450a"],["D:/Blog/public/pictrue-bed/index.html","ca4e578549c1ebd5e21e6297780023a1"],["D:/Blog/public/principle-of-opening-and-closing/index.html","852ce6a27e146dbe3525f1e302e60c3f"],["D:/Blog/public/principles-of-computer-organization/index.html","f3820695aa3baa5b4937db7fc9053652"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","b5334b1bcc0bd3e2c9d24c03307e0883"],["D:/Blog/public/prototype/index.html","f052603053eca03a958859b543c0b0f7"],["D:/Blog/public/queue/index.html","198d0d8f830627902d1f2c7b416639c8"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f1d227ea54a5b7195741c2609920c2b8"],["D:/Blog/public/redis/index.html","9967b0b64ed76bd32d11c1c71316c0f8"],["D:/Blog/public/reflection/index.html","ba8b897c188511a205824c2f895ab821"],["D:/Blog/public/resume/index.html","851deaf969fbfa27d43f1d8c9330c868"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","50ff28f5867d511668c666bb82f50104"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","ee6f92a02e321bb6eb09c7a407bd30ad"],["D:/Blog/public/select-structure-programming/index.html","e602d9402d02a897c287ef30f1949a1a"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","90620abeea92b40b17b9b908f977a9dd"],["D:/Blog/public/sequential-programming/index.html","05494453876027567905a754f049a189"],["D:/Blog/public/series/index.html","1a4675bfa81fa5a34fb05fb7b250f818"],["D:/Blog/public/single-point-login/index.html","26c46cd4048412988cc11d3c66f299da"],["D:/Blog/public/single-responsibility-principle/index.html","f2cac5de7d5dc00e26a378321a02b9d9"],["D:/Blog/public/singleton-mode/index.html","63ae71ca76c15106b972c04c50c630cc"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6f0a4cf9180cc0e6b62de0cc0425a3a3"],["D:/Blog/public/sparsearray/index.html","d011a3f13797c3b55f1b118e5ccba6f8"],["D:/Blog/public/spring-architecture/index.html","f241980933321b90e5fb44129955e26a"],["D:/Blog/public/spring-relate/index.html","f53b4257d67fe215c683fac0360eb2fc"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","914f0c73712060baff7d46416e2f7cb5"],["D:/Blog/public/spring/index.html","fc1a71ccdcab568b3ad5c28a3c4233fa"],["D:/Blog/public/springcloud-alibaba/index.html","09e5fdfa232666670b776544152a5c90"],["D:/Blog/public/springcloud-bus-message/index.html","0afbe0d0a89545b345feb38a487ada67"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","fef7db8a90fe55f97e594026b763e624"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","34eddb6db66485b113e51e15dc09b97b"],["D:/Blog/public/springcloud-stream-message-driver/index.html","997fe7528b44367edcfce60f73a823ae"],["D:/Blog/public/springcloud/index.html","6e4b7e457e1d7c6f22f0f8321cb01f1f"],["D:/Blog/public/springmvc-environment-construction/index.html","0674b98779fc42364317fc8b53642e50"],["D:/Blog/public/springmvc-work-stream/index.html","23b6c8edc8f161147188805f8623a3d5"],["D:/Blog/public/sql-injection-attacks/index.html","232bb748437509033635d97b5464677a"],["D:/Blog/public/stack/index.html","9d1658fc9852389ee5abd3891fcf7b40"],["D:/Blog/public/state-mode/index.html","88cba02de32e5e0663670d3031b7c1fe"],["D:/Blog/public/strategy-mode/index.html","6eb84f3cc513306567de02b043b2c768"],["D:/Blog/public/synthetic-reuse-principle/index.html","743a2345e3b5e46abc010f47c4061362"],["D:/Blog/public/tags/C/index.html","a0299bdd48c059c6265e4b6138948aaf"],["D:/Blog/public/tags/C/page/2/index.html","6bede8b3be64db94c2f5323ad058eb63"],["D:/Blog/public/tags/Concurrency/index.html","9f35d96f28547405ad0b80248ad2a796"],["D:/Blog/public/tags/DesignPatterns/index.html","7efec66f2082169f9d9f82e504742a77"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aead0ab22c7bf134e550739f2c33211d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2e22551126fc9d09c0583b5ecf7ffee0"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9df5afd448338fec72e55598595f8011"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","518f30fdfd965bd63f73fc1d02dcfc8d"],["D:/Blog/public/tags/Interview/index.html","a624b4339819f538d0e851de81348876"],["D:/Blog/public/tags/Interview/page/2/index.html","598232e27ce555dff6f109040ead4e73"],["D:/Blog/public/tags/JVM/index.html","92d6c8fb9ed239630cf999238313ecf0"],["D:/Blog/public/tags/Operating-Systems/index.html","d3e7cf52da4911b30cc81006ded210f6"],["D:/Blog/public/tags/about/index.html","85377009f8d0dcb84b3cf3c051c6ffc1"],["D:/Blog/public/tags/ad/index.html","0096c9cccfeb78653b5da551d91fe23c"],["D:/Blog/public/tags/algorithm/index.html","cd24fc99ceb3028c091fb9558d2e4d11"],["D:/Blog/public/tags/algorithm/page/2/index.html","c542ed6871d93902f53f305e2e038e41"],["D:/Blog/public/tags/docker/index.html","b641c2e5b66c5ff18cccb847af7fbf2e"],["D:/Blog/public/tags/frame/index.html","051bd7058ab8ce6030c081e1a0f21a2f"],["D:/Blog/public/tags/front/index.html","69e2c9c4f01794640226ffd64dafacef"],["D:/Blog/public/tags/index.html","a55480b8a4a444a3442ff1085c1b5836"],["D:/Blog/public/tags/index1.html","3f211f6273ac6f6d0dbb999ca056c676"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","64809de15e711e36062fb8aedac4340f"],["D:/Blog/public/tags/linux/index.html","cccf95439399ccec099a90ef83e64619"],["D:/Blog/public/tags/maintain/index.html","0f5911ef9f1cbb6d3fe2b533dc87928f"],["D:/Blog/public/tags/math/index.html","8bea8c2b2f5e0e2871e1b2050dc4aa6d"],["D:/Blog/public/tags/math/page/2/index.html","b9c865c6cc3bb46c13dada9a6b1986fe"],["D:/Blog/public/tags/network/index.html","c95a030768844fdd8116c67e4c363bec"],["D:/Blog/public/tags/project/index.html","2002a3e99360c01555b11a00335d8fb6"],["D:/Blog/public/tags/resume/index.html","42708916a636bdc9b197e9dc1e250b1f"],["D:/Blog/public/tags/safe/index.html","5f6923b1e86572d607e8d5193904f405"],["D:/Blog/public/tags/sql/index.html","d243751bdbcff7f504c7bde8cb6a2f45"],["D:/Blog/public/tags/test/index.html","444f6e4d0168451e060a705f36604475"],["D:/Blog/public/tcpip/index.html","8896a1b4cec26691c195821a72466774"],["D:/Blog/public/template-method/index.html","c07752bf92f395ec339b6c831ce4e4f4"],["D:/Blog/public/test-case/index.html","bad395b509856d5682b3c84b0fbcb652"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f50a9d4046435bcbb9a9ff8fcb84646e"],["D:/Blog/public/thread/index.html","c03bef281dff266feb6a50794640e954"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","74bede6583889b3a69367acebbf213b3"],["D:/Blog/public/ubuntu-set-ip/index.html","811bfb292969bfe9923b672b6af52a9f"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","46e3edd8ccdf7691df9093238aebbd79"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","87bf2b57958f2dd224426b2a26a08628"],["D:/Blog/public/users-create-data-types-themselves/index.html","251437df70d15dee9f5559485c078ea6"],["D:/Blog/public/visitor-mode/index.html","df3d9eba0a54ca00dbb407b87a17dadd"],["D:/Blog/public/xml/index.html","6a848d767bd8e633b8888218f846bb6a"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","e044a4077003e900c0c926c975dc6633"]];
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







