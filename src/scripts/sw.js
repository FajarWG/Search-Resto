/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CONFIG from './global/config';

const assetsToCache = [
  '/',
  '/index.html',
  '/app.bundle.js',
  '/sw.bundle.js',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Installing service worker....');

  event.waitUntil(
    caches.open(CONFIG.CACHE_NAME)
      .then((cache) => cache.addAll(assetsToCache)),
  );
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CONFIG.CACHE_NAME) {
            console.log(`ServiceWorker: cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        }),
      )),
  );
});
