# 🌟 LingoMaster Premium

<div align="center">

![LingoMaster Banner](public/phone-logo.png)

**Kelime öğrenmenin en akıllı ve modern yolu.**  
A1'den C1'e 5.200'den fazla kelime, doğal telaffuz ses motoru, interaktif testler, eşleştirme oyunları ve Canva tasarım standartlarında ayrıntılı performans analitiği.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

</div>

---

## 🎯 Temel Özellikler

- 📚 **Kapsamlı CEFR Kelime Havuzu:** A1, A2, B1, B2 ve C1 seviyelerinde özenle sınıflandırılmış 5.200'den fazla İngilizce kelime, Türkçe karşılıkları ve örnek cümleler.
- 🔊 **Gelişmiş Telaffuz ve Ses Motoru:** Web Speech API entegrasyonu ile kadın ve erkek ses tonları, hız/perde ayarlamaları ve tek dokunuşla dinleme.
- 🃏 **Akıllı Kelime Kartları (Flashcards):** Kaydırarak veya tıklayarak öğrenilen kelimeleri işaretleme, aralıklı tekrar sistemi.
- ⚡ **İnteraktif Pratik Modları:**
  - **Alıştırma (Quiz):** 4 seçenekli çoktan seçmeli kelime testleri.
  - **Pratik (Eşleştirme):** Süreye karşı İngilizce-Türkçe kelime çiftlerini eşleştirme oyunu.
- 📊 **Gelişmiş Analitik ve İstatistik Paneli:**
  - Öğrenme durumu ve CEFR seviye dağılımı (Dinamik pasta grafikleri).
  - Son 7 günlük öğrenme ilerleme trendi.
  - Alıştırma ve Pratik performans geçmişi, oturum bazlı başarı yüzdesi.
- 🎨 **Canva & Figma Standartlarında Premium Tasarım:**
  - Göz yormayan, dingin gece mavisi (frosted midnight glass) estetiği.
  - Uygulama vurgu rengi (accent color) ile tam senkron çalışan rozetler ve grafik logoları.
  - Karanlık (Dark) ve Aydınlık (Light) tema desteği.
- 📱 **Progressive Web App (PWA):** Masaüstü ve mobil cihazlarda uygulama gibi yüklenebilme, çevrimdışı önbellekleme desteği.

---

## 🚀 Hızlı Başlangıç (Kurulum)

### Ön Koşullar
- [Node.js](https://nodejs.org/) (Sürüm 18 veya üzeri önerilir)
- [npm](https://www.npmjs.com/) (Node.js ile birlikte gelir)

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/KULLANICI_ADINIZ/lingomaster-premium.git
cd lingomaster-premium
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda `http://localhost:3000/` (veya terminalde belirtilen port) adresine gidin.

### 4. Canlı Üretim Derlemesi (Build)
```bash
npm run build
```
Derlenen optimize edilmiş statik dosyalar `dist/` klasörü altına oluşturulur.

---

## 📁 Proje Dosya Yapısı

```
lingomaster-premium/
├── dist/                   # Optimize edilmiş canlı dağıtım dosyaları (build çıktısı)
├── public/                 # Statik medya varlıkları, ikonlar, PWA manifesti
│   ├── assets/             # Görseller ve medya varlıkları
│   ├── favicon.png         # Uygulama simgesi
│   ├── manifest.json       # PWA manifest dosyası
│   ├── sw.js               # Service Worker (çevrimdışı önbellek desteği)
│   └── words.js            # Kelime veri tabanı
├── scripts/                # Senkronizasyon ve yardımcı betikler
├── src/                    # TypeScript kaynak kodları, veri modelleri ve bileşenler
├── index.html              # Ana uygulama giriş noktası ve UI şablonu
├── package.json            # Proje bağımlılıkları ve npm betikleri
├── tsconfig.json           # TypeScript yapılandırması
├── vite.config.ts          # Vite geliştirme ve derleme yapılandırması
└── README.md               # Proje dökümantasyonu
```

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** HTML5, Modern CSS3 (Glassmorphism & Flexbox/Grid), JavaScript (ESNext), TypeScript
- **Bundler:** [Vite](https://vitejs.dev/)
- **Veri Görselleştirme:** [Chart.js](https://www.chartjs.org/)
- **İkonlar:** [Lucide Icons](https://lucide.dev/)
- **Ses:** Web Speech Synthesis API
- **PWA:** Service Worker & Web App Manifest

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır.
