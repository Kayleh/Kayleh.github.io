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

var precacheConfig = [["D:/Blog/public/404.html","047124fe09d1926caa7f5039040d2096"],["D:/Blog/public/7-sorting-algorithms/index.html","5599ee498fbe307464549552c6432b7b"],["D:/Blog/public/AIO-blocking-model/index.html","8fd519dc732397eb1593ace0c9e51375"],["D:/Blog/public/BIO-blocking-model/index.html","f5d12c2e2b3760868429c8fbee26dc88"],["D:/Blog/public/C-algorithm/index.html","81a5fd825c98c25c15368b21deac3949"],["D:/Blog/public/C-programming/index.html","2608987385355045a985cdd35707bf91"],["D:/Blog/public/Good-use-of-pointers/index.html","7748d5b70044a413ac7df252de980694"],["D:/Blog/public/IO-model/index.html","1de6e5d714f045289a11ad909ac0fb89"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","2c0bcf64a7089912e7cfe2c619ef382b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/20200709182209155.png","5877a6ae73da3e1f1665b56433a22ca1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","da87b72edfc146102a6feb5152ac4e72"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","a83e6e56b3c177ddb381938e57590467"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/20200712231043251.png","7e4f50286157413bccaf10cbc063aec1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","211d30ea9b92d77c290423f41cf91314"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193736717.png","ccfd056a848ab724df8baefccdaa7e71"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193845955.png","59ae536727985913b6c5ebfb4f666559"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713193919346.png","073dfad241c459bd3fc0f39500f990af"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194035109.png","e589a2b9b62bf8326399f7107291ec1c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/2020071319414434.png","b0a4095ef2e57651189037cff3c0587a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713194305250.png","3165b8300de1fc0603d2387bbb83db66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195835161.png","7522c162298bdce374b3444ee86ab80f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713195944979.png","f4404e58e49c23e85218af2f0c9b792e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713201121978.png","bea53bbbb8b5391e4385e2537c46dcfd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713203204970.png","ab92f58d8d8976a600b7b14f186bad6d"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/20200713211114969.png","e616c2414f9348d75315ad03f6ac71e6"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","f2083838b5ac1595d2eb62904e964add"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714171300573.png","0cce58c08682750921ab97bb2d03e20a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222548967.png","bd0a34baf3c5c26b7a84f24e60209bc2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714222755538.png","8ae329d3fdee393cac7505243c373594"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200714223101420.png","7ae47393b42f7f6e93eb4da48cb10523"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/20200715211412343.png","59fc7044394c57efc6eebdce07091548"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","d58b9074436d656046ad01ae9b4f72ae"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163301517.png","ae9ed07a2629aff135847875af39d7b1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716163454589.png","174e82e9edc2c0d79034ce3824bb90dd"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716165300289.png","78e87ef2d9a534d305f295e4cf5803c8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193713119.png","ae5d307f2aee7ac52efa93001ee36eff"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716193836266.png","4491491ad600ed70034f115f0b8a36a1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194032540.png","c8a77369f70dd73d434bebae29e5b622"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194217567.png","7be1825439ec8384210dd2c77846166f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619431467.png","a20f5e1f71dc3eab28b1878b85ae8877"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194739570.png","4bff76ae6ac452d2dd57fc4ba4a8b5b9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716194916953.png","84866b248b42ad40128d7099c6e9ae5e"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442-1607862601760.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195031442.png","cba78db8d2b9e258534260fd534e1655"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071619525022.png","d239110d06c2677dd2ab59125c5d5232"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195331704.png","069d2a62325e248e021604c7a26eb460"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716195912138.png","d6af8c9daf885593e58016335f7cbd0f"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620004565.png","bbb78dca2d2c7a8316366dbbae88f95c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/20200716200231166.png","1b4944604d13f917b836538b061f5e66"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/2020071620031624.png","f99b247257fcd30bd109f61058d5caa4"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","d6f4be149af229ec0c4c0e3944936600"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/20200717154409401.png","388e97aec9c75d75f8b5667c99a83313"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","5bfe69469715dc196fa3d41fc3e32323"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200220865.png","93eb0598b076cf92b80ae2d19b865917"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717200701223.png","79dd69580e8702cfb4ca12dedf539c5b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717212754253.png","34344cae34f8eb3e2c553b4454a0c0b2"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717213516271.png","2fe2d52724bc1985ab9054d46d6d51d7"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214223598.png","57533187f27c432552efa3287ae9e40c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200717214411513.png","7a2eec579af881e6a2085ab1f30d7827"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/2020071813164559.png","1d987479031aad2c0c55fc7dcf831ea9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718134859274.png","503108f6b67ff7ce70c5d3ffa6b4edda"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718135610756.png","eaf4858a43317e2fccad63f7fc0f2e53"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144110839.png","9be812af56a8d70f599ed6abf29bdeea"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/20200718144817668.png","a9858eea05a4d128f6413d76870cc59a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","a85d77548b06a3ca6317a44ed96cb0d9"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/20200707171433298.png","ecb40d4a2995d88c4ec167f0a090fe5a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","290345840182bb80f1152a1cb00b4eb3"],["D:/Blog/public/Java-network-programming/index.html","4a062c26196fb2ed31d1b3523613c3f1"],["D:/Blog/public/NIO-blocking-model/index.html","fba1b6d4ea7b26edb18f4b6c3b59e6ab"],["D:/Blog/public/about/index.html","73264aab5b70fa55ac9dfcfd08fc9be4"],["D:/Blog/public/adapter-mode/index.html","64cc114dafa185b85708dfd2dee5ae3f"],["D:/Blog/public/agency-model/index.html","8698a73c09b73773ed58229805045b88"],["D:/Blog/public/appearance-mode/index.html","4a376324d489828777322a7c63079914"],["D:/Blog/public/archives/2019/01/index.html","4ab9e09d1f796f0a80376b1a46e295d4"],["D:/Blog/public/archives/2019/07/index.html","fedfd752b80a571d10f621ec5da78a32"],["D:/Blog/public/archives/2019/12/index.html","8d719f9d22f0ef665cdf8f41b526fcb2"],["D:/Blog/public/archives/2019/index.html","d4d0b284cf77181872fd1d2359f01e38"],["D:/Blog/public/archives/2020/04/index.html","827ee08cd3fe89fb59f008dda46a47a7"],["D:/Blog/public/archives/2020/05/index.html","efb8a2456fbdf363a925c54208f43d66"],["D:/Blog/public/archives/2020/05/page/2/index.html","0fc56417af00887068f739115f828fc6"],["D:/Blog/public/archives/2020/06/index.html","d6f3facc92adaa704b6f7f672e432a81"],["D:/Blog/public/archives/2020/06/page/2/index.html","34796c092342a9d49683a8ac4d545f41"],["D:/Blog/public/archives/2020/06/page/3/index.html","6b5d02bbc528fd3aa453907eac04f64d"],["D:/Blog/public/archives/2020/06/page/4/index.html","6912e7e9c3c395180ab6bab3dbf08b49"],["D:/Blog/public/archives/2020/07/index.html","86ef6617b89ca79fd73f221e7fbeb1d3"],["D:/Blog/public/archives/2020/07/page/2/index.html","f3aa192c6379849e3b38c75983e754ef"],["D:/Blog/public/archives/2020/07/page/3/index.html","a138db5341357b8a434c32c05d6518a1"],["D:/Blog/public/archives/2020/08/index.html","6b10dcd83a526d9483dc06bfdecd6d0d"],["D:/Blog/public/archives/2020/08/page/2/index.html","e033d42694db2311d64ca6f646b610bd"],["D:/Blog/public/archives/2020/08/page/3/index.html","1344c026753c68a27932186fc3dc70ca"],["D:/Blog/public/archives/2020/09/index.html","b24ef8bcfcfec8b80fa5b0c06b793612"],["D:/Blog/public/archives/2020/09/page/2/index.html","1af15eeafb3ac6599fdaf4c4c54eb398"],["D:/Blog/public/archives/2020/10/index.html","f1c1227bc9f7044861bf9a40a97ba9be"],["D:/Blog/public/archives/2020/10/page/2/index.html","bb000f4328b84f6a087d367799d94df4"],["D:/Blog/public/archives/2020/11/index.html","90034d28953385f4bbadaf650ba689e0"],["D:/Blog/public/archives/2020/12/index.html","5fbac5fb8be2169edd474cdbc20e4f54"],["D:/Blog/public/archives/2020/12/page/2/index.html","3668899887eb2fe308818c021937300a"],["D:/Blog/public/archives/2020/index.html","f17928689d8615db0721fa59029eab07"],["D:/Blog/public/archives/2020/page/10/index.html","6909e95d7bf52ab5afe388a7256a95a4"],["D:/Blog/public/archives/2020/page/11/index.html","4c704336849621ff1ebec1c9fa1a19a5"],["D:/Blog/public/archives/2020/page/12/index.html","7cab599d17e8343d4dd8cd6f4e69f740"],["D:/Blog/public/archives/2020/page/13/index.html","2dbdc4da8a62f237a1783b6f72e29d52"],["D:/Blog/public/archives/2020/page/14/index.html","557162beb5655ee136a04c5dcffc172a"],["D:/Blog/public/archives/2020/page/15/index.html","e5a8248df5ce7fb89d5a7983ae25c424"],["D:/Blog/public/archives/2020/page/2/index.html","f6a60f7f16e78ed2b1e37f2437dc71a2"],["D:/Blog/public/archives/2020/page/3/index.html","452d3f1f354c48612bbf0a7472c1a3d7"],["D:/Blog/public/archives/2020/page/4/index.html","95d09084b5e753d0ae6904d8bd96ed82"],["D:/Blog/public/archives/2020/page/5/index.html","f265142431523012f7449b6b5ff2e9e1"],["D:/Blog/public/archives/2020/page/6/index.html","4286e3dea4d71f3418c2c67b48676878"],["D:/Blog/public/archives/2020/page/7/index.html","2f05251913a84311a4d1b49aae25bcfc"],["D:/Blog/public/archives/2020/page/8/index.html","33ee197ad85f16fb3823eae1bbe5e2ad"],["D:/Blog/public/archives/2020/page/9/index.html","4ded8aa46966f94448bee6a9b78e19b5"],["D:/Blog/public/archives/index.html","a2c42201ee872fe5481d8425615bbb6f"],["D:/Blog/public/archives/page/10/index.html","f1265bee1a74f493c1bfffc48d41f9d2"],["D:/Blog/public/archives/page/11/index.html","813d21d09a652b8cd13b32a45dd0d46d"],["D:/Blog/public/archives/page/12/index.html","813d21d09a652b8cd13b32a45dd0d46d"],["D:/Blog/public/archives/page/13/index.html","813d21d09a652b8cd13b32a45dd0d46d"],["D:/Blog/public/archives/page/14/index.html","813d21d09a652b8cd13b32a45dd0d46d"],["D:/Blog/public/archives/page/15/index.html","ee18efbd63513c1fcd992ab5111560aa"],["D:/Blog/public/archives/page/16/index.html","ee18efbd63513c1fcd992ab5111560aa"],["D:/Blog/public/archives/page/2/index.html","a2c42201ee872fe5481d8425615bbb6f"],["D:/Blog/public/archives/page/3/index.html","ffc10114e35274a159f9617b1972c37f"],["D:/Blog/public/archives/page/4/index.html","ffc10114e35274a159f9617b1972c37f"],["D:/Blog/public/archives/page/5/index.html","ffc10114e35274a159f9617b1972c37f"],["D:/Blog/public/archives/page/6/index.html","f1265bee1a74f493c1bfffc48d41f9d2"],["D:/Blog/public/archives/page/7/index.html","f1265bee1a74f493c1bfffc48d41f9d2"],["D:/Blog/public/archives/page/8/index.html","f1265bee1a74f493c1bfffc48d41f9d2"],["D:/Blog/public/archives/page/9/index.html","f1265bee1a74f493c1bfffc48d41f9d2"],["D:/Blog/public/array/index.html","cea5fafffbda6eafcdbfd4524cbafb15"],["D:/Blog/public/binary-search-algorithm/index.html","34780d1980aca7620c8a6b6c102f6301"],["D:/Blog/public/binary-sort-tree/index.html","d7d3be9f989fedf08b71e40e7fb2cf3a"],["D:/Blog/public/bridge-mode/index.html","411beec938a39cdcb495c2629bc12330"],["D:/Blog/public/builder/index.html","95f1b50e7f4b55ca6a6edc5552a6115e"],["D:/Blog/public/c-pointer/index.html","79e8929a122600e6268d7fedd722d1d3"],["D:/Blog/public/categories/C/index.html","9b1ccd8f373537022d38d4dfc7d91276"],["D:/Blog/public/categories/SpringMVC/index.html","8fbdbd7b5b988c7a90629233e926ad7d"],["D:/Blog/public/categories/index.html","48370a5a39074ec12afbc154dd619f71"],["D:/Blog/public/categories/linux/index.html","dabbe66ad6dd8e5c9b182b574f9bb951"],["D:/Blog/public/categories/分布式/index.html","b76cb8035f1708a28f3a939ba3b83c30"],["D:/Blog/public/categories/分布式/page/2/index.html","b3caa4597ae5d4f799026d743c20d456"],["D:/Blog/public/categories/前端/index.html","c87d29bd50014387774c312aacb64492"],["D:/Blog/public/categories/设计模式/index.html","9db1eeb7ac3a785b90feef640d9cb90b"],["D:/Blog/public/categories/设计模式/page/2/index.html","2f9b600b2b3b25c5b1918dfea5c3f4bf"],["D:/Blog/public/categories/高数/index.html","c3022155831fafdde40f6417c8a5261f"],["D:/Blog/public/chain-of-responsibility-model/index.html","077cc4a3e9fefb00d89be4060503b15f"],["D:/Blog/public/chinese-and-english-switching/index.html","e6db6313dd9ec180bcbd4c4947b9ef43"],["D:/Blog/public/combination-mode/index.html","9d6cdafaccca6437132b50fb4ca26511"],["D:/Blog/public/command-mode/index.html","b58933f9e4b5f79b6c17431d457e7451"],["D:/Blog/public/common-commands-of-unix/index.html","eac9c58c39990660438cea465ca1f3ad"],["D:/Blog/public/computer-network/index.html","d6ea22fe0e68d4e854f5942843e2e3c9"],["D:/Blog/public/concurrency-principle/index.html","4cb332ebacd8d4ff2fc33aab8c46002e"],["D:/Blog/public/continuous/index.html","a59a61b7a37b7a13f9beda3fa59e8023"],["D:/Blog/public/contract/index.html","b65c5d414448fd520b6210a4e2144b5b"],["D:/Blog/public/css/first.css","01783d09bd5d90f5caed9a1f0b381e6e"],["D:/Blog/public/css/style.css","d9f29b3c662555d217157af969971bb8"],["D:/Blog/public/cycle-structure-programming/index.html","049574deaab505b59e4fc1b02bc11f25"],["D:/Blog/public/data-structures-and-algorithms/index.html","859c0db5aa8dd48c556086107d6b5247"],["D:/Blog/public/deb/index.html","9c61ed00eb3ba540dea95a347ad975ed"],["D:/Blog/public/decorator-mode/index.html","8ebbd3d5e782af443ee2aac7059a5713"],["D:/Blog/public/definite-integral/index.html","c39efd4ed1d8d0a648836631da687b16"],["D:/Blog/public/dependence-reversal-principle/index.html","a8ff3b4c069489d252f8488ea0e4eb0c"],["D:/Blog/public/derivative/index.html","2a9132870c57b77131d37654ac72d9c9"],["D:/Blog/public/design-patterns/index.html","c041b18a02621511e38f5355cc3d6f8f"],["D:/Blog/public/differential-equation/index.html","9d5246286e42aa9318c2bc927f7a6541"],["D:/Blog/public/differential/index.html","6c3413afa8eadad99a2ca9c1db7b7494"],["D:/Blog/public/dimits-law/index.html","15ddcc96eaff443d4eca98bdeff3eb0c"],["D:/Blog/public/docker-virtualized-container/index.html","d7fbec8123e17554bd318dd669016f8b"],["D:/Blog/public/double-integral/index.html","59cc1fe9785c679d3ce8b61311ff8cc1"],["D:/Blog/public/dynamic-array/index.html","d2386a7bfc713580377aa384b607e50c"],["D:/Blog/public/encoding-algorithm/index.html","fc982c33524a476d20400d352cbd9959"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","c9f364d90bb2ce1eda5534ebc92ff8dd"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","e657bde94483b56de43250262f310d35"],["D:/Blog/public/factory-design-pattern/index.html","fd608af104b4e0ca126c6c97f3e4e8f1"],["D:/Blog/public/file-input-and-output/index.html","9f9f9d53125dc468cf2722851f26208c"],["D:/Blog/public/flyweight-model/index.html","2df5062a83e403086e1f9f9280d3f0ab"],["D:/Blog/public/friends/index.html","ad38abaa2cb654426400dd13a7a7941a"],["D:/Blog/public/function-graphing/index.html","4996490555bdb61a712221dfc5d77446"],["D:/Blog/public/gateway-service-current-limit/index.html","a7b510b888a6b1eab13ef8efe446758e"],["D:/Blog/public/gc/index.html","d3b38f1ab80159e2cfacec3bb095e671"],["D:/Blog/public/generalized-integral/index.html","37b7c56ccd3c2e542ba28804fe9d0508"],["D:/Blog/public/google8102e2f35ce9e391.html","1cec4d02119ffff991a9b6e753dc0d75"],["D:/Blog/public/gulp-compresses-static-resources/index.html","6cac42796756dae25d22a90a0c5ae5c6"],["D:/Blog/public/hash-algorithm/index.html","e230e7b6b76e7e4924474a4ef814f468"],["D:/Blog/public/heap-sort/index.html","c1fa82bc63c7549dc3938923f1d333c4"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","1e0a538350160a04b4cd9b29b4b0bb95"],["D:/Blog/public/http/index.html","4a3250c5e0d23906e727410313236e3b"],["D:/Blog/public/indefinite-integral/index.html","2fc2f82da35afb13c49279ac180b742c"],["D:/Blog/public/index.html","c4b7c8ba2a99bf9d49c5bd88ee6a58d8"],["D:/Blog/public/infinitesimal-and-infinite/index.html","66825310b7128c4e2f4a3fddf88ba00c"],["D:/Blog/public/interface-isolation-principle/index.html","79d6933a3bf4894357da306ea0b8a702"],["D:/Blog/public/intermediary-model/index.html","9ad919af47b9c0ebc917459ecdb82071"],["D:/Blog/public/interpolation-search-algorithm/index.html","6ad699c7799c774b6ed266c93e6e8d52"],["D:/Blog/public/interpreter-mode/index.html","8a0cbc9bcbe0e4fab2c6cee8b2e11421"],["D:/Blog/public/introduction-to-computer-network/index.html","ec74fb1ab6f7c83f5e4f44d8ac4aeaba"],["D:/Blog/public/introduction-to-operating-system/index.html","7c998018b08933bfe61764887f9084d5"],["D:/Blog/public/inversion-of-control/index.html","92bac31aba5cb8bb4e9bef858283c0b8"],["D:/Blog/public/io/index.html","54cc320dee49718302199711b7e55ddb"],["D:/Blog/public/iterator-mode/index.html","9d2aa871174fa75f82584bbcf0b112d2"],["D:/Blog/public/j2ee/index.html","4af38733f7bf467831ad65117d95c42d"],["D:/Blog/public/j2se/index.html","4636f441aae1e2e3211f3beb5dac8850"],["D:/Blog/public/jdbc/index.html","123d132e70da060e121f583bb10176d7"],["D:/Blog/public/jdk/index.html","073676885bdd403c586320d0303a5ccc"],["D:/Blog/public/jmm-memory-model/index.html","45f95dc6358b512625ad4d5cb7799403"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm/index.html","0dfbc7269941d88f4acb1db397067ab8"],["D:/Blog/public/law-of-robida/index.html","e4f73979f3e01f6a194aa19c2f7afeda"],["D:/Blog/public/limit/index.html","02e216ca987afd1e02413ef6568f2be9"],["D:/Blog/public/linear-search-algorithm/index.html","294be538080226d891406ae9fc6ca96b"],["D:/Blog/public/link/index.html","55fe7dc45359f6d93be3a649fdc33fcd"],["D:/Blog/public/linked-list/index.html","fce9cd682b8003aba6e9921d3eafb891"],["D:/Blog/public/linux/index.html","d8fd9ab3cd216ea5e751b03607762701"],["D:/Blog/public/liskov-substitution-principle/index.html","998815a3a957a40b45d642889a0d160d"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","c395ec23c708c0a174886ce23516e412"],["D:/Blog/public/maintenance-1/index.html","121c108ab5aa904ac55662bfc7275f6e"],["D:/Blog/public/maintenance-2/index.html","fe990add26d8560302caaaecc34f29d3"],["D:/Blog/public/maintenance-3/index.html","b154d636398bb52d913c0291ea812e5b"],["D:/Blog/public/memo-mode/index.html","c9f0574cd2aefe17395e30987b3e3dfe"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","9276ab97ec6b18c2ead999cbb7939621"],["D:/Blog/public/multi-function/index.html","7dc8eb7aed113cb612f33664d6e771ec"],["D:/Blog/public/multithreading/index.html","ced4c93f1bcf63f4a2fafa7b7c8ca548"],["D:/Blog/public/mvc/index.html","7e8b4023ff800a69171cabd276df78a0"],["D:/Blog/public/mybatis/index.html","883f90d89160af5f0f46bd0d9615a034"],["D:/Blog/public/mysql/index.html","c5edbd25c25c5c2f37088a1ab6b9dce3"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","81314b2877e607bc356f886d4aec40dd"],["D:/Blog/public/objectoriented/index.html","77028d8e670b5fe99ba3349ccf3d8ab9"],["D:/Blog/public/observer-mode/index.html","3aa3c565a1e8582f8b7cb485518b6e1d"],["D:/Blog/public/operating-system/index.html","f76a84151dbc7a29ad7f684f8ec474a8"],["D:/Blog/public/page/10/index.html","df388db722d986f245abd071967416b4"],["D:/Blog/public/page/11/index.html","1f5a5e3ae53b577858a2ef512c837dae"],["D:/Blog/public/page/12/index.html","8a5b4902584364ecff205e097300591a"],["D:/Blog/public/page/13/index.html","063ed5dbf747a75049d2fead959f28f9"],["D:/Blog/public/page/14/index.html","1bfb3ff88b2afa786696fe775df59110"],["D:/Blog/public/page/15/index.html","f18129f96f2d81718868d488b543f727"],["D:/Blog/public/page/16/index.html","946d54b189822d30e513c81e6ae84c18"],["D:/Blog/public/page/2/index.html","c4539ebc9a5895b23df3a401aa1f5f27"],["D:/Blog/public/page/3/index.html","ee0ac327557e270e2f4c6b40bf10b1b2"],["D:/Blog/public/page/4/index.html","f21e645daeed612229590419c974a33e"],["D:/Blog/public/page/5/index.html","e69afd301063051d76cfce419c6ac11c"],["D:/Blog/public/page/6/index.html","30ef3bf8ca9cc0539377d5c4fb59736e"],["D:/Blog/public/page/7/index.html","ca0ae401a5a7d607717e8f9ab91e660e"],["D:/Blog/public/page/8/index.html","32297ea6243cce2eb37042316fb226e1"],["D:/Blog/public/page/9/index.html","4dd6a2f535b9e86b85df1e882c706351"],["D:/Blog/public/palindrome/index.html","1b1ddf7352ae00fa60a2bcfaf76ba6bd"],["D:/Blog/public/partial-derivative/index.html","e4db2173518797c528d774ef7d3c4505"],["D:/Blog/public/pass-by-value/index.html","7573e5ce150c4b7aeca7a8d15334e38c"],["D:/Blog/public/pictrue-bed/index.html","e97596e29814d34a9b7af3aac1c88179"],["D:/Blog/public/principle-of-opening-and-closing/index.html","eb6ef073c9f3d5d6beeb261dc6951a4e"],["D:/Blog/public/principles-of-computer-organization/index.html","2fe4afa5ef7edb95de59baa139d0aa84"],["D:/Blog/public/prototype/index.html","05e1db214e7d8950140aeb1e4527ec72"],["D:/Blog/public/queue/index.html","e9c8228e2c618b9fa210d1b7e5c8fb29"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","6f977524b6ac0fa2dcee4a3fd6dd4257"],["D:/Blog/public/redis/index.html","70ca21d1ae665d50f001b2c9bf499129"],["D:/Blog/public/reflection/index.html","d0ca09c2624684255cf627e4200703ea"],["D:/Blog/public/resume/index.html","00a1095fdce2e544b3c8090c8aa9d30e"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","5126f6572dce03dd7e3c417d1fc62b4b"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","cf25134359bacda027a2e5a033004789"],["D:/Blog/public/select-structure-programming/index.html","a4a8903b81e55549e44a87a8c2989be2"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","b92a1add05d16daba5f1ca2e84d430f2"],["D:/Blog/public/sequential-programming/index.html","ea9cd0f06400af29f81246a86266535c"],["D:/Blog/public/series/index.html","95531a7f4380ff134dd05235c1193c0f"],["D:/Blog/public/single-responsibility-principle/index.html","1864705a4aa8e9c4535c0b4bf1316859"],["D:/Blog/public/singleton-mode/index.html","0c8def19f5008965820ec9ff0a3150b7"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","6dabd8c715f923e33b885c7777737494"],["D:/Blog/public/sparsearray-sparse-array/index.html","dffea52168a7f1b74cd2441e08af1d79"],["D:/Blog/public/spring-architecture/index.html","b774cea834df7c9268cc5a66fd54d2a8"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","d917f520a02eacadfc13bae25ecb79a0"],["D:/Blog/public/spring/index.html","c108c9630c98cb5c8d86edbe5cd973b3"],["D:/Blog/public/springcloud-alibaba/index.html","e1d7748066c51cb28b6c2765a29da54a"],["D:/Blog/public/springcloud-bus-message/index.html","6ffef23a392528db07e1047a3ff97529"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","be611eda9d29d1c15548704969522a4e"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","ee5b97a18a286dfa21321872e1c3e8ec"],["D:/Blog/public/springcloud-stream-message-driver/index.html","6f332e7133d3c26e26a52b300274457b"],["D:/Blog/public/springcloud/index.html","4b48291749fa0bc29f3948692f50b663"],["D:/Blog/public/springmvc-environment-construction/index.html","19ba16e747730de649667993fc02b58f"],["D:/Blog/public/sql-injection-attacks/index.html","b11eba75ac0e017ffaf9d874fd67fb28"],["D:/Blog/public/stack/index.html","682cde39b57095ff9bc3559d6b6011ab"],["D:/Blog/public/state-mode/index.html","8938a204cc9a9f53f5d73a4ed0587138"],["D:/Blog/public/strategy-mode/index.html","f8054f7f981344d8197eff5b89ecbc0d"],["D:/Blog/public/synthetic-reuse-principle/index.html","a7e858d5c44394bfcb64eaf0dfb4b3be"],["D:/Blog/public/tags/C/index.html","abd6a42b56ed5c3283f02f231526b006"],["D:/Blog/public/tags/C/page/2/index.html","7ea05b0335b595763a5841a15005ee59"],["D:/Blog/public/tags/Concurrency/index.html","9fa36d5e08d2e4d56e10d6e816832da4"],["D:/Blog/public/tags/DesignPatterns/index.html","b9d44fc958767e09f808c8538961c864"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","9c04fbb6509265b173f8742fd1c4cda1"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","d24cc062d21b307d432e8d1b38979e4a"],["D:/Blog/public/tags/DistributedMicroservices/index.html","3a86c39f164dc989acab232db9591b74"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","87a461f3857abc906923d36a97568f27"],["D:/Blog/public/tags/Interview/index.html","3b4b6c52e89eb933fb4a36fac1cbc72b"],["D:/Blog/public/tags/Interview/page/2/index.html","53095a6aed659dc84ef3f86d5a2e8e36"],["D:/Blog/public/tags/Operating-Systems/index.html","4c0187f7691c6e2f156689d9898aedc1"],["D:/Blog/public/tags/about/index.html","72ea84d5edf25eb4ff7fe864c914e272"],["D:/Blog/public/tags/ad/index.html","f5bdb31320c7aedce6355f741d8e8a0b"],["D:/Blog/public/tags/dataAlgorithm/index.html","5ed4252757485904ba769ee325a5039b"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","96d66c1f8a28f8abf1e075c3f53f0b20"],["D:/Blog/public/tags/docker/index.html","ad34ba9817748832d508599a0e2c5181"],["D:/Blog/public/tags/frame/index.html","2cea2d374e7e66c363f10f3b42657db3"],["D:/Blog/public/tags/front/index.html","c1a0b76049836f5166b04bcc9abb9beb"],["D:/Blog/public/tags/index.html","dc6794f7dc3c8278ba575993d9d4e7e9"],["D:/Blog/public/tags/index2.html","4b2bd0a0d332b6dc834a46a045b4add6"],["D:/Blog/public/tags/jvm/index.html","7c9146c596b20ea5a155b5ac3e3d1610"],["D:/Blog/public/tags/linux/index.html","9a1de6c458fd7fd5b95eaa2115c1b81a"],["D:/Blog/public/tags/maintain/index.html","16e49b2f12cbf6b543fbb1dc037bbbe1"],["D:/Blog/public/tags/math/index.html","b00089ef241060d86e01924795f8612b"],["D:/Blog/public/tags/math/page/2/index.html","fec669a24c1b0dcc5821cf963c1386c5"],["D:/Blog/public/tags/network/index.html","6480f4b477b07b784f3245fd6726f327"],["D:/Blog/public/tags/project/index.html","92d248194b991f5a4496e2716dd186ea"],["D:/Blog/public/tags/resume/index.html","f38c21165b36df761b533c3d58716b98"],["D:/Blog/public/tags/safe/index.html","ec8a56b5055fa695664c8ff46209df24"],["D:/Blog/public/tags/sql/index.html","e21f41d252c9056774cf286c7dd9e0fe"],["D:/Blog/public/tcpip/index.html","d6d3455e303ffb935c3739df7eb63bdb"],["D:/Blog/public/template-method/index.html","f59128e1f74f6a7c307d9c8f07acc250"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e37595317300e836dcd01730caa0b5ba"],["D:/Blog/public/thread/index.html","7575c27ea64a1bf204e1ddcf09c6aa64"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","52c1570dff47e757e1090b071c155135"],["D:/Blog/public/ubuntu-set-ip/index.html","81c8bc225c2016bd9a0556b11d52d177"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","1626d6930c477067dc8880926e0af338"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","ae94ce26db5d45a31a618be4f96cbd96"],["D:/Blog/public/users-create-data-types-themselves/index.html","78061a26e7ebd063a0faa397c95a9586"],["D:/Blog/public/visitor-mode/index.html","4812261d310e79031d8622f2534fb3a4"],["D:/Blog/public/xml/index.html","2b3dff61f7916c908247b2bd1ab4212b"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","de0c5f3a15e80d5a45792fc3524f440c"]];
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







