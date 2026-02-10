import heroBanner from "@/assets/hero-banner-v2.jpg";

export function HeroSection() {
  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Background Image */}
      <div className="w-full md:absolute md:inset-0 z-0">
        <img
          src={heroBanner}
          alt="BUDLAB Streetwear"
          className="w-full h-auto md:h-full md:object-cover"
        />
        {/* Removed overlay gradient and text content as requested */}
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
