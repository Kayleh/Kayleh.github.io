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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","c7d3b6e11e5743499a101242003e0c4d"],["D:/Blog/public/7种排序算法/index.html","6618c9780fec899447960967c751ae3a"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","e8e38cf93b80583c18c87e05cd01e640"],["D:/Blog/public/AIO模型/index.html","05bbad159d755827ba92f23cea2743a5"],["D:/Blog/public/Array/index.html","0ca227e41796e6cfbe3bc62367879669"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","f861ebc2dd4b5298aa11fcb46ceb7157"],["D:/Blog/public/BIO阻塞模型/index.html","85cba8c9eb8edfb28fd60ce19dc4415e"],["D:/Blog/public/C-algorithm/index.html","6f04541a832a19e74cae3dfb4a6dbd8f"],["D:/Blog/public/C-prime-plus/index.html","c397af8899836370103c9bac03768077"],["D:/Blog/public/C-programming/index.html","df309702d8bdc702930fdd48d4852bfd"],["D:/Blog/public/CAS-and-AQS/index.html","76a7ccf662156d3983aa5b99016f4afa"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","15622c84e2bf704b751eea1f8a9d07e2"],["D:/Blog/public/GC/index.html","1dc3e733dff2807e56685278a4fc6325"],["D:/Blog/public/Good-use-of-pointers/index.html","04cbaeb5f46d2057812f2dc2e3345d17"],["D:/Blog/public/HTTP/index.html","43ce6da37ee029073e70095631ab91cf"],["D:/Blog/public/Head-First-nginx/index.html","f3934da4bfdb004ab8ac0c241e128454"],["D:/Blog/public/I-O模型/index.html","ada260daaa88784221a2eb574eea2197"],["D:/Blog/public/IO/index.html","053f4f3e28dbb9c3a6a72c0ef4efa50f"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","d009465d7e78eb21655f94043b6c439f"],["D:/Blog/public/Interface-test/index.html","fd77552051ea09f349bef9b7ccf5f630"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","f47abefa519d273a6bc862c526bf7cea"],["D:/Blog/public/J2EE/index.html","f686ae94297d44a17f73e7506236939a"],["D:/Blog/public/J2SE/index.html","bc2fcfe70afb0d41ea88e249b31bfcd1"],["D:/Blog/public/JDBC/index.html","393ae577ec0c9038a5af5ca1fee9cf7a"],["D:/Blog/public/JDK/index.html","7a3ddb3f8209f8c8760a905c71ec122a"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","ed4074af78e3c020f6b0e0f1a3d97138"],["D:/Blog/public/JVM/index.html","7ce22f56b0db992c73217973020cee9d"],["D:/Blog/public/JVM垃圾回收机制/index.html","dcb2c6b3ee2161aedf05fdf0dd313fa1"],["D:/Blog/public/Java-memory-model内存模型/index.html","65de44ab06d76c96eae42ec9e711bb89"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","1b8cd48cea7be481dc8000dcdbcfd5f0"],["D:/Blog/public/Java网络编程/index.html","4362ab80059c6bfc1d5e3cea99ff12b5"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","5434b0e883c8af4ca4416fef1af9fe60"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","b205371e85990f5256ca63dd1196800d"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","4180805acf29ba9acfdb46749cbc96a4"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","9d4e8333fedec2dac320849bcddc8e33"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","5dc94afc7e0edf9546f12c80cad18c83"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","4173a858344b3b6283344bc1fc209391"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","dc37a8db41d77aa563a5de32087c32e4"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","e936339fc9f45270b5f57bcacaec9ef2"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","98fb73a81bee913587ecc38d44b3ace0"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","c7deadcec54e46bd6d59fd30a843f5f9"],["D:/Blog/public/Linux/index.html","80419b6197301d7e3dc5086cdcbc7e31"],["D:/Blog/public/Lock/index.html","22b8f0d6d107e0d79dadd4bc806287d9"],["D:/Blog/public/MVC/index.html","15192a55e3b79ef158574fab79402efc"],["D:/Blog/public/MYSQL/index.html","f9199108257e555b9974747a110b586e"],["D:/Blog/public/Mybatis/index.html","767de8a3262f58dfaebdc0787179c7ec"],["D:/Blog/public/NIO模型/index.html","4e2d61a02a37ae4d45195a439dabd9a3"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","59ee684b9026d0476a40ae90863a0871"],["D:/Blog/public/Native方法/index.html","bc0f42767e675795d34559b894b61dd7"],["D:/Blog/public/RESUME/index.html","c7fd204eabfaf261daabe90a5bb4ed3d"],["D:/Blog/public/Redis/index.html","9125438dda9e3714d503713da15456b5"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","7380d3644a47940a682e9b716aa1dee7"],["D:/Blog/public/Reflection/index.html","298140a0ce0b31557d5573430c96b284"],["D:/Blog/public/SQL注入式攻击/index.html","2402579e6e9f6c29d06adc9f6cd9e479"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","a971a87a7c039c121aeb7e68a70b2112"],["D:/Blog/public/Seata处理分布式事务/index.html","65f720e89969ab25b9b43b2fd1ba6374"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","c4c8b34d080006dc5325832a8493f061"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","3084a9d02347bc83076965056f5f9598"],["D:/Blog/public/SparseArray稀疏数组/index.html","dd3dc864f2072657beb1e2633090962d"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","0ca72655b72d85fa945ffab6a7378744"],["D:/Blog/public/Spring/index.html","0693673e07cd08fe1f3acf1f8bd8f491"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","43da3026d8650b6c5da2c263536064f8"],["D:/Blog/public/SpringMVC工作流程/index.html","4c1e5501d52623c9010a9abea3605ea3"],["D:/Blog/public/SpringMVC环境搭建/index.html","62f8121605a3ea3b2cbb9b12474542d8"],["D:/Blog/public/SpringSecurity/index.html","813d641230f640741dfc4ac3d57c21a4"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","bfff7af36ec16dc1bf7d6ded237e1c17"],["D:/Blog/public/Spring架构/index.html","9df5dd14bfe7569a5005eb702637ef7a"],["D:/Blog/public/Spring的作用域/index.html","087dabf08f1c7d9c5fe1508e98a8249c"],["D:/Blog/public/TCP-IP/index.html","622979530cdc8346c0079822126d958e"],["D:/Blog/public/Thread-pool/index.html","9623f47e6d547859e5fa2dad5ee81699"],["D:/Blog/public/Thread/index.html","43fa590c35c1b8d25a4c909735417d3d"],["D:/Blog/public/Unitest-framework/index.html","2e5f2bf92438d4bba1d299256ae997b6"],["D:/Blog/public/XML/index.html","28165b3e0131c984dacb9b0e407d9b91"],["D:/Blog/public/XSS跨站脚本攻击/index.html","a17abba31e930ebba96cb003ba83a389"],["D:/Blog/public/about/index.html","2e42ac39ae30c5b41733b6d3cd338bc5"],["D:/Blog/public/app-test/index.html","3a635c9e904b263c047f82b918931de7"],["D:/Blog/public/archives/2019/01/index.html","92e5e321819bc2fc54410727b649cc4c"],["D:/Blog/public/archives/2019/07/index.html","bc473f3ca3570cd33241907b57e17818"],["D:/Blog/public/archives/2019/12/index.html","6dfa6237f23e5c6f7d2e3efa040b0931"],["D:/Blog/public/archives/2019/index.html","b44cde33f5f2808df4a8596601f43925"],["D:/Blog/public/archives/2020/04/index.html","bf692d8e1b65c9601cb26e48e5f7d223"],["D:/Blog/public/archives/2020/05/index.html","a5ab7b004c1d64aa6278d86558331a06"],["D:/Blog/public/archives/2020/06/index.html","dc8055f6ffb2d6117a60132368e5d5bb"],["D:/Blog/public/archives/2020/07/index.html","28e6a4239d9ad509551ccebaa1f78ae9"],["D:/Blog/public/archives/2020/08/index.html","890f4c75920ff3094ccf8fa03536c078"],["D:/Blog/public/archives/2020/09/index.html","fb525d66ac80b0c9d6b7493fe2b3f506"],["D:/Blog/public/archives/2020/10/index.html","79560fb146616c41c5728ca41431c70f"],["D:/Blog/public/archives/2020/11/index.html","7194e75c9574403f2a8553f548a130f3"],["D:/Blog/public/archives/2020/12/index.html","3c870718d084e9deb1a7b12030f30174"],["D:/Blog/public/archives/2020/index.html","61418fe7575dad00393cb66fa8e6b5ba"],["D:/Blog/public/archives/2021/01/index.html","633aeed404ec2cf122205a702d8314b7"],["D:/Blog/public/archives/2021/02/index.html","93fe052c7cc3ccb321c2469468adffa8"],["D:/Blog/public/archives/2021/03/index.html","9df6e78ddbc2188932846a6c6687ceb0"],["D:/Blog/public/archives/2021/04/index.html","8e8dd2bd49b0a4b1b60cfb69eec991cb"],["D:/Blog/public/archives/2021/05/index.html","2c2500204c2f32af78e82d971a625018"],["D:/Blog/public/archives/2021/06/index.html","9ca0c99d29aa27615aedf0cf259e50c6"],["D:/Blog/public/archives/2021/index.html","1d293e5df1512895a7e1396eded14f68"],["D:/Blog/public/archives/index.html","cb96c3532c360627b2e36431cb2e49c9"],["D:/Blog/public/categories/C/index.html","7b4845df94b6d14b8372142e31abef5e"],["D:/Blog/public/categories/SpringMVC/index.html","51a6a84fce3d341615c1cc799f9b027a"],["D:/Blog/public/categories/categories.html","912fb9af7a8a4fccbba9381fb54aac63"],["D:/Blog/public/categories/linux/index.html","68e887bc011b81c0d38744f23f35f3de"],["D:/Blog/public/categories/分布式/index.html","bbbb56948daba06cc9a10bd1f7f0d5dc"],["D:/Blog/public/categories/分布式/page/2/index.html","525f9eb0411a9bde6fc6f966c238a888"],["D:/Blog/public/categories/设计模式/index.html","cb03685ee8d3fe11acaef1b88b2f13b2"],["D:/Blog/public/categories/设计模式/page/2/index.html","9619c35cf80f1f646026375b869bc5b6"],["D:/Blog/public/categories/高数/index.html","7132d036fb8791134bdbfad1885ef0d6"],["D:/Blog/public/contract/index.html","b7bc67ece87af56e638976edd60e2f64"],["D:/Blog/public/css/first.css","5f67e85b0548a2ed4d86e6fc492f6782"],["D:/Blog/public/css/style.css","7d411daa8c8efa32a8165a9e5e488c82"],["D:/Blog/public/cycle-structure-programming/index.html","d74ef0877910ef11c48e5e08eeed78ca"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","dabd48f50b81eb4d93bf7069dd86b0f7"],["D:/Blog/public/friends/index.html","e43ce3df7e1e0aeea3a9d27c1e91a39a"],["D:/Blog/public/google8102e2f35ce9e391.html","b9d7b561db52024d704386821c0e9a46"],["D:/Blog/public/gulp压缩静态资源/index.html","6f4105c78804c52a29a91b5dbf435c90"],["D:/Blog/public/head-first-hashmap/index.html","b63a92cd03f2a089f1fe9399460eedec"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","0b7f3df2e72a7a7fedd7da37558bebab"],["D:/Blog/public/improve-robustness-(1)/index.html","86021c4657516b4dc800f9651d4875a1"],["D:/Blog/public/improve-robustness-(2)/index.html","4788c9e28f098f2ee744b0fbe932feee"],["D:/Blog/public/index.html","c695087e1093087be557a07731fe50f4"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/katalon/index.html","db7a39b777f2d9c0d7f37713d238549b"],["D:/Blog/public/link/index.html","c4c4996257c9c8c9f5840f060a428211"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","a0aae83f9ca5a9f4e3e81805f5629dd1"],["D:/Blog/public/live2d-widget/demo/login.html","604984ed11d466aacb0c0e5368db49a8"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","d01420fe1cc5919c0c6797a3e76734ca"],["D:/Blog/public/mybatis-缓存/index.html","3e1708bf0ce5020b7309c6b24d225dda"],["D:/Blog/public/note/index.html","c6bc08114e3597d3027f96011bbe4c2a"],["D:/Blog/public/page/10/index.html","97c8282521d7c4f9073cdb13f528016a"],["D:/Blog/public/page/11/index.html","4e134217c28eed31c2dac5c04eaa79ab"],["D:/Blog/public/page/12/index.html","e896cb5580cf81cccf94dbdd046f62a1"],["D:/Blog/public/page/13/index.html","c7588ef6b57d255bdfd98563d2deb3c2"],["D:/Blog/public/page/14/index.html","920599324f61153c097e5452360a6a52"],["D:/Blog/public/page/15/index.html","86bac767b3796fdfaf21571e8f963fa6"],["D:/Blog/public/page/16/index.html","89efc01e3e64adb61f224aad54addb22"],["D:/Blog/public/page/17/index.html","bb71417818d6afb6120316d4ee7251fc"],["D:/Blog/public/page/18/index.html","b4f1a356a65686851c8be1e509f203ba"],["D:/Blog/public/page/19/index.html","b0ba8d7abb79ac4308f017b0e78a5546"],["D:/Blog/public/page/2/index.html","3c5b06c4e3883e575f2409cd48a63527"],["D:/Blog/public/page/3/index.html","85a31b7902833e55484581bd7fe57613"],["D:/Blog/public/page/4/index.html","8eaaa9dccacdf88ec6dbbfa9ea30d56a"],["D:/Blog/public/page/5/index.html","d34b507be71be6e832735e35e1d57571"],["D:/Blog/public/page/6/index.html","28fb7d3d28363e3466b4939b74fabccf"],["D:/Blog/public/page/7/index.html","dcff8d83f74ec8dab073e2f77ff850bc"],["D:/Blog/public/page/8/index.html","5e9386019bf86fc81d33282b3111df67"],["D:/Blog/public/page/9/index.html","675bc34cab111b4fb73b57ce1f0b2e84"],["D:/Blog/public/proxy/index.html","334fea8b9c3ea5e545fa474e238df8b3"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","bc0146f2248c69c46da4da8c1d61e80d"],["D:/Blog/public/select-structure-programming/index.html","aad664d5dcb90f7cde867d88cb7a252a"],["D:/Blog/public/sequential-programming/index.html","7737fd790cfb777320c237204099826a"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","8c29e691f54e102a84268ae3227d26fa"],["D:/Blog/public/tags/C/index.html","da15837090648bd26b2b3a4d0724be04"],["D:/Blog/public/tags/C/page/2/index.html","1e4646f83af16cde6ed5bfba120f2994"],["D:/Blog/public/tags/Concurrency/index.html","f593d7755b109ca6f56d2058edcb612c"],["D:/Blog/public/tags/DesignPatterns/index.html","56684d3c68fc8b79f7856a3f46d96e64"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","0362d4076ea762cddf4dcdecc1bb379f"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","3cbcfb3092cb46a5a87d55b90d6ec6de"],["D:/Blog/public/tags/DistributedMicroservices/index.html","4be27febe61b98045a15be567a0b4c4b"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","3465a195bb6872836661fad2ee685f95"],["D:/Blog/public/tags/Interview/index.html","54ebed3f0ebe6816217a0ad20b903dca"],["D:/Blog/public/tags/Interview/page/2/index.html","f988005084eb8448cf7f510e3607c098"],["D:/Blog/public/tags/JVM/index.html","91252cc5c2b82d85fca257f2c6d88029"],["D:/Blog/public/tags/Operating-Systems/index.html","c71548b92a906fe15dc55508b3e1a5ae"],["D:/Blog/public/tags/about/index.html","118d3440fb30c536fccc0bb9bb734a67"],["D:/Blog/public/tags/ad/index.html","3e012315fa024b5e388198b1e16119fd"],["D:/Blog/public/tags/algorithm/index.html","2e3c47f6460ec9566cff30550d28d802"],["D:/Blog/public/tags/algorithm/page/2/index.html","d07d92e53fa2b296f176ef7f7fabc15e"],["D:/Blog/public/tags/computer/index.html","03f4a102e46c005d7ffd83a1b1bf0c9d"],["D:/Blog/public/tags/docker/index.html","3a806ee205ce7af209f2599e1d4cc0de"],["D:/Blog/public/tags/frame/index.html","bd52324de399b8fdf2d09d81d6a2f528"],["D:/Blog/public/tags/front/index.html","3e94a9a2cb74ef7f662eec396cbed1cc"],["D:/Blog/public/tags/index.html","23709fca014deb9310b6c66f87a49075"],["D:/Blog/public/tags/io/index.html","0ceb599c333058298c9eb9f7bd300570"],["D:/Blog/public/tags/java/index.html","4a8e4460440ce7e8e235e0161a30bd99"],["D:/Blog/public/tags/linux/index.html","0b2b71d628c3fd24d803295c873109b5"],["D:/Blog/public/tags/maintain/index.html","d04f78f1aeba865a9e4354001b1e2fde"],["D:/Blog/public/tags/math/index.html","26d2345f28287b025c5d0c7ff89fc53e"],["D:/Blog/public/tags/math/page/2/index.html","02c4caaa0a40c664f0367266498107e2"],["D:/Blog/public/tags/middleware/index.html","b327e23fb46a34204c77f9b91a668d77"],["D:/Blog/public/tags/network/index.html","bceeb755a2bcb99729b6bbfd42df4587"],["D:/Blog/public/tags/project/index.html","85743548f120797126ab0f5b25c47136"],["D:/Blog/public/tags/resume/index.html","13d4a2fc62d5dcfb80142cbe98e5cc8f"],["D:/Blog/public/tags/security/index.html","9aa478be01b008d7814d33e9bc441155"],["D:/Blog/public/tags/sql/index.html","d39636b1f39a2dd5c77e64c4062f5a91"],["D:/Blog/public/tags/test/index.html","004d4697be3c83326f1eb93198ab4ec5"],["D:/Blog/public/ubuntu-deb安装包/index.html","10f9aee578ca0dba2ba73f7cdc83a639"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","d6cd0441b97f9e23255922a7d3d0f071"],["D:/Blog/public/unix/index.html","4a54f2fef3588b4aadc47eeace0a593b"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","4975164a904964f650f2f2c49b10aba0"],["D:/Blog/public/web-test-combat/index.html","bd54097826bbe27a5977bf4e3cc4c619"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","b4dfa521fac8caf80cc27cf9b7591c1b"],["D:/Blog/public/不定积分/index.html","0f91c4a4266677b651cc18165595fb19"],["D:/Blog/public/中介者模式/index.html","dbf6342aae8d522ee339212c7068b1b3"],["D:/Blog/public/中英文切换/index.html","dae8565290770de41c0d29a3662b6f0e"],["D:/Blog/public/事务的隔离级别/index.html","dc37ece6be146c1287f2470110d38cc7"],["D:/Blog/public/二分查找算法/index.html","71e860732adb46ae01b307e500eab40f"],["D:/Blog/public/二叉排序树/index.html","0b692d8294a2a88ffd783ad1b07d4077"],["D:/Blog/public/二重积分/index.html","e13bede86917658ac687173c631a50bc"],["D:/Blog/public/享元模式/index.html","7ca9ff268eb90860d04c12bc1e74961e"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","4adcae1b09986ebf7296c123f76dbc6e"],["D:/Blog/public/代理模式/index.html","580d18972dda1d5e1c43b297d8ba56e4"],["D:/Blog/public/依赖倒转原则/index.html","9e75a11feb0c171089f41ba6b5be4197"],["D:/Blog/public/偏导数/index.html","2e8fcae505fa40cac032f9aee8139e84"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","8e113f06b2d7d4180fde383d5295ef50"],["D:/Blog/public/函数作图/index.html","26cc9a4cce33c59c255f94104c3efcc3"],["D:/Blog/public/函数和指针/index.html","15dc201161501862131b8b6cd915bf25"],["D:/Blog/public/函数的单调性和凸凹性/index.html","58d8ef0211f192985d4eb53e1a678544"],["D:/Blog/public/分布式的微服务架构1/index.html","c0bf2c300e66a53d89c4b477c09f0a29"],["D:/Blog/public/分布式的微服务架构2/index.html","92722981a61d3ba73c7f0f98a1de071b"],["D:/Blog/public/分布式的微服务架构3/index.html","7108120e9f4933dd602d03a9a3a3645d"],["D:/Blog/public/分布式的微服务架构4/index.html","5eea2e87d01a269e2305dcf80d02c698"],["D:/Blog/public/分布式的微服务架构5/index.html","33930b801d5959888466a8c8e9f6d2e8"],["D:/Blog/public/分布式的微服务架构6/index.html","95c69bc9017058aeb69569e2f749934b"],["D:/Blog/public/分布式的微服务架构7/index.html","a1509bd9351e023fac157dc13c70586f"],["D:/Blog/public/分布式的微服务架构8/index.html","a19bf691b8ebf1bc6ae580fcf55a96a0"],["D:/Blog/public/分布式的微服务架构9/index.html","67ff5b3614643f3d41dfd6ad433454b7"],["D:/Blog/public/前端安全/index.html","f5eafc062b74571d66036cefb5b44988"],["D:/Blog/public/动态数组/index.html","c52077df91037e396016d9dddcfcfafc"],["D:/Blog/public/动态规划/index.html","0fe953334b0fd3fac3242c52281924c6"],["D:/Blog/public/单一职责原则/index.html","301c861c365ac76002ce2a734ae98096"],["D:/Blog/public/单例模式/index.html","0dc65c126a22dd27d285b9408b28a31c"],["D:/Blog/public/单点登录实现/index.html","77dc124504c8aa5f6541b21baea96fd4"],["D:/Blog/public/原型/index.html","3aa31eb1802e5dab9a83dc7c20d13dbd"],["D:/Blog/public/合成复用原则/index.html","c70735e78a1d854a515e614c4870bf66"],["D:/Blog/public/命令模式/index.html","36463bc3f85ea02975d8dd63971d24ec"],["D:/Blog/public/哈希算法/index.html","9508a5243b9e349de792602c30934446"],["D:/Blog/public/回文数/index.html","9c3db2433d032823d9c34a16bd0d6ef2"],["D:/Blog/public/图床/index.html","2822d4189382cd1152dfdaa52d300830"],["D:/Blog/public/堆外内存/index.html","b11a1fd7142617e85028d260335edf2d"],["D:/Blog/public/堆排序/index.html","c3a1ca2635c82e8faf9587b3829f826f"],["D:/Blog/public/备忘录模式/index.html","8e77a7f8cc8ace84335b355cbd20142a"],["D:/Blog/public/外观模式/index.html","b0137411177ffb7f8cceab9cb5fe6ab8"],["D:/Blog/public/多元函数/index.html","128f2de00b7c5c5fc5b6811063f52647"],["D:/Blog/public/多线程/index.html","4148166f0dd4a04bbc75709e1819f96a"],["D:/Blog/public/定积分/index.html","fef6934ecb878484809a0fd827c93aaf"],["D:/Blog/public/导数/index.html","885bd3726b0c050240cab6cd37c7bc1b"],["D:/Blog/public/工厂设计模式/index.html","70cc5c536d7a4a1ea2a11ddda343b661"],["D:/Blog/public/并发：原理/index.html","3c0d80e95df6532608e8bf9968405368"],["D:/Blog/public/广义积分/index.html","5aa17e22ba2ec01e30fde5fa2544ef5a"],["D:/Blog/public/开闭原则/index.html","158d4a7afb3691781ac1b80e712ae29a"],["D:/Blog/public/微分/index.html","cecf2e020e007d90ba5abc4e5554f000"],["D:/Blog/public/微分方程/index.html","e041713800a43f0f6ec9becc8d423514"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","b1cec6fc25008c6bf1829665badb0c88"],["D:/Blog/public/接口隔离原则/index.html","b745abfa3c5a4df6a787bff8078e560d"],["D:/Blog/public/插值查找算法/index.html","dee5073f80e2ee2971c7bf6fceac7715"],["D:/Blog/public/操作系统/index.html","a5b1dd113a859e78e685fe637d323952"],["D:/Blog/public/操作系统概论/index.html","73bdc8a9e627821ca1db4131504bd7d2"],["D:/Blog/public/数据结构与算法/index.html","53a53368db687fe137c1b642cb79cfba"],["D:/Blog/public/无穷小与无穷大/index.html","4dcae2bcaaec0868aa47b6c44554b1bd"],["D:/Blog/public/极值和最值/index.html","905657b914021a6b7f5e417db7ac2e13"],["D:/Blog/public/极限/index.html","bbcd4e0a3e99e68135b6500526c21b80"],["D:/Blog/public/栈Stack/index.html","91297b27d42d100d0e8f415b258ca4f5"],["D:/Blog/public/桥接模式/index.html","ed1e11cc4b3c85bbb60606b4e1f56ccc"],["D:/Blog/public/模板方法/index.html","57a1ec45278d024cee410b6c5b8fe52e"],["D:/Blog/public/沙箱安全机制/index.html","6a0a76df7955d40105ab13cdf1e225a4"],["D:/Blog/public/洛必达法则/index.html","99e1ac690569d6eeb4391bbe23170e64"],["D:/Blog/public/浅谈IO/index.html","afe634e7f58dfb905f4a9db17b0ec974"],["D:/Blog/public/测试用例/index.html","a95f5b242fe17a368be0bbf2ba57f481"],["D:/Blog/public/状态模式/index.html","90c335ccf176636421463f9dc005bc08"],["D:/Blog/public/生成器/index.html","0d593551f9e40fec3b0227acf19289a4"],["D:/Blog/public/策略模式/index.html","e1cebfb0647e8ac0789a9f44ef981110"],["D:/Blog/public/级数/index.html","adb3ae8082ae0d266a823d61b4888acc"],["D:/Blog/public/线性查找算法/index.html","fe63d91dd9c7512151d875ce44e38d8b"],["D:/Blog/public/组合模式/index.html","7614ce04fed66a8bf548a8d6f03b44c2"],["D:/Blog/public/编码算法/index.html","06d8e2a51a6c8c88aca738b242d4a829"],["D:/Blog/public/自动化测试/index.html","177f6894b4fa8ec508e2a855f8082b73"],["D:/Blog/public/装饰器模式/index.html","791df98b67dd2fd28e42cee48ea3a99b"],["D:/Blog/public/观察者模式/index.html","08231460288ca149f1751735c48bc722"],["D:/Blog/public/解释器模式/index.html","3f347dac33ce8815898dda7a8ee91298"],["D:/Blog/public/计算机组成原理/index.html","4f085588eb83ea244c7f24be24568422"],["D:/Blog/public/计算机网络-1/index.html","e200a0f0202ddc7ae75d262b98ac81b6"],["D:/Blog/public/计算机网络/index.html","9adb727c3fecd8012465dbd8b8dfb267"],["D:/Blog/public/设计模式/index.html","5149600fdfb1b4f7984f14a7a57a0cfc"],["D:/Blog/public/访问者模式/index.html","8c378ee01d43e43a3841a73d16c5c4f6"],["D:/Blog/public/责任链模式/index.html","2016d09153b8cd473dc243489a64ce0d"],["D:/Blog/public/软件测试流程/index.html","7c642aef465431dcbca1cd279e98f0fa"],["D:/Blog/public/连续/index.html","b2f862abc2c80b6e6f34bc17a6aa0bc8"],["D:/Blog/public/迪米特法则/index.html","b0912b0a5221931f0e81976a470563c5"],["D:/Blog/public/迭代器模式/index.html","280d4f85883970afdfa340a4c7dc5a5a"],["D:/Blog/public/适配器模式/index.html","541ab0797e14cca4b66819174e621b44"],["D:/Blog/public/里氏替换原则/index.html","c8fb9909e281c079bbeb553ada9a7760"],["D:/Blog/public/链表/index.html","1eb893c29bd7804d628724ef50855d18"],["D:/Blog/public/队列/index.html","37a2762a3956c004208be7ee23339d92"],["D:/Blog/public/面向对象的特征/index.html","29553a791f3cb646db1907d4825205f8"]];
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







