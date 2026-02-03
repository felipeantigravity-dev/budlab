import { Layout } from "@/components/layout/Layout";

const Sobre = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <p className="text-primary font-medium uppercase tracking-widest mb-2">
                Nossa História
              </p>
              <h1 className="font-display text-5xl md:text-7xl mb-6">
                SOBRE A BUDLAB
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nascemos da cultura urbana, crescemos com a comunidade e 
                construímos muito mais do que roupas — construímos identidade.
              </p>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="animate-fade-in-up delay-100">
                <div className="aspect-square bg-foreground rounded-sm flex items-center justify-center mb-6">
                  <span className="font-display text-9xl text-primary">B</span>
                </div>
              </div>
              <div className="animate-fade-in-up delay-200 flex flex-col justify-center">
                <h2 className="font-display text-3xl mb-4">
                  AUTENTICIDADE ACIMA DE TUDO
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A BUDLAB wear surgiu em 2025 com uma missão clara: criar peças 
                  de streetwear que representem genuinamente a cultura urbana brasileira.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cada peça é cuidadosamente desenvolvida com materiais premium, 
                  unindo conforto, durabilidade e um design que conta histórias.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center animate-fade-in-up delay-100">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-primary-foreground">01</span>
                </div>
                <h3 className="font-display text-xl mb-2">QUALIDADE</h3>
                <p className="text-muted-foreground text-sm">
                  Materiais premium selecionados para máximo conforto e durabilidade
                </p>
              </div>
              <div className="text-center animate-fade-in-up delay-200">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-primary-foreground">02</span>
                </div>
                <h3 className="font-display text-xl mb-2">ORIGINALIDADE</h3>
                <p className="text-muted-foreground text-sm">
                  Designs exclusivos que expressam a verdadeira essência urbana
                </p>
              </div>
              <div className="text-center animate-fade-in-up delay-300">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-primary-foreground">03</span>
                </div>
                <h3 className="font-display text-xl mb-2">COMUNIDADE</h3>
                <p className="text-muted-foreground text-sm">
                  Construímos juntos com quem vive e respira a cultura streetwear
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background p-12 rounded-sm text-center animate-fade-in-up">
              <h2 className="font-display text-3xl mb-4">
                FAÇA PARTE DA <span className="text-primary">COMUNIDADE</span>
              </h2>
              <p className="text-background/70 mb-6 max-w-md mx-auto">
                Siga-nos nas redes sociais e fique por dentro dos lançamentos 
                e novidades exclusivas.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 border border-background/30 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all font-medium"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-background/30 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all font-medium"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
