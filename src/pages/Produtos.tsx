import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { SearchBar } from "@/components/products/SearchBar";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductSort } from "@/components/products/ProductSort";
import { Filter } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

interface FiltersState {
  category: string[];
  minPrice: string;
  maxPrice: string;
  sizes: string[];
  colors: string[];
}

const Produtos = () => {
  usePageTitle("Produtos | BudLab");
  const { data: products, isLoading } = useProducts();

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    category: [],
    minPrice: "",
    maxPrice: "",
    sizes: [],
    colors: [],
  });

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          (p.description && p.description.toLowerCase().includes(query))
      );
    }

    // Category Filter
    if (filters.category.length > 0) {
      result = result.filter((p) =>
        p.category && filters.category.includes(p.category.toLowerCase())
      );
    }

    // Price Filter
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }

    // Size Filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes && p.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Color Filter
    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.colors && p.colors.some(color => filters.colors.includes(color))
      );
    }

    // Sorting
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
      default:
        result.sort((a, b) => {
          const dateA = new Date(a.created_at || 0).getTime();
          const dateB = new Date(b.created_at || 0).getTime();
          return dateB - dateA;
        });
        break;
    }

    return result;
  }, [products, searchQuery, filters, sortOption]);

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <p className="text-primary font-medium uppercase tracking-widest mb-2">
              Loja
            </p>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              TODOS OS PRODUTOS
            </h1>

            {/* Search and Sort Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                className="w-full md:max-w-md"
              />
              <div className="flex gap-4">
                <button
                  className="md:hidden flex items-center gap-2 border-2 border-border px-4 py-2 uppercase font-bold text-sm"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter size={18} /> Filtros
                </button>
                <ProductSort value={sortOption} onChange={setSortOption} />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <ProductFilters filters={filters} setFilters={setFilters} />
              </div>
            </aside>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
              <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-background border-l border-border p-6 overflow-y-auto shadow-xl animate-slide-in-right">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-display text-2xl">FILTROS</h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2"
                    >
                      ✕
                    </button>
                  </div>
                  <ProductFilters filters={filters} setFilters={setFilters} />
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="btn-brand w-full mt-8"
                  >
                    Ver Resultados
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-secondary animate-pulse rounded-none"
                    />
                  ))}
                </div>
              ) : (
                <>
                  <p className="mb-6 text-muted-foreground">
                    Mostrando {filteredProducts.length} produtos
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                </>
              )}

              {filteredProducts.length === 0 && !isLoading && (
                <div className="text-center py-20 bg-secondary/20">
                  <p className="text-muted-foreground text-lg mb-4">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({
                        category: [],
                        minPrice: "",
                        maxPrice: "",
                        sizes: [],
                        colors: [],
                      });
                    }}
                    className="text-primary font-bold uppercase hover:underline"
                  >
                    Limpar todos os filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
