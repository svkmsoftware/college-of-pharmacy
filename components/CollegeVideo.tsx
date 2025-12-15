"use client";

import { motion } from "framer-motion";

export default function CollegeVideo() {
  return (
    <section className="bg-[#132347] py-20 text-center text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#132347] via-[#132347]/90 to-[#132347]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Glimpse of Our Campus Life
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Experience our vibrant campus, cutting-edge facilities, and the spirit
          of innovation that defines our college.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-4 border-yellow-500 shadow-[0_0_30px_-5px_rgba(234,179,8,0.4)]"
        >
          <iframe
            className="w-full h-full"
            // src="https://www.youtube.com/embed/zpOULjyy-n8?autoplay=0&rel=0"
            src="/videos/glimpsOfCollege.mp4"
            title="College Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
