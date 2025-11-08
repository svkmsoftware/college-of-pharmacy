"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const affiliations = [
  {
    name: "University of Mumbai",
    logo: "/images/affiliations/mumbai_university.jpg",
    link: "https://mu.ac.in/",
  },
  {
    name: "AICTE - All India Council for Technical Education",
    logo: "/images/affiliations/aicte.png",
    link: "https://www.aicte-india.org/",
  },
  {
    name: "PCI - Pharmacy Council of India",
    logo: "/images/affiliations/pci.png",
    link: "https://www.pci.nic.in/",
  },
  {
    name: "DTE - Directorate of Technical Education, Maharashtra",
    logo: "/images/affiliations/dte.gif",
    link: "https://dtemaharashtra.gov.in/",
  },
];

export default function Affiliations() {
  return (
    <section className="py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#132347] mb-4 relative inline-block">
          Our Affiliations
          <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are proud to be affiliated with recognized academic and regulatory
          bodies that ensure quality education and uphold professional standards
          in pharmaceutical sciences.
        </p>

        {/* Affiliations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {affiliations.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-white hover:bg-white border border-gray-200 hover:border-yellow-500 shadow-md hover:shadow-xl rounded-2xl p-6 transition-all flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4 grayscale hover:grayscale-0 transition duration-300">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#132347]">{item.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
