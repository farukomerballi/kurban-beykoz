import Image from 'next/image';
import { Moon } from 'lucide-react';

interface ProductsProps {
  whatsapp: string;
}

export function Products({ whatsapp }: ProductsProps) {
  const kurbanliklar = [
    {
      image: "/images/buyukbas.png",
      title: "Büyükbaş Kurbanlık",
      alt: "Büyükbaş Kurbanlık"
    },
    {
      image: "/images/kucukbas.png",
      title: "Küçükbaş Kurbanlık",
      alt: "Küçükbaş Kurbanlık"
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#FBF6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#253D10] mb-4 font-[family-name:var(--font-playfair)]">
            2026 Kurbanlık Fiyatları
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hijyenik koşullarda, İslami usullere uygun kesim hizmeti.
            Fiyatlarımıza kesim, parçalama ve paketleme dahildir.
          </p>
        </div>

        {/* Kurbanlık Kartları - Yan Yana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {kurbanliklar.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#B88619]/30 hover:shadow-[0_0_30px_rgba(184,134,25,0.15)]">
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Logo overlay - sağ alt köşe */}
                <div className="absolute bottom-1 right-1 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Moon className="w-4 h-4 text-[#253D10]" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#253D10] mb-4 font-[family-name:var(--font-playfair)]">
                  {item.title}
                </h3>
                <a 
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#128C7E] transition-colors w-full"
                >
                  WhatsApp&apos;tan Bilgi Al
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
