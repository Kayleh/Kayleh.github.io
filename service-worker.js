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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","d63fc17612a6453cb9edef432a3ecca7"],["D:/Blog/public/AIO-blocking-model/index.html","d338bff45fcfc90ae3c594ede27f4455"],["D:/Blog/public/BIO-blocking-model/index.html","76645c94ec8fcf90d005ea76a44e1c5c"],["D:/Blog/public/C-algorithm/index.html","82ba16054fecda86419b9850366d4264"],["D:/Blog/public/C-programming/index.html","00fbdc87aef0b93ec6e627ba72eca277"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","cf77e0e1c9e3b900c247bcec470bbf36"],["D:/Blog/public/Front-end-security/index.html","4c4e037dccbdfab9205ca4be0d2ea222"],["D:/Blog/public/Good-use-of-pointers/index.html","297d922c0f435d97653705143e6692cb"],["D:/Blog/public/IO-model/index.html","94ee55217dd55b39cd2c0731876660c7"],["D:/Blog/public/IO/index.html","648a910660f23582ccffcf7cce477b24"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","44e52a135346317fa73ca08a91a94652"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1f249f91a3fe2e8210e10bbf61e13607"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","13af5c7bead3d7c7f21920a47b1582cc"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","e63651e976089525d3f60c631274a130"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","d558798755ff5acb0a4705c5fa7d78b9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","6de037da61c4bca1ebeb50eb9670b3f3"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","05a45d1e3ad663b0ce02ac7a4356fecd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","ab071af6b31dfe15982cae8f08f6d0f4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","742807fc3504e96a41e8096fb13c8fac"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b7a3c31a67c94d912f55776a7ababa3b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","6d66d2073ebaa4612c7630521fe3a5ad"],["D:/Blog/public/Java-network-programming/index.html","e3a5102111736385c56f0f43b21ace1d"],["D:/Blog/public/NIO-blocking-model/index.html","7ac60fff3bb832a835f761ff5770e030"],["D:/Blog/public/Native-method/index.html","9054dd21a6a5c1f44bfcd4362fab92bc"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","e13179d155207f3f939e36301caddc7a"],["D:/Blog/public/SQL-injection-vulnerability/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL-injection-vulnerability/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL-injection-vulnerability/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL-injection-vulnerability/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL-injection-vulnerability/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL-injection-vulnerability/index.html","35344ce1bcc552d136d3171417492191"],["D:/Blog/public/Sandbox-security-mechanism/index.html","7428f5fc3d690f1a34a6c6dbec6a3d92"],["D:/Blog/public/SpringBoot-startup-process/index.html","27e1b15d47b8278b92e5aa1aa887d5a1"],["D:/Blog/public/ToDoList/index.html","c3a8ba353265471887af1c8f9bfe4bc8"],["D:/Blog/public/Transaction-isolation-level/index.html","3d25be6f478ef24ae5b1ebe2fea6eae1"],["D:/Blog/public/Unitest-framework/index.html","f56fc2636cfad54e861e8490ac46f870"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","6c409ee951caa341026f06a1bdbfc9bb"],["D:/Blog/public/about/index.html","97b10f0dc6bb4e46300dd52e385b81e2"],["D:/Blog/public/adapter-mode/index.html","43a84b52b8ff7cc6e6dfa6eb83a52c69"],["D:/Blog/public/agency-model/index.html","9b2b8f623210c0f505266a6d3c34bb3c"],["D:/Blog/public/app-test/index.html","4a5eab47e61fab8fe1689f57d1900e6e"],["D:/Blog/public/appearance-mode/index.html","2bac9f41f597fd840cae193863e30aad"],["D:/Blog/public/archives/2019/01/index.html","b154fa1ef1c25554549182a34f27b0ee"],["D:/Blog/public/archives/2019/07/index.html","99310bd9570a1a3e92149c8307e21406"],["D:/Blog/public/archives/2019/12/index.html","90878b6f413803df71fdb615041ae125"],["D:/Blog/public/archives/2019/index.html","6c4784db702a5a8007d14969d20aa78c"],["D:/Blog/public/archives/2020/04/index.html","8d293471a74d119ae1955c0e7bf13d87"],["D:/Blog/public/archives/2020/05/index.html","1474373355a3849ab5f67d4bb1e0aa66"],["D:/Blog/public/archives/2020/05/page/2/index.html","4060967d274dd6e087d4a6c6884a7aee"],["D:/Blog/public/archives/2020/06/index.html","89f42fb01ac7e841d62df6bc4db340b4"],["D:/Blog/public/archives/2020/06/page/2/index.html","245c90ffb7a91fbc912d7265888c708d"],["D:/Blog/public/archives/2020/06/page/3/index.html","2b398590893b26e379aada5a76d2d82f"],["D:/Blog/public/archives/2020/06/page/4/index.html","fcb42aaf4bda8c055dcd63e6d1c21fcd"],["D:/Blog/public/archives/2020/07/index.html","6d00f678ea0f836eee113e3b065eb200"],["D:/Blog/public/archives/2020/07/page/2/index.html","6dfac10f74b2e0d7c9eac892e8b46a62"],["D:/Blog/public/archives/2020/07/page/3/index.html","8a6ebfb274d1d7816e606042d93962f8"],["D:/Blog/public/archives/2020/08/index.html","ece5cc7fe17c7d151df22fb84b84abf1"],["D:/Blog/public/archives/2020/08/page/2/index.html","5f3e6ca0177710a012f468256dc76831"],["D:/Blog/public/archives/2020/08/page/3/index.html","7988357db549bff0c9a9e132df749853"],["D:/Blog/public/archives/2020/09/index.html","0323fc42db2aa056a3fbdf3daf76a529"],["D:/Blog/public/archives/2020/09/page/2/index.html","78961162c4c374a1a5fc3a5dc26f36df"],["D:/Blog/public/archives/2020/10/index.html","97a7c0fd4a177afa87f834b51008a6a2"],["D:/Blog/public/archives/2020/10/page/2/index.html","d03100d35014d7dce65f0f35b1f1a58d"],["D:/Blog/public/archives/2020/11/index.html","0cf33d8b550586d998dfcc73f673b3af"],["D:/Blog/public/archives/2020/11/page/2/index.html","c8f454ac067b6b18335290ef8e71c3be"],["D:/Blog/public/archives/2020/12/index.html","47282619f216dbc68699aa7592d249da"],["D:/Blog/public/archives/2020/12/page/2/index.html","68ac237a1d2556dbc09f48ce9161f9fb"],["D:/Blog/public/archives/2020/index.html","997d061476b13ffb5d1a0b1951895bda"],["D:/Blog/public/archives/2020/page/10/index.html","291b936824d748e2523331dc2957c35b"],["D:/Blog/public/archives/2020/page/11/index.html","695b22b1ac9e58c7dc9e537862fa73f3"],["D:/Blog/public/archives/2020/page/12/index.html","7bb5290a609a287e3ecb5f9db9ffd7c0"],["D:/Blog/public/archives/2020/page/13/index.html","6720b47ba94e6621a6b3e0c84de5bda8"],["D:/Blog/public/archives/2020/page/14/index.html","06c1168456107bd5549f9bb60bbd5c90"],["D:/Blog/public/archives/2020/page/15/index.html","85bf29ac84cd0d9b2d9352501dc6d751"],["D:/Blog/public/archives/2020/page/16/index.html","cf440b5a3849e59f961d8c7371a8fd0d"],["D:/Blog/public/archives/2020/page/17/index.html","38df8baf71a6f4befaef925070d3ec6a"],["D:/Blog/public/archives/2020/page/2/index.html","7672a36ed39447dce640aa761236a63f"],["D:/Blog/public/archives/2020/page/3/index.html","1b4e55853f3c049ce5e822de275203b9"],["D:/Blog/public/archives/2020/page/4/index.html","b64404160ab40371dafb595830ab0245"],["D:/Blog/public/archives/2020/page/5/index.html","cd69117077cff9499a0f2f83e8e2a265"],["D:/Blog/public/archives/2020/page/6/index.html","a748334fc521d83211b8cf19343839ca"],["D:/Blog/public/archives/2020/page/7/index.html","982744937788f2f75ba146608e7e8e0f"],["D:/Blog/public/archives/2020/page/8/index.html","92c172cb58bd11aadfca70421ad3bf29"],["D:/Blog/public/archives/2020/page/9/index.html","3be2cba884ba77fbef98a864ad471154"],["D:/Blog/public/archives/2021/01/index.html","c52f8be1052e7cc7674f092270cbd36d"],["D:/Blog/public/archives/2021/02/index.html","e428f478af63e04fc190ee57be6c7ec7"],["D:/Blog/public/archives/2021/03/index.html","a2d03adffc1d4a9f4854185472db699a"],["D:/Blog/public/archives/2021/04/index.html","930777e38586ebe4a3af6e8d5742223c"],["D:/Blog/public/archives/2021/index.html","311cae800a6e9ec2bb872a5a96e96ac1"],["D:/Blog/public/archives/2021/page/2/index.html","d43a9e73aa287f05d13f01228faff3f1"],["D:/Blog/public/archives/index.html","37609ba7d17a05c708b620ed08431bee"],["D:/Blog/public/archives/page/10/index.html","1e53a645b4574a719497f70b7e566577"],["D:/Blog/public/archives/page/11/index.html","2fbce817124a948f00cfaea600934c0d"],["D:/Blog/public/archives/page/12/index.html","2fbce817124a948f00cfaea600934c0d"],["D:/Blog/public/archives/page/13/index.html","2fbce817124a948f00cfaea600934c0d"],["D:/Blog/public/archives/page/14/index.html","e6d0f838e015d8203cb88a7f37170145"],["D:/Blog/public/archives/page/15/index.html","e6d0f838e015d8203cb88a7f37170145"],["D:/Blog/public/archives/page/16/index.html","e6d0f838e015d8203cb88a7f37170145"],["D:/Blog/public/archives/page/17/index.html","32c91d19b608bd63e6a2147aee5f0b82"],["D:/Blog/public/archives/page/18/index.html","32c91d19b608bd63e6a2147aee5f0b82"],["D:/Blog/public/archives/page/2/index.html","37609ba7d17a05c708b620ed08431bee"],["D:/Blog/public/archives/page/3/index.html","37609ba7d17a05c708b620ed08431bee"],["D:/Blog/public/archives/page/4/index.html","78eeeb4996b1f898f465c1f4a0d865a0"],["D:/Blog/public/archives/page/5/index.html","78eeeb4996b1f898f465c1f4a0d865a0"],["D:/Blog/public/archives/page/6/index.html","78eeeb4996b1f898f465c1f4a0d865a0"],["D:/Blog/public/archives/page/7/index.html","78eeeb4996b1f898f465c1f4a0d865a0"],["D:/Blog/public/archives/page/8/index.html","1e53a645b4574a719497f70b7e566577"],["D:/Blog/public/archives/page/9/index.html","1e53a645b4574a719497f70b7e566577"],["D:/Blog/public/array/index.html","ff942bf75bdbe9889bdf6bf20b0b60ae"],["D:/Blog/public/automated-test-katalon/index.html","d2f9a6a0eeb43668c5ba245e0f034caf"],["D:/Blog/public/automated-test-selenium/index.html","f7c9ba98720b23b359caeefd32b3400a"],["D:/Blog/public/binary-search-algorithm/index.html","1cbd2d3adbb51bac734d571d1c585b08"],["D:/Blog/public/binary-sort-tree/index.html","ab3bade88622b1ccdb0d8dc1734529a5"],["D:/Blog/public/bionioaio/index.html","b1b1e47b4fb8596ca2303918b0ec40b5"],["D:/Blog/public/bridge-mode/index.html","897bc1d908fa948d7d143a58187dadb0"],["D:/Blog/public/builder/index.html","3b86962a14723fd5256588c58eedfa7f"],["D:/Blog/public/c-pointer/index.html","2db67c180036cfe9a82863bdbc61a359"],["D:/Blog/public/categories/C/index.html","e46014c5168f6840212a696d0f3e0611"],["D:/Blog/public/categories/SpringMVC/index.html","06f59638ff8af6c61e03474dbd92514e"],["D:/Blog/public/categories/index.html","d67d3c548009b7d93486b406a6c50721"],["D:/Blog/public/categories/linux/index.html","7889014ac16a726e2cc6a77df0988ffb"],["D:/Blog/public/categories/分布式/index.html","c6c47c4ca99cb8961bc503bcc0c8ec19"],["D:/Blog/public/categories/分布式/page/2/index.html","9fc5cbc110bfa0de33916ac6b51fb819"],["D:/Blog/public/categories/前端/index.html","a2696bd3aebd18b9b04670d65437f448"],["D:/Blog/public/categories/设计模式/index.html","0de0317dfd494de4b2d1523bb0a3766c"],["D:/Blog/public/categories/设计模式/page/2/index.html","c2afa4c58251f6492ba53d7d43bd84bd"],["D:/Blog/public/categories/高数/index.html","a2254678f7eff2462839b6f5e55cce13"],["D:/Blog/public/chain-of-responsibility-model/index.html","9621b78e277c3a8d8b8186156b5a1ad0"],["D:/Blog/public/chinese-and-english-switching/index.html","3fad32aa3ac825f1460e3343135a644d"],["D:/Blog/public/combination-mode/index.html","0b6e0189d97757f50f8ff7228dc69829"],["D:/Blog/public/command-mode/index.html","aacae4a07ae6d9021d7ff854699d7c53"],["D:/Blog/public/common-commands-of-unix/index.html","ab21d02e0ab946835fae5fa0a0ee1332"],["D:/Blog/public/computer-network/index.html","39ac09d907cc9809f9499c4a0ecf686e"],["D:/Blog/public/concurrency-principle/index.html","fc80db7e10fc584a97b06ef525d5c421"],["D:/Blog/public/continuous/index.html","bbf42f748dae4217cf21f1a7ed5b98d4"],["D:/Blog/public/contract/index.html","a0e40bd0ddbc545fb403dc25f465154d"],["D:/Blog/public/css/first.css","28d43bb74d92c84b05f0a0ec5f921a55"],["D:/Blog/public/css/style.css","c116e715c7ebd8885411d7b3ee9364a0"],["D:/Blog/public/cycle-structure-programming/index.html","73a9bfe50b1aed290e55c0bcf045216e"],["D:/Blog/public/data-structures-and-algorithms/index.html","c5baea84788bb0a64306127392d72c8f"],["D:/Blog/public/deb/index.html","86cb2b0ce67bb79b1de7c905b190408d"],["D:/Blog/public/decorator-mode/index.html","d7a512c44ec5da228403fa691193bbb0"],["D:/Blog/public/definite-integral/index.html","eba265f32d691241cb9f4ddf9d4fe1e2"],["D:/Blog/public/dependence-reversal-principle/index.html","c560354ef73a32750bf7597a4c0f284d"],["D:/Blog/public/derivative/index.html","f772e6b1dd2a53a2ed29c2d27fa930ae"],["D:/Blog/public/design-patterns/index.html","171a901289be78f1e52bbb2f6e07e758"],["D:/Blog/public/differential-equation/index.html","a4a82378a2606588aea61fc2478d7d10"],["D:/Blog/public/differential/index.html","5bdce648d59c314afea09a126115dc7f"],["D:/Blog/public/dimits-law/index.html","b57939965c8192addf9c03c7d47bb881"],["D:/Blog/public/docker-virtualized-container/index.html","6c385339cb727711cc14ac4b371599c8"],["D:/Blog/public/double-integral/index.html","0db39982a0ee4e0215272f6abc8f459c"],["D:/Blog/public/dynamic-array/index.html","c35b09d1ac553e3ec019033a8968cf81"],["D:/Blog/public/dynamic-programming/index.html","c7decbd82268d03bfb1ff6b4d4b5a1ff"],["D:/Blog/public/encoding-algorithm/index.html","f6d01eb2a4cc6c9e917e040ff5007ad6"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","ca849edea37b2ec74d9802e714387504"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","295259a6903948c5cdd38667a4d3463a"],["D:/Blog/public/factory-design-pattern/index.html","828d88167baad03ea07c1cc57f57ba74"],["D:/Blog/public/file-input-and-output/index.html","e8ce59370beac2f6913ca248eea4b0cf"],["D:/Blog/public/flyweight-model/index.html","c2e5e87852763b42ad439eb0b3241312"],["D:/Blog/public/friends/index.html","5e0607490f634382d7fb9a11d1c78f51"],["D:/Blog/public/function-graphing/index.html","5b32154a8e5f0772f0f6ad724bb7af7b"],["D:/Blog/public/gateway-service-current-limit/index.html","7704dd8c9a44279d0d2ca947a860d864"],["D:/Blog/public/gc/index.html","23ab1f77a914ed3e6e2b5b4216f9cc11"],["D:/Blog/public/generalized-integral/index.html","8f175c7a3be9fd4456420549af74c96b"],["D:/Blog/public/google8102e2f35ce9e391.html","a8b6bdd92fd5d55af0306a8f745b9c9e"],["D:/Blog/public/gulp-compresses-static-resources/index.html","d4b478baafc86dbf9096f6129c10401b"],["D:/Blog/public/hash-algorithm/index.html","005b2339f4743aa7b1c1e760efcaa96e"],["D:/Blog/public/heap-sort/index.html","f9df4a07ede29736ad39dffa8609588f"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","86722a8c538815a4411059b775df0118"],["D:/Blog/public/http/index.html","ef8ff57c63874f9ce76ebbe5ef6ca45e"],["D:/Blog/public/indefinite-integral/index.html","7694d6045bc32c39ec4fdffd5936c498"],["D:/Blog/public/index.html","f9f6aefade3ad554bdd763714023e927"],["D:/Blog/public/infinitesimal-and-infinite/index.html","e2a0634f1fd659aca36616cddfcb3a7c"],["D:/Blog/public/interface-isolation-principle/index.html","57042a5f23f0f2640676f0c000c1c613"],["D:/Blog/public/interface-test/index.html","69686e4095b4efd1b8555a34db615711"],["D:/Blog/public/intermediary-model/index.html","f96e49716c77e9c5207d45ed99e014c4"],["D:/Blog/public/interpolation-search-algorithm/index.html","bb463e73afb8894d0a0182d16c488505"],["D:/Blog/public/interpreter-mode/index.html","752eb35516818eed189bcacf953f0c94"],["D:/Blog/public/introduction-to-computer-network/index.html","ba554a3418e65f9be0e45c6cfafc8417"],["D:/Blog/public/introduction-to-operating-system/index.html","e317e4b7f1d6938ce9db616814392319"],["D:/Blog/public/inversion-of-control/index.html","690b60b36cdfa3d99ef80128842a4e07"],["D:/Blog/public/io-Interview/index.html","f22e955b4cd9706cff8c5c04948d2065"],["D:/Blog/public/iterator-mode/index.html","9d72d917a07983479f20db03b387f7f9"],["D:/Blog/public/j2ee/index.html","d4a6b35ef721637cc661990e86dc8792"],["D:/Blog/public/j2se/index.html","a199783f4bd8b16a4d11958e0b527c86"],["D:/Blog/public/jdbc/index.html","b382770cd31a8d2e68d0964b92009a4a"],["D:/Blog/public/jdk/index.html","2a236b6ec0ccbe142ef442b2dd702747"],["D:/Blog/public/jmm-memory-model/index.html","dcf09b31e1af70eb8d4e40670e522e5b"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","0228b3aee76dc4aae6ecec26205eb957"],["D:/Blog/public/jvm/index.html","4c8bb840fc86a611c5ca4a67d6220e8e"],["D:/Blog/public/law-of-robida/index.html","b9d721aa5319f42e42f8e687511f9fba"],["D:/Blog/public/limit/index.html","169e54d9aa51957d7ab4958364c5feda"],["D:/Blog/public/linear-search-algorithm/index.html","e6b307ed9d5619727f6d8292b628f547"],["D:/Blog/public/link/index.html","473b98edb2a07c56620db6be52425c58"],["D:/Blog/public/linked-list/index.html","f8b48667139c5b14446164524a967a4e"],["D:/Blog/public/linux/index.html","874b881ef06358a5efd28cb4ea0dd2c4"],["D:/Blog/public/liskov-substitution-principle/index.html","585fc122564137cadb7e539abe57c170"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","aa28878b5863fc6eb88495fa98ebf81d"],["D:/Blog/public/maintenance-1/index.html","30e1eb44f3ea7f8f3403ceeb811a8e18"],["D:/Blog/public/maintenance-2/index.html","1d821dce727ca6915e0caed24f51f950"],["D:/Blog/public/maintenance-3/index.html","ff3a0c7825e90aff74d5d6226cfca3dd"],["D:/Blog/public/memo-mode/index.html","4c555c9e208bacb331f7bc0bc9e9ff78"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","023943d79566aacbd86ecb1726803c3f"],["D:/Blog/public/multi-function/index.html","ba7bcfbf40e0762f7d2bc8c2922d73ea"],["D:/Blog/public/multithreading/index.html","801867248bd679a6e80cfb4394b6a968"],["D:/Blog/public/mvc/index.html","66219100bf1a5956d673f2abfe4fbce6"],["D:/Blog/public/mybatis/index.html","aca8cfd17071059467ea38bd7c1a4e58"],["D:/Blog/public/mysql/index.html","508a118ac72e2f1ab4cb5257a4981800"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","98b41c058ce6ad4aa7efaa58b764bf11"],["D:/Blog/public/objectoriented/index.html","2c662b839e62ed4619b8bc18e6a7bf51"],["D:/Blog/public/observer-mode/index.html","12a663dd11ed36715fed5a227d9af4d1"],["D:/Blog/public/off-heap/index.html","8434d288d78fcf36f44eca0df171d0b0"],["D:/Blog/public/operating-system/index.html","8594a9b9125be9dcdc20a99b2e5fd6f2"],["D:/Blog/public/page/10/index.html","59fabef7eaf461ce44104044c6c11635"],["D:/Blog/public/page/11/index.html","4d2b3f49949ddb868294b70f941b3822"],["D:/Blog/public/page/12/index.html","9fabc042c995afd256b8de0cd8016b51"],["D:/Blog/public/page/13/index.html","477983c754d48dd81eba204e5369c24b"],["D:/Blog/public/page/14/index.html","ba529c563c9a9a2523df386415fdb800"],["D:/Blog/public/page/15/index.html","2373c417b98a00e5afa2fcd6660a8fde"],["D:/Blog/public/page/16/index.html","4cf84f433682356679691d285e6407c6"],["D:/Blog/public/page/17/index.html","1e5eb02e8a873ab7826e256f8c41959b"],["D:/Blog/public/page/18/index.html","becb86d3efb3aee39b35692c198e78b6"],["D:/Blog/public/page/2/index.html","39d437bbf3c1245578f5df9ffeb7075e"],["D:/Blog/public/page/3/index.html","53f9beda6e43099bb4e51ba660b002d5"],["D:/Blog/public/page/4/index.html","ff6c199eb04eab382ee22e26d672d6d8"],["D:/Blog/public/page/5/index.html","fc129a8ae0e31637d132e63ab68fa8e2"],["D:/Blog/public/page/6/index.html","e9c354577bb8058504c52487509b2354"],["D:/Blog/public/page/7/index.html","76f6830b26870e0fe119000a6526fd96"],["D:/Blog/public/page/8/index.html","5d0cff80e1a210e5b5c902b98108497c"],["D:/Blog/public/page/9/index.html","e16d18000a4f4529ee7554421a647299"],["D:/Blog/public/palindrome/index.html","74e6404e63786f3b98be66401740f41e"],["D:/Blog/public/partial-derivative/index.html","2a9759430565cb55bf2e95e6bd04f9e4"],["D:/Blog/public/pass-by-value/index.html","908211bb0f10651404758dd441a3e88d"],["D:/Blog/public/pictrue-bed/index.html","beedb3ebfd3d525ae4497fe4ca9a0ccc"],["D:/Blog/public/principle-of-opening-and-closing/index.html","0a73fc636becbf135280e783d929773d"],["D:/Blog/public/principles-of-computer-organization/index.html","87a55e13ab81ec8b9e8eb86019f8f64d"],["D:/Blog/public/program-test/index.html","0f294025178623e8418867cecb6a759f"],["D:/Blog/public/prototype/index.html","0646c95d0310116209a8657c1545e5c6"],["D:/Blog/public/queue/index.html","20b7b2afdbcd4192f5a1a78a3baf0b8f"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","1480e8ea7f9b14be0a9e67fe464741aa"],["D:/Blog/public/redis/index.html","964f0b157d2d7bcd6d4fd0c45b3ebc3d"],["D:/Blog/public/reflection/index.html","cba9cf2038f88b8a9e30c04f8a2aa38a"],["D:/Blog/public/resume/index.html","f3278097f39c968bb12eb5194e0f5ce8"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","4457652176c00a47ee80e5c372f6b235"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","b1b40cb2a57a76d155ca63dce9833b3f"],["D:/Blog/public/select-structure-programming/index.html","1987250b03e18763c1f2b864b9fb30f5"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","dcb322f7870b80227ecb2cf5a4cee679"],["D:/Blog/public/sequential-programming/index.html","11aa7d0d79b470be49df7c998fa4d44a"],["D:/Blog/public/series/index.html","2d76c2c17f4936f73a5092e13b18f2be"],["D:/Blog/public/single-point-login/index.html","e0b0c16f12f544c5bd717a33c750b1e1"],["D:/Blog/public/single-responsibility-principle/index.html","fa16944247e0e999c8de3e3021a6f85c"],["D:/Blog/public/singleton-mode/index.html","9fad3e3a3efeeda690db370c89735c77"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","2283eb012085b937013ac168cd6b4647"],["D:/Blog/public/sparsearray/index.html","17e526bb3c93bac47d51f0251da54a31"],["D:/Blog/public/spring-architecture/index.html","b50d50c52acfd4841f3f781599d49758"],["D:/Blog/public/spring-relate/index.html","e434e4768e9183b535c17e011acb3518"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","4f2831f72883d0735ac451c88184f9f2"],["D:/Blog/public/spring/index.html","32781a4e61dbd2805190664fdc14a294"],["D:/Blog/public/springcloud-alibaba/index.html","759034bfcdf3208ed5426f41aa1e001a"],["D:/Blog/public/springcloud-bus-message/index.html","aec42f3c2c4323c7b22ae6f88aa76b75"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","746cd90f565e0c384205650dd4902732"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","b282baf33aeec03434dae28d8ac4daac"],["D:/Blog/public/springcloud-stream-message-driver/index.html","9b25505e1e88cb59e8a4d6ca5b838ef6"],["D:/Blog/public/springcloud/index.html","04882e7430318167d16f2a90b45b4966"],["D:/Blog/public/springmvc-environment-construction/index.html","26d9f94ccb71a3e8f481ba0648f0a048"],["D:/Blog/public/springmvc-work-stream/index.html","e6a3c6b5f34aee7a29d3a5417713e233"],["D:/Blog/public/sql-injection-attacks/index.html","75864c16c4fa3011c3d091b3706b49de"],["D:/Blog/public/stack/index.html","23d4e5d0230ddf226bcfbfe75d0c5838"],["D:/Blog/public/state-mode/index.html","cff04c7958a801b667c705eecc52131c"],["D:/Blog/public/strategy-mode/index.html","313603c19b33ad68791fa8c0f8eece01"],["D:/Blog/public/synthetic-reuse-principle/index.html","f3bb29dbc99862b18f34137b8c3432e2"],["D:/Blog/public/tags/C/index.html","9c277f8b8142d73c3362a2021a12b60a"],["D:/Blog/public/tags/C/page/2/index.html","3ea0ff9b8b6e5efeb575a1e25cdca3de"],["D:/Blog/public/tags/Concurrency/index.html","0abc2a6d7196070f3672b611e7bd0247"],["D:/Blog/public/tags/DesignPatterns/index.html","513eb639f6df3e7373e2c77b4195088c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","494d3dc6ff97d917d7eee433a9e8159f"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","104c4d8935a5a75c21c82fe1b547f4fd"],["D:/Blog/public/tags/DistributedMicroservices/index.html","b8b378bb4938612a7a72d5acef4136bf"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","117213941e8b255f1e0ca3b31b7b7a91"],["D:/Blog/public/tags/Interview/index.html","759f2f613df7aff85ca6f489c8fb1f60"],["D:/Blog/public/tags/Interview/page/2/index.html","77fda5da368db9bc17cf8f9facc85ee5"],["D:/Blog/public/tags/JVM/index.html","cf0638a3edf304006468ec8a426030b9"],["D:/Blog/public/tags/Operating-Systems/index.html","5c7dbca1e2e6ea6bcbb2c6def4ab7321"],["D:/Blog/public/tags/about/index.html","9ce974cc4ac5f253562b67be37fc2ab8"],["D:/Blog/public/tags/ad/index.html","b51b38b4b62f9ce34f3e0a9338bbfb66"],["D:/Blog/public/tags/algorithm/index.html","2a6c47b91aa719bd62a40b1baa721eea"],["D:/Blog/public/tags/algorithm/page/2/index.html","8f0eb4ff9757fa9a390456d9d344c01f"],["D:/Blog/public/tags/computer/index.html","76e59251b4d548142aeac5f7d31236fb"],["D:/Blog/public/tags/docker/index.html","49456090249cfe8aa44d4b9ca3d8d7b0"],["D:/Blog/public/tags/frame/index.html","92b3ad9c2f2006d71a08f7b3e87cc471"],["D:/Blog/public/tags/front/index.html","eaca3e431d620fe2f005ef2ce94c9a85"],["D:/Blog/public/tags/index.html","2a04d79b8b1a91861a3b609997689eaa"],["D:/Blog/public/tags/index1.html","74e6eb97c2e9096f0e45d356ed993d25"],["D:/Blog/public/tags/index3.html","9ccd40e338d6c107f860afe9e2f50991"],["D:/Blog/public/tags/io/index.html","411e79b5bc12c11dbfb3ceb2090fadd4"],["D:/Blog/public/tags/linux/index.html","24678153dfad856de27752ae3aa6c47c"],["D:/Blog/public/tags/maintain/index.html","353c22515e8fba22d03adb391030073c"],["D:/Blog/public/tags/math/index.html","5e1d63c6c5d297f5cd92b33cf3073024"],["D:/Blog/public/tags/math/page/2/index.html","d4aeda9a2ea78ca927124a966a8a0ad6"],["D:/Blog/public/tags/network/index.html","7d05de0231d35650d51f9317f9b856f8"],["D:/Blog/public/tags/project/index.html","8b1317877aa1743b09e11e3fb3319a8a"],["D:/Blog/public/tags/resume/index.html","a72f8eb619883f8a5ab496e3ea95eeb5"],["D:/Blog/public/tags/safe/index.html","350e22aa43a0a112d752adf8890a4acb"],["D:/Blog/public/tags/safety/index.html","d70ba3d662aa6c448f7376cb9bc6ef54"],["D:/Blog/public/tags/security/index.html","56b685e4cf930b9683006a44f99fe117"],["D:/Blog/public/tags/sql/index.html","6d539ba4e232167d13c520b587268555"],["D:/Blog/public/tags/test/index.html","5fceb3c5c81bfd0691dd6337946498a0"],["D:/Blog/public/tcpip/index.html","9ccfc77ff2df8574fd63acefa759f1dd"],["D:/Blog/public/template-method/index.html","69565d6dbfda49b516ebe081a004759f"],["D:/Blog/public/test-case/index.html","bc24c26a2587e171922799fded2028a4"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","b1d2b7d0f5dda2cf6b63400014280b44"],["D:/Blog/public/thread/index.html","550a7de8699853ad996809e945b8e864"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","90d7ecca06159b781014abae77d77ded"],["D:/Blog/public/ubuntu-set-ip/index.html","2049cba7665b3953028d0bd0a7283733"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","7ac40b4d1390df3891af4eb0d1fec4f8"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","c2c4bf793baa67511b39ca3e6e649b15"],["D:/Blog/public/users-create-data-types-themselves/index.html","52b41f77e180d62c5524d07b59f7709f"],["D:/Blog/public/visitor-mode/index.html","c544703a343ec277257f719b7a3d1eef"],["D:/Blog/public/xml/index.html","81c2c6e4a56edb39453399ef8767f9d9"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","7fa086763bb60e425a2e6931fa127fdd"]];
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







