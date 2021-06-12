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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","317c0f5c319eafc97b7f50bc42e6c840"],["D:/Blog/public/404.html","4a586d0da23805170e88dbacbce77563"],["D:/Blog/public/7种排序算法/index.html","f94ac8c2a418a8ecaa3a267115ce3420"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","ba5989d6f764f812645acce2b5cb2712"],["D:/Blog/public/AIO模型/index.html","9d4ba5c2aa7c568f4f49c14d17847aeb"],["D:/Blog/public/Array/index.html","548c869a8501b225486e4c9e66a2c626"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","55dc5fe3087f5ebe81d82430559deed4"],["D:/Blog/public/BIO阻塞模型/index.html","a7bcc89677bffef09a68d71cf80506f7"],["D:/Blog/public/C-algorithm/index.html","a16c5538901da2b9f5f422e1979df365"],["D:/Blog/public/C-prime-plus/index.html","eca360bde26fb98ee15a9a5068c8f6cd"],["D:/Blog/public/C-programming/index.html","a81696e553a65fd0e648da6c183a18a9"],["D:/Blog/public/CAS-and-AQS/index.html","7ee52e72d0d7a74653b7a99c1351ecf8"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","59ab14442f19981fb02d443bea69ebc6"],["D:/Blog/public/GC/index.html","6c3f8704e88a0d4af44852f64c0439fd"],["D:/Blog/public/Good-use-of-pointers/index.html","32f1dbf9fc6ae5c3cd6c31a39c7809ea"],["D:/Blog/public/HTTP/index.html","e540ada178ccf5654cfbd11519625d40"],["D:/Blog/public/Head-First-nginx/index.html","23159812a58c1d9ee2adde8b04236ca0"],["D:/Blog/public/I-O模型/index.html","86ab27a207ea8361f97e84a83108a356"],["D:/Blog/public/IO/index.html","25a20f7defe9fcdfe840d2da346db863"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","d220b71765c8c98c2fcbec57754d99f6"],["D:/Blog/public/Interface-test/index.html","5aa9cefd59392dad7af6739fe9ddd1ef"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","7643f9fcf6ad531041c8c99018e27696"],["D:/Blog/public/J2EE/index.html","1be37045b1b9dbd1c536a4d62884edaf"],["D:/Blog/public/J2SE/index.html","1f9dca50082329dec5ff458688961e87"],["D:/Blog/public/JDBC/index.html","4118953ef06aa1bc9e7fc82cb9f60799"],["D:/Blog/public/JDK/index.html","9fbc809f0ce5bb4f14714ba427fd67f9"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","1b5507716523b9eea6ce7ba54a84f9eb"],["D:/Blog/public/JVM/index.html","265e6195cec4468d10f746ca016f8ae0"],["D:/Blog/public/JVM垃圾回收机制/index.html","08fed9f33763b434989b1ca19ce55071"],["D:/Blog/public/Java-memory-model内存模型/index.html","f7b647b49b7a0702aeee8f67003a3e1a"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","917abcb5e42218a9eb9ebee82251b272"],["D:/Blog/public/Java网络编程/index.html","e271fdbb2d57e97d343647026fdde906"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","5c416f037b9526f6b7cfeae84ecfb6da"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","5d15bd50f0a80c428ca2725170827f01"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","00d93e6e3955426d8278bf0072b63b96"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","70e5a1541a1258542243f48846fcd69e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","3398a0193b2337f5b38d0fb75b8d28df"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","847be553735e2633a650dc6a5cf537f8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","1c9e8d1521ee48be8eb1bda84152c13b"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","85072e9adde835594d20133ad3ce1335"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","a4360a99bfbf454caa428c91f70fb275"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","d775e1eed15a1845ebedacba4c536bf2"],["D:/Blog/public/Linux/index.html","24cacecf697daf3ee361a4a23ba6ddf0"],["D:/Blog/public/Lock/index.html","3735f866338a7dfc2bce95c430d6a913"],["D:/Blog/public/MVC/index.html","d516881ed95595f93c12f2652f5caac6"],["D:/Blog/public/MYSQL/index.html","108e10df0287fb0f23ba357aecf7e970"],["D:/Blog/public/Mybatis/index.html","b22480e3b96be1f9376152cf9d826221"],["D:/Blog/public/NIO模型/index.html","87dc615e7aacf93449cbb98edc6db1f4"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","368ca286c88bbb11f1531536cd322257"],["D:/Blog/public/Native方法/index.html","865413634452157e8499c2a91d81b060"],["D:/Blog/public/RESUME/index.html","8411c8aa0b781c31fb2cfcfdb298d2cd"],["D:/Blog/public/Redis/index.html","bd5ce98d8527536397f84614fea4ef77"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","eefa652f458e934d44288f1f019ea384"],["D:/Blog/public/Reflection/index.html","1362b6c9d726a5e0c877d8ce8a467e92"],["D:/Blog/public/SQL注入式攻击/index.html","9b88b696f75e76f9ee7b89cb18c1a408"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","feffdcbc4e39e07603bdadbe34162a25"],["D:/Blog/public/Seata处理分布式事务/index.html","22726ef9440bb6bffda691573ed11221"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","c4e6679aaffbf2341f1961e99c9dbd94"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","ab0efe4925ff2024ef652368ece59400"],["D:/Blog/public/SparseArray稀疏数组/index.html","7af90494a1f4a3dc290c305d5738dc95"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","05b9f66acf58091d280cf89e76f50bde"],["D:/Blog/public/Spring/index.html","dd02ca91fc6b381f6b37c7b9eaefcd8f"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","1abdd028850c7544af930f11da6625b6"],["D:/Blog/public/SpringMVC工作流程/index.html","65ff270caed072b7ffa205b1312a1e74"],["D:/Blog/public/SpringMVC环境搭建/index.html","3b4c4b2c72574cf80131eaa00fdc8afe"],["D:/Blog/public/SpringSecurity/index.html","aa97e1db3f2f89d07559a7ccb4825473"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","ecfb7dce7940a5768d8139867f2562a4"],["D:/Blog/public/Spring架构/index.html","3e0e25dd21366594ed4a3ef588f6c0bf"],["D:/Blog/public/Spring的作用域/index.html","ae2f5040541232eb8e2ea3165f608788"],["D:/Blog/public/TCP-IP/index.html","b94a01645d547b6541eb49a02442cd20"],["D:/Blog/public/Thread-pool/index.html","7536383f381c72d1b127b190316ae67b"],["D:/Blog/public/Thread/index.html","6b16446cdfd0f65161bb03cdea04cf4e"],["D:/Blog/public/Unitest-framework/index.html","8d159bf98c19f8374f707e5a287a72a9"],["D:/Blog/public/XML/index.html","5658302c76dfa59f0b2fad7938d3dc29"],["D:/Blog/public/XSS跨站脚本攻击/index.html","4d2d52622df70c4530986048408d04bd"],["D:/Blog/public/about/index.html","62a648be315ff7f9226863e5ff2a83a0"],["D:/Blog/public/app-test/index.html","137f46579175bb4e0b54d057b9338171"],["D:/Blog/public/archives/2019/01/index.html","4f00c9556df50ce7f76abe5d3aacca88"],["D:/Blog/public/archives/2019/07/index.html","d33924e57096bd5d6ed444ff71d342e9"],["D:/Blog/public/archives/2019/12/index.html","10ad87c4a8b0e2166915781d471bec7b"],["D:/Blog/public/archives/2019/index.html","7bc45705b22b2d17f620296f282a8f54"],["D:/Blog/public/archives/2020/04/index.html","ea9d2b531c8fd24031d0ae01f936d416"],["D:/Blog/public/archives/2020/05/index.html","3360c7f4a24087cae9827c3a85ca9373"],["D:/Blog/public/archives/2020/06/index.html","e76b67f212b0c03991a9e8a2dad20dd8"],["D:/Blog/public/archives/2020/07/index.html","12dad9fc02099177e6accd3f724320c2"],["D:/Blog/public/archives/2020/08/index.html","b29024c2ad46dee1042e56953567e0df"],["D:/Blog/public/archives/2020/09/index.html","5996cfe0edbc22d70e17c1ad398b93bf"],["D:/Blog/public/archives/2020/10/index.html","46cd53162b354eaf0ab04467ca8edc23"],["D:/Blog/public/archives/2020/11/index.html","8eb101d98328699845f1fad351e512b9"],["D:/Blog/public/archives/2020/12/index.html","827b487659f454ff6bcce541b9bafebd"],["D:/Blog/public/archives/2020/index.html","ff986a872f54b8726ad35f7127a5b6fd"],["D:/Blog/public/archives/2021/01/index.html","17d3b3fc575f06b7a533cceb3c921834"],["D:/Blog/public/archives/2021/02/index.html","302e38f731d61fc066b3cf45498d02ff"],["D:/Blog/public/archives/2021/03/index.html","ffc0effaa0ea89e8c6234c4a4fde527a"],["D:/Blog/public/archives/2021/04/index.html","7fe5395a69035696107f6d169c58bb8c"],["D:/Blog/public/archives/2021/05/index.html","3067c6cb29f0a4ec8b4e23bbd87588fc"],["D:/Blog/public/archives/2021/06/index.html","612288c226d059cc21f594f4ff2ed975"],["D:/Blog/public/archives/2021/index.html","5b12ffdda6a7483a7c88f877fcc19766"],["D:/Blog/public/archives/index.html","a3f3281b85023c750c5af6373e1a7838"],["D:/Blog/public/categories/C/index.html","46414bad3e3cd165185b0cbaa81b11a8"],["D:/Blog/public/categories/SpringMVC/index.html","37052ab7170110335f70d6e69da5a902"],["D:/Blog/public/categories/categories.html","7bf41d6ea43da8ac7b273901d7755780"],["D:/Blog/public/categories/linux/index.html","0e6dd91d08bcf75d4b1028b0a32fb710"],["D:/Blog/public/categories/分布式/index.html","048caf27141b2751cd29a3a24025ce51"],["D:/Blog/public/categories/分布式/page/2/index.html","b4c327c27b7542aff9f31f28f5f98db8"],["D:/Blog/public/categories/设计模式/index.html","ef976c48b95315737f55732a12b11d50"],["D:/Blog/public/categories/设计模式/page/2/index.html","63b9fc6d2ecee6e3f7a3863906a27d14"],["D:/Blog/public/categories/高数/index.html","dd65091e60a6fbcff8cf85c3b71cf2b2"],["D:/Blog/public/contract/index.html","58adad8510ecfa171f28bda580ccb3b4"],["D:/Blog/public/css/index.css","e1741c6c12155a2a47b4bc84b20297a8"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/var.css","d82b4b112bc7691690dec736cd38ff58"],["D:/Blog/public/cycle-structure-programming/index.html","1b4d803daa767bc50b237d0e5cc7e348"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","640949edce5b649a073ea67a97af0748"],["D:/Blog/public/google8102e2f35ce9e391.html","4db1968e6532a5f222911043f468a4c4"],["D:/Blog/public/gulp压缩静态资源/index.html","45f2a34005f90ca9603507c7d970a8ce"],["D:/Blog/public/head-first-hashmap/index.html","7ea9cf08716e171ee054791d2d780206"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","49b3e4eb8ce9cc57f848ef9a6fff9289"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/improve-robustness-(1)/index.html","42c3e0a3c8e8dfef520c451d5aa01e47"],["D:/Blog/public/improve-robustness-(2)/index.html","f58ec1f1e7faa0271d6b55ec7fdbc0de"],["D:/Blog/public/index.html","c50f38c10bbcdbb617a4d9f392f70d89"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/katalon/index.html","9b9f1b02e9cf50e7103ca20638b5bcad"],["D:/Blog/public/link/index.html","526cc0fdd4c22b125d6d4ae5fefe4d5f"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","08feb4b9aaae29e29dfc7607e08dddd6"],["D:/Blog/public/live2d-widget/demo/login.html","5ba2e109b92d08f3266006d8f35958e7"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","d4e9ad92327cd237f100a2cb8fa99957"],["D:/Blog/public/mybatis-缓存/index.html","a64b9a5fc59a9a6efc7dcc6f3b9bb6b7"],["D:/Blog/public/note/index.html","b521149e838ec37388dabae180200ed0"],["D:/Blog/public/page/10/index.html","a519c3beb8a30c11a469de90507c6d4b"],["D:/Blog/public/page/11/index.html","ae7d36a9d4be0a63330da3919687a0df"],["D:/Blog/public/page/12/index.html","fcf57af8bbf975ffc78cf1064f9a02fd"],["D:/Blog/public/page/13/index.html","cc0ac90718127be7af9ad2153e8476aa"],["D:/Blog/public/page/14/index.html","2b34efb32423307bba30ca2627537e3a"],["D:/Blog/public/page/15/index.html","40b01fa3eeb2c43910cf02256f5e821d"],["D:/Blog/public/page/16/index.html","668db91266737b538c19b382431a4b45"],["D:/Blog/public/page/17/index.html","f341bcef22be1c811cb13b2a0a1e1906"],["D:/Blog/public/page/18/index.html","ccf1001db5692cd1907df5ec0aeff4c8"],["D:/Blog/public/page/19/index.html","178cf43d3eeeab98791fed4b39191d54"],["D:/Blog/public/page/2/index.html","84d3b5b374dab506dfd5acb641565a64"],["D:/Blog/public/page/3/index.html","00f02f477421717dc9534ee5a3e49d2d"],["D:/Blog/public/page/4/index.html","74b6fdd190aac770053717542d910d2e"],["D:/Blog/public/page/5/index.html","b62cacfc3bc9ca44f912bc4ba2ab8bd5"],["D:/Blog/public/page/6/index.html","2f5f60b6b1e60aafd542d3619686c420"],["D:/Blog/public/page/7/index.html","5a36c84fd17183492f67c50f3e0941f9"],["D:/Blog/public/page/8/index.html","f36be8a455743789a587db962ef13f15"],["D:/Blog/public/page/9/index.html","95bde55eb0c3a1bfc2e31d7ee7a0e906"],["D:/Blog/public/proxy/index.html","3f1e249e69504398cc04fd247ff941b1"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","a52043879e08ffafc7c93e07f148997c"],["D:/Blog/public/select-structure-programming/index.html","0afddfab002451da8b9c80fd3b5681ec"],["D:/Blog/public/sequential-programming/index.html","e68713389032c774955429289d9cbf63"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","1d4a508ab5cc8755367bf9f4845222dd"],["D:/Blog/public/tags/C/index.html","17375d0e8ef0b3795fc2ddf0ee731132"],["D:/Blog/public/tags/C/page/2/index.html","424230ecfe11b385ae1ea288b62be4e9"],["D:/Blog/public/tags/Concurrency/index.html","2bf9ec9e254e923ce479ffaf60b88d67"],["D:/Blog/public/tags/DesignPatterns/index.html","01d91b731f9ab74921cf5334c1d9f5f4"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","26c5c488533679f7b01236b0dbb19f7e"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2ae8d9eaa66f98657d40e7dfdd5ccb95"],["D:/Blog/public/tags/DistributedMicroservices/index.html","c0d0df6b111005e62d8352f56679810e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","9a62a54328069f094d91a7c0052633b5"],["D:/Blog/public/tags/Interview/index.html","be6835705a690aff7eb6a7bba0ae6669"],["D:/Blog/public/tags/Interview/page/2/index.html","dbe78766e06dc0e352de0a5c63e36ff2"],["D:/Blog/public/tags/JVM/index.html","4161ad74ee3259460cdf865744690fb3"],["D:/Blog/public/tags/Operating-Systems/index.html","8bdf8ccd30eeacba0f9a82e4f0bd4e5a"],["D:/Blog/public/tags/about/index.html","e723083b7e152f52d2712fb499f3a30f"],["D:/Blog/public/tags/ad/index.html","115007f9ac76b345d4461339451a0b1d"],["D:/Blog/public/tags/algorithm/index.html","198eef5204f84245978a73f47dcbcb74"],["D:/Blog/public/tags/algorithm/page/2/index.html","7cfb884b1034f7fbb37920a0469463f9"],["D:/Blog/public/tags/computer/index.html","03c4454a5e4020df9c5e8f8439390834"],["D:/Blog/public/tags/docker/index.html","570ea5d53d1429dc05cddc4e85ccf90b"],["D:/Blog/public/tags/frame/index.html","f95f092d5f408297bb7d7596c000ba91"],["D:/Blog/public/tags/front/index.html","14d3ff0fddfb940d221e76dfc73f9fce"],["D:/Blog/public/tags/index.html","c8f5eac9734983a7bfaf5f4f953fdca7"],["D:/Blog/public/tags/io/index.html","69f276840ad07494489b601664c9dd7e"],["D:/Blog/public/tags/java/index.html","8809f5d2f50bf9fb6e92c199d2b6716c"],["D:/Blog/public/tags/linux/index.html","8cb978cad76c05411608d93282b643f6"],["D:/Blog/public/tags/maintain/index.html","9da6246c60ae733d608704616a100273"],["D:/Blog/public/tags/math/index.html","58a67c0cc906953cf2e86d2b908ac4e7"],["D:/Blog/public/tags/math/page/2/index.html","01cbfe4984c8e278a3625e6aef47c091"],["D:/Blog/public/tags/middleware/index.html","028069378a240241cf4d3040b27e0f8e"],["D:/Blog/public/tags/network/index.html","31ec3a87c10759f101016c50a12659f1"],["D:/Blog/public/tags/project/index.html","f43b2d6c29bd86f16a7eed6a04dd31a7"],["D:/Blog/public/tags/resume/index.html","3c7b82281a80bdaa650b3e2a58343398"],["D:/Blog/public/tags/security/index.html","f08dc79043a05c4fc777864a3fc02a19"],["D:/Blog/public/tags/sql/index.html","4c56bd3acb61efc369f3028f35ce3229"],["D:/Blog/public/tags/test/index.html","32006f85e702ce50b2de1e862b495eca"],["D:/Blog/public/ubuntu-deb安装包/index.html","186b63f469f0906ec60aa6703b778a3e"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","87c05cbdbfea450bc5f83a349c14d623"],["D:/Blog/public/unix/index.html","943a25e7a8b5df4623b4c3e49431fb40"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","170e3d217c89af727c2e7e255a4b34db"],["D:/Blog/public/web-test-combat/index.html","5d796763db8f7d23c3cf845e409ab81a"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","49b365c35a707e7d0b54356b91613710"],["D:/Blog/public/不定积分/index.html","3f3b14d4e1889ee831a3bd9c3b8d0377"],["D:/Blog/public/中介者模式/index.html","06529e602aa862cebfec4e9fcc9f15dd"],["D:/Blog/public/中英文切换/index.html","97e1fd4ac4bdea7c9842d9dd2ce8b92e"],["D:/Blog/public/事务的隔离级别/index.html","ad72f5e99f0356b2f0bea3ecd0255e1c"],["D:/Blog/public/二分查找算法/index.html","72d702cba91c56105ce2f6765adbe221"],["D:/Blog/public/二叉排序树/index.html","89a8e3b98c1f0e9dd368782a0bb30d55"],["D:/Blog/public/二重积分/index.html","0b778d9e6cf62f9ab1d8d2eb42679442"],["D:/Blog/public/享元模式/index.html","b8bff657e70d5d79e5805ce4e1c5bb2a"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","7c91c98cd01fe00a6fb6ba74c71b69e2"],["D:/Blog/public/代理模式/index.html","33a61a0def0c9f38689a57ce99792d5c"],["D:/Blog/public/依赖倒转原则/index.html","e035ae785c2a1bf897ac3ca390e53217"],["D:/Blog/public/偏导数/index.html","1cab65d849f445166ca49a5ee64bd9ac"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","97eeeb9dedec60b23a9f284b519f5bdb"],["D:/Blog/public/函数作图/index.html","3fa66c289d3df03f19822871bdc2ade9"],["D:/Blog/public/函数和指针/index.html","b6139a667261eb3246a648ba21f465c1"],["D:/Blog/public/函数的单调性和凸凹性/index.html","96a82a7475b23713314cf8a68c45e7ca"],["D:/Blog/public/分布式的微服务架构1/index.html","d04ed1b61c86d1d7c2809da0bd010fc7"],["D:/Blog/public/分布式的微服务架构2/index.html","02db0d1f0543aefc3e9d589a79ebff84"],["D:/Blog/public/分布式的微服务架构3/index.html","92452a1469b2def6d8c0f6113cdfba13"],["D:/Blog/public/分布式的微服务架构4/index.html","bf11e68011aa0e07276430c83fab3ee4"],["D:/Blog/public/分布式的微服务架构5/index.html","128ded95fb092291476c5a644dd7e1dc"],["D:/Blog/public/分布式的微服务架构6/index.html","54e8d77b47e9b5e52ad7e00d6ab8fdb0"],["D:/Blog/public/分布式的微服务架构7/index.html","ee5b410ae940079b5d104a77fb721d50"],["D:/Blog/public/分布式的微服务架构8/index.html","0356190e0c1f3c6c7741d0e8871ff853"],["D:/Blog/public/分布式的微服务架构9/index.html","3b6c7eed40d9929f566c99befb488700"],["D:/Blog/public/前端安全/index.html","d7698b27b7d463c3dc54814fd053adfa"],["D:/Blog/public/动态数组/index.html","d4cf86a31315bdcda2d86c73bd898d6e"],["D:/Blog/public/动态规划/index.html","3102a20197ed39cd6f77d44d57f74d33"],["D:/Blog/public/单一职责原则/index.html","c4c2f4a84b3e8bd3f51ab50341b7e1e4"],["D:/Blog/public/单例模式/index.html","2615e3d2af61f76d888bf2b3fc1a919b"],["D:/Blog/public/单点登录实现/index.html","01088d350445c89888b8b41d281f74bc"],["D:/Blog/public/原型/index.html","7abc87f0ae03d05397dccfd824df22f4"],["D:/Blog/public/合成复用原则/index.html","b08f654dcb4dbdcbbf14c7409f04c7f3"],["D:/Blog/public/命令模式/index.html","cbd72ac5a3834665875a422bb276395d"],["D:/Blog/public/哈希算法/index.html","35d27ca9d66debc99c43781f47d5c8c4"],["D:/Blog/public/回文数/index.html","076327fd56384c7cb3035de6e4ac2e64"],["D:/Blog/public/图床/index.html","5beeab263024ec41af51854149e972f0"],["D:/Blog/public/堆外内存/index.html","3010d3598c7ff0e99bbbd4a7c35e07a4"],["D:/Blog/public/堆排序/index.html","b16bc24914db1783a31894558d2c9dfd"],["D:/Blog/public/备忘录模式/index.html","a8cae8d8e05a12bb31950f6dac3b0332"],["D:/Blog/public/外观模式/index.html","184e8b51a9b9a71891ade3df6d318ed1"],["D:/Blog/public/多元函数/index.html","e14709ee4c13904879df26f1fbb7a30f"],["D:/Blog/public/多线程/index.html","8fdb9930d1d9e3854b392a5e12e380c9"],["D:/Blog/public/定积分/index.html","ae0b868f5697feb8e171821639b3e84a"],["D:/Blog/public/导数/index.html","3e1c94d651769af0f23b8fa6424bbf58"],["D:/Blog/public/工厂设计模式/index.html","9a87401a3d6f3cd8785efd9899ce236c"],["D:/Blog/public/并发：原理/index.html","8a8805aa7bf77d8426be98e8e692e3f2"],["D:/Blog/public/广义积分/index.html","83b1499893440efab398062c87a94936"],["D:/Blog/public/开闭原则/index.html","a046b054034d015551d568c12cb82177"],["D:/Blog/public/微分/index.html","f53d779c29eed4ba546438f58f2c9b10"],["D:/Blog/public/微分方程/index.html","3b77c16625705fb299954ed10b2c9f7b"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","b6fff1bbe466d71b8e47ab9f2051dda1"],["D:/Blog/public/接口隔离原则/index.html","01664ab8fa9d2675e5a54735b12432cb"],["D:/Blog/public/插值查找算法/index.html","d63bed6d79cd1a95d6185c38734ee669"],["D:/Blog/public/操作系统/index.html","c93c0443d02fd4bbfb33e415815b9ab0"],["D:/Blog/public/操作系统概论/index.html","6b50cfe09bd1ce3dcf20aef617795f01"],["D:/Blog/public/数据结构与算法/index.html","379345164e325deda6493eb1330d75a3"],["D:/Blog/public/无穷小与无穷大/index.html","e23394b283b6ec4fe9a058a4663efff4"],["D:/Blog/public/极值和最值/index.html","cf03e05377a88165c51f4e3097fcee68"],["D:/Blog/public/极限/index.html","0a584a7dac9c5279d2889a40b953305b"],["D:/Blog/public/栈Stack/index.html","7bd5a5cd8ef068a65bba83e2d5d5e438"],["D:/Blog/public/桥接模式/index.html","dfac0645695cabab2d5389db2729b48d"],["D:/Blog/public/模板方法/index.html","772b02e4617e584b56ddff4e44cb8402"],["D:/Blog/public/沙箱安全机制/index.html","ef9467dffb2944f07e6ce1a522e6830f"],["D:/Blog/public/洛必达法则/index.html","4e61cb26ec6aef60d465aa5b35d394d8"],["D:/Blog/public/浅谈IO/index.html","3c5fc1cc30e12a564eb593e16cdb79dc"],["D:/Blog/public/测试用例/index.html","0748caac6c795564927c9dcbb99b3083"],["D:/Blog/public/状态模式/index.html","234c0c5de55cb05fa4c8c510269255ba"],["D:/Blog/public/生成器/index.html","739504310dd8bbedf3fac10fbf4484d9"],["D:/Blog/public/策略模式/index.html","bf9b67afc13fbfe4aef1cd802cf2b4ca"],["D:/Blog/public/级数/index.html","b84fd4a66b3a3e7c8cd14b25cb3946ad"],["D:/Blog/public/线性查找算法/index.html","41a4dfa6e706fa52b64eea1a328e8461"],["D:/Blog/public/组合模式/index.html","0d6351e030624bfc258e4537a65331dd"],["D:/Blog/public/编码算法/index.html","c711496312e7179c71d7531941640396"],["D:/Blog/public/自动化测试/index.html","70cf0d41d486e60cff5e63224e9d5639"],["D:/Blog/public/装饰器模式/index.html","28a5ef7a18b055487ca7389711b72d2c"],["D:/Blog/public/观察者模式/index.html","ef38e38db9d260e8d93313107040cea7"],["D:/Blog/public/解释器模式/index.html","b7487551a11fa1c53e7ec0f562c49d09"],["D:/Blog/public/计算机组成原理/index.html","c0cd0b2055028c9cf2a5a1bfdf626452"],["D:/Blog/public/计算机网络-1/index.html","a5426f6f7d7ada9af243014390f0a2cd"],["D:/Blog/public/计算机网络/index.html","7a04fe119d4876295658101ece80542c"],["D:/Blog/public/设计模式/index.html","b942326314856156902ddddabc79ecbe"],["D:/Blog/public/访问者模式/index.html","264b3b73af51d07abf16610f7b6608a2"],["D:/Blog/public/责任链模式/index.html","e35b39d320f677094b42e12a39ebc107"],["D:/Blog/public/软件测试流程/index.html","aa508dcbc0511dac0437f402b8973942"],["D:/Blog/public/连续/index.html","5ce1c4fef5de84083f86d47c4afdfca7"],["D:/Blog/public/迪米特法则/index.html","16966414c56e16d7caeb56a3931814ea"],["D:/Blog/public/迭代器模式/index.html","bfd81c70b8a267772bcd53f9bbaadb61"],["D:/Blog/public/适配器模式/index.html","084ff9c1b55cc0e961ae4a51862ebe4c"],["D:/Blog/public/里氏替换原则/index.html","0b2ce24994d9a2f881c0d2b5c29e13e1"],["D:/Blog/public/链表/index.html","8c07d74dfe907da19d990d421c20facb"],["D:/Blog/public/队列/index.html","a0570d299e4bf5f991cba1bab9215f12"],["D:/Blog/public/面向对象的特征/index.html","2e6be080f6f1f6e04a99d1a8cd5615d1"]];
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







