export function BrandBanner() {
  return (
    <section className="py-20 bg-foreground text-background overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="font-display text-6xl md:text-8xl mx-8 opacity-20"
          >
            BUDLAB WEAR •
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
