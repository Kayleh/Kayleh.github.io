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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","8186f7a9cfc71bb8eedb4b6d2284da42"],["D:/Blog/public/404.html","1f18cef37e6aa2d42357f024dc8bf44d"],["D:/Blog/public/7种排序算法/index.html","498cafb4659c9f0cd4776e186705af7e"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","58d700d34a7ed7024ba4b242f5ba108e"],["D:/Blog/public/AIO模型/index.html","9ab0c21a1e0fb93ad8e86fde3a5f87cd"],["D:/Blog/public/Array/index.html","9c8ddcd5f89d4675b9e2a351f716e7a8"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","dac5495d03f1ed75c55b864e20686ba7"],["D:/Blog/public/BIO阻塞模型/index.html","8cbfd6afe1a8bd284888915650fa18bb"],["D:/Blog/public/C-algorithm/index.html","c0ee2fd77ed8a932444c2f9eeec8fa82"],["D:/Blog/public/C-prime-plus/index.html","56634ab1975214b822c9bb9216164e54"],["D:/Blog/public/C-programming/index.html","df0a79a37b896712772282c278162c32"],["D:/Blog/public/CAS-and-AQS/index.html","7d870f2c85d2a45914fb8f59e549240b"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","b8ffb3fc9869249648eb4b98cf840bcc"],["D:/Blog/public/GC/index.html","d61e6ab7aa436200e5a2ffa64c4953b6"],["D:/Blog/public/Good-use-of-pointers/index.html","f3f97af20d6faa13740367b5defa0a3e"],["D:/Blog/public/HTTP/index.html","3fe08c3ee3234655c8bfdfa84ed3a1e5"],["D:/Blog/public/Head-First-nginx/index.html","5957d03d99c3ec52070a266582cbdb09"],["D:/Blog/public/I-O模型/index.html","02d065eca228bb3d612a43074fa7deaa"],["D:/Blog/public/IO/index.html","225161623cddeba1706fdb07e9005645"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","094bec08c0f7e51c97b1ce6c06b5b5ad"],["D:/Blog/public/Interface-test/index.html","3d8bd25bab85ab5abc201905e7fd0331"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","a79fe2d8152a205d3359142f9fdd112a"],["D:/Blog/public/J2EE/index.html","cda17e697ae7891cae44f8f5a386c714"],["D:/Blog/public/J2SE/index.html","b8776d14d9f0ef8b59a7114628ae64c7"],["D:/Blog/public/JDBC/index.html","8ed70c81e245a646843bad800d6d83f1"],["D:/Blog/public/JDK/index.html","e437bdad01bef5d8de3d6e140307f1d1"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","ad86ae262eb75159c27977ee53b5cda3"],["D:/Blog/public/JVM/index.html","38980c0d24f0ef10ef37be0da149c9c9"],["D:/Blog/public/JVM垃圾回收机制/index.html","fca2c4d8ae557c1f3d017832c074bc60"],["D:/Blog/public/Java-memory-model内存模型/index.html","3bc90265b2a54848b12b090cade26805"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","95bcdb9a05bbdeabf700ecfba636cbe4"],["D:/Blog/public/Java网络编程/index.html","36514f343e006ea4da30f9d3ca3adda0"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","2f59fad0337b415a2b29f5c0cdd02d68"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","0938f012fc2cc16ddbba39cf019be458"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","8d387387fc6bcb2002d387e2b118951d"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","f4f0aece3e5304715e94728be46a7a01"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","d97118d6b5c2e3ce07925fb8894db51e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","8ae71a1b6cb4c3555286de71de8d48bd"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","26cad2364a2b91a1ffda16ae20d83ef8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","98b0d64facf564db14dac8734635b5ad"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","33d8d17cdb20b6267ce66ee4af75d1d5"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","7bb12d923d14ea02335cc868e6192aa0"],["D:/Blog/public/Linux/index.html","25653b4b349aab73c2efb21acb7332d3"],["D:/Blog/public/Lock/index.html","c87d10ebbc7ef54d7458d989b2d94adb"],["D:/Blog/public/MVC/index.html","2c193130ce99bd0379bbdcb40eb12ab6"],["D:/Blog/public/MYSQL/index.html","fa551d1e42449ecd7a290ca0a824244b"],["D:/Blog/public/Mybatis/index.html","5a13d18739342ae65643975cf6e2fbf9"],["D:/Blog/public/NIO模型/index.html","c3fabfcce103a8480e3665dd1af4fe64"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","c374595da3de4ec83b1fdfa264475a97"],["D:/Blog/public/Native方法/index.html","02e63c5ed4b361049e9aac8b353a0558"],["D:/Blog/public/RESUME/index.html","b03ccde5f6ffbd2fbc3e4699de5a90a6"],["D:/Blog/public/Redis/index.html","26e8d6d997bf35f6e2f5e0332196b2f4"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","c4ebde3ba3e5d4ddc6f3cf353117c55a"],["D:/Blog/public/Reflection/index.html","5b0f3e6c8e5069ea221bb24af2187d25"],["D:/Blog/public/SQL注入式攻击/index.html","41ac54be1c0fe06089d02640d6fe00bd"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","2a5e860b5f183f8e6649431a10c49abd"],["D:/Blog/public/Seata处理分布式事务/index.html","bc34fba5a58607bc5ad41011bb0250a2"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","ba05872eb3f059e3058e472badeeccf9"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","bdfbff26f0a539b07fc5524aa9a1d8a9"],["D:/Blog/public/SparseArray稀疏数组/index.html","ed044c00e5b23113969ba5c7c4c19711"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","a168253f352707d51eb9542d08a3994b"],["D:/Blog/public/Spring/index.html","0d1393ee846958c006b457248579d713"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","a5dbd7c3a6d88229e656d7f65b6a3e0c"],["D:/Blog/public/SpringMVC工作流程/index.html","f1841d99eecc5610b099e42f8ba017e0"],["D:/Blog/public/SpringMVC环境搭建/index.html","74fd50ecb58f6452952c30aa06b280b8"],["D:/Blog/public/SpringSecurity/index.html","aced2d03ed19e1990f2822d6333fa22a"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","923863369b4e6a4943440f506a46bb8f"],["D:/Blog/public/Spring架构/index.html","5d59740c4b9c477c9b3eea6bcae32663"],["D:/Blog/public/Spring的作用域/index.html","9644ec08c4cd6cbc30498cea6cb6fb1b"],["D:/Blog/public/TCP-IP/index.html","0d160365ac4d5e42da03ea15e1c69e42"],["D:/Blog/public/Thread-pool/index.html","9e4f27d15852c6e9ebcb19d8bffdfc79"],["D:/Blog/public/Thread/index.html","5981416ab74f50804423720b5c371304"],["D:/Blog/public/Unitest-framework/index.html","99241be0de18aae5fbe0bc1a7042815f"],["D:/Blog/public/XML/index.html","57e76aa70a5a50682b0c2e419e65754f"],["D:/Blog/public/XSS跨站脚本攻击/index.html","84f7b8be0994643c755d33c05988976f"],["D:/Blog/public/about/index.html","3ec9f0bffc1b4ff95b24c959c61b5fd3"],["D:/Blog/public/app-test/index.html","1c86a53e64e899e7fb809984027bd215"],["D:/Blog/public/archives/2019/01/index.html","d751ebfce2071d67d6354792a6775e8f"],["D:/Blog/public/archives/2019/07/index.html","417335766ac2d5bdf6035a96bd731992"],["D:/Blog/public/archives/2019/12/index.html","6faefdbf032cf1400102e4cd3e2d99c0"],["D:/Blog/public/archives/2019/index.html","c4a9b2f88968472be4125ec07726f4b0"],["D:/Blog/public/archives/2020/04/index.html","069dc0c66578f6e25161f921a438339c"],["D:/Blog/public/archives/2020/05/index.html","5937260bdbe4e6bfea25cb26c9251cfa"],["D:/Blog/public/archives/2020/06/index.html","7a40990ad85801bc2d99bc02263323dd"],["D:/Blog/public/archives/2020/07/index.html","13e73aa21709b011d8c009b0640fb3a5"],["D:/Blog/public/archives/2020/08/index.html","47e6273d0265671ac1698117a0b2607a"],["D:/Blog/public/archives/2020/09/index.html","baa3f9d1f864991872e96570603682de"],["D:/Blog/public/archives/2020/10/index.html","24bc6b6ff4c299440994b58ed3718636"],["D:/Blog/public/archives/2020/11/index.html","af3300555539452c205a81d62aa4198a"],["D:/Blog/public/archives/2020/12/index.html","41424faee52cdf208192aef81a56cfa6"],["D:/Blog/public/archives/2020/index.html","95f491f2ad0f9a3009030f1645e9e0d0"],["D:/Blog/public/archives/2021/01/index.html","d02f95f02d499704a240ae0c5e4d5850"],["D:/Blog/public/archives/2021/02/index.html","ec22c5acea2c737c388b24a431113b4d"],["D:/Blog/public/archives/2021/03/index.html","c7295aace2b2d1525c474ddf87802554"],["D:/Blog/public/archives/2021/04/index.html","f35b1f74c72e1e44b8ae81c2eb8a0a2e"],["D:/Blog/public/archives/2021/05/index.html","2f9e7f25bb8caaf5dca4dcd391197756"],["D:/Blog/public/archives/2021/06/index.html","460e2f588b6aad60579294934ff02a1e"],["D:/Blog/public/archives/2021/index.html","bbb7958b26c141b2d2b81143c0251c43"],["D:/Blog/public/archives/index.html","ba5d11b944137b7ba62e342fa1da58bf"],["D:/Blog/public/categories/C/index.html","52f7d09252dd71778b379f05d9650750"],["D:/Blog/public/categories/SpringMVC/index.html","a4bf6627dc419cefa7dbfa0b55a19dae"],["D:/Blog/public/categories/categories.html","dbb9925e2ad80716408e454dec4755ad"],["D:/Blog/public/categories/linux/index.html","e0d50b97f53cb378a285ca28a5b132b4"],["D:/Blog/public/categories/分布式/index.html","546502b1b93e7ca30b4bd4a78e62e198"],["D:/Blog/public/categories/分布式/page/2/index.html","e5bac129d77a1be11c649c29b4dd391e"],["D:/Blog/public/categories/设计模式/index.html","bbeb4d7de0f2a23326274355b00bb79f"],["D:/Blog/public/categories/设计模式/page/2/index.html","0a349b390e2527289a06ed0589a8ac8a"],["D:/Blog/public/categories/高数/index.html","21f9451be6304e5094cba7c790258635"],["D:/Blog/public/contract/index.html","0cc646a6ce990ec9929f501ee2d6eebd"],["D:/Blog/public/css/index.css","6384fa58a0790f2792243c5894c15208"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/var.css","2f1dff2484e652af7b5e7c220d0ec71c"],["D:/Blog/public/cycle-structure-programming/index.html","0d3948c28f899fe95c8d73bd7e1b1e1c"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","18e78d2f04bb217aff48d5605733a66c"],["D:/Blog/public/google8102e2f35ce9e391.html","e4ccdcb100185f70dcee638df9f14777"],["D:/Blog/public/gulp压缩静态资源/index.html","82f863702c9dc42389c1441197e85c38"],["D:/Blog/public/head-first-hashmap/index.html","64bee63455cffe3926812ef28b933deb"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","32ac27e55199f3fd96e313d3c80e75d4"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/improve-robustness-(1)/index.html","e229d1b13d2d43e97a89273db6e1302b"],["D:/Blog/public/improve-robustness-(2)/index.html","6f4e2ca61abf1309871fd395b20405dc"],["D:/Blog/public/index.html","828774ccf41011efcad44326e908d8e1"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/katalon/index.html","c82a69f3cd513d9c1f8c4993b99616ef"],["D:/Blog/public/link/index.html","a3591ea716b7b962c642ef4b175fed32"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","10553b9364e24c6fcbdd3829504df215"],["D:/Blog/public/live2d-widget/demo/login.html","a8a3b0670c966a0c03c7dc0d47f273a0"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","1cb314e155d525bc41cb50c1cb1286e9"],["D:/Blog/public/mybatis-缓存/index.html","e27b1b2f8e973414fc452761cb820e20"],["D:/Blog/public/note/index.html","f83f787763f1d0af07cef15152dcab15"],["D:/Blog/public/page/10/index.html","a966af88014bffd80264786d4eca1d48"],["D:/Blog/public/page/11/index.html","ae8cf606352dbc2704e6210a3729ec20"],["D:/Blog/public/page/12/index.html","b5d5a2e54d9f71988d10c0447ce8d97b"],["D:/Blog/public/page/13/index.html","8cc750c7824f7fa0544f49da21c77317"],["D:/Blog/public/page/14/index.html","4c20250e80c072e3e778a437cf0166d1"],["D:/Blog/public/page/15/index.html","9b3699aed57903808556b42444926b3b"],["D:/Blog/public/page/16/index.html","5dc1ce446b8071e0e1f240d9d3d18789"],["D:/Blog/public/page/17/index.html","6b27ba0274838f221d538aff0cfacef4"],["D:/Blog/public/page/18/index.html","df1860ef63e4b8745843dff86f445eb4"],["D:/Blog/public/page/19/index.html","785c8e4a1d96cf6bfa6e395a14e0edb4"],["D:/Blog/public/page/2/index.html","4412113b29cfee0ccab8cf085b147cbe"],["D:/Blog/public/page/3/index.html","90eb52c9a30f39fd957967ef373fb01b"],["D:/Blog/public/page/4/index.html","3594f573510419d10b9f0a76bf1da221"],["D:/Blog/public/page/5/index.html","69ece2038e4992a44c768ea7128c8545"],["D:/Blog/public/page/6/index.html","6ed01107ec47624b1a68b27ff55f478c"],["D:/Blog/public/page/7/index.html","0822d2f1cb247567e99cc438c7dfb3f9"],["D:/Blog/public/page/8/index.html","ba431810165790f213a3380288b43129"],["D:/Blog/public/page/9/index.html","1cf77acdd8b78336ad4ffc1686e4c543"],["D:/Blog/public/proxy/index.html","54a1e7e983bbf0d9da1a2cebd244c70d"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","abf3385ba8e3c7f5729fcac1f9b7e8a0"],["D:/Blog/public/select-structure-programming/index.html","9447d3d8505828c389beed6ebc28107b"],["D:/Blog/public/sequential-programming/index.html","423cc778ecd2db4a3f70cf77102959b5"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","d5db4b93fe1a821753d50baae6328b41"],["D:/Blog/public/tags/C/index.html","63b7070332245d2fbcdc6b4e6b274566"],["D:/Blog/public/tags/C/page/2/index.html","6a30ffecfbc5cfff8e350120373efffc"],["D:/Blog/public/tags/Concurrency/index.html","c390bcd58be60ecd18e13f0805cb651b"],["D:/Blog/public/tags/DesignPatterns/index.html","30a5da279d3801fe12185810397977a1"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","31db1138806d1e280ddf1eb463b7e3e1"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","e6b0f33841bb43e838f3d8ecb368ec20"],["D:/Blog/public/tags/DistributedMicroservices/index.html","7a12765ab4f740d209fa77e98115f5c7"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","e9ea12fb947e38517e495d0416ca3913"],["D:/Blog/public/tags/Interview/index.html","4f529f41b7388559059ade4c4486ffaf"],["D:/Blog/public/tags/Interview/page/2/index.html","22c1207b5aaa0f2346cd8c5f7c18c6d5"],["D:/Blog/public/tags/JVM/index.html","e00609fab775ee1f0d88981e9390df9b"],["D:/Blog/public/tags/Operating-Systems/index.html","d370718da1555fa6eebce8ed2268b888"],["D:/Blog/public/tags/about/index.html","037221e578ceb79db0682804d7fc4d4d"],["D:/Blog/public/tags/ad/index.html","196f03d7de8d2a3b1f7a4a50d0e7577f"],["D:/Blog/public/tags/algorithm/index.html","be8b74982858b2041f1aa238a0fa1432"],["D:/Blog/public/tags/algorithm/page/2/index.html","f00197e1c2c389ac8cd835c302e7b3aa"],["D:/Blog/public/tags/computer/index.html","794bff4cbdb905b934ef5c5fa5e9122e"],["D:/Blog/public/tags/docker/index.html","38290b9a5c43a961ee2de3c255d73fb9"],["D:/Blog/public/tags/frame/index.html","22da4aa209dc03bea83089698980d7c9"],["D:/Blog/public/tags/front/index.html","ddad79452b322127a086b9b72d008daf"],["D:/Blog/public/tags/index.html","336686723211b37bf320aa95c69a2695"],["D:/Blog/public/tags/io/index.html","967eeb84add1d126e6f3763abb46bfc2"],["D:/Blog/public/tags/java/index.html","8a270480961e6beb9ea99bcb1d84fe43"],["D:/Blog/public/tags/linux/index.html","7c7693ddbe4676d96ddbb7366e5f52be"],["D:/Blog/public/tags/maintain/index.html","2dd2e2a236e7a6735936329269564973"],["D:/Blog/public/tags/math/index.html","9acc31779c6d4485a411ed0e44fd609f"],["D:/Blog/public/tags/math/page/2/index.html","a4f1f3abb57b8c0675475390616a0a1c"],["D:/Blog/public/tags/middleware/index.html","2d1e33f9c377f9605dd3f34128838871"],["D:/Blog/public/tags/network/index.html","ba8c5e57c777fd180e38e99b8e0f08ef"],["D:/Blog/public/tags/project/index.html","0a8d255c142a26fd0fe79de3221572ef"],["D:/Blog/public/tags/resume/index.html","59b80656479f6428e33a1321d7b24c23"],["D:/Blog/public/tags/security/index.html","57010f2790a1c1ed432c155cdbf1750c"],["D:/Blog/public/tags/sql/index.html","854c1eaa96a8c4eb8584645ba26fe871"],["D:/Blog/public/tags/test/index.html","88ff946f1202f31e0587d75653e6916d"],["D:/Blog/public/ubuntu-deb安装包/index.html","a2640c51e9a916d89a8b230ca9bea9b3"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","7df5781a1c5230d0873f61d21ea1ed49"],["D:/Blog/public/unix/index.html","080454e703b1e4fe99e5689732f9296f"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","36be34f11d80ccb3d6c0b51123802262"],["D:/Blog/public/web-test-combat/index.html","d01fea67f77898ea18b5dcaedd846afb"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","c388e1b0916333e258dcd1818499706b"],["D:/Blog/public/不定积分/index.html","f5e8f88ed1e376f6af5cfbfde64abf95"],["D:/Blog/public/中介者模式/index.html","fecc19397cf2df2f2fbb155a7fae4728"],["D:/Blog/public/中英文切换/index.html","158d4976635af6bda102e21db74912ef"],["D:/Blog/public/事务的隔离级别/index.html","e9659b1ab2a49627a92f1d958a9202b2"],["D:/Blog/public/二分查找算法/index.html","11054c0ffaa6ed342aec64c86d68385c"],["D:/Blog/public/二叉排序树/index.html","22c5d94a237d53ea64a17fb303e62aa8"],["D:/Blog/public/二重积分/index.html","39a02965c67e7a2666f64fe73e8fdf51"],["D:/Blog/public/享元模式/index.html","639def30d786cf31e2be14f3e9f726c4"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","4049d9c0f7681417e0bc701bd0d64066"],["D:/Blog/public/代理模式/index.html","d2684febf02451896bb7ba7d51988f0f"],["D:/Blog/public/依赖倒转原则/index.html","28b23929827936bb24efd1fa93319f1f"],["D:/Blog/public/偏导数/index.html","03465e95daf2bf736e1f0bac1f27a75d"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","e06b30c95e965f65ccd4fef09bd38f04"],["D:/Blog/public/函数作图/index.html","048c4711d63bd69d4a473b3e88acf7d9"],["D:/Blog/public/函数和指针/index.html","bfe81d79284ca2c684a80ead396b73b3"],["D:/Blog/public/函数的单调性和凸凹性/index.html","d1bdb8bb0d19300af72f67861ef3c84c"],["D:/Blog/public/分布式的微服务架构1/index.html","8e3e36a4ad7c201ef3709ad28e042230"],["D:/Blog/public/分布式的微服务架构2/index.html","18d80dd02025a059d6c511f97356a401"],["D:/Blog/public/分布式的微服务架构3/index.html","8a155bfa9669d000bc2a9e4b996a28f7"],["D:/Blog/public/分布式的微服务架构4/index.html","f6b1b350e034cb836d5412fa0689efeb"],["D:/Blog/public/分布式的微服务架构5/index.html","40cb893d17dc52fd4813927997641d7b"],["D:/Blog/public/分布式的微服务架构6/index.html","15b3c2ee096a14a48a76cad4646bf7fc"],["D:/Blog/public/分布式的微服务架构7/index.html","fb73ad7b6432ef290cf38ffb5680f239"],["D:/Blog/public/分布式的微服务架构8/index.html","098b3e127ef9d6008a6f9afc63afbaf3"],["D:/Blog/public/分布式的微服务架构9/index.html","a6648d3ccd03635c2eaa04894168c9b1"],["D:/Blog/public/前端安全/index.html","705db9aba3c3af1b71e233651129f4ed"],["D:/Blog/public/动态数组/index.html","60418dd5d3a19c0381486ec6e3bd2324"],["D:/Blog/public/动态规划/index.html","5535e7cf164899b6211ab2f6b015081b"],["D:/Blog/public/单一职责原则/index.html","2039a4995b59d34d908e41da6040bac0"],["D:/Blog/public/单例模式/index.html","7454aa00a62f71de97c5ffa5a01a4e49"],["D:/Blog/public/单点登录实现/index.html","5bbd228a17177947903be0235fdcfcd0"],["D:/Blog/public/原型/index.html","32e55d624daa18426011bd21ebd7737d"],["D:/Blog/public/合成复用原则/index.html","0e7caa28cee86a71aedb634b182b3051"],["D:/Blog/public/命令模式/index.html","c2d194f94a03b91aa18ce9a734d221a5"],["D:/Blog/public/哈希算法/index.html","8b3aad73cfc164ac495204358999221f"],["D:/Blog/public/回文数/index.html","8218b5fe4b649101e94d899d52e721c1"],["D:/Blog/public/图床/index.html","37d6993c3763d44605dbc3fc1eaec950"],["D:/Blog/public/堆外内存/index.html","27beab9e503f55f1ca40baf304df6288"],["D:/Blog/public/堆排序/index.html","b051e9585a0b482614d7175129f00644"],["D:/Blog/public/备忘录模式/index.html","1e205fbb62bdd162f81f5fecfd248558"],["D:/Blog/public/外观模式/index.html","8ac57b20264747b43a3f77ad866ec4c6"],["D:/Blog/public/多元函数/index.html","b7e5895be0147dd2ac0aedee3524f345"],["D:/Blog/public/多线程/index.html","71d76e04c946051cae0534ce43e02fa1"],["D:/Blog/public/定积分/index.html","8540644222045faa77175a94cee7cfd9"],["D:/Blog/public/导数/index.html","41b64508c138075d67557e3ceac1deb6"],["D:/Blog/public/工厂设计模式/index.html","c77ce1ea17a29ebad187be489c7dcb30"],["D:/Blog/public/并发：原理/index.html","d604e24b208a4f06708b551ca71e81fe"],["D:/Blog/public/广义积分/index.html","0d18fdd05f0788712e85cacc73bce316"],["D:/Blog/public/开闭原则/index.html","ddca4ae45a01eab3e992ab2df91ec5bd"],["D:/Blog/public/微分/index.html","dbdf9b57c31d7b21e480c533822794f2"],["D:/Blog/public/微分方程/index.html","8245e277f03ee13b005972089dd5c84e"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","05cf42ad9ef0c9f36a5ea23da0c0922c"],["D:/Blog/public/接口隔离原则/index.html","9d795427766a9107f6058c90d138fb9b"],["D:/Blog/public/插值查找算法/index.html","3ac28aab6b030dc78dcebcc919695554"],["D:/Blog/public/操作系统/index.html","6b65b2741a3e37bce9f76d847bc7dc96"],["D:/Blog/public/操作系统概论/index.html","ff1d53c24bc0271f1e9878642f4031ce"],["D:/Blog/public/数据结构与算法/index.html","1af1d3092a14aa10a720f2d27e731d99"],["D:/Blog/public/无穷小与无穷大/index.html","7a04e9709375163d7f984f97f612e92a"],["D:/Blog/public/极值和最值/index.html","805b6609d409babdbb9d1ea18a59bfc9"],["D:/Blog/public/极限/index.html","edf582dc41003719cef098334b9601d2"],["D:/Blog/public/栈Stack/index.html","541e75b37c6ae55085594f929cabe40f"],["D:/Blog/public/桥接模式/index.html","d5094e5ce8cec6fdbb83e269fb9eea30"],["D:/Blog/public/模板方法/index.html","32209c23992ba602166c09e7e572c1ea"],["D:/Blog/public/沙箱安全机制/index.html","6206fea7cf7361d21b03cf6403e39257"],["D:/Blog/public/洛必达法则/index.html","c7d8e904523363309b1b2da3bc291f5f"],["D:/Blog/public/浅谈IO/index.html","c89b390c9b8ec82fc9fdf546dd95d07a"],["D:/Blog/public/测试用例/index.html","8ab3477f24e24fb5e5b3c5d30260b0ce"],["D:/Blog/public/状态模式/index.html","930f13ff39b05dc1eb51a02b06fe0b78"],["D:/Blog/public/生成器/index.html","d055d7cae634ddc0a09f754ecd0a55b8"],["D:/Blog/public/策略模式/index.html","648a6a389ac1cc32b53404fcec50e060"],["D:/Blog/public/级数/index.html","9dbb3454e4ba876b6e7782e0fc6d3a7b"],["D:/Blog/public/线性查找算法/index.html","986198f06bf0622d814a0975db077dd9"],["D:/Blog/public/组合模式/index.html","d05b68e13ae6ef179838c221b4830829"],["D:/Blog/public/编码算法/index.html","7f3bf14d5817e75bff1ddc416588b5d7"],["D:/Blog/public/自动化测试/index.html","5b6f731a0f4fae38f9b5c0d51efcc5b5"],["D:/Blog/public/装饰器模式/index.html","b40fe4c766715e166e2a00cc70e655a8"],["D:/Blog/public/观察者模式/index.html","bf80ef77166c4084e095cc3ceac31644"],["D:/Blog/public/解释器模式/index.html","0e6a7e43cedfc9f34abcf15c94746fe9"],["D:/Blog/public/计算机组成原理/index.html","b034ae4f1c7c204485fc182425466930"],["D:/Blog/public/计算机网络-1/index.html","48db9dbed8a460e9dbd67867e3edd7d9"],["D:/Blog/public/计算机网络/index.html","fd7e760ad1c1b3053a148f68812329e3"],["D:/Blog/public/设计模式/index.html","db7fc0da9617370dc69ef9cfdc443bd0"],["D:/Blog/public/访问者模式/index.html","38aeb26d73024782fc9da5da366d2a81"],["D:/Blog/public/责任链模式/index.html","197d9ac7ceddd1e65633488d9472f270"],["D:/Blog/public/软件测试流程/index.html","dd0b34451729b575b8e796c103850e3e"],["D:/Blog/public/连续/index.html","d55a35ab12ddec23842d5cfd38220e85"],["D:/Blog/public/迪米特法则/index.html","780dbf52e897bdd6474179713844afa0"],["D:/Blog/public/迭代器模式/index.html","6d98c138e34eb042b0bb68ef3448749b"],["D:/Blog/public/适配器模式/index.html","fcc9d60cfdadf3a9426788b1b63e7152"],["D:/Blog/public/里氏替换原则/index.html","597abd2687258b78f88ce4a94f60122a"],["D:/Blog/public/链表/index.html","0dbee1462752367b3ee23fe848798f21"],["D:/Blog/public/队列/index.html","065d81dd840c7d7bbc5f67edca46c55a"],["D:/Blog/public/面向对象的特征/index.html","cb237c5767d66efd8a776707cc57dbb1"]];
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







