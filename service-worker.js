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

var precacheConfig = [["D:/Blog/public/404.html","17c69530963ebb87cd9903fcd028bbf2"],["D:/Blog/public/7-sorting-algorithms/index.html","3ad01dca0ff962436ca7e834df56b450"],["D:/Blog/public/AIO-blocking-model/index.html","4059989c1ca9ae09d9ef7a206b637418"],["D:/Blog/public/BIO-blocking-model/index.html","dac4a6f81416c64ec9d77e8e9a7bd218"],["D:/Blog/public/C-algorithm/index.html","1faaacf6ab1152ff6a36761d2c145a2e"],["D:/Blog/public/C-programming/index.html","2ab04adddbdcfb411343d0b024f78f52"],["D:/Blog/public/Good-use-of-pointers/index.html","291e7e8adbf360c0b9603e81729c0770"],["D:/Blog/public/IO-model/index.html","aec795ae343ba605949d7e1cd9f0d478"],["D:/Blog/public/IO/index.html","c64ee0773c3746856d4096125ea03ec9"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","91bc058b17e6bf56bcd3458b38799f26"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","fd671d0a711fb13688516fe4d4dde06d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","28e33a6fd95414d1df0a2e7d05ec310b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","1b4cb3010cf1bdc0b9b2103627acc748"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","7ddb5a31ff41492cb1c098dd5cd0e595"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","5fa6dc8817459573a4537eb849273a5c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","6e3ed8cc5a1c1dafd6a5730516b59578"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","15644f0b0bab5d79434d72b65e4dbef5"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","1cdf2654f17a65df5473699d8da71358"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","6e9e567fbfff65f01e81094b762d4925"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","22b656cf8177072e4096ff6e6156a6ce"],["D:/Blog/public/Java-network-programming/index.html","7b2623b5405e58a609b8e5ad662066bb"],["D:/Blog/public/NIO-blocking-model/index.html","22cde63267b69c4eee0d903be53953f5"],["D:/Blog/public/Native-method/index.html","a4f13b792366bf2e278b42f8ab890048"],["D:/Blog/public/Sandbox-security-mechanism/index.html","bae5768736100d32b95317264dc628c1"],["D:/Blog/public/about/index.html","e6336a7214a6160257953a3302328575"],["D:/Blog/public/adapter-mode/index.html","ef6511cff7fe123ad4bdd5fb64c0057d"],["D:/Blog/public/agency-model/index.html","dfd70078272b4777cd6f9602bdaa5a57"],["D:/Blog/public/appearance-mode/index.html","e8cfc0caef82f956c1851d6df054c254"],["D:/Blog/public/archives/2019/01/index.html","208e887d1acfdd52872c5d79719dfa3b"],["D:/Blog/public/archives/2019/07/index.html","314bc0de7d972956ef0272d502196e7f"],["D:/Blog/public/archives/2019/12/index.html","48de731c19a54ac4c9549eb0c83fb9b2"],["D:/Blog/public/archives/2019/index.html","07c645dd1c3bb9dc047abd9eef0744b1"],["D:/Blog/public/archives/2020/04/index.html","272593a258a3a32f0b49497bfb5f7a44"],["D:/Blog/public/archives/2020/05/index.html","e8bd7b9152fd35b23a66fb6c4280faee"],["D:/Blog/public/archives/2020/05/page/2/index.html","53ec099750a327b90d70a093c234fa2d"],["D:/Blog/public/archives/2020/06/index.html","2a04ec64cb911baa7e05b85d046067f2"],["D:/Blog/public/archives/2020/06/page/2/index.html","6bc8dcf6be45207bb8631affb898bb74"],["D:/Blog/public/archives/2020/06/page/3/index.html","dfe8c5b18272ab584a371ab1fad16ed3"],["D:/Blog/public/archives/2020/06/page/4/index.html","c4e24c9436c07d173faeb0b92630aecc"],["D:/Blog/public/archives/2020/07/index.html","87746082cfc3037d803f137f2ded5c83"],["D:/Blog/public/archives/2020/07/page/2/index.html","cd8af673fcc9daad375387ae678e4700"],["D:/Blog/public/archives/2020/07/page/3/index.html","f283f305f0ea44b70843b32cbd47b242"],["D:/Blog/public/archives/2020/08/index.html","98905c80f6637af43bc7c9f03cd449c2"],["D:/Blog/public/archives/2020/08/page/2/index.html","53f83fb31b83156145cddd9bf1009442"],["D:/Blog/public/archives/2020/08/page/3/index.html","db73a5cc4efb6c236367e946351a02bb"],["D:/Blog/public/archives/2020/09/index.html","5d231a4e5439187ff4040abc1f976864"],["D:/Blog/public/archives/2020/09/page/2/index.html","05a98ed4a36ba1fa751854142c94f868"],["D:/Blog/public/archives/2020/10/index.html","9f60f89a96f0c58aaecc57254d4858ea"],["D:/Blog/public/archives/2020/10/page/2/index.html","dd532dfdb2b0b893113749022f509495"],["D:/Blog/public/archives/2020/11/index.html","869ccc0a4dd7d19dfac856dcbed6d4e2"],["D:/Blog/public/archives/2020/12/index.html","3b2bb04a5f7db04133630363999af99d"],["D:/Blog/public/archives/2020/12/page/2/index.html","da1da96de9059e6fde61ef0ec69f0c83"],["D:/Blog/public/archives/2020/12/page/3/index.html","3573c938fa59bb90a90cf48666802c2c"],["D:/Blog/public/archives/2020/index.html","edff27443781378e08728ca6458edec7"],["D:/Blog/public/archives/2020/page/10/index.html","ac5354e64de4f3b709a09be4461a03ff"],["D:/Blog/public/archives/2020/page/11/index.html","3d0ac436516f2d49ac06e12cff1e13ee"],["D:/Blog/public/archives/2020/page/12/index.html","22b64c4cc6fc44a185bf0f75ab23e4dc"],["D:/Blog/public/archives/2020/page/13/index.html","8876330c109c200a489272faa8ad1e0f"],["D:/Blog/public/archives/2020/page/14/index.html","eaaf8ad55d681cdab74e74946c52b476"],["D:/Blog/public/archives/2020/page/15/index.html","02587c49e8252fe1b1c24dbdd231aad7"],["D:/Blog/public/archives/2020/page/16/index.html","b052f199e37a654c343525fa4ed44ff6"],["D:/Blog/public/archives/2020/page/17/index.html","b4c9ec73db5949e3288abcb4a8a68168"],["D:/Blog/public/archives/2020/page/2/index.html","8119dd9a23d9234a3b422e1d07bba796"],["D:/Blog/public/archives/2020/page/3/index.html","3fe59e98ea7d190dac43ca210265491e"],["D:/Blog/public/archives/2020/page/4/index.html","f5776c361023c6ba9785c91d577edb23"],["D:/Blog/public/archives/2020/page/5/index.html","a60a8814c7f07c177adc8c986a308cfd"],["D:/Blog/public/archives/2020/page/6/index.html","1c721e53ba2d1732a1a91a4b9c4dceff"],["D:/Blog/public/archives/2020/page/7/index.html","1f453ba59aa834552dc5cb2fddc9790b"],["D:/Blog/public/archives/2020/page/8/index.html","07a6e0420675fc976c53400fe4ce31b5"],["D:/Blog/public/archives/2020/page/9/index.html","fb301faa70ffad01ff7d642cfd00495e"],["D:/Blog/public/archives/index.html","2825973a4811fef737008494994a0c9d"],["D:/Blog/public/archives/page/10/index.html","347c250f7146aebd46a098768e91ae9b"],["D:/Blog/public/archives/page/11/index.html","347c250f7146aebd46a098768e91ae9b"],["D:/Blog/public/archives/page/12/index.html","680fe28ced9571df01e143344b0ab7c3"],["D:/Blog/public/archives/page/13/index.html","680fe28ced9571df01e143344b0ab7c3"],["D:/Blog/public/archives/page/14/index.html","65a16c6275393b023bf9a54e90bed327"],["D:/Blog/public/archives/page/15/index.html","65a16c6275393b023bf9a54e90bed327"],["D:/Blog/public/archives/page/16/index.html","6ff1f57e61d32af0cc2f400d410b25e3"],["D:/Blog/public/archives/page/17/index.html","a6667b93ea37d2a46a6caf252d30d260"],["D:/Blog/public/archives/page/2/index.html","f057f9bd176941236af45bf849206257"],["D:/Blog/public/archives/page/3/index.html","f057f9bd176941236af45bf849206257"],["D:/Blog/public/archives/page/4/index.html","c9de93cd288b8f9314419f3cb6793c6a"],["D:/Blog/public/archives/page/5/index.html","c9de93cd288b8f9314419f3cb6793c6a"],["D:/Blog/public/archives/page/6/index.html","c9de93cd288b8f9314419f3cb6793c6a"],["D:/Blog/public/archives/page/7/index.html","7a50ca093a41785245f82855b72cc0a8"],["D:/Blog/public/archives/page/8/index.html","7a50ca093a41785245f82855b72cc0a8"],["D:/Blog/public/archives/page/9/index.html","347c250f7146aebd46a098768e91ae9b"],["D:/Blog/public/array/index.html","093ca24d22929ff7fc6e624327ed2e2a"],["D:/Blog/public/binary-search-algorithm/index.html","d354d4cfcc9e798861b5586a64dea74d"],["D:/Blog/public/binary-sort-tree/index.html","8295b3f94a81f6e356d82d56ed2468b0"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","af63b4028bd03819ac842ae8f9690245"],["D:/Blog/public/bridge-mode/index.html","1931d60054d6dc4bd787f4d37f5f9f05"],["D:/Blog/public/builder/index.html","db0da87355c3e4e112057f9ada4acd70"],["D:/Blog/public/c-pointer/index.html","f49e900b766c41ee0d15b85d590869d4"],["D:/Blog/public/categories/C/index.html","a88a5459d946839c65ca3a199bc6bfc9"],["D:/Blog/public/categories/SpringMVC/index.html","23510f3357003fad88e4ea3f7e0acb32"],["D:/Blog/public/categories/index.html","fdf92dc20b319a37281c2efcd163e40c"],["D:/Blog/public/categories/linux/index.html","fe598de0fa4fd798414457253fcff163"],["D:/Blog/public/categories/分布式/index.html","e4c54d16f87dafca4b3dcb6c4f221fc3"],["D:/Blog/public/categories/分布式/page/2/index.html","e33d9c75655971c6cd33b177baf579d6"],["D:/Blog/public/categories/前端/index.html","169adf977c14cc3807bfefd609b4448f"],["D:/Blog/public/categories/设计模式/index.html","79e040648a83ac500909bb65911c6b48"],["D:/Blog/public/categories/设计模式/page/2/index.html","c9a33187f3c23a0b14f4b00038f5cd95"],["D:/Blog/public/categories/高数/index.html","8187be1357270917a7e404bbf6ec26af"],["D:/Blog/public/chain-of-responsibility-model/index.html","9878b04d54c5796f9410b811c8f92f0b"],["D:/Blog/public/chinese-and-english-switching/index.html","490ae924bf80678d242b611e46c627ea"],["D:/Blog/public/combination-mode/index.html","6b9f24da044fdeaa3efa539d08ff216c"],["D:/Blog/public/command-mode/index.html","69fab7a401914c8ddc6c1053d9836769"],["D:/Blog/public/common-commands-of-unix/index.html","59812fe5264f7fa7e84fae7905881c76"],["D:/Blog/public/computer-network/index.html","8835175a2ebf47d36f45d51dacbb3167"],["D:/Blog/public/concurrency-principle/index.html","eb83404ca313a7899b7e471a8fdc162e"],["D:/Blog/public/continuous/index.html","b011ae7311b64c6e32e09015512c8395"],["D:/Blog/public/contract/index.html","eb648fbefd0b0731e715437fbaf34f89"],["D:/Blog/public/css/first.css","13f2020a7623f22358809d67456a3f4e"],["D:/Blog/public/css/style.css","c44c01eb31f5a5a10d6bf30b027efbf7"],["D:/Blog/public/cycle-structure-programming/index.html","0efb4993b97603d2e343ea638583e429"],["D:/Blog/public/data-structures-and-algorithms/index.html","d28f1407fa9874afaeb6d645bb3b821a"],["D:/Blog/public/deb/index.html","848ce2698478620290096e1d08b7a396"],["D:/Blog/public/decorator-mode/index.html","cc7e34767fccdb619c3bebdd06b4c181"],["D:/Blog/public/definite-integral/index.html","930fb0f1ef2b3513228767c686a4ea93"],["D:/Blog/public/dependence-reversal-principle/index.html","8c48c25a88ec6e489e13284b985ebe0c"],["D:/Blog/public/derivative/index.html","34405bc9c3f21c411156b0cf615b9a61"],["D:/Blog/public/design-patterns/index.html","20417eeb5560191ad0040b335216133c"],["D:/Blog/public/differential-equation/index.html","26bc412a58e49838af35471eb4a37df1"],["D:/Blog/public/differential/index.html","8d84bce648a8c14c4be21a9f264ca9c3"],["D:/Blog/public/dimits-law/index.html","ad3b08bd60a255eafd2b8c3d25d6333e"],["D:/Blog/public/docker-virtualized-container/index.html","1e606cbf89b46a500aa26cb566c22072"],["D:/Blog/public/double-integral/index.html","c2c3371b187e3f489732960929860c2e"],["D:/Blog/public/dynamic-array/index.html","e35448250bcf8d5f514d2e6e1735787f"],["D:/Blog/public/encoding-algorithm/index.html","782f3e1502b16bce92d246e567ef7387"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","a1dd134c43356eabf8a073e042617825"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","4ee43645b4e0d99b48625a7dfa81ec82"],["D:/Blog/public/factory-design-pattern/index.html","52e222064e4b1ce73c52a31f46257711"],["D:/Blog/public/file-input-and-output/index.html","f07df30af181af8e94b38450f7e1fdd5"],["D:/Blog/public/flyweight-model/index.html","d1e1c76e65e384cb848a5f08d9ee2c8f"],["D:/Blog/public/friends/index.html","495e7dd22b0673094fe1a9e77133b9d4"],["D:/Blog/public/function-graphing/index.html","8da67def2a6160d51fb438e8f1821852"],["D:/Blog/public/gateway-service-current-limit/index.html","5269ef06fa71170b5e8ceaab94ac46fe"],["D:/Blog/public/gc/index.html","e039e3fe6927b3c71a1c45330e2d1620"],["D:/Blog/public/generalized-integral/index.html","43ea47395c7cfc289fef7e76b4fd44f8"],["D:/Blog/public/google8102e2f35ce9e391.html","3aea899788b00f708f4d9f413caaf66f"],["D:/Blog/public/gulp-compresses-static-resources/index.html","082dce99b6d0d55e0c61855c0c0aa8c1"],["D:/Blog/public/hash-algorithm/index.html","46fd0ce709036e4c6b73cdff9a86a670"],["D:/Blog/public/heap-sort/index.html","53f748c22acffd7f75b5c2969721a692"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","ee26682e05d7ebeb0a6b9e5cf551a346"],["D:/Blog/public/http/index.html","34cfe5ad0db51b06b00aeb6f49083db0"],["D:/Blog/public/indefinite-integral/index.html","6e388b8c27296fb3a512c4a107724795"],["D:/Blog/public/index.html","b31187d4e68da427e459424e29f20511"],["D:/Blog/public/infinitesimal-and-infinite/index.html","05e5090cfd120340e5f0bc0e1947a9e4"],["D:/Blog/public/interface-isolation-principle/index.html","12d51b1b9e49bf42b44db93dc8097c3c"],["D:/Blog/public/intermediary-model/index.html","6a0fe51c1c2a88860f24cc1b0df31437"],["D:/Blog/public/interpolation-search-algorithm/index.html","ef8b4a245c616835f3c4fda3a98c33d1"],["D:/Blog/public/interpreter-mode/index.html","817abef4b315b34c6ca8d3181248bebc"],["D:/Blog/public/introduction-to-computer-network/index.html","4727c1f94f7ac35d34803e834a059029"],["D:/Blog/public/introduction-to-operating-system/index.html","ab6f37ce1a8bfa6d86d03e167dc92f8c"],["D:/Blog/public/inversion-of-control/index.html","de9c7417ca1d65addbbf90291d3c6a92"],["D:/Blog/public/io-Interview/index.html","5681c46202d43ea34d4bf73bdd987d09"],["D:/Blog/public/iterator-mode/index.html","cee340f51242b79f3ffa75f235e95ad6"],["D:/Blog/public/j2ee/index.html","55950e970610bbf082e8babb3c9a20ee"],["D:/Blog/public/j2se/index.html","e6deef5800620e86a6b056239a1c4312"],["D:/Blog/public/jdbc/index.html","081cb0fc6fe0ab83a01b123461a766d4"],["D:/Blog/public/jdk/index.html","f4f462bdb2510035a09f9e9efd8a675a"],["D:/Blog/public/jmm-memory-model/index.html","4fe699b5bb494e93768268a88f0fba4c"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","c0a2d27481a44228b0431f1bee591613"],["D:/Blog/public/jvm/index.html","d6ae19f9b9d578760fb862dfcce5e961"],["D:/Blog/public/law-of-robida/index.html","43bf379a77d360d7a6dc0649043bc576"],["D:/Blog/public/limit/index.html","74250dddd9f294aac514e1512f731592"],["D:/Blog/public/linear-search-algorithm/index.html","bef3e9bef5641cdf8f4f506c6939277c"],["D:/Blog/public/link/index.html","1ca816d85b7f062297b3a47c68301f77"],["D:/Blog/public/linked-list/index.html","d6443a14a196069b43d6b2ccf68d1e62"],["D:/Blog/public/linux/index.html","164b898b7f703f5c6e7d4fc4ca050705"],["D:/Blog/public/liskov-substitution-principle/index.html","5b218dc555d624b5d8ae5694432fe380"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","2ec2365516b8ebb73c98bb93ba3c092c"],["D:/Blog/public/maintenance-1/index.html","655b538271db27bac7324757914b5eee"],["D:/Blog/public/maintenance-2/index.html","f8b9740bbcbfdb8d399432a202a3ada4"],["D:/Blog/public/maintenance-3/index.html","76f73fd0d5869b4096c1c359a70815f0"],["D:/Blog/public/memo-mode/index.html","7f3dcc1d5112864862163b5a0a685e54"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","b044697cd240571be74be52b5dcb77c6"],["D:/Blog/public/multi-function/index.html","4d196e8014352143068f14514048af14"],["D:/Blog/public/multithreading/index.html","47a134aed15be1a2424b6c366f858c57"],["D:/Blog/public/mvc/index.html","0dc25db81362d4b0829c2a34191e0956"],["D:/Blog/public/mybatis/index.html","e47e562014ea652f5d7693280ca27050"],["D:/Blog/public/mysql/index.html","a0c1b60dae8057ffe36583ba42e9d485"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","80367b03b8e668f7f15e0fd28776ba89"],["D:/Blog/public/null/index.html","57b8e7c147669bd96a11f3fbb7766d5c"],["D:/Blog/public/objectoriented/index.html","d829022f82ae1d0166afc290959d1b51"],["D:/Blog/public/observer-mode/index.html","3a1a4414a45ac51183309f8d78b99276"],["D:/Blog/public/off-heap/index.html","ceef8b4fb0634147055f72f5a956c430"],["D:/Blog/public/operating-system/index.html","300a7d35c0474f1af8d8167d9fe3a117"],["D:/Blog/public/page/10/index.html","28c570e83d24aa9bf5785516f6ec526b"],["D:/Blog/public/page/11/index.html","9f574fc14ba09be4d85c67bb5a4dd3af"],["D:/Blog/public/page/12/index.html","4799487737659cc76e86c6c1655f8fcd"],["D:/Blog/public/page/13/index.html","6bc80b7ef680fd2e2408202ec3413469"],["D:/Blog/public/page/14/index.html","eb70e498c00f231948ff228a1848d25d"],["D:/Blog/public/page/15/index.html","4692c8b2697b9824f8b8fcb4f51750e5"],["D:/Blog/public/page/16/index.html","c1f843052bf23eab8167362253b5ee0d"],["D:/Blog/public/page/17/index.html","5d7789b21091d35c71211818d41383c4"],["D:/Blog/public/page/2/index.html","b9848138e04af122a275b0191680254f"],["D:/Blog/public/page/3/index.html","195778cffcb3d51ee62a7106786d4607"],["D:/Blog/public/page/4/index.html","69ca766369f7d414792a79dc1b83a5b0"],["D:/Blog/public/page/5/index.html","dd19bb7543f59d80f9d4648f80a95657"],["D:/Blog/public/page/6/index.html","c36d72327b7f4c8be4327ad161647641"],["D:/Blog/public/page/7/index.html","8e98e39d634fde9ba14bb37134b92711"],["D:/Blog/public/page/8/index.html","ce1166d05246d8d51295e5e49ab818a9"],["D:/Blog/public/page/9/index.html","660ad0a4871dc0a9371b5cfc72a758ab"],["D:/Blog/public/palindrome/index.html","d330e737f15f2676c785f66494bf7d08"],["D:/Blog/public/partial-derivative/index.html","bb1e52e521d56d871401fdf59b5b1796"],["D:/Blog/public/pass-by-value/index.html","1cc3031d2f9f82cfdeb33c7e60aa1e85"],["D:/Blog/public/pictrue-bed/index.html","0b526e398a45589be05c39d6934cb6b5"],["D:/Blog/public/principle-of-opening-and-closing/index.html","2689b05e3fa8485d6a30a8ebba4a3311"],["D:/Blog/public/principles-of-computer-organization/index.html","e568fd8c9ced56893ac83b6535f4328d"],["D:/Blog/public/prototype/index.html","3de214a93179fb8faa040a697643cee0"],["D:/Blog/public/queue/index.html","9b019c3287d066177c5617bf635e2497"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","df65cd358c6e90be52bdcd7a8009ed51"],["D:/Blog/public/redis/index.html","6c1f416a7d29a76855aa59b9e5905512"],["D:/Blog/public/reflection/index.html","d3b565ed2ad61d0da9ac6c6638a8ac42"],["D:/Blog/public/resume/index.html","a9379774c6fce3bfe8fbb7f7d4cd3cf0"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","7c30a63abcc4a7113c000991b2afd1ff"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","2f702d1dbcab05ac4832a047eeeb68d1"],["D:/Blog/public/select-structure-programming/index.html","7e15e7f60ea1dfc061b9d4a577397b63"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","4100ff56c0ba93599a040bb00a832ab7"],["D:/Blog/public/sequential-programming/index.html","2a196d8f2fca9a42ce7c6be587412c2c"],["D:/Blog/public/series/index.html","e9ca0cc4a36a1520a52ee3ac2f079131"],["D:/Blog/public/single-point-login/index.html","5ca4b9bcb43404fcdd06c37346b19bb6"],["D:/Blog/public/single-responsibility-principle/index.html","73f1f29c62a3038c5c08c0f1c8aa7e8b"],["D:/Blog/public/singleton-mode/index.html","5b3dde90c34b3ec53dd0faec902aa4f1"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","262c61b2ab1fe724dedcfffa3b824d82"],["D:/Blog/public/sparsearray-sparse-array/index.html","bb4bec7511f71bd61db0c46b32964c64"],["D:/Blog/public/spring-architecture/index.html","d7d65ac501f8086bce68c282b9e01c4d"],["D:/Blog/public/spring-relate/index.html","ba952b85bc853de35c483782a2ad41c4"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d7f151b86d68040fb3acd01386df2488"],["D:/Blog/public/spring/index.html","95d0767849353cc5e8bd89fcfc0842ac"],["D:/Blog/public/springcloud-alibaba/index.html","a0b1dd0f63b6797ba80be628fe20ac00"],["D:/Blog/public/springcloud-bus-message/index.html","7baaa0d82d2e51273bbe8c4ff5906703"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be0e6bbb5b702f2eaf0a03dc3b3c701a"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","2b9e874e35c621915211e1331ed3f04b"],["D:/Blog/public/springcloud-stream-message-driver/index.html","7f688e71e6b80dd3cf89e73be41fe70c"],["D:/Blog/public/springcloud/index.html","b6994eb0c4500c68d3b07644be327c74"],["D:/Blog/public/springmvc-environment-construction/index.html","c87ba80bbe52d193a7e1d228d89859f3"],["D:/Blog/public/springmvc-work-stream/index.html","548109f8c2e2475159f7069833d4ae14"],["D:/Blog/public/sql-injection-attacks/index.html","7b8e2c79f371c6dc8a1ae99291a0884b"],["D:/Blog/public/stack/index.html","965535f477df584a333ec061a3b344d9"],["D:/Blog/public/state-mode/index.html","9cbf1b9c5b0202db1f75a4dc529288ec"],["D:/Blog/public/strategy-mode/index.html","a7786a43856aace0e801e32ddbcf0efc"],["D:/Blog/public/synthetic-reuse-principle/index.html","77ceffb33219c47eb57e2f42ce38a9bf"],["D:/Blog/public/tags/C/index.html","9f29d746ec1c5c3ad3d74f460139f7ec"],["D:/Blog/public/tags/C/page/2/index.html","709e3438007a22f04d1bcbae1384b546"],["D:/Blog/public/tags/Concurrency/index.html","411c0cbf39f9510712c0b387658697e0"],["D:/Blog/public/tags/DesignPatterns/index.html","2dd8e5ae0c7e656acabb71dbbbaec51b"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","840f5bc813dce1260e09e354b3436c31"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5673ca6beb9b35e11d25a1f995b18928"],["D:/Blog/public/tags/DistributedMicroservices/index.html","0189cfc434ed8de34fd53e0da2996b87"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","2ab29dec1d5543252449195681e14acc"],["D:/Blog/public/tags/Interview/index.html","f3f9d68619fd3184317323580874ed01"],["D:/Blog/public/tags/Interview/page/2/index.html","2d05022371a9f5c6c6bae88ce64c7f4b"],["D:/Blog/public/tags/JVM/index.html","6ff26d67e348d7c64e38dca4b1dd9a87"],["D:/Blog/public/tags/Operating-Systems/index.html","554b9058e3ce5c5cd3af8fc5ab8814eb"],["D:/Blog/public/tags/about/index.html","f7f14216443b4fe0bf5eb3e87b6bdf1a"],["D:/Blog/public/tags/ad/index.html","8dd96ce81fa0d47477703980e0bad629"],["D:/Blog/public/tags/dataAlgorithm/index.html","cbe909cdfbabca1ec9b19b3b441e1039"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","6659c252c5ccd4357fd2afbe02100fa6"],["D:/Blog/public/tags/docker/index.html","a1372d494de2447338e1774b7602cf83"],["D:/Blog/public/tags/frame/index.html","204814148d16b733ed60ea1daea46e9d"],["D:/Blog/public/tags/front/index.html","786db5d49bacd55c5387689b337276f2"],["D:/Blog/public/tags/index.html","e9e9f5fa554a2a7cfdeafb327a5050e1"],["D:/Blog/public/tags/index2.html","dfc89c4cd760a1b3c2c2c019f9ac6ec4"],["D:/Blog/public/tags/io/index.html","f2ac0d4426a8ce9d24b55d0f5294a7f7"],["D:/Blog/public/tags/linux/index.html","de7dfb31b2a6c69a1122fc7c5db93c9a"],["D:/Blog/public/tags/maintain/index.html","7b0c0a781327de1d0b22ee329c10f8a9"],["D:/Blog/public/tags/math/index.html","80fd86549d16e89e75c9aa7c0859336a"],["D:/Blog/public/tags/math/page/2/index.html","16c124f349374d393f7baa6c8ad90787"],["D:/Blog/public/tags/network/index.html","bcbb5656950ac82c9ec3f08fca4213f5"],["D:/Blog/public/tags/project/index.html","5883d337ac788c38cdf5349b0eced250"],["D:/Blog/public/tags/resume/index.html","17ee18f319d1965e350a91aaa75af9c8"],["D:/Blog/public/tags/safe/index.html","42bf1a12549f8eb7ca3f5d39603bbda5"],["D:/Blog/public/tags/sql/index.html","348711944bf43447c0c8da3d4d8840a2"],["D:/Blog/public/tcpip/index.html","d188e7af34c0594789f94faef871b39b"],["D:/Blog/public/template-method/index.html","474107054916cbed00ed98a840e94d07"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","67001996dc02e0de6d772baa888ee9fb"],["D:/Blog/public/thread/index.html","00790cf99ddeea8dc46ca44845d0e959"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","f33ff3cd44d02b837f22a34c65c62f7f"],["D:/Blog/public/ubuntu-set-ip/index.html","f8ba91246c8a0ac4dd0ccd77efdb2315"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","6da047ec5e0ffbde9db6154d7274d42e"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","72de08b96e6db4aafced53341ac1a8f2"],["D:/Blog/public/users-create-data-types-themselves/index.html","66f70b36dcb1ee596e5a192f725b31a1"],["D:/Blog/public/visitor-mode/index.html","f66981ce5426dceb07f2e106f23438cf"],["D:/Blog/public/xml/index.html","22060015667be221f3df1b908c126750"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","13fc544db4f682a1d5ceac3c3a0f6aa2"]];
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







