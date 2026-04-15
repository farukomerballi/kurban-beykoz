'use client';

import { useConfig } from './hooks/useConfig';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Hizmetler } from './sections/Hizmetler';
import { Products } from './sections/Products';
import { Process } from './sections/Process';
import { Features } from './sections/Features';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';

export default function Home() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F9F6F1' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D6A65]" />
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F9F6F1' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2" style={{ color: '#B91C1C' }}>Hata</h1>
          <p className="text-gray-600">Sayfa yüklenirken bir sorun oluştu.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
      />

      <Hero
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
        workingHours={config.workingHours}
      />

      <Hizmetler
        services={config.services}
        whatsapp={config.contact.whatsapp}
      />

      <Process
        steps={config.steps}
        deliveryTimeline={config.deliveryTimeline}
      />

      <Features
        stats={config.stats}
        whyFeatures={config.whyFeatures}
      />

      <FAQ faqs={config.faq} />

      <Contact
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
        address={config.contact.address}
        mapsUrl={config.contact.mapsUrl}
        workingHours={config.workingHours}
      />

      <Footer />

      <FloatingWhatsAppButton phone={config.contact.whatsapp} />
    </main>
  );
}
