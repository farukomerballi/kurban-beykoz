import { useScrollReveal } from '../hooks/useScrollReveal';

interface Stat {
  number: string;
  label: string;
  variant: 'default' | 'accent' | 'accent-red';
}

interface WhyFeature {
  icon: string;
  title: string;
  description: string;
  iconVariant: 'default' | 'red';
}

interface FeaturesProps {
  stats: Stat[];
  whyFeatures: WhyFeature[];
}

export function Features({ stats, whyFeatures }: FeaturesProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: pointsRef, isVisible: pointsVisible } = useScrollReveal();

  return (
    <section
      id="neden-biz"
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{ background: '#fff' }}
    >
      <div className="px-4 sm:px-6 lg:px-[8vw]">
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
          >
            Avantajlarımız
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            Neden Beykoz'da <span style={{ color: '#B91C1C' }}>Bizi</span> Tercih Etmelisiniz?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Beykoz kurban kesim hizmetinde 20+ yıllık tecrübemiz, binlerce memnun ailemiz ve 
            şeffaf süreç anlayışımızla fark yaratıyoruz. İslami usule tam uygun, hijyenik koşullarda 
            profesyonel kurban kesimi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Stats */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 gap-4 reveal ${statsVisible ? 'visible' : ''}`}
          >
            {stats.map((stat, index) => {
              const isAccent = stat.variant === 'accent';
              const isAccentRed = stat.variant === 'accent-red';
              const delayClass =
                index === 0
                  ? 'reveal-delay-1'
                  : index === 1
                  ? 'reveal-delay-2'
                  : index === 2
                  ? 'reveal-delay-3'
                  : 'reveal-delay-4';

              return (
                <div
                  key={index}
                  className={`stat-card relative rounded-[20px] p-6 lg:p-7 ${delayClass}`}
                  style={{
                    background: isAccent
                      ? 'linear-gradient(135deg, #1D6A65, #2E9E97)'
                      : isAccentRed
                      ? 'linear-gradient(135deg, #7F1D1D, #B91C1C)'
                      : '#F9F6F1',
                  }}
                >
                  <div
                    className="text-4xl font-black tracking-tighter leading-none mb-2"
                    style={{
                      fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                      color: isAccent || isAccentRed ? 'rgba(255,255,255,0.9)' : '#B91C1C',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm font-bold leading-snug"
                    style={{ color: isAccent || isAccentRed ? 'rgba(255,255,255,0.85)' : '#555' }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Points */}
          <div ref={pointsRef} className={`reveal ${pointsVisible ? 'visible' : ''}`}>
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
            >
              Farkımız
            </span>
            <div className="flex flex-col gap-4 mt-4">
              {whyFeatures.map((feature, index) => {
                const isRed = feature.iconVariant === 'red';
                const delayClass =
                  index === 0
                    ? 'reveal-delay-1'
                    : index === 1
                    ? 'reveal-delay-2'
                    : index === 2
                    ? 'reveal-delay-3'
                    : 'reveal-delay-4';

                return (
                  <div
                    key={index}
                    className={`why-point flex gap-4 items-start p-5 rounded-2xl border-[1.5px] border-transparent ${delayClass}`}
                    style={{ background: '#F9F6F1' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{
                        background: isRed
                          ? 'linear-gradient(135deg, #7F1D1D, #B91C1C)'
                          : 'linear-gradient(135deg, #1D6A65, #2E9E97)',
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4
                        className="text-base font-extrabold mb-1"
                        style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
