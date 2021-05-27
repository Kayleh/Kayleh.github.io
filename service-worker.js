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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","37792fcc5dce1ceebb273802a6e7ca90"],["D:/Blog/public/7种排序算法/index.html","1158ed3a49272e0112fcf9e709e6286c"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","7c97a66717ab0323ffd14c460b602703"],["D:/Blog/public/AIO模型/index.html","1504456bcf9cd567ace8482a081ae9de"],["D:/Blog/public/Array/index.html","51d4df04778ba6699c6e2d1213f6038d"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","593463e75172e7eef495f0cbf6467abf"],["D:/Blog/public/BIO阻塞模型/index.html","30fdfa714b26d3d22a5ac37b7135fde5"],["D:/Blog/public/C-algorithm/index.html","4c602343a7b6df478ce3bb729a5ccd95"],["D:/Blog/public/C-prime-plus/index.html","3c9e4efb207c027019eb53f7aa1983dc"],["D:/Blog/public/C-programming/index.html","f3a4e465ddda4caee885a85e657b0c81"],["D:/Blog/public/CAS-and-AQS/index.html","2deba38f97a4ced322bc347d80257def"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","d1faefb63fedc7aa7af891fe1b59b0d4"],["D:/Blog/public/GC/index.html","e789d856ec039f0f7a1c4bdcdee62611"],["D:/Blog/public/Good-use-of-pointers/index.html","aa7cc215ac6500cdc50c3104094f163b"],["D:/Blog/public/HTTP/index.html","7f5315659bc454f1d44dc9d7388de94f"],["D:/Blog/public/Head-First-nginx/index.html","4996a363d992bee008ecebf51c8c67e9"],["D:/Blog/public/I-O模型/index.html","1b912b26268e3a27fcf97ca8291b5f6f"],["D:/Blog/public/IO/index.html","da55863f7aebbeee03327f82243914f2"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","49b875a634df69ce96e19f22eb79ae52"],["D:/Blog/public/Interface-test/index.html","3a911c4c2f4fb5c0d32b76ae79084524"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","703bb9e9798f4586118cce886963470e"],["D:/Blog/public/J2EE/index.html","a8e88202ca8eb8a300ec139a940aebed"],["D:/Blog/public/J2SE/index.html","157f6a46fd1c9b1b44332aa053ad62e8"],["D:/Blog/public/JDBC/index.html","c2ac8e5cfcf97961e3d48e5f2dda149c"],["D:/Blog/public/JDK/index.html","e4a05bc5c7121dee8001222a4c99129a"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","8d7ce827357e1b0dbd2cb724a80fdac4"],["D:/Blog/public/JVM/index.html","7479bb0c91e7c2aa665375d2f73637d8"],["D:/Blog/public/JVM垃圾回收机制/index.html","54f9b6f2e975a9ca04d3704d9a24131f"],["D:/Blog/public/Java-memory-model内存模型/index.html","a07995f6221add1f161b8066e8aad226"],["D:/Blog/public/Java网络编程/index.html","c575f3ba3b41d08d5c10bba66cd9e814"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","278331fe03f7d6a23dadde4aa4ede3a6"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","20414e0100c264cc27ec9a447331dccf"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","f3a01b7400d723b09fdcf52059588323"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","2a53238f0a1e587b669d3f80f99cc775"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","03201899e97794123a14903e0960df2a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","965ad590e85ab0c336087280688e91b1"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","0a1fd167a9bb50da36de355018957151"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","fa07f6225f04d9acd2e7c5c61f66e251"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","f97d481784f82128db6c70b01c6bac47"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","d3bdf390809bec7d2f04a58ae07b732d"],["D:/Blog/public/Linux/index.html","bda8bad25dc0653ede991e0911150503"],["D:/Blog/public/Lock/index.html","d56862d1d1c7475c7caa2e4300f67d7b"],["D:/Blog/public/MVC/index.html","651b6aed52f4af0ff96e5565d06af3ea"],["D:/Blog/public/MYSQL/index.html","6cedb01cb7a34cb9e203bc6443df72a7"],["D:/Blog/public/Mybatis/index.html","2851c576ea79c10bbadc83e05728b24d"],["D:/Blog/public/NIO模型/index.html","1a8eb0ab192417a762c8301196716692"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","de24a807500318786aa48f72741b04ff"],["D:/Blog/public/Native方法/index.html","c3505b2295320402ec934344ec0634f9"],["D:/Blog/public/RESUME/index.html","6cf4759f4186a3b4110f838b73539210"],["D:/Blog/public/Redis/index.html","87f20e09bcf5a53609d1195d8f3140c9"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","5539dbe23852326186643972348a6e8c"],["D:/Blog/public/Reflection/index.html","d2a411c7567092afd435329c04900955"],["D:/Blog/public/SQL注入式攻击/index.html","ec7c3bcfc1e0d06e93a89e7b0e07e6e0"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","96e92fa7678a3125c50e2e881c252834"],["D:/Blog/public/Seata处理分布式事务/index.html","d8970f4511108eeff07a97a0c153a8f7"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","049ecaddd8f57448a6bd239e489f33a3"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","2de4177d516f8580209d4d10d1d94581"],["D:/Blog/public/SparseArray稀疏数组/index.html","49408f8d615f50812239dd882257aab8"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","c914fec1daf7962a365621d69b220d62"],["D:/Blog/public/Spring/index.html","278258bb061c533d37ea903b34e5091b"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","96932e5faf714d5163ff1de2c55f7aa2"],["D:/Blog/public/SpringMVC工作流程/index.html","d3e6dc4165a87dec7e46666328d77a31"],["D:/Blog/public/SpringMVC环境搭建/index.html","968114becafabe58e8e3201ae666718a"],["D:/Blog/public/SpringSecurity/index.html","bb0bab8a9f5d0d4fbd1d1542247e842c"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","ccc01b7321317eb17db862605b63a359"],["D:/Blog/public/Spring架构/index.html","8638792a0111d3959dcf37b4414d8309"],["D:/Blog/public/Spring的作用域/index.html","19991275abc83c77586d6a7b61751666"],["D:/Blog/public/TCP-IP/index.html","23a7afe8f3a2910a694ba0afa414f09e"],["D:/Blog/public/Thread-pool/index.html","8a57410a3fb7c259bef1c09795e302ec"],["D:/Blog/public/Thread/index.html","ea5cc5a8331097ef8d7019193ffdb233"],["D:/Blog/public/Unitest-framework/index.html","3f638f995b5f4aa98b0608fe9d197352"],["D:/Blog/public/XML/index.html","a97b8d847c0a775487152bddb8a7ab33"],["D:/Blog/public/XSS跨站脚本攻击/index.html","f9a87057126d9ef48b20c5582bdfb3d3"],["D:/Blog/public/about/index.html","f045257baafe48221430bc7acfa25970"],["D:/Blog/public/app-test/index.html","cb11c87c3faf37b59af03e11541688c1"],["D:/Blog/public/archives/2019/01/index.html","d188b996887cf1e90ea0898fa277f545"],["D:/Blog/public/archives/2019/07/index.html","050c0d3e7fcb79e06fbf2498812b946e"],["D:/Blog/public/archives/2019/12/index.html","a8e3fd84e89c7912e19452fa62acd62a"],["D:/Blog/public/archives/2019/index.html","bfd0c241749c592df6ded944497f4c16"],["D:/Blog/public/archives/2020/04/index.html","850a9f73cb3d552a3970889f62e7184e"],["D:/Blog/public/archives/2020/05/index.html","3c75201d0df90b7b132f0202c7abb0c8"],["D:/Blog/public/archives/2020/06/index.html","cfa6ab69831a662e1d6cd6a793abd97b"],["D:/Blog/public/archives/2020/07/index.html","c6e433e35978dcc83cd73d21070c6d03"],["D:/Blog/public/archives/2020/08/index.html","a59ec09f610c18b7d7b71ff0348b24f9"],["D:/Blog/public/archives/2020/09/index.html","b2d901a43ec499b64e126c19f746d756"],["D:/Blog/public/archives/2020/10/index.html","3b13c7313eb5d7b516acc65376c9e7cc"],["D:/Blog/public/archives/2020/11/index.html","67d4f2a6590bafdee914fcfe6e6785ae"],["D:/Blog/public/archives/2020/12/index.html","c3f3ddd56849950d125431dac680fabf"],["D:/Blog/public/archives/2020/index.html","85c471a72d8ca559f4442f514677ae7e"],["D:/Blog/public/archives/2021/01/index.html","1a6398c48bfa136be6a49308047f8cce"],["D:/Blog/public/archives/2021/02/index.html","80e63aaac7a12a62231230ac04ab604e"],["D:/Blog/public/archives/2021/03/index.html","9a9429495c3a434e32c7c11cd0febc81"],["D:/Blog/public/archives/2021/04/index.html","63091b887c0e9da0581733eb9fc4944f"],["D:/Blog/public/archives/2021/05/index.html","fd1cc9e0931847c642729d527afdbcea"],["D:/Blog/public/archives/2021/index.html","7326c9738618bcc5361303e31f1f9419"],["D:/Blog/public/archives/index.html","47cdf306aedf4adb306076bf6ac9f679"],["D:/Blog/public/categories/C/index.html","d312f8e8694e6342d9164e2d351e3c77"],["D:/Blog/public/categories/SpringMVC/index.html","a84d3b21cdd17074d27af131f6818df8"],["D:/Blog/public/categories/categories.html","92c6a2bcd7a77bf549b99bc51b28f765"],["D:/Blog/public/categories/linux/index.html","f53af69f799693e254116b9347559f89"],["D:/Blog/public/categories/分布式/index.html","3f4a7237aad4cbc66cc5866ff448784b"],["D:/Blog/public/categories/分布式/page/2/index.html","c5e2c8866a37ff774b07a7bd24145fa1"],["D:/Blog/public/categories/设计模式/index.html","9f11f886de79c9b632728821d23525c4"],["D:/Blog/public/categories/设计模式/page/2/index.html","495dc7c4615bf79b8438c6703065289e"],["D:/Blog/public/categories/高数/index.html","825eba1eafa318a7383c2d11bf23add8"],["D:/Blog/public/contract/index.html","72d040dc219eb72bfac27c4b327ef82f"],["D:/Blog/public/css/animation.css","c7081ffe6aa95e3ff1d16d039911ceba"],["D:/Blog/public/css/blog_basic.css","9dacb8ac8aa9ac6650c47f4faaee47af"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","ace27681c8601339fc15d48980bd88cb"],["D:/Blog/public/css/lightslider.css","82ea8b6ff1a7b7e2da7d4cd443ea75f9"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","f414831d7bf85ef57d2748844e2c0c78"],["D:/Blog/public/css/style.css","f414831d7bf85ef57d2748844e2c0c78"],["D:/Blog/public/cycle-structure-programming/index.html","a8eb89f98df3d784a55ec5ea18b17434"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","e6cc6c15a0c7e61d1eb15ce67ac73cce"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/google8102e2f35ce9e391.html","f76d06bbff470003c2cae38677eaf2e7"],["D:/Blog/public/gulp压缩静态资源/index.html","2537fb1a674396228865ffbba7b12cce"],["D:/Blog/public/head-first-hashmap/index.html","e105d022f02263422c40058e53db3268"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","2059906ec78cac23f62116067b368e79"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","f92a30f6c83aae456a5ead900e8a65c8"],["D:/Blog/public/improve-robustness-(2)/index.html","7e6238add11e1945f4b01ed64a3cf4cb"],["D:/Blog/public/index.html","efaebdca14d61a66e9341861130e77e9"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","7c145fae1f6f794a2ed90ac5c663a18c"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","56e83d16da03f891ff8c6d8d0b1b1bbb"],["D:/Blog/public/link/index.html","5603e3eb1d9da6d5c4dd46b155c01e94"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","04149c1f98d9609454704e20c264a7c5"],["D:/Blog/public/page/10/index.html","a813bd519bfef3af8facba7061d7e36c"],["D:/Blog/public/page/11/index.html","402ad493c970d2fe07e1cdd7da828f56"],["D:/Blog/public/page/12/index.html","af97ca129cf32f7894e75e3323d4244a"],["D:/Blog/public/page/13/index.html","b0189b25c54b9e51f25bbdde63385547"],["D:/Blog/public/page/14/index.html","9159091db8c122c09138bb38e036dd92"],["D:/Blog/public/page/15/index.html","2ae06d3d279f014d790d77a961a6551f"],["D:/Blog/public/page/16/index.html","1fde397c7d98b20218d7648c9593ac90"],["D:/Blog/public/page/17/index.html","0498eabae2d10dc28d9ee018d6206a7e"],["D:/Blog/public/page/18/index.html","f4c3671dab13aa4afaed220da093a62a"],["D:/Blog/public/page/19/index.html","5a97fc4cbf562625caacc2651133ad60"],["D:/Blog/public/page/2/index.html","f2fed38baa919944a22ac80155d94b24"],["D:/Blog/public/page/3/index.html","9b7d53235a1451c146fc5f8ed8b467b8"],["D:/Blog/public/page/4/index.html","a19e059a08ce6f0899d1a78f511ac63c"],["D:/Blog/public/page/5/index.html","74614fc6f724a0ee451718cc4c36ee5e"],["D:/Blog/public/page/6/index.html","13aac1f9bb32e1e98ba055b97ac8be25"],["D:/Blog/public/page/7/index.html","b00344848f225a6ad11d66077d021ccf"],["D:/Blog/public/page/8/index.html","01df1066023cbed90a27c84b73aed2b2"],["D:/Blog/public/page/9/index.html","255d8a4b80c7d6c4fbba50b8cd8eebba"],["D:/Blog/public/proxy/index.html","4ffeaf1bfd85620af9bc0ee54541e429"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","10b5219f97ef6fd87d66bc2463024c2a"],["D:/Blog/public/select-structure-programming/index.html","010329eff9087e36c156792712380288"],["D:/Blog/public/sequential-programming/index.html","8aeb12eb0113c9b6f0f9fdb4edbb142c"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","84786ae3e8a5ebe453f2d2ba228aa407"],["D:/Blog/public/tags/C/index.html","fe3893ef3fddd396ee947517fedfb2f9"],["D:/Blog/public/tags/C/page/2/index.html","877b3251c0023b3207f0cdf79fd68fb5"],["D:/Blog/public/tags/Concurrency/index.html","f8d7bec238eae9ca8099791be053ead4"],["D:/Blog/public/tags/DesignPatterns/index.html","145f994ffdc23ee1eec043ddbb0d4d8c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","2ffe1747969a95ab5df5cdb3bb4b833c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","a850cc0b45661d4f8ea5472318ecf492"],["D:/Blog/public/tags/DistributedMicroservices/index.html","bc0e44bf6556de8e878b986bb480ea89"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","ae91ec9395bdb2035b87b28bceab88e4"],["D:/Blog/public/tags/Interview/index.html","68a073d1d06d15e7ea9fa9d565c6d324"],["D:/Blog/public/tags/Interview/page/2/index.html","9361ad06e522222e5130c4d617da9af2"],["D:/Blog/public/tags/JVM/index.html","9e31cf0409eaa07f33fe545e7c887481"],["D:/Blog/public/tags/Operating-Systems/index.html","1b462551df0bb3727a9481b6c35b47f1"],["D:/Blog/public/tags/about/index.html","3fab31f436f2319cee3ba3a0c3f6ea37"],["D:/Blog/public/tags/ad/index.html","27a4214942d0e87ded05846800ae1c2f"],["D:/Blog/public/tags/algorithm/index.html","fdc57a9547548597ab38982f6c3e0e15"],["D:/Blog/public/tags/algorithm/page/2/index.html","28c6c983db6d1a2da8f4d124cb655afa"],["D:/Blog/public/tags/computer/index.html","dd32300c61dcef862847680c8b656363"],["D:/Blog/public/tags/docker/index.html","436940564afb15e44e991c7cb26601cd"],["D:/Blog/public/tags/frame/index.html","7d2d23d0c1af4d5f0c666b6f1dfd06b6"],["D:/Blog/public/tags/front/index.html","439991b33f8e79236496112810a5e055"],["D:/Blog/public/tags/index.html","312e1ba5be96713d5eb85af8614b1ac2"],["D:/Blog/public/tags/io/index.html","c8dff45df2cf4ee75bf1596d19959b9d"],["D:/Blog/public/tags/java/index.html","f1917ad2c0c18f0ff714f3669340891a"],["D:/Blog/public/tags/linux/index.html","a8d58646f2154e2e4604b87421bcb0c8"],["D:/Blog/public/tags/maintain/index.html","3ae971d1cc20d947c4155671161d5a2e"],["D:/Blog/public/tags/math/index.html","833ff5fe8fe41a1c01bb39f91ff55433"],["D:/Blog/public/tags/math/page/2/index.html","e9c9211deb2591d7e3c74a29ddabb27d"],["D:/Blog/public/tags/middleware/index.html","82ae2d47517dbd17d0cf40a68cf37cd9"],["D:/Blog/public/tags/network/index.html","0ec1eb0b5c382f78213b8a082ee3a4ed"],["D:/Blog/public/tags/project/index.html","26cb83027af2406f419fd08cb7229440"],["D:/Blog/public/tags/resume/index.html","860363998a7c7f97150d536197b76603"],["D:/Blog/public/tags/security/index.html","59c2f229ebe35bb96f3b0c98c5cd3470"],["D:/Blog/public/tags/sql/index.html","6470a1fcb3e34e3c7ef3460df04237ae"],["D:/Blog/public/tags/test/index.html","ee39e3bde65148a93201e7c6d52c321b"],["D:/Blog/public/ubuntu-deb安装包/index.html","3f6606c17d40d0bcac7a571ac4f92f71"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","0db823b67b4c9f89640ba97d1de4bb15"],["D:/Blog/public/unix/index.html","eb0800f97e815db07988a4376a6bbd57"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","78b5fb05906a559ed3cd50e7bdaeae42"],["D:/Blog/public/web-test-combat/index.html","2d8a127791d964f0db8323fc8567be70"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","7d94425b0fc4f48886803b870f67a58b"],["D:/Blog/public/不定积分/index.html","ea95de75bac32e7bf4a4832289861d5c"],["D:/Blog/public/中介者模式/index.html","7ef590d1aab22d8171f29f0040542c0b"],["D:/Blog/public/中英文切换/index.html","b6a12dd25699be2e38572d5ba16018cb"],["D:/Blog/public/事务的隔离级别/index.html","ba72fe5ae8dbcf9e92e754ef9193c710"],["D:/Blog/public/二分查找算法/index.html","d5938798759fcb1c0e845a74215a238a"],["D:/Blog/public/二叉排序树/index.html","2909b3ace602209a2bf4c759d38af799"],["D:/Blog/public/二重积分/index.html","8e1789c28b096c233a79cb4e722093f8"],["D:/Blog/public/享元模式/index.html","3a4f69dbfdfb3914a2f383335f861b23"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","c6b50fbd5200789fd693bcfa35a5661b"],["D:/Blog/public/代理模式/index.html","982be8613b23ac889ba40e9b26268ce0"],["D:/Blog/public/依赖倒转原则/index.html","f64de5f2fbdb8a215f7e7847197d970c"],["D:/Blog/public/偏导数/index.html","0652412ffd12064e10121d89e4d26577"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","0c2545da7ad6d13b24c59d1a435cade6"],["D:/Blog/public/函数作图/index.html","c3c32db919e0ccd655c7fd7718b86871"],["D:/Blog/public/函数和指针/index.html","666513f7fa97f9013244896f73f9e034"],["D:/Blog/public/函数的单调性和凸凹性/index.html","813a91ebf323139af691cbb34fdfe9b7"],["D:/Blog/public/分布式的微服务架构1/index.html","ba4ba24b4e041551e47e8f2e45f6a4a4"],["D:/Blog/public/分布式的微服务架构2/index.html","63f7abaf8a3d41df3d1072a2aa6f9ec5"],["D:/Blog/public/分布式的微服务架构3/index.html","193d5ad4f0929231acd674405409d591"],["D:/Blog/public/分布式的微服务架构4/index.html","269d41eb31a33d3e7c5a379d5d4f0306"],["D:/Blog/public/分布式的微服务架构5/index.html","6dd81695c0522f611fae994709ae2bbf"],["D:/Blog/public/分布式的微服务架构6/index.html","161906d7227efb872394e908aeaea58f"],["D:/Blog/public/分布式的微服务架构7/index.html","0a50a68394197a189fab6a6d10e6bc30"],["D:/Blog/public/分布式的微服务架构8/index.html","40ab0f39913de9dbb52c23ec48deb8ec"],["D:/Blog/public/分布式的微服务架构9/index.html","8b8de507da54bd3245514d6eff49c2f5"],["D:/Blog/public/前端安全/index.html","e11446307278206eb70315234e4fa598"],["D:/Blog/public/动态数组/index.html","3d33fe40d42f5aaeb10b17ada5a4ab81"],["D:/Blog/public/动态规划/index.html","682c167e855a6ce6368d5a9a8e8243c0"],["D:/Blog/public/单一职责原则/index.html","87b462c4cb2ab7c9a069042f81a19af0"],["D:/Blog/public/单例模式/index.html","3f8c484e6e59f7e3a6b815575a3d88f9"],["D:/Blog/public/单点登录实现/index.html","35809d548a085ec93aec2b09657390a8"],["D:/Blog/public/原型/index.html","3347cb4f922326c912392b4eba12f47b"],["D:/Blog/public/合成复用原则/index.html","41ded4a827c762e1c8e3e9acecb51bb4"],["D:/Blog/public/命令模式/index.html","5698ac140cc7476466768505078c0e55"],["D:/Blog/public/哈希算法/index.html","6bcb56024a30d417436d42927552317d"],["D:/Blog/public/回文数/index.html","3d794c635167beaf5324c27308c4a591"],["D:/Blog/public/图床/index.html","770c0efddf830d1bf7f1a7489bac2f5c"],["D:/Blog/public/堆外内存/index.html","e6eb66e8e1be1b67bc6d14e8fdb15788"],["D:/Blog/public/堆排序/index.html","51ce62e42ee61f8578e9a8c6ea2dc9bf"],["D:/Blog/public/备忘录模式/index.html","5a90db382587c33bad60270a7a099efa"],["D:/Blog/public/外观模式/index.html","07ed96ed6b0a59d4580686b585848e0f"],["D:/Blog/public/多元函数/index.html","cdd22a678b81b6cbbddb464afbd83911"],["D:/Blog/public/多线程/index.html","2d99fba3b3d4713c09ae5b99b5bc898a"],["D:/Blog/public/定积分/index.html","8e6e2951e82039b620d094f2832307eb"],["D:/Blog/public/导数/index.html","2ea74e41da7be34abdb5ab5b58955953"],["D:/Blog/public/工厂设计模式/index.html","383d2cd37b59e5b67c89f48929a18ee4"],["D:/Blog/public/并发：原理/index.html","0e61653eaf9f669e0ac35110c5d18ac2"],["D:/Blog/public/广义积分/index.html","16d39b5a658114e2c4e2886140f56a79"],["D:/Blog/public/开闭原则/index.html","89d9b39d20f5b1345bab919e5d28079f"],["D:/Blog/public/微分/index.html","a2192f239fb9d941ce585f5f19d8d6b6"],["D:/Blog/public/微分方程/index.html","fdc8542784620f0ba5da1ac00f7dadbf"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","b71518520f79adce2893449fe35a19eb"],["D:/Blog/public/接口隔离原则/index.html","fbcf50604fbf4d688fbf498ea26ee91d"],["D:/Blog/public/插值查找算法/index.html","420769b9e17256554de0ce4a40a38ebc"],["D:/Blog/public/操作系统/index.html","8db758057c2d20e08716ac12f0048bd4"],["D:/Blog/public/操作系统概论/index.html","47731654230ac0ed0145aa3511e36c39"],["D:/Blog/public/数据结构与算法/index.html","b811d638c00a249b22abc97133d11384"],["D:/Blog/public/无穷小与无穷大/index.html","7b1722c6b529c9d6b4731297d12039a3"],["D:/Blog/public/极值和最值/index.html","7a6a458886615761d203af334dc8fb77"],["D:/Blog/public/极限/index.html","362bad3aaa20a04489b8b6a46e77daea"],["D:/Blog/public/栈Stack/index.html","8893630a541103baf9c1999cbb6368ff"],["D:/Blog/public/桥接模式/index.html","d953f3bfaa14a1387d9c16426b40a3b4"],["D:/Blog/public/模板方法/index.html","91a2376db2e9ee3bcf9dae6568fea88c"],["D:/Blog/public/沙箱安全机制/index.html","ca0dbe038b76ea44a59da1c0b10a1332"],["D:/Blog/public/洛必达法则/index.html","92c9e3daeefc6a8e645ec3ee211690b9"],["D:/Blog/public/浅谈IO/index.html","2b9b28676b06b6e6d3e172e4fe8db02e"],["D:/Blog/public/测试用例/index.html","3dd1ef0c1b015fe1bef77eedf13765bc"],["D:/Blog/public/状态模式/index.html","2f95b60ee374254bf84095051648411c"],["D:/Blog/public/生成器/index.html","2a333e315cae929b0f95c073532c4eee"],["D:/Blog/public/策略模式/index.html","37d8c5607c1e8ebd40041421651ee9e8"],["D:/Blog/public/级数/index.html","c0d72c464907b1e87b48a894f29d7926"],["D:/Blog/public/线性查找算法/index.html","833e9e76b81f5533f4e47125deef1c92"],["D:/Blog/public/组合模式/index.html","d7993bda3199acb819ad0ec4c28d261f"],["D:/Blog/public/编码算法/index.html","64776cf9e8d3f0f88d3e184cfb4bb114"],["D:/Blog/public/自动化测试/index.html","8330cfe6b1b5786e80dcc1cbe394c07b"],["D:/Blog/public/装饰器模式/index.html","8b7d575d0a0fe3b981901a3496a8ee6e"],["D:/Blog/public/观察者模式/index.html","36805c412b7e39bff6821e181ca5d2e7"],["D:/Blog/public/解释器模式/index.html","710fd80d70e858f99b10017509212c08"],["D:/Blog/public/计算机组成原理/index.html","cbfdc6e89d6e27c9d6016cf4c3b8dd7c"],["D:/Blog/public/计算机网络-1/index.html","cdd1a033b58a4778ae93a700b53731d5"],["D:/Blog/public/计算机网络/index.html","3a42a5b0569cbbe12334f8c0f164d554"],["D:/Blog/public/设计模式/index.html","057d850779ed10a5cb502dedfdbaf2f8"],["D:/Blog/public/访问者模式/index.html","c2613b702588f94135263cbb088c4c6e"],["D:/Blog/public/责任链模式/index.html","745e167ff7a901e8b8fcadd9b9aa8308"],["D:/Blog/public/软件测试流程/index.html","bdf926b7a398c37dd9f6fdf9c813b618"],["D:/Blog/public/连续/index.html","3d0603b53fd6ad62dd951d3d46a75a02"],["D:/Blog/public/迪米特法则/index.html","daf68811cd532c4af704001ac229bd1c"],["D:/Blog/public/迭代器模式/index.html","dbf16dbb92e6286ffc4bd40623b54dd6"],["D:/Blog/public/适配器模式/index.html","40002eda2528d37f74328f9af5324a25"],["D:/Blog/public/里氏替换原则/index.html","84461872de6d7dd468bc41572924cc18"],["D:/Blog/public/链表/index.html","b8e3e4290150c3d78e29ab194c87f6de"],["D:/Blog/public/队列/index.html","aa3548d69b2f6766c67242bcd7245760"],["D:/Blog/public/面向对象的特征/index.html","af3bb72a78e677f28813db1d3c5d7d74"]];
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







