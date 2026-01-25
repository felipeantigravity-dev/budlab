import { Product } from "@/hooks/useProducts";

// Helper to generate UUIDs
const generateId = (index: number) => `mock-product-${index + 1}`;

export const mockProducts: Product[] = [];
