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

var precacheConfig = [["D:/Blog/public/404.html","047124fe09d1926caa7f5039040d2096"],["D:/Blog/public/7-sorting-algorithms/index.html","5599ee498fbe307464549552c6432b7b"],["D:/Blog/public/AIO-blocking-model/index.html","73e4d6b9365e80e63a547f4b2265b125"],["D:/Blog/public/BIO-blocking-model/index.html","f5d12c2e2b3760868429c8fbee26dc88"],["D:/Blog/public/C-algorithm/index.html","81a5fd825c98c25c15368b21deac3949"],["D:/Blog/public/C-programming/index.html","2608987385355045a985cdd35707bf91"],["D:/Blog/public/Good-use-of-pointers/index.html","7748d5b70044a413ac7df252de980694"],["D:/Blog/public/IO-model/index.html","1de6e5d714f045289a11ad909ac0fb89"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","9966c82fc1060f3d3d95c07361da35c6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/20200709182209155.png","5877a6ae73da3e1f1665b56433a22ca1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","89b0389fce7bfa0827a49d478a03a68a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3905e1604be88ac278517698c362f056"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/20200712231043251.png","7e4f50286157413bccaf10cbc063aec1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","e16865648d40d484260fb9ebcbd303ad"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193736717.png","ccfd056a848ab724df8baefccdaa7e71"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193845955.png","59ae536727985913b6c5ebfb4f666559"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193919346.png","073dfad241c459bd3fc0f39500f990af"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194035109.png","e589a2b9b62bf8326399f7107291ec1c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/2020071319414434.png","b0a4095ef2e57651189037cff3c0587a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194305250.png","3165b8300de1fc0603d2387bbb83db66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195835161.png","7522c162298bdce374b3444ee86ab80f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195944979.png","f4404e58e49c23e85218af2f0c9b792e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713201121978.png","bea53bbbb8b5391e4385e2537c46dcfd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713203204970.png","ab92f58d8d8976a600b7b14f186bad6d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713211114969.png","e616c2414f9348d75315ad03f6ac71e6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","fe1e06f6cd96ad7481a4af945ea48dbb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714171300573.png","0cce58c08682750921ab97bb2d03e20a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222548967.png","bd0a34baf3c5c26b7a84f24e60209bc2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222755538.png","8ae329d3fdee393cac7505243c373594"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714223101420.png","7ae47393b42f7f6e93eb4da48cb10523"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200715211412343.png","59fc7044394c57efc6eebdce07091548"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","45c27e086eb38e6e9c39f3c425ba268a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163301517.png","ae9ed07a2629aff135847875af39d7b1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163454589.png","174e82e9edc2c0d79034ce3824bb90dd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716165300289.png","78e87ef2d9a534d305f295e4cf5803c8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193713119.png","ae5d307f2aee7ac52efa93001ee36eff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193836266.png","4491491ad600ed70034f115f0b8a36a1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194032540.png","c8a77369f70dd73d434bebae29e5b622"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194217567.png","7be1825439ec8384210dd2c77846166f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619431467.png","a20f5e1f71dc3eab28b1878b85ae8877"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194739570.png","4bff76ae6ac452d2dd57fc4ba4a8b5b9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194916953.png","84866b248b42ad40128d7099c6e9ae5e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442-1607862601760.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619525022.png","d239110d06c2677dd2ab59125c5d5232"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195331704.png","069d2a62325e248e021604c7a26eb460"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195912138.png","d6af8c9daf885593e58016335f7cbd0f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620004565.png","bbb78dca2d2c7a8316366dbbae88f95c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716200231166.png","1b4944604d13f917b836538b061f5e66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620031624.png","f99b247257fcd30bd109f61058d5caa4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","58fa0d777d6512664917af2e07ec65df"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/20200717154409401.png","388e97aec9c75d75f8b5667c99a83313"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7dcfc5849889b36736489f0197d6d671"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200220865.png","93eb0598b076cf92b80ae2d19b865917"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200701223.png","79dd69580e8702cfb4ca12dedf539c5b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717212754253.png","34344cae34f8eb3e2c553b4454a0c0b2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717213516271.png","2fe2d52724bc1985ab9054d46d6d51d7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214223598.png","57533187f27c432552efa3287ae9e40c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214411513.png","7a2eec579af881e6a2085ab1f30d7827"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/2020071813164559.png","1d987479031aad2c0c55fc7dcf831ea9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718134859274.png","503108f6b67ff7ce70c5d3ffa6b4edda"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718135610756.png","eaf4858a43317e2fccad63f7fc0f2e53"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144110839.png","9be812af56a8d70f599ed6abf29bdeea"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144817668.png","a9858eea05a4d128f6413d76870cc59a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","d7ce69de7e467c650c39d47e1efeb3ff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/20200707171433298.png","ecb40d4a2995d88c4ec167f0a090fe5a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","3b22051927207dda4b51d75a27c0e827"],["D:/Blog/public/Java-network-programming/index.html","4a062c26196fb2ed31d1b3523613c3f1"],["D:/Blog/public/NIO-blocking-model/index.html","fba1b6d4ea7b26edb18f4b6c3b59e6ab"],["D:/Blog/public/about/index.html","73264aab5b70fa55ac9dfcfd08fc9be4"],["D:/Blog/public/adapter-mode/index.html","64cc114dafa185b85708dfd2dee5ae3f"],["D:/Blog/public/agency-model/index.html","8698a73c09b73773ed58229805045b88"],["D:/Blog/public/appearance-mode/index.html","4a376324d489828777322a7c63079914"],["D:/Blog/public/archives/2019/01/index.html","108a48bafc29daca5114c64c63478ae9"],["D:/Blog/public/archives/2019/07/index.html","78973e1da8fa93bb29aea068e1bea9ed"],["D:/Blog/public/archives/2019/12/index.html","44def7aa84f4e523a6a7ac5e84149334"],["D:/Blog/public/archives/2019/index.html","69d37ac6335e9aa559a7272cea4535fb"],["D:/Blog/public/archives/2020/04/index.html","012b2152171148fd8314b9a7f926e7b4"],["D:/Blog/public/archives/2020/05/index.html","5ec95d186ca4bb852717dd49582d9f2c"],["D:/Blog/public/archives/2020/05/page/2/index.html","a19864a86e97e63e72b58e198806ed27"],["D:/Blog/public/archives/2020/06/index.html","c052f6e873ac34f0aeb29ec613a9c37b"],["D:/Blog/public/archives/2020/06/page/2/index.html","83ed08bbed89f8f204a728e744273f6b"],["D:/Blog/public/archives/2020/06/page/3/index.html","2deac3daf796fca94c8526851535d01d"],["D:/Blog/public/archives/2020/06/page/4/index.html","e4065ab2326a61a9951010b5bc405b6a"],["D:/Blog/public/archives/2020/07/index.html","d89ee462061a409a37f51161dc599fff"],["D:/Blog/public/archives/2020/07/page/2/index.html","7fd089d8a9ad9f836925b62bad8a559c"],["D:/Blog/public/archives/2020/07/page/3/index.html","af32beeec21858d332d7287f17b3bb46"],["D:/Blog/public/archives/2020/08/index.html","a062824d21fb4a3c9c4e1311c3a83731"],["D:/Blog/public/archives/2020/08/page/2/index.html","d9a01f479cd3f28489a9eee6e93d8c98"],["D:/Blog/public/archives/2020/08/page/3/index.html","c676ab9a7fcc636ba2b0cc4e1b3619cd"],["D:/Blog/public/archives/2020/09/index.html","c8eafa8a3057b5056380272f8755ceb5"],["D:/Blog/public/archives/2020/09/page/2/index.html","98651edf1b729a16220889a814707bf4"],["D:/Blog/public/archives/2020/10/index.html","48f222f6bc8aff340090ff3f748922b5"],["D:/Blog/public/archives/2020/10/page/2/index.html","b21821fdb5edc58f12643cb74dd92fee"],["D:/Blog/public/archives/2020/11/index.html","c60271b7e7df92af536c6c2971bf24b9"],["D:/Blog/public/archives/2020/12/index.html","91c6d3455567283115d59fdf1deea995"],["D:/Blog/public/archives/2020/12/page/2/index.html","7437ade28277f74a2a437ed0335bfaa6"],["D:/Blog/public/archives/2020/index.html","227ad3d7bc6b12552786dbc55e13606d"],["D:/Blog/public/archives/2020/page/10/index.html","6cceb6fd7df20234358abe13c49718e7"],["D:/Blog/public/archives/2020/page/11/index.html","ddfe23cdf9973a0e632e6bf7efc417d5"],["D:/Blog/public/archives/2020/page/12/index.html","0bcbd6c4779333ec3827996aa02c136a"],["D:/Blog/public/archives/2020/page/13/index.html","0ae5b145878897fc8146444326aa9b70"],["D:/Blog/public/archives/2020/page/14/index.html","103731f35c4bd895ef42d84d48881254"],["D:/Blog/public/archives/2020/page/15/index.html","cf198a70b381464ee7d53f7afbc5a9cc"],["D:/Blog/public/archives/2020/page/2/index.html","89ba12f091cfbf585d63739adcdbcaca"],["D:/Blog/public/archives/2020/page/3/index.html","30166a281d0bb4324851aa53343d88bb"],["D:/Blog/public/archives/2020/page/4/index.html","5f919f26e6b3a9b7d03f3fff9797c587"],["D:/Blog/public/archives/2020/page/5/index.html","b879585e684ab2d606e408081afc7ce1"],["D:/Blog/public/archives/2020/page/6/index.html","e9d9e091a1652c845d03a24594c8cdb4"],["D:/Blog/public/archives/2020/page/7/index.html","31c7fab180d1c3c3d1900cc91e20e893"],["D:/Blog/public/archives/2020/page/8/index.html","3e6de0a499596cfcd081a090d5114c49"],["D:/Blog/public/archives/2020/page/9/index.html","99bc572d9fe82f0d7716201a3c776083"],["D:/Blog/public/archives/index.html","ae960e960ad77ac7a48c083e80815c60"],["D:/Blog/public/archives/page/10/index.html","afc668dba45127d73890eba33934fb2f"],["D:/Blog/public/archives/page/11/index.html","afc668dba45127d73890eba33934fb2f"],["D:/Blog/public/archives/page/12/index.html","9bd49c76ef47a9a1623c4f0e7046e7d8"],["D:/Blog/public/archives/page/13/index.html","9bd49c76ef47a9a1623c4f0e7046e7d8"],["D:/Blog/public/archives/page/14/index.html","9bd49c76ef47a9a1623c4f0e7046e7d8"],["D:/Blog/public/archives/page/15/index.html","9bd49c76ef47a9a1623c4f0e7046e7d8"],["D:/Blog/public/archives/page/16/index.html","8d5c357c5f6cecfdad9ac488035bd5f0"],["D:/Blog/public/archives/page/2/index.html","ae960e960ad77ac7a48c083e80815c60"],["D:/Blog/public/archives/page/3/index.html","68fa7c47cf59bee42e50f517b10e0b73"],["D:/Blog/public/archives/page/4/index.html","68fa7c47cf59bee42e50f517b10e0b73"],["D:/Blog/public/archives/page/5/index.html","68fa7c47cf59bee42e50f517b10e0b73"],["D:/Blog/public/archives/page/6/index.html","68fa7c47cf59bee42e50f517b10e0b73"],["D:/Blog/public/archives/page/7/index.html","afc668dba45127d73890eba33934fb2f"],["D:/Blog/public/archives/page/8/index.html","afc668dba45127d73890eba33934fb2f"],["D:/Blog/public/archives/page/9/index.html","afc668dba45127d73890eba33934fb2f"],["D:/Blog/public/array/index.html","cea5fafffbda6eafcdbfd4524cbafb15"],["D:/Blog/public/binary-search-algorithm/index.html","34780d1980aca7620c8a6b6c102f6301"],["D:/Blog/public/binary-sort-tree/index.html","d7d3be9f989fedf08b71e40e7fb2cf3a"],["D:/Blog/public/bridge-mode/index.html","411beec938a39cdcb495c2629bc12330"],["D:/Blog/public/builder/index.html","95f1b50e7f4b55ca6a6edc5552a6115e"],["D:/Blog/public/c-pointer/index.html","79e8929a122600e6268d7fedd722d1d3"],["D:/Blog/public/categories/C/index.html","a9fbfbb484120408597aa8eb368b60ca"],["D:/Blog/public/categories/SpringMVC/index.html","3e0c6c5db9f645a1b169de8bd3f8d095"],["D:/Blog/public/categories/index.html","48370a5a39074ec12afbc154dd619f71"],["D:/Blog/public/categories/linux/index.html","f63e791e2d9b4ddc1221abd1ca1dc5a3"],["D:/Blog/public/categories/分布式/index.html","ceb3644c780f2abdaaf74bea690d00fa"],["D:/Blog/public/categories/分布式/page/2/index.html","9097b452463fa4cccb7bd01aa23940eb"],["D:/Blog/public/categories/前端/index.html","db782af870771d9d074a8a0d4d79c24e"],["D:/Blog/public/categories/设计模式/index.html","2eafd5a0ee9ff30f4b202a8a6bea187a"],["D:/Blog/public/categories/设计模式/page/2/index.html","bca0d44a94016e6b58352d7ccee2c9cd"],["D:/Blog/public/categories/高数/index.html","843665524b52a14138401ef2e58c60dc"],["D:/Blog/public/chain-of-responsibility-model/index.html","077cc4a3e9fefb00d89be4060503b15f"],["D:/Blog/public/chinese-and-english-switching/index.html","e6db6313dd9ec180bcbd4c4947b9ef43"],["D:/Blog/public/combination-mode/index.html","9d6cdafaccca6437132b50fb4ca26511"],["D:/Blog/public/command-mode/index.html","b58933f9e4b5f79b6c17431d457e7451"],["D:/Blog/public/common-commands-of-unix/index.html","eac9c58c39990660438cea465ca1f3ad"],["D:/Blog/public/computer-network/index.html","d6ea22fe0e68d4e854f5942843e2e3c9"],["D:/Blog/public/concurrency-principle/index.html","4cb332ebacd8d4ff2fc33aab8c46002e"],["D:/Blog/public/continuous/index.html","a59a61b7a37b7a13f9beda3fa59e8023"],["D:/Blog/public/contract/index.html","b65c5d414448fd520b6210a4e2144b5b"],["D:/Blog/public/css/first.css","cd2f78d8c8d609d4c80bda64a9829f05"],["D:/Blog/public/css/style.css","0ff33bcf358c805b9133455a5b434a1a"],["D:/Blog/public/cycle-structure-programming/index.html","049574deaab505b59e4fc1b02bc11f25"],["D:/Blog/public/data-structures-and-algorithms/index.html","859c0db5aa8dd48c556086107d6b5247"],["D:/Blog/public/deb/index.html","9c61ed00eb3ba540dea95a347ad975ed"],["D:/Blog/public/decorator-mode/index.html","8ebbd3d5e782af443ee2aac7059a5713"],["D:/Blog/public/definite-integral/index.html","c39efd4ed1d8d0a648836631da687b16"],["D:/Blog/public/dependence-reversal-principle/index.html","a8ff3b4c069489d252f8488ea0e4eb0c"],["D:/Blog/public/derivative/index.html","2a9132870c57b77131d37654ac72d9c9"],["D:/Blog/public/design-patterns/index.html","c041b18a02621511e38f5355cc3d6f8f"],["D:/Blog/public/differential-equation/index.html","9d5246286e42aa9318c2bc927f7a6541"],["D:/Blog/public/differential/index.html","6c3413afa8eadad99a2ca9c1db7b7494"],["D:/Blog/public/dimits-law/index.html","15ddcc96eaff443d4eca98bdeff3eb0c"],["D:/Blog/public/docker-virtualized-container/index.html","d7fbec8123e17554bd318dd669016f8b"],["D:/Blog/public/double-integral/index.html","59cc1fe9785c679d3ce8b61311ff8cc1"],["D:/Blog/public/dynamic-array/index.html","d2386a7bfc713580377aa384b607e50c"],["D:/Blog/public/encoding-algorithm/index.html","fc982c33524a476d20400d352cbd9959"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c9f364d90bb2ce1eda5534ebc92ff8dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","e657bde94483b56de43250262f310d35"],["D:/Blog/public/factory-design-pattern/index.html","fd608af104b4e0ca126c6c97f3e4e8f1"],["D:/Blog/public/file-input-and-output/index.html","9f9f9d53125dc468cf2722851f26208c"],["D:/Blog/public/flyweight-model/index.html","2df5062a83e403086e1f9f9280d3f0ab"],["D:/Blog/public/friends/index.html","ad38abaa2cb654426400dd13a7a7941a"],["D:/Blog/public/function-graphing/index.html","4996490555bdb61a712221dfc5d77446"],["D:/Blog/public/gateway-service-current-limit/index.html","a7b510b888a6b1eab13ef8efe446758e"],["D:/Blog/public/gc/index.html","d3b38f1ab80159e2cfacec3bb095e671"],["D:/Blog/public/generalized-integral/index.html","37b7c56ccd3c2e542ba28804fe9d0508"],["D:/Blog/public/google8102e2f35ce9e391.html","1cec4d02119ffff991a9b6e753dc0d75"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6cac42796756dae25d22a90a0c5ae5c6"],["D:/Blog/public/hash-algorithm/index.html","e230e7b6b76e7e4924474a4ef814f468"],["D:/Blog/public/heap-sort/index.html","c1fa82bc63c7549dc3938923f1d333c4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1e0a538350160a04b4cd9b29b4b0bb95"],["D:/Blog/public/http/index.html","4a3250c5e0d23906e727410313236e3b"],["D:/Blog/public/indefinite-integral/index.html","2fc2f82da35afb13c49279ac180b742c"],["D:/Blog/public/index.html","d13571f8b95b2952aea67d14613668cb"],["D:/Blog/public/infinitesimal-and-infinite/index.html","66825310b7128c4e2f4a3fddf88ba00c"],["D:/Blog/public/interface-isolation-principle/index.html","79d6933a3bf4894357da306ea0b8a702"],["D:/Blog/public/intermediary-model/index.html","9ad919af47b9c0ebc917459ecdb82071"],["D:/Blog/public/interpolation-search-algorithm/index.html","6ad699c7799c774b6ed266c93e6e8d52"],["D:/Blog/public/interpreter-mode/index.html","8a0cbc9bcbe0e4fab2c6cee8b2e11421"],["D:/Blog/public/introduction-to-computer-network/index.html","ec74fb1ab6f7c83f5e4f44d8ac4aeaba"],["D:/Blog/public/introduction-to-operating-system/index.html","7c998018b08933bfe61764887f9084d5"],["D:/Blog/public/inversion-of-control/index.html","92bac31aba5cb8bb4e9bef858283c0b8"],["D:/Blog/public/io/index.html","54cc320dee49718302199711b7e55ddb"],["D:/Blog/public/iterator-mode/index.html","9d2aa871174fa75f82584bbcf0b112d2"],["D:/Blog/public/j2ee/index.html","4af38733f7bf467831ad65117d95c42d"],["D:/Blog/public/j2se/index.html","4636f441aae1e2e3211f3beb5dac8850"],["D:/Blog/public/jdbc/index.html","123d132e70da060e121f583bb10176d7"],["D:/Blog/public/jdk/index.html","073676885bdd403c586320d0303a5ccc"],["D:/Blog/public/jmm-memory-model/index.html","45f95dc6358b512625ad4d5cb7799403"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","0dfbc7269941d88f4acb1db397067ab8"],["D:/Blog/public/law-of-robida/index.html","e4f73979f3e01f6a194aa19c2f7afeda"],["D:/Blog/public/limit/index.html","02e216ca987afd1e02413ef6568f2be9"],["D:/Blog/public/linear-search-algorithm/index.html","294be538080226d891406ae9fc6ca96b"],["D:/Blog/public/link/index.html","55fe7dc45359f6d93be3a649fdc33fcd"],["D:/Blog/public/linked-list/index.html","fce9cd682b8003aba6e9921d3eafb891"],["D:/Blog/public/linux/index.html","d8fd9ab3cd216ea5e751b03607762701"],["D:/Blog/public/liskov-substitution-principle/index.html","998815a3a957a40b45d642889a0d160d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c395ec23c708c0a174886ce23516e412"],["D:/Blog/public/maintenance-1/index.html","121c108ab5aa904ac55662bfc7275f6e"],["D:/Blog/public/maintenance-2/index.html","fe990add26d8560302caaaecc34f29d3"],["D:/Blog/public/maintenance-3/index.html","b154d636398bb52d913c0291ea812e5b"],["D:/Blog/public/memo-mode/index.html","c9f0574cd2aefe17395e30987b3e3dfe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9276ab97ec6b18c2ead999cbb7939621"],["D:/Blog/public/multi-function/index.html","7dc8eb7aed113cb612f33664d6e771ec"],["D:/Blog/public/multithreading/index.html","ced4c93f1bcf63f4a2fafa7b7c8ca548"],["D:/Blog/public/mvc/index.html","7e8b4023ff800a69171cabd276df78a0"],["D:/Blog/public/mybatis/index.html","883f90d89160af5f0f46bd0d9615a034"],["D:/Blog/public/mysql/index.html","c5edbd25c25c5c2f37088a1ab6b9dce3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","81314b2877e607bc356f886d4aec40dd"],["D:/Blog/public/objectoriented/index.html","77028d8e670b5fe99ba3349ccf3d8ab9"],["D:/Blog/public/observer-mode/index.html","3aa3c565a1e8582f8b7cb485518b6e1d"],["D:/Blog/public/operating-system/index.html","f76a84151dbc7a29ad7f684f8ec474a8"],["D:/Blog/public/page/10/index.html","ea83bb13be031d8d6865897f02e08934"],["D:/Blog/public/page/11/index.html","493b854926618d4e31277da2c7a86044"],["D:/Blog/public/page/12/index.html","378db330a3a841505a91aadfa14981a2"],["D:/Blog/public/page/13/index.html","b0ca22f7dd513c074fde14205ee7ef66"],["D:/Blog/public/page/14/index.html","5213e998e76dcf44665295c42803cf8b"],["D:/Blog/public/page/15/index.html","8890985b9bbf622b35fb12bc6784f2f3"],["D:/Blog/public/page/16/index.html","cc771dac39856a3f26a4ae4cd55fd5a3"],["D:/Blog/public/page/2/index.html","3d25c53020e9c9dd60f4f3dc310bb96c"],["D:/Blog/public/page/3/index.html","e1bea4ae6732c130602130561cfa9872"],["D:/Blog/public/page/4/index.html","fbb3a0f9812916fc1067ee187fa0f83e"],["D:/Blog/public/page/5/index.html","9e9dbcc85f0ada16e79f98b56bd1180a"],["D:/Blog/public/page/6/index.html","8dca2b082f59226c32f62a7b169445db"],["D:/Blog/public/page/7/index.html","faf9dcba4150bcb3064e8f60cda817b7"],["D:/Blog/public/page/8/index.html","afc2739974302b173d1f5d9370062e08"],["D:/Blog/public/page/9/index.html","82d554cd78bb1c291e061624a4c46c48"],["D:/Blog/public/palindrome/index.html","1b1ddf7352ae00fa60a2bcfaf76ba6bd"],["D:/Blog/public/partial-derivative/index.html","e4db2173518797c528d774ef7d3c4505"],["D:/Blog/public/pass-by-value/index.html","7573e5ce150c4b7aeca7a8d15334e38c"],["D:/Blog/public/pictrue-bed/index.html","e97596e29814d34a9b7af3aac1c88179"],["D:/Blog/public/principle-of-opening-and-closing/index.html","eb6ef073c9f3d5d6beeb261dc6951a4e"],["D:/Blog/public/principles-of-computer-organization/index.html","2fe4afa5ef7edb95de59baa139d0aa84"],["D:/Blog/public/prototype/index.html","05e1db214e7d8950140aeb1e4527ec72"],["D:/Blog/public/queue/index.html","e9c8228e2c618b9fa210d1b7e5c8fb29"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f977524b6ac0fa2dcee4a3fd6dd4257"],["D:/Blog/public/redis/index.html","70ca21d1ae665d50f001b2c9bf499129"],["D:/Blog/public/reflection/index.html","d0ca09c2624684255cf627e4200703ea"],["D:/Blog/public/resume/index.html","00a1095fdce2e544b3c8090c8aa9d30e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5126f6572dce03dd7e3c417d1fc62b4b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cf25134359bacda027a2e5a033004789"],["D:/Blog/public/select-structure-programming/index.html","a4a8903b81e55549e44a87a8c2989be2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b92a1add05d16daba5f1ca2e84d430f2"],["D:/Blog/public/sequential-programming/index.html","ea9cd0f06400af29f81246a86266535c"],["D:/Blog/public/series/index.html","95531a7f4380ff134dd05235c1193c0f"],["D:/Blog/public/single-responsibility-principle/index.html","1864705a4aa8e9c4535c0b4bf1316859"],["D:/Blog/public/singleton-mode/index.html","0c8def19f5008965820ec9ff0a3150b7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6dabd8c715f923e33b885c7777737494"],["D:/Blog/public/sparsearray-sparse-array/index.html","dffea52168a7f1b74cd2441e08af1d79"],["D:/Blog/public/spring-architecture/index.html","b774cea834df7c9268cc5a66fd54d2a8"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d917f520a02eacadfc13bae25ecb79a0"],["D:/Blog/public/spring/index.html","c108c9630c98cb5c8d86edbe5cd973b3"],["D:/Blog/public/springcloud-alibaba/index.html","e1d7748066c51cb28b6c2765a29da54a"],["D:/Blog/public/springcloud-bus-message/index.html","6ffef23a392528db07e1047a3ff97529"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be611eda9d29d1c15548704969522a4e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ee5b97a18a286dfa21321872e1c3e8ec"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6f332e7133d3c26e26a52b300274457b"],["D:/Blog/public/springcloud/index.html","4b48291749fa0bc29f3948692f50b663"],["D:/Blog/public/springmvc-environment-construction/index.html","19ba16e747730de649667993fc02b58f"],["D:/Blog/public/sql-injection-attacks/index.html","b11eba75ac0e017ffaf9d874fd67fb28"],["D:/Blog/public/stack/index.html","682cde39b57095ff9bc3559d6b6011ab"],["D:/Blog/public/state-mode/index.html","8938a204cc9a9f53f5d73a4ed0587138"],["D:/Blog/public/strategy-mode/index.html","f8054f7f981344d8197eff5b89ecbc0d"],["D:/Blog/public/synthetic-reuse-principle/index.html","a7e858d5c44394bfcb64eaf0dfb4b3be"],["D:/Blog/public/tags/C/index.html","5ef7294f71664b479a5f25f598825f67"],["D:/Blog/public/tags/C/page/2/index.html","703c180e76fc7a282741df879411afa4"],["D:/Blog/public/tags/Concurrency/index.html","2d09775734bcff512945128e8fffb1f4"],["D:/Blog/public/tags/DesignPatterns/index.html","58b6672a818a9ab1a0d8d66fd2dae165"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","9d742d9f9c1b1a79538b847190aa20cd"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","a074ab02adcaef7099176ff8ec78b95b"],["D:/Blog/public/tags/DistributedMicroservices/index.html","05e8b01218cb2fcdde31ab0dcd1e1ad7"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","4ad4376431e070855c341d8974f9fe70"],["D:/Blog/public/tags/Interview/index.html","632ef2add5eed110d26657b64257f2bf"],["D:/Blog/public/tags/Interview/page/2/index.html","64363a742dbde44b874c602cf7804a1e"],["D:/Blog/public/tags/Operating-Systems/index.html","b5ef227929b1354638ed050d5f62c241"],["D:/Blog/public/tags/about/index.html","64c05d7c5e7951775ac51bb4760dbe17"],["D:/Blog/public/tags/ad/index.html","94316d4a4680374e8abd7d03b56b6c70"],["D:/Blog/public/tags/dataAlgorithm/index.html","23ca144b04dde122f31bece88287f091"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","86d00bbc77e2d5bcef48167485eef84e"],["D:/Blog/public/tags/docker/index.html","070a30d29f5b63fe2d83a55352207f0d"],["D:/Blog/public/tags/frame/index.html","efb1f572c68ad00d2cd5dfb759d3d3fc"],["D:/Blog/public/tags/front/index.html","48f52cdbc6e3f740cc494f6e3cadf7cf"],["D:/Blog/public/tags/index.html","dc6794f7dc3c8278ba575993d9d4e7e9"],["D:/Blog/public/tags/index2.html","4b2bd0a0d332b6dc834a46a045b4add6"],["D:/Blog/public/tags/jvm/index.html","af2d0e2515a1d1338ce7059ef292a390"],["D:/Blog/public/tags/linux/index.html","da719130d5bf505923ee4ed8ba38fd22"],["D:/Blog/public/tags/maintain/index.html","dc62da7bb4ff488c2c5452e51fc97457"],["D:/Blog/public/tags/math/index.html","548a2c6d0445de264c8bbc895c17d4ff"],["D:/Blog/public/tags/math/page/2/index.html","009a9355a27a52567eeb5fb4c4a2f137"],["D:/Blog/public/tags/network/index.html","04b2f8d662ba4ef8ed4a143b61523602"],["D:/Blog/public/tags/project/index.html","f7a66505d7fc62dea53825a530c6ac4d"],["D:/Blog/public/tags/resume/index.html","ae1ce860691832eb095c099d9aee6498"],["D:/Blog/public/tags/safe/index.html","1c8ecb348b95a43fe54e0c850f506aed"],["D:/Blog/public/tags/sql/index.html","bcf851ff55fb78a7ba6117939ee0b31f"],["D:/Blog/public/tcpip/index.html","d6d3455e303ffb935c3739df7eb63bdb"],["D:/Blog/public/template-method/index.html","f59128e1f74f6a7c307d9c8f07acc250"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e37595317300e836dcd01730caa0b5ba"],["D:/Blog/public/thread/index.html","7575c27ea64a1bf204e1ddcf09c6aa64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","52c1570dff47e757e1090b071c155135"],["D:/Blog/public/ubuntu-set-ip/index.html","81c8bc225c2016bd9a0556b11d52d177"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1626d6930c477067dc8880926e0af338"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ae94ce26db5d45a31a618be4f96cbd96"],["D:/Blog/public/users-create-data-types-themselves/index.html","78061a26e7ebd063a0faa397c95a9586"],["D:/Blog/public/visitor-mode/index.html","4812261d310e79031d8622f2534fb3a4"],["D:/Blog/public/xml/index.html","2b3dff61f7916c908247b2bd1ab4212b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de0c5f3a15e80d5a45792fc3524f440c"]];
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







