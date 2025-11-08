"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MessageFromPrincipal() {
  return (
    <>
      <section className="py-20 bg-gradient-to from-gray-50 to-white text-[#132347]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-sop-accent">
              Message from Principal
            </h2>

            <blockquote className="border-l-4 border-[#132347] pl-6 italic text-gray-700 leading-relaxed mb-6">
              "It gives me immense pleasure to welcome you to our esteemed
              institution. Our college stands committed to fostering academic
              excellence, innovation, and holistic development. We believe in
              empowering students with knowledge, values, and confidence to meet
              global challenges."
            </blockquote>

            <p className="text-lg text-gray-600 mb-4">
              With a dedicated faculty, modern infrastructure, and a focus on
              quality education, we strive to create an environment conducive to
              learning, growth, and success.
            </p>

            <p className="text-base font-semibold text-[#132347] mt-6">
              <span className="block text-lg">— Principal</span>
              <span className="text-sm text-gray-500">
                President, Principal, SVKM College of Pharmacy
              </span>
            </p>
          </motion.div>
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
        </div>
      </section>
    </>
  );
}
