const CACHE_NAME = 'lingomaster-premium-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './words.js',
  './manifest.json',
  './icon.png' // İkon dosyanın tam adı neyse buraya o gelmeli (örn: icon.png)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Önbellekte varsa onu döndür (Çevrimdışı çalışma anı)
        if (response) {
          return response;
        }
        
        // Yoksa internetten çekmeyi dene ve başarılı olursa hafızaya al
        return fetch(event.request).then(
          function(response) {
            // Sadece geçerli yanıtları önbelleğe al
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        ).catch(() => {
          // Eğer hem internet yoksa hem de dosya önbellekte yoksa uygulamanın çökmemesi için
          console.log("İnternet bağlantısı yok ve kaynak önbellekte bulunamadı.");
        });
      })
  );
});
