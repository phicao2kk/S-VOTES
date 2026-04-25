self.addEventListener('install', (e) => {
  console.log('S-VOTES Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
