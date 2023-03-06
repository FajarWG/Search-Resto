import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  '/',
  '/index.html',
  '29.bundle.js',
  '29.bundle.js.map',
  '686.bundle.js',
  '686.bundle.js.map',
  'app~49ea73a0.bundle.js',
  'app~49ea73a0.bundle.js.map',
  'app~71c0e426.bundle.js',
  'app~71c0e426.bundle.js.map',
  'app~ca09b9d6.bundle.js',
  'app~ca09b9d6.bundle.js.map',
  'app~d1658f4b.bundle.js',
  'app~d1658f4b.bundle.js.map',
  '/sw.bundle.js',
  '/sw.bundle.js.map',
  '/app.webmanifest',
  '/favicon.png',
  '/images/hero.jpg',
  '/images/hero-small.jpg',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
