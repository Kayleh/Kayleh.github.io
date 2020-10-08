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

var precacheConfig = [["D:/Blog/public/404.html","c7fe9d19e007042f0eebd2b9082cf2d1"],["D:/Blog/public/7-sorting-algorithms/index.html","a234b21b85fa0533e8f7c71403fa74cb"],["D:/Blog/public/adapter-mode/index.html","691d24b06bbd430883994c960c353bb6"],["D:/Blog/public/agency-model/index.html","8453d89f5268f73284fbabc971aa2305"],["D:/Blog/public/appearance-mode/index.html","38013eef97e21dc6d9e5b84c1441fd64"],["D:/Blog/public/archives/2019/01/index.html","2eb03acaf03d59b02626197c60a702a7"],["D:/Blog/public/archives/2019/07/index.html","2056630c5a646343f7fd30fe319fb6fa"],["D:/Blog/public/archives/2019/12/index.html","ad76b33f8976c86446f538c9d7f3f63d"],["D:/Blog/public/archives/2019/index.html","0ff2102fc3bac525fdf1715e8bf36d14"],["D:/Blog/public/archives/2020/04/index.html","1402dc35bf09834fc40e8f1610f1a8d1"],["D:/Blog/public/archives/2020/05/index.html","5e79a1e372a0722752e7e00c4c4874f4"],["D:/Blog/public/archives/2020/05/page/2/index.html","a36d2cecc31132c64703c507feb09831"],["D:/Blog/public/archives/2020/06/index.html","7be09eadc1f5bfc2e17953ddbc5869a6"],["D:/Blog/public/archives/2020/06/page/2/index.html","a51662cfe7a9149cee395f2bd70f525b"],["D:/Blog/public/archives/2020/06/page/3/index.html","fc0ba3f061b0dd6418391aeb3fdce068"],["D:/Blog/public/archives/2020/06/page/4/index.html","b9c04a3a213e06f92568fc254f106d24"],["D:/Blog/public/archives/2020/07/index.html","d5b918777eac71dbc5c1a4fd11ec0e88"],["D:/Blog/public/archives/2020/07/page/2/index.html","6edb415847d81e26b139177f406db49c"],["D:/Blog/public/archives/2020/07/page/3/index.html","1e80c576d1a4e0df71cb2111ba962e72"],["D:/Blog/public/archives/2020/08/index.html","96c12c9007802a78161c34653adebf6a"],["D:/Blog/public/archives/2020/08/page/2/index.html","a75b2b1f9c274affbc1c4019fd8f291f"],["D:/Blog/public/archives/2020/08/page/3/index.html","af26a33ec8815fca51af61f22c54c5f9"],["D:/Blog/public/archives/2020/09/index.html","312d173b01d5dd09c958cad1dd4556e2"],["D:/Blog/public/archives/2020/09/page/2/index.html","97ea3b7b43a61651c0860a33973edb69"],["D:/Blog/public/archives/2020/10/index.html","b3f07a6eb6c68bd00204019f665262a6"],["D:/Blog/public/archives/2020/index.html","1a62301854bffd43d6ab0bb5f40544e3"],["D:/Blog/public/archives/2020/page/10/index.html","d60ddbfc0a4b5c5aedfa1f3d678c873a"],["D:/Blog/public/archives/2020/page/11/index.html","bff63489ffd32d553ececd1238adaa80"],["D:/Blog/public/archives/2020/page/12/index.html","d04ba5b1b5354122ae25dd48eb7fb82f"],["D:/Blog/public/archives/2020/page/13/index.html","0b6580ea1c37ec60ec4c2198995747f4"],["D:/Blog/public/archives/2020/page/2/index.html","28bd725575ae61d4fedd255366b6ef04"],["D:/Blog/public/archives/2020/page/3/index.html","c9eae6df16d06c3e7c90bfd9821d56b3"],["D:/Blog/public/archives/2020/page/4/index.html","338a0daa0776c03bb3a86ba27e2df423"],["D:/Blog/public/archives/2020/page/5/index.html","0ae1a2d40ca71aad66fc9ba495e33bbc"],["D:/Blog/public/archives/2020/page/6/index.html","60848af21e5d98d8a087a7142f1ce7b9"],["D:/Blog/public/archives/2020/page/7/index.html","17b5d26750463eb4517cdb6bc090d1b2"],["D:/Blog/public/archives/2020/page/8/index.html","13c1855769490280afac667d8bb2f877"],["D:/Blog/public/archives/2020/page/9/index.html","093a6fbde09aaee75ed9bb87fc0421c2"],["D:/Blog/public/archives/index.html","4227da46d7f20ae6fa222c65c1eb8f60"],["D:/Blog/public/archives/page/10/index.html","6c0a8ccfd85af323e6d250cbaaa90d4e"],["D:/Blog/public/archives/page/11/index.html","89796d573f57d7a37a2a000eb66a1faf"],["D:/Blog/public/archives/page/12/index.html","f0f06ccdd5a66615c5a384d7a12f781d"],["D:/Blog/public/archives/page/13/index.html","552b671b284812e8015c9cec665dfd3c"],["D:/Blog/public/archives/page/2/index.html","3e8bd4a1c37cc5765a64e0a2d93d07cf"],["D:/Blog/public/archives/page/3/index.html","e79e3d2be51609cc977c01bfd8a7f353"],["D:/Blog/public/archives/page/4/index.html","a8ff72ddbf376520ef2983e549843e4d"],["D:/Blog/public/archives/page/5/index.html","3cac78daae08f54bd26a9e1db5b45575"],["D:/Blog/public/archives/page/6/index.html","c59446b0a5ce016007622d92159770cd"],["D:/Blog/public/archives/page/7/index.html","26f65fd763d00be2efc09cc9f7a73e3e"],["D:/Blog/public/archives/page/8/index.html","a098cee1ddad44c623c0c3e0f3a6693e"],["D:/Blog/public/archives/page/9/index.html","e37dedd3e5f066f96b9b4bcac2d3fda1"],["D:/Blog/public/array/index.html","e30f072e6320b18ffd979119fb879807"],["D:/Blog/public/binary-search-algorithm/index.html","d30150916d0c707d4a7d308e846b1a0a"],["D:/Blog/public/binary-sort-tree/index.html","75126fc2545180a87378c62450ca63ed"],["D:/Blog/public/bridge-mode/index.html","230463328435763ad342f3ccfc36a165"],["D:/Blog/public/builder/index.html","f396fe0235e21b45468744904de3b3c2"],["D:/Blog/public/c-pointer/index.html","8a0d33c8e2c6342e8759f0cab2f10247"],["D:/Blog/public/categories/C/index.html","c5c2e05bf8f8e7878f06a81b70759530"],["D:/Blog/public/categories/SpringMVC/index.html","aa68de084e6c11fcf8b4f09bd42452c9"],["D:/Blog/public/categories/index.html","a9d2c83789d6d2987e080334b559bf17"],["D:/Blog/public/categories/linux/index.html","9f38af35139ed99e319b81e5a7324366"],["D:/Blog/public/categories/分布式/index.html","a7c4517c738f634a07fe092638ed64a1"],["D:/Blog/public/categories/分布式/page/2/index.html","b003e3b4f14c7a947d7e1589e6439300"],["D:/Blog/public/categories/前端/index.html","0bb7e6f3c192d8f2aee5c5d3a7e84933"],["D:/Blog/public/categories/设计模式/index.html","4aac12ff1f7348cc4e5609b890ba7bba"],["D:/Blog/public/categories/设计模式/page/2/index.html","db4342c807fcf9e0bd824d7faa6610b2"],["D:/Blog/public/categories/高数/index.html","5bdd70f0f1f117333bff547a372f552f"],["D:/Blog/public/chain-of-responsibility-model/index.html","a9dac2d3c83dafd34ef31e6d44ba2426"],["D:/Blog/public/chinese-and-english-switching/index.html","dae20633f874ef83a977f9974e02ee70"],["D:/Blog/public/combination-mode/index.html","a0379fc68cdb44a4c648baba942b08b2"],["D:/Blog/public/command-mode/index.html","1f796a113a2491ac318e06ae48ef5fba"],["D:/Blog/public/common-commands-of-unix/index.html","d2a73d01c6604f59042918128d07a4ec"],["D:/Blog/public/computer-network/index.html","f178bd226a6d167f3ca88243ac9f62cc"],["D:/Blog/public/concurrency-principle/index.html","50258d06645823bd8e7b2456a0a32aec"],["D:/Blog/public/continuous/index.html","af978756e8ef277c33af515637489cfa"],["D:/Blog/public/contract/index.html","96a634315f94b510e8239a3b4f165e3c"],["D:/Blog/public/css/index.css","47cd35583f8ff3f3d7d2610f057352cf"],["D:/Blog/public/css/var.css","3c9341e983ec942f1f3d53ed877e0010"],["D:/Blog/public/data-structures-and-algorithms/index.html","99db1c5136401f3011bcc8138e63488f"],["D:/Blog/public/deb/index.html","065450d407617567ed11e1e274ff8fcc"],["D:/Blog/public/decorator-mode/index.html","4cb61ce4a96d2cbc43da494e5076d750"],["D:/Blog/public/definite-integral/index.html","31a63d536e5fea9f0abb462d81fa78ad"],["D:/Blog/public/dependence-reversal-principle/index.html","91859f96a60286f3862400c254b2d0d0"],["D:/Blog/public/derivative/index.html","67dc8730fc20534186911aaa2b6a2fb4"],["D:/Blog/public/design-patterns/index.html","104cb35a9a9d931c71e419e38449bc46"],["D:/Blog/public/differential-equation/index.html","11dc0001a8c951e1df5d941ed4ecd36b"],["D:/Blog/public/differential/index.html","356fa4db7bf6638c2d7f63e984030e55"],["D:/Blog/public/dimits-law/index.html","f87f3b226f37f1fa2793d4e21044c41f"],["D:/Blog/public/docker-virtualized-container/index.html","e7c18c889dca64e31da8e5894bb1b2c5"],["D:/Blog/public/double-integral/index.html","2d572e7f29feab4c9dabad843d4a2755"],["D:/Blog/public/dynamic-array/index.html","f1e8191638d045b13328d07abd2f0e56"],["D:/Blog/public/encoding-algorithm/index.html","55d91204b066e2b75a530e950b2eb7a0"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","73a27fb9aac8844e54c2c5849fa2f850"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","d5a5ab30401debe6e53f8eb68c56dc84"],["D:/Blog/public/factory-design-pattern/index.html","952bef92a86595ef985f824547a49dca"],["D:/Blog/public/flyweight-model/index.html","c9eea7d7ef0e4bc557b0b26f63ab2fcd"],["D:/Blog/public/function-graphing/index.html","6192ff818ec5b04001ed835686ed50fa"],["D:/Blog/public/gateway-service-current-limit/index.html","62ca1fd81a3996ad3ea8f5dea6574bb3"],["D:/Blog/public/gc/index.html","e70d6a5bae283878c338a884e9fae10c"],["D:/Blog/public/generalized-integral/index.html","0b28e2aa7a013224bf0c148055cdb20e"],["D:/Blog/public/google8102e2f35ce9e391.html","b9ac0e45998f3b9df82d42008dcf05e9"],["D:/Blog/public/gulp-compresses-static-resources/index.html","77ba6804e8dad94cf106e3aba73da9e9"],["D:/Blog/public/hash-algorithm/index.html","7b77aae48dbf76ebf4cd7a791fc99ab7"],["D:/Blog/public/heap-sort/index.html","500acf65a3954c4d562ceaf202e84311"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","07df60b89111b594b8cfd78d2290a640"],["D:/Blog/public/http/index.html","59f1af32f7c5ecf7852d2fb76b0a9006"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","cdff7cc55f023061218805c6fd03f98a"],["D:/Blog/public/index.html","a52c8155d5ffc81c0cbe4c7c2aadca21"],["D:/Blog/public/infinitesimal-and-infinite/index.html","25fded28758c717deb15fb3ce968f42d"],["D:/Blog/public/interface-isolation-principle/index.html","a1b36ee8c35f9d8a05f5656b96f113fb"],["D:/Blog/public/intermediary-model/index.html","4ecfcd57eaa4121c3cadb6f5404005a2"],["D:/Blog/public/interpolation-search-algorithm/index.html","58ad9011228e30c36dcb38aae4154328"],["D:/Blog/public/interpreter-mode/index.html","c918c76cb1b9337aa86829ef93136f75"],["D:/Blog/public/introduction-to-computer-network/index.html","2f4ffbee0a01a28fa055db3cd496ed41"],["D:/Blog/public/introduction-to-operating-system/index.html","28fb0eb53714f7b407109cd57e8de87b"],["D:/Blog/public/inversion-of-control/index.html","86139b3fca4356b372328857599030e5"],["D:/Blog/public/io/index.html","05debd25a7538f3bd26bd2dafc9e073a"],["D:/Blog/public/iterator-mode/index.html","cd7ecfa4bbc4249a1ddc14791fe4ec7e"],["D:/Blog/public/j2ee/index.html","fa7fc5c5177822632db459768f439d8d"],["D:/Blog/public/j2se/index.html","9c3cab549a293ca2fcdddff04566df82"],["D:/Blog/public/jdbc/index.html","d0edd16c7217ada5569b9fb2f1487330"],["D:/Blog/public/jdk/index.html","c610a8fa8c52272dbf360b916caf98d5"],["D:/Blog/public/jmm-memory-model/index.html","dfc3719253db6b495500482181be1861"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","3aa3593623698d3bbf9ef4fc3fe92298"],["D:/Blog/public/law-of-robida/index.html","5f29b0f69c601a9fc36d12659641d82f"],["D:/Blog/public/limit/index.html","b3ac8a52f53c1b01af7a667b1aea549e"],["D:/Blog/public/linear-search-algorithm/index.html","dde3b84ad8c4f83cb7f801ce867c51ae"],["D:/Blog/public/link/index.html","2b755668739788eb81e03faa78248483"],["D:/Blog/public/linked-list/index.html","8e6ff9610e63eccf6d51ed7692b7ab31"],["D:/Blog/public/linux/index.html","fdb59e614f49e0fd5384d184b14d65da"],["D:/Blog/public/liskov-substitution-principle/index.html","5d599419cb54d4aa00073e3510032da9"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","ea1344419217d2054a83f1fd76319d30"],["D:/Blog/public/maintenance-1/index.html","278a280641ff72b468683a76db1e68fb"],["D:/Blog/public/maintenance-2/index.html","4f2f00b8f75fd6c2f4bd8a50f307d088"],["D:/Blog/public/maintenance-3/index.html","bdc753a42281d701ed30f2e77afb5880"],["D:/Blog/public/memo-mode/index.html","b1dcac31926ef21e8e8b7b7f88a3861f"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9cf2063af6e95405db9ece038caee2bf"],["D:/Blog/public/multi-function/index.html","0bbf98ae444cdd80e4ac3dec49dcb52d"],["D:/Blog/public/multithreading/index.html","9f1f7b79abd5b3e9b53bd527a2a3a193"],["D:/Blog/public/mvc/index.html","6690cefb0b6423131bf488464cb5da08"],["D:/Blog/public/mybatis/index.html","4fc78d58d1229c15a5e4463f009a6a26"],["D:/Blog/public/mysql/index.html","32a182a474fdf367227c1144691ff0c4"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","25d3360ea7df48af025cfe5d835625c7"],["D:/Blog/public/objectoriented/index.html","393221c7bd26a2c0e7f32912e1a3f2ce"],["D:/Blog/public/observer-mode/index.html","fd46f2df749703c685397ff2bb48f026"],["D:/Blog/public/operating-system/index.html","473b274685d648fd649f1c3ec621ce4a"],["D:/Blog/public/page/10/index.html","7ee88271b2dec7950c99517c65983666"],["D:/Blog/public/page/11/index.html","9405af5b242af02e618480774dfaaa16"],["D:/Blog/public/page/12/index.html","0d29825bbcc37cb0581722fad7a0e4d0"],["D:/Blog/public/page/13/index.html","97bb9da60a7657529a891d2a37e38d6a"],["D:/Blog/public/page/2/index.html","0d6f91c0f707e6f7ba314aa3ccee497b"],["D:/Blog/public/page/3/index.html","baa8894b4d22983b6137b6cd84e73a15"],["D:/Blog/public/page/4/index.html","cce9786d5cc7272306be3e10c601df68"],["D:/Blog/public/page/5/index.html","5ca26f91603b9e5af335c199b5c302d8"],["D:/Blog/public/page/6/index.html","1a1307af174b3d86ae8b2466ada6a5b9"],["D:/Blog/public/page/7/index.html","bbc0fdb8dd61f31e4b18edb876db22ed"],["D:/Blog/public/page/8/index.html","42dac6894a20c3052af2f14be47913f2"],["D:/Blog/public/page/9/index.html","7d5f02a68f75c9c43db7112a38b7bfb7"],["D:/Blog/public/palindrome/index.html","8947f4e6ad1bb35f3fa7b81bac7e9757"],["D:/Blog/public/partial-derivative/index.html","30cb9bad99be0dd36752312f33c39cbf"],["D:/Blog/public/pass-by-value/index.html","dd968e503f82b3743047e9138011d6ce"],["D:/Blog/public/pictrue-bed/index.html","4c1284d4a288d0899b2822c2a0cee74d"],["D:/Blog/public/principle-of-opening-and-closing/index.html","7c9e8bdedb72a540a308033faeff04d4"],["D:/Blog/public/principles-of-computer-organization/index.html","523881d0161b828cef9c51720f0da880"],["D:/Blog/public/prototype/index.html","55147ecb39da309b478e90e4a3a3831b"],["D:/Blog/public/queue/index.html","a4240a84c42fffdc83588728d50662d7"],["D:/Blog/public/redis/index.html","b66873407fe2d059f8670aef4d31d53c"],["D:/Blog/public/reflection/index.html","fc70da12abf767a21266d6e4daefca10"],["D:/Blog/public/resume/index.html","868a22be8c5e3dc9b51ff989ae90aba2"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","485fd27aff346f73a9e556306b2aa450"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","c8a6e787a06fcace655408efa2ee6816"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","4ba370664d09f89cc0a5cc975b6eba4e"],["D:/Blog/public/series/index.html","a8df0e900e876d774a9755be948591fd"],["D:/Blog/public/single-responsibility-principle/index.html","f7e9e13597350b46085b27043e4fe32e"],["D:/Blog/public/singleton-mode/index.html","e90147f11aaf41aaeec7cb17c9e602bf"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","0d6e72872ab058b8935a33e7d22ab572"],["D:/Blog/public/sparsearray-sparse-array/index.html","99732ee3bc4554ec60f5a754d28ab1f0"],["D:/Blog/public/spring-architecture/index.html","623877737367639d6312ffcf8af2ce74"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","69d7ee540d07bd3fed6bf3678f3227b0"],["D:/Blog/public/spring/index.html","310cc108eda9f68d47c857d1970e9df4"],["D:/Blog/public/springcloud-alibaba/index.html","ead64d903c21b2d2647f68439942c8c3"],["D:/Blog/public/springcloud-bus-message/index.html","77913ceaf2e0569dc5ca37ad09a69a6e"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","58f3ea0da53070517af2bd1df32e04d6"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","62698440ae4e339e43355781a7cdc5dd"],["D:/Blog/public/springcloud-stream-message-driver/index.html","681e35c4ebc974cb0c8818c937d89ced"],["D:/Blog/public/springcloud/index.html","a93dcc108192616b27d58ea6501a0fe7"],["D:/Blog/public/springmvc-environment-construction/index.html","d93b9120cb502e62315064072e0db96a"],["D:/Blog/public/sql-injection-attacks/index.html","548837ee090e9ca4bf946c4eed190672"],["D:/Blog/public/stack/index.html","7bbf63126df9bb6bea1af05504c1ad70"],["D:/Blog/public/state-mode/index.html","af84be653acc042887d7291c35e7c314"],["D:/Blog/public/strategy-mode/index.html","3d16d1a48ae5875f6efa9ac413f2b312"],["D:/Blog/public/synthetic-reuse-principle/index.html","3e91c295a512a595518ee29206526b42"],["D:/Blog/public/tags/C/index.html","0d67fc1aba651e1764c280d061be2d2e"],["D:/Blog/public/tags/Concurrency/index.html","5652ab11e3a333df2fbb9ebe9b12c987"],["D:/Blog/public/tags/DesignPatterns/index.html","d7fb0c2d1f333bd6f93c544d6fe55e15"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","85bc05fb86767a1a16c5ebdb7050a66a"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","4c2dd7ae75fc2574ae8d63e3985bcf7e"],["D:/Blog/public/tags/DistributedMicroservices/index.html","a8076b7e39e9a8bbb08b09974303c961"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","df48d9fa1d2691c508e8bc7fbe97be61"],["D:/Blog/public/tags/Interview/index.html","56e1de40307a26edd92094e168f14af7"],["D:/Blog/public/tags/Interview/page/2/index.html","2461b7ab7c8734706063493fd7867d81"],["D:/Blog/public/tags/Linux/index.html","a4b72944c37864144ab671d8223c71aa"],["D:/Blog/public/tags/Operating-Systems/index.html","3fbb7864701fb4a880588a7da0288e9b"],["D:/Blog/public/tags/about/index.html","29b3ec6284d2faa596912429c9629f63"],["D:/Blog/public/tags/ad/index.html","6abe83f670d9cbefa1a2a2a04a0d2b35"],["D:/Blog/public/tags/dataAlgorithm/index.html","9dc5d736f5125c84dd480498e72a3da4"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","493bffc00c7bda461a8d78109cb562cb"],["D:/Blog/public/tags/docker/index.html","40476f687db07991c6be6583f5e06752"],["D:/Blog/public/tags/frame/index.html","2b3942a85562781566e4a4f57fd94c87"],["D:/Blog/public/tags/front/index.html","d8be94fe871a428903d8054f01e1348d"],["D:/Blog/public/tags/index.html","6232fa609b83d5ab4592fda348383192"],["D:/Blog/public/tags/jvm/index.html","f70fd5c6f81e3d4cad62a93a5d778757"],["D:/Blog/public/tags/maintain/index.html","04c65e35e32b9e51c2659789d06001a8"],["D:/Blog/public/tags/math/index.html","2bd10f6f1cd32525a259b4e4f166ff37"],["D:/Blog/public/tags/math/page/2/index.html","2d069cd7ce19a4afbaf60237b1743e28"],["D:/Blog/public/tags/network/index.html","243ab3731c8839e19e8256bd57ce9874"],["D:/Blog/public/tags/resume/index.html","53e626c3f2dd9389d5cad335be6bf08a"],["D:/Blog/public/tags/safe/index.html","b61ca5af47627e4751f079196c91ceaa"],["D:/Blog/public/tags/sql/index.html","7bfa58947997cf23e1e91f65c63ae41b"],["D:/Blog/public/tcpip/index.html","992c6e176bf63ed92b0ce023912ac2f5"],["D:/Blog/public/template-method/index.html","479c29b8db037d982d7545d9d6c6e04d"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","1b986a6339af4a5d3106fe412ccaa83e"],["D:/Blog/public/thread/index.html","34a79fb48ae988cf9b3580381b1487d1"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","08ff6d051de5646bb1e36c08eebedb0f"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","442a8018afdaf1d248c8fb19ca4db64c"],["D:/Blog/public/visitor-mode/index.html","6fc5c21e539d90165c53f4410eb05479"],["D:/Blog/public/xml/index.html","768520aafa3e881834a4859cc68e4e72"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","78ce6325f3018674cdbf26a0d4cf4634"]];
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







