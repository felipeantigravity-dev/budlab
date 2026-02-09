import { useState, useEffect } from "react";
import { X } from "lucide-react";
import promoImage from "@/assets/modal-promo.png";

export function NewsletterModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already seen the modal in this session
        const hasSeenModal = sessionStorage.getItem("hasSeenNewsletterModal");

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("hasSeenNewsletterModal", "true");
            }, 2000); // 2 second delay

            return () => clearTimeout(timer);
        }
    }, []);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to WhatsApp community
        window.location.href = "https://chat.whatsapp.com/JgEZJEnrDz6EcdJX89nCYK?mode=gi_t&fbclid=PAZnRzaAPvf-lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaecgbcWE3pbbohKplF-vmxOdNRnltm-Sv4Nsph0UO41GXG-SdHC26CDvC5Low_aem_SJyIBTp_TLE2G5cQqxMr9w";
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in max-h-[85vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 left-4 z-10 bg-black text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] hidden md:block">
                    <img
                        src={promoImage}
                        alt="Grupo VIP Streetwear"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                    <div className="absolute bottom-6 left-6 right-6 text-white md:hidden">
                        <h3 className="font-display text-3xl leading-none mb-2">
                            ENTRE NO GRUPO VIP
                        </h3>
                        <p className="text-sm font-medium text-primary">GET 10% OFF</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-foreground">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                            Entre em nosso Grupo VIP
                        </p>
                        <div className="bg-primary text-primary-foreground py-3 px-6 inline-block transform -skew-x-6 mb-4">
                            <h2 className="font-display text-5xl md:text-6xl transform skew-x-6">
                                10% OFF!
                            </h2>
                        </div>
                        <p className="text-zinc-600 mt-2">
                            E receba 10% de desconto na sua compra
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Digite seu nome"
                                required
                                className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1">
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Digite seu sobrenome"
                                required
                                className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                                Celular
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="(99) 99999-9999"
                                required
                                className="w-full px-4 py-3 rounded-md border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-sm mt-6"
                        >
                            Quero meu desconto
                        </button>

                        <div className="flex items-start gap-2 mt-4">
                            <input
                                type="checkbox"
                                id="consent"
                                required
                                className="mt-1 border-gray-300 rounded text-primary focus:ring-primary"
                            />
                            <label htmlFor="consent" className="text-xs text-zinc-500 leading-tight">
                                Eu autorizo a comunicação via WhatsApp conforme a <a href="#" className="underline">Política de Privacidade</a>.
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
