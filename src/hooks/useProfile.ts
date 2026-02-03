import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface Profile {
    id: string;
    user_id: string;
    full_name: string | null;
    avatar_url: string | null;
    phone: string | null;
    created_at: string;
}

export function useProfile() {
    const { user } = useAuth();
    const queryClient = useQueryClient();

    // Fetch Profile Data
    const { data: profile, isLoading } = useQuery({
        queryKey: ["profile", user?.id],
        queryFn: async () => {
            if (!user) return null;
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("user_id", user.id)
                .single();

            if (error) {
                toast.error("Erro ao carregar perfil");
                throw error;
            }
            return data as Profile;
        },
        enabled: !!user,
    });

    // Update Profile Mutation
    const updateProfile = useMutation({
        mutationFn: async (updates: Partial<Profile>) => {
            if (!user) throw new Error("Usuário não autenticado");

            const { error } = await supabase
                .from("profiles")
                .update(updates)
                .eq("user_id", user.id);

            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile", user?.id] });
            toast.success("Perfil atualizado com sucesso!");
        },
        onError: (error) => {
            toast.error("Erro ao atualizar perfil: " + error.message);
        },
    });

    return {
        profile,
        isLoading,
        updateProfile,
    };
}
