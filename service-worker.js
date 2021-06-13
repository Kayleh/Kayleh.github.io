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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","ca715f36de59e6ad122da4cde4697395"],["D:/Blog/public/404.html","0e2a75c4363c496ed3daf05f40e7291c"],["D:/Blog/public/7种排序算法/index.html","e31e1f0b92db2f48e9f5a9634d47a4cb"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","79c06dca43df34d14dd756a80fdf3295"],["D:/Blog/public/AIO模型/index.html","758d34f625430bce2a7faa49ca6a3824"],["D:/Blog/public/Array/index.html","7628646fddbbf9e355deab024f483187"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","e55b311666becc649487b26ce47cc567"],["D:/Blog/public/BIO阻塞模型/index.html","4b7903de64f5bc979a6e456696ae2064"],["D:/Blog/public/C-algorithm/index.html","a8a40bda2e0a039fc8a383a6512d08de"],["D:/Blog/public/C-prime-plus/index.html","e623f9e315abe0bbb85b31f62a6ea2c7"],["D:/Blog/public/C-programming/index.html","6ba5973389f6481fe3bde05b2410c87c"],["D:/Blog/public/CAS-and-AQS/index.html","87488b76b2f13cefc7dead34524817ae"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","982cee824c25fa31bb285dbe7188fe85"],["D:/Blog/public/GC/index.html","2022d223472b3bbe39d692015556c291"],["D:/Blog/public/Good-use-of-pointers/index.html","f355c284712c2062da274ea577c58b19"],["D:/Blog/public/HTTP/index.html","8d9ce65b0bb039a98e2a645c566ea5f7"],["D:/Blog/public/Head-First-nginx/index.html","1d1e30f09969d439dbda80bbff6b3608"],["D:/Blog/public/I-O模型/index.html","40ba194584036d2eace4cacb50bb423b"],["D:/Blog/public/IO/index.html","816223202cfa9e3302f6de6d5c099e8b"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","1a8bbaf6425dcbf4964749dee0e7c253"],["D:/Blog/public/Interface-test/index.html","77486076821daf9e336f899ed7ca72b8"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","c28bea2174907a2219eac0c4fe38eed7"],["D:/Blog/public/J2EE/index.html","fc2d996a499e69908c898b3b50ec4e28"],["D:/Blog/public/J2SE/index.html","2bb10ea01b015bd0ef384fe5de118901"],["D:/Blog/public/JDBC/index.html","0412a517f8ec1704189ec346699cf315"],["D:/Blog/public/JDK/index.html","fd56b20e3efd5e1b1f420f8326a28542"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","bf5f035dc7014e6ca8ca689fb6764bc8"],["D:/Blog/public/JVM/index.html","4f96f4fbac5cf39783be0128e188d838"],["D:/Blog/public/JVM垃圾回收机制/index.html","514f1f7b2e694cfd26231b526477468a"],["D:/Blog/public/Java-memory-model内存模型/index.html","da3fdc7e6d7a752e83d6ae159b1793f2"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","f541c08ea270da6f491ef8ed5648db4e"],["D:/Blog/public/Java网络编程/index.html","48c3156f282c6edd1b61c57f11cbbfe7"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","0951a23b83e0d1f2b0c48451a2df19ff"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","7337d9ca82b8c8b050071b08f19e39ff"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","5934fa7cb9cfa8edab7b7fad8c8f0069"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","3ae4a7cadc22c7d5cda9a113364b3c48"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","4accec93830d724493c10939cd7ee0bb"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","6ca11396b0e96c2e1f7968e119664024"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","48029cea0eb7fdb62d3079815bb76849"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","e04ef2103a1d803279ead9e00f2d3df0"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","968bdef05852fd44fddccdfea79e6c04"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","8a9ce567188bc19dac8c23978f750b80"],["D:/Blog/public/Linux/index.html","6891aa075b5f8d530765d1ee095fe734"],["D:/Blog/public/Lock/index.html","664c2601a8d198d668788a175d761c00"],["D:/Blog/public/MVC/index.html","6093664dbd3459916531bba3b6c7d1ab"],["D:/Blog/public/MYSQL/index.html","4adeb93e31f4d3e4525476bcbf09b8a4"],["D:/Blog/public/Mybatis/index.html","850e834d57dc903143c00dda092dcc4a"],["D:/Blog/public/NIO模型/index.html","ea2d8120574de7fc772f8cf31e1a6a79"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","620c36e9442fef109f74eff870da7415"],["D:/Blog/public/Native方法/index.html","0fb60c2780691a33cf8bdd627cde20c6"],["D:/Blog/public/RESUME/index.html","946870ba9ae862e68213b00c8416cda0"],["D:/Blog/public/Redis/index.html","50884660bbeae97871a8aa016b0eab25"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","5d49e740b942851663f0edae685c03fc"],["D:/Blog/public/Reflection/index.html","2188f43402d403b1ae8977e57549df59"],["D:/Blog/public/SQL注入式攻击/index.html","f7f0e439bc2a467880910e615ca9aa4e"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","25757be6722ba2026d2e9682430e22f9"],["D:/Blog/public/Seata处理分布式事务/index.html","c97364d518acd3179585953e46ed8cdb"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","20f70b89275df6b3854f6aec3e570b33"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","0d03caafc1656265a272a484ed749cc8"],["D:/Blog/public/SparseArray稀疏数组/index.html","01b6e6d45a07ae4678659393507f5e26"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","d25c217b7c889aee2d74a372043c888c"],["D:/Blog/public/Spring/index.html","ad9008718f179a3feead4c67d387c174"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","dfe41c50d7a93c65ffdc961762416037"],["D:/Blog/public/SpringMVC工作流程/index.html","eca81a77df33595beaf540f03d3b1451"],["D:/Blog/public/SpringMVC环境搭建/index.html","3db26afe5bac7bc6e6fcb66b8f888992"],["D:/Blog/public/SpringSecurity/index.html","25a8a0e85ada1466aac8a04070adac2e"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","f8bf5b77242f10e290a8aade8df21848"],["D:/Blog/public/Spring架构/index.html","9027e6133bd3509da6f861a0f139b789"],["D:/Blog/public/Spring的作用域/index.html","6d07a9373278bd40c7f6e7968826f793"],["D:/Blog/public/TCP-IP/index.html","ced5c21800e232a6c1f501de2e609d7d"],["D:/Blog/public/Thread-pool/index.html","0d40aa8de02ac507034dfdd7a8332ef9"],["D:/Blog/public/Thread/index.html","f41acb8db893703f867d14310ffdca52"],["D:/Blog/public/Unitest-framework/index.html","e36917de8493c05e80d3ed48b9c61436"],["D:/Blog/public/XML/index.html","05ed3e0cc81c9385da5152831b04bcc7"],["D:/Blog/public/XSS跨站脚本攻击/index.html","b0aab53ca2082a4882052b6ed710ecb9"],["D:/Blog/public/about/index.html","0de315d54b7d259e8f25e634616404f0"],["D:/Blog/public/app-test/index.html","abaa85473646a7c50d58c8dcd0036b5e"],["D:/Blog/public/archives/2019/01/index.html","810e3d6525195a9ad189bc52f241b41b"],["D:/Blog/public/archives/2019/07/index.html","9f8edff33d5c94b7b577fb12188a7028"],["D:/Blog/public/archives/2019/12/index.html","b87503ff49158da9c090e622c44df103"],["D:/Blog/public/archives/2019/index.html","c5ad20732624493e6331aba8dff36397"],["D:/Blog/public/archives/2020/04/index.html","a1fdbc686d18680b99c3f517b361e8f8"],["D:/Blog/public/archives/2020/05/index.html","72d1b7c15e8dd8975b414e7700313647"],["D:/Blog/public/archives/2020/06/index.html","7d2e380bca7d72f74b680934e0908960"],["D:/Blog/public/archives/2020/07/index.html","1d5ee1b48a37847911ccfec082bf0fc7"],["D:/Blog/public/archives/2020/08/index.html","efe7d112ec3dbdb5aad8bd8419e863fe"],["D:/Blog/public/archives/2020/09/index.html","019de72a92df59ee302579260536d6ae"],["D:/Blog/public/archives/2020/10/index.html","83e47036839c53d35e0b149e985013d7"],["D:/Blog/public/archives/2020/11/index.html","237f5a6fcee7704ce11a6ff4fb103b2e"],["D:/Blog/public/archives/2020/12/index.html","31c26baa66a135fff54efde7d234c0a8"],["D:/Blog/public/archives/2020/index.html","5455bfcb26682ed496a0893c101dbf28"],["D:/Blog/public/archives/2021/01/index.html","7a5b7d3c74dc3161ce6247f0378bf192"],["D:/Blog/public/archives/2021/02/index.html","ac1e6773fd6b760aa039ff10ec143b55"],["D:/Blog/public/archives/2021/03/index.html","9f175311887823dba882f5b15f8b7311"],["D:/Blog/public/archives/2021/04/index.html","319d696def6b9cbf1890c556b8cf3cc0"],["D:/Blog/public/archives/2021/05/index.html","f1ad78d3f19e324446335635d56f0a9e"],["D:/Blog/public/archives/2021/06/index.html","f42365036662ebd8141bba990d1a11f7"],["D:/Blog/public/archives/2021/index.html","93a8d116aaec979f7ac4b3a9966f60a0"],["D:/Blog/public/archives/index.html","86a4062700fa02488ab9f96901e89f64"],["D:/Blog/public/categories/C/index.html","73239c78f9d3726ce2197d76168cc0b6"],["D:/Blog/public/categories/SpringMVC/index.html","ba8a812a003c8b1b4e8d9cc33cb92e82"],["D:/Blog/public/categories/categories.html","0d70935487520d119dff9b476bbbf69b"],["D:/Blog/public/categories/linux/index.html","d9dddd0c99a4e051a238d8e44ec436f3"],["D:/Blog/public/categories/分布式/index.html","8e992358752271e7f3ee3f7ed6a339f9"],["D:/Blog/public/categories/分布式/page/2/index.html","bfac37b8887e6f62a85d39e54641d430"],["D:/Blog/public/categories/设计模式/index.html","ed97a447935512de8f9ec964e4a31cb0"],["D:/Blog/public/categories/设计模式/page/2/index.html","190580129e09615ef679c32818079c4f"],["D:/Blog/public/categories/高数/index.html","bdf8048c2561006a880dc4107ad9d216"],["D:/Blog/public/contract/index.html","e7e7aa0bf4bdb659f85b6f053f9f1df9"],["D:/Blog/public/css/index.css","0f4c170b0250333a2ace13809db4f822"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/var.css","b940959dc434867d5ef3d21d8e192b1f"],["D:/Blog/public/cycle-structure-programming/index.html","9c1d3689fff55dddb1eb23f6afd76df2"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","cc6d124c00b58b3a12970fc711c8dff1"],["D:/Blog/public/google8102e2f35ce9e391.html","dce93e8bfd1dfd682c0467a4fc0e7068"],["D:/Blog/public/gulp压缩静态资源/index.html","c276c8a2335b94120854a0d4bebace17"],["D:/Blog/public/head-first-hashmap/index.html","d4d5621ac2365f5b0ef1cf76f74a2901"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","08dc0a51435897ad9c62c50116b6b307"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/improve-robustness-(1)/index.html","f5ff097601752b7e78829e0ff3466c04"],["D:/Blog/public/improve-robustness-(2)/index.html","aa52dddef4a7d32b1e3b162d95451c6b"],["D:/Blog/public/index.html","c6f7b4f418dd6f8aed9fa61c5350ac93"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/katalon/index.html","874c2fe0654bbba3bf14ed60ee1d6533"],["D:/Blog/public/link/index.html","0f09d28ea7fccbe21f66fa6909b7ed16"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","08feb4b9aaae29e29dfc7607e08dddd6"],["D:/Blog/public/live2d-widget/demo/login.html","5ba2e109b92d08f3266006d8f35958e7"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","989c6db9eef3b0cb4f16c28a8004bd8a"],["D:/Blog/public/mybatis-缓存/index.html","3fbeec473e8e18ef4645fcc04ae9cf52"],["D:/Blog/public/note/index.html","f604c2b5a7b74a6fb970950a0066ebd6"],["D:/Blog/public/page/10/index.html","e97eb0223b79651ae5c7b448074efa7e"],["D:/Blog/public/page/11/index.html","fb31c2413535c7bfcf662b1378445332"],["D:/Blog/public/page/12/index.html","7cabe225743df7b63038796f61f7ce10"],["D:/Blog/public/page/13/index.html","fafe79c0774e4574e0c16882a6660e97"],["D:/Blog/public/page/14/index.html","9cccb121211f5f3cca4b06ff2e10a7d1"],["D:/Blog/public/page/15/index.html","980648766868dc11de4c6a505af7dab3"],["D:/Blog/public/page/16/index.html","21324be6b0c3cc2ba511a02638522827"],["D:/Blog/public/page/17/index.html","66810b5a8501dc10fdae761e92766e52"],["D:/Blog/public/page/18/index.html","d662151b0d434bb29e5e2adabf423ad4"],["D:/Blog/public/page/19/index.html","b243fa561b7515748d9b46f3d30cdb0e"],["D:/Blog/public/page/2/index.html","d70d268114a27ff277bf5554f8a28419"],["D:/Blog/public/page/3/index.html","64b7a466e7f7f427f26354ee8215e997"],["D:/Blog/public/page/4/index.html","fcbd678a5c9bb46194662b9b89a57851"],["D:/Blog/public/page/5/index.html","032ceaf5f0aaa1054422fd89dd227b61"],["D:/Blog/public/page/6/index.html","8d195aff2135d5955f24451dbff0d15a"],["D:/Blog/public/page/7/index.html","18ff5940f072292278cc72abc1b8248e"],["D:/Blog/public/page/8/index.html","3c509dcd068f30ac6e21e01ecd640ed4"],["D:/Blog/public/page/9/index.html","0085e7aec2214dd652fec3f74e7d3961"],["D:/Blog/public/proxy/index.html","6d9d9087e693b2a652538f2122dc2bc0"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","ebfe4d5f2e0cee4e6273789287dc371c"],["D:/Blog/public/select-structure-programming/index.html","d102a4d7aa76c2b260bb88e19b0388e0"],["D:/Blog/public/sequential-programming/index.html","19a03a2e610087383bf465b12e8e73a4"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","1484a3ea356a235dc1417247ef783218"],["D:/Blog/public/tags/C/index.html","692ded52c2a648c4ff60c1801ba7956b"],["D:/Blog/public/tags/C/page/2/index.html","acb93fb390ac8ee2a83b3c1c9413c0f0"],["D:/Blog/public/tags/Concurrency/index.html","8425a61ccba2cea4021e095beff414f8"],["D:/Blog/public/tags/DesignPatterns/index.html","8489c1eefdd796c2aa532ae79831c0bc"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","4716612b82c6c6b085d10eefc2b6d3f1"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","7408a73a7df1467ccb751df785bd2fbf"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9460a1b44fce22e6553f98c49525874e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","680f4f040f3df56fb3a93f39fa0f6e42"],["D:/Blog/public/tags/Interview/index.html","a17e181d393859dfc9b81add06da9367"],["D:/Blog/public/tags/Interview/page/2/index.html","bf3bcd0a0896a592479f187271c79a42"],["D:/Blog/public/tags/JVM/index.html","a1854b04b92b165c997569403c850990"],["D:/Blog/public/tags/Operating-Systems/index.html","baac1ffcc894f68866a0508853114e0c"],["D:/Blog/public/tags/about/index.html","ced9d29f44ce5737bdeba8eac4e2b473"],["D:/Blog/public/tags/ad/index.html","db343d6099cede727f71271eaf6a2e89"],["D:/Blog/public/tags/algorithm/index.html","2928b346b9e25ff1aecb66bc4580f723"],["D:/Blog/public/tags/algorithm/page/2/index.html","0b9220a7c6d8f95d8d15ae5b7eb903aa"],["D:/Blog/public/tags/computer/index.html","72c4df51ebe6be6268de5b6f13d10bf2"],["D:/Blog/public/tags/docker/index.html","f0404f82c646e00ca3d0abbde48a9fac"],["D:/Blog/public/tags/frame/index.html","963801b38707f54a0fc80fb9c8788c3c"],["D:/Blog/public/tags/front/index.html","2ec274fd88ee697c8e58043e7ac1b881"],["D:/Blog/public/tags/index.html","1e27ffe238d76e26e459570ebfff4a81"],["D:/Blog/public/tags/io/index.html","b655e06108b370419cb859999cddd1ee"],["D:/Blog/public/tags/java/index.html","230ebd79a057c17d11c8dbc267665b7b"],["D:/Blog/public/tags/linux/index.html","f93bbcae853985f0e95bbd69ccaf0dae"],["D:/Blog/public/tags/maintain/index.html","a37aa90895d5616bbdad69f87f2a8fe6"],["D:/Blog/public/tags/math/index.html","e8b0374259df6ad456cea31bf03fcba3"],["D:/Blog/public/tags/math/page/2/index.html","cedda5ee018dfb4a242b8b03f3b04704"],["D:/Blog/public/tags/middleware/index.html","0e0b6af0b11e301621cd13c14af310c5"],["D:/Blog/public/tags/network/index.html","214dcc109c1c210633ea3a71e0d54a23"],["D:/Blog/public/tags/project/index.html","94d567ea60daa3c5930f0c60763382fe"],["D:/Blog/public/tags/resume/index.html","88e2bad6bbfb3874dbeaadce756e67ca"],["D:/Blog/public/tags/security/index.html","9eab4c79abaddabf003dc1bf26f164de"],["D:/Blog/public/tags/sql/index.html","8ac9da0111b6257806b85739a2437278"],["D:/Blog/public/tags/test/index.html","161b31cb6c9a35e4bb37ebd518a14df6"],["D:/Blog/public/ubuntu-deb安装包/index.html","b360525fecdde00b7724cf57d79a3dc1"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","dbd74a52927b2e4b4e29ba4bace43cbf"],["D:/Blog/public/unix/index.html","3f673f9dd4f230c2c9334e0495308e01"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","519f34ced30545aa69ef772e6f23155e"],["D:/Blog/public/web-test-combat/index.html","532c6ed4bfa2641b58977deb78aef7c5"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","18853f7212d995de00dae7557964a350"],["D:/Blog/public/不定积分/index.html","ded03bcece9ed75b7818c4510e1ca12f"],["D:/Blog/public/中介者模式/index.html","9d6e3eb7170b0ffeeb7bf03aab8825a6"],["D:/Blog/public/中英文切换/index.html","a17f1643abda7e84a7b02a12f8287648"],["D:/Blog/public/事务的隔离级别/index.html","9c7ff34049d794d4408460a36be0b4a2"],["D:/Blog/public/二分查找算法/index.html","53621894c808f19d437b1786ffe5539e"],["D:/Blog/public/二叉排序树/index.html","063753318227c6e5b6e7a08838f2283c"],["D:/Blog/public/二重积分/index.html","92764f19b156278f866b9ac47fea6633"],["D:/Blog/public/享元模式/index.html","efd91b597936324ff41f8294902e1fc6"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","ab5a229b6ae95cc663b27d8473166d6b"],["D:/Blog/public/代理模式/index.html","4896dbd981b20a13daf4bb6f91efefec"],["D:/Blog/public/依赖倒转原则/index.html","9b6db1133205e13cd03b134a7daad402"],["D:/Blog/public/偏导数/index.html","48096459b1d831390b281d2f9229e0e7"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","057168ee24da90460eaaba7d0b3bd488"],["D:/Blog/public/函数作图/index.html","1428726c9b91ec8ec3c5a1d350a91559"],["D:/Blog/public/函数和指针/index.html","8bbacfb4ae0bfdf1b629d4fca12e1c74"],["D:/Blog/public/函数的单调性和凸凹性/index.html","ea6c27bd762c74f8a391ea4770637fc6"],["D:/Blog/public/分布式的微服务架构1/index.html","7ab85b72b38be78623c77e29a157b6fd"],["D:/Blog/public/分布式的微服务架构2/index.html","bfc434e1a4b1a967dcef8b69155011ee"],["D:/Blog/public/分布式的微服务架构3/index.html","de1f17691dbea269589c7cf9bec74b53"],["D:/Blog/public/分布式的微服务架构4/index.html","dfe87a3c0351ec246a2502e940862464"],["D:/Blog/public/分布式的微服务架构5/index.html","b2bda86ee72ca365b2da79ea3e585693"],["D:/Blog/public/分布式的微服务架构6/index.html","b2923fd10319d8dafcd8207fb9b3ed85"],["D:/Blog/public/分布式的微服务架构7/index.html","8d5431888071ae4ebf8250224588b82d"],["D:/Blog/public/分布式的微服务架构8/index.html","8ac6d1368377911a049d761d013abe7a"],["D:/Blog/public/分布式的微服务架构9/index.html","03a88365c4b2d96c5210480199479823"],["D:/Blog/public/前端安全/index.html","88ca18d2e1e8aec6adea33b8eb698e9f"],["D:/Blog/public/动态数组/index.html","d43fe6accf13efb94b7becd2cfb05927"],["D:/Blog/public/动态规划/index.html","5fa7a5af3074bf26967cf5576c17dd0a"],["D:/Blog/public/单一职责原则/index.html","b95706ff4ff7af6aaf973deb8079ca38"],["D:/Blog/public/单例模式/index.html","6226869ace412728369952c3316d448e"],["D:/Blog/public/单点登录实现/index.html","683133d8d61b64d404fbe72f46520cc3"],["D:/Blog/public/原型/index.html","122a7235e2a7a8b9187a0c65242073d6"],["D:/Blog/public/合成复用原则/index.html","4150e296520a0a3f79356ffa49eff5b5"],["D:/Blog/public/命令模式/index.html","1758c50e00c7b373ef0fc9abda8eb185"],["D:/Blog/public/哈希算法/index.html","7519416a213309a912db745839856486"],["D:/Blog/public/回文数/index.html","b1ba83236df5717f6ed29d3684ba1593"],["D:/Blog/public/图床/index.html","2ae9669e2b63d9577ea1ba59375ede82"],["D:/Blog/public/堆外内存/index.html","e3f2ec1913dfa8a6be1b25fa8784e962"],["D:/Blog/public/堆排序/index.html","6ab6c14456c4fa424f42fe3a92ecd300"],["D:/Blog/public/备忘录模式/index.html","cd0546526140ca7aa2879d00461de1ca"],["D:/Blog/public/外观模式/index.html","0d01d6f8eb125d06867d391c07716afa"],["D:/Blog/public/多元函数/index.html","93195ff2b04687498c8e956b8a34a0d5"],["D:/Blog/public/多线程/index.html","36ae1735b5ab8fa678eb5296b07d301d"],["D:/Blog/public/定积分/index.html","fd3ea6c2ffe96fbda0ce5ab94eea39a4"],["D:/Blog/public/导数/index.html","7604f055bf202f512947ffc5ff698643"],["D:/Blog/public/工厂设计模式/index.html","8303e4a11a147d0a3fb7fc399e28283b"],["D:/Blog/public/并发：原理/index.html","eeb5ff7a99f3e9f1ae334e021adac5e8"],["D:/Blog/public/广义积分/index.html","dfbbb085508541f3d7a3fd39acf76fee"],["D:/Blog/public/开闭原则/index.html","545752c23b8722ab3f794648f51d30f5"],["D:/Blog/public/微分/index.html","dffaaac45b2620fee3f8974c7a5cc728"],["D:/Blog/public/微分方程/index.html","204e44f02034f3fc578ad7a3fc1af980"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","8449a2949bd116697185cd5c135d0d62"],["D:/Blog/public/接口隔离原则/index.html","73f2722046c8b4de406d425f81e9cf78"],["D:/Blog/public/插值查找算法/index.html","c130b4817384efa5c47646ff286a6e81"],["D:/Blog/public/操作系统/index.html","47eb1a8f11816f680b8dda0d2e92f2d6"],["D:/Blog/public/操作系统概论/index.html","6b2805a7c05ea1b2bd26bae2cbbe2889"],["D:/Blog/public/数据结构与算法/index.html","48a35d25e0d282db5367ae1a3b9aa7a7"],["D:/Blog/public/无穷小与无穷大/index.html","51dd5d64fe750f9ebf8027104532cc0d"],["D:/Blog/public/极值和最值/index.html","aba47e278196d4d6e67b3d6f23c50e68"],["D:/Blog/public/极限/index.html","80ea76cb962d9ed7f4a54cb343687743"],["D:/Blog/public/栈Stack/index.html","6924ed5a4d848b8e9a92d1213bfb4c6e"],["D:/Blog/public/桥接模式/index.html","04d5b6181b37c0d4ec44b6fa7d736cf6"],["D:/Blog/public/模板方法/index.html","3e12ee9a1303fe21e7ef693f74c2c461"],["D:/Blog/public/沙箱安全机制/index.html","7c80677515c1649061c8945bb985e34f"],["D:/Blog/public/洛必达法则/index.html","7eda616f36bee3bacfce16efd374431e"],["D:/Blog/public/浅谈IO/index.html","84c29f03fd4d23100bbbf94cf25cae22"],["D:/Blog/public/测试用例/index.html","a4003107698637f06625c12f864ff1d1"],["D:/Blog/public/状态模式/index.html","255bd3ef77401a668a52c1d084293174"],["D:/Blog/public/生成器/index.html","5fdb9315d39a8c8f5207fcccd68a3d48"],["D:/Blog/public/策略模式/index.html","68454a206ef7c83a0da93fcc929f5dde"],["D:/Blog/public/级数/index.html","6d992e84c3e930d3a44ae169f3751c2c"],["D:/Blog/public/线性查找算法/index.html","39337bf673d1079a734bea5e7394433d"],["D:/Blog/public/组合模式/index.html","5484bfaf695f5fcc418d1f0edc8d91d4"],["D:/Blog/public/编码算法/index.html","8e7fd8548135119e2b4f161a90395114"],["D:/Blog/public/自动化测试/index.html","0742ecd7c48b4d85e9a6ffc671ab2bae"],["D:/Blog/public/装饰器模式/index.html","c8bcf53bd54faa93b29c7984f7eed2a5"],["D:/Blog/public/观察者模式/index.html","521adf5ed09467284ecc29eea9a54006"],["D:/Blog/public/解释器模式/index.html","7106783cbbfda44818a79dfb7a6714a0"],["D:/Blog/public/计算机组成原理/index.html","ebf0addba478ee007b01826af1eabf2e"],["D:/Blog/public/计算机网络-1/index.html","34736dcb3ae6886a00ddf730c17c3375"],["D:/Blog/public/计算机网络/index.html","66268c051166c47414960c26c9d82a5d"],["D:/Blog/public/设计模式/index.html","259e04fb83f344c61aec1162ea0b6b69"],["D:/Blog/public/访问者模式/index.html","2d7304a81bfecffece10274343ff49cb"],["D:/Blog/public/责任链模式/index.html","656b9dda71b0f14e63439110809cef13"],["D:/Blog/public/软件测试流程/index.html","2f596c412ded31bb8ffa53e3b3b7b164"],["D:/Blog/public/连续/index.html","6e9be5ddaddd6c712c4115ed1649ca59"],["D:/Blog/public/迪米特法则/index.html","7395534206c52e59a0f51c6ac4a43322"],["D:/Blog/public/迭代器模式/index.html","5b9a66dd5f5ef08a92246579d82d26bd"],["D:/Blog/public/适配器模式/index.html","42f9b1f8745f8b17c0a267813cfb83c2"],["D:/Blog/public/里氏替换原则/index.html","5b9f6670b19759ab39878e2a3573a945"],["D:/Blog/public/链表/index.html","e5d8acebf80aa7b876f799d75bf3523b"],["D:/Blog/public/队列/index.html","c11ce6f0e2a49124c5fb79e8be3e5bdd"],["D:/Blog/public/面向对象的特征/index.html","57110b1736643a714055ccc286e2e7b4"]];
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







