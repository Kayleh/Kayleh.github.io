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

var precacheConfig = [["D:/Blog/public/404.html","7b5e34da0e370a54c187a2bbe501ad1f"],["D:/Blog/public/7-sorting-algorithms/index.html","3249ecc9a83ef6b571431e265e1b4868"],["D:/Blog/public/BIO-blocking-model/20200720183138508.png","277f21d6152184d6b226bcc998ebb949"],["D:/Blog/public/BIO-blocking-model/20200720183847235.png","376380d5efd589ce98c781005dfb4764"],["D:/Blog/public/BIO-blocking-model/20200720183859453.png","7ae9f6a85a301cbbd0ec3bca1402a09b"],["D:/Blog/public/BIO-blocking-model/20200721182800674.png","e58ece82b86b956fa88830ff58b3db0a"],["D:/Blog/public/BIO-blocking-model/index.html","154a1e7a6123731006ab0b7903ca27a1"],["D:/Blog/public/C-algorithm/index.html","2d19ccc0504ec3e9804052fc3ea016c7"],["D:/Blog/public/C-programming/index.html","9eaeec7a453e22f514c59cc859fe542c"],["D:/Blog/public/Good-use-of-pointers/index.html","0a16676f0f898231983f9dc0200fe4f6"],["D:/Blog/public/IO-model/2020072015491941.png","cc54a398c9e9ab9a01df4cb10720c317"],["D:/Blog/public/IO-model/20200720154944172.png","00a8e9dc82d69f5d0333490ca1e0d51e"],["D:/Blog/public/IO-model/2020072015514933.png","299d2ae736bee281b75b67751022877a"],["D:/Blog/public/IO-model/20200720155921778.png","4207b26277eebbe5345f6723799bd2c1"],["D:/Blog/public/IO-model/20200720160513951.png","049f9df7db8a7c8e7cafbfd36b12e84e"],["D:/Blog/public/IO-model/20200720161404658.png","b446c230f418fb34bdcd3006a254ba1e"],["D:/Blog/public/IO-model/20200720162148571.png","500e15fb824509d49a9aacc46f5ca4dd"],["D:/Blog/public/IO-model/20200720162300339.png","b0b8d93287fafb6cea7f2920e08f616a"],["D:/Blog/public/IO-model/20200720162657547.png","e75cefa1562e296b42778dcff4d3a2ee"],["D:/Blog/public/IO-model/20200720162901659.png","0752f3ad7656fc69d4b5a6d5f9cf8733"],["D:/Blog/public/IO-model/20200720163148736.png","647fb7d0292b95542fadd29ddeb77c78"],["D:/Blog/public/IO-model/2020072016333178.png","96ed4d7bd07c967b4eaa1fbfb3b12fe4"],["D:/Blog/public/IO-model/20200720163448654.png","e4aaf881b55a603b446f2e6db27ccd3a"],["D:/Blog/public/IO-model/2020072016354228.png","ede8549e6c555db9ede848024ad86f5e"],["D:/Blog/public/IO-model/20200720164448156.png","22254ac7a22404e1322128b216835a46"],["D:/Blog/public/IO-model/20200720164855993.png","49178520fe07880efce060b6dc1af933"],["D:/Blog/public/IO-model/20200720165057685.png","7e71108ed0cd1ac2e0fa42834fefd5cf"],["D:/Blog/public/IO-model/index.html","cabee6d52e632a50c1cd999e91c5fdc5"],["D:/Blog/public/Java-network-programming/20200719222030510.png","4e85c102a4299e0d9ffcbe461b736a6e"],["D:/Blog/public/Java-network-programming/20200719222140239.png","adb848f85b3053b5505ef4f54e24fbc4"],["D:/Blog/public/Java-network-programming/20200719222304793.png","aecc90a71bcbe3f19c78492f5c804f1b"],["D:/Blog/public/Java-network-programming/2020071922260859.png","a5cc432e3654a1c7268b80ccb096f37e"],["D:/Blog/public/Java-network-programming/2020071922320757.png","363a8b4c1783f04cda858adf2d2fbd90"],["D:/Blog/public/Java-network-programming/20200719223925329.png","e9f793d64aa2107544bb0fea7a0cfa14"],["D:/Blog/public/Java-network-programming/index.html","9b5d02a8e3eca061876526f2fb61fbc4"],["D:/Blog/public/about/index.html","7083ec58e5cda7201822d047a45f75a3"],["D:/Blog/public/adapter-mode/index.html","282e804b20492ed1d5dc043031ad8a10"],["D:/Blog/public/agency-model/index.html","7ba123f86dcafc2a685e6c7f8a212cc9"],["D:/Blog/public/appearance-mode/index.html","bfc95d17459be0ddf4b21ea63ce61fb8"],["D:/Blog/public/archives/2019/01/index.html","b22fd3d1f8d03dc9c3df4041ef2a3583"],["D:/Blog/public/archives/2019/07/index.html","054486692a798a79fffca943a7175752"],["D:/Blog/public/archives/2019/12/index.html","2d63e7fcbb13804b2b51bdafaf3dd2cb"],["D:/Blog/public/archives/2019/index.html","b0707938c6a0533cc109cf236986e26e"],["D:/Blog/public/archives/2020/04/index.html","8864eb63adddccd0c21035eb39be084a"],["D:/Blog/public/archives/2020/05/index.html","eea2f61cac575059867540c89c298029"],["D:/Blog/public/archives/2020/05/page/2/index.html","5d0ed448dc9d9dd4c1af2f414b2518c0"],["D:/Blog/public/archives/2020/06/index.html","86b08930537a23bb7e828d89a7d905f3"],["D:/Blog/public/archives/2020/06/page/2/index.html","7bfe408af862e38b6445018681ebee98"],["D:/Blog/public/archives/2020/06/page/3/index.html","6ba6800f7714e88847ffa6d3bea7470b"],["D:/Blog/public/archives/2020/06/page/4/index.html","46521e25e11177fe0ab807ad24dff78a"],["D:/Blog/public/archives/2020/07/index.html","3d900e06be3a075e1c269f28fc478141"],["D:/Blog/public/archives/2020/07/page/2/index.html","a218442705cd9d16f8f2191415c2e5d0"],["D:/Blog/public/archives/2020/07/page/3/index.html","f3d009e5da2ec1419fd3d3440229fa9a"],["D:/Blog/public/archives/2020/08/index.html","7b78a8a75770f4d89c5b06471cedef61"],["D:/Blog/public/archives/2020/08/page/2/index.html","aab00bb9aff01bda06e96278572adc48"],["D:/Blog/public/archives/2020/08/page/3/index.html","0e5a976da8d866752a7eb5b46e75b40f"],["D:/Blog/public/archives/2020/09/index.html","101fd51d533167cad797e64117ad11ab"],["D:/Blog/public/archives/2020/09/page/2/index.html","b220a82aeb21efa3d4804264c2caf41a"],["D:/Blog/public/archives/2020/10/index.html","e4637b9868bf2925fd22ea027e2f405d"],["D:/Blog/public/archives/2020/10/page/2/index.html","e6990493c0d299ca393a57d1d172ae87"],["D:/Blog/public/archives/2020/11/index.html","eac6aca3f4ae1d037421d9e72b59de47"],["D:/Blog/public/archives/2020/12/index.html","721cb932f27507cc27fdb566a9894e9c"],["D:/Blog/public/archives/2020/index.html","3cd7a6b877233584b6425c694d0bebd1"],["D:/Blog/public/archives/2020/page/10/index.html","fb1f664e1da31bb567c1a75236b6b82f"],["D:/Blog/public/archives/2020/page/11/index.html","1a60c2e0834b26b66e9ac4c8e6fa1239"],["D:/Blog/public/archives/2020/page/12/index.html","8bd2ca2f86849229f39c9c42a62dcd47"],["D:/Blog/public/archives/2020/page/13/index.html","6001eb5c4de6e61362539298c640facf"],["D:/Blog/public/archives/2020/page/14/index.html","ae5501099042ba80900c73df5380300d"],["D:/Blog/public/archives/2020/page/2/index.html","1124427422dc5d95e4c04af656689580"],["D:/Blog/public/archives/2020/page/3/index.html","92c3e5372844152eefcb5ff8cf8dfccc"],["D:/Blog/public/archives/2020/page/4/index.html","4e68df7a2140fe68b320e1cd9848efde"],["D:/Blog/public/archives/2020/page/5/index.html","12477f4c5f4a114fbd73bced3376b94c"],["D:/Blog/public/archives/2020/page/6/index.html","13cb58d45d22284fbebfc52179e82718"],["D:/Blog/public/archives/2020/page/7/index.html","ea81c0c63b2b2294c7c4f015e1b51c3d"],["D:/Blog/public/archives/2020/page/8/index.html","03877b40406ac27d4195fd2743eba215"],["D:/Blog/public/archives/2020/page/9/index.html","86dcbc9a0633fd72ac42bd2e2eb54bd7"],["D:/Blog/public/archives/index.html","b33e352e981e6987fde6d76dd0add949"],["D:/Blog/public/archives/page/10/index.html","f93f15c6c89016981e76160a52f79bb2"],["D:/Blog/public/archives/page/11/index.html","f93f15c6c89016981e76160a52f79bb2"],["D:/Blog/public/archives/page/12/index.html","f93f15c6c89016981e76160a52f79bb2"],["D:/Blog/public/archives/page/13/index.html","f93f15c6c89016981e76160a52f79bb2"],["D:/Blog/public/archives/page/14/index.html","e855c9a656369a2cbce6093c087d9c0a"],["D:/Blog/public/archives/page/15/index.html","e855c9a656369a2cbce6093c087d9c0a"],["D:/Blog/public/archives/page/2/index.html","b33e352e981e6987fde6d76dd0add949"],["D:/Blog/public/archives/page/3/index.html","b33e352e981e6987fde6d76dd0add949"],["D:/Blog/public/archives/page/4/index.html","b33e352e981e6987fde6d76dd0add949"],["D:/Blog/public/archives/page/5/index.html","61ce3b73da54c4df6ff383180b7646c4"],["D:/Blog/public/archives/page/6/index.html","61ce3b73da54c4df6ff383180b7646c4"],["D:/Blog/public/archives/page/7/index.html","61ce3b73da54c4df6ff383180b7646c4"],["D:/Blog/public/archives/page/8/index.html","61ce3b73da54c4df6ff383180b7646c4"],["D:/Blog/public/archives/page/9/index.html","f93f15c6c89016981e76160a52f79bb2"],["D:/Blog/public/array/index.html","b9207ec75c752c542e6d24cdead456ce"],["D:/Blog/public/binary-search-algorithm/index.html","62efbe5ee9cac94bed2d1628d62c59b5"],["D:/Blog/public/binary-sort-tree/index.html","3e0d5797a0ee31b22899dbd4c89754a7"],["D:/Blog/public/bridge-mode/index.html","62961298bede1a6ebc6e4f1a00e7186a"],["D:/Blog/public/builder/index.html","ed8cac761711ba43b8325d51d09ad81d"],["D:/Blog/public/c-pointer/index.html","61371c31c5c1eaa9399e8176ddb9e855"],["D:/Blog/public/categories/C/index.html","f3fd77cdf3837bf77187374af351dc83"],["D:/Blog/public/categories/SpringMVC/index.html","6eb60da8f2318795b53f394a97117683"],["D:/Blog/public/categories/index.html","a92bb03087bab5a60a324fc01cbeda4e"],["D:/Blog/public/categories/linux/index.html","8c089c43332eaad9d08b2dc6a84d9e71"],["D:/Blog/public/categories/分布式/index.html","e0903e262e7b8c4746bb8c5e1da3e052"],["D:/Blog/public/categories/分布式/page/2/index.html","f4e8167c2a4f8034f179217d6492480b"],["D:/Blog/public/categories/前端/index.html","579d652e0696c4186c77299e21a77891"],["D:/Blog/public/categories/设计模式/index.html","93a9597a8510782978b2bf64640c8fdc"],["D:/Blog/public/categories/设计模式/page/2/index.html","e71fa4bfa1de254d6dc5e158e1f77a0e"],["D:/Blog/public/categories/高数/index.html","1808eae02c146de02fe91e85325feae3"],["D:/Blog/public/chain-of-responsibility-model/index.html","48f9b4b8963401f92131e15f98a33fd2"],["D:/Blog/public/chinese-and-english-switching/index.html","f465bc263d6bd2d8bc69fb77ed0197a9"],["D:/Blog/public/combination-mode/index.html","9aa08020c6aa32c05858c3265f9ccc60"],["D:/Blog/public/command-mode/index.html","46c504432fd8490db9d1c6681de8b8b0"],["D:/Blog/public/common-commands-of-unix/index.html","e8e7e39eba8764d8940e042e1a9ffd84"],["D:/Blog/public/computer-network/index.html","0d58c8187d25f2d049555582258054a5"],["D:/Blog/public/concurrency-principle/index.html","f837f57640cfbfef76277685dc28b54b"],["D:/Blog/public/continuous/index.html","83b867d71a8027dd1614f7ed9e1c6e1d"],["D:/Blog/public/contract/index.html","6658ef37bdbc5580f1aa9498b3ea43bd"],["D:/Blog/public/css/first.css","cdfbcbee9e1a755efcddee9c08cc77aa"],["D:/Blog/public/css/style.css","85dcad8308a9c37a5f430a7ed22c4df9"],["D:/Blog/public/cycle-structure-programming/index.html","dcf8f06ada9c6b1fbfc429e000115a20"],["D:/Blog/public/data-structures-and-algorithms/index.html","11cf779552aaeeb5df580e5d94321577"],["D:/Blog/public/deb/index.html","091c77fa99ed338cf013771c63e73013"],["D:/Blog/public/decorator-mode/index.html","e7b4cf2bacefcbfb0a01bbf25d3e82e4"],["D:/Blog/public/definite-integral/index.html","9c5c77dbb271808fe899ba298054de26"],["D:/Blog/public/dependence-reversal-principle/index.html","138e3b670bdba2ff4c1776f90908fdcb"],["D:/Blog/public/derivative/index.html","61b00e318835c01d664f8022503cdca7"],["D:/Blog/public/design-patterns/index.html","79705bed89c26e8883a90e911a0826b1"],["D:/Blog/public/differential-equation/index.html","3981447d97ff7fac7fa5e411b35f655e"],["D:/Blog/public/differential/index.html","2360d044b8c38aa4d7fa9ac99e350d67"],["D:/Blog/public/dimits-law/index.html","d66e35a77247db94b1f0d50db1605d60"],["D:/Blog/public/docker-virtualized-container/index.html","b9470bd0f703a8931edf44f5901545be"],["D:/Blog/public/double-integral/index.html","6c5c3cb4853cde77e35d654eeae48935"],["D:/Blog/public/dynamic-array/index.html","694b68eb7d7966d25a4e0d56856945ea"],["D:/Blog/public/encoding-algorithm/index.html","590b4f4f2a01e6265d85d542999acf5f"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","259974581dcb24dc22937d2c465fb846"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","7775727319c87093b261aa43d9c000fa"],["D:/Blog/public/factory-design-pattern/index.html","5f62a24617215cb6db6272973640556b"],["D:/Blog/public/file-input-and-output/index.html","b943a4d1b59deeb1b9d2179b87afbd76"],["D:/Blog/public/flyweight-model/index.html","3ce73732af7af97eab2b28671363b9ab"],["D:/Blog/public/friends/index.html","e4caed18892ce7be1b275dc373fd0f99"],["D:/Blog/public/function-graphing/index.html","cb9b239da84ab95c0a4aa5f077c88e90"],["D:/Blog/public/gateway-service-current-limit/index.html","062da321eb8d28c77c4b68fe499501bc"],["D:/Blog/public/gc/index.html","eebf77cc0687c34e2e539152506bcc56"],["D:/Blog/public/generalized-integral/index.html","0bbb52477ddf7b2cc2231a461032cb20"],["D:/Blog/public/google8102e2f35ce9e391.html","2d72b3e13b4918b604ad74748bdc8411"],["D:/Blog/public/gulp-compresses-static-resources/index.html","346f8c69a97caf09c436c6d97d875216"],["D:/Blog/public/hash-algorithm/index.html","4882cb9418ddaba5f7f31617ce36087d"],["D:/Blog/public/heap-sort/index.html","508788256db85d57c28ec539236fdd74"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","dfe1b38a1e752431c401b0083eb64e5e"],["D:/Blog/public/http/index.html","cdbe73497e8f1bac514d497600f753bd"],["D:/Blog/public/indefinite-integral/index.html","5ed1731a50d775c257103fbc32bb0730"],["D:/Blog/public/index.html","84b93d26bf308e2f090676c24a3c1253"],["D:/Blog/public/infinitesimal-and-infinite/index.html","eae9d1a150b3f93785cc4091dfcc6830"],["D:/Blog/public/interface-isolation-principle/index.html","c2c4ae81c0b1f28402c9b25df938ae96"],["D:/Blog/public/intermediary-model/index.html","daf096e06d7537c8a3e370dd2dcddd2f"],["D:/Blog/public/interpolation-search-algorithm/index.html","bfbdd51bb522d2cf92e5f3b4532c0bfc"],["D:/Blog/public/interpreter-mode/index.html","197f3e2f0ca29deb5f2c8175026c6127"],["D:/Blog/public/introduction-to-computer-network/index.html","49f3fe4040155bae8ac2f7b02f635469"],["D:/Blog/public/introduction-to-operating-system/index.html","9079526071fad55f941b7d6edb5d9e07"],["D:/Blog/public/inversion-of-control/index.html","bb6828af490cab52132b58367ca77692"],["D:/Blog/public/io/index.html","3e2c32fde2bfcd210fe6711bdd4669a8"],["D:/Blog/public/iterator-mode/index.html","fc5a22612d074ff5ea94d77023e8a66c"],["D:/Blog/public/j2ee/index.html","3d89d36af6ddb752bdb3c04443d8f799"],["D:/Blog/public/j2se/index.html","f9a47360fc4c6271ed86ccdbe9775dcf"],["D:/Blog/public/jdbc/index.html","d8899a26116db39d8f52385cb9c4164a"],["D:/Blog/public/jdk/index.html","a0ca80220c1a0315225dbeb667c582cf"],["D:/Blog/public/jmm-memory-model/index.html","41d4aecc543e6b66d843a15ffb074282"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","0ca86fcabd0bc7dbfec0584138e97dd4"],["D:/Blog/public/law-of-robida/index.html","114f467158fd8d77d3fe25b6c2e4aac4"],["D:/Blog/public/limit/index.html","157da0c6fba70663ff7f93b419fab081"],["D:/Blog/public/linear-search-algorithm/index.html","77188dc182fbefd3bc4443554947a7aa"],["D:/Blog/public/link/index.html","9eb1e698d2accefd311e4cdefa5e0b9c"],["D:/Blog/public/linked-list/index.html","3fa6c622ca58e0c40b8fbe75e4d62306"],["D:/Blog/public/linux/index.html","be49efb6ed41df710e4831335174146d"],["D:/Blog/public/liskov-substitution-principle/index.html","45b32404f9dc8c4ecf27b4b3db20aeba"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","dedfd1c5976d1dd30a0240d451c09577"],["D:/Blog/public/maintenance-1/index.html","7f927dbe064d9cd088c6bb2948449f69"],["D:/Blog/public/maintenance-2/index.html","5b920ced52cac080f4e687efabc91d76"],["D:/Blog/public/maintenance-3/index.html","2bc384cac9093ff0fd01ece6cede1496"],["D:/Blog/public/memo-mode/index.html","6374bb547d55a1b688815f8cf10f1c68"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","04d0b4ad3c8d4c0239ebe3c60cf9fd33"],["D:/Blog/public/multi-function/index.html","7ba251de4011402b2e6b2f89a1b28eb2"],["D:/Blog/public/multithreading/index.html","5b2436b5f6fb266f68d3563ebcddf422"],["D:/Blog/public/mvc/index.html","3f32bd0bc3a4eb67cbf3129fd4f96036"],["D:/Blog/public/mybatis/index.html","ea6e7cbb3746cd2ebd21db17ff8287e5"],["D:/Blog/public/mysql/index.html","e68f926a2be1378d38af923dc7779ba7"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","609daed6bf94db89833593cb312455b5"],["D:/Blog/public/objectoriented/index.html","dbd925f4b508da16c51173fd0d6e6bad"],["D:/Blog/public/observer-mode/index.html","02c777ca186a522d84cff5d099bc7b95"],["D:/Blog/public/operating-system/index.html","ce20dc8e198a47036b40443b92b6b767"],["D:/Blog/public/page/10/index.html","cd9c8b8386a00e37f2cb05bb7d1203df"],["D:/Blog/public/page/11/index.html","95e6344aba987158e698b374026415a2"],["D:/Blog/public/page/12/index.html","d1613626708c8d13c3d9ecdcb8c95033"],["D:/Blog/public/page/13/index.html","08a80871387cdd623d283af090a3e49e"],["D:/Blog/public/page/14/index.html","84b156fd74e9873a1f6703cc9e53dd9f"],["D:/Blog/public/page/15/index.html","3c2c2104b529a2505c1e8cd8d7b646d9"],["D:/Blog/public/page/2/index.html","01145259f60299e19f25364f5f7103be"],["D:/Blog/public/page/3/index.html","c2dca0f7125586558065ccd88e6c6180"],["D:/Blog/public/page/4/index.html","bc039a4d0b8fb99f7c1f162037b42120"],["D:/Blog/public/page/5/index.html","4c88a7efab5647cc55096a2d34b9071c"],["D:/Blog/public/page/6/index.html","3724e6247d83cd832187296eef895daa"],["D:/Blog/public/page/7/index.html","cd285c8167f7ffc1e7a8d43e3bc1d017"],["D:/Blog/public/page/8/index.html","c08a1e9cc1c4d8158bab0141d791f156"],["D:/Blog/public/page/9/index.html","13a96fa5ac908c606cae1f97e5f01295"],["D:/Blog/public/palindrome/index.html","f7282b2f9048cdf6c186b5363af268e4"],["D:/Blog/public/partial-derivative/index.html","5bafb1ae054bb4884cd9097daab5b21f"],["D:/Blog/public/pass-by-value/index.html","89adaedf6850feb646162ca7b2197d87"],["D:/Blog/public/pictrue-bed/index.html","0f93e9907c632890f8f92e78c0c04523"],["D:/Blog/public/principle-of-opening-and-closing/index.html","0da26fc74dc3bd6022916976c3912c33"],["D:/Blog/public/principles-of-computer-organization/index.html","3b2644b1721f6150793b0a2b16587d2a"],["D:/Blog/public/prototype/index.html","021f9485b218beaab16303c1fc1a77bb"],["D:/Blog/public/queue/index.html","060f6b4f04336e628fb54fbebdaa4321"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","e61237fcd10653b318173b7a57af542e"],["D:/Blog/public/redis/index.html","0f61e628d6090cf9a55a52cdc2e9b8f6"],["D:/Blog/public/reflection/index.html","a4416e425b707405d373b656f3439765"],["D:/Blog/public/resume/index.html","7c0f8a3b50fcb7a392f7ce1f8ae6fe1f"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","0d2f632909a34bfd32dadf8796eb5ce0"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","00723778085126162958c1c81f9a3252"],["D:/Blog/public/select-structure-programming/index.html","2b9e00ef010c1a8cc844c1c91cbb4c75"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","055e3f81b0faa281e8e4aa44e8fe5d96"],["D:/Blog/public/sequential-programming/index.html","c901271289401d232bb9c695ca9f1005"],["D:/Blog/public/series/index.html","3751da567eafc1ae81901f130291279d"],["D:/Blog/public/single-responsibility-principle/index.html","21c950adf29ddae997dbd28a69fe4a19"],["D:/Blog/public/singleton-mode/index.html","fefaa7da5c089c7a93f03c61f798ac7d"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","7f35288cc1b74aa906cbcdd0b690b745"],["D:/Blog/public/sparsearray-sparse-array/index.html","2377dcb859c7ebdd90a971d835cf20b4"],["D:/Blog/public/spring-architecture/index.html","3652d61d8334a9e6e4edc0fdf552fe36"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","4a5f711b5df3a86e7a3645d52cb0cd3d"],["D:/Blog/public/spring/index.html","4ed3d98caca4d0c4ec4a2be7d1d9ecda"],["D:/Blog/public/springcloud-alibaba/index.html","55fd431cbe4b627176e9ff1cf55111ae"],["D:/Blog/public/springcloud-bus-message/index.html","fd50290b6b6d8dd83416198a4ac01918"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","7fd836c87f6a987812527c69ba7e700c"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","0e6c4662b56d16ff6a01af3ff39a7c76"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b08fc40c4a7d9291631c99f6ff98c282"],["D:/Blog/public/springcloud/index.html","8f6fed01ed14f3e7c591c40b46087057"],["D:/Blog/public/springmvc-environment-construction/index.html","851ca0db40d9c508522ffcf5452955ba"],["D:/Blog/public/sql-injection-attacks/index.html","b1b26b19cf2434b7eec0c045442ceb5f"],["D:/Blog/public/stack/index.html","8e06ea55904bde2a523b689bfcb8ecec"],["D:/Blog/public/state-mode/index.html","266832f87764d30db4ff682837d9675d"],["D:/Blog/public/strategy-mode/index.html","93a80abac0206f5d4255cf3317f8ed38"],["D:/Blog/public/synthetic-reuse-principle/index.html","cc3d021fb134271e728bedab5d351d4d"],["D:/Blog/public/tags/C/index.html","5a4cdd36aa7c7fe3089f5a9b9a5f2642"],["D:/Blog/public/tags/C/page/2/index.html","8b6c3d94bd1f983162342c70e0fd29ad"],["D:/Blog/public/tags/Concurrency/index.html","89fb473f73e677c748f79c6cc7937e9b"],["D:/Blog/public/tags/DesignPatterns/index.html","881b9e7db96a998027bb178809c69275"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","783d9d03bd8bdf25bad7eb979542f826"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","cdfa7ddb67c6166f599cb1b56074b8d1"],["D:/Blog/public/tags/DistributedMicroservices/index.html","3c9b5010c36e3a584038db13169a0abb"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","2641b0d93b13d9cf94c218b4c2ff3288"],["D:/Blog/public/tags/Interview/index.html","b6d1ead0e0ed4e21ba99291775eb7bf7"],["D:/Blog/public/tags/Interview/page/2/index.html","b3cb2df58298120b34a24f316acccaef"],["D:/Blog/public/tags/Operating-Systems/index.html","10af5422ea3964ad864dda62040293fb"],["D:/Blog/public/tags/about/index.html","51de87a89508230b8f07ad4c84b87024"],["D:/Blog/public/tags/ad/index.html","c854def8b8c72c50b4347ca076c1cd3d"],["D:/Blog/public/tags/dataAlgorithm/index.html","776cfbe849718c59b216643f8081f4ae"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","64ed22df70f811321afbaa4e3b85aadd"],["D:/Blog/public/tags/docker/index.html","cba6a202e0802fd88cebd57aa4b4ad65"],["D:/Blog/public/tags/frame/index.html","6867f8821c707877c673390d63e52830"],["D:/Blog/public/tags/front/index.html","e13f8d5ef4a99d17acb7ec32fe077731"],["D:/Blog/public/tags/index.html","c974a65118225573851cfe613e820d92"],["D:/Blog/public/tags/index2.html","fba3c4664909e3796210227c3863858d"],["D:/Blog/public/tags/jvm/index.html","81ab1aff2e141618233bdcfc5992ba20"],["D:/Blog/public/tags/linux/index.html","d97cada13e4473eca24ccf5ba16888eb"],["D:/Blog/public/tags/maintain/index.html","c7d4a052a3cccee3c61794d9c8cb23bc"],["D:/Blog/public/tags/math/index.html","2a5dd452442709e94605b1becbc0440b"],["D:/Blog/public/tags/math/page/2/index.html","1901128d707685d21c62b7ea27cb87ca"],["D:/Blog/public/tags/network/index.html","8b60774e7ed7fddd640189e393a93562"],["D:/Blog/public/tags/resume/index.html","901aac6556a72035f42f69d6ebe40071"],["D:/Blog/public/tags/safe/index.html","e1847140312799dda6787157531602a4"],["D:/Blog/public/tags/sql/index.html","71103bff73d8731dd8ce1515f6a52813"],["D:/Blog/public/tcpip/index.html","20c3d54af2678c6b324b582208aefb87"],["D:/Blog/public/template-method/index.html","9e2c9989b6cb39f96993fe38a53589e4"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f2c26fc0c6c35e633aa893e5c0b7e201"],["D:/Blog/public/thread/index.html","f9828fd31bf66c76ab1bede1b450f1bd"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","d95d621206e022cae7281077039847ec"],["D:/Blog/public/ubuntu-set-ip/index.html","c43e7ee0c94d7a29d10ce18d4581867d"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","5f064d0168ac286c9cfdf32edc6c2eb7"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","eade279ce043c8010e22bf6273b2d1ea"],["D:/Blog/public/users-create-data-types-themselves/index.html","f09a544e78b0ab40f5c0e8a2c8713eeb"],["D:/Blog/public/visitor-mode/index.html","da058379a7a03a87f31309bb263aa94f"],["D:/Blog/public/xml/index.html","79665d615e3bbd0722107709bf457bf2"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","dc234b19020a8f045a07c09a21c6b6c4"]];
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







