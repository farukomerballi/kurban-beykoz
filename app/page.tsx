'use client';

import { useConfig } from './hooks/useConfig';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Products } from './sections/Products';
import { Features } from './sections/Features';
import { Process } from './sections/Process';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';

export default function Home() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D5A3D]" />
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Hata</h1>
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
      
      <Products 
        products={config.products}
        whatsapp={config.contact.whatsapp}
      />
      
      <Features features={config.features} />
      
      <Process steps={config.process} />
      
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
