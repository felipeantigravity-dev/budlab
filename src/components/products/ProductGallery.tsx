import { useState } from "react";
import { getProductImage } from "@/lib/productImages";

interface ProductGalleryProps {
  mainImage: string | null;
  secondaryImages?: string[] | null;
  productName: string;
}

export function ProductGallery({ mainImage, secondaryImages, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  
  const allImages = [mainImage, ...(secondaryImages || [])].filter(Boolean) as string[];
  const hasMultipleImages = allImages.length > 1;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden bg-secondary rounded-sm animate-fade-in">
        <img
          src={getProductImage(selectedImage)}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && (
        <div className="flex gap-3">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`w-20 h-20 overflow-hidden rounded-sm border-2 transition-all ${
                selectedImage === image
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground"
              }`}
            >
              <img
                src={getProductImage(image)}
                alt={`${productName} - Imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
