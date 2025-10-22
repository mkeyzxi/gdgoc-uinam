// Import library dari CDN (versi ringan Workbox)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// pastikan Workbox tersedia
if (workbox) {
	console.log('Workbox loaded');

	// cache semua file statis hasil build (precache manifest)
	workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

	// cache semua gambar (jpg, png, webp, svg)
	workbox.routing.registerRoute(
		({ request }) => request.destination === 'image',
		new workbox.strategies.CacheFirst({
			cacheName: 'image-cache',
			plugins: [
				new workbox.expiration.ExpirationPlugin({
					// simpan maksimal 50 gambar
					maxEntries: 50, 
					// cache 7 hari
					maxAgeSeconds: 7 * 24 * 60 * 60, 
				}),
			],
		})
	);

	// Cache file CSS & JS dengan strategi StaleWhileRevalidate
	workbox.routing.registerRoute(
		({ request }) =>
			request.destination === 'script' || request.destination === 'style',
		new workbox.strategies.StaleWhileRevalidate({
			cacheName: 'asset-cache',
		})
	);
} else {
	console.log('❌ Workbox failed to load');
}
