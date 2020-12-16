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

var precacheConfig = [["D:/Blog/public/404.html","047124fe09d1926caa7f5039040d2096"],["D:/Blog/public/7-sorting-algorithms/index.html","5599ee498fbe307464549552c6432b7b"],["D:/Blog/public/AIO-blocking-model/index.html","73e4d6b9365e80e63a547f4b2265b125"],["D:/Blog/public/BIO-blocking-model/index.html","f5d12c2e2b3760868429c8fbee26dc88"],["D:/Blog/public/C-algorithm/index.html","81a5fd825c98c25c15368b21deac3949"],["D:/Blog/public/C-programming/index.html","2608987385355045a985cdd35707bf91"],["D:/Blog/public/Good-use-of-pointers/index.html","7748d5b70044a413ac7df252de980694"],["D:/Blog/public/IO-model/index.html","1de6e5d714f045289a11ad909ac0fb89"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/1607958651140.png","3affd72ac4a83d380a7dd9e5b0cbdaee"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/20160504235346278.png","42e875a343f0c97892bc6fac2a6a95c6"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/JRE--JVM.png","3c1369ccd21ce02e869c7e471406787c"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/JVM体系结构.png","8a9ba6eda838e275ce21d663d3429561"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","f3757f48e609dafa6d792849bbce6b64"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5619c0b492a41a48f324b36fa1bc1a3c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/20200709182209155.png","5877a6ae73da3e1f1665b56433a22ca1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","89b0389fce7bfa0827a49d478a03a68a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3905e1604be88ac278517698c362f056"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/20200712231043251.png","7e4f50286157413bccaf10cbc063aec1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","e16865648d40d484260fb9ebcbd303ad"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193736717.png","ccfd056a848ab724df8baefccdaa7e71"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193845955.png","59ae536727985913b6c5ebfb4f666559"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193919346.png","073dfad241c459bd3fc0f39500f990af"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194035109.png","e589a2b9b62bf8326399f7107291ec1c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/2020071319414434.png","b0a4095ef2e57651189037cff3c0587a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194305250.png","3165b8300de1fc0603d2387bbb83db66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195835161.png","7522c162298bdce374b3444ee86ab80f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195944979.png","f4404e58e49c23e85218af2f0c9b792e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713201121978.png","bea53bbbb8b5391e4385e2537c46dcfd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713203204970.png","ab92f58d8d8976a600b7b14f186bad6d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713211114969.png","e616c2414f9348d75315ad03f6ac71e6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","fe1e06f6cd96ad7481a4af945ea48dbb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714171300573.png","0cce58c08682750921ab97bb2d03e20a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222548967.png","bd0a34baf3c5c26b7a84f24e60209bc2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222755538.png","8ae329d3fdee393cac7505243c373594"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714223101420.png","7ae47393b42f7f6e93eb4da48cb10523"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200715211412343.png","59fc7044394c57efc6eebdce07091548"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","45c27e086eb38e6e9c39f3c425ba268a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163301517.png","ae9ed07a2629aff135847875af39d7b1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163454589.png","174e82e9edc2c0d79034ce3824bb90dd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716165300289.png","78e87ef2d9a534d305f295e4cf5803c8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193713119.png","ae5d307f2aee7ac52efa93001ee36eff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193836266.png","4491491ad600ed70034f115f0b8a36a1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194032540.png","c8a77369f70dd73d434bebae29e5b622"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194217567.png","7be1825439ec8384210dd2c77846166f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619431467.png","a20f5e1f71dc3eab28b1878b85ae8877"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194739570.png","4bff76ae6ac452d2dd57fc4ba4a8b5b9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194916953.png","84866b248b42ad40128d7099c6e9ae5e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442-1607862601760.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619525022.png","d239110d06c2677dd2ab59125c5d5232"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195331704.png","069d2a62325e248e021604c7a26eb460"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195912138.png","d6af8c9daf885593e58016335f7cbd0f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620004565.png","bbb78dca2d2c7a8316366dbbae88f95c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716200231166.png","1b4944604d13f917b836538b061f5e66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620031624.png","f99b247257fcd30bd109f61058d5caa4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","58fa0d777d6512664917af2e07ec65df"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/20200717154409401.png","388e97aec9c75d75f8b5667c99a83313"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7dcfc5849889b36736489f0197d6d671"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200220865.png","93eb0598b076cf92b80ae2d19b865917"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200701223.png","79dd69580e8702cfb4ca12dedf539c5b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717212754253.png","34344cae34f8eb3e2c553b4454a0c0b2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717213516271.png","2fe2d52724bc1985ab9054d46d6d51d7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214223598.png","57533187f27c432552efa3287ae9e40c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214411513.png","7a2eec579af881e6a2085ab1f30d7827"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/2020071813164559.png","1d987479031aad2c0c55fc7dcf831ea9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718134859274.png","503108f6b67ff7ce70c5d3ffa6b4edda"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718135610756.png","eaf4858a43317e2fccad63f7fc0f2e53"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144110839.png","9be812af56a8d70f599ed6abf29bdeea"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144817668.png","a9858eea05a4d128f6413d76870cc59a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","d7ce69de7e467c650c39d47e1efeb3ff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/20200707171433298.png","ecb40d4a2995d88c4ec167f0a090fe5a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","3b22051927207dda4b51d75a27c0e827"],["D:/Blog/public/Java-network-programming/index.html","4a062c26196fb2ed31d1b3523613c3f1"],["D:/Blog/public/NIO-blocking-model/index.html","fba1b6d4ea7b26edb18f4b6c3b59e6ab"],["D:/Blog/public/Native-method/index.html","9db8de05e7f792b44dbaaec4edd691e0"],["D:/Blog/public/Sandbox-security-mechanism/index.html","5c20e0ffb2430cf56d07d934f1f7dfe7"],["D:/Blog/public/about/index.html","73264aab5b70fa55ac9dfcfd08fc9be4"],["D:/Blog/public/adapter-mode/index.html","64cc114dafa185b85708dfd2dee5ae3f"],["D:/Blog/public/agency-model/index.html","8698a73c09b73773ed58229805045b88"],["D:/Blog/public/appearance-mode/index.html","4a376324d489828777322a7c63079914"],["D:/Blog/public/archives/2019/01/index.html","2b3dcc738b7115ee87decbe03e8504f8"],["D:/Blog/public/archives/2019/07/index.html","1695acda9b78b42489bda841f810865c"],["D:/Blog/public/archives/2019/12/index.html","7e839ae7cb78aff7e7ab2890f4f2c5df"],["D:/Blog/public/archives/2019/index.html","5b4dd289b027a8130e0dcc849f155219"],["D:/Blog/public/archives/2020/04/index.html","501dd72e3424e819c1bcd5c7fabff991"],["D:/Blog/public/archives/2020/05/index.html","6e4403003024008bd68bce76250d8619"],["D:/Blog/public/archives/2020/05/page/2/index.html","250d97b023f12655d66d4d02ac16a0ea"],["D:/Blog/public/archives/2020/06/index.html","71d1c0c5060f1f047da69786e572a9be"],["D:/Blog/public/archives/2020/06/page/2/index.html","874a446fe7f960da83a4ee6de01a12a2"],["D:/Blog/public/archives/2020/06/page/3/index.html","80bdef759785c7a7dbdcff0f9f4fd8df"],["D:/Blog/public/archives/2020/06/page/4/index.html","e91ec2325b5fd6e4a9e2aadfb98a4764"],["D:/Blog/public/archives/2020/07/index.html","2d7d0b56b8f71269b080b7cf51bc2ac3"],["D:/Blog/public/archives/2020/07/page/2/index.html","6ada26cd22f26378e63a2b8bcce2fb35"],["D:/Blog/public/archives/2020/07/page/3/index.html","b4980ca9d7fa035413e638aacfa5d31f"],["D:/Blog/public/archives/2020/08/index.html","11439a23b2c0003b3f095f308e050368"],["D:/Blog/public/archives/2020/08/page/2/index.html","b8fb4674351c3d1ce42736d1331f130a"],["D:/Blog/public/archives/2020/08/page/3/index.html","a92148770f0dd77d32472b6b31cb6077"],["D:/Blog/public/archives/2020/09/index.html","bdb8611b16cd5a6921c8f6062440a962"],["D:/Blog/public/archives/2020/09/page/2/index.html","c3c3db9c0452f15b8b6d67444adb2a2e"],["D:/Blog/public/archives/2020/10/index.html","0308b12028a03b5f5cba1384e69592bb"],["D:/Blog/public/archives/2020/10/page/2/index.html","c9b5ec0d494c01a5773f032968f9ee55"],["D:/Blog/public/archives/2020/11/index.html","f6d35ff0c0a71bb5c56a932dc10f41a3"],["D:/Blog/public/archives/2020/12/index.html","45f071fc1b3f9a2af180d193bddd7963"],["D:/Blog/public/archives/2020/12/page/2/index.html","2d850e2802fe9ef6adafd5f641ad0475"],["D:/Blog/public/archives/2020/index.html","045ffcaf1bbda275a968781d680db97d"],["D:/Blog/public/archives/2020/page/10/index.html","6ae14c8d957e473042f3d19ab07fecb0"],["D:/Blog/public/archives/2020/page/11/index.html","89d4efd698e6a8ae32f90761de744f6a"],["D:/Blog/public/archives/2020/page/12/index.html","0c91a94311cf938b9ae82369302c4088"],["D:/Blog/public/archives/2020/page/13/index.html","7c77303ad8f1055c0ebaf6aae9c8bfc7"],["D:/Blog/public/archives/2020/page/14/index.html","73dd8d74e28c05add999c548ba6a6b17"],["D:/Blog/public/archives/2020/page/15/index.html","817e9296c524df75915aaf8925a5f9ac"],["D:/Blog/public/archives/2020/page/16/index.html","4acf7c46a2529cb97c5d1449906b626d"],["D:/Blog/public/archives/2020/page/2/index.html","0afc03d67aaf80d5d157195b7331e73d"],["D:/Blog/public/archives/2020/page/3/index.html","4dd59aad0ffc453d13904c5457f81d2c"],["D:/Blog/public/archives/2020/page/4/index.html","e7b4d28411483c640e8143615ba3ef65"],["D:/Blog/public/archives/2020/page/5/index.html","3b98144095d348653e7f38aaf65b2916"],["D:/Blog/public/archives/2020/page/6/index.html","1b051fc442700188911e8a027f222796"],["D:/Blog/public/archives/2020/page/7/index.html","f80353330c92d40c12ca19ae70b2d33d"],["D:/Blog/public/archives/2020/page/8/index.html","3c024decf25e18a4b804671440eb176e"],["D:/Blog/public/archives/2020/page/9/index.html","a3fb0d951290c7bd13305e617b20789b"],["D:/Blog/public/archives/index.html","93ceac0ac6c3d31cf649e92d3d8743cd"],["D:/Blog/public/archives/page/10/index.html","bd9a57631ff6c381cadb6e0f71697427"],["D:/Blog/public/archives/page/11/index.html","bd9a57631ff6c381cadb6e0f71697427"],["D:/Blog/public/archives/page/12/index.html","bd9a57631ff6c381cadb6e0f71697427"],["D:/Blog/public/archives/page/13/index.html","8b950ab060fc5fe2f3adbcfbdb077766"],["D:/Blog/public/archives/page/14/index.html","273109d32fa355a582617f00efdea0b5"],["D:/Blog/public/archives/page/15/index.html","273109d32fa355a582617f00efdea0b5"],["D:/Blog/public/archives/page/16/index.html","273109d32fa355a582617f00efdea0b5"],["D:/Blog/public/archives/page/2/index.html","84f29e7eb48f0efecc2b4196012f00be"],["D:/Blog/public/archives/page/3/index.html","84f29e7eb48f0efecc2b4196012f00be"],["D:/Blog/public/archives/page/4/index.html","84f29e7eb48f0efecc2b4196012f00be"],["D:/Blog/public/archives/page/5/index.html","9473be9f6309c3012ef7d15c9a1a043f"],["D:/Blog/public/archives/page/6/index.html","9473be9f6309c3012ef7d15c9a1a043f"],["D:/Blog/public/archives/page/7/index.html","6e1a0ce4ff05567e96cd0d01405ac861"],["D:/Blog/public/archives/page/8/index.html","6e1a0ce4ff05567e96cd0d01405ac861"],["D:/Blog/public/archives/page/9/index.html","6e1a0ce4ff05567e96cd0d01405ac861"],["D:/Blog/public/array/index.html","cea5fafffbda6eafcdbfd4524cbafb15"],["D:/Blog/public/binary-search-algorithm/index.html","34780d1980aca7620c8a6b6c102f6301"],["D:/Blog/public/binary-sort-tree/index.html","d7d3be9f989fedf08b71e40e7fb2cf3a"],["D:/Blog/public/bridge-mode/index.html","411beec938a39cdcb495c2629bc12330"],["D:/Blog/public/builder/index.html","95f1b50e7f4b55ca6a6edc5552a6115e"],["D:/Blog/public/c-pointer/index.html","79e8929a122600e6268d7fedd722d1d3"],["D:/Blog/public/categories/C/index.html","717cd425989c24799fe1e18b31789e41"],["D:/Blog/public/categories/SpringMVC/index.html","ae5ebf3002ac1e388b12581514b5c66b"],["D:/Blog/public/categories/index.html","48370a5a39074ec12afbc154dd619f71"],["D:/Blog/public/categories/linux/index.html","1701a7df24cf1953b70f524176a77891"],["D:/Blog/public/categories/分布式/index.html","ac0bc6add67f521a55632347070fe24c"],["D:/Blog/public/categories/分布式/page/2/index.html","be56c0566dad55b5275907c24c44ac7f"],["D:/Blog/public/categories/前端/index.html","16172ea66d4df9499c72b92db1320f6d"],["D:/Blog/public/categories/设计模式/index.html","e8e26c73a13a2190ec5bdfaf8f41ec2c"],["D:/Blog/public/categories/设计模式/page/2/index.html","cf5cf0767e72612ff83b17785629ccdd"],["D:/Blog/public/categories/高数/index.html","ea43536f6f48296310bd6ae0cfb9b2a7"],["D:/Blog/public/chain-of-responsibility-model/index.html","077cc4a3e9fefb00d89be4060503b15f"],["D:/Blog/public/chinese-and-english-switching/index.html","e6db6313dd9ec180bcbd4c4947b9ef43"],["D:/Blog/public/combination-mode/index.html","9d6cdafaccca6437132b50fb4ca26511"],["D:/Blog/public/command-mode/index.html","b58933f9e4b5f79b6c17431d457e7451"],["D:/Blog/public/common-commands-of-unix/index.html","eac9c58c39990660438cea465ca1f3ad"],["D:/Blog/public/computer-network/index.html","d6ea22fe0e68d4e854f5942843e2e3c9"],["D:/Blog/public/concurrency-principle/index.html","4cb332ebacd8d4ff2fc33aab8c46002e"],["D:/Blog/public/continuous/index.html","a59a61b7a37b7a13f9beda3fa59e8023"],["D:/Blog/public/contract/index.html","b65c5d414448fd520b6210a4e2144b5b"],["D:/Blog/public/css/first.css","f83ea69a0a175eb9b18924b2db67aca1"],["D:/Blog/public/css/style.css","d1721a4dd1665e9fdb15c77f79b96e70"],["D:/Blog/public/cycle-structure-programming/index.html","049574deaab505b59e4fc1b02bc11f25"],["D:/Blog/public/data-structures-and-algorithms/index.html","859c0db5aa8dd48c556086107d6b5247"],["D:/Blog/public/deb/index.html","9c61ed00eb3ba540dea95a347ad975ed"],["D:/Blog/public/decorator-mode/index.html","8ebbd3d5e782af443ee2aac7059a5713"],["D:/Blog/public/definite-integral/index.html","c39efd4ed1d8d0a648836631da687b16"],["D:/Blog/public/dependence-reversal-principle/index.html","a8ff3b4c069489d252f8488ea0e4eb0c"],["D:/Blog/public/derivative/index.html","2a9132870c57b77131d37654ac72d9c9"],["D:/Blog/public/design-patterns/index.html","c041b18a02621511e38f5355cc3d6f8f"],["D:/Blog/public/differential-equation/index.html","9d5246286e42aa9318c2bc927f7a6541"],["D:/Blog/public/differential/index.html","6c3413afa8eadad99a2ca9c1db7b7494"],["D:/Blog/public/dimits-law/index.html","15ddcc96eaff443d4eca98bdeff3eb0c"],["D:/Blog/public/docker-virtualized-container/index.html","d7fbec8123e17554bd318dd669016f8b"],["D:/Blog/public/double-integral/index.html","59cc1fe9785c679d3ce8b61311ff8cc1"],["D:/Blog/public/dynamic-array/index.html","d2386a7bfc713580377aa384b607e50c"],["D:/Blog/public/encoding-algorithm/index.html","fc982c33524a476d20400d352cbd9959"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c9f364d90bb2ce1eda5534ebc92ff8dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","e657bde94483b56de43250262f310d35"],["D:/Blog/public/factory-design-pattern/index.html","fd608af104b4e0ca126c6c97f3e4e8f1"],["D:/Blog/public/file-input-and-output/index.html","9f9f9d53125dc468cf2722851f26208c"],["D:/Blog/public/flyweight-model/index.html","2df5062a83e403086e1f9f9280d3f0ab"],["D:/Blog/public/friends/index.html","ad38abaa2cb654426400dd13a7a7941a"],["D:/Blog/public/function-graphing/index.html","4996490555bdb61a712221dfc5d77446"],["D:/Blog/public/gateway-service-current-limit/index.html","a7b510b888a6b1eab13ef8efe446758e"],["D:/Blog/public/gc/index.html","d3b38f1ab80159e2cfacec3bb095e671"],["D:/Blog/public/generalized-integral/index.html","37b7c56ccd3c2e542ba28804fe9d0508"],["D:/Blog/public/google8102e2f35ce9e391.html","1cec4d02119ffff991a9b6e753dc0d75"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6cac42796756dae25d22a90a0c5ae5c6"],["D:/Blog/public/hash-algorithm/index.html","e230e7b6b76e7e4924474a4ef814f468"],["D:/Blog/public/heap-sort/index.html","c1fa82bc63c7549dc3938923f1d333c4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1e0a538350160a04b4cd9b29b4b0bb95"],["D:/Blog/public/http/index.html","4a3250c5e0d23906e727410313236e3b"],["D:/Blog/public/indefinite-integral/index.html","2fc2f82da35afb13c49279ac180b742c"],["D:/Blog/public/index.html","2d88e1bd9cde56369894e47e2ceeffd4"],["D:/Blog/public/infinitesimal-and-infinite/index.html","66825310b7128c4e2f4a3fddf88ba00c"],["D:/Blog/public/interface-isolation-principle/index.html","79d6933a3bf4894357da306ea0b8a702"],["D:/Blog/public/intermediary-model/index.html","9ad919af47b9c0ebc917459ecdb82071"],["D:/Blog/public/interpolation-search-algorithm/index.html","6ad699c7799c774b6ed266c93e6e8d52"],["D:/Blog/public/interpreter-mode/index.html","8a0cbc9bcbe0e4fab2c6cee8b2e11421"],["D:/Blog/public/introduction-to-computer-network/index.html","ec74fb1ab6f7c83f5e4f44d8ac4aeaba"],["D:/Blog/public/introduction-to-operating-system/index.html","7c998018b08933bfe61764887f9084d5"],["D:/Blog/public/inversion-of-control/index.html","92bac31aba5cb8bb4e9bef858283c0b8"],["D:/Blog/public/io/index.html","54cc320dee49718302199711b7e55ddb"],["D:/Blog/public/iterator-mode/index.html","9d2aa871174fa75f82584bbcf0b112d2"],["D:/Blog/public/j2ee/index.html","4af38733f7bf467831ad65117d95c42d"],["D:/Blog/public/j2se/index.html","4636f441aae1e2e3211f3beb5dac8850"],["D:/Blog/public/jdbc/index.html","123d132e70da060e121f583bb10176d7"],["D:/Blog/public/jdk/index.html","073676885bdd403c586320d0303a5ccc"],["D:/Blog/public/jmm-memory-model/index.html","45f95dc6358b512625ad4d5cb7799403"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","0dfbc7269941d88f4acb1db397067ab8"],["D:/Blog/public/law-of-robida/index.html","e4f73979f3e01f6a194aa19c2f7afeda"],["D:/Blog/public/limit/index.html","02e216ca987afd1e02413ef6568f2be9"],["D:/Blog/public/linear-search-algorithm/index.html","294be538080226d891406ae9fc6ca96b"],["D:/Blog/public/link/index.html","55fe7dc45359f6d93be3a649fdc33fcd"],["D:/Blog/public/linked-list/index.html","fce9cd682b8003aba6e9921d3eafb891"],["D:/Blog/public/linux/index.html","d8fd9ab3cd216ea5e751b03607762701"],["D:/Blog/public/liskov-substitution-principle/index.html","998815a3a957a40b45d642889a0d160d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c395ec23c708c0a174886ce23516e412"],["D:/Blog/public/maintenance-1/index.html","121c108ab5aa904ac55662bfc7275f6e"],["D:/Blog/public/maintenance-2/index.html","fe990add26d8560302caaaecc34f29d3"],["D:/Blog/public/maintenance-3/index.html","b154d636398bb52d913c0291ea812e5b"],["D:/Blog/public/memo-mode/index.html","c9f0574cd2aefe17395e30987b3e3dfe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9276ab97ec6b18c2ead999cbb7939621"],["D:/Blog/public/multi-function/index.html","7dc8eb7aed113cb612f33664d6e771ec"],["D:/Blog/public/multithreading/index.html","ced4c93f1bcf63f4a2fafa7b7c8ca548"],["D:/Blog/public/mvc/index.html","7e8b4023ff800a69171cabd276df78a0"],["D:/Blog/public/mybatis/index.html","883f90d89160af5f0f46bd0d9615a034"],["D:/Blog/public/mysql/index.html","c5edbd25c25c5c2f37088a1ab6b9dce3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","81314b2877e607bc356f886d4aec40dd"],["D:/Blog/public/objectoriented/index.html","77028d8e670b5fe99ba3349ccf3d8ab9"],["D:/Blog/public/observer-mode/index.html","3aa3c565a1e8582f8b7cb485518b6e1d"],["D:/Blog/public/operating-system/index.html","f76a84151dbc7a29ad7f684f8ec474a8"],["D:/Blog/public/page/10/index.html","7e12bf348a9d510480c74394650cedc7"],["D:/Blog/public/page/11/index.html","72c485d6a3f82a11d3ef3a9a0e2a42bc"],["D:/Blog/public/page/12/index.html","7c92493b7d72d6d4cbb650494b7d8993"],["D:/Blog/public/page/13/index.html","d36c3b204afac798920ca8d31a49ab35"],["D:/Blog/public/page/14/index.html","88c2eddcccd09640f4fe481fdd8809eb"],["D:/Blog/public/page/15/index.html","ccec18fc1d72d236a8f67d28b53c02e2"],["D:/Blog/public/page/16/index.html","ade9205cf26c5800a9c9304c32b76049"],["D:/Blog/public/page/2/index.html","da034f8afcdae3ea1c9d3eac987766dc"],["D:/Blog/public/page/3/index.html","8623ae450b24c61b39b94823cd4bfa1c"],["D:/Blog/public/page/4/index.html","722507daee4fa89e305c8e4e5461a442"],["D:/Blog/public/page/5/index.html","d9a6b7bea66ae6f2c9f78c7d17521bad"],["D:/Blog/public/page/6/index.html","f7df8361b76f81993087a5c5110c1c4f"],["D:/Blog/public/page/7/index.html","39b524b2ef4052002a4c730160c70233"],["D:/Blog/public/page/8/index.html","e27fc924a72a3fbbcd7f920af5b7191d"],["D:/Blog/public/page/9/index.html","745a154a0583c73b19ec78fda00095f8"],["D:/Blog/public/palindrome/index.html","1b1ddf7352ae00fa60a2bcfaf76ba6bd"],["D:/Blog/public/partial-derivative/index.html","e4db2173518797c528d774ef7d3c4505"],["D:/Blog/public/pass-by-value/index.html","7573e5ce150c4b7aeca7a8d15334e38c"],["D:/Blog/public/pictrue-bed/index.html","e97596e29814d34a9b7af3aac1c88179"],["D:/Blog/public/principle-of-opening-and-closing/index.html","eb6ef073c9f3d5d6beeb261dc6951a4e"],["D:/Blog/public/principles-of-computer-organization/index.html","2fe4afa5ef7edb95de59baa139d0aa84"],["D:/Blog/public/prototype/index.html","05e1db214e7d8950140aeb1e4527ec72"],["D:/Blog/public/queue/index.html","e9c8228e2c618b9fa210d1b7e5c8fb29"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f977524b6ac0fa2dcee4a3fd6dd4257"],["D:/Blog/public/redis/index.html","70ca21d1ae665d50f001b2c9bf499129"],["D:/Blog/public/reflection/index.html","d0ca09c2624684255cf627e4200703ea"],["D:/Blog/public/resume/index.html","00a1095fdce2e544b3c8090c8aa9d30e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5126f6572dce03dd7e3c417d1fc62b4b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cf25134359bacda027a2e5a033004789"],["D:/Blog/public/select-structure-programming/index.html","a4a8903b81e55549e44a87a8c2989be2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b92a1add05d16daba5f1ca2e84d430f2"],["D:/Blog/public/sequential-programming/index.html","ea9cd0f06400af29f81246a86266535c"],["D:/Blog/public/series/index.html","95531a7f4380ff134dd05235c1193c0f"],["D:/Blog/public/single-responsibility-principle/index.html","1864705a4aa8e9c4535c0b4bf1316859"],["D:/Blog/public/singleton-mode/index.html","0c8def19f5008965820ec9ff0a3150b7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6dabd8c715f923e33b885c7777737494"],["D:/Blog/public/sparsearray-sparse-array/index.html","dffea52168a7f1b74cd2441e08af1d79"],["D:/Blog/public/spring-architecture/index.html","b774cea834df7c9268cc5a66fd54d2a8"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d917f520a02eacadfc13bae25ecb79a0"],["D:/Blog/public/spring/index.html","c108c9630c98cb5c8d86edbe5cd973b3"],["D:/Blog/public/springcloud-alibaba/index.html","e1d7748066c51cb28b6c2765a29da54a"],["D:/Blog/public/springcloud-bus-message/index.html","6ffef23a392528db07e1047a3ff97529"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be611eda9d29d1c15548704969522a4e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ee5b97a18a286dfa21321872e1c3e8ec"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6f332e7133d3c26e26a52b300274457b"],["D:/Blog/public/springcloud/index.html","4b48291749fa0bc29f3948692f50b663"],["D:/Blog/public/springmvc-environment-construction/index.html","19ba16e747730de649667993fc02b58f"],["D:/Blog/public/sql-injection-attacks/index.html","b11eba75ac0e017ffaf9d874fd67fb28"],["D:/Blog/public/stack/index.html","682cde39b57095ff9bc3559d6b6011ab"],["D:/Blog/public/state-mode/index.html","8938a204cc9a9f53f5d73a4ed0587138"],["D:/Blog/public/strategy-mode/index.html","f8054f7f981344d8197eff5b89ecbc0d"],["D:/Blog/public/synthetic-reuse-principle/index.html","a7e858d5c44394bfcb64eaf0dfb4b3be"],["D:/Blog/public/tags/C/index.html","6742a6cfc8a9e5887dec8adb79b30ff9"],["D:/Blog/public/tags/C/page/2/index.html","0883f9c3ba1fa460bd074bd5a56991b1"],["D:/Blog/public/tags/Concurrency/index.html","8a5f3f789f1d30bbf47f34a86212286b"],["D:/Blog/public/tags/DesignPatterns/index.html","9f21aa73b241fc48f141f85a8d2137d1"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","03a863ba7ccc8e2dc02ee8d56127b877"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","73dd05826f9dcf7b4c598c0ec0b27735"],["D:/Blog/public/tags/DistributedMicroservices/index.html","df2b02b39db080f9c026f8c120bdfe20"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","278d6be40f7ad30818ddd7ef2330986c"],["D:/Blog/public/tags/Interview/index.html","dd2eaf16dda56a3816eeb5dc3eac5bdc"],["D:/Blog/public/tags/Interview/page/2/index.html","40cbc0750eda2116b8d9ebcb37d82856"],["D:/Blog/public/tags/JVM/index.html","7098209ce378727053d50c66e2594192"],["D:/Blog/public/tags/Operating-Systems/index.html","84ed3c0fdc5a91df088375f3675d9e7a"],["D:/Blog/public/tags/about/index.html","cdab14044474559f395ba848bd096db4"],["D:/Blog/public/tags/ad/index.html","bce79e0318b4eee2cf4ad144b53c9656"],["D:/Blog/public/tags/dataAlgorithm/index.html","1f08294e76b984ba19dabd1699056547"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","aafac22ac7dd89d2a88380f0c37384fd"],["D:/Blog/public/tags/docker/index.html","29673c77b05f3dbe43f656a26182c83f"],["D:/Blog/public/tags/frame/index.html","5fd0acf9aae4106e30eb95b1863f71e0"],["D:/Blog/public/tags/front/index.html","e6c47804360d3a1d37206ca94fcf228c"],["D:/Blog/public/tags/index.html","ffeb16862a2e46cee96bb00eb60de351"],["D:/Blog/public/tags/index2.html","4b2bd0a0d332b6dc834a46a045b4add6"],["D:/Blog/public/tags/linux/index.html","6449ef5e7dd2d2d92bc5c74f1378da86"],["D:/Blog/public/tags/maintain/index.html","626c395aef84ac009d83436963d07223"],["D:/Blog/public/tags/math/index.html","e2813a01b5b0b5a48ff2911b824ff437"],["D:/Blog/public/tags/math/page/2/index.html","95c13e90a70145647750fb531d1e090b"],["D:/Blog/public/tags/network/index.html","254ca1ea752e6c9a27b4584d6c36f74b"],["D:/Blog/public/tags/project/index.html","c60b311c622c1d2acb7266b4ba2ada3f"],["D:/Blog/public/tags/resume/index.html","82743c3ceb030109d5e1b2fe61031cd9"],["D:/Blog/public/tags/safe/index.html","dd826f54b80bb247eb0eda6957b17e36"],["D:/Blog/public/tags/sql/index.html","38309ed3e8295eb3cd204c75ab44eb7f"],["D:/Blog/public/tcpip/index.html","d6d3455e303ffb935c3739df7eb63bdb"],["D:/Blog/public/template-method/index.html","f59128e1f74f6a7c307d9c8f07acc250"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e37595317300e836dcd01730caa0b5ba"],["D:/Blog/public/thread/index.html","7575c27ea64a1bf204e1ddcf09c6aa64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","52c1570dff47e757e1090b071c155135"],["D:/Blog/public/ubuntu-set-ip/index.html","81c8bc225c2016bd9a0556b11d52d177"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1626d6930c477067dc8880926e0af338"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ae94ce26db5d45a31a618be4f96cbd96"],["D:/Blog/public/users-create-data-types-themselves/index.html","78061a26e7ebd063a0faa397c95a9586"],["D:/Blog/public/visitor-mode/index.html","4812261d310e79031d8622f2534fb3a4"],["D:/Blog/public/xml/index.html","2b3dff61f7916c908247b2bd1ab4212b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de0c5f3a15e80d5a45792fc3524f440c"]];
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







