"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  date: string;
  route: string;
}

const blogItems: BlogItem[] = [
  {
    id: "1",
    title: "Transformation of Primary Education",
    slug: "primary-education",
    category: "Journalism",
    date: "Oct 24, 2023",
    route: "/journalism",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Winter Relief Distribution 2020",
    slug: "winter-relief-2020",
    category: "Voluntary",
    date: "Jan 14, 2020",
    route: "/voluntary-work",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  },
  {
    id: "3",
    title: "The Ancient Suryapuri Mango Tree",
    slug: "suryapuri-mango-tree",
    category: "Travel",
    date: "Nov 2023",
    route: "/travel",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "4",
    title: "Commercial Mango Farming Success",
    slug: "mango-farming",
    category: "Journalism",
    date: "Sep 15, 2023",
    route: "/journalism",
    image:
      "https://images.unsplash.com/photo-1553134839-89d81d421da1?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "5",
    title: "Environmental Service Campaign",
    slug: "environmental-service",
    category: "Voluntary",
    date: "Jul 20, 2020",
    route: "/voluntary-work",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  },
];

const BlogCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto scroll
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block border-l-2 border-black pl-3">
                Latest Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tighter">
                Journalism & Impact
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-all shadow-none"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-all shadow-none"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="embla overflow-hidden mb-12" ref={emblaRef}>
          <div className="embla__container flex">
            {blogItems.map((item) => (
              <div
                key={item.id}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <Reveal>
                  <Link
                    href={`${item.route}/${item.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                      <div className="relative aspect-16/10 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md text-black text-[8px] font-bold uppercase tracking-wider rounded-sm border border-gray-100">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col grow">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                          {item.date}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-6 group-hover:text-black transition-colors leading-tight line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-black text-[10px] font-bold uppercase tracking-widest">
                          Read Story <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Buttons */}
        <div className="flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-black w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
