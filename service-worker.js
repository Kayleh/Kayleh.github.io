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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","682fed62d1da0e22d7585ac08ba33891"],["D:/Blog/public/7种排序算法/index.html","deb5c02616db1b2d317fee0d85486cf0"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","050f185fb461b515d248706bac76e5a1"],["D:/Blog/public/AIO模型/index.html","09637841aa7a6df30f3a3b492a1e28af"],["D:/Blog/public/Array/index.html","55aa3350e85ecca2acb36ab136423870"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","9136858ccdff442a234b2dd81dd91f39"],["D:/Blog/public/BIO阻塞模型/index.html","3cc78e0593a79fcec7d2da65e7de7b30"],["D:/Blog/public/C-algorithm/index.html","3532d22d3774e84f4358ca137b184f1e"],["D:/Blog/public/C-prime-plus/index.html","0a529e6043823706fb26617eb2f6d187"],["D:/Blog/public/C-programming/index.html","8a354d1105a9a9c5820515da0b5ad576"],["D:/Blog/public/CAS-and-AQS/index.html","89f01151f59b47584de392a668ec0856"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","01c9909f94c7b79bebf042c59a3d6add"],["D:/Blog/public/GC/index.html","9f6f62c11979f8b27ec989b140fddf30"],["D:/Blog/public/Good-use-of-pointers/index.html","c22b148839e67b4a7ec42176a266ea14"],["D:/Blog/public/HTTP/index.html","d02c44c9dd1ab30734d073d4324d118c"],["D:/Blog/public/Head-First-nginx/index.html","e8eac2c0b3bf459ef5140d515894a8d2"],["D:/Blog/public/I-O模型/index.html","d594be7be9bfa48244f7859751929e80"],["D:/Blog/public/IO/index.html","521a65d80aedab95ff4a22806e472f0a"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","7005362615df5d9693a73307e13e592f"],["D:/Blog/public/Interface-test/index.html","1808fadca4df2cf71e4bee9940cfdd10"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","05b5e27d2b0fccf2b4f204953d2e76d1"],["D:/Blog/public/J2EE/index.html","a2e5024cf0d5998db5144cc7cff057cd"],["D:/Blog/public/J2SE/index.html","2fe74ad219c29d232885df87fc72c040"],["D:/Blog/public/JDBC/index.html","34294323d0106d766694a6a5a86e73d8"],["D:/Blog/public/JDK/index.html","a8cc3c87d5835d68c3cf475707ff6b6d"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","f087e32c63d38a219af6d823729cbe97"],["D:/Blog/public/JVM/index.html","ced4d2b56912e61488acab1c37370bd5"],["D:/Blog/public/JVM垃圾回收机制/index.html","f52f76c2ced1ece49b88eda98f60262e"],["D:/Blog/public/Java-memory-model内存模型/index.html","4f7fc8304b4c12633499992df6ee6557"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","ea68072c98cd8d333acb527e39ff7659"],["D:/Blog/public/Java网络编程/index.html","5a8949d7d09fe103f0d68d244b88179e"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","cbbcce042b541c439de2f48cf6e45f38"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","004e11ce7ca11c89abbcdf9f1cd7917c"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","5976dff718527840b27fe4b41172eb32"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","954b405c56920a65e2d16e41a702f595"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","3e3ad8464f7b9a30174d51796ce6f075"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","a200474d84e0bedbd72dc56b662d849b"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","5e3cd39936f1c672f5c01c20a36a1c43"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","ee92fab8c2487bfbc066f70054ced234"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","a68a816820f476bb41080625fc0d12f1"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","795e2da29fdfd952ad0694e6a3471749"],["D:/Blog/public/Linux/index.html","ef19e566e1b3bff718aa4ba4094d660b"],["D:/Blog/public/Lock/index.html","f1e2bed266eb2f1a9e73da7ab87fcf1f"],["D:/Blog/public/MVC/index.html","44f7c23637a664b458b9df282adbfb97"],["D:/Blog/public/MYSQL/index.html","2ae28dbb443468a3ac1aceda8e89dee0"],["D:/Blog/public/Mybatis/index.html","435052f41510219c9e3e42528cebabc9"],["D:/Blog/public/NIO模型/index.html","a2d6c1514ebde6d5db2a8e55cb15834d"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","4cca4987e2615862e54db189c52f4af9"],["D:/Blog/public/Native方法/index.html","68aa6a3d966baac03ed7ee2823ae80ef"],["D:/Blog/public/RESUME/index.html","b07574441b9da79151fcca24b21b5bef"],["D:/Blog/public/Redis/index.html","832e837e2d0404230b579df92c12fa08"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","622b9a087444e28690d10b82c9930134"],["D:/Blog/public/Reflection/index.html","8df8eaf4eabed677265970e600c5acbb"],["D:/Blog/public/SQL注入式攻击/index.html","ea90d8386e788d05467325b66da6abeb"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","5c7c910d78ae99abfa465183a6fbc318"],["D:/Blog/public/Seata处理分布式事务/index.html","13057b3f6c5721c72e5e2daf6a2ace60"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","153e95363a7815d9efae19732defc562"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","f6de696b3ec11a800c90eecc8d18a5c6"],["D:/Blog/public/SparseArray稀疏数组/index.html","4471835e2e501bc793a9cdaa17c4a7bd"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","8bb0f545c1d52275ef268ab53d3d021a"],["D:/Blog/public/Spring/index.html","f8a8a0d6a05496572f021e4a9dca8fa1"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","f74adae6b5abd74086f03d9b4b19f179"],["D:/Blog/public/SpringMVC工作流程/index.html","cbab554bfdebaf01681707de7b27de44"],["D:/Blog/public/SpringMVC环境搭建/index.html","8ab89240cdaeb6346920acb7500aa253"],["D:/Blog/public/SpringSecurity/index.html","39526d290e598e7819061d2aabf28df2"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","a38b4630df283972e3b097db38d6d49b"],["D:/Blog/public/Spring架构/index.html","a8a7d73e3ed8349df6b31edb966c766d"],["D:/Blog/public/Spring的作用域/index.html","99f6eb9e6dadd94cacdfe8b6107b3793"],["D:/Blog/public/TCP-IP/index.html","946079d62c3abd1c1f13b0b01a5bb3bf"],["D:/Blog/public/Thread-pool/index.html","4747cb172d03c920d9d5fdc012971967"],["D:/Blog/public/Thread/index.html","870f1968ffab8045f76f98b45e5f1b12"],["D:/Blog/public/Unitest-framework/index.html","02dc9a710afa1f499661baeb286ff1bf"],["D:/Blog/public/XML/index.html","554e477c42690854d90be0edd593cbea"],["D:/Blog/public/XSS跨站脚本攻击/index.html","87065ebd6a3e7d4849495d0a354d2387"],["D:/Blog/public/about/index.html","78d9031e25ac8a0f05f32536d1d006b0"],["D:/Blog/public/app-test/index.html","f16f40169a22aa5e6eb79406adc7b489"],["D:/Blog/public/archives/2019/01/index.html","bdbaa74e501c41f60fd3cef5115bbc46"],["D:/Blog/public/archives/2019/07/index.html","dad6876893ab4aae99ba527655b4dfc0"],["D:/Blog/public/archives/2019/12/index.html","90e9fc1e529a2c1ed60342e4121405a1"],["D:/Blog/public/archives/2019/index.html","38dfeaab8fe86354306b891d1df8963a"],["D:/Blog/public/archives/2020/04/index.html","492099e40df84754ee688b05e869e329"],["D:/Blog/public/archives/2020/05/index.html","59a9ab6c509395df58678919cfc10a9c"],["D:/Blog/public/archives/2020/06/index.html","7e41079afe56e063eeaf6a877606e55d"],["D:/Blog/public/archives/2020/07/index.html","0a0ed79ee82a3efa105458d5a3d8057b"],["D:/Blog/public/archives/2020/08/index.html","6baeccfe0e7c5743a01ee605c5256715"],["D:/Blog/public/archives/2020/09/index.html","041d5c561b2b215313e7cc27a6d9d445"],["D:/Blog/public/archives/2020/10/index.html","8927b72d808635fc89708356206e55e2"],["D:/Blog/public/archives/2020/11/index.html","992b3bf7f8eadc4de0c6fbb490cb3445"],["D:/Blog/public/archives/2020/12/index.html","93d6f9c85482aaaa4c7060adf01583f4"],["D:/Blog/public/archives/2020/index.html","e5743dce4b3e8d856f66643904b86ab0"],["D:/Blog/public/archives/2021/01/index.html","9741503fee3c8395520c936a0cb894f1"],["D:/Blog/public/archives/2021/02/index.html","65d0b69bc45f1046958a312266ad6f0c"],["D:/Blog/public/archives/2021/03/index.html","9241e4b0194f63bc05d91140a08bf0dc"],["D:/Blog/public/archives/2021/04/index.html","2d6807758be8876ff76d0c864739d0c2"],["D:/Blog/public/archives/2021/05/index.html","fe1fa42f13ed464f80f6d20c6eb45a8d"],["D:/Blog/public/archives/2021/06/index.html","50a4ca30df6e495e437eb6e9b1cf2353"],["D:/Blog/public/archives/2021/index.html","be9b5d1b496e18d0aa17fc49ca783946"],["D:/Blog/public/archives/index.html","5a106bd81d3bca21225a448e68cfb65f"],["D:/Blog/public/categories/C/index.html","f46ca7b0b91a2fe5d01345888b0315bb"],["D:/Blog/public/categories/SpringMVC/index.html","23202131fea7e3eae5d434be6677be1d"],["D:/Blog/public/categories/categories.html","d2702390d059f8a76583a1ec128131a8"],["D:/Blog/public/categories/linux/index.html","59e37fba25df1c23c981b1d2075db4fa"],["D:/Blog/public/categories/分布式/index.html","8cd29ec1267915cc1a676d88490bce36"],["D:/Blog/public/categories/分布式/page/2/index.html","382d69234fc2c90a2eb606a378cc4986"],["D:/Blog/public/categories/设计模式/index.html","0763629f8de4de469e9c80bd092326b7"],["D:/Blog/public/categories/设计模式/page/2/index.html","05f9ef0891186e9944c20831f6d9b412"],["D:/Blog/public/categories/高数/index.html","63f5ef7c7db204ec23bfd25a47bd5b14"],["D:/Blog/public/contract/index.html","1b5ba7ef943024a37faa444e4f24c255"],["D:/Blog/public/css/first.css","45cd10cb9146fb30426ad28953e8a9b9"],["D:/Blog/public/css/style.css","0358e62c88094a62a46a63e50ca4fb5f"],["D:/Blog/public/cycle-structure-programming/index.html","8d34766bed9a8c950ff173bb13c428d5"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","48f3a80acc27b186f05a93d49d6a1363"],["D:/Blog/public/friends/index.html","1958b812bcca750b09a2258f83d77d73"],["D:/Blog/public/google8102e2f35ce9e391.html","90e92f65974f05c0d2bb8a8e60e8a5bb"],["D:/Blog/public/gulp压缩静态资源/index.html","179784bfa62d27d923ce4c6fa56ec059"],["D:/Blog/public/head-first-hashmap/index.html","c1ccced4b77815af3cfec3da6f02973d"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","4b724d25bc47c2bfa82c9eb9a9cd26ac"],["D:/Blog/public/improve-robustness-(1)/index.html","654cfc7e1d7544ac9cbcc248078c5532"],["D:/Blog/public/improve-robustness-(2)/index.html","6841991c8f3370d4a04deefce3c09f42"],["D:/Blog/public/index.html","67af654f2f6d7c3fd38ada3433eff79d"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/katalon/index.html","01bc70e2eb1abe481cccd0b9aaf3a344"],["D:/Blog/public/link/index.html","cf09843cf3233b6331b3fbe5eca31386"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","a0aae83f9ca5a9f4e3e81805f5629dd1"],["D:/Blog/public/live2d-widget/demo/login.html","604984ed11d466aacb0c0e5368db49a8"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","e181d2260498b399b736e6f90e6443e6"],["D:/Blog/public/mybatis-缓存/index.html","97b4110d568a2a89dfed996b7cec11f2"],["D:/Blog/public/note/index.html","fd6638ef09abe016a61798f5510d3cf0"],["D:/Blog/public/page/10/index.html","01b832aa1c19bde40457d45be0ef9832"],["D:/Blog/public/page/11/index.html","7e0caf5644fd3876acb4790dc66b3f3c"],["D:/Blog/public/page/12/index.html","57f15735938d9b1a81cace37b1c51f34"],["D:/Blog/public/page/13/index.html","59aaad8f785f8d516b13423568d1f4cd"],["D:/Blog/public/page/14/index.html","6e8f8d9c42fa151ef7583bc7d90f72b7"],["D:/Blog/public/page/15/index.html","1d7868ca7de901f054a6ea5ac1e2b3d8"],["D:/Blog/public/page/16/index.html","04dd0734f1291eef8073663d894ef67d"],["D:/Blog/public/page/17/index.html","6112115e85d6a7a25312b6c82dee356a"],["D:/Blog/public/page/18/index.html","44fb70a4f4923c9d6485c0f3bd1d8f77"],["D:/Blog/public/page/19/index.html","757dd00ed30b5f7c9ff1d78d3e347191"],["D:/Blog/public/page/2/index.html","b81c529b75cbfb96d627cca330938c90"],["D:/Blog/public/page/3/index.html","0365c794bab61515355d4122ebd898a6"],["D:/Blog/public/page/4/index.html","23ca07967185cee2c7e527a9e0f50654"],["D:/Blog/public/page/5/index.html","0341c0335910ae1b42ffc66de2d1fc9d"],["D:/Blog/public/page/6/index.html","d23c23fc695b91524fd0d775f818054f"],["D:/Blog/public/page/7/index.html","25cf3eff034e715f337e262ce0cb5915"],["D:/Blog/public/page/8/index.html","6105d265d364869d51ee98d688c0776a"],["D:/Blog/public/page/9/index.html","819b7531bde5812f077e4e943ec1034f"],["D:/Blog/public/proxy/index.html","dd65a8d531497bb67938ec695065a898"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","87e7b8894fdc970184232fe3839bee25"],["D:/Blog/public/select-structure-programming/index.html","3ca447b500870f0f52d55ea3ae9244f3"],["D:/Blog/public/sequential-programming/index.html","5864f9b151b7d9d7dceb700b650865ab"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","c3824089d0919332a24fc72bc7a6854c"],["D:/Blog/public/tags/C/index.html","4b6699fcec6d723ca324357ab9abb275"],["D:/Blog/public/tags/C/page/2/index.html","6b7cff3281475f86c9e7707f0b56fcee"],["D:/Blog/public/tags/Concurrency/index.html","19b119e7caa30b3a63b7627c51716974"],["D:/Blog/public/tags/DesignPatterns/index.html","bebfcc7fb19ee2e0314fd6b7c3b21071"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","34d2f7d0b6ed776f424b49d3eaed181e"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","2ef1ef36bef2958914d2eb6ff8fd4b74"],["D:/Blog/public/tags/DistributedMicroservices/index.html","533d86dec0a75dc18bfa081252011de9"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","1a4384c79e292ff413273b98316a4ec6"],["D:/Blog/public/tags/Interview/index.html","45b21e5813404a8346f73d555947fec8"],["D:/Blog/public/tags/Interview/page/2/index.html","bd472975c06ddab3140c247bd957c653"],["D:/Blog/public/tags/JVM/index.html","dd6af800a2cad3fb2fbae1b656728203"],["D:/Blog/public/tags/Operating-Systems/index.html","88c35d569967b948683c037de7504d1b"],["D:/Blog/public/tags/about/index.html","0ec41c8d0179ea16e2cd6518e9044c1e"],["D:/Blog/public/tags/ad/index.html","6c8c0208e451bbb5d9a735f5deca6278"],["D:/Blog/public/tags/algorithm/index.html","9e31e2c52a39b4718c0761786dd43aa4"],["D:/Blog/public/tags/algorithm/page/2/index.html","f11f5f614fccf7112624354a86017ede"],["D:/Blog/public/tags/computer/index.html","e756d290531d9669d8fb46b994caa64e"],["D:/Blog/public/tags/docker/index.html","b64e88bac545039154448f4db8601c94"],["D:/Blog/public/tags/frame/index.html","b44ac42c0052a553f046a34371f8bd2d"],["D:/Blog/public/tags/front/index.html","ca9c929c9b83471f35f3894be00f31a6"],["D:/Blog/public/tags/index.html","f1019eea28a1b76d19dcfad786d7b00f"],["D:/Blog/public/tags/io/index.html","be453bc4c68b119e37c6236a97de4e1b"],["D:/Blog/public/tags/java/index.html","092b4a45bc765d85a0d30a8faa38a7d7"],["D:/Blog/public/tags/linux/index.html","3220d45729a4a26e44674113cf60d24c"],["D:/Blog/public/tags/maintain/index.html","3de647e3f6e4d26910b3024974dadd65"],["D:/Blog/public/tags/math/index.html","4e156509af740356616c0aafd08bfdb5"],["D:/Blog/public/tags/math/page/2/index.html","92b5e853c506d7aff3b3722370c9cf8d"],["D:/Blog/public/tags/middleware/index.html","af1eb4593865d7b1e423c2791ed733e8"],["D:/Blog/public/tags/network/index.html","78d488c15f2012200418a9284b8e9b91"],["D:/Blog/public/tags/project/index.html","631b598a97cb564d0d3585816de9bde5"],["D:/Blog/public/tags/resume/index.html","608e3f32a9742ebf5862ce5ea97f39a1"],["D:/Blog/public/tags/security/index.html","74279dd9977bf809127681d0cc8e0031"],["D:/Blog/public/tags/sql/index.html","8ade11d3215a0f21335761babb21abb5"],["D:/Blog/public/tags/test/index.html","6aa19d26c735b5d8c1ce93f39dcba8a9"],["D:/Blog/public/ubuntu-deb安装包/index.html","ec30cc6e0969baf92f0a6541b653c907"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","851a2bcda01627415fbf8d2dab6918e5"],["D:/Blog/public/unix/index.html","42d6a1ba7fb9a3ea6d05a6db918106bb"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","75939fda517911f0390a3118ae9d9d34"],["D:/Blog/public/web-test-combat/index.html","cf87cca3e15e396939c727004c4d66cd"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","8a987a6b8be26dabe8b0b542a1fee288"],["D:/Blog/public/不定积分/index.html","82435bc1ea92a56b93a210a59a9d584e"],["D:/Blog/public/中介者模式/index.html","6fbc65c395ab7893cd32186ce7e92290"],["D:/Blog/public/中英文切换/index.html","de048674a1845c8db11ceb2ea193ae6c"],["D:/Blog/public/事务的隔离级别/index.html","773ac8d10bea31bc6ff77fd8ea85d2a8"],["D:/Blog/public/二分查找算法/index.html","c3816b0546e5983386722185a64d36da"],["D:/Blog/public/二叉排序树/index.html","5157691f3280f7f2d0ffef435e78d5d3"],["D:/Blog/public/二重积分/index.html","6a2902f31e1e0b6a551c424798390aad"],["D:/Blog/public/享元模式/index.html","c62510e483009edade488d908de9f8d5"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","939071b8ff4e271d779314e3b1113306"],["D:/Blog/public/代理模式/index.html","c1e0285ea5bca1328f9b4c773dd092b5"],["D:/Blog/public/依赖倒转原则/index.html","3644712feaebb67c5c1235a805f2e3c0"],["D:/Blog/public/偏导数/index.html","cc170dec103af0a09d5eb634e8f1e7e8"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","a832955a4acb5ead5d037c64c9b26eff"],["D:/Blog/public/函数作图/index.html","fb998e6d62baddfc893565c497f2de8c"],["D:/Blog/public/函数和指针/index.html","eb8c49017f3109c296a23e992a096fef"],["D:/Blog/public/函数的单调性和凸凹性/index.html","d62495a868f218d852ca7a187aeff4dd"],["D:/Blog/public/分布式的微服务架构1/index.html","9ffb30ae59bd214b786762f3ff7cbdf8"],["D:/Blog/public/分布式的微服务架构2/index.html","c26a0976d6f2a21d9bfeb6371f2ba6fe"],["D:/Blog/public/分布式的微服务架构3/index.html","88cbd8bf86b3a3637e887964b9e7fb60"],["D:/Blog/public/分布式的微服务架构4/index.html","cab902c7b1c0ac91f774c036b1fb6042"],["D:/Blog/public/分布式的微服务架构5/index.html","def0e4758634cac1f45d11a3df545342"],["D:/Blog/public/分布式的微服务架构6/index.html","458cb3e13162b4b9b4c727e16e7db572"],["D:/Blog/public/分布式的微服务架构7/index.html","35ca3a9c3f46fb489cd3850793724f63"],["D:/Blog/public/分布式的微服务架构8/index.html","cf50dffc469d72e9bab8e674a666f14d"],["D:/Blog/public/分布式的微服务架构9/index.html","7d96d926c0025df18719f119516e1754"],["D:/Blog/public/前端安全/index.html","44d41ec139ecc158c673e2752388e71f"],["D:/Blog/public/动态数组/index.html","9f7dd78f5a921b649430f8166ab0c7a4"],["D:/Blog/public/动态规划/index.html","88b6ffb2f6571cc77c4cdbbb8414859e"],["D:/Blog/public/单一职责原则/index.html","22b97b83c58894bab2c127c55158af69"],["D:/Blog/public/单例模式/index.html","5029ccbef11b51374f8c38fef03358a3"],["D:/Blog/public/单点登录实现/index.html","111cdde5d02c9ce9278f633ca77bab6f"],["D:/Blog/public/原型/index.html","61bf77082cecf7c18b6c38deb8a99d2a"],["D:/Blog/public/合成复用原则/index.html","156b7ef67b0151906d995e739a1519f6"],["D:/Blog/public/命令模式/index.html","61bc8c58ede5ebe4359e89eb85b4f8e6"],["D:/Blog/public/哈希算法/index.html","a179b37f361c3064e76b6b7cefac9c41"],["D:/Blog/public/回文数/index.html","e2a2dd9ea10af57eb3e86edde8a6d1c9"],["D:/Blog/public/图床/index.html","9210ffa610c87df78a5711c7883289f1"],["D:/Blog/public/堆外内存/index.html","edafa52490f16759d1129c6ce1aed6ff"],["D:/Blog/public/堆排序/index.html","2b766a8ee9e380c22d90020620fcb863"],["D:/Blog/public/备忘录模式/index.html","6cbe2c65bcfa2ff117aabf5faf053552"],["D:/Blog/public/外观模式/index.html","2a72e2c822b124edb72858fdd1df6316"],["D:/Blog/public/多元函数/index.html","d2384c82e92a3884f4e183c4ac60e14e"],["D:/Blog/public/多线程/index.html","957bc31cd28748ec45bce0a614844fc1"],["D:/Blog/public/定积分/index.html","b1f6607e09f7ea1b842b3ebd6f32b514"],["D:/Blog/public/导数/index.html","2e08c7e6e449fb3f438f37e222a9fe25"],["D:/Blog/public/工厂设计模式/index.html","1a9775ccdd075224efb5b558cb79a355"],["D:/Blog/public/并发：原理/index.html","4411a5dd32f61a1e27f72435d876ec80"],["D:/Blog/public/广义积分/index.html","ef90eec2c41b4d39595649391729c436"],["D:/Blog/public/开闭原则/index.html","77da26b012aae7c1825d89d5d402bea1"],["D:/Blog/public/微分/index.html","82ba453541d6eaaef8a9bd0a2d286ef9"],["D:/Blog/public/微分方程/index.html","8be3a98e03c11f7e5908552d85c47786"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","c2de060c919096492f30e50b7375320f"],["D:/Blog/public/接口隔离原则/index.html","150c256828cd2fd92082202e6c68593e"],["D:/Blog/public/插值查找算法/index.html","162785ee43b6d0590f0a67146fbdf70a"],["D:/Blog/public/操作系统/index.html","d6793df03783720c973d1d64f58e0660"],["D:/Blog/public/操作系统概论/index.html","edbd6e3e32d66b09a0e25885d4793387"],["D:/Blog/public/数据结构与算法/index.html","ebc9348335659a1574e4beb304ffe115"],["D:/Blog/public/无穷小与无穷大/index.html","8ff0db5631d598d7b2793929437b66e6"],["D:/Blog/public/极值和最值/index.html","54baf76e385598f4be1d3357e65cb109"],["D:/Blog/public/极限/index.html","e7a14fca3ecbeaf7ddb6e2d7547a56c1"],["D:/Blog/public/栈Stack/index.html","7cd1a4964b610001828d71f1c9a14688"],["D:/Blog/public/桥接模式/index.html","7dd8cdf00357c8db5c5f4ae7e5f44cf1"],["D:/Blog/public/模板方法/index.html","ccd389d5d07cefe8ef9b258c2adb69c6"],["D:/Blog/public/沙箱安全机制/index.html","0813708bf56a1cefbdfc3b266276a91e"],["D:/Blog/public/洛必达法则/index.html","41bb559136b8338fcaf170af8d8c45e1"],["D:/Blog/public/浅谈IO/index.html","6eefd1da70023ca6a5d729bbdfc3c518"],["D:/Blog/public/测试用例/index.html","870c4918ef21d9c62da32aebdf79bdc8"],["D:/Blog/public/状态模式/index.html","f679dd069283281edf26e3e25eca5fdd"],["D:/Blog/public/生成器/index.html","74ea179f56f45f1959482ac81ee63414"],["D:/Blog/public/策略模式/index.html","b36a0adeba8d70061036af4da55cc6cd"],["D:/Blog/public/级数/index.html","8ac3b79703b19df9dfefb6b74ec7fcb2"],["D:/Blog/public/线性查找算法/index.html","e50140612f2815dfed2f82e1fdc995d6"],["D:/Blog/public/组合模式/index.html","5c7d6b9e514b1bdbfe980d21e2a3d8b2"],["D:/Blog/public/编码算法/index.html","a8aba8794395138a949d2fc9d5751635"],["D:/Blog/public/自动化测试/index.html","c8696defc2cac0e22d9b365604174929"],["D:/Blog/public/装饰器模式/index.html","76aceaee8689464c0eda09c55f849589"],["D:/Blog/public/观察者模式/index.html","beb4a4b9987455d9cb4da38d2997ebdb"],["D:/Blog/public/解释器模式/index.html","904891ccb8e2bfdbba88da12d88161c6"],["D:/Blog/public/计算机组成原理/index.html","d4c0855adf99c531b060e20d7ad602c8"],["D:/Blog/public/计算机网络-1/index.html","51423938e88218dc22f86892e8baf6e9"],["D:/Blog/public/计算机网络/index.html","c87f85f5be292d52019102018f358e68"],["D:/Blog/public/设计模式/index.html","72ff0bb58e9ecabc4b71044d9c65671c"],["D:/Blog/public/访问者模式/index.html","e6df9a5b91e85833d5617715d563ce2e"],["D:/Blog/public/责任链模式/index.html","9616885b9079f4de5568675ec1251978"],["D:/Blog/public/软件测试流程/index.html","9492406d4c663af244b0a44fd057c48a"],["D:/Blog/public/连续/index.html","5d3b8ebf5bc2aa1be8f8ff38a4a3aae8"],["D:/Blog/public/迪米特法则/index.html","b9adf56f928623546fd923b49514f99b"],["D:/Blog/public/迭代器模式/index.html","9058be3d914455976d0a249717cb5931"],["D:/Blog/public/适配器模式/index.html","317504f378031d499181159ff9932014"],["D:/Blog/public/里氏替换原则/index.html","2bd128d8210c631b5205e53d7334f849"],["D:/Blog/public/链表/index.html","5a4e57a4ffc26102109dd1387da00ac5"],["D:/Blog/public/队列/index.html","77921e33f329ee4bb3fdaaa654808b58"],["D:/Blog/public/面向对象的特征/index.html","988780ec0a71d755774389f097d6c820"]];
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







