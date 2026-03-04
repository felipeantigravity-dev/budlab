import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useFeaturedProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/products/ProductCard";


export function FeaturedProducts() {
  const { data: products, isLoading } = useFeaturedProducts();

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-secondary animate-pulse rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20 pt-4 bg-background snap-start">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="font-display text-lg md:text-xl uppercase tracking-widest">
            DESTAQUES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
