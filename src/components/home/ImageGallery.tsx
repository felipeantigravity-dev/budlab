import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
    { webp: "/images/gallery/webp/IMG_0562.webp", fallback: "/images/gallery/IMG_0562.JPG" },
    { webp: "/images/gallery/webp/IMG_0563.webp", fallback: "/images/gallery/IMG_0563.JPG" },
    { webp: "/images/gallery/webp/IMG_0578.webp", fallback: "/images/gallery/IMG_0578.JPG" },
    { webp: "/images/gallery/webp/IMG_0623.webp", fallback: "/images/gallery/IMG_0623.JPG" },
    { webp: "/images/gallery/webp/IMG_0628.webp", fallback: "/images/gallery/IMG_0628.JPG" },
    { webp: "/images/gallery/webp/IMG_0634.webp", fallback: "/images/gallery/IMG_0634.JPG" },
    { webp: "/images/gallery/webp/IMG_0643.webp", fallback: "/images/gallery/IMG_0643.JPG" },
    { webp: "/images/gallery/webp/IMG_0647.webp", fallback: "/images/gallery/IMG_0647.JPG" },
    { webp: "/images/gallery/webp/IMG_0656.webp", fallback: "/images/gallery/IMG_0656.JPG" },
    { webp: "/images/gallery/webp/IMG_0657.webp", fallback: "/images/gallery/IMG_0657.JPG" },
    { webp: "/images/gallery/webp/IMG_0710.webp", fallback: "/images/gallery/IMG_0710.JPG" },
    { webp: "/images/gallery/webp/IMG_0728.webp", fallback: "/images/gallery/IMG_0728.JPG" },
    { webp: "/images/gallery/webp/IMG_0731.webp", fallback: "/images/gallery/IMG_0731.JPG" },
    { webp: "/images/gallery/webp/IMG_0755.webp", fallback: "/images/gallery/IMG_0755.JPG" },
    { webp: "/images/gallery/webp/IMG_0759.webp", fallback: "/images/gallery/IMG_0759.JPG" },
    { webp: "/images/gallery/webp/IMG_0760.webp", fallback: "/images/gallery/IMG_0760.JPG" },
    { webp: "/images/gallery/webp/IMG_0845.webp", fallback: "/images/gallery/IMG_0845.JPG" },
    { webp: "/images/gallery/webp/IMG_0849.webp", fallback: "/images/gallery/IMG_0849.JPG" },
    { webp: "/images/gallery/webp/IMG_0850.webp", fallback: "/images/gallery/IMG_0850.JPG" },
];

export function ImageGallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="bg-background py-10 snap-start">
            <div className="relative group">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                        {images.map((img, index) => (
                            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] min-w-0" key={index}>
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <picture>
                                        <source srcSet={img.webp} type="image/webp" />
                                        <img
                                            src={img.fallback}
                                            alt={`Gallery image ${index + 1}`}
                                            loading={index < 3 ? "eager" : "lazy"}
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </picture>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm z-10 h-10 w-10 md:h-12 md:w-12 rounded-full border border-border/50"
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm z-10 h-10 w-10 md:h-12 md:w-12 rounded-full border border-border/50"
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </Button>
            </div>
        </section>
    );
}
