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

var precacheConfig = [["D:/Blog/public/404.html","028d21de5b1385b4d93aacab614a99f9"],["D:/Blog/public/7-sorting-algorithms/index.html","8b699f17e69b9d8dfdb57dbf1560cf93"],["D:/Blog/public/adapter-mode/index.html","8cf006057d9a1b2024e68d4433e3718a"],["D:/Blog/public/agency-model/index.html","9cb4643df05d85896808f5e6414b8e16"],["D:/Blog/public/appearance-mode/index.html","7d7f7fe46933e2e328049e0f67a199e2"],["D:/Blog/public/archives/2019/01/index.html","7aab630394637a73fce49d76d88266e4"],["D:/Blog/public/archives/2019/07/index.html","3abf7f7202445c1ef4d6f1fcb28c38e6"],["D:/Blog/public/archives/2019/12/index.html","fe61aa40824fe8b918138ed830ba0a9e"],["D:/Blog/public/archives/2019/index.html","a581dfcc8bee846436ab217819c6e2af"],["D:/Blog/public/archives/2020/04/index.html","239ace8707eee6f765fb3e4db48de163"],["D:/Blog/public/archives/2020/05/index.html","65b85c0dbe96b63891f1cb781038618f"],["D:/Blog/public/archives/2020/05/page/2/index.html","d9ca1cea52d11ba6b4d59e7dae29080c"],["D:/Blog/public/archives/2020/06/index.html","0acb13c57b923971634f23d534d6b03c"],["D:/Blog/public/archives/2020/06/page/2/index.html","8b4aeb9b16644e79baff112c50f21ae9"],["D:/Blog/public/archives/2020/06/page/3/index.html","62a2792f8b3b9f3d75a907b6dc4fc894"],["D:/Blog/public/archives/2020/06/page/4/index.html","ba77d9c4956ad859425a39d91e4fcbc0"],["D:/Blog/public/archives/2020/07/index.html","7dbfb2960f5791bd0fecfecdf92e6473"],["D:/Blog/public/archives/2020/07/page/2/index.html","fe949529e9fba34fd77138c783c2af11"],["D:/Blog/public/archives/2020/07/page/3/index.html","d0f697c77e31e0a671ad96452be66b19"],["D:/Blog/public/archives/2020/08/index.html","91ae3e02067e62e588b8700c883489e5"],["D:/Blog/public/archives/2020/08/page/2/index.html","a9151977800a5eb97deafdf7f26c8393"],["D:/Blog/public/archives/2020/08/page/3/index.html","186f52dfcfa9599a01d27d1b74dd8e62"],["D:/Blog/public/archives/2020/09/index.html","e409a8ba7d720a0fe41ee2d85974d747"],["D:/Blog/public/archives/2020/09/page/2/index.html","8d2260eec4f16cb49168f06b8793912b"],["D:/Blog/public/archives/2020/index.html","cb473a7350d9742ad0597f069b98bbd9"],["D:/Blog/public/archives/2020/page/10/index.html","9e1b3f0a43616960aab36f216c9bc358"],["D:/Blog/public/archives/2020/page/11/index.html","e14c381d71e4727d49fd63e085a28001"],["D:/Blog/public/archives/2020/page/12/index.html","3bccace6057630286e4195d960ba6302"],["D:/Blog/public/archives/2020/page/2/index.html","50622e1282a2ab6e2e13a76bb31be1db"],["D:/Blog/public/archives/2020/page/3/index.html","8374ad23f96a00efe876b42e7451ae27"],["D:/Blog/public/archives/2020/page/4/index.html","1c95bed46dc623fb5b7c5ddf9812909f"],["D:/Blog/public/archives/2020/page/5/index.html","c23e29c29e0e21905c72892054e42724"],["D:/Blog/public/archives/2020/page/6/index.html","2237d49210d39fd91de3e62d0a8de4b8"],["D:/Blog/public/archives/2020/page/7/index.html","d245a110d13c4cd50c578a2cdd3db9f7"],["D:/Blog/public/archives/2020/page/8/index.html","4e4600502ee8792e9889df5c93435c62"],["D:/Blog/public/archives/2020/page/9/index.html","cc94463f8a7e9f98256778e45f26307f"],["D:/Blog/public/archives/index.html","16e2a4fb3b83396b78bac38d69a11bee"],["D:/Blog/public/archives/page/10/index.html","f8fb1553e1aba6fb3003686486682a62"],["D:/Blog/public/archives/page/11/index.html","55cae802aefa49bbd6849623364840fd"],["D:/Blog/public/archives/page/12/index.html","9ba460d8cddb0ae1dd16eb0f30c33d38"],["D:/Blog/public/archives/page/2/index.html","fcc4ecec643ef09f6cd76e075a49ea9c"],["D:/Blog/public/archives/page/3/index.html","89c31a10479f0028208ed230450c134f"],["D:/Blog/public/archives/page/4/index.html","11a69f72f307e712a4e475530746fb88"],["D:/Blog/public/archives/page/5/index.html","9877a22b2876b7a1fc9604a6b8893ec9"],["D:/Blog/public/archives/page/6/index.html","9d3e31dee6897a93ea1bb73f1497515f"],["D:/Blog/public/archives/page/7/index.html","7623087fd88f0f4a54693739a06e1d63"],["D:/Blog/public/archives/page/8/index.html","8f109a3f7c93d884aa4d4ebd910eb066"],["D:/Blog/public/archives/page/9/index.html","e786dadedbe739f40351eebf110fef97"],["D:/Blog/public/array/index.html","3f195d5371a1309737590fe7bd4b1cdf"],["D:/Blog/public/binary-search-algorithm/index.html","5e129ef007967c9725cc94daa9387941"],["D:/Blog/public/binary-sort-tree/index.html","0e1f2c1a870cd5dc5ab6b2fae8a5c76b"],["D:/Blog/public/bridge-mode/index.html","35d6d4d4f56b06cafe05c02fb5d10bc8"],["D:/Blog/public/builder/index.html","16f80c0edbe52be50f490b5a8f6f4593"],["D:/Blog/public/c-pointer/index.html","81309fa0634a8f207cb77efc95b35131"],["D:/Blog/public/categories/C/index.html","39f17ac7eb241438c8fd53e1e303e56b"],["D:/Blog/public/categories/SpringMVC/index.html","50f019fd419d8ba3798acfe873636369"],["D:/Blog/public/categories/index.html","f8586cb9cbd1d959003eb6a233a032e0"],["D:/Blog/public/categories/linux/index.html","12a580dd41837806d3f4cd43257caef5"],["D:/Blog/public/categories/分布式/index.html","8db80216c60b8eec06ff1da486c64ff5"],["D:/Blog/public/categories/分布式/page/2/index.html","2e9c09b057fdfc49c572e287873d5b4c"],["D:/Blog/public/categories/前端/index.html","3134c8794b36abfb927cb56ebf899815"],["D:/Blog/public/categories/设计模式/index.html","9e90d35fc126e5c26ca7766eecffa59f"],["D:/Blog/public/categories/设计模式/page/2/index.html","6b248d1b8f182dc4f60fb4d3b7221dc2"],["D:/Blog/public/categories/高数/index.html","fb636fd8a889ea52e1d6bfa9d7030687"],["D:/Blog/public/chain-of-responsibility-model/index.html","8e0c68250d8ef0d047c4c700308cf12e"],["D:/Blog/public/chinese-and-english-switching/index.html","83130311495ea3899e27a9a236d12c58"],["D:/Blog/public/combination-mode/index.html","f5f7a147f3c24ec41e18883784992e83"],["D:/Blog/public/command-mode/index.html","3a9f5fd199fefa5d8987821021afec10"],["D:/Blog/public/common-commands-of-unix/index.html","0d85893d63dbd7ad723bd3d357fb379a"],["D:/Blog/public/computer-network/index.html","32f204ba33a0f8ffda9267109257322e"],["D:/Blog/public/concurrency-principle/index.html","6ed03c6fcd34a16000662c58310beae0"],["D:/Blog/public/continuous/index.html","5371734b2c0d0ad3782f9ced99c321e4"],["D:/Blog/public/contract/index.html","5d6c37ba26775f926c8913e6d2275110"],["D:/Blog/public/css/index.css","a2190965176941216357e44703d11a38"],["D:/Blog/public/css/var.css","f0efb8b0497db0783d955c2df9676c99"],["D:/Blog/public/data-structures-and-algorithms/index.html","bbef2f56518b7f22f79f3b0539b86946"],["D:/Blog/public/decorator-mode/index.html","11fee005a28fd46c16f5a7e431ea6539"],["D:/Blog/public/definite-integral/1601053742391.png","83f9a6853f9f3699aa9a2b1b795cda27"],["D:/Blog/public/definite-integral/1601055940188.png","874768b432eece5eefe993e934d31cef"],["D:/Blog/public/definite-integral/1601056351353.png","d0ce3ce9ec27ef4fcf60e1b330105399"],["D:/Blog/public/definite-integral/1601056797153.png","40627bc113eee963f7c511e88509ced7"],["D:/Blog/public/definite-integral/index.html","9b9fb9d35b5ff24ea01bd12e385ec787"],["D:/Blog/public/dependence-reversal-principle/index.html","c848f7f89c228f378ca932365830ad7f"],["D:/Blog/public/derivative/index.html","31417dff0f98c14897211ad50597e0ea"],["D:/Blog/public/design-patterns/index.html","9d7603e81c9746e6764b8c04912c1ab7"],["D:/Blog/public/differential/index.html","0acba91baf0490a00f01f9549813502b"],["D:/Blog/public/dimits-law/index.html","31a721890cbe84267c3d7769cbf42599"],["D:/Blog/public/docker-virtualized-container/index.html","58b556fd4afab5b41e6ddcf9eb048152"],["D:/Blog/public/dynamic-array/index.html","7d9d851a3d67ca444d568b017d3ff4da"],["D:/Blog/public/encoding-algorithm/index.html","23742fc82a7d8f30a38d07f066a4fc53"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","df1a85a39686934b57882340f3cb789a"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","cbbdb0fbb72adc230bf8d3e1fa27c357"],["D:/Blog/public/factory-design-pattern/index.html","deff3a2325f34a2ddbbeec56695af474"],["D:/Blog/public/flyweight-model/index.html","bc47be8ba165be1aa37d3aa69d8c9429"],["D:/Blog/public/function-graphing/index.html","3d8766ffe4d63533438f6ec02f910746"],["D:/Blog/public/gateway-service-current-limit/index.html","ea224aa3f3014abc679da61246e36891"],["D:/Blog/public/gc/index.html","35de3b80e78d8383663d159f5613efaa"],["D:/Blog/public/google8102e2f35ce9e391.html","4ac88794864eb99cbf54c4067a4ee3ff"],["D:/Blog/public/gulp-compresses-static-resources/index.html","a0507e60ee9e08b2106d4f3941e651aa"],["D:/Blog/public/hash-algorithm/index.html","ec3f87d471c6ec00907e6cf34be079de"],["D:/Blog/public/heap-sort/index.html","b35a27f3c8d46bcbc40d350d213010f8"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","51fd3debff8cd4318acf2e27f72d3bfd"],["D:/Blog/public/http/index.html","d85e935b75c1092cff60e983aa4ff6f5"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","166e29c06f68e81f680d6686fd311ddd"],["D:/Blog/public/index.html","8ef31d8fbe9ef127a799ab5d7d93bb65"],["D:/Blog/public/infinitesimal-and-infinite/index.html","6bf74eac4631f43a937e3195b8325e72"],["D:/Blog/public/interface-isolation-principle/index.html","5868ae8a3856c8e7577d33c43e88a474"],["D:/Blog/public/intermediary-model/index.html","572de065ccb1a1b8c9f85da263a0e47a"],["D:/Blog/public/interpolation-search-algorithm/index.html","0bf9687c936d81a0f6d78b1760c28445"],["D:/Blog/public/interpreter-mode/index.html","748642ad27e189fa8b6658b2a40cceee"],["D:/Blog/public/introduction-to-computer-network/index.html","117468dc29ebf5cfaed383298b24b85f"],["D:/Blog/public/introduction-to-operating-system/index.html","ff2b36245d875e7f728e25454a5f5aa5"],["D:/Blog/public/inversion-of-control/index.html","18978ed37f2990aff82a7c839bfb061f"],["D:/Blog/public/io/index.html","be498f84408e6673ac3b42f61d8b96b0"],["D:/Blog/public/iterator-mode/index.html","4533dc107ca39aab239b3e9fba834145"],["D:/Blog/public/j2ee/index.html","1db7785a7607bd307cad2c2bf3344154"],["D:/Blog/public/j2se/index.html","ae85b933ab56b96e93cb539fbbec1c5a"],["D:/Blog/public/jdbc/index.html","9df978cbfd18ef73590309c858bf71b2"],["D:/Blog/public/jdk/index.html","10b7fa9b79cedf7995d287b230d9f916"],["D:/Blog/public/jmm-memory-model/index.html","4d93fc3b5141e10823ca1b378d229edd"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","4cb4d79551fa390a859a1d1b78be6580"],["D:/Blog/public/law-of-robida/index.html","e282a5cd1fd20486f30eff9b3657268e"],["D:/Blog/public/limit/index.html","e88483e338e09b0681b0624c07605bba"],["D:/Blog/public/linear-search-algorithm/index.html","f90920359ad12c7711ac437b585cf499"],["D:/Blog/public/link/index.html","5faca8d5543f23038126034e2f871832"],["D:/Blog/public/linked-list/index.html","afab5c2cc200a077db4e694aca6f212f"],["D:/Blog/public/linux/index.html","4771bb91856a3e6a63617f610a3a48f2"],["D:/Blog/public/liskov-substitution-principle/index.html","e0d9d7f29b187676897864d05ad455d3"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","5474bd3e2dbe0eab246eee871f372448"],["D:/Blog/public/maintenance-1/index.html","46178d089e15fedaead1b5d3f2fca611"],["D:/Blog/public/maintenance-2/index.html","910802b749afaef7cd2c079cad81c85b"],["D:/Blog/public/maintenance-3/index.html","28a2047a4470ebc6a54ae32f00c9687b"],["D:/Blog/public/memo-mode/index.html","8468e64ce848c40adaa4c2a0c8d4b699"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","75dffad4aa1513487a1104f0eca8c6ef"],["D:/Blog/public/multithreading/index.html","251c26ebb683e6180bc3e32a34dd8ca1"],["D:/Blog/public/mvc/index.html","50b40c01fdd7614f8e4f99c461d53fe7"],["D:/Blog/public/mybatis/index.html","20b33e82fd3a40c6dde54bd97d5287d3"],["D:/Blog/public/mysql/index.html","1a104b9dd0913580a180363f1c34c7cd"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","00e52a4e69420f54d6412de1184e8b97"],["D:/Blog/public/objectoriented/index.html","639a1b511daf10514a867bed4bd00ff8"],["D:/Blog/public/observer-mode/index.html","4dcae7477a14c1a7bbb2d17c3308be0c"],["D:/Blog/public/operating-system/index.html","df3837c6310118dd2a5ec5a5faf29463"],["D:/Blog/public/page/10/index.html","62b9edd67e9cc5c6d986d6fe06361e70"],["D:/Blog/public/page/11/index.html","04fd087f825a04414b8a9752481feb3a"],["D:/Blog/public/page/12/index.html","080813b058a679368ab650f9ca4d6301"],["D:/Blog/public/page/2/index.html","b182ab507c43e350ae00b3943d043e88"],["D:/Blog/public/page/3/index.html","2ba93558d053db4f2dcc0fdc6544df1f"],["D:/Blog/public/page/4/index.html","dc592098c1ed70851d8ee2049fbae5fe"],["D:/Blog/public/page/5/index.html","2dc6a9539b7dd5c6bea39a767338629d"],["D:/Blog/public/page/6/index.html","fca41dc3b6bc2066c1428bd033fbe3f7"],["D:/Blog/public/page/7/index.html","5c1dccfbcc983311c10903a69b3f1a00"],["D:/Blog/public/page/8/index.html","4626118ca4910d636be61e99596dcae4"],["D:/Blog/public/page/9/index.html","de387b0f53dad6ece323fd637ef63ae4"],["D:/Blog/public/palindrome/index.html","4b94306c98860f94fcf1983ecc6b770c"],["D:/Blog/public/pass-by-value/index.html","51fc0a8ab2263d9684305aae56e5770f"],["D:/Blog/public/pictrue-bed/index.html","3b0f0b16fb3709fec922b52b617493ef"],["D:/Blog/public/principle-of-opening-and-closing/index.html","ae5986c70a5384a1518e95fe9c64c7fb"],["D:/Blog/public/principles-of-computer-organization/index.html","ac8d134edb029bd291d10746eb794cf0"],["D:/Blog/public/prototype/index.html","7dc31d69d7a70d082802e46c38ffccdf"],["D:/Blog/public/queue/index.html","558246a08dc890833786c1772045020b"],["D:/Blog/public/redis/index.html","92fbf97c685c724162fa6ae5aa078b5c"],["D:/Blog/public/reflection/index.html","ccd088d5e0416c7cba12c8b4d8bef233"],["D:/Blog/public/resume/index.html","47ebe9245615a50a4918bef49348ea7d"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8f64520ffb8c49a12fc70fe996dc28f0"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","db63f85984484d494a74f257d18a4b16"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","8038a60d801779c659392795d622dfcf"],["D:/Blog/public/single-responsibility-principle/index.html","158778d4dcaa790668034cbb96e346ad"],["D:/Blog/public/singleton-mode/index.html","42edc0f95975377ebd0ea9da7a15179b"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","bf21cd60d397804ddc1edae533aef893"],["D:/Blog/public/sparsearray-sparse-array/index.html","2c668fb18f1a215ee99b8af9be41272f"],["D:/Blog/public/spring-architecture/index.html","6555a4c40027e9838ffd16a5ed5055b2"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","e4c38043c88617d0ad2fd52f774124c7"],["D:/Blog/public/spring/index.html","164e2c830cb19a3a6567d6e46e48867d"],["D:/Blog/public/springcloud-alibaba/index.html","33a33f94f490ad5a8ae8cb6ea16f0808"],["D:/Blog/public/springcloud-bus-message/index.html","956b8aae216bd68407a045067860920e"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","a933dc1a4019d8055b8ded41156220f6"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","2186deeb3bac72484b2ad9afedabafc6"],["D:/Blog/public/springcloud-stream-message-driver/index.html","4520f487ecebddf1a60480acfcd03ea1"],["D:/Blog/public/springcloud/index.html","72b9c505337d257a538497de9a99f8d7"],["D:/Blog/public/springmvc-environment-construction/index.html","7f8823b4d90957e39965ab6a1a8ad1c9"],["D:/Blog/public/sql-injection-attacks/index.html","62c2685a22aa206adff9e681c05f5f2b"],["D:/Blog/public/stack/index.html","794d8d24c5c4c35583959cda6bbd74b3"],["D:/Blog/public/state-mode/index.html","482d55f0836c3943c9905c2c80e73d11"],["D:/Blog/public/strategy-mode/index.html","8399e299b366c0c40919b70f570037eb"],["D:/Blog/public/synthetic-reuse-principle/index.html","03c5613ba7e11293131abf280633e494"],["D:/Blog/public/tags/C/index.html","d66b52b7877fc813d2d2dc9b059caa27"],["D:/Blog/public/tags/Concurrency/index.html","9c23f2d1f97603166639e6fff2f479ad"],["D:/Blog/public/tags/DesignPatterns/index.html","87996570abf974950bdd50d4bf16cef8"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f268d0edca1b6eb8daa63d1c352db1fd"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","09441b35e2aa98a72b3151f5616d76e7"],["D:/Blog/public/tags/DistributedMicroservices/index.html","1b365265bf4db0c0dca49f788d0142ca"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","fe61ec1090c981374452db182fbe9ed3"],["D:/Blog/public/tags/Interview/index.html","65475eceebda8dd27833847812c21ee3"],["D:/Blog/public/tags/Interview/page/2/index.html","537fa28a3646053d0b3bbd735940272a"],["D:/Blog/public/tags/Linux/index.html","9c960b07c0e050ba5a42f5fb298dcf3e"],["D:/Blog/public/tags/Operating-Systems/index.html","67237eea3c7745d6625c4f61a5dfe0ba"],["D:/Blog/public/tags/about/index.html","b24e1aa874df50425fc47c0fb767732b"],["D:/Blog/public/tags/ad/index.html","d1f5cb4255d23699438fd5f48a264f29"],["D:/Blog/public/tags/dataAlgorithm/index.html","9860e8cc04b029625b2f14ea99bbf661"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","ded9802bb40923b66ec0c670f8419684"],["D:/Blog/public/tags/docker/index.html","f90a93f95719992671647c8003fe1ee7"],["D:/Blog/public/tags/frame/index.html","1b1578c9a983f01e53204f3862099f88"],["D:/Blog/public/tags/front/index.html","0de9f82cc04ab755c9c9d254a7c910ba"],["D:/Blog/public/tags/index.html","a4693b728dd4a526a5808ef87509475e"],["D:/Blog/public/tags/jvm/index.html","67cc8178459617178d603461f3866349"],["D:/Blog/public/tags/maintain/index.html","382f58b4d82972b96c4bfa1e40ed1ba5"],["D:/Blog/public/tags/math/index.html","0029f3b587bbf3b8807a205bc8dae5a9"],["D:/Blog/public/tags/math/page/2/index.html","a1f4544443ce0a11d4c7dbe2e48de22f"],["D:/Blog/public/tags/network/index.html","b3d3d029bdfd174ae2a485259387327f"],["D:/Blog/public/tags/resume/index.html","e137d285921df7fa70ce29e8ef6a8cfd"],["D:/Blog/public/tags/safe/index.html","6888798433dfad2b1ff6c2ed38d31178"],["D:/Blog/public/tags/sql/index.html","9089b8903e752815193f2404d925acdc"],["D:/Blog/public/tcpip/index.html","c3bd27119482fb2b36b72522cdce730d"],["D:/Blog/public/template-method/index.html","79638617d1600512add8c23484b41ac2"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","dd716388d7406923c1dd289468a1b006"],["D:/Blog/public/thread/index.html","62c600eef041c61ae980585721eff62d"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","216a6bec0caa118464594a79fc3f0be5"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","d1bf7b329f6a629a560b914f3178f5f0"],["D:/Blog/public/visitor-mode/index.html","0d2dc2ac3d93ee73940865d521abbceb"],["D:/Blog/public/xml/index.html","21d11c8dbe709a7ff275e29e558c9cb3"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","0e4fbdb9fb4c80e52b6e940e9dfae7e5"]];
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







