import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
    productId: string;
    className?: string;
    iconSize?: number;
}

export function WishlistButton({ productId, className, iconSize = 20 }: WishlistButtonProps) {
    const { isInWishlist, toggleWishlist } = useWishlist();
    const isWishlisted = isInWishlist(productId);

    return (
        <button
            onClick={(e) => {
                e.preventDefault(); // Prevent navigating if inside a link
                e.stopPropagation();
                toggleWishlist(productId);
            }}
            className={cn(
                "p-2 transition-colors hover:bg-secondary/50 rounded-none",
                isWishlisted ? "text-primary hover:text-primary/80" : "text-muted-foreground hover:text-foreground",
                className
            )}
            aria-label={isWishlisted ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
            <Heart
                size={iconSize}
                className={cn("transition-all", isWishlisted && "fill-current")}
            />
        </button>
    );
}
