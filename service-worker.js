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

var precacheConfig = [["D:/Blog/public/404.html","a8fce4cf892615a05a96c21ca3874386"],["D:/Blog/public/7-sorting-algorithms/index.html","25d5f3fa91a4fc8845f80da56409e9f1"],["D:/Blog/public/adapter-mode/index.html","7616aa9d00a49fa4c8a7b21d63a7cf10"],["D:/Blog/public/agency-model/index.html","55c1c82e36d4787e1134fd43537f011e"],["D:/Blog/public/appearance-mode/index.html","9131590439e4817351872afcff645689"],["D:/Blog/public/archives/2019/01/index.html","0b21978fc26d08facd9a2367d5938f0f"],["D:/Blog/public/archives/2019/07/index.html","6695a268382def32fb29f9d1529233ea"],["D:/Blog/public/archives/2019/12/index.html","71ecf9d80f0777412432a9305b27ab1b"],["D:/Blog/public/archives/2019/index.html","3d3484fcd8f012364720761572187b6a"],["D:/Blog/public/archives/2020/04/index.html","1ffb06e9473d80de9629da2ad8b8f768"],["D:/Blog/public/archives/2020/05/index.html","d152d5f9b337e8b20f6ec7a07c1d69ae"],["D:/Blog/public/archives/2020/05/page/2/index.html","34a960d68ed401b47a6877fd8545a246"],["D:/Blog/public/archives/2020/06/index.html","0b5ac402ccc9c9c22e2ba7c9b1372077"],["D:/Blog/public/archives/2020/06/page/2/index.html","07dd36e25399caab23d67f2127bc9be4"],["D:/Blog/public/archives/2020/06/page/3/index.html","bf4da7b97fecf77c435775a65947e1ac"],["D:/Blog/public/archives/2020/06/page/4/index.html","6e30477f97f18980e3d055a29e063980"],["D:/Blog/public/archives/2020/07/index.html","01ef669ec48887ae18edd89465844658"],["D:/Blog/public/archives/2020/07/page/2/index.html","8dc232a700fe27519e1d75877d780b5d"],["D:/Blog/public/archives/2020/07/page/3/index.html","380e2d65de05285e013bc71cf37b2777"],["D:/Blog/public/archives/2020/08/index.html","e9982734e0c8a38b727d861325f8dc70"],["D:/Blog/public/archives/2020/08/page/2/index.html","cfa43d6390b56d2e08c5d965ce6ac60d"],["D:/Blog/public/archives/2020/08/page/3/index.html","a0b91c7bbda615fbfe79d88fc5ebf2bb"],["D:/Blog/public/archives/2020/09/index.html","09259c7c0e3d880b0e68c6367bcb277a"],["D:/Blog/public/archives/2020/09/page/2/index.html","cc7505ef734cd71ba07f424ad39bdefb"],["D:/Blog/public/archives/2020/10/index.html","a6a86914eaaf449c17ad084189a63f1a"],["D:/Blog/public/archives/2020/index.html","cae22d85622cbed0220a15b9f9134c09"],["D:/Blog/public/archives/2020/page/10/index.html","6ae00923fdb579c7152e1d026cb53ce8"],["D:/Blog/public/archives/2020/page/11/index.html","65c07f35860a6228a40d0f4332c23adc"],["D:/Blog/public/archives/2020/page/12/index.html","f744296076f6058c436069929971121b"],["D:/Blog/public/archives/2020/page/13/index.html","5f05fd1863682f5d9101c37bc2a26e13"],["D:/Blog/public/archives/2020/page/2/index.html","40f70f96edc5e4fb570b49459b0bf3de"],["D:/Blog/public/archives/2020/page/3/index.html","442c2dd975fcb8e3c6224c5fa3528a73"],["D:/Blog/public/archives/2020/page/4/index.html","a665783fcc2f60ec8f189d5be904f2c1"],["D:/Blog/public/archives/2020/page/5/index.html","97ceb9402eebd372b1bd352a1871c345"],["D:/Blog/public/archives/2020/page/6/index.html","356ce65aa44b343362423baafa339224"],["D:/Blog/public/archives/2020/page/7/index.html","796b1c9b6c3e938de5753f7879b9993e"],["D:/Blog/public/archives/2020/page/8/index.html","fe683095f68f7bf75f93dddd6dcfb825"],["D:/Blog/public/archives/2020/page/9/index.html","287d03fddcec81d849002ddbcfb31024"],["D:/Blog/public/archives/index.html","f7f1a80d820910ce2f770ee3d455691e"],["D:/Blog/public/archives/page/10/index.html","75ea7c14e54177f4999606652741f7c3"],["D:/Blog/public/archives/page/11/index.html","2a17770eaef66e236387acc7d2b51d48"],["D:/Blog/public/archives/page/12/index.html","b036642660982908e2fe3350de0ab6a4"],["D:/Blog/public/archives/page/13/index.html","8b66ba65770955d5c160c2e53e064a58"],["D:/Blog/public/archives/page/2/index.html","3eeee9209d6c995b8e59ace823efb3ac"],["D:/Blog/public/archives/page/3/index.html","dc2e9ba933e3546ee62fac71ea195547"],["D:/Blog/public/archives/page/4/index.html","c4076f580a43198ef0496b7ab08db1ac"],["D:/Blog/public/archives/page/5/index.html","bb02a5a889f5007604e99accb98761d2"],["D:/Blog/public/archives/page/6/index.html","f0352cf1f6cf7d3ea7b53549b29983fa"],["D:/Blog/public/archives/page/7/index.html","040ea6e19d5e9afc6fbf7f0a06ae491b"],["D:/Blog/public/archives/page/8/index.html","af180ece1433a06567d7fcf920af4b27"],["D:/Blog/public/archives/page/9/index.html","0aada278badc94b8adf326141504d8bd"],["D:/Blog/public/array/index.html","0c6fb2787899e13013ec9b62cfec3f74"],["D:/Blog/public/binary-search-algorithm/index.html","ca4e2eca114d8c4ded7a17be27598d67"],["D:/Blog/public/binary-sort-tree/index.html","a98e0e53a1638c12ea8012920b803748"],["D:/Blog/public/bridge-mode/index.html","16492977de36d282b10ad1d091dba8d4"],["D:/Blog/public/builder/index.html","f8ff8683e2bb9c352a1fe67d42e3ef65"],["D:/Blog/public/c-pointer/index.html","37b1f317093d828ac22f3ce5e2250d93"],["D:/Blog/public/calculus/index.html","9809a16eadf16bf5ba86ffc2afa8c7a0"],["D:/Blog/public/categories/C/index.html","89fa30abc1da2d884ec9f7091aa2c3ae"],["D:/Blog/public/categories/SpringMVC/index.html","7f275e89584a5f782573d0e7e0d29a07"],["D:/Blog/public/categories/index.html","23b3d361aaa0a95d0bc7fcfbe7de47f8"],["D:/Blog/public/categories/linux/index.html","62f5aee0848ff2cfb9976b677745ab3c"],["D:/Blog/public/categories/分布式/index.html","2386f7926a324a5c5cee26aec67ed90c"],["D:/Blog/public/categories/分布式/page/2/index.html","2745bfe4db1a2fd78ced28bb099e646d"],["D:/Blog/public/categories/前端/index.html","7320cefbf12834a6db77073bfb5755b1"],["D:/Blog/public/categories/设计模式/index.html","e1b6ced600b6729b8d348bb6758054bd"],["D:/Blog/public/categories/设计模式/page/2/index.html","07e60a556495b765e5d0e51737ead25f"],["D:/Blog/public/categories/高数/index.html","1dadf59e93fbcb17a01ce63cbf6cf711"],["D:/Blog/public/chain-of-responsibility-model/index.html","fbcaaf482c6426b2dce184c9b42347e3"],["D:/Blog/public/chinese-and-english-switching/index.html","8c556eea4477d4534b2fc3d09264cc80"],["D:/Blog/public/combination-mode/index.html","4b41270f8ab61807f3d0e9994a92352b"],["D:/Blog/public/command-mode/index.html","c98f79fe3307185d0484079963cc3be4"],["D:/Blog/public/common-commands-of-unix/index.html","6c15d084bd26c1b485b8bd7db92acc87"],["D:/Blog/public/computer-network/index.html","65cab61a92586d38ff4dffe1aedea0e2"],["D:/Blog/public/concurrency-principle/index.html","01c5462cc40878de822068c0feabd6df"],["D:/Blog/public/continuous/index.html","93505b8d08063107ef3b69ffc144aa40"],["D:/Blog/public/contract/index.html","bbaa54ac27015b71e7d832b4a06f5e13"],["D:/Blog/public/css/index.css","c3a837fb6793e8ad6063ab17ba412039"],["D:/Blog/public/css/var.css","c5b800fafa56ee07fa708079d544fe12"],["D:/Blog/public/data-structures-and-algorithms/index.html","fb0852d4af1abd53914c05554452ada5"],["D:/Blog/public/decorator-mode/index.html","e68309370d22986b21dad9e5b499b22e"],["D:/Blog/public/definite-integral/index.html","4818a0552e45c67c7a621975d4287689"],["D:/Blog/public/dependence-reversal-principle/index.html","c20b7aff51ac7d1e37eebbcae70e40a5"],["D:/Blog/public/derivative/index.html","5d98fd8d21d627073f2b6034dfbeebef"],["D:/Blog/public/design-patterns/index.html","879a11291e143b79096e45bce3efd8f9"],["D:/Blog/public/differential-equation/1601913199716.png","d5aa3a77127806f85e70b37c1ee9c87e"],["D:/Blog/public/differential-equation/1601913450223.png","99d327d56c72b77d6d0bdd499bd40594"],["D:/Blog/public/differential-equation/1601913485819.png","80490fd13cf5cefe8b73eb2fc3328cfe"],["D:/Blog/public/differential-equation/index.html","b6b15ac9bfee3411a286a63b92ff0ed8"],["D:/Blog/public/differential/index.html","61130b02265421b820455a24d6539614"],["D:/Blog/public/dimits-law/index.html","bf5e03d5799b65cd4a48c2f6d830bbb0"],["D:/Blog/public/docker-virtualized-container/index.html","f8680c516b9006f69e5bbd7d5f6a157c"],["D:/Blog/public/double-integral/index.html","0e9999bf11c02cdb31db3ba0af9a9195"],["D:/Blog/public/dynamic-array/index.html","dab27174d253f5143af9e4d37bd113be"],["D:/Blog/public/encoding-algorithm/index.html","9066089342f82af013f5e0fc903d87c4"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","e3ab920898a216a3b16af30cc41a6521"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","c2a23b13ab5981be273857ffb40e9654"],["D:/Blog/public/factory-design-pattern/index.html","62e45e7f4703e5df7a548b7cc6958dcb"],["D:/Blog/public/flyweight-model/index.html","fb412124b07ac415ccb58193908d5edd"],["D:/Blog/public/function-graphing/index.html","9df3c27d86d0e303dcb99e13bab1d45d"],["D:/Blog/public/gateway-service-current-limit/index.html","aedf94dc36aa1f438766a4ed8257f245"],["D:/Blog/public/gc/index.html","430291dae80d9854a2658ddd05901fb9"],["D:/Blog/public/generalized-integral/index.html","e3f2e9e1059f896151b964f1e7633a8d"],["D:/Blog/public/google8102e2f35ce9e391.html","0e0ba0a4a63f18b600b79eae18665037"],["D:/Blog/public/gulp-compresses-static-resources/index.html","436cb6b48a7208c929de34eadf430ee7"],["D:/Blog/public/hash-algorithm/index.html","702fe07391f6f6032de5463a1d93c5fc"],["D:/Blog/public/heap-sort/index.html","4359a0df823cc224bddb9704a65c2969"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","179968179fbbf99423ec898e19f88a75"],["D:/Blog/public/http/index.html","6ecb0c725d80deea15c1c214142910fc"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","c7e75825f29b3cadda2ed3825d19161d"],["D:/Blog/public/index.html","cec980d7ea6e253ca805f24ae291710c"],["D:/Blog/public/infinitesimal-and-infinite/index.html","87018299e7eb71db93088a9c11e44364"],["D:/Blog/public/interface-isolation-principle/index.html","84bf38df191c309b9aa4601a97c363d6"],["D:/Blog/public/intermediary-model/index.html","166d8f6e448caf5d36ecd9d575f5021c"],["D:/Blog/public/interpolation-search-algorithm/index.html","025ba7098cb56de3765d128189a58bdb"],["D:/Blog/public/interpreter-mode/index.html","6a82f655065cedbb6b192d058615dbae"],["D:/Blog/public/introduction-to-computer-network/index.html","3aba08fab27da52762040cece0d3e58c"],["D:/Blog/public/introduction-to-operating-system/index.html","bd2f645e74999e4327db4dceff32e319"],["D:/Blog/public/inversion-of-control/index.html","5a35ae8c6454c32ff80ca4178bb6ae90"],["D:/Blog/public/io/index.html","2dd91045d490626255205f41d39c9896"],["D:/Blog/public/iterator-mode/index.html","a7ca29594f4ba3e907d5227403969b3a"],["D:/Blog/public/j2ee/index.html","749a6788d895f4017da2a4c2fe7c7f69"],["D:/Blog/public/j2se/index.html","a61483909370d18591a2a814e3f3e9ef"],["D:/Blog/public/jdbc/index.html","868c5a3d420a8f22b0e0292080416d91"],["D:/Blog/public/jdk/index.html","ab1bf8f910facdd3dd0897630551f8a4"],["D:/Blog/public/jmm-memory-model/index.html","78385ba9ba2d1e4a8179213eb6d56d13"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","daabfa60e4bfb06bb3de9e877c7f8655"],["D:/Blog/public/law-of-robida/index.html","79c2693dd8a2d30926836226d219d762"],["D:/Blog/public/limit/index.html","fa6455936cf70af13337c1139ba7b26c"],["D:/Blog/public/linear-search-algorithm/index.html","6ab9273594347ece91d8c4da5ee2fa1e"],["D:/Blog/public/link/index.html","9ef4b943662390963ab672373b060b5a"],["D:/Blog/public/linked-list/index.html","e519689224ade13995ae7f52d11c49f2"],["D:/Blog/public/linux/index.html","e9dbc2df37e14aa5b921b8f97a42e735"],["D:/Blog/public/liskov-substitution-principle/index.html","09a89dcc618183ab4478b185178172a0"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","5610ebece523992a14f048d9d0a9e348"],["D:/Blog/public/maintenance-1/index.html","fdbf9d26b5cfaab6382642e5e86fe316"],["D:/Blog/public/maintenance-2/index.html","96a013d457add95fe36eac0926becf3f"],["D:/Blog/public/maintenance-3/index.html","f5db5731b1517bebc919998f1f401b43"],["D:/Blog/public/memo-mode/index.html","1ceb0998445d36bf2cdf8ab32ed48e50"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","1ea51aeb701bddfc58b70bd62fe2ca09"],["D:/Blog/public/multi-function/index.html","79e2805a9fa73cbf86e1715f6c55e156"],["D:/Blog/public/multithreading/index.html","3448988f0623b630c2ecadbf04be2fbe"],["D:/Blog/public/mvc/index.html","b9e72455cbbda560dd860c166848aca2"],["D:/Blog/public/mybatis/index.html","fa4f620884b1713fe12107ad3c1d5a85"],["D:/Blog/public/mysql/index.html","ecce32170dc3d22c736912f6aaa70282"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","5599598ea28a3824a23697511b4e98bb"],["D:/Blog/public/objectoriented/index.html","cdf7d0631c98fd2f2343ac402dae7385"],["D:/Blog/public/observer-mode/index.html","e0ea40e086a0814f7361b6f566aed61f"],["D:/Blog/public/operating-system/index.html","1c1194bac85bc601e0da2215ccdb0ac9"],["D:/Blog/public/page/10/index.html","c567de98e59201a0f43064d2d765fc20"],["D:/Blog/public/page/11/index.html","eaa274f767844b2e3edabfe523fb55d1"],["D:/Blog/public/page/12/index.html","de0aa6db07cff05000d41f6b0f233a5c"],["D:/Blog/public/page/13/index.html","acfa309f64eba089320aab01bcbcb309"],["D:/Blog/public/page/2/index.html","3c39fbcf236f64fb4d2b476695c517c1"],["D:/Blog/public/page/3/index.html","ff5345fee3dd3468cb8e35842553609b"],["D:/Blog/public/page/4/index.html","e302de1bc00171c354f2804c2fe238ae"],["D:/Blog/public/page/5/index.html","e77f1a35bf73bc73a2a88d6154a87973"],["D:/Blog/public/page/6/index.html","42d2c955d52b24e1fd58a39332deb6d6"],["D:/Blog/public/page/7/index.html","c7d8e7f2002456c2a40f88ebea23b671"],["D:/Blog/public/page/8/index.html","a1e7bb46a26de4f220b560b2d7ba4e48"],["D:/Blog/public/page/9/index.html","c7b130af992296bcc52050e490a974af"],["D:/Blog/public/palindrome/index.html","d413615daff5773c799b28d0402ad1f9"],["D:/Blog/public/partial-derivative/index.html","02ebd2af5421c50e9b826f9b5a72c8e3"],["D:/Blog/public/pass-by-value/index.html","92c92e7dfd26df13e4dc6cbbe36ea712"],["D:/Blog/public/pictrue-bed/index.html","2efdcb30896e2c7157c3919ccd6a40c4"],["D:/Blog/public/principle-of-opening-and-closing/index.html","a5b1566846df67690f2678ef26f6e37e"],["D:/Blog/public/principles-of-computer-organization/index.html","ed63bcf7035695822eba94541edc624b"],["D:/Blog/public/prototype/index.html","359819446a9a4eb7ac9c559e0d3b363e"],["D:/Blog/public/queue/index.html","76412b959286b5e8ddc5f2449fb5e866"],["D:/Blog/public/redis/index.html","52b7bf70282182914347c14d29cef021"],["D:/Blog/public/reflection/index.html","f31ee43459b257b2e30f6f662daf5631"],["D:/Blog/public/resume/index.html","448c4a0f7624391be88489ee6f5b22ff"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","6b8e0a439704a450fb8a1fcabc916bc5"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","7fd5ca37fd5da3120f6872fb30995149"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","7b6cd4f987415d1150386110368c7523"],["D:/Blog/public/series/index.html","6d08872731c74ff906ccce8a13585e74"],["D:/Blog/public/single-responsibility-principle/index.html","bff2c7297614342cc9fd0571da4f0fd1"],["D:/Blog/public/singleton-mode/index.html","f48b5124ee93951aa5e31b3b9634800c"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","eb79f7eba4a8aef1e08d57eae4437c53"],["D:/Blog/public/sparsearray-sparse-array/index.html","ed4a3674b7a63c91521a6ab91333455c"],["D:/Blog/public/spring-architecture/index.html","e9ddf964e73de948a1ff5eceef709187"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","f12f2d3f93d43119de9e65d84ef184a5"],["D:/Blog/public/spring/index.html","65598fa56bdfa8c8235a19a983e90a06"],["D:/Blog/public/springcloud-alibaba/index.html","86cbc7fa1397f9d05dea86b99f191c37"],["D:/Blog/public/springcloud-bus-message/index.html","85ed9df9cb2f3d4a0ab156965d1ea2ce"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","cdbc0ae4f54f26b36108d8190304e7ab"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","e9a7a1dca4e87f7de36560a5bebc6ebb"],["D:/Blog/public/springcloud-stream-message-driver/index.html","71ec80935787256253445e55b26a97d0"],["D:/Blog/public/springcloud/index.html","79ea942ff197602f321ace10e0c6fc1a"],["D:/Blog/public/springmvc-environment-construction/index.html","3ac408af45f1dbf2bb44783a4ad9bb70"],["D:/Blog/public/sql-injection-attacks/index.html","409f75fe2726adedb02830b7b896ca1f"],["D:/Blog/public/stack/index.html","426bd129a9a5013165de958a4c5bcf8a"],["D:/Blog/public/state-mode/index.html","13f599adc6730f33260461a67cd0ee48"],["D:/Blog/public/strategy-mode/index.html","17d09300cf992e977b9858abcb5f9836"],["D:/Blog/public/synthetic-reuse-principle/index.html","e003ab019e1f74a54b443a9de1cc4d39"],["D:/Blog/public/tags/C/index.html","b3fdd9a3c417934305b3ce2cdc7112a0"],["D:/Blog/public/tags/Concurrency/index.html","99b167afa2488491bdcc1041dcffb804"],["D:/Blog/public/tags/DesignPatterns/index.html","6ca0caf5276a657a60b69d0a18949d9a"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","a325a565348fb65f4f23f60d6371576d"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","41375008273f55cfea2b93ac44cadd5b"],["D:/Blog/public/tags/DistributedMicroservices/index.html","c59dc40ec5e8d035f8e90046bba7f794"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","d8f54e5ee25dbbf99b0f71610c411247"],["D:/Blog/public/tags/Interview/index.html","7ce55a04ca07cd9019f428071906c867"],["D:/Blog/public/tags/Interview/page/2/index.html","abf68d114d71a2a33fa0869eb237cc77"],["D:/Blog/public/tags/Linux/index.html","2f326020632453421bd532f4bc7551c5"],["D:/Blog/public/tags/Operating-Systems/index.html","41b22e029b5ab1ebafeeb5087c7dbe88"],["D:/Blog/public/tags/about/index.html","214d10d89f5c87aa77ebfd6c449aa660"],["D:/Blog/public/tags/ad/index.html","bc8c3b3326942b24f21ab04f07e6c92b"],["D:/Blog/public/tags/dataAlgorithm/index.html","847f4baa00d4fabe0d6bae2ee463be2d"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","928533c6774712751e62ba096bfe3c1f"],["D:/Blog/public/tags/docker/index.html","608e6401277df6ea3b1d5bb297c48ae7"],["D:/Blog/public/tags/frame/index.html","a77c924afa49bb26f6aef870ec767a32"],["D:/Blog/public/tags/front/index.html","b57de284d8cdc28ddbb40bf96337da91"],["D:/Blog/public/tags/index.html","9e9d227292bb0cb50e4304f21c3dca60"],["D:/Blog/public/tags/jvm/index.html","bb163ce8a5b5c2c192d3571623fcb649"],["D:/Blog/public/tags/maintain/index.html","2298f639f16de57609e99801395250dd"],["D:/Blog/public/tags/math/index.html","1f18a47d19a12045ff53365e6c786d1a"],["D:/Blog/public/tags/math/page/2/index.html","43aca5f776275dfae815f0fc5c48e995"],["D:/Blog/public/tags/network/index.html","80e0b20cac29086141e178508783c3fd"],["D:/Blog/public/tags/resume/index.html","6e47b9240f1c0b206ebb07277fe11742"],["D:/Blog/public/tags/safe/index.html","bef55f697acc7977f2d33594b012085b"],["D:/Blog/public/tags/sql/index.html","13109cac0b292a6a612b33557bc589a5"],["D:/Blog/public/tcpip/index.html","0436e70b2d53c3fde4281a87bf036d17"],["D:/Blog/public/template-method/index.html","96d26424ad2be31663db3bfa9fc90ec9"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","71e2b8183b1240f22d9b1b8181c7539b"],["D:/Blog/public/thread/index.html","191ff23b8e64a9640d996e95388e98a1"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","5870c099e78636ee3be434415d9e11fc"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","714bb69409992c1d88691404427a2051"],["D:/Blog/public/visitor-mode/index.html","fc7b2a0c8d14b983c53c1f5a11189213"],["D:/Blog/public/xml/index.html","9d24ec2797ef780f486d364fb5060e42"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","05ea8292716c69353aa417566a6e68a3"]];
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







