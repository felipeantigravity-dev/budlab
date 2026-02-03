import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface WishlistItem {
    id: string;
    product_id: string;
    created_at: string;
}

export function useWishlist() {
    const { user } = useAuth();
    const queryClient = useQueryClient();

    const { data: wishlistItems = [], isLoading } = useQuery({
        queryKey: ["wishlist", user?.id],
        queryFn: async () => {
            if (!user) return [];
            const { data, error } = await supabase
                .from("wishlist_items" as any)
                .select("*")
                .eq("user_id", user.id);

            if (error) {
                toast.error("Erro ao carregar lista de desejos");
                throw error;
            }
            return (data as unknown) as WishlistItem[];
        },
        enabled: !!user,
    });

    const addToWishlist = useMutation({
        mutationFn: async (productId: string) => {
            if (!user) throw new Error("Usuário não autenticado");
            const { error } = await supabase.from("wishlist_items" as any).insert({
                user_id: user.id,
                product_id: productId,
            });
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Produto adicionado à lista de desejos!");
        },
        onError: (error) => {
            toast.error("Erro ao adicionar produto: " + error.message);
        },
    });

    const removeFromWishlist = useMutation({
        mutationFn: async (productId: string) => {
            if (!user) throw new Error("Usuário não autenticado");
            const { error } = await supabase
                .from("wishlist_items" as any)
                .delete()
                .eq("user_id", user.id)
                .eq("product_id", productId);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            toast.success("Produto removido da lista de desejos");
        },
        onError: (error) => {
            toast.error("Erro ao remover produto: " + error.message);
        },
    });

    const isInWishlist = (productId: string) => {
        return wishlistItems.some((item) => item.product_id === productId);
    };

    const toggleWishlist = (productId: string) => {
        if (!user) {
            toast.error("Faça login para salvar favoritos");
            return;
        }

        if (isInWishlist(productId)) {
            removeFromWishlist.mutate(productId);
        } else {
            addToWishlist.mutate(productId);
        }
    };

    return {
        wishlistItems,
        isLoading,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
    };
}
