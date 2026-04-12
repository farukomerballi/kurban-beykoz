import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface ContactProps {
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  workingHours: { weekdays: string; weekend: string };
}

export function Contact({ phone, whatsapp, address, mapsUrl, workingHours }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-[#FBF6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#253D10] mb-4 font-[family-name:var(--font-playfair)]">
            Bize Ulaşın
          </h2>
          <p className="text-gray-600 text-lg">
            Sorularınız için bizi arayabilir veya WhatsApp'tan yazabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#F2E8D0] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#253D10] rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50]">Telefon</h3>
                  <a href={`tel:${phone}`} className="text-[#253D10] hover:text-[#3a5a20] text-lg font-semibold">
                    {phone}
                  </a>
                </div>
              </div>
              <WhatsAppButton phone={whatsapp} className="w-full justify-center">
                WhatsApp'tan Yaz
              </WhatsAppButton>
            </div>

            <div className="bg-[#F2E8D0] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#253D10] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Adres</h3>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F2E8D0] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#253D10] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Hafta içi: {workingHours.weekdays}</p>
                  <p className="text-gray-600">Hafta sonu: {workingHours.weekend}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 md:h-auto bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
