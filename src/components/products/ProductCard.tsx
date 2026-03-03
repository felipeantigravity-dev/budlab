import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/hooks/useProducts";
import { getProductImage } from "@/lib/productImages";
import { WishlistButton } from "./WishlistButton";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const installmentValue = product.price / 6;

  const mainImage = getProductImage(product.image_url);
  const secondImage =
    product.secondary_images && product.secondary_images.length > 0
      ? getProductImage(product.secondary_images[0])
      : null;

  const showSecond = hovered && !!secondImage;

  return (
    <div
      className="product-card group animate-fade-in-up relative"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="product-card-img-wrap aspect-square overflow-hidden bg-secondary relative">
          {/* Imagem principal */}
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover lg:object-contain"
            style={{
              opacity: showSecond ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
          {/* Imagem secundária — só renderiza se existir */}
          {secondImage && (
            <img
              src={secondImage}
              alt={`${product.name} — visão alternativa`}
              className="absolute inset-0 w-full h-full object-cover lg:object-contain"
              style={{
                opacity: showSecond ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          )}
        </div>
      </Link>

      {/* Wishlist Button - Positioned absolutely */}
      <div className="absolute top-2 right-2 z-10">
        <WishlistButton
          productId={product.id}
          className="bg-background/80 hover:bg-background shadow-sm"
        />
      </div>

      <Link to={`/produto/${product.id}`} className="block">
        {/* Info area — desktop: flex row (name left, price right) */}
        <div className="product-card-info p-4 lg:p-0">
          <h3 className="product-card-name font-display text-lg tracking-wide">
            {product.name}
          </h3>
          <div className="product-card-price">
            <span className="product-card-price-main text-primary font-semibold mt-1 block">
              {formatPrice(product.price)}
            </span>
            <span className="product-card-installment hidden lg:block">
              6x de {formatPrice(installmentValue)}
            </span>
            <span className="product-card-sem-juros hidden lg:block">
              sem juros
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
