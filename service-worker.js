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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","0f8f8321552042da13779204e635fc7f"],["D:/Blog/public/AIO-blocking-model/index.html","5563a2b7868dce259a8fcb73ae1454f3"],["D:/Blog/public/BIO-blocking-model/index.html","a671459b87d607204ccb7504fcd9737c"],["D:/Blog/public/C-algorithm/index.html","c0f411e89f4e7f3f8d69246a3748d6ca"],["D:/Blog/public/C-programming/index.html","e6a713d776abb0996d21aceb25cb106a"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","782719f439a0ebd70e8fafe38099790e"],["D:/Blog/public/Good-use-of-pointers/index.html","fbb440e862c70a69ba5c6ed33371b2dd"],["D:/Blog/public/IO-model/index.html","2558876dcfda15fd23c60b2d5424b553"],["D:/Blog/public/IO/index.html","5466a9991b317bd1f34729c14ad54684"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","85ec4fe367c13313b787887e2860f198"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","b70d27befb6b4c58b468774045c207bd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","1a598a0dd097a5ed01c49bdefbe4193e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ca35168ccbd472a239b723bf4b3a0b20"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","f0d8bf25dca930b0db5f348930a62347"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","98d4d6fdc3356cfb9678e6f4503bc19b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","c5f75e290d143b3e881f422afe38589f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","b2fb8ceaa72d1a42fd1a8b2934efa425"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","4f8fa1ac5f95e727d1b19bbbba5387c0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","ea58596e7bc0195b9a80c1f05146e2b7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","53b6df456ce5a97cf133d088baa8b078"],["D:/Blog/public/Java-network-programming/index.html","d63baca44eaa201a45ddc8fd37a418f4"],["D:/Blog/public/NIO-blocking-model/index.html","5e169f7ff7d0557f4b9137043d6ae8a5"],["D:/Blog/public/Native-method/index.html","15d1a6b82bbc2eac7f465055c8ba7a54"],["D:/Blog/public/Sandbox-security-mechanism/index.html","6b466f2c41d7a1bdcd12473dfc46c229"],["D:/Blog/public/SpringBoot-startup-process/index.html","2de530a6dcf0e15a5ac4982684f6b2fa"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","11f30ee946723503628c4945dbb6c030"],["D:/Blog/public/Unitest-framework/index.html","f2f7f69d3931eb540a9403080fac005b"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","a6a573a263e7d221c8887e99dbc90042"],["D:/Blog/public/agency-model/index.html","c5fc69b2bcc09f1ce9476d605e6dd1da"],["D:/Blog/public/app-test/index.html","7d979cea15870ed0431e1cc5def71287"],["D:/Blog/public/appearance-mode/index.html","7b76d17898d22334ef3fe64efcd77171"],["D:/Blog/public/archives/2019/01/index.html","8e52fa1d85b7a2ce5016383cb854cbee"],["D:/Blog/public/archives/2019/07/index.html","26259fc45e7c886a5ef785afb0be4789"],["D:/Blog/public/archives/2019/12/index.html","2646919a15751a995d95fc3b49f7764c"],["D:/Blog/public/archives/2019/index.html","0e30ebf01ab76146b553776eacde6eab"],["D:/Blog/public/archives/2020/04/index.html","b2b40b960fda41f6600ff24a3e548ce0"],["D:/Blog/public/archives/2020/05/index.html","282f113e361b8234defaa9b4c3ed76e8"],["D:/Blog/public/archives/2020/05/page/2/index.html","ecdf687e38c8855fbf239aff8a0979cb"],["D:/Blog/public/archives/2020/06/index.html","94be03bf8cc7e4a2d794cebc810df4ae"],["D:/Blog/public/archives/2020/06/page/2/index.html","358f709402fdb6827caa8f9bbd4b4fc8"],["D:/Blog/public/archives/2020/06/page/3/index.html","3e893b0179086be8c0c003787fd3a2bb"],["D:/Blog/public/archives/2020/06/page/4/index.html","bd3c28a3a14bc2137c26276925db42b9"],["D:/Blog/public/archives/2020/07/index.html","2ca5340f012664264666e4c7cf7e6456"],["D:/Blog/public/archives/2020/07/page/2/index.html","3bfcc6c19d00e3212470fc019e4f4d5c"],["D:/Blog/public/archives/2020/07/page/3/index.html","a6cbb62e5d888273fdecf58b1311f34e"],["D:/Blog/public/archives/2020/08/index.html","c7c167e93d0dfca2af881c9fdde82fa9"],["D:/Blog/public/archives/2020/08/page/2/index.html","a397fac887a1a0d5518a5adb5cda8ffb"],["D:/Blog/public/archives/2020/08/page/3/index.html","9a143f01ef5a2ee75b0409eba974daf4"],["D:/Blog/public/archives/2020/09/index.html","12e0d27c9bfab454d1b1af6205dfb9d3"],["D:/Blog/public/archives/2020/09/page/2/index.html","77eba20f600a20c06e0f2c43367112ec"],["D:/Blog/public/archives/2020/10/index.html","d216d4d7e71db8751146db78761b810d"],["D:/Blog/public/archives/2020/10/page/2/index.html","e3b9e945b385fb89f7cbd3a174624825"],["D:/Blog/public/archives/2020/11/index.html","a68341115f81fcefb6dc2b0777901400"],["D:/Blog/public/archives/2020/11/page/2/index.html","da879a8a7bebe88b2508edd804341026"],["D:/Blog/public/archives/2020/12/index.html","907296f0fb9ed96c9c3fc079dc27f58c"],["D:/Blog/public/archives/2020/12/page/2/index.html","e53f3dbc5b8fee3a1debf37237afacf2"],["D:/Blog/public/archives/2020/index.html","90ec0a526caa2d7c8dcd095334ea5e1f"],["D:/Blog/public/archives/2020/page/10/index.html","a8afe1b968601de1fb7a413c739fe439"],["D:/Blog/public/archives/2020/page/11/index.html","b73bf8fff36938af9e09539c23d0827d"],["D:/Blog/public/archives/2020/page/12/index.html","8faac84162a14ff1a630f0af2626850e"],["D:/Blog/public/archives/2020/page/13/index.html","9ef76b0816b2868e89078c1c073d449c"],["D:/Blog/public/archives/2020/page/14/index.html","98de4f3c6a9c76628a7b1d13380e896f"],["D:/Blog/public/archives/2020/page/15/index.html","c3d51ad93e852ce828fbf272930b13be"],["D:/Blog/public/archives/2020/page/16/index.html","b7a7ac45820a023aea909f4ea3a2da92"],["D:/Blog/public/archives/2020/page/17/index.html","1691702eaa9a825a2b586ea670fcb74c"],["D:/Blog/public/archives/2020/page/2/index.html","84c74755a3cd0bf99cc5cc8b0340f3e7"],["D:/Blog/public/archives/2020/page/3/index.html","1f5952f30f7c42c3eb1ab067cb4ec9bd"],["D:/Blog/public/archives/2020/page/4/index.html","f54ede88037a5339ab578721416ec894"],["D:/Blog/public/archives/2020/page/5/index.html","63b6ec7e32ebcc28fd7e3f59214fa27d"],["D:/Blog/public/archives/2020/page/6/index.html","6d5dda043b55e2f7cb64930510526c60"],["D:/Blog/public/archives/2020/page/7/index.html","737a36ee8f7f4c8e9c3f83fe27d29d4c"],["D:/Blog/public/archives/2020/page/8/index.html","833ebf4d34eca70e15d501bd2a84a02e"],["D:/Blog/public/archives/2020/page/9/index.html","7b73368a6e7038b4a229a9c79c224b1d"],["D:/Blog/public/archives/2021/01/index.html","90f295d9befc0933a9789ef1eabe7d44"],["D:/Blog/public/archives/2021/02/index.html","0243774e4aaa7db2bd1c9a85464c0cd9"],["D:/Blog/public/archives/2021/03/index.html","9225e2c7504bbe0d671f39b7b89a5bd4"],["D:/Blog/public/archives/2021/index.html","818d47681c4ed9e6c0e6531c3a4cccfc"],["D:/Blog/public/archives/index.html","bb1c924105b8193894f1735f62bbcfce"],["D:/Blog/public/archives/page/10/index.html","f57a91e4d340babe595ca6f9981df480"],["D:/Blog/public/archives/page/11/index.html","4be29c95583d17042071443e4eae8d9e"],["D:/Blog/public/archives/page/12/index.html","f33e8d3137cb3beb69daae9d193b9894"],["D:/Blog/public/archives/page/13/index.html","df78931e5b196f872a297c03cb2528ee"],["D:/Blog/public/archives/page/14/index.html","7cb23ed43020a0129533949f80133289"],["D:/Blog/public/archives/page/15/index.html","2e3e9e5198f3367ca003a09101e4f3f1"],["D:/Blog/public/archives/page/16/index.html","b17ba204fd4919b58fca0cd9eecd1139"],["D:/Blog/public/archives/page/17/index.html","575c388c3c1bd4a1f9b44b68bf694888"],["D:/Blog/public/archives/page/18/index.html","b15aab84f0e427bbde3a9c6319665905"],["D:/Blog/public/archives/page/2/index.html","c03e4ed1b4a17f67119df60369650625"],["D:/Blog/public/archives/page/3/index.html","ad20363b94cad2e9f5bf4ed8f755f94c"],["D:/Blog/public/archives/page/4/index.html","aeb1429db137e6eac9fd6b5a444e609d"],["D:/Blog/public/archives/page/5/index.html","9c4daea6d5c9f9f58cc1d05b5ab88364"],["D:/Blog/public/archives/page/6/index.html","5b4639d2f8757bff332e74fadc9c52fc"],["D:/Blog/public/archives/page/7/index.html","96c1c0a749aa2fed652d33f5fca7a9d9"],["D:/Blog/public/archives/page/8/index.html","72bc7a18e3659648730620df8c6cb5b7"],["D:/Blog/public/archives/page/9/index.html","1d70cddb3eab39812f717236c114de23"],["D:/Blog/public/array/index.html","cc209834a019071eaa22cae09ea46e9d"],["D:/Blog/public/automated-test-katalon/index.html","2ae786265fca268b298da61d3e8f4d6f"],["D:/Blog/public/automated-test-selenium/index.html","79d58f6a8748fcf85a0ce994939a4061"],["D:/Blog/public/binary-search-algorithm/index.html","f730d8ba3ed065bd359386ac95494853"],["D:/Blog/public/binary-sort-tree/index.html","b1f10fde441b1a97a5b2a4962e39db55"],["D:/Blog/public/bionioaio/index.html","550efad1145b4f6de8a81cd819edda60"],["D:/Blog/public/bridge-mode/index.html","45786a7817b9578804b7c1bc815e6f32"],["D:/Blog/public/builder/index.html","f0de7c5f01912271836f0c6195aba992"],["D:/Blog/public/c-pointer/index.html","7f745e37db6e8cf6d839d93c9474c2c1"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","89a009ae8dd5605d52784dbdcfea1e1a"],["D:/Blog/public/chinese-and-english-switching/index.html","cbeb890c0ea6c40a7248fbd295b06a3f"],["D:/Blog/public/combination-mode/index.html","fabd5c072c7700bc82a872ebb41620a8"],["D:/Blog/public/command-mode/index.html","e0284c89043b5961ff5be3eac7ea28d5"],["D:/Blog/public/common-commands-of-unix/index.html","83598974b73a8e2c18e1089661bf95a9"],["D:/Blog/public/computer-network/index.html","fd4a87574ccd3a2d74982c6067827196"],["D:/Blog/public/concurrency-principle/index.html","0472f1247dcde6ec4eaf3a54d1a1093b"],["D:/Blog/public/continuous/index.html","6fcbbf0c50bc8cfea76a0182974780bf"],["D:/Blog/public/contract/index.html","1162d0a04588bd82eaa5bdf532f8a093"],["D:/Blog/public/css/octo.css","9d24d87d75c4c399727c00ef464469df"],["D:/Blog/public/cycle-structure-programming/index.html","7892d8b75910d17998f597bd07650437"],["D:/Blog/public/data-structures-and-algorithms/index.html","98ab34a9e2473ceb52b988a40cae4e71"],["D:/Blog/public/deb/index.html","7e834743424ae4817148d108da6b807b"],["D:/Blog/public/decorator-mode/index.html","3e9775b22b10dfd88e588ff51a7e3253"],["D:/Blog/public/definite-integral/index.html","f73b10f8902e8c3cba386f4e888ad0ab"],["D:/Blog/public/dependence-reversal-principle/index.html","c8b88863a892be099af95abad77f1a65"],["D:/Blog/public/derivative/index.html","54cbb7b73a0d81947ca1a1b7ac36b05c"],["D:/Blog/public/design-patterns/index.html","42355e2cefa9c8aaab1cd7f50b20d937"],["D:/Blog/public/differential-equation/index.html","a1a94ea0f3415c2872a6898c2a333816"],["D:/Blog/public/differential/index.html","e1ab6c8d56e15d5a33494b42f853c0d5"],["D:/Blog/public/dimits-law/index.html","b51a498ff35f42ddba14223e7b45fea1"],["D:/Blog/public/docker-virtualized-container/index.html","38e5ad792cebfadbfecf92a62bd5cfea"],["D:/Blog/public/double-integral/index.html","79afcac0440b0476bd4a3038d40edc4e"],["D:/Blog/public/dynamic-array/index.html","a515c71c32ed72140dec5c271bf5462b"],["D:/Blog/public/dynamic-programming/index.html","42b179d4f2bfbf794d1716abbe92f477"],["D:/Blog/public/encoding-algorithm/index.html","d033061d22f861857592e3105ef365a3"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","80e846aa0dc8547ca5a81e378ab29a06"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","0bb26d2ffea5a44c89b6c9ad25d1204c"],["D:/Blog/public/factory-design-pattern/index.html","005e4c7fb243d4a7abb89587c3c2ebb1"],["D:/Blog/public/file-input-and-output/index.html","3f00986c11ce2a4e325d1edf7acc4719"],["D:/Blog/public/flyweight-model/index.html","e00164009524a6dc46529ffdf50c9f8b"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","84580ef93a00245397cc79e51ef89d88"],["D:/Blog/public/gateway-service-current-limit/index.html","cbcdbed288389d3abd5b983ddae7fb74"],["D:/Blog/public/gc/index.html","5a233ad69786494773020568787c0235"],["D:/Blog/public/generalized-integral/index.html","3195cf79a871b205e1abd5c2349608ff"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","3972a9f8603b8bbfa63c50cfafc1ba35"],["D:/Blog/public/hash-algorithm/index.html","09f04aa9fa62951b75e4b5a502df15a1"],["D:/Blog/public/heap-sort/index.html","e00e806a654fdec0841da06afc15d589"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","9e6a5075d9ad7122b04d7912854d4e9b"],["D:/Blog/public/http/index.html","92edb427f6cecbaa01b98f00731a2026"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","b172e0089eb7f0382635be69f5040e7f"],["D:/Blog/public/index.html","3476c6c038e2e1147b12270ec50f2828"],["D:/Blog/public/infinitesimal-and-infinite/index.html","8efa993415025a3306a12b93f55139bb"],["D:/Blog/public/interface-isolation-principle/index.html","dfbe5d604982fd35a9c644ac59d928c6"],["D:/Blog/public/interface-test/index.html","99c83b60f5f18730fe3b5cb0174ca511"],["D:/Blog/public/intermediary-model/index.html","aaeace40bae742ab963c59c03fb7fb26"],["D:/Blog/public/interpolation-search-algorithm/index.html","d99e633c347f5045e456da19517ec515"],["D:/Blog/public/interpreter-mode/index.html","21f9dbbc510da191f3c16e53a4277c26"],["D:/Blog/public/introduction-to-computer-network/index.html","7f95bca216b5047fe429341f6e3f527b"],["D:/Blog/public/introduction-to-operating-system/index.html","2950dcd148d25c29cd4bbafbbef3ef91"],["D:/Blog/public/inversion-of-control/index.html","8e7052a21ef4ff3e16863fc04ed62f1f"],["D:/Blog/public/io-Interview/index.html","b23643e044ac975abc8f0e29efb69d8e"],["D:/Blog/public/iterator-mode/index.html","84cc0c12f87d9394e9f6d4ea8a1f081e"],["D:/Blog/public/j2ee/index.html","91dfd23548944435936784b35ee2b2cf"],["D:/Blog/public/j2se/index.html","5d3e4dadc5da58b53fc1da35add2a00e"],["D:/Blog/public/jdbc/index.html","25279a3de10719fe50c150a7f81faf37"],["D:/Blog/public/jdk/index.html","af20ceb23d67dbf79d6bc6be7a2e10da"],["D:/Blog/public/jmm-memory-model/index.html","aa955c7e7dab41ad8a3af3662513558b"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","3c620a189e38cd02a73a4838830cb5b1"],["D:/Blog/public/jvm/index.html","e19236b7257373861aecd730dc5be7e6"],["D:/Blog/public/law-of-robida/index.html","ff0f1944ee46db5199af26d11948c9f5"],["D:/Blog/public/limit/index.html","dd63620a6c521552e7375b2f71f7e995"],["D:/Blog/public/linear-search-algorithm/index.html","fa4f539d6434e0938205f0ab06e8e95b"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","1b29b67e320bc65b88cb3b6248c17f36"],["D:/Blog/public/linux/index.html","ee12961caad7b344066f1a5aa8f992b6"],["D:/Blog/public/liskov-substitution-principle/index.html","80d18f412175ebe5b8719e409d5a6f71"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","65fa70fdb3c84c9335d3e756842ed66c"],["D:/Blog/public/maintenance-1/index.html","e5a31eea519a46b9389c87ea01a2c1bb"],["D:/Blog/public/maintenance-2/index.html","564ca17b7929e5d2dcb3c46a30fb3472"],["D:/Blog/public/maintenance-3/index.html","f86b8ff61c8eafd43abad82342317c5c"],["D:/Blog/public/memo-mode/index.html","478d42ffff832a3c474cf0f5c9ca193c"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","497f79279c813c09ecb98ec0ec525361"],["D:/Blog/public/multi-function/index.html","c64a02744b477111dfda4f788b6bfe07"],["D:/Blog/public/multithreading/index.html","5b869f41027a9762f1e8f0d6735abc5b"],["D:/Blog/public/mvc/index.html","588c76d44bc4440e6667541802eda4fd"],["D:/Blog/public/mybatis/index.html","54ecc7fcb6f4207a97e9594c9ec77b61"],["D:/Blog/public/mysql/index.html","d8b639b2b0376d6d2dc0918f33ad15c1"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","282a220ee62ea8605efbce08dcfd892c"],["D:/Blog/public/objectoriented/index.html","24feef2e2c5a8abb7a40ddf8fdad5f50"],["D:/Blog/public/observer-mode/index.html","b8c5a12d406abfcb48bd2074d16f630a"],["D:/Blog/public/off-heap/index.html","3ac788c98759a34236c8af33712fd0de"],["D:/Blog/public/operating-system/index.html","dc01f5a324077d5a097dd79f58906a97"],["D:/Blog/public/page/10/index.html","749673feca6ccf680ad8eac42e0d2419"],["D:/Blog/public/page/11/index.html","aaa1846e12abc688cefb7ad078ff9660"],["D:/Blog/public/page/12/index.html","2fbd9b6fa23634b3dcb46868748309c6"],["D:/Blog/public/page/13/index.html","6a6c70cdf01a7668a67564d859984606"],["D:/Blog/public/page/14/index.html","0ba4c4c427beb72220cb4fd45968c4e0"],["D:/Blog/public/page/15/index.html","b294a42848ed956fb0cb1a77ebdb5bb2"],["D:/Blog/public/page/16/index.html","f5e07b8c0bb4c57e4ac472766eb540b5"],["D:/Blog/public/page/17/index.html","14c863c91b9f05758aa81cb055861123"],["D:/Blog/public/page/18/index.html","e3b0e3fa97b9eedd14288ecbea02ed6a"],["D:/Blog/public/page/2/index.html","867a1db0c1f5d94cb36e2e4416849507"],["D:/Blog/public/page/3/index.html","4a50951f6646e1b1fb27566b676a1c2e"],["D:/Blog/public/page/4/index.html","86b990074235ea8b092028d4b315fffa"],["D:/Blog/public/page/5/index.html","f9dc6bbfb98a6886e4042373bacb5e08"],["D:/Blog/public/page/6/index.html","e3fc0c549cb4f8f6dec160c152b460dd"],["D:/Blog/public/page/7/index.html","6f744d55c88d36bb2f2fd343c582c12f"],["D:/Blog/public/page/8/index.html","e4a959511838a6184ae15fefa44db373"],["D:/Blog/public/page/9/index.html","e1e00ab5efdb0749871dfc1ef50e1e75"],["D:/Blog/public/palindrome/index.html","82a23847923fbde754efb11925077d66"],["D:/Blog/public/partial-derivative/index.html","1347a8d1e6cd1b7973f03bf76cb010c5"],["D:/Blog/public/pass-by-value/index.html","e8dc9158e94c5d7e0fc0dba144356630"],["D:/Blog/public/pictrue-bed/index.html","e7ffe4c2d2b3740a4ba357d62dc82402"],["D:/Blog/public/principle-of-opening-and-closing/index.html","c6718486537d427f6d84368cecd0baab"],["D:/Blog/public/principles-of-computer-organization/index.html","a1e374dc9406bae8901ede1855df8d78"],["D:/Blog/public/program-test/index.html","c5eb040dcadf516c99096772f02ab552"],["D:/Blog/public/prototype/index.html","a87c4be48d7b673fed8536d07d8f9cc1"],["D:/Blog/public/queue/index.html","389e14f238f724210ee42eb1a7002a3d"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","313fd520704f4ac5ed7cac4d237e679d"],["D:/Blog/public/redis/index.html","554d550d071dd65f2c05342fe564497a"],["D:/Blog/public/reflection/index.html","029458b47ffb74a894b5d3707a18fec0"],["D:/Blog/public/resume/index.html","f14c41c0301c4ccb089d383f6eab2f5b"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","4dd916584b8aaf8f70cc87e0d7a0b735"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","32ab0a1e5c439103a3319a4639bfdf4f"],["D:/Blog/public/select-structure-programming/index.html","4036a2436b025864d490e70f6363e791"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","0e166e4b0f862b5afef4a14c7b69c21b"],["D:/Blog/public/sequential-programming/index.html","83654589a5d64080fac3ea71330fa66a"],["D:/Blog/public/series/index.html","9a922e593dc7515910701e5d1d558121"],["D:/Blog/public/single-point-login/index.html","ade63df764fe0228ef8f9aa9f8c67881"],["D:/Blog/public/single-responsibility-principle/index.html","25f6949156c135711e1aa282e52a559c"],["D:/Blog/public/singleton-mode/index.html","07e87ecde3926bd894552218543161ef"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","7bf2d8ad52519c82531c190047188627"],["D:/Blog/public/sparsearray/index.html","d9d0ca9fcc120b9ad37b7e02a94130e0"],["D:/Blog/public/spring-architecture/index.html","e4b6f75079abe78c4f932a7200258d36"],["D:/Blog/public/spring-relate/index.html","09b1a83df8d8a1b8a587f74ede990bf1"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","39e6ccbdc204ebdf153a89133cc74206"],["D:/Blog/public/spring/index.html","49935c641314eeccc9fa91b20284ccd2"],["D:/Blog/public/springcloud-alibaba/index.html","5eab0459bf3bd5b303a0afff56d9428a"],["D:/Blog/public/springcloud-bus-message/index.html","87d689bb57257bb992e9947a4f99051d"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","01f41411e2abd76f3df473ddfa3d11e0"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","c0ba52e9e70f002395acd821e457617a"],["D:/Blog/public/springcloud-stream-message-driver/index.html","cafe9671327517dc9a372f956b93723a"],["D:/Blog/public/springcloud/index.html","3c1bb29fb2eb444e1fe71fe128142628"],["D:/Blog/public/springmvc-environment-construction/index.html","79acc3348ec4cfdaeffa07fd31acdc97"],["D:/Blog/public/springmvc-work-stream/index.html","e2a49dbca319af6bff07646512688e1d"],["D:/Blog/public/sql-injection-attacks/index.html","4cb49b467421c09e5b14e99525f35254"],["D:/Blog/public/stack/index.html","8ade56f882fe6f67cf5e10195e4a2128"],["D:/Blog/public/state-mode/index.html","ff37e9f383cb990725d90ff482f59982"],["D:/Blog/public/strategy-mode/index.html","30ef0d2ddeacaaedcd43423eba4bc9a8"],["D:/Blog/public/synthetic-reuse-principle/index.html","a92c32812beb4c05cf81ce9457b2a22a"],["D:/Blog/public/tags/C/index.html","3f277c35e5f0ac4d9dada38b9b98dea2"],["D:/Blog/public/tags/C/page/2/index.html","980b1b8d1f8923ea017e026ed87b2b7c"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","ab7cb60be350ab80f0a2b985f62baf9a"],["D:/Blog/public/template-method/index.html","80e5fc870f0e6a0d01a388c1b6432e3f"],["D:/Blog/public/test-case/index.html","8bc383d29b761adfdd8bdeac6c452618"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","8055f1441b95cb602e7f41e318f8c041"],["D:/Blog/public/thread/index.html","502ca30d3abaf8dcbcde4aef772be5da"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","53058aceacaa9f27769c78c61c6a81a9"],["D:/Blog/public/ubuntu-set-ip/index.html","07231df7778fe218a018d2556f8b3ab7"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","8c26058145683a47163fc4fddbf9cd73"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","13e6166def4a5d67872a18d352e9e5be"],["D:/Blog/public/users-create-data-types-themselves/index.html","86dbbc0ac685d3a6c558e4628f53e3ff"],["D:/Blog/public/visitor-mode/index.html","c88a4e0d8f91c02152619f255b351793"],["D:/Blog/public/xml/index.html","34b158a16b9cba39e36afa4e632402a7"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","071e311e6fcf9fb44541d4e0211561c9"]];
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







