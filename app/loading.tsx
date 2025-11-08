"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="relative w-16 h-16 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <div className="absolute w-12 h-12 border-4 border-[#132347] border-t-transparent rounded-full"></div>
        <motion.span
          className="absolute w-4 h-4 bg-[#FACC15] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        ></motion.span>
      </motion.div>
    </div>
  );
}
