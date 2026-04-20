'use client';

import { SiteConfig } from '../types/config';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Hizmetler } from '../sections/Hizmetler';
import { Process } from '../sections/Process';
import { Features } from '../sections/Features';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { FloatingWhatsAppButton } from './WhatsAppButton';

interface ClientPageProps {
  config: SiteConfig;
}

// Client-side interactivity gereken bileşenleri bu wrapper'da topluyoruz
// Veri artık server component'ten (page.tsx) prop olarak geliyor
export function ClientPage({ config }: ClientPageProps) {
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

      <Footer
        phone={config.contact.phone}
        whatsapp={config.contact.whatsapp}
      />

      <FloatingWhatsAppButton phone={config.contact.whatsapp} />
    </main>
  );
}
