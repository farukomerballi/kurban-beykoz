# Beykoz Kurban Web Sitesi - Tasarım Dokümanı

> **Tarih:** 2026-04-12  
> **Proje:** Beykoz Kurban Web Sitesi  
> **Tasarım:** Modern Doğa Teması  
> **Teknoloji:** Next.js + React + TypeScript + Tailwind CSS

---

## 1. Proje Özeti

**Hedef:** Beykoz bölgesi için Kurban Bayramı'nda kurban kesim hizmeti sunan, mobil uyumlu, SEO dostu bir web sitesi.

**Kullanım Süresi:** 2 ay (Kurban Bayramı dönemi)

**Ana Özellikler:**
- JSON tabanlı içerik yönetimi
- Mobil öncelikli responsive tasarım
- WhatsApp entegrasyonu
- SEO optimizasyonu
- Statik site export (hızlı yükleme)

---

## 2. JSON Veri Yapısı

**Dosya:** `public/data/config.json`

```json
{
  "site": {
    "title": "Beykoz Kurban",
    "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti",
    "keywords": "beykoz kurban, kurban kesim, kurbanlık, istanbul kurban"
  },
  "contact": {
    "phone": "05XX XXX XX XX",
    "whatsapp": "905XXXXXXXXX",
    "address": "Beykoz, İstanbul",
    "mapsUrl": "https://maps.google.com/..."
  },
  "workingHours": {
    "weekdays": "08:00 - 19:00",
    "weekend": "08:00 - 19:00"
  },
  "products": [
    {
      "id": "buyukbas-2026",
      "type": "Büyükbaş",
      "price": "35.000 ₺",
      "image": "/images/buyukbas.jpg",
      "features": ["7 Hisse", "Aynı Gün Teslim", "Vakumlu Paketleme"]
    },
    {
      "id": "kucukbas-2026",
      "type": "Küçükbaş",
      "price": "8.000 ₺",
      "image": "/images/kucukbas.jpg",
      "features": ["Tam Hisse", "Aynı Gün Teslim", "Vakumlu Paketleme"]
    }
  ],
  "features": [
    {
      "icon": "mosque",
      "title": "İslami Usullere Uygun",
      "description": "Kurbanınızı size vekâleten ibadet hassasiyeti ile tüm fıkıh kurallarına riayet ederek kesiyoruz."
    },
    {
      "icon": "shield",
      "title": "Hijyenik & Güvenli",
      "description": "Yüksek hijyen standartlarında, modern tesislerde kesim yapıyoruz."
    },
    {
      "icon": "truck",
      "title": "Aynı Gün Teslimat",
      "description": "Profesyonel kasap kadrosu ile kesimden hemen sonra teslimat."
    },
    {
      "icon": "scale",
      "title": "Hassas Hisse Payı",
      "description": "Elektronik tartılar ile eşit ve adil hisseleme."
    }
  ],
  "process": [
    { "step": 1, "title": "Kayıt", "description": "Hissenizi ayırtmak için iletişime geçin" },
    { "step": 2, "title": "Seçim", "description": "Kurbanlığınızı birlikte seçelim" },
    { "step": 3, "title": "Kesim", "description": "İslami usullere göre kesim" },
    { "step": 4, "title": "Teslimat", "description": "Aynı gün hijyenik teslimat" }
  ],
  "testimonials": [
    {
      "name": "Ahmet Y.",
      "comment": "Çok profesyonel bir hizmet, herkese tavsiye ederim.",
      "rating": 5
    }
  ],
  "faq": [
    {
      "question": "Kurbanlık seçimi nasıl yapılıyor?",
      "answer": "Bayramdan önce tesisimizi ziyaret ederek canlı kurbanlıklarımızı görebilirsiniz."
    },
    {
      "question": "Etler nasıl paketleniyor?",
      "answer": "Kıyma, kuşbaşı, lop et olarak ayrı ayrı vakumlu paketleme yapıyoruz."
    }
  ]
}
```

---

## 3. Sayfa Yapısı (Single Page)

### 3.1 Header (Yapışkan)
- Logo: "Beykoz Kurban" (sol)
- Menü: Anasayfa, Hakkımızda, İletişim (orta)
- CTA Butonları: Telefon, WhatsApp (sağ)
- Mobil: Hamburger menü

### 3.2 Hero Section
- **Arka Plan:** Tam ekran yeşil çayır/orman görseli (gradient overlay)
- **Başlık:** "Beykoz'da Güvenilir Kurban Hizmeti"
- **Alt Başlık:** "İslami usullere uygun, hijyenik koşullarda kurban kesim hizmeti"
- **CTA Butonları:** 
  - "WhatsApp'tan Yaz" (yeşil, birincil)
  - "Bizi Arayın" (beyaz/şeffaf, ikincil)
- **Özellik İkonları:** 4 ikonlu mini özellik satırı

### 3.3 Kurbanlıklar Section
- **Başlık:** "2026 Kurbanlık Fiyatları"
- **Kartlar:** 2 sütun (mobilde 1 sütun)
  - Resim (üzerinde fiyat badge)
  - Ürün tipi
  - Özellik listesi
  - WhatsApp butonu

### 3.4 Neden Biz? Section
- **Başlık:** "Neden Beykoz Kurban?"
- **Grid:** 4 kart (mobilde 2x2)
  - İkon
  - Başlık
  - Açıklama

### 3.5 Süreç Section
- **Başlık:** "4 Adımda Kurban"
- **Görsel:** Yatay timeline (mobilde dikey)
- **Adımlar:** 1-2-3-4 numaralı adımlar

### 3.6 Müşteri Yorumları Section
- **Başlık:** "Müşterilerimiz Ne Diyor?"
- **Slider:** Otomatik dönen yorum kartları
- **Kart:** İsim, yorum, yıldız derecesi

### 3.7 SSS Section
- **Başlık:** "Sıkça Sorulan Sorular"
- **Accordion:** Açılır/kapanır soru-cevaplar

### 3.8 İletişim Section
- **Başlık:** "Bize Ulaşın"
- **Sol:** İletişim bilgileri (telefon, adres, çalışma saatleri)
- **Sağ:** Google Maps embed

### 3.9 Footer
- Logo
- Kısa açıklama
- Sosyal medya ikonları
- Telif hakkı metni

---

## 4. Görsel Tasarım

### 4.1 Renk Paleti
| Renk | Hex | Kullanım |
|------|-----|----------|
| Ana Yeşil | #2D5A3D | Birincil renk, butonlar, vurgular |
| Açık Yeşil | #4A7C59 | Hover durumları, ikincil vurgular |
| Krem | #F5F5DC | Arka plan, kart arka planları |
| Beyaz | #FFFFFF | Metin, kart arka planları |
| Koyu Metin | #2C3E50 | Başlıklar, ana metin |
| Gri Metin | #5D6D7E | İkincil metin |
| Altın Sarısı | #D4AF37 | Fiyat badge'leri, özel vurgular |

### 4.2 Tipografi
- **Başlıklar:** Inter, 600-700 weight
- **Metin:** Inter, 400-500 weight
- **Boyutlar:**
  - H1: 48px (mobil: 32px)
  - H2: 36px (mobil: 24px)
  - H3: 24px (mobil: 20px)
  - Body: 16px
  - Small: 14px

### 4.3 Bileşenler

#### Butonlar
- **Birincil:** Yeşil arka plan, beyaz metin, yuvarlak köşeler (8px)
- **İkincil:** Şeffaf arka plan, yeşil border, yeşil metin
- **WhatsApp:** WhatsApp yeşili (#25D366), beyaz ikon + metin

#### Kartlar
- Beyaz arka plan
- Yumuşak gölge (box-shadow: 0 4px 6px rgba(0,0,0,0.1))
- Yuvarlak köşeler (12px)
- Hover: Hafif yukarı kalkma + gölge artışı

#### Fiyat Badge
- Altın sarısı arka plan (#D4AF37)
- Koyu metin
- Yuvarlak köşeler
- Resmin köşesinde pozisyon

---

## 5. Teknik Gereksinimler

### 5.1 Teknoloji Stack
- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS
- **UI Kütüphanesi:** shadcn/ui (accordion, button)
- **İkonlar:** Lucide React
- **Animasyon:** Framer Motion (opsiyonel)

### 5.2 SEO Optimizasyonu
- Meta başlık ve açıklamalar
- Open Graph tag'leri
- Structured data (JSON-LD)
- Semantic HTML
- Alt tag'li görseller
- Hızlı yükleme (statik export)

### 5.3 Performans
- Statik site export (`output: 'export'`)
- Resim optimizasyonu (next/image)
- Lazy loading
- Minified CSS/JS

### 5.4 Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 6. Dosya Yapısı

```
my-app/
├── app/
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── Features.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── WhatsAppButton.tsx
│   ├── hooks/
│   │   └── useConfig.ts
│   ├── types/
│   │   └── config.ts
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── data/
│   │   └── config.json
│   └── images/
│       ├── buyukbas.jpg
│       ├── kucukbas.jpg
│       └── hero-bg.jpg
├── components/
│   └── ui/           # shadcn/ui bileşenleri
├── lib/
│   └── utils.ts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 7. Onay Durumu

- [x] JSON veri yapısı onaylandı
- [x] Sayfa yapısı onaylandı
- [x] Renk paleti onaylandı
- [x] Teknoloji stack belirlendi

**Sonraki Adım:** Implementasyon planı oluşturma ve geliştirmeye başlama

---

## 8. Notlar

- Tüm içerikler JSON'dan çekilecek
- Resimler `public/images/` klasörüne konulacak
- Telefon ve WhatsApp numaraları JSON'dan gelecek
- Site 2 aylık kullanım için optimize edilecek
- Değişiklikler JSON dosyası üzerinden yapılabilir
