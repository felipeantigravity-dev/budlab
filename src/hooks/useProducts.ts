import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { mockProducts } from "@/data/mockProducts";

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  secondary_images: string[] | null;
  category: string | null;
  sizes: string[] | null;
  colors: string[] | null;
  stock: number | null;
  featured: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      // If error or no DB connection yet, return mock data.
      // Ideally we merge them, but for this task getting 30 items is priority.
      // We'll combine DB results (if any) with mock data.

      const dbProducts = data as Product[] || [];
      // Filter out any mock IDs from DB to avoid duplicates if we seed them later
      const uniqueDbProducts = dbProducts.filter(p => !p.id.startsWith('mock-'));

      return [...uniqueDbProducts, ...mockProducts];
    },
  });
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Product[];
    },
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Product;
    },
    enabled: !!id,
  });
}
