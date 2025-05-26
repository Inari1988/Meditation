
const cacheName = 'meditation-dashboard-v1';
const resourcesToPrecache = [
  'Final_Meditation_Dashboard_Hidden_Script.html',
  'Adaptive_Meditation_Tracker_1min_Increments.html',
  'Interactive_Meditation_Timetable_Metta_20min.html',
  'manifest.json',
  'icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(resourcesToPrecache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request))
  );
});
