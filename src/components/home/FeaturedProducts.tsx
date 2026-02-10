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
    <section className="py-20 bg-background snap-start">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-primary font-medium uppercase tracking-widest mb-2">
              Destaques
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              PRODUTOS EM ALTA
            </h2>
          </div>
          <Link
            to="/produtos"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider mt-4 md:mt-0 hover:text-primary transition-colors group"
          >
            Ver Todos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
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
