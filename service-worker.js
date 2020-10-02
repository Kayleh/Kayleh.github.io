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

var precacheConfig = [["D:/Blog/public/404.html","05e07dea8258b47f7aefc2aa9c0336bb"],["D:/Blog/public/7-sorting-algorithms/index.html","a896540ff3299ab282c421c9bbfffc93"],["D:/Blog/public/adapter-mode/index.html","5a8c8468fa578752923b289e1cb3e1ff"],["D:/Blog/public/agency-model/index.html","d161a18cd5804321eda66e350f731d2f"],["D:/Blog/public/appearance-mode/index.html","5e88d1fdc85dbe38ac2dedbbcc299005"],["D:/Blog/public/archives/2019/01/index.html","0f10eeb711da1de813b71749220efedd"],["D:/Blog/public/archives/2019/07/index.html","54fd0ec7721c0c70ba65df738f20db5c"],["D:/Blog/public/archives/2019/12/index.html","1354f79c89877bf613a895ff1737daac"],["D:/Blog/public/archives/2019/index.html","69384b98f1b0da8ffefd306e7f0daf8d"],["D:/Blog/public/archives/2020/04/index.html","a0b8505fb02f86d25387f8dacc902758"],["D:/Blog/public/archives/2020/05/index.html","0a6afb076928428a5dd37e7fe82ec524"],["D:/Blog/public/archives/2020/05/page/2/index.html","97c496bcfdc69ca7085438beeecffcbd"],["D:/Blog/public/archives/2020/06/index.html","16bb004a1e02018cfab61c8598645ef5"],["D:/Blog/public/archives/2020/06/page/2/index.html","e539e280ecf28b276b38d0e336f330a1"],["D:/Blog/public/archives/2020/06/page/3/index.html","7a4e23337f6077a9dc7c9180a8a49ea1"],["D:/Blog/public/archives/2020/06/page/4/index.html","1a954d648602893fe094a6d7c9f5ba41"],["D:/Blog/public/archives/2020/07/index.html","f7b481f3fdd66f9651882c46be7b7fcc"],["D:/Blog/public/archives/2020/07/page/2/index.html","6800e2561fd6176d00f86990fdcfbb6e"],["D:/Blog/public/archives/2020/07/page/3/index.html","81ba3d430fd6af4913ebdfc3b62a433a"],["D:/Blog/public/archives/2020/08/index.html","bb5ade599e09b143117c0d194977eae0"],["D:/Blog/public/archives/2020/08/page/2/index.html","a0079d821468e80c3522438dfd344ea9"],["D:/Blog/public/archives/2020/08/page/3/index.html","e0a7e87b428e88d5c99b31b2e0a3a0a8"],["D:/Blog/public/archives/2020/09/index.html","dfc7e32c33d51c0ff0f17844e5138c6a"],["D:/Blog/public/archives/2020/09/page/2/index.html","6c98bc24e47982a5cdead14a0892e73a"],["D:/Blog/public/archives/2020/index.html","f94d67b1d8afd2a2bb8e3f179f268683"],["D:/Blog/public/archives/2020/page/10/index.html","48abdc31a0ca552d787cf75396ef7c49"],["D:/Blog/public/archives/2020/page/11/index.html","7373946386022bb140737d4255144504"],["D:/Blog/public/archives/2020/page/12/index.html","7f7e5cb7aa16a7ce88f8dd7155f13cb3"],["D:/Blog/public/archives/2020/page/13/index.html","a19b2287c5335bc35e719aa85e3faed0"],["D:/Blog/public/archives/2020/page/2/index.html","2e68f13c9fec34fa7b8d9f685179cf79"],["D:/Blog/public/archives/2020/page/3/index.html","dc181fb0c00eb147f4853d0fad8f0959"],["D:/Blog/public/archives/2020/page/4/index.html","756be5392932ab177ce4dbc950644a49"],["D:/Blog/public/archives/2020/page/5/index.html","30f344e1937390514484a9039baeb8df"],["D:/Blog/public/archives/2020/page/6/index.html","565b8985e727cdc994ef51a2c3583850"],["D:/Blog/public/archives/2020/page/7/index.html","b53785308ded42c53eb57437199266e2"],["D:/Blog/public/archives/2020/page/8/index.html","ea12091063e235679fad3a3123475915"],["D:/Blog/public/archives/2020/page/9/index.html","d2a6676bca24e47e828a482f069a87fa"],["D:/Blog/public/archives/index.html","6e22b2cd9931427b30b4217c6d2d0672"],["D:/Blog/public/archives/page/10/index.html","a924164893eaa6d52331d754468fcebd"],["D:/Blog/public/archives/page/11/index.html","a9ba91e97aea0300f23797d2fb01df71"],["D:/Blog/public/archives/page/12/index.html","f95cc6f887e589a7299654adbc307dee"],["D:/Blog/public/archives/page/13/index.html","754e5a9e28d36e9d5ad33957ae8c3da3"],["D:/Blog/public/archives/page/2/index.html","f06d7d822180b2de46c611e75fbe4602"],["D:/Blog/public/archives/page/3/index.html","fc1ae9b0263aeccaa2bc3b6958abe3b1"],["D:/Blog/public/archives/page/4/index.html","eec98483a7b7f57a291a5cf5a07d7a23"],["D:/Blog/public/archives/page/5/index.html","05c25dadaa35b4897ef1c34284509669"],["D:/Blog/public/archives/page/6/index.html","52ff8ff4f07da61e5b687fa354dd0da1"],["D:/Blog/public/archives/page/7/index.html","15063e57d4a00afe06706c2d2f1662e4"],["D:/Blog/public/archives/page/8/index.html","7572200292e46780b734054a4e0cf2f8"],["D:/Blog/public/archives/page/9/index.html","d4214efd59af14e4b655bff18b5b8323"],["D:/Blog/public/array/index.html","be925d2c3dee2c34b5247712903d001e"],["D:/Blog/public/binary-search-algorithm/index.html","33f56bf924cdd8f4865698be28bb1f97"],["D:/Blog/public/binary-sort-tree/index.html","e7b2c92364ce907d44f8c7c303e0b392"],["D:/Blog/public/bridge-mode/index.html","47912cd4dd47e13980a8299928fdffbb"],["D:/Blog/public/builder/index.html","f5ecd262c176aa5deb6564f77be7d984"],["D:/Blog/public/c-pointer/index.html","ea4004b8baf06795e5e13222127d8c20"],["D:/Blog/public/calculus/index.html","08053e1d6aae6ec94ecba123145a0d8e"],["D:/Blog/public/categories/C/index.html","522291cccf1bde56828afa4faa3f53c9"],["D:/Blog/public/categories/SpringMVC/index.html","24240322102f911ac1e1047ca6cc15fe"],["D:/Blog/public/categories/index.html","48e280f35736e52361a688f4a24dd91f"],["D:/Blog/public/categories/linux/index.html","11a7edea02983b266e79c87e9729e627"],["D:/Blog/public/categories/分布式/index.html","2410a05302cdc060d4e06dd05828487e"],["D:/Blog/public/categories/分布式/page/2/index.html","24de077a3a3d6f21a494d69f4d8c93c7"],["D:/Blog/public/categories/前端/index.html","c7d6685bba19c5d8dc550d9dd6de7d16"],["D:/Blog/public/categories/设计模式/index.html","402ed9cd95a0523ce87f13efcbd49308"],["D:/Blog/public/categories/设计模式/page/2/index.html","740989c0d3c4c879f3842eff9c29f27a"],["D:/Blog/public/categories/高数/index.html","59bb80488d459a6afcff1f9486001436"],["D:/Blog/public/chain-of-responsibility-model/index.html","ba5e92cb851d95f6e5a3daefb3c69b79"],["D:/Blog/public/chinese-and-english-switching/index.html","f200f172d1db6144e5f15b541275bdf1"],["D:/Blog/public/combination-mode/index.html","4c9015be2946121cda228888e94b8b79"],["D:/Blog/public/command-mode/index.html","1b4a2052360fb237ec4d2c198435d035"],["D:/Blog/public/common-commands-of-unix/index.html","b127f8d3f9c793caaa711b29005f7c60"],["D:/Blog/public/computer-network/index.html","e65fbaed6a3a3ba992dff3edfe89041c"],["D:/Blog/public/concurrency-principle/index.html","333781e52e854271e07832088c5e4efd"],["D:/Blog/public/continuous/index.html","934557355c4a812dbd99ec7d52a8c362"],["D:/Blog/public/contract/index.html","f8369e4c3aa55f9d0fb8457fe0fb7e8f"],["D:/Blog/public/css/index.css","a8efcc34e613756db97751e5da8111f3"],["D:/Blog/public/css/var.css","a940f58dcfb1e70e14f890c14e232f96"],["D:/Blog/public/data-structures-and-algorithms/index.html","690d8c2319cb12d6e5db283298951b22"],["D:/Blog/public/decorator-mode/index.html","e83e74389175dcca8780bcac11ececa2"],["D:/Blog/public/definite-integral/index.html","492a21933988c418121b5ccb998e2442"],["D:/Blog/public/dependence-reversal-principle/index.html","aaa28cbb80e0cf5b6822682245306352"],["D:/Blog/public/derivative/index.html","0d66df2effd4e9398419d305b3ab5ba6"],["D:/Blog/public/design-patterns/index.html","8c835924a6c5491ec24bfeb827443160"],["D:/Blog/public/differential/index.html","c36665d99cd103611e5501db5e4a1dcb"],["D:/Blog/public/dimits-law/index.html","3c434bbb648475c2be33cc1a130eca84"],["D:/Blog/public/docker-virtualized-container/index.html","eaf31b73ed677db23c037c4388aad0fc"],["D:/Blog/public/dynamic-array/index.html","b2ed2a0caa3b3de13d0fbb5e948b0fd3"],["D:/Blog/public/encoding-algorithm/index.html","dcbd4f44d74ecd2182c7c1285c354c80"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","b0143552c01e43b9feb90fc33b8957d0"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","4ec66cb817fab2901fd3fb931cd0eaa5"],["D:/Blog/public/factory-design-pattern/index.html","80b37b37562a6e1de73faa001f2671ac"],["D:/Blog/public/flyweight-model/index.html","5fad235f6b8679137a129cb08c952267"],["D:/Blog/public/function-graphing/index.html","2d74bf142c2dd47b187c1fdb26e81708"],["D:/Blog/public/gateway-service-current-limit/index.html","04c2f94f2cac6b67a6a255b721b7b3be"],["D:/Blog/public/gc/index.html","d305f7817e95a83084bc89bc3fc20ba8"],["D:/Blog/public/generalized-integral/index.html","5d22d39dfc1d10501a71ed47f66e104f"],["D:/Blog/public/google8102e2f35ce9e391.html","6a989076d6d006c2c8723167a96aa39b"],["D:/Blog/public/gulp-compresses-static-resources/index.html","a422920a0adfdb6750c150ca2f762c98"],["D:/Blog/public/hash-algorithm/index.html","d60405794165ca00a9ab093597dd9df1"],["D:/Blog/public/heap-sort/index.html","468312d7243f004fbff88a1f195b3447"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","06e609f4ed975a54a07ab973bd81b5ec"],["D:/Blog/public/http/index.html","fde5d29486abfa177f9b90d79d12b30c"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/indefinite-integral/index.html","881d2dbae155d3329884bcc095f1d01c"],["D:/Blog/public/index.html","b508224b758de4aa5e33b760fb488e0a"],["D:/Blog/public/infinitesimal-and-infinite/index.html","9d3d06d40c114e723e0cc0e669c84cd3"],["D:/Blog/public/interface-isolation-principle/index.html","316b22fe6074db21f7c7eabcf384604e"],["D:/Blog/public/intermediary-model/index.html","1327b36bc2ad6c2fd25ca11d4b3fcdd0"],["D:/Blog/public/interpolation-search-algorithm/index.html","b2d14519c296eb7cc8a4e268d446af23"],["D:/Blog/public/interpreter-mode/index.html","8d7df7e8078629a0d5766f2d1b6b3945"],["D:/Blog/public/introduction-to-computer-network/index.html","e5fa6189485cf7472ca94ded5de1e368"],["D:/Blog/public/introduction-to-operating-system/index.html","8bf3d66c219fbb58533160ff924ffee0"],["D:/Blog/public/inversion-of-control/index.html","182ee3960f2c9aedb359e41a503adfd0"],["D:/Blog/public/io/index.html","cde1084605bd33dbad397e24a4b21129"],["D:/Blog/public/iterator-mode/index.html","adc84c45413800b223df3db3e3d12e04"],["D:/Blog/public/j2ee/index.html","425645b284be9c1d45e7f95bad85ed43"],["D:/Blog/public/j2se/index.html","d317d491e8cad640502f140af288d4d5"],["D:/Blog/public/jdbc/index.html","d7e3ecd4cf59a2418e7fb64121d00d48"],["D:/Blog/public/jdk/index.html","7e3df33a4c9fcb157223bb4324f3975e"],["D:/Blog/public/jmm-memory-model/index.html","e7a7a08eca1f99a95dac3f94ab4d7215"],["D:/Blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["D:/Blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["D:/Blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["D:/Blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["D:/Blog/public/jvm/index.html","d944a5f7e84cf0a48eb673318ceeabd2"],["D:/Blog/public/law-of-robida/index.html","c35a49c4b5e90c525b8f71113ab0f315"],["D:/Blog/public/limit/index.html","9f45c585d150587c6262d6b15d0bcbbb"],["D:/Blog/public/linear-search-algorithm/index.html","65a13f7f7eafab545d2e88973c90f665"],["D:/Blog/public/link/index.html","e3272a37ba039ece5eee396619af66e0"],["D:/Blog/public/linked-list/index.html","12de5f4799158aae9c1909adcda14f8c"],["D:/Blog/public/linux/index.html","73d0f99f1345060a046d259c5af68886"],["D:/Blog/public/liskov-substitution-principle/index.html","60d6ee82f024c97716d65577e788f670"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","d63b12e5b3d1c3d6f8b74ae6ff89f935"],["D:/Blog/public/maintenance-1/index.html","8689bb42cacc9ef4158eeca7643c1c51"],["D:/Blog/public/maintenance-2/index.html","7537beda39666cecc20b74331b4b9c38"],["D:/Blog/public/maintenance-3/index.html","ec05dd5f5483dcccbb2f90cf9af4b3e6"],["D:/Blog/public/memo-mode/index.html","88e4ef7d2b0cbc8f78fb5b0a24907416"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","ca10bdb0d42ff015ae5461db29ecb462"],["D:/Blog/public/multi-function/index.html","c29f4ddea980bbdd2592e63afd1f0daf"],["D:/Blog/public/multithreading/index.html","73a18523d701fa95db22381108b985b5"],["D:/Blog/public/mvc/index.html","dd70992ffb24ac1be634e02d5c7af370"],["D:/Blog/public/mybatis/index.html","0fd35c9da64c624bcfcf0eee3d317679"],["D:/Blog/public/mysql/index.html","47ecb8a15861d1c31c4849cecd632647"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","87261fe9f807d656b1e5c810494b2fcf"],["D:/Blog/public/objectoriented/index.html","218cb948d1750051d4ac6592088ab7ea"],["D:/Blog/public/observer-mode/index.html","db2f7334add97ea82fb6a2cb787cf428"],["D:/Blog/public/operating-system/index.html","dff24321a6ec33ac520616d9685ca716"],["D:/Blog/public/page/10/index.html","e9e4b70cc67402c71aa4f05989b10673"],["D:/Blog/public/page/11/index.html","8a89d701a6d25ddcd3028f2e6dcdcbb4"],["D:/Blog/public/page/12/index.html","f3455ea2c7bbce64f263e848b5595c64"],["D:/Blog/public/page/13/index.html","5646cda83ca36cb22586d0ebf36677f0"],["D:/Blog/public/page/2/index.html","bd482bcda42484e78d33c72942a13d3d"],["D:/Blog/public/page/3/index.html","e2f99a70a41050a4463f16321c11e1d3"],["D:/Blog/public/page/4/index.html","29e297d069348d9149e9f4db647b2e00"],["D:/Blog/public/page/5/index.html","3f3d280d8ba430716ff7ce8f4b083f42"],["D:/Blog/public/page/6/index.html","8d4e39b5a1ebbc0db3ae05c2c30ba964"],["D:/Blog/public/page/7/index.html","a7fe1a071624387acccc22d713de6ffa"],["D:/Blog/public/page/8/index.html","85ceeb74c9f25206fe06c63c57825c4e"],["D:/Blog/public/page/9/index.html","4596ca1a5681fbbd462f2b61c659bdad"],["D:/Blog/public/palindrome/index.html","fc10e9673dbfbf8ef6cfc80077119f2e"],["D:/Blog/public/partial-derivative/1601445508700.png","c0592adf850017f14e72c6cb0d56cb9c"],["D:/Blog/public/partial-derivative/1601445566320.png","11a127ee7ff375b6540e713d881033ba"],["D:/Blog/public/partial-derivative/1601445908951.png","3ead02f6b3992910a00956e71272f8ca"],["D:/Blog/public/partial-derivative/1601483632915.png","5e818d640d77241ce1ab47881cd466e5"],["D:/Blog/public/partial-derivative/1601484198275.png","5f1fa2d5cdbb5b3cc0c1eac0773aa15f"],["D:/Blog/public/partial-derivative/1601484542681.png","fe155321a649c90555e9ba5ad1a45ccd"],["D:/Blog/public/partial-derivative/1601485323277.png","1b38d02dbda9326078bcb2e1a83355e6"],["D:/Blog/public/partial-derivative/1601486051149.png","ed5bd9331f8dad4995ea40609784dd8f"],["D:/Blog/public/partial-derivative/1601486294681.png","4659170f79953f4b52b4b0e93da7d2d8"],["D:/Blog/public/partial-derivative/1601519540974.png","7873173b958466f6b41aec02cd1c2646"],["D:/Blog/public/partial-derivative/1601521286233.png","5815b8c6658f15f8cac6d484cd04cc7f"],["D:/Blog/public/partial-derivative/1601521299461.png","09c49ee4446832f9cef35a6e12139bc0"],["D:/Blog/public/partial-derivative/1601522781003.png","73aa075c05a412f2098873b7745c354d"],["D:/Blog/public/partial-derivative/1601522951253.png","acef6f9262106c8142681e7c82b83e12"],["D:/Blog/public/partial-derivative/1601524573062.png","1e754b06fc3e1aaecf0826952101aee5"],["D:/Blog/public/partial-derivative/1601537220332.png","8fbcc3abc17206e7cc30c2afb7722da7"],["D:/Blog/public/partial-derivative/1601537658697.png","d7c8de9bbba3b5be5cb57b6d9a44834f"],["D:/Blog/public/partial-derivative/1601538273461.png","fe281f3b48e5d92c5a585235220f797b"],["D:/Blog/public/partial-derivative/1601538416772.png","753237a9a072b8f2a37727dfc5996e4e"],["D:/Blog/public/partial-derivative/1601539670990.png","ec147ba38c6eef93daeab0e608cf3940"],["D:/Blog/public/partial-derivative/1601543140863.png","815a3091c1c8705ce73496513add0a2d"],["D:/Blog/public/partial-derivative/1601544657228.png","89cc36b38e67d24bbc2234eb750b17fb"],["D:/Blog/public/partial-derivative/1601546031624.png","b879f5106b327a83ae2cb38f6a2c399b"],["D:/Blog/public/partial-derivative/1601555127077.png","730a49415d85a2355c75d9c67db8d6fc"],["D:/Blog/public/partial-derivative/1601556049588.png","a2e00b15c08154f4a6a95ecb5b2447b5"],["D:/Blog/public/partial-derivative/1601556490422.png","276aee107637a1a19f0ce76eaebc7495"],["D:/Blog/public/partial-derivative/1601556789370.png","eb335bb6746977c78f3dd28720533c31"],["D:/Blog/public/partial-derivative/1601570240705.png","176721c7e9a20cc57e8ac6878355cca7"],["D:/Blog/public/partial-derivative/1601571263222.png","3ed6a30f517536f0c05fc7405518e54b"],["D:/Blog/public/partial-derivative/index.html","2d3cc5ec08f93716ba34e3f378370aae"],["D:/Blog/public/pass-by-value/index.html","fa17bba7392575d8a15acecd3b7c7312"],["D:/Blog/public/pictrue-bed/index.html","a663042fe49729d8470dca769c5d1528"],["D:/Blog/public/principle-of-opening-and-closing/index.html","3c45143cb85678ec2e88747895dbe727"],["D:/Blog/public/principles-of-computer-organization/index.html","3869ac45061f71e7f716d6184adfa11c"],["D:/Blog/public/prototype/index.html","207506ac5242ebef6e26443d7f94c2a6"],["D:/Blog/public/queue/index.html","7b6c7d2dd6e891ca1b3c76919a61f37c"],["D:/Blog/public/redis/index.html","c7a104c26d0243944a922024655b5f80"],["D:/Blog/public/reflection/index.html","e552955de0f9bcbdf5dca2cdd90eb9bd"],["D:/Blog/public/resume/index.html","bebccc13f94dcc008b5d4658186d2217"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5ef87e511ce74724992db85e50b0ee43"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","1ffcbe607e27edb9dec6c13657695ae2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","8685d758c4f1c0d4eb1eea5ecb8647df"],["D:/Blog/public/single-responsibility-principle/index.html","d9b10a41d712719354a3a31b42f82cad"],["D:/Blog/public/singleton-mode/index.html","68eafdcc9a4820c216b13977600d3a9f"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","5336f8a2809d15783eadc9c0c22a49a1"],["D:/Blog/public/sparsearray-sparse-array/index.html","8901eab3b805dba63d717b4f98eaa8d7"],["D:/Blog/public/spring-architecture/index.html","89db6b9191737b5319d8eecc41cf9f4f"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","5c4e7d9977a75a05d091c474215733e1"],["D:/Blog/public/spring/index.html","661113490a60b7d8c255df7e43f807e9"],["D:/Blog/public/springcloud-alibaba/index.html","422abe27e501ec79a9e310815c0e5fe4"],["D:/Blog/public/springcloud-bus-message/index.html","4f198fdf62db72cdb17a06058669634f"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","935337c7950367203ca07a7747ec0714"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","116709b78a6c73df708bf9096ce1758c"],["D:/Blog/public/springcloud-stream-message-driver/index.html","c1d9a38e1faada42743223131faee828"],["D:/Blog/public/springcloud/index.html","299d984818e19efc7d8cc954960b06c2"],["D:/Blog/public/springmvc-environment-construction/index.html","672752d1bc671ae5cbbe1294c3b0412f"],["D:/Blog/public/sql-injection-attacks/index.html","29a9a3063db3434363168135c6150334"],["D:/Blog/public/stack/index.html","7ffb72e776c52cf4ed4b5018d229d4b7"],["D:/Blog/public/state-mode/index.html","16688b3ed3d6039140ef1a14acf253fb"],["D:/Blog/public/strategy-mode/index.html","246b2f4c58a36b1b3d05c419becfa617"],["D:/Blog/public/synthetic-reuse-principle/index.html","9415e5bcc761b866581437186f9ea87b"],["D:/Blog/public/tags/C/index.html","cc78f743b1e39fae758f9efe7b47eea5"],["D:/Blog/public/tags/Concurrency/index.html","ca0f1a058529f6a0be7a19953fbf440c"],["D:/Blog/public/tags/DesignPatterns/index.html","92e51601166759f01cf737bdba2fdbbd"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","b0cf645ad3d807d592e162f1f3d89602"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","e3a1d51b3f17322d45eed78e53194cd2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","983e509ca0428034c59db7dca62f3aa6"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","e54573eba92a74ef7baba9bce275d3ba"],["D:/Blog/public/tags/Interview/index.html","2d3fec6bfcb346e34201296ef8a89815"],["D:/Blog/public/tags/Interview/page/2/index.html","2e4e9cc787c626b792d5fedfa8fd30c4"],["D:/Blog/public/tags/Linux/index.html","6d73a5a525cc3677c5e8b10a8763cbbe"],["D:/Blog/public/tags/Operating-Systems/index.html","1f73703966d47567383f70987d3ba33c"],["D:/Blog/public/tags/about/index.html","54582575503ab7f52005f2a9765e720f"],["D:/Blog/public/tags/ad/index.html","4e157351864c13018427babaeac76e35"],["D:/Blog/public/tags/dataAlgorithm/index.html","7737a4d980d0c6940d867636c982d82a"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","1249b904a7935b0426c675adf393a287"],["D:/Blog/public/tags/docker/index.html","f688180442d07a08ebee22d2f8357a8d"],["D:/Blog/public/tags/frame/index.html","5a026451e7fb502bff395d9a632d40e1"],["D:/Blog/public/tags/front/index.html","2dc3a1613daabe55acba122d56d48b5e"],["D:/Blog/public/tags/index.html","0be9d11cf45f5296b3c0501543724198"],["D:/Blog/public/tags/jvm/index.html","4b29d1b576451e059088fd553746d336"],["D:/Blog/public/tags/maintain/index.html","e55923c0ee29e7ef26a2dbbbeb496f9d"],["D:/Blog/public/tags/math/index.html","e4cd611f7a6b661de7011cb2c9bb2e2e"],["D:/Blog/public/tags/math/page/2/index.html","d4181788dca0512f4c996ba8ed0e950c"],["D:/Blog/public/tags/network/index.html","8964202e3a35554e3028f3d04a981ced"],["D:/Blog/public/tags/resume/index.html","9baa4661ea3ae825757cc4aad479a0b6"],["D:/Blog/public/tags/safe/index.html","0435f284c2f2de20c88aaa1ad648de06"],["D:/Blog/public/tags/sql/index.html","c3980be8f50834cc6634817ffddaf658"],["D:/Blog/public/tcpip/index.html","0b8368f4ff72ff3f800e5d0637f6d5f8"],["D:/Blog/public/template-method/index.html","0867c8a05f7f39ce3559d2425b1fb015"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","08b1212a628b9b86819ea3a52650f243"],["D:/Blog/public/thread/index.html","0c38db465ccf86ac95928826336fba8b"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","861eaae9d4f15082115dc38fbf511fa7"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","107bc75a36ce6ef0b5142375560dcedc"],["D:/Blog/public/visitor-mode/index.html","2ff8005bd9e7e0a3ef96e05e68f69ba3"],["D:/Blog/public/xml/index.html","60454fc20e1b0430544864160ba153f8"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","1571a8ebc0b014d82ecc219da1d3bea9"]];
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







