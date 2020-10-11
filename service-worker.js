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

var precacheConfig = [["D:/Blog/public/404.html","b89d7f8c0b88b1496cf5540830ebce55"],["D:/Blog/public/7-sorting-algorithms/index.html","12b55daf1078566f6089dbab0f4dce7a"],["D:/Blog/public/about/index.html","60f8cee02e7aac45497a918564998bcd"],["D:/Blog/public/adapter-mode/index.html","d5243646f63161385209684d976ba01b"],["D:/Blog/public/agency-model/index.html","f51fd942d1801dd59930981f7f8b984a"],["D:/Blog/public/appearance-mode/index.html","63dc3f851946d0a4a954088a181fea46"],["D:/Blog/public/archives/2019/01/index.html","bc5b64fe101fa83ab91d6f3a87ceab1a"],["D:/Blog/public/archives/2019/07/index.html","5aaeb6fe16255b5e24fdda228c7b6e1d"],["D:/Blog/public/archives/2019/12/index.html","8f71a3259375824cedc2387bcf361c29"],["D:/Blog/public/archives/2019/index.html","a6de1ba73726cce14203908ddd63be4a"],["D:/Blog/public/archives/2020/04/index.html","85d3951223fc89b828bdec2ec85fde16"],["D:/Blog/public/archives/2020/05/index.html","384f1d771c76b0f3928747bf8bd2814a"],["D:/Blog/public/archives/2020/05/page/2/index.html","aa0ee28ea0cc2f10b652cb4a37dd1256"],["D:/Blog/public/archives/2020/06/index.html","37251a02cbc489abfdd543dbc901f842"],["D:/Blog/public/archives/2020/06/page/2/index.html","d580c5f7f09296173436b64f797124a5"],["D:/Blog/public/archives/2020/06/page/3/index.html","f5af278c402be1ef0967f274f324d341"],["D:/Blog/public/archives/2020/06/page/4/index.html","40c3024773acde5d3006dc1c7deaf3f8"],["D:/Blog/public/archives/2020/07/index.html","0c5e7873cb39341792f9a773dc5954c1"],["D:/Blog/public/archives/2020/07/page/2/index.html","bfd3511d5a0f0b6cc45f16cdc3366784"],["D:/Blog/public/archives/2020/07/page/3/index.html","eebd610dd651323e985cff4ed609bc0d"],["D:/Blog/public/archives/2020/08/index.html","dad55fdcbe05e9af7453f57d4c3fc115"],["D:/Blog/public/archives/2020/08/page/2/index.html","b2d4bc68704ba69bdbe02738568257a4"],["D:/Blog/public/archives/2020/08/page/3/index.html","1fc8592c1822789a48ba90f44f3ee656"],["D:/Blog/public/archives/2020/09/index.html","b93e57f8ecd59eed8a044c458de9fbb9"],["D:/Blog/public/archives/2020/09/page/2/index.html","185a99481ff02cc998e3818f639a170a"],["D:/Blog/public/archives/2020/10/index.html","e9c4cac3a3addbc205c12d714285a013"],["D:/Blog/public/archives/2020/index.html","fee9811cd7b33805b68cf71c2158a54a"],["D:/Blog/public/archives/2020/page/10/index.html","442608f7905b555aada9e909d229ae27"],["D:/Blog/public/archives/2020/page/11/index.html","6f2f3b3161f55cdeaa9171f22d457b38"],["D:/Blog/public/archives/2020/page/12/index.html","49921ed82e069b625838050c2426f88e"],["D:/Blog/public/archives/2020/page/13/index.html","77b05fad094bff4c2cac740327d2bbc9"],["D:/Blog/public/archives/2020/page/2/index.html","b96f5de4a84b5362f8a15e236f030c77"],["D:/Blog/public/archives/2020/page/3/index.html","322686fdca0bf41eeef07fb5c9d97522"],["D:/Blog/public/archives/2020/page/4/index.html","a93a50c57e92ec91ae4a27bc1f8f9e83"],["D:/Blog/public/archives/2020/page/5/index.html","a22ef665fbfe8d6adc3acc0688ef1acb"],["D:/Blog/public/archives/2020/page/6/index.html","3626de06a41196987a28299fc9cb2938"],["D:/Blog/public/archives/2020/page/7/index.html","d8f6b111e1e383d9f8b2cde12cf74f2b"],["D:/Blog/public/archives/2020/page/8/index.html","fc942a84295e95c9b926cc9dbee0edef"],["D:/Blog/public/archives/2020/page/9/index.html","34cf299f363e7a5f45c7954993289924"],["D:/Blog/public/archives/index.html","b107285afba4b4f194dd33b58d0fa660"],["D:/Blog/public/archives/page/10/index.html","7f113528ccbd6f4238d289abe800b039"],["D:/Blog/public/archives/page/11/index.html","ae4cde1d7bd4fbd7c28402c70d2143d4"],["D:/Blog/public/archives/page/12/index.html","244214e411979068bd14a269e19ba62e"],["D:/Blog/public/archives/page/13/index.html","5202439763edc51cb81ece740303d04d"],["D:/Blog/public/archives/page/2/index.html","3eb7246822e272b38c530569775faf46"],["D:/Blog/public/archives/page/3/index.html","0f7d918f8b2c1263c3cbce6b865bcb5e"],["D:/Blog/public/archives/page/4/index.html","5e16fa66daa0e5623e82acba1a2e43d1"],["D:/Blog/public/archives/page/5/index.html","a762edba23fe2ef0ea6edec9db51dfce"],["D:/Blog/public/archives/page/6/index.html","8a08558d90df2a1d87ae11efd691c3d1"],["D:/Blog/public/archives/page/7/index.html","5bf0da597f745725f3ec79601f1aade2"],["D:/Blog/public/archives/page/8/index.html","27d9a17c76e77218f345492c4a959817"],["D:/Blog/public/archives/page/9/index.html","972746c575362e9501979eb9c9f634f7"],["D:/Blog/public/array/index.html","ecea6c8fb0ff0c76f10a5254172a17f1"],["D:/Blog/public/binary-search-algorithm/index.html","10995bb9439a774981b684f3dca034c1"],["D:/Blog/public/binary-sort-tree/index.html","f169987667237c03ad040d1d6ab137c9"],["D:/Blog/public/bridge-mode/index.html","d1b19993c44830821fa127d871892371"],["D:/Blog/public/builder/index.html","282f42aef36701894e8967633a086f03"],["D:/Blog/public/c-pointer/index.html","05a013ece70842b62f3ac50c3cabd9c4"],["D:/Blog/public/categories/C/index.html","a6b2d6f5f5518cab7efcaf4fe84f482f"],["D:/Blog/public/categories/SpringMVC/index.html","dc06d53c7be8df02e8580385f174260e"],["D:/Blog/public/categories/index.html","6c98a0564bfec561aeedbee5afb53eec"],["D:/Blog/public/categories/linux/index.html","78d73bc5010cd1fd3809a44fe264dade"],["D:/Blog/public/categories/分布式/index.html","ce597b935d8df9d3196e0215ac915e32"],["D:/Blog/public/categories/分布式/page/2/index.html","8b0c51898069b835e7ac4a5c97528865"],["D:/Blog/public/categories/前端/index.html","7e8fb4b4fdec7d35285491aff5bdf3a8"],["D:/Blog/public/categories/设计模式/index.html","00c847e42474d48e7f8a9b4a78c46c7b"],["D:/Blog/public/categories/设计模式/page/2/index.html","355fff98992567838f484e6f8a5449a7"],["D:/Blog/public/categories/高数/index.html","741147fa5969343bbe8b09d20efea791"],["D:/Blog/public/chain-of-responsibility-model/index.html","5e0760b65b92ec59ce42aa0f0fbeba24"],["D:/Blog/public/chinese-and-english-switching/index.html","e254f91fa4dbb2e6a3d8c6846808ab46"],["D:/Blog/public/combination-mode/index.html","8e99dd1bd17e35d1a0cce5386817288f"],["D:/Blog/public/command-mode/index.html","e42e7097cf58edbcfb8a226c66396521"],["D:/Blog/public/common-commands-of-unix/index.html","b1e3917f8f28459032a6a1f92fac5dfa"],["D:/Blog/public/computer-network/index.html","17993a022aea4190786c0fb2c3d22bb2"],["D:/Blog/public/concurrency-principle/index.html","4e7608efceda5c62890030b1ff8b7a0e"],["D:/Blog/public/continuous/index.html","ecfd3b33336c889c152ec7a98efaad19"],["D:/Blog/public/contract/index.html","9c8514a0e35e8d6d3eac036fa857ce95"],["D:/Blog/public/css/index.css","792846bdad96c373fbcacf3275442df7"],["D:/Blog/public/css/var.css","4bf9539c4c903ffe82b0ad824c693c66"],["D:/Blog/public/data-structures-and-algorithms/index.html","ab7adab75725c72750f2bfad01f61de3"],["D:/Blog/public/deb/index.html","8d85256967a7cdd194fb7183f41353f5"],["D:/Blog/public/decorator-mode/index.html","e8bfa7c286c838509c9f940cbea08799"],["D:/Blog/public/definite-integral/index.html","987115d4ca366d7343963ef1d11caa74"],["D:/Blog/public/dependence-reversal-principle/index.html","1586f50537a635b72311ed94475cb313"],["D:/Blog/public/derivative/index.html","3bf5a5c34939fcb64ac21ccc208da7a7"],["D:/Blog/public/design-patterns/index.html","06f87e976f786119f98fdddbd0e4ebd2"],["D:/Blog/public/differential-equation/index.html","9ce7fc852a826e0006f09c64fb7301e1"],["D:/Blog/public/differential/index.html","ef6ccaab6e92daaabd65f2d2dbecb05a"],["D:/Blog/public/dimits-law/index.html","dadeaba6c836f8d5d857853e6bcf0714"],["D:/Blog/public/docker-virtualized-container/index.html","889a06face96828d1964d9ebab8328c1"],["D:/Blog/public/double-integral/index.html","1446053162163f7b86b20313aad2b679"],["D:/Blog/public/dynamic-array/index.html","ce12cadc37426fbeec1bb7cd1f721ed5"],["D:/Blog/public/encoding-algorithm/index.html","0361cbdd302302aca697363b2f5e49ae"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","dceeb53359d56af67649564ef1e322c6"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","b36c26afcbbc91cbba72ec1fa21d1619"],["D:/Blog/public/factory-design-pattern/index.html","2bc7e2ad2bbdf823172dbb0888648c65"],["D:/Blog/public/flyweight-model/index.html","e1b1c26065388f0c3b5e6f840d5b40ca"],["D:/Blog/public/function-graphing/index.html","cb06321f4938376d3ea21a1f26628b6a"],["D:/Blog/public/gateway-service-current-limit/index.html","126b0f8756bb5a2ce942b764f4733acb"],["D:/Blog/public/gc/index.html","6ee26df2f4835dafe7ce153138b67fd6"],["D:/Blog/public/generalized-integral/index.html","914cd3d94f93951f522110ab46596848"],["D:/Blog/public/google8102e2f35ce9e391.html","4187bcf31c8f9897d9d7b2aa636c3363"],["D:/Blog/public/gulp-compresses-static-resources/index.html","11c6c3e48feca1e8233baa6c590d70a4"],["D:/Blog/public/hash-algorithm/index.html","57bcb9d6d20682cea02228646e8da210"],["D:/Blog/public/heap-sort/index.html","56cc8431d5cdd9887716523080fb9510"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","139df9331e4fc844e42ea270c93771ab"],["D:/Blog/public/http/index.html","0caddf62664ebbf1e15191f6bc1afb44"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","7a1f8b8047ed6ee2bfa7c02c2a95ee5e"],["D:/Blog/public/index.html","c5c8664a5486055f92fe50826ecf9d0b"],["D:/Blog/public/infinitesimal-and-infinite/index.html","00fa5025064fe2444d2426b7e1adb5a3"],["D:/Blog/public/interface-isolation-principle/index.html","be9df072f0fff54856fd13e6c4aa7d37"],["D:/Blog/public/intermediary-model/index.html","f8345f8f64915d941cdad0b82a02ca84"],["D:/Blog/public/interpolation-search-algorithm/index.html","34019646167674c9ded1826cc31feeb0"],["D:/Blog/public/interpreter-mode/index.html","e8973293c9c2ad657ce9189bc63b9177"],["D:/Blog/public/introduction-to-computer-network/index.html","f5b25d4dc364ac418efe2738cda16048"],["D:/Blog/public/introduction-to-operating-system/index.html","74e6edb5eee9fe294d9fdcc10f53d2bc"],["D:/Blog/public/inversion-of-control/index.html","23ddf14fc0b8d6556e31a3d5b704981f"],["D:/Blog/public/io/index.html","76d29dcf4992d015feee1cae6cb97d3a"],["D:/Blog/public/iterator-mode/index.html","2f326bf6aac09d7d756ca2ed640a84e9"],["D:/Blog/public/j2ee/index.html","db555f91996d5bf8a6fcc84c3de3efb5"],["D:/Blog/public/j2se/index.html","2c21895c103445dd32653b92210b533b"],["D:/Blog/public/jdbc/index.html","3003522ed304c46a345d2de861174889"],["D:/Blog/public/jdk/index.html","3176e258d21f4bf55dcb9e7ae476d387"],["D:/Blog/public/jmm-memory-model/index.html","4f3462500e91f9750f019577ef2acda3"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","3f02dd565d18e21e82b3fcdb74e65ee9"],["D:/Blog/public/law-of-robida/index.html","39e5cc8feab7206d136240f0444cb1af"],["D:/Blog/public/limit/index.html","33d9b2179a4cbda0d082560daa02b7f3"],["D:/Blog/public/linear-search-algorithm/index.html","d097ebd937ed1ff5b13637b3dc71db58"],["D:/Blog/public/link/index.html","ee11b774872253f44a34f10bcd37207f"],["D:/Blog/public/linked-list/index.html","72bfef46fa911b5c87cac300cac6fb21"],["D:/Blog/public/linux/index.html","cbb4810142ef61a13fbe124aba33d60b"],["D:/Blog/public/liskov-substitution-principle/index.html","1881d003a64dd82bf1ba990078e10476"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","405eafd570bac5daef0c330fe8fed85b"],["D:/Blog/public/maintenance-1/index.html","75434fee402953cdfb94ab1f3e70cf0a"],["D:/Blog/public/maintenance-2/index.html","9de8c5966f4c6183979b955d01d81583"],["D:/Blog/public/maintenance-3/index.html","379b36d87480c5d8b8c2d6efe0f3bc76"],["D:/Blog/public/memo-mode/index.html","74b27bdb65cfabfae93f9367bdf6ce81"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","5df6a4a9a404bfd7c4bcb14e6b2334f0"],["D:/Blog/public/multi-function/index.html","7710978b31378543d794d5f559d48d5c"],["D:/Blog/public/multithreading/index.html","3e051a5ecd26083c7ec88723283fc6f1"],["D:/Blog/public/mvc/index.html","7cc0120d5246124baba8ebb56276c2ec"],["D:/Blog/public/mybatis/index.html","fade22f5307aad1cd8767dc85a43af1e"],["D:/Blog/public/mysql/index.html","1f35cef9d34070ceae2ddaa4a64b0353"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","8b2e2f6fec2d3da732cbedbb937b3d8a"],["D:/Blog/public/objectoriented/index.html","2d8070aabedb167375222dfbc9db5e5b"],["D:/Blog/public/observer-mode/index.html","d1e1d68429048dc70f75d4c597c62baa"],["D:/Blog/public/operating-system/index.html","25b959fbe216dfd17c3ea334ffb88066"],["D:/Blog/public/page/10/index.html","5bd8cae2939d29ec81c6a0db0f961032"],["D:/Blog/public/page/11/index.html","68cbef12923c6e57880e8fd793a3400b"],["D:/Blog/public/page/12/index.html","6e3eb05203985ad10141a9a8edd6c136"],["D:/Blog/public/page/13/index.html","5ae33642c6fe46aa4ace5af24fc5a37a"],["D:/Blog/public/page/2/index.html","c0e046544a0fd7aae028c59e92dc4f79"],["D:/Blog/public/page/3/index.html","227660dc3d3322cb780996e81ac99d81"],["D:/Blog/public/page/4/index.html","57cd9d02170f706eddb4ee00e6c4c4b8"],["D:/Blog/public/page/5/index.html","42ff52329d508e8844dee56d9bcaab85"],["D:/Blog/public/page/6/index.html","5340f7290357280262bdca722257d49e"],["D:/Blog/public/page/7/index.html","d9c6d26346917ef6015d62644f36e3df"],["D:/Blog/public/page/8/index.html","70a8fd94936686871745948cbff4c0a5"],["D:/Blog/public/page/9/index.html","42d248b6933d7a44c6fa7d30b2c14ca2"],["D:/Blog/public/palindrome/index.html","c5e3e3f68dfc0818d795ab508b445186"],["D:/Blog/public/partial-derivative/index.html","0a89c1096b33da246b18e3aafb5a09a2"],["D:/Blog/public/pass-by-value/index.html","7aae27b08b6615264eaba14dc7a78fcb"],["D:/Blog/public/pictrue-bed/index.html","66a342e3079f95ebdeb67412382ffe5b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","35718762b87b5b122dfaa856948655d2"],["D:/Blog/public/principles-of-computer-organization/index.html","d037927cc99a28732e908a2863f7920d"],["D:/Blog/public/prototype/index.html","382e766890a4b0eb5979683b96d8c5d7"],["D:/Blog/public/queue/index.html","102ec27daff72c5c1bc1dab024acb894"],["D:/Blog/public/redis/index.html","08eefe7245f71dcf652f78c894686414"],["D:/Blog/public/reflection/index.html","c58421d3acd11646d8d0c3110c14665a"],["D:/Blog/public/resume/index.html","2d2c71264f3b94ef3d16d2f2ba3431ba"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","dfe2970e002954aaba8422d7066be7cc"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","124a3783301abfd877b3566086334ac8"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","14a902e0c79fe8dd0d82e25003fb806b"],["D:/Blog/public/series/index.html","5eeecbfbdede5f47be468d916957f6c6"],["D:/Blog/public/single-responsibility-principle/index.html","143b1ec9fa8bbf1f55088a50353689e9"],["D:/Blog/public/singleton-mode/index.html","581b64456816fcd136787b3d4ce6d03e"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","bed9c3ca8ce715fe165d47fb73f4d6ea"],["D:/Blog/public/sparsearray-sparse-array/index.html","7e83a32a8f7668efe61e2de9858551a7"],["D:/Blog/public/spring-architecture/index.html","0585118ed78c932fac958102d4e1498b"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","6c815714d3aa4195d85949fe53a3fe49"],["D:/Blog/public/spring/index.html","e884d44b2251cce49cfc79b90bfbfec4"],["D:/Blog/public/springcloud-alibaba/index.html","25196c970f7de2642a31542713d465ec"],["D:/Blog/public/springcloud-bus-message/index.html","0a2e1c96c18bfbd98da8614d34941bbb"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","98c86fe3b05dfe23c12c2fbbf8e7669e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","5f6103468e5d8121081b5d3f7d8bbc1a"],["D:/Blog/public/springcloud-stream-message-driver/index.html","561a278e7b665445e467ee7a17f06c0b"],["D:/Blog/public/springcloud/index.html","01102721ecbd43e3085f90a937c36db3"],["D:/Blog/public/springmvc-environment-construction/index.html","46f8965135a399cfcc029155e0d1e033"],["D:/Blog/public/sql-injection-attacks/index.html","116275f2d88b7a72b50726635c6ea35b"],["D:/Blog/public/stack/index.html","0f2ef4efe307738fcd2af7e75e494b64"],["D:/Blog/public/state-mode/index.html","39e3d8c6b81d61bc7c5ae2b52d3eeaa7"],["D:/Blog/public/strategy-mode/index.html","442db4176e7f625540452847dfd79ff2"],["D:/Blog/public/synthetic-reuse-principle/index.html","c308dc9bfe3adcc2e6c4389af866b22b"],["D:/Blog/public/tags/C/index.html","f130d59267ed053c2fdd011241f8dffb"],["D:/Blog/public/tags/Concurrency/index.html","15b9ebab44ecd6678099eebd515d9cd8"],["D:/Blog/public/tags/DesignPatterns/index.html","1c21a121d6a9745becf85f35f549512b"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f1cf6e4b618e9850eccfdd29f516e373"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5f754d29ac03520583f76da16222d4c8"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9469a72f16572c4ca12654bcb2830f28"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","98a97cde7562af3b79a2496741fa08f0"],["D:/Blog/public/tags/Interview/index.html","adca54867f0f61315694e322e58473a7"],["D:/Blog/public/tags/Interview/page/2/index.html","8c3d14e51a421fd732dfb58411933c93"],["D:/Blog/public/tags/Linux/index.html","c16e0e3cb4f2322259b29f4496c5fed4"],["D:/Blog/public/tags/Operating-Systems/index.html","45f4680276469ff3e29a6a3bb80ba681"],["D:/Blog/public/tags/about/index.html","4145e4ce3683a759f7c148c58d3ef1a9"],["D:/Blog/public/tags/ad/index.html","a1d83ba13bd1137a74a309c4b4aeeb34"],["D:/Blog/public/tags/dataAlgorithm/index.html","80308ee538ef5830b6294d741021cd28"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","6138faab5c1b98398a6a1a49c9c7d411"],["D:/Blog/public/tags/docker/index.html","5a8cfc70266ddc187a6797b3ddcdee4e"],["D:/Blog/public/tags/frame/index.html","201b975a478f4e9a42930244bb0d649b"],["D:/Blog/public/tags/front/index.html","cb2dc5ef69ebacf2c03031d92e28ec99"],["D:/Blog/public/tags/index.html","61b5a6d876fcc377a289a3cd12845bb6"],["D:/Blog/public/tags/jvm/index.html","489d3a1820c500f99db0e68da952594e"],["D:/Blog/public/tags/maintain/index.html","4fb4e6210b896efec443d0cf207d0f34"],["D:/Blog/public/tags/math/index.html","b7eedc2b0e5cbb761f3487919f62b54f"],["D:/Blog/public/tags/math/page/2/index.html","beed299da95edad7e464417228adea70"],["D:/Blog/public/tags/network/index.html","938ce72945bbca81e777e4b03d9b4284"],["D:/Blog/public/tags/resume/index.html","62dec4e7a1f08bd9ea6c6f03b540e222"],["D:/Blog/public/tags/safe/index.html","400ae8ca5925a9275d0757d4fe70f2b4"],["D:/Blog/public/tags/sql/index.html","835804b5d1b766996f5886b221963611"],["D:/Blog/public/tcpip/index.html","69c0582ee1b0d41d5aa032700a81319a"],["D:/Blog/public/template-method/index.html","e25a88b99d2d0f1b49b95c56cbbe1bf9"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","319295b6d79ce266582e05a6eeabe07c"],["D:/Blog/public/thread/index.html","c2d5fa28ae5ff10afe48146f17971344"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","bb38c8423747d74f14070ae1a933382e"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","0c4faac0ad80a38ae6035f2b93244aca"],["D:/Blog/public/visitor-mode/index.html","af545b04c7a0854b8126801782e31272"],["D:/Blog/public/xml/index.html","f7b1eca167cc594d8f245035a045d643"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","2af8707d07e75e259e8e1ca9d676a9f6"]];
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







