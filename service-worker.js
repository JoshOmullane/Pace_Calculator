const CACHE_NAME = 'pace-calculator-cache-v1';
const URLS_TO_CACHE = [
  '/pace-calculator/',
  '/pace-calculator/index.html',
  '/pace-calculator/manifest.json',
  '/pace-calculator/service-worker.js',
  '/pace-calculator/icons/icon-192.png',
  '/pace-calculator/icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
