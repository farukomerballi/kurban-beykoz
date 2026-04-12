import { Feature } from '../types/config';
import { FeatureCard } from '../components/FeatureCard';

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-24 bg-[#FBF6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#253D10] mb-4 font-[family-name:var(--font-playfair)]">
            Neden Beykoz Kurban?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
