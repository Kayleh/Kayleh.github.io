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

var precacheConfig = [["D:/Blog/public/10.file-input-and-output/index.html","77cf32942486c1caf154519438d37998"],["D:/Blog/public/7种排序算法/index.html","ef08502b90333ff1537136d02f56d887"],["D:/Blog/public/9.users-create-data-types-themselves/index.html","d3e9f60cb16f42101e3c2850b1f3099c"],["D:/Blog/public/AIO模型/index.html","e1c356d7c7108a1270cdec928308b65d"],["D:/Blog/public/Array/index.html","440725248211e533fde8bb24344f72ea"],["D:/Blog/public/BIO、NIO、AIO区别/index.html","935f51c85c3ad3a1634965974808453e"],["D:/Blog/public/BIO阻塞模型/index.html","807293bdeb390917d27fd48c154c1e72"],["D:/Blog/public/C-algorithm/index.html","9defe6e839a7a62dcdcf9f6451fae0b6"],["D:/Blog/public/C-prime-plus/index.html","f90d158e62aef054ac056f35b28c1623"],["D:/Blog/public/C-programming/index.html","01517d7ad62cd11585b6aab1a2d746ec"],["D:/Blog/public/CAS-and-AQS/index.html","f60c310e79107bf5547f1869762aa076"],["D:/Blog/public/DOWNLOAD/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/DOWNLOAD/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/DOWNLOAD/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/DOWNLOAD/index.html","99d1b163aa03947bc552faab80e15786"],["D:/Blog/public/GC/index.html","ad4697a48e514ce89b9477257d5d4b43"],["D:/Blog/public/Good-use-of-pointers/index.html","9ec787d97884b66fa3bd7b1ba06f1edb"],["D:/Blog/public/HTTP/index.html","297c8f79534472bd82090a05ead19e67"],["D:/Blog/public/Head-First-nginx/index.html","d2faa8923467a2d4b5398c7835f92caa"],["D:/Blog/public/I-O模型/index.html","f6d4efe39cea16787a3bb38ba6395510"],["D:/Blog/public/IO/index.html","2e3c1800b0c40afd495b299e934844f1"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","dbcc18c1360fadcfc218305e0a097020"],["D:/Blog/public/Interface-test/index.html","020aa5894c3f5ff8b506157404048f06"],["D:/Blog/public/Inversion-of-Control控制反转/index.html","082021a00871a605f871e358ebd65b54"],["D:/Blog/public/J2EE/index.html","a75deff3a9758c53e288f81dff13447b"],["D:/Blog/public/J2SE/index.html","f5f69cd174ac9d28c5333feef1f9236e"],["D:/Blog/public/JDBC/index.html","29502651724e4ea73389034a381f8420"],["D:/Blog/public/JDK/index.html","f7ffd7827be4ee0665f7caa608af6aec"],["D:/Blog/public/JVM-类加载器和双亲委派机制/index.html","8c23ec33066c19bb13270a8fdeaff17f"],["D:/Blog/public/JVM/index.html","c50cb88e561b776e3386aa54e8126753"],["D:/Blog/public/JVM垃圾回收机制/index.html","6166989e5e54df1db82bc355b6b2826d"],["D:/Blog/public/Java-memory-model内存模型/index.html","808c44834eb29fde50297f6b114d0116"],["D:/Blog/public/Java网络编程/index.html","b1d75303bbe6750bf9d7d41aa494f9c0"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (10)/index.html","669fc9ae045136cbb2f51d62b6448147"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (2)/index.html","ddcacf14427a417d8722072ae6471af8"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (3)/index.html","1b6d1ac100fa92ddd3c61c254cf04190"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (4)/index.html","e2829494bcb381ccb5d275e5c56ff163"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (5)/index.html","5a1a9356eff05c818452ec489441262f"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (6)/index.html","96b8f454ed3e5bc37adc05b4f5666c70"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (7)/index.html","bcd6b5a7ab43eb4ec386046e85fcbabf"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本 (8)/index.html","4fd5b0f300fb810d03ecc7eba5a7d4fc"],["D:/Blog/public/Java高性能高并发秒杀系统 - 副本/index.html","211b28d485c108dba8d4f488dcc1e251"],["D:/Blog/public/Java高性能高并发秒杀系统/index.html","39d93c521eb31c4d32f898e0d88bb76b"],["D:/Blog/public/Linux/index.html","611968c24e795d38d9a215940f3f9f72"],["D:/Blog/public/Lock/index.html","507c727dc36c82fc9276922de054bbf1"],["D:/Blog/public/MVC/index.html","a1c12d9f7b1a73afb9c501ae603d7975"],["D:/Blog/public/MYSQL/index.html","b25487d66987e3cfc33c830cd72e4bb7"],["D:/Blog/public/Mybatis/index.html","805c5c68a82a2e278ff2d1afa60ea060"],["D:/Blog/public/NIO模型/index.html","ce075f49d4c319c17920321514dcbbb9"],["D:/Blog/public/Nacos服务注册和配置中心/index.html","5e39a6e3aac25b2aea3d8a94f0a0921b"],["D:/Blog/public/Native方法/index.html","5f21d0bec9451e23c7c1e83fedf7cf58"],["D:/Blog/public/RESUME/index.html","c8d2df92fb154beb4e86923fbb56b98b"],["D:/Blog/public/Redis/index.html","181846f834637390da8857cebbcc4a16"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-in-Font-Download-Website/index.html","a8539461aeb418137db5949e53c668fc"],["D:/Blog/public/Reflection/index.html","e1f155f195e357062d46c6cb5278de7e"],["D:/Blog/public/SQL注入式攻击/index.html","da5c1218fa0e9e1aa8e9f448c72d29f7"],["D:/Blog/public/SQL注入漏洞/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL注入漏洞/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL注入漏洞/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL注入漏洞/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL注入漏洞/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL注入漏洞/index.html","48d72e90499d505cad046a331f5f1d0b"],["D:/Blog/public/Seata处理分布式事务/index.html","b4729487e49797fcd202bd539bfe5af7"],["D:/Blog/public/Sentinel实现熔断与限流/index.html","7d4ae46dbcb93eb7385192e0a8a08942"],["D:/Blog/public/SnowFlake分布式ID雪花算法(ing)/index.html","a4ccc99c14ed939c3001879c4b6f0993"],["D:/Blog/public/SparseArray稀疏数组/index.html","053894b901d76a2474ca89ca8804f0fe"],["D:/Blog/public/Spring-cyclic-ependencies/index.html","a8c8f381a590bab573fd1c8e28074dc7"],["D:/Blog/public/Spring/index.html","b51412e698c2bfbfa5b0e53aa1632d3e"],["D:/Blog/public/SpringBoot启动过程和注解/index.html","40138f82933adeffe6959ec28a43c4ab"],["D:/Blog/public/SpringMVC工作流程/index.html","bd7c7399494ff95f04841ad1cc50b1a0"],["D:/Blog/public/SpringMVC环境搭建/index.html","0f046f93f7d0c3450a872e135378d28a"],["D:/Blog/public/Spring、SpringMVC、Mybatis整合/index.html","dc104f39a970e183db44b5127ab95f34"],["D:/Blog/public/Spring架构/index.html","642c6f3a0557ae4ea036fbe3954cff79"],["D:/Blog/public/Spring的作用域/index.html","60d080da2c863350a5e24ba4c0f60735"],["D:/Blog/public/TCP-IP/index.html","8a6f55ad73dfc34761bfdeb2b832280a"],["D:/Blog/public/Thread-pool/index.html","b1b932ac45e61c8219398f28fa861efa"],["D:/Blog/public/Thread/index.html","26054bf36790260e953f06dd86f201d2"],["D:/Blog/public/ToDoList/index.html","5eb5af9aa8499c259256fbfddf1ac09a"],["D:/Blog/public/Unitest-framework/index.html","99c846463b9c63edfc9cc525b89b72d6"],["D:/Blog/public/XML/index.html","2fb041430d967a532dfaab0a7eb83f1a"],["D:/Blog/public/XSS跨站脚本攻击/index.html","1edacea2ba7bc55ae1573835dd4432d6"],["D:/Blog/public/about/index.html","1768192366dfce2e47cbad529e0ffd6a"],["D:/Blog/public/app-test/index.html","6bda699ccbe86606d857acea528381ee"],["D:/Blog/public/archives/2019/01/index.html","06c4c4dcd92671bcf38f5e261005ede1"],["D:/Blog/public/archives/2019/07/index.html","35156da4b906ecdff069a82105863835"],["D:/Blog/public/archives/2019/12/index.html","3e1bfa8a70673262e69829e67960ad6f"],["D:/Blog/public/archives/2019/index.html","f5c25cea50b2de8b03be9e1e87ec2dd1"],["D:/Blog/public/archives/2020/04/index.html","2e81164f112b3e450c054aee6734afce"],["D:/Blog/public/archives/2020/05/index.html","46f3058a664d0cb1fa7ee80ec52efc7d"],["D:/Blog/public/archives/2020/06/index.html","a0c267568ffbc900df676618d4acd348"],["D:/Blog/public/archives/2020/07/index.html","141b860ee7f14c4ab45d29a424d7c7b0"],["D:/Blog/public/archives/2020/08/index.html","96a847b914f3aca78685853c660dc197"],["D:/Blog/public/archives/2020/09/index.html","86aa3615fa91d63668052f45838d57da"],["D:/Blog/public/archives/2020/10/index.html","88f71f8ddef02c02264286fd471101e3"],["D:/Blog/public/archives/2020/11/index.html","968b91ba4a10fe763a338076bbcc98f7"],["D:/Blog/public/archives/2020/12/index.html","1fe3a079c976e2d68e091ee21e209e71"],["D:/Blog/public/archives/2020/index.html","9984a618b84380da343fa6d5a488db7a"],["D:/Blog/public/archives/2021/01/index.html","7321836f023dbc77e6337309b33fc797"],["D:/Blog/public/archives/2021/02/index.html","6cbd93f6573dc77dbe950ee96a5bdcea"],["D:/Blog/public/archives/2021/03/index.html","c1e533c63018346d03ac351a77059822"],["D:/Blog/public/archives/2021/04/index.html","81774c03b0d269b1d8b552b483322d40"],["D:/Blog/public/archives/2021/05/index.html","b58f4227a22a0a6879b71b476ebcb59f"],["D:/Blog/public/archives/2021/index.html","cabc8031ba738e89f0360191ff94c3ca"],["D:/Blog/public/archives/index.html","5f79e5f7e6f142eaa76e6fc27f94fa09"],["D:/Blog/public/categories/C/index.html","4d58132a69a4c020e082c7578b681ee9"],["D:/Blog/public/categories/SpringMVC/index.html","825b38084ce4089cf385ed350b9838da"],["D:/Blog/public/categories/index.html","262387f6fd2b6c73eb7ed7d76254120f"],["D:/Blog/public/categories/linux/index.html","f497e288aa1ab26f9669400678bb474c"],["D:/Blog/public/categories/分布式/index.html","24362a98dc5c5014fe3f97435cac4827"],["D:/Blog/public/categories/分布式/page/2/index.html","6189ea18be16efe18325ae0d64f3e2ca"],["D:/Blog/public/categories/设计模式/index.html","af9d7f68e83bb90ab5b777e01e779a29"],["D:/Blog/public/categories/设计模式/page/2/index.html","0f783a418b9d0ff449917a21d2233e6b"],["D:/Blog/public/categories/高数/index.html","ab7bc13e53132841d5ff244de3a0840e"],["D:/Blog/public/contract/index.html","429bb790df69023e82af845a04a92448"],["D:/Blog/public/css/animation.css","344d92c1f0fd96b463722bdbd1eab43b"],["D:/Blog/public/css/blog_basic.css","9feb81035fff81c31cd738728face9f9"],["D:/Blog/public/css/bootstrap.min.css","9a1ef05b26e712fd7ff5c942b291ee6a"],["D:/Blog/public/css/font-awesome.min.css","3d4ef32cd9a7e7fdd63122dce82ffeec"],["D:/Blog/public/css/jquery.simplyscroll.css","51acd864baccb282fa3194be5770bf5e"],["D:/Blog/public/css/lightslider.css","ba48b3ff558f174d41b9f55192f844e9"],["D:/Blog/public/css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["D:/Blog/public/css/prism.css","24b89198417bed48d7ca5b164041a468"],["D:/Blog/public/css/style-dark.css","f2c334747481790183a536877a2a3ba7"],["D:/Blog/public/css/style.css","f2c334747481790183a536877a2a3ba7"],["D:/Blog/public/cycle-structure-programming/index.html","e3d72f2d67306281d1fb77d097ae422e"],["D:/Blog/public/docker虚拟化容器(ing)/index.html","b0a3416d8c58819c993d562f3871f9a0"],["D:/Blog/public/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["D:/Blog/public/fonts/fontawesome-webfont.svg","26efb89ed5261b9be06bf30c659fbc75"],["D:/Blog/public/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["D:/Blog/public/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["D:/Blog/public/friends/index.html","6afe80a0973a316b01ecb41c805c9ae9"],["D:/Blog/public/google8102e2f35ce9e391.html","b25fcca934f41ca99212153031b6b210"],["D:/Blog/public/gulp压缩静态资源/index.html","e4d8d3c14ea2c08ba4893f4dfb9d54fd"],["D:/Blog/public/head-first-hashmap/index.html","cba672959a4597e2a6b1457af5c29dee"],["D:/Blog/public/images/favicon.png","d12c5d44bf4f476fefbb37301d28cffc"],["D:/Blog/public/images/pigeon.svg","b69d06c0ad38426a381f16dc8b99bde7"],["D:/Blog/public/images/test.html","187c39a600eb3c23173dfae8e8e139b8"],["D:/Blog/public/improve-robustness-(1)/index.html","6240cc035273a7e22ea5050e26f407ce"],["D:/Blog/public/improve-robustness-(2)/index.html","0288442ac54328bd260d1c27956e7981"],["D:/Blog/public/index.html","c02ef4f83de7d7eec40234776ada3352"],["D:/Blog/public/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["D:/Blog/public/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["D:/Blog/public/js/dao.js","c363d60daf4ce859889676b14ea1369f"],["D:/Blog/public/js/duoshuo.js","ded8b4594028cfdc3879ac65db7ba635"],["D:/Blog/public/js/google-analytics.js","2fcd642f83d7c1c2bfa40f7711312d51"],["D:/Blog/public/js/jquery-3.1.0.min.js","05e51b1db558320f1939f9789ccf5c8f"],["D:/Blog/public/js/jquery-migrate-1.2.1.min.js","eb05d8d73b5b13d8d84308a4751ece96"],["D:/Blog/public/js/jquery.appear.js","2cb12aa916a28633bc45c690f3d49edf"],["D:/Blog/public/js/jquery.js","f3346149a7173e70d39e6f36bfb178a4"],["D:/Blog/public/js/jquery.simplyscroll.min.js","a70be6523ebfa8ce75a4329b36ff799e"],["D:/Blog/public/js/jquery.slimscroll.min.js","35324914ef59ef5f075282ac5598564e"],["D:/Blog/public/js/lightslider.min.js","50f50ebefe7e6c7fc39dc21b4d4e5242"],["D:/Blog/public/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/typography.js","b70db68892a484e607cc41ddc7dba14a"],["D:/Blog/public/js/vue.js","9819b52dd5086ad645840a9f708a3817"],["D:/Blog/public/js/vue.min.js","5e00c46c15ce93392f19b6a43a6f21d8"],["D:/Blog/public/katalon/index.html","91c773b027625326018442793cc51a35"],["D:/Blog/public/link/index.html","f5f2ee3ea889d18d0be19ad2fcac9bb3"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/note/index.html","351cdafb89a5e0398277c2d3c39bef85"],["D:/Blog/public/page/10/index.html","c622cf76773eae68858a94a93b3047a2"],["D:/Blog/public/page/11/index.html","ae79dcda31529a747fb13c8b4866f9af"],["D:/Blog/public/page/12/index.html","41e71789227f86d26276e998b15f3200"],["D:/Blog/public/page/13/index.html","934071d53dde1f05ce1a643cc8ad9342"],["D:/Blog/public/page/14/index.html","6a5ef6577878c9c53596dc8e548d8698"],["D:/Blog/public/page/15/index.html","441e4cfe2e4e2fb07632a5a000ec57bc"],["D:/Blog/public/page/16/index.html","0f2ddd8556cc6a432c971a78bff7edec"],["D:/Blog/public/page/17/index.html","22c70c9dc55b48a8e117a3b76837827a"],["D:/Blog/public/page/18/index.html","c81bcafe0f4581b58a1cf33db6e04078"],["D:/Blog/public/page/19/index.html","b0a5767917246cb10b30ab6732677699"],["D:/Blog/public/page/2/index.html","453a47c0fa6dcd7895f7ced3d22cd963"],["D:/Blog/public/page/3/index.html","967dd3a8db825f7c42a3d76b08ffa398"],["D:/Blog/public/page/4/index.html","72ed1b7db73d442432a5255f3faadaca"],["D:/Blog/public/page/5/index.html","cd593d98660469c9d83df0d9475cca10"],["D:/Blog/public/page/6/index.html","4fb30bddaf6889b75b6d8dbf38e73d1d"],["D:/Blog/public/page/7/index.html","123389751cf20ec94792b7347f2059c2"],["D:/Blog/public/page/8/index.html","be999841ac1071c93eb05d04e7ab9fe5"],["D:/Blog/public/page/9/index.html","7dc3a2df95d77bafaf4bb0ff17a68410"],["D:/Blog/public/proxy/index.html","bac060a25f81762f681e3724a468872e"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f770df6ef431f50387fd9fc6f389d0e"],["D:/Blog/public/select-structure-programming/index.html","c3980a588dee8068debbb51a3885f79b"],["D:/Blog/public/sequential-programming/index.html","d9cd9eb614a14ced73a5019bc4dc354f"],["D:/Blog/public/tags/C/index.html","311af8719ceba47407265d2c593bfdb8"],["D:/Blog/public/tags/C/page/2/index.html","29593ab7d0404070c5d5914b64bfedd4"],["D:/Blog/public/tags/Concurrency/index.html","e0b15468e67a756021af03aee5bfee7e"],["D:/Blog/public/tags/DesignPatterns/index.html","bb1e78afb32b98cc9c22bf8ded1f0dbc"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","8df4b40c823335804909fad9a375c72a"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","5bf7f947caff695b704e58fea0e5b90a"],["D:/Blog/public/tags/DistributedMicroservices/index.html","4f9972cd9d222c5f4d8aba0fafa5655d"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","904795fd596dd02883fdbcc3bf47b4f9"],["D:/Blog/public/tags/Interview/index.html","1d77c34fb01ffbf77a918e42f8eaa418"],["D:/Blog/public/tags/Interview/page/2/index.html","3819e0d190d1311d487a735c88e3d095"],["D:/Blog/public/tags/JVM/index.html","642a75fbb29741bbf5178dcc44d569a8"],["D:/Blog/public/tags/Operating-Systems/index.html","e3fd494c01c36498884195bfbb3befa9"],["D:/Blog/public/tags/about/index.html","c3a1f281b53106a62cce564657b4f4ef"],["D:/Blog/public/tags/ad/index.html","3eedbdc58b538642713985c2f0e7ce43"],["D:/Blog/public/tags/algorithm/index.html","f0175422b73370c37eff17c321645b47"],["D:/Blog/public/tags/algorithm/page/2/index.html","8880c80a089a3ddc99dc496582d38678"],["D:/Blog/public/tags/computer/index.html","c5557c3306649990aa2a48054527134b"],["D:/Blog/public/tags/docker/index.html","f5af8853cf5ebf2c910581947f8bccf1"],["D:/Blog/public/tags/frame/index.html","3a3b52910435b7fa06157b00818854cc"],["D:/Blog/public/tags/front/index.html","4d5f9b7ba735efe618a2cd5f2382f87f"],["D:/Blog/public/tags/index.html","cce0185bbda91c103e87f0ae7cd772fa"],["D:/Blog/public/tags/io/index.html","a15617e566375ad1f01f42f4a865b619"],["D:/Blog/public/tags/java/index.html","c42b174ddb4204e162347ab8a585d6e3"],["D:/Blog/public/tags/linux/index.html","cd174706600ff6249dde88a5aff0bd0f"],["D:/Blog/public/tags/maintain/index.html","6545a7e336489a6a1ab8881ca91b0499"],["D:/Blog/public/tags/math/index.html","7b7f0321350e98248b2e8efd978411d4"],["D:/Blog/public/tags/math/page/2/index.html","4329757d9d57c7a21d8ab9d5b60acf62"],["D:/Blog/public/tags/middleware/index.html","274913571290eae499e7e1e99208312a"],["D:/Blog/public/tags/network/index.html","28f4a02c4ad311316fd8d2a284936cac"],["D:/Blog/public/tags/project/index.html","f0a3904aefddcf3016c35dc6e7957c31"],["D:/Blog/public/tags/resume/index.html","63440706908d69f3e34d9903eabbc84a"],["D:/Blog/public/tags/security/index.html","3f3ac6719d99fdf382b060af01ab652e"],["D:/Blog/public/tags/sql/index.html","b2c7c0b8526397117daa6d0cfdadef5e"],["D:/Blog/public/tags/test/index.html","79b3c7f10400a3c2d0691b03a9cad5f8"],["D:/Blog/public/ubuntu-deb安装包/index.html","a87b82ef8dde450a16650957c7769068"],["D:/Blog/public/ubuntu固定IP设置方法/index.html","9b0b925c329e42ed0a62ce362b5cb0e1"],["D:/Blog/public/unix/index.html","bd39a0e7946870b6aecca2d04c619068"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","5603e0f7972f387b4d5bb1d571857347"],["D:/Blog/public/web-test-combat/index.html","7f72ae9a193832e8214c7592d5bd6c5b"],["D:/Blog/public/【SpringMVC】-@ModelAttribute/index.html","a36b75b2dd0105d089e5d17524d9d12f"],["D:/Blog/public/不定积分/index.html","4c3953129df8041b9e29f25bb00cd431"],["D:/Blog/public/中介者模式/index.html","242dd51f3a8654a52d00bfd1c664aa56"],["D:/Blog/public/中英文切换/index.html","d7c68e3a40c12f8796ce6e54d4a7ca91"],["D:/Blog/public/事务的隔离级别/index.html","6e208f7e068071495cb0c2ef1e95efff"],["D:/Blog/public/二分查找算法/index.html","4a1c0ed82bc38159e89e1d20d6abe102"],["D:/Blog/public/二叉排序树/index.html","e468173c223ffac4ac04f2d7536f9182"],["D:/Blog/public/二重积分/index.html","fac12c1230c5e269cb3f094bfa92a38f"],["D:/Blog/public/享元模式/index.html","99ce17deef98dd46939176ea78c52b50"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/从输入URL到显示页面经历了什么/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/从输入URL到显示页面经历了什么/index.html","a3fb42c8cbc37746a0345227d03936e1"],["D:/Blog/public/代理模式/index.html","15ea2fff3225239c2a9a49f7c5f3bf3a"],["D:/Blog/public/依赖倒转原则/index.html","4e7c303d01ac1f303cd13db45fa0ca54"],["D:/Blog/public/偏导数/index.html","ae80536ff916d6df146eeecb912cc2ff"],["D:/Blog/public/关于CDN加速缓存不刷新的解决/index.html","35c3afc267c11b676b716b638c432904"],["D:/Blog/public/函数作图/index.html","129e42a2cd9c606e098e06c81559b5ec"],["D:/Blog/public/函数和指针/index.html","4a814a67ae0dbe7930692ce5f8eec215"],["D:/Blog/public/函数的单调性和凸凹性/index.html","e575a839b71e21f1690336a6c0eaebc0"],["D:/Blog/public/分布式的微服务架构1/index.html","69731da96df5abde0982d2e7037f72c3"],["D:/Blog/public/分布式的微服务架构2/index.html","984d13e976ed77316dd0575905fccd61"],["D:/Blog/public/分布式的微服务架构3/index.html","649bdca48e05370b30354f7beaca38e3"],["D:/Blog/public/分布式的微服务架构4/index.html","ee9bbf95c4251c71c14e3482cafaab9a"],["D:/Blog/public/分布式的微服务架构5/index.html","37b989398415319dc22eb1c87ebefaed"],["D:/Blog/public/分布式的微服务架构6/index.html","74b5c77314c33bdc10a7e51957ac2187"],["D:/Blog/public/分布式的微服务架构7/index.html","ca864a5530329db68f6abf16a8d3cee5"],["D:/Blog/public/分布式的微服务架构8/index.html","b88fb4def9c84a6c015760f1b45d5cda"],["D:/Blog/public/分布式的微服务架构9/index.html","18807e9533036c454d5e3236f5889f05"],["D:/Blog/public/前端安全/index.html","346e88565d5c923eea6b123f0e707d3e"],["D:/Blog/public/动态数组/index.html","764aed3357888f2a1702e4a8d194a85d"],["D:/Blog/public/动态规划/index.html","80ee57c4020148e60a55c68df9c48f64"],["D:/Blog/public/单一职责原则/index.html","0da084ba1f4213380e394e02f618ba85"],["D:/Blog/public/单例模式/index.html","dc6657c60fd3849b5f08bd358ff8b7eb"],["D:/Blog/public/单点登录实现/index.html","45b31335fc95b396a26d48eb40d2d9bf"],["D:/Blog/public/原型/index.html","b6bee91f49b04af0aad53127997a31c5"],["D:/Blog/public/合成复用原则/index.html","6e6042e8fd3c522d10b18b96dc7d35fa"],["D:/Blog/public/命令模式/index.html","0e36e4ab0b9fc1b33dcacfb73b4c707d"],["D:/Blog/public/哈希算法/index.html","a157f45a24656a722fccc8dc80b3d818"],["D:/Blog/public/回文数/index.html","8d3f1da0d6158a12957d7f911ae61299"],["D:/Blog/public/图床/index.html","b90b2ea022a1059ac6e8ba929087cbe5"],["D:/Blog/public/堆外内存/index.html","ceda0dde941be216b9f9feed2ec9889d"],["D:/Blog/public/堆排序/index.html","c69da1ffeee9256ab426458d5865d923"],["D:/Blog/public/备忘录模式/index.html","a6df4549bb40d1c714b941ef8af1fc75"],["D:/Blog/public/外观模式/index.html","ddc14dab1b29c7a95f2499e73177f56c"],["D:/Blog/public/多元函数/index.html","3aa827e52b26f9140c83b9e5cd7abb3c"],["D:/Blog/public/多线程/index.html","c6527141a846a34d6b6ad82cd43bad8a"],["D:/Blog/public/定积分/index.html","aeced768cad2fd68cc2379f4ef723649"],["D:/Blog/public/导数/index.html","e2df97cd6ef7ed7ced9ca6be8c27820c"],["D:/Blog/public/工厂设计模式/index.html","788875322ef48c7d38378eaaa2c2b99f"],["D:/Blog/public/并发：原理/index.html","018740aa4f62c0b74da2ed5b2ed564f6"],["D:/Blog/public/广义积分/index.html","d64e29fd208c5bf770094854ac13cdbe"],["D:/Blog/public/开闭原则/index.html","18ff65742c5a8ac14a57281cef8193cf"],["D:/Blog/public/微分/index.html","4e7c029d824211f4ae83b00fb549a2e9"],["D:/Blog/public/微分方程/index.html","d162c71dc01c2f512c69556cc3021180"],["D:/Blog/public/接入谷歌广告联盟Adsense/index.html","339198e3cfd4a878dbbfe2102509dc71"],["D:/Blog/public/接口隔离原则/index.html","8f75195eee3ed3caa63fbbde55cff472"],["D:/Blog/public/插值查找算法/index.html","b488871ce8396c43b600d34d68534f68"],["D:/Blog/public/操作系统/index.html","7f3c6c4bf3c08b2f251163fb6088c2ea"],["D:/Blog/public/操作系统概论/index.html","79fd5aff756f390315084d3315e3f121"],["D:/Blog/public/数据结构与算法/index.html","8b9b4a6edf90526688cdda8974c68945"],["D:/Blog/public/无穷小与无穷大/index.html","a6efb23bc0eeb3b6e883a1d7d0ac0f07"],["D:/Blog/public/极值和最值/index.html","08623e0c0f81115c913d4277dd6f3685"],["D:/Blog/public/极限/index.html","8f7ec0cb171a2c30dad0a37d39a48ecb"],["D:/Blog/public/栈Stack/index.html","936043c3677900d708119520e8784561"],["D:/Blog/public/桥接模式/index.html","3d05807d4b507fe7a33bf5e10c988cba"],["D:/Blog/public/模板方法/index.html","f46ad037cec067b2a664824bd0271041"],["D:/Blog/public/沙箱安全机制/index.html","39fb6061e6add3483bc3d50dcbb2536b"],["D:/Blog/public/洛必达法则/index.html","c578b883b59427a423cc6e4357aef76c"],["D:/Blog/public/浅谈IO/index.html","0c06f72c08eb86f8d5c3e0a0e884af67"],["D:/Blog/public/测试用例/index.html","8003f3dd373e7c62ca4d47a8ffb3d0cb"],["D:/Blog/public/状态模式/index.html","dbfbcc26460019e72a5b3cb8933b75d0"],["D:/Blog/public/生成器/index.html","1fc48aebeafdabcb2204734f9ac0a513"],["D:/Blog/public/策略模式/index.html","96ba37ccc7f6781adbe7e49789119fda"],["D:/Blog/public/级数/index.html","4d37edd2b593cb3a1658e3c1d7f6738b"],["D:/Blog/public/线性查找算法/index.html","05f846cb7f91fad6bc0205fdf75cac31"],["D:/Blog/public/组合模式/index.html","d98f96baeec14e810db842ab54ad8659"],["D:/Blog/public/编码算法/index.html","0618a43e114cc067a3e0ac4d77eb0875"],["D:/Blog/public/自动化测试/index.html","50db49a8206f277fe9a7f69595db23d0"],["D:/Blog/public/装饰器模式/index.html","a554a00017334eac1f4f8d75f67293aa"],["D:/Blog/public/观察者模式/index.html","835accede934edad0d4bedab5794377d"],["D:/Blog/public/解释器模式/index.html","b056cae4d87871459afecf7f5782e04d"],["D:/Blog/public/计算机组成原理/index.html","d883457dbdffcfe1f951d7f8e0a19d55"],["D:/Blog/public/计算机网络-1/index.html","5f27af61f57fc7a1067419e25444571f"],["D:/Blog/public/计算机网络/index.html","bf8f7483c83f522a95faa5f07774638f"],["D:/Blog/public/设计模式/index.html","ae666fe4a24e69f8b58ce8c13df08ba7"],["D:/Blog/public/访问者模式/index.html","a2a709b22b4c063f36cb3a901956599e"],["D:/Blog/public/责任链模式/index.html","ba98932aaf72df2a4575f9cadff438d6"],["D:/Blog/public/软件测试流程/index.html","c630f7ad50d258b4432507107299948a"],["D:/Blog/public/连续/index.html","0ccab63503390a689a2defdd86d652e2"],["D:/Blog/public/迪米特法则/index.html","498589be330d5120f49eb05e09848656"],["D:/Blog/public/迭代器模式/index.html","c738fc59b3fc94716e0951baed1126a8"],["D:/Blog/public/适配器模式/index.html","690c6b570dd407006770aa5dd5228ade"],["D:/Blog/public/里氏替换原则/index.html","646ba688f39c1561ecba05f59b9d1ddb"],["D:/Blog/public/链表/index.html","2339e20a4d81d2a5e4cdda7425358c59"],["D:/Blog/public/队列/index.html","9ef5845322123000523567f8a682a676"],["D:/Blog/public/面向对象的特征/index.html","d1eccdd008d3acb8322260d2cf4ea409"]];
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







