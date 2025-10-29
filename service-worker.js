self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('kowloon-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/data/itinerary.json',
        '/kowloon_map.geojson'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
