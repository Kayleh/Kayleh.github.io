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

var precacheConfig = [["D:/Blog/public/404.html","811d0891932032bbfa68874f83766c3d"],["D:/Blog/public/7-sorting-algorithms/index.html","6cd0532d4f9dc1ee601f73adf32abee4"],["D:/Blog/public/C-algorithm/index.html","e2f3026646bf799fba47e44135695e1d"],["D:/Blog/public/C-programming/index.html","a27c948ce8a378cbe13b678fc81eb387"],["D:/Blog/public/Good-use-of-pointers/index.html","c7418f24a2632351f77263b89e6d4ebd"],["D:/Blog/public/about/index.html","d594a72743f7eeefe8fb300fa2a7549e"],["D:/Blog/public/adapter-mode/index.html","86044fe0a0b0684e0996168466e105db"],["D:/Blog/public/agency-model/index.html","da642002683708897ef43b5a69430bb1"],["D:/Blog/public/appearance-mode/index.html","575f53520af2a7785acd8ae7e34b28fa"],["D:/Blog/public/archives/2019/01/index.html","190fb0481540b2bb3b25654d78f6d070"],["D:/Blog/public/archives/2019/07/index.html","345429937ec4899c58904790ca22bfbe"],["D:/Blog/public/archives/2019/12/index.html","1b40968192894ae012c5113f1c1e1ac9"],["D:/Blog/public/archives/2019/index.html","c7ddd7d8e0621723b0e7f95630536e3d"],["D:/Blog/public/archives/2020/04/index.html","79f684d6cd3836b3e65bb88e88ac434b"],["D:/Blog/public/archives/2020/05/index.html","d3fc73e11b2b5f39bcbed0a7589116af"],["D:/Blog/public/archives/2020/05/page/2/index.html","857a3900cc31acdc1a29b8c9ad9f6ae0"],["D:/Blog/public/archives/2020/06/index.html","1926a4536a33b0373f3d30dc8c6b7a93"],["D:/Blog/public/archives/2020/06/page/2/index.html","8f844bad35b2708c3095b6698f54cc9d"],["D:/Blog/public/archives/2020/06/page/3/index.html","f331c27eef53d3a5b7926b8223c8b592"],["D:/Blog/public/archives/2020/06/page/4/index.html","0588689a5198b7a46fc01a1082c525a6"],["D:/Blog/public/archives/2020/07/index.html","5dfa6be5886515c1a4e0877e23465606"],["D:/Blog/public/archives/2020/07/page/2/index.html","5c73687ca2bca324e9fd0370a8a1d318"],["D:/Blog/public/archives/2020/07/page/3/index.html","a55caf49e803a36131866a6985a98231"],["D:/Blog/public/archives/2020/08/index.html","f93bf969787743be57e70ba463cc0a3f"],["D:/Blog/public/archives/2020/08/page/2/index.html","9d31f196d7c02d1830ad90cf2f51d59f"],["D:/Blog/public/archives/2020/08/page/3/index.html","bd314f66f97634ee10475528a9efab03"],["D:/Blog/public/archives/2020/09/index.html","a07f018e6249c898eece1301093980b3"],["D:/Blog/public/archives/2020/09/page/2/index.html","f1a130ddd0cabbe5f00572c38b583743"],["D:/Blog/public/archives/2020/10/index.html","185ef32fe56465865810078fd1eedc0a"],["D:/Blog/public/archives/2020/10/page/2/index.html","49ce61107aac6caff1cb9ad2421985e4"],["D:/Blog/public/archives/2020/11/index.html","dc24547030ccb180d6e05c6609deb1cf"],["D:/Blog/public/archives/2020/index.html","9a0e8665688aa3a18e1eef9163c4dbc2"],["D:/Blog/public/archives/2020/page/10/index.html","0512f5807754c82793889f219e7159ed"],["D:/Blog/public/archives/2020/page/11/index.html","43517643bca0f373ede6f564d72a5b18"],["D:/Blog/public/archives/2020/page/12/index.html","c10c73244999660b179a18e227128c1a"],["D:/Blog/public/archives/2020/page/13/index.html","1cc9dbd90b3d6002b98571005572423c"],["D:/Blog/public/archives/2020/page/14/index.html","e70c5bae873609d6aed372c1a24c50bc"],["D:/Blog/public/archives/2020/page/2/index.html","963878719a45c91db839a8cdc822951a"],["D:/Blog/public/archives/2020/page/3/index.html","e46d29816d8b5d8511657dd089a24564"],["D:/Blog/public/archives/2020/page/4/index.html","cd062a16683d217c088c79445a7da7a3"],["D:/Blog/public/archives/2020/page/5/index.html","e9fff58cc088f67f45f9051b84ffcf19"],["D:/Blog/public/archives/2020/page/6/index.html","01b0d4f9b5665ccf40508db73d448da2"],["D:/Blog/public/archives/2020/page/7/index.html","c8edbb812dcdf50af6f9b773a846e9e0"],["D:/Blog/public/archives/2020/page/8/index.html","b6763c850feaf327cd18975372219610"],["D:/Blog/public/archives/2020/page/9/index.html","09b860224e3c9deb44fbcf71c905ebf0"],["D:/Blog/public/archives/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/10/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/11/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/12/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/13/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/14/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/2/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/3/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/4/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/5/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/6/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/7/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/8/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/archives/page/9/index.html","d82f08b0f42c22aaee3e736d62f5539a"],["D:/Blog/public/array/index.html","cefa4acd05562eb8c82f6c627a630178"],["D:/Blog/public/binary-search-algorithm/index.html","924452560fa91b3bd3e7219e0489886b"],["D:/Blog/public/binary-sort-tree/index.html","10fbec905d2a3b0d7813b90c7a135b80"],["D:/Blog/public/bridge-mode/index.html","9ff57c34d583b0cabdbb7849fdd19388"],["D:/Blog/public/builder/index.html","68ab00c9e04d1b83232e350e1ec0d242"],["D:/Blog/public/c-pointer/index.html","a038bdba0b4806e0734ef316bce6bd20"],["D:/Blog/public/categories/C/index.html","6639740e6939a9b41fbf6f930db02595"],["D:/Blog/public/categories/SpringMVC/index.html","7c9764f578f546704a9d1017a5823750"],["D:/Blog/public/categories/index.html","1a061729aa524ebe40e8f8864fdac074"],["D:/Blog/public/categories/linux/index.html","74129ac821c2bb8eb394007976320d31"],["D:/Blog/public/categories/分布式/index.html","addbc7b21edd4871400fb5401a284424"],["D:/Blog/public/categories/分布式/page/2/index.html","25c83f1c0d73ba9c1fbdea8b5ffde8ff"],["D:/Blog/public/categories/前端/index.html","21474ea23e9e96adc7b3e7363d5c0f18"],["D:/Blog/public/categories/设计模式/index.html","f7c385e74d10a70298ef39c7b07941ee"],["D:/Blog/public/categories/设计模式/page/2/index.html","209393a26e5db9a3744f2d0be01ca476"],["D:/Blog/public/categories/高数/index.html","47eae431d81acfd5c648c16b979b6192"],["D:/Blog/public/chain-of-responsibility-model/index.html","3f63c7e7a1a43401063d7e31c120e3c3"],["D:/Blog/public/chinese-and-english-switching/index.html","33431a2b7df9cafa373ae505c30c70c5"],["D:/Blog/public/combination-mode/index.html","b057ed4b6f2bea7e023d16278fb640aa"],["D:/Blog/public/command-mode/index.html","7f24112813edf1beb7de82ff52bb2afe"],["D:/Blog/public/common-commands-of-unix/index.html","3a4397838e2865076de9dab637f084b0"],["D:/Blog/public/computer-network/index.html","c9c45fdd877d58174624e9792358a942"],["D:/Blog/public/concurrency-principle/index.html","5e00c5106ecdd7d7f11de9fb989fbb9f"],["D:/Blog/public/continuous/index.html","5672d97c969b57bd78e8c398502654c4"],["D:/Blog/public/contract/index.html","4b64a5505b7496d72a5c781f14c7f4ab"],["D:/Blog/public/css/first.css","6b7cf9c0392d0d27b9b9a1c819a3249f"],["D:/Blog/public/css/style.css","11c094deae15b356cb556c84e1cabe2c"],["D:/Blog/public/cycle-structure-programming/index.html","dbee829f0bdf0778ec94a8c1d72bde7e"],["D:/Blog/public/data-structures-and-algorithms/index.html","8db65b2fd5b9cea2b226359e839bd36e"],["D:/Blog/public/deb/index.html","d7a56f053e9bcd50457bf27d9b893bcb"],["D:/Blog/public/decorator-mode/index.html","4d8e41ce63751d20233a8dcab30b4bd4"],["D:/Blog/public/definite-integral/index.html","bd80e8b0dbdd3c5899695abbe35b0265"],["D:/Blog/public/dependence-reversal-principle/index.html","40133b3c94343766548ca5d3d976ef67"],["D:/Blog/public/derivative/index.html","48798e1ac72fdc109f43716f336256bd"],["D:/Blog/public/design-patterns/index.html","5e6033e0ccdef38c150fafb0b21e4100"],["D:/Blog/public/differential-equation/index.html","f44d36209093f9cf3952d8b08383de5c"],["D:/Blog/public/differential/index.html","d91a5c18cf245508f62a930b0d950070"],["D:/Blog/public/dimits-law/index.html","16cb2f74ea2ea76f8d5e5c856b308cbf"],["D:/Blog/public/docker-virtualized-container/index.html","a4df15f787e5766a832ebe5209076356"],["D:/Blog/public/double-integral/index.html","3a8a9e9fdfd6dbc2af19210d59f97aef"],["D:/Blog/public/dynamic-array/index.html","6dff79e3a073e21c115925a85d8e2c92"],["D:/Blog/public/encoding-algorithm/index.html","1e526792d73321f3dab2cae32eb35b3e"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","8e46ae323f9105ae206c9770e88610e1"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","f96e708f8cadadca7474f3cc808523ac"],["D:/Blog/public/factory-design-pattern/index.html","ba30bbeda3828383cd03efd6b1d391e3"],["D:/Blog/public/file-input-and-output/index.html","ce70594e64ccb5624a88fc64beef852f"],["D:/Blog/public/flyweight-model/index.html","cad69961818d5b48f1c983b1bbf40dca"],["D:/Blog/public/friends/index.html","c50f6ce27ac690a86f58bf74c2414849"],["D:/Blog/public/function-graphing/index.html","d95a7c417690a1a91bc74b972177122c"],["D:/Blog/public/gateway-service-current-limit/index.html","ff3a5681f5f5e9501cb45ffa3d9d8e30"],["D:/Blog/public/gc/index.html","fb1203e717efa210f0a334d1ac856653"],["D:/Blog/public/generalized-integral/index.html","c8cba834c4da34c84611851fad07c4ac"],["D:/Blog/public/google8102e2f35ce9e391.html","a2771139164214bd499ae36cff088c3f"],["D:/Blog/public/gulp-compresses-static-resources/index.html","1b22a3d532940c92e333c49c22fb9c0c"],["D:/Blog/public/hash-algorithm/index.html","31cfd0965fc1f49939c1f42a059b388d"],["D:/Blog/public/heap-sort/index.html","db04c042f9af91aeed51fd4424ae28ab"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","be977f26b272238e53e019fc5c04d360"],["D:/Blog/public/http/index.html","2181bc935b726555ae2f124212599e9e"],["D:/Blog/public/indefinite-integral/index.html","e4f1ae822253e574cd881c4e8fa43f0a"],["D:/Blog/public/index.html","60d1e2cf0ef8503a3b3f12ff198c1c97"],["D:/Blog/public/infinitesimal-and-infinite/index.html","fa62c3c36059392a115d98aa3027b840"],["D:/Blog/public/interface-isolation-principle/index.html","478cece244f494faa39b6ceabb65d103"],["D:/Blog/public/intermediary-model/index.html","1768fa89a0a8bc4ca6a46aa27ed64c44"],["D:/Blog/public/interpolation-search-algorithm/index.html","77d8cd4ed496bc26580c7d05269d72e3"],["D:/Blog/public/interpreter-mode/index.html","94765bce63d12237f9d4ce5e11fec850"],["D:/Blog/public/introduction-to-computer-network/index.html","a98b52489f70fb1f14b36edea69307c2"],["D:/Blog/public/introduction-to-operating-system/index.html","7668e0fc7514ace34eb210652a6636ec"],["D:/Blog/public/inversion-of-control/index.html","8e1317cc6ecbc32887e1296ddead59bf"],["D:/Blog/public/io/index.html","07cb17ed69b651cf7eb823357313909a"],["D:/Blog/public/iterator-mode/index.html","782cb632fe57588dc2761b24cb2014d5"],["D:/Blog/public/j2ee/index.html","400e8dd0d64ec992df7a906b2c65262a"],["D:/Blog/public/j2se/index.html","bf5187c1601e0e4e3eaa2e56665ae6e5"],["D:/Blog/public/jdbc/index.html","44ebe1add7b221d1766bde774c59e4b6"],["D:/Blog/public/jdk/index.html","f21f136ea444bc260e9de82516cb292e"],["D:/Blog/public/jmm-memory-model/index.html","f358a845a8dd757055d0f7b2b38e76a3"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","1d67e1e00d27007826edc8198695136c"],["D:/Blog/public/law-of-robida/index.html","ec164c8afeeff5d01577cfab947d3f1f"],["D:/Blog/public/limit/index.html","d6787533ac44d07a69c53a61823a5098"],["D:/Blog/public/linear-search-algorithm/index.html","ea897412a3a38356e68837957522863a"],["D:/Blog/public/link/index.html","b64553cb62d2f31ca2d732df8623d317"],["D:/Blog/public/linked-list/index.html","2a9ed34b7a1a380931d97dae28864b38"],["D:/Blog/public/linux/index.html","15b0eb98151b7bb42918c8ec04421678"],["D:/Blog/public/liskov-substitution-principle/index.html","6c12b0cffabc794482491872bca4d97d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","8d8d42b0f5a744708a96102936cc7181"],["D:/Blog/public/maintenance-1/index.html","9016cbe55967ba77ced1c1cf189d37dc"],["D:/Blog/public/maintenance-2/index.html","598d9cd12aefa3013aee9a81ab0131bb"],["D:/Blog/public/maintenance-3/index.html","748e2d85d5c34fff57ae7c2211f5ec80"],["D:/Blog/public/memo-mode/index.html","36e8a0112728ab2e7092828dfc33e15b"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","978a21633a93cbaa5deacd3fc3e54098"],["D:/Blog/public/multi-function/index.html","c56010344a41fb9d615d5911917dfab7"],["D:/Blog/public/multithreading/index.html","2595bb5475d0e659002467d650efdaf1"],["D:/Blog/public/mvc/index.html","6f43256cb529db0c35398961d428b0eb"],["D:/Blog/public/mybatis/index.html","5448961a4514fedba026eafa12e06cf5"],["D:/Blog/public/mysql/index.html","ddb202c5c5114c7dc14e560e067f2252"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","f6db0ef246c84b374b791e15d1d7ec4f"],["D:/Blog/public/null/index.html","9e7a73891702c817dce5fef9986c957c"],["D:/Blog/public/objectoriented/index.html","b9ee54bc4d9951836b24d54238286328"],["D:/Blog/public/observer-mode/index.html","9965b8db4a90924d24db2fd876abe52e"],["D:/Blog/public/operating-system/index.html","ebc18d353dca6b38c83ad136e0049ba2"],["D:/Blog/public/page/10/index.html","ec85535de0a69368c1816ae06bb80ef7"],["D:/Blog/public/page/11/index.html","36005b95633192faba59fbb514b8ae45"],["D:/Blog/public/page/12/index.html","465f8665ca8c0114e305e99285d9a6f9"],["D:/Blog/public/page/13/index.html","6ad0b4fbec211bfe1017ade29436664f"],["D:/Blog/public/page/14/index.html","9f107365c30fd7fc309031309c1078b1"],["D:/Blog/public/page/2/index.html","5184924e214875d1fcb95d5c0105bdb9"],["D:/Blog/public/page/3/index.html","f1207a9b1b8f521ff5e1ac50d15e9081"],["D:/Blog/public/page/4/index.html","bb0558f64ac9231b856d325c3bfb7e96"],["D:/Blog/public/page/5/index.html","acc182ad8cd865e47f8ef905ec22ee8a"],["D:/Blog/public/page/6/index.html","605b5b7e0eb0001d35ef6082f2e621d1"],["D:/Blog/public/page/7/index.html","dc1305f62c4e1202d031aa8be9847caa"],["D:/Blog/public/page/8/index.html","104b4a167240c1482926cfd0724a8457"],["D:/Blog/public/page/9/index.html","42293d41a762e7439a0be2cdd83b0397"],["D:/Blog/public/palindrome/index.html","4cfb68e079ec4112dc146b20ccba0802"],["D:/Blog/public/partial-derivative/index.html","14892ad7425927c3cf09ab68eeb879de"],["D:/Blog/public/pass-by-value/index.html","15c6c4eb87f354b6d4767a743eba1e36"],["D:/Blog/public/pictrue-bed/index.html","3080ddc9edb648669961dcc288e7b9a9"],["D:/Blog/public/principle-of-opening-and-closing/index.html","f16583d7df4905f7a7a1b37f4d03d3c0"],["D:/Blog/public/principles-of-computer-organization/index.html","5eac49dd0cd384a6f63d1abdf76ca49a"],["D:/Blog/public/prototype/index.html","7811127130d818dbad117122cd642cb8"],["D:/Blog/public/queue/index.html","e94738ccb4c043f14d0820c37db60530"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","2ce26b32d36ed03d597b1999bd58fdb1"],["D:/Blog/public/redis/index.html","16a7bc41751812de9f89edc872de7d47"],["D:/Blog/public/reflection/index.html","490e8d351cbd73eee57f1395a2e93f34"],["D:/Blog/public/resume/index.html","5e9f9b67725ba08c188f0ce27f6bcefd"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","cf9828ed0aa6ca4e8b35e5058a7d0313"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","48c4137cf32babf82daf0326aa0602f5"],["D:/Blog/public/select-structure-programming/index.html","c690c0f501dd07a42a06b8bbf971ed71"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","aadfe752c8479cf166d7c57c5f9f3231"],["D:/Blog/public/sequential-programming/index.html","a548ca5417e7026ef311f1afffac0825"],["D:/Blog/public/series/index.html","4440e84aee67b486578c5b9efa87e601"],["D:/Blog/public/single-responsibility-principle/index.html","8aa49930a8f596ab0cb64fa2ab5359b1"],["D:/Blog/public/singleton-mode/index.html","ecfd69063fbc447f60ee85db2f43d7bf"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","51d8ebb9731bad866e43cfa1e78e3afe"],["D:/Blog/public/sparsearray-sparse-array/index.html","32a09fba02d55468801027610b8d0932"],["D:/Blog/public/spring-architecture/index.html","021c65864e57315ee0b54dd6de0f436c"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","c74a7e420eeb55eeb8850f16006d2252"],["D:/Blog/public/spring/index.html","3f63fabb7c0e8506707127d00ccb9c59"],["D:/Blog/public/springcloud-alibaba/index.html","9814221ecedd30b203fee16ace1fc83d"],["D:/Blog/public/springcloud-bus-message/index.html","5856708f0ac525ad4624d25da8b7bb45"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","a07274bb2e0ef4883931cbd287aaff8e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","1ec965149d458b9d2522e247d7926d13"],["D:/Blog/public/springcloud-stream-message-driver/index.html","5cd034c31ed314d367472e2b02014124"],["D:/Blog/public/springcloud/index.html","01a20947ca1e501306fcbc377cfd21a4"],["D:/Blog/public/springmvc-environment-construction/index.html","d0209737f40943c27a2afec2f37dcc0a"],["D:/Blog/public/sql-injection-attacks/index.html","f07cb9126532b09820d7c0ba71ac5c9d"],["D:/Blog/public/stack/index.html","e7084f50cba8ec96baafc843de10d435"],["D:/Blog/public/state-mode/index.html","3c41aba4df8c5d48ab304da2ac0c4274"],["D:/Blog/public/strategy-mode/index.html","f1209da811bb1adffd12fb568d9a44ae"],["D:/Blog/public/synthetic-reuse-principle/index.html","5d471801bc194a7ae575e4a37fe1e6cc"],["D:/Blog/public/tags/C/index.html","a822c9d124d90a3e693c33e07097d44e"],["D:/Blog/public/tags/C/page/2/index.html","cf884759fd141af5c63baaf612b6169b"],["D:/Blog/public/tags/Concurrency/index.html","c1364dc33767217ed701542cc63a30cf"],["D:/Blog/public/tags/DesignPatterns/index.html","d3e8a692c36387657b6ad3a23516cb95"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","90c4ba4800cd4456739377735e3d9395"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","69a8b7493ddd1eb5c95976ac57d81d59"],["D:/Blog/public/tags/DistributedMicroservices/index.html","5ec9587ee4a74cfab94c35a1358e0b41"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","3171c63f61d6b381fac9b6d5b005c2a4"],["D:/Blog/public/tags/Interview/index.html","ec3eb02515186d4aebe08b08c4da2f56"],["D:/Blog/public/tags/Interview/page/2/index.html","177707acfd03a517990870e9efcaf082"],["D:/Blog/public/tags/Operating-Systems/index.html","5c1099ff82fb97251eafba977103452e"],["D:/Blog/public/tags/about/index.html","276cd197442160b72c33703b3499c803"],["D:/Blog/public/tags/ad/index.html","b262e047109be52e5d856587c3814de7"],["D:/Blog/public/tags/dataAlgorithm/index.html","84881ec4731b2b03af95312f0e01312e"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","36bad9d2c70cee168534f9c6987f19c9"],["D:/Blog/public/tags/docker/index.html","8b5ab5c9c93fc8f993b3b59ffaed34b6"],["D:/Blog/public/tags/frame/index.html","57729a14d686fc61b547ec580097d0f9"],["D:/Blog/public/tags/front/index.html","d0370e7f5b89b810c9a1e5704f6a04f3"],["D:/Blog/public/tags/index.html","4cced245c391fc9b8c574cf951723586"],["D:/Blog/public/tags/index2.html","d24979db4092dd88eb1b65835169640a"],["D:/Blog/public/tags/jvm/index.html","c46497d26b396260897bbe5c0de54b4c"],["D:/Blog/public/tags/linux/index.html","ae7e3e9fe38ef5c763ee934e5c208611"],["D:/Blog/public/tags/maintain/index.html","eaeeaeace80e8a0c93feb87b8b07cee0"],["D:/Blog/public/tags/math/index.html","6352cb0d985f4f4d5c99e3263f21ecaf"],["D:/Blog/public/tags/math/page/2/index.html","c814f3d76175233bab21bc86d6aab56c"],["D:/Blog/public/tags/network/index.html","2e908f7ed0e41c539773b76133ca1633"],["D:/Blog/public/tags/resume/index.html","e3e040f7fc048d6fe8d5e11d93bfb4f7"],["D:/Blog/public/tags/safe/index.html","88c9e752543a035513abd2435af25fb6"],["D:/Blog/public/tags/sql/index.html","94a47b6e1dab5a3cfcd3663cb9a95f78"],["D:/Blog/public/tcpip/index.html","4f202eb8616fa0b476d84f832e699b60"],["D:/Blog/public/template-method/index.html","ed72137650d43ae0ba6e408152cf01e4"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","7b06d3f67b8934120415a35a3078d4d6"],["D:/Blog/public/thread/index.html","7ccdc721126666251ed7dd09789d5d13"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","03ec9e4586520fb2fe879a9f7a9d35af"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","6f7242bea056448c6bff7cef05577e33"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","5a539e36237d81fb3eee620248b59b44"],["D:/Blog/public/users-create-data-types-themselves/index.html","e28c923bf4928e52da0c769662c03b49"],["D:/Blog/public/visitor-mode/index.html","5ead5d4a4f9fc4c52eccf6f49345a447"],["D:/Blog/public/xml/index.html","0915a839495566e4d3d61d4241c08f1d"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","c3e281a3650e56e386c418a875589a40"]];
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







