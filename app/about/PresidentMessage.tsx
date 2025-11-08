"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MessageFromPresident() {
  return (
    <section className="py-20 bg-[#f8f9fb] text-[#132347]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/president.jpg"
            alt="President of SVKM"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
            Message from the President
          </h2>

          <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-gray-700 leading-relaxed mb-6">
            “Education is not merely the accumulation of knowledge, but the
            illumination of the mind and the empowerment of character. At SVKM,
            our aim has always been to foster a culture of excellence,
            innovation, and service to society.”
          </blockquote>

          <p className="text-lg text-gray-600 mb-4">
            We take immense pride in our institutions that nurture young minds
            into professionals ready to shape a better world. Dr. Bhanuben
            Nanavati College of Pharmacy stands as one such institute where
            passion meets purpose, and where every student is encouraged to
            achieve their fullest potential.
          </p>

          <p className="text-base font-semibold text-[#132347] mt-6">
            <span className="block text-lg">— Shri Amrish Patel</span>
            <span className="text-sm text-gray-500">President, SVKM</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
