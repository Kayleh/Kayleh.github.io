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

var precacheConfig = [["D:/Blog/public/404.html","f037cc0de9307a0ed183c4049f5893b6"],["D:/Blog/public/7-sorting-algorithms/index.html","53514580ade45f3786722a24e0ea52ee"],["D:/Blog/public/adapter-mode/index.html","e780d9361dfd87e0dd105e7153ee64b0"],["D:/Blog/public/agency-model/index.html","9939f9128a3f49adf424eba1a302a171"],["D:/Blog/public/appearance-mode/index.html","0f77ad4eaf97a0e30ef7b75eb1728668"],["D:/Blog/public/archives/2019/01/index.html","e30221755bc51698bc5f3c7217de504b"],["D:/Blog/public/archives/2019/07/index.html","481bd83468e2035b7fdf07309a8a8816"],["D:/Blog/public/archives/2019/12/index.html","14f0fec8f4eb5aeedded41f0d48acac6"],["D:/Blog/public/archives/2019/index.html","f506a494a2f2be0ba6657a1fc6c260cb"],["D:/Blog/public/archives/2020/04/index.html","a99b2cccc452ba178345a43d891724ec"],["D:/Blog/public/archives/2020/05/index.html","a57e43ea3e83efb23abaf8f783781f3d"],["D:/Blog/public/archives/2020/05/page/2/index.html","ce48b40406238551b127905209498d2b"],["D:/Blog/public/archives/2020/06/index.html","ee44dc4fecd1c508d5a0c37d2916f73e"],["D:/Blog/public/archives/2020/06/page/2/index.html","38059541a69373e259eea69213b0c551"],["D:/Blog/public/archives/2020/06/page/3/index.html","debe05f04574625ad7fc49d8bff240e6"],["D:/Blog/public/archives/2020/06/page/4/index.html","f928f3e8a537ecb6bb5e866a2b0e4752"],["D:/Blog/public/archives/2020/07/index.html","62b1574f8864a9034d74725a3b88e8c8"],["D:/Blog/public/archives/2020/07/page/2/index.html","085e75b6bcb8b40ab0f5ab2bda9e16be"],["D:/Blog/public/archives/2020/07/page/3/index.html","58ef51179ab735a4776d945378c45e13"],["D:/Blog/public/archives/2020/08/index.html","56c3c77b50277e8a5e6d59317138a7b3"],["D:/Blog/public/archives/2020/08/page/2/index.html","cfccfa331bb1f5b85c8f6ca4333340f1"],["D:/Blog/public/archives/2020/08/page/3/index.html","91be480bc205325d4e9b6bfa2ddcab55"],["D:/Blog/public/archives/2020/09/index.html","61a8eabf063d37df400386cf37fa97bd"],["D:/Blog/public/archives/2020/09/page/2/index.html","c8fa57fab868a6520f2fd8b60a8d7e33"],["D:/Blog/public/archives/2020/10/index.html","d85c6a0ff4e4184a4d902e9bb4eac086"],["D:/Blog/public/archives/2020/index.html","f6e0f72116fbeec5d0880b9596e16657"],["D:/Blog/public/archives/2020/page/10/index.html","d4667f11cbc9bb9d6085df0ec0238b48"],["D:/Blog/public/archives/2020/page/11/index.html","d6dd1c0ab766e1b1588ebb86f29bb94a"],["D:/Blog/public/archives/2020/page/12/index.html","1a1a4958c51c841f2612ca899ef9ff73"],["D:/Blog/public/archives/2020/page/13/index.html","07d9e6248501f184aac85c9d8ed9d183"],["D:/Blog/public/archives/2020/page/2/index.html","a0f051211aff5c5315c588c53a4c2203"],["D:/Blog/public/archives/2020/page/3/index.html","04d3acdbc8195eaf88671ace7d58e4b5"],["D:/Blog/public/archives/2020/page/4/index.html","04fee6d0c6b7cb7d4065045df9f785d4"],["D:/Blog/public/archives/2020/page/5/index.html","3aca035f31a1e7f40f6665b7c0a12f20"],["D:/Blog/public/archives/2020/page/6/index.html","d412f0256ed917901d2748bfee783b47"],["D:/Blog/public/archives/2020/page/7/index.html","63363122621b3629fe1f23d2ab62684c"],["D:/Blog/public/archives/2020/page/8/index.html","9daf87e44a7ee9539c88983e281c11be"],["D:/Blog/public/archives/2020/page/9/index.html","c66e79c6eaee4407497e830aa62f6166"],["D:/Blog/public/archives/index.html","a0e74e1088311ecba405922cef6c883c"],["D:/Blog/public/archives/page/10/index.html","58926a83f766be8751199a6f528b31f2"],["D:/Blog/public/archives/page/11/index.html","c19ca3343bde879a3ae532999863e31e"],["D:/Blog/public/archives/page/12/index.html","6dc1257e10d2ffa3b85cfd178c7bf90e"],["D:/Blog/public/archives/page/13/index.html","a0597cfe7f8a8bb9ef951d5c7a568a9f"],["D:/Blog/public/archives/page/2/index.html","5dd5cee3ebe4b756a7f030e8ef685ca6"],["D:/Blog/public/archives/page/3/index.html","2ee5b72c66c96dc39defb051d60d37c7"],["D:/Blog/public/archives/page/4/index.html","57527716b9baea8bc004375ddb542d8b"],["D:/Blog/public/archives/page/5/index.html","b3791db39bb3e832cd04dd44618677d7"],["D:/Blog/public/archives/page/6/index.html","065dd49c98a58802d27104fe017c57c7"],["D:/Blog/public/archives/page/7/index.html","fae82cc94cb49f621dfbbbbefd45d25e"],["D:/Blog/public/archives/page/8/index.html","a69de2c9b3db32e5f1efbb03bfa428a1"],["D:/Blog/public/archives/page/9/index.html","54012b61353beb652016ae043ab5000b"],["D:/Blog/public/array/index.html","3bcae48535aa403d8c1492d8342aa2fd"],["D:/Blog/public/binary-search-algorithm/index.html","fe6339e9f58ed254b880e6832f3bf505"],["D:/Blog/public/binary-sort-tree/index.html","a4099a6857c686385508982157951886"],["D:/Blog/public/bridge-mode/index.html","c2eaac257ac4a81863d124653835ad35"],["D:/Blog/public/builder/index.html","d89f116f1d4c3aa1c40da8f451a1704e"],["D:/Blog/public/c-pointer/index.html","7dc275a861eb0a93e7dee96596214786"],["D:/Blog/public/calculus/index.html","28e65209524d0f3312556da6f0803ab8"],["D:/Blog/public/categories/C/index.html","e12c2e4bc7c941bcf8698a65fc16607d"],["D:/Blog/public/categories/SpringMVC/index.html","00a3f6088cdc91c1d565e204a7d4a66d"],["D:/Blog/public/categories/index.html","68b1e9ba397fd4597bfbffc34c599dd0"],["D:/Blog/public/categories/linux/index.html","fd7916f62dd7fac418aa2b68c589b014"],["D:/Blog/public/categories/分布式/index.html","c355e7af5c9130d84b1a07260e8cc974"],["D:/Blog/public/categories/分布式/page/2/index.html","0561f01c026c3888c9b7a669a83d2c8f"],["D:/Blog/public/categories/前端/index.html","78168eb4283e09069f5719a84bf5892d"],["D:/Blog/public/categories/设计模式/index.html","3a2e21dddba2a76867b4adfd57da5161"],["D:/Blog/public/categories/设计模式/page/2/index.html","ab27763c1869b525c6669b262db499e5"],["D:/Blog/public/categories/高数/index.html","7ea8e2cf9d650d837c33ed02ba3d7117"],["D:/Blog/public/chain-of-responsibility-model/index.html","146cd98eb03a93eef0baa6fedb3a9403"],["D:/Blog/public/chinese-and-english-switching/index.html","7279032f2777e90e3928128a3177bae8"],["D:/Blog/public/combination-mode/index.html","597400e1f84b2be78b48cb7378b08928"],["D:/Blog/public/command-mode/index.html","5b64a717769b66e77694c442593c2204"],["D:/Blog/public/common-commands-of-unix/index.html","9684233df851e76e77e289c3b95c64f4"],["D:/Blog/public/computer-network/index.html","cbd1d8f0f7f9e438f32284a223d9cc55"],["D:/Blog/public/concurrency-principle/index.html","799e5893cb704952bc14bdca526cda91"],["D:/Blog/public/continuous/index.html","4ee996e2cc4581d22e6951cac3036a45"],["D:/Blog/public/contract/index.html","c5727090273ebe799d755365aa7f604a"],["D:/Blog/public/css/index.css","d699fc552589d1a73fd6982fc79558e5"],["D:/Blog/public/css/var.css","d5f14993ad69a54d3c01470dc08aabda"],["D:/Blog/public/data-structures-and-algorithms/index.html","ba3d23f062c48b67813b8141bb98b97b"],["D:/Blog/public/decorator-mode/index.html","f0ced2707935db6e94bfc809804f8c98"],["D:/Blog/public/definite-integral/index.html","8289732ad122d655c2614268c763e22a"],["D:/Blog/public/dependence-reversal-principle/index.html","2f9246b725927a393364217d66855bae"],["D:/Blog/public/derivative/index.html","411d929e671df2f6156aa56d0ef09c63"],["D:/Blog/public/design-patterns/index.html","5ef784cbb387f7cdf693e0843671abd4"],["D:/Blog/public/differential-equation/index.html","37dc6b6c4be41d6e68a7cfd7ff36d057"],["D:/Blog/public/differential/index.html","5a4de6e3ee22e20b94e0b44e1b8dc6e8"],["D:/Blog/public/dimits-law/index.html","53ee21adb9d8c1f9679a9de4373481a7"],["D:/Blog/public/docker-virtualized-container/index.html","5b09f2eee56fa63d614345dc0bba5c0b"],["D:/Blog/public/double-integral/index.html","b2ee65950d340973c4f107cd97b1913b"],["D:/Blog/public/dynamic-array/index.html","3c1bc61add0561e515d147f1c36d2bee"],["D:/Blog/public/encoding-algorithm/index.html","b5d774060409f05851b12556e0c0dfd9"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","fcd97900aa923f97031e1374a2c3cd4b"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","31b95077a796edcde9e2eda9e75f7990"],["D:/Blog/public/factory-design-pattern/index.html","5d05b69d40c96cdbbbadaa3d63e6be4e"],["D:/Blog/public/flyweight-model/index.html","3c7af1b816334d91c7a8a15545c57c67"],["D:/Blog/public/function-graphing/index.html","2a32ffe8d21d5e9340b352d18ae6d66f"],["D:/Blog/public/gateway-service-current-limit/index.html","5524f7bb95afd722cac92367fc96c703"],["D:/Blog/public/gc/index.html","0b92d526687a7315d0a01313fb981671"],["D:/Blog/public/generalized-integral/index.html","211ebc19f09b1d059cfc622ac5e40613"],["D:/Blog/public/google8102e2f35ce9e391.html","053588def0ba94eca1002807bae0b195"],["D:/Blog/public/gulp-compresses-static-resources/index.html","122e042ca5634dfd8adc7b42c2ec1fbb"],["D:/Blog/public/hash-algorithm/index.html","1e6ffa194b37adedc50b9defbddfe23c"],["D:/Blog/public/heap-sort/index.html","f5517e09015b834f637e8f3f4afdf4bf"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1a9eaf867c14da201c585e49e9f511ba"],["D:/Blog/public/http/index.html","f2e0f6b84ea889366c1a11a5fb4990d6"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","23657405eb409b8c7d5c8daf1624f304"],["D:/Blog/public/index.html","9d3fa07341627023523157b57b730ece"],["D:/Blog/public/infinitesimal-and-infinite/index.html","a5703ea678548157415e6fbd317cce46"],["D:/Blog/public/interface-isolation-principle/index.html","bbbbe381a5b63cfa5934b7aa604e5fc1"],["D:/Blog/public/intermediary-model/index.html","4b5309c6f1cbfed946aa0201cc3c2446"],["D:/Blog/public/interpolation-search-algorithm/index.html","a946ce33ef5d235690b879a217fabccd"],["D:/Blog/public/interpreter-mode/index.html","d9de2b2a35c10a3bbfe704c6f449adc0"],["D:/Blog/public/introduction-to-computer-network/index.html","66f1faa049899356f1fd872f698af94b"],["D:/Blog/public/introduction-to-operating-system/index.html","f2b6fab7a2133e6cbf8e95501515078d"],["D:/Blog/public/inversion-of-control/index.html","2679477468bfc7f0c3f844d8c74d1037"],["D:/Blog/public/io/index.html","652ca2353410ea31d490d7839240e778"],["D:/Blog/public/iterator-mode/index.html","3f7a862e703c39d5a1393027e594600f"],["D:/Blog/public/j2ee/index.html","33db3cd4adbc7cd1dfe8d3ab54fe0d57"],["D:/Blog/public/j2se/index.html","ec9e910baef9606b0878f444973050ad"],["D:/Blog/public/jdbc/index.html","ffd3746e413ed5f5229675cc60f00ead"],["D:/Blog/public/jdk/index.html","4688f619084dd5c5e6ad93690d926709"],["D:/Blog/public/jmm-memory-model/index.html","8291623dbc8910b87675c1e81fd18eb1"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","c0fdc8016c136e3660028ec888c02de1"],["D:/Blog/public/law-of-robida/index.html","2253538c76e41b4282bdffbf6b91f913"],["D:/Blog/public/limit/index.html","dcb898c06fd82453c14aa5810e65116f"],["D:/Blog/public/linear-search-algorithm/index.html","d4212805a2f8762fcd2a594b5e0bf682"],["D:/Blog/public/link/index.html","1012a7c42113825e5b40e000fb731ef6"],["D:/Blog/public/linked-list/index.html","c8d50923a0c31b680a9faa8e25dd8566"],["D:/Blog/public/linux/index.html","1ea8e71fafcfaa2a76c1ccafb6661c84"],["D:/Blog/public/liskov-substitution-principle/index.html","7b7f7bfab04f603e90de463e5a5ba2ee"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","eb9226a808f496966bbd8e89e9545da8"],["D:/Blog/public/maintenance-1/index.html","3fd1b8057df2167dfd175793b40c173d"],["D:/Blog/public/maintenance-2/index.html","f5b9f947ecf2b9d58e0c639d8790aabd"],["D:/Blog/public/maintenance-3/index.html","669db51eb96e8e0c53c3322dffa7f193"],["D:/Blog/public/memo-mode/index.html","5a54de1cf29c88d2e49564b425b89368"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","b67ed70dc5343894370e053831ec05b8"],["D:/Blog/public/multi-function/index.html","937a3048f8be52c4e3eab6c79102a8f9"],["D:/Blog/public/multithreading/index.html","d14f3e5c9f3756c7a4329fd510a8b4b3"],["D:/Blog/public/mvc/index.html","58e9571048bc03ef3a7cba0eb99250bb"],["D:/Blog/public/mybatis/index.html","74671f866efdaaaa5cf1265f6dce50cc"],["D:/Blog/public/mysql/index.html","ae7912e556e19a5d7e1420519fe3387f"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","70c88d169706e5ca7c7282e9ffb8cb73"],["D:/Blog/public/objectoriented/index.html","174b6ce098294b0fa54f16614874ce7d"],["D:/Blog/public/observer-mode/index.html","209e8719b8935e3fcc9b61dcb8283319"],["D:/Blog/public/operating-system/index.html","98b2873ea8ad3d734e998671184397d8"],["D:/Blog/public/page/10/index.html","343514f31f85a09fd675d1dc8fa6612c"],["D:/Blog/public/page/11/index.html","09905a9200c8e29c6e6abc952067c456"],["D:/Blog/public/page/12/index.html","2f40dfe71220ea63d941d67ce73f3d75"],["D:/Blog/public/page/13/index.html","172534448b8e082fae0d6be4d95e583f"],["D:/Blog/public/page/2/index.html","0f248a98d7df27322bfe1634e6e91cff"],["D:/Blog/public/page/3/index.html","ebfb993fe93ff19e5f882935f31546bb"],["D:/Blog/public/page/4/index.html","29f34b3770010b7386df0d6e2c70d9d0"],["D:/Blog/public/page/5/index.html","96f0bf1136469bd9bd8ff393302e4269"],["D:/Blog/public/page/6/index.html","dc9be61b3da10e074f020208e7b33365"],["D:/Blog/public/page/7/index.html","d746499edb11836d88c34d996ddd1b7f"],["D:/Blog/public/page/8/index.html","afc8b5bbabbed80ccb9aa50874362ae3"],["D:/Blog/public/page/9/index.html","eac4a18f663ee02d409f83ab3b7217f3"],["D:/Blog/public/palindrome/index.html","048d527f412335b9aa00cb15a1675406"],["D:/Blog/public/partial-derivative/index.html","818e4123d9726fb32a195b3703535eb7"],["D:/Blog/public/pass-by-value/index.html","50eb082b08d44412a6798df29612994c"],["D:/Blog/public/pictrue-bed/index.html","eb43390d029f85183c8afebcb22820c0"],["D:/Blog/public/principle-of-opening-and-closing/index.html","39ed1a48db930a38a84d72f691b69ff3"],["D:/Blog/public/principles-of-computer-organization/index.html","1f272287c68cddb6284b67ee0d49642b"],["D:/Blog/public/prototype/index.html","1cde7145f6d2aa358abea25ddc1dac35"],["D:/Blog/public/queue/index.html","b0927ea3a5fe5305c68114900dfde7d1"],["D:/Blog/public/redis/index.html","f1cb2d4f6355f4d5f4f388d2136999fe"],["D:/Blog/public/reflection/index.html","2b3cee1cda0890477652ff681da211f1"],["D:/Blog/public/resume/index.html","75ed8b9797748fd223ebaa8fb13114c1"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","894746c0d2fe41e9813f4406a75c77a6"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","013baf21d0e792c41f3de3bac2fe3516"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","7e6d745d4d356b5d6b750b0c6752936c"],["D:/Blog/public/series/index.html","bf368650dd290d193e886181feb4abf2"],["D:/Blog/public/single-responsibility-principle/index.html","57ce727eeb5255dd10b07567d788e2e8"],["D:/Blog/public/singleton-mode/index.html","a3949b3cfd0fa12a76359a1e71065e64"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","0dd26ebe6489b3b4ce5d66cf412e0ffc"],["D:/Blog/public/sparsearray-sparse-array/index.html","26f1ff6adf14e4e83a7c5c7abe30cf6a"],["D:/Blog/public/spring-architecture/index.html","89382303b490b7fcba50ee3202f56c46"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","f3c30b89184db406c3415264628d4869"],["D:/Blog/public/spring/index.html","a57925c2de55f1cd5ff6478e706bf8ef"],["D:/Blog/public/springcloud-alibaba/index.html","0003a1436fe38c66ca431025d483727b"],["D:/Blog/public/springcloud-bus-message/index.html","46b133762af266833b4e8f069c83e5ae"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","bdefbb9b464c83da4f23ed206129d072"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","619ae496cb2354f24e2471c29aa41881"],["D:/Blog/public/springcloud-stream-message-driver/index.html","93b2ae6aa8d33105e920c66d220ae315"],["D:/Blog/public/springcloud/index.html","8101e521b893e7b87b81f093d7514e13"],["D:/Blog/public/springmvc-environment-construction/index.html","685f6b4320ce42512718f538d4b97c30"],["D:/Blog/public/sql-injection-attacks/index.html","2dc674a3cfb50c2c937be677a49d503b"],["D:/Blog/public/stack/index.html","58d219a964139d1c33dac1e7cb666800"],["D:/Blog/public/state-mode/index.html","63c6d963f83b95f7b8b92e7de8b14445"],["D:/Blog/public/strategy-mode/index.html","cb61805aae32de1be9664ec6dbfcffc9"],["D:/Blog/public/synthetic-reuse-principle/index.html","76ecbd5596d2bc17b824108ae8368c61"],["D:/Blog/public/tags/C/index.html","c2d04a7801685b4b8ae297f7fe9b166b"],["D:/Blog/public/tags/Concurrency/index.html","6a8e02aefedbcb9e7d048c6ef1a490e8"],["D:/Blog/public/tags/DesignPatterns/index.html","a9e359a1abdc52d62440d146175de893"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","740f964f37eed2f14baa59e4d860e5a6"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","6702d3ff2007a0ffe43badb44e3807db"],["D:/Blog/public/tags/DistributedMicroservices/index.html","87643a10231926a85a17b6d07ec32d6b"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","00937b4a2b7a513abd5a55681b0e15f6"],["D:/Blog/public/tags/Interview/index.html","f12370cdc9c676ab8ab2ccf38582988c"],["D:/Blog/public/tags/Interview/page/2/index.html","3f13c5f777b918b8138a6ed41543c146"],["D:/Blog/public/tags/Linux/index.html","e4efea4bccb6feb4a77f7f22b97baacb"],["D:/Blog/public/tags/Operating-Systems/index.html","4a8c41c2a10172c5a85d9c732868f4d6"],["D:/Blog/public/tags/about/index.html","fb657080b2fe69b76c28fcf2cce24c97"],["D:/Blog/public/tags/ad/index.html","4ccea8a2a27cc1641299efba0835198e"],["D:/Blog/public/tags/dataAlgorithm/index.html","efc632291306807eb37a72553488ae65"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","a1dacdbc7df38a39e038b7c4d2379277"],["D:/Blog/public/tags/docker/index.html","2556d348e8d8164df6faac4903b9128e"],["D:/Blog/public/tags/frame/index.html","24b26cd45f716f99db786a0adae7b117"],["D:/Blog/public/tags/front/index.html","24cf9b7c56db83ce53e202b4c023eab1"],["D:/Blog/public/tags/index.html","d3877fb7d830be2c0e5ce912ce213bed"],["D:/Blog/public/tags/jvm/index.html","461753f08a5ca835090acdbb96f02ecd"],["D:/Blog/public/tags/maintain/index.html","bcd0f2d19b076ffca71c6b6a4705b91f"],["D:/Blog/public/tags/math/index.html","fb3e087d7c0a7c9cc93a5bf516d85183"],["D:/Blog/public/tags/math/page/2/index.html","0097478f17f06e6f37a6db9a34506938"],["D:/Blog/public/tags/network/index.html","28a3b5a5c6cce60d8592263a2049949d"],["D:/Blog/public/tags/resume/index.html","dc1862e05ea49743ba98e3338726aaba"],["D:/Blog/public/tags/safe/index.html","3df9734f7cd2ee0942e7210dc3d11a26"],["D:/Blog/public/tags/sql/index.html","d8d197c20b62339b81a033bb68f21aab"],["D:/Blog/public/tcpip/index.html","5da067336f6f03bc6fa7ee82c8a06a95"],["D:/Blog/public/template-method/index.html","3feb56c665fdf3f13a246d9513f421b3"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","749fd722574c16721158291320edaf5f"],["D:/Blog/public/thread/index.html","d1e4057b44d0bb8eb101f8f8f2ec5bf1"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","6b6b8d9255d76ebd731e8e29efe121a9"],["D:/Blog/public/undefined/index.html","7778f791edbb3302c21ecea5e3af7675"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","b1d87c277d05d70e6c7d107f9793adb3"],["D:/Blog/public/visitor-mode/index.html","22e25b2d647010f15e64272fea1f98fd"],["D:/Blog/public/xml/index.html","80b40dd825107d870c9529834cf36fab"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","b3411b9e79df01725b9ea60c7130c8e9"]];
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







