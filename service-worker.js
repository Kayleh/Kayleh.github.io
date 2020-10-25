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

var precacheConfig = [["D:/Blog/public/404.html","75df1d6f64ff38d9d742f94c1c36a3c6"],["D:/Blog/public/7-sorting-algorithms/index.html","5169c3c4a3a24884b33bc8420ed8ecb4"],["D:/Blog/public/C-algorithm/index.html","12ba4ef676addc8890298b39cc9f9ec3"],["D:/Blog/public/C-programming/index.html","455833f57663c3534854f18904ae17f2"],["D:/Blog/public/Good-use-of-pointers/index.html","017e370755dc30fea4fb6d36d602b5d6"],["D:/Blog/public/about/index.html","ff59ceb77ce8868ff36de705fb44ea78"],["D:/Blog/public/adapter-mode/index.html","f80510ee855694791394973bf4259eae"],["D:/Blog/public/agency-model/index.html","2b47979e3bede86794a9058fd6ec3d4f"],["D:/Blog/public/appearance-mode/index.html","f73d4b18ef8d435e0f476186d5bda1dc"],["D:/Blog/public/archives/2019/01/index.html","98dae9250a2b4ea2b003bacdb8c8d820"],["D:/Blog/public/archives/2019/07/index.html","dc11973ef4b5e3227610493f227931fa"],["D:/Blog/public/archives/2019/12/index.html","4953198740638d43321c4bd4e9c6b1e1"],["D:/Blog/public/archives/2019/index.html","e99143e1b528502a7f86cc23310571a4"],["D:/Blog/public/archives/2020/04/index.html","8ba7e7e1d84ebc672201739c9a46c000"],["D:/Blog/public/archives/2020/05/index.html","6dac2ccf43c6c8a5e9f74cab8f20e577"],["D:/Blog/public/archives/2020/05/page/2/index.html","f034041d9bc2160ae10251743418d000"],["D:/Blog/public/archives/2020/06/index.html","c75b88e219c433dbe30e6b8ca7844b91"],["D:/Blog/public/archives/2020/06/page/2/index.html","ea97afae207f876ea3ee86f5483a43b3"],["D:/Blog/public/archives/2020/06/page/3/index.html","242f426c4226f073b823991d32dd90fd"],["D:/Blog/public/archives/2020/06/page/4/index.html","ca1fa4c37e94171d9db8d64730843756"],["D:/Blog/public/archives/2020/07/index.html","8d6f218cf1e98c255043ac8fb27c31d7"],["D:/Blog/public/archives/2020/07/page/2/index.html","70e761a138c4e9b92a1fc26c0b4b1afe"],["D:/Blog/public/archives/2020/07/page/3/index.html","fbd07e983c9dd3dc12a81d7d9e4e5fad"],["D:/Blog/public/archives/2020/08/index.html","2f66bcd11d785192f150377b2c05ead3"],["D:/Blog/public/archives/2020/08/page/2/index.html","79d189cd61d95cac852dba52ee08d3e7"],["D:/Blog/public/archives/2020/08/page/3/index.html","e6da23165c3bf14688a24612a890863a"],["D:/Blog/public/archives/2020/09/index.html","d59a923bd9cc7976bee3356b58b49061"],["D:/Blog/public/archives/2020/09/page/2/index.html","0f0f5283b945ac8b1f3380757942f9d3"],["D:/Blog/public/archives/2020/10/index.html","7f167d1bee512338cfafec3a1c6dd01f"],["D:/Blog/public/archives/2020/10/page/2/index.html","ecd2ffd36c2d3c07c764b6eadf420b4d"],["D:/Blog/public/archives/2020/index.html","4bfccfea5cfab10d21d1f9f8f99e6f32"],["D:/Blog/public/archives/2020/page/10/index.html","41574910427460d5780ba8b97834c685"],["D:/Blog/public/archives/2020/page/11/index.html","7c2f09dd584dfc5e62f2c52c6a87d1e7"],["D:/Blog/public/archives/2020/page/12/index.html","755713599df52a4959e62544e4718e7d"],["D:/Blog/public/archives/2020/page/13/index.html","cf4ca1cfeb7ddb29ea88518796c41e3b"],["D:/Blog/public/archives/2020/page/14/index.html","f9e8b4459958d6e4d3abc23f50744878"],["D:/Blog/public/archives/2020/page/2/index.html","ef292fe07cee38405eea3a8b234abe27"],["D:/Blog/public/archives/2020/page/3/index.html","9221ef82536e9236ac59d57c3c778c43"],["D:/Blog/public/archives/2020/page/4/index.html","391944d367a553c39ad60a8f2fcaa20b"],["D:/Blog/public/archives/2020/page/5/index.html","1ec429ee3f1e9b6a5ab0dfae3accab46"],["D:/Blog/public/archives/2020/page/6/index.html","9463d4092e3f96e280f278b040af163d"],["D:/Blog/public/archives/2020/page/7/index.html","16c6344ff509ee2cac3cd3541b4d9cb5"],["D:/Blog/public/archives/2020/page/8/index.html","70dae4a0ec1ccf8efdfe41c04279c78f"],["D:/Blog/public/archives/2020/page/9/index.html","a6b25e1e7804993276a081c211448d9f"],["D:/Blog/public/archives/index.html","3507c9722b5107e6f0ff77e9e990c252"],["D:/Blog/public/archives/page/10/index.html","f1fb88ef52d9de8c7e01d4d27f55ba3d"],["D:/Blog/public/archives/page/11/index.html","a893e805fcaff76af699ba3535c64d3e"],["D:/Blog/public/archives/page/12/index.html","aa045863fbe48d8b40277993bbdef2c7"],["D:/Blog/public/archives/page/13/index.html","decdf83c529fdd38d26078dfa504ec86"],["D:/Blog/public/archives/page/14/index.html","d0168df087fd3296e07df2024ae8786b"],["D:/Blog/public/archives/page/2/index.html","0652f8536364004babf9d80977565c7c"],["D:/Blog/public/archives/page/3/index.html","5b7427655be0b9ec240f5bdefcc619af"],["D:/Blog/public/archives/page/4/index.html","f43f1a976acffeef3c28e1c5dc5231a7"],["D:/Blog/public/archives/page/5/index.html","c6d4f1042cfc5f763a32a53eaaef0b61"],["D:/Blog/public/archives/page/6/index.html","a31d1367e06f77a84e323a29b0d0e5f2"],["D:/Blog/public/archives/page/7/index.html","ac9c656649e359d58c028822943311bc"],["D:/Blog/public/archives/page/8/index.html","9399e18a9bf3f481684b2bb61a13091d"],["D:/Blog/public/archives/page/9/index.html","b97aa0504b6efe58d94fcb8e5df41b4a"],["D:/Blog/public/array/index.html","055fb8f8dfeece6f6e954c266b1ec5aa"],["D:/Blog/public/binary-search-algorithm/index.html","c30553786817f3ab42481bd846b5228e"],["D:/Blog/public/binary-sort-tree/index.html","26126f01ef802082bf5c8ae9a932c314"],["D:/Blog/public/bridge-mode/index.html","aad624e08c29d78aa83c7b076692a433"],["D:/Blog/public/builder/index.html","d7ee8c67b61da0931d4dfa68ea9cd385"],["D:/Blog/public/c-pointer/index.html","601ad3d3a9b6794e1e307ba8dbfef3f3"],["D:/Blog/public/categories/C/index.html","ed66b70d5f566266b0f919e107da40a2"],["D:/Blog/public/categories/SpringMVC/index.html","c77cc1353e315619296ef90abc9537eb"],["D:/Blog/public/categories/index.html","941010e63d7da0a89dcccb692937f85a"],["D:/Blog/public/categories/linux/index.html","99ecfc8e4d4c5bd8e952955fda37109b"],["D:/Blog/public/categories/分布式/index.html","eefdc5c300b730a493ebe083cb080481"],["D:/Blog/public/categories/分布式/page/2/index.html","9adced114a7d291c00ff8fe4ecd1b09c"],["D:/Blog/public/categories/前端/index.html","40c78efd917bc1c402a2e6def5789a07"],["D:/Blog/public/categories/设计模式/index.html","d9ba47254c10d40d2c6db00f32f831d2"],["D:/Blog/public/categories/设计模式/page/2/index.html","dcf85eb7e7a4f099ce593a08199eda97"],["D:/Blog/public/categories/高数/index.html","687d5ebfaba6496712015aea1fc005b1"],["D:/Blog/public/chain-of-responsibility-model/index.html","b164dd5b4c181776ddfd5d5fa62e1053"],["D:/Blog/public/chinese-and-english-switching/index.html","28503932a89c69a191ede350b561a668"],["D:/Blog/public/combination-mode/index.html","33ba4967677ed5894a2ee974fc7f4dc7"],["D:/Blog/public/command-mode/index.html","fd2422240d9507abf2fc463695806ea3"],["D:/Blog/public/common-commands-of-unix/index.html","b2340ee34bd31dcb4891c1c3c4c35566"],["D:/Blog/public/computer-network/index.html","373007844aa97b354da5d423ccc2140d"],["D:/Blog/public/concurrency-principle/index.html","d3c61b4124bf9efdbc0b22234f0d4097"],["D:/Blog/public/continuous/index.html","edc31f6fc1248deaf4e85b5316457477"],["D:/Blog/public/contract/index.html","96bbbc2613ff2dd6f164d649ff48b17f"],["D:/Blog/public/css/index.css","c45f6c48f621be5187073376855cc1ea"],["D:/Blog/public/css/var.css","a5ca5d00724517312ce80fddd53e24a1"],["D:/Blog/public/cycle-structure-programming/index.html","be5055ef6685a7beae4d2732b1398999"],["D:/Blog/public/data-structures-and-algorithms/index.html","21bdf8317e92ebacb4ba313b0a685928"],["D:/Blog/public/deb/index.html","5c20003497e05f427ad773b94cce7e8b"],["D:/Blog/public/decorator-mode/index.html","0c1e8f04965d11d2c60db231f978c0c1"],["D:/Blog/public/definite-integral/index.html","b23121dc32e49586cbfd6eb7975062a7"],["D:/Blog/public/dependence-reversal-principle/index.html","e3fe662a7e4080a1330cbb730bd60802"],["D:/Blog/public/derivative/index.html","e7c853d6ae714bddb3546798cbf694bf"],["D:/Blog/public/design-patterns/index.html","3d5057c578e84ccf01de2f66d8c32b6a"],["D:/Blog/public/differential-equation/index.html","d9db37774e045f9c6c36349610ce9b38"],["D:/Blog/public/differential/index.html","6869b9c996a8e44e1bd6d847c78627a1"],["D:/Blog/public/dimits-law/index.html","3366296fc43c12ae7f0eedc7bc8d561c"],["D:/Blog/public/docker-virtualized-container/index.html","cc5e2b403dd5b6a499fcb7a9eb346980"],["D:/Blog/public/double-integral/index.html","b33cc48e255bb20edb286da7709dddba"],["D:/Blog/public/dynamic-array/index.html","046eec20658829d88397bca87f9a0689"],["D:/Blog/public/encoding-algorithm/index.html","b47dbdfaad487fb613117495b9282900"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","56e81c4e7b209e1edc8e97f0220f56d2"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","b9900327c1f0d2d0ff962d248fc8f6aa"],["D:/Blog/public/factory-design-pattern/index.html","b0c8909958c659cfac282d3b3c96bc67"],["D:/Blog/public/flyweight-model/index.html","e13744a38114a8e41a9555ba4e6442e3"],["D:/Blog/public/function-graphing/index.html","55d1362d0cb5e711bd462448c63cff74"],["D:/Blog/public/gateway-service-current-limit/index.html","81927180c6d9c0f15b268bcacf8a4e52"],["D:/Blog/public/gc/index.html","7e4bc26f770941a0672f39e7adb320ae"],["D:/Blog/public/generalized-integral/index.html","1b1113fcfe3b41ef7328e6f99e26315d"],["D:/Blog/public/google8102e2f35ce9e391.html","ed0180bfa7cc8b21cdb57131c12463b2"],["D:/Blog/public/gulp-compresses-static-resources/index.html","a4c9697fc5b2b14aa97b941df59d474f"],["D:/Blog/public/hash-algorithm/index.html","5b9fc1934d27ef2ef57dacebbb16f5ec"],["D:/Blog/public/heap-sort/index.html","043caae5d13fe1bacb971f1c186a66fd"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","2691d9adb0800ecc0d064722ce72067a"],["D:/Blog/public/http/index.html","a266ecf95a1385ad484e7803081c7d56"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","8be88eba96b773666f2faea8526438be"],["D:/Blog/public/index.html","781a2515ac250f558cdb583543dc7cc1"],["D:/Blog/public/infinitesimal-and-infinite/index.html","9cc8b6edb8c9f39e2e22b9ce75d1908c"],["D:/Blog/public/interface-isolation-principle/index.html","ea501cb52756ff1835852bfe821f0b61"],["D:/Blog/public/intermediary-model/index.html","68b2a93875de6ba333ff40dae2c389a9"],["D:/Blog/public/interpolation-search-algorithm/index.html","1022b80d5158c8f9a16ab0c98982b825"],["D:/Blog/public/interpreter-mode/index.html","461037349fde2ab7ed9162e7764bbae9"],["D:/Blog/public/introduction-to-computer-network/index.html","27852f921c51405561ef8efe533d2eb5"],["D:/Blog/public/introduction-to-operating-system/index.html","ca72ac90357818d017c78492cead424c"],["D:/Blog/public/inversion-of-control/index.html","112edcfc6b6eba6337c50c1194fcd921"],["D:/Blog/public/io/index.html","22362c9bf849b7ceed5c7caac1d2045b"],["D:/Blog/public/iterator-mode/index.html","8604114d32b95dbac09b16724538d340"],["D:/Blog/public/j2ee/index.html","66cb58bbab695544b7053ca4f7ba619d"],["D:/Blog/public/j2se/index.html","2a239d472c39e994c48d910e8910ce5c"],["D:/Blog/public/jdbc/index.html","8541e88b99e8ef4976bda493a0dbb289"],["D:/Blog/public/jdk/index.html","6861568480700e4e6a647fb7bbb467f7"],["D:/Blog/public/jmm-memory-model/index.html","5eb9bd315196de5602ed9445dce463fd"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","bb44deff7a1705d05e700b86043c3ada"],["D:/Blog/public/law-of-robida/index.html","06340c8c05c048db20f4a95e80c45cac"],["D:/Blog/public/limit/index.html","9e1fe3d058116cf8f54ed27b538a8316"],["D:/Blog/public/linear-search-algorithm/index.html","5320f85d720cf674c17527183720f2dd"],["D:/Blog/public/link/index.html","035dbc590ace807d2822945621c1abe9"],["D:/Blog/public/linked-list/index.html","34139a68cb4d3b8d5fafa067a6c7b635"],["D:/Blog/public/linux/index.html","10fd8b86134b8735ec4b59ff1728d650"],["D:/Blog/public/liskov-substitution-principle/index.html","d767c870418313d7f099a3782f2076bf"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","e371631e85bea88831077aa45f483031"],["D:/Blog/public/maintenance-1/index.html","5e1d2e50ea7ebe34b8e35035cf81c47a"],["D:/Blog/public/maintenance-2/index.html","c68d986be99e5d9e20449ab52b8ad2df"],["D:/Blog/public/maintenance-3/index.html","98f2f93d2d8089d025b46c17746ae5ed"],["D:/Blog/public/memo-mode/index.html","1500a059c986ca3497d7ea6d3fc38aed"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","b5f07eae182b2593eccaae3c77e98074"],["D:/Blog/public/multi-function/index.html","ac4fe44784df9cee8a3146b48f7ef770"],["D:/Blog/public/multithreading/index.html","956eef028a4b12cdd3610a0ccb1317a3"],["D:/Blog/public/mvc/index.html","b84da637b98088638875fb199126650f"],["D:/Blog/public/mybatis/index.html","287154f931a8090f812e9b32f0c90535"],["D:/Blog/public/mysql/index.html","eea029b0536592ed1785f0020edc700f"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","45d84ae81fb07fe92d8b2fc0433f0b38"],["D:/Blog/public/objectoriented/index.html","0de6edcde4181f5b1691caf51785ec5d"],["D:/Blog/public/observer-mode/index.html","30fc1f10ba1f2559313ce4b7e4ed899e"],["D:/Blog/public/operating-system/index.html","b75f00de2580dc7c709846aae05fba7a"],["D:/Blog/public/page/10/index.html","be30d43659896f5bc2cd84b99e53810d"],["D:/Blog/public/page/11/index.html","d5983f470441ce5cc6e00fdf91249ef4"],["D:/Blog/public/page/12/index.html","bb171fafb2ea860efa5bf658d317b1a0"],["D:/Blog/public/page/13/index.html","b0e040a105624075f63926f319046d9f"],["D:/Blog/public/page/14/index.html","f0160f96a6ac58a27e37354e5d70837a"],["D:/Blog/public/page/2/index.html","3d084c42fd39832b3a88af9d97126774"],["D:/Blog/public/page/3/index.html","c53dafc41012a2ace0bd5a3047e47336"],["D:/Blog/public/page/4/index.html","f17a7714ab1da2f2b3f39164e617b2f9"],["D:/Blog/public/page/5/index.html","07453759a09fe793c213765af62dc1ca"],["D:/Blog/public/page/6/index.html","44309911a10fa78261978facb316b913"],["D:/Blog/public/page/7/index.html","24f81542e8b01e931724a09966e95f85"],["D:/Blog/public/page/8/index.html","7498ea17ca95e59bc77733616d17e730"],["D:/Blog/public/page/9/index.html","47012510e832b5cbb0ef849a05146538"],["D:/Blog/public/palindrome/index.html","eb3cee1f08b07bb766200562f02fdc1f"],["D:/Blog/public/partial-derivative/index.html","9795b63f8b4d42e59e27b76e7860e229"],["D:/Blog/public/pass-by-value/index.html","e7637427a2580a9b23cb1a0d322876f8"],["D:/Blog/public/pictrue-bed/index.html","c5ac91bfad9b9ad31114550f9ee951cd"],["D:/Blog/public/principle-of-opening-and-closing/index.html","04d640f9461d3d3c777f7846eddf30ae"],["D:/Blog/public/principles-of-computer-organization/index.html","b2d6dc4da0d4df085ccfef81748bf402"],["D:/Blog/public/prototype/index.html","9493d52e90502b995f30c913be8e8843"],["D:/Blog/public/queue/index.html","03dc7e8910f54447ced89d0d956e6a59"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","48a724af00522529ce064bc3f753005e"],["D:/Blog/public/redis/index.html","4dd0f09f013c31808c95cfe476d15878"],["D:/Blog/public/reflection/index.html","ab58302a7364d5e915090993aee157a1"],["D:/Blog/public/resume/index.html","6c73112a3d946f1911a3d05566976837"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","dc9e7cb0a828e9ab8cc16a6fc52dd06a"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cb50af37f968058786b290473325ff15"],["D:/Blog/public/select-structure-programming/index.html","8d908200fab7a8b4c6b62d9cba417b21"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","0ba2e9013fbf74cb9a8f12ba91cb5deb"],["D:/Blog/public/sequential-programming/index.html","07748ed682781a78819fb8b8b9507dac"],["D:/Blog/public/series/index.html","dc555401c585eb9dd1986c1b1d6b4e1d"],["D:/Blog/public/single-responsibility-principle/index.html","e66922bc93bda19d7b6708fa5ddf047f"],["D:/Blog/public/singleton-mode/index.html","17662cf49c8e766b7e09fa20b192d886"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","3cca8b493f779d9c92bdefb93b57adad"],["D:/Blog/public/sparsearray-sparse-array/index.html","e13222ec8301cf4d7b79454403e01d23"],["D:/Blog/public/spring-architecture/index.html","de5fcda6d97ce3664015924fc6e2d53d"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","a2947d7676a7f0eb6cd03b23b0ea352b"],["D:/Blog/public/spring/index.html","078e09f04a6021e3f13d014cfaf51b5b"],["D:/Blog/public/springcloud-alibaba/index.html","bec5da742fae38d746576e83c973c408"],["D:/Blog/public/springcloud-bus-message/index.html","715173e881146e0e03733feacc0d66fb"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","1b90fde628b173ece78193f00408b784"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","d118e275d814d04b987fb8a012f4be74"],["D:/Blog/public/springcloud-stream-message-driver/index.html","e0c0840cf94f00948c59405199cb319f"],["D:/Blog/public/springcloud/index.html","da7d3a5423844e9140b64f4c82e32b84"],["D:/Blog/public/springmvc-environment-construction/index.html","8cee91832ff5b9471b88549fa0a762fd"],["D:/Blog/public/sql-injection-attacks/index.html","f5d4c8d27adaa153afd9d8ba5c915dc1"],["D:/Blog/public/stack/index.html","62547de442abf52b2ec298b6e2d0a792"],["D:/Blog/public/state-mode/index.html","06619ceff219e111b607bf895963fceb"],["D:/Blog/public/strategy-mode/index.html","0e295d320ca6ca341e811e5c6e4eab48"],["D:/Blog/public/synthetic-reuse-principle/index.html","d0643be85cfa0425a5ae7bfdb5da988d"],["D:/Blog/public/tags/C/index.html","b7b75477ed26b1aefc4826bb97b8cfa4"],["D:/Blog/public/tags/Concurrency/index.html","7b4e4ca0761bbbd5778ecda4ac50be1f"],["D:/Blog/public/tags/DesignPatterns/index.html","14858ef585ad8f698de81ebbace6a8f7"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","1906f6998cac9eccd80a5dd094dbcae6"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","aaf304892ee3f5d4c96d0bf59885aed6"],["D:/Blog/public/tags/DistributedMicroservices/index.html","f9f88d72b182df7dda2de62a0da87c1d"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","60f073d3922fe61e976706a1546ec7af"],["D:/Blog/public/tags/Interview/index.html","50bef90b0d980ed3b9d02d414afa802b"],["D:/Blog/public/tags/Interview/page/2/index.html","6ca93b56562775cc65e80008e5acb871"],["D:/Blog/public/tags/Operating-Systems/index.html","dd3b60744c4bfcf3b061368db5f4b930"],["D:/Blog/public/tags/about/index.html","db8096834aaa4fccb081acb72b8eab51"],["D:/Blog/public/tags/ad/index.html","0bab75f8ecbd8f6912a0d1bfa9cbfa70"],["D:/Blog/public/tags/dataAlgorithm/index.html","d6cce9765a94e7d739c70df51d40dae5"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","f054d1fec245adf36b2f7bbc80ee97c0"],["D:/Blog/public/tags/docker/index.html","f6740b32731e7ac7992c87af951e1a4c"],["D:/Blog/public/tags/frame/index.html","d30441bd997e8aae486a06b29b9edf50"],["D:/Blog/public/tags/front/index.html","e0aca3cd0f76392295dbc94bf836efa5"],["D:/Blog/public/tags/index.html","45440e45dde2e239197da9f088bd8191"],["D:/Blog/public/tags/jvm/index.html","7251791d569766f0193e1b290194df66"],["D:/Blog/public/tags/linux/index.html","7a0f19c3a0a1c9ca9bd0bd82493fb618"],["D:/Blog/public/tags/maintain/index.html","1ed66f435c4d0060a7ad1ed9704e0fc5"],["D:/Blog/public/tags/math/index.html","313ce71a80590b42c9f08cbcb5e8d96a"],["D:/Blog/public/tags/math/page/2/index.html","9d64c5f44f9f8c8089ad85e7ccdee960"],["D:/Blog/public/tags/network/index.html","fb88f87cfcd11403d911d6ba56be5fe4"],["D:/Blog/public/tags/resume/index.html","62a19c0061fcc456c669bc9383ecc082"],["D:/Blog/public/tags/safe/index.html","9b0bfc913e38b137c8db7a57c889cea8"],["D:/Blog/public/tags/sql/index.html","b1ea1494bfd6b2d26f7d7cc1eaf057a5"],["D:/Blog/public/tcpip/index.html","bc5225d0bc80e8dc1841e339a8daaec4"],["D:/Blog/public/template-method/index.html","6c57e4b9f6f259e427c1c05062b268a5"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f31da0dd73ccc8d2f784f6cd7659fbec"],["D:/Blog/public/thread/index.html","5ca32a2facdeb51dec49510aed37f033"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","7fa37922dc9259f1d229ac3bca49400d"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","429a6d48d7194c1b6fbe1d0763261678"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","658c38c3fef480a963a3e244d0cb56c7"],["D:/Blog/public/visitor-mode/index.html","163f5ca34f9366d64058618a79bc764e"],["D:/Blog/public/xml/index.html","c39511c380f8d35f06c69b6a9eee7e42"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","c5a441158171a3e5a74de9ae17e01c07"]];
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







