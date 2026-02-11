import heroBanner from "@/assets/hero-banner-v2.jpg";
import heroBannerMobile from "@/assets/hero-banner-mobile.png";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Background Image */}
      <div className="w-full md:absolute md:inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroBannerMobile} />
          <img
            src={heroBanner}
            alt="BUDLAB Streetwear"
            className="w-full h-auto md:h-full md:object-cover"
          />
        </picture>
        {/* Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            to="/produtos"
            className="mt-60 md:mt-80 px-8 py-3 border border-white bg-transparent text-white font-bold text-sm uppercase tracking-widest hover:border-black hover:text-black transition-colors duration-300 rounded-none"
          >
            COMPRE AGORA
          </Link>
        </div>
      </div>


    </section>
  );
}
