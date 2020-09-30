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

var precacheConfig = [["D:/Blog/public/404.html","8b416a3fed5950ca215ef00b8800eaab"],["D:/Blog/public/7-sorting-algorithms/index.html","572c4e45c5543259dedf31ddc533b03a"],["D:/Blog/public/adapter-mode/index.html","17d1243390dc99e5f6a530884d16315b"],["D:/Blog/public/agency-model/index.html","222e8acb5066ea046485f93a75d6e392"],["D:/Blog/public/appearance-mode/index.html","6ce787919a1010f313eaf0def814cab5"],["D:/Blog/public/archives/2019/01/index.html","d629b6a24afc89aba2fd36be359b74f5"],["D:/Blog/public/archives/2019/07/index.html","da8ac47feedef8b3824288dc1844a94d"],["D:/Blog/public/archives/2019/12/index.html","c5191959f28afaa49febd81cf8a2924d"],["D:/Blog/public/archives/2019/index.html","ab46793e659556b4ff5922a7e0e1e762"],["D:/Blog/public/archives/2020/04/index.html","4047a457b6cd01277bc244d3e3f6509c"],["D:/Blog/public/archives/2020/05/index.html","f115fa1f39dfb2a52390c0c44f6be078"],["D:/Blog/public/archives/2020/05/page/2/index.html","5f6818a250eff96a653a9e518e5208fe"],["D:/Blog/public/archives/2020/06/index.html","179f3394cb97c6f1809804c3f929fd4c"],["D:/Blog/public/archives/2020/06/page/2/index.html","6f345b66b6ae9d4d2a59ea98e263837a"],["D:/Blog/public/archives/2020/06/page/3/index.html","7f2f1c03079f03ef908e636868999b42"],["D:/Blog/public/archives/2020/06/page/4/index.html","54df7e956e31e4e16b4646d49902be0c"],["D:/Blog/public/archives/2020/07/index.html","432bc79ff89becb19727b9bf6a2034c7"],["D:/Blog/public/archives/2020/07/page/2/index.html","99a00cd1e46ecb4f186edfd891efea65"],["D:/Blog/public/archives/2020/07/page/3/index.html","00802d66743a2aae3e70e67fb6cbba6d"],["D:/Blog/public/archives/2020/08/index.html","cb38534e549165baae5bf41ffc9bfa6a"],["D:/Blog/public/archives/2020/08/page/2/index.html","81a094ff5dacea936a9bae2c4334ed8c"],["D:/Blog/public/archives/2020/08/page/3/index.html","c1c2a1bb464516adef7a05827b8e9ab7"],["D:/Blog/public/archives/2020/09/index.html","fe9e407f7ac0a56f78121643bfc7f5df"],["D:/Blog/public/archives/2020/09/page/2/index.html","75bd4f57a497ecaae59c9fbe9bd736f6"],["D:/Blog/public/archives/2020/index.html","0f68c0b620fd15d49dda90687d59e0bf"],["D:/Blog/public/archives/2020/page/10/index.html","c5eab31048c37e6c546bd72e2c5b8975"],["D:/Blog/public/archives/2020/page/11/index.html","f25776424b8faeccaf1b77a5b717e99e"],["D:/Blog/public/archives/2020/page/12/index.html","8dd1e281dcb100c71ce46c1c1e6f15c0"],["D:/Blog/public/archives/2020/page/13/index.html","18aae1f531252e743531fab519596f9d"],["D:/Blog/public/archives/2020/page/2/index.html","8e152d240b8d86ec9ee4db035059515b"],["D:/Blog/public/archives/2020/page/3/index.html","244a07b09d640fb30d42766162350ac5"],["D:/Blog/public/archives/2020/page/4/index.html","6d897f903f8788ea3467bb6bf426f5e4"],["D:/Blog/public/archives/2020/page/5/index.html","a042c3bd43eedb3a3b4d29edc4d354d7"],["D:/Blog/public/archives/2020/page/6/index.html","d01956d6482b215a0a6f555df6017c25"],["D:/Blog/public/archives/2020/page/7/index.html","a6f061a982652a76fd55e10cee8d2138"],["D:/Blog/public/archives/2020/page/8/index.html","cc073eb7e261d33cfc47a333b5a737ed"],["D:/Blog/public/archives/2020/page/9/index.html","47621da8ab27b375fd394c7ccbb4ef3d"],["D:/Blog/public/archives/index.html","9ccbd36e3246a383f957f7522ff47d90"],["D:/Blog/public/archives/page/10/index.html","506e2eb6fd9838d6787423867bde57ff"],["D:/Blog/public/archives/page/11/index.html","b46ec5aa80ebfd3e949cfc95ff58dec9"],["D:/Blog/public/archives/page/12/index.html","1782c60dd4c4f04ecc4fa3b37f6f2d70"],["D:/Blog/public/archives/page/13/index.html","182e3d2a40c0921b1cc5ab08e3cb7fb4"],["D:/Blog/public/archives/page/2/index.html","9e006f916ff13e31c9617aa4b132ad02"],["D:/Blog/public/archives/page/3/index.html","e22e2927ec66b2bd0be9380c64071007"],["D:/Blog/public/archives/page/4/index.html","cac22aea65b1692597618b5ab8f919c0"],["D:/Blog/public/archives/page/5/index.html","42cbe0de480b4e0522004873b95b5e14"],["D:/Blog/public/archives/page/6/index.html","5f9885788cc504107bcb62ffc61e7242"],["D:/Blog/public/archives/page/7/index.html","9e75272034c3d5736168f62b7511b1b1"],["D:/Blog/public/archives/page/8/index.html","c03e5bf513f306a4bbfef8fb4b61f003"],["D:/Blog/public/archives/page/9/index.html","c646c8fa76a87481a4f449c406a3c07b"],["D:/Blog/public/array/index.html","d347b43d209c902dfa6a3cf92571a69e"],["D:/Blog/public/binary-search-algorithm/index.html","8d1421408e78792c9ec861da97938e16"],["D:/Blog/public/binary-sort-tree/index.html","9081fd0e7e264b1e2183c93de61d2eb2"],["D:/Blog/public/bridge-mode/index.html","c901dcb643621ce128403febb396a24d"],["D:/Blog/public/builder/index.html","6c928d3b3101453bbe4e0a8d9d3ed835"],["D:/Blog/public/c-pointer/index.html","0e264f7571bb5d783cb96c4c03dc090f"],["D:/Blog/public/calculus/index.html","fea3a355b9823a5b960857a4e390be7e"],["D:/Blog/public/categories/C/index.html","54975874da131a40108b0a6b20105529"],["D:/Blog/public/categories/SpringMVC/index.html","556656350d0f26a55b2516a381239d21"],["D:/Blog/public/categories/index.html","df8e1b52bbbc0c53bce00033b5560776"],["D:/Blog/public/categories/linux/index.html","2b700886c71017ccc764ebebf9ae048b"],["D:/Blog/public/categories/分布式/index.html","1f85ed4a94dd652c344025dd8cb67957"],["D:/Blog/public/categories/分布式/page/2/index.html","80a482aeae5c17dec0bbddf45a3a14bc"],["D:/Blog/public/categories/前端/index.html","606dc4c3ced7f125e75ae4295e928ed3"],["D:/Blog/public/categories/设计模式/index.html","7b9540b3aba6049e623eab22496ecd8d"],["D:/Blog/public/categories/设计模式/page/2/index.html","573442bd07706bff8e84d16a0a048295"],["D:/Blog/public/categories/高数/index.html","3ec85ef466527d98ba9a7452e53293bc"],["D:/Blog/public/chain-of-responsibility-model/index.html","9eaa317fc0637e49f8f4bfdb3a5e6186"],["D:/Blog/public/chinese-and-english-switching/index.html","49f4a537cb4cbe4260a19beef1007484"],["D:/Blog/public/combination-mode/index.html","3b376abd35f58fbbee749eec069c8ca4"],["D:/Blog/public/command-mode/index.html","c57dbe6b3e45a66c616bb37fe209295e"],["D:/Blog/public/common-commands-of-unix/index.html","da586797b336303da92e68efc2a76fa4"],["D:/Blog/public/computer-network/index.html","0bcf7a90aaa61f8f907ca9a2ab1c76ed"],["D:/Blog/public/concurrency-principle/index.html","a0169ef1f40b5e87a740ea46d7c832ad"],["D:/Blog/public/continuous/index.html","6a323d7fa7935acc4876bebafca90fc5"],["D:/Blog/public/contract/index.html","5855234a4315810f5c698843fce843b1"],["D:/Blog/public/css/index.css","6c18ab9df0af81947e20f7d4cee97ee2"],["D:/Blog/public/css/var.css","53cd3b2b190d4d378b2ad4e54551dcb2"],["D:/Blog/public/data-structures-and-algorithms/index.html","8e3b93d4643751f7420c04e40fef1ceb"],["D:/Blog/public/decorator-mode/index.html","44aa79f4f97b56da22f2f6f85e286942"],["D:/Blog/public/definite-integral/index.html","199d39886a43aa57a1498f4ca416c903"],["D:/Blog/public/dependence-reversal-principle/index.html","7d304800757f0103e91ddffa816a89c8"],["D:/Blog/public/derivative/index.html","74521109bfce8fbb2af9c171e7ebc9a5"],["D:/Blog/public/design-patterns/index.html","3470bac74fa0e4baa65e1be7971c1184"],["D:/Blog/public/differential/index.html","ae8a67ccb5f7346ace688cc431280cd1"],["D:/Blog/public/dimits-law/index.html","655133373f4678ac004deeacc19dd27b"],["D:/Blog/public/docker-virtualized-container/index.html","798175f352a34e5e4ac5cab37f3f7320"],["D:/Blog/public/dynamic-array/index.html","12507f1e104e5f33809397bf981111c9"],["D:/Blog/public/encoding-algorithm/index.html","5f25058a2b25077d03a094438234e206"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","abb8a41a4bffe3a6aee5335bfb94e54e"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","005877d3190744a5646666c0ca35fd0b"],["D:/Blog/public/factory-design-pattern/index.html","c93385fb3458ae331b6e9a8be1ed2d28"],["D:/Blog/public/flyweight-model/index.html","e2768af1d32e8d8c9d613a6cba358131"],["D:/Blog/public/function-graphing/index.html","ccc7b9c97efb3a5b580d1b5373a779ac"],["D:/Blog/public/gateway-service-current-limit/index.html","9bfb0fb3951b08c397d5511e8f74a21a"],["D:/Blog/public/gc/index.html","f0c9eebb1f1dbb1070db7025f7b09133"],["D:/Blog/public/generalized-integral/index.html","1f7c992d2305f28c356d17ff719dd6bf"],["D:/Blog/public/google8102e2f35ce9e391.html","6a80bd09704ea7ad727f8e1094eed6d9"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6fee5eed3f6d8f238693e80ba80645a9"],["D:/Blog/public/hash-algorithm/index.html","46992b296f88893e673aa389ce0ce3a7"],["D:/Blog/public/heap-sort/index.html","ce686a36aa6b3a3d25456c38e5a577fd"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","ed8e2a5fbf434549c66cc3f7960b7efd"],["D:/Blog/public/http/index.html","a0a4f2cb6bbcab9addeb37120e7eed7b"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","e0588f92c3c695b893107b9774c655b5"],["D:/Blog/public/index.html","cd8cbf81a7989411a339b8e7db2b24c5"],["D:/Blog/public/infinitesimal-and-infinite/index.html","f2dfffbc9e4c96b6edcf966c2e4f9e05"],["D:/Blog/public/interface-isolation-principle/index.html","828b7b12ed22a2b462578c8c2978bed3"],["D:/Blog/public/intermediary-model/index.html","f6c0104b0e5fbf570f01c77cfbbd056f"],["D:/Blog/public/interpolation-search-algorithm/index.html","e05e6f533bd1dc436e398f7a1fc88432"],["D:/Blog/public/interpreter-mode/index.html","dc9e6f133f7f76d90746942653dcd1c6"],["D:/Blog/public/introduction-to-computer-network/index.html","a0959e5d02a5a037ec2383df6133be82"],["D:/Blog/public/introduction-to-operating-system/index.html","cddb9c222db21d8b8bddba22980492cd"],["D:/Blog/public/inversion-of-control/index.html","c63dc876591238c2104d7ea72dd63904"],["D:/Blog/public/io/index.html","230ac40638eea04f4ef5b564de6dd554"],["D:/Blog/public/iterator-mode/index.html","706a347e0ea689646be70e269101abb2"],["D:/Blog/public/j2ee/index.html","949f357652d0282d188a55714408be10"],["D:/Blog/public/j2se/index.html","a27d410aa65727810029cd02173f8311"],["D:/Blog/public/jdbc/index.html","1e226a36e9b2da5b7183f00ebc896ea4"],["D:/Blog/public/jdk/index.html","c5814e4b13e75d27a5a0b9acd10b33a6"],["D:/Blog/public/jmm-memory-model/index.html","9dbca52b4097dcd11e46093f5650e7dc"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","28060e8e36048a160cbe617fc4c40876"],["D:/Blog/public/law-of-robida/index.html","2a663202dbeb44a249e686635f025090"],["D:/Blog/public/limit/index.html","ae3c1a6b81f44325a430e0be5cb1b570"],["D:/Blog/public/linear-search-algorithm/index.html","778de741d98f33b8b3e664f5d0504b7c"],["D:/Blog/public/link/index.html","a1676ddd8ddb04ee674367f359cb4bc5"],["D:/Blog/public/linked-list/index.html","aadc126b60ae2b8b1356182bfd73c5cc"],["D:/Blog/public/linux/index.html","28e9d9e112f710bafdff64af0119bb14"],["D:/Blog/public/liskov-substitution-principle/index.html","a04e2663017d9b88976261b44abae755"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","15e3ff873800c89113683214b9c4c02e"],["D:/Blog/public/maintenance-1/index.html","f882ef1488def66a4df8e3de11f7ef88"],["D:/Blog/public/maintenance-2/index.html","e48ba952a5325506efcc20e9fe57283c"],["D:/Blog/public/maintenance-3/index.html","d7a37fddc28dde99930f839ac4462257"],["D:/Blog/public/memo-mode/index.html","10de836d3685e10a3a5ed7d63edcc758"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","d143f6f6635c89bcb4dd3fdfc576e77f"],["D:/Blog/public/multi-function/index.html","75eda8d9c5b3ee169c354b5cfed722be"],["D:/Blog/public/multithreading/index.html","0e0a48cff152534b966cddf70025448a"],["D:/Blog/public/mvc/index.html","dde2d99c7d173adecf7c17efc61bda01"],["D:/Blog/public/mybatis/index.html","916dd1e4ef76dfa8a8f14c40ca8fdb52"],["D:/Blog/public/mysql/index.html","eb55dbbfe255d7b18558a63b54e0c957"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","69b6fc84a0121b7623368663268fe1c6"],["D:/Blog/public/objectoriented/index.html","8b711218fc94904857c3eeffdb9fc079"],["D:/Blog/public/observer-mode/index.html","fd06b19f0dbf0a3daab630d9254e836a"],["D:/Blog/public/operating-system/index.html","0924f312b350be9140f95cc5266dbc16"],["D:/Blog/public/page/10/index.html","dca672a1ff4b1c26e30f75ae3998e275"],["D:/Blog/public/page/11/index.html","bc683908285f37e2d313176475ba3bb2"],["D:/Blog/public/page/12/index.html","cc970369cdced0429f724cc68e70e38b"],["D:/Blog/public/page/13/index.html","eae573ba359839d36f4e84efd8a009ad"],["D:/Blog/public/page/2/index.html","549d4592e04261a0903cb707604f1874"],["D:/Blog/public/page/3/index.html","dffa926e6e938887f271441923e98e3b"],["D:/Blog/public/page/4/index.html","1ca8aeeb43f593258fdb152195291a14"],["D:/Blog/public/page/5/index.html","7e9d3b67f5fe266533451015a8d33c7f"],["D:/Blog/public/page/6/index.html","805f8a170e252e2707ec31f9588e0840"],["D:/Blog/public/page/7/index.html","a42779630ec170487d8a954ce0c6c531"],["D:/Blog/public/page/8/index.html","ba30ffb99b2cdef81052a293321a9a5f"],["D:/Blog/public/page/9/index.html","751a38d4e331c1252d6561caddf8be5b"],["D:/Blog/public/palindrome/index.html","1564c5885d95f2f37d11e535864028d3"],["D:/Blog/public/partial-derivative/1601445508700.png","c0592adf850017f14e72c6cb0d56cb9c"],["D:/Blog/public/partial-derivative/1601445566320.png","11a127ee7ff375b6540e713d881033ba"],["D:/Blog/public/partial-derivative/1601445908951.png","3ead02f6b3992910a00956e71272f8ca"],["D:/Blog/public/partial-derivative/1601483632915.png","5e818d640d77241ce1ab47881cd466e5"],["D:/Blog/public/partial-derivative/1601484198275.png","5f1fa2d5cdbb5b3cc0c1eac0773aa15f"],["D:/Blog/public/partial-derivative/1601484542681.png","fe155321a649c90555e9ba5ad1a45ccd"],["D:/Blog/public/partial-derivative/1601485323277.png","1b38d02dbda9326078bcb2e1a83355e6"],["D:/Blog/public/partial-derivative/1601486051149.png","ed5bd9331f8dad4995ea40609784dd8f"],["D:/Blog/public/partial-derivative/1601486294681.png","4659170f79953f4b52b4b0e93da7d2d8"],["D:/Blog/public/partial-derivative/index.html","c513f499f90989c100a7161c5e0b1cf5"],["D:/Blog/public/pass-by-value/index.html","02c8cd0b12cb55ca11500a71d1dc5315"],["D:/Blog/public/pictrue-bed/index.html","9a1ebcdba7ee3ce1240f328e6ae99949"],["D:/Blog/public/principle-of-opening-and-closing/index.html","4ea27bc283fdebcba6a83a5709acbff3"],["D:/Blog/public/principles-of-computer-organization/index.html","25d52a290c6b0c0ce01dd76f213fb6eb"],["D:/Blog/public/prototype/index.html","46f536bf0464bdac4ccee40b8af22dab"],["D:/Blog/public/queue/index.html","51287ac9bfa0b9892aced04986bba685"],["D:/Blog/public/redis/index.html","7366bb8d0d57d0ab99e4225521d93600"],["D:/Blog/public/reflection/index.html","3c12e2b40fb800993de27ed00d6336d9"],["D:/Blog/public/resume/index.html","72818b1061f5622fc7621812432312ed"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","a5fdd8af81b4efbb0399d56576f313f4"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","803a3a74e4231502686451292353962b"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","e267af49e4a45ed54c5c21d99fe19354"],["D:/Blog/public/single-responsibility-principle/index.html","034ca5f785eedc926b704695c8115b1f"],["D:/Blog/public/singleton-mode/index.html","567487559ae7896dd7d4a8f2efefdae3"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","1eb264360178452c03d4bc8df50e5b80"],["D:/Blog/public/sparsearray-sparse-array/index.html","85a4bda4459563f8bdc70e90190a4e09"],["D:/Blog/public/spring-architecture/index.html","e0d280578d25feaf3d8ad3ee4bb05b81"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","a320a12edd5e0cecaaf2a16ae045726b"],["D:/Blog/public/spring/index.html","d9072cfd35e3635e60e9ab10fab4545a"],["D:/Blog/public/springcloud-alibaba/index.html","7e0b5c2d4b1e5f0b38158d5cc48201ea"],["D:/Blog/public/springcloud-bus-message/index.html","08b0232a290c5118483087e36dada17e"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","cde7d6963d1f9ad0b33c6949a44acd9e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","37f34a0314aa852eea431610596e8366"],["D:/Blog/public/springcloud-stream-message-driver/index.html","5986fd9b767ad764da78fcd5f941e990"],["D:/Blog/public/springcloud/index.html","bacc2f9d2c2032f28c47c9746a4258b2"],["D:/Blog/public/springmvc-environment-construction/index.html","97ea4c1db83f7bbf15c6f79ed253a506"],["D:/Blog/public/sql-injection-attacks/index.html","52c46cbe2833061b0b0523cc8a307eda"],["D:/Blog/public/stack/index.html","87a0cd8dc41aa7541759bf69838d6841"],["D:/Blog/public/state-mode/index.html","aa9a658956fd052a059dbc9c55cc2cd5"],["D:/Blog/public/strategy-mode/index.html","a4001a64f0825b7ff015408d11b3d3ee"],["D:/Blog/public/synthetic-reuse-principle/index.html","0237acc34ee87a9b796fef43c6ab97f3"],["D:/Blog/public/tags/C/index.html","94e73bf5a43fcc6c4e61d95a41a0542f"],["D:/Blog/public/tags/Concurrency/index.html","07d5e699ca852d30ec6fea716020f768"],["D:/Blog/public/tags/DesignPatterns/index.html","ac94f150a0ef80e9b17f5646447b4e08"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","cf09bf4fed30908d71b27cb8d73de0c1"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8662593ded1dec6383c0ed8a3799d94e"],["D:/Blog/public/tags/DistributedMicroservices/index.html","d4ef44177de10cde6f075bfaf7e6155e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","2fff91466250cdb66590efee8d046919"],["D:/Blog/public/tags/Interview/index.html","0e564ef4308a25573497ab08ab9b9427"],["D:/Blog/public/tags/Interview/page/2/index.html","07f3ac97bf1469c144a31fa09d9cec4b"],["D:/Blog/public/tags/Linux/index.html","2f852c7e239fc9630f5008db8bf844de"],["D:/Blog/public/tags/Operating-Systems/index.html","8cad707b3b01ea441b35e2039ecc8510"],["D:/Blog/public/tags/about/index.html","b9c9223c81af5d4303d58a4045568753"],["D:/Blog/public/tags/ad/index.html","18857f382cc0c1473a8feb9da931aa5c"],["D:/Blog/public/tags/dataAlgorithm/index.html","3941099efe4f5ff19b9535139e8d6793"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","3867af06cc2b688e05224efc46744ab8"],["D:/Blog/public/tags/docker/index.html","a59af26c11faa5fc66f1e416c0fe3cc9"],["D:/Blog/public/tags/frame/index.html","b49edfa2dd8fc70b1d6d1131d568caa3"],["D:/Blog/public/tags/front/index.html","d5f878bbed86f2b05c72a37bbda4b6e4"],["D:/Blog/public/tags/index.html","d9df38d1b65dc8ab99eb67a7b55db4ae"],["D:/Blog/public/tags/jvm/index.html","0252fa4de996f145946e96fb7b106390"],["D:/Blog/public/tags/maintain/index.html","d24c2ebd0487df30174af95862f2f006"],["D:/Blog/public/tags/math/index.html","d3f3962658f6593b85c20e270be26612"],["D:/Blog/public/tags/math/page/2/index.html","24de76d3224d746114b51d0fd8b22497"],["D:/Blog/public/tags/network/index.html","15cba131e19a8cdec6e4fea9254960c5"],["D:/Blog/public/tags/resume/index.html","04157bdcbe1a9abb0f245a8adcadc825"],["D:/Blog/public/tags/safe/index.html","83ae13a669c4e3c6197f6151ad9c21ba"],["D:/Blog/public/tags/sql/index.html","b08d6fb05130c2919c520ac257b2841b"],["D:/Blog/public/tcpip/index.html","319d1401079802798d79e86c6f138ee7"],["D:/Blog/public/template-method/index.html","eb5bf6e936c33603c8f6958a78326445"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","35f7ddfb3e6b348d80d9f199a19015e6"],["D:/Blog/public/thread/index.html","4aeb137570418e3ef729986147e3513a"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","d00178941acc968c4834356f467e04c9"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","9604d79ca4ec5b5b028f42cdeb9e213f"],["D:/Blog/public/visitor-mode/index.html","2da9747cd989982ad8e8c9586c0464cd"],["D:/Blog/public/xml/index.html","da1421d14747282a738d14a37d740ab8"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","f0451ad06fb5819b20af543bb3dfd42c"]];
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







