import Image from 'next/image';
import { Phone } from 'lucide-react';

interface HeaderProps {
  phone: string;
  whatsapp: string;
}

export function Header({ phone, whatsapp }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Beykoz Kurban" 
                width={150} 
                height={150} 
                className="rounded-full"
                loading="eager"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-[#253D10] transition-colors">
              Kurbanlıklar
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#253D10] transition-colors">
              Hizmetlerimiz
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[#253D10] transition-colors">
              S.S.S.
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#253D10] transition-colors">
              İletişim
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-[#253D10] hover:text-[#3a5a20] font-semibold transition-colors"
            >
              <Phone size={18} />
              {phone}
            </a>
            <a 
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#128C7E] transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href={`tel:${phone}`}
              className="inline-flex items-center gap-1 text-[#253D10] font-semibold text-sm"
            >
              Ara
            </a>
            <a 
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#25D366] text-white font-semibold py-2 px-3 rounded-lg hover:bg-[#128C7E] transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
