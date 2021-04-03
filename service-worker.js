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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","a3c93f98f22dd8595dec71c324ce0298"],["D:/Blog/public/AIO-blocking-model/index.html","8dee5cf2dfc2a0a1dedaa8b85ae951c1"],["D:/Blog/public/BIO-blocking-model/index.html","e240842a00c547482e4e6dd0189c29a9"],["D:/Blog/public/C-algorithm/index.html","e8e525c6d63eb5770854cdd0753aded0"],["D:/Blog/public/C-programming/index.html","815f862e7cba4d4f44dd039d74e0c974"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","37980f9a528e05032b6502d4c065626c"],["D:/Blog/public/Good-use-of-pointers/index.html","fbc13ce60f1e793c84254d143a13abfa"],["D:/Blog/public/IO-model/index.html","7f4b4a851013c2151d4db40cb595546d"],["D:/Blog/public/IO/index.html","9cee9761783232685a941f59e20fdc4e"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","ac2625493d80106ce055f524217b0422"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","3cdd71fdf650c5f57b96f39a5a36350e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","dacc5af3472a9a7386e95e4cd0e05a4f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","6d439aade7d902ee8e8be9425b88fc7d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","0c7240ba52b181b819daeedf039edbb3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","529bb9ddb6d7a0a92cb1ab3fd97fec02"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","090f5004cd9962471f105966380dbd64"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","15717b563d1f172955b5efbe7a13db64"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","448c9d08a3c3285c069af8475cf2b0d2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","959d2113b69131cb2a95a692b654dd11"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","67023140aa98ed43c3d1e21b6502f8ad"],["D:/Blog/public/Java-network-programming/index.html","1270881b30f54ca216cfa152282ab349"],["D:/Blog/public/NIO-blocking-model/index.html","334a098396b067f161b1bbfb3312fdc7"],["D:/Blog/public/Native-method/index.html","456f1b7bdcc1b4e3fece0843f2c14e51"],["D:/Blog/public/Sandbox-security-mechanism/index.html","c1be0b557dc9682a5e228cd1697cf4e8"],["D:/Blog/public/SpringBoot-startup-process/index.html","6ecdc5c3c0d0cb22d21d32562588e2a4"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","b3890052f5e21f491e07bdaa25b7630d"],["D:/Blog/public/Unitest-framework/index.html","5c453cfee62c8e84c75e55e192d1f0a6"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","ed202f35886226f043bb82bab5449a60"],["D:/Blog/public/agency-model/index.html","18f26cbf565510745d76bf872062d4cd"],["D:/Blog/public/app-test/index.html","4ceab1091f00c8821431f7d5f897cb36"],["D:/Blog/public/appearance-mode/index.html","2dd71cfbc4b96c11d21c53b3905a9631"],["D:/Blog/public/archives/2019/01/index.html","c564b61b4d88d4d25565fb9de8d9732f"],["D:/Blog/public/archives/2019/07/index.html","5535889263700ddf5ca240078d45751c"],["D:/Blog/public/archives/2019/12/index.html","571ddbf764a62bce97fbdc40e15fdd6c"],["D:/Blog/public/archives/2019/index.html","09c39c3af07ceb7644ee9a58a24b506f"],["D:/Blog/public/archives/2020/04/index.html","844d4e6ee312f1e2bec5d6d1c4f592d1"],["D:/Blog/public/archives/2020/05/index.html","834276ab9bed47f62849559f5cb6673e"],["D:/Blog/public/archives/2020/05/page/2/index.html","6579cdff5c20dbd12561e56608f8c6a3"],["D:/Blog/public/archives/2020/06/index.html","1176dbf48d17afeaa0203fb26eea2f3f"],["D:/Blog/public/archives/2020/06/page/2/index.html","c7fcace0c421e1a62b01beb12d1fafc7"],["D:/Blog/public/archives/2020/06/page/3/index.html","221aad1c2df15ec0b96269e57d7d4ab1"],["D:/Blog/public/archives/2020/06/page/4/index.html","a8204ab3d8c09b5df179fae74a9b8317"],["D:/Blog/public/archives/2020/07/index.html","48609a21b1b2dff18594788ff2514fa5"],["D:/Blog/public/archives/2020/07/page/2/index.html","acdb414efcf71b61961302797e8e1815"],["D:/Blog/public/archives/2020/07/page/3/index.html","93993312126c73a6a7e4f5e25649eb67"],["D:/Blog/public/archives/2020/08/index.html","6535908a61009630e7e0bbbe549a3394"],["D:/Blog/public/archives/2020/08/page/2/index.html","9629d02cfdf92b2ca0a4ad76ee279c30"],["D:/Blog/public/archives/2020/08/page/3/index.html","8cd3fed5bf1866d58ef7d700563b1bd2"],["D:/Blog/public/archives/2020/09/index.html","8470567dd1601d44a51d79b11e129c67"],["D:/Blog/public/archives/2020/09/page/2/index.html","23128f8a234ccc47c3a9d7f0e46fda8e"],["D:/Blog/public/archives/2020/10/index.html","b86f66a05fbfbfa9729376ed8166f1b9"],["D:/Blog/public/archives/2020/10/page/2/index.html","6701436621c450da13bbbbe9bcba3fac"],["D:/Blog/public/archives/2020/11/index.html","4e5dcb93666732b70b6aee082a6e7e70"],["D:/Blog/public/archives/2020/11/page/2/index.html","12ba35cdf44a47b4a60ae0c06383e637"],["D:/Blog/public/archives/2020/12/index.html","43a7a258b41c53d7e6bb4bc48ea4df4c"],["D:/Blog/public/archives/2020/12/page/2/index.html","daed75919a2815452fa0f407a5cbc2e9"],["D:/Blog/public/archives/2020/index.html","788a3fb21932f239d8b750a7d2065ac3"],["D:/Blog/public/archives/2020/page/10/index.html","cb03e48127db31e975088b13f454f56e"],["D:/Blog/public/archives/2020/page/11/index.html","19b8f06a7888da8c40a3ff54927f8d6a"],["D:/Blog/public/archives/2020/page/12/index.html","23cdc6a7cd60a53266af327fe036aa55"],["D:/Blog/public/archives/2020/page/13/index.html","962b84807f8862c08b2d6ccab55e725c"],["D:/Blog/public/archives/2020/page/14/index.html","c9d800f48158a07010410e8ed28c723d"],["D:/Blog/public/archives/2020/page/15/index.html","21a8f51b5445132f5bac2b2751220818"],["D:/Blog/public/archives/2020/page/16/index.html","db950314cbb0474486ff44737ca7b139"],["D:/Blog/public/archives/2020/page/17/index.html","30fda028d8441a7456ee751586be6fc6"],["D:/Blog/public/archives/2020/page/2/index.html","a57dd1747128721ba50274bcc69fd6ba"],["D:/Blog/public/archives/2020/page/3/index.html","7c14b7057c1f30259f8a6586390a347b"],["D:/Blog/public/archives/2020/page/4/index.html","61e29c0688ec4e2dda824395884516f8"],["D:/Blog/public/archives/2020/page/5/index.html","ff806c0a5205d3c12ab58e7ca1d51829"],["D:/Blog/public/archives/2020/page/6/index.html","4f5fa7d877806251e485627246817a64"],["D:/Blog/public/archives/2020/page/7/index.html","e261ac857d207904723531d92f42d205"],["D:/Blog/public/archives/2020/page/8/index.html","cf6f98d9c9cd0a55219aa6c98724150c"],["D:/Blog/public/archives/2020/page/9/index.html","61500b2bb7bd1befcd04c0948353af18"],["D:/Blog/public/archives/2021/01/index.html","9b7ac5c119e579ae2b9aa0471f7ad8f2"],["D:/Blog/public/archives/2021/02/index.html","e6b1ebd12efc9d215d1fb19d61ee0903"],["D:/Blog/public/archives/2021/03/index.html","1c8f4125c349105b9c5b87586ab04def"],["D:/Blog/public/archives/2021/index.html","a36629739e832a438d19861d23f3c58f"],["D:/Blog/public/archives/2021/page/2/index.html","39b0080459dc075c8bf16f64fff93cb2"],["D:/Blog/public/archives/index.html","4be956f6a44ec5efcdde66383fe03603"],["D:/Blog/public/archives/page/10/index.html","918f68a09b2d4a72d3438d53ea266dd3"],["D:/Blog/public/archives/page/11/index.html","72a507a453ff5f80e31d4423d9889eaf"],["D:/Blog/public/archives/page/12/index.html","3d75e359130ccde9bbe4a2b4d51399d7"],["D:/Blog/public/archives/page/13/index.html","c0bd0468f196b647b2dfb1850d86d5b1"],["D:/Blog/public/archives/page/14/index.html","5feb86420bf777a7e5bde117dd57de7d"],["D:/Blog/public/archives/page/15/index.html","7e86d23edb96aea8495eef5352a02e35"],["D:/Blog/public/archives/page/16/index.html","d912ed480e492d3a0cf3623f2dd98d96"],["D:/Blog/public/archives/page/17/index.html","1b6e5efd356bea4d65312565f36e001e"],["D:/Blog/public/archives/page/18/index.html","0870e181ffb808e3d50e4bfa48097d97"],["D:/Blog/public/archives/page/2/index.html","2cfe3447a360ba21d1bc6aa9334fd884"],["D:/Blog/public/archives/page/3/index.html","031abeb97e79f3d168970e77c6a7c79e"],["D:/Blog/public/archives/page/4/index.html","ddad1a8f8b9bc1cf390dffb03d84273a"],["D:/Blog/public/archives/page/5/index.html","0da9f1d68b817551af105b009c0c3e7d"],["D:/Blog/public/archives/page/6/index.html","53f7cd45e2202fc1dcc67616e104922d"],["D:/Blog/public/archives/page/7/index.html","fd5df17a6348d39d792fa101803a49ce"],["D:/Blog/public/archives/page/8/index.html","b5f88203fc64e1e5c22c63c9ec97eef7"],["D:/Blog/public/archives/page/9/index.html","9a5ce90fa75ecd25ca15ca7cd0fe18de"],["D:/Blog/public/array/index.html","3a0c2f781213992939c839e8a092dabc"],["D:/Blog/public/automated-test-katalon/index.html","8f634605fa0f1d6c05969f7379a444d2"],["D:/Blog/public/automated-test-selenium/index.html","64b5f75b08f98e473e5de63a5ca815b7"],["D:/Blog/public/binary-search-algorithm/index.html","90e41decd62227f36466dd211239fc7f"],["D:/Blog/public/binary-sort-tree/index.html","86922ff1c628bedf7a3bf21b5925b495"],["D:/Blog/public/bionioaio/index.html","a3479689ce06732f07a02635f51a4f51"],["D:/Blog/public/bridge-mode/index.html","38d460c3726709acd85de02a7da5f181"],["D:/Blog/public/builder/index.html","b580bdafd92b6fe67ab22ee6eb65c648"],["D:/Blog/public/c-pointer/index.html","343e37f8915b733a6bfb2f633623967f"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","4a8306b0b9a0d75dd16a930ac201cdfd"],["D:/Blog/public/chinese-and-english-switching/index.html","7b83dbd6b94683fc28992055ce9cf532"],["D:/Blog/public/combination-mode/index.html","bede87a98ef0717ee8842e5a58c841d7"],["D:/Blog/public/command-mode/index.html","f26307a4a15c446d5e0967a8ef3fe3b9"],["D:/Blog/public/common-commands-of-unix/index.html","a214b61a52b7005b9a4d564e9eb2b56d"],["D:/Blog/public/computer-network/index.html","84137d792c3d96d843abc217b67ebff2"],["D:/Blog/public/concurrency-principle/index.html","aa1e2775dca86ac995a90670015ae8e1"],["D:/Blog/public/continuous/index.html","24db653c68db673c58fb29aa536569e9"],["D:/Blog/public/contract/index.html","7227d714560e7bd56ce2da37cfb576f2"],["D:/Blog/public/css/octo.css","3fbebfac8496c137bb27b032f3b630ca"],["D:/Blog/public/cycle-structure-programming/index.html","fe06775d0cefcf855c64bc1a87cd4417"],["D:/Blog/public/data-structures-and-algorithms/index.html","8a2c4a62402f3ea2f0a696312496e4ed"],["D:/Blog/public/deb/index.html","33827b38f5f59515410fad3beb36d2a2"],["D:/Blog/public/decorator-mode/index.html","dcddf5b69791de3f37ab84ab2f165e87"],["D:/Blog/public/definite-integral/index.html","5cfbe9c442d1653f8fb8955201edf8e8"],["D:/Blog/public/dependence-reversal-principle/index.html","f2855e8ac7ef3eedc756e9b74e9439f9"],["D:/Blog/public/derivative/index.html","3f8be69a5751788c6896aed0df0f7caa"],["D:/Blog/public/design-patterns/index.html","1e2a27833acabac5cde5f734f29412b5"],["D:/Blog/public/differential-equation/index.html","cc6feda4b61323ac9373cc52cb21be25"],["D:/Blog/public/differential/index.html","3d4359ed1a041748b051faad556af606"],["D:/Blog/public/dimits-law/index.html","d4890a4b58b811672916ef44e88a12c3"],["D:/Blog/public/docker-virtualized-container/index.html","7ee7ec1cafac5c90a1cc98732d5a591b"],["D:/Blog/public/double-integral/index.html","c1193ececbb5d5c10655f78afc6de35c"],["D:/Blog/public/dynamic-array/index.html","0383de3c2a37bdad60f4c89cd9d7456a"],["D:/Blog/public/dynamic-programming/index.html","84cb2ffad93e2182e34e3fcbf4ddeaca"],["D:/Blog/public/encoding-algorithm/index.html","f217218ff28cdbede43b0f7453cbafdf"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","36cfab290a5120b5e792b3e8d86f8959"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","b06e37efd6df344555b4e6c36157bc6b"],["D:/Blog/public/factory-design-pattern/index.html","3a0bc702c6cb606753512e27f383aa13"],["D:/Blog/public/file-input-and-output/index.html","0d6d4a4002995025791c3ed484fb9c0a"],["D:/Blog/public/flyweight-model/index.html","801f0ca939f79f4e8297b178a9acbce6"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","1b05b1dcb8761e41733fbf20be416f72"],["D:/Blog/public/gateway-service-current-limit/index.html","9fc0b2bcd9acbdd25b3b6d8bc6d64e08"],["D:/Blog/public/gc/index.html","64de24f5c7575453748d4855a49c1732"],["D:/Blog/public/generalized-integral/index.html","0fa9600e7c6d236683fb44eaa9ec5101"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","c080ccc0fce1a0303d9210ca22aad182"],["D:/Blog/public/hash-algorithm/index.html","f5f549fcd8414a2d2ce49aba5f3f17aa"],["D:/Blog/public/heap-sort/index.html","f6749fbb521ab6944baece245ab56a1e"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","bbe29f14ee6c99847ba75c5ecb659885"],["D:/Blog/public/http/index.html","5ee42c52bc520e117bfbdcd17c41c21b"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","2b5cb5aac128424298d48f88cc213483"],["D:/Blog/public/index.html","2e86577c670d4a85759b0f26fbffd1f8"],["D:/Blog/public/infinitesimal-and-infinite/index.html","751405a8dc4b6e30a12f64dc4c9c2ca5"],["D:/Blog/public/interface-isolation-principle/index.html","27c7a7f977f69caf580e4d6e93162b87"],["D:/Blog/public/interface-test/index.html","f46c81bc9b3b5046e51949138508fbe3"],["D:/Blog/public/intermediary-model/index.html","32342a8ccf42829756593810035ac3fc"],["D:/Blog/public/interpolation-search-algorithm/index.html","efe856ed2c58ed2e2d2f2451a228e93a"],["D:/Blog/public/interpreter-mode/index.html","b630ae7ddb76885eeef53c1a8b8b130a"],["D:/Blog/public/introduction-to-computer-network/index.html","ee27fef465d8d39aa6f89913c58d8ebd"],["D:/Blog/public/introduction-to-operating-system/index.html","457b3610c2ecb5153d2934eef9850765"],["D:/Blog/public/inversion-of-control/index.html","a11cf7fb5c6cee1ab959f714ba988c84"],["D:/Blog/public/io-Interview/index.html","2593b81ecaa456f1e874d00aff9b8971"],["D:/Blog/public/iterator-mode/index.html","a0dac47d26b42048ee9085a9b64393cb"],["D:/Blog/public/j2ee/index.html","30d1088d484ec279da96637429f5956a"],["D:/Blog/public/j2se/index.html","42d6d614123a068bd087c9c5faf8f3df"],["D:/Blog/public/jdbc/index.html","4305d087395fd9e35514f7d80712e1cb"],["D:/Blog/public/jdk/index.html","e828cc910be222a9f9fa0b1e637381ca"],["D:/Blog/public/jmm-memory-model/index.html","f266020602a067e08e0b167cb28ad649"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","7c47dd08673ccc48336ff2fab6b620d9"],["D:/Blog/public/jvm/index.html","acd645ae632197b711ad05308a5d9726"],["D:/Blog/public/law-of-robida/index.html","8844eed72bbb3dba094f9c168cfb5507"],["D:/Blog/public/limit/index.html","3edf1ec05543d608953d59ce3f72db60"],["D:/Blog/public/linear-search-algorithm/index.html","1648c4d34007a17c3ac22615181577aa"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","96d2716228c5ce881ae9865532d2df2e"],["D:/Blog/public/linux/index.html","6630caf1fe4412e09928903a2933162c"],["D:/Blog/public/liskov-substitution-principle/index.html","101ddcbd0d4ce5913981c6c878875e1c"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","84ce778d9e7a2869d509745b3fee866c"],["D:/Blog/public/maintenance-1/index.html","55f022db5c91ace4c2383bbc9e1e6833"],["D:/Blog/public/maintenance-2/index.html","69f83eab617459641336b81cb545ab68"],["D:/Blog/public/maintenance-3/index.html","1954385454141739f7efacc9a47b2dc2"],["D:/Blog/public/memo-mode/index.html","c18381e6b98141a5e37cd9a9f64f4cd4"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","20e737485b138b40e1b24f77a45f9572"],["D:/Blog/public/multi-function/index.html","231d51474cb1688a7ce41ba1f50eef14"],["D:/Blog/public/multithreading/index.html","6a28dd5562409699ea3bbbb959712e36"],["D:/Blog/public/mvc/index.html","2bf67afc1ffbf2eff19bf6ebfd5f3c46"],["D:/Blog/public/mybatis/index.html","532a1266087e5ea18099d629df3d47b2"],["D:/Blog/public/mysql/index.html","55686e0bc26bb091cd55e6ea206fda65"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","2a07eed8050459bb34ef52bddb92730b"],["D:/Blog/public/objectoriented/index.html","7062dfa2a130c47cb76fe0585b0b8d30"],["D:/Blog/public/observer-mode/index.html","14be839db6701944e29c676c80822891"],["D:/Blog/public/off-heap/index.html","8a79f81ab2ae8e8098dda3aa4cd5848d"],["D:/Blog/public/operating-system/index.html","b495cfd3e429c544e23a5ab1bcfbda73"],["D:/Blog/public/page/10/index.html","7e9cc2f272a2510a97621b8a9b4341cb"],["D:/Blog/public/page/11/index.html","5eae7a7a8845c2150ca2ab09685cb2f3"],["D:/Blog/public/page/12/index.html","6a087925740ccdc52637915924f1cd44"],["D:/Blog/public/page/13/index.html","db636ae67b9c7bbb067953c8a5c3ca7f"],["D:/Blog/public/page/14/index.html","23ff5a07ef305d3bb43a86c44ec9d17c"],["D:/Blog/public/page/15/index.html","590faa472f6349ad683b64176b2437cf"],["D:/Blog/public/page/16/index.html","13809c7e095625bea710bea997bdc61b"],["D:/Blog/public/page/17/index.html","4599762b25893e7bdc85f6427b9be8ac"],["D:/Blog/public/page/18/index.html","4d872122b5d842ff8257a026f38dfeab"],["D:/Blog/public/page/2/index.html","69f77c0c46124c626cf0402e7a3e8822"],["D:/Blog/public/page/3/index.html","3fcde10ae409a98161aa300f0ab0479d"],["D:/Blog/public/page/4/index.html","e7e01c95c2d6b6620d41c9bce2369dcd"],["D:/Blog/public/page/5/index.html","d28fe6cb6349d760d6862cfd658a4f83"],["D:/Blog/public/page/6/index.html","ab9b93c007cf79e071df16f7df1e1caa"],["D:/Blog/public/page/7/index.html","1886e6bb02c7d751b15e0a19bc8d6421"],["D:/Blog/public/page/8/index.html","b916053581ad854dd299b5a67bf654ce"],["D:/Blog/public/page/9/index.html","0611320cb494eb20441a2d98331f5484"],["D:/Blog/public/palindrome/index.html","68287a73253fe80138c9cc5b6b3ce7a9"],["D:/Blog/public/partial-derivative/index.html","b9c9eee3f5a7ed16fafff12f9f7e4cd8"],["D:/Blog/public/pass-by-value/index.html","cf9063c9ddf2b7b7b63c2234e45c8e2a"],["D:/Blog/public/pictrue-bed/index.html","4c6bce2842366b5ef6721475ab508be8"],["D:/Blog/public/principle-of-opening-and-closing/index.html","8e17369b688664e8139f175afc1c332a"],["D:/Blog/public/principles-of-computer-organization/index.html","fc7f35608ee9655acc98077207907c77"],["D:/Blog/public/program-test/index.html","620195f1cd670e3af84c2302618337e5"],["D:/Blog/public/prototype/index.html","fd48c1b5777fedf8ef3769b6ae69f0b6"],["D:/Blog/public/queue/index.html","3a1b8e6d8a628b4272f589d20a1abe71"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f0ab6928ccaa1622c4967a0cd2c56c29"],["D:/Blog/public/redis/index.html","dfdf1c0220e94fcbe22b6e7d0d598221"],["D:/Blog/public/reflection/index.html","ed7fff0022ece3da1d993968f0aa2597"],["D:/Blog/public/resume/index.html","298d344451e0846b1a1e627b1b892baf"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","3ccfc50fa5e273000bc17a300cb3a6a7"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","6cc80f8eaf63284d188f428a67e39258"],["D:/Blog/public/select-structure-programming/index.html","99d87ebe6c71371906f167bd612d30c3"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","5153921375c670a695f1bf9145801676"],["D:/Blog/public/sequential-programming/index.html","b8db9f1dc14133652939174dbf4ad5e9"],["D:/Blog/public/series/index.html","4909fabd421748c6451ff3e7ee0a1b41"],["D:/Blog/public/single-point-login/index.html","d39277b98552fd66042f510944a823b4"],["D:/Blog/public/single-responsibility-principle/index.html","8e8797077e3a9e2aacbad1f0731b451f"],["D:/Blog/public/singleton-mode/index.html","134623a0ba1fd6ed8f274251ddc5c772"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","55db5a4a95e7a0fe61dd89ccc5000553"],["D:/Blog/public/sparsearray/index.html","bda4e40462d099fa3e254a984a5047f8"],["D:/Blog/public/spring-architecture/index.html","8a9b1f64ba1772e58790e37114153147"],["D:/Blog/public/spring-relate/index.html","0f205dd4a9503b38eef06064ca2590ac"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","912b276f0ed44525c7cb4d174122c06d"],["D:/Blog/public/spring/index.html","db05d2d4ef0f19639826865f49739129"],["D:/Blog/public/springcloud-alibaba/index.html","0da145ce773d3c44cf115a106f6bf655"],["D:/Blog/public/springcloud-bus-message/index.html","e2411f98495eb0676b117dd06c08a138"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","49a4a95be8d021e1d1f713c696a8341d"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","e56a5f7172d4247af798a40598a1478e"],["D:/Blog/public/springcloud-stream-message-driver/index.html","fbda5079493e788abf6a0a6e317c30b8"],["D:/Blog/public/springcloud/index.html","e03d047977680643f30d6fd400c69c0f"],["D:/Blog/public/springmvc-environment-construction/index.html","d3a13248b059df33b7176b0549bb87f5"],["D:/Blog/public/springmvc-work-stream/index.html","339d1263c2687fb8231a00c21a5cc0b3"],["D:/Blog/public/sql-injection-attacks/index.html","dd3e820da039c3d418069ed4616d2c4f"],["D:/Blog/public/stack/index.html","92afbbb1b6d8411c3950167fcfdde0c2"],["D:/Blog/public/state-mode/index.html","6a64fabf4fbade4aa235ae2062bab100"],["D:/Blog/public/strategy-mode/index.html","fa315d1bfdf85661c5cfcd2949c0d745"],["D:/Blog/public/synthetic-reuse-principle/index.html","1dba88f0658da643e6173398c775fb77"],["D:/Blog/public/tags/C/index.html","3f277c35e5f0ac4d9dada38b9b98dea2"],["D:/Blog/public/tags/C/page/2/index.html","980b1b8d1f8923ea017e026ed87b2b7c"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","8a174e130ed31022c2cc8390c4f8d8dc"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","b2e997d2bea2e46c6e90a85b1327cbae"],["D:/Blog/public/template-method/index.html","a58ca1c7dbc29c885e1f1319a8d49c9a"],["D:/Blog/public/test-case/index.html","71a782b813ba8abb9c89d80d770ecebc"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","2efaffd567a59f58f387e72c2d6b4210"],["D:/Blog/public/thread/index.html","8b48da82b18f371df945d80382d7fd61"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","e77e70ecdc17127a06d465d0b575ab79"],["D:/Blog/public/ubuntu-set-ip/index.html","fb1ebca8dd531b687bc368c3e9c9fced"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","d300c4b0cbefdb4dff668913abf5ba7c"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","955538ff34aa5181bab39f25bb4dc0e4"],["D:/Blog/public/users-create-data-types-themselves/index.html","90be468073f1afde39e45877f9e325ad"],["D:/Blog/public/visitor-mode/index.html","0d07a5bcd8107fc8c5272f9fd0997cc9"],["D:/Blog/public/xml/index.html","8d19028e04d6a5f7d33156eec6177f48"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","a4012ab19ec551a40e16258f14b83963"]];
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







