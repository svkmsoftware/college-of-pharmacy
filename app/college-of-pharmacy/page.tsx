"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import desciption from "../../data/aboutCop";
import Image from "next/image";

export default function page() {
  return (
    <>
      <PageHero
        bannerImage={"/images/page_banner.png"}
        pageTitle="About College of Pharmacy"
      />

      <div className="overflow-hidden">
        {/* ---------- About College of Pharmacy ---------- */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-[#132347]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            {desciption.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-gray-700 md:text-base"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#f8f9fb] text-[#132347]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-[30%_70%] gap-12 items-top">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/faculty/Principal_Vivekkumar_Redasani.jpg"
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
                Message from the Principal
              </h2>

              <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-gray-700 leading-relaxed mb-6">
                The role of the pharmacist today extends far beyond dispensing
                medicines; it now encompasses patient care, research,
                innovation, administration, and contributions to public health.
                With the continuous emergence of new diseases and complex health
                challenges, pharmacists are entrusted with the responsibility of
                not only delivering healthcare but also discovering and
                developing novel therapeutic solutions.
              </blockquote>

              <p className="text-lg text-gray-600 mb-4">
                At Shri Vile Parle Kelavani Mandal’s (SVKM) College of Pharmacy,
                Shirpur, we prepare our students to meet these evolving demands
                by imparting cutting-edge knowledge, practical skills, and a
                spirit of innovation. In the serene lap of nature, amidst a lush
                green campus, our institute offers the perfect environment for
                academic excellence, research, and holistic development.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Equipped with state-of-the-art infrastructure, advanced
                laboratories, a resource-rich library, and modern digital
                learning facilities, we ensure that our students are always at
                the forefront of pharmaceutical sciences. Our highly qualified
                and dedicated faculty members, with strong research credentials
                including patents and publications in reputed national and
                international journals, mentor students to think critically,
                innovate boldly, and serve society with responsibility.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Beyond academics, we firmly believe in nurturing the all-round
                development of students. By encouraging active participation in
                intercollegiate, university, state, and national-level events,
                we cultivate leadership, teamwork, and creativity.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our Training and Placement Cell bridges the gap between academia
                and industry, creating opportunities with leading national and
                multinational companies while also guiding students towards
                higher studies and research careers.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                At SVKM’s College of Pharmacy, our vision is not only to create
                competent professionals but also to shape responsible citizens
                with strong values, committed to advancing healthcare and
                improving human life.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I warmly invite the aspiring young generation to join
                our nature-bound campus at Shirpur, experience the difference,
                and carve out a meaningful place in the global field of
                healthcare and pharmaceutical sciences.
              </p>

              <p className="text-base font-semibold text-[#132347] mt-6">
                <span className="block text-lg">
                  — Dr. Vivekkumar Redasani{" "}
                </span>
                <span className="text-sm text-gray-500">
                  Principal, SVKM's College of Pharmacy
                </span>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
