import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/budlab-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <img src={logo} alt="BUDLAB" className="h-28 md:h-44 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/produtos"
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              Produtos
            </Link>
            <Link
              to="/sobre"
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              Sobre
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
              >
                <User size={18} />
                <span>Entrar</span>
              </Link>
            )}

            <Link
              to="/carrinho"
              className="relative flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

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
            <Link
              to="/"
              className="text-lg font-medium uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/produtos"
              className="text-lg font-medium uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              to="/sobre"
              className="text-lg font-medium uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            {user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="text-lg font-medium uppercase tracking-wider py-2 text-left"
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="text-lg font-medium uppercase tracking-wider py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
