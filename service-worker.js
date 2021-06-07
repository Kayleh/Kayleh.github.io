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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","e2b10430a8c728f8dfd7c648f7feaf06"],["D:/Blog/public/404.html","4f0d52987735a4c7576cd375c523f466"],["D:/Blog/public/7种排序算法/index.html","ba49ca3d48873d4ea53cfa553f720727"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","849fd21bc5bb2c2e73f58b95b7b2deb4"],["D:/Blog/public/AIO模型/index.html","519e9c5270fc23fe27a29ef812b672bf"],["D:/Blog/public/Array/index.html","eb498c5af7bd08551ab1f42b00749174"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","38c777e5c8d5e26c54aa6d518bce01fc"],["D:/Blog/public/BIO阻塞模型/index.html","fc6d07ccd456973bb6ae56540f76b45c"],["D:/Blog/public/C-algorithm/index.html","fffd270f2a462c143ad0c081100d98c6"],["D:/Blog/public/C-prime-plus/index.html","36ecad0a63144e73fb825abad8893645"],["D:/Blog/public/C-programming/index.html","14311b8f1bce0bcc4754e14953081d44"],["D:/Blog/public/CAS-and-AQS/index.html","d65f3ec5abe938e6d52ae3617bad0040"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","ac4a10d10477e12248528a43bf45cf35"],["D:/Blog/public/GC/index.html","0eca3533f5fa861ea51e84a793237fc3"],["D:/Blog/public/Good-use-of-pointers/index.html","fa8766d434c4cc5a72af086d8a5c7994"],["D:/Blog/public/HTTP/index.html","27838fdc6527de605810d4303c41943d"],["D:/Blog/public/Head-First-nginx/index.html","ef0d92d8a43abbb6b9b22dd593a3a69d"],["D:/Blog/public/I-O模型/index.html","9a86f683c1bc8e9d7e8e96fd3dea0154"],["D:/Blog/public/IO/index.html","6e059d41c76d13c420b34781287b3267"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","9b1d8b55fc28f408a60ce5d7a4bd64e0"],["D:/Blog/public/Interface-test/index.html","d10edaf01a821618ace5ab182b057e2b"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","93411b8d9d08d5aa209be6e940370dae"],["D:/Blog/public/J2EE/index.html","f60217ea082b2242ec4e556a2a9dedcb"],["D:/Blog/public/J2SE/index.html","86ce220b095557b9b5d1f960f3b02efc"],["D:/Blog/public/JDBC/index.html","5082b4ae46fcf0cdf7439d9e0a24b64b"],["D:/Blog/public/JDK/index.html","c0863c187e37a0506af9e3e4c80d938f"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","c686e1d880ed69014569bf32525c3bba"],["D:/Blog/public/JVM/index.html","ffc9e7a83a7aa0a7c4a3fe365c153df0"],["D:/Blog/public/JVM垃圾回收机制/index.html","08d13763c5710ae11fb3e8308c0d80e1"],["D:/Blog/public/Java-memory-model内存模型/index.html","51d66b702b2ba3856991d2cf1162d077"],["D:/Blog/public/Java利用Sping框架编写RPC远程过程调用服务/index.html","6c93d17e1e47f5c5254ffbd1c85abedc"],["D:/Blog/public/Java网络编程/index.html","14fe47fde9dbbbe5e9583a4fe5425fd0"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","cb9b268bbf29d7b2aac57d0909cecda5"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","39600b0639486fabe77348be40af572a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","5426d1fad73aaeadcab333e3b41f4d0a"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","41fd11b3ad506c614c3b4fd866f666a8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","568e40fa378d208905a8e72a245a5617"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","f0d4b73086794c4f5c0af56df115aa94"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","f54b91671358bdc639ba8941c9016d62"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","e93ebb8c5872c5494df1f5c99c2c0eda"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","2c7e328985e04d1dca50881e822db437"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","4dac8d8505897a797d2990195b6330b0"],["D:/Blog/public/Linux/index.html","a24a9ad1029cb4995976de4dd81f3fd2"],["D:/Blog/public/Lock/index.html","e9d11a69cd1849b11707d5de4b95c4fa"],["D:/Blog/public/MVC/index.html","67c6fba9e0a7596484cd481f3e1d1a09"],["D:/Blog/public/MYSQL/index.html","be5db521d1272905c44bb376275228e0"],["D:/Blog/public/Mybatis/index.html","0ea0cb20edb93342067c1e76982f6fc9"],["D:/Blog/public/NIO模型/index.html","8d50c9bead2a1fd6a5d509f55a8bed66"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","1d771f8987a130d47facf2a158e82c0a"],["D:/Blog/public/Native方法/index.html","63a8735f81e461d634e94e51296681fe"],["D:/Blog/public/RESUME/index.html","5819d85923927e1aa2a04719bffea3a1"],["D:/Blog/public/Redis/index.html","d0c9386c77ae811600839184bd9d97be"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","d04340ee558e24e077672de513232bde"],["D:/Blog/public/Reflection/index.html","226ad805a4dca611711e144a7c0f6432"],["D:/Blog/public/SQL注入式攻击/index.html","1e2003693ff338d252023d0e50b8e9f1"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","e14f3eb75670b4f1323de245dc82f6d5"],["D:/Blog/public/Seata处理分布式事务/index.html","f2b71d01db2a9a8d86c1aa5606708aa1"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","a2ec972f763b8e32b956ef1f5ed98974"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","6e5f160cd68a8e9c7d2f89876457c883"],["D:/Blog/public/SparseArray稀疏数组/index.html","6c9715b6f601d259aea5942763d752be"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","ce3e866aaf8d7e78eba50769f6b8f2d0"],["D:/Blog/public/Spring/index.html","bae40648076572d25066c5f06e257e43"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","9c609306fdc581a29cf3704c2b901d27"],["D:/Blog/public/SpringMVC工作流程/index.html","292d84784b711db667a9f6676a0dd417"],["D:/Blog/public/SpringMVC环境搭建/index.html","78da26051f0e620a6a2b6616ccc3ecd1"],["D:/Blog/public/SpringSecurity/index.html","f31eb42d20ca0e9c17df55400ea75f1d"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","c3e6b10d24e56af0fd817e94968d27d7"],["D:/Blog/public/Spring架构/index.html","94cbdf22ce2525478224034b9d904446"],["D:/Blog/public/Spring的作用域/index.html","cad70c8829434d4ffbb7574c54f8df23"],["D:/Blog/public/TCP-IP/index.html","4d04b8a19d4d9374c12a7e772bf0b134"],["D:/Blog/public/Thread-pool/index.html","b2ad8cc54935a54bde64b71167fdea51"],["D:/Blog/public/Thread/index.html","15eb95afb5284d4cf1539ad7502d3be2"],["D:/Blog/public/Unitest-framework/index.html","804d9723dc9c984b501962fd814a2791"],["D:/Blog/public/XML/index.html","88311cbaab3b099b313abfc9f5d23b6e"],["D:/Blog/public/XSS跨站脚本攻击/index.html","271862d897fec2f9e3b79d564513799b"],["D:/Blog/public/about/index.html","58de25cdc0fc7d004bdce6cd190ec9ec"],["D:/Blog/public/app-test/index.html","4e418e327dd9cc2fa0a5195abe789803"],["D:/Blog/public/archives/2019/01/index.html","4128897ab13313646b3167eaf37cb064"],["D:/Blog/public/archives/2019/07/index.html","d53f144c2d42b88af5ba59f9053aecc8"],["D:/Blog/public/archives/2019/12/index.html","3fe08e3d929520956fd21077e9213ee8"],["D:/Blog/public/archives/2019/index.html","12791e939ee2eb3bec8083d3e2ad0dd3"],["D:/Blog/public/archives/2020/04/index.html","b78d20f434e738825b5a1c9d25f57a2a"],["D:/Blog/public/archives/2020/05/index.html","2b347e8bcc3c6d99b536d21b45cc6d29"],["D:/Blog/public/archives/2020/06/index.html","93ad7b4c0e5f8a27a0f36f9fd6960005"],["D:/Blog/public/archives/2020/07/index.html","622874562faec161f544675cac6cced1"],["D:/Blog/public/archives/2020/08/index.html","19c3f0855083e38e21cc18dd7d779ce0"],["D:/Blog/public/archives/2020/09/index.html","6a5520fa97000175bca5e08fdd5a2785"],["D:/Blog/public/archives/2020/10/index.html","a309572b5c7c03178de58a87cffaa92d"],["D:/Blog/public/archives/2020/11/index.html","5f6ad2ddbaa021b93ce9be5334e5e5a3"],["D:/Blog/public/archives/2020/12/index.html","2871a9ea8cdb1b825b23f98472309206"],["D:/Blog/public/archives/2020/index.html","2e73e90a7c14585477ef0f1efcc2b4e6"],["D:/Blog/public/archives/2021/01/index.html","9aae032e495b4228958775a665f64e69"],["D:/Blog/public/archives/2021/02/index.html","47c307ce67b22d2ce8e38ade086f217f"],["D:/Blog/public/archives/2021/03/index.html","b892b1c13abf8f5785d0887081605813"],["D:/Blog/public/archives/2021/04/index.html","70b22bafe884bb46ad3c09e014d85b79"],["D:/Blog/public/archives/2021/05/index.html","dde20218d35746881ac8b4d1ad1b313f"],["D:/Blog/public/archives/2021/06/index.html","11f69704dc96e8434ea5590593717b48"],["D:/Blog/public/archives/2021/index.html","d674f3faa903687035a5f8925780cf41"],["D:/Blog/public/archives/index.html","a1e92d6f98c50b9756871f51583a7145"],["D:/Blog/public/categories/C/index.html","905b4f8fc19974fcc386d038bd7e0240"],["D:/Blog/public/categories/SpringMVC/index.html","1601f1b1ff2c3ff0f8954f420908c1f0"],["D:/Blog/public/categories/categories.html","b55f1d0f4a4677e070dbb6147df0e873"],["D:/Blog/public/categories/linux/index.html","d130f09b2394f59e1c0e79832799507a"],["D:/Blog/public/categories/分布式/index.html","a2f58f45a7966d681b4c69dad0b2df44"],["D:/Blog/public/categories/分布式/page/2/index.html","8a86a8b23ea499ec1bc7b93fe0f024cd"],["D:/Blog/public/categories/设计模式/index.html","73176b976bfb607bafdb67f5b931d4da"],["D:/Blog/public/categories/设计模式/page/2/index.html","e96ac007b6290e6568d01a6c67061b1f"],["D:/Blog/public/categories/高数/index.html","faa850a678a041c5e7ccf4096ff3a1c3"],["D:/Blog/public/contract/index.html","7ec598f1f266efff835a0352b349d8d2"],["D:/Blog/public/css/index.css","48ba79581ffadb36d0ee2525ba6814c7"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/var.css","bbc913906aa7858151d279f9434b86e3"],["D:/Blog/public/cycle-structure-programming/index.html","49afda60e294abe0235326b3657507ae"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","bc4f192af1c59528d222cb541a8925cd"],["D:/Blog/public/google8102e2f35ce9e391.html","3dd6581a77e0e4b6a9e47f3403db763c"],["D:/Blog/public/gulp压缩静态资源/index.html","27aedaf277be20bcdbdbcca1ad03ef12"],["D:/Blog/public/head-first-hashmap/index.html","353c650fa76a8d8e3e77039318814385"],["D:/Blog/public/head-first-netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/head-first-netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/head-first-netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/head-first-netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/head-first-netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/head-first-netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/head-first-netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/head-first-netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/head-first-netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/head-first-netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/head-first-netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/head-first-netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/head-first-netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/head-first-netty/index.html","2e36e0eb773572c7ebb26fa21bb68f0a"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/improve-robustness-(1)/index.html","41360cc7f5673b12471d50823eda4ad5"],["D:/Blog/public/improve-robustness-(2)/index.html","aba175a1a70ac3d659bcb267a04a0194"],["D:/Blog/public/index.html","1ba67cf8c7606c74e16bff167c301f4b"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/katalon/index.html","c33371a2b9ae18c67615d381f097c471"],["D:/Blog/public/link/index.html","39f762ec870b41f96360869bfc2046d1"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","08feb4b9aaae29e29dfc7607e08dddd6"],["D:/Blog/public/live2d-widget/demo/login.html","5ba2e109b92d08f3266006d8f35958e7"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","819b87961a93094ae4b4a1ea509041b6"],["D:/Blog/public/mybatis-缓存/index.html","fc7757e503e1e9d64f9ce82fb0d36209"],["D:/Blog/public/note/index.html","249a7ffda0cf27d850f7180ab76ed718"],["D:/Blog/public/page/10/index.html","9389f68f4bb5ddd331b9483360eec2db"],["D:/Blog/public/page/11/index.html","5d3d35f61c3cdc8672f72f5deb9dca5c"],["D:/Blog/public/page/12/index.html","4e91c8470a3e32a9d973fd5288bde825"],["D:/Blog/public/page/13/index.html","925d4e3be36b3aca8b187c050b89d5d4"],["D:/Blog/public/page/14/index.html","e72cb6335cb938861d75c067201f6ed6"],["D:/Blog/public/page/15/index.html","3a7fcbdc635d2c416311c0e3d880e49a"],["D:/Blog/public/page/16/index.html","f445a734e30bac4fc8894d19826d2724"],["D:/Blog/public/page/17/index.html","95a838a9ba80758b3a45e0b077b4d0de"],["D:/Blog/public/page/18/index.html","83f3714025ad335b5fed4e8535604fcb"],["D:/Blog/public/page/19/index.html","9bed5043ba6f4c52b42fc210288df4a8"],["D:/Blog/public/page/2/index.html","a160041206ecc37cb2cda94da072aebc"],["D:/Blog/public/page/3/index.html","c169762ef694de53dad6266cfea4f9f5"],["D:/Blog/public/page/4/index.html","e9df500ba7fbf154b8b453326d7be919"],["D:/Blog/public/page/5/index.html","62a0b71568a9970b977cece66fd29022"],["D:/Blog/public/page/6/index.html","3a0adef5fe2fc6e515567f5097c7478f"],["D:/Blog/public/page/7/index.html","9c13756ec356b7066909dce011fc6006"],["D:/Blog/public/page/8/index.html","33e73ae51016bbc554e91ff6c9b884b7"],["D:/Blog/public/page/9/index.html","ac5275def6e24fbda1da450338361422"],["D:/Blog/public/proxy/index.html","3f1e249e69504398cc04fd247ff941b1"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","25883c1c6fdce6024f6d03d1a79c9878"],["D:/Blog/public/select-structure-programming/index.html","14c2086b581c26544d2242de3e1ad30d"],["D:/Blog/public/sequential-programming/index.html","1e97f3e657c48359b13bb4a8815a61ef"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","48d438a1f7ae7fc1a1690a6e9aa2ccd2"],["D:/Blog/public/tags/C/index.html","aef4484e30ded23560c22a0f9a0596eb"],["D:/Blog/public/tags/C/page/2/index.html","518cbc325c12ca2a33056b9e996a03f6"],["D:/Blog/public/tags/Concurrency/index.html","6782efec41bf27b9768582edad1e34e8"],["D:/Blog/public/tags/DesignPatterns/index.html","f1a854c0de2bbef1b114a8c68e310796"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","95f605c995e2e8eac4331a81257d9502"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","e15178d88e982088fc60928df513c9fb"],["D:/Blog/public/tags/DistributedMicroservices/index.html","cb8e93e4453136c677028a1040a9ef67"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","e798af6a59f04c782b736166d2a791a2"],["D:/Blog/public/tags/Interview/index.html","33ecefb3dccc026130d19fd5232d90b4"],["D:/Blog/public/tags/Interview/page/2/index.html","b098cc836e69f79da7f972841ad38414"],["D:/Blog/public/tags/JVM/index.html","3a7a0cdaea28bfd7df8ddc94e9b86008"],["D:/Blog/public/tags/Operating-Systems/index.html","8e2095cace683472924704e26d310ac9"],["D:/Blog/public/tags/about/index.html","6c477adae0ca3840259869818b132b12"],["D:/Blog/public/tags/ad/index.html","5d8f22f722e65eaf8f5d4aca0396b3dd"],["D:/Blog/public/tags/algorithm/index.html","76d86f24cf5110316dd9cb4fea183b7e"],["D:/Blog/public/tags/algorithm/page/2/index.html","262d750c8b4befa468d5f0ea291e15f8"],["D:/Blog/public/tags/computer/index.html","ba2d890a00dc8b63442f2a38b7c38c78"],["D:/Blog/public/tags/docker/index.html","f31b0d038b3ebb8d44111e987801f2fa"],["D:/Blog/public/tags/frame/index.html","742f592750bd475f8aeb361e83c69c4a"],["D:/Blog/public/tags/front/index.html","a1d10e807c96116395bb1d2051c74d28"],["D:/Blog/public/tags/index.html","3e47aabd0a27b1b95276afab2655635b"],["D:/Blog/public/tags/io/index.html","1bf3b0faba11ac0108beaf0f9eb251f3"],["D:/Blog/public/tags/java/index.html","041d124b5094c17f0d30496924bf57ee"],["D:/Blog/public/tags/linux/index.html","7d0339a8db80108b2ffa265941a95205"],["D:/Blog/public/tags/maintain/index.html","d72bb53e6b8355a7669479040660e890"],["D:/Blog/public/tags/math/index.html","8f8a82700765c6d74ff9944b74c4beae"],["D:/Blog/public/tags/math/page/2/index.html","10318cb0c0f3a86999e536f687cbfe73"],["D:/Blog/public/tags/middleware/index.html","c75e310623317b3ee68e2cd9cd0c318c"],["D:/Blog/public/tags/network/index.html","4bfabf5f424ffec2a6093a2c49b64796"],["D:/Blog/public/tags/project/index.html","f12bd3fe7c5d720f157924c2fdef8416"],["D:/Blog/public/tags/resume/index.html","643b4ab016f49712190eaaa15aa97b90"],["D:/Blog/public/tags/security/index.html","1d35369d8d13600af22e651175b8d830"],["D:/Blog/public/tags/sql/index.html","cb1239b5fe8cda7a22afec0911595ef9"],["D:/Blog/public/tags/test/index.html","f8a3d42f79d0e2747d4304ccb36ed1c3"],["D:/Blog/public/ubuntu-deb安装包/index.html","eebbac7a2e2e17a96278bd25427f46ee"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","7777ce3370f862641d2434a2496f4473"],["D:/Blog/public/unix/index.html","81e826671df12a2d2fe6720331389ebc"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","5a8b411d2269eae837ba44cd1c9db583"],["D:/Blog/public/web-test-combat/index.html","65773908eab17ae5e95ea9c4f4c168aa"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","554eca2f2cba73dd75b3d48962aa5a45"],["D:/Blog/public/不定积分/index.html","097ff73db083df9da6fc4ff6c8de14e9"],["D:/Blog/public/中介者模式/index.html","14c0d892f83d0458cf3092e520b93535"],["D:/Blog/public/中英文切换/index.html","a8341741e7d0cb1337734d787b7e0580"],["D:/Blog/public/事务的隔离级别/index.html","c7275218053ce811ce5c82873384d9b0"],["D:/Blog/public/二分查找算法/index.html","888b81f41a28d2bbe17d0c08f3bfefe5"],["D:/Blog/public/二叉排序树/index.html","01aaa908d0038730e04dbdb0118ba742"],["D:/Blog/public/二重积分/index.html","9edbabc1b173ff6a33d0fecf9dea5bde"],["D:/Blog/public/享元模式/index.html","697bca1fd0cc5f82c4ebc44fc4c63e2b"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","ef37810adab7f21cbd470158ac8c4c05"],["D:/Blog/public/代理模式/index.html","a47639e0a238fcb3c7e44594d8aeb5a9"],["D:/Blog/public/依赖倒转原则/index.html","3866f364548875417b16ec8d7e045a77"],["D:/Blog/public/偏导数/index.html","1d39f9d1646d8cc67e0e1241c5a90923"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","62403b67d9ac80e3739a6ac845023b8a"],["D:/Blog/public/函数作图/index.html","08c429cb6b19f6b723599748e5221f76"],["D:/Blog/public/函数和指针/index.html","992b5aa23983e72fc9ab569dd4d832ea"],["D:/Blog/public/函数的单调性和凸凹性/index.html","1124745d2e597b92daaf4899e9ca2aef"],["D:/Blog/public/分布式的微服务架构1/index.html","0b785e2abb8280d692d5648a939bdb05"],["D:/Blog/public/分布式的微服务架构2/index.html","904491b57007bfe2386dc6a9f24224b4"],["D:/Blog/public/分布式的微服务架构3/index.html","d2b16039bde197462dabc5950e5b032c"],["D:/Blog/public/分布式的微服务架构4/index.html","b8e4e1fc316543312eb260e259845260"],["D:/Blog/public/分布式的微服务架构5/index.html","ea658f7ba215b03c0484d326eb6f068c"],["D:/Blog/public/分布式的微服务架构6/index.html","391cafe3cde01ae2a6990e6fcd841cff"],["D:/Blog/public/分布式的微服务架构7/index.html","1f94ef723e4f5c06e70d7416623798d9"],["D:/Blog/public/分布式的微服务架构8/index.html","6ead72bfa46d9890342d00cc2b051fa8"],["D:/Blog/public/分布式的微服务架构9/index.html","87f50feba9a4e432c7b66597a3c22afc"],["D:/Blog/public/前端安全/index.html","248d877f0e8e0d38dbb91caee5a0d888"],["D:/Blog/public/动态数组/index.html","9cba5f730fa1fa9e6df3fd5fe5cdfe2e"],["D:/Blog/public/动态规划/index.html","9ff71c2d5e9f4d1f2cc6f4dc043a592f"],["D:/Blog/public/单一职责原则/index.html","6476994db160fed03b7651602346e72a"],["D:/Blog/public/单例模式/index.html","5cace01a741b8c452cf1f5187965ace0"],["D:/Blog/public/单点登录实现/index.html","27d3be74876c51d29de04ede8c790937"],["D:/Blog/public/原型/index.html","9c2e1c593dfb2a4fc7c10f3adb1d2199"],["D:/Blog/public/合成复用原则/index.html","b8b04da8c9ca0da653260397548d4b2b"],["D:/Blog/public/命令模式/index.html","de5de3de09edfe7224f9a4341125beb5"],["D:/Blog/public/哈希算法/index.html","40c6fd666023df36d80f74b993b93355"],["D:/Blog/public/回文数/index.html","0c7486002bcce59ae9827f24a01c84f8"],["D:/Blog/public/图床/index.html","adaeb9c890ec6f897cb2587ea8c932ee"],["D:/Blog/public/堆外内存/index.html","c7f73be489e592656f1d0091ed7dfa2c"],["D:/Blog/public/堆排序/index.html","82044e66e6c4d243711b9a155df9e0b4"],["D:/Blog/public/备忘录模式/index.html","c89d5b3c0c44b14dcdb58bdee93cfd90"],["D:/Blog/public/外观模式/index.html","56553820c36da830d052f5524355af53"],["D:/Blog/public/多元函数/index.html","b7a49d7801e3e809c156a8e075bb92c1"],["D:/Blog/public/多线程/index.html","319773199a803160aeae84180d5d5d3d"],["D:/Blog/public/定积分/index.html","0ebdb99ad034c8a39454bf45c3ce6b75"],["D:/Blog/public/导数/index.html","485730de330b56051d14531ff1d9ab7a"],["D:/Blog/public/工厂设计模式/index.html","9201ac003dff1e11e66209652d24edf8"],["D:/Blog/public/并发：原理/index.html","ee3f2baa11875a294b28bc012dfaa27f"],["D:/Blog/public/广义积分/index.html","e305284403622b98ee0c0ab03a6d9a8e"],["D:/Blog/public/开闭原则/index.html","b2843bcca8869dfc4e508abb6bc565f8"],["D:/Blog/public/微分/index.html","be795e9ed0e4b9557dfe9135b58f6bcd"],["D:/Blog/public/微分方程/index.html","de5a2a95c5fd5f4278561344be5926b4"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","bec11575ab94bd278f52dd207c31ae60"],["D:/Blog/public/接口隔离原则/index.html","8083145c862d666b2e24c57945b9063c"],["D:/Blog/public/插值查找算法/index.html","0e738fe363d9a01cf2540869e933d19e"],["D:/Blog/public/操作系统/index.html","e65d8de7720587f636367796aede6afd"],["D:/Blog/public/操作系统概论/index.html","7856741b3f9a1546c30e786f9723cb28"],["D:/Blog/public/数据结构与算法/index.html","83c4e5107d42889d897c4f5d14d1bb48"],["D:/Blog/public/无穷小与无穷大/index.html","31536a4000a8f226709a1ee106a79379"],["D:/Blog/public/极值和最值/index.html","ac8068e72eb2287692a1972e525fd88c"],["D:/Blog/public/极限/index.html","7478e310a8e4726c9926d18c8075c5df"],["D:/Blog/public/栈Stack/index.html","dabd2c2a00443fa9b18bf5a96651d9f0"],["D:/Blog/public/桥接模式/index.html","416c08eef45927fc8b888f293b62bd59"],["D:/Blog/public/模板方法/index.html","c9750d069bdf200c606eb8efb78dc5db"],["D:/Blog/public/沙箱安全机制/index.html","b8df8c7050a43cab28000672c289795e"],["D:/Blog/public/洛必达法则/index.html","d25da887b667a3f950ee7613b9550fb8"],["D:/Blog/public/浅谈IO/index.html","90fb157c5a58c4a44dbf6ed2787b74ce"],["D:/Blog/public/测试用例/index.html","331f1ac9466202d83b0f6acb6eb8dc4d"],["D:/Blog/public/状态模式/index.html","e2c327155ace4068ab96a5f7eafb04ed"],["D:/Blog/public/生成器/index.html","addb2bb1699ffb6904025986b7fe44eb"],["D:/Blog/public/策略模式/index.html","baeb1949ea5d0101539d1da7a5025a4a"],["D:/Blog/public/级数/index.html","113ebbafff6635660292e14611318c64"],["D:/Blog/public/线性查找算法/index.html","4dafad911db314ad00fd0655b97317c3"],["D:/Blog/public/组合模式/index.html","a21504e4fb6377ea9196d26a1f15192b"],["D:/Blog/public/编码算法/index.html","6ada854c8e571f8bac560afd80613aa1"],["D:/Blog/public/自动化测试/index.html","73ba28a2f4be6938ce169ee96404d021"],["D:/Blog/public/装饰器模式/index.html","917a048126d82a9979bb8a0b816ec108"],["D:/Blog/public/观察者模式/index.html","e9b04af88c8e50049f7e26268b772d95"],["D:/Blog/public/解释器模式/index.html","b129d5c08200688c3c0056db68777608"],["D:/Blog/public/计算机组成原理/index.html","d96c0f4d82934db14a7a56a4d9ab20a2"],["D:/Blog/public/计算机网络-1/index.html","11537a2e41ff888511776f57406c55d1"],["D:/Blog/public/计算机网络/index.html","0c24b5c9ed185fc8e6555768631ff003"],["D:/Blog/public/设计模式/index.html","cd9d17d24beef9f33675bb090daeea06"],["D:/Blog/public/访问者模式/index.html","11434f7294c96108bb81d1f080f19ec5"],["D:/Blog/public/责任链模式/index.html","bfecb9a78a0de570b1a535128696bfa7"],["D:/Blog/public/软件测试流程/index.html","571e06b8539a17511f3a0a2af8617b54"],["D:/Blog/public/连续/index.html","41c4ad55561d53db10a96c3a826e1246"],["D:/Blog/public/迪米特法则/index.html","eda1975e2a3b4081d8a09e94503c9b1f"],["D:/Blog/public/迭代器模式/index.html","1722be8d9bc023b7e1788a2ac677aafa"],["D:/Blog/public/适配器模式/index.html","371b47b98c6431883c31682ed039a7bc"],["D:/Blog/public/里氏替换原则/index.html","1b0c86373f0dd55a980441592e49a44d"],["D:/Blog/public/链表/index.html","be40134efcb3773bd0bef545589ec439"],["D:/Blog/public/队列/index.html","f7cf870ded0a97c9f8a2a6eaecda66bc"],["D:/Blog/public/面向对象的特征/index.html","563b4421523dd0921c2d18983a4e7abd"]];
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







