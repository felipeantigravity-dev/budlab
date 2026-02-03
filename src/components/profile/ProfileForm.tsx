import { useState, useEffect } from "react";
import { useProfile } from "@/hooks/useProfile";
import { User, Phone } from "lucide-react";

export function ProfileForm() {
    const { profile, updateProfile, isLoading } = useProfile();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (profile) {
            setFullName(profile.full_name || "");
            setPhone(profile.phone || "");
        }
    }, [profile]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile.mutate({ full_name: fullName, phone: phone });
    };

    if (isLoading) {
        return <div className="h-40 animate-pulse bg-secondary/20" />;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md animate-fade-in-up">
            <div className="space-y-1">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <User size={14} /> Nome Completo
                </label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors font-medium rounded-none"
                    placeholder="SEU NOME"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Phone size={14} /> Telefone
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors font-medium rounded-none"
                    placeholder="(00) 00000-0000"
                />
            </div>

            <button
                type="submit"
                disabled={updateProfile.isPending}
                className="btn-brand w-full mt-4 flex items-center justify-center placeholder:opacity-50"
            >
                {updateProfile.isPending ? "SALVANDO..." : "SALVAR ALTERAÇÕES"}
            </button>
        </form>
    );
}
