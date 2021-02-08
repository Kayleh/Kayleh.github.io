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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","6856d9a9a4c8767d1fca9c02766976a3"],["D:/Blog/public/AIO-blocking-model/index.html","1443159ba123ce278673ca60b0cdedd2"],["D:/Blog/public/BIO-blocking-model/index.html","a2c643fc2232ab045f0f2bb704857ffd"],["D:/Blog/public/C-algorithm/index.html","243c0a32269fc8110abb806cdeab0626"],["D:/Blog/public/C-programming/index.html","6ed1d3c1c66d5b7bec1e7bb0a279eee8"],["D:/Blog/public/Good-use-of-pointers/index.html","005f8f424695e492c51aecabef91591a"],["D:/Blog/public/IO-model/index.html","c3aabc9b87d47633d26084e591d002a4"],["D:/Blog/public/IO/index.html","8886f2801fd9abc309b8a62f1546bfa8"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","7f2bb22fceea3a2d9b1496a887f29910"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","379486f87a69f25e4a655cd83bed3d7c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","bb6dc53c37ef5ab85c67b4349145d60a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ef4222f478b26fa2bbdd011eb55c9e4b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","2a573a7f2a9e6ac7001713104e161696"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","e04951dab7e250b65349afa3c61aef95"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1b4cc5cf7e173a0a2960e902240130b6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","02e9a8bf10aaa21d0a2b3b3e45ae00a1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","c94d3c0f3c385f8eef29b639a43fb0cf"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","619ad3f4a02a5baf471bfbaeb7037052"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","ca0820d221f03ebb2665490b48d97f9a"],["D:/Blog/public/Java-network-programming/index.html","85d0b51a09507ddb00878de1a3895783"],["D:/Blog/public/NIO-blocking-model/index.html","311a3b14b71485dcd1389b8401322937"],["D:/Blog/public/Native-method/index.html","d819181cd277439aef9d5e70f5e3cbb6"],["D:/Blog/public/Sandbox-security-mechanism/index.html","164d014b07c0dadf3ce532f81a1b07c8"],["D:/Blog/public/SpringBoot-startup-process/index.html","c3ece2f48c4d9e7161368fb77fc703f8"],["D:/Blog/public/Transaction-isolation-level/index.html","ae09db91b681c5c4ed9bd7f17a070028"],["D:/Blog/public/about/index.html","8109de76a642d1b407e7352068dbd35b"],["D:/Blog/public/adapter-mode/index.html","2f16e55dca281b6fadb99e39ca3827b7"],["D:/Blog/public/agency-model/index.html","202ef69b8b38ce381b8edf031afcdecf"],["D:/Blog/public/appearance-mode/index.html","5a83c7453ede50144b256931cbee9e3e"],["D:/Blog/public/archives/2019/01/index.html","57f37cc2a2136e6db07809227cd401a9"],["D:/Blog/public/archives/2019/07/index.html","7d0cb2e376e5eb9526615b58b98b7cdd"],["D:/Blog/public/archives/2019/12/index.html","3acd93caa74b2b7009dde2d3b801106f"],["D:/Blog/public/archives/2019/index.html","f779f7d924c8a90db3615eaffba74c87"],["D:/Blog/public/archives/2020/04/index.html","9311735244ec3f5660f92a31af2119b7"],["D:/Blog/public/archives/2020/05/index.html","4834859d5a9a6f0f2b14e3d25fa66dc0"],["D:/Blog/public/archives/2020/05/page/2/index.html","879e66ae82f707df7e6e0640d888d4e1"],["D:/Blog/public/archives/2020/06/index.html","9baff3766a7fef0a1bf4741509cca157"],["D:/Blog/public/archives/2020/06/page/2/index.html","98524c5701fa799d22c7df1302cd117b"],["D:/Blog/public/archives/2020/06/page/3/index.html","1c2448551a4f8281bb6e5aeee06348a2"],["D:/Blog/public/archives/2020/06/page/4/index.html","9ad650c9cd282a9168abefaa907eff76"],["D:/Blog/public/archives/2020/07/index.html","7bc5aa4bb80cbdd4d7cbe77481cef47f"],["D:/Blog/public/archives/2020/07/page/2/index.html","7303429b0a87c1cd9984021e9a072b47"],["D:/Blog/public/archives/2020/07/page/3/index.html","4e634f6ca038ec0b28aa4765b6508f2c"],["D:/Blog/public/archives/2020/08/index.html","8823eecf77d4750d4ec009f2eae00f09"],["D:/Blog/public/archives/2020/08/page/2/index.html","e89ed94bf31170913218e31940cab7d5"],["D:/Blog/public/archives/2020/08/page/3/index.html","a0236399cc8c679f6836c2df3115897f"],["D:/Blog/public/archives/2020/09/index.html","651f0278f5e0f632fc8f68e8eb08a245"],["D:/Blog/public/archives/2020/09/page/2/index.html","78f121729c511c13de7dd949bc8ebf33"],["D:/Blog/public/archives/2020/10/index.html","f5fd3459124269f6565e26d244ad0d43"],["D:/Blog/public/archives/2020/10/page/2/index.html","db545d584faa9ec7a3c90cf6d561eb1c"],["D:/Blog/public/archives/2020/11/index.html","0c15c80563fd0590f9b1827a52ab07ac"],["D:/Blog/public/archives/2020/11/page/2/index.html","365ed79de5e0a658bd893fbfe5a12e75"],["D:/Blog/public/archives/2020/12/index.html","54e3b90bb49d0b2f0b3ed634c32df43a"],["D:/Blog/public/archives/2020/12/page/2/index.html","a24c9091a688b1698ce60c12453b37dd"],["D:/Blog/public/archives/2020/index.html","37fe82e2c077d83577abbac9d6c77902"],["D:/Blog/public/archives/2020/page/10/index.html","c31197f1dd472d3df9c97355c923e38d"],["D:/Blog/public/archives/2020/page/11/index.html","79e32d9b28e5c63e713bc137f76e5651"],["D:/Blog/public/archives/2020/page/12/index.html","f324a0b727c4433f085c3936a3863839"],["D:/Blog/public/archives/2020/page/13/index.html","8575247c7c0f8a2c73dfd618df356338"],["D:/Blog/public/archives/2020/page/14/index.html","b7f5c39961a81a65f1e3c72ed4110c1e"],["D:/Blog/public/archives/2020/page/15/index.html","9fa8d91343852e9549c0e5147f1de9af"],["D:/Blog/public/archives/2020/page/16/index.html","d64892b1e82262933f6a161e195e92f2"],["D:/Blog/public/archives/2020/page/17/index.html","8ca39adf64495d888e47428d5fbae4f7"],["D:/Blog/public/archives/2020/page/2/index.html","fba97129d8366656a2a7ad5d75066aeb"],["D:/Blog/public/archives/2020/page/3/index.html","144e7bfb6acd9189db31f569220e3378"],["D:/Blog/public/archives/2020/page/4/index.html","fbafd861441b9a98112a142b7702936d"],["D:/Blog/public/archives/2020/page/5/index.html","0da9af7e47e035d98694c0e41d493116"],["D:/Blog/public/archives/2020/page/6/index.html","74a03dc2a86d72a22406d5fd4077cb8e"],["D:/Blog/public/archives/2020/page/7/index.html","5c2b0652aacb5d0d6597653427f198d0"],["D:/Blog/public/archives/2020/page/8/index.html","48fafdedb9e9e34bd2b564053dc3cb8d"],["D:/Blog/public/archives/2020/page/9/index.html","71e23b77cb17c58716a19326788c4b5d"],["D:/Blog/public/archives/2021/01/index.html","c44e5f518050342506b21d3ed3db125e"],["D:/Blog/public/archives/2021/02/index.html","3b30c2f58729786cd82ce1f43f8f7b25"],["D:/Blog/public/archives/2021/index.html","907d6406cedf38c44fe76241e9c55ece"],["D:/Blog/public/archives/index.html","1d27e3835d7142f5696c89b0c1ffcc64"],["D:/Blog/public/archives/page/10/index.html","aaf7554dd5816904619b885f53cc0516"],["D:/Blog/public/archives/page/11/index.html","d3d63c4163b3b46bfa0db44719a3d35f"],["D:/Blog/public/archives/page/12/index.html","6d1f228dc56673488af99865e3ec5300"],["D:/Blog/public/archives/page/13/index.html","ece8cb3a0e89230efd6f63f3e04b50f0"],["D:/Blog/public/archives/page/14/index.html","3230ca42dd446e4813b93137937960c3"],["D:/Blog/public/archives/page/15/index.html","a6a7816d7bc499419d23404a52eda190"],["D:/Blog/public/archives/page/16/index.html","06c305b43b5e7c98a43ef4fd941d6533"],["D:/Blog/public/archives/page/17/index.html","847eb86a6bac027e0f37b70a8eb23f8a"],["D:/Blog/public/archives/page/2/index.html","c21cb8979e4e0f82aaa3282fc55c534c"],["D:/Blog/public/archives/page/3/index.html","78dbc0af8d6c8b45ea73cb0689628b27"],["D:/Blog/public/archives/page/4/index.html","2853b61312455351e18dbb00b0cb16c6"],["D:/Blog/public/archives/page/5/index.html","4f98f8f87b371f95c8e1971fcc2122db"],["D:/Blog/public/archives/page/6/index.html","967fad2d0b14a3129ee645b2f29c27e9"],["D:/Blog/public/archives/page/7/index.html","75ea7859b162e0b5c10115be51b68dd9"],["D:/Blog/public/archives/page/8/index.html","5ec3f4c0b9c6f685ca7fd7960c5594ba"],["D:/Blog/public/archives/page/9/index.html","6dbb0de6f313c8d3fc073802f65fac79"],["D:/Blog/public/array/index.html","1390d141dc3883f77e286647de97be69"],["D:/Blog/public/automated-test-katalon/index.html","9f54ba50ed9c620004781cd7861ef484"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/index.html","052485d574dfd6ae767b775bc7c7ed02"],["D:/Blog/public/binary-search-algorithm/index.html","5235529c1032df882e2116c3ede11b42"],["D:/Blog/public/binary-sort-tree/index.html","50ca9bc417431d75e09be5a31806d883"],["D:/Blog/public/bionioaio/index.html","71e46f3b39fa40f9edafb834ea0edca8"],["D:/Blog/public/bridge-mode/index.html","b998fb24f4c54ee5cd93d3ee69ee9639"],["D:/Blog/public/builder/index.html","73bd2cc553d82d3c2094482bb5631273"],["D:/Blog/public/c-pointer/index.html","9390bdff121d8eeb37a56e3e140248d6"],["D:/Blog/public/categories/C/index.html","97d654cf838af25dcbfee0f0b2d484e3"],["D:/Blog/public/categories/SpringMVC/index.html","948d084351dbdfe80b188cb3d0229b9a"],["D:/Blog/public/categories/index.html","8544a87df6e9f68b64f9bacacc71c2fd"],["D:/Blog/public/categories/linux/index.html","66228f51dfa1dfd5cc5373da987b3215"],["D:/Blog/public/categories/分布式/index.html","babe1e5ce633fe801e7e1db58f79660a"],["D:/Blog/public/categories/分布式/page/2/index.html","ae8a197724fd5fa1b7978ca19c86011b"],["D:/Blog/public/categories/前端/index.html","5411a7aacf71ae828cdd0ca53ebfceeb"],["D:/Blog/public/categories/设计模式/index.html","287eac41b6e7cb4cdfeb2208d769fda9"],["D:/Blog/public/categories/设计模式/page/2/index.html","de64d1adfcd0c736a71d534b1413bed3"],["D:/Blog/public/categories/高数/index.html","20c36293caa66726592aef27d2b34df2"],["D:/Blog/public/chain-of-responsibility-model/index.html","351c5da657dfd3526fb02730680bfa16"],["D:/Blog/public/chinese-and-english-switching/index.html","22ef248f2ebcf369fd7bd3d2900ac9a1"],["D:/Blog/public/combination-mode/index.html","e8d53ba1b9e3c9532c7f281a198ae6dd"],["D:/Blog/public/command-mode/index.html","73f51693623eee71563f04e3ec76fc60"],["D:/Blog/public/common-commands-of-unix/index.html","15d1ad1d3aa30175bf533a3b319f73fc"],["D:/Blog/public/computer-network/index.html","6aa967014e6280fcce42be4e0d3c2567"],["D:/Blog/public/concurrency-principle/index.html","bd721b0307284885be04988e13697b9b"],["D:/Blog/public/continuous/index.html","f2dbee24a2e37c1174d3df9102cb09ed"],["D:/Blog/public/contract/index.html","a7a39fe00373e3cee6ccdc66315c526d"],["D:/Blog/public/css/octo.css","970ec6129f1bfdcb80b42852686b7f54"],["D:/Blog/public/cycle-structure-programming/index.html","e0fc2555e478c8693e746d4617c0d48b"],["D:/Blog/public/data-structures-and-algorithms/index.html","ecfbc82fd83d926cba70397ab28538ca"],["D:/Blog/public/deb/index.html","4214f481d1ae3f43f97b4463267c9144"],["D:/Blog/public/decorator-mode/index.html","63787bf4970ddd9a8f7e8c3507c158df"],["D:/Blog/public/definite-integral/index.html","3dfdc8368f9a4d821cff64b858868948"],["D:/Blog/public/dependence-reversal-principle/index.html","a33dfebaeffcd7c92c536e729e025f95"],["D:/Blog/public/derivative/index.html","ffeb6472f16fad6127ddd1d82923b58c"],["D:/Blog/public/design-patterns/index.html","b51e1727843a88d745be98bd55735339"],["D:/Blog/public/differential-equation/index.html","f62a487a81990f2a158e403fea5d70a0"],["D:/Blog/public/differential/index.html","3a2a7706fbf531b23a35dd56356386de"],["D:/Blog/public/dimits-law/index.html","95233e9cdfbb4efd9ce4708712307fb1"],["D:/Blog/public/docker-virtualized-container/index.html","fde3df00a5884e587e6930655434fe37"],["D:/Blog/public/double-integral/index.html","17bf62b9688a0af018745e605ee68310"],["D:/Blog/public/dynamic-array/index.html","abc69f30053430de04b05442d515c23d"],["D:/Blog/public/dynamic-programming/index.html","fd7617c42d0f89c49394f04d0192503b"],["D:/Blog/public/encoding-algorithm/index.html","be65ac26a86b2f8207c0e2173c4f35fc"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","babb60967bbc9a069a0123fb4e343b0e"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","92089f122c579a2531182cc955e2ae58"],["D:/Blog/public/factory-design-pattern/index.html","6865b3aa41f9e34b012fcc93e256fdd2"],["D:/Blog/public/file-input-and-output/index.html","46e0985a654fe8f8df42ef648d4f5c67"],["D:/Blog/public/flyweight-model/index.html","37d62afe2d0ef9687f0a34d1034a52e1"],["D:/Blog/public/friends/index.html","e9a0aa864910431505b38e27ee64e48b"],["D:/Blog/public/function-graphing/index.html","d3e04f6931e510f83ab900a73ba93400"],["D:/Blog/public/gateway-service-current-limit/index.html","940ce3fdbb9fbd01fe140a42b2432e26"],["D:/Blog/public/gc/index.html","0c3811ea96a1bf248857e7c350657ba9"],["D:/Blog/public/generalized-integral/index.html","564c5981f3ad820d533cf9d32c059935"],["D:/Blog/public/google8102e2f35ce9e391.html","9bb4db0f9d041ef344177fa7561d1c59"],["D:/Blog/public/gulp-compresses-static-resources/index.html","e47ba0e75655f34ddc7bc6cb94ae46c3"],["D:/Blog/public/hash-algorithm/index.html","a4ddab1fa61e378c592b28a4e74f3c92"],["D:/Blog/public/heap-sort/index.html","ef97e1bbbf1c5f0744187e5543682196"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","5014bd91a31446c1f1f21af96d638e6b"],["D:/Blog/public/http/index.html","7be814c58086ebc7c2b08982b4a5cbcb"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","f4a06cf87aff01450e96973f1848bc13"],["D:/Blog/public/index.html","ef3fac36053f69ee09c92325c0bd5fb5"],["D:/Blog/public/infinitesimal-and-infinite/index.html","aac618a29a8deff7425b1ddc829f12df"],["D:/Blog/public/interface-isolation-principle/index.html","d5f86551b4618793ff56ac72af2df568"],["D:/Blog/public/intermediary-model/index.html","8053dfd8bdb7817280c863a3327783cb"],["D:/Blog/public/interpolation-search-algorithm/index.html","8d3ff987de3ec62452a34eb925023ecf"],["D:/Blog/public/interpreter-mode/index.html","e1667bdfa55cfa0bc9f39fb42f3b5123"],["D:/Blog/public/introduction-to-computer-network/index.html","f2f4f21d3b3351d4598d69c5557d493f"],["D:/Blog/public/introduction-to-operating-system/index.html","89c7f76a5fc4a8b04f73d5063f268bdc"],["D:/Blog/public/inversion-of-control/index.html","e794726d0f2aef19c16f36b0536613ed"],["D:/Blog/public/io-Interview/index.html","e8e0cf9312d824c83d948573b484b378"],["D:/Blog/public/iterator-mode/index.html","d5eb3c7a66b9f61bd331ca74adad00ad"],["D:/Blog/public/j2ee/index.html","96b05a459dab2b39dd9f7413a878bdd6"],["D:/Blog/public/j2se/index.html","6733805e03e99839c70ad773d9d069c4"],["D:/Blog/public/jdbc/index.html","4697b931d1ab0cdf57b2dfec05c7cf6b"],["D:/Blog/public/jdk/index.html","956e922a29901555df8bf596fa8d6943"],["D:/Blog/public/jmm-memory-model/index.html","4e2572500bb1e62d2661d3e64520911c"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","746af5e04c61afd9e8323038daec92d8"],["D:/Blog/public/jvm/index.html","c9b498e4bdc2e111b4aef1c2d8c24c9d"],["D:/Blog/public/law-of-robida/index.html","ab8d089e5c0e162192cd82b24996a28d"],["D:/Blog/public/limit/index.html","a312e1fbed8d7d0adaaf723f6ac07873"],["D:/Blog/public/linear-search-algorithm/index.html","9bf96c6bdf42bb3e7f26470631e60d4c"],["D:/Blog/public/link/index.html","83562a869462ca56294f5e9f0a9062e2"],["D:/Blog/public/linked-list/index.html","9257e396bf76b0b8a10272509030efac"],["D:/Blog/public/linux/index.html","567bc889e987213573fd60d70a40543a"],["D:/Blog/public/liskov-substitution-principle/index.html","8a2abb2cf734fe05daca014a27afd98c"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","20bb081de94323723fbf12e1b8fa8634"],["D:/Blog/public/maintenance-1/index.html","a729c00a5db04c104e271183f85063c2"],["D:/Blog/public/maintenance-2/index.html","c7ba649479ba873b6d206603a13f10fe"],["D:/Blog/public/maintenance-3/index.html","3b12376552f10a098426b35d926b958e"],["D:/Blog/public/memo-mode/index.html","d037eb7fbe9ff53b3e110ba3e039976b"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","53d3ceed77b4a37f3cfa5769431e6bce"],["D:/Blog/public/multi-function/index.html","34848914dd2950976b207058a2d4301b"],["D:/Blog/public/multithreading/index.html","e4217d895a191836d5779dca8044cd7f"],["D:/Blog/public/mvc/index.html","1b8995373636217a3947f3f64fd83b6f"],["D:/Blog/public/mybatis/index.html","86c669ddd97bc622fc32ee2886e4e853"],["D:/Blog/public/mysql/index.html","7fd4e616b41ca94f6ad6635822cddc78"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","00c3afeb9163e83ada539c7a469067b7"],["D:/Blog/public/objectoriented/index.html","cd0767ef7fadc9d6e0e5ba99bc86151e"],["D:/Blog/public/observer-mode/index.html","610fdc6fbbbd2c6ee74701b3d27ee825"],["D:/Blog/public/off-heap/index.html","bfb4941b86cb6709f54b977ef18ff7dc"],["D:/Blog/public/operating-system/index.html","5a16dd04fa295edacd3d4eeac6224fbb"],["D:/Blog/public/page/10/index.html","bbdc4ad419c3e5b9fbad86abb1a88f1a"],["D:/Blog/public/page/11/index.html","3b15118789b95ab313fc42873e3236a7"],["D:/Blog/public/page/12/index.html","cb4aa818af4e90751110d72c72a2be06"],["D:/Blog/public/page/13/index.html","77b6152d8e367e81a23fa0b30c3b83cb"],["D:/Blog/public/page/14/index.html","9483b467b7c7d7a395733aa555c0968a"],["D:/Blog/public/page/15/index.html","9e31c0e8cc85cc9f023e13218b675143"],["D:/Blog/public/page/16/index.html","41726163eddc2d4edba28cc2aeaf478c"],["D:/Blog/public/page/17/index.html","d2f5b5fea9ea6592543bef788b8615b6"],["D:/Blog/public/page/2/index.html","cbe9375ade67095c82e4a0006fcd1220"],["D:/Blog/public/page/3/index.html","4f604184a4a8e6044fdcd241f5d00799"],["D:/Blog/public/page/4/index.html","cdbe32ab04452c93a937b9ed5dcdae4d"],["D:/Blog/public/page/5/index.html","a83fcc41b7e8a32641b7bb0b27772693"],["D:/Blog/public/page/6/index.html","79c52f118e3108e92cbd1c5767985199"],["D:/Blog/public/page/7/index.html","9f6970ef7c2380c7550e398fa7b4dff0"],["D:/Blog/public/page/8/index.html","16b8f966318b7ddebcc1a3e429649a43"],["D:/Blog/public/page/9/index.html","603a3d41e6fc35e49543de9625d38751"],["D:/Blog/public/palindrome/index.html","81e0ac9954bf321618dbe140075d2a3a"],["D:/Blog/public/partial-derivative/index.html","3bc2d71d2a70d5717104bf5a48ff6a62"],["D:/Blog/public/pass-by-value/index.html","823969da55befa7cf2847406cf59f695"],["D:/Blog/public/pictrue-bed/index.html","d01895f2f522dbd0cb22caeb6a7198da"],["D:/Blog/public/principle-of-opening-and-closing/index.html","6227582cbfc436e1bb64da974debb196"],["D:/Blog/public/principles-of-computer-organization/index.html","b5864fb23ca95139edecbccfda25356a"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","6f296fbd5d1c60b27d7247a51d90f7e9"],["D:/Blog/public/prototype/index.html","bdeaa620b2ac82507086c74268604175"],["D:/Blog/public/queue/index.html","982e6a724801eddcdb2fbd0f3725274f"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","ada526e4de926dfe5b19c4aaf9e72c1c"],["D:/Blog/public/redis/index.html","f182efa49371432ded825b4322938db7"],["D:/Blog/public/reflection/index.html","3cdac9293084c2293648d824f9f0eea2"],["D:/Blog/public/resume/index.html","0e08b664ae226ac5879559400b7e253a"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","582082c08968543e6e7570866419a603"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","619bc461d63cd2e3ac8b9b15835fbbb6"],["D:/Blog/public/select-structure-programming/index.html","5ebca10d1a1180ec32b6692ccbc00746"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","5b85d4d905f97ea8ea4dc4b538e0eb4c"],["D:/Blog/public/sequential-programming/index.html","1444acc1732b16055ceabfc4f66103d8"],["D:/Blog/public/series/index.html","57644c5dcef4315fe99dde13651b6a10"],["D:/Blog/public/single-point-login/index.html","278fba27c8d5114811db4fca0bbadd50"],["D:/Blog/public/single-responsibility-principle/index.html","387ab904b146230d6b79831876bfb0ff"],["D:/Blog/public/singleton-mode/index.html","23d1d58ee074de70cea551caaf3ec594"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","c52c32c4404e06c109e32485864719fa"],["D:/Blog/public/sparsearray/index.html","aecd8ba7716ceed9a32bc9a68d529eb2"],["D:/Blog/public/spring-architecture/index.html","2cee512e5494737ed110dd62f89cebe1"],["D:/Blog/public/spring-relate/index.html","8320ac7fc8ecdc5db3634658d5ec3c28"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","46e2cb230681150ef269f7aeba6c926b"],["D:/Blog/public/spring/index.html","ee99a958c4e48016ef1d430d122799a1"],["D:/Blog/public/springcloud-alibaba/index.html","aa1da28d72ef081be5a582b27c64cea8"],["D:/Blog/public/springcloud-bus-message/index.html","ff34dd86ff216ed74c1f632360fa8422"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c3c37f72ed392856465b474934fff066"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","89d377c81199b69635675f1afc53e666"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6ea9dc2877973866d2dcfd3107c207d6"],["D:/Blog/public/springcloud/index.html","0e5aff0f455cd77307bba98d1bcaa36b"],["D:/Blog/public/springmvc-environment-construction/index.html","a09bc6e9744244b22c74c64e3b75c6cc"],["D:/Blog/public/springmvc-work-stream/index.html","5fe6a2a02347cf452168d9c582ad61dd"],["D:/Blog/public/sql-injection-attacks/index.html","b74fcadef441c857c317a7b499742618"],["D:/Blog/public/stack/index.html","e5b981faa89c59927a984c965a092095"],["D:/Blog/public/state-mode/index.html","decd9b0854691a13b29cff054c64ce3b"],["D:/Blog/public/strategy-mode/index.html","9e4f792978a29541a34a9ec01cd56b8a"],["D:/Blog/public/synthetic-reuse-principle/index.html","322eb3f400208a9dd7ed434d9c4de043"],["D:/Blog/public/tags/C/index.html","30d0fd72e6e0f046a75491285a6b6e82"],["D:/Blog/public/tags/C/page/2/index.html","7a28830343884dd979dfc134ab2babbf"],["D:/Blog/public/tags/Concurrency/index.html","24579a063102c2a36a5b5096c900cdf8"],["D:/Blog/public/tags/DesignPatterns/index.html","f32db2c1cba817ecdb86a9f45bfed7d9"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f777b1b63688eec416dee34107c75748"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","cf9d7e950d31e250fc05b594b30c84a9"],["D:/Blog/public/tags/DistributedMicroservices/index.html","1112688eae214b88dfe1dd447a154fef"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","a2823b044511560f96b3bd9acbd91d77"],["D:/Blog/public/tags/Interview/index.html","e4076626ed674445a7d580c689b0260b"],["D:/Blog/public/tags/Interview/page/2/index.html","9c270375f4940115198b1b7ab9a846f5"],["D:/Blog/public/tags/JVM/index.html","2c9d90a057f2901de012c4f4845eaaf0"],["D:/Blog/public/tags/Operating-Systems/index.html","a0fda11c8c3186d8865bcaa425bcf2e3"],["D:/Blog/public/tags/about/index.html","e3f158b3363a7dacf692e254f00c0410"],["D:/Blog/public/tags/ad/index.html","c95abdafe2d8f371188b96a345929ba9"],["D:/Blog/public/tags/algorithm/index.html","b4b4c0de4d36ecf81f96fa805454c963"],["D:/Blog/public/tags/algorithm/page/2/index.html","e772034b20865fe94d6c8ea6e10e1a6c"],["D:/Blog/public/tags/docker/index.html","9682886cf0f4fa32bc1627b7812fb6cd"],["D:/Blog/public/tags/frame/index.html","ab9146da3f73538983c46ffd6742e24a"],["D:/Blog/public/tags/front/index.html","c85ea0793c2e0aa574f9f918a4357663"],["D:/Blog/public/tags/index.html","29a774b64585bdee2f9e251338f16d7e"],["D:/Blog/public/tags/index1.html","61dfb32d5f5a04e75433c6b1caa3b9db"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","9f9c6b04303c9bf003089d0ec8ad840f"],["D:/Blog/public/tags/linux/index.html","386aaaec08e9de79f1c09a4e8db876e2"],["D:/Blog/public/tags/maintain/index.html","271735faf1bed5bb63cc435ffdc018fc"],["D:/Blog/public/tags/math/index.html","d962df70b2c7eff57bb5d6e79a81bac2"],["D:/Blog/public/tags/math/page/2/index.html","1bff9a525106ccdd713a887cf7413a46"],["D:/Blog/public/tags/network/index.html","85f8b3d74c41dd83f960346d8cedb12b"],["D:/Blog/public/tags/project/index.html","2b850199e86e98ec0384ca43e88dd8ac"],["D:/Blog/public/tags/resume/index.html","937317e66f0fe9a924f1096512b615ff"],["D:/Blog/public/tags/safe/index.html","5fb4b0c3b8df909c24bc1190113ed23b"],["D:/Blog/public/tags/sql/index.html","17ac054a12fff9f469a496b98abc4acd"],["D:/Blog/public/tags/test/index.html","6ad4b5a9dbe3e4d61d22c898c62c69d8"],["D:/Blog/public/tcpip/index.html","89a46873824eaabafe4078ec5d99f921"],["D:/Blog/public/template-method/index.html","a80dbe4fc61125f7a41aa4bd69c96da4"],["D:/Blog/public/test-case/index.html","f1d6687589b1aac0d46c490198f6ce5d"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","777eb4747cdae8ad59769a473872a160"],["D:/Blog/public/thread/index.html","de3879f9cbc117574f7c86ff66b7ffc2"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","8c81d86b2f92de7aee5478e4ed271caf"],["D:/Blog/public/ubuntu-set-ip/index.html","9b7838c128d7f1251c846598a3031c28"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","9d593bb4cb7eb6543e38a4593f400cf8"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","df65c0bda91ce65575d58fb935434b19"],["D:/Blog/public/users-create-data-types-themselves/index.html","f101336bd166a65f41b93007f29b4238"],["D:/Blog/public/visitor-mode/index.html","0f684fecfc838361f574cf8533243f85"],["D:/Blog/public/xml/index.html","5ea5f5f503d285335a6f2478ad993e1e"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","d8e53768b088399d4587da1a586ccf21"]];
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







