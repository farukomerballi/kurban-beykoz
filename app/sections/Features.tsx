import { Feature } from '../types/config';
import { FeatureCard } from '../components/FeatureCard';

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Neden Beykoz Kurban?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yılların tecrübesiyle, İslami usullere uygun ve hijyenik koşullarda 
            kurban kesim hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
