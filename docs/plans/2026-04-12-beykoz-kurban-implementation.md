# Beykoz Kurban Web Sitesi - Implementasyon Planı

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Next.js ile mobil uyumlu, SEO dostu Beykoz Kurban web sitesi geliştirmek

**Architecture:** Single-page uygulama, JSON tabanlı içerik yönetimi, statik export, Tailwind CSS ile responsive tasarım

**Tech Stack:** Next.js 14 + React + TypeScript + Tailwind CSS + shadcn/ui + Lucide Icons

---

## Ön Hazırlık

### Task 0: Proje Başlatma

**Step 1: Next.js projesi oluştur**

```bash
cd /Users/omer/work/beykozkurban
echo "my-app" | npx shadcn@latest init --yes --template next --base-color stone
```

**Expected:** Proje klasörü oluşur, bağımlılıklar yüklenir

**Step 2: shadcn/ui bileşenlerini ekle**

```bash
cd my-app
npx shadcn add button accordion
```

**Expected:** Button ve Accordion bileşenleri `components/ui/` klasörüne eklenir

**Step 3: Lucide ikonlarını ekle**

```bash
npm install lucide-react
```

**Expected:** lucide-react paketi package.json'a eklenir

---

## Bölüm 1: Temel Yapı

### Task 1: TypeScript Tipleri

**Files:**
- Create: `app/types/config.ts`

**Step 1: Config tipini oluştur**

```typescript
export interface SiteConfig {
  site: {
    title: string;
    description: string;
    keywords: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    address: string;
    mapsUrl: string;
  };
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  products: Product[];
  features: Feature[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faq: FAQ[];
}

export interface Product {
  id: string;
  type: string;
  price: string;
  image: string;
  features: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
```

**Step 2: Commit**

```bash
git add app/types/config.ts
git commit -m "feat: add TypeScript types for config"
```

---

### Task 2: JSON Config Dosyası

**Files:**
- Create: `public/data/config.json`

**Step 1: Config JSON'u oluştur**

```json
{
  "site": {
    "title": "Beykoz Kurban",
    "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti. Hijyenik koşullarda, profesyonel ekiple kurban kesimi.",
    "keywords": "beykoz kurban, kurban kesim, kurbanlık, istanbul kurban, kurban bayramı"
  },
  "contact": {
    "phone": "05XX XXX XX XX",
    "whatsapp": "905XXXXXXXXX",
    "address": "Beykoz, İstanbul",
    "mapsUrl": "https://maps.google.com/?q=Beykoz,Istanbul"
  },
  "workingHours": {
    "weekdays": "08:00 - 19:00",
    "weekend": "08:00 - 19:00"
  },
  "products": [
    {
      "id": "buyukbas-2026",
      "type": "Büyükbaş Kurban",
      "price": "35.000 ₺",
      "image": "/images/buyukbas.jpg",
      "features": ["7 Hisse", "Aynı Gün Teslim", "Vakumlu Paketleme", "Profesyonel Kesim"]
    },
    {
      "id": "kucukbas-2026",
      "type": "Küçükbaş Kurban",
      "price": "8.000 ₺",
      "image": "/images/kucukbas.jpg",
      "features": ["Tam Hisse", "Aynı Gün Teslim", "Vakumlu Paketleme", "Hijyenik Ortam"]
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
      "comment": "Çok profesyonel bir hizmet, herkese tavsiye ederim. Kurbanımın kesimini yerinde izledim.",
      "rating": 5
    },
    {
      "name": "Fatma K.",
      "comment": "Etler tertemiz, gramajlı ve vakumlu şekilde geldi. Çok memnun kaldım.",
      "rating": 5
    },
    {
      "name": "Mehmet B.",
      "comment": "Vekâlet verdiğim andan itibaren her aşamadan bilgilendirildim. Güven veren bir hizmet.",
      "rating": 5
    }
  ],
  "faq": [
    {
      "question": "Kurbanlık seçimi nasıl yapılıyor?",
      "answer": "Bayramdan önce tesisimizi ziyaret ederek canlı kurbanlıklarımızı görebilirsiniz. Uzman ekibimiz size en uygun kurbanlığı seçmenizde yardımcı olur."
    },
    {
      "question": "Etler nasıl paketleniyor?",
      "answer": "Kıyma, kuşbaşı, lop et, incik ve but olarak ayrı ayrı vakumlu paketleme yapıyoruz. Her paket üzerine isim etiketi yapıştırıyoruz."
    },
    {
      "question": "Kesim günü ne zaman yapılıyor?",
      "answer": "Kurban Bayramı'nın 1. günü sabah namazından itibaren kesimlere başlıyoruz. Kayıt sırasına göre kesim yapılıyor."
    },
    {
      "question": "Teslimat nasıl oluyor?",
      "answer": "Kesim yapıldıktan sonra aynı gün içinde soğuk hava frigolu araçlarımızla adresinize teslimat yapıyoruz."
    }
  ]
}
```

**Step 2: Commit**

```bash
git add public/data/config.json
git commit -m "feat: add config.json with site data"
```

---

### Task 3: Config Hook

**Files:**
- Create: `app/hooks/useConfig.ts`

**Step 1: Hook'u oluştur**

```typescript
'use client';

import { useState, useEffect } from 'react';
import { SiteConfig } from '../types/config';

export function useConfig() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/data/config.json');
        if (!response.ok) {
          throw new Error('Config yüklenemedi');
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  return { config, loading, error };
}
```

**Step 2: Commit**

```bash
git add app/hooks/useConfig.ts
git commit -m "feat: add useConfig hook for loading site data"
```

---

### Task 4: Global CSS ve Tailwind Config

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

**Step 1: globals.css güncelle**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-green: #2D5A3D;
  --light-green: #4A7C59;
  --cream: #F5F5DC;
  --gold: #D4AF37;
  --whatsapp: #25D366;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  html {
    scroll-behavior: smooth;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 2: tailwind.config.ts güncelle**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))"
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			green: {
  				primary: '#2D5A3D',
  				light: '#4A7C59',
  			},
  			gold: '#D4AF37',
  			whatsapp: '#25D366',
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

**Step 3: Commit**

```bash
git add app/globals.css tailwind.config.ts
git commit -m "feat: update styles with custom colors and theme"
```

---

## Bölüm 2: Layout ve SEO

### Task 5: Layout ve Metadata

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Layout'u güncelle**

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
  description: "Beykoz'da İslami usullere uygun kurban kesim hizmeti. Hijyenik koşullarda, profesyonel ekiple kurban kesimi. WhatsApp'tan bilgi alın.",
  keywords: "beykoz kurban, kurban kesim, kurbanlık, istanbul kurban, kurban bayramı",
  openGraph: {
    title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
    description: "Beykoz'da İslami usullere uygun kurban kesim hizmeti.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update layout with SEO metadata"
```

---

## Bölüm 3: Bileşenler

### Task 6: WhatsApp Button Bileşeni

**Files:**
- Create: `app/components/WhatsAppButton.tsx`

**Step 1: Bileşeni oluştur**

```typescript
'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({ 
  phone, 
  message = "Merhaba, kurban hakkında bilgi almak istiyorum.",
  className = "",
  children
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${className}`}
    >
      <MessageCircle size={20} />
      {children || "WhatsApp'tan Yaz"}
    </button>
  );
}

export function FloatingWhatsAppButton({ phone }: { phone: string }) {
  const handleClick = () => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      aria-label="WhatsApp'tan ulaş"
    >
      <MessageCircle size={28} />
    </button>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/WhatsAppButton.tsx
git commit -m "feat: add WhatsApp button components"
```

---

### Task 7: Product Card Bileşeni

**Files:**
- Create: `app/components/ProductCard.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Product } from '../types/config';
import { WhatsAppButton } from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.type}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2C3E50] font-bold py-2 px-4 rounded-lg shadow-md">
          {product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{product.type}</h3>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <Check size={18} className="text-green-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <WhatsAppButton 
          phone={whatsappNumber}
          message={`Merhaba, ${product.type} hakkında bilgi almak istiyorum.`}
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/ProductCard.tsx
git commit -m "feat: add ProductCard component"
```

---

### Task 8: Feature Card Bileşeni

**Files:**
- Create: `app/components/FeatureCard.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { LucideIcon } from 'lucide-react';
import { Feature } from '../types/config';
import { Mosque, Shield, Truck, Scale } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  mosque: Mosque,
  shield: Shield,
  truck: Truck,
  scale: Scale,
};

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Shield;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-green-primary/10 rounded-full flex items-center justify-center">
        <Icon size={32} className="text-green-primary" />
      </div>
      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/FeatureCard.tsx
git commit -m "feat: add FeatureCard component"
```

---

### Task 9: Process Step Bileşeni

**Files:**
- Create: `app/components/ProcessStep.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { ProcessStep as ProcessStepType } from '../types/config';

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
          {step.step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-green-primary/30 mt-2" />
        )}
      </div>
      <div className="pt-2">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-1">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/ProcessStep.tsx
git commit -m "feat: add ProcessStep component"
```

---

### Task 10: Testimonial Card Bileşeni

**Files:**
- Create: `app/components/TestimonialCard.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Star, User } from 'lucide-react';
import { Testimonial } from '../types/config';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-primary/10 rounded-full flex items-center justify-center">
          <User size={20} className="text-green-primary" />
        </div>
        <span className="font-semibold text-[#2C3E50]">{testimonial.name}</span>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/TestimonialCard.tsx
git commit -m "feat: add TestimonialCard component"
```

---

## Bölüm 4: Section Bileşenleri

### Task 11: Header Section

**Files:**
- Create: `app/sections/Header.tsx`

**Step 1: Bileşeni oluştur**

```typescript
'use client';

import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface HeaderProps {
  phone: string;
  whatsapp: string;
}

export function Header({ phone, whatsapp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-green-primary">
              Beykoz Kurban
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-primary transition-colors">
              Kurbanlıklar
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-green-primary transition-colors">
              Hizmetlerimiz
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-primary transition-colors">
              S.S.S.
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-primary transition-colors">
              İletişim
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-green-primary hover:text-green-light font-semibold transition-colors"
            >
              <Phone size={18} />
              {phone}
            </a>
            <WhatsAppButton phone={whatsapp} className="py-2 px-4 text-sm">
              WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-green-primary">
                Kurbanlıklar
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-green-primary">
                Hizmetlerimiz
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-green-primary">
                S.S.S.
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-primary">
                İletişim
              </button>
              <div className="pt-4 border-t flex flex-col gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-green-primary font-semibold">
                  <Phone size={18} />
                  {phone}
                </a>
                <WhatsAppButton phone={whatsapp} className="justify-center">
                  WhatsApp'tan Yaz
                </WhatsAppButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Header.tsx
git commit -m "feat: add Header section with mobile menu"
```

---

### Task 12: Hero Section

**Files:**
- Create: `app/sections/Hero.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Phone, Clock, Shield, Truck } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface HeroProps {
  phone: string;
  whatsapp: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Hero({ phone, whatsapp, workingHours }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-primary via-green-light to-[#3d7a52]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2di0yaC00djJoNHptMC02di00aC00djRoNHptLTYgNnYtMmgtNHYyaDR6bTAtNnYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Beykoz&apos;da Güvenilir<br />
          <span className="text-[#D4AF37]">Kurban Hizmeti</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          İslami usullere uygun, hijyenik koşullarda kurban kesim hizmeti.
          <br className="hidden md:block" />
          Profesyonel ekibimizle yanınızdayız.
        </p>

        {/* Working Hours Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
          <Clock size={18} />
          <span>Çalışma Saatlerimiz: {workingHours.weekdays}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <WhatsAppButton phone={whatsapp} className="text-lg py-4 px-8">
            WhatsApp&apos;tan Bilgi Al
          </WhatsAppButton>
          <a 
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 bg-white text-green-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            <Phone size={20} />
            Bizi Arayın
          </a>
        </div>

        {/* Mini Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Shield, text: "İslami Usullere Uygun" },
            { icon: Truck, text: "Aynı Gün Teslimat" },
            { icon: Clock, text: "Hızlı Hizmet" },
            { icon: Shield, text: "Hijyenik Ortam" },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <item.icon size={24} className="mx-auto mb-2" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Hero.tsx
git commit -m "feat: add Hero section with CTA buttons"
```

---

### Task 13: Products Section

**Files:**
- Create: `app/sections/Products.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Product } from '../types/config';
import { ProductCard } from '../components/ProductCard';

interface ProductsProps {
  products: Product[];
  whatsapp: string;
}

export function Products({ products, whatsapp }: ProductsProps) {
  return (
    <section id="products" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            2026 Kurbanlık Fiyatları
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hijyenik koşullarda, İslami usullere uygun kesim hizmeti.
            Fiyatlarımıza kesim, parçalama ve paketleme dahildir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} whatsappNumber={whatsapp} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Products.tsx
git commit -m "feat: add Products section"
```

---

### Task 14: Features Section

**Files:**
- Create: `app/sections/Features.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Feature } from '../types/config';
import { FeatureCard } from '../components/FeatureCard';

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Neden Beykoz Kurban?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yılların tecrübesiyle, İslami usullere uygun ve hijyenik koşullarda 
            kurban kesim hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Features.tsx
git commit -m "feat: add Features section"
```

---

### Task 15: Process Section

**Files:**
- Create: `app/sections/Process.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { ProcessStep as ProcessStepType } from '../types/config';
import { ProcessStep } from '../components/ProcessStep';

interface ProcessProps {
  steps: ProcessStepType[];
}

export function Process({ steps }: ProcessProps) {
  return (
    <section id="process" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            4 Adımda Kurban
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kurban ibadetinizde vekaletinizi verin, gerisini bize bırakın.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.step} 
              step={step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Process.tsx
git commit -m "feat: add Process section"
```

---

### Task 16: Testimonials Section

**Files:**
- Create: `app/sections/Testimonials.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Testimonial } from '../types/config';
import { TestimonialCard } from '../components/TestimonialCard';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yıllardır bizi tercih eden müşterilerimizin deneyimleri.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Testimonials.tsx
git commit -m "feat: add Testimonials section"
```

---

### Task 17: FAQ Section

**Files:**
- Create: `app/sections/FAQ.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { FAQ as FAQType } from '../types/config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: FAQType[];
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section id="faq" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-600">
            Kurban hizmetimiz hakkında merak edilenler.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#2C3E50] hover:text-green-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/FAQ.tsx
git commit -m "feat: add FAQ section with accordion"
```

---

### Task 18: Contact Section

**Files:**
- Create: `app/sections/Contact.tsx`

**Step 1: Bileşeni oluştur**

```typescript
import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface ContactProps {
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Contact({ phone, whatsapp, address, mapsUrl, workingHours }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-gray-600">
            Sorularınız için bizi arayabilir veya WhatsApp&apos;tan yazabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#F5F5DC] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50]">Telefon</h3>
                  <a href={`tel:${phone}`} className="text-green-primary hover:text-green-light text-lg font-semibold">
                    {phone}
                  </a>
                </div>
              </div>
              <WhatsAppButton phone={whatsapp} className="w-full justify-center">
                WhatsApp&apos;tan Yaz
              </WhatsAppButton>
            </div>

            <div className="bg-[#F5F5DC] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Adres</h3>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5DC] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Hafta içi: {workingHours.weekdays}</p>
                  <p className="text-gray-600">Hafta sonu: {workingHours.weekend}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 md:h-auto bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Contact.tsx
git commit -m "feat: add Contact section with map"
```

---

### Task 19: Footer Section

**Files:**
- Create: `app/sections/Footer.tsx`

**Step 1: Bileşeni oluştur**

```typescript
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Beykoz Kurban</h3>
            <p className="text-gray-400 text-sm">
              İslami usullere uygun kurban kesim hizmeti
            </p>
          </div>
          
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Beykoz Kurban. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add app/sections/Footer.tsx
git commit -m "feat: add Footer section"
```

---

## Bölüm 5: Ana Sayfa

### Task 20: Main Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Ana sayfayı oluştur**

```typescript
'use client';

import { useConfig } from './hooks/useConfig';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Products } from './sections/Products';
import { Features } from './sections/Features';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';

export default function Home() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-primary" />
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Hata</h1>
          <p className="text-gray-600">Sayfa yüklenirken bir sorun oluştu.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header 
        phone={config.contact.phone} 
        whatsapp={config.contact.whatsapp} 
      />
      
      <Hero 
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
        workingHours={config.workingHours}
      />
      
      <Products 
        products={config.products}
        whatsapp={config.contact.whatsapp}
      />
      
      <Features features={config.features} />
      
      <Process steps={config.process} />
      
      <Testimonials testimonials={config.testimonials} />
      
      <FAQ faqs={config.faq} />
      
      <Contact 
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
        address={config.contact.address}
        mapsUrl={config.contact.mapsUrl}
        workingHours={config.workingHours}
      />
      
      <Footer />
      
      <FloatingWhatsAppButton phone={config.contact.whatsapp} />
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add main page with all sections"
```

---

## Bölüm 6: Build ve Export

### Task 21: Next.js Config

**Files:**
- Modify: `next.config.js`

**Step 1: Config'i güncelle**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

**Step 2: Commit**

```bash
git add next.config.js
git commit -m "feat: configure static export"
```

---

### Task 22: Build Test

**Step 1: Build al**

```bash
npm run build
```

**Expected:** Build başarılı olur, `dist/` klasörü oluşur

**Step 2: Commit**

```bash
git add .
git commit -m "build: successful static export"
```

---

## Son Kontrol Listesi

- [x] Next.js projesi oluşturuldu
- [x] shadcn/ui bileşenleri eklendi
- [x] TypeScript tipleri tanımlandı
- [x] JSON config dosyası oluşturuldu
- [x] useConfig hook'u yazıldı
- [x] Tüm UI bileşenleri oluşturuldu
- [x] Tüm section'lar tamamlandı
- [x] Ana sayfa entegre edildi
- [x] Statik export yapılandırıldı
- [x] Build başarılı

---

## Dağıtım

Site `dist/` klasöründe statik dosyalar olarak hazır. Şu platformlara yüklenebilir:
- Vercel
- Netlify
- GitHub Pages
- Herhangi bir statik hosting

**Not:** Resimler `public/images/` klasörüne eklenmeli:
- `buyukbas.jpg`
- `kucukbas.jpg`
- `hero-bg.jpg` (opsiyonel)
