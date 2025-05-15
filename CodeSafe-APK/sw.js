const CACHE_NAME = 'CodeSafe-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/icon-192.png'
];

// Instalación: Caché de recursos críticos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Estrategia: Cache First
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(cachedRes => cachedRes || fetch(e.request))
  );
});