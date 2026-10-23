const CACHE = 'our-little-garden-v2.0';
const APP_SHELL = [
  './',
  './index.html',
  './girl.jpg',
  './icon.png',
  './icon-512.png',
  './manifest.webmanifest',
  './stickers/s1-01.png',
  './stickers/s1-02.png',
  './stickers/s1-03.png',
  './stickers/s1-04.png',
  './stickers/s1-05.png',
  './stickers/s1-06.png',
  './stickers/s1-07.png',
  './stickers/s1-08.png',
  './stickers/s1-09.png',
  './stickers/s1-10.png',
  './stickers/s1-11.png',
  './stickers/s1-12.png',
  './stickers/s1-13.png',
  './stickers/s1-14.png',
  './stickers/s1-15.png',
  './stickers/s1-16.png',
  './stickers/s1-17.png',
  './stickers/s1-18.png',
  './stickers/s1-19.png',
  './stickers/s1-20.png',
  './stickers/s1-21.png',
  './stickers/s1-22.png',
  './stickers/s1-23.png',
  './stickers/s1-24.png',
  './stickers/s2-01.png',
  './stickers/s2-02.png',
  './stickers/s2-03.png',
  './stickers/s2-04.png',
  './stickers/s2-05.png',
  './stickers/s2-06.png',
  './stickers/s2-07.png',
  './stickers/s2-08.png',
  './stickers/s2-09.png',
  './stickers/s2-10.png',
  './stickers/s2-11.png',
  './stickers/s2-12.png',
  './stickers/s2-13.png',
  './stickers/s2-14.png',
  './stickers/s2-15.png',
  './stickers/s2-16.png',
  './stickers/s2-17.png',
  './stickers/s2-18.png',
  './stickers/s2-19.png',
  './stickers/s2-20.png',
  './stickers/s2-21.png',
  './stickers/s2-22.png',
  './stickers/s2-23.png',
  './stickers/s2-24.png',
  './stickers/s3-01.png',
  './stickers/s3-02.png',
  './stickers/s3-03.png',
  './stickers/s3-04.png',
  './stickers/s3-05.png',
  './stickers/s3-06.png',
  './stickers/s3-07.png',
  './stickers/s3-08.png',
  './stickers/s3-09.png',
  './stickers/s3-10.png',
  './stickers/s3-11.png',
  './stickers/s3-12.png',
  './stickers/s3-13.png',
  './stickers/s3-14.png',
  './stickers/s3-15.png',
  './stickers/s3-16.png',
  './stickers/s3-17.png',
  './stickers/s3-18.png',
  './stickers/s3-19.png',
  './stickers/s3-20.png',
  './stickers/s3-21.png',
  './stickers/s3-22.png',
  './stickers/s3-23.png',
  './stickers/s3-24.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response && response.ok && (response.type === 'basic' || response.type === 'default')) {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      return new Response('Kamu sedang offline dan file ini belum tersimpan di perangkat. Buka Our Little Garden sekali saat online, lalu coba lagi.', {
        status: 503,
        statusText: 'Offline',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
