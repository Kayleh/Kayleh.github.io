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

var precacheConfig = [["D:/Blog/public/404.html","5a451fecaf8f030794a167487240baa7"],["D:/Blog/public/7-sorting-algorithms/index.html","a10159ac71a3900157fcf8e88229e981"],["D:/Blog/public/adapter-mode/index.html","f887331118c7f708836ba9e02d7e5b9c"],["D:/Blog/public/agency-model/index.html","f5a329fb65af69f23ccdd30ba604361a"],["D:/Blog/public/appearance-mode/index.html","841dcd068245cbc0473212743bd79793"],["D:/Blog/public/archives/2019/01/index.html","0f386a6a28c97a72df98c9d0a1029a67"],["D:/Blog/public/archives/2019/07/index.html","1b3689301a036e755e314b29464dca9d"],["D:/Blog/public/archives/2019/12/index.html","e8a051963229fab81b8e04ae028a9d47"],["D:/Blog/public/archives/2019/index.html","c9d15ca9a904c40bc98be123efb968ee"],["D:/Blog/public/archives/2020/04/index.html","6e30d0f1481061e1ed13d5df2a6d3eaa"],["D:/Blog/public/archives/2020/05/index.html","cbf78cbeaddff86844513978312aecad"],["D:/Blog/public/archives/2020/05/page/2/index.html","c56c7b1e869d3e7db8252b08e5166101"],["D:/Blog/public/archives/2020/06/index.html","0f926097ac0256ff659e66b69d682f42"],["D:/Blog/public/archives/2020/06/page/2/index.html","c76ee2bbb8fc5ddef03ec61e56390ff9"],["D:/Blog/public/archives/2020/06/page/3/index.html","668f04f6ef311f34def81f13a33fbbf7"],["D:/Blog/public/archives/2020/06/page/4/index.html","ac757b59385a377c64b4356270168d85"],["D:/Blog/public/archives/2020/07/index.html","8a11e73d6fa88bb3a0ca0baacbe747e4"],["D:/Blog/public/archives/2020/07/page/2/index.html","e712e8b29223f294fd34741dd85924ca"],["D:/Blog/public/archives/2020/07/page/3/index.html","c29c1ff68775d13d8f53b437845c9857"],["D:/Blog/public/archives/2020/08/index.html","41e24970bb14f0fca245ebf5f8d71104"],["D:/Blog/public/archives/2020/08/page/2/index.html","b34b4fe7ac7b2206008a86956fcd019c"],["D:/Blog/public/archives/2020/08/page/3/index.html","37fcfe6c46874cb4f419441580c48190"],["D:/Blog/public/archives/2020/09/index.html","3fec10a810b8b9c0d497cc3b21153e17"],["D:/Blog/public/archives/2020/09/page/2/index.html","d2dc1aa4754b340d12ab453d86256934"],["D:/Blog/public/archives/2020/index.html","8324a770395f9c83eb0a93ab9165da6d"],["D:/Blog/public/archives/2020/page/10/index.html","d60f1a943e31af143dd426d6894602ab"],["D:/Blog/public/archives/2020/page/11/index.html","647e9f8cd1baf839a61578bd57c59b32"],["D:/Blog/public/archives/2020/page/12/index.html","d178a52ae104f00cff058e40c1fa03e0"],["D:/Blog/public/archives/2020/page/2/index.html","6b8894fde868c1f6b6294aa18fd4487f"],["D:/Blog/public/archives/2020/page/3/index.html","f6e06005a50c843e8df8a8a30a8a3f92"],["D:/Blog/public/archives/2020/page/4/index.html","1569d5f5c610505609064616b6009ff9"],["D:/Blog/public/archives/2020/page/5/index.html","c43c990258e88f4acc1c71fd88011710"],["D:/Blog/public/archives/2020/page/6/index.html","3662978acc068be8d93c0ebc2f2d7167"],["D:/Blog/public/archives/2020/page/7/index.html","79f12de12141c26eba5076aab0c14591"],["D:/Blog/public/archives/2020/page/8/index.html","5ec91050c88cebefb4835dc1ca565d99"],["D:/Blog/public/archives/2020/page/9/index.html","34dde243ba8c6f0163693a44a177833e"],["D:/Blog/public/archives/index.html","6d726c3e1916dad2552267f31e5c993d"],["D:/Blog/public/archives/page/10/index.html","c01861a757c42a593dfe354a1e474774"],["D:/Blog/public/archives/page/11/index.html","9143e6e6de0ce9eb8dfdbc0fd1728793"],["D:/Blog/public/archives/page/12/index.html","7c4f2f7232ff046e76b1c19141deb180"],["D:/Blog/public/archives/page/2/index.html","d7af7c29854010cdb90844819f9dd760"],["D:/Blog/public/archives/page/3/index.html","12d400ec48f32122ec1fa54406bedf91"],["D:/Blog/public/archives/page/4/index.html","fa01fdc6cb3bbeaefe57036419fd655a"],["D:/Blog/public/archives/page/5/index.html","16115448401e4e1276d4cf94e7388ab2"],["D:/Blog/public/archives/page/6/index.html","d31baf5e6a8b082504b7b662c7f70dc1"],["D:/Blog/public/archives/page/7/index.html","cf0b858faf170d7c7c46b806a71e8d36"],["D:/Blog/public/archives/page/8/index.html","012da0cffc967237be90b82fbc828f3e"],["D:/Blog/public/archives/page/9/index.html","e14c3d67e6b0f453515942286513e9da"],["D:/Blog/public/array/index.html","4e4a728660f26547edd1f2520a3f57ab"],["D:/Blog/public/binary-search-algorithm/index.html","19187139128da332f413a64afc765852"],["D:/Blog/public/binary-sort-tree/index.html","e7ff6b12a9b02558f9746c1d6a656bb7"],["D:/Blog/public/bridge-mode/index.html","c248f935fc1bc0a8b848bfb0665d92b9"],["D:/Blog/public/builder/index.html","c30041f0a30ecba78baebe07d901259b"],["D:/Blog/public/c-pointer/index.html","583594e5b2b481401f05722d7fc85a32"],["D:/Blog/public/categories/C/index.html","969413832fe145f6119abff5a284fbdd"],["D:/Blog/public/categories/SpringMVC/index.html","8293ae3f71c318ca4ff7872bca181e94"],["D:/Blog/public/categories/index.html","e4a84a3a85c7f0401e5c14de4edbb710"],["D:/Blog/public/categories/linux/index.html","c2d5104808f3adf643a6c9841c182a59"],["D:/Blog/public/categories/分布式/index.html","680c1cc617506ab41aabe160f92b035b"],["D:/Blog/public/categories/分布式/page/2/index.html","bcd0440ed7975705d86778f962739587"],["D:/Blog/public/categories/前端/index.html","971db556169a87fe4ab42ef912f4e8ed"],["D:/Blog/public/categories/设计模式/index.html","fca531bae969e15beb847b5b07e6fb4a"],["D:/Blog/public/categories/设计模式/page/2/index.html","38a67ff8463443a7ae120fc8f91725cd"],["D:/Blog/public/categories/高数/index.html","5bd0d381d19908846eefef82475cd297"],["D:/Blog/public/chain-of-responsibility-model/index.html","586fcfe6a3cbc809e0b74e58410d2874"],["D:/Blog/public/chinese-and-english-switching/index.html","6ead9469adde99037f8471121a5bf8e1"],["D:/Blog/public/combination-mode/index.html","313e1422dc6ca3703119bd683b2c50f8"],["D:/Blog/public/command-mode/index.html","f3a6db70286fd47b72fe77bffcf120de"],["D:/Blog/public/common-commands-of-unix/index.html","a9eb40be025c1d537879f6f609633165"],["D:/Blog/public/computer-network/index.html","963fdc8e31c064ba4955ea8d5b9d9d12"],["D:/Blog/public/concurrency-principle/index.html","c479d705e5b30bbdeed627c6c1c610bc"],["D:/Blog/public/continuous/index.html","9cad83199866b022491ae704bccf92dd"],["D:/Blog/public/contract/index.html","c509db9b8d8f752c11ff0117c39353ad"],["D:/Blog/public/css/index.css","94618df3a7ce69d60c4e5974142687ab"],["D:/Blog/public/css/var.css","ac9aeb4fd2778ce011713d5a5804acea"],["D:/Blog/public/data-structures-and-algorithms/index.html","2229f2cd72f63e9d0429213fbb8e6de6"],["D:/Blog/public/decorator-mode/index.html","da3826b5cdfc5a63c1a83d9dcfda62c5"],["D:/Blog/public/definite-integral/1601053742391.png","83f9a6853f9f3699aa9a2b1b795cda27"],["D:/Blog/public/definite-integral/1601055940188.png","874768b432eece5eefe993e934d31cef"],["D:/Blog/public/definite-integral/1601056351353.png","d0ce3ce9ec27ef4fcf60e1b330105399"],["D:/Blog/public/definite-integral/1601056797153.png","40627bc113eee963f7c511e88509ced7"],["D:/Blog/public/definite-integral/index.html","8279ddd5a57f76365da3c543106672ad"],["D:/Blog/public/dependence-reversal-principle/index.html","0662f8dd66ea4dc39e9410773a0920bd"],["D:/Blog/public/derivative/index.html","d1b89f680e37b7dbee53566ae4f2cd19"],["D:/Blog/public/design-patterns/index.html","d956fa53b349695781bb1b31c1eb62f1"],["D:/Blog/public/differential/index.html","5ba8aa215d9d276dffece660faee5181"],["D:/Blog/public/dimits-law/index.html","94942910c23946606b893e5b95a4c65c"],["D:/Blog/public/docker-virtualized-container/index.html","05d6da570257c5b3f28b8b721a2f12e7"],["D:/Blog/public/dynamic-array/index.html","4b3f31f4e103a5fb1a134567640321a7"],["D:/Blog/public/encoding-algorithm/index.html","d72c8b1dbb5927a505e88a214d8053c8"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","a6bc8e3ce133197829a21d2b79fd1456"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","404fad77bdf58809d301cc8f1da31ce1"],["D:/Blog/public/factory-design-pattern/index.html","bad6a9d03ca0ec32d62f529fea4b74fe"],["D:/Blog/public/flyweight-model/index.html","c0acb9c823f1068232780060a9199a20"],["D:/Blog/public/function-graphing/index.html","c58bb8b9596e4145d7c53ee7590f6daa"],["D:/Blog/public/gateway-service-current-limit/index.html","353b7058e9b517fe8494d1f8fe032fd5"],["D:/Blog/public/gc/index.html","30929997d7cc8a5138798b28895ff138"],["D:/Blog/public/google8102e2f35ce9e391.html","6af7dc5fe0dac314601d19a4848d04c5"],["D:/Blog/public/gulp-compresses-static-resources/index.html","0dd50089fa675d491602dd82f9d9a732"],["D:/Blog/public/hash-algorithm/index.html","56f46a4b83b085d8523d4d791697ab54"],["D:/Blog/public/heap-sort/index.html","0c44dfcfb7f4cf0363da42c82dbcd86b"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","32955d7070303de50b5bde2c97cd7d75"],["D:/Blog/public/http/index.html","494846b4e88a666d97a6a68ef324f79c"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","62592365cf2b510d49e03184216fc395"],["D:/Blog/public/index.html","3bc76d767daaa14b932ba66850c1d8d2"],["D:/Blog/public/infinitesimal-and-infinite/index.html","4abea233389098bae8037749b1ea75f2"],["D:/Blog/public/interface-isolation-principle/index.html","a8fd3d188bb3fa3f823567a559410f54"],["D:/Blog/public/intermediary-model/index.html","b3477676dd3625a12095de6b6e51e609"],["D:/Blog/public/interpolation-search-algorithm/index.html","04038de750db584c570fdd489d0cffef"],["D:/Blog/public/interpreter-mode/index.html","2ccb0c97091d16797e5e21fca53df390"],["D:/Blog/public/introduction-to-computer-network/index.html","e4877571ba21364dcadc47d9914922fd"],["D:/Blog/public/introduction-to-operating-system/index.html","068314789f6873901b43f0098ff54a86"],["D:/Blog/public/inversion-of-control/index.html","bdfd5f545476acd0326deede920a53cb"],["D:/Blog/public/io/index.html","266653ba14dde97332a98164120bc96f"],["D:/Blog/public/iterator-mode/index.html","5edf7e58259342b4fa2dbcd876107267"],["D:/Blog/public/j2ee/index.html","dc29300b75e11d020291f197581deb58"],["D:/Blog/public/j2se/index.html","16602ba584f62f8a417e82f432debeb6"],["D:/Blog/public/jdbc/index.html","7259c69c64cab1b7c9d4947cd678eb63"],["D:/Blog/public/jdk/index.html","ad05f4004476a4c0cfebba65e50d285c"],["D:/Blog/public/jmm-memory-model/index.html","48282588f3f52ea170467038df81a95e"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","3a480d7a3ed143e35c3ee85d72db02e2"],["D:/Blog/public/law-of-robida/index.html","0ebcf89a23a70b8807bf574df7c88da8"],["D:/Blog/public/limit/index.html","d87c0d178722380d31801445902ce094"],["D:/Blog/public/linear-search-algorithm/index.html","0d4a63bd1ad840cca93f77ef820b2b8c"],["D:/Blog/public/link/index.html","a88acd72658050cc00ad203708ed80f1"],["D:/Blog/public/linked-list/index.html","b424e87b9867c16f19c180c6d3e2a073"],["D:/Blog/public/linux/index.html","b3412feef72ca8e23d42ef1c42814a8a"],["D:/Blog/public/liskov-substitution-principle/index.html","33acf5e68fac8eaca54f012d4f4a2351"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c1d666aabdc4a5fccd6252492ec52034"],["D:/Blog/public/maintenance-1/index.html","2461f53aec13cbfd7c7ee87a3d24cc37"],["D:/Blog/public/maintenance-2/index.html","cad34bf17e16711411ec3ef10e1f4fd7"],["D:/Blog/public/maintenance-3/index.html","26230c2845002f2a2232360de582adef"],["D:/Blog/public/memo-mode/index.html","6c6d35cefdb8f81d467a6b6c9519f298"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","02ae42047a681d430503855c7ceda05c"],["D:/Blog/public/multithreading/index.html","274fd893ec2995d50c34c60a95f43610"],["D:/Blog/public/mvc/index.html","06c8fa3b52d541fb625b592fea51ede9"],["D:/Blog/public/mybatis/index.html","6bb6a593a08beff72049fdaea57e4cd8"],["D:/Blog/public/mysql/index.html","9f60135a64b9bd8b56272847bd0c6aee"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","9ab9f5bf6da1b4882d9e1206af222632"],["D:/Blog/public/objectoriented/index.html","afd020c818f6e32ce03adb7e9a935e1c"],["D:/Blog/public/observer-mode/index.html","d78b431c36805deb9d283792586601e5"],["D:/Blog/public/operating-system/index.html","fa15c99e7d75cb7f328958dbe4042c49"],["D:/Blog/public/page/10/index.html","dea8f5832243daed92d49d29648b5d40"],["D:/Blog/public/page/11/index.html","15f39a76c35f5b85875d22ecb51fa29c"],["D:/Blog/public/page/12/index.html","7067494bfbb23dc9b3e971be434872cb"],["D:/Blog/public/page/2/index.html","95f04ac71b55327f279d429bcfd85904"],["D:/Blog/public/page/3/index.html","4a82a276991802bfdebca07cbbe0746e"],["D:/Blog/public/page/4/index.html","22075ad591b6143862c8fddcd453ee46"],["D:/Blog/public/page/5/index.html","dc7c6f61995502a84c0bb01e284aca5f"],["D:/Blog/public/page/6/index.html","a8fd3f9c4a074c2634e9ccfd318e191e"],["D:/Blog/public/page/7/index.html","541d44317f992382fbccbe175ab7b7f6"],["D:/Blog/public/page/8/index.html","d4083c8b763e0b9869b27ffa58f8404d"],["D:/Blog/public/page/9/index.html","43d6d2d342775bd7dc76fef3fd38e56b"],["D:/Blog/public/palindrome/index.html","1a302bd46ad81e96fdd026bd3ef8d919"],["D:/Blog/public/pass-by-value/index.html","1cc71fba6af6dc5f6fe55449f0261402"],["D:/Blog/public/pictrue-bed/index.html","21db7776acc59625461e0d28dc94e020"],["D:/Blog/public/principle-of-opening-and-closing/index.html","91030d4ac72945b85698fbcafad907c9"],["D:/Blog/public/principles-of-computer-organization/index.html","5d0921045c47437e68f459e54a773887"],["D:/Blog/public/prototype/index.html","4115bf7fb74b9b1f12beb8b3c9e0f7e2"],["D:/Blog/public/queue/index.html","8678797701bc441bac01b3b832bb233e"],["D:/Blog/public/redis/index.html","ff4a391fb6f9bed8df365980b2f57e0c"],["D:/Blog/public/reflection/index.html","4b4ff3688b9bde1115c7e0c5b54a751e"],["D:/Blog/public/resume/index.html","0e91df7c91e2a28beb5a765c3c0c7d9e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8819afc98e39eb45937e6a2160c76124"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","819e80d89d515b3f5f850853e9a61ea6"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","121e10f67c66b0f0556afe72cb8b6a91"],["D:/Blog/public/single-responsibility-principle/index.html","5971019c2102af288de8ff2005ad8d07"],["D:/Blog/public/singleton-mode/index.html","25834a0f55be0bc1dd5954cc25b34126"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","5941c641a9bb944530b4cf0af1c937d5"],["D:/Blog/public/sparsearray-sparse-array/index.html","e53f286ed10305ae1e656c834ad9025c"],["D:/Blog/public/spring-architecture/index.html","45e4ee04b25c297a7719f59dda81ca8a"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","992f77069698b9b8e0f7eeff704e2720"],["D:/Blog/public/spring/index.html","c1748f9e49a7470502bed890824d7a9c"],["D:/Blog/public/springcloud-alibaba/index.html","c6bd8f4458da2ae13944e370e2b381be"],["D:/Blog/public/springcloud-bus-message/index.html","1203a4d76e3bf12d327b8723541bee61"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","15b33011fe430f525c44f67ee753712c"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","778f66048550d83dd0b8d78c7ff071a9"],["D:/Blog/public/springcloud-stream-message-driver/index.html","16607bba5f0f303853c711f07b7f8e33"],["D:/Blog/public/springcloud/index.html","d4d6baf56c33ccf5e308963437f01f3f"],["D:/Blog/public/springmvc-environment-construction/index.html","4eff6e13cfecbc6e893e9f97e508bec4"],["D:/Blog/public/sql-injection-attacks/index.html","72d64b59e90bce30cb7326beb040b718"],["D:/Blog/public/stack/index.html","e24bad3e2ea79965680234a9989ba9ad"],["D:/Blog/public/state-mode/index.html","ef70c5d4cb4bc24a786f84f464dbd6ea"],["D:/Blog/public/strategy-mode/index.html","446052b66a5df6ae777471cddd36ac3d"],["D:/Blog/public/synthetic-reuse-principle/index.html","2352e3b32c7310c05d09903088e2d5e7"],["D:/Blog/public/tags/C/index.html","40990bccf4ccb271c1d0cea793515fb5"],["D:/Blog/public/tags/Concurrency/index.html","08152a9d37178c5658e98b0bcfbcadfe"],["D:/Blog/public/tags/DesignPatterns/index.html","d9d9d0023b02922e58d92edbc1f5f75e"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","b72c015aaec568f36a423987ec32e502"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","864847675fb81899618dc8bf22d4d473"],["D:/Blog/public/tags/DistributedMicroservices/index.html","1269cbcda9a67445479559c2d55e9c54"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","05aad5502f95a487df6fb11ada0da261"],["D:/Blog/public/tags/Interview/index.html","17e414a6935db924c794297f7adaaef7"],["D:/Blog/public/tags/Interview/page/2/index.html","d86aef8873791fba5a0eaa38954b9644"],["D:/Blog/public/tags/Linux/index.html","177164ed8804a95095e0cc8b8b4e1c71"],["D:/Blog/public/tags/Operating-Systems/index.html","20834dc42039dfa9a8ac36bc158f4baf"],["D:/Blog/public/tags/about/index.html","eb8aa09d2e4f20ffd298bbf4312e35c4"],["D:/Blog/public/tags/ad/index.html","ad49817720f4f7fa2d64d7cf8e9766dd"],["D:/Blog/public/tags/dataAlgorithm/index.html","1db631b0f7783d3a2d6d92d37a4ed3c7"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","0ebeb63d748e9e920528c03915592c4e"],["D:/Blog/public/tags/docker/index.html","b5fe2ac8e24c38004c429b071f0060d9"],["D:/Blog/public/tags/frame/index.html","fe37ef52ba090f3b94d845e566ea0216"],["D:/Blog/public/tags/front/index.html","25fd6533998ba7438a944958805dae0e"],["D:/Blog/public/tags/index.html","2cebfbb2789e5d4bbbf1b77c7e5a83be"],["D:/Blog/public/tags/jvm/index.html","aef7055342e2d1ed558716e972be60cb"],["D:/Blog/public/tags/maintain/index.html","9f2305cb8deae7655e3548f9aeb9228b"],["D:/Blog/public/tags/math/index.html","a450b17843a58c4f0c9b96753620f781"],["D:/Blog/public/tags/math/page/2/index.html","6dc314d700ac95963269cf47d57d3381"],["D:/Blog/public/tags/network/index.html","730f5b68f0150e9aee39afd2844d4541"],["D:/Blog/public/tags/resume/index.html","231c268cf5a758f64d54265c2418509b"],["D:/Blog/public/tags/safe/index.html","962fb857cad6c32b81ebad6e4e4e337c"],["D:/Blog/public/tags/sql/index.html","02c2012cb6c75c98232426ec4d61b9d5"],["D:/Blog/public/tcpip/index.html","2b5aa108adbf4ebcfed5f3e44613e256"],["D:/Blog/public/template-method/index.html","6039c69d1ec6327465007dc9104e437e"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","9fef6b2860ac208ed395af758bbbec44"],["D:/Blog/public/thread/index.html","0d9b0ed3174f0886d798594327b5f68f"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","9b4bf220cc1595408c12a371c79a20fd"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ba95e067271a0b24ca8551299647dfe4"],["D:/Blog/public/visitor-mode/index.html","0f90700b78750531e0557fcff96342fe"],["D:/Blog/public/xml/index.html","a7e88070d011989489959bb4f1ff0344"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","b2a6f8bcac6973b432de1129659232e7"]];
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







