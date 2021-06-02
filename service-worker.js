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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","2d832cd21e1caaa1e401288b62cb1f36"],["D:/Blog/public/7种排序算法/index.html","1fdc648ee1011705cbbf9658c5d3c446"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","1dca5c8ab5a98abfd6160a44bb7d7163"],["D:/Blog/public/AIO模型/index.html","0e3c79575084e1ca941b5177665921cf"],["D:/Blog/public/Array/index.html","674f2de452137c51eb742e1ba418942b"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","49152449a9e103061666c266e141ddfd"],["D:/Blog/public/BIO阻塞模型/index.html","ef6ff7eaeda401b29905bcef72fd1833"],["D:/Blog/public/C-algorithm/index.html","ed76c90e820388688ed57f4ee14fe1c1"],["D:/Blog/public/C-prime-plus/index.html","6db361594ca13d69c76f9b9e953c133c"],["D:/Blog/public/C-programming/index.html","b534357d65ac6f4d2301750377f9aafd"],["D:/Blog/public/CAS-and-AQS/index.html","baa603925788ccbd93e3398007b7ec5f"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","9c0a116e3675b9cd78ee61624e73d542"],["D:/Blog/public/GC/index.html","95f81c875a1e5b39ea11a742fc9d62b1"],["D:/Blog/public/Good-use-of-pointers/index.html","0393b8245cc0ac27411583862ec4936f"],["D:/Blog/public/HTTP/index.html","8ef3c659653b2a2a2f5bf6f339ec37ae"],["D:/Blog/public/Head-First-nginx/index.html","b9b5f763cae2a730feb94d5b27b92d59"],["D:/Blog/public/I-O模型/index.html","c6cf5711cecce3389dc79bb25627d072"],["D:/Blog/public/IO/index.html","16f418581c98b555944e073e0d1b0003"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","93669cec785a2f016476e28a85d05e93"],["D:/Blog/public/Interface-test/index.html","5818944680a044ea7a83cb0373f2080c"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","a113e1ba45806d0e57fc17bb5c3a04ec"],["D:/Blog/public/J2EE/index.html","be8cd06635b48d567370263861a0d5c7"],["D:/Blog/public/J2SE/index.html","eb1b0e454afbcfc67ff73dd4e24295cf"],["D:/Blog/public/JDBC/index.html","465fc36ca5a881cd23aaab5654fa41ae"],["D:/Blog/public/JDK/index.html","9f0bf74eba373800724acbe4db8620c0"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","c46c996cf30f764b205d2318631b6e4a"],["D:/Blog/public/JVM/index.html","e3b671793dc9de394b1a2a0c8db4c427"],["D:/Blog/public/JVM垃圾回收机制/index.html","b032b9ad762850d3b333c40a0c471659"],["D:/Blog/public/Java-memory-model内存模型/index.html","3a32df138978163d734bc8b4f176332f"],["D:/Blog/public/Java网络编程/index.html","fdbcdcb7514bf296e9c132c206b90751"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","254cdc3e7798906fc58fa299139b2ca9"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","360ccbe2c47d851c6762701052bdbd50"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","e57a9aa4545e3e849aee9f1019d3da47"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","78bc830314acebbd91ea7d4ab4f6cf12"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","f4f2fcd87bae32a5820e87b0a33d1d50"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","e85136f414e9b17b3b697c401a81efa2"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","871434554114259e2b8eaded6183bbbd"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","d89fa062a103a307a2c22c7ea2bb2ec9"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","4559a7122b2710635df88f7310955822"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","1cfb0b22187a5768cc93596b8111a55a"],["D:/Blog/public/Linux/index.html","2dc082697b0a90916e5b46474b373717"],["D:/Blog/public/Lock/index.html","cbe271ba7181ff144851f89cb7ad5b3b"],["D:/Blog/public/MVC/index.html","5a013163204e15b98607a899f18fc41d"],["D:/Blog/public/MYSQL/index.html","831b8c0ff83091628f46f3a3caebb764"],["D:/Blog/public/Mybatis/index.html","c122fb0c071f646e64462da06deecaaf"],["D:/Blog/public/NIO模型/index.html","bc8ea0917d1f0cf6a1dabe172670401a"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","6e718d13aefa7b84a25789d3866484f2"],["D:/Blog/public/Native方法/index.html","7d90bb9c422b2d2fa7a88ef7fa21d53c"],["D:/Blog/public/RESUME/index.html","63793e38b1340e04157ff8952ffe761d"],["D:/Blog/public/Redis/index.html","e11d769a50e65fcdfe34629c1919c91e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","cd15a4c3e46c8a745c8a36b5b077c9f2"],["D:/Blog/public/Reflection/index.html","f4d266e20aea39996bb8daa2921e6f81"],["D:/Blog/public/SQL注入式攻击/index.html","f49c1b5d49d103b3ff469f5d9c6bde90"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","3846e6592ad4db1043b1d24bef4945a3"],["D:/Blog/public/Seata处理分布式事务/index.html","d531f2f17f9f34de23973424874c739e"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","efa4cf5e873a256901a87060146f22bc"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","6efa3367d3f3fcbd7327bd9bd7be0ec7"],["D:/Blog/public/SparseArray稀疏数组/index.html","bb4ff6296354d42caf5fb05d249af89e"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","1c23a8ec831bfe3695da5256cb88b5c2"],["D:/Blog/public/Spring/index.html","a3529b788cc1db45aca1abc08edb4019"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","2bf0fc3311b578ca81f4ad707be5ca3c"],["D:/Blog/public/SpringMVC工作流程/index.html","5f19cfe994f4b59c965a1094b67b9569"],["D:/Blog/public/SpringMVC环境搭建/index.html","b13f9c0a46bf92e2ad1abe486d9bf255"],["D:/Blog/public/SpringSecurity/index.html","e765d48f84737417c3fb1084a20defbf"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","5a7d5a13a17d47cf7e6ec23ac9bc4736"],["D:/Blog/public/Spring架构/index.html","9cf6fb2907a0f8068c6d04b78f861ad7"],["D:/Blog/public/Spring的作用域/index.html","f149a34625367e6beda2db76b4bfbb72"],["D:/Blog/public/TCP-IP/index.html","f291df41218011094224e369509504c8"],["D:/Blog/public/Thread-pool/index.html","9593b6ff530abb9207f6da569d274c1a"],["D:/Blog/public/Thread/index.html","ccc8e7d7aee57979d9e6026aed5f1d53"],["D:/Blog/public/Unitest-framework/index.html","50749c384499157312ecd9982c78f56f"],["D:/Blog/public/XML/index.html","3afdd2cf99e7f06e512b0f2f594b177a"],["D:/Blog/public/XSS跨站脚本攻击/index.html","cd0f5cccc387fbde9ee3b5e92b63b1c4"],["D:/Blog/public/about/index.html","90c61244fdbd0f7a23f4c596adf93fe2"],["D:/Blog/public/app-test/index.html","26bf3fc50f536f2f98fea930cf4c9c8f"],["D:/Blog/public/archives/2019/01/index.html","3eb7831417043967801a75efc4420bef"],["D:/Blog/public/archives/2019/07/index.html","2d568912f5b239ae91c9eeff8ec997d1"],["D:/Blog/public/archives/2019/12/index.html","0195cf9018418d76774582ba490e920d"],["D:/Blog/public/archives/2019/index.html","a7240b798c22f099c8c8e3d7753dec37"],["D:/Blog/public/archives/2020/04/index.html","0ede57c5365abce3d8e7a07ebae8f1e3"],["D:/Blog/public/archives/2020/05/index.html","c7d73da1fccbb9b14638af0b22217071"],["D:/Blog/public/archives/2020/06/index.html","7311fc8185936d806dcb34e058d46939"],["D:/Blog/public/archives/2020/07/index.html","333cc6a6a2ee2f88ff97830ade9e2880"],["D:/Blog/public/archives/2020/08/index.html","e9219f467d05bda8b6f8ca00fb655bd6"],["D:/Blog/public/archives/2020/09/index.html","d402bc29a34feac85f4fa140a0d6f988"],["D:/Blog/public/archives/2020/10/index.html","8c1331708931d7cbbc9ae97fa22278c0"],["D:/Blog/public/archives/2020/11/index.html","02b06181f563203d48615086b459a16a"],["D:/Blog/public/archives/2020/12/index.html","4b998e046ef628574d70bee7aee97029"],["D:/Blog/public/archives/2020/index.html","5c56aeab44648839436d9de2b68eeb99"],["D:/Blog/public/archives/2021/01/index.html","ed9d2e88f795bcdfde527564a831e125"],["D:/Blog/public/archives/2021/02/index.html","85af8a8787a8b6059ca11946bf1e31ef"],["D:/Blog/public/archives/2021/03/index.html","2da6c9299e132bcc2bc8d0ecdbb273da"],["D:/Blog/public/archives/2021/04/index.html","ac899d242dda20f9614840c3e80522aa"],["D:/Blog/public/archives/2021/05/index.html","4723f85fbab28d15da00a60cf15fae7c"],["D:/Blog/public/archives/2021/index.html","3ef97850772e8c2ddec3d83ecd0a7782"],["D:/Blog/public/archives/index.html","935fc7492af928594278d4b1b69c081d"],["D:/Blog/public/categories/C/index.html","0bc8a8f390502c701a7abe566f2967cc"],["D:/Blog/public/categories/SpringMVC/index.html","168a9c04aef6401ea3c14090435ad3ab"],["D:/Blog/public/categories/categories.html","68e58c257eefe3ac163467f32014e00d"],["D:/Blog/public/categories/linux/index.html","ba41fa4d138321e1dad1992aa85ba165"],["D:/Blog/public/categories/分布式/index.html","b93f64bbf9fb2a25474efcf1deac0872"],["D:/Blog/public/categories/分布式/page/2/index.html","f57f4954e2303a23119eced1b81ad949"],["D:/Blog/public/categories/设计模式/index.html","79abba5179c9bc5c2c2cf3ef5ba75430"],["D:/Blog/public/categories/设计模式/page/2/index.html","95de3d8a86bc1d59dae4b44185625c93"],["D:/Blog/public/categories/高数/index.html","b902f6dfb935fcf91b1fc5b4fefdcc4e"],["D:/Blog/public/contract/index.html","86d4c81dcdcda613185d571dd93b3c2c"],["D:/Blog/public/css/animation.css","a4d1c91f7343740316e01b9491e83a30"],["D:/Blog/public/css/blog_basic.css","896f99ed15f1b2d4e17d313061f6e286"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","fcf75b27943c16cba3bf4bf5f0d15b53"],["D:/Blog/public/css/lightslider.css","41d20de7f1c892abec73185b9a132a9e"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","c5ad26ebd2e41c4e6bd35ddcf893f651"],["D:/Blog/public/css/style.css","c5ad26ebd2e41c4e6bd35ddcf893f651"],["D:/Blog/public/cycle-structure-programming/index.html","7cddae009a0900c18c6e3e0990494e81"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","fb11af2f7733331ec41c0f69ff3fec0b"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/google8102e2f35ce9e391.html","06aecd99dc5dba9703abb9423cf97936"],["D:/Blog/public/gulp压缩静态资源/index.html","6add646d7931dcbea75c5c09b7b3b612"],["D:/Blog/public/head-first-hashmap/index.html","5a5db5983735dc941ba98b3f522f366a"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","e5182c7eb64bdcac794a0c9d17eb9cc2"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","2dbf7a3d12a09185ad60f8d17a0a2687"],["D:/Blog/public/improve-robustness-(2)/index.html","6fdf49a1b50f56b3b594c492a28ef855"],["D:/Blog/public/index.html","7d52db940c7cfabaae43d7febe7c6688"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","7c145fae1f6f794a2ed90ac5c663a18c"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","61ab67b324c630e9051dc7118f8ee20a"],["D:/Blog/public/link/index.html","b130e8e91d2fbff8241dd64beeae99cb"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","10553b9364e24c6fcbdd3829504df215"],["D:/Blog/public/live2d-widget/demo/login.html","a8a3b0670c966a0c03c7dc0d47f273a0"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","b172782605fb8ea9fa85ddce787606a3"],["D:/Blog/public/mybatis-缓存/index.html","6e3fe4e0a46c9c54ba9dafb964ccc37b"],["D:/Blog/public/note/index.html","187e961510ba0f4013db2c8fa875e66c"],["D:/Blog/public/page/10/index.html","61388b578d8b9c889b10766e3166bddc"],["D:/Blog/public/page/11/index.html","4f06df5eed0653051a61060f2e5f2782"],["D:/Blog/public/page/12/index.html","9aa2e9accfd4a5043becae56dd006087"],["D:/Blog/public/page/13/index.html","a3f742b2954badd47a275b07c656fc15"],["D:/Blog/public/page/14/index.html","01cdcd28a507354ec6bbc8513d256a97"],["D:/Blog/public/page/15/index.html","65a3f61e5552d249cc8fe47ea144400c"],["D:/Blog/public/page/16/index.html","df3858642b665e8a142b7bcea029414f"],["D:/Blog/public/page/17/index.html","397c67e71a76817ba76a71e23f573c13"],["D:/Blog/public/page/18/index.html","0043077f09d7497b8fc61e5c81744358"],["D:/Blog/public/page/19/index.html","6ea0fca2c7744c7b0dc6b0c03ea57bdf"],["D:/Blog/public/page/2/index.html","0129b3f349db80c2879a0c89d06edc3a"],["D:/Blog/public/page/3/index.html","921fdf58857845244adb06f698c5e186"],["D:/Blog/public/page/4/index.html","a33d2078ae76deff800459b41fb1afb5"],["D:/Blog/public/page/5/index.html","3b00748986671a79b3de9c6f3ae573b4"],["D:/Blog/public/page/6/index.html","51dc935b1745bdf430c94d7ebabb7404"],["D:/Blog/public/page/7/index.html","457adba47eda099e1852d9abc993d5ff"],["D:/Blog/public/page/8/index.html","cceea06d2dcb915a7376709f18721297"],["D:/Blog/public/page/9/index.html","56295062fd153377b04b1b3d28908d97"],["D:/Blog/public/proxy/index.html","59e60e25df8557a40ec21850fd516b59"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","2eee090da2f0871faec9a16e8dcc281f"],["D:/Blog/public/select-structure-programming/index.html","c3364cce2d385e2aba274c8e06142157"],["D:/Blog/public/sequential-programming/index.html","6053dd6022cd422730f19977284026a9"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","3de3870d8f2ed39b5029ee1cc814c276"],["D:/Blog/public/tags/C/index.html","aa725a7d48a5e3326c10b67eb0c9b559"],["D:/Blog/public/tags/C/page/2/index.html","8471d0daa3f14803459a3d1f88a5d656"],["D:/Blog/public/tags/Concurrency/index.html","b0f58a37ca31a295a4497302a123ad8e"],["D:/Blog/public/tags/DesignPatterns/index.html","7ead8d28e0f11b3e621ed32c64e1b258"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","e13fee7cf02ff46d2cf040b9cf4d8fe0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","95e3d7abaf7311d518f551ca57b3b45c"],["D:/Blog/public/tags/DistributedMicroservices/index.html","2b25bf719070151f560ee2b02d9c2b3e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","497b4cfac505399b7d37e12da371d885"],["D:/Blog/public/tags/Interview/index.html","d6a4c4f16d95767a0f45cf81f37b5de2"],["D:/Blog/public/tags/Interview/page/2/index.html","a0538074c1d3b8bbe0326e56304ed5b4"],["D:/Blog/public/tags/JVM/index.html","c0bb337e6f67660b9438712863a9d525"],["D:/Blog/public/tags/Operating-Systems/index.html","25f29960f12983aebb402ff22c736f9e"],["D:/Blog/public/tags/about/index.html","f157b136c66abb629154186694edc853"],["D:/Blog/public/tags/ad/index.html","0f7ad1cdf69ac3c47c467410daef5c87"],["D:/Blog/public/tags/algorithm/index.html","b1cad3e6abb9aa5e73a07441159275ce"],["D:/Blog/public/tags/algorithm/page/2/index.html","eef1ecb2d691f084fb11439836770f57"],["D:/Blog/public/tags/computer/index.html","2e6ec960bd9b432f3d7e610759834dee"],["D:/Blog/public/tags/docker/index.html","343c2f207cb825e5c11156f4e7ee99e9"],["D:/Blog/public/tags/frame/index.html","47ec0ad46b91747e7bc1546bd5e76cc6"],["D:/Blog/public/tags/front/index.html","c42f7eb785079fa791cb05487c7af7fb"],["D:/Blog/public/tags/index.html","fb911cf216339168146887b89a751f0a"],["D:/Blog/public/tags/io/index.html","4e4056ef2182a894da6283dd8546aa35"],["D:/Blog/public/tags/java/index.html","2236f50c5c217b09dca2f8a2e63db24a"],["D:/Blog/public/tags/linux/index.html","07cb66154aff39fbc16b3b9529eb680e"],["D:/Blog/public/tags/maintain/index.html","52bde77bf5bf315471965f86dfb8a31f"],["D:/Blog/public/tags/math/index.html","e881bc4d1602a3cf60284fe8ccf2c644"],["D:/Blog/public/tags/math/page/2/index.html","284cbac927007d0227587696de4f118f"],["D:/Blog/public/tags/middleware/index.html","0256f221f7953c50c06cab7d2f837c8e"],["D:/Blog/public/tags/network/index.html","a284c739a4a427d990a59b353ac21a3b"],["D:/Blog/public/tags/project/index.html","9abbf6d813ff32b6aa3d734308e5bfc6"],["D:/Blog/public/tags/resume/index.html","da1af68f42c2d9024032ff82035bbcfe"],["D:/Blog/public/tags/security/index.html","ddff751e8da3440a9a4ec0f04535a9f0"],["D:/Blog/public/tags/sql/index.html","a041203e19f2277b5e6070a828e937b4"],["D:/Blog/public/tags/test/index.html","c5a2ed5bb1a7971d252e63dbf1441349"],["D:/Blog/public/ubuntu-deb安装包/index.html","e9a6255b424491ae4a16f52cd6658bbf"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","c232a47e508e0b89980cdea7f0725666"],["D:/Blog/public/unix/index.html","6f86ca7f497cec8744bcdef528cdb842"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","81ae006ed9cd423b17091966417c95ec"],["D:/Blog/public/web-test-combat/index.html","379169fa7baa037289e800a61803154c"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","0dae5a720236447ac12c046904b9d3f5"],["D:/Blog/public/不定积分/index.html","e46c1ec498d6664444304f1de3e11c53"],["D:/Blog/public/中介者模式/index.html","64cba8feb8dad042b4261de8ba245fcd"],["D:/Blog/public/中英文切换/index.html","cdc12985633dff439e3d6f32b3a14428"],["D:/Blog/public/事务的隔离级别/index.html","7b1da886d0a41db5df3fc90348c930d9"],["D:/Blog/public/二分查找算法/index.html","54cbdaa4dbdd78fb151d9293e00f4a88"],["D:/Blog/public/二叉排序树/index.html","a291e8f6be586f0ad33e14d64b1af4e1"],["D:/Blog/public/二重积分/index.html","cdfbdce1f89a2d27a800081242d76cef"],["D:/Blog/public/享元模式/index.html","8d860a34746a593ae73db7bdbf6685b1"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","ef17ba24fdd21c37a2d7604296d0b32c"],["D:/Blog/public/代理模式/index.html","d7c11e10ac4c08c0d674036817a467b7"],["D:/Blog/public/依赖倒转原则/index.html","19c5fbfa2e44ae06c09f46d643539455"],["D:/Blog/public/偏导数/index.html","0835d251fe4e66d45c5b263401ec8a1c"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","c20e9d382601a8f185a6f7d4a385118b"],["D:/Blog/public/函数作图/index.html","b3f920db75751644e61724679c2b5c27"],["D:/Blog/public/函数和指针/index.html","3c8710a7dca68eefaf6a5fe1a0f35305"],["D:/Blog/public/函数的单调性和凸凹性/index.html","61b3e86a09282888e0b71b69e0d166e1"],["D:/Blog/public/分布式的微服务架构1/index.html","473e097f61e5a7d8fd7397b094b4e6d0"],["D:/Blog/public/分布式的微服务架构2/index.html","6c9cf476a9dc5a09e9c02f24a085d529"],["D:/Blog/public/分布式的微服务架构3/index.html","f3391fa414b2cc65e44aafa9179947c1"],["D:/Blog/public/分布式的微服务架构4/index.html","3357b2214484347dab8c7e14a51e08f6"],["D:/Blog/public/分布式的微服务架构5/index.html","8c81605ff7269578e52083cba259e4e1"],["D:/Blog/public/分布式的微服务架构6/index.html","3cd94586ea8680061c4e2904dd6debca"],["D:/Blog/public/分布式的微服务架构7/index.html","5ecb281d0d8094835672ca3d75a631d5"],["D:/Blog/public/分布式的微服务架构8/index.html","892e5ab4326719eb1001e90101cae353"],["D:/Blog/public/分布式的微服务架构9/index.html","7941695af0e579f8c3a66d9d1163b225"],["D:/Blog/public/前端安全/index.html","922c48ef5f5ccdb00de4724eef42d710"],["D:/Blog/public/动态数组/index.html","2673b7763d1137b89c65984ce9fb5bfb"],["D:/Blog/public/动态规划/index.html","c821b25cf6594f83f1b3d081ea9a7e35"],["D:/Blog/public/单一职责原则/index.html","d89eb867d3c31d01a908a712a8d39c23"],["D:/Blog/public/单例模式/index.html","71eb8d55e65aff69679270d3842c57e5"],["D:/Blog/public/单点登录实现/index.html","8ef2b4f9002f9e04a5ea566d93b755f1"],["D:/Blog/public/原型/index.html","4f20fe7c239e44c9ebed29956ad0a6b1"],["D:/Blog/public/合成复用原则/index.html","0a53cc07e0e2f62abea03508d21355e4"],["D:/Blog/public/命令模式/index.html","61eed6ed3aa5f84873360af2791c6091"],["D:/Blog/public/哈希算法/index.html","c69c741b1eab0a9d9310040177c09e03"],["D:/Blog/public/回文数/index.html","74996eb5b5fd24112e4eb43643e7a63e"],["D:/Blog/public/图床/index.html","a8d80593dcdb4b9a82f5511b02ec98d8"],["D:/Blog/public/堆外内存/index.html","0ae9c8a1da614fbb2f432f0f70047496"],["D:/Blog/public/堆排序/index.html","c3c7ceb471b0c6a662c9358f6710cc46"],["D:/Blog/public/备忘录模式/index.html","f4faa129f41d91286066294c6f4435f4"],["D:/Blog/public/外观模式/index.html","acc225fc0e939295e89f8711fabcf1cc"],["D:/Blog/public/多元函数/index.html","aa9abfde15471c1b25caffbc1b51c7bb"],["D:/Blog/public/多线程/index.html","02a4587c6995804e7e8f5d2b56e98218"],["D:/Blog/public/定积分/index.html","d7280a31606ab960e2d38bf9f450f12d"],["D:/Blog/public/导数/index.html","2c759661daaff56dbe0d9f5812a94c63"],["D:/Blog/public/工厂设计模式/index.html","a8661c4e87c2d30b7672332f4ce63429"],["D:/Blog/public/并发：原理/index.html","cd94ec5cb354e9e820bcc023646d4db5"],["D:/Blog/public/广义积分/index.html","03e642c57c83afd745851d7a2b51a60a"],["D:/Blog/public/开闭原则/index.html","dbaf8a485d53051fc9dcf504aa85666f"],["D:/Blog/public/微分/index.html","9a21b624329dc32c5327ac7c9d42af80"],["D:/Blog/public/微分方程/index.html","86413d7814b7dc7be69e4be5d822be1c"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","98349200d249479dffdc7b9cb8ac2f17"],["D:/Blog/public/接口隔离原则/index.html","ce4c49d5839c0655bdd8a015f6d8dfc8"],["D:/Blog/public/插值查找算法/index.html","626767221a77bbbe2bb4d5183cae5af0"],["D:/Blog/public/操作系统/index.html","ced4fc77c6cc0475aa50ccd9e10c16c6"],["D:/Blog/public/操作系统概论/index.html","9dda224194db21832fa99053b738bd10"],["D:/Blog/public/数据结构与算法/index.html","9e9e5f6096c0d027864caf5a2887c9a0"],["D:/Blog/public/无穷小与无穷大/index.html","9975dc6e33daf4302b374f9767d7d344"],["D:/Blog/public/极值和最值/index.html","d0b44b63f1d8ec9f1a827549261f9b38"],["D:/Blog/public/极限/index.html","697de244a57ed97513810ac1e5c3687f"],["D:/Blog/public/栈Stack/index.html","efe5cab6fbee4960372b3aef8ee18479"],["D:/Blog/public/桥接模式/index.html","102d77ae5622f30a089b565068bf6c80"],["D:/Blog/public/模板方法/index.html","5c134eb84e8d2268d1abae330a163a81"],["D:/Blog/public/沙箱安全机制/index.html","b685cc2041d9b851ffc02d36657bcbad"],["D:/Blog/public/洛必达法则/index.html","5ba75d4c0666b5c0b6c0f97d1a31a5cd"],["D:/Blog/public/浅谈IO/index.html","8bbc2698b67cc42a534cfeebba71651f"],["D:/Blog/public/测试用例/index.html","b05f55c5e8c34a4990791f732bb8dd04"],["D:/Blog/public/状态模式/index.html","a0c5f1b578dd405e79ea7e699a4ec10c"],["D:/Blog/public/生成器/index.html","c2d8ba9c57c6e781bf6dffb0cca4fe44"],["D:/Blog/public/策略模式/index.html","32afe8540ded675b1f82c4080ec534ca"],["D:/Blog/public/级数/index.html","ed9d02a561995d0643f24f24c1c36626"],["D:/Blog/public/线性查找算法/index.html","3d978a9ee6edda2b9b2eced391da85f4"],["D:/Blog/public/组合模式/index.html","43af652bba75a088138d55052f2aa095"],["D:/Blog/public/编码算法/index.html","886abc0a535d7f4b3102b2047a2026e2"],["D:/Blog/public/自动化测试/index.html","da624ff86753f08ce604f5452d644db5"],["D:/Blog/public/装饰器模式/index.html","be81091862360ba1bf2fe2f9fe54960b"],["D:/Blog/public/观察者模式/index.html","bb38aeecefe3974461a1bec2c163dfe9"],["D:/Blog/public/解释器模式/index.html","a0fea212fd5a1ce52fd357b80beac692"],["D:/Blog/public/计算机组成原理/index.html","fb5d1f7222102625a22392fab30db956"],["D:/Blog/public/计算机网络-1/index.html","bf312e10a021aaecf79eb4de720bcece"],["D:/Blog/public/计算机网络/index.html","8a39d7272e46cd466485c37a719bd2cb"],["D:/Blog/public/设计模式/index.html","3eb51c9f02138e0c6449349494f1e7d8"],["D:/Blog/public/访问者模式/index.html","46aa61445def0144698ebc6b2db7cb19"],["D:/Blog/public/责任链模式/index.html","60ba1baaa7f4ba7f33e96bae59b9a000"],["D:/Blog/public/软件测试流程/index.html","c9f0384f33395bbc3a28595c455af779"],["D:/Blog/public/连续/index.html","6ec0f46a3b70eff49ac6757f5e0b2184"],["D:/Blog/public/迪米特法则/index.html","87d74db6e71031716a6937e350ac3148"],["D:/Blog/public/迭代器模式/index.html","09a5796dad576612f4abbed714580555"],["D:/Blog/public/适配器模式/index.html","cdf7b528a070d8ee10c499ad2e92fe77"],["D:/Blog/public/里氏替换原则/index.html","ba860216cb4597e5f772cd74fa05e2bd"],["D:/Blog/public/链表/index.html","fbaca8268343e45b7ad56e14a514a123"],["D:/Blog/public/队列/index.html","5dc884c735d6e98c70d26f303a79daf3"],["D:/Blog/public/面向对象的特征/index.html","b98a6f0bea39c60d5cc8fec9673d3307"]];
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







