"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: number;
  img: string;
  title?: string;
  desc?: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    img: "/images/carousel/slider_1.png",
    title: "Welcome to SVKM’s College of Pharmacy",
    desc: "Empowering the next generation of healthcare innovators.",
  },
  {
    id: 2,
    img: "/images/carousel/slider_4.png",
    title: "World-Class Infrastructure",
    desc: "State-of-the-art laboratories and modern learning spaces.",
  },
  {
    id: 3,
    img: "/images/carousel/slider_3.png",
    title: "Academic Excellence",
    desc: "Committed to quality education and impactful research.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<number | null>(null);
  const length = SLIDES.length;

  // autoplay
  useEffect(() => {
    if (paused) return;
    autoRef.current = window.setInterval(() => {
      setIndex((i) => (i === length - 1 ? 0 : i + 1));
    }, 5000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [paused, length]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? length - 1 : i - 1));
  const next = () => setIndex((i) => (i === length - 1 ? 0 : i + 1));
  const goTo = (i: number) => setIndex(i);

  return (
    <section
      className="relative w-full h-[72vh] sm:h-[60vh] md:h-[64vh] lg:h-[72vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
            i === index ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
          }`}
        >
          <Image
            src={s.img}
            alt={s.title || `slide-${s.id}`}
            fill
            priority={i === 0}
            className="object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* caption */}
          <div className="absolute bottom-12 left-6 sm:left-10 md:left-16 lg:left-20 z-30 max-w-3xl text-white">
            {s.title && (
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                {s.title}
              </h2>
            )}
            {s.desc && <p className="mt-2 text-sm sm:text-base text-gray-200">{s.desc}</p>}
          </div>
        </div>
      ))}

      {/* always-visible controls (left/right) */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-md transition"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-md transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* always-visible dots (indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-amber-400 w-4 h-4 shadow" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
