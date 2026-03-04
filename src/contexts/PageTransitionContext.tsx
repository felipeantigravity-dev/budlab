import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Rotas que disparam a transição
const TRANSITION_ROUTES = ["/", "/produtos", "/sobre", "/login", "/wishlist", "/carrinho", "/perfil"];

type TransitionPhase = "idle" | "entering" | "visible" | "exiting";

interface PageTransitionContextType {
    phase: TransitionPhase;
    startTransition: (to: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
    phase: "idle",
    startTransition: () => { },
});

export function PageTransitionProvider({ children }: { children: ReactNode }) {
    const [phase, setPhase] = useState<TransitionPhase>("idle");
    const navigate = useNavigate();

    const startTransition = useCallback(
        (to: string) => {
            // Só dispara transição para as rotas principais
            if (!TRANSITION_ROUTES.includes(to)) {
                navigate(to);
                return;
            }

            // Fase 1: Fade in do overlay (0.4s)
            setPhase("entering");

            setTimeout(() => {
                // Fase 2: Logo visível (0.6s) — navega para a nova rota por baixo
                setPhase("visible");
                navigate(to);

                setTimeout(() => {
                    // Fase 3: Fade out do overlay (0.4s)
                    setPhase("exiting");

                    setTimeout(() => {
                        // Transição completa
                        setPhase("idle");
                    }, 400);
                }, 600);
            }, 400);
        },
        [navigate]
    );

    return (
        <PageTransitionContext.Provider value={{ phase, startTransition }}>
            {children}
        </PageTransitionContext.Provider>
    );
}

export function usePageTransition() {
    return useContext(PageTransitionContext);
}
