import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Service {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  featured: boolean;
}

interface Product {
  image: string;
  title: string;
  alt: string;
}

interface HizmetlerProps {
  services: Service[];
  whatsapp: string;
}

function ServiceCard({
  service,
  delayClass,
}: {
  service: Service;
  delayClass: string;
}) {
  return (
    <div
      className={`service-card relative rounded-[24px] p-6 lg:p-8 overflow-hidden cursor-default border-[1.5px] border-transparent ${delayClass}`}
      style={{
        background: service.featured
          ? 'linear-gradient(135deg, #7F1D1D, #B91C1C)'
          : '#F9F6F1',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
      }}
    >
      <span className="block text-4xl mb-4">{service.emoji}</span>
      <h3
        className="text-lg font-extrabold mb-2"
        style={{
          fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
          color: service.featured ? '#fff' : '#7F1D1D',
        }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: service.featured ? 'rgba(255,255,255,0.8)' : '#666' }}
      >
        {service.description}
      </p>
      <span
        className="inline-block text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
        style={{
          background: service.featured
            ? 'rgba(255,255,255,0.15)'
            : 'rgba(29,106,101,0.1)',
          color: service.featured ? '#fff' : '#1D6A65',
        }}
      >
        {service.tag}
      </span>
    </div>
  );
}

export function Hizmetler({ services, whatsapp }: HizmetlerProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: productsRef, isVisible: productsVisible } = useScrollReveal();

  const products: Product[] = [
    {
      image: '/images/buyukbas.webp',
      title: 'Büyükbaş Kurbanlık',
      alt: 'Beykoz Büyükbaş Kurbanlık - 7 Hisse Seçeneği ile İslami Usule Uygun Kesim',
    },
    {
      image: '/images/kucukbas.webp',
      title: 'Küçükbaş Kurbanlık',
      alt: 'Beykoz Küçükbaş Kurbanlık - Koyun ve Keçi Seçenekleri',
    },
  ];

  return (
    <section
      id="hizmetler"
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ background: '#fff' }}
    >
      {/* Decorative radial */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,28,28,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-[8vw]">
        {/* Services Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
          >
            Hizmetlerimiz
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            Beykoz'da Her İhtiyaca Uygun
            <br />
            <span style={{ color: '#B91C1C' }}>Kurban Kesim Hizmetleri</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Beykoz'da kurban bayramı ve yıl içi adak, akika kurbanı kesim hizmeti veriyoruz.
            İslami usule tam uygun, hijyenik koşullarda profesyonel kesim.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20 reveal ${gridVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const delayClass =
              index % 3 === 0
                ? 'reveal-delay-1'
                : index % 3 === 1
                  ? 'reveal-delay-2'
                  : 'reveal-delay-3';

            return (
              <ServiceCard
                key={index}
                service={service}
                delayClass={delayClass}
              />
            );
          })}
        </div>

        {/* Products Section - Integrated */}
        <div
          ref={productsRef}
          className={`max-w-6xl mx-auto reveal ${productsVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(185,28,28,0.1)', color: '#B91C1C' }}
            >
              2026 Sezonu
            </span>
            <h3
              className="text-2xl md:text-3xl font-black tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
            >
              Kurbanlık <span style={{ color: '#B91C1C' }}>Seçeneklerimiz</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-[24px] overflow-hidden bg-white border-[1.5px] border-transparent transition-all duration-300 hover:border-[rgba(29,106,101,0.2)] ${index === 0 ? 'reveal-delay-1' : 'reveal-delay-2'
                  }`}
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4
                      className="text-xl font-extrabold text-white"
                      style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white font-extrabold text-sm py-3 px-7 rounded-full transition-all hover:-translate-y-0.5"
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
      </div>
    </section>
  );
}
