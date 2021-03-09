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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","4c5eb1ffb2edb544ac634f3e827126e3"],["D:/Blog/public/AIO-blocking-model/index.html","28eb5c29db6ee0dc37e127f0388e9710"],["D:/Blog/public/BIO-blocking-model/index.html","0a41d0389df2e151a92268d63a282a95"],["D:/Blog/public/C-algorithm/index.html","eb43a4e520cb21d526fea0df5b9d2d47"],["D:/Blog/public/C-programming/index.html","0adce326b02d67d8dbe8fc2fb9a0e220"],["D:/Blog/public/Good-use-of-pointers/index.html","f6484ca04d90d6254157bceffe1dbabe"],["D:/Blog/public/IO-model/index.html","9b5da6b029a280fd9038cc9537d65ad9"],["D:/Blog/public/IO/index.html","9aef8360bde575f49515da88b1e01295"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","8af06c883a6c4482228ad2cfb3e709c7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1aec2957f98638276c448954a9946175"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","80532f452429838a608e5dd55efd9818"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","8020a5c4ff9cf369e0004032c8dd2366"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","165546fdba7bc88c784821c68b6fa92d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","24ef9ac2870d1d0186f8373455f59e3b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","2c198a66b1be51470b5148b883eba077"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","edf26feb3b5b119b980d13946b6d2a0b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","65a4be6b86483059b5af68851a513d5b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","3f344e1e0fcf34f19069ba5e768fbdbb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","1973a1a63b64f6a8311b7804266f1705"],["D:/Blog/public/Java-network-programming/index.html","561d7f5813d4c432c2fec023a2496a97"],["D:/Blog/public/NIO-blocking-model/index.html","d9d6b513a4116032217a8819388ceded"],["D:/Blog/public/Native-method/index.html","589a5975b5cb0c66f9634d0868f9c5e4"],["D:/Blog/public/Sandbox-security-mechanism/index.html","5bae915ac415f5a3432cc60c1716fac4"],["D:/Blog/public/SpringBoot-startup-process/index.html","7a95c2f8fb08d38ed9b27bb4b241419d"],["D:/Blog/public/ToDoList/index.html","a15d79f184d5d089e8e0c2e9fb884b19"],["D:/Blog/public/Transaction-isolation-level/index.html","c9a4ca91142a8931a0ede3ba9495a959"],["D:/Blog/public/Unitest-framework/1613147342997.png","fa212602da6a0c2e4ab81932e2c75959"],["D:/Blog/public/Unitest-framework/1613147496034.png","fb8fb1de9dea6723da6655e5839071b2"],["D:/Blog/public/Unitest-framework/1613149415607.png","701939feacc13efa4cacc1c011cd4772"],["D:/Blog/public/Unitest-framework/1613149552674.png","2b99ab4b3ceac7811b7ff973a8255884"],["D:/Blog/public/Unitest-framework/1613149845499.png","d5edfd7d7be45c825f3c5711f91cf99d"],["D:/Blog/public/Unitest-framework/1613199579426.png","541d81408c0a8888cad00aac49503689"],["D:/Blog/public/Unitest-framework/1613199693463.png","eee76d2a6bbbaa2b18686de5d15e4b90"],["D:/Blog/public/Unitest-framework/1613201703588.png","c482912ce5975fcf6424f54967a04ee7"],["D:/Blog/public/Unitest-framework/1613202112317.png","0c2eb115b6ddd8ccbee66b9a10c3b488"],["D:/Blog/public/Unitest-framework/1613207825662.png","46612333f91fb08d11bbcd71203dd100"],["D:/Blog/public/Unitest-framework/1613209390861.png","b0fa2badf3e229650b7c9352cdb3a885"],["D:/Blog/public/Unitest-framework/1613231860846.png","77b157d07a6a0ec5a8869d4d32a5f4b0"],["D:/Blog/public/Unitest-framework/1613233980464.png","2f6c54ae5225ff55147a56468f3c2d98"],["D:/Blog/public/Unitest-framework/1613234000816.png","17e04a5b9d28590aff758324ef2560e3"],["D:/Blog/public/Unitest-framework/1613318481043.png","a6fc0054631f98a47fab59a18fd74cad"],["D:/Blog/public/Unitest-framework/1613319975732.png","9d229584d9af8d77053f62517ae0f6f7"],["D:/Blog/public/Unitest-framework/1613320887518.png","e89da2326af7177ddfade11232fc8cb3"],["D:/Blog/public/Unitest-framework/1613320910898.png","92d8321a4929754ef93066a5fb546b36"],["D:/Blog/public/Unitest-framework/1613321695363.png","57b43dba7110bbc028d2afdc352f1f0c"],["D:/Blog/public/Unitest-framework/1613382483121.png","89a6e495519d3552ce14316747002e57"],["D:/Blog/public/Unitest-framework/1613396353835.png","66342708e81223a005185b78803ffddb"],["D:/Blog/public/Unitest-framework/1613572027235.png","f8ae449948cedba80762326c2045b5a9"],["D:/Blog/public/Unitest-framework/1613572049278.png","a54870854361cd61b3f1780683bfac35"],["D:/Blog/public/Unitest-framework/1613574779605.png","b816007f840be276bea17e08c3edc98a"],["D:/Blog/public/Unitest-framework/1613756103321.png","c49b04974e587992708ff0e68734533a"],["D:/Blog/public/Unitest-framework/1613756685341.png","221904cb98e3247e85a995af4c316ea5"],["D:/Blog/public/Unitest-framework/1613756748533.png","145350445ae6d8b9f3447fcd242c25f0"],["D:/Blog/public/Unitest-framework/1613756844713.png","a11d8a7f97ac68b6c6ccff01ea02ace9"],["D:/Blog/public/Unitest-framework/1613756873832.png","443b20f6ac52c989f6cb87da992d6e15"],["D:/Blog/public/Unitest-framework/1613757056609.png","58de11268b65ffcffaa5c6aeea72d4fd"],["D:/Blog/public/Unitest-framework/1613757120441.png","95ad4cf246b6655a8cefa8ed51c03e27"],["D:/Blog/public/Unitest-framework/1613757139743.png","e3b78e44d1bbc6835c3e4eccbf9a6880"],["D:/Blog/public/Unitest-framework/1613757341191.png","eb380cb7b190b88495a249ff6d3d4955"],["D:/Blog/public/Unitest-framework/index.html","dfcce143b9cefca5f369e86c35fe08bb"],["D:/Blog/public/about/index.html","c72c7b48aef68d4f7e86f7c512907520"],["D:/Blog/public/adapter-mode/index.html","70dde61ae3227b337d35a31182666864"],["D:/Blog/public/agency-model/index.html","03c2f4e7583a3dc64e2a348ac87e62e9"],["D:/Blog/public/app-test/1615133542830.png","f2252c4155ba1c7eb94e793c3816e8bb"],["D:/Blog/public/app-test/1615134963504.png","3727408d0572012f05e72e091245741d"],["D:/Blog/public/app-test/1615134979917.png","11bf8799a71de27a4caba556359e4ac7"],["D:/Blog/public/app-test/1615135150085.png","9b7d51601ee116f3ed17bed5ddc1ae5b"],["D:/Blog/public/app-test/1615135195319.png","b6153bcbb796e1f14258c38dd0cea85d"],["D:/Blog/public/app-test/1615135394779.png","1a80beadb7e1ab4b8ad7d5bcee4836bb"],["D:/Blog/public/app-test/1615135456332.png","1a73082d9968946274a00032fbdc202a"],["D:/Blog/public/app-test/1615135477942.png","9559ef78a775625da716f62850bbba80"],["D:/Blog/public/app-test/1615135504852.png","74bbf7bfcf68007fc532b9c3150d8fc0"],["D:/Blog/public/app-test/1615135520679.png","16bc1ec76be0bd9fdf754fb4bc741f33"],["D:/Blog/public/app-test/1615136053666.png","3aff8e9b2b4d622dae78c5a18db79011"],["D:/Blog/public/app-test/1615136213904.png","d780af897a3a7bfc0d35be479fdf579a"],["D:/Blog/public/app-test/1615136698549.png","eff9a46ea5f759fea1a6435cc3734a1c"],["D:/Blog/public/app-test/1615136880550.png","625b8e743070d2a4c78b4175dd3cafbb"],["D:/Blog/public/app-test/1615136938152.png","90ff4df62edab19702c571278c61aabc"],["D:/Blog/public/app-test/1615137461874.png","ee505a38ab2b063b3eba48d507768bcd"],["D:/Blog/public/app-test/1615137765268.png","2de6322dc34106ac55570db044daf7ee"],["D:/Blog/public/app-test/1615137928157.png","2c9582cf225898001d67ad1aa9a04d56"],["D:/Blog/public/app-test/1615140074133.png","bad2e0e847cfd5561fd39de1798b9a35"],["D:/Blog/public/app-test/1615140333141.png","396901c801a353ab0852b7aaf17f5ca4"],["D:/Blog/public/app-test/1615142556664.png","e34bd942578ff83c4282a251afd91eae"],["D:/Blog/public/app-test/1615232986341.png","e1e24b1264d3c3490875b6858eb09f0d"],["D:/Blog/public/app-test/1615233173816.png","08d0b003fdf7e7f2b95557d85efc45ee"],["D:/Blog/public/app-test/1615233382480.png","ace7df6d1679ee1a0db97b3c7e617538"],["D:/Blog/public/app-test/1615233473534.png","f05cc4d58d396d46433f3738ea044b6e"],["D:/Blog/public/app-test/1615233720649.png","52589757b9d1d3bf861eb50c3aa9c2a7"],["D:/Blog/public/app-test/1615234913928.png","2243da7961021c02fd3636602f56a9bf"],["D:/Blog/public/app-test/index.html","99396f3d53475eaf9bdcc80c24ffbfad"],["D:/Blog/public/appearance-mode/index.html","20e57b63a90fd8eefdd9bb4bf6f09170"],["D:/Blog/public/archives/2019/01/index.html","d5709d7d9db159516f37f8480ba34c0b"],["D:/Blog/public/archives/2019/07/index.html","890d39914175539d9b63b349606d00f2"],["D:/Blog/public/archives/2019/12/index.html","52f8237fcc910f4cb1a604f13e7cf895"],["D:/Blog/public/archives/2019/index.html","3666064ec69a4e682a40151ff2d78cd4"],["D:/Blog/public/archives/2020/04/index.html","d50bb59773171a62e35cefaa5ce2afa1"],["D:/Blog/public/archives/2020/05/index.html","6c2bee8bf74c4802fd66c096befcf88d"],["D:/Blog/public/archives/2020/05/page/2/index.html","c215474b4aa905c886660137ef6b0415"],["D:/Blog/public/archives/2020/06/index.html","fa31fa8b82cb4e7de13e0747272ed0fd"],["D:/Blog/public/archives/2020/06/page/2/index.html","611a70e23705bbd1ed16851bc6f8246f"],["D:/Blog/public/archives/2020/06/page/3/index.html","b4e8a90533734a07d0b6b152e82d5fb6"],["D:/Blog/public/archives/2020/06/page/4/index.html","8f047eba2a47497326a575c136049012"],["D:/Blog/public/archives/2020/07/index.html","cf7fb078ecd867e5f712c53d20469b0b"],["D:/Blog/public/archives/2020/07/page/2/index.html","2ae03eddabc97655acf055d919069aa6"],["D:/Blog/public/archives/2020/07/page/3/index.html","079b240f1bd92c6a599e9b59be875014"],["D:/Blog/public/archives/2020/08/index.html","6a54ea5f882f8f4e1eb0136a33176f2e"],["D:/Blog/public/archives/2020/08/page/2/index.html","f9b509e7ba17c502d64222f037c3002a"],["D:/Blog/public/archives/2020/08/page/3/index.html","86e4ef9528e2baa2b0dee2d6b66b2010"],["D:/Blog/public/archives/2020/09/index.html","05e0a40083e43fa5785d76199a83ac4d"],["D:/Blog/public/archives/2020/09/page/2/index.html","8068d65294e74218e179dc0cbabfaa7a"],["D:/Blog/public/archives/2020/10/index.html","847392e765ac550cf8866d00e11cc075"],["D:/Blog/public/archives/2020/10/page/2/index.html","070ba4849556b10376e7396422203e34"],["D:/Blog/public/archives/2020/11/index.html","b234d061e9258cfa13a7e4310637570f"],["D:/Blog/public/archives/2020/11/page/2/index.html","165bb812e6a4ab347ca46e44dc05187c"],["D:/Blog/public/archives/2020/12/index.html","b99964bfa6c882cbf94fdf8274d30e23"],["D:/Blog/public/archives/2020/12/page/2/index.html","460637da82e1aede0165151812f2142b"],["D:/Blog/public/archives/2020/index.html","4bf72c79166b47f8d3d5400ed7672d52"],["D:/Blog/public/archives/2020/page/10/index.html","b781adc8341354cdc45a1abd348a1186"],["D:/Blog/public/archives/2020/page/11/index.html","a4087e84dd774249fd959c9bfe4372ca"],["D:/Blog/public/archives/2020/page/12/index.html","d56accd48a8ddd151cf841019618c3f1"],["D:/Blog/public/archives/2020/page/13/index.html","310e3bca337b5b26487d79b92d5872e1"],["D:/Blog/public/archives/2020/page/14/index.html","1e4da5032b6c39abd39a3f662027a07d"],["D:/Blog/public/archives/2020/page/15/index.html","9af6aff123ac57b8bbd528f31627f3bc"],["D:/Blog/public/archives/2020/page/16/index.html","9fdc160f1d47e34e6872419b10770b31"],["D:/Blog/public/archives/2020/page/17/index.html","cee4d5ad4db498bbbc7d5798c653ddeb"],["D:/Blog/public/archives/2020/page/2/index.html","0aca2e07632df4fb542aa2ec557093cf"],["D:/Blog/public/archives/2020/page/3/index.html","f552f526d0a568dba96ccb8ad5facab5"],["D:/Blog/public/archives/2020/page/4/index.html","693936d691bc2caefb0a3f7538d74f47"],["D:/Blog/public/archives/2020/page/5/index.html","5fdfa33d67a9781662112076dbe11de4"],["D:/Blog/public/archives/2020/page/6/index.html","a7861a4ea4bca2417636db58c893c101"],["D:/Blog/public/archives/2020/page/7/index.html","202f9ffe304806fbca2c0ed6b0bbb1b8"],["D:/Blog/public/archives/2020/page/8/index.html","3b296a89851d505af2db61fba0cc4801"],["D:/Blog/public/archives/2020/page/9/index.html","61e77220b5b72262f8134193067ef215"],["D:/Blog/public/archives/2021/01/index.html","98a01182db01fa7fb39cf86d75bb591b"],["D:/Blog/public/archives/2021/02/index.html","5e67e4ff04f21d48e047909d6d9d401c"],["D:/Blog/public/archives/2021/03/index.html","dd37343eb1c246d0f2159ec9434a872f"],["D:/Blog/public/archives/2021/index.html","5a2908974a81a7006bae36925c5a871f"],["D:/Blog/public/archives/index.html","fa794993e1c27a4166885efce00ca4c5"],["D:/Blog/public/archives/page/10/index.html","e3e3d9c39ab059544dc2ba9bd87bce8f"],["D:/Blog/public/archives/page/11/index.html","1335062b2f503871ebc79f57d4f0cdf6"],["D:/Blog/public/archives/page/12/index.html","686568f822d13c90ebb6b3eaa6e50440"],["D:/Blog/public/archives/page/13/index.html","d47bb04c692d19346c6bd2d1592f317a"],["D:/Blog/public/archives/page/14/index.html","0589ad68bdad6a919aae92321a942ca4"],["D:/Blog/public/archives/page/15/index.html","94bbda57088261ad11f16092ba315434"],["D:/Blog/public/archives/page/16/index.html","b55d7f4ad8cab7b5c260305fecfdca15"],["D:/Blog/public/archives/page/17/index.html","0e6d80be420e9e5fe5317ebd81bd6277"],["D:/Blog/public/archives/page/18/index.html","ad3bf871eb19cd08d4a8c2d949ad89ac"],["D:/Blog/public/archives/page/2/index.html","0c89e1c0c8151304e06bce3349a7331a"],["D:/Blog/public/archives/page/3/index.html","9367eb77abfdbba9f3bfff97c49c848d"],["D:/Blog/public/archives/page/4/index.html","1a2daa76945d2601dc5a07b79fbbf1e5"],["D:/Blog/public/archives/page/5/index.html","2125cefa38a0b2be548dc7ef14866687"],["D:/Blog/public/archives/page/6/index.html","dd128c9b25869f2ae3d0c2882c2f444d"],["D:/Blog/public/archives/page/7/index.html","5aae39e26d81caf4c7df45839232c824"],["D:/Blog/public/archives/page/8/index.html","16af0319923924c90edadcd1d4312b26"],["D:/Blog/public/archives/page/9/index.html","6092a218e0ebd3c7cd4cca477feefcfe"],["D:/Blog/public/array/index.html","0cebb62eae4ae2efb77b5c73d223c314"],["D:/Blog/public/automated-test-katalon/index.html","5d55ff634c3378b9e328cfe4569f5d6f"],["D:/Blog/public/automated-test-selenium/1612201844386.png","d943c1cd4c29283127c72c0939e1a5b8"],["D:/Blog/public/automated-test-selenium/1612203333723.png","293c89aad0764a9bf8edef70690d37fc"],["D:/Blog/public/automated-test-selenium/1612203983826.png","3e1c3e8abcbc801af5bb374c3c6e8742"],["D:/Blog/public/automated-test-selenium/1612204051810.png","1b13fa1a1813a65e71cbf7e58d3be292"],["D:/Blog/public/automated-test-selenium/1612205559810.png","92e5b842af437d5e977ae173c2bc092e"],["D:/Blog/public/automated-test-selenium/1612290819266.png","05822159473087e048597a345b47b096"],["D:/Blog/public/automated-test-selenium/1612291040232.png","238313cbc83b34c19a7ca0978ae8390f"],["D:/Blog/public/automated-test-selenium/1612291459443.png","609b0ac638a6d3ca852fab2399cc31a6"],["D:/Blog/public/automated-test-selenium/1612291665919.png","14f977cec5b731c4afd5dab25c4920af"],["D:/Blog/public/automated-test-selenium/1612291772707.png","88898f627a83a0b17f2b330b1af00c5d"],["D:/Blog/public/automated-test-selenium/1612291951410.png","046018820881078f118d40d13f274e74"],["D:/Blog/public/automated-test-selenium/1612372404933.png","4ae342f7368fca26a357f441becf3e67"],["D:/Blog/public/automated-test-selenium/1612372992770.png","3bdf202ca9c1400c511d1cf2c84a869a"],["D:/Blog/public/automated-test-selenium/1612373068712.png","ca6f251ae3afd36c82b895de10781004"],["D:/Blog/public/automated-test-selenium/1612373570630.png","c5ad522cff3ffbe379ae64240fe485fc"],["D:/Blog/public/automated-test-selenium/1612373947759.png","704d82391a3a85c56bce673382773bad"],["D:/Blog/public/automated-test-selenium/1612375105716.png","f6ff7bbef84abea82b16e38bc52bc559"],["D:/Blog/public/automated-test-selenium/1612375984593.png","0966d080fc05f3ca7a5b9b7e1c621134"],["D:/Blog/public/automated-test-selenium/1612376006321.png","cca3c5b321857be9b47e5887c09edd09"],["D:/Blog/public/automated-test-selenium/1612376670647.png","d29fc1fd2f72d6eda65e326a8adeff82"],["D:/Blog/public/automated-test-selenium/1612376761036.png","6cdcc4195acbcbb077405124c50936a3"],["D:/Blog/public/automated-test-selenium/1612455083120.png","136ba38b6226f67b4e380e38ceaa85ef"],["D:/Blog/public/automated-test-selenium/1612458302921.png","f1d91ff2ed47a809d4f8938e19242acd"],["D:/Blog/public/automated-test-selenium/1612458617545.png","0d377ebcc9afa11fd2079021565db4d0"],["D:/Blog/public/automated-test-selenium/1612458657522.png","b68865937b893557227b48134b2b3ff8"],["D:/Blog/public/automated-test-selenium/1612540746961.png","ae6da04607c195af6d7a1b2f2a003aba"],["D:/Blog/public/automated-test-selenium/1612545316429.png","a1e377d60b4e6d01e9f67cfa26fa8a95"],["D:/Blog/public/automated-test-selenium/1612546256022.png","6ef094f11aa8e0306193cd4198190e1f"],["D:/Blog/public/automated-test-selenium/1612547219237.png","82c87706aa475894764617754632a8fc"],["D:/Blog/public/automated-test-selenium/1612547421180.png","b4fb334e2fafd1106b23752d4b70abf1"],["D:/Blog/public/automated-test-selenium/1612628515235.png","4f8ab7d43cee3f36344db4f64cbc0ca9"],["D:/Blog/public/automated-test-selenium/1612628547080.png","09aebe75bb43a410404ec0561c5c90a7"],["D:/Blog/public/automated-test-selenium/1612633589340.png","210a107141869947cb44af76ace0dadf"],["D:/Blog/public/automated-test-selenium/1612635083102.png","8ca32f1303ed21eff8796e713251002a"],["D:/Blog/public/automated-test-selenium/1612635099344.png","b3926175642a9fccc014c3c4fd08d51c"],["D:/Blog/public/automated-test-selenium/1612635490538.png","783c6958bb20e372c847b06c447d6cdb"],["D:/Blog/public/automated-test-selenium/1612637116599.png","a739ee0455bdaa399714262998e6c89e"],["D:/Blog/public/automated-test-selenium/1613121232860.png","fd1a272accabb1578626d3b294b5009a"],["D:/Blog/public/automated-test-selenium/1613234642404.png","0dd973f7e9465929bbc7e4500aa1c2c7"],["D:/Blog/public/automated-test-selenium/index.html","37dace210800f260de9481d9230eab13"],["D:/Blog/public/binary-search-algorithm/index.html","7afe8ac84f0e63ca59054af585ac6922"],["D:/Blog/public/binary-sort-tree/index.html","5289c0366a4349f79cd7ac2961315933"],["D:/Blog/public/bionioaio/index.html","d9ea5406431826ae4dafea91010caac7"],["D:/Blog/public/bridge-mode/index.html","86a3658d2d49aafe9e5d171754586bf4"],["D:/Blog/public/builder/index.html","dde1bbe57dcebdf9961fe8f8fd69831f"],["D:/Blog/public/c-pointer/index.html","d30a25747b19b9de41072f56443444e8"],["D:/Blog/public/categories/C/index.html","16aa359399596bc96aee191200dd56f5"],["D:/Blog/public/categories/SpringMVC/index.html","38bbbdecb65be06e8d44b810e3a98493"],["D:/Blog/public/categories/index.html","30d8e1930605e64893fd81a1f0e0cb9b"],["D:/Blog/public/categories/linux/index.html","4648ffaaea2867d23b78baf7f5642e07"],["D:/Blog/public/categories/分布式/index.html","9dfe51a7db94e8af870051dd8d5a5774"],["D:/Blog/public/categories/分布式/page/2/index.html","a5531d9e3802d08072e0e65218092951"],["D:/Blog/public/categories/前端/index.html","44f4cb4dece116bf68b456ef2a1e2139"],["D:/Blog/public/categories/设计模式/index.html","fe64486401336211c207ce0cc12c3bb2"],["D:/Blog/public/categories/设计模式/page/2/index.html","57615386c64a0760f095ec7814d291f7"],["D:/Blog/public/categories/高数/index.html","53c53be717b420c09989ed962aa925f0"],["D:/Blog/public/chain-of-responsibility-model/index.html","bfad70b0a550ee522963400c04e21521"],["D:/Blog/public/chinese-and-english-switching/index.html","dc4768453c38a65e36216624ad291d1d"],["D:/Blog/public/combination-mode/index.html","600195979ce58afb7957145eacdeed57"],["D:/Blog/public/command-mode/index.html","93d3128bb499ccd8aebe5d5978a7d59b"],["D:/Blog/public/common-commands-of-unix/index.html","f0bdd50752dcf55e27ad3e96601a4698"],["D:/Blog/public/computer-network/index.html","84752da2366105ad11cd821e8fd48263"],["D:/Blog/public/concurrency-principle/index.html","bab95a538a01eb0f96846a7168ac88ad"],["D:/Blog/public/continuous/index.html","6c026c1eb83f576b5245f98b0d8a50a1"],["D:/Blog/public/contract/index.html","d0f2505dfac532a108dd31b3388ae870"],["D:/Blog/public/css/octo.css","9eb691462374c30a3d3135b6cbb35c85"],["D:/Blog/public/cycle-structure-programming/index.html","318d12531e1ee5ce944e594054c0ea05"],["D:/Blog/public/data-structures-and-algorithms/index.html","0f8f9b21941d1a99f5b9f3771b8d5786"],["D:/Blog/public/deb/index.html","1b14358096e96a0b078cb4b90e94f557"],["D:/Blog/public/decorator-mode/index.html","6120757fba193b1d1d71ad0b90b2a072"],["D:/Blog/public/definite-integral/index.html","b95b61dab7ab888addd22051d6ca31c0"],["D:/Blog/public/dependence-reversal-principle/index.html","ec9e0f3a83d45e8522088bd1619f81c0"],["D:/Blog/public/derivative/index.html","6d481640494aaced9a705c5966b2436c"],["D:/Blog/public/design-patterns/index.html","c007c9f02070148cfdec5d0a70697ca0"],["D:/Blog/public/differential-equation/index.html","2cd91a4b2c48876ab2279a37eaf0edb3"],["D:/Blog/public/differential/index.html","7515d9dd60f6af13280fc25ff48837ad"],["D:/Blog/public/dimits-law/index.html","d4794b8850a49041514797ed7277b079"],["D:/Blog/public/docker-virtualized-container/index.html","06a2ead628f8b08f21ada7f794c489d1"],["D:/Blog/public/double-integral/index.html","3127fad7d2783ad65ac547412be5e160"],["D:/Blog/public/dynamic-array/index.html","3c5c8235e305b11ee747cfb9d7eccc4c"],["D:/Blog/public/dynamic-programming/index.html","b4e2db752d208f6eea1f3f21916a75af"],["D:/Blog/public/encoding-algorithm/index.html","607a4a4872247cb6c10bf430adae43c7"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","f9c0557cf951b246690ae8081247cd6d"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","be911da0111048bd9cb2aedc3e8a3091"],["D:/Blog/public/factory-design-pattern/index.html","2d6449781032f44d493ce9952a5163a3"],["D:/Blog/public/file-input-and-output/index.html","6ec83e9b69944a88a1a18864811878b5"],["D:/Blog/public/flyweight-model/index.html","8aead4feb307083077d39193c27b5fac"],["D:/Blog/public/friends/index.html","3777cf0cd29993c232af3313cd7a8569"],["D:/Blog/public/function-graphing/index.html","b37c4718f85d92f8ede2cb5ee2f69c3a"],["D:/Blog/public/gateway-service-current-limit/index.html","b6a2fbe95126cb37f8e966e3d2071cd4"],["D:/Blog/public/gc/index.html","88fc6395735d8df8c37ef12803d18534"],["D:/Blog/public/generalized-integral/index.html","d55415f39b19cdaf67f3940a62f4d7eb"],["D:/Blog/public/google8102e2f35ce9e391.html","e0b98226ceea71ef33fefe67cf58a000"],["D:/Blog/public/gulp-compresses-static-resources/index.html","5381dca76b228d1f11303d2b9c4cf816"],["D:/Blog/public/hash-algorithm/index.html","33e066cfb04927c4d6fe71be937f379a"],["D:/Blog/public/heap-sort/index.html","34ddc44dbf66cd3936e886db5c55580d"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","39eb25cf35d46ec7c62fc30c27eabee0"],["D:/Blog/public/http/index.html","1e11f349ca3b0ca2ede15e6293bd1ce5"],["D:/Blog/public/images/bird_32_gray.png","bdcf2ea75678cab6fbf7691755f8b1f2"],["D:/Blog/public/images/bird_32_gray_fail.png","683b979bad9974a1c7e99335e1fb1e29"],["D:/Blog/public/images/code_bg.png","bd05c77b173392e6faaeb677ba4a5817"],["D:/Blog/public/images/dotted-border.png","a4f554f9f5c594989c121b94fdd6642f"],["D:/Blog/public/images/email.png","ff20ad5e6f1ed897da7aecb635f40a52"],["D:/Blog/public/images/icon-sdc231d6676.png","6014bf8b0e6f65d0a2b65f033119aa4a"],["D:/Blog/public/images/icon/facebook.png","43eed0d61e468d5840f30999693bd6c2"],["D:/Blog/public/images/icon/github.png","ca550b741be138efc4fea6755174130d"],["D:/Blog/public/images/icon/googleplus.png","54b1a47318b232df94bac59daf510955"],["D:/Blog/public/images/icon/twitter-bird.png","672634c476fdbcd9cf17488eda2514dc"],["D:/Blog/public/images/icon/twitter.png","ecb272f802c933e300749fd499651263"],["D:/Blog/public/images/line-tile.png","297285d4f4db123313e78ecc6e476d18"],["D:/Blog/public/images/noise.png","1d38edd471862bc4b31a6e882a8cd478"],["D:/Blog/public/images/rss.png","3357ef495607711d45213ce0a703b49c"],["D:/Blog/public/images/search.png","8c1cab538618831bf4c6855be02dbafe"],["D:/Blog/public/indefinite-integral/index.html","5984a4d31c2739c97743c5ed565aca66"],["D:/Blog/public/index.html","57d52c365d55b70c8c196de417e07d44"],["D:/Blog/public/infinitesimal-and-infinite/index.html","c0ca79682a996bff93c5b7ba8e07e973"],["D:/Blog/public/interface-isolation-principle/index.html","1bc79952e4008480c7f86c769c6e80e1"],["D:/Blog/public/interface-test/1613845781204.png","525459d2a175ae31ca6847ca8c26921b"],["D:/Blog/public/interface-test/1613928423300.png","cde4c6d11a3df660d48aee0e17f664a4"],["D:/Blog/public/interface-test/1613928573807.png","946c84770585171b3c9627dc2dc46c30"],["D:/Blog/public/interface-test/1613929905199.png","2695c8c078592d9faa28233e70740131"],["D:/Blog/public/interface-test/1613930059453.png","3deef79ce6a9499176f2f89938fba298"],["D:/Blog/public/interface-test/1614016580698.png","6cdef4b511c47431fe81a257176108f0"],["D:/Blog/public/interface-test/1614100489562.png","37f60f3b132e0ed7b37231a9554a21ef"],["D:/Blog/public/interface-test/1614102472739.png","c6de29acd936fd4a773bddeea45695c1"],["D:/Blog/public/interface-test/1614103022980.png","f3ebdd1d572e530ff1d3d96206d66bbd"],["D:/Blog/public/interface-test/1614103130379.png","7fd5addfe78147ec611f7e75f8a9be36"],["D:/Blog/public/interface-test/1614276076934.png","c361d5e43a815a4ab48d62da2730b5ec"],["D:/Blog/public/interface-test/1614276217035.png","b2681bcb8e20394d34c647bd59346376"],["D:/Blog/public/interface-test/1614276269526.png","43eaba438098eee01da00c284ab3c870"],["D:/Blog/public/interface-test/1614276280706.png","43eaba438098eee01da00c284ab3c870"],["D:/Blog/public/interface-test/1614450747385.png","c5d3a24896d062072546c75707302ea7"],["D:/Blog/public/interface-test/1614450840486.png","0d4203b6140a132e02de786c4bee0049"],["D:/Blog/public/interface-test/1614451174084.png","71e1b6be193571cfb9b0c8369482de0d"],["D:/Blog/public/interface-test/1614451204413.png","008efd00e0985acb95781624697b4788"],["D:/Blog/public/interface-test/1614710982803.png","897aea592c8b8aca2e940223b2ded8fb"],["D:/Blog/public/interface-test/1614711029433.png","8196bc78cbe6221f1e8dbac22b77f5b0"],["D:/Blog/public/interface-test/1614711672676.png","1d1a77577c73b82c011ee71f7176e9d3"],["D:/Blog/public/interface-test/index.html","14b034ecafe34214367e0ab76ef2f0bf"],["D:/Blog/public/intermediary-model/index.html","02119ebe58eb87d20c272274e7c4f0ee"],["D:/Blog/public/interpolation-search-algorithm/index.html","a0fff07a01bc7b37bf6b019203da98fb"],["D:/Blog/public/interpreter-mode/index.html","64efdb4dd0791831a8c9b8589c98dd9e"],["D:/Blog/public/introduction-to-computer-network/index.html","7069c6a5f1a9e3ad695d1c2379c93b1d"],["D:/Blog/public/introduction-to-operating-system/index.html","f7d65a51541bb9693038c7c8abd1f258"],["D:/Blog/public/inversion-of-control/index.html","03234b5dcf2b8636507351cd91945df9"],["D:/Blog/public/io-Interview/index.html","3c265cc2c5c3df3938ca6bb7d4b76d59"],["D:/Blog/public/iterator-mode/index.html","b80aac4222ecfb6ef32ee242264d58d5"],["D:/Blog/public/j2ee/index.html","d00e5cf548332a96a8e98030da202f60"],["D:/Blog/public/j2se/index.html","3147e87bf6b17b407458c2db50253d1c"],["D:/Blog/public/jdbc/index.html","2c15a79a2bb7fffaa52cf430d7d81ca7"],["D:/Blog/public/jdk/index.html","60d809e02982009f7ec4d1f6296d920d"],["D:/Blog/public/jmm-memory-model/index.html","9e98194f6d50ad93ad95ce0236063442"],["D:/Blog/public/js/jquery-1.9.1.js","167200b8340df660584a2579765ed621"],["D:/Blog/public/js/modernizr-2.0.js","99f5f4d44f65c0e021b7d54312a348f1"],["D:/Blog/public/js/octo.js","07285165503c3d5e2d439fbd0940de5d"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/jvm-gc/index.html","9973952b5e5086ec85bc407afe6d4bc7"],["D:/Blog/public/jvm/index.html","043c2411ccec1f8f49987b7d3925af95"],["D:/Blog/public/law-of-robida/index.html","7063838478d393c6d8970d0dbc0346ac"],["D:/Blog/public/limit/index.html","9c079a56c91f3e89bea747f63b98f793"],["D:/Blog/public/linear-search-algorithm/index.html","0c6e70405eecf264bd583ad6eabea0d4"],["D:/Blog/public/link/index.html","6ac4813e251ef5839a0d74e04ce86942"],["D:/Blog/public/linked-list/index.html","004f3adf00dcb73cbc28434846d5be87"],["D:/Blog/public/linux/index.html","a1f87e21e71598da253455b654ecf866"],["D:/Blog/public/liskov-substitution-principle/index.html","1f848a431a34422a7d390d13b7672aa8"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","0787af1193b46a6067a6f758bacbf939"],["D:/Blog/public/maintenance-1/index.html","1ed8a9cdaf2962685ac9edf2b5c0ffb2"],["D:/Blog/public/maintenance-2/index.html","6786ccab8eaa63dd2f9c515bcd30c767"],["D:/Blog/public/maintenance-3/index.html","71320f7ba70301c86290967aa4d61fda"],["D:/Blog/public/memo-mode/index.html","9f54b7303aace2a41d182ee1c0da6045"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","a99e672c554d2e8671c31ee7a0297906"],["D:/Blog/public/multi-function/index.html","e7736b1a150927fa5aaa7a5c7caebceb"],["D:/Blog/public/multithreading/index.html","248fe9626abe3d78a44ac8fed8c5df10"],["D:/Blog/public/mvc/index.html","f6dddf3a4080ceb95da1ff48297e4951"],["D:/Blog/public/mybatis/index.html","a5c9bb850c530ae2b20d62cc519c10fc"],["D:/Blog/public/mysql/index.html","166fd71dbff01ff05f91dc73f1216da5"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","7acb5a0594c3911a8c42a65c24b048c8"],["D:/Blog/public/objectoriented/index.html","d9907d02d4be01adc77561d53d014169"],["D:/Blog/public/observer-mode/index.html","146ac955b003c02fd8942677a688d4a6"],["D:/Blog/public/off-heap/index.html","8b4621303a189eae28285a66badcfeb2"],["D:/Blog/public/operating-system/index.html","2e88c19d891bdc6d9fbeb7a0b06920b8"],["D:/Blog/public/page/10/index.html","4d8365380c19000a54c4ab513d5004f8"],["D:/Blog/public/page/11/index.html","1823a30cd76e9c42e9f58a4fb0b10313"],["D:/Blog/public/page/12/index.html","9fb1d1b49509c9a5d041cd5c2031f2ea"],["D:/Blog/public/page/13/index.html","c73ac204cf06a06ef77e2fc1d60b08d7"],["D:/Blog/public/page/14/index.html","0ac902a7b1fefb311334c804c1cea416"],["D:/Blog/public/page/15/index.html","9b830d46484935d19fe79dac19deeb7a"],["D:/Blog/public/page/16/index.html","ff54993d806a2f9b6f47b0f286761f1e"],["D:/Blog/public/page/17/index.html","ef6f4b91ea6508e24d633c4577838df2"],["D:/Blog/public/page/18/index.html","5dd27ed36f82f989f5bc50e77fdd1643"],["D:/Blog/public/page/2/index.html","5209abd3f18730eaf8f7b2419bbe12e1"],["D:/Blog/public/page/3/index.html","ed6dbd8a65dfe371a4f312ad3c12f800"],["D:/Blog/public/page/4/index.html","2adaa8a778ca716b6498d4e1544e81f8"],["D:/Blog/public/page/5/index.html","75788e18829f562df1ee6c364d321d89"],["D:/Blog/public/page/6/index.html","2392c5633d3da3a3daa11ae33c23c74c"],["D:/Blog/public/page/7/index.html","68b84f280ba32c3b3655a50398c38d75"],["D:/Blog/public/page/8/index.html","6b143e72e10854ee7c2fdedf82b66fb8"],["D:/Blog/public/page/9/index.html","2294386d7276442704c1af76bfbdc4ab"],["D:/Blog/public/palindrome/index.html","ade7d8f51e22b913fd8508d840b98d57"],["D:/Blog/public/partial-derivative/index.html","1081e822049ab84bb968c7564af45bcc"],["D:/Blog/public/pass-by-value/index.html","1205625921031698e6c9bc58667cc637"],["D:/Blog/public/pictrue-bed/index.html","a16cac940ab2ae114b58013247288584"],["D:/Blog/public/principle-of-opening-and-closing/index.html","96037f6f1dfa70a4413e158f09e3f533"],["D:/Blog/public/principles-of-computer-organization/index.html","930672386ec08b0d7e18fd7d81d934d6"],["D:/Blog/public/program-test/1611773737550.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611773740638.png","c15b0490f48db35b5e86e958e467f1cc"],["D:/Blog/public/program-test/1611817748756.png","920767abda377ac5c3220760d72aa952"],["D:/Blog/public/program-test/1611818572479.png","80cb64d618c56b6aaee50fbf5efd8c79"],["D:/Blog/public/program-test/1611818664852.png","7264b5ca0f0c0be59d67bc55d5360f79"],["D:/Blog/public/program-test/1611818765336.png","c650feff67529668fa781687327c859e"],["D:/Blog/public/program-test/1611858108421.png","e435e488e4863f5077e12d0e28d34f97"],["D:/Blog/public/program-test/1611858126637.png","994d9d6c8307badafad104aa43f10c92"],["D:/Blog/public/program-test/1611858334019.png","b7ee0dee263a1d01f2e2e2b5f41faee7"],["D:/Blog/public/program-test/1611858411788.png","45c1412918f8d04563d40148666eda6e"],["D:/Blog/public/program-test/1611858561200.png","d2373508b32f9f51bfca537d5dfc73b5"],["D:/Blog/public/program-test/1611858628802.png","a27887b106f9e71d7f1fdb791e6f1556"],["D:/Blog/public/program-test/1611858681020.png","39c6e05126be3dc2a33173f66b57d1e5"],["D:/Blog/public/program-test/1611858797611.png","0e25622d033d4a1177ce7cd3de975c31"],["D:/Blog/public/program-test/1611858911944.png","13f52d5e61d7da734f3cc336a700e89c"],["D:/Blog/public/program-test/1611861921070.png","bc2d8122e80824d4849137dccafab453"],["D:/Blog/public/program-test/1611862130739.png","86bbfe9d6b347694765dd94be08407b7"],["D:/Blog/public/program-test/1612106566517.png","62ba7c5049ba650b0b97da51eba05c24"],["D:/Blog/public/program-test/1612107740235.png","bfefaba0f5eed443207165ee807bf0fa"],["D:/Blog/public/program-test/index.html","0666951936e4a27b96af6bcb000e4d90"],["D:/Blog/public/prototype/index.html","bee41b7b40793941f30bf8e8bb295ac4"],["D:/Blog/public/queue/index.html","c5892cbbb35403d2694813418d8731aa"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","79420f070ee6134abb784298c8159f70"],["D:/Blog/public/redis/index.html","f65d06ef35797a7260e33b63220ab509"],["D:/Blog/public/reflection/index.html","4f02129e14e5c108639d2bd9cc134109"],["D:/Blog/public/resume/index.html","3e724eb947bb994f4f1c34e0a9c7eef6"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","563892c6898528f84b4e11c0c949b9dc"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","10187f216d36878855eb511d04d3ad23"],["D:/Blog/public/select-structure-programming/index.html","4342ec4a8d6098cad3df19e9653731a2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","5e51161f6c6d4c02b0571ee07fed5c06"],["D:/Blog/public/sequential-programming/index.html","4b1242dbab3200ba840fa88a86b7167d"],["D:/Blog/public/series/index.html","5eacd05697611d1209fa9a77f1ac6c20"],["D:/Blog/public/single-point-login/index.html","98a5253c10c33a0aeecb6b535dfd979a"],["D:/Blog/public/single-responsibility-principle/index.html","769cee005e89c3694e9f967bec547f1a"],["D:/Blog/public/singleton-mode/index.html","00592b6b89a4a26342ea9319b27331e2"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","4f65e1f218c0f4cc646179c0fa0774de"],["D:/Blog/public/sparsearray/index.html","45e81f37eaa0ba5a81c1592df9d5ead6"],["D:/Blog/public/spring-architecture/index.html","206aa1df7659a213a404ab74e41f6631"],["D:/Blog/public/spring-relate/index.html","673a638b3b345c81c2a0663287c597b5"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","93eaf59dd81dee675bc8b9a064965b48"],["D:/Blog/public/spring/index.html","a374e09a9f214b3d11a534710e4b8115"],["D:/Blog/public/springcloud-alibaba/index.html","f3216a5e689216438f765e7dbd4b0ce7"],["D:/Blog/public/springcloud-bus-message/index.html","93fcaee88c6b503d6646a6e87505cdc7"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","866e7d01bc0e082763728bffd429b862"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","03b33ad7763d26cf4b1c09d858f25a4d"],["D:/Blog/public/springcloud-stream-message-driver/index.html","b4cea41172c80b94111816441e7607e9"],["D:/Blog/public/springcloud/index.html","4b7b4198c04a042959326508ca9fc71a"],["D:/Blog/public/springmvc-environment-construction/index.html","51953035bd1dccd82a21cdd319e1a7d1"],["D:/Blog/public/springmvc-work-stream/index.html","ed070d88347356a4e5bcc04854c60f79"],["D:/Blog/public/sql-injection-attacks/index.html","c7921809af4464417515b9106729a9d9"],["D:/Blog/public/stack/index.html","12511c3c8ee2a171880be40aee4eb90b"],["D:/Blog/public/state-mode/index.html","01b13c63257d60bde62c57f7e95e001a"],["D:/Blog/public/strategy-mode/index.html","ef64d6f4f0bc178a9aa09010380cbd34"],["D:/Blog/public/synthetic-reuse-principle/index.html","f91a76d5d1a8d0109f8d1c8e5bc79ed6"],["D:/Blog/public/tags/C/index.html","65b6dcd27885aa715bba7734f2a3efbe"],["D:/Blog/public/tags/C/page/2/index.html","b57c902d3992de59a468cf1604aeee1a"],["D:/Blog/public/tags/Concurrency/index.html","752733e8599b4b34169d0fe832701dc9"],["D:/Blog/public/tags/DesignPatterns/index.html","a94d1dda4497cb1d9066f3ada76f975c"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab265bc5ffbbe2cc6b02cc49d9baf7c0"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","8c63393eeea9995f21216b207e00c0c2"],["D:/Blog/public/tags/DistributedMicroservices/index.html","947af30eae3840b12699f6905fa3b19c"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","da088e07de0fc3bc3983e6045765f5c7"],["D:/Blog/public/tags/Interview/index.html","a3486b7826acdccef2369a0b6ea613c0"],["D:/Blog/public/tags/Interview/page/2/index.html","e9f362631ad0bec0237dd5b2711545a8"],["D:/Blog/public/tags/JVM/index.html","a38c9cf1847de0681fd7420f160a37cf"],["D:/Blog/public/tags/Operating-Systems/index.html","20e0ea065166e71380e78ee926d16fc5"],["D:/Blog/public/tags/about/index.html","7163108dd6737f032d475954d7bc40df"],["D:/Blog/public/tags/ad/index.html","7c5b50a904e74598975b08a0c8a58f24"],["D:/Blog/public/tags/algorithm/index.html","b63ff6fe96cd9fb57be5d5faf09c0cea"],["D:/Blog/public/tags/algorithm/page/2/index.html","e448a1a9388e6212801dd902cfd7dcba"],["D:/Blog/public/tags/docker/index.html","c31fff5b603819e0be842ba1df3b0796"],["D:/Blog/public/tags/frame/index.html","71f4f11ae38853ea1e4e791b719bb9cd"],["D:/Blog/public/tags/front/index.html","6ffab2e646b3e2ab160ee6251c67a344"],["D:/Blog/public/tags/index.html","ffd48465d7815a92c74f26cf1eb1b4c8"],["D:/Blog/public/tags/index1.html","c45878d3092cbcc27deea8a1685fec74"],["D:/Blog/public/tags/index3.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/tags/io/index.html","a73a15adab3cf6cd6181779fa5ee3df0"],["D:/Blog/public/tags/linux/index.html","5d57d99e200cc4109a7ad3757d02f757"],["D:/Blog/public/tags/maintain/index.html","69c73e485d943b70a1e7d947e25dfc9a"],["D:/Blog/public/tags/math/index.html","42074d4f67c894141c56ff5075b6ffdc"],["D:/Blog/public/tags/math/page/2/index.html","228c0825ce1d79f571350a9388beccb5"],["D:/Blog/public/tags/network/index.html","d04b975f7a03c4567b41eec2c024122b"],["D:/Blog/public/tags/project/index.html","d539222b7e4bf6965fb4bd5bf054ac39"],["D:/Blog/public/tags/resume/index.html","77a98e37ebd81e9e5a81ef2d68a577b8"],["D:/Blog/public/tags/safe/index.html","e086907128e4e1464a3f8a4cf25885bc"],["D:/Blog/public/tags/sql/index.html","5e670361fda71472497a74c5ae6fde00"],["D:/Blog/public/tags/test/index.html","6ee35f081c4f76b412a03f27f6591da8"],["D:/Blog/public/tcpip/index.html","1b7e1d1a3b1dd1081f715027281a0a31"],["D:/Blog/public/template-method/index.html","2362f36e9814e512879fe1259adc142e"],["D:/Blog/public/test-case/index.html","da7e2a9929f7632a4b1f98f02d52ea69"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","9fcded966c5f769c86fb44cd7f425182"],["D:/Blog/public/thread/index.html","99b11d04c9a72c076f5563cbf598d7c7"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","607435d5210bf51b58ac9babfa5375d9"],["D:/Blog/public/ubuntu-set-ip/index.html","c4783d388f6a44c19273557e5fd9ba91"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","0fb1d73c96223ed93e5959a86b04a44b"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","97f800c56c1d8a6a213c96e781c84dd5"],["D:/Blog/public/users-create-data-types-themselves/index.html","3654dcbe7eefb2928d7e4980e0af9ba4"],["D:/Blog/public/visitor-mode/index.html","3d9326ccdc7a3cda2069ea96bfe462f6"],["D:/Blog/public/xml/index.html","c97ed98072640eda121d6d65b01622ed"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","91934424a2b8d3acd831d50d68b9d11b"]];
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







