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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","21d71b065983da0208ba88ec535b5852"],["D:/Blog/public/7种排序算法/index.html","b94884e4148fd8a5d616411926c4470f"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","fd0c1d74365e40f2ca595b34edfedcb4"],["D:/Blog/public/AIO模型/index.html","db381c46b7a68b5d11443b40dfe5c041"],["D:/Blog/public/Array/index.html","23853c85b6c0b6fbb529e569c9b3f10b"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","dc82c09af21c1da96eea0d6f970ee231"],["D:/Blog/public/BIO阻塞模型/index.html","c39aadda3b324d8c92aabd7ad6300a27"],["D:/Blog/public/C-algorithm/index.html","7324f44cdadc1ea559a87d61aaba32e7"],["D:/Blog/public/C-prime-plus/index.html","2731bc82887301f6a7a3170be810a75a"],["D:/Blog/public/C-programming/index.html","601a93194c5bfbac678429b95a74b526"],["D:/Blog/public/CAS-and-AQS/index.html","4881e385f1ad3283e8d78568c65cdec6"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","a174ee034ee6dca637e3f23899e9728c"],["D:/Blog/public/GC/index.html","c24a00e07bf22cee1d235cdb98fd2dcc"],["D:/Blog/public/Good-use-of-pointers/index.html","784346f6b98419479908fb11ee9dc4a7"],["D:/Blog/public/HTTP/index.html","0d96d19f60d1095415700e72ead80d92"],["D:/Blog/public/Head-First-nginx/index.html","c4bbca63cbe8c37a5430f9fe951b399c"],["D:/Blog/public/I-O模型/index.html","aba6490fd5966d1575e50c016c1aa4d4"],["D:/Blog/public/IO/index.html","8195879bf21a81f3f1c6f45625bd6e14"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","d9a2465f8932cf2fd6340e0676c969c0"],["D:/Blog/public/Interface-test/index.html","cd1ae6b8da8275710be6fd0c31683e2a"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","5bc2e141b235dd9976d05c2fbd6024f6"],["D:/Blog/public/J2EE/index.html","55056aba7fee5be17ebb1a662cacc4d6"],["D:/Blog/public/J2SE/index.html","d1e9db55b7a1026dd906042fec7deb28"],["D:/Blog/public/JDBC/index.html","0e3fc1e23b50d45d93a4ab5397d496ba"],["D:/Blog/public/JDK/index.html","8bf214a5165ef255d024451237d68979"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","4b230b5fc00ff77b5776c0d8e0969faf"],["D:/Blog/public/JVM/index.html","7d5e6cb2bbf42faec5ad6f070ab9f6b2"],["D:/Blog/public/JVM垃圾回收机制/index.html","69e87f792d63c9df08118dc67b444d3f"],["D:/Blog/public/Java-memory-model内存模型/index.html","5dd450954f34f003fec11b50558848d8"],["D:/Blog/public/Java网络编程/index.html","b46746d55f4587ebd6b941de46864b6c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","ed61ad8c55ef1423e67443727699c992"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","b396e6cc17570dc4c765144bcce90b1f"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","dd3d14675baf81897ce90717a9a19c9b"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","fe3a97480997593d6af07f2c6a4cc1cd"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","8db3856f0b4ce624a34931aad29cdc9d"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","f94a47838e2e533858de109d911bd0cf"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","b10a1eafa30018feac0df8f9a9269246"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","cb2ccc4314652779706ab91956bb9336"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","21fd12cb3f20aa4eed2722471b0d724d"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","1e44f76e149c5f6f4b5d16460c76e288"],["D:/Blog/public/Linux/index.html","2d1493ce8785d320a7ac913361761368"],["D:/Blog/public/Lock/index.html","d76e388ae6169f875cd0d0ef20430ed5"],["D:/Blog/public/MVC/index.html","7fb526673ab76cc3d8c27100d1729e57"],["D:/Blog/public/MYSQL/index.html","3e6d7549b82c9e48018d4f13c2d54922"],["D:/Blog/public/Mybatis/index.html","626f7606e09a0cc0bc334248b9f4786a"],["D:/Blog/public/NIO模型/index.html","63a6aed0a4ee2ef3e79015f80a99ea9e"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","348bd6f2230417d2bc2c4198b116ec55"],["D:/Blog/public/Native方法/index.html","01f9e7d2f2291e3178788065185d2365"],["D:/Blog/public/RESUME/index.html","bb27fb7c7f62813f63081ff6d529f071"],["D:/Blog/public/Redis/index.html","01620ea85f39e641a4bf2d29393934fb"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","050976e1cd9f18efa42c651067927354"],["D:/Blog/public/Reflection/index.html","7f28d4fa81dc5ff07fe5c87a38195e1a"],["D:/Blog/public/SQL注入式攻击/index.html","f2bf7bd0d0eb1c54c253e5753c39fa13"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","187b8d22177f4f42e02d2ca5513c4974"],["D:/Blog/public/Seata处理分布式事务/index.html","83252c64af7e6df535dd1aa1068b8e29"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","928e688c04d9903048843fac81c9f76b"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","91f09b2f2e6a0f5ffdf90544ddbbc41c"],["D:/Blog/public/SparseArray稀疏数组/index.html","c197b206ba01a11b6a13ff0f1a891d33"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","5a2d66c3cee2170eef54d5869798ca92"],["D:/Blog/public/Spring/index.html","50ffd5a73879b92f1acd6d2c2edd6128"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","4662140373caf738be7f5c5f3b57e19b"],["D:/Blog/public/SpringMVC工作流程/index.html","fd08d684f6f5824d6a8c5283410ac0c9"],["D:/Blog/public/SpringMVC环境搭建/index.html","68408161f37ba11b14ae04a8cbe6705c"],["D:/Blog/public/SpringSecurity/index.html","85ab3323014eb0037d2bc9a79e6e4af3"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","f4771dbc4dc3a1e8d1c0effa8b8fd0d9"],["D:/Blog/public/Spring架构/index.html","97baa7f97f297a0b2dbe44a3ea78d26a"],["D:/Blog/public/Spring的作用域/index.html","ba301324682f097bb2483fff663dac70"],["D:/Blog/public/TCP-IP/index.html","4c6efb431fc1548dfa4301e77aaafda5"],["D:/Blog/public/Thread-pool/index.html","ee865977ae5fc80e730c7f56ecd5dc35"],["D:/Blog/public/Thread/index.html","e035416fc106416fc6efac295d79bac4"],["D:/Blog/public/Unitest-framework/index.html","eaef3ad9592779a650c10b137a005e4f"],["D:/Blog/public/XML/index.html","8059647455c57f53e1046098bc47bac0"],["D:/Blog/public/XSS跨站脚本攻击/index.html","a4e17683b06aaa4e52810e8a93dbc7b1"],["D:/Blog/public/about/index.html","cc23aab71a6ecf7672ac124943147deb"],["D:/Blog/public/app-test/index.html","d82c3aa1b592ca726186d5501b3c393a"],["D:/Blog/public/archives/2019/01/index.html","962858fe5812df1df2b319a3e67bd509"],["D:/Blog/public/archives/2019/07/index.html","298118965ff3b251f09746ba629abdad"],["D:/Blog/public/archives/2019/12/index.html","bf80823d80b395c292b614ca574c84ee"],["D:/Blog/public/archives/2019/index.html","e6fd9aa307533e6d13ce35f752fdddee"],["D:/Blog/public/archives/2020/04/index.html","f19f3be389ca5bfcef8efb6ee81bf3a6"],["D:/Blog/public/archives/2020/05/index.html","6cf4bf77bf6d73fdea06078a02c3c1c1"],["D:/Blog/public/archives/2020/06/index.html","1d2f29826b66dd873f3825d7e444efc5"],["D:/Blog/public/archives/2020/07/index.html","8aba050b88958e907f54682c9ccc63b7"],["D:/Blog/public/archives/2020/08/index.html","5b1dcd6ddbf6c3c7f3c22338130d3227"],["D:/Blog/public/archives/2020/09/index.html","06a1978e5a93e7c11e5ed19fa3e1f4eb"],["D:/Blog/public/archives/2020/10/index.html","ae1da73756fc9594a25e35bc71392164"],["D:/Blog/public/archives/2020/11/index.html","a03c3c2b15c135dde257c856089324fb"],["D:/Blog/public/archives/2020/12/index.html","28d63688046f6941b307ae4a87752ca0"],["D:/Blog/public/archives/2020/index.html","ac4337e3169f01a26287cdcf40898bda"],["D:/Blog/public/archives/2021/01/index.html","75274cc44c8e42a6890ff27a037e24ba"],["D:/Blog/public/archives/2021/02/index.html","4de6fa0e9f65300e3a8766285a6f9534"],["D:/Blog/public/archives/2021/03/index.html","0d84b9ff6922ce961399961b7663258c"],["D:/Blog/public/archives/2021/04/index.html","0ea89297a3828526d3c3c5e2e3de4f14"],["D:/Blog/public/archives/2021/05/index.html","f7b39cef76fe3ca3f36886754f4530f6"],["D:/Blog/public/archives/2021/index.html","07a50ace4d307c8acb0ad21f70b9b882"],["D:/Blog/public/archives/index.html","80512ddfea050f3ebbb1e36ea9777bd4"],["D:/Blog/public/categories/C/index.html","d950e89216df19b208a554cf463f4879"],["D:/Blog/public/categories/SpringMVC/index.html","dc6e35a4debfd5b2f89447b84ce75843"],["D:/Blog/public/categories/categories.html","1d3adaba82bd7398c4b0edc8e3b6309b"],["D:/Blog/public/categories/linux/index.html","c1c333f7f2e35058b8e4a04e364ab34e"],["D:/Blog/public/categories/分布式/index.html","622c7d863853de837cc6aa8e255f92d4"],["D:/Blog/public/categories/分布式/page/2/index.html","7ec7402a4157a800ad90336c226b449a"],["D:/Blog/public/categories/设计模式/index.html","f87fd22748cabb4baca6c6d8c3b5f1ae"],["D:/Blog/public/categories/设计模式/page/2/index.html","8b5b2c24dd8de6d092f522424af14b60"],["D:/Blog/public/categories/高数/index.html","25e6f6eae68e6dfccd82d6f000dd50dc"],["D:/Blog/public/contract/index.html","0d2a3732dc272571b78861a393f90bcf"],["D:/Blog/public/css/animation.css","6da519f8dc9508826a1ac351f9f34b42"],["D:/Blog/public/css/blog_basic.css","cf54a219190ae1cc6f7997dccf5e77f0"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","7051b3509c56d0f85aff86eb105246e7"],["D:/Blog/public/css/lightslider.css","97887f054ea70f74d6149867e59cbaa2"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","2412031985909e93c592acc44f2643c8"],["D:/Blog/public/css/style.css","2412031985909e93c592acc44f2643c8"],["D:/Blog/public/cycle-structure-programming/index.html","66472ec0cc0c3b47220139c5f110c57c"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","77e842fff02ec8f213055ba06d1ea014"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/google8102e2f35ce9e391.html","9241e4f9aedc3f74093094ed2cdcd866"],["D:/Blog/public/gulp压缩静态资源/index.html","7897d1d137f1b4342bedd30edb2b8797"],["D:/Blog/public/head-first-hashmap/index.html","c7bcb891863405750f31a30ce72a4134"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","db0ed37f208e0acb1f57ecf711ba3555"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","e38f08d1c489d1672c28648465aa9082"],["D:/Blog/public/improve-robustness-(2)/index.html","428769d25f0503d7e4a4222e2cc6ca79"],["D:/Blog/public/index.html","5f581a80db949fa34712ead7576fabb2"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","7c145fae1f6f794a2ed90ac5c663a18c"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","1c55927da5a468c608fc03995795fc4a"],["D:/Blog/public/link/index.html","861d5c19c6f77038c6e70d08240a0911"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","08feb4b9aaae29e29dfc7607e08dddd6"],["D:/Blog/public/live2d-widget/demo/login.html","5ba2e109b92d08f3266006d8f35958e7"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","fb60c5c4b128561984dca438546a0b9c"],["D:/Blog/public/mybatis-缓存/index.html","c2d62e00a49398275d53d1d08cc3c0d8"],["D:/Blog/public/note/index.html","903ad0477ee027e2146ee320a0e3a77f"],["D:/Blog/public/page/10/index.html","771d276ccb2c8d4286fa904ff8812e15"],["D:/Blog/public/page/11/index.html","03e6f8b9071839f942b0f0875b621812"],["D:/Blog/public/page/12/index.html","624c56ae50659e6982cc900800d6da12"],["D:/Blog/public/page/13/index.html","6a2ae2d14b855d0ca224ef6375454751"],["D:/Blog/public/page/14/index.html","e1762501e36d1da5f2a79f3bf05198b6"],["D:/Blog/public/page/15/index.html","a3ad92d927c95632678617b4b49b39ab"],["D:/Blog/public/page/16/index.html","082e7e1bca25489836954e26a324715f"],["D:/Blog/public/page/17/index.html","39ff1a071692b184e22d339d8d072d27"],["D:/Blog/public/page/18/index.html","ac383647d57b1618a2d712387f656942"],["D:/Blog/public/page/19/index.html","17bdb56680ecc1c8a989932a709a0dab"],["D:/Blog/public/page/2/index.html","28380cf0cbb8e0d3e1c1afcd549409e0"],["D:/Blog/public/page/3/index.html","56b4807dda3449e3d3bd47d392f4f3dc"],["D:/Blog/public/page/4/index.html","f2e19bbd8b98b4bcdc408df9fdc6cedd"],["D:/Blog/public/page/5/index.html","0c363ddd91b2fe65e52707865196902a"],["D:/Blog/public/page/6/index.html","cfbc3a91a4335dc91ba4dd1e03902d84"],["D:/Blog/public/page/7/index.html","de490d93c754d13639658e125f97b2c8"],["D:/Blog/public/page/8/index.html","7e139788393d44ece5540b14447beb4b"],["D:/Blog/public/page/9/index.html","7b4a185343c4037c39be5322dc0c7615"],["D:/Blog/public/proxy/index.html","b6df375e01b2ccc136045e4dedaaf434"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","a9284319cef8468007e89daf24d687ef"],["D:/Blog/public/select-structure-programming/index.html","5c98c75c9f48ef62bc857328185d5bf8"],["D:/Blog/public/sequential-programming/index.html","8053adb180940ebf4e08ae64374cb1f4"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","fb27634bd8557b0e48f5b0f03b755399"],["D:/Blog/public/tags/C/index.html","b6ce1995dfb6fce8ddd77673dc856efd"],["D:/Blog/public/tags/C/page/2/index.html","c3a245fdabb223ee1fb4b22c1679f363"],["D:/Blog/public/tags/Concurrency/index.html","ecee7982451d2d8f2fba1bac827987cd"],["D:/Blog/public/tags/DesignPatterns/index.html","cce2767f80a19ce4718c2d1b9bac4327"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","842eb9b3779f4bcc86a272b0ac6d61f2"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","782b034cd777029d01611b355025ac45"],["D:/Blog/public/tags/DistributedMicroservices/index.html","1e47f2e80d45e1487618e6eaa295cc68"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","0b7e35b4cf1572f68d20d7310153d09d"],["D:/Blog/public/tags/Interview/index.html","15c2e044bfd7d801b9a2071a00074213"],["D:/Blog/public/tags/Interview/page/2/index.html","4071e15f2d2a6d71c04d2335a9f6239b"],["D:/Blog/public/tags/JVM/index.html","db11b84ccc44c6655fcb4a7c4ffe341d"],["D:/Blog/public/tags/Operating-Systems/index.html","d765b909531728e886b305c4e27a096c"],["D:/Blog/public/tags/about/index.html","e2d665ca4c6d1f0de937851e3aed339e"],["D:/Blog/public/tags/ad/index.html","07ca7e32568bbbf935529be0cd352c4e"],["D:/Blog/public/tags/algorithm/index.html","2ab0c4c81684cb87d8f2d2ade317c764"],["D:/Blog/public/tags/algorithm/page/2/index.html","edcadaa19099e1883d7c9f4d95e2e7a8"],["D:/Blog/public/tags/computer/index.html","82e9e5401e981cdb504bffdcc4eb52e0"],["D:/Blog/public/tags/docker/index.html","1bfb6c29862c6a2dae77d35d53c30156"],["D:/Blog/public/tags/frame/index.html","4763a9bd593d9a0f01fb49bcc70aa7f4"],["D:/Blog/public/tags/front/index.html","42746650ffa43b99c36715127b0951a2"],["D:/Blog/public/tags/index.html","b84862485a0edc54cab6b14b49ca5d40"],["D:/Blog/public/tags/io/index.html","8c8bbc35992c0c15a817193b7451e082"],["D:/Blog/public/tags/java/index.html","e700552aa8d09c59b3586438ff34f88e"],["D:/Blog/public/tags/linux/index.html","92d7834fc6b5cd9b2c13742be618dc2f"],["D:/Blog/public/tags/maintain/index.html","4cfded70133eafd093ad43d91e7dbe9d"],["D:/Blog/public/tags/math/index.html","5e67dd774dcf0f38b9b94fc3263d0ee1"],["D:/Blog/public/tags/math/page/2/index.html","795cb780f814cc4ee1b26b2f443c922d"],["D:/Blog/public/tags/middleware/index.html","715dfc4b6bb9749591b64f1408dfc1b7"],["D:/Blog/public/tags/network/index.html","bd31cf56457284d51bdeea44ac16a8a1"],["D:/Blog/public/tags/project/index.html","0661b2bfa7ee4a91917f2ef3a6cee71a"],["D:/Blog/public/tags/resume/index.html","64fa418ffa7875b94d75707342fa5714"],["D:/Blog/public/tags/security/index.html","af3e8ac2935a34a8c43c0b582eb0790b"],["D:/Blog/public/tags/sql/index.html","c788190612b21587981cba516783f444"],["D:/Blog/public/tags/test/index.html","8823efd6dfd23a49e465914dc5116042"],["D:/Blog/public/ubuntu-deb安装包/index.html","293b5cd689ddb2f924d7088c2ee4ebb2"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","6417b5b52c0a3f787624da28cf3358e0"],["D:/Blog/public/unix/index.html","92096b2b2db2b3f66e94e760426b82f8"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","ef03bba241d977f3cc65b169a275eb6c"],["D:/Blog/public/web-test-combat/index.html","fa63e49cbf196e7a36ea6ee0c68d97d9"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","17a55f2b84326c73026ea85ae8717fe3"],["D:/Blog/public/不定积分/index.html","f9f5bee742e5931eee85b122cc352897"],["D:/Blog/public/中介者模式/index.html","8dbb81a5c0e3437f6be55a2b8a81c025"],["D:/Blog/public/中英文切换/index.html","27be93afb11126cb20175d3b03c6b6e7"],["D:/Blog/public/事务的隔离级别/index.html","d3cd15e202884589ef00af1e28de925f"],["D:/Blog/public/二分查找算法/index.html","94844776f72553bffe136a9337b45096"],["D:/Blog/public/二叉排序树/index.html","a39d75512d875df138332853556d4dfa"],["D:/Blog/public/二重积分/index.html","cc86d973870d1cfcdbd8e6fa2e85f9bd"],["D:/Blog/public/享元模式/index.html","0a690437718bd6bf4204634324c1d015"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","cba199d6f9c6667429e71599ae528a9e"],["D:/Blog/public/代理模式/index.html","5f6438462f0e4bb6c4d8239689cc8c72"],["D:/Blog/public/依赖倒转原则/index.html","927f781a90323008b24d32cc2bb62c5d"],["D:/Blog/public/偏导数/index.html","0f32fcf3e360bf92477821ea7e030ee3"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","34b06bcae19fcc13eee1228d6d8cdcbb"],["D:/Blog/public/函数作图/index.html","6158f87806058c76cdb5c4692ec59d50"],["D:/Blog/public/函数和指针/index.html","33b6fcffa74c9b4c599403e4972d2a54"],["D:/Blog/public/函数的单调性和凸凹性/index.html","f33ee3e1e00bc3cb849c5498669b634a"],["D:/Blog/public/分布式的微服务架构1/index.html","1c0590e57c7826486a6c3f333e156e7b"],["D:/Blog/public/分布式的微服务架构2/index.html","d8cc9fcaa4340e5cd3241fd7889958d7"],["D:/Blog/public/分布式的微服务架构3/index.html","5f5d1a9fb54478534ab0dba0c101e765"],["D:/Blog/public/分布式的微服务架构4/index.html","bcd2a4a8c9ecfa4fa0067a67227cc9ad"],["D:/Blog/public/分布式的微服务架构5/index.html","a0222a1356340e698c1794d650f2c1f0"],["D:/Blog/public/分布式的微服务架构6/index.html","0e3fbcd55f9cdd1344dca1c1cab862a0"],["D:/Blog/public/分布式的微服务架构7/index.html","6b508346428561b01b9a818f0910f3ad"],["D:/Blog/public/分布式的微服务架构8/index.html","30e2b6ec30f5ec49c66b7493fb69dfe7"],["D:/Blog/public/分布式的微服务架构9/index.html","096fdca82f430271647ce7f102703ad0"],["D:/Blog/public/前端安全/index.html","a0032cf077d6d6d83d9afecc8989f5b7"],["D:/Blog/public/动态数组/index.html","dffe9171ec1c6fc37d29faa23aa72371"],["D:/Blog/public/动态规划/index.html","8a4503336f837b008ab641314711127a"],["D:/Blog/public/单一职责原则/index.html","163229f18626d5bb995ec0a171e9c758"],["D:/Blog/public/单例模式/index.html","b2220e6ecd50b63f49d7683e689014b2"],["D:/Blog/public/单点登录实现/index.html","8ca94381d29b1a8376cbdf81ac344cab"],["D:/Blog/public/原型/index.html","9613d30ccc4df348442307901f4721e8"],["D:/Blog/public/合成复用原则/index.html","fd8b44be7e760a1b6856a52facf11f5a"],["D:/Blog/public/命令模式/index.html","c8e0efce9a339737ccd81f952b5c0b12"],["D:/Blog/public/哈希算法/index.html","44068bec45cccf0355604928fac0eabd"],["D:/Blog/public/回文数/index.html","d2818cee9dc6838f4c1aaf167b8c3b09"],["D:/Blog/public/图床/index.html","b6d6c2f88ef6a85246c330baad3820c7"],["D:/Blog/public/堆外内存/index.html","0e2d671c3bb412016d25a1fc2726f88a"],["D:/Blog/public/堆排序/index.html","2644a83d27e44d1eb2bd7bdb1f1cf48c"],["D:/Blog/public/备忘录模式/index.html","7992b8ba88e5d2119ca48207e7b32dfa"],["D:/Blog/public/外观模式/index.html","37186c50ba1472b820cc6f207dc47235"],["D:/Blog/public/多元函数/index.html","51da930ab2a42af8d6c3faca24dbb97d"],["D:/Blog/public/多线程/index.html","c9bce0cd70e5331465102d8396555c0f"],["D:/Blog/public/定积分/index.html","202d17be74981d45e730efc855b1e086"],["D:/Blog/public/导数/index.html","dd113c16b3dd578056c1e9c4103c73ed"],["D:/Blog/public/工厂设计模式/index.html","70c2ec8bcdca4b0b4e1102188ec51195"],["D:/Blog/public/并发：原理/index.html","178f8d481eefc6c7f4544d453bf689d5"],["D:/Blog/public/广义积分/index.html","4db765ef36571cac25fdf781c60623b8"],["D:/Blog/public/开闭原则/index.html","d7dc837a2255adf3b6e49b1b73007233"],["D:/Blog/public/微分/index.html","967447cc5284d39680d8057144dec5b4"],["D:/Blog/public/微分方程/index.html","711d114a8495f3865c07effccf962d0d"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","88ba273f0b3b00b09bc68c5b4f8e7588"],["D:/Blog/public/接口隔离原则/index.html","568cacc053d972de19b1026a0ec34659"],["D:/Blog/public/插值查找算法/index.html","1663f884b7a48434128b6950156bd4bb"],["D:/Blog/public/操作系统/index.html","82f6f49e52f363edd53f8473224d7dd8"],["D:/Blog/public/操作系统概论/index.html","c8836f5c0686dc87f1f9487bed4d4494"],["D:/Blog/public/数据结构与算法/index.html","17fc2b780584cc37652707b9d8a504c8"],["D:/Blog/public/无穷小与无穷大/index.html","62f9a1ded05652778c1c1366f90c2e7b"],["D:/Blog/public/极值和最值/index.html","b8990a9f018075a2fba14753cab06935"],["D:/Blog/public/极限/index.html","80b3446292e45f6b1d99a511c4d522fa"],["D:/Blog/public/栈Stack/index.html","4236598bdf036b86b59dd05cafe66610"],["D:/Blog/public/桥接模式/index.html","a12446c4755e3896b0782d0cef69e45d"],["D:/Blog/public/模板方法/index.html","50961cb77db42c5e566050c6de4488eb"],["D:/Blog/public/沙箱安全机制/index.html","90d53f7b0b0b54b2b4d3bab87b378fea"],["D:/Blog/public/洛必达法则/index.html","0c0a5ea1298751fb8afc414ff1fd2a95"],["D:/Blog/public/浅谈IO/index.html","baec9d8956bc2eadcef712b5c3a3ac28"],["D:/Blog/public/测试用例/index.html","b8d134b720bef3c7e47b576d82715adb"],["D:/Blog/public/状态模式/index.html","19cd29151fb84c5388f1726fcfc5613d"],["D:/Blog/public/生成器/index.html","2bcf950f1c1dbfacce98a7ffb4ef280d"],["D:/Blog/public/策略模式/index.html","122a32069e392cf98d15e35555c79a87"],["D:/Blog/public/级数/index.html","15ff2439b0cedb7d723ed8a95302d2c9"],["D:/Blog/public/线性查找算法/index.html","da7bd710e901850f370565f0a6b2dcfa"],["D:/Blog/public/组合模式/index.html","d62f5d04ebbd480545e9db97ca519fc4"],["D:/Blog/public/编码算法/index.html","4c645e5cb378c5b1e3152cb6c700a6b5"],["D:/Blog/public/自动化测试/index.html","5a146b057063e55a7483d6a73a1883fe"],["D:/Blog/public/装饰器模式/index.html","020e1a840f2be19cd42f090156cd5801"],["D:/Blog/public/观察者模式/index.html","d2c47645f387e537363eda773072d03a"],["D:/Blog/public/解释器模式/index.html","a07eeb22d3b9cff57648712c9d1f5232"],["D:/Blog/public/计算机组成原理/index.html","75094cd8c7eb96e9eb79204722f1e536"],["D:/Blog/public/计算机网络-1/index.html","cf0359790a7a2ec39d7f6db44f39ca10"],["D:/Blog/public/计算机网络/index.html","1466c3f18aef5bfd8324775044b3b473"],["D:/Blog/public/设计模式/index.html","587d8708f1421940d9e286c4eacb30e1"],["D:/Blog/public/访问者模式/index.html","d1eb234d9b68a591a2067a4d1b197336"],["D:/Blog/public/责任链模式/index.html","8f1979f868a9d2c1b11998cfad10bfe4"],["D:/Blog/public/软件测试流程/index.html","09ac911f973e92f230583fa20692fab8"],["D:/Blog/public/连续/index.html","f37d4c1f70cc9d5c5b25fb371f722359"],["D:/Blog/public/迪米特法则/index.html","5de7756c5697dbd4dae8c4d586e1eb4b"],["D:/Blog/public/迭代器模式/index.html","bc8426bd7792fe23b458e09f7f73c922"],["D:/Blog/public/适配器模式/index.html","17f0bee70adb68b978bb5f904e0ef737"],["D:/Blog/public/里氏替换原则/index.html","4124f76347b97ae5f31b4b7a7b5da046"],["D:/Blog/public/链表/index.html","340c21f2095c4e77abe5a99965b5168c"],["D:/Blog/public/队列/index.html","4452ac3ba2b7d18de524f2cb537c0378"],["D:/Blog/public/面向对象的特征/index.html","85456c49783f63092b2a35738459eac7"]];
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







