import { Phone, Clock, Shield, Truck } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface HeroProps {
  phone: string;
  whatsapp: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Hero({ phone, whatsapp, workingHours }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center pt-20 pb-8 md:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#253D10] via-[#3a5a20] to-[#2d4a15]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2di0yaC00djJoNHptMC02di00aC00djRoNHptLTYgNnYtMmgtNHYyaDR6bTAtNnYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Beykoz&apos;da Güvenilir<br />
          <span className="text-[#B88619]">Kurban Hizmeti</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          İslami usullere uygun, hijyenik koşullarda kurban kesim hizmeti.
          <br className="hidden md:block" />
          Profesyonel ekibimizle yanınızdayız.
        </p>

        {/* Working Hours Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
          <Clock size={18} />
          <span>Çalışma Saatlerimiz: {workingHours.weekdays}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <WhatsAppButton phone={whatsapp} className="text-lg py-4 px-8">
            WhatsApp&apos;tan Bilgi Al
          </WhatsAppButton>
          <a 
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 bg-white text-[#253D10] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            <Phone size={20} />
            Bizi Arayın
          </a>
        </div>

        {/* Mini Features - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Shield, text: "İslami Usullere Uygun" },
            { icon: Truck, text: "Aynı Gün Teslimat" },
            { icon: Clock, text: "Hızlı Hizmet" },
            { icon: Shield, text: "Hijyenik Ortam" },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <item.icon size={24} className="mx-auto mb-2" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
