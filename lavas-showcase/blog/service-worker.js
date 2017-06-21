"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e&&e.length>0&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/lavas-showcase/blog/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["/lavas-showcase/blog/index.html","3214867d448cc65f6a348be2b6bc4aaa"],["/lavas-showcase/blog/static/css/app.d4c1dbda5cf3a2129a06037da34fa6b9.css","c9f1f8331aee3b77bc70048e2f68b748"],["/lavas-showcase/blog/static/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/lavas-showcase/blog/static/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/lavas-showcase/blog/static/fonts/MaterialIcons-Regular.woff2","40de091676f313252d80ea8fb83b9c1e"],["/lavas-showcase/blog/static/img/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["/lavas-showcase/blog/static/img/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["/lavas-showcase/blog/static/img/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["/lavas-showcase/blog/static/img/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["/lavas-showcase/blog/static/img/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["/lavas-showcase/blog/static/img/icons/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["/lavas-showcase/blog/static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["/lavas-showcase/blog/static/img/icons/safari-pinned-tab.svg","f78c0251d6ddd56ee219a1830ded71b4"],["/lavas-showcase/blog/static/js/0.325067b8c743faa421b2.js","37c8dc63eaf0091bc75383209fa8669d"],["/lavas-showcase/blog/static/js/1.7fc2b63d01bad65af605.js","f495585cd01ad8ff53a3b8e210d001ff"],["/lavas-showcase/blog/static/js/2.bd2e5f8562c3cecd20ba.js","08827019a680021bd9d7f122f655ae33"],["/lavas-showcase/blog/static/js/3.bc8f34a3f5ad2ac1de3b.js","6fa3f105f5b1b607a6c3e32b3f6f28af"],["/lavas-showcase/blog/static/js/4.ff0a7d3c22a25796b8db.js","21a611fdd768b42a7121ab9f92bc098f"],["/lavas-showcase/blog/static/js/app.32a0b8a6b092fe5e9de5.js","8d2a585621c2fa10dd5fe0e7f306c1ea"],["/lavas-showcase/blog/static/js/manifest.02941024660d1692a1a3.js","5ec1f81512fdab2e4f4c0f38c934deb7"],["/lavas-showcase/blog/static/js/vendor.6097d563dccde55b2c87.js","44cc4a33102bf7810d5854f930ce7a90"],["/lavas-showcase/blog/static/manifest.json","7626a270f16edb1f023b933f43b76210"],["/lavas-showcase/blog/sw-register.js","bd53ec3e46403fef026a7e15243c45d2"]],cacheName="sw-precache-v3-sw-cache-blog-demo-"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e[0].postMessage("updateMessage")})}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function a(s,c){if(!n[s]){if(!t[s]){var i="function"==typeof require&&require;if(!c&&i)return i(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return a(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||u.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||u.cache.name,caches.open(t)}function o(e,t,n){var r=s.bind(null,e,t,n);i=i?i.then(r):r()}function s(e,t,n){var a=e.url,o=n.maxAgeSeconds,s=n.maxEntries,c=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+s+", max age is "+o),f.getDb(c).then(function(e){return f.setTimestampForUrl(e,a,i)}).then(function(e){return f.expireEntries(e,s,o,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,u=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||u.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||u.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&o(e,n,r)})}),r.clone()})},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return a(t).then(function(t){return t.add(e)})},uncache:function(e,t){return a(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),u.preCacheItems=u.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(s+e,c);r.onupgradeneeded=function(){r.result.createObjectStore(i,{keyPath:u}).createIndex(f,f,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function a(e,t,n){return t?new Promise(function(r,a){var o=1e3*t,s=[],c=e.transaction(i,"readwrite"),h=c.objectStore(i);h.index(f).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-o>t.value[f]){var r=t.value[u];s.push(r),h.delete(r),t.continue()}},c.oncomplete=function(){r(s)},c.onabort=a}):Promise.resolve([])}function o(e,t){return t?new Promise(function(n,r){var a=[],o=e.transaction(i,"readwrite"),s=o.objectStore(i),c=s.index(f),h=c.count();c.count().onsuccess=function(){var e=h.result;e>t&&(c.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var o=r.value[u];a.push(o),s.delete(o),e-a.length>t&&r.continue()}})},o.oncomplete=function(){n(a)},o.onabort=r}):Promise.resolve([])}var s="sw-toolbox-",c=1,i="store",u="url",f="timestamp",h={};t.exports={getDb:function(e){return e in h||(h[e]=r(e)),h[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,a){var o=e.transaction(i,"readwrite");o.objectStore(i).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})},expireEntries:function(e,t,n,r){return a(e,n,r).then(function(n){return o(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(s.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),o=function(e,t,n,o){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=o,this.handler=n};o.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=o},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var a=e("./route"),o=e("./helpers"),s=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,s){s=s||{};var c;t instanceof RegExp?c=RegExp:(c=s.origin||self.location.origin,c=c instanceof RegExp?c.source:r(c)),e=e.toLowerCase();var i=new a(e,t,n,s);this.routes.has(c)||this.routes.set(c,new Map);var u=this.routes.get(c);u.has(e)||u.set(e,new Map);var f=u.get(e),h=i.regexp||i.fullUrlRegExp;f.has(h.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,s(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var c=s(o,n);if(c.length>0)return c[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var o=n.cache||r.cache,s=Date.now();return a.isResponseFresh(t,o.maxAgeSeconds,s)?t:a.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,o))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(o,s){var c=!1,i=[],u=function(e){i.push(e.toString()),c?s(new Error('Both cache and network failed: "'+i.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?o(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),a(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var o=(n=n||{}).successResponses||r.successResponses,s=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var c,i,u=[];if(s){var f=new Promise(function(o){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,s=Date.now(),c=t.maxAgeSeconds;a.isResponseFresh(e,c,s)&&o(e)})},1e3*s)});u.push(f)}var h=a.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),o.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),s=e("./strategies"),c=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,o=0,s="",u=t&&t.delimiter||"/";null!=(n=v.exec(e));){var f=n[0],h=n[1],l=n.index;if(s+=e.slice(o,l),o=l+f.length,h)s+=h[1];else{var p=e[o],d=n[2],g=n[3],m=n[4],b=n[5],w=n[6],x=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=p&&p!==d,R="+"===w||"*"===w,E="?"===w||"*"===w,C=n[2]||u,k=m||b;r.push({name:g||a++,prefix:d||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!x,pattern:k?i(k):x?".*":"[^"+c(C)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var s="",c=n||{},i=(r||{}).pretty?a:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=c[f.name];if(null==l){if(f.optional){f.partial&&(s+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(m(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=i(l[p]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");s+=(0===p?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?o(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');s+=f.prefix+h}}else s+=f}return s}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}function l(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(g(e[a],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}function p(e,t,n){return d(r(e,n),t,n)}function d(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",s=0;s<e.length;s++){var i=e[s];if("string"==typeof i)o+=c(i);else{var h=c(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),o+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var p=c(n.delimiter||"/"),d=o.slice(-p.length)===p;return r||(o=(d?o.slice(0,-p.length):o)+"(?:"+p+"(?=$))?"),o+=a?"$":r&&d?"":"(?="+p+"|$)",u(new RegExp("^"+o,f(n)),t)}function g(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?h(e,t):m(e)?l(e,t,n):p(e,t,n)}var m=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=function(e,t){return s(r(e,t))},t.exports.tokensToFunction=s,t.exports.tokensToRegExp=d;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\/material-design-icon/,toolbox.networkFirst,{});