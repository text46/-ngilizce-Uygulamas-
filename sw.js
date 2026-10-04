const CACHE_NAME = 'lingomaster-v2026-5'; // Güncelleme yapacağın zaman sondaki sayıyı artır

// 1. KURULUM: Hemen yeni versiyona geçmeyi emret
self.addEventListener('install', (event) => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([
      './',
      './index.html',
      './words.js'
    ]))
  );
});

// 2. AKTİFLEŞME: Eski önbellekleri anında temizle ve kontrolü devral
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Eski sürüm silindi:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); 
});

// 3. AĞ ÖNCELİKLİ (Network First) STRATEJİSİ
// Her açılışta önce internetten güncel kodları kontrol eder, internet yoksa (çevrimdışı) önbellekteki dosyayı açar.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // İnternet var ve başarılıysa: yeni dosyayı hem kullanıcıya göster hem önbelleğe kaydet
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // İnternet yoksa (uçak modu vs.): önbellekteki dosyayı kullan
        return caches.match(event.request);
      })
  );
});