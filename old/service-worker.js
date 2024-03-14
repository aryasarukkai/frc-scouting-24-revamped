self.addEventListener('install', function(event) {
	event.waitUntil(
	  caches.open('scouting-app-cache').then(function(cache) {
		return cache.addAll([
		  '/',
		  '/index.html',
		  '/manifest.json',
		  '/icon.png'
		]);
	  })
	);
  });
