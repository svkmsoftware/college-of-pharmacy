"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  bannerImage: string;
  pageTitle: string;
  description?: string;
}

export default function PageHero({
  bannerImage,
  pageTitle,
  description,
}: Props) {
  return (
    <section className="relative h-[40vh] md:h-[25vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImage} // replace with your image path
        alt={`${pageTitle} page banner`}
        fill
        className="object-cover brightness-[0.4]"
        priority
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
