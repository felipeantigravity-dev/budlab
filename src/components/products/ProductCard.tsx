import { Link } from "react-router-dom";
import { Product } from "@/hooks/useProducts";
import { getProductImage } from "@/lib/productImages";
import { WishlistButton } from "./WishlistButton";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div
      className="product-card group animate-fade-in-up relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary relative">
          <img
            src={getProductImage(product.image_url)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Wishlist Button - Positioned absolutely */}
      <div className="absolute top-2 right-2 z-10">
        <WishlistButton
          productId={product.id}
          className="bg-background/80 hover:bg-background shadow-sm"
        />
      </div>

      <Link to={`/produto/${product.id}`} className="block p-4">
        <h3 className="font-display text-lg tracking-wide truncate">
          {product.name}
        </h3>
        <p className="text-primary font-semibold mt-1">
          {formatPrice(product.price)}
        </p>
      </Link>
    </div>
  );
}
