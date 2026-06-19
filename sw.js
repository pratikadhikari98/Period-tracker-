// ── Service Worker — पिरेड ट्र्याकर ──
// Version बढाउँदा पुरानो cache हट्छ
const CACHE_NAME = 'period-tracker-v1';

// Cache गर्ने files
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700;900&display=swap',
];

// ── INSTALL: सबै assets cache गर्ने ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: पुरानो cache हटाउने ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: Cache-first strategy ──
// Google Fonts: network-first (offline भए cache बाट)
// बाकी सबै: cache-first (offline पनि काम गर्छ)
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Google Fonts — network first
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // बाकी — cache first, network fallback
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request)
        .then(response => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
      )
  );
});
