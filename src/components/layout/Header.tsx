import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, User, Heart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import logo from "@/assets/budlab-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Helper para navegar com transição e fechar menu mobile
  const handleNav = (to: string) => {
    setIsMenuOpen(false);
    startTransition(to);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2 bg-transparent border-none cursor-pointer"
          >
            <img src={logo} alt="BUDLAB" className="h-28 md:h-44 object-contain" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNav("/")}
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNav("/produtos")}
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Produtos
            </button>
            <button
              onClick={() => handleNav("/sobre")}
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Sobre
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                {/* /perfil não é rota principal — Link normal */}
                <Link
                  to="/perfil"
                  className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors group"
                >
                  <User size={18} className="group-hover:text-primary transition-colors" />
                  <span>Minha Conta</span>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => handleNav("/login")}
                className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                <User size={18} />
                <span>Entrar</span>
              </button>
            )}

            {/* Wishlist */}
            <button
              onClick={() => handleNav("/wishlist")}
              className="relative flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              title="Lista de Desejos"
            >
              <Heart size={20} />
            </button>

            {/* Carrinho */}
            <button
              onClick={() => handleNav("/carrinho")}
              className="relative flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in-down">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => handleNav("/")}
              className="text-lg font-medium uppercase tracking-wider py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNav("/produtos")}
              className="text-lg font-medium uppercase tracking-wider py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Produtos
            </button>
            <button
              onClick={() => handleNav("/sobre")}
              className="text-lg font-medium uppercase tracking-wider py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Sobre
            </button>
            {user ? (
              <>
                <Link
                  to="/perfil"
                  className="text-lg font-medium uppercase tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Minha Conta
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="text-lg font-medium uppercase tracking-wider py-2 text-left text-red-500 bg-transparent border-none cursor-pointer"
                >
                  Sair
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNav("/login")}
                className="text-lg font-medium uppercase tracking-wider py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Entrar
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
