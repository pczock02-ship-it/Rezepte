// Kochbuch Service Worker
// Versionsnummer bei jeder Änderung an den App-Dateien hochzählen,
// damit Handys die neue Version laden.
const CACHE_VERSION = "kochbuch-v8";
const APP_SHELL = ["./", "./index.html", "./recipes.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];

// Fehlt eine Datei (z. B. ein Icon), bricht die Installation nicht mehr ab.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      Promise.allSettled(APP_SHELL.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Netz zuerst (immer die neueste Version). Antwortet das Netz nicht innerhalb
// von 4 Sekunden oder ist man offline, kommt die gespeicherte Version.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    new Promise((resolve) => {
      let done = false;
      const fromCache = () =>
        caches.match(event.request, { ignoreSearch: true })
          .then((hit) => hit || (event.request.mode === "navigate" ? caches.match("./index.html") : undefined));
      const timer = setTimeout(() => {
        fromCache().then((hit) => { if (hit && !done) { done = true; resolve(hit); } });
      }, 4000);
      fetch(event.request)
        .then((response) => {
          clearTimeout(timer);
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(event.request, clone));
          }
          if (!done) { done = true; resolve(response); }
        })
        .catch(() => {
          clearTimeout(timer);
          fromCache().then((hit) => { if (!done) { done = true; resolve(hit || Response.error()); } });
        });
    })
  );
});
