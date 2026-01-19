"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import desciption from "../../data/aboutSvkm";
import Image from "next/image";

export default function page() {
  return (
    <>
      <PageHero
        bannerImage={"/images/page_banner.png"}
        pageTitle="About SVKM"
      />

      <div className="overflow-hidden">
        {/* ---------- About SVKM ---------- */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-[#132347]">
          <motion.div
            className="max-w-7xl mx-auto px-6 md:px-12 space-y-8"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {desciption.map((text, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed text-gray-700 md:text-base"
              >
                {text}
              </p>
            ))}
          </motion.div>
        </section>

        <section className="py-20 bg-[#f8f9fb] text-[#132347]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-[30%_70%] gap-12 items-center">
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
                “At SVKM, our unwavering mission is to provide students with
                world class education rooted in values, innovation and
                excellence. Since its inception, SVKM has been driven by the
                vision of nurturing individuals who embody the highest standards
                of integrity, while empowering them to aspire towards greater
                achievements.”
              </blockquote>

              <p className="text-lg text-gray-600 mb-4">
                We believe in creating a harmonious balance between tradition
                and modernity, instilling timeless values while equipping our
                students with the skills and perspectives required to succeed in
                a rapidly evolving world.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                Education at SVKM is not limited to academics alone; it is a
                holistic journey designed to cultivate well-rounded
                personalities. Through an ideal blend of academics,
                extracurricular activities, cultural engagements and sports; we
                aim to make learning an enriching and joyful experience. Our
                focus is on strengthening the physical, intellectual, emotional,
                psychological, and spiritual dimensions of every student,
                preparing them to confidently face the challenges of real life.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                Our greatest strength lies in our dedicated faculty and staff,
                who consistently mentor, guide, and support students with
                passion and commitment. Supported by state-of-the-art
                infrastructure, advanced facilities, and a technology driven
                campus, they create an environment where innovation thrives and
                talent flourishes.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                With this vision, SVKM continues to move forward as a beacon of
                learning, growth, and transformation. Together, we strive to
                shape not just successful professionals but also responsible,
                compassionate, and future ready global citizens.
              </p>

              <p className="text-base font-semibold text-[#132347] mt-6">
                <span className="block text-lg">— Shri. Amrish R. Patel</span>
                <span className="text-sm text-gray-500">President, Shri Vile Parle Kelavani Mandal</span>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
