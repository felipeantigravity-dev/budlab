import React, { useState } from 'react';
import { useCookie } from '@/contexts/CookieContext';
import { X, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CookieBanner = () => {
    const { showBanner, acceptAll, rejectNonEssential, savePreferences } = useCookie();
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        analytics: true,
        marketing: true,
    });

    if (!showBanner) return null;

    const handleSaveCustom = () => {
        // Logic to save custom preferences (here specific implementation can be extended)
        // For now we map to 'custom' type but we could store more granular data
        console.log('Saving custom preferences:', preferences);
        savePreferences('custom');
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
            <div className="max-w-7xl mx-auto glass rounded-lg shadow-2xl border border-white/20 overflow-hidden">
                <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                            <h3 className="font-display text-xl md:text-2xl text-foreground">
                                SUA PRIVACIDADE IMPORTA
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
                                Nós usamos cookies para melhorar sua experiência, analisar o tráfego e fornecer publicidade personalizada.
                                Ao clicar em "Aceitar Todos", você concorda com o uso de todos os cookies.
                                Você pode personalizar suas preferências ou rejeitar cookies não essenciais.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="btn-outline-brand text-sm py-2 px-4 hover:bg-secondary/80"
                            >
                                {showDetails ? 'Menos Detalhes' : 'Personalizar'}
                            </button>
                            <button
                                onClick={rejectNonEssential}
                                className="btn-outline-brand text-sm py-2 px-4 whitespace-nowrap"
                            >
                                Rejeitar Ñ Essenciais
                            </button>
                            <button
                                onClick={acceptAll}
                                className="btn-brand text-sm py-2 px-6 shadow-glow"
                            >
                                Aceitar Todos
                            </button>
                        </div>
                    </div>

                    {/* Details Section (Expandable) */}
                    {showDetails && (
                        <div className="mt-6 pt-6 border-t border-border/50 animate-fade-in space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                                {/* Essential */}
                                <div className="flex items-start gap-3 p-3 rounded-md bg-secondary/30 border border-border/30">
                                    <div className="mt-1">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <Label className="font-semibold">Essenciais</Label>
                                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">Sempre Ativo</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Necessários para o site funcionar corretamente (login, carrinho, etc).</p>
                                    </div>
                                </div>

                                {/* Analytics */}
                                <div className="flex items-start gap-3 p-3 rounded-md bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors">
                                    <div className="mt-1">
                                        <Switch
                                            id="analytics"
                                            checked={preferences.analytics}
                                            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="analytics" className="font-semibold cursor-pointer">Análises</Label>
                                        <p className="text-xs text-muted-foreground mt-1">Nos ajuda a entender como os visitantes interagem com o site.</p>
                                    </div>
                                </div>

                                {/* Marketing */}
                                <div className="flex items-start gap-3 p-3 rounded-md bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors">
                                    <div className="mt-1">
                                        <Switch
                                            id="marketing"
                                            checked={preferences.marketing}
                                            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="marketing" className="font-semibold cursor-pointer">Marketing</Label>
                                        <p className="text-xs text-muted-foreground mt-1">Usado para exibir anúncios relevantes para você em outros sites.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-2">
                                <button
                                    onClick={handleSaveCustom}
                                    className="btn-brand text-xs py-2 px-6"
                                >
                                    Salvar Preferências
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
