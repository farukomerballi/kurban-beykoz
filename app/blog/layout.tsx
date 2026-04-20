import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Beykoz Kurban Kesim Hizmeti",
  description: "Beykoz'da kurban kesimi, kurbanlık fiyatları, İslami kurban kesim rehberleri ve daha fazlası. Kurban hakkında bilmeniz gereken her şey.",
  openGraph: {
    title: "Blog — Beykoz Kurban Kesim Hizmeti",
    description: "Kurban kesimi, kurbanlık fiyatları ve İslami kurban rehberleri.",
    url: "https://kurban-beykoz.com/blog",
    siteName: "Beykoz Kurban Kesim Hizmeti",
    locale: "tr_TR",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
