import Image from 'next/image';
import { Moon } from 'lucide-react';

interface ProductsProps {
  whatsapp: string;
}

export function Products({ whatsapp }: ProductsProps) {
  const kurbanliklar = [
    {
      image: '/images/buyukbas.png',
      title: 'Büyükbaş Kurbanlık',
      alt: 'Beykoz Büyükbaş Kurbanlık - 7 Hisse Seçeneği ile İslami Usule Uygun Kesim',
    },
    {
      image: '/images/kucukbas.png',
      title: 'Küçükbaş Kurbanlık',
      alt: 'Beykoz Küçükbaş Kurbanlık - Koyun ve Keçi Seçenekleri',
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-24" style={{ background: '#F9F6F1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
          >
            Kurbanlıklarımız
          </span>
        <h2
          className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
          style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
        >
          2026 Beykoz <span style={{ color: '#B91C1C' }}>Kurbanlık Fiyatları</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Beykoz'da hijyenik koşullarda, İslami usullere uygun kurban kesim hizmeti.
          Büyükbaş ve küçükbaş kurbanlık fiyatlarımıza kesim, parçalama ve paketleme dahildir.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {kurbanliklar.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden transition-all duration-300 border-[1.5px] border-transparent hover:border-[rgba(29,106,101,0.2)]"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-md">
                  <Moon className="w-4 h-4" style={{ color: '#1D6A65' }} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-extrabold mb-4"
                  style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#7F1D1D' }}
                >
                  {item.title}
                </h3>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white font-extrabold text-base py-3.5 px-8 rounded-full transition-all hover:-translate-y-0.5 w-full md:w-auto"
                  style={{
                    background: '#B91C1C',
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    boxShadow: '0 4px 20px rgba(185,28,28,0.35)',
                  }}
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
