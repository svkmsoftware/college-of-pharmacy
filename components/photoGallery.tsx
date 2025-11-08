"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/campus1.webp",
  "/images/campus2.jpg",
  "/images/campus3.jpeg",
  "/images/campus4.jpeg",
  "/images/campus5.jpg",
  "/images/campus6.jpeg",
];

export default function FlatCenterCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const len = images.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 4500);
    return () => clearInterval(t);
  }, [paused, len]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);
  const goTo = (i: number) => setIndex(i % len);

  const getOffset = (i: number) => {
    let diff = i - index;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <section
      className="bg-[#f8f9fb] py-16"
      aria-label="Campus infrastructure carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#132347] mb-4 relative inline-block">
          Our Campus
          <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-5">
          We are proud to be affiliated with recognized academic and regulatory
          bodies that ensure quality education and uphold professional standards
          in pharmaceutical sciences.
        </p>

        <div
          ref={wrapRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          {/* Prev */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 bg-yellow-500 text-[#132347] rounded-full shadow-lg hover:scale-105 transition"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <div
              className="relative flex items-center justify-center"
              style={{ height: 340 }}
            >
              {images.map((src, i) => {
                const offset = getOffset(i);
                const abs = Math.abs(offset);
                const visible = abs <= 2;
                const baseWidth = 340;
                const spacing = 220;
                const translateX = offset * spacing;

                const style: React.CSSProperties = {
                  transform: `translateX(${translateX}px) scale(${
                    offset === 0
                      ? 1
                      : offset === 1 || offset === -1
                      ? 0.93
                      : 0.85
                  })`,
                  transition:
                    "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms",
                  opacity: visible ? 1 : 0,
                  zIndex: 50 - abs,
                };

                const extraClass =
                  Math.abs(offset) > 2 ? "hidden md:block" : "block";

                const shadowClass =
                  offset === 0
                    ? "shadow-2xl ring-4 ring-yellow-500/10"
                    : "shadow-lg";

                return (
                  <div
                    key={i}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${extraClass}`}
                    style={style}
                    role="group"
                    aria-hidden={!visible}
                  >
                    <div
                      className={`rounded-xl overflow-hidden ${shadowClass} transition-transform border-4 border-yellow-500/70`}
                      style={{
                        width: baseWidth,
                        height: 250,
                      }}
                    >
                      <img
                        src={src}
                        alt={`campus-${i + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next */}
          <button
            aria-label="Next"
            onClick={next}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 bg-yellow-500 text-[#132347] rounded-full shadow-lg hover:scale-105 transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-yellow-500 scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[role="group"] {
            display: none;
          }
          div[role="group"][aria-hidden="false"] {
            display: block;
            position: relative !important;
            left: 0 !important;
            transform: translateX(0) scale(1) !important;
            margin: 0 auto;
          }
          .relative > div {
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
