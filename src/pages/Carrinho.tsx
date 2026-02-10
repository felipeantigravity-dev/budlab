import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { getProductImage } from "@/lib/productImages";
import { usePageTitle } from "@/hooks/usePageTitle";

const Carrinho = () => {
  usePageTitle("Carrinho | BudLab");
  const { items, loading, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { user } = useAuth();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (!user) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag size={64} className="mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-display text-4xl mb-4">
              Faça login para ver seu carrinho
            </h1>
            <p className="text-muted-foreground mb-8">
              Você precisa estar logado para adicionar produtos ao carrinho.
            </p>
            <Link to="/login" className="btn-brand">
              Fazer Login
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-secondary rounded-sm" />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (items.length === 0) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag size={64} className="mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-display text-4xl mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Adicione alguns produtos incríveis ao seu carrinho!
            </p>
            <Link to="/produtos" className="btn-brand">
              Ver Produtos
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span>Continuar Comprando</span>
          </Link>

          <h1 className="font-display text-4xl md:text-5xl mb-8 animate-fade-in-up">
            MEU CARRINHO
          </h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-card rounded-sm shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-secondary">
                    <img
                      src={getProductImage(item.product?.image_url || null)}
                      alt={item.product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product?.name}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      {item.size && <span>Tamanho: {item.size}</span>}
                      {item.size && item.color && <span> • </span>}
                      {item.color && <span>Cor: {item.color}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-semibold text-primary">
                        {formatPrice((item.product?.price || 0) * item.quantity)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-sm shadow-sm sticky top-24 animate-fade-in-up delay-200">
                <h2 className="font-display text-2xl mb-6">RESUMO</h2>
                <div className="space-y-3 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frete</span>
                    <span className="text-primary font-medium">Grátis</span>
                  </div>
                </div>
                <div className="flex justify-between py-6">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-semibold text-lg text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button className="btn-brand w-full">
                  Finalizar Compra
                </button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Sistema de pagamento em desenvolvimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Carrinho;
