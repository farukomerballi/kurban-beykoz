import { Product } from '../types/config';
import { ProductCard } from '../components/ProductCard';

interface ProductsProps {
  products: Product[];
  whatsapp: string;
}

export function Products({ products, whatsapp }: ProductsProps) {
  return (
    <section id="products" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} whatsappNumber={whatsapp} />
          ))}
        </div>
      </div>
    </section>
  );
}
