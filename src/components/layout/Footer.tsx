import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl tracking-wider">
                BUDLAB<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-background/70 max-w-md">
              Streetwear autêntico para quem vive a cultura urbana. 
              Qualidade premium, estilo único.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">LOJA</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-background/70 hover:text-primary transition-colors">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=camisetas" className="text-background/70 hover:text-primary transition-colors">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=moletons" className="text-background/70 hover:text-primary transition-colors">
                  Moletons
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=acessorios" className="text-background/70 hover:text-primary transition-colors">
                  Acessórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">INFO</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Trocas
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Envio
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 BUDLAB wear. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm">
            Made with 💚 in Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
