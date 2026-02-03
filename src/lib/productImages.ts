import budlabCrew from "@/assets/products/budlab-crew.png";
import caipirinha from "@/assets/products/caipirinha.png";
import fenomenoFrente from "@/assets/products/fenomeno-frente.png";
import fenomenoCostas from "@/assets/products/fenomeno-costas.png";
import jerseyBudlab from "@/assets/products/jersey-budlab.png";

export const productImages: Record<string, string> = {
  "/products/budlab-crew.png": budlabCrew,
  "/products/caipirinha.png": caipirinha,
  "/products/fenomeno-frente.png": fenomenoFrente,
  "/products/fenomeno-costas.png": fenomenoCostas,
  "/products/jersey-budlab.png": jerseyBudlab,
};

export const getProductImage = (imageUrl: string | null): string => {
  if (!imageUrl) return budlabCrew;
  return productImages[imageUrl] || budlabCrew;
};

// Get secondary images for a product (like back view)
export const getSecondaryImages = (productId: string): string[] => {
  // For FENOMENO, return the back image
  if (productId.includes('fenomeno')) {
    return [fenomenoCostas];
  }
  return [];
};
