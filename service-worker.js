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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","8349ee62bcada84a6f475a1a659df378"],["D:/Blog/public/AIO-blocking-model/index.html","d7b980d62d16bd9283c598d60fb03332"],["D:/Blog/public/BIO-blocking-model/index.html","cde79def181edc10f5678db7264979c3"],["D:/Blog/public/C-algorithm/index.html","3dd525db7fb241f21795b0de30149ba4"],["D:/Blog/public/C-programming/index.html","6d0c35335ae1feece49d7d5b92477cf3"],["D:/Blog/public/Good-use-of-pointers/index.html","7e2394f0ddfdeeae67f9e21b03808511"],["D:/Blog/public/IO-model/index.html","d8c503d0680ed545f4c192a9fea393c0"],["D:/Blog/public/IO/index.html","28af1a1b3f0ed65bae422532d40dbc60"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","2e93aefe7e64017faf883a4174ed28ff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","7f877c880b8efef1978a6534700c5780"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","3d80c1bd63581f7c9601162890e4ab19"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ebe8548cdf4984a5e84279f0ac8a93fc"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","f9cece38e9f14ca63905e2a999bccd76"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","e154f118603d2d35f06022171f311b91"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","58eb8db167acc9dfb55021abbb9a7f38"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","dc7bddca77c1ebe33cc1fdb8110e5b81"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","1a88b358f285a930fb652a8cd00b4398"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","1a6a6bcef731e970543a38cc711bb747"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","63ab8afbbd6f74f4495fbab3e569871f"],["D:/Blog/public/Java-network-programming/index.html","39e33a4da385e436d50bde8bfebef2f2"],["D:/Blog/public/NIO-blocking-model/index.html","c2d4d398a1045cd1767fab7d5f23c792"],["D:/Blog/public/Native-method/index.html","fbdc7de85de4eaa1434f195f0e249e35"],["D:/Blog/public/Sandbox-security-mechanism/index.html","a0377d2a2fb59c295c3340394c96d3e1"],["D:/Blog/public/SpringBoot-startup-process/index.html","a5e09956ffa8678bcd9505287978165d"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","9320515210f6afb9be45977343fb88b5"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","0b977d8f26f8868cb6293200fc90a48e"],["D:/Blog/public/agency-model/index.html","b6923708f60feeb067ee574559b34a9b"],["D:/Blog/public/appearance-mode/index.html","46979366e34eb076e9617b039d0e08d4"],["D:/Blog/public/archives/2019/01/index.html","63d06a41d590f9027f536fd7b176082e"],["D:/Blog/public/archives/2019/07/index.html","bc03a75bd27e096ffdb55fbd5a411687"],["D:/Blog/public/archives/2019/12/index.html","d03b1d859f093e1efe1c9c76c7fc25b5"],["D:/Blog/public/archives/2019/index.html","d8cfbb2a557a3306e13f69a6ac48dca5"],["D:/Blog/public/archives/2020/04/index.html","2a54ee98648674d049971374c80bc108"],["D:/Blog/public/archives/2020/05/index.html","42db7621ec1771a7fb35f173bee144e4"],["D:/Blog/public/archives/2020/05/page/2/index.html","221c3d40ea557412b5b4c655b249b7a4"],["D:/Blog/public/archives/2020/06/index.html","894ee4c103e344206fd15d062ffcdb79"],["D:/Blog/public/archives/2020/06/page/2/index.html","37c44487f0c83e21af57a80f8bcbebca"],["D:/Blog/public/archives/2020/06/page/3/index.html","cbb396b00f1e866eed551fe9e3d615c6"],["D:/Blog/public/archives/2020/06/page/4/index.html","2dc5f16be6eae96a91d8e7c96b916f4e"],["D:/Blog/public/archives/2020/07/index.html","3471aaf6228b22f57225671080e832be"],["D:/Blog/public/archives/2020/07/page/2/index.html","5bc62d6e64e1a0c81d9920b91bd9d5ac"],["D:/Blog/public/archives/2020/07/page/3/index.html","b251e555fd071ddd3995a2d4c10274e1"],["D:/Blog/public/archives/2020/08/index.html","2b3f30ef68fb4221b13e2af0e9326ef4"],["D:/Blog/public/archives/2020/08/page/2/index.html","1a58cbff6acf141fd81ce64fff4ea93c"],["D:/Blog/public/archives/2020/08/page/3/index.html","4cf0c649ce751b6aed87c347e76fd16f"],["D:/Blog/public/archives/2020/09/index.html","638b167f2571f338927885940dd4181c"],["D:/Blog/public/archives/2020/09/page/2/index.html","c84fb44454ce6fe780d6a77ca0fc7d41"],["D:/Blog/public/archives/2020/10/index.html","f76e8309f6f0f06137062b66fa47e8b2"],["D:/Blog/public/archives/2020/10/page/2/index.html","3a1f96f05ea550a23fcaf095aab0213a"],["D:/Blog/public/archives/2020/11/index.html","1baf65931046c1583c88d5fccdc7576b"],["D:/Blog/public/archives/2020/11/page/2/index.html","0816d2105480ca87d70eaf363be1c466"],["D:/Blog/public/archives/2020/12/index.html","74daed4446c92f4d3befa6443ccb57aa"],["D:/Blog/public/archives/2020/12/page/2/index.html","ca9c6873024dbcd823f69450b8437e97"],["D:/Blog/public/archives/2020/index.html","f205956d5fd382989bd4803475cea8ae"],["D:/Blog/public/archives/2020/page/10/index.html","e5a8036b13874222056550e2d2ad689e"],["D:/Blog/public/archives/2020/page/11/index.html","202c01a568e6738c2b9c3242f9f7ff09"],["D:/Blog/public/archives/2020/page/12/index.html","2aa4a43071d67d3c5a2dbfca83a15994"],["D:/Blog/public/archives/2020/page/13/index.html","f6a8fa4d97c1e907789c173485243486"],["D:/Blog/public/archives/2020/page/14/index.html","b5e11c9464c773e02c1d9760ccad9e86"],["D:/Blog/public/archives/2020/page/15/index.html","437255aec48f0b4aa630e9d42fc1a15a"],["D:/Blog/public/archives/2020/page/16/index.html","3e69abd761df12547416b0796489cfae"],["D:/Blog/public/archives/2020/page/17/index.html","3c4abc9c2d58c8176e24cd96872fb5e5"],["D:/Blog/public/archives/2020/page/2/index.html","7dde8086899e9ad0f731c5660f04d08e"],["D:/Blog/public/archives/2020/page/3/index.html","36f0c6ab7cf3549a097844558a1215f0"],["D:/Blog/public/archives/2020/page/4/index.html","af116d5d99d6f6ea79fb91b27523725c"],["D:/Blog/public/archives/2020/page/5/index.html","92414d43db946249bbd67d17f0abdf4f"],["D:/Blog/public/archives/2020/page/6/index.html","16b3920d0ad5135d8545f6403ee68f3a"],["D:/Blog/public/archives/2020/page/7/index.html","da984239d5614f72828c30f8db2bd157"],["D:/Blog/public/archives/2020/page/8/index.html","17e4c0a05828e77e7837a6d61a134c17"],["D:/Blog/public/archives/2020/page/9/index.html","13d63e72d2664e2363b64da659e97efc"],["D:/Blog/public/archives/2021/01/index.html","1d294e122da13f37a7ab617b7ee298cb"],["D:/Blog/public/archives/2021/02/index.html","c71895e0e119f9f4c830e45595ef84bb"],["D:/Blog/public/archives/2021/index.html","e6a5c7868d266bc5462ba9f400e85230"],["D:/Blog/public/archives/index.html","c6bbb2fe52a95bddfb6fbb3753a8b952"],["D:/Blog/public/archives/page/10/index.html","63e5b83494d43f737fc7d53947ce7d00"],["D:/Blog/public/archives/page/11/index.html","b2e60ec2b6ae9fc13106d193c70c4e70"],["D:/Blog/public/archives/page/12/index.html","3cf257e952f53ae1cf9f7d4ed41933e6"],["D:/Blog/public/archives/page/13/index.html","0a14973acc61c178589a2d81821d3f15"],["D:/Blog/public/archives/page/14/index.html","b5d10cda2f5c599b81da0a48c7e00730"],["D:/Blog/public/archives/page/15/index.html","b4bb447e3f2893144c0bf656b18c3333"],["D:/Blog/public/archives/page/16/index.html","cd58aa244f24f34c32adfe9d98be20a3"],["D:/Blog/public/archives/page/17/index.html","029a9064e6d992481aab8380d176da74"],["D:/Blog/public/archives/page/18/index.html","6ce47aaf8bae2c86247004fb6030c86c"],["D:/Blog/public/archives/page/2/index.html","36c0968ac6d914936bc5916746c096a4"],["D:/Blog/public/archives/page/3/index.html","098abf63dcab4308c06796c82624907b"],["D:/Blog/public/archives/page/4/index.html","fc8db8125d2f98ec067f50aac0c10085"],["D:/Blog/public/archives/page/5/index.html","738e8282ba1ed9be016476f121b6dc54"],["D:/Blog/public/archives/page/6/index.html","3c974e2df18a080ac50f1c2d3d6efe62"],["D:/Blog/public/archives/page/7/index.html","b42b329139e7e4d203b9a3a3363343d9"],["D:/Blog/public/archives/page/8/index.html","94482a9170b3e4c7f6ce4d394270ced4"],["D:/Blog/public/archives/page/9/index.html","aff356b28e6d35c84943cc1612078945"],["D:/Blog/public/array/index.html","a7fdd210a02ddf6d1acc5d4cbd911af9"],["D:/Blog/public/automated-test-katalon/index.html","88238e569fa74b6530c914be4ff2fce2"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/1613121232860.png","fd1a272accabb1578626d3b294b5009a"],["D:/Blog/public/automated-test-selenium/1613234642404.png","0dd973f7e9465929bbc7e4500aa1c2c7"],["D:/Blog/public/automated-test-selenium/index.html","405fe6635c8649fcb424616d66bd6099"],["D:/Blog/public/binary-search-algorithm/index.html","382cb5b1e16e27c98ed59b64d72d5fee"],["D:/Blog/public/binary-sort-tree/index.html","65802e00925aa8b431662c623538678a"],["D:/Blog/public/bionioaio/index.html","f9107ee0e2fa4ab9aa99f73829b0a5eb"],["D:/Blog/public/bridge-mode/index.html","fb55dce8e03aea8fcba01ded080af140"],["D:/Blog/public/builder/index.html","28a27748cc3ddc87b347755a94003cf1"],["D:/Blog/public/c-pointer/index.html","45ba2e543eadb63528e735f9aba0cabc"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","585b3176132f17e300c4bc0c69626d9b"],["D:/Blog/public/chinese-and-english-switching/index.html","274c025e6bbedece547f666857b1a159"],["D:/Blog/public/combination-mode/index.html","7f0dab80edfef98c574949790ad01176"],["D:/Blog/public/command-mode/index.html","645aafd51a5e57525cc3af1da4f80275"],["D:/Blog/public/common-commands-of-unix/index.html","99dcd7b06d104ecb21f4fb574d85337d"],["D:/Blog/public/computer-network/index.html","fd81f90cb06119be38bd849ea877db1d"],["D:/Blog/public/concurrency-principle/index.html","d3a9d27bd71d847329b6d3d52bf7e4b5"],["D:/Blog/public/continuous/index.html","9b1a54f3c63bf8b41a99054bf8f95500"],["D:/Blog/public/contract/index.html","6b011acb53d680a3bfdd39f278d3dbd4"],["D:/Blog/public/css/octo.css","d50563050fe01bd9efb95a8ea26923b0"],["D:/Blog/public/cycle-structure-programming/index.html","7967d50367695c9e49c4cb71bbc605c5"],["D:/Blog/public/data-structures-and-algorithms/index.html","36d05fe1ead15d2152458fe902f851b5"],["D:/Blog/public/deb/index.html","898df9b4e1df05b48444145861d33fe3"],["D:/Blog/public/decorator-mode/index.html","36a062c2cce8c62ab0dc19b8e0a41aeb"],["D:/Blog/public/definite-integral/index.html","2b043c33cc8d886beb51c2634cc47326"],["D:/Blog/public/dependence-reversal-principle/index.html","cf1eeeec38a0f8296eace476ee6e16e2"],["D:/Blog/public/derivative/index.html","92ff7c0b85d668f60a75eb4175f2904b"],["D:/Blog/public/design-patterns/index.html","4a0d386df4b9967e15cab500fb1202a5"],["D:/Blog/public/differential-equation/index.html","c2b30aeb91c8b2ce94b2c97f6358510a"],["D:/Blog/public/differential/index.html","2d204c481724dc2cd4698f0733f6b62d"],["D:/Blog/public/dimits-law/index.html","ea8b485815e124141d2d9f5e3d90556d"],["D:/Blog/public/docker-virtualized-container/index.html","98dc42391cdb4404b428483e5cfccd7d"],["D:/Blog/public/double-integral/index.html","c270a12022516e0ab0e58faf4d0c6cd7"],["D:/Blog/public/dynamic-array/index.html","e0686ac8e19c1bf5c73732ac90bba064"],["D:/Blog/public/dynamic-programming/index.html","879bcd0c44f1a5f056bf841bf4c4d9fb"],["D:/Blog/public/encoding-algorithm/index.html","6341dc8802ee3347710a49d81d49ca7d"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","86b5e93801cbf5b53fe9aca53a8f6f72"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","48631cce21813914eff89017e35496c3"],["D:/Blog/public/factory-design-pattern/index.html","9825cf929ef8916f669764742456ce84"],["D:/Blog/public/file-input-and-output/index.html","e4b5bc579d3146783758cb25446aaea9"],["D:/Blog/public/flyweight-model/index.html","7fe01fa62b77cffce6c6144369438d93"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","9f3893c03b3ba2bbd6952ee9f3c0e1a3"],["D:/Blog/public/gateway-service-current-limit/index.html","d00d8fdbfecd74ca8902347038070cec"],["D:/Blog/public/gc/index.html","e9fcd319beeadad4f024ca1e5cf66399"],["D:/Blog/public/generalized-integral/index.html","d8461024ce7c2127fc9e7483debf395a"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6c84ca3c3da271d71f1a436c7c89b559"],["D:/Blog/public/hash-algorithm/index.html","03c3c895bd25d037da045d650749ac4b"],["D:/Blog/public/heap-sort/index.html","3203977309e28341fb9222571d3e6399"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","2a1c2f174ad0cbb02ce0ac412cf5529a"],["D:/Blog/public/http/index.html","bad777e7987aa49b94b18bbd2a7f176f"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","b90e9a666b2f2d66f004421624045cee"],["D:/Blog/public/index.html","2e7d38d382570166e82e98ecedb3790e"],["D:/Blog/public/infinitesimal-and-infinite/index.html","6d74e15312bde6de14e96282df39e4cb"],["D:/Blog/public/interface-isolation-principle/index.html","fc0f2f4fb0c1464c74103f0acef03641"],["D:/Blog/public/intermediary-model/index.html","83a40503a2aaa6013b2ddcc2136212b4"],["D:/Blog/public/interpolation-search-algorithm/index.html","a62afb1271b39a000cf94bcd42632c4c"],["D:/Blog/public/interpreter-mode/index.html","8fe66c54d5c966ec8a5e883bd3cea630"],["D:/Blog/public/introduction-to-computer-network/index.html","2dfc162cb725e3628a3f0f80b061f952"],["D:/Blog/public/introduction-to-operating-system/index.html","57bc85d4bf59d752d2b1e02345f879cc"],["D:/Blog/public/inversion-of-control/index.html","85b98b49228f9938c7eb47de62cc3199"],["D:/Blog/public/io-Interview/index.html","ad29915c5fab7938729344a891b33ae6"],["D:/Blog/public/iterator-mode/index.html","eef3a69e920cfc12f6f21be84ca8da2e"],["D:/Blog/public/j2ee/index.html","c1443864f51d7e53e4ac2912b09925b4"],["D:/Blog/public/j2se/index.html","529f6a91b0605883dcdad8d8ca6f6706"],["D:/Blog/public/jdbc/index.html","78357c9817efcd4334b823501f48bcf3"],["D:/Blog/public/jdk/index.html","e48c559c8c098a4e4938985c40f3a1b6"],["D:/Blog/public/jmm-memory-model/index.html","8e211d36bb58a34e06c9faab02457c54"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","4bf0c3f00c407e1191c60a92a00b6392"],["D:/Blog/public/jvm/index.html","b38d24c5dec43efcc243b8d2ee6340aa"],["D:/Blog/public/law-of-robida/index.html","5d766f8be62633dddec2a58037273860"],["D:/Blog/public/limit/index.html","12647cd61865ae79501634d6e6ebd7db"],["D:/Blog/public/linear-search-algorithm/index.html","591e22c7e20db9fe0ccf34f03e392b62"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","27748de2883f65d6096700bb76e6420e"],["D:/Blog/public/linux/index.html","47d81fc0dacea2d4510ed31104c8356c"],["D:/Blog/public/liskov-substitution-principle/index.html","24cbf82fa383aa86c477032b47726aea"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","f88469d83e57cc7ebb22082d8396133e"],["D:/Blog/public/maintenance-1/index.html","b7c0e49a5fc98696d0e97e50f4a4458c"],["D:/Blog/public/maintenance-2/index.html","7219558f12006f4f62af323ad271b935"],["D:/Blog/public/maintenance-3/index.html","35ebaeda9871a2bd2db2d9b6d784acf1"],["D:/Blog/public/memo-mode/index.html","481ac01f3a2bd5ddc954b2db0593a7f2"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","1d99065d51915627a4834b4f1db65fbb"],["D:/Blog/public/multi-function/index.html","7bae9bf859365fb8efc64c5d8c1825d9"],["D:/Blog/public/multithreading/index.html","09c725c995be9f62e16f16fd35fba63f"],["D:/Blog/public/mvc/index.html","341768b056e10f6467a5e4416bbda420"],["D:/Blog/public/mybatis/index.html","d9e40714c0192dfe2423d0dae2c54d5a"],["D:/Blog/public/mysql/index.html","c46cb9c66efeed3e8197cc3c589b8abb"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","55917b72ad1caa3053d6f2714ef6d7ce"],["D:/Blog/public/null/1613147342997.png","fa212602da6a0c2e4ab81932e2c75959"],["D:/Blog/public/null/1613147496034.png","fb8fb1de9dea6723da6655e5839071b2"],["D:/Blog/public/null/1613149415607.png","701939feacc13efa4cacc1c011cd4772"],["D:/Blog/public/null/1613149552674.png","2b99ab4b3ceac7811b7ff973a8255884"],["D:/Blog/public/null/1613149845499.png","d5edfd7d7be45c825f3c5711f91cf99d"],["D:/Blog/public/null/1613199579426.png","541d81408c0a8888cad00aac49503689"],["D:/Blog/public/null/1613199693463.png","eee76d2a6bbbaa2b18686de5d15e4b90"],["D:/Blog/public/null/1613201703588.png","c482912ce5975fcf6424f54967a04ee7"],["D:/Blog/public/null/1613202112317.png","0c2eb115b6ddd8ccbee66b9a10c3b488"],["D:/Blog/public/null/1613207825662.png","46612333f91fb08d11bbcd71203dd100"],["D:/Blog/public/null/1613209390861.png","b0fa2badf3e229650b7c9352cdb3a885"],["D:/Blog/public/null/1613231860846.png","77b157d07a6a0ec5a8869d4d32a5f4b0"],["D:/Blog/public/null/1613233980464.png","2f6c54ae5225ff55147a56468f3c2d98"],["D:/Blog/public/null/1613234000816.png","17e04a5b9d28590aff758324ef2560e3"],["D:/Blog/public/null/index.html","7858ea6fc75b2f7be795f6799cb98724"],["D:/Blog/public/objectoriented/index.html","4acd0e5839c2ae98345f2c6831170d38"],["D:/Blog/public/observer-mode/index.html","94a99f573f57bb54187daf7852932e3d"],["D:/Blog/public/off-heap/index.html","b5cad5a2b20c1ca2b4b6bd65b1b0f748"],["D:/Blog/public/operating-system/index.html","e767f98acedd83d66d825e3b2206f65f"],["D:/Blog/public/page/10/index.html","4ae8de1ab2e94933d0a43f443603c830"],["D:/Blog/public/page/11/index.html","1bff6b138f4ea547c74d185ca7540ab6"],["D:/Blog/public/page/12/index.html","0a2e34a0683b2e85bdff3bce9402e116"],["D:/Blog/public/page/13/index.html","fdc40af0ea1dacf1640e745cc8e3d0b4"],["D:/Blog/public/page/14/index.html","69fda477e53ddd55cbd3f65c65405ac0"],["D:/Blog/public/page/15/index.html","7ef5a00141e7efb26ec4a363e9196d42"],["D:/Blog/public/page/16/index.html","39816ef7b8c86e35929a06329e068ade"],["D:/Blog/public/page/17/index.html","b01553b362deadc6bc9fd899f30748a6"],["D:/Blog/public/page/18/index.html","e78201a1e1dbc287cd5582d7da8c94ee"],["D:/Blog/public/page/2/index.html","1d669ffc68e854acfa35ca318e62541f"],["D:/Blog/public/page/3/index.html","27b281af62d7d7e6d8827f97d5e6911a"],["D:/Blog/public/page/4/index.html","f5a9c3aebd17fc0841fa791af013726f"],["D:/Blog/public/page/5/index.html","3cc9df9623464c4cfaab4650936def0b"],["D:/Blog/public/page/6/index.html","310034f67391332750ee581072b529c1"],["D:/Blog/public/page/7/index.html","5c73065c3ec0d61c1f4275bfc219695a"],["D:/Blog/public/page/8/index.html","3d4912a373c346567cc3921dfcd619e4"],["D:/Blog/public/page/9/index.html","149d68d58a528dd2fc820d6d1fe8447e"],["D:/Blog/public/palindrome/index.html","d7fb6db460fd4a642b52368ac454451e"],["D:/Blog/public/partial-derivative/index.html","2c8f74ee2d940c83108203407a853748"],["D:/Blog/public/pass-by-value/index.html","7081e5560e90eb6a289c5c65ac84213d"],["D:/Blog/public/pictrue-bed/index.html","19858df78260dd7907dcab02c19323ac"],["D:/Blog/public/principle-of-opening-and-closing/index.html","8d87cc11992c0b108543799e84161953"],["D:/Blog/public/principles-of-computer-organization/index.html","c5791cae75f83023b3aa9ee4d56ee1e8"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","e5c20d58fe4c32d4156ca274a8f4b0e5"],["D:/Blog/public/prototype/index.html","62363d2a0f8e530e343bd0a12c956185"],["D:/Blog/public/queue/index.html","8583339e56e8cef4d54cdd4f414e78ce"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","c030349276b2d9edb511e2f6ec2e015d"],["D:/Blog/public/redis/index.html","5bd0ce9df1700a79b5c3a0764cce2dcd"],["D:/Blog/public/reflection/index.html","1fbfbc55aa2ac988047c2610bc957ffb"],["D:/Blog/public/resume/index.html","4539e8c6e3ed8a6d7443eee8974818ce"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","3e3f61fbc2b4e7ee435bfcf49167a457"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","6bf3d5424e2ab142ae33cf1f0ef39036"],["D:/Blog/public/select-structure-programming/index.html","1db94602f687aa671b1247fe6b84a8b4"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","2388fb54ede755dc0c999f4f1fcf340a"],["D:/Blog/public/sequential-programming/index.html","ea498c3fb435bfcd39bd92e6bfa763b4"],["D:/Blog/public/series/index.html","33864f5df56316b08f891b4f98662782"],["D:/Blog/public/single-point-login/index.html","20b55fd0ca307d929b56cd332cc9078b"],["D:/Blog/public/single-responsibility-principle/index.html","cbff6b02c947aa313feb66951abe2a59"],["D:/Blog/public/singleton-mode/index.html","31919538612d048b2964ab2798b422fa"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","ba2595dae0661210af4242cb5bc39416"],["D:/Blog/public/sparsearray/index.html","2d6de7b1bb909bd52c24373a9b232560"],["D:/Blog/public/spring-architecture/index.html","19b1ba60347e8593cfd703894b184551"],["D:/Blog/public/spring-relate/index.html","6c45109690970d2c871c64c9a28f59e0"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","a7ed8ed8787f63f8e72c5d9bb60ee388"],["D:/Blog/public/spring/index.html","c7230705e95b637173c2a12308136139"],["D:/Blog/public/springcloud-alibaba/index.html","632796fa1c5816ddf7fdef54036391b0"],["D:/Blog/public/springcloud-bus-message/index.html","00855e1b1cbaf5f82a601ed5eb2c9da2"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","c22b888473166fd3bea09ce55fdde1fa"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","5b8e8c366f615f565182535ffb24beea"],["D:/Blog/public/springcloud-stream-message-driver/index.html","30dee264032e3c06b908e80cca5de1ff"],["D:/Blog/public/springcloud/index.html","4507400e8a807611cb6ecd4655315cf2"],["D:/Blog/public/springmvc-environment-construction/index.html","6daaddfa2c95716f6e4e8b1f5574d6c8"],["D:/Blog/public/springmvc-work-stream/index.html","6531ada3cba1a08f843a2d2f018db608"],["D:/Blog/public/sql-injection-attacks/index.html","e72ce0fd8ae723ca2d6a1162d6aef5de"],["D:/Blog/public/stack/index.html","f3e4701c2c4a7755bad6d909f202c71d"],["D:/Blog/public/state-mode/index.html","b49cee1d8d1f7d2101a5272af2a99ada"],["D:/Blog/public/strategy-mode/index.html","6c0922c3d5ca1b07c0ce6f785aa8e7e0"],["D:/Blog/public/synthetic-reuse-principle/index.html","a480c226e60cb0edb2702da7b971aba3"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","d9b1ccfd6db8328756b44ab781424633"],["D:/Blog/public/tcpip/index.html","a701bf60c71129c70924a0ee8f0fbeb0"],["D:/Blog/public/template-method/index.html","293cb8b7b7a469e89c302d8dd1c0be35"],["D:/Blog/public/test-case/index.html","03e4d25df7ed89baff922fc86a77da00"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","21d18262a6d540f71dff56b1d9f2d0ce"],["D:/Blog/public/thread/index.html","cd0352e0f87a0e0f0f09861a58f36fb8"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","2defb47d8e005fdba34e71437be9e098"],["D:/Blog/public/ubuntu-set-ip/index.html","628a6a15c091efafc075a2a2e6d67fd5"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","9da791a6a1c6bdfa91a1498af50bded0"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","3eb1ea213c0cb31c4272577e9df7d454"],["D:/Blog/public/users-create-data-types-themselves/index.html","57018ffd8c3a03d62b0c6bf57bbee9ac"],["D:/Blog/public/visitor-mode/index.html","6f1f50b2c1219fdddd1fda9c91622094"],["D:/Blog/public/xml/index.html","48663e4ebe83d1821d40126ebd22ebbe"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","3ba5e4355550c1f6455e0d7bb724e4f2"]];
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







