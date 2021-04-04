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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","87407662b48b3479825c7cc023083218"],["D:/Blog/public/AIO-blocking-model/index.html","78957176ef1251b42291628a714fd72b"],["D:/Blog/public/BIO-blocking-model/index.html","6661a5fa31b5e1ec0f7cb05b8f857724"],["D:/Blog/public/C-algorithm/index.html","c4760981cb47eda4d914a791938bc8af"],["D:/Blog/public/C-programming/index.html","e24ecc403ce004cf2c0d2f5bbb6a9d6d"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","3026c518eeaf2d9e4fecda25e9a42470"],["D:/Blog/public/Good-use-of-pointers/index.html","7a502f1a62051bf0d9fbbcb824cfe2a4"],["D:/Blog/public/IO-model/index.html","9252972210701bb08b76bf66bf595f24"],["D:/Blog/public/IO/index.html","c00c4fa61134bd9102110c1937783146"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","8b17d77eb8ea6e96db81797dd146d4ea"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","66660bc5b35ee42d60bd221c950a773b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","ad3a166582424c0c3d9767a11734d276"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","850bd5974363c71e5a5f816d545e09c7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","8bf7d42ff165d77b6d07d1525c002b65"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","442f3631f9848a2fce5108952a7cfa4d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","bde6e18929bb32d262fb86dad65f0021"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","1b4e897f01531192196a8179e22790c1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","93815c39c1aca9a4451b14e1f8baddc2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","71886bbdcad043765a203d83e384893f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","c9f6c4e7deabb623cfd281bf4925b991"],["D:/Blog/public/Java-network-programming/index.html","a6f2126f0ca2ef38b25756240108cbaa"],["D:/Blog/public/NIO-blocking-model/index.html","7bc8f3ab19f95875762d4f5825ad748f"],["D:/Blog/public/Native-method/index.html","59d85ab4bf6cb265c4e09dbe3f0567aa"],["D:/Blog/public/Sandbox-security-mechanism/index.html","ff40bac5ed743cd45648230a993e68fd"],["D:/Blog/public/SpringBoot-startup-process/index.html","5624e3207d65c850c82e91389ad8ae26"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","188bdb1583911eeea4fc0ffb92313b79"],["D:/Blog/public/Unitest-framework/index.html","364d00d2aacba52c7521c7fe384a32fb"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","872da61f5e9532842d2e3de5693f294f"],["D:/Blog/public/agency-model/index.html","07ae6fa657594dc5a864e99377f0c14f"],["D:/Blog/public/app-test/index.html","fcc6ed684cf296fc45db1d8899a32a54"],["D:/Blog/public/appearance-mode/index.html","b5184764b28e5b1156bc33cd36591475"],["D:/Blog/public/archives/2019/01/index.html","bd99f26ff25d055c2328f2af50598ed3"],["D:/Blog/public/archives/2019/07/index.html","c48e44c659120a83fefc978a66b6e08f"],["D:/Blog/public/archives/2019/12/index.html","f963ae28745647f4b7e400e1054a98a2"],["D:/Blog/public/archives/2019/index.html","83f0a9d947cbffc180956360f5b5f72f"],["D:/Blog/public/archives/2020/04/index.html","d72def560bc34a7d842abdefe092c8e9"],["D:/Blog/public/archives/2020/05/index.html","d6fc88c1e22be808c98356745197896b"],["D:/Blog/public/archives/2020/05/page/2/index.html","89eec849b2bfdd7f4241a00ae4913f03"],["D:/Blog/public/archives/2020/06/index.html","5cdf37327203bcb3c6001506fd1157da"],["D:/Blog/public/archives/2020/06/page/2/index.html","2d69a36cd3b303a37a2fd8f3b2b938ec"],["D:/Blog/public/archives/2020/06/page/3/index.html","8d08b82e2c8fdf9dbf5f9ffeae100740"],["D:/Blog/public/archives/2020/06/page/4/index.html","7ef238369e76b1e035401ecd96825976"],["D:/Blog/public/archives/2020/07/index.html","efcc025c5aff78c25b6d30cb0940d455"],["D:/Blog/public/archives/2020/07/page/2/index.html","2be98e14beb67f5b4160c9b4f929b198"],["D:/Blog/public/archives/2020/07/page/3/index.html","64ba77fcd4e3d55d7c0a248e3eda5330"],["D:/Blog/public/archives/2020/08/index.html","4b384adeca55943da2e6ee78475d662a"],["D:/Blog/public/archives/2020/08/page/2/index.html","c6b4895fda15b09c78664bb8f07dd0ba"],["D:/Blog/public/archives/2020/08/page/3/index.html","308334e804476b26d0046912f67251b7"],["D:/Blog/public/archives/2020/09/index.html","5495de9e3b061f858010dd080edf180b"],["D:/Blog/public/archives/2020/09/page/2/index.html","942ca862353ce5d8eda3002ed298f387"],["D:/Blog/public/archives/2020/10/index.html","2c13a130ebe6f3b293cac8b60cfc3f73"],["D:/Blog/public/archives/2020/10/page/2/index.html","8b69e08e57a92644963b7b8177b11e48"],["D:/Blog/public/archives/2020/11/index.html","6e7c1c1a6c1634fc80fafa6a8da16618"],["D:/Blog/public/archives/2020/11/page/2/index.html","afb2058383bc45a5d838025f92b626de"],["D:/Blog/public/archives/2020/12/index.html","1ed03dcdcb86f9267515453a4faf3812"],["D:/Blog/public/archives/2020/12/page/2/index.html","9751e652c2d71d7f92d889f590edf7b8"],["D:/Blog/public/archives/2020/index.html","fc578735fbc4ccd51e1d6cb2a80ebd01"],["D:/Blog/public/archives/2020/page/10/index.html","3ad3279173b6cc2609f23c2175069a39"],["D:/Blog/public/archives/2020/page/11/index.html","031bfa5686f65c22a137a412ce62f566"],["D:/Blog/public/archives/2020/page/12/index.html","995c60c34757b66df5136e02f1687a57"],["D:/Blog/public/archives/2020/page/13/index.html","f6c8e06ff5aa4b41dce32e8b09e24f35"],["D:/Blog/public/archives/2020/page/14/index.html","971b364a67f5a6e4d3fcdacd13c97dc1"],["D:/Blog/public/archives/2020/page/15/index.html","ed94cbe8a81a907c91762c3976079f86"],["D:/Blog/public/archives/2020/page/16/index.html","f52aaae127531f4d4673607b44f562cf"],["D:/Blog/public/archives/2020/page/17/index.html","deda4a1c17970008182524576ac9a55c"],["D:/Blog/public/archives/2020/page/2/index.html","0a69375f8d4c9593432ba0657610056a"],["D:/Blog/public/archives/2020/page/3/index.html","ff4cb183711bf0dbe1d4df6495f4bb95"],["D:/Blog/public/archives/2020/page/4/index.html","9c82eb1ade5eac03fa1ebcdc0fbd9f0f"],["D:/Blog/public/archives/2020/page/5/index.html","d7f68bdc0362df29b1be1fe0b4024526"],["D:/Blog/public/archives/2020/page/6/index.html","0330088abb6ab891011044abe32bedb4"],["D:/Blog/public/archives/2020/page/7/index.html","f7ca028ad34f29f945881388d3cba816"],["D:/Blog/public/archives/2020/page/8/index.html","f887140c077f5d88c4e35e1801a89f06"],["D:/Blog/public/archives/2020/page/9/index.html","f43371151bd4ea8beb6756f4c6d83a52"],["D:/Blog/public/archives/2021/01/index.html","277a928b19cfae971e8d4261ba79fc15"],["D:/Blog/public/archives/2021/02/index.html","006b92b576a849a1f3a2da01d20fa428"],["D:/Blog/public/archives/2021/03/index.html","3ad7310e37ff4ae51419dab7601024f6"],["D:/Blog/public/archives/2021/04/index.html","14c6aa27d611d74af3dc878a85d728ce"],["D:/Blog/public/archives/2021/index.html","d0916d97377bcee9980059911e8ca6b1"],["D:/Blog/public/archives/2021/page/2/index.html","57cfdeb663e2fdabcb379b00f78ae8b7"],["D:/Blog/public/archives/index.html","10e17f9a632ad56a3117d782c744603e"],["D:/Blog/public/archives/page/10/index.html","381b005eaf308b9b987661218e75990a"],["D:/Blog/public/archives/page/11/index.html","a8fd56464d6ebfd48ad4f7617a6df56d"],["D:/Blog/public/archives/page/12/index.html","0664e2f77c55b22473c74378ec1fadc9"],["D:/Blog/public/archives/page/13/index.html","54a42ea24253143ac74c85b59ec90f05"],["D:/Blog/public/archives/page/14/index.html","5bb39665d0580108e1022de9ccb24b82"],["D:/Blog/public/archives/page/15/index.html","120b2c3feadea629079c8166eabe81b0"],["D:/Blog/public/archives/page/16/index.html","5fce44b8b25817d640377a6ef461e21f"],["D:/Blog/public/archives/page/17/index.html","6931a134d3162d40e931ae3557240200"],["D:/Blog/public/archives/page/18/index.html","a370c7d9f2893cd98c513a1cfee8d9cd"],["D:/Blog/public/archives/page/2/index.html","3be818141aaed90a5f574b1cd91931c7"],["D:/Blog/public/archives/page/3/index.html","eb92aa272fae667082caee04fe9c62bc"],["D:/Blog/public/archives/page/4/index.html","9d8427e17e0b975c11959754423a82cb"],["D:/Blog/public/archives/page/5/index.html","a6a8574a8f44ded0719f46b078dfbc77"],["D:/Blog/public/archives/page/6/index.html","e1791584c05d409d6846bb768c395055"],["D:/Blog/public/archives/page/7/index.html","e3374d407d72b98c2925b651a6a639e4"],["D:/Blog/public/archives/page/8/index.html","a03a7b1646cd6997af76b45cbfd91727"],["D:/Blog/public/archives/page/9/index.html","c52bc90fc75fabe2c94a09bf8bc468ce"],["D:/Blog/public/array/index.html","fd2dfe3f0f703cdcbe4bc2a4e13c9665"],["D:/Blog/public/automated-test-katalon/index.html","437dc642b5a65d5b4a74fd4472e8b3de"],["D:/Blog/public/automated-test-selenium/index.html","86326eae9c1c659f8b05ee659480a4b2"],["D:/Blog/public/binary-search-algorithm/index.html","529df36ea3f6640daef0320aea23d69a"],["D:/Blog/public/binary-sort-tree/index.html","22b606fa497a504f7bcaa7ecc38caf0d"],["D:/Blog/public/bionioaio/index.html","b67fe96bc361e309cfbc96f9bcdb5e72"],["D:/Blog/public/bridge-mode/index.html","43d786ed515dabd0d406c515c0251da3"],["D:/Blog/public/builder/index.html","45c27cbd49b79a0f22d90a778f6afb8f"],["D:/Blog/public/c-pointer/index.html","ed1274a4ff2b7354249d9f9c76fdf170"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","1024ee3e253d387cdce68aa86e6b5ed8"],["D:/Blog/public/chinese-and-english-switching/index.html","553d36914f28bb53fc9126fba1c8fa1e"],["D:/Blog/public/combination-mode/index.html","3dad9b18948a82568ae546ec76fe0486"],["D:/Blog/public/command-mode/index.html","871442b8a6114e4ab32c9f2de3ccb3c2"],["D:/Blog/public/common-commands-of-unix/index.html","a9827adf23c8c3bde37adc2c52c21243"],["D:/Blog/public/computer-network/index.html","8ddbcadb6159984c5fee9ecc69a860f9"],["D:/Blog/public/concurrency-principle/index.html","8d1c25bd69985b55a14a8e3100db34d5"],["D:/Blog/public/continuous/index.html","3de4cc606169fff00a0ba590b138eb79"],["D:/Blog/public/contract/index.html","396f2994a6003502ae96f88309fb22b5"],["D:/Blog/public/css/octo.css","b381b045c0ac9f2efbb41cbdc151aedd"],["D:/Blog/public/cycle-structure-programming/index.html","40333468db065e586436ca395e7a0df7"],["D:/Blog/public/data-structures-and-algorithms/index.html","83bc08ae97e9fb3a45b66675d32c85a4"],["D:/Blog/public/deb/index.html","c6e594d546a2a5a239d701908a422d5a"],["D:/Blog/public/decorator-mode/index.html","ba61b3890e106721e42d4e55dd85e18c"],["D:/Blog/public/definite-integral/index.html","eb1e3ad9b0e6fa73c2f706b33d9b5ff7"],["D:/Blog/public/dependence-reversal-principle/index.html","9c0d0fab4801a2c1284f344d5a5e14d7"],["D:/Blog/public/derivative/index.html","be4d674989b2541f625b94f12b208d75"],["D:/Blog/public/design-patterns/index.html","d02e5e8e4fd7fe5c795e7d9514932162"],["D:/Blog/public/differential-equation/index.html","bc51331d87f48a5a5bb32c893359b4e0"],["D:/Blog/public/differential/index.html","c3c6eb7fe6c0b9014d485cae77ceb0f6"],["D:/Blog/public/dimits-law/index.html","a2dd4466958f51751258a2efde62e218"],["D:/Blog/public/docker-virtualized-container/index.html","fc7b9de1ed91032043a87662949d9084"],["D:/Blog/public/double-integral/index.html","94ab185872195c2951705e1a3634115e"],["D:/Blog/public/dynamic-array/index.html","7e187a5564936ef6918d93d0a956f1f6"],["D:/Blog/public/dynamic-programming/index.html","9208d9636359659b041f13e6bbffc7c5"],["D:/Blog/public/encoding-algorithm/index.html","8ca4896420b87b58898be413c87dceb8"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","426207d4d8b3f04e3580bbf595e62257"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","fd99913fd7ef520153e294fbea3fedcb"],["D:/Blog/public/factory-design-pattern/index.html","c2bc7775f4285df64c56ebae83bf4d18"],["D:/Blog/public/file-input-and-output/index.html","95d5b6253f8f44b49a231cf69e5d2d86"],["D:/Blog/public/flyweight-model/index.html","87df425a9b6bec14e43dfbde74c05a52"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","3b388b6acd8863e37708dcbc5f2b75f0"],["D:/Blog/public/gateway-service-current-limit/index.html","b83812688a279f5acc32bc687d9fc631"],["D:/Blog/public/gc/index.html","6aad8661e4e169ecd862b88b079ad9de"],["D:/Blog/public/generalized-integral/index.html","0e4bd125bc147172ed489a27b6c440cf"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","2bddb3dc2fc2f4e3af3b02345cb566a6"],["D:/Blog/public/hash-algorithm/index.html","15a0f57abd7a78d2a14301bb17e8b42b"],["D:/Blog/public/heap-sort/index.html","35d787cd80e71437643b57192fdb5283"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","d7ad5d8accfcaa781cf7c4b9485bd948"],["D:/Blog/public/http/index.html","7cec5973097ad391952c198d529f6a66"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","a7cfce5840c1953f5d73aeead5a835c1"],["D:/Blog/public/index.html","3813aaab58ac85692c9fd9ef59452190"],["D:/Blog/public/infinitesimal-and-infinite/index.html","940b311d1ba0a80dcfbdbd5e32a06636"],["D:/Blog/public/interface-isolation-principle/index.html","811330467050d5d94ab689dca5a24a38"],["D:/Blog/public/interface-test/index.html","f7fd001b0e60b86e1761c9b194aac46d"],["D:/Blog/public/intermediary-model/index.html","1a7b41dfc6935847d97129d4c4566323"],["D:/Blog/public/interpolation-search-algorithm/index.html","0e1e31e3a1b075f7147b48de64d0dd24"],["D:/Blog/public/interpreter-mode/index.html","5acbc9e8b68ca80dea72e9637c02f394"],["D:/Blog/public/introduction-to-computer-network/index.html","ca6fc68eb11e0873aec6179666eb9b66"],["D:/Blog/public/introduction-to-operating-system/index.html","d6fd009b425824ce1c267083bb4887cd"],["D:/Blog/public/inversion-of-control/index.html","675a9cc3f67fbead9bb25411d7faa5a0"],["D:/Blog/public/io-Interview/index.html","b64ecfe7222bb12fe06b0ff23dd2dc92"],["D:/Blog/public/iterator-mode/index.html","4d28e3d875d19edc8e2a64ba3780833d"],["D:/Blog/public/j2ee/index.html","b2e3b87809c3d2d8f1e3a5cefb246160"],["D:/Blog/public/j2se/index.html","8859a3334edb774ddc9e6a37177adec1"],["D:/Blog/public/jdbc/index.html","5b97d7e13cb39f334ebb43826f9dba44"],["D:/Blog/public/jdk/index.html","2b01c0ae8127107d77a1a8e5ed5128cf"],["D:/Blog/public/jmm-memory-model/index.html","3e1221d9ae924f8da048c747e403a1f8"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","d8f7b01929db51609229a259ebc3b0be"],["D:/Blog/public/jvm/index.html","e8a2a973bcfcced4099b4fc3fcad40c9"],["D:/Blog/public/law-of-robida/index.html","311ca9db57c228d4839c3996f904d88c"],["D:/Blog/public/limit/index.html","2daa6cdb09e5044a6550bae05b099ece"],["D:/Blog/public/linear-search-algorithm/index.html","6e39696f2dae7ef8ecd2ef4f21518381"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","22078fba84b4f6eccad5437517eda114"],["D:/Blog/public/linux/index.html","30b78c418030ea157e242d45323e1417"],["D:/Blog/public/liskov-substitution-principle/index.html","649242d8a72e1ae9baf459966cc0bba1"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","1e39544409c193e8183b153b67baef46"],["D:/Blog/public/maintenance-1/index.html","30eb330f91e4850268bb06ab65312b73"],["D:/Blog/public/maintenance-2/index.html","e6806c349ccf4e8e54223e27cb8dc589"],["D:/Blog/public/maintenance-3/index.html","28cb79cd49d1926bbae7e97950ad0cc2"],["D:/Blog/public/memo-mode/index.html","1e163ede544be025333a8a36feeae93b"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","6f33652e690aa7b799fae0fe6aab4424"],["D:/Blog/public/multi-function/index.html","b47789f99bd77447b0db2f9b3ba344c9"],["D:/Blog/public/multithreading/index.html","bb52770dff0fa318db63d3ac76ec1164"],["D:/Blog/public/mvc/index.html","ac1e5777229c19cd814db561c09fdde7"],["D:/Blog/public/mybatis/index.html","0eee533c3716d64a99b7e05e1d1dd78a"],["D:/Blog/public/mysql/index.html","3a865fd85571f3eac786eb9e34dc3672"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","a3b4d9f9c3aecbe2bb77e811926806ea"],["D:/Blog/public/null/index.html","b9d1fe4497d902493bf3a7476934c858"],["D:/Blog/public/objectoriented/index.html","c09e13364551c1c9284dde9888232649"],["D:/Blog/public/observer-mode/index.html","2add0b8ec4c8c41a32c687ccdb689ad7"],["D:/Blog/public/off-heap/index.html","4aef79bba0307712ae5fe06930be14bb"],["D:/Blog/public/operating-system/index.html","da2790fe988c72e2c1d7be2f6c823bf1"],["D:/Blog/public/page/10/index.html","27ebe84b6f3a039cd77959350fe8b024"],["D:/Blog/public/page/11/index.html","ad98bc1a2b5d044dd127bdeef712c241"],["D:/Blog/public/page/12/index.html","0f33761e6adf17ac56f67f1026b0422e"],["D:/Blog/public/page/13/index.html","d035cf18adb6aa061fb988f0df3b9bce"],["D:/Blog/public/page/14/index.html","206f48f2484e727d9e915b5aea285ef9"],["D:/Blog/public/page/15/index.html","86f1c6f120a242babeb790efcba9e7e7"],["D:/Blog/public/page/16/index.html","4b3731fba638c9bc9d6cf4fb04893c37"],["D:/Blog/public/page/17/index.html","363af5b1acfc627e2ecaaa821d857126"],["D:/Blog/public/page/18/index.html","8629759074d3df7c3e0ce94c6e24e16e"],["D:/Blog/public/page/2/index.html","4eeac2b928618f7a74351be0a06bd84e"],["D:/Blog/public/page/3/index.html","002f454ee992936d88fa47157c354934"],["D:/Blog/public/page/4/index.html","938da158eb1161db84392188c31b6343"],["D:/Blog/public/page/5/index.html","eaccc46920d12b6cbb588e542f4877aa"],["D:/Blog/public/page/6/index.html","bb8e6a49749986e8b77fb8e4e5d552c0"],["D:/Blog/public/page/7/index.html","6a80ed932af5df154f522ce2256ef414"],["D:/Blog/public/page/8/index.html","a28772e9469f1914e56899842431bd45"],["D:/Blog/public/page/9/index.html","915ceb688a42c146da9d254687a90383"],["D:/Blog/public/palindrome/index.html","cb11686b96032b5a06a6dc5a81d59663"],["D:/Blog/public/partial-derivative/index.html","6df734f9bc852b6646abfeab89b4d9d5"],["D:/Blog/public/pass-by-value/index.html","7eb82417aa09d6f24228df7a105d8bf1"],["D:/Blog/public/pictrue-bed/index.html","13cec22c80dd5e27a9327fa00169b2a6"],["D:/Blog/public/principle-of-opening-and-closing/index.html","1a6331651381c01135b139772e30ab61"],["D:/Blog/public/principles-of-computer-organization/index.html","536025b6e05355ba2eb3c4e9002491f5"],["D:/Blog/public/program-test/index.html","ef3b5afad06685cb8482043f80842caf"],["D:/Blog/public/prototype/index.html","f50d56a65da9e27bc3fcc72bfadf6c20"],["D:/Blog/public/queue/index.html","9c03bc18ab946a9c58aec660fc223059"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","d5d897484984227663548a7ff805e377"],["D:/Blog/public/redis/index.html","03f7b6528d269e90bd978c6787969a8f"],["D:/Blog/public/reflection/index.html","51ae32d03271047d3102482938861b0c"],["D:/Blog/public/resume/index.html","12a14858053bf588d5c6c090ddc5169e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","7c1f1e90133b17aafdbad01573a7abd0"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","96cc30c7fabc95dc4103689c0d3aa8b2"],["D:/Blog/public/select-structure-programming/index.html","e246e844181c7bd9a061b6c0fa47cf58"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","28a6c43cff880e592989a39816015051"],["D:/Blog/public/sequential-programming/index.html","f9e009ae1b6dc90617c393298b85c9ab"],["D:/Blog/public/series/index.html","e9d6a2d1e3cecd4bdb52bf5474471551"],["D:/Blog/public/single-point-login/index.html","e36402d608f7263db20c68aee81620c3"],["D:/Blog/public/single-responsibility-principle/index.html","8768551cb1721aea008c9eeb920b9679"],["D:/Blog/public/singleton-mode/index.html","bbc818aaa6d6e0bc555c7110dd4381f6"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","2889ed544a7cc9142dc2cb3f98806e55"],["D:/Blog/public/sparsearray/index.html","1e2749926b46647cb28c2bf1503f6090"],["D:/Blog/public/spring-architecture/index.html","f8374bb9442106f79293b7b88801cd4f"],["D:/Blog/public/spring-relate/index.html","80f4a31292fc19ae3345749c25b11161"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","abc85469ac08381432376387fa4da56c"],["D:/Blog/public/spring/index.html","058c2f15fecb1097cef3dd0f2e6b48cd"],["D:/Blog/public/springcloud-alibaba/index.html","eb65af010e9d1f96ece455f4a984b590"],["D:/Blog/public/springcloud-bus-message/index.html","e9c8225157a3c07a61ce4a65d3cc72cc"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","96ea69fa36f5762c7498445e7a396a3c"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","509f9aa40737d3e52f00cf23e2e76b09"],["D:/Blog/public/springcloud-stream-message-driver/index.html","777fa10012da2e6f7c2b4922c316b0ce"],["D:/Blog/public/springcloud/index.html","8fd0aaf4f445fef2da45bcec6934585e"],["D:/Blog/public/springmvc-environment-construction/index.html","75870157300597f0e6b3bbc46b8d558a"],["D:/Blog/public/springmvc-work-stream/index.html","f746025ad8b1bb217aca85788e4ecad5"],["D:/Blog/public/sql-injection-attacks/index.html","9d5882a652b5bccce812d963e424ea1f"],["D:/Blog/public/stack/index.html","3fc136e08947f9028005cceee9ff3e69"],["D:/Blog/public/state-mode/index.html","5266b40eaee0e11268427b2da09b868c"],["D:/Blog/public/strategy-mode/index.html","01ca3ef2c27c716a4a4415d456ed63df"],["D:/Blog/public/synthetic-reuse-principle/index.html","b67987b993e4e1c74205f96f34089014"],["D:/Blog/public/tags/C/index.html","3f277c35e5f0ac4d9dada38b9b98dea2"],["D:/Blog/public/tags/C/page/2/index.html","980b1b8d1f8923ea017e026ed87b2b7c"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","8a174e130ed31022c2cc8390c4f8d8dc"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","0a00bad6c92626cbe5272b938ff89ed4"],["D:/Blog/public/template-method/index.html","094be68d411f7eb3f4da64d0a3126b61"],["D:/Blog/public/test-case/index.html","ebe43ec263b387f779170aa9ca344a50"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","2eeeb9dc3f938814ee5e5a24397667db"],["D:/Blog/public/thread/index.html","e63c0da729c8d3dfe924da1ce7a45f4b"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","ebec7754bed951c58ee73417d1a9ddb8"],["D:/Blog/public/ubuntu-set-ip/index.html","f86eae9a1e3621faf6058efa3a556aef"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","4916963e5ac11baff3f4ebb0bec0e2d0"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","972483cd7c895876f5551464be26ea76"],["D:/Blog/public/users-create-data-types-themselves/index.html","527df75fe4bb23308fd1e887abba9286"],["D:/Blog/public/visitor-mode/index.html","5a6206cef30428d80a18558aeed26ca0"],["D:/Blog/public/xml/index.html","54fcc7bd140d9e726a357fe008fd76ba"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","d690347a433f27a3981321d35c04957c"]];
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







