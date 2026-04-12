import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
  description: "Beykoz'da İslami usullere uygun kurban kesim hizmeti. Hijyenik koşullarda, profesyonel ekiple kurban kesimi. WhatsApp'tan bilgi alın.",
  keywords: "beykoz kurban, kurban kesim, kurbanlık, istanbul kurban, kurban bayramı",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
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
