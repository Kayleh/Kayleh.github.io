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

var precacheConfig = [["D:/Blog/public/404.html","b09d7822aa049fffb2f2d5897941bfa9"],["D:/Blog/public/7-sorting-algorithms/index.html","0bb082ef9bf86fc8b12462ea85599b48"],["D:/Blog/public/adapter-mode/index.html","5aa46c20162f9dff529a8477b9049d1c"],["D:/Blog/public/agency-model/index.html","fa8003e33bf76b9589ee072fd97ff0f0"],["D:/Blog/public/appearance-mode/index.html","850ad30a0d1fabee155e34c87bf63cb2"],["D:/Blog/public/archives/2019/01/index.html","879dd5d22e1b8f5875ed5ff962d3aabc"],["D:/Blog/public/archives/2019/07/index.html","c70f4b1d5aa48e9e318c468d7f01600d"],["D:/Blog/public/archives/2019/12/index.html","c728e3a6625979825a2cfff89d86babb"],["D:/Blog/public/archives/2019/index.html","86c8310e97e070e7a961d993842f7abc"],["D:/Blog/public/archives/2020/04/index.html","bb9b87d6053b19af582db2d80b823a61"],["D:/Blog/public/archives/2020/05/index.html","ddd7a88a15e3033824899bbaac845027"],["D:/Blog/public/archives/2020/05/page/2/index.html","2e825d4cc571609c0ea23aac5a1c578c"],["D:/Blog/public/archives/2020/06/index.html","45bc4a1e8a2a12619182401707f6a182"],["D:/Blog/public/archives/2020/06/page/2/index.html","c2cd9237ff7beb39272b8036cada402f"],["D:/Blog/public/archives/2020/06/page/3/index.html","b6d6c9f570f4c7255f71d99478355972"],["D:/Blog/public/archives/2020/06/page/4/index.html","8b047d4aeaf1135bcb7b8f16eebb804a"],["D:/Blog/public/archives/2020/07/index.html","06e6c25612f6afb1aac608c0e99e6dc7"],["D:/Blog/public/archives/2020/07/page/2/index.html","046025e233670da3474dde8e0a248157"],["D:/Blog/public/archives/2020/07/page/3/index.html","fae491ce11abcbc4e7df11bf481a4b4f"],["D:/Blog/public/archives/2020/08/index.html","f5dc9df52654bcb7db97cb1d578ea37c"],["D:/Blog/public/archives/2020/08/page/2/index.html","34408b919dde43615a3dbef2e9171c47"],["D:/Blog/public/archives/2020/08/page/3/index.html","81b34f3d1515a27fef6d8bd340c85b98"],["D:/Blog/public/archives/2020/09/index.html","84dfc0396b6540e4b49af120e5d280b8"],["D:/Blog/public/archives/2020/09/page/2/index.html","be5cd2e86e42bd6061c941d82ccb0624"],["D:/Blog/public/archives/2020/10/index.html","665942f0c6ac7c62b9d9574c1e34ded8"],["D:/Blog/public/archives/2020/index.html","a3c0da357511f11515ef74be168c441a"],["D:/Blog/public/archives/2020/page/10/index.html","4a7fa388bbdc8f34b728f11d68cb77b4"],["D:/Blog/public/archives/2020/page/11/index.html","59bc6abcdc33217cdaf9e21f1c73a19c"],["D:/Blog/public/archives/2020/page/12/index.html","505f3ac0b710e9c48e0da6cd57b4d6be"],["D:/Blog/public/archives/2020/page/13/index.html","7d1d010ea0e04c74df4ac54f57dee74e"],["D:/Blog/public/archives/2020/page/2/index.html","7bcd72313c466f7e02d1ec52dcef8971"],["D:/Blog/public/archives/2020/page/3/index.html","6eb8ffd156f408f87d25e2e39f81ef2f"],["D:/Blog/public/archives/2020/page/4/index.html","68f2dad6a3e5c84ab58f60695893eb9c"],["D:/Blog/public/archives/2020/page/5/index.html","f0e183df5faac45497227957ad39736e"],["D:/Blog/public/archives/2020/page/6/index.html","14709d05a85ef0bb66405f63c3dc00a2"],["D:/Blog/public/archives/2020/page/7/index.html","169d6b8cd339c7c558576a078d9e7f8c"],["D:/Blog/public/archives/2020/page/8/index.html","6ea5a013a0aa9b8c8a4e74a35d40c44e"],["D:/Blog/public/archives/2020/page/9/index.html","3ad08d29e56073c97c3f163446ab8cc9"],["D:/Blog/public/archives/index.html","ca6087800367367ef5a3bf25fdf60cb7"],["D:/Blog/public/archives/page/10/index.html","d08cf6c8fca1917248c1861499b3e92e"],["D:/Blog/public/archives/page/11/index.html","c27531bd30c5b51c346d54c4f07a5f50"],["D:/Blog/public/archives/page/12/index.html","f27e2f0420b8347254e79bed0e99cf21"],["D:/Blog/public/archives/page/13/index.html","eeeb850bd916d1e4cd29b96f881bad91"],["D:/Blog/public/archives/page/2/index.html","aede54866db078c6a00e39c450f6fd7e"],["D:/Blog/public/archives/page/3/index.html","f92cac97300185a6cbcab7a2bd78f776"],["D:/Blog/public/archives/page/4/index.html","dbc044e958d408d1ac06befb5767cebe"],["D:/Blog/public/archives/page/5/index.html","fdbd3ef11a0e825e8086fb983a996543"],["D:/Blog/public/archives/page/6/index.html","7803e30db904ab92e7ac271026e987e1"],["D:/Blog/public/archives/page/7/index.html","32ae2e767bc14496ff1b96db546bd54d"],["D:/Blog/public/archives/page/8/index.html","f9c0a5002b33bf18c16dad9287f839c9"],["D:/Blog/public/archives/page/9/index.html","d6f9d3ce5196bec76cb59e59b3407127"],["D:/Blog/public/array/index.html","f891ca0b795bde0d32936dffe37d4c08"],["D:/Blog/public/binary-search-algorithm/index.html","78794866bf1cd0ca06de1d84c50987c4"],["D:/Blog/public/binary-sort-tree/index.html","4a0e69eb80278ea68ab5f882a0a0f1a5"],["D:/Blog/public/bridge-mode/index.html","5e617314479e6036429109e52f037b8a"],["D:/Blog/public/builder/index.html","d255e99f9383bfa54ae4448114761fe7"],["D:/Blog/public/c-pointer/index.html","123910c1504f0248113ad47d3aea4c14"],["D:/Blog/public/calculus/index.html","9d392b6c6dfab26ce1667714f1121256"],["D:/Blog/public/categories/C/index.html","b45db83123bace625d498a172a78af2d"],["D:/Blog/public/categories/SpringMVC/index.html","a0cc8bf6c26d4146aa4aafdcadd6b1af"],["D:/Blog/public/categories/index.html","6dce9f882e441382c2f62000ab9ac79f"],["D:/Blog/public/categories/linux/index.html","8e0db31b20513c336e7dd91b586a9d20"],["D:/Blog/public/categories/分布式/index.html","baceb9c9add60d3eeee5980768f0c76f"],["D:/Blog/public/categories/分布式/page/2/index.html","79e9fbea4b603477e002bb617a6b21ee"],["D:/Blog/public/categories/前端/index.html","6d116dde11791d6ff1e97d2f6d17883e"],["D:/Blog/public/categories/设计模式/index.html","43dd0a6eec9092c0b0b0c0883a8c06af"],["D:/Blog/public/categories/设计模式/page/2/index.html","494e9b673a27c7d9238b3e71bc3448d7"],["D:/Blog/public/categories/高数/index.html","54eba56aca62d890422572fd4c2c30a7"],["D:/Blog/public/chain-of-responsibility-model/index.html","c18b3b14755c3b758a12b2f348e69a9c"],["D:/Blog/public/chinese-and-english-switching/index.html","53cc0469821c661bdd7e9bdd8b5b9769"],["D:/Blog/public/combination-mode/index.html","79d37f021557058bca8934b0ade9c6ad"],["D:/Blog/public/command-mode/index.html","a608d5972d8187b75ed8d3243c3048a9"],["D:/Blog/public/common-commands-of-unix/index.html","cde780c8ab86c14df8c5d25ea374f3a1"],["D:/Blog/public/computer-network/index.html","2e612cfb662fc4de72cb5998121cda9a"],["D:/Blog/public/concurrency-principle/index.html","8d7650ad6731e00113f74d2c1ae635bd"],["D:/Blog/public/continuous/index.html","b422f2be0734fc8fb235035e1ba1ef76"],["D:/Blog/public/contract/index.html","6ca0d94d8f7024bc41a8ec18323e5b39"],["D:/Blog/public/css/index.css","c45c0b1dab19cba4077de7784726bea3"],["D:/Blog/public/css/var.css","73ac78540e4c8401ad226636d903ebbb"],["D:/Blog/public/data-structures-and-algorithms/index.html","afeb602ccb24f6c8e498129d832c41cf"],["D:/Blog/public/decorator-mode/index.html","871d871ce37712aef150600017bb8335"],["D:/Blog/public/definite-integral/index.html","e53429049f80a3a5a68b0442b13029e5"],["D:/Blog/public/dependence-reversal-principle/index.html","fe99c6512800cd64d41510bc623aa8d8"],["D:/Blog/public/derivative/index.html","055b951826905d2a4160511aafa10310"],["D:/Blog/public/design-patterns/index.html","1d6d1fa66339e5b8356318b726f69862"],["D:/Blog/public/differential/index.html","b805affb39a21c88d5cb3ddf7c7e1982"],["D:/Blog/public/dimits-law/index.html","d15ebc19f5ee9e91b30bd4b23bb30cd1"],["D:/Blog/public/docker-virtualized-container/index.html","1e5a0aff673acfd0a369c603e27832e5"],["D:/Blog/public/dynamic-array/index.html","4873d98750481bd3f233ed2957331463"],["D:/Blog/public/encoding-algorithm/index.html","56a8b9eeb75bb5ac8aee0be66e07a901"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","3c474438902e346a203cc87df55816cf"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","1aa047c74c3e2d52c5f0e07680bcf678"],["D:/Blog/public/factory-design-pattern/index.html","4b7ac37ed62b74c0dfb886661f22c93d"],["D:/Blog/public/flyweight-model/index.html","e37c62e76799bf9eb8ce7e307819a5a4"],["D:/Blog/public/function-graphing/index.html","26303fe0553f2a2f3fbdfce4f866f882"],["D:/Blog/public/gateway-service-current-limit/index.html","83f6873923f78acabeab8875649be84b"],["D:/Blog/public/gc/index.html","5e7d4f5736c7daaf909ab15aaf4ddbcd"],["D:/Blog/public/generalized-integral/index.html","d7136a53154a0bb96c4a29e631993a38"],["D:/Blog/public/google8102e2f35ce9e391.html","401e3c440836f0fc93ace1102f2e1192"],["D:/Blog/public/gulp-compresses-static-resources/index.html","d7bb17bed6080bfd735cc857cd67f171"],["D:/Blog/public/hash-algorithm/index.html","ec568a77eec2080e9920aa53f57238e3"],["D:/Blog/public/heap-sort/index.html","2072c805c16798e81cb95bc3e179fb04"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","7834e9264a59e2e4eece2863547841f6"],["D:/Blog/public/http/index.html","9c0849c58c742fd3daa0af09cbffd9ec"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","a1faa55ee3a918ffe36d86b06e145a5f"],["D:/Blog/public/index.html","e032e5df2d599a780cb5d2b643c0ab72"],["D:/Blog/public/infinitesimal-and-infinite/index.html","f40a636b1758c47856da6c3d054b56f0"],["D:/Blog/public/interface-isolation-principle/index.html","308d792bb7f4b1af52adc4cfd72e4e87"],["D:/Blog/public/intermediary-model/index.html","6e554f058a2dccb2b7dd255e396b52fb"],["D:/Blog/public/interpolation-search-algorithm/index.html","75153571850aa96053116f7d51d6741d"],["D:/Blog/public/interpreter-mode/index.html","a83f799d184743849ae82d7beca27678"],["D:/Blog/public/introduction-to-computer-network/index.html","ec44210cb343f3a5caa74b5050df1619"],["D:/Blog/public/introduction-to-operating-system/index.html","f815be8712d14ed75be1411061acd70e"],["D:/Blog/public/inversion-of-control/index.html","ec44450c7927a4488048221b7dfccd34"],["D:/Blog/public/io/index.html","6bba2a6e6504dfbf9cdbdd82e02bec0b"],["D:/Blog/public/iterator-mode/index.html","3570ed0e23fbbb2f4bd2763dfb2880ef"],["D:/Blog/public/j2ee/index.html","e295ea1d40b4fb2a16f89289b6240289"],["D:/Blog/public/j2se/index.html","0962dbcfef95434186c90c90649210c7"],["D:/Blog/public/jdbc/index.html","29d4f4cdde42ec823506cfc5398b1f51"],["D:/Blog/public/jdk/index.html","91cce9cad433233133e655ee03d8682e"],["D:/Blog/public/jmm-memory-model/index.html","bee130ca3e67378a7a101b1c6dbbcab6"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","30d29e330a912dc4652694921295143f"],["D:/Blog/public/law-of-robida/index.html","8286994d0db8486d0a18035305dec3d2"],["D:/Blog/public/limit/index.html","9a9b91e5577edb627f8519f55867f503"],["D:/Blog/public/linear-search-algorithm/index.html","29d561c6d941cfce8800a0b278512494"],["D:/Blog/public/link/index.html","ee23ac56f7e0d5062fb8f3c89f8c97cd"],["D:/Blog/public/linked-list/index.html","b4df6679fcec825b97d1725a43bf94d9"],["D:/Blog/public/linux/index.html","ed16294278f113e42db15f1d7d667ee3"],["D:/Blog/public/liskov-substitution-principle/index.html","cb0cd220b71fd5b0cf0395df54eacb28"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","198908c45ce376f1751395be4dc24048"],["D:/Blog/public/maintenance-1/index.html","7f77ed7e918cd6683c454b520eb67090"],["D:/Blog/public/maintenance-2/index.html","2f5b5b7b33fb166b33c56ee54aa15dc2"],["D:/Blog/public/maintenance-3/index.html","9cdc7246284baf9ac0ad033d6f711618"],["D:/Blog/public/memo-mode/index.html","63d1d4f0381fcc16b8f80ec3b852edd6"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","504236a2f81ce5b581941c5669d68df2"],["D:/Blog/public/multi-function/index.html","09cc62dca02cbca1e21a84eb1b7af983"],["D:/Blog/public/multithreading/index.html","a073e3313c3608141b71ecae932cd0ab"],["D:/Blog/public/mvc/index.html","cc14d2f9229f4bdc34289161fcb2bea1"],["D:/Blog/public/mybatis/index.html","9d4e196647d67f2f315293605eedfd38"],["D:/Blog/public/mysql/index.html","7e84c68111c83b074951573ded90cd0a"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","2a11ba47567999e6a01448160a5dcdba"],["D:/Blog/public/objectoriented/index.html","ebd46b981b6dfe20401acfc231464a86"],["D:/Blog/public/observer-mode/index.html","96d2a7e24d9f587e35397cf9a244a997"],["D:/Blog/public/operating-system/index.html","7251788b24c8351d0d61ae8eb25441be"],["D:/Blog/public/page/10/index.html","2af1a2b21c649a27f3c9a486656c111c"],["D:/Blog/public/page/11/index.html","4b0416dbef026d1a50fc048e5239e934"],["D:/Blog/public/page/12/index.html","189c38a4ec5c4c1ab8b42d7b3855a979"],["D:/Blog/public/page/13/index.html","34bba4874a5c40ff73306cc87a10c4bf"],["D:/Blog/public/page/2/index.html","bdde9bdca4d073fabe5687f35b626bd8"],["D:/Blog/public/page/3/index.html","63a3b5ba63838fcac7c7c8a329b17d09"],["D:/Blog/public/page/4/index.html","d0bc687a2b59c47512916a9ea98a0600"],["D:/Blog/public/page/5/index.html","f3d5f61eff214be513b1845ed37f4af3"],["D:/Blog/public/page/6/index.html","74953e46eed7c93797cf1080ca5e88a2"],["D:/Blog/public/page/7/index.html","6191f2c9d80654e2519a85f9183d0ed6"],["D:/Blog/public/page/8/index.html","6d409c792860e694e413845cfede581f"],["D:/Blog/public/page/9/index.html","d7f76c9c3e16644d374868b3779fc5a8"],["D:/Blog/public/palindrome/index.html","ff2123f0303fbfdec3259485afd6be9a"],["D:/Blog/public/partial-derivative/index.html","aae69fc07ac44d40135b7aedc88bcb79"],["D:/Blog/public/pass-by-value/index.html","fb5f23178e7e60a40b0ca92a2a8fe25a"],["D:/Blog/public/pictrue-bed/index.html","1466ecd69c82094f1e902ad6f2b89530"],["D:/Blog/public/principle-of-opening-and-closing/index.html","773cabf784db5f08cd708864091b0a88"],["D:/Blog/public/principles-of-computer-organization/index.html","4c4fd9f1a209868247ba7fd6be5f2c12"],["D:/Blog/public/prototype/index.html","2e30327c17a2f5f37711e4c58fc85a4c"],["D:/Blog/public/queue/index.html","d20afcb04efeb361b8d3c0b5b97e7bfe"],["D:/Blog/public/redis/index.html","d658fc909c972d5243bd8a08e59554f1"],["D:/Blog/public/reflection/index.html","d3e7d76c3f659b5fd87000692db7f9cf"],["D:/Blog/public/resume/index.html","633be0007dadbc7ffbeae00757e0a4db"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","0a13d8f6163249efbb3aee5f795c8859"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","68fbfc496004fe6bca84b4a9d6553759"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","35a84f0e0be40420a4eb449318084053"],["D:/Blog/public/single-responsibility-principle/index.html","8857a333cce7bd406227990d686713b3"],["D:/Blog/public/singleton-mode/index.html","dcb46887cb5cb2ce1759d8d93f124eba"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","2d95791de31eda8fb55d355c2c2b5470"],["D:/Blog/public/sparsearray-sparse-array/index.html","a6b39fbe0ed10dfb2c2bfb3ad78be033"],["D:/Blog/public/spring-architecture/index.html","4422a65fb103cea72cd07c3708ad0926"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","fdb6b4c0a83a15962fa494d3a2b2a0ed"],["D:/Blog/public/spring/index.html","985f377cfaf7f54338a5ec5d64ba8bd4"],["D:/Blog/public/springcloud-alibaba/index.html","68db3cfb4028c5044cbaf7d0dcdc1e8a"],["D:/Blog/public/springcloud-bus-message/index.html","0dc773ff424095d0543b94930db53741"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","ab68d3169934b18a8a680f78b7a4fe7a"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","69d26ee7baa9b0c054a2bcef311bb4a7"],["D:/Blog/public/springcloud-stream-message-driver/index.html","eb44e655fb8babcaa501f35019bb2c85"],["D:/Blog/public/springcloud/index.html","f8e908049c4dfa6ebc8abd29817fba33"],["D:/Blog/public/springmvc-environment-construction/index.html","531a3fc1ce026e5eb1e97af888306ed9"],["D:/Blog/public/sql-injection-attacks/index.html","2109f20912b125a5b752d742c41ee2df"],["D:/Blog/public/stack/index.html","764ceb26d6127062eefc37400021044f"],["D:/Blog/public/state-mode/index.html","db48fb43c6891d3d3eff2484d4f3f28d"],["D:/Blog/public/strategy-mode/index.html","5f5478d15ad848ec36e400d100b69b80"],["D:/Blog/public/synthetic-reuse-principle/index.html","088eac2787271d6b343a0478d240ec8e"],["D:/Blog/public/tags/C/index.html","5e702e0c18042beaeb25908f5407a05f"],["D:/Blog/public/tags/Concurrency/index.html","0e8ba403686675a4d9644979a2de12e6"],["D:/Blog/public/tags/DesignPatterns/index.html","32bad7633009a417c254d7f5b6e372da"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","6201658907e8704b1c3866c85d3cb1e3"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","d9cf09a44535bb5554b376fe563b4b46"],["D:/Blog/public/tags/DistributedMicroservices/index.html","58871f0422db614e203f319f6ce36db3"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","cc324a77448dee7845abd142e6ebe55b"],["D:/Blog/public/tags/Interview/index.html","c8925039321a6f2ef316e7d7dd06818a"],["D:/Blog/public/tags/Interview/page/2/index.html","8f8fbdd267427c591ec006e906fbb5d4"],["D:/Blog/public/tags/Linux/index.html","65401305224d74215bd7ed05ff148845"],["D:/Blog/public/tags/Operating-Systems/index.html","0e9b72f2e73d86030d2037194c856508"],["D:/Blog/public/tags/about/index.html","6fc7b8246943e96700948818a03b0f25"],["D:/Blog/public/tags/ad/index.html","02930ee7218f759bee9d6e64b849dab1"],["D:/Blog/public/tags/dataAlgorithm/index.html","e1474bba517f10025e29d9bca3183e64"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","d52ff0c1f345ca36ad8df398f1cbfe53"],["D:/Blog/public/tags/docker/index.html","1d8da05a5cb9a8ad0f5172cebb955487"],["D:/Blog/public/tags/frame/index.html","32ab978dfac8db4ba0226ed5239ac65e"],["D:/Blog/public/tags/front/index.html","ff69a69f4171a7267438c7a40bf109e5"],["D:/Blog/public/tags/index.html","14bf8b7fd2c40aa19cc9e6bad2c20a21"],["D:/Blog/public/tags/jvm/index.html","e5ca960e1e3e65ac617a067fbf470612"],["D:/Blog/public/tags/maintain/index.html","a2cfa06deb8ddb99d47275e42ddea516"],["D:/Blog/public/tags/math/index.html","87c8632a6858a6c7cee6fe95af66cc36"],["D:/Blog/public/tags/math/page/2/index.html","fdf628c19fe6f388f7f75d61d1a244c8"],["D:/Blog/public/tags/network/index.html","93c53bc3ac7b4a5796f6fbcb0daed455"],["D:/Blog/public/tags/resume/index.html","57899525b4e9b55f6a806add6b80b6ea"],["D:/Blog/public/tags/safe/index.html","5a854bd7a6265e381000db4a7a9f8d11"],["D:/Blog/public/tags/sql/index.html","08dbd03346f0b4a8d64c1640340a81ee"],["D:/Blog/public/tcpip/index.html","000974ee138306261e551f9268b841bf"],["D:/Blog/public/template-method/index.html","2850eed1ba86b5db61ac6c201701df4d"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","9294b1b3ae15164a1747591a68f9a93e"],["D:/Blog/public/thread/index.html","877812566e24dcbd3d567f4a33912ca1"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","ff6103a368f66e00f033720b40d7e514"],["D:/Blog/public/undefined/1601621561773.png","154f09bbf9324dad2dd0e070b901b8ec"],["D:/Blog/public/undefined/1601621872570.png","4dd9f78bdd783df5850f253016829142"],["D:/Blog/public/undefined/1601622019111.png","7f57eb0952f109a6d4dc0ba372bbb766"],["D:/Blog/public/undefined/1601622207780.png","89d00c31b5927f4d0d06bbc86cdd2db5"],["D:/Blog/public/undefined/1601622538512.png","bf0527643d802d5bb437f903c0f77971"],["D:/Blog/public/undefined/1601622624030.png","cdb3a454c1c5f4f5d401dd73126b8c64"],["D:/Blog/public/undefined/1601628177270.png","f2e28e97a00d537a2442dfd3dde1f303"],["D:/Blog/public/undefined/1601628194665.png","78f5ad6297e09df7030fc160c434f8af"],["D:/Blog/public/undefined/1601628338192.png","04cabe2a8b05fb6079cf29a27be3d94d"],["D:/Blog/public/undefined/1601628391367.png","1b054c380550631154bad5b97092422c"],["D:/Blog/public/undefined/1601628609123.png","053fe07d156caa95de7d80ee9115f9bf"],["D:/Blog/public/undefined/1601629244702.png","60f854f4883d021ebf3c3604c795dc3d"],["D:/Blog/public/undefined/1601629522050.png","0eaae9a822a045c53b1086f0c8748aea"],["D:/Blog/public/undefined/1601629887174.png","78e206384856848e5edb059dcccaefd2"],["D:/Blog/public/undefined/1601630012904.png","64ebb415bf87bd236c728d1da0a48bf8"],["D:/Blog/public/undefined/1601630687632.png","2b71b85c689d5c9fad13a6a8fb4d530c"],["D:/Blog/public/undefined/1601661252410.png","eeabb7b1e58b7bdb5c35c53020aae6a8"],["D:/Blog/public/undefined/1601661564115.png","8baf87ca9cdd66ec55223c59b982eeef"],["D:/Blog/public/undefined/1601662210072.png","913e1e1d462f94fc9ee3519eb9cde32d"],["D:/Blog/public/undefined/index.html","198f790af5eb9dc47326fe083c783438"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","09f35edadb9c159dbbaf6b9644128109"],["D:/Blog/public/visitor-mode/index.html","0fa90e79203e80aae7d45717a1644b94"],["D:/Blog/public/xml/index.html","c9948bbc0e8b1da4abefb2bce5a50f44"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","82e4c706b8a64135d11bdae8e30e6892"]];
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







