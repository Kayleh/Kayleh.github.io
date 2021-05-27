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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","c140f7c90d1925d04d51ca668581b118"],["D:/Blog/public/AIO-blocking-model/index.html","c803c240bda0ec7704894868a1cd3193"],["D:/Blog/public/BIO-blocking-model/index.html","3cc7319d4b107cc811da40e0a591b944"],["D:/Blog/public/C-algorithm/index.html","ea2c6af7e7788bc19bc3af9932102da7"],["D:/Blog/public/C-programming/index.html","04e7b6f1d02fb37e3db85335a5c13f70"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","490ee201d8d4ebe830c781b1b4fa01f1"],["D:/Blog/public/Front-end-security/index.html","eab6e3aa00f24d491751224ce85c9470"],["D:/Blog/public/Good-use-of-pointers/index.html","45acf862858aed9b08a8ce81c87a1480"],["D:/Blog/public/IO-model/index.html","389a93aa62f70592a4daa3286a102641"],["D:/Blog/public/IO/index.html","f500aaaa2ef2d4260172b874cff0205f"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","1bcf493062d9c8fa01b946557f7ddb6a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","53c72e4f3d5fc3fed20153da8941b5f9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","8f6cc4e55b3db7bca997a2db2cd4c9ce"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c1590f5a3e613aef191b8b00034d1b24"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","3a0d9aceb859372ab52166bdf7aeb85e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","1dd8f56cd98cf57a148170cd85a8efa5"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","d23f7ea1a7e833e29fde07ddc47f2f26"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","907e42a22d1ba18fbd3f64eb8af099d0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","05b9f3e52a78439fca23b0e74632203b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","ca90c43080adaeb4d1ab8c626712a0b7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","9904a4d6cbdfd19947135a6cc83f3f38"],["D:/Blog/public/Java-network-programming/index.html","9f1baccd04e72737de62de8264d216bb"],["D:/Blog/public/NIO-blocking-model/index.html","731656b1814ef49e80d3b6bd6a181d52"],["D:/Blog/public/Native-method/index.html","68c4d43804d1864f10e31fb0f23417ad"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","549b2d71fa95b616af41edebf8596845"],["D:/Blog/public/SQL-injection-vulnerability/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL-injection-vulnerability/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL-injection-vulnerability/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL-injection-vulnerability/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL-injection-vulnerability/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL-injection-vulnerability/index.html","2f5d742be58c03d2bb6c751ee81a2eef"],["D:/Blog/public/Sandbox-security-mechanism/index.html","e1d8f2b83779218203b5671190910b9b"],["D:/Blog/public/SpringBoot-startup-process/index.html","3882c42745a9808de8f987b11e8505d4"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","b089bba19ed0d0773600544114eb5fe6"],["D:/Blog/public/Unitest-framework/index.html","872f9911d89ff5442e95a27fe0147173"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","448ef61364b5f4c8d189550940997152"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","08ec738b3b140576be28687ae643925d"],["D:/Blog/public/agency-model/index.html","f64b83bd81a3c1a317748b5d8098a041"],["D:/Blog/public/app-test/index.html","8283a73f2d0cefbc73470d026aa9d2d8"],["D:/Blog/public/appearance-mode/index.html","f4779db1d53ff4b3b2fbe2997f9e89ac"],["D:/Blog/public/archives/2019/01/index.html","5af97f09c5522fa3bb19409eb24d46d5"],["D:/Blog/public/archives/2019/07/index.html","d73a8dd055b5cfc81eafc0833620eb78"],["D:/Blog/public/archives/2019/12/index.html","858375c6f5a78419c2d4ac799105a1ff"],["D:/Blog/public/archives/2019/index.html","886b6369ae656bfc8ff4b645d6ab71e9"],["D:/Blog/public/archives/2020/04/index.html","dd7bf4dffacc23ebfcd83a9f5b4d1c0d"],["D:/Blog/public/archives/2020/05/index.html","702a3797023f11ed47bfc77b36fe34b5"],["D:/Blog/public/archives/2020/05/page/2/index.html","0d4091d73526945dd98ec826b38802f2"],["D:/Blog/public/archives/2020/06/index.html","ab0ca9ea6405d871db9124afd68aa3da"],["D:/Blog/public/archives/2020/06/page/2/index.html","ab5f57787de4a698b0c35685e8b58686"],["D:/Blog/public/archives/2020/06/page/3/index.html","6676ab25c6f35d98bb2d51c228a207fd"],["D:/Blog/public/archives/2020/06/page/4/index.html","f1833e44c76554a0977cce4ae01d7d90"],["D:/Blog/public/archives/2020/07/index.html","a639faceb364a0fd2514d372556c7c5b"],["D:/Blog/public/archives/2020/07/page/2/index.html","a8dfbd95986f827529deb20ba0e04d9e"],["D:/Blog/public/archives/2020/07/page/3/index.html","44c4945526ca20db271ddf787602c45e"],["D:/Blog/public/archives/2020/08/index.html","812681fc3874af1d925a0f924bc144fb"],["D:/Blog/public/archives/2020/08/page/2/index.html","814e8267a0f3acbf91183bf8aa13ba1f"],["D:/Blog/public/archives/2020/09/index.html","d3a6ced4eb0441ccf932f92edc0f4f48"],["D:/Blog/public/archives/2020/09/page/2/index.html","27aabc8f018be46731188d1721dfc1b5"],["D:/Blog/public/archives/2020/10/index.html","ba4628318440d6e7c173a795d1f41ba7"],["D:/Blog/public/archives/2020/10/page/2/index.html","fccdea37a083f11a4ac02cbe3fc86921"],["D:/Blog/public/archives/2020/11/index.html","cacaa5253400d31593d55f3b5700fb33"],["D:/Blog/public/archives/2020/11/page/2/index.html","03a22d6ac3ae88958056499052ebecdd"],["D:/Blog/public/archives/2020/12/index.html","3aef617a1997e2b6dffc0b06694c3925"],["D:/Blog/public/archives/2020/12/page/2/index.html","d18d675ec5cf014f2e5a52f6170b79e2"],["D:/Blog/public/archives/2020/index.html","aa92b2d54c1b9f64e7a93b95c6d3999f"],["D:/Blog/public/archives/2020/page/10/index.html","5696298b2b99231c08a51a6d23448e18"],["D:/Blog/public/archives/2020/page/11/index.html","02063530263f93bd8ff8b91e7694e796"],["D:/Blog/public/archives/2020/page/12/index.html","1db073f5b26a08a8fc8435b7a13e913e"],["D:/Blog/public/archives/2020/page/13/index.html","d8601cfeb8f8ebf7d818012b60484132"],["D:/Blog/public/archives/2020/page/14/index.html","95d0d80d3e99f10e3b6eb53b8a5bf68a"],["D:/Blog/public/archives/2020/page/15/index.html","69dbec71edc46656cc4bbe5a82f8678f"],["D:/Blog/public/archives/2020/page/16/index.html","04db91c92b48249502d798759b2b4493"],["D:/Blog/public/archives/2020/page/2/index.html","9d983e6ed0dea123f44f42153e7ee80a"],["D:/Blog/public/archives/2020/page/3/index.html","0fd5c5794e3f44f769931cb9ff7a3aa2"],["D:/Blog/public/archives/2020/page/4/index.html","fe26ecadcfc343500af31cba9d96a717"],["D:/Blog/public/archives/2020/page/5/index.html","dc677b19fa3504551f4c5ed92c3c5ed3"],["D:/Blog/public/archives/2020/page/6/index.html","6d32b1cfd7d087581c1b87c540abe3f5"],["D:/Blog/public/archives/2020/page/7/index.html","1efba6f42a6a638549dc8b7ad0d58461"],["D:/Blog/public/archives/2020/page/8/index.html","ab3d4709653a477581528480304d809f"],["D:/Blog/public/archives/2020/page/9/index.html","63960a9348fca7bbb80a76b26d30b005"],["D:/Blog/public/archives/2021/01/index.html","ba3a4adffaf30e3eabb4479d209975f3"],["D:/Blog/public/archives/2021/02/index.html","de44b8fe472be7927200a10dc1158ddf"],["D:/Blog/public/archives/2021/03/index.html","693bddcc947e4f4dc5025cd786f4f3e8"],["D:/Blog/public/archives/2021/04/index.html","262e1526e296e79c1e3cd8229832ac94"],["D:/Blog/public/archives/2021/04/page/2/index.html","8bba1cbe63b5efdaa803227db37b92b5"],["D:/Blog/public/archives/2021/05/index.html","04994e368daa118d3ccc6691e0e19620"],["D:/Blog/public/archives/2021/index.html","9d00387b8c96cea9593130526de227f4"],["D:/Blog/public/archives/2021/page/2/index.html","e72b8e7a0a253bf97a8a65ecbfe62f09"],["D:/Blog/public/archives/2021/page/3/index.html","cf044e26ae5aebdcc6bdb7f830d4b8eb"],["D:/Blog/public/archives/index.html","367d6649438c578b700810c458fa07ef"],["D:/Blog/public/archives/page/10/index.html","814abfc252f56dc964c1997a6da13961"],["D:/Blog/public/archives/page/11/index.html","7880754c6fd517ad3202e95a5262ef11"],["D:/Blog/public/archives/page/12/index.html","3798b1461b1cd059e18f3e9c90073a43"],["D:/Blog/public/archives/page/13/index.html","9ce78c21edd5701d7c4788ef84755648"],["D:/Blog/public/archives/page/14/index.html","95730aff06c4ba34a394b2145c69a642"],["D:/Blog/public/archives/page/15/index.html","e3537967c1e98adce0fdcb3daffa9661"],["D:/Blog/public/archives/page/16/index.html","6414a4c2fe3431473234abd7576fabba"],["D:/Blog/public/archives/page/17/index.html","1cd8ca6dd791688abe7e4188a35de875"],["D:/Blog/public/archives/page/18/index.html","c617abe71e4ff660222d61dbdd69093b"],["D:/Blog/public/archives/page/19/index.html","dd96557f45ae1eb7fe73fc5e4f172583"],["D:/Blog/public/archives/page/2/index.html","5b44c1c9c8d3bd7df0ce0f0532596031"],["D:/Blog/public/archives/page/3/index.html","f95fde09844eb9e47fbf37aa1c47a85e"],["D:/Blog/public/archives/page/4/index.html","ac91eb37256972b1a909abb5aa16e683"],["D:/Blog/public/archives/page/5/index.html","d147f9cd68a4cbcb43e62b8c4d2d3bda"],["D:/Blog/public/archives/page/6/index.html","0f22d9285d618300130b1a5e6202b919"],["D:/Blog/public/archives/page/7/index.html","645d84581822fb1070002be43aff03a8"],["D:/Blog/public/archives/page/8/index.html","380a4f88dfb7e7f0569d07e341db6fa6"],["D:/Blog/public/archives/page/9/index.html","4c01a312d168afbdff64858fc0b28d4e"],["D:/Blog/public/array/index.html","1a9a9921e21b0cf04ce01791b9b0b3ff"],["D:/Blog/public/automated-test-katalon/index.html","0dca1ef40c491a8794a6b25e1b1759d3"],["D:/Blog/public/automated-test-selenium/index.html","6caeb4129e1d72005441df1604f03cbe"],["D:/Blog/public/binary-search-algorithm/index.html","e6e51353026b4916fa3650309c98a75d"],["D:/Blog/public/binary-sort-tree/index.html","21a24955d5ee4ddfa6392559c101c063"],["D:/Blog/public/bionioaio/index.html","e0d0f59723dce5d9b5ea40ed0681c9b2"],["D:/Blog/public/bridge-mode/index.html","c390d6f50ad6ccf86ce6c1a407b67879"],["D:/Blog/public/builder/index.html","851032ae85a244a6451636bd013b5585"],["D:/Blog/public/c-pointer/index.html","e17652b7595279a50a1241fd9a538690"],["D:/Blog/public/categories/C/index.html","0d04192cd27a34a9afd1a45c536ecb6e"],["D:/Blog/public/categories/SpringMVC/index.html","45c81daa5921d86276a7019bbf7749db"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","73b0389ae7a3a76f16be11eb57a44406"],["D:/Blog/public/categories/分布式/index.html","652e5a2ae26b869b5c5ca65cf589d3ec"],["D:/Blog/public/categories/分布式/page/2/index.html","9696dfc382187aa1a7a93dd39360bda3"],["D:/Blog/public/categories/设计模式/index.html","9d771b44f1356748fae62924eb411f6c"],["D:/Blog/public/categories/设计模式/page/2/index.html","9b1fa8215c446581facaefac7eace35c"],["D:/Blog/public/categories/高数/index.html","c3f5ba8d51cdd1cb0804999f6bdfe4f3"],["D:/Blog/public/chain-of-responsibility-model/index.html","f75219c15ebe0d1f6b8593f8c8dfb9c4"],["D:/Blog/public/chinese-and-english-switching/index.html","9234ddd489beeac843b51b1292aa3693"],["D:/Blog/public/combination-mode/index.html","daa4b082ec401985bac416d73995a988"],["D:/Blog/public/command-mode/index.html","647afdc479c9a0073fa06d0015438536"],["D:/Blog/public/common-commands-of-unix/index.html","4b9b5ff5646a7e6d45f8a94671e51b1b"],["D:/Blog/public/computer-network/index.html","5ce8387a7b1966a1188d5184d3a76289"],["D:/Blog/public/concurrency-principle/index.html","bbe4377ba4581b710ea53e730cb699c0"],["D:/Blog/public/continuous/index.html","52a068cd18364b09020ed1297f9de519"],["D:/Blog/public/contract/index.html","bec7e023488dd7dd8a8c250b669cac5e"],["D:/Blog/public/css/octo.css","0de607aadad5eaa2a2148be275a9f300"],["D:/Blog/public/cycle-structure-programming/index.html","2c38d4256c6e11e1f9e8f3fef392e16a"],["D:/Blog/public/data-structures-and-algorithms/index.html","252635e782fadb39aa3ddbba89ee63aa"],["D:/Blog/public/deb/index.html","2c609c86917ada75a066bef925ed129b"],["D:/Blog/public/decorator-mode/index.html","66c0357240883aa44e6487e53908efd8"],["D:/Blog/public/definite-integral/index.html","4f3ba77358c73bb92500228e25dce912"],["D:/Blog/public/dependence-reversal-principle/index.html","f8ff1ca1d9acf45b3efc82046c9ba2f5"],["D:/Blog/public/derivative/index.html","5547bbf12fa86b1d4c89e21db3f8dcb2"],["D:/Blog/public/design-patterns/index.html","8d9b898032a010f2e0a5d02311e1d3e7"],["D:/Blog/public/differential-equation/index.html","0ba3d689da371b922a8c5302257472ca"],["D:/Blog/public/differential/index.html","e8c8f6c49ad36989c200fbefe88d12a6"],["D:/Blog/public/dimits-law/index.html","42714c9a8ff9ea0985879511d6c63226"],["D:/Blog/public/docker-virtualized-container/index.html","7e6a5382ee181a3ac2e0395fd6c9e3fb"],["D:/Blog/public/double-integral/index.html","29d056e5a516acfb15cf1ce7b6cffa59"],["D:/Blog/public/dynamic-array/index.html","5cf4b0a99f7ed68226ee411b383215d8"],["D:/Blog/public/dynamic-programming/index.html","ccf19759f58e6448a45cad5296c17d67"],["D:/Blog/public/encoding-algorithm/index.html","e4c5f920ce8aad755536f4c93279c8ba"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","bae5c56266fd0d6c4a8920b9042c3315"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","1f8b009a1331eef4eb7af41744a63bd7"],["D:/Blog/public/factory-design-pattern/index.html","6b2862eb96595a93661d0419af0adf9d"],["D:/Blog/public/file-input-and-output/index.html","854dbe52944913f37c92df7a07853d4c"],["D:/Blog/public/flyweight-model/index.html","da701fa43dbc0ea80702df8b332c44c8"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","ed60b43ea98308050b04bd2e7a0b8456"],["D:/Blog/public/gateway-service-current-limit/index.html","738c10e36b39eb78e706105a9e6c53d8"],["D:/Blog/public/gc/index.html","6188764bd34681c36422edd40477a99e"],["D:/Blog/public/generalized-integral/index.html","ae3f90b7c5d86e757b305ac4ce654d41"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","38a68fcf50cb6cbf4aae9d02f37d85c5"],["D:/Blog/public/hash-algorithm/index.html","73632b3db12a85a6eb821ab450e7db9b"],["D:/Blog/public/heap-sort/index.html","801f0d6235e9953be42c940d08bf4703"],["D:/Blog/public/http/index.html","9031cd4e7afa296eea204583a7a7735f"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","c2f31a020f8cf15ac87766314bd9735e"],["D:/Blog/public/index.html","3ec397222db2f61bcb0b7e344e8305cc"],["D:/Blog/public/infinitesimal-and-infinite/index.html","5b234c7e761052a87228dec01ffebeed"],["D:/Blog/public/interface-isolation-principle/index.html","d4e14ddf252e6016687824fe4c8a1dc5"],["D:/Blog/public/interface-test/index.html","d95672da0d4ce43e9fbac955d6bc4f32"],["D:/Blog/public/intermediary-model/index.html","c2cb8047dba67080a22d81b42ab6a7af"],["D:/Blog/public/interpolation-search-algorithm/index.html","427cbef882a849bb1a5989fd315e32ab"],["D:/Blog/public/interpreter-mode/index.html","1efdb073afeeb722555ee10416495744"],["D:/Blog/public/introduction-to-computer-network/index.html","d81ae4ceefde979fe3378beb4a2efb49"],["D:/Blog/public/introduction-to-operating-system/index.html","c387621bf665f3ca936376c52d012491"],["D:/Blog/public/inversion-of-control/index.html","049fefaf4ae60721fee89d4a968e7e58"],["D:/Blog/public/io-Interview/index.html","fbba2e9adadfabf9209beb0a58c10140"],["D:/Blog/public/iterator-mode/index.html","bfb020e09b6810c94a0733dcb0a599d5"],["D:/Blog/public/j2ee/index.html","bff9944bd8f9433db1dc5ffa6356afea"],["D:/Blog/public/j2se/index.html","567fbdcf8988daf33d7c71f4568843a8"],["D:/Blog/public/jdbc/index.html","3c59155e05c0de5bfe064f39108d10ae"],["D:/Blog/public/jdk/index.html","bc933adac03dd6e1fd00a02d2b30975a"],["D:/Blog/public/jmm-memory-model/index.html","6e31e0da3309341a2808e5a8de56190c"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","1d0a0d276ef185b70afae7ecb0608080"],["D:/Blog/public/jvm/index.html","a4a506bfcfdea84fe8f7f7069d9727d3"],["D:/Blog/public/law-of-robida/index.html","01a899fdb69ce1273e9125a2813fd3b3"],["D:/Blog/public/limit/index.html","901c99f3874418151e565f699c1bd650"],["D:/Blog/public/linear-search-algorithm/index.html","8c3f7e3bb9e1a5a76a58eea6b755d6d9"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","41c9b4f051fb2aaa956e728f9ac1808d"],["D:/Blog/public/linux/index.html","219f12d8437da9c4b0e7068e0b5dcdb8"],["D:/Blog/public/liskov-substitution-principle/index.html","9841677db39eca018114db4a67f85776"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","acdcc49be6c8b7e29709d853edd6a569"],["D:/Blog/public/memo-mode/index.html","a446652f3cfbc5d9740d3097740effbc"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","7897e94a601896db1bf67ab3558f19ce"],["D:/Blog/public/multi-function/index.html","bfd7f0d2d93346b242ae9cfe63886e2a"],["D:/Blog/public/multithreading/index.html","ab0b2e07304640464b952915acdcd19d"],["D:/Blog/public/mvc/index.html","3b997bc0509b7b9c126fbb7419328382"],["D:/Blog/public/mybatis/index.html","cf3cba2fcd0114862f771da805bd30da"],["D:/Blog/public/mysql/index.html","6f2dc00b7a961b309cc8c4dcb2933fff"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","ca05d8ac9b292d244d9093d37430ebb5"],["D:/Blog/public/objectoriented/index.html","5db144706e39307c66615d12630e0e68"],["D:/Blog/public/observer-mode/index.html","d0483c2b1c793f160257ae3380e476bb"],["D:/Blog/public/off-heap/index.html","9759573a72bc1b433cc22f2cfe84e76a"],["D:/Blog/public/operating-system/index.html","8946fd4c67fe4e9b121133312c938eca"],["D:/Blog/public/page/10/index.html","37f90f65b8ff60a2c97923560062cc49"],["D:/Blog/public/page/11/index.html","8e2cbee09ff2375f956c35814e561084"],["D:/Blog/public/page/12/index.html","95a8ca8691e82c141366032d951d7cef"],["D:/Blog/public/page/13/index.html","eb6aca0a948f3c6a6513a36be4991c74"],["D:/Blog/public/page/14/index.html","6734aacb5d3c2eb26d89442863ed651b"],["D:/Blog/public/page/15/index.html","ac5bd3173385c7ada04f6f74d95d910a"],["D:/Blog/public/page/16/index.html","96c26c2b080c59021ad960091b9f6431"],["D:/Blog/public/page/17/index.html","2faf9d327684fa3e5286fe7609b2dcaa"],["D:/Blog/public/page/18/index.html","6fb8e5f84066d53db02a63a47237d628"],["D:/Blog/public/page/19/index.html","80955e250f8d3cee436142b128e648fc"],["D:/Blog/public/page/2/index.html","f6679ed2b2acb4eaa0b1c17c6ff1e2ee"],["D:/Blog/public/page/3/index.html","445cc6ef96ca726f1191c650e361eff0"],["D:/Blog/public/page/4/index.html","be31c2c677a9d8b6c4782c62c7ba80fc"],["D:/Blog/public/page/5/index.html","2fd74ce17886160ee1cd95950efd24a7"],["D:/Blog/public/page/6/index.html","6a278bb16c3c709e00606b879793b29a"],["D:/Blog/public/page/7/index.html","9bd269c5dd9c1513d53fbfcf798ec5ea"],["D:/Blog/public/page/8/index.html","56a5ea3c1b4ad7f4572473c4c59b21d8"],["D:/Blog/public/page/9/index.html","3fbff631de084138826163d78368094b"],["D:/Blog/public/palindrome/index.html","61a0fe07da50940a8e300eab3bfac6af"],["D:/Blog/public/partial-derivative/index.html","4824c7ff6bc893b3b68fe4378c2a49f4"],["D:/Blog/public/pass-by-value/index.html","4a2fcad7aa570aa7d0107ae130b97462"],["D:/Blog/public/pictrue-bed/index.html","ec6ea6ab0f740381470c4500ee4f9e20"],["D:/Blog/public/principle-of-opening-and-closing/index.html","3f87d070aad5d01d1909fc0207a943b4"],["D:/Blog/public/principles-of-computer-organization/index.html","bc9f173a933c71bc9dc678b6c15cd0ba"],["D:/Blog/public/program-test/index.html","f2657ad6e40bd1304607f0b780463776"],["D:/Blog/public/prototype/index.html","2166acdd9b2dd67fd04803a195d5f29f"],["D:/Blog/public/queue/index.html","e166e5e1e5e12d1524c1c408a28812ea"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","636fa98ce6aec303aa696f3321979908"],["D:/Blog/public/redis/index.html","41927c54defe605814323d17056ec78e"],["D:/Blog/public/reflection/index.html","6f020799f0f62e06d2530bc48cebceb4"],["D:/Blog/public/resume/index.html","e8acc09a89f9fbf4f6ae3fcb83b5ed78"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8a07748d921613d23cf538f71a820350"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cd2caf2a06f9a3d3504d805ff7c539e8"],["D:/Blog/public/select-structure-programming/index.html","14bf834b2a10ba19d89bff2f1b0341d3"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","c83aac11b1b6c62ac994ed73e67544a9"],["D:/Blog/public/sequential-programming/index.html","c7aa4bd299409423ff91b014ba1d7d07"],["D:/Blog/public/series/index.html","b6c669e0bee6934f0dccba950d36a007"],["D:/Blog/public/single-point-login/index.html","2e74e154b61ecdf77bde76e4e564bfee"],["D:/Blog/public/single-responsibility-principle/index.html","894e0a3b5fb6198ce018078b6ba3107e"],["D:/Blog/public/singleton-mode/index.html","a7b4deb8f5cba44397cd4252d7d07126"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","d05c860da7866bcc38b179bc55d6ec9d"],["D:/Blog/public/sparsearray/index.html","11032a2a64c997745bdff640bd78bd4d"],["D:/Blog/public/spring-architecture/index.html","9e2040f7cc814f1bb5a769660ace1263"],["D:/Blog/public/spring-relate/index.html","33d17525d1191dd9d80db96bdc27781d"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","333cc8aada17180a73be251e9c81c15c"],["D:/Blog/public/spring/index.html","96baa19229a1f93aecb944db530a1d2c"],["D:/Blog/public/springcloud-alibaba/index.html","f253698a21f8b4422c44fc9ac1326480"],["D:/Blog/public/springcloud-bus-message/index.html","28a5547c5f5ef1ae2c1bda078be57c6b"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c8caeae2b026906320894432903eb562"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","19c79a3e17b7efb05071014ac8624911"],["D:/Blog/public/springcloud-stream-message-driver/index.html","0319746757f5ccbacc979d6c4c09bc93"],["D:/Blog/public/springcloud/index.html","fdadfb47ca459e8b9ec01dd54663292b"],["D:/Blog/public/springmvc-environment-construction/index.html","46397b99f1d8f46288ea458f6a642e9f"],["D:/Blog/public/springmvc-work-stream/index.html","25bc628373d12d20655559dcf6f6c19f"],["D:/Blog/public/sql-injection-attacks/index.html","5bc88fc8532544918d687cdb74ee17ea"],["D:/Blog/public/stack/index.html","2c83907b5fcf3ee5c939e63eeebaedb5"],["D:/Blog/public/state-mode/index.html","7a0fcfb33291c589710115dec0468b39"],["D:/Blog/public/strategy-mode/index.html","475fb1806bcb39cb2a6d7d01ceb7fdbd"],["D:/Blog/public/synthetic-reuse-principle/index.html","55abba98a24618197e2baf85f4e58e49"],["D:/Blog/public/tags/C/index.html","77ea2d2f0f8cbe1fe602380f095644c2"],["D:/Blog/public/tags/C/page/2/index.html","9f7d7249635cbcf2970ce44825d9ecf6"],["D:/Blog/public/tags/Concurrency/index.html","d4276b5f4f85df8fe58498fde72cbe0f"],["D:/Blog/public/tags/DesignPatterns/index.html","3fdd317148a014fd4391e640cba4bd5c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","287a6ffe9fcda9027618777c5580e0e7"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","01cf06366fc41749a601849c2efddb97"],["D:/Blog/public/tags/DistributedMicroservices/index.html","b06f42bb87f6796e1ec352d9abb44010"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","24fca3ccdaa5000ecffab40746b607b1"],["D:/Blog/public/tags/Interview/index.html","1a6337922e2763be9d6c779b461b181d"],["D:/Blog/public/tags/Interview/page/2/index.html","ceae6de735d2d7bf5b015edeee21c01a"],["D:/Blog/public/tags/JVM/index.html","1bfe1f03ad879a235f377039d0af54c1"],["D:/Blog/public/tags/Operating-Systems/index.html","798014dca664778deee88e6ca79a1c6c"],["D:/Blog/public/tags/about/index.html","cd9a2d61d305d4573fe9bab6d64a4fc3"],["D:/Blog/public/tags/ad/index.html","6a6c6a775d6fc687c0b6dfd1f091f49a"],["D:/Blog/public/tags/algorithm/index.html","0088ba72c96053aa840c6e352ee36275"],["D:/Blog/public/tags/algorithm/page/2/index.html","b984a46f9a686ee271224ef331797155"],["D:/Blog/public/tags/computer/index.html","1f3e5cda0db5839d656a7c80822a0f5b"],["D:/Blog/public/tags/docker/index.html","1721474f802a57b9a81970e7d36ea56a"],["D:/Blog/public/tags/frame/index.html","d541bfcba3500e67af95402099145849"],["D:/Blog/public/tags/front/index.html","bb330cb56356668e257d9d55421f3754"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","01dde724750a5d94e93cd431191ee14f"],["D:/Blog/public/tags/java/index.html","2de6a19f1ec100e17013b5daef757a87"],["D:/Blog/public/tags/linux/index.html","0bbedc577a25b9ed79af5db007e49306"],["D:/Blog/public/tags/maintain/index.html","e14555bdf00de99160b499eeaea36466"],["D:/Blog/public/tags/math/index.html","e635e1acf6fd410d47a2d77f2c191b40"],["D:/Blog/public/tags/math/page/2/index.html","f5cce59fc20c864324d07c555f7bb95a"],["D:/Blog/public/tags/middleware/index.html","26c26ba0be817b6b5ab2c3d172fe62bd"],["D:/Blog/public/tags/network/index.html","2377e16f28a241d97050a1ae831de3e9"],["D:/Blog/public/tags/project/index.html","13855d1060bd0b1943df9fda84974157"],["D:/Blog/public/tags/resume/index.html","27f3a8e672426c01d6330cdd58687540"],["D:/Blog/public/tags/security/index.html","3c3dae7e2a49fd01edb13913240cb23c"],["D:/Blog/public/tags/sql/index.html","fb5aef30b1f350efd889900051af7bcd"],["D:/Blog/public/tags/test/index.html","2536df87b5e16aeb61a862f38783c194"],["D:/Blog/public/tcpip/index.html","dd068043c385bd21a5b2e0f8b0ee8582"],["D:/Blog/public/template-method/index.html","5903abb9f3c007dcd7b6e857bbaf153f"],["D:/Blog/public/test-case/index.html","f3b344521e11e62d3a14f7fe83785545"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","ce63e900656cd7eeed3d9ce39ffdee1d"],["D:/Blog/public/thread/index.html","797b1b037fe456eb6fa7843de1f778a8"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","0e77d91b4255c9cfbfc00c0f7184b86f"],["D:/Blog/public/ubuntu-set-ip/index.html","7a805f3f7dc915c672dc7d00bc68446d"],["D:/Blog/public/undefined/index.html","c66cc84843419c100ff012bc402d967c"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","ebe650a1332922e60bda5f18f99329bb"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","c9a25714dbc77d7b99ab8386835808fc"],["D:/Blog/public/users-create-data-types-themselves/index.html","85195f7ccdbb2f582486d6b73d4ae866"],["D:/Blog/public/visitor-mode/index.html","7f5d590e1a6879506a5f9975cedeab4e"],["D:/Blog/public/xml/index.html","0ee037ee88d5e3e69dc42d0b884c348a"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","372c0f75194cb14bec0689399a65f948"]];
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







