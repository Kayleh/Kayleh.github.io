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

var precacheConfig = [["D:/Blog/public/404.html","2dbc07863495c1bfcdd215300b0f6fe3"],["D:/Blog/public/7-sorting-algorithms/index.html","21d4c79d5491ef99eea11eb39115cea6"],["D:/Blog/public/AIO-blocking-model/index.html","b2278617e58445a965950a078e5c9b33"],["D:/Blog/public/BIO-blocking-model/index.html","9aaf50406b828092995a80002ec60a8a"],["D:/Blog/public/C-algorithm/index.html","7406a3b05fc0a05c2d31ea0641114cd0"],["D:/Blog/public/C-programming/index.html","93727e61633e39eb4b794a73255dad4b"],["D:/Blog/public/Good-use-of-pointers/index.html","30a363ccf782c118bc118307164714e5"],["D:/Blog/public/IO-model/index.html","9e6a79da1b6129a100f6eb3d6647144f"],["D:/Blog/public/Java-network-programming/index.html","4023f4a470410b507a2976cf879f17b1"],["D:/Blog/public/NIO-blocking-model/index.html","8b5e7c7b3063339ec8c4c15ca3109ab9"],["D:/Blog/public/about/index.html","b8d5012e106a9413aa69de61b8152870"],["D:/Blog/public/adapter-mode/index.html","adefeaf408fb2b7da96ef82c04914f02"],["D:/Blog/public/agency-model/index.html","191cbe06a5588697fc058537143f37b6"],["D:/Blog/public/appearance-mode/index.html","772ccd0faf782a543c1aedd1affc4df0"],["D:/Blog/public/archives/2019/01/index.html","faad897e5d10ebbda19c8329e8cd8c76"],["D:/Blog/public/archives/2019/07/index.html","34088d00039b892f072512199be53a9b"],["D:/Blog/public/archives/2019/12/index.html","88c0aeeb6b7153b87ed273e9f15634de"],["D:/Blog/public/archives/2019/index.html","9f3adfc5ae1de272f31c8fcaf8423450"],["D:/Blog/public/archives/2020/04/index.html","23bb2e7ce3079a7b1de6dce926784ec2"],["D:/Blog/public/archives/2020/05/index.html","5e86899b1c8568a38a8a35b8273acd95"],["D:/Blog/public/archives/2020/05/page/2/index.html","48c14e67616264c7c933f1b33291b7f9"],["D:/Blog/public/archives/2020/06/index.html","57e26bb367ec37688fbe6d3a1591108c"],["D:/Blog/public/archives/2020/06/page/2/index.html","43f2e968ce18d14e1569f1676ae8ea68"],["D:/Blog/public/archives/2020/06/page/3/index.html","407c624ea18306635574b7c6253bf276"],["D:/Blog/public/archives/2020/06/page/4/index.html","468ee74091837f9d3015d8c395546322"],["D:/Blog/public/archives/2020/07/index.html","c66b135c9bce5940680b5efdb4c1f60c"],["D:/Blog/public/archives/2020/07/page/2/index.html","881756e80fc2a9039a49f103aa231432"],["D:/Blog/public/archives/2020/07/page/3/index.html","fa1357d15fecc520c1ba6d90f0f86272"],["D:/Blog/public/archives/2020/08/index.html","3c262b234e40ff56b48a5c9ed4c64d89"],["D:/Blog/public/archives/2020/08/page/2/index.html","0cdfe103f63d8e4a7c254e2fbb9cef7d"],["D:/Blog/public/archives/2020/08/page/3/index.html","154255499ea30cfdbb7ab47cb1c42b7e"],["D:/Blog/public/archives/2020/09/index.html","e2642cb6a807fb7825a7c4cf801147ae"],["D:/Blog/public/archives/2020/09/page/2/index.html","76a1fe962d526dc5265bb856ed5646f5"],["D:/Blog/public/archives/2020/10/index.html","b34f5f5a859753f5ea805f8df9e5d560"],["D:/Blog/public/archives/2020/10/page/2/index.html","3e9b6096985e0f609c97bb807cd7a635"],["D:/Blog/public/archives/2020/11/index.html","924b1b6d61430969e0f24b4516ea5c45"],["D:/Blog/public/archives/2020/12/index.html","4f7ce0722319620e0ace9d3cf225e16f"],["D:/Blog/public/archives/2020/index.html","ca7e24730c3f946e3126539ec690d265"],["D:/Blog/public/archives/2020/page/10/index.html","6007f8c41ca5ba381b8e4a29f593bc20"],["D:/Blog/public/archives/2020/page/11/index.html","e41be908a2d00920e43cded828e1db48"],["D:/Blog/public/archives/2020/page/12/index.html","de60c68433f637fdd61b78c3e2c7b4fd"],["D:/Blog/public/archives/2020/page/13/index.html","2ba82a2e3d7e05916b5f43a1f0ef749f"],["D:/Blog/public/archives/2020/page/14/index.html","1d60aabb00835ddb2b75f0e6f76b6616"],["D:/Blog/public/archives/2020/page/2/index.html","cc50553a8784bd84ddc16c6a999baa8c"],["D:/Blog/public/archives/2020/page/3/index.html","43643b953303c0795daac82cab3f319b"],["D:/Blog/public/archives/2020/page/4/index.html","be372185f512906015d62a1cd865e172"],["D:/Blog/public/archives/2020/page/5/index.html","e9852d869b39831cd106fa71a1905e81"],["D:/Blog/public/archives/2020/page/6/index.html","bd371f9c50dff0d37bbb4433d841061f"],["D:/Blog/public/archives/2020/page/7/index.html","ae462af3431d4e82705e02c2611f5a76"],["D:/Blog/public/archives/2020/page/8/index.html","85c487d541acca778174ee8db1b25554"],["D:/Blog/public/archives/2020/page/9/index.html","0a267aee2fbb03072fd200a32261c288"],["D:/Blog/public/archives/index.html","01ec39375277d87a633a4336ddf89187"],["D:/Blog/public/archives/page/10/index.html","e54a4e378c2a6d7bc2371943fa3508f4"],["D:/Blog/public/archives/page/11/index.html","810bf7b724f856e57bdc8b9d2f4bdf62"],["D:/Blog/public/archives/page/12/index.html","810bf7b724f856e57bdc8b9d2f4bdf62"],["D:/Blog/public/archives/page/13/index.html","810bf7b724f856e57bdc8b9d2f4bdf62"],["D:/Blog/public/archives/page/14/index.html","810bf7b724f856e57bdc8b9d2f4bdf62"],["D:/Blog/public/archives/page/15/index.html","810bf7b724f856e57bdc8b9d2f4bdf62"],["D:/Blog/public/archives/page/2/index.html","ab4fed6ab04323e3abcd9d7cf0b621bf"],["D:/Blog/public/archives/page/3/index.html","ab4fed6ab04323e3abcd9d7cf0b621bf"],["D:/Blog/public/archives/page/4/index.html","ab4fed6ab04323e3abcd9d7cf0b621bf"],["D:/Blog/public/archives/page/5/index.html","ab4fed6ab04323e3abcd9d7cf0b621bf"],["D:/Blog/public/archives/page/6/index.html","e54a4e378c2a6d7bc2371943fa3508f4"],["D:/Blog/public/archives/page/7/index.html","e54a4e378c2a6d7bc2371943fa3508f4"],["D:/Blog/public/archives/page/8/index.html","e54a4e378c2a6d7bc2371943fa3508f4"],["D:/Blog/public/archives/page/9/index.html","e54a4e378c2a6d7bc2371943fa3508f4"],["D:/Blog/public/array/index.html","c0fd6e4d424b78e34b770c194bbb0abc"],["D:/Blog/public/binary-search-algorithm/index.html","c3ec752e7c82a9db3c1b9cd0e67baa04"],["D:/Blog/public/binary-sort-tree/index.html","898ae58fa4b3a573000b606238f6dba0"],["D:/Blog/public/bridge-mode/index.html","083ca584596530452c6cc5ee73fb0047"],["D:/Blog/public/builder/index.html","24667de0e1f49a94fde5dd68b612aa01"],["D:/Blog/public/c-pointer/index.html","96346372e6bb4ecac36191ab3d3638a3"],["D:/Blog/public/categories/C/index.html","634b492f643fa3859017a28ef54c1fa8"],["D:/Blog/public/categories/SpringMVC/index.html","db9a0b16c09b7e5d1ed20f99de6363b1"],["D:/Blog/public/categories/index.html","e1a2dfc0258cacb64d0952b60ea4e06b"],["D:/Blog/public/categories/linux/index.html","f2cc1cd7bc8792770bc97fabf1804ba8"],["D:/Blog/public/categories/分布式/index.html","f30c16bafe15edf572dd08e9587f0a8a"],["D:/Blog/public/categories/分布式/page/2/index.html","c075164452dd86025e0406cf12b54d02"],["D:/Blog/public/categories/前端/index.html","a65ad5833da7999df782cf848d1230a8"],["D:/Blog/public/categories/设计模式/index.html","4ea7a848cc5270052b401b0f77b27626"],["D:/Blog/public/categories/设计模式/page/2/index.html","a3d4ba4e78f2d5c28e423eadd4f0664d"],["D:/Blog/public/categories/高数/index.html","32f38a235f7d1f49335166a5f4effab1"],["D:/Blog/public/chain-of-responsibility-model/index.html","31d34dafe0012856a3c5d3be96be959c"],["D:/Blog/public/chinese-and-english-switching/index.html","912a6ccb94297426e25757260fbe53bb"],["D:/Blog/public/combination-mode/index.html","eebaa74612d61b9ce1a3edddf92a6351"],["D:/Blog/public/command-mode/index.html","d0cc402fba6a61865d81fb1a07fcd508"],["D:/Blog/public/common-commands-of-unix/index.html","f81b85c08719ba25b3a1c5755084713b"],["D:/Blog/public/computer-network/index.html","8d2c24fea32948546c6b4f110f0ff54b"],["D:/Blog/public/concurrency-principle/index.html","fc9521ec81dd7069200d7951fc4be462"],["D:/Blog/public/continuous/index.html","33b8a220e2fa744eb2e5ad98af3ca8c0"],["D:/Blog/public/contract/index.html","94f2656e6cce517094f6b0b96d4fc9ba"],["D:/Blog/public/css/first.css","99d02969c39ac404058365b466c26cb8"],["D:/Blog/public/css/style.css","c55907b127071408cb83da05b081912c"],["D:/Blog/public/cycle-structure-programming/index.html","78f947311957b573a445a73c7e55f185"],["D:/Blog/public/data-structures-and-algorithms/index.html","8df7b42c66d9f6b233a95535210c83e2"],["D:/Blog/public/deb/index.html","32480682dcc6b9c61a32f803c0763caf"],["D:/Blog/public/decorator-mode/index.html","91d07745aee9de19b990b0d1a2c51372"],["D:/Blog/public/definite-integral/index.html","490579cb62768561e9c0cb7788bc367e"],["D:/Blog/public/dependence-reversal-principle/index.html","ad4110d2f6cacd5af4c54a8bc0a33697"],["D:/Blog/public/derivative/index.html","10dfa3c0c4b60b803bddf7b825de66e6"],["D:/Blog/public/design-patterns/index.html","c44040c598f8462253909cc08af7e1be"],["D:/Blog/public/differential-equation/index.html","979a9ec7f6711d0320b09b3531f47f5e"],["D:/Blog/public/differential/index.html","8da9d6b78e9ed7158555d2e486a71a21"],["D:/Blog/public/dimits-law/index.html","bd94f24ff850f1afdaa61cb4b4dd2934"],["D:/Blog/public/docker-virtualized-container/index.html","e241b91605dcba213ab3151babb161af"],["D:/Blog/public/double-integral/index.html","33e1c607562e1c3a89307fb5e6e2ebde"],["D:/Blog/public/dynamic-array/index.html","db0345d0ab95c3924677c070f02eea0f"],["D:/Blog/public/encoding-algorithm/index.html","a277ffb8420bbe25176e9428b5ccee06"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","da123d8660bf01c22111f8d51f6a2fda"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","89c4c76e734a31f2da1de6b4c8b1dff1"],["D:/Blog/public/factory-design-pattern/index.html","2251a68a804b82195a52f109cd61636d"],["D:/Blog/public/file-input-and-output/index.html","0f3d4f6157b7d0429ae39f15575fdbd7"],["D:/Blog/public/flyweight-model/index.html","31f9ca15ec57f75064acb9058cf189c4"],["D:/Blog/public/friends/index.html","0e66f88ffe6678ee4a28fc5e93189469"],["D:/Blog/public/function-graphing/index.html","745464d2f379d3fe30ca6b3cecc7305c"],["D:/Blog/public/gateway-service-current-limit/index.html","1b2e087cb62ad1d3ec9c3f337a4d54e6"],["D:/Blog/public/gc/index.html","c17aa1591722c11e804d866ec6820d55"],["D:/Blog/public/generalized-integral/index.html","2e510987d97c87b8b68a3a75312c4e49"],["D:/Blog/public/google8102e2f35ce9e391.html","f3ba4442ccc92f4ff5da9d078757fdcc"],["D:/Blog/public/gulp-compresses-static-resources/index.html","9704ae5e89d5959b696aee774359ec33"],["D:/Blog/public/hash-algorithm/index.html","8218cb75b9041b9747895ed540df3063"],["D:/Blog/public/heap-sort/index.html","d7582477b274bf4cd13716989a4dd2ee"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","99b77a3647770f58721ca18581726eb1"],["D:/Blog/public/http/index.html","e9ad86f099fea438f2f175009930fe70"],["D:/Blog/public/indefinite-integral/index.html","6796bf04586707ef83764d2e55857a6c"],["D:/Blog/public/index.html","42d556569e177903c7817cae92ff73e5"],["D:/Blog/public/infinitesimal-and-infinite/index.html","6c3e684708c7e547e02272980b52a153"],["D:/Blog/public/interface-isolation-principle/index.html","78bf4e5982dcc960f3a96f60a5c01dc9"],["D:/Blog/public/intermediary-model/index.html","7521bd18bba6e0e749d73e022740087f"],["D:/Blog/public/interpolation-search-algorithm/index.html","54494e191ef3da14cee3de5b5cfaf1e6"],["D:/Blog/public/interpreter-mode/index.html","1797027f8a0d49b3682ae7348e484b02"],["D:/Blog/public/introduction-to-computer-network/index.html","5455ff50c20df354112c4fb57b4a0029"],["D:/Blog/public/introduction-to-operating-system/index.html","b7dad25a219914bbb3dd02d18e320d0b"],["D:/Blog/public/inversion-of-control/index.html","669228870e6d3ca0e730a43d42d7fd0d"],["D:/Blog/public/io/index.html","196fa0a017a8a8ac71092fb93f453efc"],["D:/Blog/public/iterator-mode/index.html","b5890d5bdf1b09004415aa497c53ac6a"],["D:/Blog/public/j2ee/index.html","b12e73957e5767dc8f3cba1695b5dad9"],["D:/Blog/public/j2se/index.html","2652f1452f09f092f36ec96c1e3e7b50"],["D:/Blog/public/jdbc/index.html","8d1533637fe54e7c66454dd6346d8161"],["D:/Blog/public/jdk/index.html","46d8df50799ce27236daedc52123b075"],["D:/Blog/public/jmm-memory-model/index.html","b147892af8cb25242737e688a604d454"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","ec5ffc096788c08b34e036c0e4b6bbfb"],["D:/Blog/public/law-of-robida/index.html","a8876f3b16dc5ca12600e62bc252827f"],["D:/Blog/public/limit/index.html","0b66aef75c64cb3211fc67bb2cdf9e24"],["D:/Blog/public/linear-search-algorithm/index.html","4e1734833d5f3b7f02053a2cc73bf0df"],["D:/Blog/public/link/index.html","9c02a75cf4960c4b02e3c3055d9bdf57"],["D:/Blog/public/linked-list/index.html","7ae427c23bb99e020ce673fb96d335cf"],["D:/Blog/public/linux/index.html","11cc04dbc0da6a280766f16deb4d599c"],["D:/Blog/public/liskov-substitution-principle/index.html","282f37c041f370b504b97e11769c2333"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","a0a377df0e8e1d7b6c03caab68afe2d8"],["D:/Blog/public/maintenance-1/index.html","6753c5de2ba9fd7670445842557edf4e"],["D:/Blog/public/maintenance-2/index.html","3b05426aafa7d3ba947a6889bb7fe983"],["D:/Blog/public/maintenance-3/index.html","31b65050dd8266d09786c96f85bb968a"],["D:/Blog/public/memo-mode/index.html","42d9ab5cfd611e7973339dca2b74d0cc"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","3c616189cda91ae57b114d37a5b54da0"],["D:/Blog/public/multi-function/index.html","9312faf7d402a2e1c8afc76dcc681dbe"],["D:/Blog/public/multithreading/index.html","e894cda00aeae2c7433aa4a24a17c133"],["D:/Blog/public/mvc/index.html","05396b441eeaeef67a9695b3b15e9e60"],["D:/Blog/public/mybatis/index.html","ea1c8e50187f47d0ca7032539c5cdcce"],["D:/Blog/public/mysql/index.html","e1bc2266faf8f337d74de24c36c7c52f"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","0c36bdb9ff564016d9d637ba4d5ab9be"],["D:/Blog/public/objectoriented/index.html","bca21f70b818774d316d06fe1c9ba7ed"],["D:/Blog/public/observer-mode/index.html","65e00def28bc83a85f28f7f5af9dc0e2"],["D:/Blog/public/operating-system/index.html","8dd5116d302021c986faa68e77ee80fa"],["D:/Blog/public/page/10/index.html","36c1763a3f8a2ad5a8bd40944d233de8"],["D:/Blog/public/page/11/index.html","2a779318eac5937fdeb368bb3a32f2e9"],["D:/Blog/public/page/12/index.html","347aa2d8035026ffc6d59b198c2df954"],["D:/Blog/public/page/13/index.html","1f894d88363b04d7a9df6c7f2563a56c"],["D:/Blog/public/page/14/index.html","6ff83ef88c862ed9de69b1ecf3211618"],["D:/Blog/public/page/15/index.html","b0a41936e0cd0f01caadec3135d07c57"],["D:/Blog/public/page/2/index.html","c63734d5a6dc5ccb5afcd31dd36a2cd1"],["D:/Blog/public/page/3/index.html","61c54bfae5ef8e8bacfde380ce03cd5c"],["D:/Blog/public/page/4/index.html","a5b53805010a120bf967b06a113bdd95"],["D:/Blog/public/page/5/index.html","c7d6c2bc183bfdc911626429fd365d61"],["D:/Blog/public/page/6/index.html","0d51700c526c48126f42aa30464dcb54"],["D:/Blog/public/page/7/index.html","5860f8dd96d1918d05aa59026a497b1c"],["D:/Blog/public/page/8/index.html","9f1e7d7e11f678473824806e8611d35e"],["D:/Blog/public/page/9/index.html","dbb0711eb4694011e51de015bc998836"],["D:/Blog/public/palindrome/index.html","1be126dc9f280cdbd87f5803a7c5e79d"],["D:/Blog/public/partial-derivative/index.html","a4cb5246512eb9e6beb2d6578ecc5998"],["D:/Blog/public/pass-by-value/index.html","3e8e2821163acdde0801c40cf36528a4"],["D:/Blog/public/pictrue-bed/index.html","5263b1b64c28af6d550d5bcbec42630b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","446a3eda8ebe88cafb172dea014ffb02"],["D:/Blog/public/principles-of-computer-organization/index.html","a0c11b3a69f1559b95a2a7dc3ad8c0e4"],["D:/Blog/public/prototype/index.html","40eca2991dc13061ea5aaee9d3ad511f"],["D:/Blog/public/queue/index.html","8faf24501e42415f42eacebfab0aaf04"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","287b0faba163bf7e0fefcebe8d543b9b"],["D:/Blog/public/redis/index.html","5f563a0fef56efdd079e109ed3e825d1"],["D:/Blog/public/reflection/index.html","16b81241c72d0b7b763457e3cdaea8ac"],["D:/Blog/public/resume/index.html","63ab924dc44c1570f0141a804e82f1df"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","fd976f18a28d2185f6c96b2b3d3d268f"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","133ba5f1825f947a5b4d1bf22bcd6df9"],["D:/Blog/public/select-structure-programming/index.html","b20579fbdb434158e7171b9208850201"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","45359159acbdf9caf33111d8a8ccf31c"],["D:/Blog/public/sequential-programming/index.html","a593571845e887227f187e5e6d0e7ffb"],["D:/Blog/public/series/index.html","47edc854716c8d9b6feb3aecf6526c5a"],["D:/Blog/public/single-responsibility-principle/index.html","bca0b8d3ac56cc16024754cd6f305d50"],["D:/Blog/public/singleton-mode/index.html","370a2c94a2b0a6797652f814e3652d06"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","8950a439e74abecb6aa31a6ef0708f39"],["D:/Blog/public/sparsearray-sparse-array/index.html","5baa9754bc79c8f8d3d34f3bf879535b"],["D:/Blog/public/spring-architecture/index.html","0730ae8bd2b1b76a9ab2b4c2acb7ac57"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","5b2f1164d97f2ccdecf6b27b4584a7bc"],["D:/Blog/public/spring/index.html","5d60151cdb69fa9e01b9d0db0cf8dd5b"],["D:/Blog/public/springcloud-alibaba/index.html","d06ca38659683b143e587ef60d82fcf3"],["D:/Blog/public/springcloud-bus-message/index.html","431b235bf95931dc284fd675eba8eaa5"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","8585126e85f397d5993863a818ada9ab"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","2ebbcf82d4434a58e8d82dea023062e3"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b72747b12d087180bc526c83de501af5"],["D:/Blog/public/springcloud/index.html","1702b0fdca5b48a6e8d1749a648f7479"],["D:/Blog/public/springmvc-environment-construction/index.html","ccd3e2755dce4d8048bd4fc819330c69"],["D:/Blog/public/sql-injection-attacks/index.html","f901a5680aa98ab35bc6219141666c76"],["D:/Blog/public/stack/index.html","db3e3aaae43f8620c59975d0b009e8ce"],["D:/Blog/public/state-mode/index.html","e28e0ad9a1b52ad0384e6e516c935739"],["D:/Blog/public/strategy-mode/index.html","4e996b2eb18c9ea45e808c64d3aed18e"],["D:/Blog/public/synthetic-reuse-principle/index.html","be0e15382c10f770a26ada324defd9af"],["D:/Blog/public/tags/C/index.html","46126cf52b09fd4bd759263023d8f70b"],["D:/Blog/public/tags/C/page/2/index.html","67a3028d0173ed9aaf18344e3c45576c"],["D:/Blog/public/tags/Concurrency/index.html","4fcb9797c6b0a203763516c6d7df3358"],["D:/Blog/public/tags/DesignPatterns/index.html","77e1656b61552e79d5686e0577295fa5"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","c6446162f8947ece2722bc83d29e1f8f"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","15c8cc5b8604354101890c6a3143f22d"],["D:/Blog/public/tags/DistributedMicroservices/index.html","8d6c316d3a21aae0083eb485731580d9"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","7bfc1a064dfbea5e8baf234979100666"],["D:/Blog/public/tags/Interview/index.html","e077f51f935626b7a9426ff25bd5ffca"],["D:/Blog/public/tags/Interview/page/2/index.html","4d5be853c74e3cca796441c26917aa7f"],["D:/Blog/public/tags/Operating-Systems/index.html","862e4973354f72d4d80e78d358bf4db1"],["D:/Blog/public/tags/about/index.html","38579e8d76feeb2175c74e1d931e90b3"],["D:/Blog/public/tags/ad/index.html","c71ebdc2fe808241a562f7ea407000c9"],["D:/Blog/public/tags/dataAlgorithm/index.html","27819141a19aa103af501d0048a299be"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","53cf0892386a0be2ac106801cca78df6"],["D:/Blog/public/tags/docker/index.html","75794d61576b08368926b53c87873c5e"],["D:/Blog/public/tags/frame/index.html","3dcdd5150b4c63a4d49b018c91c7eec5"],["D:/Blog/public/tags/front/index.html","9dd98621a76ef12b96b1e59498138bbc"],["D:/Blog/public/tags/index.html","19eedf44ff200a25594f913c4a8ebbca"],["D:/Blog/public/tags/index2.html","5668fdd2c836027eb8c579d30a151e0e"],["D:/Blog/public/tags/jvm/index.html","0e60051318741eeb586bed0a3a0aa5a4"],["D:/Blog/public/tags/linux/index.html","9958c2fe972d7e2aae4cc4e1f5801300"],["D:/Blog/public/tags/maintain/index.html","9bb0c5639dd17dd25551c27ce78b66a2"],["D:/Blog/public/tags/math/index.html","03676412417aa1b584787cd1f75db29a"],["D:/Blog/public/tags/math/page/2/index.html","55f494595e9aebc569ba327172f7ed29"],["D:/Blog/public/tags/network/index.html","7c4748df6f171960c2db30fd844f9829"],["D:/Blog/public/tags/resume/index.html","ef91a3c3492b23f88750b3267389b460"],["D:/Blog/public/tags/safe/index.html","15d481835aa1e7d81055f689b769bbfb"],["D:/Blog/public/tags/sql/index.html","7bff00f65149a0d7e1111be0ad3ffbd3"],["D:/Blog/public/tcpip/index.html","bd53d6ec5fa6dc8ea37f96b86281ec29"],["D:/Blog/public/template-method/index.html","7663a008af5bced610c3ab12579e2a17"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","701bbea0cdb1db7b56fd0a20e2032548"],["D:/Blog/public/thread/index.html","0d4ec1b4ae15091e51e1d16fb89eecf5"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","f9fae2df5442f3aac308d955b97ba901"],["D:/Blog/public/ubuntu-set-ip/index.html","36e8e5911f223a9db2f96eafe8d434cf"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","56eeb3d3ca35058067f625335e80988b"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","907edf49191a46d48cd52e3db2a62950"],["D:/Blog/public/users-create-data-types-themselves/index.html","774c554060b0ede942cf1c3d9dedf7ce"],["D:/Blog/public/visitor-mode/index.html","88603efd40112faff3ef448e540767b1"],["D:/Blog/public/xml/index.html","b8299528b8340be07c13f731902296da"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","f54a4cd3305e81a4e982ae485eb07218"]];
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







