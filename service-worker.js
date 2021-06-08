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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","803c793d8df7e53b9696e6ac1c6f688c"],["D:/Blog/public/404.html","ddc36be7596c4e558d3f4f0950fc502f"],["D:/Blog/public/7种排序算法/index.html","1caa03987791fcb2237df9425d061450"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","0288c3faac952b8a440f723bed54b317"],["D:/Blog/public/AIO模型/index.html","8d5bb75cb6efc3533c9cfbafcc734c00"],["D:/Blog/public/Array/index.html","cf11aef987c799e13723b17c6510daaf"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","8732c98e2ea7d72ea266a75dcb5ca3a6"],["D:/Blog/public/BIO阻塞模型/index.html","9d834385fd3970e97b99c2f3461bebca"],["D:/Blog/public/C-algorithm/index.html","0bac5eb22997bdae8040bbc1bbdfd3c6"],["D:/Blog/public/C-prime-plus/index.html","e8cb1a0dc29b15503141804e3aa5d100"],["D:/Blog/public/C-programming/index.html","4533d3c48ca2d40ad7b249908c8f3287"],["D:/Blog/public/CAS-and-AQS/index.html","8761422544c24c4a4be7f3bb5b0a3116"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","c0b0fdfbc45607e412a1fb96537730c7"],["D:/Blog/public/GC/index.html","154b316bada24cf15fea5f80ebc62fbe"],["D:/Blog/public/Good-use-of-pointers/index.html","697ab444aa6e67d5ba7920db293384e7"],["D:/Blog/public/HTTP/index.html","a56bb746a3386c1b4f0188633f180314"],["D:/Blog/public/Head-First-nginx/index.html","95e509f748dadcbe838f747425497c2f"],["D:/Blog/public/I-O模型/index.html","ca558cd4222eff79b8f4bb65a6b456ee"],["D:/Blog/public/IO/index.html","7f94071570e46826de08453ce9517eaa"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","269b7ce44ccf9cdd12f67b817856dc5d"],["D:/Blog/public/Interface-test/index.html","658b9bfa89261bd4359decfbb8fc1dec"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","faa01370b3602da5bc62b73c0f36635a"],["D:/Blog/public/J2EE/index.html","e6264a2f00b101e669a7522a1c44afd6"],["D:/Blog/public/J2SE/index.html","5931846d289532fe9a3e2e8494b6ce6e"],["D:/Blog/public/JDBC/index.html","5b9c0c50938da68c4443bc07872eb78f"],["D:/Blog/public/JDK/index.html","970a77f9e4b7a958c434bb7a56e09897"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","62642002cf4519836b2e6cc7da2c3e0b"],["D:/Blog/public/JVM/index.html","eb5aa85ab86b410d676b48ad112733fd"],["D:/Blog/public/JVM垃圾回收机制/index.html","6c61fc577ba4eef68b43bb9a92da4625"],["D:/Blog/public/Java-memory-model内存模型/index.html","00db8e8a32f65247a267b27cb3e3e3bd"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","2f476759f68388403910b4f80ec3edbf"],["D:/Blog/public/Java网络编程/index.html","5b37a6b3bcea24665690b7b9093a3d60"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","89cbed6bacedd90d0a83e18ac4a9ba9c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","3c034ef7d9c6258ec7897652b03e228f"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","58ec05d7b8c8bc5f84e7311494bd4e89"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","e3e0434e40809b747258621ddb895720"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","dcc31765c741bf6afb0c7e6e54763416"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","8ebb271a0815a321bf8b007535c73a65"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","2e362aa9512c4121eadf0cd22ccce2cd"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","4cf0a7b8475b4b3bed7303b0b2c21539"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","aecc6d7d4efe4aca34a6c3afb078a6cf"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","243048b5fa617ca819f1e18a52bba15c"],["D:/Blog/public/Linux/index.html","1a3e954d47f34af36ed29f457f6b0ddf"],["D:/Blog/public/Lock/index.html","bece8ddbb6799e8887be4abd1ce9d210"],["D:/Blog/public/MVC/index.html","3c737b9a484bc23fb70c0271eddf4073"],["D:/Blog/public/MYSQL/index.html","b5e3a02a06dee39eb8f0f57e730d25ae"],["D:/Blog/public/Mybatis/index.html","937e0b8d2d02fa1a900ff1c4bf356833"],["D:/Blog/public/NIO模型/index.html","bd9cc5ec9f74eaa392c6d14e998eae93"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","fc15a9ee5fdcbf051a4de622d5c016c3"],["D:/Blog/public/Native方法/index.html","54904ea42376071cfa007c1f08722e70"],["D:/Blog/public/RESUME/index.html","290c2b667e95515e5e8eb4c792a4d95d"],["D:/Blog/public/Redis/index.html","31ce1608623fccab81db98c11cba3f4e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","cca6eafa76d7e2d2755ba7021d8c641b"],["D:/Blog/public/Reflection/index.html","0ef366b9b72cf82950d00d09cd1e1e13"],["D:/Blog/public/SQL注入式攻击/index.html","e382631cf7cab8963ac1180a00cedda6"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","21759a4136164e1f2ec6f92e255f4cb9"],["D:/Blog/public/Seata处理分布式事务/index.html","ea40359ce1924156b99683daaf5a096f"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","771800e1663fcd2b28b6c42005e269ca"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","12b8522b8cffd7b31784ad73b6aaa06d"],["D:/Blog/public/SparseArray稀疏数组/index.html","7ac808fb47fa55471ee47b4d331929e8"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","029318d0751e45228637555c2d59290c"],["D:/Blog/public/Spring/index.html","79e9d55407719d81d53bfddbb328b81c"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","3c6f6fefe6f6b5ff225ad6af7924983e"],["D:/Blog/public/SpringMVC工作流程/index.html","f505ee78a455015b9d0b6f8b5302be0f"],["D:/Blog/public/SpringMVC环境搭建/index.html","eb6a477e26b80c7c5bcfb1e6593fa8da"],["D:/Blog/public/SpringSecurity/index.html","76001ef3b491562b8ac81dcbc6bbe3c1"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","9dea719711617e411668c7a2e5ff6991"],["D:/Blog/public/Spring架构/index.html","acb478b50eb6977b92c5694677ef3e26"],["D:/Blog/public/Spring的作用域/index.html","1193db86f86f372c30406421eb0eac41"],["D:/Blog/public/TCP-IP/index.html","732d0a93dacb5a008e6cf21f07032b49"],["D:/Blog/public/Thread-pool/index.html","8417f34926c5caaa477849ea826a4f1e"],["D:/Blog/public/Thread/index.html","271b46811be86160d45790f1550358f5"],["D:/Blog/public/Unitest-framework/index.html","1dbf1bc86bdf8438bac277e3b3eae1b8"],["D:/Blog/public/XML/index.html","d0b69bb712c2d7d4a113da925508eafb"],["D:/Blog/public/XSS跨站脚本攻击/index.html","9e281ff513918c7cfb7042bfbe486299"],["D:/Blog/public/about/index.html","d9c3a236388c2952dd251c8fa3bd5024"],["D:/Blog/public/app-test/index.html","39e1728d4fa6d879514d6613caf501af"],["D:/Blog/public/archives/2019/01/index.html","372be00ed6c8c273beefe9918e40544c"],["D:/Blog/public/archives/2019/07/index.html","214a6ec04830e6812d650cf3f6703ba7"],["D:/Blog/public/archives/2019/12/index.html","f0bec89a950bbb20ee6fb5626910549f"],["D:/Blog/public/archives/2019/index.html","878214b6b4e37c6af60fc5f703a947ad"],["D:/Blog/public/archives/2020/04/index.html","d04f1b1a80191c53f1701fcf6431609e"],["D:/Blog/public/archives/2020/05/index.html","3df76065c1acd35f44adf041ee3dd576"],["D:/Blog/public/archives/2020/06/index.html","790d500139023fd23ef3994650ea6f62"],["D:/Blog/public/archives/2020/07/index.html","79a50113ada1f5eb94f4b61183296b58"],["D:/Blog/public/archives/2020/08/index.html","fe2ec1644eff2163badbbf6d20191192"],["D:/Blog/public/archives/2020/09/index.html","3c46dac27481c7e1e28cbb0a98c8608e"],["D:/Blog/public/archives/2020/10/index.html","a0c31899472058cc71edd8627ff57cdd"],["D:/Blog/public/archives/2020/11/index.html","0f1b6fda027f74852e20338b66bce4b7"],["D:/Blog/public/archives/2020/12/index.html","d8d3d3b8069e60ab0291407be1e59036"],["D:/Blog/public/archives/2020/index.html","f66a60051c23de1cab0c234457772b69"],["D:/Blog/public/archives/2021/01/index.html","3cacc527ba59f2707e1ae463bd905725"],["D:/Blog/public/archives/2021/02/index.html","37554ca02ced15685b81b57a1c714f30"],["D:/Blog/public/archives/2021/03/index.html","674a5d140877c4347b6f2cbcb12059af"],["D:/Blog/public/archives/2021/04/index.html","a88c78be7f323175305b12b84bcaadee"],["D:/Blog/public/archives/2021/05/index.html","4192335de2d627552cdcb40363ef9552"],["D:/Blog/public/archives/2021/06/index.html","9d6853fc81c78718741ebcef15caa1ce"],["D:/Blog/public/archives/2021/index.html","c9efa100c9af575ea4e8db5765fc3805"],["D:/Blog/public/archives/index.html","676894d116261a3e707e9e71ae61d8dd"],["D:/Blog/public/categories/C/index.html","6cfcb384dd606145d49d23cff5354671"],["D:/Blog/public/categories/SpringMVC/index.html","e7d0b43ddb883c66a425b0ed4a5dc5e9"],["D:/Blog/public/categories/categories.html","ebdf12e033e7ec620f9cd0d4595c938d"],["D:/Blog/public/categories/linux/index.html","3818d049357548b3f826946807dcec63"],["D:/Blog/public/categories/分布式/index.html","00251c8ab5b5f090b7d4e7476b7e4ea0"],["D:/Blog/public/categories/分布式/page/2/index.html","cea8680585cc3bff6fdd3a5299135213"],["D:/Blog/public/categories/设计模式/index.html","f3c84e08f09461f359dbebca4a50ea85"],["D:/Blog/public/categories/设计模式/page/2/index.html","db8f37bea956282473c19677e1a2ead9"],["D:/Blog/public/categories/高数/index.html","d58999283464f949f618e459e5b69902"],["D:/Blog/public/contract/index.html","8f5853477d7c8e247159f5d34ad11b87"],["D:/Blog/public/css/index.css","877355382d3a32fdae53c0f1acab4c04"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/var.css","572a27a635c7c3603572ba06a75d0724"],["D:/Blog/public/cycle-structure-programming/index.html","ae91a15420e924c42189851516890433"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","4f89583b8786586486c914186ea28318"],["D:/Blog/public/google8102e2f35ce9e391.html","e40dc1d043f23b0473658b0016823a0d"],["D:/Blog/public/gulp压缩静态资源/index.html","8e409efdb1260df74c0da62788472326"],["D:/Blog/public/head-first-hashmap/index.html","7c7f395db39d4b9c491fa825f9e15484"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","0984b91ae4e4250d957a6c6b7cd5c905"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/improve-robustness-(1)/index.html","d3e487e84076f82aafb6efd558e0e9a2"],["D:/Blog/public/improve-robustness-(2)/index.html","f0df4e17914c3adc7a7ea0f6efad331e"],["D:/Blog/public/index.html","6993714d4d3c3fcb06efc8b3463ce01e"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/katalon/index.html","388c8830a359b2d0d5cdfbfbe06a980f"],["D:/Blog/public/link/index.html","941c63ec50f5a098fb6809d06c4aa79b"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","08feb4b9aaae29e29dfc7607e08dddd6"],["D:/Blog/public/live2d-widget/demo/login.html","5ba2e109b92d08f3266006d8f35958e7"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","6ec0590da09d41722aadd980830fb3f1"],["D:/Blog/public/mybatis-缓存/index.html","73832ef709ed5b07cb1dfb80a62262ac"],["D:/Blog/public/note/index.html","60afc3d1fe6e146919a4b9d61290c302"],["D:/Blog/public/page/10/index.html","e124b27ba1268ec76b382b171e781edf"],["D:/Blog/public/page/11/index.html","1d75593a294e1094871573d0b1788e6a"],["D:/Blog/public/page/12/index.html","a7ce655a7fa232d2f4f85da01849d04c"],["D:/Blog/public/page/13/index.html","b74fea276fddf02726d6f1aabe4b44c7"],["D:/Blog/public/page/14/index.html","4bf89a91ad25ae746764dcd202f0123e"],["D:/Blog/public/page/15/index.html","454b242f0b3125d31f97bdd3def0dd92"],["D:/Blog/public/page/16/index.html","dbd8b317d79af47c15497721a3162130"],["D:/Blog/public/page/17/index.html","397003c5b573a20779d13c52346a6a79"],["D:/Blog/public/page/18/index.html","4ffc5d885deda0e7fa67fbf2e7cd57dc"],["D:/Blog/public/page/19/index.html","e93fa4ab4d818030b3ff663a35d3913d"],["D:/Blog/public/page/2/index.html","3a3d32e6085dc2b0483cc9646d5f5758"],["D:/Blog/public/page/3/index.html","1ccea60352d0c0ed5feb53108951fc3e"],["D:/Blog/public/page/4/index.html","6fa6fa0061be43731879fe2058c2c68f"],["D:/Blog/public/page/5/index.html","f99d1b78a635e580ecf261259dd9227f"],["D:/Blog/public/page/6/index.html","ffbff66b4f78334cf08a24b9bd7d1742"],["D:/Blog/public/page/7/index.html","1b2119b94b464eed6953d1c94bc46a43"],["D:/Blog/public/page/8/index.html","df73f6c11ef8f6929c5617378f9dd522"],["D:/Blog/public/page/9/index.html","684f07a32def3e2cbfd133a17539d45d"],["D:/Blog/public/proxy/index.html","66542ba426f8171b3004fee34f7f8894"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","ffdcb0a0234ff770dba1204958303d1a"],["D:/Blog/public/select-structure-programming/index.html","d0df8f17f83b31d71aab87b523dba14f"],["D:/Blog/public/sequential-programming/index.html","c5c03e58ef8512d4655baaa26704a5b0"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","72a3fba107b9514eb2583365d42e500d"],["D:/Blog/public/tags/C/index.html","c3390f2cfb4bbae878c7b55a6f21fa11"],["D:/Blog/public/tags/C/page/2/index.html","c3a4007283024f5aa21aacc41d319dba"],["D:/Blog/public/tags/Concurrency/index.html","1dce9134a6602a33620fab7b89866718"],["D:/Blog/public/tags/DesignPatterns/index.html","cad9411161a1b4b3b1e2f8eb5c5aa487"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","56638445b34d1820c51b05edbeb4982c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","12025a6071d66c83e7fb1f47731804bc"],["D:/Blog/public/tags/DistributedMicroservices/index.html","824b456c431df0b0811f76da499ce883"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","5f0980fc4c1232d301f638ca1eec9fb1"],["D:/Blog/public/tags/Interview/index.html","d9ac3befe897e78e24448a681bf6d492"],["D:/Blog/public/tags/Interview/page/2/index.html","e4244573e98dd33313f486efef6a31eb"],["D:/Blog/public/tags/JVM/index.html","138649385a5043ec2de6b72edf321876"],["D:/Blog/public/tags/Operating-Systems/index.html","50b4a6c1be04fbc6bc5ec251d22623b6"],["D:/Blog/public/tags/about/index.html","e61ce459b13633e436c0197fbc8bfb56"],["D:/Blog/public/tags/ad/index.html","6067f953048fa2e3fb1f0b5c00212029"],["D:/Blog/public/tags/algorithm/index.html","2bdc376289c9c3b6feaf7201f42a8c26"],["D:/Blog/public/tags/algorithm/page/2/index.html","5f50114bffc891011aa8787d825f11a7"],["D:/Blog/public/tags/computer/index.html","d065c3cbe863e3c5d5300e81925eef12"],["D:/Blog/public/tags/docker/index.html","2393b9f8b720531e0490613fe7605210"],["D:/Blog/public/tags/frame/index.html","5ccdf4054f2d3987b4286c1524a558ec"],["D:/Blog/public/tags/front/index.html","402177281a32d4324954fa13bb2722dc"],["D:/Blog/public/tags/index.html","a996aee7430cdbf0821fbbae0f02b616"],["D:/Blog/public/tags/io/index.html","305d10d34719406d6393ddba7484c9e5"],["D:/Blog/public/tags/java/index.html","af54dde13dde590e6dcf51551672dd69"],["D:/Blog/public/tags/linux/index.html","1c0c566c5211a41fe7b17154d990caa1"],["D:/Blog/public/tags/maintain/index.html","9cf2bdb3af01661bb92b815de7b69a29"],["D:/Blog/public/tags/math/index.html","84dc1cbc0b11eb7fd4fccaa0643e3e6e"],["D:/Blog/public/tags/math/page/2/index.html","5c5412c1d5145bddeb2d6341475cdab4"],["D:/Blog/public/tags/middleware/index.html","310544a82a5a25845134dc048dc395a4"],["D:/Blog/public/tags/network/index.html","45ef7dcb2edba80442d1b1662b771c11"],["D:/Blog/public/tags/project/index.html","f77345a11d8f345a24aab68a8052a311"],["D:/Blog/public/tags/resume/index.html","9b263789481071528fed05c24c0261e0"],["D:/Blog/public/tags/security/index.html","51f2f570ac4782bd622b762e4365ab9e"],["D:/Blog/public/tags/sql/index.html","c10a2e541e6d1aec2954ff120383844c"],["D:/Blog/public/tags/test/index.html","2a2487467f4d70a5bf4712e00ac63292"],["D:/Blog/public/ubuntu-deb安装包/index.html","438979de196a14c6cab8d4154c82cbb0"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","04e4032c1477d25d719a9733b044d6b5"],["D:/Blog/public/unix/index.html","da04a42e79ec96b7a7d36ad1f8ae438b"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","40d92f40d62ae44b8ba24d6abcc234ed"],["D:/Blog/public/web-test-combat/index.html","fb78fa4adcf50dbcefa8ff6b4871e119"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","472c9f4cc4c497068c177906005f49b5"],["D:/Blog/public/不定积分/index.html","904151d5b3d4d6e95ab9866e50e30a46"],["D:/Blog/public/中介者模式/index.html","ae50624b372c610bf8b32c8c67828c8e"],["D:/Blog/public/中英文切换/index.html","46bbd79254e5735bad889e4661a3ac46"],["D:/Blog/public/事务的隔离级别/index.html","ee5859dfb9dfef9466de284ea70db307"],["D:/Blog/public/二分查找算法/index.html","1ac5ddd7243e273e3b2e78fa40262aac"],["D:/Blog/public/二叉排序树/index.html","d3dbd551e505834f18e855c918d82dff"],["D:/Blog/public/二重积分/index.html","59e4bb2cc09fde5cbbb2ae81499450c4"],["D:/Blog/public/享元模式/index.html","f446f2b38183324c5333e383fc4b5f26"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","bf3501f72c20a6f9ea4bfb199ef95fb2"],["D:/Blog/public/代理模式/index.html","bb0dafa6a0c6c6578a6a0926b1070389"],["D:/Blog/public/依赖倒转原则/index.html","2b092eeaea22ec5b20ab17274f3e4e05"],["D:/Blog/public/偏导数/index.html","bb8182dcffde95365cb8a0f9ee19fa24"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","135f410ebc742d34793cc3f710be95f5"],["D:/Blog/public/函数作图/index.html","b7e3fe21c5ef1ca48618e1a3efabaa31"],["D:/Blog/public/函数和指针/index.html","bb248316037fab12123e862e96d8d4b8"],["D:/Blog/public/函数的单调性和凸凹性/index.html","ad42a7411bbfb47182a92882472fbb66"],["D:/Blog/public/分布式的微服务架构1/index.html","e4fc6ea8d2852366da1959c3567f36d7"],["D:/Blog/public/分布式的微服务架构2/index.html","3e99c1b8aa9615a66d0039d9d9d67b74"],["D:/Blog/public/分布式的微服务架构3/index.html","e4e7e9b50c9bc69654c198e7e2612ee8"],["D:/Blog/public/分布式的微服务架构4/index.html","fbf3ceaaf7a1748e192e03d92f67d2a6"],["D:/Blog/public/分布式的微服务架构5/index.html","d95233bf1db727aa06431823118b81a9"],["D:/Blog/public/分布式的微服务架构6/index.html","f30dfec4774c4b661391db41ef380b1c"],["D:/Blog/public/分布式的微服务架构7/index.html","16445ec1a3d051303010b4dfaf27fe0a"],["D:/Blog/public/分布式的微服务架构8/index.html","a527a6e74e33649c4c19aa3520a57133"],["D:/Blog/public/分布式的微服务架构9/index.html","c03cb9dc1d30093faa5b92553738d636"],["D:/Blog/public/前端安全/index.html","a30a5e6b7e41883b7d0dcd97ca07f6ab"],["D:/Blog/public/动态数组/index.html","aee7e2bbb4f97c485ee12cbd06aa6628"],["D:/Blog/public/动态规划/index.html","229eedcec74d7600042a1a90702d75cc"],["D:/Blog/public/单一职责原则/index.html","ae4d2a6019c97c4169bd0ff74f753a32"],["D:/Blog/public/单例模式/index.html","1054f785019c15dc9690e381ec3d96b6"],["D:/Blog/public/单点登录实现/index.html","25dc4a1db98ceddcfe2df51f1e563e06"],["D:/Blog/public/原型/index.html","2c67f54bf08328289ee8ae98cd2f85ed"],["D:/Blog/public/合成复用原则/index.html","eb605ac0f8836fd22f2b17f64575e728"],["D:/Blog/public/命令模式/index.html","076265aeb7e98b4504d7350e56fd2182"],["D:/Blog/public/哈希算法/index.html","9c8a8a5f3d4c8f94802ba79fb783171c"],["D:/Blog/public/回文数/index.html","2676173a4f05f97d0b7b26164066677a"],["D:/Blog/public/图床/index.html","b376b8b3b1a5edf82fedaaa54a9ff471"],["D:/Blog/public/堆外内存/index.html","56e92feb70feb67636d288d5798fa039"],["D:/Blog/public/堆排序/index.html","ce585c30766845508572316e7548777a"],["D:/Blog/public/备忘录模式/index.html","5980e7f16f56156b20cd743dff6f0b0c"],["D:/Blog/public/外观模式/index.html","4a8312dd8863fff15100a7f5c71971f2"],["D:/Blog/public/多元函数/index.html","e05fab601944682f2a48b08ad47c951c"],["D:/Blog/public/多线程/index.html","f9d5cedb9dcc7dd94a5770872989e47c"],["D:/Blog/public/定积分/index.html","ba0c78375a7f1c6bf79316b4b655022d"],["D:/Blog/public/导数/index.html","1b9027b134124eaec5b0d0e035ed4bf8"],["D:/Blog/public/工厂设计模式/index.html","14c2cc73ff8b65affec7b8b91a4a0c97"],["D:/Blog/public/并发：原理/index.html","30b691911d0b9c4a26beef62f0e23e58"],["D:/Blog/public/广义积分/index.html","ecc0d6a840ee55cc9bc38960611d09f3"],["D:/Blog/public/开闭原则/index.html","f4131917bed765767a91b924a3008553"],["D:/Blog/public/微分/index.html","aa15e1848ca203c135804668d3503a81"],["D:/Blog/public/微分方程/index.html","4077c2b4832b6f688caeec31e4c752c9"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","4bc5198deca07935de2d740a8c3775e6"],["D:/Blog/public/接口隔离原则/index.html","4c1dc0819db80b937f8605f8425e8e38"],["D:/Blog/public/插值查找算法/index.html","ddf33cfe950026160506cebb2ad9dc19"],["D:/Blog/public/操作系统/index.html","77136cd0a09902c283bed389080ffd41"],["D:/Blog/public/操作系统概论/index.html","3ec757285e78b2f54e677c3dd6619009"],["D:/Blog/public/数据结构与算法/index.html","c35468a1d720be385c6637c51c6d0a45"],["D:/Blog/public/无穷小与无穷大/index.html","39c21a490ddcc2867490437980d50470"],["D:/Blog/public/极值和最值/index.html","f0b4db0112e420095ac643b79ae10da0"],["D:/Blog/public/极限/index.html","5fef7e42d6e2a6180db4c972c0f7217e"],["D:/Blog/public/栈Stack/index.html","b9ab03ad1d327f676e9470c297938806"],["D:/Blog/public/桥接模式/index.html","9d77c95eddf781e3083a438dffd25750"],["D:/Blog/public/模板方法/index.html","19eebd5500eced926097f8e8138ff2fe"],["D:/Blog/public/沙箱安全机制/index.html","2e34e548faa06a64ba8bb005c1d00cdb"],["D:/Blog/public/洛必达法则/index.html","34e9b5cc1773903e414bb2c8e8ff14f1"],["D:/Blog/public/浅谈IO/index.html","b3d1114892c033b865ae9ad57aecb2fa"],["D:/Blog/public/测试用例/index.html","47c50e5fd1975c0849cb21c3bd964f6e"],["D:/Blog/public/状态模式/index.html","008d94e94091313f3d99b8e56a481f26"],["D:/Blog/public/生成器/index.html","425e40eb65101f79791a5e1b8f0557ca"],["D:/Blog/public/策略模式/index.html","18bbb33c141bb0165a6819e96aa0f83c"],["D:/Blog/public/级数/index.html","cede4fdf468444cba97fa951361ea680"],["D:/Blog/public/线性查找算法/index.html","4d8426d6dac49fb0f63023fb289e20c1"],["D:/Blog/public/组合模式/index.html","67208c00bf5e802eb7388b9253197b0d"],["D:/Blog/public/编码算法/index.html","5f6a31a9da6d8fb3a4076600909bbd78"],["D:/Blog/public/自动化测试/index.html","6b89a58f2db5b68f39fef5ef0c287f68"],["D:/Blog/public/装饰器模式/index.html","e8878c8ba2bc6a37443e8f8a4959ae3e"],["D:/Blog/public/观察者模式/index.html","b2b7bdfb918a35f81931308be26aab0f"],["D:/Blog/public/解释器模式/index.html","b2c8a3167cbd65523ec91bbbc427b0d7"],["D:/Blog/public/计算机组成原理/index.html","46a424f5e9561b4ea7694dac9d077a52"],["D:/Blog/public/计算机网络-1/index.html","bd125f9f73095deb6a7c4bbcc9d5ea08"],["D:/Blog/public/计算机网络/index.html","4b9d4255397edc5b7a7279ee3656a588"],["D:/Blog/public/设计模式/index.html","636d9014126a7bb5345b13eecfc650e8"],["D:/Blog/public/访问者模式/index.html","abfe10b4ba455b53b2d19c410c35833b"],["D:/Blog/public/责任链模式/index.html","d78114ecb6e0834d20723a53b350c004"],["D:/Blog/public/软件测试流程/index.html","e82a5a2cdee8d502e04f097c16062486"],["D:/Blog/public/连续/index.html","797ae0e5ed6d95f03df2207a28f2dae3"],["D:/Blog/public/迪米特法则/index.html","ab3af1fa6a547646625e7f27c009ad4b"],["D:/Blog/public/迭代器模式/index.html","21519cb191f23abbb7b5bd2d271b2904"],["D:/Blog/public/适配器模式/index.html","67dadaff90ce853c5a49e55fe4ff05c0"],["D:/Blog/public/里氏替换原则/index.html","a3ec0851fd8f19d99883f4ca099ac96b"],["D:/Blog/public/链表/index.html","ebbc0396e63ca1784ffc0b81b66f6bd4"],["D:/Blog/public/队列/index.html","4a53d8fa72218cda226525d5750b78ef"],["D:/Blog/public/面向对象的特征/index.html","4afe2bab0ddd0eb0e2e8ec5317919110"]];
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







