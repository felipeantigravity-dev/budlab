import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
    "/images/gallery/IMG_0562.JPG",
    "/images/gallery/IMG_0563.JPG",
    "/images/gallery/IMG_0578.JPG",
    "/images/gallery/IMG_0623.JPG",
    "/images/gallery/IMG_0628.JPG",
    "/images/gallery/IMG_0634.JPG",
    "/images/gallery/IMG_0643.JPG",
    "/images/gallery/IMG_0647.JPG",
    "/images/gallery/IMG_0656.JPG",
    "/images/gallery/IMG_0657.JPG",
    "/images/gallery/IMG_0710.JPG",
    "/images/gallery/IMG_0728.JPG",
    "/images/gallery/IMG_0731.JPG",
    "/images/gallery/IMG_0755.JPG",
    "/images/gallery/IMG_0759.JPG",
    "/images/gallery/IMG_0760.JPG",
    "/images/gallery/IMG_0845.JPG",
    "/images/gallery/IMG_0849.JPG",
    "/images/gallery/IMG_0850.JPG",
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
            <div className="relative group px-4 md:px-12">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-4">
                        {images.map((src, index) => (
                            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] pl-4 min-w-0" key={index}>
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
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
