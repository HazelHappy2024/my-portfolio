"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 max-w-6xl mx-auto pt-14">
      {/* Row: text left, illustration right — image self-stretches to match text height */}
      <div className="w-full flex items-center gap-12 lg:gap-20">

        {/* Text — left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <p className="font-sans text-xs tracking-widest uppercase font-light text-gray-400 mb-8">
            Sunnyvale, CA · Open to Work
          </p>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight text-black mb-6">
            Software
            <br />
            Engineer
          </h1>

          <p className="font-sans text-sm md:text-base font-light text-gray-500 tracking-wide mb-4">
            Backend Systems&nbsp;&nbsp;·&nbsp;&nbsp;Distributed Architecture&nbsp;&nbsp;·&nbsp;&nbsp;AI
          </p>

          <p className="font-serif text-base md:text-lg italic text-gray-400 mb-12">
            Former educator. Current engineer. Always learning.
          </p>

          <a
            href="#about"
            className="hero-link font-sans text-sm text-black underline underline-offset-4 hover:opacity-50 transition-opacity"
          >
            View my work{" "}
            <span className="arrow-bounce inline-block">↓</span>
          </a>
        </motion.div>

        {/* Illustration — right, desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="hidden md:flex shrink-0 self-stretch pointer-events-none select-none"
          style={{
            width: "550px",
            boxShadow:
              "0 0 60px 25px rgba(180, 160, 210, 0.35), 0 12px 48px rgba(160, 130, 200, 0.30)",
          }}
        >
          {/* Inner wrapper clips the image without cutting the outer shadow */}
          <div className="w-full h-full overflow-hidden" style={{ backgroundColor: "#F9F9F9" }}>
            <Image
              src="/student-drawing.jpg"
              alt="Student illustration"
              width={550}
              height={800}
              className="w-full h-full object-cover object-top"
              style={{
                mixBlendMode: "multiply",
                filter: "contrast(1.8) brightness(0.88) saturate(0.7)",
              }}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
