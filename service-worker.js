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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","d4526c92ae2dd5ee485f1577b267378c"],["D:/Blog/public/AIO-blocking-model/index.html","7abedd70e41ffbef3a9f2ececc36e09d"],["D:/Blog/public/BIO-blocking-model/index.html","9c8a4eebe410796f73b1e00eecf507fc"],["D:/Blog/public/C-algorithm/index.html","61f12260a8eccec3b294455b33fa3ad5"],["D:/Blog/public/C-programming/index.html","16e2dcdc8cbfadf2970836eb524b5d47"],["D:/Blog/public/Good-use-of-pointers/index.html","2c577aa37bbddbffb90d4262462afbd9"],["D:/Blog/public/IO-model/index.html","27648afb82d8cc6ff163ac1cf0b80690"],["D:/Blog/public/IO/index.html","96d50ef0aea977cbb5d25490048bb220"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","bb874c8a1c5ea03b0e46f38e0bfac739"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","53cdc7359c3dcc9f5b4e65fa89e5fa25"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","5d08fa9c13d247b858c66418005d7e11"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","07d616fe462bc6912c53f3108ae35bc9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","a9a89e4cbfcaac6857d0350f2c8467c0"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","021ee8d00c1b54943db1d7875cb47a37"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","518aefd17bb2e88e74935b340a37133c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","c89a080c786f5b304bb16fbbb804043c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","e3ecad72e5106c94c3b23233a65867eb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","481fedfc602b1ed4a3142d4cb4bf468b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","862bde8e98115967d1185516ca4e14f5"],["D:/Blog/public/Java-network-programming/index.html","c244377c564904b6c778df610c8082d2"],["D:/Blog/public/NIO-blocking-model/index.html","a6355c3684a2d8a4927a935207fadc56"],["D:/Blog/public/Native-method/index.html","88a768800e6575a85d57c4a9f71c9ecd"],["D:/Blog/public/Sandbox-security-mechanism/index.html","179f2159841cfe999d3c73a208075130"],["D:/Blog/public/SpringBoot-startup-process/index.html","d23ad8202f42908918b648b2cea29a63"],["D:/Blog/public/about/index.html","cfaf7ffaa0f6285f2fffdf7ba2e4767c"],["D:/Blog/public/adapter-mode/index.html","07ad03665f184e9c898534ed03c14b06"],["D:/Blog/public/agency-model/index.html","b9482fd755a3984a1456c902f7fa90bd"],["D:/Blog/public/appearance-mode/index.html","9e7bee4d260668363d2f42b4643c7e14"],["D:/Blog/public/archives/2019/01/index.html","b7ea83d76c53bd42f33390110ba8cb5c"],["D:/Blog/public/archives/2019/07/index.html","df3b999d508473af0662552bfe85017e"],["D:/Blog/public/archives/2019/12/index.html","705786208489edd2d17189bd2b5483de"],["D:/Blog/public/archives/2019/index.html","d716ff68ba97d95092a8d3562066f0a7"],["D:/Blog/public/archives/2020/04/index.html","2a5fedd70f97d289548c77843699864a"],["D:/Blog/public/archives/2020/05/index.html","d835d53ecf305acea841d45757222c57"],["D:/Blog/public/archives/2020/05/page/2/index.html","6a126a5555244698aa85f63d6aa197cb"],["D:/Blog/public/archives/2020/06/index.html","ec26c5f77b253f076505177b93109d9a"],["D:/Blog/public/archives/2020/06/page/2/index.html","0a8e221c3b535eaa1053863e272998fe"],["D:/Blog/public/archives/2020/06/page/3/index.html","f5d9eb0aad292058fd2cd10389e3a964"],["D:/Blog/public/archives/2020/06/page/4/index.html","1defdd31d71304a7053895b57ecf1b60"],["D:/Blog/public/archives/2020/07/index.html","9a5b066da92f14f0b485e7444a9845c4"],["D:/Blog/public/archives/2020/07/page/2/index.html","ef94c13a4daa476eebe19a3fd261ca72"],["D:/Blog/public/archives/2020/07/page/3/index.html","2e90c1cc4a59499899dabb87c45884b4"],["D:/Blog/public/archives/2020/08/index.html","a58257aa04c64049c7a7bf11d0b7d1ad"],["D:/Blog/public/archives/2020/08/page/2/index.html","5188542286c27d7b4efe46bd54203c88"],["D:/Blog/public/archives/2020/08/page/3/index.html","2cb1ecf63b09263bd4787a43ae3f9879"],["D:/Blog/public/archives/2020/09/index.html","4f778284eeb88d396d038b8385e83b2f"],["D:/Blog/public/archives/2020/09/page/2/index.html","0e26b7242f2e1e244d92a6482528f7db"],["D:/Blog/public/archives/2020/10/index.html","55004765898cd60f8491eae229a0d10e"],["D:/Blog/public/archives/2020/10/page/2/index.html","1031cef3fd34b7ba033c96d50e669a01"],["D:/Blog/public/archives/2020/11/index.html","b04510e0ec7b223253f124ae72247776"],["D:/Blog/public/archives/2020/11/page/2/index.html","8821f9b1b51d39adeed91a03e72b254f"],["D:/Blog/public/archives/2020/12/index.html","17ac59b7873096847585d9ff572d189c"],["D:/Blog/public/archives/2020/12/page/2/index.html","ea63b5e430f2075372511bd696660419"],["D:/Blog/public/archives/2020/index.html","a1304d6d7531f991c96689580e3e5ce1"],["D:/Blog/public/archives/2020/page/10/index.html","c79f09434df701c2de686478a472e344"],["D:/Blog/public/archives/2020/page/11/index.html","9e252fcd81eacbbc73659dfa2b077b74"],["D:/Blog/public/archives/2020/page/12/index.html","777140b0887284a136792536a964eb88"],["D:/Blog/public/archives/2020/page/13/index.html","16ca517b06aa728379cc6d2f525701c9"],["D:/Blog/public/archives/2020/page/14/index.html","c36788e56de5b35f423c0e41155e1f49"],["D:/Blog/public/archives/2020/page/15/index.html","fe9d3803f338352578e293a616f6e639"],["D:/Blog/public/archives/2020/page/16/index.html","eb19c44b380608099054d07b48dc3695"],["D:/Blog/public/archives/2020/page/17/index.html","42f735f7b9e9bfb9a05830638df14373"],["D:/Blog/public/archives/2020/page/2/index.html","aa04ca44c2610ab687eca5cc7cc9b0c4"],["D:/Blog/public/archives/2020/page/3/index.html","94507ea5aec0fe316cbefc7a6e71d978"],["D:/Blog/public/archives/2020/page/4/index.html","e5529adc154f9460ec80ce76093b9b02"],["D:/Blog/public/archives/2020/page/5/index.html","5e8bb4ba3125f87207c9a6afc1729ddb"],["D:/Blog/public/archives/2020/page/6/index.html","197268ccbc5623f07859759adc23b672"],["D:/Blog/public/archives/2020/page/7/index.html","abd04de2624b988a16c5bfe1348bdb9b"],["D:/Blog/public/archives/2020/page/8/index.html","2c145cbc499b406f29abe6265856aa5a"],["D:/Blog/public/archives/2020/page/9/index.html","6f14707afbc7cc735a0db2d5fc8f1721"],["D:/Blog/public/archives/2021/01/index.html","e8463071dc6584243b27e595c17462a0"],["D:/Blog/public/archives/2021/index.html","c60326d10f2383301d3eb4e221ac927f"],["D:/Blog/public/archives/index.html","5516ec39e287fe2a17526ffd0ec1db81"],["D:/Blog/public/archives/page/10/index.html","205d5fbbed523ecf572bb686d4248317"],["D:/Blog/public/archives/page/11/index.html","f5aa9ce3144516f38d11660ac2fdbd9e"],["D:/Blog/public/archives/page/12/index.html","6b7ee75c952ad275e80aa94ac5088ef9"],["D:/Blog/public/archives/page/13/index.html","20abe88b398257987a889202ce162c75"],["D:/Blog/public/archives/page/14/index.html","7e05793086f70ff2113f08ec21e05f6e"],["D:/Blog/public/archives/page/15/index.html","192e36805c6f2d86fff7a47989084bba"],["D:/Blog/public/archives/page/16/index.html","4795938ac9eeb8c9003218893eaaa5ec"],["D:/Blog/public/archives/page/17/index.html","7a4ef056004fa8b516782e10bbc80711"],["D:/Blog/public/archives/page/2/index.html","1d24d8233f091a2cfdee39163c4e7b9c"],["D:/Blog/public/archives/page/3/index.html","13726d792e2b1647e62fc515ba61bb31"],["D:/Blog/public/archives/page/4/index.html","f334b636717456aafad58b9409047998"],["D:/Blog/public/archives/page/5/index.html","054ee0758696e064a76acccd4487fba4"],["D:/Blog/public/archives/page/6/index.html","edad19989a78b81a48c93fbefd3e2f82"],["D:/Blog/public/archives/page/7/index.html","cbf5ff4d62a453c47367da3167055c3e"],["D:/Blog/public/archives/page/8/index.html","2300195927b3ed72c51cff579fbcb1a1"],["D:/Blog/public/archives/page/9/index.html","9d6efb9921a022ebe83c8a0c9e4718e6"],["D:/Blog/public/array/index.html","179cbffaaca385f3d5170d724756dad9"],["D:/Blog/public/binary-search-algorithm/index.html","8bb1b1b3fb99796ed96e47db0e58990b"],["D:/Blog/public/binary-sort-tree/index.html","381f2368b5206e2d1f2f8fc8ed5d93ec"],["D:/Blog/public/bionioaio/index.html","64420465f506f3842fbc1b241d1f88c6"],["D:/Blog/public/bridge-mode/index.html","4ef1d6246e8d882aa6700cf980f2facb"],["D:/Blog/public/builder/index.html","f33665a4511a5d4e4befc9f43177c117"],["D:/Blog/public/c-pointer/index.html","cf6873a174f17c1e6f386a9ad11b8238"],["D:/Blog/public/categories/C/index.html","22d9a3d014aa533faef26f56c165dcb2"],["D:/Blog/public/categories/SpringMVC/index.html","de93f0ff9a1d3eae575aeeb01abb077c"],["D:/Blog/public/categories/index.html","d9cf48c1e738514464ceae49c99f4a66"],["D:/Blog/public/categories/linux/index.html","9205bf029fb8406e8addd2646484f489"],["D:/Blog/public/categories/分布式/index.html","950637e030f7c7bc07de50eb11f536ce"],["D:/Blog/public/categories/分布式/page/2/index.html","9044adde01b831396b7f35396249b077"],["D:/Blog/public/categories/前端/index.html","76c598ac03defd384b7fe57580ce2fa4"],["D:/Blog/public/categories/设计模式/index.html","35d5ca97db4dc7b82f9c708f2b1a08ad"],["D:/Blog/public/categories/设计模式/page/2/index.html","0326631fb208c8244ff5284ddca1d89b"],["D:/Blog/public/categories/高数/index.html","a2d21702eff59cf693a9c6ddb74d6e58"],["D:/Blog/public/chain-of-responsibility-model/index.html","52537662eaa5165165882dab5a0bcf95"],["D:/Blog/public/chinese-and-english-switching/index.html","1a759b53619767e96f3b7f29ea81e46f"],["D:/Blog/public/combination-mode/index.html","78c1f50cb548fb6dd2f3677d15ef348f"],["D:/Blog/public/command-mode/index.html","3508bcedf5bcb739fc4dcfecce164525"],["D:/Blog/public/common-commands-of-unix/index.html","6bbb42087dc4c85334a34a5c0185deed"],["D:/Blog/public/computer-network/index.html","9fa34f3ab41fcec270b34d88a70480e4"],["D:/Blog/public/concurrency-principle/index.html","81b6ad130f5dab3706623a58433723a8"],["D:/Blog/public/continuous/index.html","e755be98611f5c074c2d0ff93dac6f82"],["D:/Blog/public/contract/index.html","e5726bd2999af469e3acf21a4d8c599a"],["D:/Blog/public/css/octo.css","fe4189c849eabfc87e8c9916ca141cac"],["D:/Blog/public/cycle-structure-programming/index.html","61279dee09b940a2fb8763dae16430fd"],["D:/Blog/public/data-structures-and-algorithms/index.html","4a41f56c0b938dc23a560b273d65a78b"],["D:/Blog/public/deb/index.html","15bbd3f80021ea7a8dccbbd69d42a009"],["D:/Blog/public/decorator-mode/index.html","048d173fb620887681da3f2564df73c0"],["D:/Blog/public/definite-integral/index.html","9fa5f13e3d444e1c22617ea632bdd1e4"],["D:/Blog/public/dependence-reversal-principle/index.html","213cdfbfbc8dc7c086e6d5de17712a9d"],["D:/Blog/public/derivative/index.html","1fefe31be4830f63aad73b37ce0d5af7"],["D:/Blog/public/design-patterns/index.html","3c8d1702ce0cec710caab73e84a9a92e"],["D:/Blog/public/differential-equation/index.html","a1a025f958efc1321d438fa4d584a7cd"],["D:/Blog/public/differential/index.html","35dac76c14be7430165bf1eb8ebabcf1"],["D:/Blog/public/dimits-law/index.html","52ebe41e8d04808041d77eddbdb1f00e"],["D:/Blog/public/docker-virtualized-container/index.html","f55c5aef94c69defeebd463ee4f3a18c"],["D:/Blog/public/double-integral/index.html","2c858a3098986da0eb77010433e9aee2"],["D:/Blog/public/dynamic-array/index.html","cfdb5d84feee028efd879e7e4e9ed773"],["D:/Blog/public/encoding-algorithm/index.html","ebb51c8f8454ea41da75f189fec134fc"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","ea68922d97f863668465d16203e13053"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","6dac0a800218aae680cc5df51e628d15"],["D:/Blog/public/factory-design-pattern/index.html","c8d2500ff4717b1daae2b4798c828ba6"],["D:/Blog/public/file-input-and-output/index.html","8433a2924ec955ed8ee6b54b2018d1f5"],["D:/Blog/public/flyweight-model/index.html","6c065698a1b8a6db6f5c508d1ef93ecf"],["D:/Blog/public/friends/index.html","73e6aa21ffc2dcc7459fb75f868ec276"],["D:/Blog/public/function-graphing/index.html","6772ce70f36ed8d24ba0c56529ce2329"],["D:/Blog/public/gateway-service-current-limit/index.html","71f2339021737c729f125ef95f8cbc6e"],["D:/Blog/public/gc/index.html","3e43aa25c4060e3669f67416f2f99f49"],["D:/Blog/public/generalized-integral/index.html","e6430c9854c94f46f4ab742a500d42e9"],["D:/Blog/public/google8102e2f35ce9e391.html","bbcd853f6b00a2cf0990f9f4e892781c"],["D:/Blog/public/gulp-compresses-static-resources/index.html","0aa3404998057271db6f338dbd94914b"],["D:/Blog/public/hash-algorithm/index.html","0354500e01ecc725db26edd868a41d99"],["D:/Blog/public/heap-sort/index.html","7e9ea5d46213e2d2978ce4dcc696909f"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","e1f9df5f1ff1584a1849df5059ec17cc"],["D:/Blog/public/http/index.html","c3aed8540d6cc0bd7a22a918d8589111"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","64e0da47df57d05e6d84deaed9bcb6c5"],["D:/Blog/public/index.html","6956d20db9f70630a3ff4cce1b32fe2f"],["D:/Blog/public/infinitesimal-and-infinite/index.html","7afebde165472dda841d7a0d1308d92e"],["D:/Blog/public/interface-isolation-principle/index.html","9b7df9d2112e538b09496200cf5f6a25"],["D:/Blog/public/intermediary-model/index.html","9154650832b85664d40bcfc15409b9d1"],["D:/Blog/public/interpolation-search-algorithm/index.html","9d9bd4d54663897f049554afe25bcb03"],["D:/Blog/public/interpreter-mode/index.html","284a20ce5b47e1602c290852085b18ee"],["D:/Blog/public/introduction-to-computer-network/index.html","78fd44883eab40a9de7dc435a7e26d46"],["D:/Blog/public/introduction-to-operating-system/index.html","f8e61d3a5336a13a33d924d93e3f2469"],["D:/Blog/public/inversion-of-control/index.html","5e53c7814da41b89b27a31d997109476"],["D:/Blog/public/io-Interview/index.html","adab6b33b4cc6642386c50e5a074ab21"],["D:/Blog/public/iterator-mode/index.html","9e9796928e1d3f04c6c0ed1e58dfbeba"],["D:/Blog/public/j2ee/index.html","b883bb6d16599ecc970d621a7c8697e9"],["D:/Blog/public/j2se/index.html","f2c2de27b97ed550e638cdeb23f48ef6"],["D:/Blog/public/jdbc/index.html","a738b960e3c24f4d69e32c99c9e3be7a"],["D:/Blog/public/jdk/index.html","0efdefc22dd5ed028c0cf6989a5085e0"],["D:/Blog/public/jmm-memory-model/index.html","762911a4fab51ab984eaf84fc71c09d7"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","4aaa0e3d8de5e48343408db9bc50c7d3"],["D:/Blog/public/jvm/index.html","a1cb251b331c77fd14182a092e271374"],["D:/Blog/public/law-of-robida/index.html","623575bc7339866aa402d8debff51785"],["D:/Blog/public/limit/index.html","da8b60addec1ed71947acb66c5f08f33"],["D:/Blog/public/linear-search-algorithm/index.html","60deb89cfc0999bada1c7ef28e51b9d6"],["D:/Blog/public/link/index.html","4111b2f7bdb57c68872867cbf968b1c7"],["D:/Blog/public/linked-list/index.html","e423c633a33850eb4948ed281e6f8198"],["D:/Blog/public/linux/index.html","5f54dd538c369a9755eb146b86b2ec1a"],["D:/Blog/public/liskov-substitution-principle/index.html","f77946a30d0d830bb1f99ea4756ca302"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","a21a6b652fa30391d9fcf88e4936e958"],["D:/Blog/public/maintenance-1/index.html","87973350d52e2e4da6bd37e472a32788"],["D:/Blog/public/maintenance-2/index.html","1ef8a0948eec31785e029056ef7c6649"],["D:/Blog/public/maintenance-3/index.html","c396f0ee14ac5eecbc48d84ea4bf0dde"],["D:/Blog/public/memo-mode/index.html","9d7361e23c857240930a55057ed2c565"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","8f0d13e438072d701b4143cc908e9bc5"],["D:/Blog/public/multi-function/index.html","6f857d2d38ed75c09defe7c68805b943"],["D:/Blog/public/multithreading/index.html","dfbd946f4976857feb55d9358582366f"],["D:/Blog/public/mvc/index.html","61795d1a6d1a4a0d010171a0577a062b"],["D:/Blog/public/mybatis/index.html","3c60f97b8fa8058b8fcc355b501e5727"],["D:/Blog/public/mysql/index.html","e5f1035b387f4d7db11395f23c6faf3c"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","95905c82438b311ee4a32cb6ad3ee5fe"],["D:/Blog/public/null/index.html","d8f4420e19170fe7f12afa0bbffd7cdb"],["D:/Blog/public/objectoriented/index.html","9f34c44aa7fc28d5d5d9cd2ac489953c"],["D:/Blog/public/observer-mode/index.html","775182ac311b396019bddec5eba6c987"],["D:/Blog/public/off-heap/index.html","d940da0a983bed663c255c0f7e4f26b6"],["D:/Blog/public/operating-system/index.html","e098c4f189cc717254dc7e6bec7b7a89"],["D:/Blog/public/page/10/index.html","312b479600c32d7a435dfd0293633add"],["D:/Blog/public/page/11/index.html","63703e17b390891b3094ff289a3d8694"],["D:/Blog/public/page/12/index.html","29882fca91b7c12152b1a70ab911bbc3"],["D:/Blog/public/page/13/index.html","f3693c3e34b3183f76b0f718a83c363c"],["D:/Blog/public/page/14/index.html","cc44752b53aeeed3af8f32636fad2657"],["D:/Blog/public/page/15/index.html","080257feef8b05ee80702e308630aaa4"],["D:/Blog/public/page/16/index.html","b3d8c81b29c3cf608dc9eed559e19e50"],["D:/Blog/public/page/17/index.html","5f7b7eb31296bf485baab1f3327f031c"],["D:/Blog/public/page/2/index.html","f14bd292e75e3f8cd0ed0b972982c147"],["D:/Blog/public/page/3/index.html","853de8e90dbe5d52b6be101272c66e11"],["D:/Blog/public/page/4/index.html","375b2cc35b4a9a46af21aca1f702558c"],["D:/Blog/public/page/5/index.html","cc99b2074b657eb7fdcc1f0a1421ec7c"],["D:/Blog/public/page/6/index.html","adc1d271ac95488027e1b42d1e8546ba"],["D:/Blog/public/page/7/index.html","fd8a6c96ec633f387e80fc1250deb498"],["D:/Blog/public/page/8/index.html","4c8eab6a7377974c65c98e1623784d51"],["D:/Blog/public/page/9/index.html","da9e65b09da1e4f360d04070eb3b7a6f"],["D:/Blog/public/palindrome/index.html","e630d56e82c57ec377118ef3267c7de4"],["D:/Blog/public/partial-derivative/index.html","a29e060900bdbf7bbf31294f1855b60e"],["D:/Blog/public/pass-by-value/index.html","dcc1847ded6891039162fc2c891c8f30"],["D:/Blog/public/pictrue-bed/index.html","a7e8a60752feccf6eb6da6f4009c6aba"],["D:/Blog/public/principle-of-opening-and-closing/index.html","a894394e3bfbc648bf7dc83dc3744278"],["D:/Blog/public/principles-of-computer-organization/index.html","d544960efb6ad2e9f071592f1de7cf43"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/index.html","af1e71205d904db2df18e67f69f4a2bf"],["D:/Blog/public/prototype/index.html","c5a7d231018fbfd6370271bcfebf5b76"],["D:/Blog/public/queue/index.html","ba67b980c0a71ebdcad53792d52aaf85"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","97e2f5fd82727f4151479d5e619c5575"],["D:/Blog/public/redis/index.html","9f1d8a96796c073d7147bcc8ded5ff0d"],["D:/Blog/public/reflection/index.html","1b12a0d863e3b0c384fc605ae626b2b3"],["D:/Blog/public/resume/index.html","8c108b76b0f2587a41a553b927130728"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","3e53ca4d57271b9de27a1be438801554"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","31ab6d1450dca554afea0ad1e78a52a8"],["D:/Blog/public/select-structure-programming/index.html","68e501270b9c6c51f342a88fea2de400"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","3ea7119dfa5d4807691302b521924b6a"],["D:/Blog/public/sequential-programming/index.html","3cafcfc646da80c7b8e441c4feb7f494"],["D:/Blog/public/series/index.html","720da259b302484c4c7f9f89d99a075c"],["D:/Blog/public/single-point-login/index.html","8a71a47443c9f3337f223fb5053c41ad"],["D:/Blog/public/single-responsibility-principle/index.html","2c403025186c1389af59ee143422294d"],["D:/Blog/public/singleton-mode/index.html","6eb7c7cdf339174b6c8ebff41789fc27"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","f4df0cf05965cb1f7db724685c7614ed"],["D:/Blog/public/sparsearray-sparse-array/index.html","4a88c195760d0c37c0f7b09bbc616bfe"],["D:/Blog/public/spring-architecture/index.html","cf3cf56d449b9017d0b73eb69776ba4f"],["D:/Blog/public/spring-relate/index.html","6087b158808c5adceb67400a27ebc7df"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","538f54ffd7e3e2402b957c6e76c3a196"],["D:/Blog/public/spring/index.html","79f8afca5527ee72f89ec58ca982f81b"],["D:/Blog/public/springcloud-alibaba/index.html","dff06e0bc1da89feae3240e7e8904411"],["D:/Blog/public/springcloud-bus-message/index.html","10708717289879b99c472bcdf1827bc6"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","3366c0d2655fc277189a886f990b9890"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","110fa6d087600f61217524b88c0499cb"],["D:/Blog/public/springcloud-stream-message-driver/index.html","c6668836c1ee7873f5eebd722fcf11eb"],["D:/Blog/public/springcloud/index.html","b918142ad072c827052596cb39e5c00c"],["D:/Blog/public/springmvc-environment-construction/index.html","e4818cc5038eb2cb72d1f3ae86607e63"],["D:/Blog/public/springmvc-work-stream/index.html","92140218a4fcac58a039368a7ffd1b86"],["D:/Blog/public/sql-injection-attacks/index.html","1bd0d42171bac955e2896c1949730b21"],["D:/Blog/public/stack/index.html","3523f070a6b0cdbc4cdfa6e615568879"],["D:/Blog/public/state-mode/index.html","f502ae8e6d61d64db2deaa75c52d6737"],["D:/Blog/public/strategy-mode/index.html","950a701c612854b4cebd3fd307227984"],["D:/Blog/public/synthetic-reuse-principle/index.html","4dc5ed7ba3d333e4506de0024cf8bf53"],["D:/Blog/public/tags/C/index.html","a0299bdd48c059c6265e4b6138948aaf"],["D:/Blog/public/tags/C/page/2/index.html","6bede8b3be64db94c2f5323ad058eb63"],["D:/Blog/public/tags/Concurrency/index.html","9f35d96f28547405ad0b80248ad2a796"],["D:/Blog/public/tags/DesignPatterns/index.html","7efec66f2082169f9d9f82e504742a77"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aead0ab22c7bf134e550739f2c33211d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2e22551126fc9d09c0583b5ecf7ffee0"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9df5afd448338fec72e55598595f8011"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","518f30fdfd965bd63f73fc1d02dcfc8d"],["D:/Blog/public/tags/Interview/index.html","a624b4339819f538d0e851de81348876"],["D:/Blog/public/tags/Interview/page/2/index.html","598232e27ce555dff6f109040ead4e73"],["D:/Blog/public/tags/JVM/index.html","92d6c8fb9ed239630cf999238313ecf0"],["D:/Blog/public/tags/Operating-Systems/index.html","d3e7cf52da4911b30cc81006ded210f6"],["D:/Blog/public/tags/about/index.html","85377009f8d0dcb84b3cf3c051c6ffc1"],["D:/Blog/public/tags/ad/index.html","0096c9cccfeb78653b5da551d91fe23c"],["D:/Blog/public/tags/dataAlgorithm/index.html","8c901710033b744ba33ccc1725306d38"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","a1fcab41101f93eafea773c4f3514596"],["D:/Blog/public/tags/docker/index.html","b641c2e5b66c5ff18cccb847af7fbf2e"],["D:/Blog/public/tags/frame/index.html","051bd7058ab8ce6030c081e1a0f21a2f"],["D:/Blog/public/tags/front/index.html","69e2c9c4f01794640226ffd64dafacef"],["D:/Blog/public/tags/index.html","a55480b8a4a444a3442ff1085c1b5836"],["D:/Blog/public/tags/index1.html","3f211f6273ac6f6d0dbb999ca056c676"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","64809de15e711e36062fb8aedac4340f"],["D:/Blog/public/tags/linux/index.html","cccf95439399ccec099a90ef83e64619"],["D:/Blog/public/tags/maintain/index.html","0f5911ef9f1cbb6d3fe2b533dc87928f"],["D:/Blog/public/tags/math/index.html","8bea8c2b2f5e0e2871e1b2050dc4aa6d"],["D:/Blog/public/tags/math/page/2/index.html","b9c865c6cc3bb46c13dada9a6b1986fe"],["D:/Blog/public/tags/network/index.html","c95a030768844fdd8116c67e4c363bec"],["D:/Blog/public/tags/project/index.html","2002a3e99360c01555b11a00335d8fb6"],["D:/Blog/public/tags/resume/index.html","42708916a636bdc9b197e9dc1e250b1f"],["D:/Blog/public/tags/safe/index.html","5f6923b1e86572d607e8d5193904f405"],["D:/Blog/public/tags/sql/index.html","c4dbb9a4ee4203f5b835b57633950588"],["D:/Blog/public/tags/test/index.html","0701538a070af0ec77c82b189d0da932"],["D:/Blog/public/tcpip/index.html","26bf9e16a2ec774914bdf4e27b813aaf"],["D:/Blog/public/template-method/index.html","8648530b63658c41d0040e79260d1328"],["D:/Blog/public/test-case/index.html","02928f54e28562ac55c9556f6dbbbe06"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","63435854a5e5218dab85d0b2dacca33e"],["D:/Blog/public/thread/index.html","6a2e6162014d37496726c2da86479433"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","74a73566042f4241da1ba2f2eeb6b5f8"],["D:/Blog/public/ubuntu-set-ip/index.html","69eb8fd847a96be0edfad50af05e4036"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1f6764b378f538eeb176cb989f319df0"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","51dabadf2c0fd5584f65576709a47b1d"],["D:/Blog/public/users-create-data-types-themselves/index.html","5b4eecfe9b5b5826ac1d9abbe6bd09e0"],["D:/Blog/public/visitor-mode/index.html","77a7cc161c091dac8e3d62be21103502"],["D:/Blog/public/xml/index.html","dd12ed5732810405325bd713d93f4583"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","a63035c866b8b4142a9e2e194140ae29"]];
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







