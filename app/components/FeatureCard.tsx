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
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center">
        <Icon size={32} className="text-[#2D5A3D]" />
      </div>
      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}
