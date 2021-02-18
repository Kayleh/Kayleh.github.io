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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","edff675abe0d9aaa4b55069d064d6d1c"],["D:/Blog/public/AIO-blocking-model/index.html","23cde3c92e460212cc119684775d3108"],["D:/Blog/public/BIO-blocking-model/index.html","2ee1e82a66ddfca420df7411668434ec"],["D:/Blog/public/C-algorithm/index.html","c776fdca0072cba35ebfb790db84a36d"],["D:/Blog/public/C-programming/index.html","d11c606f4cf0b2fc3e09514f7841379e"],["D:/Blog/public/Good-use-of-pointers/index.html","90ad60f8486fa32501dc9ff167603f3a"],["D:/Blog/public/IO-model/index.html","7c6817af6e55d156ec9ba18e68f40e85"],["D:/Blog/public/IO/index.html","392247f703a70ec1a8f79aa2109b9f70"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","2e659ac4a6b5138d58bd7d221f80ca92"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","16b8284d665f1aed23a0cf90a5d5fbfe"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","0122db7bb56b3c106a6cd69e8c81eece"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c3379c6bee2e9c0a59155a6a225bd2b6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","497f520fd99f726caba6c16662fe99aa"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","4423cf521c6c36087b61b2cf1c443fba"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","812a3163c29665c4274d565d68cc1f1b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","308060f481561188f95f5682cd9dded5"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","60e9df0b3bbdfe77aeebd220b3c6d9c2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","cced91c35ae444ac916a6fa8625b2d34"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","4c1d950ac9db731cdb0bd48d1dfeca06"],["D:/Blog/public/Java-network-programming/index.html","53cd86c89e7358f999ad330c45d21eee"],["D:/Blog/public/NIO-blocking-model/index.html","8cbd23520afbf0d6a79465062af27c64"],["D:/Blog/public/Native-method/index.html","be2268e85fee3fdbd1c437c13faafd95"],["D:/Blog/public/Sandbox-security-mechanism/index.html","323ce1e3983f971161dba36f9289c8da"],["D:/Blog/public/SpringBoot-startup-process/index.html","dc50f1adb4ab4003d53b659a913e0168"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","0d2f9112de3d03ebbba0055270bc8387"],["D:/Blog/public/Unitest-framework/1613147342997.png","fa212602da6a0c2e4ab81932e2c75959"],["D:/Blog/public/Unitest-framework/1613147496034.png","fb8fb1de9dea6723da6655e5839071b2"],["D:/Blog/public/Unitest-framework/1613149415607.png","701939feacc13efa4cacc1c011cd4772"],["D:/Blog/public/Unitest-framework/1613149552674.png","2b99ab4b3ceac7811b7ff973a8255884"],["D:/Blog/public/Unitest-framework/1613149845499.png","d5edfd7d7be45c825f3c5711f91cf99d"],["D:/Blog/public/Unitest-framework/1613199579426.png","541d81408c0a8888cad00aac49503689"],["D:/Blog/public/Unitest-framework/1613199693463.png","eee76d2a6bbbaa2b18686de5d15e4b90"],["D:/Blog/public/Unitest-framework/1613201703588.png","c482912ce5975fcf6424f54967a04ee7"],["D:/Blog/public/Unitest-framework/1613202112317.png","0c2eb115b6ddd8ccbee66b9a10c3b488"],["D:/Blog/public/Unitest-framework/1613207825662.png","46612333f91fb08d11bbcd71203dd100"],["D:/Blog/public/Unitest-framework/1613209390861.png","b0fa2badf3e229650b7c9352cdb3a885"],["D:/Blog/public/Unitest-framework/1613231860846.png","77b157d07a6a0ec5a8869d4d32a5f4b0"],["D:/Blog/public/Unitest-framework/1613233980464.png","2f6c54ae5225ff55147a56468f3c2d98"],["D:/Blog/public/Unitest-framework/1613234000816.png","17e04a5b9d28590aff758324ef2560e3"],["D:/Blog/public/Unitest-framework/1613318481043.png","a6fc0054631f98a47fab59a18fd74cad"],["D:/Blog/public/Unitest-framework/1613319975732.png","9d229584d9af8d77053f62517ae0f6f7"],["D:/Blog/public/Unitest-framework/1613320887518.png","e89da2326af7177ddfade11232fc8cb3"],["D:/Blog/public/Unitest-framework/1613320910898.png","92d8321a4929754ef93066a5fb546b36"],["D:/Blog/public/Unitest-framework/1613321695363.png","57b43dba7110bbc028d2afdc352f1f0c"],["D:/Blog/public/Unitest-framework/1613382483121.png","89a6e495519d3552ce14316747002e57"],["D:/Blog/public/Unitest-framework/1613396353835.png","66342708e81223a005185b78803ffddb"],["D:/Blog/public/Unitest-framework/1613572027235.png","f8ae449948cedba80762326c2045b5a9"],["D:/Blog/public/Unitest-framework/1613572049278.png","a54870854361cd61b3f1780683bfac35"],["D:/Blog/public/Unitest-framework/1613574779605.png","b816007f840be276bea17e08c3edc98a"],["D:/Blog/public/Unitest-framework/index.html","8bd58210ca29d37e569f3905f1b61f27"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","8027a64905f536e08b389134af3a533a"],["D:/Blog/public/agency-model/index.html","f36b7e32ce1dde93e765e0ffaa910ff6"],["D:/Blog/public/appearance-mode/index.html","140ae8dbb7971eec220ba76ea191fdd9"],["D:/Blog/public/archives/2019/01/index.html","17fd6887a15df302f6d9e217efaf6b9f"],["D:/Blog/public/archives/2019/07/index.html","29f8da1b1f0c5f5e0ef77affe738ad73"],["D:/Blog/public/archives/2019/12/index.html","7ab3837d50f0723cf2792923e0fc0673"],["D:/Blog/public/archives/2019/index.html","6e8abd359ce510e9d9a2270142d1b24e"],["D:/Blog/public/archives/2020/04/index.html","7aba60fc1ad2b1676e9df0267ec106d7"],["D:/Blog/public/archives/2020/05/index.html","799647961da0075f3f5c8c33514cd86e"],["D:/Blog/public/archives/2020/05/page/2/index.html","3718782b32aeca456d36ce9cad5d1df0"],["D:/Blog/public/archives/2020/06/index.html","32470394ca1ddea5ced57358cd75c0f8"],["D:/Blog/public/archives/2020/06/page/2/index.html","f215178a715657bbd274afeddb272512"],["D:/Blog/public/archives/2020/06/page/3/index.html","653ab4f6725fe7fd5dbe18cc804a1fbe"],["D:/Blog/public/archives/2020/06/page/4/index.html","cc09750209ecadc42cf8680f5b86e42f"],["D:/Blog/public/archives/2020/07/index.html","9b5d9be0a79b82ba8b284164cecc7e99"],["D:/Blog/public/archives/2020/07/page/2/index.html","70369d482f9df4ac039fe9a2439076b2"],["D:/Blog/public/archives/2020/07/page/3/index.html","e15233fb6628f58aa069bf636e9da00b"],["D:/Blog/public/archives/2020/08/index.html","322a434de3731848767737258077a2c0"],["D:/Blog/public/archives/2020/08/page/2/index.html","9a9f7fe7a065ab481d9108d924a50d39"],["D:/Blog/public/archives/2020/08/page/3/index.html","dc67afae1e2bf143fc3d7d2da1e6a423"],["D:/Blog/public/archives/2020/09/index.html","8c0f0b650d7404caf3090901812578ce"],["D:/Blog/public/archives/2020/09/page/2/index.html","8ebfe94864f4a61e17f8a9baed79c5c9"],["D:/Blog/public/archives/2020/10/index.html","2cbcb8d90e314afb6eb1e20f8e86b172"],["D:/Blog/public/archives/2020/10/page/2/index.html","668fca176f77f2bfb1c999778bd2b045"],["D:/Blog/public/archives/2020/11/index.html","3239cdcb0c278f6b9e7aac0f78976da1"],["D:/Blog/public/archives/2020/11/page/2/index.html","39173e1afd38abd5cbe014fc4670642b"],["D:/Blog/public/archives/2020/12/index.html","a255c003f10172f0d8414201775f042a"],["D:/Blog/public/archives/2020/12/page/2/index.html","5cdbf8276494fe0f84c9a021b115920e"],["D:/Blog/public/archives/2020/index.html","11c5461427a93436cb646eed9fbc60fd"],["D:/Blog/public/archives/2020/page/10/index.html","a5c725e31aa0fd6312df83f2fcdb2871"],["D:/Blog/public/archives/2020/page/11/index.html","acd7164487e260b878e418e06926fdbe"],["D:/Blog/public/archives/2020/page/12/index.html","1eab86ae4827cb8e22a536749f5792ef"],["D:/Blog/public/archives/2020/page/13/index.html","2e91613e9d7af7d0c2781447aaa57367"],["D:/Blog/public/archives/2020/page/14/index.html","3d8427edab86af2a2566dc80fede7c4b"],["D:/Blog/public/archives/2020/page/15/index.html","7bebafc09dd63186ca6b9b9605e87afa"],["D:/Blog/public/archives/2020/page/16/index.html","5c98323d5414c13ef150a49f2c59cd07"],["D:/Blog/public/archives/2020/page/17/index.html","7c5d8f81d7af6b24be41bc715bb35f20"],["D:/Blog/public/archives/2020/page/2/index.html","5d70f96b155c1d262f180c0124b64870"],["D:/Blog/public/archives/2020/page/3/index.html","74057f9418dbd850b221ae8afca6c596"],["D:/Blog/public/archives/2020/page/4/index.html","9f262c94f4a453bd128058244070c83c"],["D:/Blog/public/archives/2020/page/5/index.html","fda87131be6ca26837f68502a3d98170"],["D:/Blog/public/archives/2020/page/6/index.html","24b54c4df5c29ebb690237771dc6afcf"],["D:/Blog/public/archives/2020/page/7/index.html","c5a62bda029bd8c13f745506c3bc1c55"],["D:/Blog/public/archives/2020/page/8/index.html","3206e72e8423ecb1039570a97c73308a"],["D:/Blog/public/archives/2020/page/9/index.html","cd1eb7828d7ba250d77260e2550f32b8"],["D:/Blog/public/archives/2021/01/index.html","ee2acddcde81e6942984d6e0aaece680"],["D:/Blog/public/archives/2021/02/index.html","3c58cc64603ad2d97c307703cc92717e"],["D:/Blog/public/archives/2021/index.html","ce722244c2d867911c1e741524e71075"],["D:/Blog/public/archives/index.html","7f473febdc2d992ca62ec6b72653c643"],["D:/Blog/public/archives/page/10/index.html","60822c5d506afc39997e9cbab47ad563"],["D:/Blog/public/archives/page/11/index.html","adef24a5c0ccaa9c10bee65db4ebe5a7"],["D:/Blog/public/archives/page/12/index.html","ad91646b54a520c9f8abaec055faecbd"],["D:/Blog/public/archives/page/13/index.html","74989726f97c8bbb80628776c4ad762e"],["D:/Blog/public/archives/page/14/index.html","85ade246b05c1661e3bd8eeeb275d798"],["D:/Blog/public/archives/page/15/index.html","10456d635cba1e35e0eaf3217f863bec"],["D:/Blog/public/archives/page/16/index.html","3a8545ef1b3484cd52be05f4ee67b11f"],["D:/Blog/public/archives/page/17/index.html","e1f8e78a9117460428c8f248bc567e23"],["D:/Blog/public/archives/page/18/index.html","8de7b07ed625aea75b376b938fc7b272"],["D:/Blog/public/archives/page/2/index.html","90daa7dd8791cdf656b203dcf89f7c0c"],["D:/Blog/public/archives/page/3/index.html","2c16722520c81ec187dba221457fdfc7"],["D:/Blog/public/archives/page/4/index.html","84681bde5b56e97da03f0727b95e13fe"],["D:/Blog/public/archives/page/5/index.html","2d5772921ec6b780a97707b0e587c2a2"],["D:/Blog/public/archives/page/6/index.html","b15b7a61b6b0d35d47f00194ab99bec6"],["D:/Blog/public/archives/page/7/index.html","42bd1184889e1c43975ea9b73302054a"],["D:/Blog/public/archives/page/8/index.html","2ff1ba1c0e2bb1b3d8f5394605a3dda5"],["D:/Blog/public/archives/page/9/index.html","3664b4f24401b3112b504b891fd8cd27"],["D:/Blog/public/array/index.html","a69223b0ae34dad81724e2ae6a770914"],["D:/Blog/public/automated-test-katalon/index.html","1ba19d52c0f67eaf1f521726e416fb65"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/1613121232860.png","fd1a272accabb1578626d3b294b5009a"],["D:/Blog/public/automated-test-selenium/1613234642404.png","0dd973f7e9465929bbc7e4500aa1c2c7"],["D:/Blog/public/automated-test-selenium/index.html","bcf0062e604043ce1d3c414f9ec78aec"],["D:/Blog/public/binary-search-algorithm/index.html","3bcf8420b8a23c0db15bc5d2c8976d0f"],["D:/Blog/public/binary-sort-tree/index.html","b67976a9cf0dd76e637fc4e00e2534d1"],["D:/Blog/public/bionioaio/index.html","3a871344833c8c4be1c63a6c8867c3ef"],["D:/Blog/public/bridge-mode/index.html","ebeca40b116152a119192fcdded30756"],["D:/Blog/public/builder/index.html","3feac70f07eb385c00c2551d3e9d4589"],["D:/Blog/public/c-pointer/index.html","05d4b5c0c5ce65e03f5eeab2304cfce7"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","cdf6376ea24fd5e61716104f42a22189"],["D:/Blog/public/chinese-and-english-switching/index.html","31d02ea3f8b3e63782c747974419dfa1"],["D:/Blog/public/combination-mode/index.html","07b4bf963c8f10343dba7d341e590464"],["D:/Blog/public/command-mode/index.html","a01377fb3b42ddfef37871fe6d90eb64"],["D:/Blog/public/common-commands-of-unix/index.html","d7679959d624a1c556c65af5fa7879f5"],["D:/Blog/public/computer-network/index.html","87ef7d68d130aec12a3e08879b2d0cc1"],["D:/Blog/public/concurrency-principle/index.html","ff602023dfd9aec774c4a2b3cf400046"],["D:/Blog/public/continuous/index.html","87d8f4bf40db4f3cb7ee29fe0a369283"],["D:/Blog/public/contract/index.html","50bfec62d714eddabb7f9b29b9260ec0"],["D:/Blog/public/css/octo.css","600d33359e935fb56685264b51cfb9de"],["D:/Blog/public/cycle-structure-programming/index.html","04c5732ebc90e09dde0c1085ca375e62"],["D:/Blog/public/data-structures-and-algorithms/index.html","1fbeeef418704868839c7d8d8948f36f"],["D:/Blog/public/deb/index.html","9a3a5d719f05cab3ccc935025cff2459"],["D:/Blog/public/decorator-mode/index.html","c474430834d6735845c71190810ee269"],["D:/Blog/public/definite-integral/index.html","2760b9a2e38d07af346040c743f30955"],["D:/Blog/public/dependence-reversal-principle/index.html","60a06230177477d10a167ddae9c6186f"],["D:/Blog/public/derivative/index.html","77f2a2f51895b7e23b09b4488b19e94d"],["D:/Blog/public/design-patterns/index.html","dba1818f8bd3c9ec24f9a86ba9d272c8"],["D:/Blog/public/differential-equation/index.html","471581905ff0a4b4f9b063dc906680b7"],["D:/Blog/public/differential/index.html","78c4483d92681a527b2e053ad74b5f43"],["D:/Blog/public/dimits-law/index.html","60e4f4efe482fb1e34c9e622abfe1435"],["D:/Blog/public/docker-virtualized-container/index.html","80bed49f9575cb558918976f0dbb2de6"],["D:/Blog/public/double-integral/index.html","3bb34c6ee02f50962011ceb7e775f6b3"],["D:/Blog/public/dynamic-array/index.html","9acc8491c19a32e3e7a821118147fca6"],["D:/Blog/public/dynamic-programming/index.html","2ff3925029799bcf55cdff3e056b3cba"],["D:/Blog/public/encoding-algorithm/index.html","bfddcca3f26ad6ba97d5411265471fd4"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","eb2c32b3bcf469d7647c609189d948d4"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","8ae30d374190ed67092c8b61ce9ca1fd"],["D:/Blog/public/factory-design-pattern/index.html","e72c9dfc28e510c26afcff31bc0d5f25"],["D:/Blog/public/file-input-and-output/index.html","bbdfc027a05a16ee6c5b9a3ae548e326"],["D:/Blog/public/flyweight-model/index.html","e629cf05d221689bdd0e3ac9cae41117"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","1181b665db33487b0d18c348a460f7ad"],["D:/Blog/public/gateway-service-current-limit/index.html","bcd945fea7ecae9f199bf1df364181e2"],["D:/Blog/public/gc/index.html","a8facbfb6663614e359056cf9c137a2f"],["D:/Blog/public/generalized-integral/index.html","e505fe5a372d1d69307ec8580a28870e"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","7bd80d07b4569ffa793e0d66d24c32be"],["D:/Blog/public/hash-algorithm/index.html","097b389984d0c6a1e2e88c86305bd6f4"],["D:/Blog/public/heap-sort/index.html","eb73d14a3ad461d9d1058ed5378bc3f3"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","73b090ca80c4bc7fa3fc2236fdc2bf6c"],["D:/Blog/public/http/index.html","f9aac96794a15b7dd7ccf7bb727d5ffd"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","a2cfad733eaceee008aaeb642c5c50a2"],["D:/Blog/public/index.html","9bf6ae5f0bf533abcfb5b8677cfb2430"],["D:/Blog/public/infinitesimal-and-infinite/index.html","99b381ba5db2e2393c9ccb694d33db52"],["D:/Blog/public/interface-isolation-principle/index.html","8d55b03dffec351a7ef273e054940391"],["D:/Blog/public/intermediary-model/index.html","dd68625f6d5c35cc99477f50cce5fbf8"],["D:/Blog/public/interpolation-search-algorithm/index.html","0889d2ab3df028088f7c4fd862104740"],["D:/Blog/public/interpreter-mode/index.html","5afa082bf6278e6a29a89c81b2df7d4a"],["D:/Blog/public/introduction-to-computer-network/index.html","4dd1ae038d9ae0b5e2ef262dae3a6d28"],["D:/Blog/public/introduction-to-operating-system/index.html","0cc9e2d87089830dc06fbaa342c66dac"],["D:/Blog/public/inversion-of-control/index.html","79f98e071a308062b0c16e17f51c1cc7"],["D:/Blog/public/io-Interview/index.html","1775c21d51b309bf54154086404888a1"],["D:/Blog/public/iterator-mode/index.html","6867aa1e6daa8a484fa87346da666a47"],["D:/Blog/public/j2ee/index.html","4b76d385e969b0fc734cacdcae16f2b8"],["D:/Blog/public/j2se/index.html","786791d9c0b679ed403c68201ce9d372"],["D:/Blog/public/jdbc/index.html","0f817d263b0b8c0de641ca9691e0b93a"],["D:/Blog/public/jdk/index.html","cb737b8210bc6615acd443e862f56253"],["D:/Blog/public/jmm-memory-model/index.html","02a323fd373f183284cdec261f8a0f47"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","93d35ec30361d72dd5b6f42e0315da26"],["D:/Blog/public/jvm/index.html","17b93cdc8d23a2920229bb3273a5082b"],["D:/Blog/public/law-of-robida/index.html","ce9d216ce233cf5e90065334213d391b"],["D:/Blog/public/limit/index.html","88f5d08f43412db08ef61f7f903f7a98"],["D:/Blog/public/linear-search-algorithm/index.html","4a75da66de6886b8f9b0f8745641fdcb"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","d563f42e775e23943fee2eb92e5f577b"],["D:/Blog/public/linux/index.html","c8d0c4f7f0c531e48965948849c4d3f5"],["D:/Blog/public/liskov-substitution-principle/index.html","69edf252833e6764bfa4d2f360f29e6a"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","0d652aedb8a4d5c447ff79b0d5401378"],["D:/Blog/public/maintenance-1/index.html","7b9c800549252870c95efa5fd044b845"],["D:/Blog/public/maintenance-2/index.html","2a307584528425dcf7d7bd5bb9da0b5a"],["D:/Blog/public/maintenance-3/index.html","4c6923dc7bbbd78b10211cbd15463c0b"],["D:/Blog/public/memo-mode/index.html","2f71f80d4d00b4d8181fc023a083f1f9"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","0190e1e39bcaba89cc24e66524a4c0c7"],["D:/Blog/public/multi-function/index.html","1d59605a623c33f51daaa71026d822b5"],["D:/Blog/public/multithreading/index.html","387892362ca7b8aee94e5ada2a13f225"],["D:/Blog/public/mvc/index.html","2276a9bccebf429c12cdb78cbb662f3f"],["D:/Blog/public/mybatis/index.html","b7f3b80d29a2750bb8419472369c10e1"],["D:/Blog/public/mysql/index.html","42d6a8bb3f61bb90e7d2d0903005ce97"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","eeca8d42cb01b0930028d14ef53debb9"],["D:/Blog/public/objectoriented/index.html","b2625c2d454e9541f954fbdf5cd720ac"],["D:/Blog/public/observer-mode/index.html","fee4e3d8db9bcbad2f316091ef209bf3"],["D:/Blog/public/off-heap/index.html","506350a8eb4315bfcd7e002854dba64b"],["D:/Blog/public/operating-system/index.html","9951247b20fa2e81023646ac668a290d"],["D:/Blog/public/page/10/index.html","29acb78e9c4311fd07a0d6fb6e1a60a8"],["D:/Blog/public/page/11/index.html","eb3d903698c1550f6e219781df54030a"],["D:/Blog/public/page/12/index.html","a7d759e9bc10dc89318bb27ecdc2cd4e"],["D:/Blog/public/page/13/index.html","83f32b0784ea1b594dcd3b57da1e5efe"],["D:/Blog/public/page/14/index.html","75ea49e00cc6e2afdf00cc50e3629cc9"],["D:/Blog/public/page/15/index.html","5d36fc03f13d00ff9ddc185ab937db40"],["D:/Blog/public/page/16/index.html","f3061a61ecbb265951c9932fc32bd0a7"],["D:/Blog/public/page/17/index.html","60b2915248500023ae716c38175dcf87"],["D:/Blog/public/page/18/index.html","39991f4af7a5326cc8edaa68d5b64961"],["D:/Blog/public/page/2/index.html","e71cd75443ec346e7171a7254a512ba7"],["D:/Blog/public/page/3/index.html","8934e75868fd5348a177256ff4ac9bba"],["D:/Blog/public/page/4/index.html","ae45747226123ebf7f48ff649e73dd17"],["D:/Blog/public/page/5/index.html","ab6d5d78e1867ab333f91e4c0522968d"],["D:/Blog/public/page/6/index.html","bb87fe83beb475f860a106adb06b811b"],["D:/Blog/public/page/7/index.html","17d0a9ab99fd3b7206013085d46aff07"],["D:/Blog/public/page/8/index.html","4d8c9cf6d286dd39fbbf6d38b287d4b0"],["D:/Blog/public/page/9/index.html","b3be755fa89ab3b84830b719892a3783"],["D:/Blog/public/palindrome/index.html","0b3f9d1a4f124daa9e86ce2a88caf9f9"],["D:/Blog/public/partial-derivative/index.html","0be1ff10cf9fc6af154590d5fdbd518c"],["D:/Blog/public/pass-by-value/index.html","6f1eb9db335dc66efb1f40c726da6d2e"],["D:/Blog/public/pictrue-bed/index.html","bb221f9e2b31ca11b64932565ab31976"],["D:/Blog/public/principle-of-opening-and-closing/index.html","3772365c424631f793fb8ed156406d73"],["D:/Blog/public/principles-of-computer-organization/index.html","06d83ef4ecf71b36d6af8a1bf916cb06"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","b5dd03f8e5912e072d2be168f39d9a60"],["D:/Blog/public/prototype/index.html","fa5662e33c0fe491827e0d4a77340e49"],["D:/Blog/public/queue/index.html","76904424482eb6327935021cb6edfe89"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","dc92f198706d54bdd1e425e32aba085f"],["D:/Blog/public/redis/index.html","cfc332134edbd2f9702358ca0bcc68b3"],["D:/Blog/public/reflection/index.html","a20ecae70474dac4f2298a83bca7f089"],["D:/Blog/public/resume/index.html","fdf1ef2ddbf3b49779ac1c2a89e78c75"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","3b1bb811b09acf3b463ff12faf433084"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","c9f190c4ac35e61b4b9dda5e4ddabfc6"],["D:/Blog/public/select-structure-programming/index.html","38c8860302ff59cbefe7234568e67b33"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","66de33372b5e0ac5513f0a0bfafb20ce"],["D:/Blog/public/sequential-programming/index.html","d5f1876778528b17d68c75516e874651"],["D:/Blog/public/series/index.html","b1d766308cb5cc515e010449cf9806e7"],["D:/Blog/public/single-point-login/index.html","7ddd59ea9e3de63a81f3a1b0cc4c24ad"],["D:/Blog/public/single-responsibility-principle/index.html","72201b2e497766cf71f331204eccc147"],["D:/Blog/public/singleton-mode/index.html","91b89cef44dd7459ddae7648ae198a87"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","88f4e988c5a5becb19dde13ee5da2454"],["D:/Blog/public/sparsearray/index.html","fe089fd6f77a3a524b072a7a9c7218b0"],["D:/Blog/public/spring-architecture/index.html","8a982f9c89d160b3c5e7b0fb1fa55b31"],["D:/Blog/public/spring-relate/index.html","b52c5a8afdde75b7892aa910abaee9ba"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","9a91854daac1b44737300efe5526a32d"],["D:/Blog/public/spring/index.html","50d845b3995575af2eda004fa351d4aa"],["D:/Blog/public/springcloud-alibaba/index.html","631098f571164f2524975b4fbef352d2"],["D:/Blog/public/springcloud-bus-message/index.html","ce524146a8f22ce55fe474e414ff4965"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","95c3d6d78c1587a82dd2f92ace679ca8"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","f9157f4ebe38bb6da06ad5d7fa9c9fcd"],["D:/Blog/public/springcloud-stream-message-driver/index.html","e0ea0a92492a525e45bd55d524ce7bf1"],["D:/Blog/public/springcloud/index.html","5fd62f80d66bfbecc862857020de97c5"],["D:/Blog/public/springmvc-environment-construction/index.html","42d6e165f2b32130b6d1d884d8a60998"],["D:/Blog/public/springmvc-work-stream/index.html","7f5e75f9140f659ccc497849c456559c"],["D:/Blog/public/sql-injection-attacks/index.html","93a96953187789910414691ccc6d983e"],["D:/Blog/public/stack/index.html","212bd59225c76586232c3afef7421edd"],["D:/Blog/public/state-mode/index.html","06f5bfb8b48350647f7d711369a57bcd"],["D:/Blog/public/strategy-mode/index.html","eb286d3fbf7f8a1880caa0470f425489"],["D:/Blog/public/synthetic-reuse-principle/index.html","e2fc6873661200257caa3ff2c12c7cbf"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","4411e19598b4c52d930e20f6b0d5a2bd"],["D:/Blog/public/tcpip/index.html","83cb0d2eeec1bf07a653993026c5e502"],["D:/Blog/public/template-method/index.html","a739522833351231bfc997a03abf73b3"],["D:/Blog/public/test-case/index.html","db51afd6c72dcda7efda0abd0a4d3c6b"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","7a0e3764f267d781c80e61eeb2e1879f"],["D:/Blog/public/thread/index.html","7e9c0486cf4ff5c6157e4e0cff5d49c7"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","2a02ed525b229f09cb3560ea3e6b2cbd"],["D:/Blog/public/ubuntu-set-ip/index.html","bccd6d8d1916013bf67e3c60901176e2"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","e4520baa2bea3cf220ee7d705acd728d"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","9da7c59845750e1eb90521fbc4f70caf"],["D:/Blog/public/users-create-data-types-themselves/index.html","5fe080fe8d689dec96029188a7ba051e"],["D:/Blog/public/visitor-mode/index.html","6976ff963d9b81d330c2beac3e4eed67"],["D:/Blog/public/xml/index.html","a7859425afbf3c0e479488826a832807"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","c953b685d0040f7f324f11d68057d1b5"]];
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







