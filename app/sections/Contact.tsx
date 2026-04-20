import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactProps {
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Contact({ phone, whatsapp }: ContactProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="iletisim" className="py-20 lg:py-24" style={{ background: '#fff' }} aria-label="İletişim">
      <div className="px-4 sm:px-6 lg:px-[8vw]">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <div
            className="relative rounded-[32px] p-8 lg:p-14 overflow-hidden grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 45%, #1D6A65 100%)',
            }}
          >
            {/* Decorative moon */}
            <div
              className="absolute pointer-events-none select-none hidden lg:block"
              style={{
                right: '280px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '9rem',
                opacity: 0.06,
              }}
            >
              🌙
            </div>

            <div className="relative z-10">
              <div
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Beykoz Kurban Danışmanlığı
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-tight mb-3 text-white"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                Beykoz'da Kurbanınızı
                <br />
                Hemen Kayıt Yaptırın!
              </h2>
              <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Beykoz kurban kesim hizmetinde 20+ yıllık tecrübemiz ve binlerce memnun ailemizle 
                bu yıl da yanınızdayız. Büyükbaş, küçükbaş, adak, akika kurbanlarınız için 
                kontenjanlar dolmadan yerinizi ayırtın.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 shrink-0">
              <div
                className="text-xs font-semibold tracking-widest uppercase text-center"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                Hemen Arayın
              </div>
              <div
                className="text-xl md:text-2xl lg:text-[2rem] font-black tracking-wide text-white whitespace-nowrap"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
              >
                {phone}
              </div>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-base transition-all hover:-translate-y-0.5 whitespace-nowrap mt-1"
                style={{
                  background: '#fff',
                  color: '#B91C1C',
                  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                <span>📞</span>
                <span>Şimdi Ara</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
