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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","ad3cca9a61e058709701c11b6ca8fb6b"],["D:/Blog/public/AIO-blocking-model/index.html","e81f7fc929da7c4ae46acf292c78c2c8"],["D:/Blog/public/BIO-blocking-model/index.html","b73ec497789ba099eb73c736182a1206"],["D:/Blog/public/C-algorithm/index.html","75152970fd732cd57c16cf123de3b103"],["D:/Blog/public/C-programming/index.html","a815fc2b461a7c870f0b8f29b39e7d51"],["D:/Blog/public/Good-use-of-pointers/index.html","d65c09e36e42d81de036ee91db23d5d6"],["D:/Blog/public/IO-model/index.html","ba4e0018dbf692bed102c21fbac98d49"],["D:/Blog/public/IO/index.html","a7c627592a2d157c05b57ec8ccb74c4e"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","1f840e23d64bb96b45e4f553639dbab7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5dd551211cccdcece91b78f8fa304e5f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","f16c62e7ef0adaf14c31657c8f0a0415"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","eefdecb505f7890fac7498d8e8dad658"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","dabf6e795557b93a8a1cfb71a1876598"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","5d2154402e755c8738a83a84e857d1a2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","c036cb07b295d6d606dac2bb2bc82427"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","c6b37d964a58520a842e7753c09f1354"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","f59352136f240e64c614b56cb9c730ee"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","fb6ae5bb44199b629ad1ed72f99e0f61"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","fd52a668f5075d92e38609328c426e7f"],["D:/Blog/public/Java-network-programming/index.html","8f959280b24a635e572103f33a78758a"],["D:/Blog/public/NIO-blocking-model/index.html","25872d09182a89469e2a34a200a23ca8"],["D:/Blog/public/Native-method/index.html","4d5003d7ebadb2c87c8427e674991a40"],["D:/Blog/public/Sandbox-security-mechanism/index.html","d4d01568c330f578eb09c35863b30dec"],["D:/Blog/public/SpringBoot-startup-process/640.jpg","92157f8b7a12cf7b692600d96f615542"],["D:/Blog/public/SpringBoot-startup-process/index.html","00081337892f265d6f4a76cd0c0e2464"],["D:/Blog/public/about/index.html","bb7d591087392c8d319aaa6e2937b5d8"],["D:/Blog/public/adapter-mode/index.html","81bc007b162c117343a664e81b0d81a9"],["D:/Blog/public/agency-model/index.html","c4615a14ab88784ffaa7e2c90915feb2"],["D:/Blog/public/appearance-mode/index.html","ca75458d125bb560c8c62f1877d4ffe1"],["D:/Blog/public/archives/2019/01/index.html","0ba55d028fcb47a5a1232c25d938739c"],["D:/Blog/public/archives/2019/07/index.html","079d8955d0f175adaa2c5de201d9ee28"],["D:/Blog/public/archives/2019/12/index.html","7c7d431efb667610265ce5f14d5cdf8d"],["D:/Blog/public/archives/2019/index.html","a8359ca86186182a7cbf8b6d2d0c6c15"],["D:/Blog/public/archives/2020/04/index.html","794904ba19a02286939b699fabc74b04"],["D:/Blog/public/archives/2020/05/index.html","fd543113d348ac114e63467a89f606eb"],["D:/Blog/public/archives/2020/05/page/2/index.html","e35a6749d129f27b58a6b4a9baefb4cf"],["D:/Blog/public/archives/2020/06/index.html","36e3bee8d013a05556ccce71675b753a"],["D:/Blog/public/archives/2020/06/page/2/index.html","6f35e554cc9b94b088d03a3e144e4dff"],["D:/Blog/public/archives/2020/06/page/3/index.html","2497d3b6c1a1a7e2589f2220fac73e44"],["D:/Blog/public/archives/2020/06/page/4/index.html","44df383786afc4c161af320f4ba0d85f"],["D:/Blog/public/archives/2020/07/index.html","d34a733264b80f2cbe296f562224024f"],["D:/Blog/public/archives/2020/07/page/2/index.html","b1384f50e619238c3675be1aaabdcf00"],["D:/Blog/public/archives/2020/07/page/3/index.html","a0fdc977dc80cc139cd9e1e80b6bf545"],["D:/Blog/public/archives/2020/08/index.html","1c7b091fe4fbf93c9b6149df21d2a70f"],["D:/Blog/public/archives/2020/08/page/2/index.html","d42ae1a50581f4fcf54f03e6fa956b2b"],["D:/Blog/public/archives/2020/08/page/3/index.html","cb87731164936766816dc13c4c8f2917"],["D:/Blog/public/archives/2020/09/index.html","e42a5fac73b50c64634027f2307431ba"],["D:/Blog/public/archives/2020/09/page/2/index.html","5f112eeb0768aab645a7d03c544478df"],["D:/Blog/public/archives/2020/10/index.html","5de676f1233052fb6c438d4a18b1afa7"],["D:/Blog/public/archives/2020/10/page/2/index.html","fd094def9cf5298c33a1b16f3e3bbdc3"],["D:/Blog/public/archives/2020/11/index.html","fc8fda58c1c53bffb84c235d65eb45ed"],["D:/Blog/public/archives/2020/12/index.html","726983007eb0f941b435be9a54a30cd8"],["D:/Blog/public/archives/2020/12/page/2/index.html","ef5e4810262d211358041575275f52fa"],["D:/Blog/public/archives/2020/12/page/3/index.html","f22adcfcbdadc603559d6aa55231a3ea"],["D:/Blog/public/archives/2020/index.html","692c4216c07d1234c07414f85b3d869f"],["D:/Blog/public/archives/2020/page/10/index.html","cdbf0ec1e3067638af82e39b8185ac6b"],["D:/Blog/public/archives/2020/page/11/index.html","512fb2f09353b938595e87031d5dc44b"],["D:/Blog/public/archives/2020/page/12/index.html","0347fce4178380a6be172ad463eb0c51"],["D:/Blog/public/archives/2020/page/13/index.html","e46843368d06efc4b4af3aab5d22f37b"],["D:/Blog/public/archives/2020/page/14/index.html","e13e12cd14c77a191ba031fc12553785"],["D:/Blog/public/archives/2020/page/15/index.html","03c7286e836ae91da2bca907bfc28664"],["D:/Blog/public/archives/2020/page/16/index.html","a9889136aa95c40d5ef99d3723f13c01"],["D:/Blog/public/archives/2020/page/17/index.html","8fd834029d1585a22864d141b4e53e4d"],["D:/Blog/public/archives/2020/page/2/index.html","0debfb7e8c4670049505239fa08ab699"],["D:/Blog/public/archives/2020/page/3/index.html","e51bbdc4c1ef7b2358b93b4bc402aef8"],["D:/Blog/public/archives/2020/page/4/index.html","9df6a3170c920200835f424b32ce617d"],["D:/Blog/public/archives/2020/page/5/index.html","935c00bf81280161c17927de85b55f89"],["D:/Blog/public/archives/2020/page/6/index.html","29d8a9a7a3a1841120c0c6f95e8fe2e0"],["D:/Blog/public/archives/2020/page/7/index.html","f25691934274514490c5d12be6f90fc6"],["D:/Blog/public/archives/2020/page/8/index.html","ade9da8c8ae5d157380041b9ccfb1f7a"],["D:/Blog/public/archives/2020/page/9/index.html","6c37d37efb53633bac937737d5a766df"],["D:/Blog/public/archives/2021/01/index.html","c6f16db449f9d52a1fdac0204d741aad"],["D:/Blog/public/archives/2021/index.html","dfdcd12dd7d63a658cf99ef7ff8ee2be"],["D:/Blog/public/archives/index.html","6c2136ba443f246da802cd1848758fe6"],["D:/Blog/public/archives/page/10/index.html","002cb2a1e357808e412105f7834ed307"],["D:/Blog/public/archives/page/11/index.html","dd433fce9b7a4bbac2dfd33f1216bd11"],["D:/Blog/public/archives/page/12/index.html","e80f7c55290919a603165bbc0770180b"],["D:/Blog/public/archives/page/13/index.html","582300fe64bebf0442b8aa34592a8353"],["D:/Blog/public/archives/page/14/index.html","472e745432cf07a5a6bd2f8dd7c002b4"],["D:/Blog/public/archives/page/15/index.html","f192311f7c4997779a6c59ff1a8f0764"],["D:/Blog/public/archives/page/16/index.html","9d8b458b4b4eac4cc818726944b24249"],["D:/Blog/public/archives/page/17/index.html","e1ae99759ef296121108bf74d0f0a5d9"],["D:/Blog/public/archives/page/2/index.html","636c67f3f74e6f9e7c12df199a41b215"],["D:/Blog/public/archives/page/3/index.html","8fc02cf131da2e0c75ed6e748940766e"],["D:/Blog/public/archives/page/4/index.html","5aa59bcd66fb1bfdd73f4e5d94a3cfae"],["D:/Blog/public/archives/page/5/index.html","b08853bed62afe17b3cddd1e9bc95925"],["D:/Blog/public/archives/page/6/index.html","cbfc49c6771de23f37df8c57109cd47b"],["D:/Blog/public/archives/page/7/index.html","a8ac79b243f19645cdb76647d7f765ec"],["D:/Blog/public/archives/page/8/index.html","a4fb46dd08e2c86182ffeeeed7432a3a"],["D:/Blog/public/archives/page/9/index.html","9bce3ddb149d067bfd745a23b7e22e5c"],["D:/Blog/public/array/index.html","3a2efabb61aa0e0bdc65d0e6d16c2dbc"],["D:/Blog/public/binary-search-algorithm/index.html","551484afc69b1d7587d64966e3b42cfa"],["D:/Blog/public/binary-sort-tree/index.html","86798170e7b986261c6a3fc7a935bab8"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","4f91495b7fddd4499775a937dc4b1aa6"],["D:/Blog/public/bridge-mode/index.html","0fc186fe1aadf6bc2c8184aac0f3b8cb"],["D:/Blog/public/builder/index.html","047f0cfaf584de63a38b4fd73baa98df"],["D:/Blog/public/c-pointer/index.html","6bae22370881aaafc3176c62802e475e"],["D:/Blog/public/categories/C/index.html","b6fe4311a33fa7baaf37d2f2adef820f"],["D:/Blog/public/categories/SpringMVC/index.html","8e10473be43cc3dd69e200ab53cfd16b"],["D:/Blog/public/categories/index.html","2e6895554af832e57bb0eee4f0d056e7"],["D:/Blog/public/categories/linux/index.html","04aef34873e53045dd96680405e13459"],["D:/Blog/public/categories/分布式/index.html","4f719a9be468b9828eb3b29114fc9760"],["D:/Blog/public/categories/分布式/page/2/index.html","776ea4ef6250ae568617fcb141ddf961"],["D:/Blog/public/categories/前端/index.html","8af78c62cddbf0044ace5ac0a6db420c"],["D:/Blog/public/categories/设计模式/index.html","03cb933450dc8ab18f6805b7f2e935bb"],["D:/Blog/public/categories/设计模式/page/2/index.html","4181a2ae88ae105c1d7f2a51c1d9c988"],["D:/Blog/public/categories/高数/index.html","e1903de44e39091a341ad2226f35950c"],["D:/Blog/public/chain-of-responsibility-model/index.html","9ab3669972c1826b56f6f16d49167f71"],["D:/Blog/public/chinese-and-english-switching/index.html","10ccb7072d9a43a81295025ef62b0f2f"],["D:/Blog/public/combination-mode/index.html","4329099ea0a870ee5ffd5e5d78c36ad7"],["D:/Blog/public/command-mode/index.html","12f2ed70e77b8897e6b3dbe099d93bdd"],["D:/Blog/public/common-commands-of-unix/index.html","c7167a3e3cb8cc5dde85e893b622d572"],["D:/Blog/public/computer-network/index.html","2cad5309c9ae4f996090e9899b883491"],["D:/Blog/public/concurrency-principle/index.html","4083f5365a4edfad0dc050c53e6b967c"],["D:/Blog/public/continuous/index.html","6dabf9a8397d8e4e590cd48840ff3c31"],["D:/Blog/public/contract/index.html","9bcf077c1d0684249dc2e071f0ecb414"],["D:/Blog/public/css/octo.css","ebb2d7bfdc338d6d634b6aebbacdb343"],["D:/Blog/public/cycle-structure-programming/index.html","7223879ab6865335dc560f456fc248f9"],["D:/Blog/public/data-structures-and-algorithms/index.html","c1f7cc0b81f52d0aaae22a4e25c1dc2a"],["D:/Blog/public/deb/index.html","efec599d65d56d7766daacc011835530"],["D:/Blog/public/decorator-mode/index.html","c2ecf8cfc0511e9c92aa89b6bef85d22"],["D:/Blog/public/definite-integral/index.html","69b902a7705485886ca78a79dbc33452"],["D:/Blog/public/dependence-reversal-principle/index.html","531aa398e929c88576180bb3c2de9d3a"],["D:/Blog/public/derivative/index.html","38c30a13a2a86c4ee7b9890a3e6eb384"],["D:/Blog/public/design-patterns/index.html","3c74ded92f4bee494588415a30075dc3"],["D:/Blog/public/differential-equation/index.html","ab787212dfefa631e83c9b46bf68fb5c"],["D:/Blog/public/differential/index.html","b3af2a946bf998dcc51e0e20b6ad1428"],["D:/Blog/public/dimits-law/index.html","48a1414596a5c860479340d8dad5d61e"],["D:/Blog/public/docker-virtualized-container/index.html","bd847e12b7f34bba7fc9f7784441203a"],["D:/Blog/public/double-integral/index.html","00181aa96158f316a0cae959b4665a6e"],["D:/Blog/public/dynamic-array/index.html","22e69644979689dced2a8ead208a0e28"],["D:/Blog/public/encoding-algorithm/index.html","b0be39f325e4c0f96528be05cb08b2ec"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","0b92667ec7383ed148e4fe54d50cda5f"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","963b6aa216d013dba8517110ef4f416b"],["D:/Blog/public/factory-design-pattern/index.html","f53c29d5317a50e86eb126aace6ab55d"],["D:/Blog/public/file-input-and-output/index.html","bda7685863074291641e2e00053614ec"],["D:/Blog/public/flyweight-model/index.html","73b3afbd39a4b24c94f6c6c44443235f"],["D:/Blog/public/friends/index.html","7cd3bfbba2ff047d7a2ac47fc3071b5a"],["D:/Blog/public/function-graphing/index.html","671a87c4cb1c5ff6c7311479aefbe748"],["D:/Blog/public/gateway-service-current-limit/index.html","ccf9ff3c8e49398d048a8714c7da69f0"],["D:/Blog/public/gc/index.html","725619315cdf4431388edfd6eb16e04a"],["D:/Blog/public/generalized-integral/index.html","92d90ae1adb10ca4ecfad3bb95b43298"],["D:/Blog/public/google8102e2f35ce9e391.html","fbf5c16eec4833f7dd3d48e913790111"],["D:/Blog/public/gulp-compresses-static-resources/index.html","9076e7f9c329f11d938da87ff28182a1"],["D:/Blog/public/hash-algorithm/index.html","a56c03cf76d8707746d463420c125100"],["D:/Blog/public/heap-sort/index.html","fa30640563b769788e6fab724a87fd31"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","5d1b7469565dbf4bc7abf73790a6ea99"],["D:/Blog/public/http/index.html","1eaaab83998bc807df428a1a3ced2420"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","3665a7262cdf112c726ecefa3df4b824"],["D:/Blog/public/index.html","2b453640d35f61179c5afe3ff0bf47d8"],["D:/Blog/public/infinitesimal-and-infinite/index.html","126ed904532b28f532fecf023296998d"],["D:/Blog/public/interface-isolation-principle/index.html","40b2bda2b97f47ad3e4169d4e22fddca"],["D:/Blog/public/intermediary-model/index.html","d133292f8bc36eedb60b4ce60c74a648"],["D:/Blog/public/interpolation-search-algorithm/index.html","3fffeed46f14c992ebd7b5ffe96d3221"],["D:/Blog/public/interpreter-mode/index.html","76f43a5068ef652f45b6969fdd530ac3"],["D:/Blog/public/introduction-to-computer-network/index.html","070405cfeb65a28b661d3e85d14080b8"],["D:/Blog/public/introduction-to-operating-system/index.html","d8af3f32da66d4345d1daa538bfe1f04"],["D:/Blog/public/inversion-of-control/index.html","7eeb07b5a379721cf4eafe034ffc64b8"],["D:/Blog/public/io-Interview/index.html","2dc80e9af8278da267b570a9fa1e6fd1"],["D:/Blog/public/iterator-mode/index.html","746bc3ec7c85108e37a6c12513145ab6"],["D:/Blog/public/j2ee/index.html","b72e117ae2e7f79b061e3c0675c7b732"],["D:/Blog/public/j2se/index.html","c23505d0e55903f005c8aa8e8e41bf18"],["D:/Blog/public/jdbc/index.html","33cbfcc76bfa20e7404bf8b0011b2fd2"],["D:/Blog/public/jdk/index.html","33cfb4dde1a6be4b9106681c50c1bf2b"],["D:/Blog/public/jmm-memory-model/index.html","cc0e2b29e21cca402d6d9a24b0be1b19"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","c4da3bad1520c0cf6ea424db1f5d3205"],["D:/Blog/public/jvm/index.html","9c30ed18434789ca8dd5c9dc3b5bd25b"],["D:/Blog/public/law-of-robida/index.html","728819e658c718843ba2a1c2a980ab54"],["D:/Blog/public/limit/index.html","91faab4667f871f263ce741983e25391"],["D:/Blog/public/linear-search-algorithm/index.html","316fa5aaf67d0cd0185ec62692ffcada"],["D:/Blog/public/link/index.html","72e5b1f0001c3eb5f0b48ee1e1d8a221"],["D:/Blog/public/linked-list/index.html","91608f89bb2d63d5c9a875c9a9e6feff"],["D:/Blog/public/linux/index.html","3db767e531c561aa9cfea284afa4bbdd"],["D:/Blog/public/liskov-substitution-principle/index.html","d5ab955cc17fcd25347bc3eae22c5652"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","78595949ab11c1346b1111747d1dc88f"],["D:/Blog/public/maintenance-1/index.html","176aef8d50e4fc1f885681bb521fc347"],["D:/Blog/public/maintenance-2/index.html","a9884db21e8c393abfd83f5b61c73385"],["D:/Blog/public/maintenance-3/index.html","178306acd8ca482fb5164fef754673ad"],["D:/Blog/public/memo-mode/index.html","63e2f2ba1ab425a04b22e5469ec552ac"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","880f8f64794d313841a8bceb12594e78"],["D:/Blog/public/multi-function/index.html","d177e50d1c159e33ba4c125564e45fae"],["D:/Blog/public/multithreading/index.html","2e1174446acfa5e68845c0ce32822d4c"],["D:/Blog/public/mvc/index.html","b53745ccc5d9643384e2d83d37f66564"],["D:/Blog/public/mybatis/index.html","acecd36bc0f307b756c2aee7fc860f9a"],["D:/Blog/public/mysql/index.html","ddcce7c91b18f476b570092fa38cf5e6"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","f951bd156aaa1c04e79e1f018596bec9"],["D:/Blog/public/null/index.html","029e67949da7c054afe7b4b0d2662e62"],["D:/Blog/public/objectoriented/index.html","bbf5431dbdf7286474c5dd7111cfdb76"],["D:/Blog/public/observer-mode/index.html","039323f64435f2fce328d9e13463a71d"],["D:/Blog/public/off-heap/index.html","146b29b3cd67b1311a0b5bf6fa269e07"],["D:/Blog/public/operating-system/index.html","7ccaa6d3bebd203258a8eb1bf325c2bd"],["D:/Blog/public/page/10/index.html","3b9ab92978d61b873b2f1d829c901d8e"],["D:/Blog/public/page/11/index.html","226dfbad28a43ecba5a0f2870dd7c6bb"],["D:/Blog/public/page/12/index.html","905aea94b216f9d5f2a53644e22e7796"],["D:/Blog/public/page/13/index.html","53e52f5e5916c32f98279c981816c190"],["D:/Blog/public/page/14/index.html","9bd3cf53de31ad02e6a4eec49be8e8de"],["D:/Blog/public/page/15/index.html","d12bfe93b4681afc0bd0d288b3225eb0"],["D:/Blog/public/page/16/index.html","ccd4757ee940e1e7576f9fba31f31d8c"],["D:/Blog/public/page/17/index.html","e2e6dd9085e42796817427dd92a27085"],["D:/Blog/public/page/2/index.html","26a0ffcba02369fd31bf58056eed7fc6"],["D:/Blog/public/page/3/index.html","a5d52e72cb2ea4ec7ddbeedbb55c6e8b"],["D:/Blog/public/page/4/index.html","0674376435f2a86003c2203d04f1bfe4"],["D:/Blog/public/page/5/index.html","db6b4567c1b5fed5ea47667dac7589ca"],["D:/Blog/public/page/6/index.html","3bd5ab9822fe48e39e8d923d041ec7fe"],["D:/Blog/public/page/7/index.html","9e7cff21573969c846ef12fa85dbf014"],["D:/Blog/public/page/8/index.html","917869c3352a29d4dd4ce61f41db9779"],["D:/Blog/public/page/9/index.html","fc758ce3074d9103840dc8538ae012bc"],["D:/Blog/public/palindrome/index.html","e438670589498793d52d027e8b29a4be"],["D:/Blog/public/partial-derivative/index.html","def233b0b64307990c65052a72a090a7"],["D:/Blog/public/pass-by-value/index.html","22ef0ba325b48f139633c85eb897f769"],["D:/Blog/public/pictrue-bed/index.html","d20dd8720b98b107ceb19756b72e4f2b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","6aef0d5aacdc4a1042b25b302ecf4bbe"],["D:/Blog/public/principles-of-computer-organization/index.html","31f5b22694055e69f0de477f2d156331"],["D:/Blog/public/program-test/1610797689455.png","a4b33f955b61540d5b47fe601df04ae9"],["D:/Blog/public/program-test/1610798317382.png","7acf7560090b9706a2af39f59867fe7e"],["D:/Blog/public/program-test/1610799034052.png","6dff4454cf1063bdc7afd743759b6097"],["D:/Blog/public/program-test/1610800924088.png","1f1fde784b973754b7ce9f984c579bea"],["D:/Blog/public/program-test/1610801339901.png","9bc92a62cd9960d5801b60e4482a1167"],["D:/Blog/public/program-test/1610802495380.png","65e2274248325c5de079bd479c29c9ba"],["D:/Blog/public/program-test/1610811373564.png","a6be023303bb87540addafca4fef624e"],["D:/Blog/public/program-test/1610811498245.png","17afbc35ac2f32ce5009c584c317b046"],["D:/Blog/public/program-test/index.html","791b491dc4b1894b8682aac4dc9ed1b8"],["D:/Blog/public/prototype/index.html","932ec9d399ae0f96c4d141a1959344e2"],["D:/Blog/public/queue/index.html","d21a780f829261dda70e782d6967dad8"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","644cd628942e33884031cb45ea028ec0"],["D:/Blog/public/redis/index.html","73c5b94eade777868a4650e54650ca41"],["D:/Blog/public/reflection/index.html","14b6fbed44c004636d68925b0c6261e4"],["D:/Blog/public/resume/index.html","b0fccbbc7654452f6a913e2eb14a946b"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","41c7df7c1aa944b639c073b0f22ca54b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","100e2e1b59b0141fae250bf61686b771"],["D:/Blog/public/select-structure-programming/index.html","4a456bf27feea7fb7ab9b36c7ed0c291"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","6469170acb4a7bf75265a4766ea90aae"],["D:/Blog/public/sequential-programming/index.html","c6ad989f8a5868bc3fa1fb0826601c22"],["D:/Blog/public/series/index.html","0bc6a638b873f7aaaabdf7b0195bd0b5"],["D:/Blog/public/single-point-login/index.html","4aef270c1035c86541097654425d124e"],["D:/Blog/public/single-responsibility-principle/index.html","d11867338dcfb6d2015a208224e41d7f"],["D:/Blog/public/singleton-mode/index.html","8d9ea2147c0fe00d582e8969b39d9a17"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","5bd3d1e9caaec9e342e255e8523e535f"],["D:/Blog/public/sparsearray-sparse-array/index.html","61f3e5b63a5da47b7f43c96159c72419"],["D:/Blog/public/spring-architecture/index.html","6e3857ca2c596d20514bc3fb17bf30aa"],["D:/Blog/public/spring-relate/index.html","58fcb41507d78a699a93158c6ac99a9a"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","dc6eb248c341feec389cbf811ef3657d"],["D:/Blog/public/spring/index.html","f06a4300e4982a52e9518e5b988e857c"],["D:/Blog/public/springcloud-alibaba/index.html","f508b8b3627c5489c726a6746d446943"],["D:/Blog/public/springcloud-bus-message/index.html","5978ccd646aa5f6fc061561e1ae58b33"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","d2b12bdacc591cdcd1e7d1dd4f352167"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","fe7cc1a35144d003295d8d77f2bcadd5"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b6ca2985fd1830e7e20238f96b255676"],["D:/Blog/public/springcloud/index.html","64ff2e5026d28f0e471905795e3df230"],["D:/Blog/public/springmvc-environment-construction/index.html","fa6380bdcb7731f2c36ca6ffa64d4e4e"],["D:/Blog/public/springmvc-work-stream/index.html","de2ef19cfe04ff35266619ef5d0cd2b4"],["D:/Blog/public/sql-injection-attacks/index.html","0fb7315547e5da7a32406730a4c53ea6"],["D:/Blog/public/stack/index.html","d871e9461c576762353a24c33014f4e7"],["D:/Blog/public/state-mode/index.html","52103650ac85037dff07a6b056d4be20"],["D:/Blog/public/strategy-mode/index.html","f1e5b5736ec70c96bdc0c6ee8bc481c0"],["D:/Blog/public/synthetic-reuse-principle/index.html","ce8b365ada41083b1ac347a79be37301"],["D:/Blog/public/tags/C/index.html","38137d90965dd10f47c279ecc192270b"],["D:/Blog/public/tags/C/page/2/index.html","f80d13ec18286f453d023911526b7d63"],["D:/Blog/public/tags/Concurrency/index.html","ac11239dcd2bd67877195a855d66a2b3"],["D:/Blog/public/tags/DesignPatterns/index.html","ce9a88c458dc1ce785af42bdbb171b53"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","1c38592b442950bf5cae84b6fad68b13"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","7eaf93755cf5b374aa2b407897326bcc"],["D:/Blog/public/tags/DistributedMicroservices/index.html","d674e87abbda6fb229500168968dc605"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","ce93894e3366aab3db2c4387ba0b64c6"],["D:/Blog/public/tags/Interview/index.html","8c506b35e8af74d579cc2680d0e53b23"],["D:/Blog/public/tags/Interview/page/2/index.html","6741843ed080a749e9bfcf072b895b1b"],["D:/Blog/public/tags/Operating-Systems/index.html","eba79e797851bb78a30cfbbdb6daf7bb"],["D:/Blog/public/tags/about/index.html","269bdbd4285f6d37e29a8475b7d84b19"],["D:/Blog/public/tags/ad/index.html","6c24d670aea786d3b1332e18002491c2"],["D:/Blog/public/tags/dataAlgorithm/index.html","8e26d1c3efdc2eef34e55bb991ffba06"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","8597b6183520cf9dfcf16bd4c73b22ad"],["D:/Blog/public/tags/docker/index.html","8ceca742531a7b0bc6afdae67729fc4f"],["D:/Blog/public/tags/frame/index.html","4cdb25b47b59f5ed855aab1da885607f"],["D:/Blog/public/tags/front/index.html","89c380ccebb476b3147e3d0ad9020776"],["D:/Blog/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/index2.html","5fbc4f388449d2d394de453d97ae2605"],["D:/Blog/public/tags/io/index.html","55ef9b91fec9554e6c855c0fdd2b1f8a"],["D:/Blog/public/tags/jvm/index.html","1fcc163ba631fad18ac067c6055c2c04"],["D:/Blog/public/tags/linux/index.html","71f0b881ba47df7cd67d147c691a11fc"],["D:/Blog/public/tags/maintain/index.html","6df84de3d0c9a2de2fd1a756d9312fc9"],["D:/Blog/public/tags/math/index.html","32e4ae272cfcd775aa1d29ed565ce274"],["D:/Blog/public/tags/math/page/2/index.html","705353d12209b61a9fb93564d5500f42"],["D:/Blog/public/tags/network/index.html","7b5c04a0be3a431436250a35a670adbc"],["D:/Blog/public/tags/project/index.html","044a22930707c518d86db8162d239fa8"],["D:/Blog/public/tags/resume/index.html","ac62537c5280abacb769041a575c9a89"],["D:/Blog/public/tags/safe/index.html","bd241c72b0345438bf346b165f843139"],["D:/Blog/public/tags/sql/index.html","892a731f982137d0bce672a85a44a1f4"],["D:/Blog/public/tags/test/index.html","4c9198178208840aff01365be9d26082"],["D:/Blog/public/tcpip/index.html","1648f62e2f2c4ddc5465a66931d013fc"],["D:/Blog/public/template-method/index.html","73d65c6444885f417a594db119ec001b"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f224f00465bbaf015a5fe9b70b603cf0"],["D:/Blog/public/thread/index.html","bbcf928651e7f058e417b35765155c09"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","02cdb859391351a7a94cf1af166c4aad"],["D:/Blog/public/ubuntu-set-ip/index.html","872935940b6b3739b5e13aee38ae6ce5"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","0280cccdd205fc7cbefe05403daf0661"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","551f9bdb9b8e2227c616bde975304a80"],["D:/Blog/public/users-create-data-types-themselves/index.html","d0f3050141588bc5794010be88fbbce2"],["D:/Blog/public/visitor-mode/index.html","435f87cdd1f49dbe389010f5b86e00ba"],["D:/Blog/public/xml/index.html","853e00a4f6c718ed336c7671806eabd3"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","58371db91e92e39a1ac1edcf0760c869"]];
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







