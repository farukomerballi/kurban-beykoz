interface HeroProps {
  phone: string;
  whatsapp: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Hero({ phone, whatsapp }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[68px] overflow-hidden"
      style={{ background: 'var(--cream, #F9F6F1)' }}
    >
      {/* Decorative radial swirl top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          right: '-120px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,158,151,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Decorative radial swirl bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-80px',
          left: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,28,28,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-[calc(100vh-68px)]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:pl-[8vw] lg:pr-[4vw] py-12 lg:py-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-6 text-white text-xs font-bold tracking-widest uppercase"
            style={{ background: '#1D6A65' }}
          >
            <span>🌙</span>
            <span>2026 Kurban Bayramı</span>
          </div>

          <p
            className="text-sm font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: '#1D6A65', fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            Beykoz, İstanbul
          </p>

          <h1
            className="leading-none tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
          >
            <span
              className="block text-5xl sm:text-6xl lg:text-[5.5rem] font-black"
              style={{ color: '#7F1D1D' }}
            >
              Beykoz Kurban
            </span>
            <span
              className="block text-2xl sm:text-3xl lg:text-[2.8rem] font-extrabold mt-1"
              style={{ color: '#1D6A65' }}
            >
              Kesim Hizmeti
            </span>
          </h1>

          <p
            className="text-lg font-bold px-4 py-2.5 rounded-r-lg rounded-l-none lg:rounded-lg w-fit mb-6"
            style={{
              color: '#B91C1C',
              background: 'rgba(185,28,28,0.08)',
              borderLeft: '4px solid #B91C1C',
            }}
          >
            Kurbanını Erteleme — Hemen Kayıt Ol!
          </p>

          <p className="text-base leading-7 max-w-md mb-8" style={{ color: '#444' }}>
            Beykoz'da <strong style={{ color: '#1D6A65', fontWeight: 700 }}>20+ yıllık tecrübe</strong> ile İslami usullere uygun 
            <strong style={{ color: '#1D6A65', fontWeight: 700 }}> büyükbaş ve küçükbaş kurban kesim hizmeti</strong> sunuyoruz. 
            Adak, akika, şifa, şükür ve nafile kurbanlarınız hijyenik koşullarda kesilerek, 
            aynı gün teslimat garantisiyle adresinize ulaştırılır. Her bütçeye uygun 
            kurbanlık fiyatları ile Beykoz'un en güvenilir kurban kesim merkeziyiz.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: '✅', text: '20+ Yıl Tecrübe' },
              { icon: '🕌', text: 'İslami Kesim' },
              { icon: '🚚', text: '1. Gün Teslim' },
              { icon: '📋', text: 'Süreç Takibi' },
            ].map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border"
                style={{
                  background: '#fff',
                  borderColor: 'rgba(0,0,0,0.08)',
                  color: '#1D6A65',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                <span className="text-base">{chip.icon}</span>
                <span>{chip.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-extrabold text-base transition-all hover:-translate-y-0.5"
              style={{
                background: '#B91C1C',
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                boxShadow: '0 4px 20px rgba(185,28,28,0.35)',
              }}
            >
              <span>📞</span>
              <span>Hemen Kayıt Ol</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-all border-2"
              style={{
                background: 'transparent',
                color: '#1D6A65',
                borderColor: '#1D6A65',
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              }}
            >
              <span>Detaylı Bilgi →</span>
            </a>
          </div>

        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="flex items-center justify-center px-6 sm:px-8 lg:pl-4 lg:pr-[5vw] py-12 lg:py-20">
          <div
            className="relative w-full max-w-md rounded-[32px] p-6 sm:p-8 overflow-hidden"
            style={{
              background: '#fff',
              boxShadow: '0 24px 60px rgba(0,0,0,0.1)',
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ background: 'linear-gradient(90deg, #B91C1C, #1D6A65)' }}
            />

            <div className="flex justify-between items-start mb-6 mt-1">
              <span
                className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wide text-white"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', background: '#B91C1C' }}
              >
                🌙 Kurban Hizmetleri
              </span>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#999' }}
              >
                20+ Yıllık Kurban Tecrübesi
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { emoji: '🐄', name: 'Büyükbaş', price: 'Bütçeye Uygun' },
                { emoji: '🐑', name: 'Küçükbaş', price: 'Her Bütçe' },
                { emoji: '🐐', name: 'Keçi', price: 'Uygun Fiyat' },
              ].map((animal, idx) => (
                <div
                  key={idx}
                  className="text-center rounded-2xl p-3 transition-all cursor-default border-[1.5px] border-transparent hover:border-[#1D6A65] hover:-translate-y-0.5"
                  style={{ background: '#F9F6F1' }}
                >
                  <span className="block text-3xl mb-1">{animal.emoji}</span>
                  <span
                    className="block text-sm font-bold"
                    style={{ color: '#1D6A65' }}
                  >
                    {animal.name}
                  </span>
                  <span className="block text-xs" style={{ color: '#888' }}>
                    {animal.price}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4 text-white"
              style={{ background: 'linear-gradient(135deg, #1D6A65, #2E9E97)' }}
            >
              <span className="text-2xl shrink-0">🚀</span>
              <div>
                <div className="text-sm font-bold leading-tight">1. Gün Teslim Garantisi</div>
                <div className="text-xs opacity-85">
                  Bayramın ilk günü evinize taze teslimat
                </div>
              </div>
            </div>

            <div className="h-px bg-black/5 my-4" />

            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: '#888' }}
            >
              Kurban Türleri
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Adak', 'Akika', 'Şifa', 'Şükür', 'Nafile', 'Kurban'].map((type, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(46,158,151,0.1)', color: '#1D6A65' }}
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="text-xs font-semibold" style={{ color: '#888' }}>
                <strong
                  className="text-base"
                  style={{ color: '#B91C1C', fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
                >
                  20
                </strong>{' '}
                Yılı Aşkın
                <br />
                Kurban Tecrübesi
              </div>
              <div className="text-right">
              <div className="text-xs font-semibold" style={{ color: '#888' }}>
                Hijyenik Ortam
              </div>
                <div className="text-xs font-bold" style={{ color: '#1D6A65' }}>
                  ✓ İslami Usule Uygun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
