import { Link } from "react-router-dom";
import { Product } from "@/hooks/useProducts";
import { getProductImage } from "@/lib/productImages";

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
    <Link
      to={`/produto/${product.id}`}
      className="product-card group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={getProductImage(product.image_url)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg tracking-wide truncate">
          {product.name}
        </h3>
        <p className="text-primary font-semibold mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
