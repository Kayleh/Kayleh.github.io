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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","60d71b55e4812ab2245241306c0d867d"],["D:/Blog/public/AIO-blocking-model/index.html","66da85d999ecaee4cc01e310080c43af"],["D:/Blog/public/BIO-blocking-model/index.html","d2afca76fa6acff31c57eeaed8873c71"],["D:/Blog/public/C-algorithm/index.html","efad45fb71dac7e627f0b110382fc549"],["D:/Blog/public/C-programming/index.html","65463dda277e83065c789c279d306843"],["D:/Blog/public/Good-use-of-pointers/index.html","c31dbbb1fd945daf76143886071f12f3"],["D:/Blog/public/IO-model/index.html","38549a4fd7207159c50ce267fa020c2c"],["D:/Blog/public/IO/index.html","521800117f4c060f584dac39c9e76058"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","a61676d9a260651bf6f790d3882b6b4f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","befe427c50c114c3755df633c0b1d115"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","76b843849d8a6370f378d224c20d8072"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","d9394f87838343774b883b2a91cad0e2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","5346602dac768ef13eb72b4b800c05b1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","0f0e98f03058135f8712806d97d205b0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","ecf7a4ec22a037007153c47541a3f3a8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","8cf30132ddc2ea8454fc5a9f5eada729"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","b05c67398d94b4c1916854badce6b7e8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","4034a38107e868f1301ca199cfac9546"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","41d2cdd7a6ea6333789a67c2b5a4a05d"],["D:/Blog/public/Java-network-programming/index.html","aee33156a2a9ad077430e05bf7403262"],["D:/Blog/public/NIO-blocking-model/index.html","25981160171c76548b6c2239169f845e"],["D:/Blog/public/Native-method/index.html","34715d9b0b108d449219f1ec2976ffbe"],["D:/Blog/public/Sandbox-security-mechanism/index.html","504e76e8f579cee7646ec662e5583aa2"],["D:/Blog/public/SpringBoot-startup-process/640.jpg","92157f8b7a12cf7b692600d96f615542"],["D:/Blog/public/SpringBoot-startup-process/index.html","d874bea4621c9d9cce05012a7262bb03"],["D:/Blog/public/about/index.html","bb7d591087392c8d319aaa6e2937b5d8"],["D:/Blog/public/adapter-mode/index.html","4d07955afab234993ce2b97416a59bb6"],["D:/Blog/public/agency-model/index.html","c4086fb80a81ccd7fe933887bbfd5c74"],["D:/Blog/public/appearance-mode/index.html","8bcf64ba0856b3d2d04a1b2784f92db6"],["D:/Blog/public/archives/2019/01/index.html","a808c205b733eb58bf0e3cd777610c8f"],["D:/Blog/public/archives/2019/07/index.html","6d8377bdbf601f419984dccd68023098"],["D:/Blog/public/archives/2019/12/index.html","e09c01fd6ef8abcf501cedfa9ff578f7"],["D:/Blog/public/archives/2019/index.html","4998d4b6a26bc2e011bb5b094e3e0660"],["D:/Blog/public/archives/2020/04/index.html","de431b69e4b2e65d3ddc193a8a3e9924"],["D:/Blog/public/archives/2020/05/index.html","e05ebf910e4da0b38baae209cc1f14b2"],["D:/Blog/public/archives/2020/05/page/2/index.html","2813bcdf6e58c25e5cdc500556e7c06f"],["D:/Blog/public/archives/2020/06/index.html","3a6714a68f51bb3aae6b8dc4fd24ad3f"],["D:/Blog/public/archives/2020/06/page/2/index.html","0ef10991cc9f8ccbedbb696c58449821"],["D:/Blog/public/archives/2020/06/page/3/index.html","ff9dc5409e6268144853f011737f443c"],["D:/Blog/public/archives/2020/06/page/4/index.html","8aceaef416e3fcf5ae71990c4ca6836e"],["D:/Blog/public/archives/2020/07/index.html","c922ef98d10cc977c0c0bdd1b82ee2c0"],["D:/Blog/public/archives/2020/07/page/2/index.html","b6a8cdc54591e2b1bde57e975b8e2ae0"],["D:/Blog/public/archives/2020/07/page/3/index.html","d7d38a6434006f75a21b1c49ca4c3d01"],["D:/Blog/public/archives/2020/08/index.html","50618da6900ade723dd3e2683dff36b5"],["D:/Blog/public/archives/2020/08/page/2/index.html","57a7d8bd0b38e6bc6828ef15f9b980a5"],["D:/Blog/public/archives/2020/08/page/3/index.html","98bc409e1e249b191530bd3a3e88c56f"],["D:/Blog/public/archives/2020/09/index.html","64bd0d6fce31ec5354eb1a56d87d46f0"],["D:/Blog/public/archives/2020/09/page/2/index.html","ebeba5aabdf2dac22ff6a78bebf07d8b"],["D:/Blog/public/archives/2020/10/index.html","01dfcdb84541f496bc5cdbe979ee9f5f"],["D:/Blog/public/archives/2020/10/page/2/index.html","a2e93281cfcf4741a0ecbe16ee6d3399"],["D:/Blog/public/archives/2020/11/index.html","f49ed29ff863e781d22ce6ee5235482e"],["D:/Blog/public/archives/2020/12/index.html","6eb6010ba1d66727361b8ffefacace3f"],["D:/Blog/public/archives/2020/12/page/2/index.html","2ef7e9454fe6416dfc7eaf3b4c742ea1"],["D:/Blog/public/archives/2020/12/page/3/index.html","3bb039c6a8b63805a3e34de19c59f8f1"],["D:/Blog/public/archives/2020/index.html","82d334e1a8c7df16b644ac8da935b637"],["D:/Blog/public/archives/2020/page/10/index.html","baff19fd51e15531915acdf2758ceae2"],["D:/Blog/public/archives/2020/page/11/index.html","32a0a28ca7d09cc1ee10eb04c4bcece0"],["D:/Blog/public/archives/2020/page/12/index.html","de09700e6421f4c433efdccf6c4c87d5"],["D:/Blog/public/archives/2020/page/13/index.html","e2db62278e05c2b84c68ceefc8ebf756"],["D:/Blog/public/archives/2020/page/14/index.html","5f1d86cc10bcfb988b31edb84b85621f"],["D:/Blog/public/archives/2020/page/15/index.html","9a3a3b54253692b1bc5d71607f304022"],["D:/Blog/public/archives/2020/page/16/index.html","fa865f4ef7e5c3dc521586ab59582f75"],["D:/Blog/public/archives/2020/page/17/index.html","a7ffaa07a8c68e12357689447e48d281"],["D:/Blog/public/archives/2020/page/2/index.html","164aa0ed4020f19a9d56645763bedf8a"],["D:/Blog/public/archives/2020/page/3/index.html","add933d6626540ca7d79e468a1a62b09"],["D:/Blog/public/archives/2020/page/4/index.html","9035ce52508606ab8595ac5141f13639"],["D:/Blog/public/archives/2020/page/5/index.html","405a7e56e3aa156b27ba0cb2954b090a"],["D:/Blog/public/archives/2020/page/6/index.html","5d1838af5a8e6187ea67196f6355f325"],["D:/Blog/public/archives/2020/page/7/index.html","8917268eb473289acc2da98656358dd6"],["D:/Blog/public/archives/2020/page/8/index.html","2fae83d4449349599b01415d80f8dc75"],["D:/Blog/public/archives/2020/page/9/index.html","5de190a0c873da64cd142990d0c0699a"],["D:/Blog/public/archives/2021/01/index.html","77702d72011cb58df39e2b67f9210a36"],["D:/Blog/public/archives/2021/index.html","b47626d0d1ba856983a0ed29d4377f98"],["D:/Blog/public/archives/index.html","64eb0160567f58c3e13c28ac12d20482"],["D:/Blog/public/archives/page/10/index.html","fb7f3220cf7fe8135b68b9ebfc30780a"],["D:/Blog/public/archives/page/11/index.html","d44769ee23cf0f2cac63c35bc5ab2c3e"],["D:/Blog/public/archives/page/12/index.html","9923ce901b168f735e25a957befdcf20"],["D:/Blog/public/archives/page/13/index.html","8a631b534377b32010ef99462363f504"],["D:/Blog/public/archives/page/14/index.html","02a0b71112a111f225e7adf0312e0443"],["D:/Blog/public/archives/page/15/index.html","406be8d12ed1386d74c7940f4cc3d042"],["D:/Blog/public/archives/page/16/index.html","f71daaaebe7e8f34b374bda091e74f64"],["D:/Blog/public/archives/page/17/index.html","fb17d719e71dcb1a2a7585b1a07f6589"],["D:/Blog/public/archives/page/2/index.html","52f473e1b30f90115de1a451f5b3aa7b"],["D:/Blog/public/archives/page/3/index.html","a26b164c5bb8876e7dfcf707d908b5ae"],["D:/Blog/public/archives/page/4/index.html","cc8a74c82ae9b94d3b91c62e266bdee4"],["D:/Blog/public/archives/page/5/index.html","c513da60801b9987e74f1083253b8c87"],["D:/Blog/public/archives/page/6/index.html","ed814f75a5a4dec4ec47aedec61821b4"],["D:/Blog/public/archives/page/7/index.html","c4ae3af99ad0118473ae72d681e31576"],["D:/Blog/public/archives/page/8/index.html","e3bd76171f5bfcb608d082c2a2847e61"],["D:/Blog/public/archives/page/9/index.html","56fc7375caaae36b1623dc7d22817033"],["D:/Blog/public/array/index.html","732165790ffc565bc82973b7ccadaa80"],["D:/Blog/public/binary-search-algorithm/index.html","e46163b5d1510dc8dca6508e4354426b"],["D:/Blog/public/binary-sort-tree/index.html","02ac3944a6f3a7f4490e19b2e7b72d0e"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","03a9420c2caa2d5ba96ed04f0695a8ba"],["D:/Blog/public/bridge-mode/index.html","910d4556499e1214853258a9dfa86506"],["D:/Blog/public/builder/index.html","0fcd7b16b82c775d7d4b53708f21cf21"],["D:/Blog/public/c-pointer/index.html","1f6074d170d3e07a8c9b467971c1e852"],["D:/Blog/public/categories/C/index.html","b6fe4311a33fa7baaf37d2f2adef820f"],["D:/Blog/public/categories/SpringMVC/index.html","8e10473be43cc3dd69e200ab53cfd16b"],["D:/Blog/public/categories/index.html","2e6895554af832e57bb0eee4f0d056e7"],["D:/Blog/public/categories/linux/index.html","04aef34873e53045dd96680405e13459"],["D:/Blog/public/categories/分布式/index.html","4f719a9be468b9828eb3b29114fc9760"],["D:/Blog/public/categories/分布式/page/2/index.html","776ea4ef6250ae568617fcb141ddf961"],["D:/Blog/public/categories/前端/index.html","8af78c62cddbf0044ace5ac0a6db420c"],["D:/Blog/public/categories/设计模式/index.html","03cb933450dc8ab18f6805b7f2e935bb"],["D:/Blog/public/categories/设计模式/page/2/index.html","4181a2ae88ae105c1d7f2a51c1d9c988"],["D:/Blog/public/categories/高数/index.html","e1903de44e39091a341ad2226f35950c"],["D:/Blog/public/chain-of-responsibility-model/index.html","29e99d8711b24999c1ff3eef60f3cfcb"],["D:/Blog/public/chinese-and-english-switching/index.html","a9b2d3dacccc875160c7f606cfe6912d"],["D:/Blog/public/combination-mode/index.html","2c68ca0bd4deb7869953c4391755cd2b"],["D:/Blog/public/command-mode/index.html","39dbff2a310e27185464507b1781639e"],["D:/Blog/public/common-commands-of-unix/index.html","fe0b26265d6866de0f35cefe33960fd1"],["D:/Blog/public/computer-network/index.html","0665bb92413d0e3e495593f46618dc36"],["D:/Blog/public/concurrency-principle/index.html","afec54271ea16debec7c069e87af8e44"],["D:/Blog/public/continuous/index.html","ee271732ae6165c44074849ccad14651"],["D:/Blog/public/contract/index.html","aba5492f9adecd3b3118f4ccd0bc520e"],["D:/Blog/public/css/octo.css","5e203d338c4e2dd49a10d6436debbd80"],["D:/Blog/public/cycle-structure-programming/index.html","6e59d5e8a1b7812aecd865aefb12f53e"],["D:/Blog/public/data-structures-and-algorithms/index.html","4ffc0a49862aabb3e7d4a24d0adf3158"],["D:/Blog/public/deb/index.html","f492592a9687b695718ef4f72cd094eb"],["D:/Blog/public/decorator-mode/index.html","d1569e23a770fc4e1e42410ae72d2494"],["D:/Blog/public/definite-integral/index.html","4b3c8d5f19df6c031c8fb880e3cf5885"],["D:/Blog/public/dependence-reversal-principle/index.html","b456802b506a3f0bb5ed6dc9451f9767"],["D:/Blog/public/derivative/index.html","cccfbecea6db0eef83988ba723713460"],["D:/Blog/public/design-patterns/index.html","64453f3231bd6cb955459c667869330b"],["D:/Blog/public/differential-equation/index.html","813224caba292524515f4ee385a306ee"],["D:/Blog/public/differential/index.html","779107e1a9e23a8e8a3823571313de8d"],["D:/Blog/public/dimits-law/index.html","cdb9829b7ddee40580fbb49129943dd4"],["D:/Blog/public/docker-virtualized-container/index.html","b9523c434a617a24323e9619b96e2853"],["D:/Blog/public/double-integral/index.html","6e3f4d4ab0ee8d42d5928be667b48b7f"],["D:/Blog/public/dynamic-array/index.html","dd342916ff6ccbcf212e55a5c82907b2"],["D:/Blog/public/encoding-algorithm/index.html","cb1a0a3d3b8cdfedc9d6f8f16b2369fa"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","bcad77cdc93a1779d9aa88959b3626fc"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","9f46676d57d59296ff1726aa91f2b619"],["D:/Blog/public/factory-design-pattern/index.html","05873c63d11bb1665209c9ba2c4ff6ce"],["D:/Blog/public/file-input-and-output/index.html","f6c9f3d97b9b0786d3c2a6f8b638936a"],["D:/Blog/public/flyweight-model/index.html","3c9b1c18a37e1b6e7cb9f46f5d3e9717"],["D:/Blog/public/friends/index.html","7cd3bfbba2ff047d7a2ac47fc3071b5a"],["D:/Blog/public/function-graphing/index.html","4cbdfe792251e68fcf574df0aacfa5ed"],["D:/Blog/public/gateway-service-current-limit/index.html","bb93bc6166b559cada07aae9e9d3af55"],["D:/Blog/public/gc/index.html","1297afdfc04e7a65dedf78dae567668e"],["D:/Blog/public/generalized-integral/index.html","4754327b548b83f905b663f18e012746"],["D:/Blog/public/google8102e2f35ce9e391.html","fbf5c16eec4833f7dd3d48e913790111"],["D:/Blog/public/gulp-compresses-static-resources/index.html","481690a4d33721d11e5a8e3388bc181c"],["D:/Blog/public/hash-algorithm/index.html","68257ee50b6f8d79768b731b304e2a1f"],["D:/Blog/public/heap-sort/index.html","77d2af5186ff56841ba461d6e01bd247"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","2550bde90e90aa7d0d24aabd135d2e0e"],["D:/Blog/public/http/index.html","e197285904d25100351bbb485e104329"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","2b9a15cb02f94f3ba09e2d636a38333f"],["D:/Blog/public/index.html","2b453640d35f61179c5afe3ff0bf47d8"],["D:/Blog/public/infinitesimal-and-infinite/index.html","f23bf19081023d1570ee7908008cd7d5"],["D:/Blog/public/interface-isolation-principle/index.html","8689812f45313e924ac8567f89f49bbf"],["D:/Blog/public/intermediary-model/index.html","9563bd5a5faf6a5c626d61a6acd9a28f"],["D:/Blog/public/interpolation-search-algorithm/index.html","5e62fdc441fc46c285eff27c27272991"],["D:/Blog/public/interpreter-mode/index.html","6201198af4b1eb9097b79f797fb49c16"],["D:/Blog/public/introduction-to-computer-network/index.html","df573cfe5125b172db56fd4c72dbf380"],["D:/Blog/public/introduction-to-operating-system/index.html","fc3647f1dd9a8984bc4bfb707d3d11e3"],["D:/Blog/public/inversion-of-control/index.html","8bc8e8aa1357d49773b4974ff5b890b5"],["D:/Blog/public/io-Interview/index.html","65c9faf5ba8c88a20f3d2ce7e337d280"],["D:/Blog/public/iterator-mode/index.html","8823093bf8f9036de1c07cbc2715cd8b"],["D:/Blog/public/j2ee/index.html","016d4e6530c9a3ced64dbe80e2e17709"],["D:/Blog/public/j2se/index.html","a485a218ff95f9c2c3fdd84c918cb9dd"],["D:/Blog/public/jdbc/index.html","3ef36df3e2b32bac0dc77e777e725353"],["D:/Blog/public/jdk/index.html","a5ec89be558b9eb83023f702b5bb023b"],["D:/Blog/public/jmm-memory-model/index.html","b011f0da240e5aa2c8bbd0dbd5ef72f8"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","c50530b516728d9552b2d3c25e4ba4df"],["D:/Blog/public/jvm/index.html","a3794c4ce784f1df707ea56f521fa257"],["D:/Blog/public/law-of-robida/index.html","4d93b098451d593fa7a91d428fdf0a0e"],["D:/Blog/public/limit/index.html","61698692e742076e76952a0e04d96c82"],["D:/Blog/public/linear-search-algorithm/index.html","89ddaa35513470d0bcb85c1d8f8effa6"],["D:/Blog/public/link/index.html","72e5b1f0001c3eb5f0b48ee1e1d8a221"],["D:/Blog/public/linked-list/index.html","dc311b1935cc9db2ae3d9172efad07c2"],["D:/Blog/public/linux/index.html","4eee66172e66901a0ea4c8e374beba4f"],["D:/Blog/public/liskov-substitution-principle/index.html","28c288faedb2b5251a6034ac7d6f542c"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","fa0a501a6719ebe750db084966814bc3"],["D:/Blog/public/maintenance-1/index.html","2a3259979e002ae61b28784aa7ea65ef"],["D:/Blog/public/maintenance-2/index.html","2143948625b62e10c2c0c7e72f2b0bd1"],["D:/Blog/public/maintenance-3/index.html","8ba1ce0c71920aa54686ad4dc4f8acad"],["D:/Blog/public/memo-mode/index.html","5742646539829e994fe747f06c2d88f0"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","60979da21c030f65a3275f6eba62ee08"],["D:/Blog/public/multi-function/index.html","cbeb06670e979516a777b931339b3c47"],["D:/Blog/public/multithreading/index.html","2730e10a1f8edbe08504e6fab84aa3fc"],["D:/Blog/public/mvc/index.html","b6521dd87feabbe286596cd3f3508f0c"],["D:/Blog/public/mybatis/index.html","851a61b572a7aed2d16f910ef45e42d0"],["D:/Blog/public/mysql/index.html","5d945aeb6e8747db3acf17ed15de4425"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","7f1fee1111edfe84b088de6c04d32357"],["D:/Blog/public/null/index.html","0d45f98ed36fe2e05078d3a598f4960b"],["D:/Blog/public/objectoriented/index.html","4f5d3c26acb9d0d55cd1aee4cca19a8b"],["D:/Blog/public/observer-mode/index.html","6d463a2b69b971a218fc692ddcbff453"],["D:/Blog/public/off-heap/index.html","de9f4a33a07adea504b9ed29c4413653"],["D:/Blog/public/operating-system/index.html","443e28abe34c4185f39e5422b3f1b324"],["D:/Blog/public/page/10/index.html","3b9ab92978d61b873b2f1d829c901d8e"],["D:/Blog/public/page/11/index.html","226dfbad28a43ecba5a0f2870dd7c6bb"],["D:/Blog/public/page/12/index.html","905aea94b216f9d5f2a53644e22e7796"],["D:/Blog/public/page/13/index.html","53e52f5e5916c32f98279c981816c190"],["D:/Blog/public/page/14/index.html","9bd3cf53de31ad02e6a4eec49be8e8de"],["D:/Blog/public/page/15/index.html","d12bfe93b4681afc0bd0d288b3225eb0"],["D:/Blog/public/page/16/index.html","ccd4757ee940e1e7576f9fba31f31d8c"],["D:/Blog/public/page/17/index.html","e2e6dd9085e42796817427dd92a27085"],["D:/Blog/public/page/2/index.html","26a0ffcba02369fd31bf58056eed7fc6"],["D:/Blog/public/page/3/index.html","a5d52e72cb2ea4ec7ddbeedbb55c6e8b"],["D:/Blog/public/page/4/index.html","0674376435f2a86003c2203d04f1bfe4"],["D:/Blog/public/page/5/index.html","db6b4567c1b5fed5ea47667dac7589ca"],["D:/Blog/public/page/6/index.html","3bd5ab9822fe48e39e8d923d041ec7fe"],["D:/Blog/public/page/7/index.html","9e7cff21573969c846ef12fa85dbf014"],["D:/Blog/public/page/8/index.html","917869c3352a29d4dd4ce61f41db9779"],["D:/Blog/public/page/9/index.html","fc758ce3074d9103840dc8538ae012bc"],["D:/Blog/public/palindrome/index.html","f522f9d935be04dfa2f067a3af18a3da"],["D:/Blog/public/partial-derivative/index.html","16b8a74583c881303c3e8b0d6b56e424"],["D:/Blog/public/pass-by-value/index.html","0fdfd4601d86e211e083a6adef42de3e"],["D:/Blog/public/pictrue-bed/index.html","b96feebbe5ca48fdbc53ff561835230c"],["D:/Blog/public/principle-of-opening-and-closing/index.html","538b3fb6595c832cb47fb6071128c2c9"],["D:/Blog/public/principles-of-computer-organization/index.html","0c035279fe49156019906f2e0cf5b1d4"],["D:/Blog/public/program-test/1610797689455.png","a4b33f955b61540d5b47fe601df04ae9"],["D:/Blog/public/program-test/1610798317382.png","7acf7560090b9706a2af39f59867fe7e"],["D:/Blog/public/program-test/1610799034052.png","6dff4454cf1063bdc7afd743759b6097"],["D:/Blog/public/program-test/1610800924088.png","1f1fde784b973754b7ce9f984c579bea"],["D:/Blog/public/program-test/1610801339901.png","9bc92a62cd9960d5801b60e4482a1167"],["D:/Blog/public/program-test/1610802495380.png","65e2274248325c5de079bd479c29c9ba"],["D:/Blog/public/program-test/1610811373564.png","a6be023303bb87540addafca4fef624e"],["D:/Blog/public/program-test/1610811498245.png","17afbc35ac2f32ce5009c584c317b046"],["D:/Blog/public/program-test/index.html","04a862239ff8125030a6fccaf439c32c"],["D:/Blog/public/prototype/index.html","2f4d621fe4bfb832d119cee9b460bf3f"],["D:/Blog/public/queue/index.html","f00b3dc209fa4933a3be4fb2722340fc"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","06ca94f3d25cef05b063a16b1d3315da"],["D:/Blog/public/redis/index.html","b6c5219feaa77974d075dde0f7439bd5"],["D:/Blog/public/reflection/index.html","23aa41b205ca4e9323df6a10816434f0"],["D:/Blog/public/resume/index.html","c9dd906a9b8bd6fd3d1f904d6602a86a"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","83572707673178ba2e6eff9fc24ed2af"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","e6132dd38198b09923265321b346ff5e"],["D:/Blog/public/select-structure-programming/index.html","20eced81c8049229a793a2193539abca"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","5c704c573e1541cd4329c63384cb0cec"],["D:/Blog/public/sequential-programming/index.html","8a3a7ec0b73ffb36deca98d2ad6b89ba"],["D:/Blog/public/series/index.html","8cf14565c441052a5a60ae9173176afd"],["D:/Blog/public/single-point-login/index.html","f2adfad8ad720e80ba18d8c6665b9ab5"],["D:/Blog/public/single-responsibility-principle/index.html","110ec635abcfac927c66622f70083d8b"],["D:/Blog/public/singleton-mode/index.html","6c15a21eac3a21c65f113b2352f0370f"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","77a562556235305b323ad573d3096cae"],["D:/Blog/public/sparsearray-sparse-array/index.html","386d1438847fc66bb431ee0276c66e99"],["D:/Blog/public/spring-architecture/index.html","9c609148a457f5225037c394767c585f"],["D:/Blog/public/spring-relate/index.html","176027f461a2d965c593ffb8f2f0eec4"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d00b780b48a4bf56c26ef09bb8d55736"],["D:/Blog/public/spring/index.html","9eb924bcdd1eb190fc026eee80695ba0"],["D:/Blog/public/springcloud-alibaba/index.html","c1908216f11975b779222b6189ec12dc"],["D:/Blog/public/springcloud-bus-message/index.html","2312bdf01b8eb4d09eb8859487da906e"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","3dc8442230646d9f3936cb6c50cef6ee"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b5ba7887b2bb0384ea670067ff5d89eb"],["D:/Blog/public/springcloud-stream-message-driver/index.html","71b4a80dd7be8eb6e1699418f5fed55e"],["D:/Blog/public/springcloud/index.html","050b6b447c8a4557068a1dd07a491872"],["D:/Blog/public/springmvc-environment-construction/index.html","c28a84db5cc2cd02f8bd02622583e937"],["D:/Blog/public/springmvc-work-stream/index.html","0a179f7d7e95493b81e12406f9b7f34a"],["D:/Blog/public/sql-injection-attacks/index.html","4697fe870467f5552a50b814b5ba891b"],["D:/Blog/public/stack/index.html","c1bac044312d0d50d59778b1ca581ed4"],["D:/Blog/public/state-mode/index.html","9984c7931e6a1250076bfeddfe058047"],["D:/Blog/public/strategy-mode/index.html","aa6c4e372058079af327fcf1a9c0f5c6"],["D:/Blog/public/synthetic-reuse-principle/index.html","e12162732aa38266774cb205e21a14be"],["D:/Blog/public/tags/C/index.html","38137d90965dd10f47c279ecc192270b"],["D:/Blog/public/tags/C/page/2/index.html","f80d13ec18286f453d023911526b7d63"],["D:/Blog/public/tags/Concurrency/index.html","ac11239dcd2bd67877195a855d66a2b3"],["D:/Blog/public/tags/DesignPatterns/index.html","ce9a88c458dc1ce785af42bdbb171b53"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","1c38592b442950bf5cae84b6fad68b13"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","7eaf93755cf5b374aa2b407897326bcc"],["D:/Blog/public/tags/DistributedMicroservices/index.html","d674e87abbda6fb229500168968dc605"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","ce93894e3366aab3db2c4387ba0b64c6"],["D:/Blog/public/tags/Interview/index.html","8c506b35e8af74d579cc2680d0e53b23"],["D:/Blog/public/tags/Interview/page/2/index.html","6741843ed080a749e9bfcf072b895b1b"],["D:/Blog/public/tags/JVM/index.html","f27d9db7bc27451c6027c202c2d7f6d2"],["D:/Blog/public/tags/Operating-Systems/index.html","eba79e797851bb78a30cfbbdb6daf7bb"],["D:/Blog/public/tags/about/index.html","269bdbd4285f6d37e29a8475b7d84b19"],["D:/Blog/public/tags/ad/index.html","6c24d670aea786d3b1332e18002491c2"],["D:/Blog/public/tags/dataAlgorithm/index.html","8e26d1c3efdc2eef34e55bb991ffba06"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","8597b6183520cf9dfcf16bd4c73b22ad"],["D:/Blog/public/tags/docker/index.html","8ceca742531a7b0bc6afdae67729fc4f"],["D:/Blog/public/tags/frame/index.html","4cdb25b47b59f5ed855aab1da885607f"],["D:/Blog/public/tags/front/index.html","89c380ccebb476b3147e3d0ad9020776"],["D:/Blog/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/index2.html","5fbc4f388449d2d394de453d97ae2605"],["D:/Blog/public/tags/io/index.html","55ef9b91fec9554e6c855c0fdd2b1f8a"],["D:/Blog/public/tags/linux/index.html","71f0b881ba47df7cd67d147c691a11fc"],["D:/Blog/public/tags/maintain/index.html","6df84de3d0c9a2de2fd1a756d9312fc9"],["D:/Blog/public/tags/math/index.html","32e4ae272cfcd775aa1d29ed565ce274"],["D:/Blog/public/tags/math/page/2/index.html","705353d12209b61a9fb93564d5500f42"],["D:/Blog/public/tags/network/index.html","7b5c04a0be3a431436250a35a670adbc"],["D:/Blog/public/tags/project/index.html","044a22930707c518d86db8162d239fa8"],["D:/Blog/public/tags/resume/index.html","ac62537c5280abacb769041a575c9a89"],["D:/Blog/public/tags/safe/index.html","bd241c72b0345438bf346b165f843139"],["D:/Blog/public/tags/sql/index.html","892a731f982137d0bce672a85a44a1f4"],["D:/Blog/public/tags/test/index.html","4c9198178208840aff01365be9d26082"],["D:/Blog/public/tcpip/index.html","3be7081030582b9495e074a51ea4d4d1"],["D:/Blog/public/template-method/index.html","6d0ec37bd5ca19f3925e70256c8115d4"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0d4c8dbcfac13b67994e269bfed8f9e4"],["D:/Blog/public/thread/index.html","8af36afd6e2397bfc2548ad3d8541b78"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","7de405a2554e31ef6997e2d5dc25267e"],["D:/Blog/public/ubuntu-set-ip/index.html","4456914be8035ba20d82a955b55fe297"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","db867bd992c4911a76dab7e392253aa5"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","cdd7c571bc24c3f3b05ff7a98773befb"],["D:/Blog/public/users-create-data-types-themselves/index.html","05466cb7cfd821be6f16d34682b60911"],["D:/Blog/public/visitor-mode/index.html","90e75d111dd628758092256ae303c70d"],["D:/Blog/public/xml/index.html","ce46ed793d0001aff3375a2a0873a8f2"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","9a9495672a362519a7dda9944cc2f75d"]];
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







