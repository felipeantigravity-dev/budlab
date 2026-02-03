import { Link } from "react-router-dom";

export function AboutPreview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="text-primary font-medium uppercase tracking-widest mb-2">
              Sobre Nós
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              MAIS QUE ROUPAS,<br />
              <span className="text-primary">UM LIFESTYLE</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A BUDLAB nasceu da paixão pela cultura urbana e streetwear. 
              Cada peça é pensada para quem vive intensamente, 
              com materiais premium e designs autênticos que contam histórias.
            </p>
            <Link to="/sobre" className="btn-brand">
              Conhecer Mais
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
            <div className="aspect-square bg-foreground rounded-sm flex items-center justify-center">
              <span className="font-display text-7xl text-primary">01</span>
            </div>
            <div className="aspect-square bg-primary rounded-sm flex items-center justify-center mt-8">
              <span className="font-display text-7xl text-primary-foreground">25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
