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
  keywords: "beykoz kurban, beykoz kurban kesim, istanbul kurban, kurban bayramı 2026, kurbanlık fiyatları, adak kurbanı beykoz, akika kurbanı beykoz, İslami kurban kesim, beykoz kurbanlık, kurban hisse fiyatları",
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
    canonical: "https://www.beykozkurban.com/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
    description: "Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti. Aynı gün teslimat, hijyenik koşullar.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.beykozkurban.com",
    siteName: "Beykoz Kurban",
    images: [
      {
        url: "https://www.beykozkurban.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Beykoz Kurban Organizasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
    description: "Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti.",
    images: ["https://www.beykozkurban.com/images/logo.png"],
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
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
        <link rel="canonical" href="https://www.beykozkurban.com/" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Beykoz Kurban Organizasyonu" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Beykoz, İstanbul" />
        <meta property="og:site_name" content="Beykoz Kurban" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti" />
        <meta name="twitter:description" content="Beykoz'da İslami usullere uygun kurban kesim hizmeti. 20+ yıllık tecrübe, aynı gün teslimat." />
        <meta name="twitter:image" content="https://www.beykozkurban.com/images/logo.png" />
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
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Beykoz Kurban Organizasyonu",
              "description": "Beykoz'da İslami usullere uygun kurban kesim hizmeti. 20+ yıllık tecrübe, hijyenik koşullar, aynı gün teslimat.",
              "url": "https://www.beykozkurban.com",
              "telephone": "+90-542-591-34-51",
              "email": "info@beykozkurban.com",
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
              "openingHours": ["Mo-Su 08:00-19:00"],
              "priceRange": "₺₺",
              "image": "https://www.beykozkurban.com/images/logo.png",
              "logo": "https://www.beykozkurban.com/images/logo.png",
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
                      "name": "Büyükbaş Kurban Kesim",
                      "description": "7 hisseli büyükbaş kurban kesim hizmeti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Küçükbaş Kurban Kesim",
                      "description": "Bireysel küçükbaş kurban kesim hizmeti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Adak Kurbanı",
                      "description": "Yıl içi adak kurbanı kesim hizmeti"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Akika Kurbanı",
                      "description": "Bebek için akika kurbanı kesim hizmeti"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kurban kaydı ne zaman yapılmalıdır?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bayram kurbanları için en geç bayramdan 1 hafta öncesine kadar kayıt yaptırmanızı öneririz. Erken kayıt yaptıranlar 1. gün teslim önceliğinden yararlanır. Yıl içi kurbanlar (adak, akika vb.) için herhangi bir tarihte kayıt yapılabilir."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kurban kesiminde bulunabilir miyim?",
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
                  "name": "Ödeme nasıl yapılır?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kayıt sırasında peşin veya havale/EFT yoluyla ödeme kabul edilmektedir. Kapıda nakit ödeme de mümkündür. Detaylı ödeme bilgileri için lütfen bizi arayın."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Yurt dışından kurban kestirmek mümkün mü?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evet, yurt dışında yaşayan vatandaşlarımız telefon veya WhatsApp üzerinden kolayca kayıt yaptırabilir ve havale ile ödeme yapabilir. Kesim belgesi ve fotoğraflar dijital olarak iletilir."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${nunito.variable} font-sans`}>{children}</body>
    </html>
  );
}
