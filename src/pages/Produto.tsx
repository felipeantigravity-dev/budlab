import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useProduct } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { WishlistButton } from "@/components/products/WishlistButton";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getProductImage } from "@/lib/productImages";
import { Minus, Plus } from "lucide-react";

const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id || "");
  usePageTitle(product ? `${product.name} | BudLab` : "BudLab | Loja de Camisetas");
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="grid grid-cols-3 gap-0 w-full h-screen">
            <div className="p-12 space-y-6">
              <div className="h-3 w-16 bg-gray-100 animate-pulse" />
              <div className="h-5 w-40 bg-gray-100 animate-pulse" />
              <div className="h-3 w-56 bg-gray-100 animate-pulse" />
              <div className="h-3 w-48 bg-gray-100 animate-pulse" />
            </div>
            <div className="bg-gray-50 animate-pulse" />
            <div className="p-12 space-y-6">
              <div className="h-5 w-24 bg-gray-100 animate-pulse" />
              <div className="h-10 w-full bg-gray-100 animate-pulse" />
              <div className="h-12 w-full bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl mb-6 text-black">Produto não encontrado</h1>
            <Link
              to="/produtos"
              className="text-xs uppercase tracking-widest text-black underline underline-offset-4"
            >
              Voltar para Produtos
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const allImages = [product.image_url, ...(product.secondary_images || [])].filter(Boolean) as string[];
  const currentImage = selectedImage || product.image_url;

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Back link */}
        <div className="px-8 pt-6">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#999] hover:text-black transition-colors"
          >
            <ArrowLeft size={12} />
            Voltar
          </Link>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_44%_26%] min-h-[85vh]">

          {/* ── LEFT COLUMN: Brand / Name / Description / Attributes ── */}
          <div className="flex flex-col justify-start px-10 pt-20 pb-12 lg:border-r border-gray-100">
            {/* Brand */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-black mb-1">
              BUDLAB
            </p>

            {/* Product name */}
            <h1
              className="text-[13px] font-normal text-[#333] mb-8 leading-snug"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {product.name}
            </h1>

            {/* Description */}
            {product.description && (
              <p className="text-[12px] text-[#555] leading-relaxed mb-8 max-w-xs">
                {product.description}
              </p>
            )}

            {/* Attributes */}
            <ul className="space-y-1.5">
              {product.category && (
                <li className="text-[12px] text-[#333]">
                  <span className="mr-2 text-[#aaa]">·</span>
                  Categoria: {product.category}
                </li>
              )}
              {product.colors && product.colors.length > 0 && (
                <li className="text-[12px] text-[#333]">
                  <span className="mr-2 text-[#aaa]">·</span>
                  {product.colors.join(", ")}
                </li>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <li className="text-[12px] text-[#333]">
                  <span className="mr-2 text-[#aaa]">·</span>
                  Tamanhos: {product.sizes.join(" · ")}
                </li>
              )}
            </ul>
          </div>

          {/* ── CENTER COLUMN: Product image ── */}
          <div className="flex flex-col items-center justify-center bg-white lg:border-r border-gray-100 py-12 px-6">
            {/* Main image */}
            <div className="w-full max-w-lg aspect-[3/4] overflow-hidden">
              <img
                src={getProductImage(currentImage)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-5">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 overflow-hidden border transition-all ${(selectedImage || product.image_url) === img
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                      }`}
                  >
                    <img
                      src={getProductImage(img)}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN: Price / Size / Actions ── */}
          <div className="flex flex-col justify-start px-10 pt-20 pb-12">
            {/* Price */}
            <div className="mb-8">
              <p className="text-[16px] font-normal text-black tracking-tight">
                {formatPrice(product.price)}
              </p>
              <p className="text-[11px] text-[#aaa] mt-0.5">Impostos incluídos</p>
              <p className="text-[11px] text-[#888] mt-1">
                ou 3x de {formatPrice(product.price / 3)} sem juros
              </p>
            </div>

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-300 text-[11px] uppercase tracking-widest text-black px-4 py-3 appearance-none bg-white focus:outline-none focus:border-black transition-colors cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="">SELECIONE O TAMANHO</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full border border-gray-300 text-[11px] uppercase tracking-widest text-black px-4 py-3 appearance-none bg-white focus:outline-none focus:border-black transition-colors cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="">SELECIONE A COR</option>
                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
              >
                <Minus size={12} />
              </button>
              <span className="text-[13px] font-normal w-6 text-center text-black">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
              >
                <Plus size={12} />
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white text-[11px] uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#111] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", borderRadius: 0 }}
            >
              <ShoppingBag size={14} />
              Adicionar ao Carrinho
            </button>

            {/* Wishlist */}
            <div className="mt-3 flex justify-center">
              <WishlistButton
                productId={product.id}
                iconSize={16}
                className="text-[11px] uppercase tracking-widest text-[#666] hover:text-black transition-colors bg-transparent p-0"
              />
            </div>

            {/* Size note */}
            <p className="text-[10px] text-[#aaa] mt-8 leading-relaxed">
              Medidas baseadas em modelo 1,75 m. Consulte a tabela de tamanhos para mais informações.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Produto;
