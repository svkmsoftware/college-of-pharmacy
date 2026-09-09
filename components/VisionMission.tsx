"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-16 md:py-20 text-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Highlighted Admission Link & Portal Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 relative overflow-hidden rounded-2xl border-2 border-yellow-400 bg-gradient-to-r from-[#132347] via-[#1b315f] to-[#132347] p-5 sm:p-6 shadow-[0_0_20px_rgba(234,179,8,0.35)]"
        >
          {/* Highlight Glow */}
          <div className="absolute inset-0 bg-yellow-400/5 animate-pulse pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-[#132347] text-xl font-bold shadow-lg shrink-0">
                🎓
              </div>

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-yellow-300 font-medium">
                  Admissions Schedule | Academic Year 2026-27
                </p>

                
              </div>
            </div>

            {/* Action Button: Admission Portal Link */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
              <a
                href="https://sdcappscs.svkm.ac.in:44300/irj/portal"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#132347] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-yellow-400/50"
              >
                Apply for Admission
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#132347] border-l-4 border-yellow-500 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-shadow"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3 sm:mb-4">
              Vision
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              To pursue excellence in pharmaceutical education and research to
              develop competent professionals.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#132347] border-l-4 border-yellow-500 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-shadow"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3 sm:mb-4">
              Mission
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg list-disc list-inside text-gray-300">
              <li>
                To impart quality pharma education that leads to a self-reliant
                student community through efficient faculty & state-of-the-art
                infrastructure.
              </li>
              <li>
                To inculcate professional skills to cater the current needs of
                the pharmaceutical industry.
              </li>
              <li>
                To develop centers of excellence in pharmaceutical research and
                training.
              </li>
              <li>
                To nurture holistic development of pharmacists contributing to
                socio-healthcare systems.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Program Educational Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#132347] border-l-4 border-yellow-500 p-6 sm:p-8 rounded-2xl shadow-lg mt-10 sm:mt-12 hover:shadow-yellow-500/20 transition-shadow"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3 sm:mb-4">
            Program Educational Objectives
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg list-decimal list-inside text-gray-300">
            <li>
              Graduates will establish themselves in different sectors of the
              pharmaceutical industry.
            </li>
            <li>Graduates will pursue higher studies.</li>
            <li>
              Graduates will contribute to the healthcare sector and serve the
              society.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
