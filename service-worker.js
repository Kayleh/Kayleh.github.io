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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","b2b38ffc768a16729ec8bfb6219ca85e"],["D:/Blog/public/AIO-blocking-model/index.html","0387ae3ef00ea1c0ed24b3212909e74a"],["D:/Blog/public/BIO-blocking-model/index.html","bbea266bb4f2d26c2a2b2e46b9db810c"],["D:/Blog/public/C-algorithm/index.html","7f1a912ab478bd57c771c7f083d0eaae"],["D:/Blog/public/C-programming/index.html","3d62b22daacd06493b3eb9c329f18ad2"],["D:/Blog/public/Good-use-of-pointers/index.html","d4206c3a4f2a6a7cfc5e4ed39a68f763"],["D:/Blog/public/IO-model/index.html","f42e3b096de2befb178e3b2ebfff9438"],["D:/Blog/public/IO/index.html","f1adeaaac031f9a29cf696b51d4b2cb6"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","b5c951bcdaa538bd79b11e6aff57a3bc"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","459a3ae60cefdb33c56802ec38cd0c88"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","8504dd8bb4fa5902bb668382e18b09d1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","a3a2c3c992599e1798f2f8b247b0b83c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","f6eb4dce880993151dfaccf2f4ab4e73"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","3ffaf285894fbed078a061016076d171"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","56d65eb48e52c7df0a0eba2e3715b9bf"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","1f14d583cdad9a688c09ee82c081340f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","ad89c207fa3a74de18f81bb645a375fa"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","e36789716e6a28b60aa67946e0913345"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","249101abcb78e324d4fbd3c07f80d688"],["D:/Blog/public/Java-network-programming/index.html","c8e0a1362ac571be6bb42e584f7ea317"],["D:/Blog/public/NIO-blocking-model/index.html","15c6815ff4711f6781cc929f30652aba"],["D:/Blog/public/Native-method/index.html","6bd547569ccb2a513a1ceac19c8d80b3"],["D:/Blog/public/Sandbox-security-mechanism/index.html","7f64c5cbf3ed510d2b091ef8383f1d60"],["D:/Blog/public/SpringBoot-startup-process/index.html","131cb9fc75625cdfb66d964aa386b153"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","e607551bc29b1ff19716c11010d09f90"],["D:/Blog/public/Unitest-framework/1613147342997.png","fa212602da6a0c2e4ab81932e2c75959"],["D:/Blog/public/Unitest-framework/1613147496034.png","fb8fb1de9dea6723da6655e5839071b2"],["D:/Blog/public/Unitest-framework/1613149415607.png","701939feacc13efa4cacc1c011cd4772"],["D:/Blog/public/Unitest-framework/1613149552674.png","2b99ab4b3ceac7811b7ff973a8255884"],["D:/Blog/public/Unitest-framework/1613149845499.png","d5edfd7d7be45c825f3c5711f91cf99d"],["D:/Blog/public/Unitest-framework/1613199579426.png","541d81408c0a8888cad00aac49503689"],["D:/Blog/public/Unitest-framework/1613199693463.png","eee76d2a6bbbaa2b18686de5d15e4b90"],["D:/Blog/public/Unitest-framework/1613201703588.png","c482912ce5975fcf6424f54967a04ee7"],["D:/Blog/public/Unitest-framework/1613202112317.png","0c2eb115b6ddd8ccbee66b9a10c3b488"],["D:/Blog/public/Unitest-framework/1613207825662.png","46612333f91fb08d11bbcd71203dd100"],["D:/Blog/public/Unitest-framework/1613209390861.png","b0fa2badf3e229650b7c9352cdb3a885"],["D:/Blog/public/Unitest-framework/1613231860846.png","77b157d07a6a0ec5a8869d4d32a5f4b0"],["D:/Blog/public/Unitest-framework/1613233980464.png","2f6c54ae5225ff55147a56468f3c2d98"],["D:/Blog/public/Unitest-framework/1613234000816.png","17e04a5b9d28590aff758324ef2560e3"],["D:/Blog/public/Unitest-framework/1613318481043.png","a6fc0054631f98a47fab59a18fd74cad"],["D:/Blog/public/Unitest-framework/1613319975732.png","9d229584d9af8d77053f62517ae0f6f7"],["D:/Blog/public/Unitest-framework/1613320887518.png","e89da2326af7177ddfade11232fc8cb3"],["D:/Blog/public/Unitest-framework/1613320910898.png","92d8321a4929754ef93066a5fb546b36"],["D:/Blog/public/Unitest-framework/1613321695363.png","57b43dba7110bbc028d2afdc352f1f0c"],["D:/Blog/public/Unitest-framework/1613382483121.png","89a6e495519d3552ce14316747002e57"],["D:/Blog/public/Unitest-framework/1613396353835.png","66342708e81223a005185b78803ffddb"],["D:/Blog/public/Unitest-framework/1613572027235.png","f8ae449948cedba80762326c2045b5a9"],["D:/Blog/public/Unitest-framework/1613572049278.png","a54870854361cd61b3f1780683bfac35"],["D:/Blog/public/Unitest-framework/1613574779605.png","b816007f840be276bea17e08c3edc98a"],["D:/Blog/public/Unitest-framework/1613756103321.png","c49b04974e587992708ff0e68734533a"],["D:/Blog/public/Unitest-framework/1613756685341.png","221904cb98e3247e85a995af4c316ea5"],["D:/Blog/public/Unitest-framework/1613756748533.png","145350445ae6d8b9f3447fcd242c25f0"],["D:/Blog/public/Unitest-framework/1613756844713.png","a11d8a7f97ac68b6c6ccff01ea02ace9"],["D:/Blog/public/Unitest-framework/1613756873832.png","443b20f6ac52c989f6cb87da992d6e15"],["D:/Blog/public/Unitest-framework/1613757056609.png","58de11268b65ffcffaa5c6aeea72d4fd"],["D:/Blog/public/Unitest-framework/1613757120441.png","95ad4cf246b6655a8cefa8ed51c03e27"],["D:/Blog/public/Unitest-framework/1613757139743.png","e3b78e44d1bbc6835c3e4eccbf9a6880"],["D:/Blog/public/Unitest-framework/1613757341191.png","eb380cb7b190b88495a249ff6d3d4955"],["D:/Blog/public/Unitest-framework/index.html","274d49a1a8c0d854cde065f5fa066175"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","e559a85c6d4a43af1077e3c83848ce40"],["D:/Blog/public/agency-model/index.html","82dbec97792802c5265a4febac3c90a1"],["D:/Blog/public/appearance-mode/index.html","1b18877dee08c4ebb88a23f4c9667c44"],["D:/Blog/public/archives/2019/01/index.html","3e04274d8fa0e069fde68b237c035c59"],["D:/Blog/public/archives/2019/07/index.html","c71ad0bef27a0a156833e0484e3b9dd1"],["D:/Blog/public/archives/2019/12/index.html","644830ba75d19499ff25b19d41600f24"],["D:/Blog/public/archives/2019/index.html","c32631c086bc15eab5e6f6557ab43461"],["D:/Blog/public/archives/2020/04/index.html","f6556a0c8223c03f833472e042875969"],["D:/Blog/public/archives/2020/05/index.html","4d744e176ec54ca18557911f45e0edea"],["D:/Blog/public/archives/2020/05/page/2/index.html","06d008c4227a7f1bb170b6b797f1751a"],["D:/Blog/public/archives/2020/06/index.html","83869b9b74bfd7199dae25471ba1b490"],["D:/Blog/public/archives/2020/06/page/2/index.html","665e23121ef6e77c3acca2b5826ce1f8"],["D:/Blog/public/archives/2020/06/page/3/index.html","997df567638e2bee4f7a68c6c0d52055"],["D:/Blog/public/archives/2020/06/page/4/index.html","73e48f46859dbca2494b0ccdea7bc9a8"],["D:/Blog/public/archives/2020/07/index.html","3e3a43bb70d9a88e497d6599773f26f7"],["D:/Blog/public/archives/2020/07/page/2/index.html","efcc23640e46a51296ebeb6bd90044f2"],["D:/Blog/public/archives/2020/07/page/3/index.html","6272b10482b84a05e9a78431271b437c"],["D:/Blog/public/archives/2020/08/index.html","30f0d57ce7b9b9eddc0ca51847ef8fa6"],["D:/Blog/public/archives/2020/08/page/2/index.html","97b9049d7169cf2692b37e7094de38e6"],["D:/Blog/public/archives/2020/08/page/3/index.html","5947a2af68d23c2cc8921c834cac1aad"],["D:/Blog/public/archives/2020/09/index.html","358fdf3fac8c3de41cf6fe6d57c75761"],["D:/Blog/public/archives/2020/09/page/2/index.html","692ab3e3d963a580dd2c8c386a98ba67"],["D:/Blog/public/archives/2020/10/index.html","e6c579b32f47671c444adca6392269ab"],["D:/Blog/public/archives/2020/10/page/2/index.html","1db3c910ecc48bc3f75528c52d42b08c"],["D:/Blog/public/archives/2020/11/index.html","ecedb8147bacb8dd31a30d56f932c1bf"],["D:/Blog/public/archives/2020/11/page/2/index.html","5b89a8e325fecaf7b62a9c2be1ada651"],["D:/Blog/public/archives/2020/12/index.html","8d722c95b7defe2d561832bd7859a2ce"],["D:/Blog/public/archives/2020/12/page/2/index.html","37c4d120fa456d888f8713f705a28e04"],["D:/Blog/public/archives/2020/index.html","d19f58f0797b56c9d39ff34328c9c86c"],["D:/Blog/public/archives/2020/page/10/index.html","3637a8a7261be51e2402150e89a91184"],["D:/Blog/public/archives/2020/page/11/index.html","4e551d3c27507e401c80fe4103464b1f"],["D:/Blog/public/archives/2020/page/12/index.html","19e112bd7e9f490684ddcc187c759a0f"],["D:/Blog/public/archives/2020/page/13/index.html","2b4c20ef05e69c9e92ce3f6e26bbc47c"],["D:/Blog/public/archives/2020/page/14/index.html","5d87a2b9166b14d2a5c9bfc498f79e78"],["D:/Blog/public/archives/2020/page/15/index.html","c26262c034bba495a427076422b8ace9"],["D:/Blog/public/archives/2020/page/16/index.html","354e65cf545fb9d3d25b77415ee0ccba"],["D:/Blog/public/archives/2020/page/17/index.html","e93137b1a41645d402a2931715fc2099"],["D:/Blog/public/archives/2020/page/2/index.html","8ab181ea27175c0cc892681570a774e7"],["D:/Blog/public/archives/2020/page/3/index.html","4df03d694d26d10fd608b4f431a2bf66"],["D:/Blog/public/archives/2020/page/4/index.html","b0f25dc8cdad13e3eca1d47d451cd329"],["D:/Blog/public/archives/2020/page/5/index.html","07ba71d4ee9158451970bd36fdf5108d"],["D:/Blog/public/archives/2020/page/6/index.html","81a5292d4e04c6dcd8ee808a9d1d5c86"],["D:/Blog/public/archives/2020/page/7/index.html","45e8db2d21aa5d40ff1892ac880ffae7"],["D:/Blog/public/archives/2020/page/8/index.html","5e166765cc1de5c53c1bf3f46f427acc"],["D:/Blog/public/archives/2020/page/9/index.html","ff9bfc48fff1e301bfa5f5651ee1fa56"],["D:/Blog/public/archives/2021/01/index.html","ea0cb0eee6bacf42fd0ff5d914c22fa6"],["D:/Blog/public/archives/2021/02/index.html","51833cad1a128f0a576fca409d394cf1"],["D:/Blog/public/archives/2021/index.html","5703b9635f45979cbef9e4e73504f59a"],["D:/Blog/public/archives/index.html","d20617853135f2a8880bcc7864131841"],["D:/Blog/public/archives/page/10/index.html","30c38c40143bb25c2def4217b8e83975"],["D:/Blog/public/archives/page/11/index.html","704266891a39d19fc96d82cf6740fb3e"],["D:/Blog/public/archives/page/12/index.html","225c9962f7b895c723dfc5ba065f4995"],["D:/Blog/public/archives/page/13/index.html","9c6dfea38b35a7fd058ca3fb6ecc1036"],["D:/Blog/public/archives/page/14/index.html","4497c1e62f06f4b3ea9edabfd5d6fdfc"],["D:/Blog/public/archives/page/15/index.html","ca4731cad759e3d55dccffebbabb55ff"],["D:/Blog/public/archives/page/16/index.html","14d4949be0114d80099de585ea75c4ba"],["D:/Blog/public/archives/page/17/index.html","cffa4022d5fdba3e58435230b1c046d6"],["D:/Blog/public/archives/page/18/index.html","8d390abd9e696a211897ed9f4d2653ee"],["D:/Blog/public/archives/page/2/index.html","2130181d4ed7c223b606d56ac09ac508"],["D:/Blog/public/archives/page/3/index.html","46e1de57987fdd3e5e7d56ecf8abb460"],["D:/Blog/public/archives/page/4/index.html","9c9b97bac9f570af3f8faa0d9db560a7"],["D:/Blog/public/archives/page/5/index.html","fb966f99fabe23182a39321534cf439e"],["D:/Blog/public/archives/page/6/index.html","59d2e60044f0f4eb77aec1169b24fcf6"],["D:/Blog/public/archives/page/7/index.html","7aed6e19d94fa554ccabf5a229b19abd"],["D:/Blog/public/archives/page/8/index.html","34fe551632be0de96ef070a616b2087b"],["D:/Blog/public/archives/page/9/index.html","0ec23ee830d036e0bbb9cf8ad07ab02b"],["D:/Blog/public/array/index.html","1e72e8f6ca910bb55b3d5b596c407b0c"],["D:/Blog/public/automated-test-katalon/index.html","6095fdb4448ec5c5b85c671b89dd7e84"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/1613121232860.png","fd1a272accabb1578626d3b294b5009a"],["D:/Blog/public/automated-test-selenium/1613234642404.png","0dd973f7e9465929bbc7e4500aa1c2c7"],["D:/Blog/public/automated-test-selenium/index.html","3550fe6e7931b432b754b0e56019630c"],["D:/Blog/public/binary-search-algorithm/index.html","104488fff45e836c6bacafff042a4462"],["D:/Blog/public/binary-sort-tree/index.html","51325f19a609a0aa62f7e4a8d7446604"],["D:/Blog/public/bionioaio/index.html","9e24657695d05aa6653967b013c99732"],["D:/Blog/public/bridge-mode/index.html","0cee7554b337efc1625f051a92b41f98"],["D:/Blog/public/builder/index.html","e690803e177d31f1b6a044c48234e173"],["D:/Blog/public/c-pointer/index.html","8d3c4a4dd90aac58f4a46389520d8f59"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","f8e474f3744605693779508daaf075bf"],["D:/Blog/public/chinese-and-english-switching/index.html","b5d1afdbdb521888e9c437bcbf0c904a"],["D:/Blog/public/combination-mode/index.html","968dee3a811e47c483da22cd54ff1925"],["D:/Blog/public/command-mode/index.html","22e91f792ec641b7c97e759ae4adc4f6"],["D:/Blog/public/common-commands-of-unix/index.html","4127968a7f0e2321d113dccb1aa28c3a"],["D:/Blog/public/computer-network/index.html","cdf50affa2fab61ec0d48581701b3c6a"],["D:/Blog/public/concurrency-principle/index.html","b385d846ae5f48b88d3c0107820a78fc"],["D:/Blog/public/continuous/index.html","4391c9e84843ae3ad80edd3693b7e444"],["D:/Blog/public/contract/index.html","cea5a1db357e6783817b5ca94c8a5a70"],["D:/Blog/public/css/octo.css","4ab2a5effe0a6de6b8d45f7cf205bdb3"],["D:/Blog/public/cycle-structure-programming/index.html","1a7a706e8a46ae99360adb1a4a8693a4"],["D:/Blog/public/data-structures-and-algorithms/index.html","3575236666de2c1749c4d0dab1297ca5"],["D:/Blog/public/deb/index.html","9d5565e851ee8d2fe576af8d14714592"],["D:/Blog/public/decorator-mode/index.html","2386c442b3573fbbf0224114c14e3746"],["D:/Blog/public/definite-integral/index.html","766e233910b1a28c6a29af5cec958d6f"],["D:/Blog/public/dependence-reversal-principle/index.html","b07e7b4e925f251e78a0eebbe1cdb9b9"],["D:/Blog/public/derivative/index.html","28ba2468b85b34c35a68adf99ae66ea2"],["D:/Blog/public/design-patterns/index.html","011af98b3094fcc86b6763ab05c7015f"],["D:/Blog/public/differential-equation/index.html","5b3e6913c9d9956e83704642de255085"],["D:/Blog/public/differential/index.html","bb8a1e87bac244bb4ba45cd27ce8fdb2"],["D:/Blog/public/dimits-law/index.html","2fd2e21845c35321be16817bf75d16be"],["D:/Blog/public/docker-virtualized-container/index.html","30eaa902ed11ec7e97e77e275d44547b"],["D:/Blog/public/double-integral/index.html","b5d54d5b704377e78fbae9b42801984e"],["D:/Blog/public/dynamic-array/index.html","be23a70c6bdd98aec13cc605aedbc92e"],["D:/Blog/public/dynamic-programming/index.html","358d67bf71b9ea4cb26f704a76af99e5"],["D:/Blog/public/encoding-algorithm/index.html","a94e123dcd3ce593beb0bff97b8a8dd2"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","e61500771aee7155c0e5947f2803afcc"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","1250b3fcbb0d118de2579cc77e9eddf8"],["D:/Blog/public/factory-design-pattern/index.html","00aca6fa73d0d8c4ad9e9fcef7880809"],["D:/Blog/public/file-input-and-output/index.html","7a00269e412151acb33259f3691c1ada"],["D:/Blog/public/flyweight-model/index.html","4188843831bb6d3b30308eed5041b886"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","c066913e695df540c668ad4db6a93f5a"],["D:/Blog/public/gateway-service-current-limit/index.html","884c2378e065b1c444ce7301c10834d4"],["D:/Blog/public/gc/index.html","47c29a1a498899e7ef1481e024b096c5"],["D:/Blog/public/generalized-integral/index.html","a3f8da3b45a3f7e5690d8adb481de5db"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","9660b2e33f2f64cae7e222b0abf0112f"],["D:/Blog/public/hash-algorithm/index.html","70bb0e0ea6f979c86ce6cb74208acb3a"],["D:/Blog/public/heap-sort/index.html","9bc3971b714e83a1aea55e874b774a5d"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","2df1430dc4a38cf83bd3ef1901ab6415"],["D:/Blog/public/http/index.html","fdb1dcabf54fea0b57a61824b9c8bae2"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","6a79ef6efb18f8d16c9aa5afc7c66446"],["D:/Blog/public/index.html","5b24e2ee2759fddaa0540d3a866b782e"],["D:/Blog/public/infinitesimal-and-infinite/index.html","ab2845af5b2038a9396bb8e9794d7cbd"],["D:/Blog/public/interface-isolation-principle/index.html","caebaaf4c0b0b6ac5906b22ea2cd2d09"],["D:/Blog/public/interface-test/1613845781204.png","525459d2a175ae31ca6847ca8c26921b"],["D:/Blog/public/interface-test/1613928423300.png","cde4c6d11a3df660d48aee0e17f664a4"],["D:/Blog/public/interface-test/1613928573807.png","946c84770585171b3c9627dc2dc46c30"],["D:/Blog/public/interface-test/1613929905199.png","2695c8c078592d9faa28233e70740131"],["D:/Blog/public/interface-test/1613930059453.png","3deef79ce6a9499176f2f89938fba298"],["D:/Blog/public/interface-test/1614016580698.png","6cdef4b511c47431fe81a257176108f0"],["D:/Blog/public/interface-test/1614100489562.png","37f60f3b132e0ed7b37231a9554a21ef"],["D:/Blog/public/interface-test/1614102472739.png","c6de29acd936fd4a773bddeea45695c1"],["D:/Blog/public/interface-test/1614103022980.png","f3ebdd1d572e530ff1d3d96206d66bbd"],["D:/Blog/public/interface-test/1614103130379.png","7fd5addfe78147ec611f7e75f8a9be36"],["D:/Blog/public/interface-test/1614276076934.png","c361d5e43a815a4ab48d62da2730b5ec"],["D:/Blog/public/interface-test/1614276217035.png","b2681bcb8e20394d34c647bd59346376"],["D:/Blog/public/interface-test/1614276269526.png","43eaba438098eee01da00c284ab3c870"],["D:/Blog/public/interface-test/1614276280706.png","43eaba438098eee01da00c284ab3c870"],["D:/Blog/public/interface-test/index.html","552c85dc94c0b54abe961c99d192abb7"],["D:/Blog/public/intermediary-model/index.html","aec3f24417239274bda1c00954bc8b53"],["D:/Blog/public/interpolation-search-algorithm/index.html","d81130c8040520f6bc048864c8311734"],["D:/Blog/public/interpreter-mode/index.html","edcae2b36d30063c325ee02160a0384f"],["D:/Blog/public/introduction-to-computer-network/index.html","c0c1138dff92fcb48f02e9346227853f"],["D:/Blog/public/introduction-to-operating-system/index.html","719af64bd0bf247c13b8c5ae54c700b3"],["D:/Blog/public/inversion-of-control/index.html","f4150cca20485510f5d188d0f5741522"],["D:/Blog/public/io-Interview/index.html","7e8b3d73665ed6d11ddb85e47713c146"],["D:/Blog/public/iterator-mode/index.html","936447594da88215640f2c23c6efd498"],["D:/Blog/public/j2ee/index.html","d12ed61f3f20be28eea8566339986861"],["D:/Blog/public/j2se/index.html","f440361e83b4758ec5267364729a70a9"],["D:/Blog/public/jdbc/index.html","3837f06fb36753c7fb09406d2ce77191"],["D:/Blog/public/jdk/index.html","e93404c7ca77d998bd3f567fe99e84ae"],["D:/Blog/public/jmm-memory-model/index.html","03cd409823bfcf0c3d5a324028acba3a"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","6935f65813830c2b8dfc53f8cae10bef"],["D:/Blog/public/jvm/index.html","35bc1d802a23f02e66a8b7b6b2bf33b8"],["D:/Blog/public/law-of-robida/index.html","93e0715f8c189b787fef6ffaea9dc5e0"],["D:/Blog/public/limit/index.html","88440bad4d3db81e70a17bca688e5605"],["D:/Blog/public/linear-search-algorithm/index.html","540c39f70a1b4893b542266565ca0c7e"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","10b3e600e2c01abf5c9fb3c96372db7b"],["D:/Blog/public/linux/index.html","5dc87eb202f0623c683c0cf54585cdf8"],["D:/Blog/public/liskov-substitution-principle/index.html","6b7334059f702fe8a2fedd5c06ceedd9"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","1bd3fe16f069a075985e4314b4353a12"],["D:/Blog/public/maintenance-1/index.html","a02aa9778fb2e141307e22dd19a0f3b5"],["D:/Blog/public/maintenance-2/index.html","d0b6831ea6e33d1a8b276819add8172e"],["D:/Blog/public/maintenance-3/index.html","a09c929fe19050e9d603f92940b05a61"],["D:/Blog/public/memo-mode/index.html","25b298ed2e062c607cde1e6c56f71e20"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","78e73d3680b003fbe67dfe2889ddb20e"],["D:/Blog/public/multi-function/index.html","97da11e15552d558bd39234cf4eb5d3e"],["D:/Blog/public/multithreading/index.html","43876653d90cffa50b8dd367d2af9191"],["D:/Blog/public/mvc/index.html","02325ee3ff48586a517fea325e15557d"],["D:/Blog/public/mybatis/index.html","097001db8d261bcc5f38c154b8cc47bd"],["D:/Blog/public/mysql/index.html","07d4ca7c72245a32743ecd9375b9ffaf"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","c78990277e0ca96d8cd903e2cf9cda69"],["D:/Blog/public/objectoriented/index.html","8b273ec00a19c0ca3ffe728142ab56c1"],["D:/Blog/public/observer-mode/index.html","32acba4db5bd6e998417b23140de96a3"],["D:/Blog/public/off-heap/index.html","d7abab303b4b8e113f40f87a9a4f6092"],["D:/Blog/public/operating-system/index.html","61e15d50b3982d13b26226fb56897897"],["D:/Blog/public/page/10/index.html","1f3bd4628cdc3dcaea544568c987db1f"],["D:/Blog/public/page/11/index.html","93ea0ebc26aa6861d1a463f453c55301"],["D:/Blog/public/page/12/index.html","818554e9ec0e0de6abacd6ed71423d23"],["D:/Blog/public/page/13/index.html","d146bb56644f6d78e6f91582a134330e"],["D:/Blog/public/page/14/index.html","1d487137490a61146f11165100ab9c63"],["D:/Blog/public/page/15/index.html","9b7de2dcce42163401850096b1aa3e64"],["D:/Blog/public/page/16/index.html","3ce8a1650446f534f0e1522a12ef6e5d"],["D:/Blog/public/page/17/index.html","31db8397e301f6ab5b8bd4906950b5be"],["D:/Blog/public/page/18/index.html","f4ca1a1a580ca739c6478e3248d0bcd9"],["D:/Blog/public/page/2/index.html","62ea3cf212b800d6b3209060f958051d"],["D:/Blog/public/page/3/index.html","69cb215558c2428bcf52f27a996b5279"],["D:/Blog/public/page/4/index.html","7ef7d6a903f95aef4e28db9579896ce6"],["D:/Blog/public/page/5/index.html","68801566a22a1ff21449462519f6986a"],["D:/Blog/public/page/6/index.html","76f3eb2e91b03ce0df0fae64ee2b1b5f"],["D:/Blog/public/page/7/index.html","3db7158b4564dab88a5653611de70ab3"],["D:/Blog/public/page/8/index.html","8aee483e1a248a3994932d0181344f43"],["D:/Blog/public/page/9/index.html","3cc51400f6471ea7fcf9915f73d91f90"],["D:/Blog/public/palindrome/index.html","37efc6a2eba111e8c8651ba36103e967"],["D:/Blog/public/partial-derivative/index.html","208272b3cfc27315045a290e90929d15"],["D:/Blog/public/pass-by-value/index.html","bc809df170518f3c9c77ee1c603c0675"],["D:/Blog/public/pictrue-bed/index.html","f32d0a7a7ce955213145a9f56fcfdf49"],["D:/Blog/public/principle-of-opening-and-closing/index.html","87af3539f05cee55a778d98bcacad796"],["D:/Blog/public/principles-of-computer-organization/index.html","5efa8578a7f28e28868a9149f42b90ae"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","633f7c4c47beb03d239d66578a3205ca"],["D:/Blog/public/prototype/index.html","3147cf79657a8c14b793c542563a533b"],["D:/Blog/public/queue/index.html","15f49b41ab5a660005f36d34af671a43"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","3d50430f8b17f8f94ab6144d33c51ede"],["D:/Blog/public/redis/index.html","39da6f74f1c8ee90059a9a65ba2317f6"],["D:/Blog/public/reflection/index.html","ac185b5eaf0a507305cd9d9f25a3a618"],["D:/Blog/public/resume/index.html","c6f6d37c4d7f03eb26dec6d4fe31b1d1"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","32cd82ad65f87947a2ce194546aa6cc6"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","56416f6bcd5bf06ee7eedb6613783425"],["D:/Blog/public/select-structure-programming/index.html","5b640ea850d73890e50c5c37d45430d9"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","0088caaf221b7abe83945a939ee676e8"],["D:/Blog/public/sequential-programming/index.html","9281c6014e68b63f0444c1853a122f45"],["D:/Blog/public/series/index.html","8adced018d2ad10507af2403c0250974"],["D:/Blog/public/single-point-login/index.html","843902c61c085c39541786f6af75e43d"],["D:/Blog/public/single-responsibility-principle/index.html","373b41e95023c4f22d0df3f7b60b5b91"],["D:/Blog/public/singleton-mode/index.html","1bb7cba38afd87c355447c622626e3bf"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","a8ed8c27eafff8838bcce796a50b3c93"],["D:/Blog/public/sparsearray/index.html","679839559759b9b2416df9e064046b34"],["D:/Blog/public/spring-architecture/index.html","8b2ea7ad1604e513331806dcdf5b353d"],["D:/Blog/public/spring-relate/index.html","e1ae878be8e0cc0117685b9d9056bd92"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","26320a17f04afec36fc067fdba388878"],["D:/Blog/public/spring/index.html","24628d761132c4b31b3c8630733d7b95"],["D:/Blog/public/springcloud-alibaba/index.html","9bcb73c6d687f0d755d84fc38efe495c"],["D:/Blog/public/springcloud-bus-message/index.html","d4c7b2228b4177f78bf96125ff05a401"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","6932534c4a2f89bf4e29dc63b420d95e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b475a0a592e5173b5d566f120ee40a6f"],["D:/Blog/public/springcloud-stream-message-driver/index.html","bc790f1d759406a3c9033a844b24b8a1"],["D:/Blog/public/springcloud/index.html","34b7219df4cf1601d18aa4d19a0fb70e"],["D:/Blog/public/springmvc-environment-construction/index.html","75f47b66733afb93e075a6e12aed54cd"],["D:/Blog/public/springmvc-work-stream/index.html","3f4762b99739358a1c247a309632e15a"],["D:/Blog/public/sql-injection-attacks/index.html","1151acb68679f1f6a8964e2baa2c55d1"],["D:/Blog/public/stack/index.html","c42d70ce27cae25d1af7493e52bea48a"],["D:/Blog/public/state-mode/index.html","3c6d6b1e32458263deab79c7a0c00f3f"],["D:/Blog/public/strategy-mode/index.html","b723cfca5d1e456316c85b31c659da63"],["D:/Blog/public/synthetic-reuse-principle/index.html","63b04a52489d70aaf0a0827f3252f3cc"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","45c12f26e911a2fa8700edcc42017fa1"],["D:/Blog/public/tcpip/index.html","aaa4dcef5d9d8b7302e5ecc8e09f2c39"],["D:/Blog/public/template-method/index.html","167e51d3813cc1d59387dffd1407ca4c"],["D:/Blog/public/test-case/index.html","dd9f4b3e112bc1aed49169e322e2a748"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","c3d6020a6a5b25d845ed31f423718f68"],["D:/Blog/public/thread/index.html","3efd7cda63360de72119b4031f27ba5c"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","46bbb1babfe090348f945d7e8023d82d"],["D:/Blog/public/ubuntu-set-ip/index.html","620e352974a55402249da9a11e63c8bc"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","9ef4a8b24d45347f98079cd811e6fbe1"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","b9cb2aaeb6f3038fdc1e92f0e6541ec7"],["D:/Blog/public/users-create-data-types-themselves/index.html","18b7231d8c797026f05439940dd0c7a5"],["D:/Blog/public/visitor-mode/index.html","763273616ab7a26831f4845edbcf090d"],["D:/Blog/public/xml/index.html","42f0c38212c6d7b0182cf5a3e4f46cbc"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","8bdbb0c9caeabb119d419f2e04ff6eb7"]];
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







