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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","95824288f89c64052e7ee35ec91f90a9"],["D:/Blog/public/C-algorithm/index.html","cae9a75580133ef22ca8d28d80ded146"],["D:/Blog/public/C-programming/index.html","6d13af3e23a4a7621e5a1c05f3ba1716"],["D:/Blog/public/Good-use-of-pointers/index.html","896dcfe21a7cd4d99a4eaae17b99047f"],["D:/Blog/public/about/index.html","c5a0a171904b3c0b4119b1dc1aeae152"],["D:/Blog/public/adapter-mode/index.html","b2381526bad9bc70752ea74b05d1c939"],["D:/Blog/public/agency-model/index.html","47ef1eeb8c84f46a8f33c372acde5910"],["D:/Blog/public/appearance-mode/index.html","f267161681e881d62b432c12eff0594a"],["D:/Blog/public/archives/2019/01/index.html","534072fa82f9fd0cf7cddd0b8c589e15"],["D:/Blog/public/archives/2019/07/index.html","8b369eee06cb007ca653aa60124c79ef"],["D:/Blog/public/archives/2019/12/index.html","9b558eafaa2a792339c7ca01f5144494"],["D:/Blog/public/archives/2019/index.html","d5dae66ac0fe793fb78e13fa2c5da9e8"],["D:/Blog/public/archives/2020/04/index.html","d86b701d14468a1cec25aaf4a327031d"],["D:/Blog/public/archives/2020/05/index.html","1c766763d016f83893d3e15afce2f31f"],["D:/Blog/public/archives/2020/05/page/2/index.html","e19ed26bc538392033e00dc4d28ea968"],["D:/Blog/public/archives/2020/06/index.html","e7092cabb0bce5977338149ee436621a"],["D:/Blog/public/archives/2020/06/page/2/index.html","419dbf493db6321f64330b78c43fde47"],["D:/Blog/public/archives/2020/06/page/3/index.html","c9fd5df3713895c17b828e53eefa0b01"],["D:/Blog/public/archives/2020/06/page/4/index.html","84d3928045549e0d866772b1e08cfd41"],["D:/Blog/public/archives/2020/07/index.html","1df9a026ee4a9d68db9895693fa978fc"],["D:/Blog/public/archives/2020/07/page/2/index.html","55154e4cacd60c52821c77240134617e"],["D:/Blog/public/archives/2020/07/page/3/index.html","e9660b35793604e7cf681e7d71c0ef06"],["D:/Blog/public/archives/2020/08/index.html","180aa34202466d790087fcb29c289272"],["D:/Blog/public/archives/2020/08/page/2/index.html","b086d8c18ec70c12519430ac65ffaf38"],["D:/Blog/public/archives/2020/08/page/3/index.html","d148995c9415d0e3a96ac531ecf6871d"],["D:/Blog/public/archives/2020/09/index.html","45f91839a10fbd8daa341f86a92f57e7"],["D:/Blog/public/archives/2020/09/page/2/index.html","eed7f9a18dfacac59bbf4e736dfe472a"],["D:/Blog/public/archives/2020/10/index.html","326469db5330e7868933ad4cdbd427e0"],["D:/Blog/public/archives/2020/10/page/2/index.html","bc8f74ae3589239d15bb55e0fc3ce436"],["D:/Blog/public/archives/2020/11/index.html","f261db1ac38c7c77175e53f411f229f9"],["D:/Blog/public/archives/2020/index.html","5f7b75e8fad0985da0ae827c65b89a21"],["D:/Blog/public/archives/2020/page/10/index.html","6c7dd7bc19970f4f470ebf4ba512e875"],["D:/Blog/public/archives/2020/page/11/index.html","70f31e5130828db5add0605003e2821d"],["D:/Blog/public/archives/2020/page/12/index.html","874d4cf9b4fa4347881fde62a82ff1f5"],["D:/Blog/public/archives/2020/page/13/index.html","7dd850f867bc7b4decbe87bc8c1b58d9"],["D:/Blog/public/archives/2020/page/14/index.html","64cb56665adfa8501ff154877793f734"],["D:/Blog/public/archives/2020/page/2/index.html","28044ac8b16176fbbf0a31ffdfc57678"],["D:/Blog/public/archives/2020/page/3/index.html","4737c38a012de68d9ef8b06390780438"],["D:/Blog/public/archives/2020/page/4/index.html","0d976ab2cd6daf2a1e8d70d72543da19"],["D:/Blog/public/archives/2020/page/5/index.html","fc856d4b2259ae7e408ac17611f692c8"],["D:/Blog/public/archives/2020/page/6/index.html","c004f39e2898f2fdfe518cc2e5546546"],["D:/Blog/public/archives/2020/page/7/index.html","a6fa83f2edea6871555a13e9d7c522b8"],["D:/Blog/public/archives/2020/page/8/index.html","9928b149bdf51d3b30bd818e43322d80"],["D:/Blog/public/archives/2020/page/9/index.html","0d83af437f84a00bdd57f5f4b611925f"],["D:/Blog/public/archives/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/10/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/11/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/12/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/13/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/14/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/2/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/3/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/4/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/5/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/6/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/7/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/8/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/archives/page/9/index.html","03f9b357e8f74e5f1a43e8177e705a2b"],["D:/Blog/public/array/index.html","2fc7e2af1d10c05a2e3a377e35863cef"],["D:/Blog/public/binary-search-algorithm/index.html","e831cd8eed5e7ca9655ea92997a99d9c"],["D:/Blog/public/binary-sort-tree/index.html","6fb221847b47665024277f72417312fb"],["D:/Blog/public/bridge-mode/index.html","6f02e857fa65445de0c3647def6bd25d"],["D:/Blog/public/builder/index.html","5224de45617977eafa22b58617b9ee5b"],["D:/Blog/public/c-pointer/index.html","7c30730e1926e080e51836b3997df1a0"],["D:/Blog/public/categories/C/index.html","b40a1629953ade51e035cdb030903649"],["D:/Blog/public/categories/SpringMVC/index.html","7d528bf219b22f41587226a917b24df1"],["D:/Blog/public/categories/index.html","c185c5d2d5f82464ebf6287afee6a68d"],["D:/Blog/public/categories/linux/index.html","42dbc0b3fdf449c2e651b027dbaa90cc"],["D:/Blog/public/categories/分布式/index.html","843a3b1431d7043926e4c1ff2bfb65a7"],["D:/Blog/public/categories/分布式/page/2/index.html","cde557e57d7c9b9848b389f4274588c3"],["D:/Blog/public/categories/前端/index.html","a2b538f068c07cdc7db84b9077f6ce50"],["D:/Blog/public/categories/设计模式/index.html","4709820a541d043256c0d8dd2e3e6754"],["D:/Blog/public/categories/设计模式/page/2/index.html","305472bffd1c2cb2237cce51153a3d73"],["D:/Blog/public/categories/高数/index.html","38c21ee8d599ea1db5faef3a107e5d6c"],["D:/Blog/public/chain-of-responsibility-model/index.html","ffad69d60ce6d947626c71555cd661ed"],["D:/Blog/public/chinese-and-english-switching/index.html","79b3b120adb22902b639216bcd8839f1"],["D:/Blog/public/combination-mode/index.html","d139ddfac6480a738f19d4b067e958fc"],["D:/Blog/public/command-mode/index.html","ac13e861221dfb062fecc3df7be12475"],["D:/Blog/public/common-commands-of-unix/index.html","ea8c9064dfa5964317d63302e1a1a5ee"],["D:/Blog/public/computer-network/index.html","b51273386287e5e2b4597489197a1276"],["D:/Blog/public/concurrency-principle/index.html","f4dfd7bae6f82252bf1e411d7f1dfb64"],["D:/Blog/public/continuous/index.html","b0e6e322a25c2deb40d07fa5907be3d0"],["D:/Blog/public/contract/index.html","e633c77fe52687e0e843e86676a23daa"],["D:/Blog/public/css/first.css","e65fc700a63a705beb95b41cd2e809cf"],["D:/Blog/public/css/style.css","23f1e37e26ed6556afbbc30563ce53a7"],["D:/Blog/public/cycle-structure-programming/index.html","14bd68c7a65b4aeb2c6853b1bee52792"],["D:/Blog/public/data-structures-and-algorithms/index.html","859411679483c1bb9fb23220ce464bef"],["D:/Blog/public/deb/index.html","cd96090f46aaf3e807678a34c5e536d3"],["D:/Blog/public/decorator-mode/index.html","0e4347afe9e0cb3eb8aa16d27982d083"],["D:/Blog/public/definite-integral/index.html","3444fae8fae8f362b5ced052c1f1a7ce"],["D:/Blog/public/dependence-reversal-principle/index.html","c9bb9d936bc359644ac935190c2ee738"],["D:/Blog/public/derivative/index.html","b8c638c292bb3ee90abbbdc1e711c171"],["D:/Blog/public/design-patterns/index.html","d53f66914b4543e094bcf1eb8099f857"],["D:/Blog/public/differential-equation/index.html","0b07f0105916d19ddcc40da52505c27d"],["D:/Blog/public/differential/index.html","c2ed44c738e35cd4eb777857d07b7235"],["D:/Blog/public/dimits-law/index.html","b8b59cd01a846f7f3f1eceee35344a33"],["D:/Blog/public/docker-virtualized-container/index.html","4d0aebdc8c524390d27f9b80c6b80439"],["D:/Blog/public/double-integral/index.html","f26d4d6735c390a52908ea051ee3d35c"],["D:/Blog/public/dynamic-array/index.html","7d44e35bb3e006630089a0199a24374e"],["D:/Blog/public/encoding-algorithm/index.html","73c6d1441e188d6badc023debddf62eb"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","00d63018f1159502f17be5a21b1e609b"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","fb3952df9a487dd5077f0fd1cd1d2a85"],["D:/Blog/public/factory-design-pattern/index.html","b3c24332dc55c3de240ea20b39ccf497"],["D:/Blog/public/file-input-and-output/index.html","d41d65e4e5e249808971ed7a39e2c75c"],["D:/Blog/public/flyweight-model/index.html","93557d1b2bb242b75b2bc70729fba934"],["D:/Blog/public/friends/index.html","7fe6e719aa50d625f17c8d2450b38ab4"],["D:/Blog/public/function-graphing/index.html","c75462baf3f57abcc0c29fbb8374ae13"],["D:/Blog/public/gateway-service-current-limit/index.html","51f659004c12d1c897b5841a889cf103"],["D:/Blog/public/gc/index.html","73a83aae4cc33276b50cca24fd87c2a0"],["D:/Blog/public/generalized-integral/index.html","df3125910cbdcb382a00e6013734b0d9"],["D:/Blog/public/google8102e2f35ce9e391.html","55c0ef02aaa3775d92405a086e4c1ce9"],["D:/Blog/public/gulp-compresses-static-resources/index.html","98665f5b7e86c1c71e88c83fa010f121"],["D:/Blog/public/hash-algorithm/index.html","d4e2f417019e606aca7adff3a7678106"],["D:/Blog/public/heap-sort/index.html","9e11936ca165c1cb33e98036885af0b4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1385e5844ab9ced299fe9c1db10ef316"],["D:/Blog/public/http/index.html","2b3a70ee6112cb6fdcf8254b592a1f62"],["D:/Blog/public/indefinite-integral/index.html","4f2f3e6f1b1edc75b73c2b989f038665"],["D:/Blog/public/index.html","f86d6c2bba63cb672c54092a9d73875b"],["D:/Blog/public/infinitesimal-and-infinite/index.html","67a5b299c3cbab0dd528f6d38a5d1499"],["D:/Blog/public/interface-isolation-principle/index.html","8e9bdbe215956f21c22097f71a9e0534"],["D:/Blog/public/intermediary-model/index.html","37cf254a6d0b80b0b85ed8a3c856a0af"],["D:/Blog/public/interpolation-search-algorithm/index.html","a0e582beeca87968f25089c06d56a11f"],["D:/Blog/public/interpreter-mode/index.html","128c265c666ed6c487b60c07a0b523b5"],["D:/Blog/public/introduction-to-computer-network/index.html","f1b19259af89c5af6e68b88f6fd906a5"],["D:/Blog/public/introduction-to-operating-system/index.html","079eb98e26ec3b9ea8ec8922f305f2a4"],["D:/Blog/public/inversion-of-control/index.html","6f39fe7498b528193d18336fd7f4945d"],["D:/Blog/public/io/index.html","0472f50d66377b66758290b4bfb7b817"],["D:/Blog/public/iterator-mode/index.html","676830e998f2dab9396fa31abf7aefc3"],["D:/Blog/public/j2ee/index.html","fc30cf11f627feac403602b0a8f7a46c"],["D:/Blog/public/j2se/index.html","2cc864c9c4aa74ff11863d92a609124b"],["D:/Blog/public/jdbc/index.html","961deee91933fd9f1463ee395b07b312"],["D:/Blog/public/jdk/index.html","104a32a57b464e64f9f2d216d0f49d5d"],["D:/Blog/public/jmm-memory-model/index.html","23190eb7e0c8b9a7dfc295abadcb25f2"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","d19241dac205dba3e2b7d731eda2d09f"],["D:/Blog/public/law-of-robida/index.html","704f647d272650d42131239192546f72"],["D:/Blog/public/limit/index.html","647672fe179fc7a11bc48b493d31ee2d"],["D:/Blog/public/linear-search-algorithm/index.html","935a7cce22e697f3b10de34721544c95"],["D:/Blog/public/link/index.html","1341c983f8b0b0ee63a41e60b27921f6"],["D:/Blog/public/linked-list/index.html","de84b915124c9de4e7d69909efa75102"],["D:/Blog/public/linux/index.html","f91887777656f026b9675a9b4782a533"],["D:/Blog/public/liskov-substitution-principle/index.html","ae25dce46502322f8090f544e36ad99b"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","1fe234f4a20bed1f1bb8b4579a05bbee"],["D:/Blog/public/maintenance-1/index.html","f79180971c21b25fc2c93314b93ee1e7"],["D:/Blog/public/maintenance-2/index.html","ce57f12af6487789268fd2a530012d13"],["D:/Blog/public/maintenance-3/index.html","6ff645f57fa3681958d04d6ec0e08ac8"],["D:/Blog/public/memo-mode/index.html","568138d636a77cf926afbdbcc20f4242"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","33bbf9288358d24d8d1adb1c99f2e746"],["D:/Blog/public/multi-function/index.html","6e16d002503d3987029a76fffbbf38e5"],["D:/Blog/public/multithreading/index.html","3525b223e8376aeb14c4c5048dd8355f"],["D:/Blog/public/mvc/index.html","34616e6c3a76eca343c30db65a215575"],["D:/Blog/public/mybatis/index.html","83d0fae2c006b317c5131c501f341444"],["D:/Blog/public/mysql/index.html","4dd8c34b09439707b95918e9fe7f04eb"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","b62160d422cb1512219f4e4dd0f86c40"],["D:/Blog/public/null/index.html","af71f047839cb7019d55e6c95820f4bd"],["D:/Blog/public/objectoriented/index.html","95847d32e5b95fc7fe0563e12962c8a6"],["D:/Blog/public/observer-mode/index.html","12b4eda627fe3d52e045450222a49e6f"],["D:/Blog/public/operating-system/index.html","b1d3073ac9bbc4d2723a2bdf29ad74be"],["D:/Blog/public/page/10/index.html","f3c858bdfc27247fef927483f314120d"],["D:/Blog/public/page/11/index.html","d5331c1429fa37165138c18620aa6b4e"],["D:/Blog/public/page/12/index.html","5a6fe1e8bb504c085ec85eb297e5b266"],["D:/Blog/public/page/13/index.html","bd67db2123b810d48ffab71ff085e3f1"],["D:/Blog/public/page/14/index.html","0f4093b4e9456d1bf265acb230bf200a"],["D:/Blog/public/page/2/index.html","fce1804aff73919ae2b3fab42d41e19b"],["D:/Blog/public/page/3/index.html","00fd7fb7cbc3b53234662e5880bab8f1"],["D:/Blog/public/page/4/index.html","b79e2e9f221a022e4cc778bcc34121fb"],["D:/Blog/public/page/5/index.html","0956d713be7e2d851cd4e034491b412c"],["D:/Blog/public/page/6/index.html","745cc19e0a1eec872ba7d1042bf859f5"],["D:/Blog/public/page/7/index.html","663b10896e3dc4a0631b97722b1d0f9e"],["D:/Blog/public/page/8/index.html","1dc6df12158f1c5f87d5a9d60089ccc2"],["D:/Blog/public/page/9/index.html","07e414b7a75eff91134d479a058bee06"],["D:/Blog/public/palindrome/index.html","8e948166b4ad0e384765227a7a9ee7f3"],["D:/Blog/public/partial-derivative/index.html","0442b8acc8779dfce3825b3a516f666e"],["D:/Blog/public/pass-by-value/index.html","dba1974e0acc1b3355625e1d6880aa82"],["D:/Blog/public/pictrue-bed/index.html","401fee029fe08ed765a8b9b9f68ea9bd"],["D:/Blog/public/principle-of-opening-and-closing/index.html","51e30a4a42bb6e98d3ee63afd75cc1e9"],["D:/Blog/public/principles-of-computer-organization/index.html","3a8e6e3e1b710acb787187e7dfd779b2"],["D:/Blog/public/prototype/index.html","bd26c9e8abf007a020d30de18c567484"],["D:/Blog/public/queue/index.html","37300f0589d3778c74e3f438ebf071bb"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","d9e80a89ffe284dbcc76b5b0c5663ce9"],["D:/Blog/public/redis/index.html","8eb51fc09e6cefbc1ab9acfc8c99e272"],["D:/Blog/public/reflection/index.html","c17beea82b0007aa5d2f8dff9de0725f"],["D:/Blog/public/resume/index.html","ffdf52319dbe5927f1b79d9b3c6d093a"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","0e3277ded28827fb1ee59f1e811ab1c6"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","bc6bfa8222e906952f2f8c570020eef1"],["D:/Blog/public/select-structure-programming/index.html","2693aae19a0323eea805ba3270874681"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","565ba4795431c6260a53c747ea12dbc7"],["D:/Blog/public/sequential-programming/index.html","16374757f85246f7250865366a7f516a"],["D:/Blog/public/series/index.html","2605dd9a665a44ea0ef0e4b63cff6a77"],["D:/Blog/public/single-responsibility-principle/index.html","50a880c4465b51d8a6255f46eaac21d7"],["D:/Blog/public/singleton-mode/index.html","16570a3c9c0131020cdce4b5a202bd9f"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","2111b06f04de5147c06026f9384a8f92"],["D:/Blog/public/sparsearray-sparse-array/index.html","6089f2c0611c3affe1e2a0c1d9713722"],["D:/Blog/public/spring-architecture/index.html","fb6ef0dc947a42fd2fb5d2acb63976c7"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","4cdcc5d6bf0e8b36e11bec1041fa84e1"],["D:/Blog/public/spring/index.html","999955ee143cdf6de87a645038708456"],["D:/Blog/public/springcloud-alibaba/index.html","6eb7ce830dcde1ad28acae9587d2f725"],["D:/Blog/public/springcloud-bus-message/index.html","e0f945560234c863be8fbd4c03f142bc"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","a3bcca9f3b7b9966afe6784c3e29d427"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","1a059e178f5161a50354304bd7e0d90f"],["D:/Blog/public/springcloud-stream-message-driver/index.html","f524f39c7f7f5ab10ccfdf200a891636"],["D:/Blog/public/springcloud/index.html","b7660e671d9d52173c1f92162dcc0a27"],["D:/Blog/public/springmvc-environment-construction/index.html","1f204f58d4d5fbcdc5e5a9360a3dc840"],["D:/Blog/public/sql-injection-attacks/index.html","0503a7cea60e69e390a2568825949503"],["D:/Blog/public/stack/index.html","4d0159213d77067793c07bcb3e74471c"],["D:/Blog/public/state-mode/index.html","b216274874819302858ca7e4457a129e"],["D:/Blog/public/strategy-mode/index.html","b94c0950b712438d84c75c3e1193c800"],["D:/Blog/public/synthetic-reuse-principle/index.html","e918f1f35edf64f9b045c4b4bbbe55db"],["D:/Blog/public/tags/C/index.html","8288f7a850822af8c9121996fb288795"],["D:/Blog/public/tags/C/page/2/index.html","fbaab1084d3f0754264d538ea9655b6b"],["D:/Blog/public/tags/Concurrency/index.html","6fbd12280572f7cc45f350e1dad18f2c"],["D:/Blog/public/tags/DesignPatterns/index.html","c0214c873898906d252aa622210453ea"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","d93569364c0e67a0a0464247848dc985"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","1ed8a3eccb84d5622eaba86a45dc9e40"],["D:/Blog/public/tags/DistributedMicroservices/index.html","9bed9c8e26a173e116595957cc607b11"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","caa13aedd2ce86e9a4d963aca8824cac"],["D:/Blog/public/tags/Interview/index.html","8ce1fac0aedde0b5638a523b76379348"],["D:/Blog/public/tags/Interview/page/2/index.html","248878795f198bc3a491351de72c3fcd"],["D:/Blog/public/tags/Operating-Systems/index.html","8a15c13728ffcb7ffd2a8ad929cd7ae3"],["D:/Blog/public/tags/about/index.html","700320814eb878cb6a960d68e8002ad3"],["D:/Blog/public/tags/ad/index.html","e46885e728e1efa1141f2eee4fed9954"],["D:/Blog/public/tags/dataAlgorithm/index.html","e64a81d34e27389964cf319a295c7a69"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","c9489b5cc7925827aa8366c4a6dd774c"],["D:/Blog/public/tags/docker/index.html","cef6ee6d7c191915596ca4d8f04ce74a"],["D:/Blog/public/tags/frame/index.html","0473ee3f9a4d5bf07f1e2a85729af593"],["D:/Blog/public/tags/front/index.html","b180237f2c55087942092f0649864b34"],["D:/Blog/public/tags/index.html","dddf82b91a36e83c011dbf27220fc1b6"],["D:/Blog/public/tags/jvm/index.html","98ec0b397cc7c589cfbdacc6beea1e99"],["D:/Blog/public/tags/linux/index.html","7a1f98426680b06063620a76c75c3f1d"],["D:/Blog/public/tags/maintain/index.html","afa8d2919f195d25331cf4336e0a438b"],["D:/Blog/public/tags/math/index.html","5acea9310409442ccc88dfa46d7eab2f"],["D:/Blog/public/tags/math/page/2/index.html","d1bbacd03266f9e8b5f8a9118d3ed644"],["D:/Blog/public/tags/network/index.html","edbea57b1b2babcde977638e0a6d4d23"],["D:/Blog/public/tags/resume/index.html","58a05640c989320cc05781342214f8fc"],["D:/Blog/public/tags/safe/index.html","d6ada65984159cb7dd756319d71bd6df"],["D:/Blog/public/tags/sql/index.html","03cbe17ba1087fb9f339c4dd02feb10b"],["D:/Blog/public/tcpip/index.html","cf7e6ff86e87623f667c086c6eb0267e"],["D:/Blog/public/template-method/index.html","9cbe5fdf2fabfc7812922912f6cbec61"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","40d17a591fbb1170e2dcd8bc31a9568e"],["D:/Blog/public/thread/index.html","362bfb02f3c5d79f3f8f91a9fd19547e"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","7a3c592158a0219a1dfbc309193a6056"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","2ae82d9c2558cea1354f61f937e928bc"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","5681a728695616925344f45502f3f0c4"],["D:/Blog/public/users-create-data-types-themselves/index.html","55555415301d41a9234b6f8343075b5f"],["D:/Blog/public/visitor-mode/index.html","5c352f41f4a3b8333d6a3bedb14a60bc"],["D:/Blog/public/xml/index.html","9ea4cdac25028a2ee610c2decdd8ab8b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","8622087672e663cc07a83972fbebdfa1"]];
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







