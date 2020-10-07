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

var precacheConfig = [["D:/Blog/public/404.html","928cf6803397c791e555a4adc96a213d"],["D:/Blog/public/7-sorting-algorithms/index.html","913863f363e196c75222ae47fc60b764"],["D:/Blog/public/adapter-mode/index.html","4f292ca39ec23cd6892c65844daaf673"],["D:/Blog/public/agency-model/index.html","c4c454bb70b313cbf4fa43e62a6d055a"],["D:/Blog/public/appearance-mode/index.html","b5b0ee2cb0b8812484a6b14285e250c4"],["D:/Blog/public/archives/2019/01/index.html","b963af5700fd84cfcc468a4b8f859ddf"],["D:/Blog/public/archives/2019/07/index.html","2aeb2e18b7a976188813c2a6ba47fe3f"],["D:/Blog/public/archives/2019/12/index.html","4cced9c79294f92280ec2ee9da7b7185"],["D:/Blog/public/archives/2019/index.html","5e743a14ca7dbdb5d6b4119d624b39b5"],["D:/Blog/public/archives/2020/04/index.html","3157ad23a2d065ce3a37f83966972f55"],["D:/Blog/public/archives/2020/05/index.html","5c3f43c32a38d8bf5af034383a8cf23a"],["D:/Blog/public/archives/2020/05/page/2/index.html","bd1da627cc6c20474a76f1f82c50310e"],["D:/Blog/public/archives/2020/06/index.html","d0b408efa78857be469cb4e82470ed65"],["D:/Blog/public/archives/2020/06/page/2/index.html","116652a7a962089f133f9d17b39a99d7"],["D:/Blog/public/archives/2020/06/page/3/index.html","6c6f76a7c505935dc620eae3009da0df"],["D:/Blog/public/archives/2020/06/page/4/index.html","4e63c7c40401af44673909eb600e686d"],["D:/Blog/public/archives/2020/07/index.html","a4f5c18da4c218dc4becb358b6c98dcb"],["D:/Blog/public/archives/2020/07/page/2/index.html","b7ffb8cb9f4addbf6739c058d1f16d57"],["D:/Blog/public/archives/2020/07/page/3/index.html","adf946a7b95641a71e251e2c052a24d6"],["D:/Blog/public/archives/2020/08/index.html","7d29a82fd52bf7318b534007972a9ae0"],["D:/Blog/public/archives/2020/08/page/2/index.html","0427e101ee7bae19902af5a90c9e6993"],["D:/Blog/public/archives/2020/08/page/3/index.html","fa872a9096c9eb07dd1cc476e28f9072"],["D:/Blog/public/archives/2020/09/index.html","8125e1c5f8743db43798cef38cb5ac20"],["D:/Blog/public/archives/2020/09/page/2/index.html","c1432592e6a3d5986f70aa4766fd95f5"],["D:/Blog/public/archives/2020/10/index.html","e7eb9fe6abe442bb770fa35974e45f9f"],["D:/Blog/public/archives/2020/index.html","b5fa97a14c4061e84909d465ebd2a502"],["D:/Blog/public/archives/2020/page/10/index.html","6923306d7de8bc2436c20de3d4052526"],["D:/Blog/public/archives/2020/page/11/index.html","ff0bfdd309106659bbaaf08629ff6f56"],["D:/Blog/public/archives/2020/page/12/index.html","09e39d5f9e01e6ff762d5fbf1596d365"],["D:/Blog/public/archives/2020/page/13/index.html","86dae591a2cbdf326db00785610953d7"],["D:/Blog/public/archives/2020/page/2/index.html","eeeeae00b2adefac8953b7f99b25435f"],["D:/Blog/public/archives/2020/page/3/index.html","f4fd02d50ec71e54f6fdfc872097d444"],["D:/Blog/public/archives/2020/page/4/index.html","d680ae91e55a542ded0ca57e5859bcd4"],["D:/Blog/public/archives/2020/page/5/index.html","9408c266dc8c08bccea503d4ba729176"],["D:/Blog/public/archives/2020/page/6/index.html","1a8e58cdcd08bf04d504ca1f116acdc5"],["D:/Blog/public/archives/2020/page/7/index.html","27534aecd02e600fa5b0845b33ea89d9"],["D:/Blog/public/archives/2020/page/8/index.html","be42c27e2ae20e1422684b536b5e1971"],["D:/Blog/public/archives/2020/page/9/index.html","1964fdd2619b3df56496e3a43bfe6be3"],["D:/Blog/public/archives/index.html","6b87e00cade654002b12ad1788762186"],["D:/Blog/public/archives/page/10/index.html","3fc59bb378281efead2cf7b2e0514c9a"],["D:/Blog/public/archives/page/11/index.html","7b3fe0249814b62ce9d0f150265bca90"],["D:/Blog/public/archives/page/12/index.html","76dd3142650556c0b95560257a22f3b6"],["D:/Blog/public/archives/page/13/index.html","2f2f145725bf3093a9837a6b0573f3d2"],["D:/Blog/public/archives/page/2/index.html","cc1a329ca735cea3f64f47c845080b01"],["D:/Blog/public/archives/page/3/index.html","8925f2267ff480bfbd5f1fc13672a694"],["D:/Blog/public/archives/page/4/index.html","64af637823fc77bf013c4730feaad11f"],["D:/Blog/public/archives/page/5/index.html","1ee24191d98a2ff5771fc9d146be4d48"],["D:/Blog/public/archives/page/6/index.html","15cf1fe4dc2417b9d32530b7fae93490"],["D:/Blog/public/archives/page/7/index.html","0d4618ebbdf053870229ee6f24585812"],["D:/Blog/public/archives/page/8/index.html","8dce8d14f550ef3d0526fff151c8eef8"],["D:/Blog/public/archives/page/9/index.html","fb7e5a3798dce1c2e1331a7d57840837"],["D:/Blog/public/array/index.html","afef01625ae4029c725f399b1c1521e8"],["D:/Blog/public/binary-search-algorithm/index.html","24241f88aaa9742ee5456e8a591e94f2"],["D:/Blog/public/binary-sort-tree/index.html","a94d2019fafd855c6211705bd9d47a1d"],["D:/Blog/public/bridge-mode/index.html","8cb675490ec9b7b80cae2df9c0675981"],["D:/Blog/public/builder/index.html","3e0f72c0d86cd154618e5404f891f9fb"],["D:/Blog/public/c-pointer/index.html","d85a8f2ac9cb85f3712e512532354fd8"],["D:/Blog/public/calculus/index.html","0c80b807fb5d4a8ea77bd0c70bf5b084"],["D:/Blog/public/categories/C/index.html","533a35cfe50b2baef48c5c948d094987"],["D:/Blog/public/categories/SpringMVC/index.html","11b4bb1e376ce1cf4542ab5aaee0c563"],["D:/Blog/public/categories/index.html","dcc00f08a378410a51c3f32521bceeba"],["D:/Blog/public/categories/linux/index.html","634f49766b1dc0add78a2f91a5e598cf"],["D:/Blog/public/categories/分布式/index.html","009512f0fa8a78311ebd078b8b559868"],["D:/Blog/public/categories/分布式/page/2/index.html","d16c8a79468a2b10507694a95c819908"],["D:/Blog/public/categories/前端/index.html","adb598369993e591e68eee1b1c94f341"],["D:/Blog/public/categories/设计模式/index.html","b10aa736274da59bac6d518d58dd18f2"],["D:/Blog/public/categories/设计模式/page/2/index.html","f368aa577ac256a4a67cddf262a2b9c2"],["D:/Blog/public/categories/高数/index.html","d27bc3501f55021f63160128ca1884e8"],["D:/Blog/public/chain-of-responsibility-model/index.html","5496e080eb0edcaa4e1ebf5b845b5548"],["D:/Blog/public/chinese-and-english-switching/index.html","b5bd6abf1bd8bf9f9e0e0ba00df84271"],["D:/Blog/public/combination-mode/index.html","fe7fd581924921a55075a01f6cd702b9"],["D:/Blog/public/command-mode/index.html","8397ca8543f3d7cef9b6657535849042"],["D:/Blog/public/common-commands-of-unix/index.html","a69bac5ce68e249fdcfd52d16f6d3b0e"],["D:/Blog/public/computer-network/index.html","cba3d54bb06df478cf5bb0694355f877"],["D:/Blog/public/concurrency-principle/index.html","521135e90f0cceef4097f8bfbaa526b3"],["D:/Blog/public/continuous/index.html","3719433184269c245a07d4e7e4b3b30f"],["D:/Blog/public/contract/index.html","315bbed5bfb43f8a886a2f8bca189ce5"],["D:/Blog/public/css/index.css","b0e3b2e9268efb015097ce8f750d266c"],["D:/Blog/public/css/var.css","a50f4daf5cf5c826985291c4fca1deae"],["D:/Blog/public/data-structures-and-algorithms/index.html","3e598f13c0ce74183055a3c641401d72"],["D:/Blog/public/deb/index.html","f0486a319117d253a76c0a2e74fffc4b"],["D:/Blog/public/decorator-mode/index.html","31edb4d1ddce77dbf774ec11099faec3"],["D:/Blog/public/definite-integral/index.html","65f71aa7e0cef19209486e1d86b7ce26"],["D:/Blog/public/dependence-reversal-principle/index.html","2c9984d70a80462a68feecf7423bbf8b"],["D:/Blog/public/derivative/index.html","d8e626791f032c43ffa9c531d0461196"],["D:/Blog/public/design-patterns/index.html","7b6617dea37e0654e1ad7d16b665f259"],["D:/Blog/public/differential-equation/index.html","33eda0065e12edc3d52415b31316aeec"],["D:/Blog/public/differential/index.html","a6a29e00ac45506f2abf8049917b53b6"],["D:/Blog/public/dimits-law/index.html","3b1e940655644660046d11ff4b052a16"],["D:/Blog/public/docker-virtualized-container/index.html","3a8485f1c363d376d777cab102496bdd"],["D:/Blog/public/double-integral/index.html","4567b6f75ac5093dcce20c03cf9b6844"],["D:/Blog/public/dynamic-array/index.html","1a7adbab2528b653d7d9f4dd13e81cf0"],["D:/Blog/public/encoding-algorithm/index.html","ad5a6c7b09c2e8312966f1bb8c0b8a71"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","2db96f50973ed388586f7c95c7b7920f"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","b3fd6d7a72ce3ceac5d5f7ded8f41627"],["D:/Blog/public/factory-design-pattern/index.html","847dcce1c748916a32ec51223e96a5a2"],["D:/Blog/public/flyweight-model/index.html","67c576530b17aa9473b93d604543c3a3"],["D:/Blog/public/function-graphing/index.html","fc3b6782b05a09e9caeff792098404d2"],["D:/Blog/public/gateway-service-current-limit/index.html","bb41664aeea43954338cf0a2e74c484b"],["D:/Blog/public/gc/index.html","d083f4115f36a17cb95cbdf8f59b833c"],["D:/Blog/public/generalized-integral/index.html","f3cd31f665357e269d71dd53122364b6"],["D:/Blog/public/google8102e2f35ce9e391.html","4f91251d02a272fc06a6c5122227e858"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6dd20e0f44c2026fb583b3e8a0dd8741"],["D:/Blog/public/hash-algorithm/index.html","9eba37113e506ea0c451ff2248cfa9ab"],["D:/Blog/public/heap-sort/index.html","e7f7e23f053d4e1f315408e3c12e8ead"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","811d0b4ee82522c41b8346d32f76958f"],["D:/Blog/public/http/index.html","007456b117dbcf9a8628724132d32f40"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","a3e2e46a9754b983985aed186fff8719"],["D:/Blog/public/index.html","1fd944ec328f402aba31106a2d3944de"],["D:/Blog/public/infinitesimal-and-infinite/index.html","7a242cb44f9229da1460b42b4edc8bc2"],["D:/Blog/public/interface-isolation-principle/index.html","32d1b39c0cdd5842e9fc7757b56062f6"],["D:/Blog/public/intermediary-model/index.html","979505e8bbef631b950cbea60c5c6764"],["D:/Blog/public/interpolation-search-algorithm/index.html","30e041e48ca2b038b00cd596f6367aa9"],["D:/Blog/public/interpreter-mode/index.html","5c2ab593b9781bb8b28bbee2e72cd7a8"],["D:/Blog/public/introduction-to-computer-network/index.html","bc2cc9f9e9d34a41f94a210830ab3f4a"],["D:/Blog/public/introduction-to-operating-system/index.html","05aa77e43ed0106006c7b516f4a2318c"],["D:/Blog/public/inversion-of-control/index.html","f77cab295e0542fc318f6a74740e3a59"],["D:/Blog/public/io/index.html","47bbc60e007aa877c1d3d95898af0ffa"],["D:/Blog/public/iterator-mode/index.html","8d059f18ea22b53ec7132c0e8b53c8e2"],["D:/Blog/public/j2ee/index.html","7e597dac2293b0c74c1c3977a71bd669"],["D:/Blog/public/j2se/index.html","742b727192d97b4b4abb55e4b529f7d6"],["D:/Blog/public/jdbc/index.html","5a563de57f953c59d4383ba6a96e2303"],["D:/Blog/public/jdk/index.html","d5c242671dfef8325ec4440fe094a03c"],["D:/Blog/public/jmm-memory-model/index.html","05bf2db31732163f7ad2165e194a9036"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","e5e194af593c33e4910548c1ec51262f"],["D:/Blog/public/law-of-robida/index.html","2858c162f93427fd7ddf9f740d8f72ea"],["D:/Blog/public/limit/index.html","5a76249bbfac7f5ab932510b5580110e"],["D:/Blog/public/linear-search-algorithm/index.html","b349e26a4ac7491f61e16fdcb508957d"],["D:/Blog/public/link/index.html","ab9db79e007d49d996c9dc015699eb03"],["D:/Blog/public/linked-list/index.html","9902fe915bc879ca4d7d690d2c21bb72"],["D:/Blog/public/linux/index.html","4f4155ff8f702084191d785ec535606c"],["D:/Blog/public/liskov-substitution-principle/index.html","dc5b445869c738f7b45835909a00f941"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","eda218032ca1c8ddc778a30b579eb41a"],["D:/Blog/public/maintenance-1/index.html","f946efd665e5e4e809a65b2570e80224"],["D:/Blog/public/maintenance-2/index.html","873e836925d228b532c9f57485741a10"],["D:/Blog/public/maintenance-3/index.html","0badf5e26bd119e5879b0b17c4511ed3"],["D:/Blog/public/memo-mode/index.html","002b6ed4d72d47344c9d021d07ab1b1e"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","8954b598d4c557ca2d442ed15be407be"],["D:/Blog/public/multi-function/index.html","978cee5d5e17e581f01068037def39d0"],["D:/Blog/public/multithreading/index.html","36a033558137218fa0eb98b26897fad0"],["D:/Blog/public/mvc/index.html","5efb48df2e7555c2c84ea10bfaa166d9"],["D:/Blog/public/mybatis/index.html","5d6f1672a7613864054705e6cd104f74"],["D:/Blog/public/mysql/index.html","674e510c19524d58fbdcaa6b3e2eafe3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","612f6cb80a82e8550bea5e018da1b8f3"],["D:/Blog/public/objectoriented/index.html","8315cc2f0048b042498e4feff0745f3a"],["D:/Blog/public/observer-mode/index.html","e1d382d866f30c2cab4d7e1d37814fa2"],["D:/Blog/public/operating-system/index.html","70690b163c769caeb7204b7e04a19fb4"],["D:/Blog/public/page/10/index.html","3c97a7b32b6c37c8cb0a92c2834c5439"],["D:/Blog/public/page/11/index.html","9604ce5aa0c9f21099532c28b5f94b65"],["D:/Blog/public/page/12/index.html","78b8023942255e3d80e904a993270e81"],["D:/Blog/public/page/13/index.html","63917bfa62a0c43c1fca2c043e7b473a"],["D:/Blog/public/page/2/index.html","f8d01871e7fb3aa5322d236bbd874eca"],["D:/Blog/public/page/3/index.html","529cd2db85e20c6d1bdb3e9aded12537"],["D:/Blog/public/page/4/index.html","0c284d896de421914d057c18003e254d"],["D:/Blog/public/page/5/index.html","7b90ff3ec64cb8f888a1662e428c383c"],["D:/Blog/public/page/6/index.html","19dc4b322c7cae7de9eb5206f3b3e48c"],["D:/Blog/public/page/7/index.html","f0d33b526f6d788fadfdcd697bc7fbc4"],["D:/Blog/public/page/8/index.html","015f4543e6ee200f29f08a583364cc4f"],["D:/Blog/public/page/9/index.html","dcd2ccffb9b5bfabb171792b03602778"],["D:/Blog/public/palindrome/index.html","baaf910545543d55febcafa8e843d11d"],["D:/Blog/public/partial-derivative/index.html","82de709d9e178bbe29d3efa2ac8874ba"],["D:/Blog/public/pass-by-value/index.html","7798ca83c7de978d672b91b7678c22cd"],["D:/Blog/public/pictrue-bed/index.html","6ece65ae85227f1a191566e7525cd55e"],["D:/Blog/public/principle-of-opening-and-closing/index.html","8e74b67ef1423e3b991f2cf632f4f607"],["D:/Blog/public/principles-of-computer-organization/index.html","0e1bb0e229b2080ccc39f64c4330603f"],["D:/Blog/public/prototype/index.html","15fb8b7f050fb17f2bc516629520c343"],["D:/Blog/public/queue/index.html","6936d5cd66f748ae8bb23b89d277ca58"],["D:/Blog/public/redis/index.html","454a295d16c0d906c21291f740d03bb4"],["D:/Blog/public/reflection/index.html","08b7cf3bce023236897e68b04bbc7f93"],["D:/Blog/public/resume/index.html","54fa4bc7609f86c41d1f956bdab879a1"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","fb6aa4623c696119506014dfb7582ec5"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","8658ed4b1f7d89900e533c8ff6f1a1c9"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","bd2bd80bf6b29b6a5fdc8810ca1f452a"],["D:/Blog/public/series/index.html","e3f8cee8ab243f5526d677863783338e"],["D:/Blog/public/single-responsibility-principle/index.html","e6aa3acb504e482a1e68f3a454ab8405"],["D:/Blog/public/singleton-mode/index.html","4b2700ba1766e3b0be96f3c11fec369d"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","82cd677cfb0a40399bd2f484b459060a"],["D:/Blog/public/sparsearray-sparse-array/index.html","7105f6ec0f20f1744f31dd776a8a39ef"],["D:/Blog/public/spring-architecture/index.html","4a28ecd5a6aeb9085a3d164f86bc8d74"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","c41cd859268e5d2e2fccfdd85eb13eea"],["D:/Blog/public/spring/index.html","43318b2f9b51a314982747941b50601d"],["D:/Blog/public/springcloud-alibaba/index.html","125bc23814afb97b6c6a0553ffcfd406"],["D:/Blog/public/springcloud-bus-message/index.html","e866d341138e7cf23aef9f1d93c2c251"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","9107951fb2fbfc22e7de4562afa20446"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","8e0821c3d6850ab4660c6928f0631289"],["D:/Blog/public/springcloud-stream-message-driver/index.html","43a551e6b1a14fddb39e7883ef32bdbd"],["D:/Blog/public/springcloud/index.html","e40bbf6ebeb4a97b15b8b3cace41baca"],["D:/Blog/public/springmvc-environment-construction/index.html","0984eaf651139be76ad59564dfa0ac52"],["D:/Blog/public/sql-injection-attacks/index.html","0a82cabfcb52070e744119fe9661f590"],["D:/Blog/public/stack/index.html","8e4993f356eefaabbd425303f7bd90b5"],["D:/Blog/public/state-mode/index.html","9b4f4cdc5b2f13b0ab35c0dc5fbe326f"],["D:/Blog/public/strategy-mode/index.html","1c75345b191cb1a6ac698cec4f597872"],["D:/Blog/public/synthetic-reuse-principle/index.html","4087611850005b286c15faa1c78c684a"],["D:/Blog/public/tags/C/index.html","eb63a8bdd28e7b9ccd4202fb320362f1"],["D:/Blog/public/tags/Concurrency/index.html","9c25ba21e0f728ed8240844ff4162d3d"],["D:/Blog/public/tags/DesignPatterns/index.html","11eef86087f651ca75a959f5f895e70e"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aeb18ea2474af7de6f02c8c65fac6060"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","9e44bbe30620dee4ba34b9cfe3c0a128"],["D:/Blog/public/tags/DistributedMicroservices/index.html","255109ca3b60a8c6054d6e4c54dab404"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","4cbd3b143c1b5375b3982ece3911b072"],["D:/Blog/public/tags/Interview/index.html","46e215e2f62dfeaa50ae72f1b5f09f5d"],["D:/Blog/public/tags/Interview/page/2/index.html","3bd7080016e8533dfaea1e6f36de3157"],["D:/Blog/public/tags/Linux/index.html","2dd2257dc372e4f8f71aed5104dc192e"],["D:/Blog/public/tags/Operating-Systems/index.html","383d8e41e902e417b039cde45a8da6dc"],["D:/Blog/public/tags/about/index.html","09bb6f6924f5c693b4fb5855e617184c"],["D:/Blog/public/tags/ad/index.html","a63e796493cce6f8391ebd047787e8f0"],["D:/Blog/public/tags/dataAlgorithm/index.html","bdfcbf1aa97069ae77932ab55e78900f"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","6b68529e3dded378e67720877fc5d13e"],["D:/Blog/public/tags/docker/index.html","200ec4bd18e724ea224d890e33a25680"],["D:/Blog/public/tags/frame/index.html","0f598ead831528a12f7a34339880ff50"],["D:/Blog/public/tags/front/index.html","d8d243bb5f70a7f9359667c763be89d1"],["D:/Blog/public/tags/index.html","6397dbe372fc5ee89cd40dbbbb699f2d"],["D:/Blog/public/tags/jvm/index.html","3ccc6e63947a8c1815465e51adc3f3f2"],["D:/Blog/public/tags/maintain/index.html","eed02b65b13d49b58e52976b8a075422"],["D:/Blog/public/tags/math/index.html","59240761961ba6e9eb779853e2ce81b8"],["D:/Blog/public/tags/math/page/2/index.html","910bf3a213c69cffd7c0706e2b0a8977"],["D:/Blog/public/tags/network/index.html","c132a56b5df3e6117588821349c4d953"],["D:/Blog/public/tags/resume/index.html","c281054a21f29d803fe69ff8f5558b22"],["D:/Blog/public/tags/safe/index.html","1a5fb7636a73336e6e67d326d11623fb"],["D:/Blog/public/tags/sql/index.html","2b5a53634e3266932c25baaae41788f5"],["D:/Blog/public/tcpip/index.html","98b4df38b18d747fe59fe95a73a729c6"],["D:/Blog/public/template-method/index.html","fea7baa0f6fd7b2fca00f29d3dc8b4fb"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","18fe50cfc153e26f5b47ba9c63ec5d47"],["D:/Blog/public/thread/index.html","1175ddd68164815322000f022881689b"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","3c8c8e566ba3a808312767143422f196"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","e303a1c16e971fa3befbf939c4000655"],["D:/Blog/public/visitor-mode/index.html","d7799b7c92eb8ea1babfce805613d1b2"],["D:/Blog/public/xml/index.html","cab8adc6803e857fe6607f25c0170f5a"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","1976e6baa4487d2143a57b63cc08549f"]];
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







