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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","d5ea3bec176e4ff34c51cba1abf35180"],["D:/Blog/public/7种排序算法/index.html","84e486cad4c9f377e5f639b90651c465"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","f9af6d27a7a4ee664a642fc67274afc1"],["D:/Blog/public/AIO模型/index.html","43a722328d462d01705bc996973c4036"],["D:/Blog/public/Array/index.html","243eb8dae0fadfcdddcc8293f9621ccc"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","5569f5aaa6826ad35a544d16cf5c8c24"],["D:/Blog/public/BIO阻塞模型/index.html","b4eeb4c83cfe60fa06a5fe3138fbb298"],["D:/Blog/public/C-algorithm/index.html","e8ff145576d5cd5fad1b013c970e389f"],["D:/Blog/public/C-prime-plus/index.html","259b33d393645e497dc0be089972bcfb"],["D:/Blog/public/C-programming/index.html","0e71b0861bdef0954ac06290d7bf55b3"],["D:/Blog/public/CAS-and-AQS/index.html","c08dca8af93e96dda478f524c5fbd43c"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","21456532654ef8d0e5f354dd3ab0fa15"],["D:/Blog/public/GC/index.html","fdbbaa09431c861eee53fb07f672a295"],["D:/Blog/public/Good-use-of-pointers/index.html","2b2968eddfc65ad8025921cd17ca2ecd"],["D:/Blog/public/HTTP/index.html","0880160a7fcc87b65b4a11abeabb0bd1"],["D:/Blog/public/Head-First-nginx/index.html","f4dbd006f6931393e82507c4be1c8cd6"],["D:/Blog/public/I-O模型/index.html","38e3b039b94d3b158ab75a58f0c7bb04"],["D:/Blog/public/IO/index.html","27f85691e7ef702435c43bc42ed50aee"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","ba224437cac2a54a9f85448f43e54430"],["D:/Blog/public/Interface-test/index.html","086ea8ca12cf96f2e80a180efca00fb6"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","5d00188d651a796ca14a97e4d2017891"],["D:/Blog/public/J2EE/index.html","592422ff4add2c17722247687699595f"],["D:/Blog/public/J2SE/index.html","45c392c9d4d8895576db58bef2494ebe"],["D:/Blog/public/JDBC/index.html","1cfddd819dc9af05a2fb310e49eadd72"],["D:/Blog/public/JDK/index.html","efb40dff6b588fac6cc524df26bcebd6"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","e65615bb6fd61f8774cdb5d45202c879"],["D:/Blog/public/JVM/index.html","d2015683bc1061cb010b6c2e551d9b90"],["D:/Blog/public/JVM垃圾回收机制/index.html","646a5c6f5524ba5ca85d1b18b8fc7a90"],["D:/Blog/public/Java-memory-model内存模型/index.html","726338c41fb6eb26c62a5925c91cb33d"],["D:/Blog/public/Java网络编程/index.html","c1512306c02fa08e8a618a40c4d72054"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","2eb698940adcf56e302405bf4a5d7202"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","53cae13fd78433903ca9fff1d5c10ba7"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","0e9d10320557706b3e1e54eb8a163ad2"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","e3fd099d2f702841d998f15c3799ab8e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","9841f01799cc6895aecd68b2462e69c2"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","4deeede343adc55cc1c99559e25c21f8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","c2910f24d78f5d98a3fa287b5dedc081"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","3de6f3ae0f7407c646499c896729c9b8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","3abbd407e7c3406be09680900e91ff45"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","128840fde3462d8d661fb1bad738cce2"],["D:/Blog/public/Linux/index.html","888f5df552836e2b00f386d622ba2893"],["D:/Blog/public/Lock/index.html","2801c828f05f5ed4748fd0b0ba5229d6"],["D:/Blog/public/MVC/index.html","9ee16f1441b1d12fc037ffb520725520"],["D:/Blog/public/MYSQL/index.html","8d94ef74715d79d89c25e16fa2722ea3"],["D:/Blog/public/Mybatis/index.html","076e5554225a4d1fad91fa77f7177102"],["D:/Blog/public/NIO模型/index.html","c019f3eb7e162b08122ebeb53354dfa3"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","60bace24c221976acf5124521e968a14"],["D:/Blog/public/Native方法/index.html","839e99118e3250016b90bf7fd1208b90"],["D:/Blog/public/RESUME/index.html","d22509f4d50dfd6f1443c36ac9138627"],["D:/Blog/public/Redis/index.html","5a98dbe94fd4f3479e37398f9451f31d"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","901deacc8cd7754050555b9ff7fd284c"],["D:/Blog/public/Reflection/index.html","9d0d03fb14fd26257c56f7953a3af0ab"],["D:/Blog/public/SQL注入式攻击/index.html","c562d9c8897939ee28e0bf10415a0bf2"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","1e7eec5867622ce34eac3181b3f1eb56"],["D:/Blog/public/Seata处理分布式事务/index.html","f2bebd9db3c8f76e85cc3b3632d9c30b"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","37ef8ad8c7b35f6f9811cc1e1d9283d3"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","155042130faab52977ac0ead979ef089"],["D:/Blog/public/SparseArray稀疏数组/index.html","d90cb5a86de9c9102e40c178fe593dd5"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","5e155d80f22e1b99bcc1c6aab85525b2"],["D:/Blog/public/Spring/index.html","5e5976451c3576cf8055aa42437e38cb"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","c64bebd65f18d4381efed53ed72dfed8"],["D:/Blog/public/SpringMVC工作流程/index.html","e5fd0dacb94f42ec55bb0f38481f17bb"],["D:/Blog/public/SpringMVC环境搭建/index.html","cfb0373a72a2d8b007d2194aca032b0d"],["D:/Blog/public/SpringSecurity/index.html","9cdc5b4285465a17d7d6158603566d6c"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","c7d16d3b6555c320b247635632977d2a"],["D:/Blog/public/Spring架构/index.html","59e178af770fec676940bbff6de972ac"],["D:/Blog/public/Spring的作用域/index.html","98765537d38ede17ac2f63ae91ab7686"],["D:/Blog/public/TCP-IP/index.html","3638788ba192c0db5ee87f971900d7b2"],["D:/Blog/public/Thread-pool/index.html","c861058ac3a5b80bc5a14664dbe13f9a"],["D:/Blog/public/Thread/index.html","b1dd1e7154c7f5e7f5c36d7733ae27d3"],["D:/Blog/public/Unitest-framework/index.html","d4c1e96bd4b91477549f708c7984c135"],["D:/Blog/public/XML/index.html","af931739b4a1bcfb757920224b12183b"],["D:/Blog/public/XSS跨站脚本攻击/index.html","8d0de618db14784b47774f1fd1f25e9a"],["D:/Blog/public/about/index.html","29c4b6209ad0122c1c3d1e44cdd094fd"],["D:/Blog/public/app-test/index.html","1304a7cf95cf214004a63b2df3adf872"],["D:/Blog/public/archives/2019/01/index.html","044bb0e3b6646e7bbbf307176288d5a1"],["D:/Blog/public/archives/2019/07/index.html","f56722d973f25de8b89670fc6616dff6"],["D:/Blog/public/archives/2019/12/index.html","2e6af39b6a1b5d54d9478b53c0092ced"],["D:/Blog/public/archives/2019/index.html","125d8b1fc0abca33cd0009c20a4113d6"],["D:/Blog/public/archives/2020/04/index.html","f733fa2024889628e2e49e56e066ead8"],["D:/Blog/public/archives/2020/05/index.html","43a3b506ea605f55681b69b8c1da16aa"],["D:/Blog/public/archives/2020/06/index.html","7413bd9dc7426f0d623d1fac03828219"],["D:/Blog/public/archives/2020/07/index.html","7efee9f03eb22cd14d2f9798c82ca3b7"],["D:/Blog/public/archives/2020/08/index.html","bd173e752059fd08e94671cb42a73922"],["D:/Blog/public/archives/2020/09/index.html","6ff585f5d331418d6b038e21ba01e4e0"],["D:/Blog/public/archives/2020/10/index.html","d8c72607a54c3cec25c33a5cd7f37894"],["D:/Blog/public/archives/2020/11/index.html","a758f02f54da70f401eb02fe162c7072"],["D:/Blog/public/archives/2020/12/index.html","9741ff06f47c63e75e04486d0509fcb8"],["D:/Blog/public/archives/2020/index.html","462502971693bf3d110c96d3e126573b"],["D:/Blog/public/archives/2021/01/index.html","14fe263e13cd2501a6aa2f9e0e8ccb86"],["D:/Blog/public/archives/2021/02/index.html","c1d951ff3ee2b0fa1b295bccb36f6446"],["D:/Blog/public/archives/2021/03/index.html","19b505cde44573e3c183bb717eb88e2f"],["D:/Blog/public/archives/2021/04/index.html","0bef22c4d4a33ee9ce1650090a85f305"],["D:/Blog/public/archives/2021/05/index.html","35525aaf97d25091b0c40fcbfe11c169"],["D:/Blog/public/archives/2021/index.html","ffee88972872661c2bf1009ee39f8180"],["D:/Blog/public/archives/index.html","711f49284b139542b4878d3f1f54ee35"],["D:/Blog/public/categories/C/index.html","61e65515bac61eadf07e34e52462a130"],["D:/Blog/public/categories/SpringMVC/index.html","3a452bfd42344bde2f64ab0ad8402e7b"],["D:/Blog/public/categories/categories.html","f4f97323f4727d3b7ceef6897dcccb90"],["D:/Blog/public/categories/linux/index.html","e0cd991a3eca0822466fb61626eaf6ee"],["D:/Blog/public/categories/分布式/index.html","23e32dc75184a5be73c2cc8231bc7085"],["D:/Blog/public/categories/分布式/page/2/index.html","8a5fab8691d40b815311e028b39dee31"],["D:/Blog/public/categories/设计模式/index.html","f531734290de35eecd36366a23bd0c1f"],["D:/Blog/public/categories/设计模式/page/2/index.html","4e599537e65cd4200e39b92e357dbe96"],["D:/Blog/public/categories/高数/index.html","fb06aee7fccb2e735cc79150448b296c"],["D:/Blog/public/contract/index.html","0491cc102ea4be42c00a8f050d847d74"],["D:/Blog/public/css/animation.css","0774ce3600d4a9939462316a054b1160"],["D:/Blog/public/css/blog_basic.css","c62922d06e2ad9543491fd332807a331"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","baf1217f69837834920e86f7f2c60682"],["D:/Blog/public/css/lightslider.css","f022cddd07f77527797727c56fbb1e28"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","9c10f4faeda1d6600954e8d86a47656d"],["D:/Blog/public/css/style.css","9c10f4faeda1d6600954e8d86a47656d"],["D:/Blog/public/cycle-structure-programming/index.html","f8d4a9632102bcd8269538a863a1c593"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","726b06067d36751215002b7f789290b6"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/google8102e2f35ce9e391.html","71c8d321c8b48b72fbd727da51f71510"],["D:/Blog/public/gulp压缩静态资源/index.html","0b653c7ea1a1cf9a357de727ad6408b2"],["D:/Blog/public/head-first-hashmap/index.html","66a3df61b98a709d3b83583c4df8fbd6"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","259bad20f9e4bf8498948ade42b7d71c"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","8081497d9195bcddd760edbfaf37ce77"],["D:/Blog/public/improve-robustness-(2)/index.html","d37539a4587b41ce3709c67b37516485"],["D:/Blog/public/index.html","084a9463fc1590e22c70e69a3b0bd47c"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","7c145fae1f6f794a2ed90ac5c663a18c"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","ac067340f9998c4d8a3172ae39fd6662"],["D:/Blog/public/link/index.html","242de551f006ec7c5841dafbe19626fa"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","6f1e4d0418ddb6d78a01b5997090593a"],["D:/Blog/public/page/10/index.html","18103c18b2b0bcd515296622d818fe9e"],["D:/Blog/public/page/11/index.html","6bdc9091fad3c15713784ab0dee68fc3"],["D:/Blog/public/page/12/index.html","312f943d98753f761829a3c12581afa4"],["D:/Blog/public/page/13/index.html","d7e860cfd87579fef9c55a95297f4fc2"],["D:/Blog/public/page/14/index.html","9a1a6899d2170e8e82d8d38e0727d2cc"],["D:/Blog/public/page/15/index.html","7b7e7b4689d4a22171c338a5ff16787f"],["D:/Blog/public/page/16/index.html","be2adb02ce97928df3cf86d5c2ed8eab"],["D:/Blog/public/page/17/index.html","2674c90952618e3ae99f056d940a925a"],["D:/Blog/public/page/18/index.html","38affb2b54ee3c782fd9eafbc33e1547"],["D:/Blog/public/page/19/index.html","0da6ef20ecdfca0888985c008d6f1e19"],["D:/Blog/public/page/2/index.html","fa55c6bf0a09434db15401fcbab1b0ce"],["D:/Blog/public/page/3/index.html","c7ed010b35fda9639eb7850eef61d4b3"],["D:/Blog/public/page/4/index.html","317898e2c99e13289efc419d7e3b3dcd"],["D:/Blog/public/page/5/index.html","b022a395351c8ff6f186b7929aedd2d1"],["D:/Blog/public/page/6/index.html","814ac03a426c4daa0e6119607e7707dc"],["D:/Blog/public/page/7/index.html","f0d88948a76c3ed1487fe0147fe6bb30"],["D:/Blog/public/page/8/index.html","034af4177920803457ea424eb88f0828"],["D:/Blog/public/page/9/index.html","4e7537b6f0ac0789dcaaca5b73790143"],["D:/Blog/public/proxy/index.html","44f455ecfbc136ba7efa565b74282d06"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","cc0c794c042a12add31e54f67ecc39fe"],["D:/Blog/public/select-structure-programming/index.html","e2488a11d8a567d5ac4286c1877e112e"],["D:/Blog/public/sequential-programming/index.html","fcd4e0428852a69f88ca6f215d90c66f"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","59a71ab1d162cdb9e58d3f439cc6e53e"],["D:/Blog/public/tags/C/index.html","f02255b03119c577074524eb05d6a6fb"],["D:/Blog/public/tags/C/page/2/index.html","94261922af4374817079bbaa5c9f5e5d"],["D:/Blog/public/tags/Concurrency/index.html","1ea4b09e52d1ed484dc29068097c59e8"],["D:/Blog/public/tags/DesignPatterns/index.html","23e575e4e585595e3ee1427e931608b5"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ee7c079561a7a208f8b4bc40f71da243"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","b04404fac36e7ea594ef999460fb8ca5"],["D:/Blog/public/tags/DistributedMicroservices/index.html","00750cfa863e99435c897bbad2c24821"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","dfde923de16cc1404c21edc95c5f9c81"],["D:/Blog/public/tags/Interview/index.html","b85228dc613ed7710e384bad424fdf9f"],["D:/Blog/public/tags/Interview/page/2/index.html","48e1e956734ff8959ded0b84e201c253"],["D:/Blog/public/tags/JVM/index.html","ad76ac969c03cd2167a85427a2fb9f99"],["D:/Blog/public/tags/Operating-Systems/index.html","e81b0eab4cc2abb0c58cce01f99e37b0"],["D:/Blog/public/tags/about/index.html","d185ed05b5188877c881386dc10fff16"],["D:/Blog/public/tags/ad/index.html","d9e3805728243f299125266c46df9807"],["D:/Blog/public/tags/algorithm/index.html","8a9408d7f51c62f599c25c25a93b7334"],["D:/Blog/public/tags/algorithm/page/2/index.html","72f45cbb4c3f8d2a1b87484bc9d2a2e1"],["D:/Blog/public/tags/computer/index.html","7fd5b2b4b7e50d01404f8b36a902ba4f"],["D:/Blog/public/tags/docker/index.html","cb12ab5f4de21892b4479dc378cb139e"],["D:/Blog/public/tags/frame/index.html","eac4e8e26b54bb9f8899db9045d4476f"],["D:/Blog/public/tags/front/index.html","32af11160674cc8d62328e2eecfdf771"],["D:/Blog/public/tags/index.html","6cef23fa1a9f91ea0451b17b033bba67"],["D:/Blog/public/tags/io/index.html","fe6c4dcb4a612c0f686c437a7a5d7603"],["D:/Blog/public/tags/java/index.html","cd3c563fcd571f4ab348ca3ea54270b0"],["D:/Blog/public/tags/linux/index.html","acb725ab6e8a2687ee4b107b2c8361a8"],["D:/Blog/public/tags/maintain/index.html","e6b27ea6c5b6963d367340777c1ddf4d"],["D:/Blog/public/tags/math/index.html","31b1cee868b60a6839faebca6c4b5e3d"],["D:/Blog/public/tags/math/page/2/index.html","e94d7fbdb1076e11ab416aa9cbc281b2"],["D:/Blog/public/tags/middleware/index.html","c5021adfc911d18af43add28dee82baa"],["D:/Blog/public/tags/network/index.html","e6d09698bc9ecb44f8a8de655c06675e"],["D:/Blog/public/tags/project/index.html","da770beb7182fb8a3ce4a6a1896d677d"],["D:/Blog/public/tags/resume/index.html","053d869d76797b0a9694708b02acf271"],["D:/Blog/public/tags/security/index.html","97ba8ed48ed41980420741c1d5e0c039"],["D:/Blog/public/tags/sql/index.html","9a15b8301d8ca497b8bdcb6e16faa482"],["D:/Blog/public/tags/test/index.html","7bbd3e83f43ecc75d11399948179c085"],["D:/Blog/public/ubuntu-deb安装包/index.html","032ff90d7938bda8561ccf948ba38a3f"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","444a76ebe627e91ff8d0b3864104e322"],["D:/Blog/public/unix/index.html","8818990c8b7d5c8f9e81d49cd0dc8640"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","6ef85d8bb7f6b819f28b57a66fedc146"],["D:/Blog/public/web-test-combat/index.html","55bce876aca46e520fec6ce1d6d6d329"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","41eca4ab9774b7d068923664836431cc"],["D:/Blog/public/不定积分/index.html","8c37655bac2c0cc5685340955677dba4"],["D:/Blog/public/中介者模式/index.html","849fa5d2797fe1e7fe79bc6a09b0043d"],["D:/Blog/public/中英文切换/index.html","16c555472835d224020789e8c07a4bd1"],["D:/Blog/public/事务的隔离级别/index.html","f8f2446e278119f379d4ed94ad159f0f"],["D:/Blog/public/二分查找算法/index.html","7447057b2a73d8d8e3eecd7b0ad38eb6"],["D:/Blog/public/二叉排序树/index.html","f0e7c6a2d6fd81287988b8abd177339a"],["D:/Blog/public/二重积分/index.html","2ae70a94c9fa346c28b5ee06615f0a7a"],["D:/Blog/public/享元模式/index.html","faf26af3b0502f8abb56317e1b197af9"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","d9d910204cf3bc27a20d2b5e910b3245"],["D:/Blog/public/代理模式/index.html","575554bbf5198311b32a9f6075c76ff8"],["D:/Blog/public/依赖倒转原则/index.html","eb949f3f1f1a87ad0c0f3fc0a229c1c8"],["D:/Blog/public/偏导数/index.html","e1eba7ef2194c628df8f2602ed50767a"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","078f763e3a6620c33fb33f40e7d9d335"],["D:/Blog/public/函数作图/index.html","2991383e28af3b7290bf1a26900328ee"],["D:/Blog/public/函数和指针/index.html","86095262f2d25c218891b7c3ddeade4f"],["D:/Blog/public/函数的单调性和凸凹性/index.html","2a1445f21860128e1a29251b43221e36"],["D:/Blog/public/分布式的微服务架构1/index.html","6a54f7717db99f2f4ea7344fec95babb"],["D:/Blog/public/分布式的微服务架构2/index.html","98672ad74dfc04371d68541a168e6154"],["D:/Blog/public/分布式的微服务架构3/index.html","72d915f6578f537b759cd4d5dcd17d7b"],["D:/Blog/public/分布式的微服务架构4/index.html","05089b67babf467db31cca8140aa3ade"],["D:/Blog/public/分布式的微服务架构5/index.html","1aad08cea2892d33d48869b1d03cd465"],["D:/Blog/public/分布式的微服务架构6/index.html","6fa3acfc6288729256d66958cdf5a70a"],["D:/Blog/public/分布式的微服务架构7/index.html","9057a3f5a158d0c8562ecd3c6853dc8c"],["D:/Blog/public/分布式的微服务架构8/index.html","6fb4251a634c671b62edc782048f3599"],["D:/Blog/public/分布式的微服务架构9/index.html","ee51b06c737e63351447b1ca706b60d2"],["D:/Blog/public/前端安全/index.html","06703054289b918693fe1da2f46855e5"],["D:/Blog/public/动态数组/index.html","ce95ba0b203a79a9e3a95d94fe26ebaa"],["D:/Blog/public/动态规划/index.html","ba923ce8f8e371506fbdae067b404f3c"],["D:/Blog/public/单一职责原则/index.html","bf86e371d7df73ade9b7a1f10a54ee2f"],["D:/Blog/public/单例模式/index.html","bbd37a1f9775b76c277f2235a2ad04c1"],["D:/Blog/public/单点登录实现/index.html","9598b8c1ece0a1d8b5b414bc83814c12"],["D:/Blog/public/原型/index.html","885744acdeda6ab36c09378821627ee1"],["D:/Blog/public/合成复用原则/index.html","e648e2e5405871bee7770ef872dd3fb5"],["D:/Blog/public/命令模式/index.html","320471cd40f5cb1b8af0592bf315cb2e"],["D:/Blog/public/哈希算法/index.html","1e230784bcf71d479003edfe7a71cfad"],["D:/Blog/public/回文数/index.html","0febf10a4b91b6a40cbc7b8ff5b51c59"],["D:/Blog/public/图床/index.html","787b3bf6881d19d6b148f0bedde6a2f5"],["D:/Blog/public/堆外内存/index.html","5f88d405c4895e228bcba414a4706d57"],["D:/Blog/public/堆排序/index.html","f3a5cf9c6a56c98833a36504db029532"],["D:/Blog/public/备忘录模式/index.html","36b4dc92a0c87050f8a36e07d2170a1c"],["D:/Blog/public/外观模式/index.html","01e62db71baaffbae95d612293634a06"],["D:/Blog/public/多元函数/index.html","a92a15d13eab7d15b16241c66359680a"],["D:/Blog/public/多线程/index.html","c2a6d170afe7fdd87f5a36ff1711ddca"],["D:/Blog/public/定积分/index.html","7af423adf0fdb4f37183372423ef5234"],["D:/Blog/public/导数/index.html","74eba7e4484105108cd0edfefddeb7ba"],["D:/Blog/public/工厂设计模式/index.html","0c399b63ea20162580d9b4c4e6e982d5"],["D:/Blog/public/并发：原理/index.html","0c131bbb4d25bf0f50761188818128d1"],["D:/Blog/public/广义积分/index.html","004e5248a083b0047b5d1d208f74ffa1"],["D:/Blog/public/开闭原则/index.html","b596d57be8b9660be3b1d188bb2dc0d4"],["D:/Blog/public/微分/index.html","1a046cd72c20dbc999c0449b75259013"],["D:/Blog/public/微分方程/index.html","4d44a098853f8dc30b1eee34b897ef64"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","5d3567cb9b907cfc27669e010a7bb1e5"],["D:/Blog/public/接口隔离原则/index.html","bb4fc7369aebc4974ad97ddd086eeb50"],["D:/Blog/public/插值查找算法/index.html","1490045f11680eeb69f11a9df7311393"],["D:/Blog/public/操作系统/index.html","6216d30c4f5526caf2ebb1f38f6cf823"],["D:/Blog/public/操作系统概论/index.html","5f97ade2b83e9c4862f45cced3857243"],["D:/Blog/public/数据结构与算法/index.html","e1be12aa9d5e7d24e23a5ba3a72cd5e4"],["D:/Blog/public/无穷小与无穷大/index.html","5e9e16e384c9f37d263557f0e5388ad0"],["D:/Blog/public/极值和最值/index.html","1decb8019c29f19483b37e67fad23bc1"],["D:/Blog/public/极限/index.html","8802c59418f31d738d6406cfeb612286"],["D:/Blog/public/栈Stack/index.html","46741bf718b89cd47f325aab737e7d0d"],["D:/Blog/public/桥接模式/index.html","62484ab4b23bfb4cef1a23a0b3f43fa9"],["D:/Blog/public/模板方法/index.html","66cadda76dcd6caf53b9ebe612a7b380"],["D:/Blog/public/沙箱安全机制/index.html","4974acd682fe8c34790a5d8b0f8b0900"],["D:/Blog/public/洛必达法则/index.html","4b294d8534ce56f6c8eeeee27bb45a99"],["D:/Blog/public/浅谈IO/index.html","5841c1b1d709768e910ed5532976e565"],["D:/Blog/public/测试用例/index.html","9239b29d2647db795c23d8fdd4df852c"],["D:/Blog/public/状态模式/index.html","548ac3178d9779aeaae60865ce46cf82"],["D:/Blog/public/生成器/index.html","59a73ff45f077f6829b4c7027015936d"],["D:/Blog/public/策略模式/index.html","1c96527b79a2c62b7e48b67ad5b21853"],["D:/Blog/public/级数/index.html","64c4aac2f6a3b08ab14145c3881caefa"],["D:/Blog/public/线性查找算法/index.html","2e54393a17fb54445ce8c143ee8ad5da"],["D:/Blog/public/组合模式/index.html","e9b85703e4e6b903efb04fe18ccca037"],["D:/Blog/public/编码算法/index.html","06d4f2588b38d9ad12ff7597b2170b72"],["D:/Blog/public/自动化测试/index.html","c0ad685b29cc973aeddf66cadb5a0f44"],["D:/Blog/public/装饰器模式/index.html","1f01b6658de0e0e9d0c03abca5426f98"],["D:/Blog/public/观察者模式/index.html","96666a21708ce061bfb0ba0e731e38de"],["D:/Blog/public/解释器模式/index.html","27d542d604b99dc2a66fcf98cb8455fe"],["D:/Blog/public/计算机组成原理/index.html","9dec5f13c153d4ecd5373aa7fcc0b6df"],["D:/Blog/public/计算机网络-1/index.html","5f89f1bf16534e6f717c7d6a4bafd58c"],["D:/Blog/public/计算机网络/index.html","71fa6a3c4911cc054e5dc09ed402d46a"],["D:/Blog/public/设计模式/index.html","14f88f30f8057575c711ea2ac60868c9"],["D:/Blog/public/访问者模式/index.html","e8e0cd1932cfa57a44dccea4db9b9446"],["D:/Blog/public/责任链模式/index.html","aa7ce63b1f955d4b641767a07dc4825d"],["D:/Blog/public/软件测试流程/index.html","472603a1816087b10d222dd6bd9be7c5"],["D:/Blog/public/连续/index.html","81978d0b087b926996cd11f92149db4e"],["D:/Blog/public/迪米特法则/index.html","16500bc3656b74510eb3755ae3b1a2d6"],["D:/Blog/public/迭代器模式/index.html","f905fb4a739bc9651040c7e0e80e87ad"],["D:/Blog/public/适配器模式/index.html","a659866809a96f3612d8dfa5d008a481"],["D:/Blog/public/里氏替换原则/index.html","0eed7d62f18e5624483c565b793d04a8"],["D:/Blog/public/链表/index.html","d7e2e147500c4a061a142d3b7bec7d3e"],["D:/Blog/public/队列/index.html","17c01724facf0f9fc2c62ddbe6c6c9a2"],["D:/Blog/public/面向对象的特征/index.html","09136a35070a2fa30aba1286712439b5"]];
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







