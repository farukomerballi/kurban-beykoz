# Premium Stats Section Implementation Plan

**Goal:** Hero section altına premium stats section eklemek (20+ Yıl, 5 Yıllık Paket, 60+ Personel)

**Architecture:** Yeni Stats.tsx component'i oluşturulacak, glassmorphism kartlarla 3'lü layout. Hero ve Products arasına yerleştirilecek.

**Tech Stack:** React, TypeScript, Tailwind CSS, Lucide React ikonlar

---

## Task 1: Stats Component Oluştur

**Files:**
- Create: `app/sections/Stats.tsx`

**Implementation:**

```tsx
import { Award, Package, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#B88619]/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]">
        {value}
      </div>
      <div className="text-white/80 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    {
      icon: <Award className="w-7 h-7 text-[#B88619]" />,
      value: "20+",
      label: "Yıllık Tecrübe"
    },
    {
      icon: <Package className="w-7 h-7 text-[#B88619]" />,
      value: "5 Yıllık",
      label: "Paket Hizmeti"
    },
    {
      icon: <Users className="w-7 h-7 text-[#B88619]" />,
      value: "60+",
      label: "Personel Hizmeti"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#253D10] via-[#3a5a20] to-[#2d4a15]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Commit:**
```bash
git add app/sections/Stats.tsx
git commit -m "feat: premium stats section component'i eklendi

- Glassmorphism kart tasarımı
- 3 istatistik: 20+ Yıl, 5 Yıllık Paket, 60+ Personel
- Responsive grid layout
- Hover animasyonları"
```

---

## Task 2: Page.tsx'e Stats Section Ekle

**Files:**
- Modify: `app/page.tsx:7-8` (import ekle)
- Modify: `app/page.tsx:54-55` (component ekle)

**Implementation:**

Import ekle:
```tsx
import { Stats } from './sections/Stats';
```

Hero ve Products arasına ekle:
```tsx
<Stats />
```

**Commit:**
```bash
git add app/page.tsx
git commit -m "feat: stats section anasayfaya eklendi

- Hero ve Products arasına yerleştirildi"
```

---

## Task 3: Push ve Deploy

**Command:**
```bash
git push origin main
```

**Expected:** Netlify otomatik deploy eder
