import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beykoz Kurban Kesim Hizmeti | İslami Usullere Uygun | 2026",
  description: "Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti. Büyükbaş, küçükbaş, adak, akika kurbanları. Aynı gün teslimat. Hemen kayıt olun!",
  keywords: "beykoz kurban, beykoz kurban kesim, istanbul kurban, kurban bayramı 2026, kurbanlık fiyatları, adak kurbanı beykoz, akika kurbanı beykoz, İslami kurban kesim, beykoz kurbanlık, kurban hisse fiyatları, kurban-beykoz",
  authors: [{ name: "Beykoz Kurban Organizasyonu" }],
  creator: "Beykoz Kurban Organizasyonu",
  publisher: "Beykoz Kurban Organizasyonu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.kurban-beykoz.com/",
    languages: {
      'tr': 'https://www.kurban-beykoz.com/',
    },
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Beykoz Kurban Kesim Hizmeti | İslami Usullere Uygun | 2026",
    description: "Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti. Büyükbaş, küçükbaş, adak, akika kurbanları. Aynı gün teslimat garantisi.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.kurban-beykoz.com",
    siteName: "Beykoz Kurban Kesim Hizmeti",
    images: [
      {
        url: "https://www.kurban-beykoz.com/images/logo.png",
        width: 873,
        height: 344,
        alt: "Beykoz Kurban Organizasyonu - İslami Usullere Uygun Kurban Kesim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beykoz Kurban Kesim Hizmeti | İslami Usullere Uygun | 2026",
    description: "Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti. Aynı gün teslimat garantisi.",
    images: ["https://www.kurban-beykoz.com/images/logo.png"],
  },
  // Google Search Console doğrulama kodu eklenecek
  // verification: {
  //   google: "GERÇEK_DOĞRULAMA_KODU_BURAYA",
  // },
};

// Yapısal veri (Structured Data) - JSON-LD
const structuredData = {
  // 1. WebSite schema - arama motoru tanıtımı
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Beykoz Kurban Kesim Hizmeti",
    "alternateName": "Kurban Beykoz",
    "url": "https://www.kurban-beykoz.com",
    "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti. 20+ yıllık tecrübe, hijyenik koşullar, aynı gün teslimat.",
    "inLanguage": "tr-TR",
  },
  // 2. LocalBusiness schema - yerel işletme bilgileri
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.kurban-beykoz.com/#business",
    "name": "Beykoz Kurban Organizasyonu",
    "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti. 20+ yıllık tecrübe, hijyenik koşullar, aynı gün teslimat. Büyükbaş, küçükbaş, adak, akika, şifa, şükür ve nafile kurbanı kesim hizmeti.",
    "url": "https://www.kurban-beykoz.com",
    "telephone": "+90-542-591-34-51",
    "email": "info@kurban-beykoz.com",
    "image": "https://www.kurban-beykoz.com/images/logo.png",
    "logo": "https://www.kurban-beykoz.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beykoz",
      "addressLocality": "Beykoz",
      "addressRegion": "İstanbul",
      "postalCode": "34800",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.1228",
      "longitude": "29.0863"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "İstanbul",
        "sameAs": "https://tr.wikipedia.org/wiki/%C4%B0stanbul"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Beykoz",
        "sameAs": "https://tr.wikipedia.org/wiki/Beykoz"
      }
    ],
    "openingHours": ["Mo-Su 08:00-19:00"],
    "priceRange": "₺₺",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Nakit, Havale, EFT",
    "sameAs": [
      "https://wa.me/905425913451"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kurban Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Büyükbaş Kurban Kesim Hizmeti",
            "description": "7 hisseli büyükbaş kurban kesim hizmeti. İslami usullere uygun, hijyenik ortamda, aynı gün teslimat.",
            "areaServed": "Beykoz, İstanbul"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Küçükbaş Kurban Kesim Hizmeti",
            "description": "Bireysel küçükbaş (koyun, keçi) kurban kesim hizmeti. Her bütçeye uygun seçenekler.",
            "areaServed": "Beykoz, İstanbul"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Adak Kurbanı Kesim Hizmeti",
            "description": "Yıl içi adak kurbanı kesim ve dağıtım hizmeti. İhtiyaç sahiplerine ulaştırılır.",
            "areaServed": "Beykoz, İstanbul"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Akika Kurbanı Kesim Hizmeti",
            "description": "Yeni doğan bebek için akika kurbanı kesim hizmeti. Sünnet-i seniyyeye uygun.",
            "areaServed": "Beykoz, İstanbul"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Şifa ve Şükür Kurbanı",
            "description": "Şifa, şükür ve nafile kurbanı kesim hizmeti. Dilediğiniz tarihte kestirme imkânı.",
            "areaServed": "Beykoz, İstanbul"
          }
        }
      ]
    }
  },
  // 3. FAQPage schema - sıkça sorulan sorular
  faqPage: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Beykoz'da kurban kaydı ne zaman yapılmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bayram kurbanları için en geç bayramdan 1 hafta öncesine kadar kayıt yaptırmanızı öneririz. Erken kayıt yaptıranlar 1. gün teslim önceliğinden yararlanır. Yıl içi kurbanlar (adak, akika vb.) için herhangi bir tarihte kayıt yapılabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Beykoz'da kurban kesiminde bulunabilir miyim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm müşterilerimiz kesim sırasında tesisimizde bulunabilir. Adres ve kesim saati bilgisi kayıt sırasında tarafınıza iletilir. İstemeyenler için kesimi fotoğraf ve kısa video ile belgelendirip paylaşıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Büyükbaş kurbanda hisse nasıl işler?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bir büyükbaş hayvan en fazla 7 kişi arasında paylaşılabilir. Her hissedar kurban ibadetinden pay almış olur. Hisse bedelini ödeyerek kaydınızı yaptırabilirsiniz; eşit paylaşım garantisi verilmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Beykoz kurban kesim hizmetinde ödeme nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kayıt sırasında peşin veya havale/EFT yoluyla ödeme kabul edilmektedir. Kapıda nakit ödeme de mümkündür. Detaylı ödeme bilgileri için lütfen bizi arayın."
        }
      },
      {
        "@type": "Question",
        "name": "Yurt dışından Beykoz'da kurban kestirmek mümkün mü?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, yurt dışında yaşayan vatandaşlarımız telefon veya WhatsApp üzerinden kolayca kayıt yaptırabilir ve havale ile ödeme yapabilir. Kesim belgesi ve fotoğraflar dijital olarak iletilir."
        }
      }
    ]
  },
  // 4. BreadcrumbList schema
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.kurban-beykoz.com/"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D6A65" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Beykoz, İstanbul" />
        <link rel="icon" href="/images/logo.webp" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D2ZS8E6NWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D2ZS8E6NWC');
          `}
        </Script>

        {/* Yapısal Veriler - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.faqPage)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.breadcrumb)
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${nunito.variable} font-sans`}>{children}</body>
    </html>
  );
}
