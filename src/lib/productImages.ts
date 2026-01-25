import tshirtCore from "@/assets/products/tshirt-core.jpg";
import hoodieStreet from "@/assets/products/hoodie-street.jpg";
import cargoPants from "@/assets/products/cargo-pants.jpg";
import capLogo from "@/assets/products/cap-logo.jpg";

export const productImages: Record<string, string> = {
  "/products/tshirt-core.jpg": tshirtCore,
  "/products/hoodie-street.jpg": hoodieStreet,
  "/products/cargo-pants.jpg": cargoPants,
  "/products/cap-logo.jpg": capLogo,
};

export const getProductImage = (imageUrl: string | null): string => {
  if (!imageUrl) return tshirtCore;
  return productImages[imageUrl] || tshirtCore;
};
