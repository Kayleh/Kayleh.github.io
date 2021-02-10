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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","2c49aa26c4ded38d7ff80ccb8d4f9b55"],["D:/Blog/public/AIO-blocking-model/index.html","1e5fc411e8ec2d3fed55947e9065e352"],["D:/Blog/public/BIO-blocking-model/index.html","4096379d9797318511e1b08f22af798e"],["D:/Blog/public/C-algorithm/index.html","12d7a72c53a2432f35c2491e7a13ed88"],["D:/Blog/public/C-programming/index.html","82dbc56e1d011cdf373ffd540a272fbb"],["D:/Blog/public/Good-use-of-pointers/index.html","a4a11a4ecd8ee2e6a82efe405e02136c"],["D:/Blog/public/IO-model/index.html","18650910ce85df9cb72e74c7b54f3e9b"],["D:/Blog/public/IO/index.html","c24650036ddea6fe1fd8d62062f1a954"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","8de0f756d30fe9455165fc3fdc295f9f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","283dac2f6c11a059880296d0566e0017"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","3ab341e6558cacfba2d6e6b8b67bd0d9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ffc83d2ce5f587749f600c04934d0e30"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","eb0c2339499258126d35e53c22a73d5b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","f6e9f098bb0781afcbcfddf3ae4c7b23"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","48a79a01ac8316c395cb7ec220b41c16"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","54e8ffd0ae24f0d8a23d0adcd73647a4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","873714376851d7b914fbfecf1edb63ba"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","c86ef47da5399b4351861008fd8c203a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","fd53aa34db33453c68e888c9235419e0"],["D:/Blog/public/Java-network-programming/index.html","5d67d3b7bd6260e40a223d285719b7fd"],["D:/Blog/public/NIO-blocking-model/index.html","0d3261d032226b5333d2b75e578b036a"],["D:/Blog/public/Native-method/index.html","dfd079448cf5e4d01387136521380acd"],["D:/Blog/public/Sandbox-security-mechanism/index.html","a1f22778488d9e1fb293c47fbda82e5a"],["D:/Blog/public/SpringBoot-startup-process/index.html","23ad03a164fcaa8d0a20ebe170c82f68"],["D:/Blog/public/ToDoList/index.html","69b892afc54c44f1c2ff11970a02fae0"],["D:/Blog/public/Transaction-isolation-level/index.html","8f242c36284a8f059953181ceca6cd1c"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","b38193b3bf75ce293457898e3755ff6d"],["D:/Blog/public/agency-model/index.html","832768db6b34b3e1de0ad1fcbb835598"],["D:/Blog/public/appearance-mode/index.html","52208345c8aeda292f234af9adf8d3ac"],["D:/Blog/public/archives/2019/01/index.html","675c7f931c0cd710e4951741924955ca"],["D:/Blog/public/archives/2019/07/index.html","ed73c47e9b9acbeae20dede8e390552b"],["D:/Blog/public/archives/2019/12/index.html","5df82f83f8bb4a9abce955558e3fa0f7"],["D:/Blog/public/archives/2019/index.html","47046719d3870f21b8409a729c9f81e6"],["D:/Blog/public/archives/2020/04/index.html","7c3e7d128b07074a329c382f62661ab9"],["D:/Blog/public/archives/2020/05/index.html","4e54012272a2251aa82734936dd95afc"],["D:/Blog/public/archives/2020/05/page/2/index.html","0c5eff2d553e86c754b2ba4a59ededdf"],["D:/Blog/public/archives/2020/06/index.html","ba78a27cb598c3a3f7c22a6914605240"],["D:/Blog/public/archives/2020/06/page/2/index.html","baad364f645ae6c0b5729502b0d1bd2e"],["D:/Blog/public/archives/2020/06/page/3/index.html","8affb00ba0289a6734ab78c9ad6cbaf3"],["D:/Blog/public/archives/2020/06/page/4/index.html","3cb4415940b0de89d1cf83f480a43703"],["D:/Blog/public/archives/2020/07/index.html","7fe8a36a69c117a22205350e1c0d69e9"],["D:/Blog/public/archives/2020/07/page/2/index.html","d974afd4189e768a10b7f59ce660caa1"],["D:/Blog/public/archives/2020/07/page/3/index.html","535d7f472bacefe8f32eb3bf094daa22"],["D:/Blog/public/archives/2020/08/index.html","65278a573090fef480927d8253d651bf"],["D:/Blog/public/archives/2020/08/page/2/index.html","bbd443c1de8448236677c84cfdeec1b4"],["D:/Blog/public/archives/2020/08/page/3/index.html","23c566db4f4d3c09228899d554e1d9b0"],["D:/Blog/public/archives/2020/09/index.html","c24797f2080fae4ae63e12373726bc0f"],["D:/Blog/public/archives/2020/09/page/2/index.html","5b5dd3fbbc02ca9228cf64febeb18bbe"],["D:/Blog/public/archives/2020/10/index.html","b57b42cba51ad319cb1971e290db486b"],["D:/Blog/public/archives/2020/10/page/2/index.html","9cffdaa7c5864e954e4713357be4933d"],["D:/Blog/public/archives/2020/11/index.html","b35177233f98516920be56faee9d17b7"],["D:/Blog/public/archives/2020/11/page/2/index.html","4832dfd04747e68112e483281ef98270"],["D:/Blog/public/archives/2020/12/index.html","0f90250b2d5fadf1563228ba342f4327"],["D:/Blog/public/archives/2020/12/page/2/index.html","1273a9ed669ec65635c069ac0fa912b0"],["D:/Blog/public/archives/2020/index.html","80e5cbb7492ea2feca112a7adc81a5a2"],["D:/Blog/public/archives/2020/page/10/index.html","415bd5d9eb98144daf256461d9b0de50"],["D:/Blog/public/archives/2020/page/11/index.html","38d249691a8dffad9ed98a80b9ec582a"],["D:/Blog/public/archives/2020/page/12/index.html","31e449e2230b7dfcf1b30b1937c84522"],["D:/Blog/public/archives/2020/page/13/index.html","98a73a75bc8d2d35b5f0d3458b53e764"],["D:/Blog/public/archives/2020/page/14/index.html","b419e3d29adbf3051b2094439b25bebf"],["D:/Blog/public/archives/2020/page/15/index.html","bddf79e18e9869c933e192df4cca5d52"],["D:/Blog/public/archives/2020/page/16/index.html","6d44ff4e565a8d92ce642310e34539df"],["D:/Blog/public/archives/2020/page/17/index.html","84117eaee6eef4bec0c982c87b01147d"],["D:/Blog/public/archives/2020/page/2/index.html","4eac8abbc2d697510f2f297c729640ae"],["D:/Blog/public/archives/2020/page/3/index.html","7170ce4fa4cdfe20e2e0bda847ea3987"],["D:/Blog/public/archives/2020/page/4/index.html","d3c3746f3b7e65867c7b2f9792f94795"],["D:/Blog/public/archives/2020/page/5/index.html","1f97fc3bab884c999de06d7ef9652bd3"],["D:/Blog/public/archives/2020/page/6/index.html","b5819d93408d7a3a20f95be1c25dc154"],["D:/Blog/public/archives/2020/page/7/index.html","bf9694528e5753fa9c665cec62df6bfc"],["D:/Blog/public/archives/2020/page/8/index.html","78caec069da184662580435ea8008940"],["D:/Blog/public/archives/2020/page/9/index.html","4324bc5d2ef0843db7c39f59a5c53c3c"],["D:/Blog/public/archives/2021/01/index.html","77470f9bed86ff3ce657f5bd3103407d"],["D:/Blog/public/archives/2021/02/index.html","cdad225d7fca11d8c0b5b05eaedbcc37"],["D:/Blog/public/archives/2021/index.html","0db4a4e7c8806954c689cc04c4ab242c"],["D:/Blog/public/archives/index.html","29e28bcdadbf70fb0c0a93efed72cb75"],["D:/Blog/public/archives/page/10/index.html","91f103b24a165d93a8fa420072e1e868"],["D:/Blog/public/archives/page/11/index.html","1cded5aa3e4d71ab7e2c34a03dc820cf"],["D:/Blog/public/archives/page/12/index.html","76a6a05c4e50de97843d28cc731e7eb8"],["D:/Blog/public/archives/page/13/index.html","384991f1e8d627f914864dedd7db9fc2"],["D:/Blog/public/archives/page/14/index.html","d8e808ee060830e0a554878601e79867"],["D:/Blog/public/archives/page/15/index.html","e21605372e64670baebb38b0d161cc71"],["D:/Blog/public/archives/page/16/index.html","3d1ca54aa91994d14cc598ed555a550b"],["D:/Blog/public/archives/page/17/index.html","f6ea8a4b07362e24471d9047559d1d93"],["D:/Blog/public/archives/page/2/index.html","f8d2c5743ba6f45a87ed4dcf002665aa"],["D:/Blog/public/archives/page/3/index.html","c1fabdf7bba802e8f187c8576ed2a1af"],["D:/Blog/public/archives/page/4/index.html","b67162378776cdce3a72c1861709cc19"],["D:/Blog/public/archives/page/5/index.html","c4ec6f9a292ca102f31ca4b46aba5342"],["D:/Blog/public/archives/page/6/index.html","9df1655f2624e8402007e83c4330532f"],["D:/Blog/public/archives/page/7/index.html","8e67432d046e21aafa985caa4c27a5f1"],["D:/Blog/public/archives/page/8/index.html","071300ca0c64a999ce7c597675270c85"],["D:/Blog/public/archives/page/9/index.html","93b5ceaf703e3de09b3f674f15dd3b25"],["D:/Blog/public/array/index.html","b3145cc2d4a4c43124e65a27fafe700e"],["D:/Blog/public/automated-test-katalon/index.html","a0793c866b7d49d64255950e6c6b192f"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/index.html","df4869045d7a8d48aad475afd8c935da"],["D:/Blog/public/binary-search-algorithm/index.html","b580dad821c961472a0453aacb0c89b0"],["D:/Blog/public/binary-sort-tree/index.html","b9f1e18e10ddfd5519d314c943aa94ab"],["D:/Blog/public/bionioaio/index.html","552c77906b639b014849ef23e227f4ad"],["D:/Blog/public/bridge-mode/index.html","156f3066c58b22cc60e47a7a7926fd8b"],["D:/Blog/public/builder/index.html","63ee77759efdf0b90a7aed1ec62a6701"],["D:/Blog/public/c-pointer/index.html","588b3615bdf6b3106c2d560f29d3fa55"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","9c055ade2738133382cdc3e182ac06cc"],["D:/Blog/public/chinese-and-english-switching/index.html","4ddd08ee9555fdb3b92e7ecda23639e0"],["D:/Blog/public/combination-mode/index.html","b7b8a7e0607ed7a75a507c2f694df5cb"],["D:/Blog/public/command-mode/index.html","282c561a8840c0a773502d0c4c14c475"],["D:/Blog/public/common-commands-of-unix/index.html","1db503a8407a10b631382c9400f804d5"],["D:/Blog/public/computer-network/index.html","40526a9660b7a4241bf39c7ec8b49bf4"],["D:/Blog/public/concurrency-principle/index.html","18f4c4d7ffe9c426d7a1ef330a891bc2"],["D:/Blog/public/continuous/index.html","18aefb8d57fb5bc61c1724161b208070"],["D:/Blog/public/contract/index.html","2522894348491d8a57ff22cbfacf7663"],["D:/Blog/public/css/octo.css","674e83ef0d4abd8ec3766f1c53b416d4"],["D:/Blog/public/cycle-structure-programming/index.html","85541a9e41494675c8300f3e57ab114b"],["D:/Blog/public/data-structures-and-algorithms/index.html","85bdf516a903c3d978540cbd049a317b"],["D:/Blog/public/deb/index.html","1b2b07925b9df6266f7e465ab7714733"],["D:/Blog/public/decorator-mode/index.html","481a7ec8e03ce4629a96eacb54782acb"],["D:/Blog/public/definite-integral/index.html","00a284b0d420e25cc2dd2e569c7d917b"],["D:/Blog/public/dependence-reversal-principle/index.html","6794a6a4ffdd92976cddc23aca5e7794"],["D:/Blog/public/derivative/index.html","c2b4b87ace31acace650b3cc782488c6"],["D:/Blog/public/design-patterns/index.html","06d93ccdfaa6696c888de4958688a073"],["D:/Blog/public/differential-equation/index.html","372c8f50f62d8a477027a262c6f6162f"],["D:/Blog/public/differential/index.html","2a98585c45f5692382680abff8c1e19c"],["D:/Blog/public/dimits-law/index.html","4a49fb315cdd716cdf37363c66bab3b1"],["D:/Blog/public/docker-virtualized-container/index.html","f3764758fbab4f88d885f4e3fe5d211f"],["D:/Blog/public/double-integral/index.html","b8c40e4625e1c1b157901c4303224ec8"],["D:/Blog/public/dynamic-array/index.html","db41a3ef175b37458869704c57b412e2"],["D:/Blog/public/dynamic-programming/index.html","8846dab21c512c502e42b851addeab26"],["D:/Blog/public/encoding-algorithm/index.html","7ee538cb4014ee36cbd481b67d265337"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","1f753a44969b54d2e8edde5291fe4c88"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","db6a331ef84769631dc2850ff65e8e0e"],["D:/Blog/public/factory-design-pattern/index.html","9546bf7834aeb357adfb85602c7cf967"],["D:/Blog/public/file-input-and-output/index.html","ed45fbfe1fc5f21bc3905f4ceb688b0c"],["D:/Blog/public/flyweight-model/index.html","3f91eb4439b7368e31612459a196baf3"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","e566c185507af91c6c19ac3239992ce4"],["D:/Blog/public/gateway-service-current-limit/index.html","7d75a4843df263c51b723fc6dbcaca69"],["D:/Blog/public/gc/index.html","fe3fa5871079fbd02e425d05575c41b8"],["D:/Blog/public/generalized-integral/index.html","d49fee3bad3209e23946056ca5f0d275"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","caa10fa8e2ad9d4a02e11e27a9df3ea5"],["D:/Blog/public/hash-algorithm/index.html","3914130af3223b7f1f87131a14b0ea7c"],["D:/Blog/public/heap-sort/index.html","08821a40803e0305176952282d9dd11e"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","e44ff0d66d4bdaf0578668d13e279cde"],["D:/Blog/public/http/index.html","66dd924288d738bbbc68e00a517174f7"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","71f98ae4e280f50b47f34e8cf95f82ff"],["D:/Blog/public/index.html","305e81cfb0ac3490193a8252bcd16e16"],["D:/Blog/public/infinitesimal-and-infinite/index.html","a7cfc5956dce2488ad8ddf5b3067185d"],["D:/Blog/public/interface-isolation-principle/index.html","971c840530245011426e985f3490fc77"],["D:/Blog/public/intermediary-model/index.html","b968b77b18d19d7d958fca68731e5178"],["D:/Blog/public/interpolation-search-algorithm/index.html","b3446025a1c139d833427919ba7ee25d"],["D:/Blog/public/interpreter-mode/index.html","12bce34347b2505e2c519771a8043755"],["D:/Blog/public/introduction-to-computer-network/index.html","c61a888565d79bcaa2204eecb8de192b"],["D:/Blog/public/introduction-to-operating-system/index.html","b0b6e2cc1ddeb7be3a5b0a3f53ad9a85"],["D:/Blog/public/inversion-of-control/index.html","61b232e84787618977c2f46a1426fbda"],["D:/Blog/public/io-Interview/index.html","51dbf29017a161b96b1d8401d802e824"],["D:/Blog/public/iterator-mode/index.html","067f2c81f3b05b8efb567a70ff99fb1f"],["D:/Blog/public/j2ee/index.html","df06b261f3600dc1ae439fcb9b4431ae"],["D:/Blog/public/j2se/index.html","43d593a9a2130c12988753e3587d84fa"],["D:/Blog/public/jdbc/index.html","aeafa82cb38f72af86bded3214049738"],["D:/Blog/public/jdk/index.html","2c1b4eec15576853b0261601f2456cb2"],["D:/Blog/public/jmm-memory-model/index.html","b72e48a0aea8d0c72a3fef1d8beb93c5"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","dd78219fd9dda3f41aa2732f7fa9f236"],["D:/Blog/public/jvm/index.html","ef494ae36923e37c930b0a3e21bb2d17"],["D:/Blog/public/law-of-robida/index.html","f34fa1408ea0da980a38a71c05fb6439"],["D:/Blog/public/limit/index.html","66071c232861944ea3a2ad8867d55ee1"],["D:/Blog/public/linear-search-algorithm/index.html","908c3c5fa5c89c5d9e018a3a1a9f2ff5"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","1e678bb7ea437002629f4ef1dbb11e32"],["D:/Blog/public/linux/index.html","7102199d5ac2a47e4ee6d76a3c394cd9"],["D:/Blog/public/liskov-substitution-principle/index.html","e0bc4ba2399ff29cc9d25f6d3105402d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","ad6432d820ab1978e10bf9498696fefc"],["D:/Blog/public/maintenance-1/index.html","e3b25ae9e40f4ab082fc1e646ed28df3"],["D:/Blog/public/maintenance-2/index.html","3203ffee292ba79745d52211860e333e"],["D:/Blog/public/maintenance-3/index.html","5a582d95eb20d06fb4b04084e98c3afc"],["D:/Blog/public/memo-mode/index.html","c0922f796dfd7663489cfe47bab4f594"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","4c35f540fd8a1115670724dc88c332fa"],["D:/Blog/public/multi-function/index.html","b8aedefd30d5807885b06f8b5b415e87"],["D:/Blog/public/multithreading/index.html","0c95a58ed83e8816f3d6929fcbc1ef44"],["D:/Blog/public/mvc/index.html","7129db7f5ef225980e9ec59a468fce88"],["D:/Blog/public/mybatis/index.html","4941597a63f4c252e5fc3f22fa075177"],["D:/Blog/public/mysql/index.html","ad846b8874979c68a34e9e1a98b6112f"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","354bb1bc89f2292bdd449eacce30f2f1"],["D:/Blog/public/objectoriented/index.html","e430bec8a890bb6c78ac296a0b1b645e"],["D:/Blog/public/observer-mode/index.html","b257b884287e479048314266a7397230"],["D:/Blog/public/off-heap/index.html","087938f234a857a596d09650ff40a1ad"],["D:/Blog/public/operating-system/index.html","c893ceec8f4768256bc4b36d38398057"],["D:/Blog/public/page/10/index.html","8a69657b2b9a2d7517c3a403fd5b1257"],["D:/Blog/public/page/11/index.html","7ba6145faef4e09d43ef5e18796fc511"],["D:/Blog/public/page/12/index.html","1088a5bbaee908b8fe24d640a9572507"],["D:/Blog/public/page/13/index.html","c2b08ca906bc70a546672b5a0e9a7813"],["D:/Blog/public/page/14/index.html","d8f8f6a28e9d3a7fa1b7115c1a46ddbe"],["D:/Blog/public/page/15/index.html","faaf42f8e64e0bcc05d4584edb68039f"],["D:/Blog/public/page/16/index.html","ab89c6891d3d10dd4d0ee10f73e2cc86"],["D:/Blog/public/page/17/index.html","720039d81bc7fe5cb361e1e08c44d731"],["D:/Blog/public/page/2/index.html","5e285eafa043cf4b13d638bafafc0cca"],["D:/Blog/public/page/3/index.html","e26a820721a4e7bcce7ba490011bb116"],["D:/Blog/public/page/4/index.html","bc82ff53d36bcbd2aad0d2093ab25c5d"],["D:/Blog/public/page/5/index.html","9a535e6ec31c1bb6ea2591fafdbc820a"],["D:/Blog/public/page/6/index.html","bc9bfb143fa8cb276a7f102070555235"],["D:/Blog/public/page/7/index.html","10ff32e6b57953240b51e382afee88cc"],["D:/Blog/public/page/8/index.html","8182933bf3966ae78c746d1d1a245826"],["D:/Blog/public/page/9/index.html","7a45893c0a8286b8bfd1e0a905cdec4a"],["D:/Blog/public/palindrome/index.html","9143d0e9186d2663dc238e81a7d17f98"],["D:/Blog/public/partial-derivative/index.html","c4f32d5d8e5a98e4cbf76ca3e53f099d"],["D:/Blog/public/pass-by-value/index.html","75d1ed36d23f8e58fdfa4724f9542bd0"],["D:/Blog/public/pictrue-bed/index.html","0a736846fb28abfbe2be351542f4b9ab"],["D:/Blog/public/principle-of-opening-and-closing/index.html","ea6634f0e222959530ee4ccd341976cb"],["D:/Blog/public/principles-of-computer-organization/index.html","beab78a1c6464d6c71bf84b0962957d8"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","0f90d2671219521d48246f35d5db3958"],["D:/Blog/public/prototype/index.html","d487527902e6a81963eabeb295c756f6"],["D:/Blog/public/queue/index.html","2135f83be3aafebfa65ac472d02d2c4b"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","91619659140fa8d91e780799fa763989"],["D:/Blog/public/redis/index.html","14d5ee3ca1652ee5741b8b295d35c4a7"],["D:/Blog/public/reflection/index.html","3cdbd8212c6850e79a6b34b361559a6b"],["D:/Blog/public/resume/index.html","ef060606378cd72c5a3e87ce8924716b"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8c9e56b3ebc61fdf2ec6d860ec989a40"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","f6823672217556ea089c8dc45e62bba4"],["D:/Blog/public/select-structure-programming/index.html","6409e04ab01830962fca16f87b992071"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","37a0fbf0f812846268121b67fc6c35fa"],["D:/Blog/public/sequential-programming/index.html","a1e257e631c715de256c6f62da970795"],["D:/Blog/public/series/index.html","afdc61aca3fd69906be5d946a2cb0b06"],["D:/Blog/public/single-point-login/index.html","9c3af37818c5cbbde3c45106e0dacd71"],["D:/Blog/public/single-responsibility-principle/index.html","197b31a52f6ed695bd35b8f9a1e4a237"],["D:/Blog/public/singleton-mode/index.html","34625e92e9d198b68abeb44bc6071493"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","0fc77db2e60f45b30b7cea88a3654bcc"],["D:/Blog/public/sparsearray/index.html","d3c308195cbf790f25182ff510e4e598"],["D:/Blog/public/spring-architecture/index.html","1c5b51a1b69656cb783b14f2568f2dc4"],["D:/Blog/public/spring-relate/index.html","1bf448fd164b979fda6992719d7249c0"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","564f42e254ee6bc8348e1a19962b7e73"],["D:/Blog/public/spring/index.html","d3df0348ed5ae25e76db51dbffa50c1a"],["D:/Blog/public/springcloud-alibaba/index.html","fe405b59ec29d4867b964fd999c3878c"],["D:/Blog/public/springcloud-bus-message/index.html","d8bff433e3eb1de7b19651ad7821fd89"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c14a493cf5527bf33247b51f5670c0b1"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","51255e6e3ddf58a51f70e16c0114ef09"],["D:/Blog/public/springcloud-stream-message-driver/index.html","65ebc3f7643cda9b002e2de0a9777e18"],["D:/Blog/public/springcloud/index.html","9e6eeea07601bb48736202ae966bc2f5"],["D:/Blog/public/springmvc-environment-construction/index.html","f7b0e437fba3eb4a312a4c9f2775fcb9"],["D:/Blog/public/springmvc-work-stream/index.html","c2ca6ff4d529704e19acfadf994e2a16"],["D:/Blog/public/sql-injection-attacks/index.html","45f5489444d54d26b9044f8637c66a9c"],["D:/Blog/public/stack/index.html","383c0174b52cce0cc50827ecd83ef049"],["D:/Blog/public/state-mode/index.html","41caf86915afe05a30163f3e43550c6f"],["D:/Blog/public/strategy-mode/index.html","a982956a6d8153544ed10997bb08f3a2"],["D:/Blog/public/synthetic-reuse-principle/index.html","7585c11e274ca8cf2a7b3a311db707d1"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","d9b1ccfd6db8328756b44ab781424633"],["D:/Blog/public/tcpip/index.html","183bc203f6e034883c5739df06bdcb27"],["D:/Blog/public/template-method/index.html","c68fc34e520e52ce3a807cb39dd66a7a"],["D:/Blog/public/test-case/index.html","c6d4f2997c4692ae5361f003f41cbbb3"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","3ee4e7729ace5dae236cfee9a5962635"],["D:/Blog/public/thread/index.html","2ea5f51ab6d31e24f7e83ba3eee70cd4"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","bb947cd67d06f9d828b247f8dcbdd8ce"],["D:/Blog/public/ubuntu-set-ip/index.html","d536b9102620829ea484054f9c0d15c4"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","f563bd576ce80d6d24c072e7d1395b9b"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","73ea7ed120030cbd3d76714343fa9d90"],["D:/Blog/public/users-create-data-types-themselves/index.html","af8c85f04ffdd574da665615ee9bc5cc"],["D:/Blog/public/visitor-mode/index.html","0d5e9495fbe004a0a082d70110ab141b"],["D:/Blog/public/xml/index.html","3e3e8741dec2c644e11cc2892e362fc2"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","c6c213e1c7f07c5928c20abee722b114"]];
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







