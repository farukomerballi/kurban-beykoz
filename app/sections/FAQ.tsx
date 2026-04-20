'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
  delayClass,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  delayClass: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`rounded-2xl mb-3 overflow-hidden border-[1.5px] transition-all duration-200 reveal ${delayClass} ${isVisible ? 'visible' : ''} ${
        isOpen ? 'border-[#1D6A65]' : 'border-black/5 hover:border-[rgba(29,106,101,0.2)]'
      }`}
      style={{
        background: '#fff',
        boxShadow: isOpen ? '0 4px 16px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span
          className="text-base font-bold"
          style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
        >
          {faq.question}
        </span>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-[#1D6A65] text-white rotate-45' : 'bg-[rgba(29,106,101,0.1)] text-[#1D6A65]'
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px]' : 'max-h-0'
        }`}
      >
        <div className="pb-4 text-sm text-gray-600 leading-7">{faq.answer}</div>
      </div>
    </div>
  );
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 lg:py-24" style={{ background: '#F9F6F1' }}>
      <div className="px-4 sm:px-6 lg:px-[8vw]">
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
          >
            SSS
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            Beykoz Kurban <span style={{ color: '#B91C1C' }}>SSS</span> — Sıkça Sorulan Sorular
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Beykoz kurban kesim hizmeti hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. 
            Aklınıza takılan başka bir soru olursa bizi aramaktan çekinmeyin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const delayClass =
              index % 3 === 0
                ? 'reveal-delay-1'
                : index % 3 === 1
                ? 'reveal-delay-2'
                : 'reveal-delay-3';
            return (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                delayClass={delayClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
