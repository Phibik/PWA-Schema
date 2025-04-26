const CACHE_NAME = 'PWA-cache';
var ARCHIVOS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/pwa.js',
  './manifest.json',
  './images/logo.png'
];

// Treure el comentari d'abaix per desactivar cache i poder actualizar el liveserver
//ARCHIVOS = [];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

// Perque el sw.js no infereixi quan es conecti al github
self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.github.com')) return;
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});