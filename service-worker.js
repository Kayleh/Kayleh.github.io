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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","feb848082cc97c0e3a27ae4f0bfe9c92"],["D:/Blog/public/7种排序算法/index.html","19acbf2f964fc574c8af17985b521763"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","a5c24c0ee6957c4f7700456f235acdb4"],["D:/Blog/public/AIO模型/index.html","30af32f06d49b803a0d45abd721b3251"],["D:/Blog/public/Array/index.html","440fd0705f01d7110dd65a195815ba7e"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","f4801bae7a1c625d2d581023e864c451"],["D:/Blog/public/BIO阻塞模型/index.html","f524c7c67101e3eb24fcb815bb236560"],["D:/Blog/public/C-algorithm/index.html","cec8d0a4724f7841eaf3e634db740df7"],["D:/Blog/public/C-prime-plus/index.html","2e133c3cfb3b6ce618f9c2b87853cc50"],["D:/Blog/public/C-programming/index.html","522ec478e5a0f51ea65500e5ae12c4a8"],["D:/Blog/public/CAS-and-AQS/index.html","57f9fc2d1046179798fd8c5cd1e2d1ff"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","19bb53c7bbe06ec58a3296c51cfb131b"],["D:/Blog/public/GC/index.html","3cb3ff574850061b3e52212dbf7050b0"],["D:/Blog/public/Good-use-of-pointers/index.html","041ebfbd1ef4a631bc9b32cd38b4d4f3"],["D:/Blog/public/HTTP/index.html","2cbb6c177318983bcbe20b85cc376d6e"],["D:/Blog/public/Head-First-nginx/index.html","a519f70ce3fe77bf38ec23e4b3be8d97"],["D:/Blog/public/I-O模型/index.html","b322137538600b1c915fdb82296cad5d"],["D:/Blog/public/IO/index.html","bb0ae3964fa1cf95c9b1407162b0308e"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","37d0416e0e23eba03e29194c8409adc4"],["D:/Blog/public/Interface-test/index.html","8efdde47c04969cc55acff00ca2f39d8"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","b80f83f28f046140591ca73ba1a414d1"],["D:/Blog/public/J2EE/index.html","b18df5c5adc2adf343e37ba843959bad"],["D:/Blog/public/J2SE/index.html","851890872c6e592bdea6bd0b930321f2"],["D:/Blog/public/JDBC/index.html","8fe6ddf9dce5f15695d908026d4ed32b"],["D:/Blog/public/JDK/index.html","7122b8b2b0e7e5f83919e09d609a2001"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","346f0342e00884897772294121bc06c5"],["D:/Blog/public/JVM/index.html","f73ef5ef6ecc5115db7a002fba67decf"],["D:/Blog/public/JVM垃圾回收机制/index.html","e84d943a5eccbb4527b2ef0b87e9f63f"],["D:/Blog/public/Java-memory-model内存模型/index.html","95c7a7df713d620df1f65ed1453f9d3d"],["D:/Blog/public/Java网络编程/index.html","cb3164d37dc785f94f2320fe8a5a0ada"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","132348518b7bcfd91adea60a5e38d4d8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","e50aa7fb82999b3008d82c7e6024dbbe"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","17d508d3f44ae57fcf68363bb311720f"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","314ca5c9cd7da896a377763cd75ef707"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","eb371b2f54a700455ebc0d78bb9ea120"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","ea92ab72a41b3329fafdc9cf89b6c7c4"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","a2a89ca66c4b5300a1256da456132f1e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","a7126c02dc6dc94c35895711ecc3ea18"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","f507a29eb08df9b0c3c97e8523865a56"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","551b808d98e519087c919fca260b0734"],["D:/Blog/public/Linux/index.html","6add0974f2c0e241dd7f8b64c06546d2"],["D:/Blog/public/Lock/index.html","bcaeaf67772d20b9b7e6890dc9050490"],["D:/Blog/public/MVC/index.html","481f3289137850f8d15744d8e788c350"],["D:/Blog/public/MYSQL/index.html","cd6c2975c018f1a1df917d0e93f3fc69"],["D:/Blog/public/Mybatis/index.html","0a7b7b131034633bc8faeb4044124b79"],["D:/Blog/public/NIO模型/index.html","b3ea2feee3cff6c5863ebdd71c1fb389"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","8d8cda4a5f3e88bfea65e107b48800e0"],["D:/Blog/public/Native方法/index.html","c47a583ba6986d837ad31c9ed44f52ca"],["D:/Blog/public/RESUME/index.html","5c1efaa7225df68478493457139a4d92"],["D:/Blog/public/Redis/index.html","41c37439a62818dea6aa025d3ae449c7"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","d1c29962cce706d4b9ff5b80d2e7ca4a"],["D:/Blog/public/Reflection/index.html","2f6437e02710bc6b7ba759347ca0a7aa"],["D:/Blog/public/SQL注入式攻击/index.html","90e59445d80ae125459a1c62e002c8c6"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","40cb8106420f0468bb6f1d76a6d113f8"],["D:/Blog/public/Seata处理分布式事务/index.html","c48f47f37d6af587b4b8ffa5ad3f5fe3"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","ccd26195cfcc5c98d1230e4988911c3c"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","0515f641b2416e916151861e659c4cea"],["D:/Blog/public/SparseArray稀疏数组/index.html","ae246b8c891e8a20ee2d1115f24b8fc1"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","23e2e82add66bea4c79d5f358df43db0"],["D:/Blog/public/Spring/index.html","32ecaac3284b2e18b14fb826a1709706"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","a0c1ad10a96f84103fe402ac5eb6daf2"],["D:/Blog/public/SpringMVC工作流程/index.html","5ae5ea063879f89ea9ce780355974f59"],["D:/Blog/public/SpringMVC环境搭建/index.html","f93bfc3b1e7b8fd47a33057bd12f3a64"],["D:/Blog/public/SpringSecurity/index.html","75aedf5c5e95b0c5154dccfd8652148c"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","8f069c8e753520425cabf5b5aa23dab3"],["D:/Blog/public/Spring架构/index.html","621a897f1f75e3cb8e7e7f6533ee7d62"],["D:/Blog/public/Spring的作用域/index.html","66ecaba43ce939fbfd619495f179c24c"],["D:/Blog/public/TCP-IP/index.html","4d53c838b21918acbf051c3fed7b26be"],["D:/Blog/public/Thread-pool/index.html","fe33ca6f237e775c42878f6c7bacd54a"],["D:/Blog/public/Thread/index.html","e6c0b4d112066e82d9e665a64596d637"],["D:/Blog/public/ToDoList/index.html","a65aef65e55e24e3553dcd3eea5e677a"],["D:/Blog/public/Unitest-framework/index.html","3f5da93860a42151ba6f92103844b991"],["D:/Blog/public/XML/index.html","a194c9118554ad291db5a778de3b0dc5"],["D:/Blog/public/XSS跨站脚本攻击/index.html","7075aef3e9b5a83c917fef75d1933ef9"],["D:/Blog/public/about/index.html","b60a779622a353ce565804818a06f0bf"],["D:/Blog/public/app-test/index.html","344c8b0eae3a5f26b53f8cdc6afcf74e"],["D:/Blog/public/archives/2019/01/index.html","d40a4d14bbb3e51c551e2c922c480f1a"],["D:/Blog/public/archives/2019/07/index.html","4d4735631e0515f1bf70748d89cf4486"],["D:/Blog/public/archives/2019/12/index.html","7978ee86150b3a0e9e32f57562daf329"],["D:/Blog/public/archives/2019/index.html","ed542d622e3ce57b3312b96b7446df17"],["D:/Blog/public/archives/2020/04/index.html","f45c44c07087772e7da5a86c618ed47a"],["D:/Blog/public/archives/2020/05/index.html","820916e8fd362827371888a0ff18c731"],["D:/Blog/public/archives/2020/06/index.html","65ca69eda47c7e9e3d14a5fb04562d1e"],["D:/Blog/public/archives/2020/07/index.html","47cf24265247e7877c663eb8268dda40"],["D:/Blog/public/archives/2020/08/index.html","b9c3c8038fce06922bcc18f74852327a"],["D:/Blog/public/archives/2020/09/index.html","338934212576f3294dd269693b85a2c6"],["D:/Blog/public/archives/2020/10/index.html","85d137069606619a8665fc1fbdc0f68f"],["D:/Blog/public/archives/2020/11/index.html","3413eb81d06e74ba8e2a823eed311b78"],["D:/Blog/public/archives/2020/12/index.html","9f9d19aaed96aa9d34752e8982ce618b"],["D:/Blog/public/archives/2020/index.html","126bc6a832e1a814fc3195d6ca7e48e3"],["D:/Blog/public/archives/2021/01/index.html","a928d4b4365baded37fac07dc09918c9"],["D:/Blog/public/archives/2021/02/index.html","83f990ceb798cfbdf30a15c25f464e79"],["D:/Blog/public/archives/2021/03/index.html","b15f61925323f0fa0b3401a6db61fe7f"],["D:/Blog/public/archives/2021/04/index.html","9a7ce8e9ec142a2655afb08d3844fc75"],["D:/Blog/public/archives/2021/05/index.html","bd2a2a4c6b951597dcc58261bde0c7ec"],["D:/Blog/public/archives/2021/index.html","b7dde6fb72b667ed423477ccf2e309de"],["D:/Blog/public/archives/index.html","4ef4752dc2bf11da75b50d9e78cf7d36"],["D:/Blog/public/categories/C/index.html","baaaf8bb376c3036eb73cdc201c363b2"],["D:/Blog/public/categories/SpringMVC/index.html","55a22a41ce3bf703c4b6363e7eac5064"],["D:/Blog/public/categories/index.html","2064f49504a01da30ec3aba252cd544f"],["D:/Blog/public/categories/linux/index.html","db909919775a3829bf834e919b3c29ed"],["D:/Blog/public/categories/分布式/index.html","88d12f9449c04465c7811e8f62eb8a44"],["D:/Blog/public/categories/分布式/page/2/index.html","6e5c6fb420fdd94cc0c8d16bb06a44b0"],["D:/Blog/public/categories/设计模式/index.html","0ce0b23df6bbdbe936bee4e4123a258b"],["D:/Blog/public/categories/设计模式/page/2/index.html","ef1ff2e975a607f29476892a06cf6ab7"],["D:/Blog/public/categories/高数/index.html","a9dce18c804e2cf7110d2b6127cb52eb"],["D:/Blog/public/contract/index.html","d5b96959944e96befdb7a2e38c88a440"],["D:/Blog/public/css/animation.css","9a3995bd59e92f620412861e96247277"],["D:/Blog/public/css/blog_basic.css","a1404c61721bade5ff1601a7b3220566"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","7088e29e51a8ec21488b6b4557e47d8c"],["D:/Blog/public/css/lightslider.css","799e4ae56e1e166c9d72a54408eb7c6c"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","2507852616927191a984086ef7c0eed9"],["D:/Blog/public/css/style.css","2507852616927191a984086ef7c0eed9"],["D:/Blog/public/cycle-structure-programming/index.html","ccd417633cd7b4487fff71ff2bc13221"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","c423b56e7219b42fa65e73a11e6360ce"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/friends/index.html","1589b7f105ab51877e618c1cdabc0f29"],["D:/Blog/public/google8102e2f35ce9e391.html","e52e0a4c48b33241da0f06b5a8326548"],["D:/Blog/public/gulp压缩静态资源/index.html","775b53d21e20bf2031c3aa41c59c6713"],["D:/Blog/public/head-first-hashmap/index.html","78e7ceacfa9c59c6fe634c105ed17e11"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","9f6cfe0856b55c7c605612f2dcdf5d2e"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","f10fc1bf3fb809e00e4181a0c667c36b"],["D:/Blog/public/improve-robustness-(2)/index.html","4d92c8b4643b1f23f9113533d2ae9d69"],["D:/Blog/public/index.html","84179a0fd09b1846981033bc97b6e819"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","c363d60daf4ce859889676b14ea1369f"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","4d5d2c3ce4d4230583c744f8ca616193"],["D:/Blog/public/link/index.html","a6cad35fa14fa416b3399dff4cdc55ba"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","8eb321f57353ca402345dff093a6aba7"],["D:/Blog/public/page/10/index.html","c9521ee919506f85972ab1a265b225d6"],["D:/Blog/public/page/11/index.html","8705e833af6efc1f204fc0a3b1c332ed"],["D:/Blog/public/page/12/index.html","136b84782decc09ecb6394908aef749c"],["D:/Blog/public/page/13/index.html","664c2b6aaaa9a3d04e76caa27fdc3fe9"],["D:/Blog/public/page/14/index.html","88bcc6be0af7acded4762458b676b61e"],["D:/Blog/public/page/15/index.html","a96de8f2a33e57e20437bdec701ddb53"],["D:/Blog/public/page/16/index.html","fbd2dfcc1af53d3aea57baccf109906c"],["D:/Blog/public/page/17/index.html","d8050a0d16f434731ced3a7cf15dfb77"],["D:/Blog/public/page/18/index.html","e4270196a338eeec1d0ccfab7f19c452"],["D:/Blog/public/page/19/index.html","a7da1d42b155fde0e6227f1b5518b2d1"],["D:/Blog/public/page/2/index.html","a5e96affb9aa1ccd5d4b96f3762f8ffa"],["D:/Blog/public/page/3/index.html","f416c3db98aa301983ac202136491455"],["D:/Blog/public/page/4/index.html","41989a0ba22b564f7912ec1d803ebdcf"],["D:/Blog/public/page/5/index.html","184073eae789bf98fb951eabfb70b1d8"],["D:/Blog/public/page/6/index.html","6baffe65bf42ed68af30c510720a66b0"],["D:/Blog/public/page/7/index.html","73e0cfb71e06adf3b71b29a768be849d"],["D:/Blog/public/page/8/index.html","2364db4e988b2edced0ceaa3efd2bee2"],["D:/Blog/public/page/9/index.html","e54e858b37241f45e5b9b0d10f78df2f"],["D:/Blog/public/proxy/index.html","51788054e97d2649f01964c20ba49d41"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","9b887ee68eacd8818c31f078683f1baf"],["D:/Blog/public/select-structure-programming/index.html","04783e29bd566c70ea758cbfea0e4ab6"],["D:/Blog/public/sequential-programming/index.html","57a7bd6e56ffb923a3e4940d94326aa7"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","4c67b396d24a1380ddf9060b39365693"],["D:/Blog/public/tags/C/index.html","7c2f1cbd85493fddd8f33354fa63918a"],["D:/Blog/public/tags/C/page/2/index.html","9d6fcdb0050a547d7c9e69b96e2a2754"],["D:/Blog/public/tags/Concurrency/index.html","5f86c313ce71ab18e6d9851cc11450f6"],["D:/Blog/public/tags/DesignPatterns/index.html","eab3add94079e62ee67b0b4bafcfaa75"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f8d5a88558fa50004c0c1656bbe0da83"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","281b5725bcbcf628a4074e5160b91fca"],["D:/Blog/public/tags/DistributedMicroservices/index.html","104e25f9f2c57b534f69eda1351bd9eb"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","0b308ea7858362349348ad978656f038"],["D:/Blog/public/tags/Interview/index.html","5d97e931ddf06e27a0f3dc2aad42fedf"],["D:/Blog/public/tags/Interview/page/2/index.html","ab6f2ff972d7fa5c2493049a7ca96df9"],["D:/Blog/public/tags/JVM/index.html","a8a94557790a4c0c9d1c5a9425fcadd3"],["D:/Blog/public/tags/Operating-Systems/index.html","2fae88d6fbe780b037bd3614d5ff04dd"],["D:/Blog/public/tags/about/index.html","ca36462b054a6f9d4df27dec26e0eedd"],["D:/Blog/public/tags/ad/index.html","753ef2cf02ce8e1a868bc39f1dbf5e1c"],["D:/Blog/public/tags/algorithm/index.html","24df7d0c980f1c64c2dfd15d48bb15e9"],["D:/Blog/public/tags/algorithm/page/2/index.html","2fb421aeda445a4d7b699783c4759d6a"],["D:/Blog/public/tags/computer/index.html","1afdf0ca0181c83faf73a1fc63642d7f"],["D:/Blog/public/tags/docker/index.html","d50d3ac921b83a22c30c57a9b5e36e68"],["D:/Blog/public/tags/frame/index.html","804235158bff00e15518fd892fd04780"],["D:/Blog/public/tags/front/index.html","9becc4f2f3dd1376a9a2d997e7497e1e"],["D:/Blog/public/tags/index.html","724a96a8443ecdd3c311aa82e9d382e5"],["D:/Blog/public/tags/io/index.html","a979819d2c5c27eb327200e1f46dcdd2"],["D:/Blog/public/tags/java/index.html","c01b8b5bbe0edb08305de6a47eef98a5"],["D:/Blog/public/tags/linux/index.html","f4fece762df03d6a1ec058ff68c25f6c"],["D:/Blog/public/tags/maintain/index.html","09ac08543e35c691ba73a4fb3a0e2be1"],["D:/Blog/public/tags/math/index.html","4b4e0949c20059712116cde9dacaf1d9"],["D:/Blog/public/tags/math/page/2/index.html","b2f12adca1f3f497ce2aeb8dc48fee3a"],["D:/Blog/public/tags/middleware/index.html","ca9a7c080cc7ed435e86ff71f2d1c9f0"],["D:/Blog/public/tags/network/index.html","4c2ac6eae6b7c4699a05c44b140e7fb9"],["D:/Blog/public/tags/project/index.html","dded145184234ab7332a44b1190a7e4d"],["D:/Blog/public/tags/resume/index.html","62ab24b78732ec79f58cfc447498d4da"],["D:/Blog/public/tags/security/index.html","bb2788653ce4ad847284d857e7495973"],["D:/Blog/public/tags/sql/index.html","bc91126c884f16b7d904b9b42a5b88c5"],["D:/Blog/public/tags/test/index.html","c9e692d90cd61b44af3cb5c7d80b1344"],["D:/Blog/public/ubuntu-deb安装包/index.html","17fc240804f9db1af61ffd380cd915a4"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","830c5d3a63dc7ebd04cace4cd1febc32"],["D:/Blog/public/unix/index.html","e2592db8d788a9a8e1f0f33d6edfe562"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","2324e7da3843d68c286c73ee1240bc69"],["D:/Blog/public/web-test-combat/index.html","87bbbc24a695875bc50d534616eb02b5"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","9fdadb4c8037a5e940592165e26c8586"],["D:/Blog/public/不定积分/index.html","372914b0da39325bab5d426a52b628b6"],["D:/Blog/public/中介者模式/index.html","684833374437b57bacd19e19b94bfcac"],["D:/Blog/public/中英文切换/index.html","606bc5afdf63765e24befd28377218e8"],["D:/Blog/public/事务的隔离级别/index.html","3ff142fd4b98c82c67447166d42c0f4b"],["D:/Blog/public/二分查找算法/index.html","803cd833707cc1362b990fc927612527"],["D:/Blog/public/二叉排序树/index.html","07ca45b004f5f5f21c94e1f1872ef609"],["D:/Blog/public/二重积分/index.html","ce320b6f491e00910e7d620e41c1b8c7"],["D:/Blog/public/享元模式/index.html","89ec800521fb3e3c5162abafebd85974"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","5d4282ca0233498e3c972de3bd937c65"],["D:/Blog/public/代理模式/index.html","aeb7d490f765f5657e82abfd97d3ace7"],["D:/Blog/public/依赖倒转原则/index.html","89fa4dea6f53f6392388cad968d3a26a"],["D:/Blog/public/偏导数/index.html","d59b2a8d9d1b112eab08d111f7ddea86"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","7327566e55bc57be2a731c3c323360a0"],["D:/Blog/public/函数作图/index.html","3f01e95609e948f231bcfed4cbc7da76"],["D:/Blog/public/函数和指针/index.html","4cbb173717b504f54779ecc140429a21"],["D:/Blog/public/函数的单调性和凸凹性/index.html","b0e9dcfdf41dbc892331927ce146fcde"],["D:/Blog/public/分布式的微服务架构1/index.html","45fbbf0d101edc946cb17c1f2d8e87ae"],["D:/Blog/public/分布式的微服务架构2/index.html","f0fae589d3ef4f8d449e5515e68bcc2b"],["D:/Blog/public/分布式的微服务架构3/index.html","bb8566b34f4d354d30d251ce05573ee3"],["D:/Blog/public/分布式的微服务架构4/index.html","da71d2e07a79684a9fcf462ca0fe9612"],["D:/Blog/public/分布式的微服务架构5/index.html","d82b2b33cd3907aee0818970a47fdd91"],["D:/Blog/public/分布式的微服务架构6/index.html","a0f297fa9e5c543648cf47fd365ec6b1"],["D:/Blog/public/分布式的微服务架构7/index.html","b2ee294a41d41d866d67218e69d3769f"],["D:/Blog/public/分布式的微服务架构8/index.html","a3f138c6d4cf203a92499931b6128b93"],["D:/Blog/public/分布式的微服务架构9/index.html","6f30e61df5142583f6607189316499a0"],["D:/Blog/public/前端安全/index.html","5d7b5cc0458a8a92bd06044f04cc2581"],["D:/Blog/public/动态数组/index.html","b5687a6a808f640259f899199cc70c01"],["D:/Blog/public/动态规划/index.html","989ec3e5e60ed9543420449411fcf570"],["D:/Blog/public/单一职责原则/index.html","58df74fc5ca015511e64052b8c77eb97"],["D:/Blog/public/单例模式/index.html","1e32f985eff0544e1215ceb07a510816"],["D:/Blog/public/单点登录实现/index.html","4e1d40d2f6f61450bb458bd00263d168"],["D:/Blog/public/原型/index.html","c0066ea9268450f0a643c897f3bc3ef0"],["D:/Blog/public/合成复用原则/index.html","ea0f770c487696d5ce5ee3ace5302a4c"],["D:/Blog/public/命令模式/index.html","2cc2cb772b5a3f6eb07f5c16ee4f42b6"],["D:/Blog/public/哈希算法/index.html","588f88c246a94dfec78fe27c1ec61f88"],["D:/Blog/public/回文数/index.html","a18e897bfcd797da2076ae9d416edd10"],["D:/Blog/public/图床/index.html","3231b70ca37e6030175ff507870f0866"],["D:/Blog/public/堆外内存/index.html","77050731965ca5212780049c4949dc11"],["D:/Blog/public/堆排序/index.html","6ea371dfcd17f432b295828936b0f020"],["D:/Blog/public/备忘录模式/index.html","9ea86326d30de9202d584336b37db68f"],["D:/Blog/public/外观模式/index.html","adc5a15ab29032827e21b4e0fd859336"],["D:/Blog/public/多元函数/index.html","175e21c7ca9c2ccca563332ffb1488b7"],["D:/Blog/public/多线程/index.html","ac3c9201b4169a814d2c9ee4ef54303f"],["D:/Blog/public/定积分/index.html","3c3e44c06d0a31ce9e646544d3bc4d79"],["D:/Blog/public/导数/index.html","94af6933b5f122cda12503d66e86af0c"],["D:/Blog/public/工厂设计模式/index.html","ffc2d9eaf55d386d8a2bc746f029902c"],["D:/Blog/public/并发：原理/index.html","d052ade398ada03497dbc690e109c32d"],["D:/Blog/public/广义积分/index.html","40ed234de340c46d1ef8799c6fbf00c3"],["D:/Blog/public/开闭原则/index.html","a913ce3d0a60c60f5f32fe1ebf3653ff"],["D:/Blog/public/微分/index.html","fc5b757803d3f4526be9e934f4ea33d1"],["D:/Blog/public/微分方程/index.html","c40fcd44bd8cc971b2ee2f7b9c6db54f"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","1d46197e67d1b64e4cf8e0c14e0bad4e"],["D:/Blog/public/接口隔离原则/index.html","f63fa8a32f2aa1624fe81d8437006ded"],["D:/Blog/public/插值查找算法/index.html","eb7dcf6db71d8c5577b50e3773216412"],["D:/Blog/public/操作系统/index.html","753a82039f6eed6c182a4b51b235d777"],["D:/Blog/public/操作系统概论/index.html","9b556ad5342793f4ba7cc3efba9bfcd5"],["D:/Blog/public/数据结构与算法/index.html","8a3e08e8c52cf9867a429504e8181e74"],["D:/Blog/public/无穷小与无穷大/index.html","dfc258c12b5110253fda712e0245935b"],["D:/Blog/public/极值和最值/index.html","1ebeb92b39dffac23be7039201fe835c"],["D:/Blog/public/极限/index.html","9d640518e6ddfeb4e1027d96a0626a78"],["D:/Blog/public/栈Stack/index.html","33da674a3fa8b1ba834dbe9890dd23bc"],["D:/Blog/public/桥接模式/index.html","a61686625281dea551ac7489ed590f64"],["D:/Blog/public/模板方法/index.html","efbf3ca25e468292bb5f361301a674e4"],["D:/Blog/public/沙箱安全机制/index.html","2001de7e66517e973084df41f12b8019"],["D:/Blog/public/洛必达法则/index.html","2532aed9bf463b4356e65f50523e3b81"],["D:/Blog/public/浅谈IO/index.html","fd08ea290d10e3a1a9ec37d42c3d81a9"],["D:/Blog/public/测试用例/index.html","cc43ac866ee5caaf4920928c3f9d55db"],["D:/Blog/public/状态模式/index.html","377433d3b1898c53137cee0a791b614a"],["D:/Blog/public/生成器/index.html","9fedffc33e351fed9fedce6f48ac0c0d"],["D:/Blog/public/策略模式/index.html","c929178250e3a4f7d6e3d6fc35ea63d6"],["D:/Blog/public/级数/index.html","4ebb2effb6f9fbd3fcdfa0bf17d99e46"],["D:/Blog/public/线性查找算法/index.html","d3b23c34235c48c89c8be0c6a7a6d5af"],["D:/Blog/public/组合模式/index.html","eba714ab143a5157c9d4871ca3fc4c66"],["D:/Blog/public/编码算法/index.html","b425cee27f21e96c107c5b97f57b1c44"],["D:/Blog/public/自动化测试/index.html","7065e4238acef6891eee4014a7535121"],["D:/Blog/public/装饰器模式/index.html","bb03ff2d3b784b3f40fe2b23b7919669"],["D:/Blog/public/观察者模式/index.html","3a644549398bd5371d85fb80f6123c34"],["D:/Blog/public/解释器模式/index.html","b7e766ffc04e4f6fac1925971ac55ed3"],["D:/Blog/public/计算机组成原理/index.html","2ab3727a1e1240f1d04bc79326d28263"],["D:/Blog/public/计算机网络-1/index.html","bea5f3c1da26bac67ea17a0f1fa0d427"],["D:/Blog/public/计算机网络/index.html","af060e68458555f934f6dd7ae126db7b"],["D:/Blog/public/设计模式/index.html","a00d355efbac5a05acc6f37b55b1e2be"],["D:/Blog/public/访问者模式/index.html","d4c08c0e90360c6515dde248c1b8b1f0"],["D:/Blog/public/责任链模式/index.html","aaa6332098689fb7a1bd1345ddc668f3"],["D:/Blog/public/软件测试流程/index.html","b9814c877c65e36f141a69eed56be8df"],["D:/Blog/public/连续/index.html","5a5a57f750a1b575799ef4e2e9d7ceb3"],["D:/Blog/public/迪米特法则/index.html","ec30523cc1552c9da731963fb4d8f1a7"],["D:/Blog/public/迭代器模式/index.html","be6fe5ea52e823c6dfb5a2929e0cb798"],["D:/Blog/public/适配器模式/index.html","ffd818d547632bba42a24ec25668357c"],["D:/Blog/public/里氏替换原则/index.html","041b7d7370bafb5ec440fe0960981843"],["D:/Blog/public/链表/index.html","c29ee4530cb162cb821e8021ec28f477"],["D:/Blog/public/队列/index.html","f29a2bad3c0a2da4472908150000ed4b"],["D:/Blog/public/面向对象的特征/index.html","e9f814700ef4fcb11c588f7a930956f1"]];
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







