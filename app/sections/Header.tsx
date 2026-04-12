'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface HeaderProps {
  phone: string;
  whatsapp: string;
}

export function Header({ phone, whatsapp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Beykoz Kurban" 
                width={120} 
                height={120} 
                className="rounded-full logo-image"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#2D5A3D] transition-colors">
              Kurbanlıklar
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#2D5A3D] transition-colors">
              Hizmetlerimiz
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#2D5A3D] transition-colors">
              S.S.S.
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2D5A3D] transition-colors">
              İletişim
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-[#2D5A3D] hover:text-[#4A7C59] font-semibold transition-colors"
            >
              <Phone size={18} />
              {phone}
            </a>
            <WhatsAppButton phone={whatsapp} className="py-2 px-4 text-sm">
              WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-[#2D5A3D]">
                Kurbanlıklar
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-[#2D5A3D]">
                Hizmetlerimiz
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-[#2D5A3D]">
                S.S.S.
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#2D5A3D]">
                İletişim
              </button>
              <div className="pt-4 border-t flex flex-col gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 text-[#2D5A3D] font-semibold">
                  <Phone size={18} />
                  {phone}
                </a>
                <WhatsAppButton phone={whatsapp} className="justify-center">
                  WhatsApp'tan Yaz
                </WhatsAppButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
