import { WhatsAppButton } from '../components/WhatsAppButton';
import Image from 'next/image';
import { Moon, Hand } from 'lucide-react';

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            2026 Kurbanlık Fiyatları
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hijyenik koşullarda, İslami usullere uygun kesim hizmeti.
            Fiyatlarımıza kesim, parçalama ve paketleme dahildir.
          </p>
        </div>

        {/* Kurbanlık Kartları - Yan Yana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {kurbanliklar.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl">
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
                <WhatsAppButton phone={whatsapp} className="w-full justify-center">
                  WhatsApp&apos;tan Bilgi Al
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
