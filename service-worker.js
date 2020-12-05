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

var precacheConfig = [["D:/Blog/public/404.html","0327d7b0ee218f8e193a2eace58d03f7"],["D:/Blog/public/7-sorting-algorithms/index.html","d9fe8c4cd458bc5d2113ba0d8760e7d6"],["D:/Blog/public/AIO-blocking-model/index.html","227069f3cb733ac0dfdac5c86c49e34d"],["D:/Blog/public/BIO-blocking-model/index.html","18bb2a445873b0c7e811e220b6a7cbb0"],["D:/Blog/public/C-algorithm/index.html","2d803deba33d5479d426e9e89c1bb387"],["D:/Blog/public/C-programming/index.html","0ed9af9591cbef5170cb88d6166a22ca"],["D:/Blog/public/Good-use-of-pointers/index.html","658f06863cc24457198e0e519efaac35"],["D:/Blog/public/IO-model/index.html","8e7d979b387b9ca880b6d8dd429e866d"],["D:/Blog/public/Java-network-programming/index.html","c150110c34c7054533f4f839181607fa"],["D:/Blog/public/NIO-blocking-model/index.html","373a8669c189dea70720673a54edf0d0"],["D:/Blog/public/about/index.html","1c7b6e5436da3aa63df8cdfcbe81d1e1"],["D:/Blog/public/adapter-mode/index.html","a6bee9764778b8eb72f72bf025f6dcd1"],["D:/Blog/public/agency-model/index.html","dccb893b749c153fcd4f8bb111ee2af3"],["D:/Blog/public/appearance-mode/index.html","b6e302e55e8f57dbd2deb745736cd83f"],["D:/Blog/public/archives/2019/01/index.html","0c4ee9385a08566cdb2b2ec0fabc9a2f"],["D:/Blog/public/archives/2019/07/index.html","cc76c177fb8bdb6de3b7742f347b207b"],["D:/Blog/public/archives/2019/12/index.html","ad8aeb4cefdbbdbb868be564afa10964"],["D:/Blog/public/archives/2019/index.html","c1ab08000a4e5efdf6536444c872b9d8"],["D:/Blog/public/archives/2020/04/index.html","06a27f3c97ac1e7d1188b1d9afecf1f6"],["D:/Blog/public/archives/2020/05/index.html","8161014e5a73dd9c756d39cff18affd1"],["D:/Blog/public/archives/2020/05/page/2/index.html","8a2859c5a0f2d128867f3de728eb1c5b"],["D:/Blog/public/archives/2020/06/index.html","8c4324d10a036c801122cc52ea7d5b23"],["D:/Blog/public/archives/2020/06/page/2/index.html","ac5a2cc325e62d09d17e4cf9f090bbbe"],["D:/Blog/public/archives/2020/06/page/3/index.html","aa8eb691498715db60ae6657493c923e"],["D:/Blog/public/archives/2020/06/page/4/index.html","7966b5e7de97ecba9dbcc7710ca63715"],["D:/Blog/public/archives/2020/07/index.html","ebe269e0e418a6014a01581c779476cd"],["D:/Blog/public/archives/2020/07/page/2/index.html","bf4ff7c15b166e000506b497d78c6ca6"],["D:/Blog/public/archives/2020/07/page/3/index.html","3a8532db012a66967a1c6a70dddf0bd3"],["D:/Blog/public/archives/2020/08/index.html","dcbd4fa2f8cd7cd4a85b8eb005fd891b"],["D:/Blog/public/archives/2020/08/page/2/index.html","684f135b74ff97291567e472f9eae720"],["D:/Blog/public/archives/2020/08/page/3/index.html","91a9fd1401230fba899918fcc28f138b"],["D:/Blog/public/archives/2020/09/index.html","d4f2f2ae219424d45534d813fefcd2cb"],["D:/Blog/public/archives/2020/09/page/2/index.html","d387e0543aa0310eb78bf37398af420d"],["D:/Blog/public/archives/2020/10/index.html","c22a2fe3e9cfa9d95dc3f278cfe139f5"],["D:/Blog/public/archives/2020/10/page/2/index.html","3d460ca7ab9f608cb158c67b90ec5c8d"],["D:/Blog/public/archives/2020/11/index.html","d4be1a4c8cd2282098a7566148d99e31"],["D:/Blog/public/archives/2020/12/index.html","6e7b86cd05c39f1dadd2185d13cad9d7"],["D:/Blog/public/archives/2020/index.html","92bb38b66b5e5e267a9cdddc484078da"],["D:/Blog/public/archives/2020/page/10/index.html","cc52d55acd95b6b7f52a3605a167a090"],["D:/Blog/public/archives/2020/page/11/index.html","5eddea2d1cc2df621eee473779cfa597"],["D:/Blog/public/archives/2020/page/12/index.html","9da0579a6af611a12d05ecea3a52331c"],["D:/Blog/public/archives/2020/page/13/index.html","1334a4a7d2d9773f0f52566502b70186"],["D:/Blog/public/archives/2020/page/14/index.html","34f33979d541ad0f94718b383dc3f872"],["D:/Blog/public/archives/2020/page/2/index.html","54809eeeca88dbbaf381d513cd675b24"],["D:/Blog/public/archives/2020/page/3/index.html","022f08380410ebcb96aa999914f02c81"],["D:/Blog/public/archives/2020/page/4/index.html","e742babcc6b5801bcd71f1dd87c30ac6"],["D:/Blog/public/archives/2020/page/5/index.html","1bc76582afd7709627648f8ed08993c9"],["D:/Blog/public/archives/2020/page/6/index.html","bf205c10db006534ca59210f97a97992"],["D:/Blog/public/archives/2020/page/7/index.html","fb62ba4790822d57fcfe4596803f82d6"],["D:/Blog/public/archives/2020/page/8/index.html","664eeb703d0ee827253d8c176b3850a7"],["D:/Blog/public/archives/2020/page/9/index.html","9a075ee9dca39b5966b3b3d7bec1fd8d"],["D:/Blog/public/archives/index.html","0a5c18f2bb49275e9e38ae2603a09c71"],["D:/Blog/public/archives/page/10/index.html","2b9310be229d7a175f58296c30f182ee"],["D:/Blog/public/archives/page/11/index.html","2b9310be229d7a175f58296c30f182ee"],["D:/Blog/public/archives/page/12/index.html","2b9310be229d7a175f58296c30f182ee"],["D:/Blog/public/archives/page/13/index.html","2b9310be229d7a175f58296c30f182ee"],["D:/Blog/public/archives/page/14/index.html","c3750fc7fdef8141fe02124e63c7088d"],["D:/Blog/public/archives/page/15/index.html","c3750fc7fdef8141fe02124e63c7088d"],["D:/Blog/public/archives/page/2/index.html","0a5c18f2bb49275e9e38ae2603a09c71"],["D:/Blog/public/archives/page/3/index.html","aa222d2991761a1bc37a0310927c9c06"],["D:/Blog/public/archives/page/4/index.html","aa222d2991761a1bc37a0310927c9c06"],["D:/Blog/public/archives/page/5/index.html","aa222d2991761a1bc37a0310927c9c06"],["D:/Blog/public/archives/page/6/index.html","444286c77e2064c3e620761f64254483"],["D:/Blog/public/archives/page/7/index.html","444286c77e2064c3e620761f64254483"],["D:/Blog/public/archives/page/8/index.html","444286c77e2064c3e620761f64254483"],["D:/Blog/public/archives/page/9/index.html","444286c77e2064c3e620761f64254483"],["D:/Blog/public/array/index.html","cfac2038f078ddcb8a77049c93fad8e4"],["D:/Blog/public/binary-search-algorithm/index.html","3e8d059f4f102f12924f62ddf600c0bc"],["D:/Blog/public/binary-sort-tree/index.html","3cf4205df35445de06b97d602bf925a4"],["D:/Blog/public/bridge-mode/index.html","0a90e3329cce9bb520d12927ea5b573a"],["D:/Blog/public/builder/index.html","1bb84f7766ac34d07dd40e6373ca64a0"],["D:/Blog/public/c-pointer/index.html","155c22a2207adef2592b99f264872498"],["D:/Blog/public/categories/C/index.html","aa0af02c1f62d9fcd402860f51344094"],["D:/Blog/public/categories/SpringMVC/index.html","2b2ccb801a1cc9e4a3342377a1e04066"],["D:/Blog/public/categories/index.html","c78e5458a57da36832ec8e56677cf75b"],["D:/Blog/public/categories/linux/index.html","3ea17203fdb1d9e972ff34903c42aaaa"],["D:/Blog/public/categories/分布式/index.html","feef4ce36f03123ba15e7bcf27663f18"],["D:/Blog/public/categories/分布式/page/2/index.html","85411cd02814e9c6eaec50e0f84a718f"],["D:/Blog/public/categories/前端/index.html","3638cf6ee771435debdb02fb019e769a"],["D:/Blog/public/categories/设计模式/index.html","e5a7accaa1112e6835c417ce3539d7c1"],["D:/Blog/public/categories/设计模式/page/2/index.html","44cb34493ca28c002de757a8d01e0170"],["D:/Blog/public/categories/高数/index.html","ed10accf7e1bfd3be315ca645747b04d"],["D:/Blog/public/chain-of-responsibility-model/index.html","1501500424af1e67adf815c6b7fa3b2d"],["D:/Blog/public/chinese-and-english-switching/index.html","1be77e3d11d9e47633423274f00f46c1"],["D:/Blog/public/combination-mode/index.html","b39c7648c110ee87d6c1b1dd020bfa78"],["D:/Blog/public/command-mode/index.html","d1c5ac93d8450fe14c8e8464817b49ed"],["D:/Blog/public/common-commands-of-unix/index.html","32c2304696e4cbb010e0aa92bd198385"],["D:/Blog/public/computer-network/index.html","cda63c68844808719e4ae2cf261e7ca9"],["D:/Blog/public/concurrency-principle/index.html","fcaafda4c5e2f416abfb1dbdb9244752"],["D:/Blog/public/continuous/index.html","d9579492a071e996e2472c89922dccfc"],["D:/Blog/public/contract/index.html","c83ced694edf01a0e5c5608e116a5530"],["D:/Blog/public/css/first.css","6787c1a92518c1a759b72b8a667cc096"],["D:/Blog/public/css/style.css","f7f3d7adb2c6e0b5fd2288f3c8f090b7"],["D:/Blog/public/cycle-structure-programming/index.html","1c656c4eaf6edeefb2a8504cacf276af"],["D:/Blog/public/data-structures-and-algorithms/index.html","d7edb19507442c659dda4bc623b47281"],["D:/Blog/public/deb/index.html","581b46ef2cbd9cb76489a8d357d7307e"],["D:/Blog/public/decorator-mode/index.html","3a745232ac28f2e7e64b270c61b1345c"],["D:/Blog/public/definite-integral/index.html","4ccd531b39be2e06d296dae79a3a430e"],["D:/Blog/public/dependence-reversal-principle/index.html","ad385e8941ad0732d7629b5c28a69770"],["D:/Blog/public/derivative/index.html","825ada7b965fc738a88b39178b7873bd"],["D:/Blog/public/design-patterns/index.html","9b3787a3774fb51d38422123fe21801e"],["D:/Blog/public/differential-equation/index.html","673bd2ae75a3ddd348a23d9f7c065d9f"],["D:/Blog/public/differential/index.html","db8890e6f16af5fe2d8bae9992a51a1f"],["D:/Blog/public/dimits-law/index.html","03d9c368becf18e0ace583e6283402df"],["D:/Blog/public/docker-virtualized-container/index.html","5a7725c9b3c2ed62c417509090bf4544"],["D:/Blog/public/double-integral/index.html","39e0285b3b6d7799346454722f94f3f3"],["D:/Blog/public/dynamic-array/index.html","f0df2437c2cea98694c41e560d4947ed"],["D:/Blog/public/encoding-algorithm/index.html","d08f591d4bdb4ba7789cfc3b38ee9239"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","40a6fe8aaa8da6dc2cc7f0a162c6bff8"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","bd4533210dae0fab12746e9c6d501243"],["D:/Blog/public/factory-design-pattern/index.html","1ea8cc00c20b2944cd60571b59d80d8a"],["D:/Blog/public/file-input-and-output/index.html","27793024a15b939b81cd49d4a6235462"],["D:/Blog/public/flyweight-model/index.html","de273bded6d7dcb2e45904852670bb8b"],["D:/Blog/public/friends/index.html","a5cea39493d50036dbaa30e3b79d5832"],["D:/Blog/public/function-graphing/index.html","5f63a172e96949f254ba2723a152ebc4"],["D:/Blog/public/gateway-service-current-limit/index.html","5aaa8ab218d5c5c450b8f2f3ee119d0b"],["D:/Blog/public/gc/index.html","1da42754a87cb06269fb1a968b4202cd"],["D:/Blog/public/generalized-integral/index.html","d670677020dc9e5eb6c5f9924217456e"],["D:/Blog/public/google8102e2f35ce9e391.html","cc13ba1df237a6af2a94d9bd02576127"],["D:/Blog/public/gulp-compresses-static-resources/index.html","2c6a1e53d4177e6098111ed99f1407f0"],["D:/Blog/public/hash-algorithm/index.html","2fcc4316ea5987daf372d0626400d73b"],["D:/Blog/public/heap-sort/index.html","8b62aa035b7d57f2251d627a5bdaec7d"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","ebba1a877188e984d511585545290f4c"],["D:/Blog/public/http/index.html","c379be5920fa7fa362ff69b3367581f8"],["D:/Blog/public/indefinite-integral/index.html","079dc08ac738523ab78cf854966aa8fc"],["D:/Blog/public/index.html","c3987134a994ceff60b43b5d04eb017f"],["D:/Blog/public/infinitesimal-and-infinite/index.html","b3b2c00345c438faf349785824b653e5"],["D:/Blog/public/interface-isolation-principle/index.html","8d046fcdb74fadf760f7d63d451f60d7"],["D:/Blog/public/intermediary-model/index.html","634f78046e303de7b0da260163331333"],["D:/Blog/public/interpolation-search-algorithm/index.html","a47156dd022f635ac1d9f98fc43689ff"],["D:/Blog/public/interpreter-mode/index.html","3794aaa6a2c1fc5fb511607274d30a03"],["D:/Blog/public/introduction-to-computer-network/index.html","5b9a049f31f5f2f6ce91c5c9fe4fcbbe"],["D:/Blog/public/introduction-to-operating-system/index.html","8841db6b1ffbf0b0d8517c9ea563acf6"],["D:/Blog/public/inversion-of-control/index.html","3de8f5e7fe9b3d28613722ee540d0504"],["D:/Blog/public/io/index.html","9ac1982fb9f7d12f2161278dc172b114"],["D:/Blog/public/iterator-mode/index.html","d31d6dcef3c1f8b7744f8909fa433877"],["D:/Blog/public/j2ee/index.html","16ab10f6ec997d379edd93478181f916"],["D:/Blog/public/j2se/index.html","109fa1f29d0f81aa1e59992c19668859"],["D:/Blog/public/jdbc/index.html","d9ca54e74f2b1d07d2a26ce16216fa85"],["D:/Blog/public/jdk/index.html","a34e271b82d4f3c70b9d94e4a32607dd"],["D:/Blog/public/jmm-memory-model/index.html","1373554868537e4cb2650ef2b0ccb09e"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","e366b03ebe20f2e133c87cd1859cae63"],["D:/Blog/public/law-of-robida/index.html","5ee7c2621d3f0b44bdd900cf149b8848"],["D:/Blog/public/limit/index.html","d9736c97421f6001fc5da59d1eaf33e7"],["D:/Blog/public/linear-search-algorithm/index.html","d4fd79de1a0ce5de22ec6693a428b2d3"],["D:/Blog/public/link/index.html","38cbf043279f214aa0c1f1d20ad81e1b"],["D:/Blog/public/linked-list/index.html","43a786f846998573478c7cda8ed9f8dc"],["D:/Blog/public/linux/index.html","cc1a6f1bbf71af2ac968110f53479f6d"],["D:/Blog/public/liskov-substitution-principle/index.html","8e1a482ac485ddbc21fcf8b0f499a6c8"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","1b84693608cd809e6e567e0d0a15f9de"],["D:/Blog/public/maintenance-1/index.html","c1d57584549bf8c7612221f8bab998ec"],["D:/Blog/public/maintenance-2/index.html","37c8c7fca3f3143abae430efb5778daa"],["D:/Blog/public/maintenance-3/index.html","c3fa7aca5fa20da16fd1f7285eea9e53"],["D:/Blog/public/memo-mode/index.html","2d6aef00cc5fc1e889ef4e1ab015b37b"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","ba185de4b987a2cd0698b959a065260c"],["D:/Blog/public/multi-function/index.html","10410a95d2065b51db8bfbb6f2b6fe71"],["D:/Blog/public/multithreading/index.html","6706fe01451ba27b73d396941722541d"],["D:/Blog/public/mvc/index.html","da3f006e1f69f444d35e7e344ecab0dc"],["D:/Blog/public/mybatis/index.html","80e0b7af299f4906656c59a309fd2ee8"],["D:/Blog/public/mysql/index.html","026d5efd2659f20971a7009202949199"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","d60862a88e4ba716d7da4d244d6ba2ce"],["D:/Blog/public/objectoriented/index.html","bdca222c1efcd3ed56bfcd7d09cee394"],["D:/Blog/public/observer-mode/index.html","60aa8063939a320e301a6fb2c527b228"],["D:/Blog/public/operating-system/index.html","50a5ee3388c43d59824974c68821ca34"],["D:/Blog/public/page/10/index.html","03dde39d3f0c319fbb97977cc285f239"],["D:/Blog/public/page/11/index.html","8ec3b6182336700523dfaf1bafac6f39"],["D:/Blog/public/page/12/index.html","79c064b53759ccdf04a708c43b641952"],["D:/Blog/public/page/13/index.html","d9de4f98f596ce91339f5eff249ea854"],["D:/Blog/public/page/14/index.html","cbf2717a92407064d3a530dc61faf0e1"],["D:/Blog/public/page/15/index.html","8307d482c28067054a4a3e721dd45cac"],["D:/Blog/public/page/2/index.html","355cdb4c0f71a9a003ff2b5c76e4506c"],["D:/Blog/public/page/3/index.html","aa205c11fb83554a844d68a7307b1e85"],["D:/Blog/public/page/4/index.html","ad97104ea9bfe030ac1681214cf9eabc"],["D:/Blog/public/page/5/index.html","e7b24f4a2d757d33a851a006dea268fa"],["D:/Blog/public/page/6/index.html","a67e479fc8a5aaf364270e9b1dc6c3a4"],["D:/Blog/public/page/7/index.html","1f2611c1d3c9572d9016bc55d216fa1f"],["D:/Blog/public/page/8/index.html","13b358bba0576a59d207aa3ecdc4f74d"],["D:/Blog/public/page/9/index.html","9b4adcd8be6414301042ecf216153c12"],["D:/Blog/public/palindrome/index.html","5dff6586f39fcaa8929972aad7c05479"],["D:/Blog/public/partial-derivative/index.html","65ffeabb0ac5c059bf3da479deff6b6e"],["D:/Blog/public/pass-by-value/index.html","9e4d6d8086381eaa8d37bb30fd8b7f88"],["D:/Blog/public/pictrue-bed/index.html","f9a1dac239dc197b025494f742697d0e"],["D:/Blog/public/principle-of-opening-and-closing/index.html","cdd9e9e459f9b66c70d7c3943e1e4c69"],["D:/Blog/public/principles-of-computer-organization/index.html","7042e026b840ded317dbefc3c8d487cd"],["D:/Blog/public/prototype/index.html","7ddffce022a1b58bccd06ad7134371f0"],["D:/Blog/public/queue/index.html","a3389ec56f5f6e7b56a4c634a418c085"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","56c3220afe917b2b9321e9c5b8a6bfd5"],["D:/Blog/public/redis/index.html","f0d0e7c7ab19e1b531acb4d35fa29ec8"],["D:/Blog/public/reflection/index.html","71abad01ac2c52dfd59f11b687c40174"],["D:/Blog/public/resume/index.html","79deefe0de4aaaf96b5cbe21bc939605"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8e3086336a07a9844e4007c57b2779c5"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","ab943fbf997c1762e86f716a3cb25659"],["D:/Blog/public/select-structure-programming/index.html","51e3e3a991b68209a1e4a93469420c7f"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","75b74129de735b5c4abbb601fde14fcf"],["D:/Blog/public/sequential-programming/index.html","473b4eefd59560cc3c2d4cafac222c5b"],["D:/Blog/public/series/index.html","f8756c93fa253e1e74fddee6e6e826ac"],["D:/Blog/public/single-responsibility-principle/index.html","89c34bf566f9c5d60ccbed7dfd332c75"],["D:/Blog/public/singleton-mode/index.html","3e6d03d300bb8e19b981da07f7c04ba3"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","ef17f4a3e5387acf2131554c5327f610"],["D:/Blog/public/sparsearray-sparse-array/index.html","ea960a6a349d9ae730e8a5b84e8e4e0c"],["D:/Blog/public/spring-architecture/index.html","0599661e2b8c0f2793b43c4e3f0178dc"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","f5013376bc81a523d888b9b63025fa1f"],["D:/Blog/public/spring/index.html","ad54a96842aeef6c6c4eeadb7fa0ae77"],["D:/Blog/public/springcloud-alibaba/index.html","073942d7cf7a84ecb6507a43e8e991ce"],["D:/Blog/public/springcloud-bus-message/index.html","5ddc67f1a77479b9661cd2972f566f3c"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","797b94b9b2c2b801e01de82bdcc88c16"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","3252a577fa5770f8ee55bb4206691cf2"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b2810f48a5e1c5e3d1346ff550818c2f"],["D:/Blog/public/springcloud/index.html","1ee7549519cda87a4169c5b1aea96dd4"],["D:/Blog/public/springmvc-environment-construction/index.html","8e2b9d6053e6ed0db11bbe214846ca2d"],["D:/Blog/public/sql-injection-attacks/index.html","7330bf016b33eefd6fcac01c4b7b3a17"],["D:/Blog/public/stack/index.html","105a303c2e918d1ad68143a5b90e51d1"],["D:/Blog/public/state-mode/index.html","2eecb27bee3d5f073998f7dd5e5edce0"],["D:/Blog/public/strategy-mode/index.html","50a84c7a380ef8cd61acee92469bd4fc"],["D:/Blog/public/synthetic-reuse-principle/index.html","c8e2879eabbe4e314b0f515309fbff13"],["D:/Blog/public/tags/C/index.html","b09a288be62c0c3370744c8e516e3a59"],["D:/Blog/public/tags/C/page/2/index.html","2c7185ac084a55c990cef964547ae73f"],["D:/Blog/public/tags/Concurrency/index.html","fa1e1f1f51c8fd767b93e1e14c701c24"],["D:/Blog/public/tags/DesignPatterns/index.html","72fea1f88db222e83c5a0b22d84803f5"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","2e32739e21218cdc4c7d9b7351f1be9c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","b6a5518e796d61d3a761be18b84c0c6b"],["D:/Blog/public/tags/DistributedMicroservices/index.html","d15b5418f5b016a045396501d602374d"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","35a762dcb6a0e86ea2b4e5f650d3e874"],["D:/Blog/public/tags/Interview/index.html","41b77dbd176594fbd3825515f716da06"],["D:/Blog/public/tags/Interview/page/2/index.html","e6693130723e2dc6c5aa9d2339bdee66"],["D:/Blog/public/tags/Operating-Systems/index.html","47d166b31d92fec1ef2a5bd69b62dad3"],["D:/Blog/public/tags/about/index.html","0cfe2c82c382aefc9c898ef2face9255"],["D:/Blog/public/tags/ad/index.html","dd4490f7864771161fe2eaee62b4ed61"],["D:/Blog/public/tags/dataAlgorithm/index.html","6d861da487e0f3d0e9ebe71c9df69f16"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","b0b2d2e70a494e3c06b62ffd6fe32ddd"],["D:/Blog/public/tags/docker/index.html","fd12d550ae711f6345ff9410d123df9f"],["D:/Blog/public/tags/frame/index.html","eaf1cd4408b3e8d7aabf80b9714aaaef"],["D:/Blog/public/tags/front/index.html","b51d087ca382e0faa6942509f674fd64"],["D:/Blog/public/tags/index.html","f1a8a2d7bb543368e2e1f4ef8bca3d60"],["D:/Blog/public/tags/index2.html","a51d48a47bc1f32d8ef29e11a0f42db4"],["D:/Blog/public/tags/jvm/index.html","87a3bedd9ff8d1c5517a1725c3d73ab7"],["D:/Blog/public/tags/linux/index.html","acc5a8a7945d1ecdd20314531f316bce"],["D:/Blog/public/tags/maintain/index.html","3e92af8300999b5822708caa3e86945f"],["D:/Blog/public/tags/math/index.html","c5208d8f22730e5aa390a4a54230f377"],["D:/Blog/public/tags/math/page/2/index.html","8643dfa5217e49280b6beb9c9b78eee9"],["D:/Blog/public/tags/network/index.html","1a78e70280ef7d41ecf9a69e5affec16"],["D:/Blog/public/tags/resume/index.html","10819e72c755ccc48d07d36cc3671f02"],["D:/Blog/public/tags/safe/index.html","dd61f3be1fb9f9876d6cdddc8a4d0f69"],["D:/Blog/public/tags/sql/index.html","30b27fbb0da1e557c9fe0f57a52b90a7"],["D:/Blog/public/tcpip/index.html","0f5930da2ef0c8e1a7e0f603a6fe3618"],["D:/Blog/public/template-method/index.html","60ababfef80a7670c83bb1ca2e29c28b"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","08a8a04103d114201a5a384148e2d218"],["D:/Blog/public/thread/index.html","8fff2e4181c224d3935c6b080a3b6fe9"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","60d5a584b94a2458ab5cfe8133799c87"],["D:/Blog/public/ubuntu-set-ip/index.html","a7468a92c20c77591216abf47944a9f5"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","665d4990c6eef34f058168e58ad31497"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","1f6439e0f6c1f3acbcd05e06662efc08"],["D:/Blog/public/users-create-data-types-themselves/index.html","540969b7644ad93a624d4fc2d8677557"],["D:/Blog/public/visitor-mode/index.html","26169f60b5e0ec3ca454f10eb869778c"],["D:/Blog/public/xml/index.html","cca973942619a87935a87b233a62a916"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","8d55a7e8ad1102f6a3b746519e913965"]];
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







