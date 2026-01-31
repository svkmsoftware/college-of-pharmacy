"use client";

import { motion } from "framer-motion";
import { VideoOff } from "lucide-react";

export default function CollegeVideo() {
  return (
    <section className="bg-[#132347] py-20 text-center text-white relative overflow-hidden">
      {/* Gradient overlay */}
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
          className="
            relative aspect-video max-w-4xl mx-auto
            rounded-3xl overflow-hidden
            border-4 border-yellow-500
            bg-white/10 backdrop-blur-sm
            flex items-center justify-center
            shadow-[0_0_30px_-5px_rgba(234,179,8,0.4)]
          "
        >
          {/* Coming Soon Content */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">
                <VideoOff size={32} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Video Coming Soon
            </h3>
            <p className="text-gray-300 max-w-sm mx-auto">
              We are currently preparing an official campus video.  
              Please check back soon to explore our college visually.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
