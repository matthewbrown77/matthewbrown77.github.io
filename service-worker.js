importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image" ||
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'worker',
    new workbox.strategies.CacheFirst()
);