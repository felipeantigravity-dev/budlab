import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { getProductImage } from "@/lib/productImages";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, loading, updateQuantity, removeFromCart, totalPrice } = useCart();
    const { user } = useAuth();

    // Bloqueia o scroll do body enquanto o drawer está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 h-screen w-full md:w-[400px] bg-white z-[9999] flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header do drawer */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <span className="text-sm font-semibold uppercase tracking-widest">
                        Carrinho {items.length > 0 && `(${items.length})`}
                    </span>
                    <button
                        onClick={onClose}
                        aria-label="Fechar carrinho"
                        className="text-black hover:opacity-60 transition-opacity"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Conteúdo */}
                {loading ? (
                    <div className="flex-1 px-6 py-8">
                        <div className="animate-pulse space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-20 bg-gray-100" />
                            ))}
                        </div>
                    </div>
                ) : !user ? (
                    /* Não logado */
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-5">
                        <p className="text-[18px] font-normal" style={{ fontFamily: "sans-serif" }}>
                            O carrinho está vazio
                        </p>
                        <Link
                            to="/login"
                            onClick={onClose}
                            className="bg-black text-white px-10 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
                        >
                            Fazer Login
                        </Link>
                        <div className="text-[13px] text-gray-600 leading-relaxed">
                            <p className="font-bold">Tem uma conta?</p>
                            <p>
                                <Link
                                    to="/login"
                                    onClick={onClose}
                                    className="underline hover:text-black transition-colors"
                                >
                                    Faça login
                                </Link>{" "}
                                para finalizar a compra com mais rapidez.
                            </p>
                        </div>
                    </div>
                ) : items.length === 0 ? (
                    /* Logado, carrinho vazio */
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-5">
                        <p className="text-[18px] font-normal" style={{ fontFamily: "sans-serif" }}>
                            O carrinho está vazio
                        </p>
                        <Link
                            to="/produtos"
                            onClick={onClose}
                            className="bg-black text-white px-10 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors"
                        >
                            Voltar à loja
                        </Link>
                        <div className="text-[13px] text-gray-600 leading-relaxed">
                            <p className="font-bold">Tem uma conta?</p>
                            <p>
                                <Link
                                    to="/login"
                                    onClick={onClose}
                                    className="underline hover:text-black transition-colors"
                                >
                                    Faça login
                                </Link>{" "}
                                para finalizar a compra com mais rapidez.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Com itens */
                    <>
                        {/* Lista de itens com scroll */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-100">
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-gray-50">
                                        <img
                                            src={getProductImage(item.product?.image_url || null)}
                                            alt={item.product?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold truncate">{item.product?.name}</p>
                                        <div className="text-xs text-gray-500 mt-0.5 space-x-1">
                                            {item.size && <span>Tam: {item.size}</span>}
                                            {item.size && item.color && <span>•</span>}
                                            {item.color && <span>Cor: {item.color}</span>}
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            {/* Quantidade */}
                                            <div className="flex items-center border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="w-7 text-center text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                            <p className="text-sm font-semibold">
                                                {formatPrice((item.product?.price || 0) * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-black transition-colors self-start mt-1"
                                        aria-label="Remover item"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Rodapé fixo */}
                        <div className="px-6 py-6 border-t border-gray-100 bg-white">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-semibold">{formatPrice(totalPrice)}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 mb-5">
                                <span>Frete</span>
                                <span className="text-primary font-medium">Grátis</span>
                            </div>
                            <button className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors">
                                Finalizar Compra
                            </button>
                            <p className="text-[11px] text-gray-400 text-center mt-3">
                                Sistema de pagamento em desenvolvimento
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
