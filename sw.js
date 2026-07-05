// Kochbuch Service Worker
// Versionsnummer bei jeder Änderung an den App-Dateien hochzählen,
// damit Handys die neue Version laden.
const CACHE_VERSION = "kochbuch-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./recipes.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Network-first: lädt immer zuerst die neueste Version aus dem Internet
// und merkt sie sich. Nur wenn kein Netz da ist, wird die gespeicherte
// Version aus dem letzten Mal benutzt (Offline-Nutzung).
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
