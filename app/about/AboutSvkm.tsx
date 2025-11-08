"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSections() {
  return (
    <div className="overflow-hidden">
      {/* ---------- About SVKM ---------- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-[#132347]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/svkm-building.jpg"
              alt="SVKM Campus"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
              About SVKM
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Shri Vile Parle Kelavani Mandal (SVKM) is a leading educational
              trust in India, committed to providing quality education and
              fostering excellence across all disciplines. Since its inception
              in 1934, SVKM has established a wide network of prestigious
              institutions that focus on academic innovation, societal
              contribution, and holistic student development.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With decades of legacy and a forward-thinking vision, SVKM
              continues to shape the future by nurturing young minds and
              preparing them to meet global standards in education and
              professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- About SVKM COP ---------- */}
      <section className="py-20 bg-gradient-to-b from-[#132347] to-[#1e2f63] text-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/svkm-cop.jpg"
              alt="SVKM College of Pharmacy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              SVKM’s College of Pharmacy
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
              Established under the aegis of Shri Vile Parle Kelavani Mandal
              (SVKM), College Of Pharmacy stands as a premier institute dedicated
              to excellence in pharmaceutical education and research. The
              college is affiliated to the University of Mumbai and approved by
              the All India Council for Technical Education (AICTE) and Pharmacy
              Council of India (PCI).
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              With modern infrastructure, a strong industry interface, and
              experienced faculty, SVKM’s College of Pharmacy nurtures competent
              professionals ready to meet the evolving global healthcare
              challenges.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
