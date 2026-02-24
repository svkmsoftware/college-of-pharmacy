"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "/images/campus/campus1.jpg",
  "/images/campus/campus2.jpg",
  "/images/campus/campus3.jpg",
  "/images/campus/campus4.jpg",
  "/images/campus/campus5.jpg",
  "/images/campus/campus6.jpg",
];

export default function CampusCarousel() {
  return (
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#132347] mb-3">Our Campus</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our campus — responsive, smooth, and beautifully 3D animated.
        </p>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // ⭐ show exactly 3 slides
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100, // lower depth → more visible side slides
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full pb-12"
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-yellow-500/40"
              style={{
                width: "300px", // ⭐ slightly smaller width for 3 to fit well
                height: "240px",
              }}
            >
              <img
                src={src}
                alt={`SVKM College of Pharmacy campus view ${i + 1}`}
                className="w-full h-full object-cover block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: #facc15;
          color: #132347;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: gray;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #facc15;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
