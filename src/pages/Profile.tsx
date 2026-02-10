import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { Package, User, LogOut } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Profile() {
    usePageTitle("Perfil | BudLab");
    const { user, signOut, loading } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"details" | "orders">("details");

    useEffect(() => {
        if (!loading && !user) {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    const handleSignOut = async () => {
        await signOut();
        navigate("/");
    };

    if (loading || !user) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h1 className="font-display text-4xl md:text-5xl mb-12">MINHA CONTA</h1>

                    <div className="grid md:grid-cols-[280px_1fr] gap-12">
                        {/* Sidebar Navigation */}
                        <aside className="space-y-2">
                            <button
                                onClick={() => setActiveTab("details")}
                                className={`w-full flex items-center gap-3 px-6 py-4 border-l-4 transition-all text-left font-bold uppercase tracking-wider ${activeTab === "details"
                                    ? "border-primary bg-secondary/50 text-foreground"
                                    : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                                    }`}
                            >
                                <User size={20} /> Dados Pessoais
                            </button>

                            <button
                                onClick={() => setActiveTab("orders")}
                                className={`w-full flex items-center gap-3 px-6 py-4 border-l-4 transition-all text-left font-bold uppercase tracking-wider ${activeTab === "orders"
                                    ? "border-primary bg-secondary/50 text-foreground"
                                    : "border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                                    }`}
                            >
                                <Package size={20} /> Meus Pedidos
                            </button>

                            <button
                                onClick={handleSignOut}
                                className="w-full flex items-center gap-3 px-6 py-4 border-l-4 border-transparent text-muted-foreground hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 transition-all text-left font-bold uppercase tracking-wider mt-8"
                            >
                                <LogOut size={20} /> Sair
                            </button>
                        </aside>

                        {/* Content Area */}
                        <div className="min-h-[400px]">
                            {activeTab === "details" && (
                                <div className="animate-fade-in-up">
                                    <h2 className="font-display text-2xl mb-8 border-b-2 border-border pb-4">
                                        EDITAR DADOS
                                    </h2>
                                    <ProfileForm />
                                </div>
                            )}

                            {activeTab === "orders" && (
                                <div className="animate-fade-in-up">
                                    <h2 className="font-display text-2xl mb-8 border-b-2 border-border pb-4">
                                        HISTÓRICO DE PEDIDOS
                                    </h2>
                                    <div className="bg-secondary/20 p-8 text-center border-2 border-dashed border-border">
                                        <Package size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                                        <p className="text-muted-foreground font-medium uppercase tracking-widest">
                                            Você ainda não fez nenhum pedido.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
