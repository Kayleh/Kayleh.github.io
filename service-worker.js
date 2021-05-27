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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","d36ff203ec30c827c02b2a9d2ef81488"],["D:/Blog/public/7种排序算法/index.html","9aadf99fa0976d0990f06cf5523b8d71"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","0631802720c9c2542d737bd9ecfd5f3d"],["D:/Blog/public/AIO模型/index.html","fa7a7391b47059f5b83224388f4ab18d"],["D:/Blog/public/Array/index.html","5cc8a94437fdb77dd666c86837b439bd"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","74734e0e6b85f0f49e9651ec4637963f"],["D:/Blog/public/BIO阻塞模型/index.html","92de4dedbba21c7971a8363e59f8bf2f"],["D:/Blog/public/C-algorithm/index.html","8651258e82c14e81df4e53d14a6ca673"],["D:/Blog/public/C-prime-plus/index.html","a4891a817bf059d13defe2f907bb67d3"],["D:/Blog/public/C-programming/index.html","b2298f28aadf5337b375e45931687215"],["D:/Blog/public/CAS-and-AQS/index.html","21bc9fc0b8ace7c93bf09d93bd7c4aeb"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","81d3af23050cd5be163d15692410fc2c"],["D:/Blog/public/GC/index.html","a58352e230fe411c5e7824dcee6e3e89"],["D:/Blog/public/Good-use-of-pointers/index.html","f26268b1473282e2235ea496e8cacb94"],["D:/Blog/public/HTTP/index.html","13da04e914d1c5311d2f0026434de5a7"],["D:/Blog/public/Head-First-nginx/index.html","ac598715cfa8e4c5a2eee0d3d3a5731e"],["D:/Blog/public/I-O模型/index.html","afcf57365b01e9dfae575c783da39a78"],["D:/Blog/public/IO/index.html","2b4beab5819846d0882ff6db78b8f010"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","3db548be9ae19f2a89f1a7fd3e71ad9f"],["D:/Blog/public/Interface-test/index.html","40c62584d8f8e5d8b06708a0bb81590a"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","9894589397df7e881b1c5e16e1aa9e2d"],["D:/Blog/public/J2EE/index.html","8eb3a78556d06188f034834cb2327d1d"],["D:/Blog/public/J2SE/index.html","5a34f82737eccc2eed670ed1b9ff4f4b"],["D:/Blog/public/JDBC/index.html","d7e1c238e4a260d7e34b308112ba6c5b"],["D:/Blog/public/JDK/index.html","719d58d3240d0c8db0b9f725318be2ee"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","a1aa4b15fc387ada0e0d1ca1a11266e8"],["D:/Blog/public/JVM/index.html","060df805144d847a23cee9a93ebe9a88"],["D:/Blog/public/JVM垃圾回收机制/index.html","f4c32a4bc49c99057d75499f521504b1"],["D:/Blog/public/Java-memory-model内存模型/index.html","b7b8f818f536dc4f47f8e0916fb1df1c"],["D:/Blog/public/Java网络编程/index.html","b2df5616759c63324860d1b30b70509a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","918c9ac2d2847ad66d4bab8fba20946c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","04f02b23b09a124c83380fd33e02326d"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","a08524dd0317f0d4d579506ac67d61e4"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","b3e78b7294e2911f751960a365de84b7"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","416c5efb701a508cd9d7f9c7235afc4a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","cd2be7e92ff082ed198f32acbaeccff9"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","515565f921c66e4a81b737138824042c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","9440ee882e4f9ac84ff4e0115dd08356"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","ebadfdeca76b05f6df44613074c03bda"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","259d58cd5e2ee45da2a7ad429b0882ca"],["D:/Blog/public/Linux/index.html","bb3a1f771bc5ea2b98384ecd3d11e875"],["D:/Blog/public/Lock/index.html","6b4ddf1eb8dc8ded36d57e9ffd49a5ad"],["D:/Blog/public/MVC/index.html","b1f43b800ee7ede0591dcb907b386285"],["D:/Blog/public/MYSQL/index.html","1c9bb4f1487147bb99cb4b575118b173"],["D:/Blog/public/Mybatis/index.html","b9833fd8b6c65f0ec2c5d03b4f2d13c7"],["D:/Blog/public/NIO模型/index.html","463ba5e5b29e3aff888011ddd2de85b9"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","80528c3952db4d68e3fcc891b92d821a"],["D:/Blog/public/Native方法/index.html","91659d94c4fbcbef6901bc6dc071d322"],["D:/Blog/public/RESUME/index.html","a216101b91b102dc06993fa24e60fef8"],["D:/Blog/public/Redis/index.html","68fbd0ae4f735e4c55927d5feea3cf26"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","6d1b976bb19da510d15030d77f299550"],["D:/Blog/public/Reflection/index.html","1e7f13b92a8c4e66b658f2c47152f4ec"],["D:/Blog/public/SQL注入式攻击/index.html","eb4d787fd3803b52d0cf76cf3619f647"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","c40a08ea155c5ced38fda0e230fe4c42"],["D:/Blog/public/Seata处理分布式事务/index.html","e55f8c585c6b83a5b453aeb0fa24dc51"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","a9ff74fb3cc83ffe07c379a37568890f"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","905d606744c39662a8d7c55bea526a57"],["D:/Blog/public/SparseArray稀疏数组/index.html","aec4afa1593db08c63b2c70571aef1f2"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","93237798d554474316efe14e69e42fc2"],["D:/Blog/public/Spring/index.html","155229b889754aea19cdc46e104c200b"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","97b1c66cb0a9228a961ee3512070fe4a"],["D:/Blog/public/SpringMVC工作流程/index.html","884a8a9156da88bc3d80011f74b7a12e"],["D:/Blog/public/SpringMVC环境搭建/index.html","03ed9a7d29b1d5878ffbbbc286406ee9"],["D:/Blog/public/SpringSecurity/index.html","6c06e4b6f7fe5c17895f08683f4a940a"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","7c73f57e9604748bd5d18c6c645ed449"],["D:/Blog/public/Spring架构/index.html","14f462816de138bcd2287cb182f69211"],["D:/Blog/public/Spring的作用域/index.html","688061410bfd10788b17f915aee1bb7a"],["D:/Blog/public/TCP-IP/index.html","605a992d6a44549f0fcaa1fbf795b27d"],["D:/Blog/public/Thread-pool/index.html","9cd14354f075208d349502ad937e5a00"],["D:/Blog/public/Thread/index.html","8ccffe5d08b8e823a9c7b7af071457a6"],["D:/Blog/public/Unitest-framework/index.html","fea226dc145449b481e915e58199bfe7"],["D:/Blog/public/XML/index.html","4939bc75d39b19a80982bcd454030278"],["D:/Blog/public/XSS跨站脚本攻击/index.html","3b7e10393b99d7895f488e2d4456b742"],["D:/Blog/public/about/index.html","a3eaf23b7b125646e1e780c0b6d498ed"],["D:/Blog/public/app-test/index.html","61166ca924617ada42377169943dc7fa"],["D:/Blog/public/archives/2019/01/index.html","c5a8ab4a9595ca476f4a2d46cb80224c"],["D:/Blog/public/archives/2019/07/index.html","8691d97be44e56c79b0ae6e4daa5c4d3"],["D:/Blog/public/archives/2019/12/index.html","8efb01055c239c3a599ac99137e25910"],["D:/Blog/public/archives/2019/index.html","c2d13002b3ac28681979b8e9cf56f730"],["D:/Blog/public/archives/2020/04/index.html","1536ddfb16b7d14fd84d779039ecd65e"],["D:/Blog/public/archives/2020/05/index.html","28f1315c27d525f27915019218ced5ea"],["D:/Blog/public/archives/2020/06/index.html","183e286e904cd2c541673662efcf64d3"],["D:/Blog/public/archives/2020/07/index.html","3624d16541a83c1573171038c3fb6661"],["D:/Blog/public/archives/2020/08/index.html","899592bd562925689a06cc2dfd55f1d5"],["D:/Blog/public/archives/2020/09/index.html","75f7b5cd67ad46b4c0c32eed0bb69393"],["D:/Blog/public/archives/2020/10/index.html","12176edd7098f250c44a210960315858"],["D:/Blog/public/archives/2020/11/index.html","da9969f650dca3976973f9e6926d570b"],["D:/Blog/public/archives/2020/12/index.html","4d277381985b63d66205ca2f28c266f0"],["D:/Blog/public/archives/2020/index.html","7637372107276a1dbcfd517379152e0b"],["D:/Blog/public/archives/2021/01/index.html","d0a41163c27127839510cb86737c56de"],["D:/Blog/public/archives/2021/02/index.html","8ff2df56f03dec922d5bf2bded05aa64"],["D:/Blog/public/archives/2021/03/index.html","a7164db2c67c03c85c4a5bc59afee962"],["D:/Blog/public/archives/2021/04/index.html","ebc2ba9f669789cff95196e5ff01839c"],["D:/Blog/public/archives/2021/05/index.html","e748b81e0def48a3b0cb9165b61556d8"],["D:/Blog/public/archives/2021/index.html","bea00f14751627569b500ec43149f7d3"],["D:/Blog/public/archives/index.html","f39d905865dc92edbc148659775548ee"],["D:/Blog/public/categories/C/index.html","bc8d1ec8b34b7a34c8fd7dda2a47bd00"],["D:/Blog/public/categories/SpringMVC/index.html","6dba3bfe49e779f0c4e417a97847ad41"],["D:/Blog/public/categories/linux/index.html","1ac0f3d14251d99cf08a83032052a169"],["D:/Blog/public/categories/分布式/index.html","1f612d788c9e94a449c4b98437dd12b9"],["D:/Blog/public/categories/分布式/page/2/index.html","65b2b94d0450695c45104ac66ebe4e0c"],["D:/Blog/public/categories/设计模式/index.html","c3b15f83f5582da4356c23fdcc44c863"],["D:/Blog/public/categories/设计模式/page/2/index.html","b68e602bfc67c61a8e89678550b5a067"],["D:/Blog/public/categories/高数/index.html","c00e218d15084ef92da691c43863edd2"],["D:/Blog/public/contract/index.html","05e9080c158f61c96c7e105c468786b8"],["D:/Blog/public/css/animation.css","b2ffba7e710457548e54b9c3abbafdb2"],["D:/Blog/public/css/blog_basic.css","88d4d916351e03577e5acae960abd1a8"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","7581b5eb8f8558cf2b60a9cdcc0d9294"],["D:/Blog/public/css/lightslider.css","e029c186bd004e3e307d9ece43c551c5"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","c54233259a90a4100899d84d1abffaed"],["D:/Blog/public/css/style.css","c54233259a90a4100899d84d1abffaed"],["D:/Blog/public/cycle-structure-programming/index.html","daab0791dd8ec359fc319ae7cde94593"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","ad242901028340496ff7b944edefcf31"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/google8102e2f35ce9e391.html","ed9e0b6ac7566ffa6c71d955b4f3bf89"],["D:/Blog/public/gulp压缩静态资源/index.html","b6dd84ef381242bf778e34ef266fedad"],["D:/Blog/public/head-first-hashmap/index.html","df15df2bed7d5da781853007f91931cd"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","66c840baef9adf7e912cfeb9c277ad14"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","d7e1587f246d1d18b10a7cab018027cd"],["D:/Blog/public/improve-robustness-(2)/index.html","4c2326d6351683cf118dce8a84429291"],["D:/Blog/public/index.html","cbecb2c5da60f4cfdf0abce9149efcec"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","c363d60daf4ce859889676b14ea1369f"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","db4ef7efd7b25a0c590c594b3deb4288"],["D:/Blog/public/link/index.html","bb1a3c663de49f39fc58f73dac341905"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","4cb0f074d0aa39f223eeecb2ffb7e3f8"],["D:/Blog/public/page/10/index.html","4e767adda4d156cd1158b61ba9759d06"],["D:/Blog/public/page/11/index.html","a0f2bbc646ef85bb8096d9376cefeca2"],["D:/Blog/public/page/12/index.html","93ffcfaa63ac232c42b7c7ac96213a4a"],["D:/Blog/public/page/13/index.html","11499cb37a162cf72d6baaf3871fad46"],["D:/Blog/public/page/14/index.html","7ebf9aae1322a4ae88844d9d5164d2c9"],["D:/Blog/public/page/15/index.html","5a75b4d1f29cb49bb6125a2624db673d"],["D:/Blog/public/page/16/index.html","51d8f9f3f7d7acfdd5525b7e13d001b2"],["D:/Blog/public/page/17/index.html","22287111c5d5f27d8cb5e19c6cd5634c"],["D:/Blog/public/page/18/index.html","35ea03d8c68f7d9b558bb2ebf0cf7d1e"],["D:/Blog/public/page/19/index.html","0df65e86c166c86ba9f50cdf99baf29c"],["D:/Blog/public/page/2/index.html","1bd86cf23d02a51906d6383495c94d28"],["D:/Blog/public/page/3/index.html","002821f2032fdcee84985b896df9f090"],["D:/Blog/public/page/4/index.html","4be4e8c54869165edded93445d685892"],["D:/Blog/public/page/5/index.html","ab6c6965ddf1f0e66f1d559753362f59"],["D:/Blog/public/page/6/index.html","0add090a6d9742367f7e061d58e55523"],["D:/Blog/public/page/7/index.html","ec143aa3733b8021f19facca85c598fb"],["D:/Blog/public/page/8/index.html","0ad3425b2227ad1a7b059e858e814f1e"],["D:/Blog/public/page/9/index.html","fb66a7704c94aad3bda8afbdadcf6302"],["D:/Blog/public/proxy/index.html","c6c37009bd0143ec0d843f6d38b49508"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","0a25e1ee544ddb1cffc73539794d0070"],["D:/Blog/public/select-structure-programming/index.html","4ad7c4ae18cf879f50e882fb6fc02256"],["D:/Blog/public/sequential-programming/index.html","ee65fc181717a2c4100542a509491e93"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","273413a96fc62792d38f9e96edcfd47d"],["D:/Blog/public/tags/C/index.html","6426074369207ae53e943a87b0c8aa47"],["D:/Blog/public/tags/C/page/2/index.html","1724cf88ad0ba53f17ee49f0df0fbd16"],["D:/Blog/public/tags/Concurrency/index.html","9e58d433f81429dde3c121bc82449fac"],["D:/Blog/public/tags/DesignPatterns/index.html","720cd51de8c11c2e8d6aa1ecc94d96c1"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","f0f7a4896eb223c58db9da5dd5a6125e"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","e9f40b5a79e84c1b34dc86defc84b280"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9e46d4211679dfbb1b020ac0541bed12"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","eec89db40972784f1be0dd32ceb6ffb4"],["D:/Blog/public/tags/Interview/index.html","a697760947cfc676123f45ef2055cc02"],["D:/Blog/public/tags/Interview/page/2/index.html","9073fe595450182d9983fda3ca7d62b2"],["D:/Blog/public/tags/JVM/index.html","3046b14639fad968191be4f34742a89e"],["D:/Blog/public/tags/Operating-Systems/index.html","2c416c4d70b11768dbb8a2073b12c2b4"],["D:/Blog/public/tags/about/index.html","33960d507c720f46f69a03bafa48ea15"],["D:/Blog/public/tags/ad/index.html","dfb378db13b804483415d513514eac68"],["D:/Blog/public/tags/algorithm/index.html","d29284eff4a6d9c1aa5a10f4a8822b86"],["D:/Blog/public/tags/algorithm/page/2/index.html","eeea1ebe5bd485fe15a6e4481bb6465f"],["D:/Blog/public/tags/computer/index.html","18ffd9138ac827bc39bb17975a76a526"],["D:/Blog/public/tags/docker/index.html","57235d9a74d43ee6f45f9b3a0a07d0a3"],["D:/Blog/public/tags/frame/index.html","07848d100b33489cf56a91861d259fd9"],["D:/Blog/public/tags/front/index.html","fae7061c138b3ccd8ac89ad4e69f8368"],["D:/Blog/public/tags/index.html","f48fe66106b93f407b838851c1a279e4"],["D:/Blog/public/tags/io/index.html","81f535040fbaeb41e56e4ba289e632ba"],["D:/Blog/public/tags/java/index.html","1cae0124b2be6d39daaeab0c1bc037f1"],["D:/Blog/public/tags/linux/index.html","3ae5d636f02cda5bf3b9a40d08d0f3b6"],["D:/Blog/public/tags/maintain/index.html","0e8719800744c0dfc277d5567b407287"],["D:/Blog/public/tags/math/index.html","20644e6dbc39f1405b06586e74879d9f"],["D:/Blog/public/tags/math/page/2/index.html","0490979c0c556987bef9ea7e476974ed"],["D:/Blog/public/tags/middleware/index.html","7d6c6b22178f8c1a8cbe4270b5aab2eb"],["D:/Blog/public/tags/network/index.html","05ab8e05695b46e33d906d9112894de8"],["D:/Blog/public/tags/project/index.html","2135f6e79d7064f65028c44994df6beb"],["D:/Blog/public/tags/resume/index.html","f6b02d5080a0b1c5c0a5de6e55c7ba78"],["D:/Blog/public/tags/security/index.html","19b4bc76233933e7cdc6e53b5cca4e57"],["D:/Blog/public/tags/sql/index.html","0dd408ffc6b352e568ded0a74b4f1ea1"],["D:/Blog/public/tags/test/index.html","9b6fd96d0a3be4f27cf1b97188d63dd8"],["D:/Blog/public/ubuntu-deb安装包/index.html","c72a76eb44d881bc1996d57c718878e8"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","eb50e31866e948bc90be2d71ff48ee44"],["D:/Blog/public/unix/index.html","aa423c9b40e3429429724387125b7a0d"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","763756b9a5785431f447a1d2af0d31ed"],["D:/Blog/public/web-test-combat/index.html","fdf4521fdfb0923165a642ee61ad7375"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","53ac2c39464326efa86d11ac376e11f6"],["D:/Blog/public/不定积分/index.html","6e5fdfc6cdb6a40bd0905ed6bc6c0177"],["D:/Blog/public/中介者模式/index.html","b443485fdb667e18a0dcf2f9e0f28655"],["D:/Blog/public/中英文切换/index.html","f4fceb55d6deea8cd572c62e3f10f412"],["D:/Blog/public/事务的隔离级别/index.html","61ded9a96aede65814ab30372e47f404"],["D:/Blog/public/二分查找算法/index.html","1a99982951e656c80663aa1d18b7faff"],["D:/Blog/public/二叉排序树/index.html","b94dd55be415bbb401b2b847abafda26"],["D:/Blog/public/二重积分/index.html","cc5ca4d54077faa8026a5f09f676a102"],["D:/Blog/public/享元模式/index.html","53ca6cef2f3af0535a7b134ed2626d7f"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","b52074bb291dc67f467b3a65aafcd1fd"],["D:/Blog/public/代理模式/index.html","0507faf5a84f57db666918639b78cc90"],["D:/Blog/public/依赖倒转原则/index.html","ead2994824cc1b1b8dba0670a852c432"],["D:/Blog/public/偏导数/index.html","279aed3d6f2f71e6377a539d7e00dafd"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","d29f84c828b205a2619368d58c0b0ff3"],["D:/Blog/public/函数作图/index.html","fadfa40d198c8f8faf7e7029cc374d92"],["D:/Blog/public/函数和指针/index.html","713055e887d2a94a6cbd50a1d46f69ba"],["D:/Blog/public/函数的单调性和凸凹性/index.html","afeb1e866bcf5838b5ac6a52e6762a6b"],["D:/Blog/public/分布式的微服务架构1/index.html","7b7727721251110a070d9e0630f3b69d"],["D:/Blog/public/分布式的微服务架构2/index.html","44c59ac4206df739952ee64ad4825b06"],["D:/Blog/public/分布式的微服务架构3/index.html","d6fe0c63feb60002da180dc5df540068"],["D:/Blog/public/分布式的微服务架构4/index.html","21ca1ee507efd84b83f27b450d4177a3"],["D:/Blog/public/分布式的微服务架构5/index.html","4b8448658ba761ba97fb7c94ba60d24a"],["D:/Blog/public/分布式的微服务架构6/index.html","1103508230a130675a887dc0cd5731ad"],["D:/Blog/public/分布式的微服务架构7/index.html","7332a7256dc40e2bf35af0c302a7bdcb"],["D:/Blog/public/分布式的微服务架构8/index.html","7fe90f513227ff7c530952042abcf1e8"],["D:/Blog/public/分布式的微服务架构9/index.html","484e68d27d49f2d2a4afeff187add51e"],["D:/Blog/public/前端安全/index.html","26ed8ca137050cad9af6f3873824d856"],["D:/Blog/public/动态数组/index.html","0ce7347e686a1bf0df6e0e7ef31215d2"],["D:/Blog/public/动态规划/index.html","2ab0fe8e3124dbcf3e05a5aff1d2e629"],["D:/Blog/public/单一职责原则/index.html","5a0b53677f1a4e8fc3c844c0b89b1e23"],["D:/Blog/public/单例模式/index.html","164f6e6eda9c95d0cbe57ebf1cc103ed"],["D:/Blog/public/单点登录实现/index.html","7f1879372a969c8011678e4c58effe98"],["D:/Blog/public/原型/index.html","1a761c8f16065c8386f5d31928c1a098"],["D:/Blog/public/合成复用原则/index.html","5476e3101400689897941d9dbb4a6ae3"],["D:/Blog/public/命令模式/index.html","3e7913b722911fdd764ecbdd7a9356a4"],["D:/Blog/public/哈希算法/index.html","aa9fa0328ca78af09d73072afd9ed415"],["D:/Blog/public/回文数/index.html","fd5cf97a99f1c247a98e4201ab65a728"],["D:/Blog/public/图床/index.html","cbb3346b3253c1acc0b0710528e35db3"],["D:/Blog/public/堆外内存/index.html","693ff8e41ed12dbc6da3332acd043da8"],["D:/Blog/public/堆排序/index.html","11fadf18f866bca1c62e6ad67b667b71"],["D:/Blog/public/备忘录模式/index.html","1bea07f80b4b1d4d3fe72b2726b1074b"],["D:/Blog/public/外观模式/index.html","43632bcc3c3b7cc411b8ab33dd8c3c9f"],["D:/Blog/public/多元函数/index.html","64f3fac26738871622db7bc9037861a1"],["D:/Blog/public/多线程/index.html","74d2c32c6ba00b1ed1a857d52fa790ab"],["D:/Blog/public/定积分/index.html","1af93bc38bb4e0ee098b36550c25694a"],["D:/Blog/public/导数/index.html","5bd40538a5f57e3231ca5a758c988c4e"],["D:/Blog/public/工厂设计模式/index.html","77f921c2c05ae30d25d84161a13511ff"],["D:/Blog/public/并发：原理/index.html","ec052533010b5901ac12804cd4a7fd89"],["D:/Blog/public/广义积分/index.html","8736f52a0ef6b128797dcb6b1475382e"],["D:/Blog/public/开闭原则/index.html","abac29269c2d2b5ea02d4f3ea5147ff8"],["D:/Blog/public/微分/index.html","701a567dccce1938b12d037b02fd101f"],["D:/Blog/public/微分方程/index.html","87b69cbfb4f73364ecae2954d092f0ea"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","6cc2141372d53ebfcb3be2a3f6845813"],["D:/Blog/public/接口隔离原则/index.html","8aefd2c0a72fb454f74f8f03d0179ad1"],["D:/Blog/public/插值查找算法/index.html","d8276d429441cf9e5dd01bce4efe5015"],["D:/Blog/public/操作系统/index.html","970c04896f2e848119441e20fb6a9186"],["D:/Blog/public/操作系统概论/index.html","66cc8895e3e55184d32ca6588933c002"],["D:/Blog/public/数据结构与算法/index.html","2d5244a9a579a7083ad00f099b2c38d7"],["D:/Blog/public/无穷小与无穷大/index.html","caa539389bdc520da7849370f129c987"],["D:/Blog/public/极值和最值/index.html","0e54f6bd6042b37b9ae4329a230d72ce"],["D:/Blog/public/极限/index.html","ef54f6a814c5162a76c488fcfee182e1"],["D:/Blog/public/栈Stack/index.html","efab908de0c9d14e839a343688988b16"],["D:/Blog/public/桥接模式/index.html","ca41feaa6ec20c051ab69cf0b289696a"],["D:/Blog/public/模板方法/index.html","64398a91f9dfcf218d93b9464862787c"],["D:/Blog/public/沙箱安全机制/index.html","6f57129b2e37ceea9ea88aecf76f9dd1"],["D:/Blog/public/洛必达法则/index.html","09d343bcf8e95f62e2016d3c08599879"],["D:/Blog/public/浅谈IO/index.html","4fb493071d69cd8ed872b6cd51ef56c6"],["D:/Blog/public/测试用例/index.html","59d5a0d70722a14c7f5a91e1e7db5476"],["D:/Blog/public/状态模式/index.html","cc13e93eb3b2942b36f2b7ee1c3663f0"],["D:/Blog/public/生成器/index.html","4ed0fde39050b848140089c162d5beaa"],["D:/Blog/public/策略模式/index.html","eee50bc308075756d74cdc74f26f54fb"],["D:/Blog/public/级数/index.html","120ed6d1f40a04924cf753a2e21ff93e"],["D:/Blog/public/线性查找算法/index.html","f9b82a7028152a793edeba5250ecfc87"],["D:/Blog/public/组合模式/index.html","b0e75bf3da591863d901ce83cc6d2bca"],["D:/Blog/public/编码算法/index.html","e861b33161e37c1af3851c125cf5f1d2"],["D:/Blog/public/自动化测试/index.html","d8a295a601d02479d93535ce38d8c0b0"],["D:/Blog/public/装饰器模式/index.html","250d7c31165035876d72f6004e9bd328"],["D:/Blog/public/观察者模式/index.html","f64a26c52254a32c4f426adf00f42f3a"],["D:/Blog/public/解释器模式/index.html","4544b682f398c9f79ecefa653c6be2c8"],["D:/Blog/public/计算机组成原理/index.html","d38209cd26ee64f2b8cae339d46683c7"],["D:/Blog/public/计算机网络-1/index.html","2839bab4c8212fb32b036d9edf192c3d"],["D:/Blog/public/计算机网络/index.html","6ea080e59480f3d256996e36b95a60f7"],["D:/Blog/public/设计模式/index.html","36c139c98a30018189d2c26105be4b3e"],["D:/Blog/public/访问者模式/index.html","708fb246c92ab661490b9e94e7a9d417"],["D:/Blog/public/责任链模式/index.html","8732690266830af787295d49c3091e65"],["D:/Blog/public/软件测试流程/index.html","a3589e25c014db29a4f240ad1008031b"],["D:/Blog/public/连续/index.html","83a35537231f795a0cc10bab535ee2c9"],["D:/Blog/public/迪米特法则/index.html","dfed82997c00cd42f1a9e042e92bf871"],["D:/Blog/public/迭代器模式/index.html","eb540b71bc586bec661b6d655e0208c8"],["D:/Blog/public/适配器模式/index.html","192ac9c52dfe7a28cb90be14dfe2dbc1"],["D:/Blog/public/里氏替换原则/index.html","96c8eb8299cc0a19a1e989c4fb8599fa"],["D:/Blog/public/链表/index.html","0d8d1cf394b4418b77c1fd0d30b9daa3"],["D:/Blog/public/队列/index.html","91e587a471ad171b2b603885433c69fe"],["D:/Blog/public/面向对象的特征/index.html","8ae3f57427dedd66a570d22d1890cd28"]];
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







