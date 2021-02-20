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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","094021b94484bf1a74d5815360301863"],["D:/Blog/public/AIO-blocking-model/index.html","b88406a85b81ae437b9a408b5e66fd76"],["D:/Blog/public/BIO-blocking-model/index.html","616d34d3a7baa63c5593e86b1a3dc2e7"],["D:/Blog/public/C-algorithm/index.html","7d2084cb1429a5b6d019e53232ed1a99"],["D:/Blog/public/C-programming/index.html","6858431b48be37e5704659c8f4be4d8f"],["D:/Blog/public/Good-use-of-pointers/index.html","11d8b0ccf13e2e52135b2073ea4aad89"],["D:/Blog/public/IO-model/index.html","8572b3b2b0ec88bcd828890b287ffbcc"],["D:/Blog/public/IO/index.html","98cb53fc9a2ee117d8a3ae8993743d40"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","3861d3c090ec80c052a033dc3125b70a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","33961fc992b2cce0afa367fa7ec2e190"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","abc2bcf43bc8d513a4ecb57408ca9e12"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","dacad65141a1e1c4a598a60f03eb0a64"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","3199b49e27819035f11d48172278f4a7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","00397c6a9ed2c00f91de6c3c3c3bc065"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","de12413b89217b09e59a4d7270e5872b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","bc380bb805a0ceab9ee62f226bdaa61a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","033e35966b41fd4158b7a805669b8d4b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","42f7ccd24535e80a7be785e7a616d1c1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","f17f42842759d9e40280ca27f9c562e9"],["D:/Blog/public/Java-network-programming/index.html","3acfbad73c7436a32a2e8eaa6d16af6f"],["D:/Blog/public/NIO-blocking-model/index.html","5ebfe02484fa4fdc455f786109ea9274"],["D:/Blog/public/Native-method/index.html","4d91433412aa3c02dab396c2ba6f4d26"],["D:/Blog/public/Sandbox-security-mechanism/index.html","ac96838e16b8d7ff2d3156680e6c8872"],["D:/Blog/public/SpringBoot-startup-process/index.html","f011bad0d8563b4068e38cd69b5df39e"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","6e684873b7850f3a586bb327d6f2d831"],["D:/Blog/public/Unitest-framework/1613147342997.png","fa212602da6a0c2e4ab81932e2c75959"],["D:/Blog/public/Unitest-framework/1613147496034.png","fb8fb1de9dea6723da6655e5839071b2"],["D:/Blog/public/Unitest-framework/1613149415607.png","701939feacc13efa4cacc1c011cd4772"],["D:/Blog/public/Unitest-framework/1613149552674.png","2b99ab4b3ceac7811b7ff973a8255884"],["D:/Blog/public/Unitest-framework/1613149845499.png","d5edfd7d7be45c825f3c5711f91cf99d"],["D:/Blog/public/Unitest-framework/1613199579426.png","541d81408c0a8888cad00aac49503689"],["D:/Blog/public/Unitest-framework/1613199693463.png","eee76d2a6bbbaa2b18686de5d15e4b90"],["D:/Blog/public/Unitest-framework/1613201703588.png","c482912ce5975fcf6424f54967a04ee7"],["D:/Blog/public/Unitest-framework/1613202112317.png","0c2eb115b6ddd8ccbee66b9a10c3b488"],["D:/Blog/public/Unitest-framework/1613207825662.png","46612333f91fb08d11bbcd71203dd100"],["D:/Blog/public/Unitest-framework/1613209390861.png","b0fa2badf3e229650b7c9352cdb3a885"],["D:/Blog/public/Unitest-framework/1613231860846.png","77b157d07a6a0ec5a8869d4d32a5f4b0"],["D:/Blog/public/Unitest-framework/1613233980464.png","2f6c54ae5225ff55147a56468f3c2d98"],["D:/Blog/public/Unitest-framework/1613234000816.png","17e04a5b9d28590aff758324ef2560e3"],["D:/Blog/public/Unitest-framework/1613318481043.png","a6fc0054631f98a47fab59a18fd74cad"],["D:/Blog/public/Unitest-framework/1613319975732.png","9d229584d9af8d77053f62517ae0f6f7"],["D:/Blog/public/Unitest-framework/1613320887518.png","e89da2326af7177ddfade11232fc8cb3"],["D:/Blog/public/Unitest-framework/1613320910898.png","92d8321a4929754ef93066a5fb546b36"],["D:/Blog/public/Unitest-framework/1613321695363.png","57b43dba7110bbc028d2afdc352f1f0c"],["D:/Blog/public/Unitest-framework/1613382483121.png","89a6e495519d3552ce14316747002e57"],["D:/Blog/public/Unitest-framework/1613396353835.png","66342708e81223a005185b78803ffddb"],["D:/Blog/public/Unitest-framework/1613572027235.png","f8ae449948cedba80762326c2045b5a9"],["D:/Blog/public/Unitest-framework/1613572049278.png","a54870854361cd61b3f1780683bfac35"],["D:/Blog/public/Unitest-framework/1613574779605.png","b816007f840be276bea17e08c3edc98a"],["D:/Blog/public/Unitest-framework/1613756103321.png","c49b04974e587992708ff0e68734533a"],["D:/Blog/public/Unitest-framework/1613756685341.png","221904cb98e3247e85a995af4c316ea5"],["D:/Blog/public/Unitest-framework/1613756748533.png","145350445ae6d8b9f3447fcd242c25f0"],["D:/Blog/public/Unitest-framework/1613756844713.png","a11d8a7f97ac68b6c6ccff01ea02ace9"],["D:/Blog/public/Unitest-framework/1613756873832.png","443b20f6ac52c989f6cb87da992d6e15"],["D:/Blog/public/Unitest-framework/1613757056609.png","58de11268b65ffcffaa5c6aeea72d4fd"],["D:/Blog/public/Unitest-framework/1613757120441.png","95ad4cf246b6655a8cefa8ed51c03e27"],["D:/Blog/public/Unitest-framework/1613757139743.png","e3b78e44d1bbc6835c3e4eccbf9a6880"],["D:/Blog/public/Unitest-framework/1613757341191.png","eb380cb7b190b88495a249ff6d3d4955"],["D:/Blog/public/Unitest-framework/index.html","2a3d672bc6104f158cd0ae8e8aacf790"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","1d21b3023b4f9167bf63376e77e542cb"],["D:/Blog/public/agency-model/index.html","833246d987d9d070d25fc60dd47661ec"],["D:/Blog/public/appearance-mode/index.html","59d7e906d0d629c8942204fad74e77ef"],["D:/Blog/public/archives/2019/01/index.html","0b6e0b94f3016acca803b63cab14b79d"],["D:/Blog/public/archives/2019/07/index.html","3343cf150a1f36d46b0b238d379fe1aa"],["D:/Blog/public/archives/2019/12/index.html","e5aeb07a423755a6e543e50ec2ac2f0f"],["D:/Blog/public/archives/2019/index.html","4973238bd8aa4613b8a086ac6752d412"],["D:/Blog/public/archives/2020/04/index.html","fda3f214fdbe267bcaf7d29f029ebffb"],["D:/Blog/public/archives/2020/05/index.html","b9cf8094006e446be21e73a3743ae3ef"],["D:/Blog/public/archives/2020/05/page/2/index.html","e74dcc1b17221b44165f163df72340ab"],["D:/Blog/public/archives/2020/06/index.html","21a94fc953c352ac57be7f8b108cc631"],["D:/Blog/public/archives/2020/06/page/2/index.html","fbf4fd35815233fc4f29925d38eef0cb"],["D:/Blog/public/archives/2020/06/page/3/index.html","791931005154bd343c35522a56fd58fe"],["D:/Blog/public/archives/2020/06/page/4/index.html","c5d6f590c56ea51087b2f1ef367bc449"],["D:/Blog/public/archives/2020/07/index.html","3e05a8461119e7e95cc7a666d00ff741"],["D:/Blog/public/archives/2020/07/page/2/index.html","ca480781e6ecf7c59d5d1f05d303b563"],["D:/Blog/public/archives/2020/07/page/3/index.html","bdedcc714f8bb963b51e70fde5620f5b"],["D:/Blog/public/archives/2020/08/index.html","a340ec5443aa31ed03f4f9135512f6e5"],["D:/Blog/public/archives/2020/08/page/2/index.html","cfec448e6fd9808645157d5fd1147274"],["D:/Blog/public/archives/2020/08/page/3/index.html","700456f03078bc660f85be89155b363f"],["D:/Blog/public/archives/2020/09/index.html","40700c1a1a4885e1d43ec20c74a295fb"],["D:/Blog/public/archives/2020/09/page/2/index.html","218a508f866ef5297194c9b188dfb1fd"],["D:/Blog/public/archives/2020/10/index.html","659339d820bb645e95d96a6a51b8219e"],["D:/Blog/public/archives/2020/10/page/2/index.html","17bb8dc640d8a1b37eecf643289cbddf"],["D:/Blog/public/archives/2020/11/index.html","ab77a29291bc208f4997aed7a33e9571"],["D:/Blog/public/archives/2020/11/page/2/index.html","459633946ad5e01a5fe3ac9c1802c577"],["D:/Blog/public/archives/2020/12/index.html","1bf8693ceefc031c21f96f56f6862f27"],["D:/Blog/public/archives/2020/12/page/2/index.html","0e1362532cc7875040884b0f9d8b143d"],["D:/Blog/public/archives/2020/index.html","8ad45ef20c74368918c48d141a2490dc"],["D:/Blog/public/archives/2020/page/10/index.html","2b3da64fe4628f21e9daccf987abebdc"],["D:/Blog/public/archives/2020/page/11/index.html","3ff14357c5b08ab2fa5c24ece88d4372"],["D:/Blog/public/archives/2020/page/12/index.html","e9eeabaea18f6a1f0bd231d1da033de2"],["D:/Blog/public/archives/2020/page/13/index.html","015c379b4f2ba0d6c3d2ccaf7d41d913"],["D:/Blog/public/archives/2020/page/14/index.html","130197a3057533d8a6d58a752057f50d"],["D:/Blog/public/archives/2020/page/15/index.html","9b235badf911b6266342e1185d817480"],["D:/Blog/public/archives/2020/page/16/index.html","ffcfbd81642cc42474606d46b7b83919"],["D:/Blog/public/archives/2020/page/17/index.html","c8053e0194536a2e624c0687ebfa29a1"],["D:/Blog/public/archives/2020/page/2/index.html","90a40ec11f7e9c5df38ad124eaef6285"],["D:/Blog/public/archives/2020/page/3/index.html","128049ecc30c83e57549985eb98fcadc"],["D:/Blog/public/archives/2020/page/4/index.html","698e8e98e7e026941d39599a3de32229"],["D:/Blog/public/archives/2020/page/5/index.html","75d7387c8ee575f637a448c60111de8d"],["D:/Blog/public/archives/2020/page/6/index.html","12de156879e276d562726f293f13f537"],["D:/Blog/public/archives/2020/page/7/index.html","370239e6bf8514343b5aa1989c5fff40"],["D:/Blog/public/archives/2020/page/8/index.html","b737764bf52c246e81387290da086b8b"],["D:/Blog/public/archives/2020/page/9/index.html","9a8ed31d7deaee388f5c73116e3b3346"],["D:/Blog/public/archives/2021/01/index.html","c465c7718f3fbdca498948745e8e288d"],["D:/Blog/public/archives/2021/02/index.html","f4cb3f58bc2c31107c045a31cf05ae72"],["D:/Blog/public/archives/2021/index.html","b817211678a88c45f5825c1604bbf527"],["D:/Blog/public/archives/index.html","780a60e21b97075f60ce7a4a22e12a8e"],["D:/Blog/public/archives/page/10/index.html","fe5a9c6f7f9a2f3d38bcfe7891884aaa"],["D:/Blog/public/archives/page/11/index.html","6061862fe9cf8dbbe13165c5480fcba7"],["D:/Blog/public/archives/page/12/index.html","ee159e97c66ecc6fe9a43360ed795cb4"],["D:/Blog/public/archives/page/13/index.html","c58dc48eeebc6a58ce30b9c080b179d6"],["D:/Blog/public/archives/page/14/index.html","c84a1db0a120281f5d8b7226ef136910"],["D:/Blog/public/archives/page/15/index.html","e3ac79230634552e7839d279754a160b"],["D:/Blog/public/archives/page/16/index.html","7cbb05285e470174d67401bd9af774c1"],["D:/Blog/public/archives/page/17/index.html","3e44a71ade8a2fa9cd878172ef9b0e57"],["D:/Blog/public/archives/page/18/index.html","bf847696890b080d3ee8894ad7fa684f"],["D:/Blog/public/archives/page/2/index.html","23b5794311cfed7a4558fc16f494e00b"],["D:/Blog/public/archives/page/3/index.html","1e4538a624c8b3339c8cb77905adddd5"],["D:/Blog/public/archives/page/4/index.html","5c7b9b18190f7e3f427b8a560115dbf4"],["D:/Blog/public/archives/page/5/index.html","6be9f53a3d7edf77d0dfe41bf24ff362"],["D:/Blog/public/archives/page/6/index.html","1f7a59e0f67bd4fc879632082bea0f2c"],["D:/Blog/public/archives/page/7/index.html","e99e4e48935c5f9a11ae6079f71e63b7"],["D:/Blog/public/archives/page/8/index.html","4e73ac779b127821aebc407c06f246a3"],["D:/Blog/public/archives/page/9/index.html","d684c1a377e5547a18fb67d97e0b31e7"],["D:/Blog/public/array/index.html","d39bce5f770ab03c4d86ea16837c90b3"],["D:/Blog/public/automated-test-katalon/index.html","b60b2acdce8b2cedc1d6c689d7b330e6"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/1613121232860.png","fd1a272accabb1578626d3b294b5009a"],["D:/Blog/public/automated-test-selenium/1613234642404.png","0dd973f7e9465929bbc7e4500aa1c2c7"],["D:/Blog/public/automated-test-selenium/index.html","f759a265ec9f2d6573bbf64a03b3a7cc"],["D:/Blog/public/binary-search-algorithm/index.html","c04a32405d514ceaa225159e0008503d"],["D:/Blog/public/binary-sort-tree/index.html","d59a491c392b91cde5893d5e5502a3d2"],["D:/Blog/public/bionioaio/index.html","a4f85de4e4e55288f056ce3692369f83"],["D:/Blog/public/bridge-mode/index.html","ca9d6c4d455edbc710993a64a6b30274"],["D:/Blog/public/builder/index.html","64e03c87e07315bfd672e2eebef3320e"],["D:/Blog/public/c-pointer/index.html","55e8efecdeb239b3e83b018763edbb3b"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","d9edf16db586459eee00cb7ead4d9b60"],["D:/Blog/public/chinese-and-english-switching/index.html","d8e0920f5165305fb0a9c9fbd47546bf"],["D:/Blog/public/combination-mode/index.html","bae11b2fe818149924d6f629fc67b456"],["D:/Blog/public/command-mode/index.html","97e03f072f660123552baeeae19cfed1"],["D:/Blog/public/common-commands-of-unix/index.html","1ddeb3ab16bea852dd50b668f10cbbbc"],["D:/Blog/public/computer-network/index.html","920cc5cb82f5ac26afbbb92c666a04d4"],["D:/Blog/public/concurrency-principle/index.html","f4fc5db61c97e2b78d065c965625c82f"],["D:/Blog/public/continuous/index.html","dd7d3ee0f2e88e3b2211fc1e14af29ab"],["D:/Blog/public/contract/index.html","e613b3da53bf7f60dbcf5cc59912dd92"],["D:/Blog/public/css/octo.css","c41b064b3e9939ae12d15af099512894"],["D:/Blog/public/cycle-structure-programming/index.html","94dc24085d3320df082afe52af8c3e46"],["D:/Blog/public/data-structures-and-algorithms/index.html","b57f80ed6d0d8f1a3ab625c38eb541a4"],["D:/Blog/public/deb/index.html","f1b5a7e300dde86b02e1953d7d13791e"],["D:/Blog/public/decorator-mode/index.html","4f9cfcec61a270c9d0444b0b47ebf34b"],["D:/Blog/public/definite-integral/index.html","0ab3047c1b6bd9213aaafca7e0063c6e"],["D:/Blog/public/dependence-reversal-principle/index.html","4906e1f9af49d236bdac14680b5712b3"],["D:/Blog/public/derivative/index.html","55ce554bf43087a4768239b7e59db794"],["D:/Blog/public/design-patterns/index.html","cb25f53bf7e4beb463b3e19958e8eeca"],["D:/Blog/public/differential-equation/index.html","1ef511c1bd3a0144810424b6c86de91c"],["D:/Blog/public/differential/index.html","fcfbcfb35d671f70475ffa0852f9ee5d"],["D:/Blog/public/dimits-law/index.html","20a72865e0ab9e1821edaf6cd156326d"],["D:/Blog/public/docker-virtualized-container/index.html","9856f1addee576b9db835cfa3fb42acc"],["D:/Blog/public/double-integral/index.html","0859b861dee3243e71a7a624d4e88ab4"],["D:/Blog/public/dynamic-array/index.html","df5e714c612ff534c3e03643a1ce65d5"],["D:/Blog/public/dynamic-programming/index.html","d7118ad63fcfef7ee43e33649bcd974b"],["D:/Blog/public/encoding-algorithm/index.html","58d741905e3ba7a16c469b046663e336"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","11640aee7f84d21f5b4673819df91abb"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","105c90f955c04423fc4cf20e08e4ac32"],["D:/Blog/public/factory-design-pattern/index.html","49611657c1aafadaa21854ba89ce10ce"],["D:/Blog/public/file-input-and-output/index.html","9006f351cd621ce7fc59116777d150cb"],["D:/Blog/public/flyweight-model/index.html","e7b8887daec68b410c64ca4192ff7c12"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","c809b0303a40424fed922ad75110cfef"],["D:/Blog/public/gateway-service-current-limit/index.html","7bd10d67712eced6a12ca0cca9090144"],["D:/Blog/public/gc/index.html","d6f333a4e865ab784645ff044f776fb2"],["D:/Blog/public/generalized-integral/index.html","3538b7e6483366dfc1077e2bf4579827"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","09ff488c17b6e6b82c4ebf660aec27b0"],["D:/Blog/public/hash-algorithm/index.html","cb1450e8ba51761ba64f5f560ba89a31"],["D:/Blog/public/heap-sort/index.html","3d2328c1e27775aa71957970db978b9b"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","77e8a490f154dc68a7ba8879e5a70427"],["D:/Blog/public/http/index.html","95a1843cbf10b0b777f4cd8abf0036c0"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","5debdbcfb8b04f12127f4f27085aab5b"],["D:/Blog/public/index.html","caeb8e2286eba7427244e8fbea5ba169"],["D:/Blog/public/infinitesimal-and-infinite/index.html","0db4f6f556d22d5476be8ab4836a99b4"],["D:/Blog/public/interface-isolation-principle/index.html","a83004d4ae3726625ac2c0064d333fe5"],["D:/Blog/public/intermediary-model/index.html","af1b52e4190e7263c2a1f085ee0a0c6f"],["D:/Blog/public/interpolation-search-algorithm/index.html","45737fbf5c8eba082c20913cbb2a0ce2"],["D:/Blog/public/interpreter-mode/index.html","29a2cfc8bdcba7f9ab5f08eef4ff75f4"],["D:/Blog/public/introduction-to-computer-network/index.html","b0c54825b1ecafe4d42a8c7d3206309c"],["D:/Blog/public/introduction-to-operating-system/index.html","856e0c8703a3fb4f9eb10963c2b7bed1"],["D:/Blog/public/inversion-of-control/index.html","64c762b9539b3030c5bf89a203071f1d"],["D:/Blog/public/io-Interview/index.html","adc9ab6511014e2d5c84e3ba2aea7338"],["D:/Blog/public/iterator-mode/index.html","6b99c2b5df00e80afa7a42b0bade5481"],["D:/Blog/public/j2ee/index.html","b2ed3a708e1a93467e6674a5d74c5353"],["D:/Blog/public/j2se/index.html","80ea3618d1ab30f008806d7b13d63e61"],["D:/Blog/public/jdbc/index.html","b1c916efc23090347312f966b4229c9b"],["D:/Blog/public/jdk/index.html","fbecebd8a9c5750c95296401e423b94a"],["D:/Blog/public/jmm-memory-model/index.html","8bb35e214b4a6b195666d26a82f23b8d"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","bacdac6809b8b01996990fc4647e7f2a"],["D:/Blog/public/jvm/index.html","aa10bd2c49612f383fc5ed1ea68bdc61"],["D:/Blog/public/law-of-robida/index.html","75a74e8d09f6c37b285b42db73b2deea"],["D:/Blog/public/limit/index.html","9999684fa6b3b11be6594ddd0af89f84"],["D:/Blog/public/linear-search-algorithm/index.html","75c680ffc31388b763c981664775716c"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","4c72ed59396f70ed81ea91bab46bc6dc"],["D:/Blog/public/linux/index.html","01c529e13b18c45f38c889e246d430d0"],["D:/Blog/public/liskov-substitution-principle/index.html","f9a8df08a2a63f09c4924ffae5045fc3"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","cc954a9355699ab9ba944ab9c2816567"],["D:/Blog/public/maintenance-1/index.html","8075fd53f27eb35be602d77286d64d7f"],["D:/Blog/public/maintenance-2/index.html","f7926d549b34540c269391254d16d2b5"],["D:/Blog/public/maintenance-3/index.html","825f09f1ad5160f278896d5d6b19de7c"],["D:/Blog/public/memo-mode/index.html","0910a68c33adf618ceb96a0469aeb96f"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","1a2bf36e40a4c2de9a9627f35f100eeb"],["D:/Blog/public/multi-function/index.html","49b1b41a4f41401743e2532c2a6fdd83"],["D:/Blog/public/multithreading/index.html","133a8ad6ac0fc4e0a94602bb7ba6557c"],["D:/Blog/public/mvc/index.html","520b7be9f78981b0e423a59e9dd2f473"],["D:/Blog/public/mybatis/index.html","414818fc2249826fbaebeb15923b2f1e"],["D:/Blog/public/mysql/index.html","91fb60fef6b265ea187721a861c1fcd2"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","3521aa901d225e2db79a2ccb4e616562"],["D:/Blog/public/null/index.html","b66618c711ebf74c27802a7d3fb49963"],["D:/Blog/public/objectoriented/index.html","2d53f6db4cadbc3efecef427e676d114"],["D:/Blog/public/observer-mode/index.html","193546a2f2b6bdb9d92d2ea7cb9f8e1d"],["D:/Blog/public/off-heap/index.html","c0308cbcabadc8e482551856be228577"],["D:/Blog/public/operating-system/index.html","8b2b601d33d3bad44b1a9c4f93fa56f8"],["D:/Blog/public/page/10/index.html","765571ef767df2502ccf5af54fa4e7ca"],["D:/Blog/public/page/11/index.html","412b49a552da3d726ec2f7df29f22588"],["D:/Blog/public/page/12/index.html","273abf48cdf92fabbf8dd9d9f4c57afe"],["D:/Blog/public/page/13/index.html","44dd6ed4d9bb667e930e693261c49302"],["D:/Blog/public/page/14/index.html","fa4a72994030569555d8219bd1d590a8"],["D:/Blog/public/page/15/index.html","f98d0daf9f24f963bdd502290265205e"],["D:/Blog/public/page/16/index.html","11d062a0256288e5c41fc58909bb1e7f"],["D:/Blog/public/page/17/index.html","9fc96ee0692e7aca5216a892380efdc1"],["D:/Blog/public/page/18/index.html","f607690b58724300bd88df7dc0370e4c"],["D:/Blog/public/page/2/index.html","4f7087c171b1ec021361443a20112fb8"],["D:/Blog/public/page/3/index.html","f96de15a23509bbb17da3346b1a6f532"],["D:/Blog/public/page/4/index.html","a4ada7b1edadac71ee9eb7d061a40246"],["D:/Blog/public/page/5/index.html","22fa83a884b86f38a5e3ed07faba92f3"],["D:/Blog/public/page/6/index.html","9dd3757cffaf2f800f5a90a20de1934d"],["D:/Blog/public/page/7/index.html","e980680ef2046f4530c489997fb550b8"],["D:/Blog/public/page/8/index.html","109410f607f7fb5e4bad017b134faab0"],["D:/Blog/public/page/9/index.html","6acbf3622e790bed273f00d7b20742a4"],["D:/Blog/public/palindrome/index.html","f00a1f06f5fb33f3eaf3251182c38c6e"],["D:/Blog/public/partial-derivative/index.html","c1107d17736cd920a9abb2737ae9302d"],["D:/Blog/public/pass-by-value/index.html","98e49eea731ec041350c3ad02e14e570"],["D:/Blog/public/pictrue-bed/index.html","0cccaf08cbcff299e55b0308efea6ee1"],["D:/Blog/public/principle-of-opening-and-closing/index.html","db5951eb537de034ea3a881a079264c4"],["D:/Blog/public/principles-of-computer-organization/index.html","c193f0cd1114e70aa28694e4b4404e05"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","7d31f7621f37e8b173ac98147574c9f2"],["D:/Blog/public/prototype/index.html","5bf74dcea78e6667a5de7bd864ac0bf5"],["D:/Blog/public/queue/index.html","c60156202d265194b03b7867f5f65ccb"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","9ee887d04bf9f3842646c8dc853e9ca6"],["D:/Blog/public/redis/index.html","3dd50a670ef22633dcccd3258ff2d674"],["D:/Blog/public/reflection/index.html","9ba753e91e9ee43377bfe55e24ffc4d6"],["D:/Blog/public/resume/index.html","df88c8da0aae64e1f4878aaa6c183bea"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","f2ec21e66032dbc9ab0bf6f63c117d73"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","9ebd766b05ec4e120556b9bb69dc98fa"],["D:/Blog/public/select-structure-programming/index.html","f67e07f4e527f51415ac7a09fe585d7f"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","174ae330ff7554ad9132a9053567e519"],["D:/Blog/public/sequential-programming/index.html","6d7fc4930b182952f156f3783e3e670c"],["D:/Blog/public/series/index.html","adfbf0372a40344c11944cf64d6280fd"],["D:/Blog/public/single-point-login/index.html","89cf7f2bc47188173b011d1e1b047eff"],["D:/Blog/public/single-responsibility-principle/index.html","bddd01cda0bf2f64a11c20835f46bea8"],["D:/Blog/public/singleton-mode/index.html","b8baae74d6a6278213f1a59b7a48f2d3"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","d042298dd8e34ab3ead82b3c48b92d35"],["D:/Blog/public/sparsearray/index.html","b36323d1e7f380759da0d6a015a16ee7"],["D:/Blog/public/spring-architecture/index.html","8ada66587e20838c4503e349aa391d07"],["D:/Blog/public/spring-relate/index.html","d7fbed365d8d83422d0b869349631895"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","8f222aaf41cb9a31484d682556b703ab"],["D:/Blog/public/spring/index.html","778be27867226b4f9535d9f107e41544"],["D:/Blog/public/springcloud-alibaba/index.html","1d18b53f9e73e9e26f1c8bf3146a6986"],["D:/Blog/public/springcloud-bus-message/index.html","7dea608fd8ba63d8e72e7f2dc335b906"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","bf2d0f07373215eca8ef3bb0b462c586"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","28a9d37a7561c3ea441dad3af53cb596"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b687100c7f3e21665d8fa7e9d5c09a9e"],["D:/Blog/public/springcloud/index.html","709c1a7b1d47b87158be620028f5aa19"],["D:/Blog/public/springmvc-environment-construction/index.html","26cea01e39f7f896f9ffe4c61149da01"],["D:/Blog/public/springmvc-work-stream/index.html","aa09e24783fcb944b4c126b7a0a190f0"],["D:/Blog/public/sql-injection-attacks/index.html","c13d259d3dbaf9fb52f99626374964d9"],["D:/Blog/public/stack/index.html","5a60dc4f9b7d6d4281b01f6d9f883c96"],["D:/Blog/public/state-mode/index.html","6afb81d0c7b20047cac4df4507dafe23"],["D:/Blog/public/strategy-mode/index.html","6f69144e6320d797a4fce1a87bf27502"],["D:/Blog/public/synthetic-reuse-principle/index.html","df886a45c4e5711ff3875626e9eee36a"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","4411e19598b4c52d930e20f6b0d5a2bd"],["D:/Blog/public/tcpip/index.html","d47148fdf0f7b3a4ff3494f20b4eaf5a"],["D:/Blog/public/template-method/index.html","f14372d2ecf963df6dc5f9f2a41b3794"],["D:/Blog/public/test-case/index.html","79808c13cef3b5210bbba8f7750c312b"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","6228178eb356f99f28da3e234959ec40"],["D:/Blog/public/thread/index.html","e3c5b3e9a5e92fc3f8b6e85e23d24318"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","561339a2968553769be7226257235435"],["D:/Blog/public/ubuntu-set-ip/index.html","71647369916984dd46efac6955e84783"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","339cefcf20c616940011ad0b5ef9b67f"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","81944214f33160d4fe1d774590d01191"],["D:/Blog/public/users-create-data-types-themselves/index.html","05740c303d8f7916b81a9bee7ca2da0d"],["D:/Blog/public/visitor-mode/index.html","e93158c4922b8885c168c79d7bad4af7"],["D:/Blog/public/xml/index.html","4a6415c1f6c766a62ec9ffc67d18fd80"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","0d891a261f0d07486fcc1553d1316b6f"]];
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







