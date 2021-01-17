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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","1b9bcf091b6ebe741471173586d8481e"],["D:/Blog/public/AIO-blocking-model/index.html","d445f2094c97dc7e42eee11237359832"],["D:/Blog/public/BIO-blocking-model/index.html","3cf81020258562a78869d0b93a207c49"],["D:/Blog/public/C-algorithm/index.html","4ca00e88191bfa480f2070c625dec6a5"],["D:/Blog/public/C-programming/index.html","03a4c489ab3388cce1126cb63b31d0f6"],["D:/Blog/public/Good-use-of-pointers/index.html","4412173766c096a190221ff81acd50b2"],["D:/Blog/public/IO-model/index.html","e7fab88dc9d3693b17d574cf144073b8"],["D:/Blog/public/IO/index.html","0d1f473883813d239d50dd0644ee525e"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","d2077a76fb417fadf1c8f5764b628991"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","83ca21daa4f7ada44bdb4d5cc3e3f2a2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","8bccfb2ff167271685656eb5aac1b5e5"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3699fe24ff6028f31ecf5d521b9149e3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","944e861b77d0ff1edae96d2360ab1aa9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","dfd328df7c3adf60f4b9d1639961c90d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","fe31da0ff2d58994f2d253d94f31e534"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","53ab6b097e136e348bfbc10a18945d30"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","54b276b3873198f327a4a7f11aef79cb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","edaadf3f4a25b8127cb2c61d6ca48163"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","f45fd63f6fec04dc43c08e165d22b3f1"],["D:/Blog/public/Java-network-programming/index.html","376516d0480703cf128a79f629e72b73"],["D:/Blog/public/NIO-blocking-model/index.html","5466ddd3fb678a0bd555a5055ed011f4"],["D:/Blog/public/Native-method/index.html","9a4d35fade3d82542cefbab2fcca76ca"],["D:/Blog/public/Sandbox-security-mechanism/index.html","765d1aa9b70ddeee995d72a095c65f7d"],["D:/Blog/public/SpringBoot-startup-process/640.jpg","92157f8b7a12cf7b692600d96f615542"],["D:/Blog/public/SpringBoot-startup-process/index.html","23605857a50de895632d1d711f72bbcb"],["D:/Blog/public/about/index.html","bf8f049fcb12e51c90af329cbabc7772"],["D:/Blog/public/adapter-mode/index.html","0407fdad7b2b2d751dce1562808d57e4"],["D:/Blog/public/agency-model/index.html","99e155c95a1878f76a31768c10cdbd4a"],["D:/Blog/public/appearance-mode/index.html","bceed5314c268a0f8cdb069e40492206"],["D:/Blog/public/archives/2019/01/index.html","03640d43d3b2a7a080e19fa82e7bda0d"],["D:/Blog/public/archives/2019/07/index.html","c949d7f1aa98511ad50c367db25e90ab"],["D:/Blog/public/archives/2019/12/index.html","a846ac1435db0d17c30d09a154a4c8de"],["D:/Blog/public/archives/2019/index.html","cb6871fe5bc22e06a83e5da2a680583e"],["D:/Blog/public/archives/2020/04/index.html","4d5eefb5e464e0b457f343584c77c1a0"],["D:/Blog/public/archives/2020/05/index.html","8350951dcc0635dd84165050c6a10af3"],["D:/Blog/public/archives/2020/05/page/2/index.html","0ebf7f442fc5b44512f04d5e244db7ce"],["D:/Blog/public/archives/2020/06/index.html","626fac27237d87d079b73a17814097cd"],["D:/Blog/public/archives/2020/06/page/2/index.html","f9ee96e94e04b076bd514ba285002d32"],["D:/Blog/public/archives/2020/06/page/3/index.html","f6743bb1767876d98d97a3466ae8f767"],["D:/Blog/public/archives/2020/06/page/4/index.html","38969210396a6a1bf6a1acc478290d58"],["D:/Blog/public/archives/2020/07/index.html","f94a08894922afe1363b80b7749a74c4"],["D:/Blog/public/archives/2020/07/page/2/index.html","dd2f515c6adba8190a703f88e7c1aa47"],["D:/Blog/public/archives/2020/07/page/3/index.html","cbf4754f5f48621283726b37a4f75d09"],["D:/Blog/public/archives/2020/08/index.html","4304dec8e8193e8c7163ae2adc7568f9"],["D:/Blog/public/archives/2020/08/page/2/index.html","fb029144ac326990080fbf9522b0dbd7"],["D:/Blog/public/archives/2020/08/page/3/index.html","a1d8e2d6c85218683ee8f56b764ccb88"],["D:/Blog/public/archives/2020/09/index.html","670c43751f67b385edb6eeb92baf6b06"],["D:/Blog/public/archives/2020/09/page/2/index.html","a37fc09652e753b777c75a4b08dc6e7d"],["D:/Blog/public/archives/2020/10/index.html","be2afc5855c0358a77b4c5ea57f8c53c"],["D:/Blog/public/archives/2020/10/page/2/index.html","333c6d2a2c1e78ca5422317dc14c9438"],["D:/Blog/public/archives/2020/11/index.html","4bd3d4735dd82948b4a90317e2e33278"],["D:/Blog/public/archives/2020/12/index.html","8ec5887a9456496b040462acf9480017"],["D:/Blog/public/archives/2020/12/page/2/index.html","28477c4757df52af6a8fbe943cd0d662"],["D:/Blog/public/archives/2020/12/page/3/index.html","a50e3780714827d72d314875eb105efd"],["D:/Blog/public/archives/2020/index.html","1858990b0229966d516e287b0b6777cb"],["D:/Blog/public/archives/2020/page/10/index.html","0fe5ef43368da33b80e1704578c86833"],["D:/Blog/public/archives/2020/page/11/index.html","56877a8a9b5b03da53f5b7e217d729fc"],["D:/Blog/public/archives/2020/page/12/index.html","3ac5a1dedf3945692d8d299f33ddc81a"],["D:/Blog/public/archives/2020/page/13/index.html","051fe8fa8520d36420d11f0010337199"],["D:/Blog/public/archives/2020/page/14/index.html","f54c483fa186bcc006fcd304d4a10953"],["D:/Blog/public/archives/2020/page/15/index.html","adc1ff025a12d7c460706afec5dc07d9"],["D:/Blog/public/archives/2020/page/16/index.html","0c8c2848234ed30694eb36c6e506e83a"],["D:/Blog/public/archives/2020/page/17/index.html","a0a23dc47f6b93d39323f3a6a6f1d332"],["D:/Blog/public/archives/2020/page/2/index.html","55ab80a12bb012fbf8efb413f383a855"],["D:/Blog/public/archives/2020/page/3/index.html","591223dc3a9be3eb5e4b7396f2e48d61"],["D:/Blog/public/archives/2020/page/4/index.html","9ba9b9a2e59dcf8751c5c76794401edf"],["D:/Blog/public/archives/2020/page/5/index.html","c33c5b94730cd0d5e64aca96363c73aa"],["D:/Blog/public/archives/2020/page/6/index.html","feaa723197b6ebc0163b7a081c3fe8f8"],["D:/Blog/public/archives/2020/page/7/index.html","0fab678356fe57bbdbf5ccb127e13823"],["D:/Blog/public/archives/2020/page/8/index.html","a21cd12c93e4592364f18785b517df5a"],["D:/Blog/public/archives/2020/page/9/index.html","aca55ffb10b2286af7beb7dc8469c5d9"],["D:/Blog/public/archives/2021/01/index.html","c941c3e58606421add11355a546e10dd"],["D:/Blog/public/archives/2021/index.html","52fcee764014d5d31d1d8938a3358b9b"],["D:/Blog/public/archives/index.html","028373cfad601985473ad8bed2773f58"],["D:/Blog/public/archives/page/10/index.html","ef2d4702955afc641be2de70290b82df"],["D:/Blog/public/archives/page/11/index.html","ad5334cc22cd5d2597d639af812a5649"],["D:/Blog/public/archives/page/12/index.html","a93c5c38cd9d802405c5f29d8bab2c1b"],["D:/Blog/public/archives/page/13/index.html","82145a0f34ef2d11bc392f6c5b4c9e07"],["D:/Blog/public/archives/page/14/index.html","3b5aaa1d3cf7752ebe0b01c25d70d37b"],["D:/Blog/public/archives/page/15/index.html","a797cf9b8bb92d619c914417728d00a0"],["D:/Blog/public/archives/page/16/index.html","bafcaf9527b7239a6b8e8b69dbd6d9ba"],["D:/Blog/public/archives/page/17/index.html","e0c443957ba7ab49581209e77511db59"],["D:/Blog/public/archives/page/2/index.html","3b4c69131131b21cd7e77b6054b80103"],["D:/Blog/public/archives/page/3/index.html","c6f4b53f129b55f744955a7f214873d2"],["D:/Blog/public/archives/page/4/index.html","083b1cb01e4cf07de374675e955a4451"],["D:/Blog/public/archives/page/5/index.html","0b47a6f0d96d38b4f8b7c38eeea90bd1"],["D:/Blog/public/archives/page/6/index.html","cc929ee390ecea24afbd0d87f432f001"],["D:/Blog/public/archives/page/7/index.html","03c7e6dcf574fd7a897908671a6cf323"],["D:/Blog/public/archives/page/8/index.html","c1e7985ece59546bb6ebb8dc16201a6f"],["D:/Blog/public/archives/page/9/index.html","f87d3b98b226cfdbc82a9f018d340d9a"],["D:/Blog/public/array/index.html","6c71b0ebc8e2aa86b4aec2b4bbf3710e"],["D:/Blog/public/binary-search-algorithm/index.html","10549a4050611cea2b5f8a3c279694f7"],["D:/Blog/public/binary-sort-tree/index.html","1a18263da8df927cdc4cdaf7f59a9372"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","94ec1f36f25303311d453e412ea4e5b0"],["D:/Blog/public/bridge-mode/index.html","67f4478ba2caa3259cfd97a18df2bd3b"],["D:/Blog/public/builder/index.html","f5f389489d0540d4a1a6920a60820f89"],["D:/Blog/public/c-pointer/index.html","0ffa321f129218ee453de5d0b3b3854e"],["D:/Blog/public/categories/C/index.html","e94c98cb04672c12fbcd8c6c734c76a3"],["D:/Blog/public/categories/SpringMVC/index.html","bbc4478d64ab5153f1dd01e6a36044a4"],["D:/Blog/public/categories/index.html","a36e85c0098d8af154add5aab4498199"],["D:/Blog/public/categories/linux/index.html","b2b3d6a626ea4ec633db31c9a0081736"],["D:/Blog/public/categories/分布式/index.html","bdeee128a0ddd33da5f221593b0efd6a"],["D:/Blog/public/categories/分布式/page/2/index.html","d2e7aeee2f4d8f6d76dd738fc2e13154"],["D:/Blog/public/categories/前端/index.html","86400b526c8575e33df989901977e643"],["D:/Blog/public/categories/设计模式/index.html","3fb1b501b61c7d4c06a539adeaceb209"],["D:/Blog/public/categories/设计模式/page/2/index.html","7cb6aad4263b002495d83e0c6ba7eda3"],["D:/Blog/public/categories/高数/index.html","4135c87a465d4e19a36699018baff93a"],["D:/Blog/public/chain-of-responsibility-model/index.html","d0a5df49653a7a9e0811a31f1e8863bf"],["D:/Blog/public/chinese-and-english-switching/index.html","8e931f3ed7ae3f537714b77645cbec7c"],["D:/Blog/public/combination-mode/index.html","7c1374f89ee753b434c565b4c458a6a1"],["D:/Blog/public/command-mode/index.html","1d3cb3d150fdde578f61b9274fc26a12"],["D:/Blog/public/common-commands-of-unix/index.html","83fc2514b9253e0d7b493512a1b589b0"],["D:/Blog/public/computer-network/index.html","dcb20d56093f3ac19ea6642821df324f"],["D:/Blog/public/concurrency-principle/index.html","89c5d2e4d6b81b933299618649a21bac"],["D:/Blog/public/continuous/index.html","c3829fcb883df2cb3124e334f7cdf072"],["D:/Blog/public/contract/index.html","ab57f41782c547467818af83c45734c4"],["D:/Blog/public/css/octo.css","58f1405f275ba68ea202e77ef70165c9"],["D:/Blog/public/cycle-structure-programming/index.html","fc9fda01ea5d17ee464b79ecf48e9ece"],["D:/Blog/public/data-structures-and-algorithms/index.html","1e1f6863b1721c472cc416f16aaff929"],["D:/Blog/public/deb/index.html","19fc719e1a364d952b1eed13baaba580"],["D:/Blog/public/decorator-mode/index.html","bb221bb4341c808c53bdb2824fbd8cc6"],["D:/Blog/public/definite-integral/index.html","89dd2b9e5193adf23e62b0f601a0cdcd"],["D:/Blog/public/dependence-reversal-principle/index.html","4a5c2901a34a6e59ce52a39eed22656f"],["D:/Blog/public/derivative/index.html","614e1eaa71c26d88a42eff3365136a6d"],["D:/Blog/public/design-patterns/index.html","31a0a13c065f5aacd4b050ee86c23bca"],["D:/Blog/public/differential-equation/index.html","85c6cf14a6e3bef9389e92d7bc267ba3"],["D:/Blog/public/differential/index.html","6ba4e32c8bfa86512a83be044e881759"],["D:/Blog/public/dimits-law/index.html","953debf8f35213c345381f097b88a520"],["D:/Blog/public/docker-virtualized-container/index.html","66c12007a52c34c958478ed78ef86462"],["D:/Blog/public/double-integral/index.html","ddc7684b50422dee03fda4174c507b97"],["D:/Blog/public/dynamic-array/index.html","b857d880e793ea1420d231498f4d55d9"],["D:/Blog/public/encoding-algorithm/index.html","a35382c33c4ee25e6496a8195150d3b6"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","0b3821b2edf6b11f93af3eabe8c3da75"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","5a3ed25b5af577e576643eef4479ae70"],["D:/Blog/public/factory-design-pattern/index.html","ed484dee1307e82160a083c11e364e98"],["D:/Blog/public/file-input-and-output/index.html","dbfc2b574e2e06312567d05f0d3fe9b2"],["D:/Blog/public/flyweight-model/index.html","b8c515c4c0b026dae332cf027a8edb25"],["D:/Blog/public/friends/index.html","137fc58c7d941d03dcb4ae9f5e37a733"],["D:/Blog/public/function-graphing/index.html","89bc7ebd0b9246f41df6ae9121966704"],["D:/Blog/public/gateway-service-current-limit/index.html","4621600eaac960f7a736d2272f9bfcf7"],["D:/Blog/public/gc/index.html","ced6d709a60d300128577ecdeeac53fa"],["D:/Blog/public/generalized-integral/index.html","fd084caaac485468a273fdc1ec38985e"],["D:/Blog/public/google8102e2f35ce9e391.html","9af57d1d748a679f4319fe9919e9b073"],["D:/Blog/public/gulp-compresses-static-resources/index.html","8cb934e4cb94a5433caa98cde869805c"],["D:/Blog/public/hash-algorithm/index.html","6e12bf694d41a2d7ae2aa7e71810754e"],["D:/Blog/public/heap-sort/index.html","6618855de6cceac7c0de7d3e1701b192"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","b0f25ecc8a0326c791005b64c73ced1e"],["D:/Blog/public/http/index.html","3371ecf26865a97699f6b7d514dd5742"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","761c2f1c6c1b3424e0ec349c33fe7a49"],["D:/Blog/public/index.html","84eaaa472c271cc935aee190f01ea4d4"],["D:/Blog/public/infinitesimal-and-infinite/index.html","11dea6611ba15113e3be7304c4ff490f"],["D:/Blog/public/interface-isolation-principle/index.html","09b9f47799b3350ed38d5f1456260206"],["D:/Blog/public/intermediary-model/index.html","8fe23d6cca87618a5421e06f6dbbdff8"],["D:/Blog/public/interpolation-search-algorithm/index.html","9c22aeb0df504feb80ef2ff27c366f4b"],["D:/Blog/public/interpreter-mode/index.html","b0a2d29a163086fb6e778964b98bcf3e"],["D:/Blog/public/introduction-to-computer-network/index.html","58462d73e7c50b0f396229bcd14f5f16"],["D:/Blog/public/introduction-to-operating-system/index.html","5e5a3c282e652f6d1f0695017dbd1abd"],["D:/Blog/public/inversion-of-control/index.html","6d41d4afd0c5fa5a50837c9d42f0ef8e"],["D:/Blog/public/io-Interview/index.html","594ef20d68ff63a57aaf8038ad5d07d9"],["D:/Blog/public/iterator-mode/index.html","b75003d9e2858f32e995fdd4975e86fa"],["D:/Blog/public/j2ee/index.html","d6de3761ecfe5b3d1e71f21a820161cf"],["D:/Blog/public/j2se/index.html","66b5e51763912572b383c935b8e81f0f"],["D:/Blog/public/jdbc/index.html","cf196bccfef3b3e9eea8c36cd9234897"],["D:/Blog/public/jdk/index.html","33abf4694132baf5972059646d381d9e"],["D:/Blog/public/jmm-memory-model/index.html","7e95cfa1e9ab5e0ba98fb1b3bd3b079c"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","b01ff5625b6eee2c6554c1c6a6dc819b"],["D:/Blog/public/jvm/index.html","ce55fc59666d7c5645aec7fe852fe9c0"],["D:/Blog/public/law-of-robida/index.html","0c43dea266cdcffaa9c1006ae1b9c7e4"],["D:/Blog/public/limit/index.html","985f6ccc6a340397f98af1fc2d69944d"],["D:/Blog/public/linear-search-algorithm/index.html","7d2e56713ce9fe108ffb23bbaea2d00e"],["D:/Blog/public/link/index.html","6a1cbe5c2204b8c37c5238aa80b6bf08"],["D:/Blog/public/linked-list/index.html","95a6fbc76d7b26e9435346d11e89c5d8"],["D:/Blog/public/linux/index.html","df5c102436b3131267bbe31be349f3c6"],["D:/Blog/public/liskov-substitution-principle/index.html","9a4b363153581bdb3504ae7ef5c48aaf"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","00b058803e5429c9464c1f13468c9170"],["D:/Blog/public/maintenance-1/index.html","339330b076c7a7a1ce5ee5f1ed71621f"],["D:/Blog/public/maintenance-2/index.html","4ccae77fc9bccc3d6c7cb4fd541b4a38"],["D:/Blog/public/maintenance-3/index.html","61c3939c8a11bb5ec47793c36b7e6d5e"],["D:/Blog/public/memo-mode/index.html","1f940f846da6fa530a731bbeda14a9c9"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9fa414724794d622e3a0a30c60388d34"],["D:/Blog/public/multi-function/index.html","80bf636506d2e1f7e3b02d41e45f12a1"],["D:/Blog/public/multithreading/index.html","2528ae4a29ff70a5b8d0fbed755a187f"],["D:/Blog/public/mvc/index.html","e9e8d3f6d40ad9beb22a1a7aaee4709f"],["D:/Blog/public/mybatis/index.html","156fb3f503d5a8350b32440a4b39645b"],["D:/Blog/public/mysql/index.html","71651d996be7a80265bac23d5230b284"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","321ca6c2353834f49943a0404c2a82b1"],["D:/Blog/public/null/index.html","a84756948eedb5d5ce136b126b1d158c"],["D:/Blog/public/objectoriented/index.html","d2a4d242626b362b452a02f971f52620"],["D:/Blog/public/observer-mode/index.html","aa268d9ad12adc93ec7a4c02eb461c22"],["D:/Blog/public/off-heap/index.html","4f5682de74d621cf825376a05cb61641"],["D:/Blog/public/operating-system/index.html","04e5a2c40115a6c814fd696d381c917a"],["D:/Blog/public/page/10/index.html","81b0ba6bff174662245d2de1b994b471"],["D:/Blog/public/page/11/index.html","4f482e50ea839cacd374a32f89d24aaa"],["D:/Blog/public/page/12/index.html","ca5e6473a16b64cf3a60e4d0e1c706c6"],["D:/Blog/public/page/13/index.html","e900f747c617df01f09cfdd892a981e8"],["D:/Blog/public/page/14/index.html","4c0142ba00725232e73cfe7a7572ca65"],["D:/Blog/public/page/15/index.html","f966b42e4f38975cf5d101da3e3c98a5"],["D:/Blog/public/page/16/index.html","e200d1af0c7057e4d21c9ca1b7151715"],["D:/Blog/public/page/17/index.html","f04add5f68c50ed54b527941a57fa349"],["D:/Blog/public/page/2/index.html","2d5b5bea9ae51aa0dba67af8b22e6880"],["D:/Blog/public/page/3/index.html","694c96b48f43f20f3923cccd9fb56aa1"],["D:/Blog/public/page/4/index.html","07000327aceaa651a9437a845e36896c"],["D:/Blog/public/page/5/index.html","14dac79fde49872b087d58c161d69d1c"],["D:/Blog/public/page/6/index.html","954f4e61351c80495d41b857f2cd03e2"],["D:/Blog/public/page/7/index.html","06b0f92158a7818669dab1ac38eec1a1"],["D:/Blog/public/page/8/index.html","f060d6118a76ec98b1fe489fb9f035df"],["D:/Blog/public/page/9/index.html","befbdca95e7714bdec71186da2ab235b"],["D:/Blog/public/palindrome/index.html","6328a8c0dc3a67039d1a73e72d8ce54b"],["D:/Blog/public/partial-derivative/index.html","7a28d11b35c65ec2d9613d953e16503d"],["D:/Blog/public/pass-by-value/index.html","ea542f1927945886e4ac0986dc76541b"],["D:/Blog/public/pictrue-bed/index.html","64fef8a4af4570d883b70da717389292"],["D:/Blog/public/principle-of-opening-and-closing/index.html","5cf45a2edfc3549e8ad4f7c4527b2c53"],["D:/Blog/public/principles-of-computer-organization/index.html","4148aa2fde833ea2288c1f77d321c21d"],["D:/Blog/public/program-test/1610797689455.png","a4b33f955b61540d5b47fe601df04ae9"],["D:/Blog/public/program-test/1610798317382.png","7acf7560090b9706a2af39f59867fe7e"],["D:/Blog/public/program-test/1610799034052.png","6dff4454cf1063bdc7afd743759b6097"],["D:/Blog/public/program-test/1610800924088.png","1f1fde784b973754b7ce9f984c579bea"],["D:/Blog/public/program-test/1610801339901.png","9bc92a62cd9960d5801b60e4482a1167"],["D:/Blog/public/program-test/1610802495380.png","65e2274248325c5de079bd479c29c9ba"],["D:/Blog/public/program-test/1610811373564.png","a6be023303bb87540addafca4fef624e"],["D:/Blog/public/program-test/1610811498245.png","17afbc35ac2f32ce5009c584c317b046"],["D:/Blog/public/program-test/index.html","043801bf128fbdd51b0dd511ffa033e4"],["D:/Blog/public/prototype/index.html","8f9f384a83925b37ffe921690a0d17b3"],["D:/Blog/public/queue/index.html","aef54de594c5a6ffd2f253ad5a975fd7"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","aaa8c98ab6ed0172780e162eca1a2d5f"],["D:/Blog/public/redis/index.html","31276086db1f4e86a814f69c227eb81f"],["D:/Blog/public/reflection/index.html","df21778fc138d03ef5ae014907079229"],["D:/Blog/public/resume/index.html","cd8fca227bb406b4f1edf8d386947877"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","e9dcfd7e5dc839fc5fc08b4478e0e982"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","8dbe859ca6d08bce88038d50cca009c4"],["D:/Blog/public/select-structure-programming/index.html","0c18b756a44d7c4fcbad6ee544a2b05a"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","fbbbd8fb259d0bf6acbfeae7d6f1e41c"],["D:/Blog/public/sequential-programming/index.html","cfcb0dfeb8186479bb66b486e3bba76c"],["D:/Blog/public/series/index.html","2729b8721948415f6da2fe4f03b3cc7b"],["D:/Blog/public/single-point-login/index.html","37e2741b176e92dce111f4dd41643703"],["D:/Blog/public/single-responsibility-principle/index.html","4d7b6942adb45bb253620b46e8655ffe"],["D:/Blog/public/singleton-mode/index.html","efb59b73327219487c65dd40545d6ad7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","94b85c5c40926d2b1f3b154a1b9282e0"],["D:/Blog/public/sparsearray-sparse-array/index.html","a56c9a9ac7f5f1c9a5c6b9de94aff487"],["D:/Blog/public/spring-architecture/index.html","0f1989d6f311485d134338cc6dd86ab5"],["D:/Blog/public/spring-relate/index.html","bf89adfdd190f339dd264732e307b966"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","4d2191b726999ebf939141c2499433a5"],["D:/Blog/public/spring/index.html","09a7b4ad7ee6ce98526498253b532238"],["D:/Blog/public/springcloud-alibaba/index.html","e3eea10cda0ac7a9f2d02f41fe5155e6"],["D:/Blog/public/springcloud-bus-message/index.html","858d9102a0f499212587009b60cde0a3"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","cea7c23526ceeff22ecbb4b98ccc7add"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b3ad3b6e239e33373ca0d48067763f6e"],["D:/Blog/public/springcloud-stream-message-driver/index.html","f8a4c4675f74cbd67e20a1f1b6d32619"],["D:/Blog/public/springcloud/index.html","8eeb0b69002b9fd63378b6b127f756d1"],["D:/Blog/public/springmvc-environment-construction/index.html","1c4f3f9a22a99625be2fe6b608b787a0"],["D:/Blog/public/springmvc-work-stream/index.html","786cfdaf669a7494d962631f2ab4628f"],["D:/Blog/public/sql-injection-attacks/index.html","8d19dfb30dd0b232155056a74b8a68d4"],["D:/Blog/public/stack/index.html","557c37693780cfab221f7114c7d82b7d"],["D:/Blog/public/state-mode/index.html","fe434f34b24b8a5fce2d4eb8cdc9c82c"],["D:/Blog/public/strategy-mode/index.html","c523bf3411f80794514536dd73b7cbcb"],["D:/Blog/public/synthetic-reuse-principle/index.html","64eee67c7f0483af1a87bda6977562fb"],["D:/Blog/public/tags/C/index.html","cb8f9c65836d023eef0ea65b09919bfe"],["D:/Blog/public/tags/C/page/2/index.html","a17dfb311d2a5fcc7e46648007111ad8"],["D:/Blog/public/tags/Concurrency/index.html","da1a79ad27e12e010c8d0ddda5bf1a09"],["D:/Blog/public/tags/DesignPatterns/index.html","5e546960ecd3f37f61621de4d0052796"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","7c62049ba58ff467c45fd4460868376f"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","1aa0dfed001ba5c2caf04ca4bd961e04"],["D:/Blog/public/tags/DistributedMicroservices/index.html","f451f93a77d6cbab0e8eeaea3ae1dbb9"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","c06dfae38193e88291de3b9459688ecb"],["D:/Blog/public/tags/Interview/index.html","076664be5fda857d77c8270dd6a00aef"],["D:/Blog/public/tags/Interview/page/2/index.html","026c0047e63f3c967b04062fb23d35d2"],["D:/Blog/public/tags/JVM/index.html","f02740ddf64dbc7c7ed235f908b4abc3"],["D:/Blog/public/tags/Operating-Systems/index.html","45411473063f08b80812a937bb971d2f"],["D:/Blog/public/tags/about/index.html","5c1a60d98cb441584803ecb430453fd4"],["D:/Blog/public/tags/ad/index.html","da3dea5fab4affb3e050d06bd579718b"],["D:/Blog/public/tags/dataAlgorithm/index.html","54ca6689d45138f96593d9f1743feae6"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","ee1f9d4c9c727c70606ce28ca83ce444"],["D:/Blog/public/tags/docker/index.html","edcf7dd76d127d2257af1ff3246f7003"],["D:/Blog/public/tags/frame/index.html","f797e2835ba03b3fc3d83861e2d8ac60"],["D:/Blog/public/tags/front/index.html","6d2a3033cdd546607c0ccf2e2897cda2"],["D:/Blog/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/index2.html","8cb07b8da5aaa93b61b8e5d395907da5"],["D:/Blog/public/tags/io/index.html","901501e0c87d7553d0347597a4b97dd2"],["D:/Blog/public/tags/linux/index.html","8120007d44a09d9a1c5797dc8b2b84f2"],["D:/Blog/public/tags/maintain/index.html","735610b140ce5c31b6c12fe5d548e020"],["D:/Blog/public/tags/math/index.html","60b9f64048cbbf4ed4f624ba31064c12"],["D:/Blog/public/tags/math/page/2/index.html","1354436eb5b98757f89445bef86eabe9"],["D:/Blog/public/tags/network/index.html","0f104b1a332aca0e0b7fdbe5cea64f8c"],["D:/Blog/public/tags/project/index.html","0daa991f3bb185525bfba1a629659447"],["D:/Blog/public/tags/resume/index.html","fe1dfe347c562dcf803d4d7dee950cc9"],["D:/Blog/public/tags/safe/index.html","24b9089fc4376a545bf3d052a567a066"],["D:/Blog/public/tags/sql/index.html","c040c1a64028b545b2f23fa5cd8daa8b"],["D:/Blog/public/tags/test/index.html","fb5070fbb140869ba7c2d875a30eb9c6"],["D:/Blog/public/tcpip/index.html","31da56e72190a07d1855b3d600d6ce9c"],["D:/Blog/public/template-method/index.html","345c7fdac01dff67328c9a934c3a42d2"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","ca42adf5074d6cccaf396f4a0d8e4cdd"],["D:/Blog/public/thread/index.html","d58a60519446c110618e6dc75d18b5e0"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","78c03318c891ea8a5f0eafa19de9fdf5"],["D:/Blog/public/ubuntu-set-ip/index.html","e4bdff23a489ebe05d042607c9fabcb8"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","2ab338930b4dd6bcd306c82e368a9f91"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","48090f6978f040e85f4668d88c0b83fb"],["D:/Blog/public/users-create-data-types-themselves/index.html","5b3cd14f1f1a88e9dff1168bd8a60bf9"],["D:/Blog/public/visitor-mode/index.html","7396849ad65ced152be3bc3bfba76bd8"],["D:/Blog/public/xml/index.html","13cf77eb200e49d5bd4681c95126e120"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","e339007e58f1222f60ba3abf885769c1"]];
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







