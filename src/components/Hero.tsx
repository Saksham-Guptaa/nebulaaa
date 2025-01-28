"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:px-16 lg:py-12">
      <motion.div
        className="flex flex-col items-center gap-6 lg:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <div className="relative flex-1 text-center lg:text-left">
          <motion.h1
            className="py-6 text-3xl font-extrabold uppercase leading-tight sm:text-4xl md:text-6xl lg:text-[80px] xl:text-[110px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            NEBULA ACCELERATOR
          </motion.h1>
          <motion.span
            className="absolute bottom-2 right-4 text-xs font-extrabold sm:text-sm md:text-xl lg:bottom-0 lg:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            EST.2021
          </motion.span>
        </div>
      </motion.div>

      {/* Video Section */}
      <div className="mt-8 flex flex-col items-center justify-between gap-6 lg:mt-12 lg:flex-row">
        <div className="w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[300px] w-full rounded-lg object-cover shadow-lg md:h-[350px] lg:h-[600px]"
          >
            <source
              src="https://res.cloudinary.com/dski9pira/video/upload/v1738039462/video5_jynsx9.mp4"
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
