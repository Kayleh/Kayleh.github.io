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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","9f27f1c87cbad430121c8fa12d7ef7f6"],["D:/Blog/public/7种排序算法/index.html","9aad4bfd6a166baba5b249ebbb78d0c7"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","62b9a6d18b6128d6e78068975f08f9ef"],["D:/Blog/public/AIO模型/index.html","61f935ba5a135d665df100fd3d3c2eec"],["D:/Blog/public/Array/index.html","6cd4d7f6f48cc99d4999518a1ba3065b"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","b020a1e28445fa1170923f2e533ccebe"],["D:/Blog/public/BIO阻塞模型/index.html","1fd9163886b3379681296ff79d9a1902"],["D:/Blog/public/C-algorithm/index.html","8dee60861ecd7ddfa13e24c330969df5"],["D:/Blog/public/C-prime-plus/index.html","d222b57937ab598af9a2c335cbe32695"],["D:/Blog/public/C-programming/index.html","596ff356fb41c5475082da840ab7747c"],["D:/Blog/public/CAS-and-AQS/index.html","09bd400568c0a89a232bcf13e789b0a8"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","65c91e7d56f61066b8a26d363e0ae38a"],["D:/Blog/public/GC/index.html","95aa7158c66878b14bb9886a08d53c4c"],["D:/Blog/public/Good-use-of-pointers/index.html","0671feb725645ab5908c3e45289061db"],["D:/Blog/public/HTTP/index.html","7a449e47a95fadafcc1bf433a6a4cc4f"],["D:/Blog/public/Head-First-nginx/index.html","69100437538ba3eabe54ce2ebd9e225d"],["D:/Blog/public/I-O模型/index.html","99e9f80c20454ee16efc00922492a167"],["D:/Blog/public/IO/index.html","ab9dca2c31701f6066bbf95a5d0299f9"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","353eed4a91269ef9a157719a33c90087"],["D:/Blog/public/Interface-test/index.html","efd5e8ee3d9eb2994db2efe9ff9f111e"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","c565dd7b83e97d47f5eec9da4619ad24"],["D:/Blog/public/J2EE/index.html","821824b5cc161126777a9d70b6809ba4"],["D:/Blog/public/J2SE/index.html","b94f3af5e2b8b58b7ce956a23c64a804"],["D:/Blog/public/JDBC/index.html","b01e626588e4ac0a224f19225a7acb46"],["D:/Blog/public/JDK/index.html","2f766c8441280686b1f2a3390482813b"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","84f0b78d4417210759bb189cb7ce3278"],["D:/Blog/public/JVM/index.html","48985e8a5e4b050008a404a944ecc9d6"],["D:/Blog/public/JVM垃圾回收机制/index.html","ae6ee4274b514e5b29a479843afeb966"],["D:/Blog/public/Java-memory-model内存模型/index.html","4aed68b06e25a9dba49d1bf7f667712d"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","b6348cbbcb3c3e3093b3957e3e5ba208"],["D:/Blog/public/Java网络编程/index.html","c0f57d226a0b56aa8fe9202efb4789fa"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","027f1ddd2f14653436e5109d79161dcf"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","c1330ac5286b8a8a6011f697587e7718"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","002f30d0536e9ee713a6cf6169a5f26c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","3a50da17c71b922224830ddf435796e6"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","dbcf32c4d94bad475e030f6a19bf8b6f"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","bc907cf45c4b435e38e33160bf7ad204"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","14c0cfed60c73580c3eea37c724d7a3e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","2b30bf43e0c5eb9f8c24c5ac0a37358b"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","febefa58386d7a80726beecb6581b46f"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","afa7c375cb6170f4c95a3439a901026f"],["D:/Blog/public/Linux/index.html","9ee458731ae568b1d5ddd81d9f85d791"],["D:/Blog/public/Lock/index.html","649fe0200723040a11a7574d4abfcce3"],["D:/Blog/public/MVC/index.html","663a6f8a308a9c6d57c64d484433e549"],["D:/Blog/public/MYSQL/index.html","60d97d625d7bc53680492c855660e628"],["D:/Blog/public/Mybatis/index.html","5169443321dc11f4e4bc81f8bf78fff1"],["D:/Blog/public/NIO模型/index.html","230183f091ebc8293b26f879e2d1db8b"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","4024838907e162c1b1320f06482c9a8e"],["D:/Blog/public/Native方法/index.html","a967584a78fb4ac10ea6c290a5cbc174"],["D:/Blog/public/RESUME/index.html","b5018c22e9193b2d9d441a50db381364"],["D:/Blog/public/Redis/index.html","4b7bac6a394cf7eb14187c3eb02cbd1b"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","0abf985bc179276fcd1e58a194556b25"],["D:/Blog/public/Reflection/index.html","b5db4a6a23fac22c7b8dcb1ad9b5e6d8"],["D:/Blog/public/SQL注入式攻击/index.html","89f9ab1e139ebb05b055f46cf3bfe197"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","020527a27959ec6e6bf636f1dce2ef01"],["D:/Blog/public/Seata处理分布式事务/index.html","c147332c45fb645c2b0a676fed297010"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","9a2e95b4f56a5a1ac16b3f39200bd358"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","6c9f35dff561d2255d595cace4eb926d"],["D:/Blog/public/SparseArray稀疏数组/index.html","4f0fc834e0d1d2d509ad05d7d5f08160"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","cdf2f1305c0501b03beef442fc786b19"],["D:/Blog/public/Spring/index.html","748f056664ead549d238aef6f4e1a629"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","ba49c5b85057ccf2463017c4ce4f5fd2"],["D:/Blog/public/SpringMVC工作流程/index.html","eb78ce762ce2b07d78d2e523b79ce6cb"],["D:/Blog/public/SpringMVC环境搭建/index.html","0cb1276fcc388570a2012950e0970be0"],["D:/Blog/public/SpringSecurity/index.html","e958a0178e07b00b7f626359f7e949b0"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","4bb7472363fbf3646ed441e07f849409"],["D:/Blog/public/Spring架构/index.html","3cf47881610ca11ecabe9363d4c2be12"],["D:/Blog/public/Spring的作用域/index.html","34c509a08d1bf691d2d29e23c5058bfc"],["D:/Blog/public/TCP-IP/index.html","f1cbe82a32cdfbf06aaa7415df5136ce"],["D:/Blog/public/Thread-pool/index.html","da137a52e011c0236e0e0d9c06540659"],["D:/Blog/public/Thread/index.html","16feb41a57f2cdf13ce712b411765af1"],["D:/Blog/public/Unitest-framework/index.html","fe45b83f2b381e0eca3f94b3a5ada8b9"],["D:/Blog/public/XML/index.html","26984f0b9fb33147bef3eaefda666191"],["D:/Blog/public/XSS跨站脚本攻击/index.html","2e7d3ae0bac50843fb0df8c8eebd822c"],["D:/Blog/public/about/index.html","dd598d6d69770c5055396270619a7ff9"],["D:/Blog/public/app-test/index.html","ca5ce62fa6f16b429deda22b3f207822"],["D:/Blog/public/archives/2019/01/index.html","af0ef7214d9d39d3bd1de24b7ce7c766"],["D:/Blog/public/archives/2019/07/index.html","8ec579ea464881ae75689936acd583f1"],["D:/Blog/public/archives/2019/12/index.html","506948ca2cc8047c67a67c7bd02c331b"],["D:/Blog/public/archives/2019/index.html","33c8e5708ffdd6e1d6dde29a8bf9ef1e"],["D:/Blog/public/archives/2020/04/index.html","4b3292623545c23dec02ec394f0ef826"],["D:/Blog/public/archives/2020/05/index.html","479efd76e91a51f9002c9ac4d78a80d2"],["D:/Blog/public/archives/2020/06/index.html","6662e649b4efd9a97e49021fb3b3a6a8"],["D:/Blog/public/archives/2020/07/index.html","1303d02aad488a2c163e54168a0606f8"],["D:/Blog/public/archives/2020/08/index.html","79b35c651ecd507560a26e2b43e933a8"],["D:/Blog/public/archives/2020/09/index.html","d6e6629500a77cd8fad9ce2bbb19fce5"],["D:/Blog/public/archives/2020/10/index.html","dd464625f8a7d52084f897e6801858b3"],["D:/Blog/public/archives/2020/11/index.html","02338748d4b848f50eb3b456709bd07e"],["D:/Blog/public/archives/2020/12/index.html","c316beb6ec92e577b0ef323f98868303"],["D:/Blog/public/archives/2020/index.html","2bcc4a56a2986bf1ded427e5fa02403c"],["D:/Blog/public/archives/2021/01/index.html","9f4f060d2ced406ccdbeae337f0ce0b1"],["D:/Blog/public/archives/2021/02/index.html","8f35f56ef2cf8b2b2294d70093ee2d3e"],["D:/Blog/public/archives/2021/03/index.html","0d39457f26b31e6ee002ca5dde687133"],["D:/Blog/public/archives/2021/04/index.html","4ade736203b0929f760ac2aa84088d4d"],["D:/Blog/public/archives/2021/05/index.html","7475de320393019b6300ae7e07c4206b"],["D:/Blog/public/archives/2021/06/index.html","c6704162006994e3a30b2c692ba36737"],["D:/Blog/public/archives/2021/index.html","d16c3954c180842059284bc118f12282"],["D:/Blog/public/archives/index.html","87ee13590aad3da88bf1f09c7cac5620"],["D:/Blog/public/categories/C/index.html","b1b00b693b1048bd055419fc4ef7e115"],["D:/Blog/public/categories/SpringMVC/index.html","cb14f4008c6c6c133cf4374c239429eb"],["D:/Blog/public/categories/categories.html","3de30c4a460170c5235eafa18ff2bf35"],["D:/Blog/public/categories/linux/index.html","2de4091625c8daa62abcab26330cd342"],["D:/Blog/public/categories/分布式/index.html","86a21b1ab6b805b1483d81714f5ddc40"],["D:/Blog/public/categories/分布式/page/2/index.html","99a99bf97c50117a948dc356e5f0a017"],["D:/Blog/public/categories/设计模式/index.html","3184a0b6a1ae6c0045768e164286a146"],["D:/Blog/public/categories/设计模式/page/2/index.html","6c6fb37cc3ff7d66b7cffc910ab036fb"],["D:/Blog/public/categories/高数/index.html","1208a3db280ce4f31b60ec64f77c95f5"],["D:/Blog/public/contract/index.html","f4da48cc685507b948e93b8c2c15d7f3"],["D:/Blog/public/css/first.css","c3825aa2f102af4e9913a89a1b96b3ee"],["D:/Blog/public/css/style.css","d8762f7afe44b162e98881b8bc685568"],["D:/Blog/public/cycle-structure-programming/index.html","00abe4c26bff2f87f8626000cdb2c9c4"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","cc60f6f1f1d7e3e878798cee081a3bf1"],["D:/Blog/public/google8102e2f35ce9e391.html","f416277b6d439604f562891bd63dd2ae"],["D:/Blog/public/gulp压缩静态资源/index.html","daa835d47cb9e1e130a5cf40f8c363a5"],["D:/Blog/public/head-first-hashmap/index.html","f149a4e2e132536f2982cba06f52b934"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","97a0717629f64434a34c1db9aa9134ab"],["D:/Blog/public/improve-robustness-(1)/index.html","fa720b512634cdc997ff561a490d8e47"],["D:/Blog/public/improve-robustness-(2)/index.html","0c3eb34bc58545312e59c637c5780fae"],["D:/Blog/public/index.html","9640fd2b629ea815b09f1b5ad7af7dea"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/katalon/index.html","3cdda3e4c37c2b763de589cc727a3c99"],["D:/Blog/public/link/index.html","d48931929358d71ac6d3ffa049402a30"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","3835805154ed7edafd4548c28c597ff9"],["D:/Blog/public/live2d-widget/demo/login.html","592f2b67becc9054dbd42a9e2af97d1d"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","39c2e5268a65fb80907222e338aa33bc"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/mybatis-缓存/index.html","3362428b9de5a840866eb6ada6bdb2a6"],["D:/Blog/public/note/index.html","18186f319ebc3adba6e2266b1e2a8d5c"],["D:/Blog/public/page/10/index.html","dfd2c1b1945c67bc10b44224f2a0c84f"],["D:/Blog/public/page/11/index.html","e1758c3ca79d0e434f18e96b269f1476"],["D:/Blog/public/page/12/index.html","da9341f19cd15d85d676b5b2c23832ef"],["D:/Blog/public/page/13/index.html","c7f44b35b8a9f4440287b293385a0400"],["D:/Blog/public/page/14/index.html","8c3555a9509823761f7ab09ec7a8fd75"],["D:/Blog/public/page/15/index.html","b65f3e40e11fd258b1906351949c2642"],["D:/Blog/public/page/16/index.html","91901cdaae952eb5ccbee899188bcea7"],["D:/Blog/public/page/17/index.html","258ceff0343c654a547843aaae92869c"],["D:/Blog/public/page/18/index.html","d0b2cb3b6db8b435720bb2e377ca3283"],["D:/Blog/public/page/19/index.html","5b12c945645f0f1f881a608302e88b44"],["D:/Blog/public/page/2/index.html","e3eb484b76d2e687163c1ff69ecb2579"],["D:/Blog/public/page/3/index.html","6d19845c1aa8dce0268fd083e096edb1"],["D:/Blog/public/page/4/index.html","be3f3809d3d300fa9fbf55d022c58b51"],["D:/Blog/public/page/5/index.html","19c012b3566928dfdc01575fb8a020f8"],["D:/Blog/public/page/6/index.html","c92213f9d277ac9bd037cb81292c0eaf"],["D:/Blog/public/page/7/index.html","8bba6e4c73b25e6be5054dfc35350573"],["D:/Blog/public/page/8/index.html","d80c9f95b37828196c76ddcf30f021ec"],["D:/Blog/public/page/9/index.html","60e2a69d2c52489f82c4626b961a227e"],["D:/Blog/public/proxy/index.html","9ee19fce6d0a6c6eb70ed79e4903cca1"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f243c06de98cadfaf68d6443a500e0f5"],["D:/Blog/public/select-structure-programming/index.html","18709dab5e2d1d350c3dc7a6b37934cf"],["D:/Blog/public/sequential-programming/index.html","c6039ed53503e5c9de73868f6c5dcf4d"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","77062992e441274fb85eaa0dc64f768a"],["D:/Blog/public/tags/C/index.html","c49b3c2d91555d99fe1661e1d6c3c6c6"],["D:/Blog/public/tags/C/page/2/index.html","d2af792520ab8abfe85bf2af8b822917"],["D:/Blog/public/tags/Concurrency/index.html","1aa86956aade25dafa28bfb1601d181e"],["D:/Blog/public/tags/DesignPatterns/index.html","9c31617635608ac7973057c863ad1dd5"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","8e9f034af31d8f6ea2e34dbe628f6b21"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","c19d53f4f3fc15f5c9f59f1a9e710706"],["D:/Blog/public/tags/DistributedMicroservices/index.html","141728184b2e001e6ae7e9c1382c84ef"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","88efabca3ef4ca624b85e5cd9d6a7d2c"],["D:/Blog/public/tags/Interview/index.html","bb0416915ee89533b1a427d23d7ae6f5"],["D:/Blog/public/tags/Interview/page/2/index.html","20b66c08bfe354fde71846fb67f432e2"],["D:/Blog/public/tags/JVM/index.html","dbc2d0ef51b1370687c8cfd757e71944"],["D:/Blog/public/tags/Operating-Systems/index.html","1908a09db24e74d5387b6f93b4899c8d"],["D:/Blog/public/tags/about/index.html","aa15cf773615959694cd3d58dccf1c44"],["D:/Blog/public/tags/ad/index.html","6d8aca463b1b824b8f87466bb5ae7c51"],["D:/Blog/public/tags/algorithm/index.html","e12f24584a0b060b9dbc5f8876927383"],["D:/Blog/public/tags/algorithm/page/2/index.html","27e2bdccd9515e050af883563e758828"],["D:/Blog/public/tags/computer/index.html","5822e95b269eea652bb0cb3f6dd1f079"],["D:/Blog/public/tags/docker/index.html","2863f7c856b3d84ecc0cd653afe64a09"],["D:/Blog/public/tags/frame/index.html","9d69ad9ae4b37a7f1faec7a70128b05e"],["D:/Blog/public/tags/front/index.html","a35b02eb4f8b6381accf41ebc151e569"],["D:/Blog/public/tags/index.html","5eaf89f9bbab16b9f0d30a696f549cf5"],["D:/Blog/public/tags/io/index.html","fbd3206a03c8115cd4c679dc90e0bc26"],["D:/Blog/public/tags/java/index.html","4a6e916106ed6bada786c86e8edd7e21"],["D:/Blog/public/tags/linux/index.html","cf6a17dc8ac3010ffe017f1ec2bb41ff"],["D:/Blog/public/tags/maintain/index.html","6edb9b75bf8b7ffe1398da756fa5a910"],["D:/Blog/public/tags/math/index.html","afea5af8ec75b252d74f7ffdd628440f"],["D:/Blog/public/tags/math/page/2/index.html","5bc3ba247866f296a80e1329a5070e85"],["D:/Blog/public/tags/middleware/index.html","b02fb4e86cd1086f755d20df5e58fa55"],["D:/Blog/public/tags/network/index.html","55f91dee2f695e129d6860a8929a39bd"],["D:/Blog/public/tags/project/index.html","2c2b34b947ec97ed5dee783fedd9dde8"],["D:/Blog/public/tags/resume/index.html","694fa84573b1c03fa1fdb349dd400225"],["D:/Blog/public/tags/security/index.html","289f5f865217735323c227e17ffe43ec"],["D:/Blog/public/tags/sql/index.html","d22cede2baa69859e74459b3e380a809"],["D:/Blog/public/tags/test/index.html","ca2082ef1659304a0640932135704cfe"],["D:/Blog/public/ubuntu-deb安装包/index.html","ce0d3819c2f33560d462f6671fea6484"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","7990bc3089e4c34550db5cdce31b86ae"],["D:/Blog/public/unix/index.html","e372a313c11165318ad44dec9d5fb5eb"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","51eb92d085ddbed2c161a073ed80437a"],["D:/Blog/public/web-test-combat/index.html","3a5c01a2f54dce156fda560c9eade10e"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","d8cdc22021dbf8fb083e8016691beb80"],["D:/Blog/public/不定积分/index.html","0be336e847c4bcf8758880b84a216427"],["D:/Blog/public/中介者模式/index.html","079df6e849e64f28dc25edebd4521f6f"],["D:/Blog/public/中英文切换/index.html","5479d7821c614b019cd2c30f41e1373c"],["D:/Blog/public/事务的隔离级别/index.html","6636e885e1a955358b1cb3107ab58de6"],["D:/Blog/public/二分查找算法/index.html","6d13ec5d60ea60fe432155e926f2819b"],["D:/Blog/public/二叉排序树/index.html","d7e106d7f2a985059c81e30fe3bc3e59"],["D:/Blog/public/二重积分/index.html","513a8d311c51d8ee697aa5bcf6399ef6"],["D:/Blog/public/享元模式/index.html","d0e5e8ef02b20bf506c506a1b9d80a25"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","9af42bec388b1e01a9bd7f43a9d5d86e"],["D:/Blog/public/代理模式/index.html","e5034617c748715979d62b2ece7edaac"],["D:/Blog/public/依赖倒转原则/index.html","09819f8f11e4c28a09f34d097b0676ce"],["D:/Blog/public/偏导数/index.html","c8ce510f6ace516f57c98c7480653df2"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","6e7700488175991584e3eea7c90a9690"],["D:/Blog/public/函数作图/index.html","ed5f22d235ed1763ed0b433a83305d92"],["D:/Blog/public/函数和指针/index.html","9c42d2f07633e58c487b64142c3dc56c"],["D:/Blog/public/函数的单调性和凸凹性/index.html","0578b59a52e89cabaa253973f0bf2c77"],["D:/Blog/public/分布式的微服务架构1/index.html","49aae00e42b30b0b0bdc96e13a6b6ca4"],["D:/Blog/public/分布式的微服务架构2/index.html","649288b6ad98308a7a435976307790a9"],["D:/Blog/public/分布式的微服务架构3/index.html","1c3001064a4c7673186fd908322a57b5"],["D:/Blog/public/分布式的微服务架构4/index.html","fdbe142bc1fe42be45b72c25a029027b"],["D:/Blog/public/分布式的微服务架构5/index.html","9fe74f767b27b84f0ff8662aeccd1d52"],["D:/Blog/public/分布式的微服务架构6/index.html","4978094236e1d6f72e891775e7fb1b18"],["D:/Blog/public/分布式的微服务架构7/index.html","20a9508804fd296d47a234991401ddf1"],["D:/Blog/public/分布式的微服务架构8/index.html","2f8ae5a178b0de321f85633a2a6e03e5"],["D:/Blog/public/分布式的微服务架构9/index.html","708f3798ac90a511f73b2224ffc06562"],["D:/Blog/public/前端安全/index.html","c02cb0979776c028d28a9515ba9e3034"],["D:/Blog/public/动态数组/index.html","8df355a03a4afe8a5020f6a4ccb8ca2e"],["D:/Blog/public/动态规划/index.html","b7ce7abd5ac49b6acdd6b01686ed1651"],["D:/Blog/public/单一职责原则/index.html","6a7a93f8d7d90e5f668016144d70750c"],["D:/Blog/public/单例模式/index.html","4ec1ffe9c897b345b7765376eee338e0"],["D:/Blog/public/单点登录实现/index.html","30d8fe6ec235d339e10c65ebe09fb36c"],["D:/Blog/public/原型/index.html","70a40362ef85e3d7ccc4d6a3cb63941b"],["D:/Blog/public/合成复用原则/index.html","a4389de7284f535e3fa1e9a1a11cb99c"],["D:/Blog/public/命令模式/index.html","985be3b38303844c478a882e95f61ae3"],["D:/Blog/public/哈希算法/index.html","91674e52b522a84be33664345eb652fb"],["D:/Blog/public/回文数/index.html","faf0649359fb2fbd2e63074af41280a3"],["D:/Blog/public/图床/index.html","b64e4c77f6e7063ec124dfab815cc540"],["D:/Blog/public/堆外内存/index.html","d99c6af7208bcf9d77508fd8bdae394a"],["D:/Blog/public/堆排序/index.html","66ece70a93d2f9c8360316fd733dc0e1"],["D:/Blog/public/备忘录模式/index.html","11dac2409d27d5a1a309346b43584453"],["D:/Blog/public/外观模式/index.html","347ff732c11afaa11b80501fe6744466"],["D:/Blog/public/多元函数/index.html","868aee38a31907f85aa59f0aa9f272fd"],["D:/Blog/public/多线程/index.html","64b4a75d74537e0b4edf683225a35dd4"],["D:/Blog/public/定积分/index.html","4f7ae2be945322c8a9f834a575e45f7d"],["D:/Blog/public/导数/index.html","dc2184af5feb29c3e4add52ef93cbd0c"],["D:/Blog/public/工厂设计模式/index.html","bf71a199d17d8d4751ad6427394a4caa"],["D:/Blog/public/并发：原理/index.html","f7ec60b33c744148d6c855adbfc1a053"],["D:/Blog/public/广义积分/index.html","f562faf67a73b899999e2146a49c0a7c"],["D:/Blog/public/开闭原则/index.html","d02618daef4ca390aea63025675062e9"],["D:/Blog/public/微分/index.html","203b478229ee36d3271065d482a3231a"],["D:/Blog/public/微分方程/index.html","3733b8666f53e997518e372646625f78"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","b162a01b71838d7f8299e588fb52b579"],["D:/Blog/public/接口隔离原则/index.html","5839f495678af49cfaf0febe2f086cf0"],["D:/Blog/public/插值查找算法/index.html","dfb0bb6bcb8e69e592eceb2c6771ade0"],["D:/Blog/public/操作系统/index.html","69370f0a28c95e95ff155c1b0a1ce54e"],["D:/Blog/public/操作系统概论/index.html","fa6b5fe8f775f8dac9c36c7a2aaba8e8"],["D:/Blog/public/数据结构与算法/index.html","c84dd7b193af260eebae2ad4ef4eb38b"],["D:/Blog/public/无穷小与无穷大/index.html","a86c91da4d06ef2ae9289bc98a77eaff"],["D:/Blog/public/极值和最值/index.html","c797d6d906932ea0db1e1adeefb31d67"],["D:/Blog/public/极限/index.html","27a7042b0fce79957be6e7ec704d0d5e"],["D:/Blog/public/栈Stack/index.html","44ad5e780ccd96da5583cdf1d8bc2119"],["D:/Blog/public/桥接模式/index.html","f48951fb84b684f1b023c97417fbd744"],["D:/Blog/public/模板方法/index.html","3a82bb941dbe93ff6368c94d228ee183"],["D:/Blog/public/沙箱安全机制/index.html","14744322afba493c40556e8b1ecd0072"],["D:/Blog/public/洛必达法则/index.html","af35a781b5d1e83ba70937ef2ec64a85"],["D:/Blog/public/浅谈IO/index.html","4ede529d4e1cfc5ca2ef17fb53277e29"],["D:/Blog/public/测试用例/index.html","483d9875b0e959a8b2fddb625135bceb"],["D:/Blog/public/状态模式/index.html","83378d18c9c6051093e7016740a455a2"],["D:/Blog/public/生成器/index.html","e600c5f56b20ca1e18d59b2f105adebd"],["D:/Blog/public/策略模式/index.html","a6ae679c8f5267e9fec5e2d2aa714b46"],["D:/Blog/public/级数/index.html","0be47a61d890cb10e9bf5ef5d9e33d18"],["D:/Blog/public/线性查找算法/index.html","83358c645983c54dfdb6e50158f33b62"],["D:/Blog/public/组合模式/index.html","aabeefdd07bcec77a4ff0a6211a45e72"],["D:/Blog/public/编码算法/index.html","005132017d077d560e1856a9102e5397"],["D:/Blog/public/自动化测试/index.html","a570fee51be4cb048ce8676bf032bb78"],["D:/Blog/public/装饰器模式/index.html","49ec7e62ddadfbf1e8e4d90e125199b2"],["D:/Blog/public/观察者模式/index.html","57646956adba402e2f8d03a6d5a5e6c9"],["D:/Blog/public/解释器模式/index.html","8b7b23e5cf98c8ddb52b4485c20499f3"],["D:/Blog/public/计算机组成原理/index.html","6fff328fb14c26f8792c5d2bbd0d4559"],["D:/Blog/public/计算机网络-1/index.html","ab66fcb65f7e72a5e2c1ac9c18ebe583"],["D:/Blog/public/计算机网络/index.html","ac7b75c5aa0ab5d54d0f9b59dbd28076"],["D:/Blog/public/设计模式/index.html","ec852e1645762c4b32131285f233a7f8"],["D:/Blog/public/访问者模式/index.html","12e0ea48ddb96a52315324cf273a462a"],["D:/Blog/public/责任链模式/index.html","33439fe9855f0b4d0469fe9e89e113d6"],["D:/Blog/public/软件测试流程/index.html","b6c618e47160b84b742efa1cd98f7a7c"],["D:/Blog/public/连续/index.html","52905526d74089d777d2608813547a10"],["D:/Blog/public/迪米特法则/index.html","f63fb83423ed6a1d0a2118f6236c9295"],["D:/Blog/public/迭代器模式/index.html","d1fe9a61b3d0a014ef2e23a14bdedc63"],["D:/Blog/public/适配器模式/index.html","42018d2710a56de12290d558d391a1b3"],["D:/Blog/public/里氏替换原则/index.html","a235ce2437e21cee4aa374666b667d96"],["D:/Blog/public/链表/index.html","ff41615676d8b9dc5b6e5a1856c3f10f"],["D:/Blog/public/队列/index.html","45131dcfcd9ace3ad6bfbb42567de517"],["D:/Blog/public/面向对象的特征/index.html","c27ec47aa0f5c2f1f283c4f3275134ba"]];
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







