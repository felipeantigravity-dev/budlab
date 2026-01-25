import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const Produtos = () => {
  const { data: products, isLoading } = useProducts();

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up text-center">
            <p className="text-primary font-medium uppercase tracking-widest mb-2">
              Loja
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-8">
              TODOS OS PRODUTOS
            </h1>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-secondary animate-pulse rounded-sm"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products?.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          {products?.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
