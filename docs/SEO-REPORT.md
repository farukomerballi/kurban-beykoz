# SEO Optimizasyon Raporu — Beykoz Kurban

## 1. Mevcut Durum Analizi

### Olumlu Yönler
- Next.js App Router kullanılıyor (SSR/SSG avantajı)
- Semantic HTML yapısı mevcut (`<header>`, `<section>`, `<footer>`, `<nav>`)
- Meta title ve description tanımlı
- Open Graph meta tag'leri mevcut
- Google Analytics 4 entegre edilmiş
- Responsive tasarım
- Hızlı yükleme için optimize edilmiş görseller

### Kritik Eksiklikler
- **robots.txt** yok
- **sitemap.xml** yok
- **Schema.org (Structured Data)** yok
- **Canonical URL** tanımlı değil
- **Twitter Cards** meta tag'leri eksik
- **H1 etiketi** Hero bölümünde yok (sadece `<h2>` kullanılmış)
- **Alt metinleri** bazı görsellerde eksik veya yetersiz
- **Internal linking** yok
- **Breadcrumb** navigasyonu yok
- **FAQPage** schema markup yok (SSS bölümü için)
- **LocalBusiness** schema yok (iletişim bilgileri için)

---

## 2. Anahtar Kelime Stratejisi

### Birincil Anahtar Kelimeler (Yüksek Öncelik)
| Anahtar Kelime | Aylık Arama Hacmi | Rekabet | Öncelik |
|---|---|---|---|
| Beykoz kurban | ~1.000-2.000 | Orta | 🔴 Yüksek |
| Beykoz kurban kesim | ~500-1.000 | Düşük | 🔴 Yüksek |
| İstanbul kurban kesim | ~5.000-10.000 | Yüksek | 🟠 Orta |
| Kurban bayramı 2026 | ~10.000+ | Yüksek | 🟠 Orta |
| Kurbanlık fiyatları 2026 | ~5.000-10.000 | Yüksek | 🟠 Orta |

### İkincil Anahtar Kelimeler (Orta Öncelik)
- Beykoz kurbanlık
- Beykoz adak kurbanı
- Beykoz akika kurbanı
- Kurban kesim hizmeti Beykoz
- İslami kurban kesim Beykoz
- Kurban hisse fiyatları Beykoz
- Kurban teslimat Beykoz

### Uzun Kuyruklu Anahtar Kelimeler (Düşük Rekabet, Yüksek Dönüşüm)
- "Beykoz'da kurban kesim yapan yerler"
- "Beykoz kurban kesim ücretleri 2026"
- "Beykoz adak kurbanı kestirmek"
- "Beykoz akika kurbanı fiyatları"
- "Beykoz kurban bayramı teslimat"
- "İstanbul Beykoz kurban organizasyonu"

---

## 3. Teknik SEO İyileştirmeleri

### 3.1 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://kurban-beykoz.com/sitemap.xml
```

### 3.2 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kurban-beykoz.com/</loc>
    <lastmod>2026-04-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3.3 Schema.org Structured Data

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Beykoz Kurban Organizasyonu",
  "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti. 20+ yıllık tecrübe.",
  "url": "https://kurban-beykoz.com",
  "telephone": "+90-555-313-52-90",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Beykoz",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.1228",
    "longitude": "29.0863"
  },
  "openingHours": "Mo-Su 08:00-19:00",
  "priceRange": "₺₺",
  "image": "https://kurban-beykoz.com/images/logo.png"
}
```

#### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kurban kaydı ne zaman yapılmalıdır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bayram kurbanları için en geç bayramdan 1 hafta öncesine kadar kayıt yaptırmanızı öneririz."
      }
    }
  ]
}
```

#### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kurban Kesim Hizmeti",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Beykoz Kurban Organizasyonu"
  },
  "areaServed": {
    "@type": "City",
    "name": "Beykoz, İstanbul"
  }
}
```

### 3.4 Performans Optimizasyonu
- Görsel lazy loading (`loading="lazy"`)
- WebP formatına geçiş
- CSS/JS minification
- Critical CSS inline
- Font preloading

---

## 4. İçerik Optimizasyonu

### 4.1 Meta Etiketleri

#### Güncellenmiş Title
```
Beykoz Kurban Kesim Hizmeti | İslami Usullere Uygun | 2026
```

#### Güncellenmiş Description
```
Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti. Büyükbaş, küçükbaş, adak, akika kurbanları. Aynı gün teslimat. Hemen kayıt olun!
```

#### Keywords
```
Beykoz kurban, Beykoz kurban kesim, İstanbul kurban, kurban bayramı 2026, kurbanlık fiyatları, adak kurbanı Beykoz, akika kurbanı Beykoz, İslami kurban kesim
```

### 4.2 Heading Yapısı
```
H1: Beykoz Kurban Kesim Hizmeti — İslami Usullere Uygun
  H2: Hizmetlerimiz
    H3: Kurban (Büyükbaş)
    H3: Kurban (Küçükbaş)
    H3: Adak Kurbanı
    H3: Akika Kurbanı
  H2: Nasıl Çalışır?
  H2: Neden Bizi Seçmelisiniz?
  H2: Sıkça Sorulan Sorular
  H2: İletişim
```

### 4.3 İçerik Güncellemeleri
- Hero bölümüne anahtar kelime zengini metin ekle
- Her hizmet kartına detaylı açıklama ekle
- Blog bölümü ekle (kurban ile ilgili makaleler)
- Müşteri yorumları bölümü ekle
- Sertifikalar/belgeler bölümü ekle

---

## 5. Off-Page SEO

### 5.1 Backlink Stratejisi
- Yerel İstanbul/Beykoz rehber sitelerine kayıt
- Dini kurum siteleriyle işbirliği
- Yerel haber sitelerinde tanıtım yazıları
- Sosyal medya profilleri (optimize edilmiş)

### 5.2 Sosyal Medya
- Instagram: Kurban görselleri, müşteri yorumları
- Facebook: Yerel topluluk grupları
- WhatsApp Business: Hızlı iletişim

### 5.3 Google My Business
- İşletme profili oluştur/optimize et
- Müşteri yorumları topla
- Düzenli gönderi paylaşımı

---

## 6. Uygulama Planı

### Aşama 1: Teknik Altyapı (1-2 gün)
- [ ] robots.txt oluştur
- [ ] sitemap.xml oluştur
- [ ] Schema.org markup ekle
- [ ] Canonical URL tanımla
- [ ] Twitter Cards meta tag'leri ekle

### Aşama 2: İçerik Optimizasyonu (2-3 gün)
- [ ] Meta title/description güncelle
- [ ] H1 etiketi ekle
- [ ] Alt metinleri güncelle
- [ ] Heading yapısını düzelt
- [ ] İçerik zenginleştirme

### Aşama 3: Performans (1-2 gün)
- [ ] Görsel optimizasyonu
- [ ] Font preloading
- [ ] Lazy loading
- [ ] Core Web Vitals optimizasyonu

### Aşama 4: Off-Page (Sürekli)
- [ ] Google My Business optimize et
- [ ] Sosyal medya profilleri oluştur
- [ ] Backlink çalışması başlat
- [ ] Müşteri yorumları topla

---

## 7. Ölçüm ve Takip

### KPI'lar
- Organik trafik artışı (hedef: %50 ilk 3 ay)
- Anahtar kelime sıralamaları (hedef: İlk 10)
- Core Web Vitals skorları (hedef: Hepsi "İyi")
- Dönüşüm oranı (hedef: %3+)
- Bounce rate (hedef: <50%)

### Araçlar
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- GTmetrix
- SEMrush/Ahrefs (opsiyonel)

---

## 8. Rekabet Analizi

### Ana Rakipler
1. **Beykoz'daki diğer kurban hizmetleri**
   - Güçlü yönleri: Yerel tanınırlık
   - Zayıf yönleri: Dijital varlık, web sitesi

2. **İstanbul geneli kurban organizasyonları**
   - Güçlü yönleri: Marka bilinirliği, bütçe
   - Zayıf yönleri: Yerel hizmet, kişisel dokunuş

### Farklılaşma Stratejisi
- "Beykoz'un yerel kurban hizmeti" vurgusu
- 20+ yıllık tecrübe
- İslami usule tam uyum
- Aynı gün teslimat garantisi
- Şeffaf süreç takibi

---

## Sonuç

Beykoz Kurban web sitesi, temel SEO altyapısına sahip ancak kritik teknik eksiklikler içeriyor. Özellikle:

1. **Schema.org markup** eklenmeli
2. **robots.txt ve sitemap.xml** oluşturulmalı
3. **Meta etiketleri** optimize edilmeli
4. **Heading yapısı** düzeltilmeli
5. **Google My Business** profili oluşturulmalı

Bu değişiklikler uygulandığında, Google'da "Beykoz kurban", "Beykoz kurban kesim" gibi anahtar kelimelerde ilk sayfada çıkma olasılığı yükselecektir.
