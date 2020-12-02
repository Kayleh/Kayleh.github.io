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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","ac9fc7d071778a91245899d62d310984"],["D:/Blog/public/C-algorithm/index.html","a8da0f0b0c9528f2476f6c826c62079c"],["D:/Blog/public/C-programming/index.html","6fa4b85022ebc360d39bcfff367ba562"],["D:/Blog/public/Good-use-of-pointers/index.html","5eeb794b4ba90679d8093318d3902724"],["D:/Blog/public/about/index.html","cdd75c9b822ad0ec6815c98d11540a27"],["D:/Blog/public/adapter-mode/index.html","5101dc4e9d3bcea985c9b8e12ac0fa0f"],["D:/Blog/public/agency-model/index.html","5982327e963cdae0484129c407a6b908"],["D:/Blog/public/appearance-mode/index.html","f28b0be780b3f54ce3c1c751426d6647"],["D:/Blog/public/archives/2019/01/index.html","01c156c74d7c70564ff6e5f297e31475"],["D:/Blog/public/archives/2019/07/index.html","606fa0a44159c03c6f32a336793ed4dc"],["D:/Blog/public/archives/2019/12/index.html","75edd2a653373b905c811d08ff5733e2"],["D:/Blog/public/archives/2019/index.html","8f2212dba9fe495d03fab3a83ddfbaf6"],["D:/Blog/public/archives/2020/04/index.html","19a67f8aaf2dd7eb61e74c2cef23c215"],["D:/Blog/public/archives/2020/05/index.html","af189485bb62134676ac022bbdd22d25"],["D:/Blog/public/archives/2020/05/page/2/index.html","62caf67ad5c5a079696b4229f939cf39"],["D:/Blog/public/archives/2020/06/index.html","e6555b682f321781bf65e5a488ea5399"],["D:/Blog/public/archives/2020/06/page/2/index.html","726e3cc99d52899a9085a7a99980be7b"],["D:/Blog/public/archives/2020/06/page/3/index.html","1ef88099fbec6935e93dce8b8e2380f6"],["D:/Blog/public/archives/2020/06/page/4/index.html","99a5daa6224fd46d648ed4cdec29d578"],["D:/Blog/public/archives/2020/07/index.html","9f6942bf02e7abdf94dc33afd5f24c35"],["D:/Blog/public/archives/2020/07/page/2/index.html","f28ad0a72e4489a4df5a2a5f0d3f4c7f"],["D:/Blog/public/archives/2020/07/page/3/index.html","160aac09f679a3b0a36bf8b386533184"],["D:/Blog/public/archives/2020/08/index.html","46d7b694c3b1463c5564d2510c1addfe"],["D:/Blog/public/archives/2020/08/page/2/index.html","e67f4aba66ad929e3075632c8366004e"],["D:/Blog/public/archives/2020/08/page/3/index.html","b1aa53d999ffe0ac1d1b32c6c366797f"],["D:/Blog/public/archives/2020/09/index.html","7919f725b1ef597c22a8fbe9aa6be627"],["D:/Blog/public/archives/2020/09/page/2/index.html","d23668b66353d5738a648fefb63afcce"],["D:/Blog/public/archives/2020/10/index.html","0188611029faaa701e3937756587b872"],["D:/Blog/public/archives/2020/10/page/2/index.html","6e09cc08eac4891926f2eaadb698632e"],["D:/Blog/public/archives/2020/11/index.html","32c84ca018fe863814b216e0486c5f73"],["D:/Blog/public/archives/2020/index.html","5e4fdfd689c4d0b17d49cd8989783417"],["D:/Blog/public/archives/2020/page/10/index.html","03171a99946058a8878f88a45a8c74ee"],["D:/Blog/public/archives/2020/page/11/index.html","0e05f67c5ed521b595bcc31d1357d8ae"],["D:/Blog/public/archives/2020/page/12/index.html","5c43aabb7c5eb1db5f8363edfc8d7f72"],["D:/Blog/public/archives/2020/page/13/index.html","23ee989656be193e00d462867307a16b"],["D:/Blog/public/archives/2020/page/14/index.html","0a247f14b85ffc7f25e31ab833f5afba"],["D:/Blog/public/archives/2020/page/2/index.html","75922698e6e5bad21c1b6a2b5950c10b"],["D:/Blog/public/archives/2020/page/3/index.html","ae09e057813a3e7570fd2b196cf23da4"],["D:/Blog/public/archives/2020/page/4/index.html","ff2dccf67d56a2fc9b5ca4b4afdece7c"],["D:/Blog/public/archives/2020/page/5/index.html","88a6cddee0802fa501f7c495d18af0e0"],["D:/Blog/public/archives/2020/page/6/index.html","afd439221964a88641c8849ff667669b"],["D:/Blog/public/archives/2020/page/7/index.html","03429aed42e835007a54be5429960712"],["D:/Blog/public/archives/2020/page/8/index.html","e12a2d22ec893af968e0a25e55fdd03f"],["D:/Blog/public/archives/2020/page/9/index.html","4e33c1973057a86ccdafac8562bb2010"],["D:/Blog/public/archives/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/10/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/11/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/12/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/13/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/14/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/2/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/3/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/4/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/5/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/6/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/7/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/8/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/archives/page/9/index.html","f09d3c1e6d17eb789b3072491e0c6d60"],["D:/Blog/public/array/index.html","987a013902c0af9ee0a0f97afc770ce1"],["D:/Blog/public/binary-search-algorithm/index.html","1fd51b6b31822833e36924bdb490962f"],["D:/Blog/public/binary-sort-tree/index.html","57ed047c7f78092160c8272109104c0b"],["D:/Blog/public/bridge-mode/index.html","2b74d800de62fbcb9350c99ef6e77d23"],["D:/Blog/public/builder/index.html","462e7ebd2fe6196afbe5ca40e609c96a"],["D:/Blog/public/c-pointer/index.html","43e8536234267f3ea8a0134b0c4389a4"],["D:/Blog/public/categories/C/index.html","06dd0455b9525982d1054a0616ce0ca9"],["D:/Blog/public/categories/SpringMVC/index.html","a4a3172aeb0c4138462243e13f321068"],["D:/Blog/public/categories/index.html","78ace47651dd23c2f6017ff8bcf734da"],["D:/Blog/public/categories/linux/index.html","4c9ba69c97020bf309ea417182e3994a"],["D:/Blog/public/categories/分布式/index.html","4ba743a5d720a7578b51cae06146953c"],["D:/Blog/public/categories/分布式/page/2/index.html","e3b4dafc9abddc07bdf3c2d48b7898ef"],["D:/Blog/public/categories/前端/index.html","3cc30238813f1cf3083dd7119b999fe2"],["D:/Blog/public/categories/设计模式/index.html","4d61c20c2d9d072b5b8e434e437751cc"],["D:/Blog/public/categories/设计模式/page/2/index.html","e7ede80acf95f481a29db5122fabbd3a"],["D:/Blog/public/categories/高数/index.html","8ef7d9514da4e858601f395d5ef63580"],["D:/Blog/public/chain-of-responsibility-model/index.html","64aa352675ec25f5b17336b369dd7e8d"],["D:/Blog/public/chinese-and-english-switching/index.html","5b0f309cd15f1b68ae32c6e1603442c2"],["D:/Blog/public/combination-mode/index.html","5f01c18831693e7fb1fb9ce3dd4d82a2"],["D:/Blog/public/command-mode/index.html","e8a722bc957f7d86444015e9d9c5f44f"],["D:/Blog/public/common-commands-of-unix/index.html","73d64197da45d941b335ee4d2f774488"],["D:/Blog/public/computer-network/index.html","b74b560915ddfabc6e741d51f4963d0c"],["D:/Blog/public/concurrency-principle/index.html","341c38319c3c68ebb49319712e30f676"],["D:/Blog/public/continuous/index.html","f438aea3f7055144151582fd639d88b1"],["D:/Blog/public/contract/index.html","e2972f694898b3b25d85a8186558b1f1"],["D:/Blog/public/css/first.css","f4dd2ceaf6821b6c288d2d3aa4f40690"],["D:/Blog/public/css/style.css","e5a3328c8793d2995831d55d4918fb00"],["D:/Blog/public/cycle-structure-programming/index.html","251f3818f968a9bed0db17911feb7743"],["D:/Blog/public/data-structures-and-algorithms/index.html","23fdbfd35faf41d21e712d08dcd538d2"],["D:/Blog/public/deb/index.html","00d0360c16fa41f0662a34f58f778de3"],["D:/Blog/public/decorator-mode/index.html","0dde1fcbc36b76059b916ffd965b5150"],["D:/Blog/public/definite-integral/index.html","0788afcdd37b55ff28b058af064e4cb5"],["D:/Blog/public/dependence-reversal-principle/index.html","ada9756e37c557004af7371e8e23c6dd"],["D:/Blog/public/derivative/index.html","6b41d6f2a3e24a81c6d3e408752ac0d7"],["D:/Blog/public/design-patterns/index.html","440aff1ee0a40b0b9f8052078154c73b"],["D:/Blog/public/differential-equation/index.html","09497213fa21d04512465910302dd43c"],["D:/Blog/public/differential/index.html","463ac0536f84b0687cd5a20de0229bad"],["D:/Blog/public/dimits-law/index.html","fb601ab3f68b9b79035fd1f4f0d9db5f"],["D:/Blog/public/docker-virtualized-container/index.html","49b47a40908a19f4f26f2d7bde62828a"],["D:/Blog/public/double-integral/index.html","f79776d8d3d8a4ed2ed8ba92f3d2ebbc"],["D:/Blog/public/dynamic-array/index.html","0f93d6463102f3c60dd9ce5f6af455d5"],["D:/Blog/public/encoding-algorithm/index.html","c717d4d45d463505e398ccbaeb816839"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","47a6577938f4b984ed642985474c52cb"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","8796fa1528046467cedf6ab42adacb56"],["D:/Blog/public/factory-design-pattern/index.html","f6ce290c9881be9d329f342ed5d5b29a"],["D:/Blog/public/file-input-and-output/index.html","dc97f2e2070aab8ed024217cb892765c"],["D:/Blog/public/flyweight-model/index.html","317d4ebc20b911a2d3b532823c35fc7f"],["D:/Blog/public/friends/index.html","47fcba0bc190a7986acce7402b59e20b"],["D:/Blog/public/function-graphing/index.html","6b55559934b2751b5a0d45bf6af47a7f"],["D:/Blog/public/gateway-service-current-limit/index.html","f0674e269e5efc8ee66c0f594209dad1"],["D:/Blog/public/gc/index.html","14b8ab8126eea9c3b9d7f423f0587c0e"],["D:/Blog/public/generalized-integral/index.html","3beb570074836093cbdb180adf141d4a"],["D:/Blog/public/google8102e2f35ce9e391.html","7f8a180c1db4fb1957345e5bbdc67808"],["D:/Blog/public/gulp-compresses-static-resources/index.html","59b0d5a373f9f9e31a7ebc84c786e4e5"],["D:/Blog/public/hash-algorithm/index.html","e2313999f310f8ceaef6fe3c96129fd8"],["D:/Blog/public/heap-sort/index.html","5791bf9e8836eb9c4e3ab37f7f2e92db"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","841b822f6445937f06556e01c487b461"],["D:/Blog/public/http/index.html","d429883d541034efd1848c8012b12b1d"],["D:/Blog/public/indefinite-integral/index.html","95c6557bd55ebc680ab7080a98bccfdc"],["D:/Blog/public/index.html","499562604cb32cea1dc7185eadcdb8a0"],["D:/Blog/public/infinitesimal-and-infinite/index.html","b4410d5ae2684431851fc7e37430718f"],["D:/Blog/public/interface-isolation-principle/index.html","c64eb2a07184652ca048e1043a56a0a0"],["D:/Blog/public/intermediary-model/index.html","deceade3b973e5ca9c22906479f07356"],["D:/Blog/public/interpolation-search-algorithm/index.html","ccc1d4a21b1d47ded6559148fd62d1c6"],["D:/Blog/public/interpreter-mode/index.html","3f0332c68a3bf693a1becbe1b9307a13"],["D:/Blog/public/introduction-to-computer-network/index.html","c535a516e83c4ec18404d1ee405dc6e6"],["D:/Blog/public/introduction-to-operating-system/index.html","6740a91a5fd3b076b56f063fd62160c6"],["D:/Blog/public/inversion-of-control/index.html","28e7b95b13e7bf0e1408cc899a3ea3f4"],["D:/Blog/public/io/index.html","211ef6cbaafcc4c69ec860c3b301fb6a"],["D:/Blog/public/iterator-mode/index.html","f01008f8e645101a0de12163c7ecde9a"],["D:/Blog/public/j2ee/index.html","6bbeff04f109856738a35f14dbbe3f40"],["D:/Blog/public/j2se/index.html","0b05cb877b4051e1213fc676ba69135b"],["D:/Blog/public/jdbc/index.html","514580281b2854eb69657d463659989b"],["D:/Blog/public/jdk/index.html","be087764e29e86bcb87b6ed91578c6d0"],["D:/Blog/public/jmm-memory-model/index.html","5e923414d1b045c1932784b97f4fca9d"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","38118acc983da55d306d8aedd277df95"],["D:/Blog/public/law-of-robida/index.html","6591acd7ccd58ba3abaab70e6c0b9c83"],["D:/Blog/public/limit/index.html","3b72c6d7e8d311603d1d62404c8655e0"],["D:/Blog/public/linear-search-algorithm/index.html","4d79597781211cb5fc799dca8b00ae1f"],["D:/Blog/public/link/index.html","3e85d412fbcc9462da658729879fd3dc"],["D:/Blog/public/linked-list/index.html","70f43630a0772d7826c12113f7f7d468"],["D:/Blog/public/linux/index.html","d1daefd25fe6d9531b2a6dceda88a9a8"],["D:/Blog/public/liskov-substitution-principle/index.html","b283b33082d3a036de0b4f36309f05c9"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","b743e16f675dcaad41bdc4a4805926b0"],["D:/Blog/public/maintenance-1/index.html","4a169959a26f36f02b6d6a8fbaa80d44"],["D:/Blog/public/maintenance-2/index.html","8feaf44b5ae79836668cd5d253ad952b"],["D:/Blog/public/maintenance-3/index.html","fa97784be8bd8efcf6a7014bc5d58b34"],["D:/Blog/public/memo-mode/index.html","bea56e83ad78acb479fbbaf250aeb4fe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","cf40b5c19742f68d15e5f4ac702c67b9"],["D:/Blog/public/multi-function/index.html","4c9716e5f2ab1568f7d3edd37d2f8a07"],["D:/Blog/public/multithreading/index.html","dad7cf6396dcf871aae9db62a79edb04"],["D:/Blog/public/mvc/index.html","bd188d5bf74284816721368c115f3ab1"],["D:/Blog/public/mybatis/index.html","c4e2123c696c7dbfa5124b07b001b27a"],["D:/Blog/public/mysql/index.html","52054955f5bce98a898e7f7cf166e6bf"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","676b3d6073c05d98f75dbf849eb0d4f6"],["D:/Blog/public/null/index.html","f9590bb95359118abea03e2db1bd0de3"],["D:/Blog/public/objectoriented/index.html","6cc715810a6ea4f0bc0afd4d7da7be71"],["D:/Blog/public/observer-mode/index.html","74590dd49580b69a65ee9d9ad3c15c0e"],["D:/Blog/public/operating-system/index.html","e329ef50170ad44c8f7aaae9d811a1b2"],["D:/Blog/public/page/10/index.html","bda617289e9b4320d74f0e9182909714"],["D:/Blog/public/page/11/index.html","ab4c415821dbe93e1bb68c46fc47309a"],["D:/Blog/public/page/12/index.html","731b9d14ac3b6d2e26e9adc263d26c31"],["D:/Blog/public/page/13/index.html","7be2031c4ce5a6b04d3556c70c374d49"],["D:/Blog/public/page/14/index.html","8e36074a0afc77f14ff5e121615e4d90"],["D:/Blog/public/page/2/index.html","a3f1263987324e821c6131f186f670ec"],["D:/Blog/public/page/3/index.html","1fb0ab8596298a05c2f58c4e0a8c297a"],["D:/Blog/public/page/4/index.html","4a626b24898dc1c5e6db42a16380ca07"],["D:/Blog/public/page/5/index.html","5046289065c68a51fc4dcb3d19fed61a"],["D:/Blog/public/page/6/index.html","20f882ef12594738d68e6b56906ca3ad"],["D:/Blog/public/page/7/index.html","805f6c23e1604635490a25558a47b228"],["D:/Blog/public/page/8/index.html","8703ad81b20760b48b063fdd71749a13"],["D:/Blog/public/page/9/index.html","90a3366b44d4a66d3f763b78d8e0bfb9"],["D:/Blog/public/palindrome/index.html","0b219c9a0daf9bf167bbfa8553a68349"],["D:/Blog/public/partial-derivative/index.html","669ca1c93d73f38be30dc14abbf1c835"],["D:/Blog/public/pass-by-value/index.html","b3ec151312bc7952db33721d97c6a6ad"],["D:/Blog/public/pictrue-bed/index.html","eaf37b0dbdcddab9f649af22b5d493a5"],["D:/Blog/public/principle-of-opening-and-closing/index.html","010c86771af7ef6428d7642b18e5a90c"],["D:/Blog/public/principles-of-computer-organization/index.html","b8cce6c66e01415a51eec4f11abe6175"],["D:/Blog/public/prototype/index.html","51bdc22fcac3d57c43fd02808d965ae8"],["D:/Blog/public/queue/index.html","c13076a16aa663a38f37a6fcf139c160"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","08f70281746d8f44b4f1fdcb56e41ab4"],["D:/Blog/public/redis/index.html","0d756a336e6a1a3642064885c3ee610b"],["D:/Blog/public/reflection/index.html","e5a3112c2a19e9d0dbf454fc629e4027"],["D:/Blog/public/resume/index.html","7782253c6db439f65371b187a63a1bea"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","f765aaa1283739d78bb8460656bae88f"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","98ca4be9864884332c43cdd36183f982"],["D:/Blog/public/select-structure-programming/index.html","e1a50f1be948309d2bc444e82081acab"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","31cd8c9260272aba92dc51fd2133575b"],["D:/Blog/public/sequential-programming/index.html","7073ed7493343bc8f5df1a640725bfaf"],["D:/Blog/public/series/index.html","c5aa9d3d8c9b85b862c35dfe928295c6"],["D:/Blog/public/single-responsibility-principle/index.html","36900b4f28450e00312df83099142276"],["D:/Blog/public/singleton-mode/index.html","dc7b7499dbde7a7e693ed36ea836e2fb"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","64f33b1adafe61e7b7f4045571df932b"],["D:/Blog/public/sparsearray-sparse-array/index.html","eb7835b54753ca27e17690390666ff4f"],["D:/Blog/public/spring-architecture/index.html","9f3d2ed016ba477c0a5c731a9e2d4c6c"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d95c00fde771e7cb5ed4bd93fe9f27d1"],["D:/Blog/public/spring/index.html","42ce06dc147ab9f986e4874ff6b55a21"],["D:/Blog/public/springcloud-alibaba/index.html","74b4ee0d261cf071eb9e32d0b74ded6e"],["D:/Blog/public/springcloud-bus-message/index.html","c2475bd5f009e09fe5794a245511794f"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","b1ad852ec50631e89ea87a565ecbddcb"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","4ebfbdc85f1e1eb3e53ce3aeb9487c23"],["D:/Blog/public/springcloud-stream-message-driver/index.html","a94987d9e9367683f40167de7064c9e5"],["D:/Blog/public/springcloud/index.html","4cf2e0bda6051ead2838fbead353f0e4"],["D:/Blog/public/springmvc-environment-construction/index.html","9bafb198040abfbbe46d320d256e1728"],["D:/Blog/public/sql-injection-attacks/index.html","609d7645890fbaca555e7c948adc7b34"],["D:/Blog/public/stack/index.html","07e49f7d4e8bca498f552d06be159864"],["D:/Blog/public/state-mode/index.html","f2e22179fa042bede65976fe5a939757"],["D:/Blog/public/strategy-mode/index.html","a2132d60b212ee789850e3c005755859"],["D:/Blog/public/synthetic-reuse-principle/index.html","18673eebf719559954552e942dd13786"],["D:/Blog/public/tags/C/index.html","f9a76f96987ea0fa1505460f458c8686"],["D:/Blog/public/tags/C/page/2/index.html","192e16e8508f1294b63d522756312013"],["D:/Blog/public/tags/Concurrency/index.html","86005ffdbf9410d7ea52ea419a9338df"],["D:/Blog/public/tags/DesignPatterns/index.html","5885bb55bf634b086c2fa0f469a058e0"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","aa33dd2c41f80cb8155268286b42138c"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","08b3c4483b954418a23da7f13a6f56a5"],["D:/Blog/public/tags/DistributedMicroservices/index.html","28bdf8514cede1f82970bdb12d5f807c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","897b4a60aca5041b11440ec46969cd96"],["D:/Blog/public/tags/Interview/index.html","bdbab58ba05b835dbf7e859b3e525ed5"],["D:/Blog/public/tags/Interview/page/2/index.html","384358a244b718cb7ccca3b30fe05e32"],["D:/Blog/public/tags/Operating-Systems/index.html","699c410ba3d6d99a252c9ed9c4ecec8d"],["D:/Blog/public/tags/about/index.html","43a9842a879ea48e2d2fdd87c3a5c5d5"],["D:/Blog/public/tags/ad/index.html","dd1d8734486ec925f07ff646a96a8f89"],["D:/Blog/public/tags/dataAlgorithm/index.html","4ec2b54ac9fea54bb6599124af5c8061"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","0394293affc1e3190a76e512996ce0e7"],["D:/Blog/public/tags/docker/index.html","096249b6c1bc85dfcd9ddd2646715a74"],["D:/Blog/public/tags/frame/index.html","6eb0c6352867dcb76dcd98c33f16dd3e"],["D:/Blog/public/tags/front/index.html","75836628f85028aa342fb4e16ae24df9"],["D:/Blog/public/tags/index.html","dc9cfd913e6e3423686c0f89f7c223a5"],["D:/Blog/public/tags/jvm/index.html","a9e5797a6e02f2992e99311ce563c92d"],["D:/Blog/public/tags/linux/index.html","288681dda2abc77a4fe80d10d84f13ff"],["D:/Blog/public/tags/maintain/index.html","a21f826b16f148fb252c46362fcdb5f3"],["D:/Blog/public/tags/math/index.html","642a57b7e258b57b583d27bb4863d9d6"],["D:/Blog/public/tags/math/page/2/index.html","72d82c98315cfacf9d4940cf52f979bb"],["D:/Blog/public/tags/network/index.html","3d203a118bfb24ed15ab29621f78f022"],["D:/Blog/public/tags/resume/index.html","eec873b2843334e57f9b5a13ee3172d0"],["D:/Blog/public/tags/safe/index.html","145c9b2d526ce6277ea9af056895fea5"],["D:/Blog/public/tags/sql/index.html","73ab763152d188acac301f111ce08a5b"],["D:/Blog/public/tcpip/index.html","c5063ff5b3d119f118307ae20022c87a"],["D:/Blog/public/template-method/index.html","e298daec87b9efc4a0f18debd6a93d61"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","314543a6a91a64ba5796ede6be94d84f"],["D:/Blog/public/thread/index.html","c36ab53bf8e42cbd5877d377d9ccd6fe"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","ec274f3be8609db0f84991ea63f35d03"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","d27142e9e19a9ac97838a81e40b982c9"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","251309ca243f8c0f24a1120332736f9d"],["D:/Blog/public/users-create-data-types-themselves/index.html","2e6a81defa8b063209a9c1697b227fc2"],["D:/Blog/public/visitor-mode/index.html","da47bf88aa7dc795297f721b66b84a8d"],["D:/Blog/public/xml/index.html","3df0c38d09906bae1730d09e760ef4a6"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","17bc1d3fa2b66655dacdcc6453c9ff31"]];
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







