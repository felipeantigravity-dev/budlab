import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useProduct } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WishlistButton } from "@/components/products/WishlistButton";

const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id || "");
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-secondary animate-pulse rounded-sm" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-secondary animate-pulse rounded" />
              <div className="h-6 w-1/4 bg-secondary animate-pulse rounded" />
              <div className="h-24 bg-secondary animate-pulse rounded" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="btn-brand">
            Voltar para Produtos
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span>Voltar</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <ProductGallery
              mainImage={product.image_url}
              secondaryImages={product.secondary_images}
              productName={product.name}
            />

            {/* Product Info */}
            <div className="animate-fade-in-up">
              <p className="text-primary font-medium uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                {product.name}
              </h1>
              <div className="flex items-center justify-between mb-4">
                <p className="text-3xl font-semibold text-primary">
                  {formatPrice(product.price)}
                </p>
                <WishlistButton
                  productId={product.id}
                  iconSize={28}
                  className="bg-secondary p-3 hover:bg-secondary/80"
                />
              </div>
              <p className="text-muted-foreground mb-6">
                ou 3x de {formatPrice(product.price / 3)} sem juros
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <p className="font-medium mb-3">Tamanho</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 border-2 font-medium transition-all ${selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <p className="font-medium mb-3">Cor</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border-2 font-medium transition-all ${selectedColor === color
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                          }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-medium mb-3">Quantidade</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-foreground transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-border flex items-center justify-center hover:border-foreground transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-brand w-full flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produto;
