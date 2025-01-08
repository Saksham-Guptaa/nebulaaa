"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:px-16 lg:py-12">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <div className="text-center relative lg:text-left flex-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[110px] py-6 font-extrabold uppercase leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            NEBULA ACCELERATOR
          </motion.h1>
          <motion.span
            className="text-xs sm:text-sm md:text-xl lg:text-3xl font-extrabold absolute right-4 bottom-2 lg:bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            EST.2021
          </motion.span>
        </div>
      </motion.div>

      {/* Video Section */}
      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
  <div className="w-full">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-[300px] md:h-[350px] lg:h-[600px] object-cover rounded-lg shadow-lg"
    >
      <source
        src="https://res.cloudinary.com/dxwea32ih/video/upload/v1731327818/qb301sp1orhuhu1fzoyl.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

    </div>
  );
};

export default Hero;