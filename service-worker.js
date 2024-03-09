const cacheName = 'scouting-app-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/logo.png'
];

self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event => {
    console.log('Service Worker fetching...');
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});