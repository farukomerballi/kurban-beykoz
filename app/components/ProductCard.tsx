import Image from 'next/image';
import { Check } from 'lucide-react';
import { Product } from '../types/config';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.type}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2C3E50] font-bold py-2 px-4 rounded-lg shadow-md">
          {product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{product.type}</h3>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <Check size={18} className="text-[#2D5A3D] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <WhatsAppButton 
          phone={whatsappNumber}
          message={`Merhaba, ${product.type} hakkında bilgi almak istiyorum.`}
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
