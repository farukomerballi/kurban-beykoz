import { useScrollReveal } from '../hooks/useScrollReveal';

interface Step {
  step: number;
  title: string;
  description: string;
  color: 'red' | 'teal';
}

interface TimelineItem {
  day: string;
  dotColor: 'red' | 'teal' | 'gray';
  text: string;
}

interface ProcessProps {
  steps: Step[];
  deliveryTimeline: TimelineItem[];
}

function StepCard({ step, delayClass }: { step: Step; delayClass: string }) {
  const { ref, isVisible } = useScrollReveal();
  const isTeal = step.color === 'teal';

  return (
    <div
      ref={ref}
      className={`flex gap-5 relative pb-8 reveal ${delayClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-black z-10"
          style={{
            background: isTeal ? '#1D6A65' : '#B91C1C',
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            boxShadow: isTeal
              ? '0 4px 16px rgba(29,106,101,0.3)'
              : '0 4px 16px rgba(185,28,28,0.3)',
          }}
        >
          {step.step}
        </div>
        <div
          className="w-0.5 flex-1 mt-1.5 min-h-[32px]"
          style={{
            background: 'linear-gradient(to bottom, #B91C1C, #1D6A65)',
            opacity: 0.2,
          }}
        />
      </div>

      <div className="pt-2">
        <h3
          className="text-base font-extrabold mb-1"
          style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
        >
          {step.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export function Process({ steps, deliveryTimeline }: ProcessProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();

  const dotColors = {
    red: '#B91C1C',
    teal: '#1D6A65',
    gray: '#ccc',
  };

  return (
    <section
      id="nasil-calisir"
      className="py-20 lg:py-24"
      style={{ background: '#F9F6F1' }}
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
            Süreç
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            Beykoz'da Kurban <span style={{ color: '#B91C1C' }}>Nasıl Kesilir?</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Beykoz kurban kesim hizmetimizde kayıttan teslimata kadar her adımı takip edebilir, 
            gönül rahatlığıyla kurbanınızı bize emanet edebilirsiniz. İslami usule tam uygun, hijyenik koşullarda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Steps list */}
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const delayClass =
                index === 0
                  ? 'reveal-delay-1'
                  : index === 1
                  ? 'reveal-delay-2'
                  : index === 2
                  ? 'reveal-delay-3'
                  : 'reveal-delay-4';
              return <StepCard key={step.step} step={step} delayClass={delayClass} />;
            })}
          </div>

          {/* Right card */}
          <div
            ref={cardRef}
            className={`reveal reveal-delay-2 ${cardVisible ? 'visible' : ''}`}
          >
            <div
              className="relative rounded-[28px] p-6 lg:p-8 overflow-hidden"
              style={{ background: '#fff', boxShadow: '0 20px 60px rgba(0,0,0,0.09)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #1D6A65, #B91C1C)' }}
              />

              <h3
                className="text-xl font-black mb-6 mt-1"
                style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
              >
                Bayram Günü <span style={{ color: '#1D6A65' }}>Teslimat Takvimi</span>
              </h3>

              <div className="space-y-0">
                {deliveryTimeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-3 border-b border-black/5 last:border-b-0"
                  >
                    <span
                      className="text-xs font-black tracking-widest uppercase shrink-0 w-14"
                      style={{ color: '#B91C1C', fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
                    >
                      {item.day}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: dotColors[item.dotColor] }}
                    />
                    <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ background: '#F9F6F1' }}
              >
                <span className="text-2xl">📲</span>
                <p className="text-sm font-semibold text-gray-600 leading-snug">
                  Her aşamada{' '}
                  <strong style={{ color: '#1D6A65' }}>SMS & WhatsApp</strong>{' '}
                  bildirimi gönderilir. Kurbanınızı anında takip edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
