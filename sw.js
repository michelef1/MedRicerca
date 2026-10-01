const CACHE = 'medricerca-v5.3';
const SHELL = [
  './', './index.html', './manifest.json', './farmaci-it.json',
  './icons/icon-192.png', './icons/icon-512.png',
  './icons/maskable-192.png', './icons/maskable-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
self.addEventListener('message', event => { if (event.data === 'SKIP_WAITING') self.skipWaiting(); });
