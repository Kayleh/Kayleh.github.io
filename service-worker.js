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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","e3f48a4ebf889ba500705d112e7810be"],["D:/Blog/public/7种排序算法/index.html","7b76665b59ed93b7f6b8d80777dbdadf"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","f38d41d77da0120e9b551aa1c963bbb2"],["D:/Blog/public/AIO模型/index.html","b17ca9fe7a6030c316cacadd2d51b62b"],["D:/Blog/public/Array/index.html","fa59cf17887b95e57726d02c94b50fc4"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","bd7cc19880b80bac0d3a1c7f022b2dfd"],["D:/Blog/public/BIO阻塞模型/index.html","de7082942cb90446cb12ce51a3aceda7"],["D:/Blog/public/C-algorithm/index.html","131d90bbe98ae91706b6aa2bae505b02"],["D:/Blog/public/C-prime-plus/index.html","7d3acad7783b4e8ebb91968312d0e697"],["D:/Blog/public/C-programming/index.html","66218eee86024436b4f807deec0c431d"],["D:/Blog/public/CAS-and-AQS/index.html","cfd490dd219531ce6e9f98f8dc22d2cd"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","eb2af3fc9a165d4fb8f7827f5a39c52c"],["D:/Blog/public/GC/index.html","c334b99b6d8cde5c5daa22873067aa0c"],["D:/Blog/public/Good-use-of-pointers/index.html","ae1a5257a8e41f74f126ec96804d4949"],["D:/Blog/public/HTTP/index.html","2791d0eb5ae5007523fd1cbf811b56a1"],["D:/Blog/public/Head-First-nginx/index.html","f305af87e91b6258485e80c7c359b811"],["D:/Blog/public/I-O模型/index.html","3111fe2e41d8cb90c5c204aa2d5a388c"],["D:/Blog/public/IO/index.html","74f9f7c575dd8f33eab6bef04bebe512"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","f3f259b2694af620d40a99007aa009cf"],["D:/Blog/public/Interface-test/index.html","d07e78b4c2a866ded83e615ad2ba7844"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","2720caa8fbd84779d8f5971689471cb6"],["D:/Blog/public/J2EE/index.html","ff1aba86d9dab9bb7ee3567b7d64b3df"],["D:/Blog/public/J2SE/index.html","c796545ae2c49db8fd5bfdbb4be76934"],["D:/Blog/public/JDBC/index.html","31bda82dca50b1c3be024d72012e1a20"],["D:/Blog/public/JDK/index.html","e7a64148b7b189b84ce2d57728b82180"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","e6d9d6c7da1b3116961efb7df350d0b5"],["D:/Blog/public/JVM/index.html","1bb1d341f40f6712fc8993a66dab1ac6"],["D:/Blog/public/JVM垃圾回收机制/index.html","8ce8eafad812bb9e249dc8a03f18246a"],["D:/Blog/public/Java-memory-model内存模型/index.html","21a8caf6d4781c8274ead4705899e4b9"],["D:/Blog/public/Java网络编程/index.html","e9598115a7b04363d22c7e4332aeb6f1"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","76bd9483c78f397404c6200eb0414b8c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","8512bc4bee021dfda4d4ab20610c2eb8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","ba45fa14df01c0f67edb1de81d7e9af7"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","9d4a9c042f97189c0c9f0de5dc5208dd"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","6ec8891007871b945d03d77b45256b8a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","17b96b546e7d5b32bec6d33b918d9d4b"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","837d8702df50a16fefef893f3fcf4cb4"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","74453d6d756ccaa577393d936956a716"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","b7358d30b0670252fb66b22eac1fb828"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","a1f269e95c885b867ec821c2bf114388"],["D:/Blog/public/Linux/index.html","995883a560e626834e8160674294c2a1"],["D:/Blog/public/Lock/index.html","a27ce13a8e88ba6647c7f19a481f49a7"],["D:/Blog/public/MVC/index.html","1499db4ae81841c5ef40dd5b73e67e0f"],["D:/Blog/public/MYSQL/index.html","e32eebdb3083cc705ddd25ab64673426"],["D:/Blog/public/Mybatis/index.html","02fb433c63c74a8376bfc16776463806"],["D:/Blog/public/NIO模型/index.html","f46c7a8b8c860cdc36a59f8aaa3af65c"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","71b354be804db2d2ef31f360bff6e105"],["D:/Blog/public/Native方法/index.html","0f49bc93b040e66812f93de4d0552eba"],["D:/Blog/public/RESUME/index.html","4d612fb79d15991bdd98d4347584790c"],["D:/Blog/public/Redis/index.html","3302af34ac1ec0214adee034920a3d94"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","8fee86e86a629e4b45e422f6e73a74fb"],["D:/Blog/public/Reflection/index.html","79db988dcaeb45f88c3bff9fdd04c4be"],["D:/Blog/public/SQL注入式攻击/index.html","a040fd78a29b7ef61b36f23e3e4a57c3"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","b3646d4da47f6163f11edab6a9886671"],["D:/Blog/public/Seata处理分布式事务/index.html","f96ea2be3d51b91f19718859b95cfe9b"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","ba76cd7ec3567160d27faa147278ae19"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","3c8cfe40d26b4e0a61a25e5115cc9552"],["D:/Blog/public/SparseArray稀疏数组/index.html","c24a4f10173e236da2357c9894798c2c"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","06424fc2bee60f8db874a5530e740486"],["D:/Blog/public/Spring/index.html","1be5f2fdc1e09564d1613142285fbbc8"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","c0b38b4b8cac1d3a69bbee9cd854a57c"],["D:/Blog/public/SpringMVC工作流程/index.html","ac78ac9c04e3f070fbc772df818e97e7"],["D:/Blog/public/SpringMVC环境搭建/index.html","0a40fb2b6053dbca5ea04c435d26f851"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","8e124cf49630384e68ec9596900f7d7d"],["D:/Blog/public/Spring架构/index.html","63b06576ed1fa9a62a7ca22accc372fa"],["D:/Blog/public/Spring的作用域/index.html","1a63316f2f99f11c41740bb6d8782934"],["D:/Blog/public/TCP-IP/index.html","e22cec7440fbd497063719438592938c"],["D:/Blog/public/Thread-pool/index.html","a58202ec93a227b628fc653892a7018c"],["D:/Blog/public/Thread/index.html","7058d8fa99071efbb3026316357aece9"],["D:/Blog/public/ToDoList/index.html","116102f3edcad297bdb64f423c6fed86"],["D:/Blog/public/Unitest-framework/index.html","2950bee2298377f41d8e7527caf1e159"],["D:/Blog/public/XML/index.html","52562f942de2015fb11ad3611df3531f"],["D:/Blog/public/XSS跨站脚本攻击/index.html","3f898257396889cf9093e145a8da80fe"],["D:/Blog/public/about/index.html","32c2c11dffe1e234fd8d362d51b9b957"],["D:/Blog/public/app-test/index.html","3d69af009f0d8892d1120fd0dc537692"],["D:/Blog/public/archives/2019/01/index.html","6cc6f9e271115a01f44fef63a397a4b2"],["D:/Blog/public/archives/2019/07/index.html","ca23c727434909db07f0878b12210b51"],["D:/Blog/public/archives/2019/12/index.html","8d3207fa31fee6c5ce4b65fda606f5dc"],["D:/Blog/public/archives/2019/index.html","b34d82d5211fc18bc13c32d07c5c7d4b"],["D:/Blog/public/archives/2020/04/index.html","c13b9d729ba042419dd23bb343adfab8"],["D:/Blog/public/archives/2020/05/index.html","fd9ad853a9a3212bd10813c1c34a6456"],["D:/Blog/public/archives/2020/06/index.html","52ed82de138e2591d99c5380403f6186"],["D:/Blog/public/archives/2020/07/index.html","bc37c1c1a24f8c73717fbb705d98104c"],["D:/Blog/public/archives/2020/08/index.html","3e81f11bca90e72b036dde28033ec9ef"],["D:/Blog/public/archives/2020/09/index.html","ef8a8bc58c3ead8fa9f7626a73c5bb19"],["D:/Blog/public/archives/2020/10/index.html","40e5fd1c44284a9bf2580abd271375f6"],["D:/Blog/public/archives/2020/11/index.html","c918ca0951f6d1ee22283c17bcba4dd0"],["D:/Blog/public/archives/2020/12/index.html","48e6f9f2802a805146e7445a3884f45c"],["D:/Blog/public/archives/2020/index.html","67b3cde2237bc46625aa99cc414f66e6"],["D:/Blog/public/archives/2021/01/index.html","eb64794e92162417477494873ce6318b"],["D:/Blog/public/archives/2021/02/index.html","ecaa9b6bdb51d8e3d590a50016abe23e"],["D:/Blog/public/archives/2021/03/index.html","a0ef027ed8637f46076dadca0faef14e"],["D:/Blog/public/archives/2021/04/index.html","36f76482cedaf4dc4391e5d614466a41"],["D:/Blog/public/archives/2021/05/index.html","27965c8a599a389b2ccbc25786c94062"],["D:/Blog/public/archives/2021/index.html","30629a1f7696cc3402181ddf38926e55"],["D:/Blog/public/archives/index.html","b8f67d7d2b5c035a8a2bed319358fda2"],["D:/Blog/public/categories/C/index.html","e4421fff9f81ea61317701821e84b4e2"],["D:/Blog/public/categories/SpringMVC/index.html","9a22f5dae559bb2b21045db6adb4bf47"],["D:/Blog/public/categories/index.html","1154562a1cc0b943ee49dc3a034c238d"],["D:/Blog/public/categories/linux/index.html","d43caa4cb438cb466f31115a46606c94"],["D:/Blog/public/categories/分布式/index.html","69f7820c5f85801935c5a896d0ba47db"],["D:/Blog/public/categories/分布式/page/2/index.html","184e507414e898d94bafdc19b5fbbc00"],["D:/Blog/public/categories/设计模式/index.html","ed3f0fcf398fa1604dc26b10ee3fc99b"],["D:/Blog/public/categories/设计模式/page/2/index.html","c77c99dd72a5324e81a35c3f2112f445"],["D:/Blog/public/categories/高数/index.html","9c76f0fb8291f06f8ef6411bab06530d"],["D:/Blog/public/contract/index.html","f17664d0fa35e860b3511abb97209be1"],["D:/Blog/public/css/animation.css","dc61c3f874ceb8a31daee53c8db44635"],["D:/Blog/public/css/blog_basic.css","42dc7db2009dcdf8e2ee4e3935c728f5"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","3ddc03386107e31f1c0f57b63f646687"],["D:/Blog/public/css/lightslider.css","519627eee304020c0744da9f4c3014d4"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","921719fad2a370d14a93a4323eae8962"],["D:/Blog/public/css/style.css","921719fad2a370d14a93a4323eae8962"],["D:/Blog/public/cycle-structure-programming/index.html","64e9b440bd29bb082482beaf170ca46b"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","bf37955444bed15ebe618dc3b0f2130c"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/friends/index.html","c7e1eb5916592587c284c4362745705d"],["D:/Blog/public/google8102e2f35ce9e391.html","f49bf2c36082ec817772268a484d17b9"],["D:/Blog/public/gulp压缩静态资源/index.html","b443557e94c4d8f01c947fc84f624463"],["D:/Blog/public/head-first-hashmap/index.html","19d7b34981fc4d4c1a921d8f159fd1ed"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","d5343c39a08d9342fd42c68a604c5e58"],["D:/Blog/public/improve-robustness-(2)/index.html","5794798d14388f57f9bf848acabe921b"],["D:/Blog/public/index.html","c15de7284ddfd34cd55f96b5aa3ea322"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","c363d60daf4ce859889676b14ea1369f"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","efd8619b8739ccc43b9fe5ae25151e14"],["D:/Blog/public/link/index.html","7fe2d8a2a973b67cf5e2c05d28ba7edc"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","e7e72cc7fd4249743465c989553183d0"],["D:/Blog/public/page/10/index.html","681aad002feaa84a43b53586dffdca21"],["D:/Blog/public/page/11/index.html","24776914194d4abd89e4b0854bc5473d"],["D:/Blog/public/page/12/index.html","c487bafe47968a15ef9fdb84afb40665"],["D:/Blog/public/page/13/index.html","7d60cf03b7060915de56f11ad2b7ff4c"],["D:/Blog/public/page/14/index.html","3c2e2eec1901531313a1ad58d9b809db"],["D:/Blog/public/page/15/index.html","f18466502fa4b3acb8b30a9aa981cb4a"],["D:/Blog/public/page/16/index.html","0efaa3ce963ab6b8ed65044546df40b6"],["D:/Blog/public/page/17/index.html","0f98a7e3fe448266731cda7d50e5f8d9"],["D:/Blog/public/page/18/index.html","566470b752562142df2ae0c667a11e24"],["D:/Blog/public/page/19/index.html","78701265f0eb3a7f8ba8dde809cbe0cb"],["D:/Blog/public/page/2/index.html","b9e4f12c21a1a34098b3efd5ff8d83f0"],["D:/Blog/public/page/3/index.html","91be697c7705d7f60b9dcad220740fa6"],["D:/Blog/public/page/4/index.html","5d23ff31b52783eb4c37a2863eee03b5"],["D:/Blog/public/page/5/index.html","13dc9aaff7bf900d79c14ae80d6e4863"],["D:/Blog/public/page/6/index.html","c80a19b88128b34bbf1e85dc0c6aaab6"],["D:/Blog/public/page/7/index.html","9fea5b6b747966896360b445c91a8c89"],["D:/Blog/public/page/8/index.html","528c53392e0373cdc717c518848ec2c1"],["D:/Blog/public/page/9/index.html","6c751c6fc2e63c8c7a26686936b7d89e"],["D:/Blog/public/proxy/index.html","9bbc024e198c65a4c179ea22150000a4"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","e16fe0941d605ccbcb87a1387de4b79e"],["D:/Blog/public/select-structure-programming/index.html","3418178d40a48a791466e301c38a3aba"],["D:/Blog/public/sequential-programming/index.html","113d400b521167a8bf3ba91daf90ed0e"],["D:/Blog/public/tags/C/index.html","dbdc8db35c61d7bebf08eac2aedeb3c4"],["D:/Blog/public/tags/C/page/2/index.html","446586cd7ea2f2fc2dd22a437784e12b"],["D:/Blog/public/tags/Concurrency/index.html","6e67c2381ea9858f57b01f2f8143172b"],["D:/Blog/public/tags/DesignPatterns/index.html","8240f936afa26112f36270e52e19d22a"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","b8f532536aaccbc672baf7fd56188143"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","aaf349d74261c43b7c7f1bc8e23dac77"],["D:/Blog/public/tags/DistributedMicroservices/index.html","5879c88cacf0b2c991c3591f4da89249"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","db36fa800e8181ce43b3abb9d3d915fe"],["D:/Blog/public/tags/Interview/index.html","0ab890ead848ef91d87dc6ba8d623b4e"],["D:/Blog/public/tags/Interview/page/2/index.html","8087108eaab8bb719433bed7ae9b7d71"],["D:/Blog/public/tags/JVM/index.html","e99742b637159764f6ac0a9db334bed0"],["D:/Blog/public/tags/Operating-Systems/index.html","b794da3243ff4f93e4d6921acb900b98"],["D:/Blog/public/tags/about/index.html","92ac9d1eb7a950903afd0a9440577c27"],["D:/Blog/public/tags/ad/index.html","beebe9402f0e05f075c52337817c062d"],["D:/Blog/public/tags/algorithm/index.html","1884a1621a98fc6dba47af97a72cf139"],["D:/Blog/public/tags/algorithm/page/2/index.html","c1d0082a9c7521021df47250d88fc1b5"],["D:/Blog/public/tags/computer/index.html","ca400562ca9c3435a6741870e97639ff"],["D:/Blog/public/tags/docker/index.html","4b407552af9a8d65309c3898c0aad265"],["D:/Blog/public/tags/frame/index.html","9c37f84cc9b3683ce2f9c646583b6fd9"],["D:/Blog/public/tags/front/index.html","4a8ff909306cbd9279e1f91998f2850b"],["D:/Blog/public/tags/index.html","8c199b5ecfc7a9b2375eacc8d1da5168"],["D:/Blog/public/tags/io/index.html","281a274c8bab3ec8770452d8723c848c"],["D:/Blog/public/tags/java/index.html","e928cbba332ae6dd5d1eeb4760a889c4"],["D:/Blog/public/tags/linux/index.html","b3b72ff1968f5b5ee62937a202e3b67e"],["D:/Blog/public/tags/maintain/index.html","2241e8337d5d3b7306b211dee0161900"],["D:/Blog/public/tags/math/index.html","88bba83940007c34b5682b826a444a59"],["D:/Blog/public/tags/math/page/2/index.html","52e0dfe4c608582f9127b48b63187c52"],["D:/Blog/public/tags/middleware/index.html","d831ba21eb68aaf7d11a5170d9f63860"],["D:/Blog/public/tags/network/index.html","ac233138faed377912203b2c92ee1041"],["D:/Blog/public/tags/project/index.html","32c15f869a41ae90a81b6b50cada7970"],["D:/Blog/public/tags/resume/index.html","f3f73b981586916702f0711b2d66e513"],["D:/Blog/public/tags/security/index.html","653b4adf5fc1276f5017dd1351cf4475"],["D:/Blog/public/tags/sql/index.html","130309c1487e246caef4cdfbf0299964"],["D:/Blog/public/tags/test/index.html","246f62da652f7bf0b97e7286b9afabf0"],["D:/Blog/public/ubuntu-deb安装包/index.html","e219f7e59187dbbb15ccacbb8ba335cd"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","bd9e1aa21cb11ce3988cc5cdcf32a631"],["D:/Blog/public/unix/index.html","9dfe38d3eb09f10fa663841f4def6b51"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","d5baa718a4238bef8a435ef753a44ba7"],["D:/Blog/public/web-test-combat/index.html","38a1ed19463be56b6b1d7c49730b59ca"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","39545b71872ca94b77328de0d09f8372"],["D:/Blog/public/不定积分/index.html","d295c1dce72b25e28b462365493d75d7"],["D:/Blog/public/中介者模式/index.html","c6dfa426692e03d20a54ae6a44dbef84"],["D:/Blog/public/中英文切换/index.html","07d6e29162fb620619c081ad57a5a5a7"],["D:/Blog/public/事务的隔离级别/index.html","2b61af773b183af9163c7a1ba26a111a"],["D:/Blog/public/二分查找算法/index.html","578d26406b4a83b32f3c99272751372e"],["D:/Blog/public/二叉排序树/index.html","f95a5311d3724dddb726a698dae6fc0d"],["D:/Blog/public/二重积分/index.html","e7e6c6f0be2307d7e766b2f954077c22"],["D:/Blog/public/享元模式/index.html","4110c60ed83685c1811121a6c42a99f4"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","032cf8ba7fc5e638407bfea3b79d1c9e"],["D:/Blog/public/代理模式/index.html","dfa79b0c7c50a8ea5c5538c3d985352f"],["D:/Blog/public/依赖倒转原则/index.html","8aeb9f5c370ec0f7d8ac44e7d8075cc5"],["D:/Blog/public/偏导数/index.html","e98bfce6ec7c83e3ef5b87dfb28193aa"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","cc0979eb72abf6df603d01f0025fbcbe"],["D:/Blog/public/函数作图/index.html","12b21ee74169fd5f98c0030a9024865a"],["D:/Blog/public/函数和指针/index.html","020cdd3b9c946c6d2199b449a575b67a"],["D:/Blog/public/函数的单调性和凸凹性/index.html","e430ae09d4c5d4ea6409c94a6860072b"],["D:/Blog/public/分布式的微服务架构1/index.html","ac8a71dbefba2f5245477a4412a47e30"],["D:/Blog/public/分布式的微服务架构2/index.html","24388f96b2dd0fa084bd80289fbe3958"],["D:/Blog/public/分布式的微服务架构3/index.html","755c8f96932d8eb82ecc55d6586eb1f2"],["D:/Blog/public/分布式的微服务架构4/index.html","f60f3497e582b4ff7e25a8933c665036"],["D:/Blog/public/分布式的微服务架构5/index.html","1be41177b9b4a11ff817085c490f79ab"],["D:/Blog/public/分布式的微服务架构6/index.html","88f25bb841cef4f27c1eb85fe3fded4c"],["D:/Blog/public/分布式的微服务架构7/index.html","6cd9f0e0cf0934a631243021ffdb0afe"],["D:/Blog/public/分布式的微服务架构8/index.html","a63f340edace3660116557198418d659"],["D:/Blog/public/分布式的微服务架构9/index.html","124e1fe530dcabdf15bf94ab66487a23"],["D:/Blog/public/前端安全/index.html","ab02cf260d8bada4bb5667eac7e652ab"],["D:/Blog/public/动态数组/index.html","ce5ecf6d00f3ee40f1d81b3de6751bd8"],["D:/Blog/public/动态规划/index.html","d20064ac9a577ee76316f73699bcc8af"],["D:/Blog/public/单一职责原则/index.html","f0be54b5de73ef03869481c90fcf5cbe"],["D:/Blog/public/单例模式/index.html","85343cf0a82c903baabb7b95318d521b"],["D:/Blog/public/单点登录实现/index.html","8a8b07284fdada062f3836e350efdc0f"],["D:/Blog/public/原型/index.html","346b4d681180cfeee07b51a2607d03c7"],["D:/Blog/public/合成复用原则/index.html","cbf8a6b5e2249c144234cdffa3e25d5b"],["D:/Blog/public/命令模式/index.html","551d58474ef8607329a9dde29d9aecb0"],["D:/Blog/public/哈希算法/index.html","aced942343addda1afcb61ffd347ac81"],["D:/Blog/public/回文数/index.html","6711260f9eacb525c288c74e5fc11030"],["D:/Blog/public/图床/index.html","2262c854361c1150e63fce70b91c5f6c"],["D:/Blog/public/堆外内存/index.html","c06f358e0ff8633530211759e7a14385"],["D:/Blog/public/堆排序/index.html","d4dfe738df75280a56b02f78b6152c17"],["D:/Blog/public/备忘录模式/index.html","50bf6ba12341f7eee94d527ff4a11e7a"],["D:/Blog/public/外观模式/index.html","4220c2bbdf1fa316923e9db17f204550"],["D:/Blog/public/多元函数/index.html","b7a51894a678b59fd0585dbf858477af"],["D:/Blog/public/多线程/index.html","f3eb3d3c82deb4db052da2ae26e229f7"],["D:/Blog/public/定积分/index.html","9bd9d7511ae97009fdb8c870a572d1f9"],["D:/Blog/public/导数/index.html","e5ed07b16e1ba4947ad6ba980ebea401"],["D:/Blog/public/工厂设计模式/index.html","c3e7ebdb34219dd05e884faae0661e4c"],["D:/Blog/public/并发：原理/index.html","05771d037f6bb198b65c05942821b102"],["D:/Blog/public/广义积分/index.html","d1a07362200ae523d69d0a02f98412f2"],["D:/Blog/public/开闭原则/index.html","681f6e9775b53c8bdcd48ca100b5a6ee"],["D:/Blog/public/微分/index.html","7b6db214647f1740f22bdf318b8494d7"],["D:/Blog/public/微分方程/index.html","61832a34e68e2482529244f0ba7e5c91"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","0b191aa624c1190a75c89ab87b669fb3"],["D:/Blog/public/接口隔离原则/index.html","ca059e33fab91096e1b51be74309d1ff"],["D:/Blog/public/插值查找算法/index.html","c5d7385e1c91fb53d1faaefc0cd4b1a7"],["D:/Blog/public/操作系统/index.html","9f681568ad64d248644a232f136324f9"],["D:/Blog/public/操作系统概论/index.html","d04991143fdea04ebce50fafd9967034"],["D:/Blog/public/数据结构与算法/index.html","461f40595d0fec498787ca108bdefb44"],["D:/Blog/public/无穷小与无穷大/index.html","0d7dad2b10db739f3b9c057ced4a6f92"],["D:/Blog/public/极值和最值/index.html","fc50f8a8abea392229e8a568acdb8a3f"],["D:/Blog/public/极限/index.html","99ac14815e10bafb5c888753713ae4c2"],["D:/Blog/public/栈Stack/index.html","4add4838bec42da956ca1fb81e147eee"],["D:/Blog/public/桥接模式/index.html","95da5a44ba818dcc04dde1a9ddf2bad2"],["D:/Blog/public/模板方法/index.html","b826b482547ffa7643ae86d507380ea5"],["D:/Blog/public/沙箱安全机制/index.html","39e8c920194c462dcbe8fb2786c89363"],["D:/Blog/public/洛必达法则/index.html","af67d2076fa12aea79b4bdac09fe400b"],["D:/Blog/public/浅谈IO/index.html","46fbd6e45b2859cacb84eb23ead70db2"],["D:/Blog/public/测试用例/index.html","0c4afc84c312962893af02e0a690a5b9"],["D:/Blog/public/状态模式/index.html","cf6919eb6f0a39981ccb06f580a29680"],["D:/Blog/public/生成器/index.html","e122e2ec3038edade25148bdccd56bbe"],["D:/Blog/public/策略模式/index.html","ca2851ce33f86dbc972851a13bf16ced"],["D:/Blog/public/级数/index.html","0038990489fd68fff2b9177c632a91be"],["D:/Blog/public/线性查找算法/index.html","294faf5e68e7eccc8bcba47b73f61b59"],["D:/Blog/public/组合模式/index.html","05fbd2cf5b5c637a27778d2ae9baf49a"],["D:/Blog/public/编码算法/index.html","3756cbb1a66f34c5e8b90d6d34eb97b3"],["D:/Blog/public/自动化测试/index.html","a75b9f57e73a1403390c586363c7a83e"],["D:/Blog/public/装饰器模式/index.html","4dd5d7a133f0bfbe60818b0a95189b57"],["D:/Blog/public/观察者模式/index.html","d0067077f8e83e98ecbe27a3790351ea"],["D:/Blog/public/解释器模式/index.html","c6b28107ed911d37b6e29ea969a02762"],["D:/Blog/public/计算机组成原理/index.html","4c256d79f881abe756e8f4132d6086bd"],["D:/Blog/public/计算机网络-1/index.html","593b55e5b5fbb02a8d6e44fc3531bfde"],["D:/Blog/public/计算机网络/index.html","340d39f0532013d10fe41ebc63006fed"],["D:/Blog/public/设计模式/index.html","039cfd7253fdd5cd0e575dcefec1fd2b"],["D:/Blog/public/访问者模式/index.html","03f0bc81d0c848f5c594cbf5e6879473"],["D:/Blog/public/责任链模式/index.html","c6724263d7b731643c1232640e61c9e2"],["D:/Blog/public/软件测试流程/index.html","2c02ae4af2de83a594c081c155c5df13"],["D:/Blog/public/连续/index.html","938826e7050dbda969388a0f563cd66e"],["D:/Blog/public/迪米特法则/index.html","957f353dbbc11fce5112b8cbdef0c602"],["D:/Blog/public/迭代器模式/index.html","8be5dba862f1f2296ee6fe1f28eba7ab"],["D:/Blog/public/适配器模式/index.html","ff01d815ba73cea4be0db3bb6b9d981e"],["D:/Blog/public/里氏替换原则/index.html","a9578b7e74417e08b1bf570061602638"],["D:/Blog/public/链表/index.html","b700ddd2871e2b1095a284314e0ac0b9"],["D:/Blog/public/队列/index.html","89c23d821854d5f5318194c24254f23f"],["D:/Blog/public/面向对象的特征/index.html","127b43769eeaf9f4601d3c424827e964"]];
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







