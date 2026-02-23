import { usePageTransition } from "@/contexts/PageTransitionContext";
import logoTransition from "/logo_transition/logo-removebg-preview.png";

export function PageTransition() {
    const { phase } = usePageTransition();

    if (phase === "idle") return null;

    return (
        <div
            className={`page-transition-overlay ${phase === "entering" ? "page-transition-enter" : ""
                } ${phase === "exiting" ? "page-transition-exit" : ""}`}
        >
            <img
                src={logoTransition}
                alt="BudLab"
                className="page-transition-logo"
            />
        </div>
    );
}
