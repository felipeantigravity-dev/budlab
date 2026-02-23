import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

// Ícone TikTok (SVG inline, pois lucide-react não possui)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.54V6.78a4.85 4.85 0 0 1-1.06-.09z" />
    </svg>
  );
}

const navLinks = [
  { label: "REVENDEDORES", href: "#" },
  { label: "POLÍTICAS & TERMOS", href: "#" },
  { label: "CONTATO", href: "/contato" },
  { label: "TROCAS", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Links de navegação — esquerda */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-[11px] font-medium uppercase tracking-widest underline underline-offset-2 text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-widest underline underline-offset-2 text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Ícones sociais — direita */}
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-800 hover:text-gray-500 transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-gray-800 hover:text-gray-500 transition-colors"
          >
            <TikTokIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
