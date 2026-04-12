import { ClipboardList, Search, Scissors, Phone, Truck } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function ProcessStep({ step, title, description, icon, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-6 relative">
      {/* Connection Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-[#B88619] to-[#B88619]/30" />
      )}
      
      {/* Step Number & Icon Circle */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#253D10] to-[#3a5a20] flex items-center justify-center shadow-lg shadow-[#253D10]/20">
          <span className="text-white text-xl font-bold">{step}</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#B88619] flex items-center justify-center shadow-md">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-2 pb-8 flex-1">
        <h3 className="text-2xl font-bold text-[#253D10] mb-2 font-[family-name:var(--font-playfair)]">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Process() {
  const steps = [
    {
      step: 1,
      title: "Kayıt",
      description: "Hissenizi ayırtmak için Beykoz Kurban ile iletişime geçmeniz yeterlidir. Kayıt işleminiz hızlı ve kolay şekilde tamamlanır.",
      icon: <ClipboardList size={16} className="text-white" />
    },
    {
      step: 2,
      title: "Seçim",
      description: "Kurbanlıklar, görevli uzman ekibimiz tarafından İslami şartlara uygun ve titizlikle seçilir.",
      icon: <Search size={16} className="text-white" />
    },
    {
      step: 3,
      title: "Kesim",
      description: "Bayramın 1. günü kurbanlarınız, ehil kasaplarımız tarafından İslami usullere göre kesilir.",
      icon: <Scissors size={16} className="text-white" />
    },
    {
      step: 4,
      title: "Bilgi",
      description: "Kurbanınızın kesim ve teslimat aşamasında size telefon ile bilgi verilir. Böylece sürecin her adımından haberdar olursunuz.",
      icon: <Phone size={16} className="text-white" />
    },
    {
      step: 5,
      title: "Teslimat",
      description: "Kurban etleri eşit şekilde bölünerek aynı gün içinde hisse sahiplerine teslim edilir.",
      icon: <Truck size={16} className="text-white" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#FBF6EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#253D10] mb-4 font-[family-name:var(--font-playfair)]">
            5 Adımda Kurban
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kurban ibadetinizde vekaletinizi verin, gerisini bize bırakın. Hijyenik şartlarda, kesimden parçalamaya her aşamayı sizler için organize ediyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B88619]/20 via-[#B88619] to-[#B88619]/20" />
          
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Step Circle */}
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#253D10] to-[#3a5a20] flex items-center justify-center shadow-lg shadow-[#253D10]/20 relative z-10">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#B88619] flex items-center justify-center shadow-md z-20">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-[#253D10] mb-3 font-[family-name:var(--font-playfair)]">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden mt-12 max-w-md mx-auto">
          {steps.map((item, index) => (
            <ProcessStep
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
