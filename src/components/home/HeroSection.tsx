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


    </section>
  );
}
