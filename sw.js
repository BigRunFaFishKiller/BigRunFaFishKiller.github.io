/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/06/SpringMVC笔记/index.html","da844ce1f12c8c6375cc94ce196a54f8"],["/2022/07/07/JDBC/index.html","75dd8bedabf9a9dd682ad9c2a19c40f5"],["/2022/07/07/JavaWeb/index.html","f0614f83c0761ffaf9fcdd05a895089e"],["/2022/07/07/MyBatis/index.html","796906b2aef943a4ec95e1dc238be944"],["/2022/07/07/Mysql/index.html","9b0914d98e8e36d68088119683f0ee2a"],["/2022/07/07/Spring/index.html","ef8cafaca33e2747db9e69da4cd3d3d1"],["/2022/07/09/GoLang/index.html","31dd97c235790b9df83d9a5cc1395d79"],["/2022/07/10/Java操作Excel文件/index.html","228f81cf83f2709e5aa1bf9f57ef9058"],["/2022/07/14/数据结构与算法基础/index.html","51da1ac46fab4cd2f797e99dcab142e1"],["/2022/07/15/开发日记-条件分页查询的实现/1.jpg","125537a6ade9df46fe6ecf0d63d8d733"],["/2022/07/15/开发日记-条件分页查询的实现/2.jpg","fc6eca4f66a97a1160a1bf5390ba89ed"],["/2022/07/15/开发日记-条件分页查询的实现/index.html","4c39e889b5dff786c9b2f10cd9ae98d6"],["/2022/07/15/开发日记-条件分页查询的实现/无语.jpg","1c59bc04f9c1be9c326074be16835667"],["/2022/07/16/开发日记-子查询的实际应用/index.html","190e7271ae4b1fef3d55cb2a45c0e4c9"],["/2022/07/20/设计模式/index.html","7488b47b079b80a7ad7b80d02e6e8386"],["/2022/07/23/SpringBoot/index.html","f1bee58847d507574309c57b9ad96853"],["/2022/07/26/VUE/index.html","1f379ba4144d4ab26e3f7ce24a126492"],["/2022/07/27/redis/index.html","9d28971afc22c1c06aa674debe9ce281"],["/2022/08/04/Gin/index.html","d64b449fe34df293bd9b4c543c82055d"],["/2022/08/05/GORM/index.html","9b2a6aa40f06aeafafd3295c34cebeae"],["/about/index.html","1e6a368dc965f3ed95ee71291abe1f8b"],["/archives/2022/07/index.html","15f0e6ecc7a250389651b2a86b5cedfe"],["/archives/2022/07/page/2/index.html","5db484f80312b1f489934c157728ecb8"],["/archives/2022/08/index.html","db725d791802ca16f1cc639710738367"],["/archives/2022/index.html","d368e22f3657fdceb7e8486d5e83a3d9"],["/archives/2022/page/2/index.html","4ada83e970fe7d9188e707c6a4b0c910"],["/archives/index.html","f22a147f32dfe01650f10ca8c772f03b"],["/archives/page/2/index.html","0996f633c7c294d68da15562dd4d13d3"],["/categories/GoLang/index.html","7a763cc41b32eb84b2476d810089fd13"],["/categories/Java/index.html","ed5684fdc8e3a456e42c6c43cc71bff0"],["/categories/index.html","036df26c7386d9027dc45c5ed8641acc"],["/categories/其他/index.html","4d1b621a8d20be62ec33602043492b69"],["/categories/数据库/index.html","5b14b1417de2f5d449af4b68a0d814e8"],["/categories/计算机基础/index.html","ced773d6a35018b38b468bc3c3a3e2c6"],["/css/main.css","9bf7856f038f6a17068b4830b0eaef00"],["/images/2.jpg","8eed931c5c0b0e3f398c86a71301f28d"],["/images/3.jpg","da36beae754ff39c476c09f59e67fbe6"],["/images/4.jpg","27575b1add3fd41839e140eff0206c7a"],["/images/5.jpg","9182c0369a21274091eeca393579d11d"],["/images/6.jpg","1a435a31410d68634c104d7dbaa62261"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/img/1.jpg","8a03f06fcfd5d74a10aa82b2d94ac232"],["/img/2.jpg","8eed931c5c0b0e3f398c86a71301f28d"],["/index.html","aa894a4ddd6ead5dd95b64af59cb926e"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6b56b7208624249f334a10cb94d55444"],["/sw-register.js","2c8ccd8012f78c80818fc697b16efd4d"],["/tags/GoLang基础/index.html","23506e575775d2dbff6a8279d6e3aa48"],["/tags/Java基础/index.html","11da05b57699c1c7de412c2f21de795b"],["/tags/index.html","ccfc4bdd4049325a32b5332261a413d3"],["/tags/mysql/index.html","ea503264446792b2b149177c7cd4882b"],["/tags/redis/index.html","cc1c4d26a3ea82ad6226cd831d744ce8"],["/tags/web后端框架/index.html","baa6a017438633e772d95a4bd3e6bf3b"],["/tags/前端框架/index.html","072a3635c8a240f5f4da6c016298e137"],["/tags/开发日记/index.html","241da4cb7de6404a9da0890c5196aff0"],["/tags/数据结构与算法基础/index.html","babe8882d95db2afb221d350544c276e"],["/tags/设计模式/index.html","d06536375e91370da688758d7bde5561"],["/tags/零散技术/index.html","ffd166f9d87a470bcbfb973c1333831a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
