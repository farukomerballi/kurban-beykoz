import { LucideIcon, Heart, Shield, Truck, Scale } from 'lucide-react';
import { Feature } from '../types/config';

const iconMap: Record<string, LucideIcon> = {
  mosque: Heart,
  shield: Shield,
  truck: Truck,
  scale: Scale,
};

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Shield;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2 hover:rotate-1 perspective-1000">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#253D10] to-[#3a5a20] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#253D10] mb-2 font-[family-name:var(--font-playfair)]">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}
