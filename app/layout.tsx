import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
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
  title: "Beykoz Kurban | İslami Usullere Uygun Kurban Kesim Hizmeti",
  description: "Beykoz'da İslami usullere uygun kurban kesim hizmeti. Hijyenik koşullarda, profesyonel ekiple kurban kesimi. WhatsApp'tan bilgi alın.",
  keywords: "beykoz kurban, kurban kesim, kurbanlık, istanbul kurban, kurban bayramı",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
      <body className={`${montserrat.variable} ${nunito.variable} font-sans`}>{children}</body>
    </html>
  );
}
