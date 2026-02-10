import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { useWishlist } from "@/hooks/useWishlist";
import { useProduct } from "@/hooks/useProducts";
import { useAuth } from "@/contexts/AuthContext";
import { usePageTitle } from "@/hooks/usePageTitle";

// Component wrapper to fetch individual product data
const WishlistProductItem = ({ productId }: { productId: string }) => {
    const { data: product, isLoading } = useProduct(productId);

    if (isLoading) {
        return <div className="aspect-square bg-secondary animate-pulse" />;
    }

    if (!product) return null;

    return <ProductCard product={product} />;
};

const Wishlist = () => {
    usePageTitle("Wishlist | BudLab");
    const { user, loading: authLoading } = useAuth();
    const { wishlistItems, isLoading } = useWishlist();

    if (authLoading || (user && isLoading)) {
        return (
            <Layout>
                <div className="flex h-[50vh] items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            </Layout>
        );
    }

    if (!user) {
        return (
            <Layout>
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <Heart size={64} className="mx-auto mb-6 text-muted-foreground" />
                        <h1 className="font-display text-4xl mb-4">
                            Faça login para ver sua lista de desejos
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            Salve seus produtos favoritos para ver depois.
                        </p>
                        <Link to="/login" className="btn-brand">
                            Fazer Login
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
                    <h1 className="font-display text-4xl md:text-5xl mb-8 animate-fade-in-up flex items-center gap-4">
                        <Heart className="fill-current text-primary" /> MEUS FAVORITOS
                    </h1>

                    {wishlistItems.length === 0 ? (
                        <div className="text-center py-20 bg-secondary/20 rounded-none">
                            <p className="text-muted-foreground text-lg mb-8">
                                Sua lista de desejos está vazia.
                            </p>
                            <Link to="/produtos" className="btn-brand">
                                Explorar Produtos
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {wishlistItems.map((item) => (
                                <WishlistProductItem key={item.id} productId={item.product_id} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Wishlist;
