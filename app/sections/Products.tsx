import { Product } from '../types/config';
import { ProductCard } from '../components/ProductCard';
import Image from 'next/image';

interface ProductsProps {
  products: Product[];
  whatsapp: string;
}

export function Products({ products, whatsapp }: ProductsProps) {
  return (
    <section id="products" className="py-20 bg-[#FBF6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            2026 Kurbanlık Fiyatları
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hijyenik koşullarda, İslami usullere uygun kesim hizmeti.
            Fiyatlarımıza kesim, parçalama ve paketleme dahildir.
          </p>
        </div>

        {/* Büyükbaş Kurbanlık Görseli */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/buyukbas.png"
              alt="Büyükbaş Kurbanlık"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} whatsappNumber={whatsapp} />
          ))}
        </div>
      </div>
    </section>
  );
}
