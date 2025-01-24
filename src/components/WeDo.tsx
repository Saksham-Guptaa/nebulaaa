"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContentType = {
  [key: string]: {
    points: string[];
    image: string;
    link: string;
  };
};

const titles = [
  "VENTURE STUDIOS",
  "PRE-INCUBATION",
  "INCUBATION",
  "ACCELERATOR",
  "AIF",
];

const content: ContentType = {
  "VENTURE STUDIOS": {
    points: [
      "1) Structured workshops for idea development.",
      "2) Mentorship and technical support provided.",
      "3) Collaboration with industry experts.",
    ],
    image: "/venture.jpg",
    link: "/services/venture-studio",
  },
  "PRE-INCUBATION": {
    points: [
      "1) Idea refinement and validation support.",
      "2) Connection with local incubation centers.",
      "3) Early-stage guidance for startups.",
    ],
    image: "/pre.png",
    link: "/services/pre-incubation",
  },

  INCUBATION: {
    points: [
      "1) Hands-on mentoring and resource access.",
      "2) Focus on building scalable businesses.",
      "3) Networking opportunities with industry leaders.",
    ],
    image: "/incubation.jpg",
    link: "/services/incubation",
  },

  ACCELERATOR: {
    points: [
      "1) Fast-track growth and market readiness.",
      "2) Expert mentorship for scaling startups.",
      "3) Funding opportunities and investor connections.",
    ],
    image: "/accelerator.png",
    link: "/services/accelerator",
  },

  AIF: {
    points: [
      "1) Opportunities for institutional funding..",
      "3) Demonstrates feasibility and scalability.",
    ],
    image: "/pilot.png",
    link: "/services/AIF",
  },
};
const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through titles every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeTitle = titles[activeIndex];
  const activeContent = content[activeTitle];

  return (
    <div className="mb-10 flex flex-col  items-start justify-between space-y-8 px-3 md:flex-row md:items-center md:space-y-0 md:px-10 md:py-6">
      {/* Left Section - Titles */}
      <div className="flex flex-col space-y-4 md:w-4/5">
        <h2 className="text-xl font-bold md:text-2xl">WHAT WE DO</h2>
        {titles.map((title, index) => (
          <button
            key={index}
            className={`text-left text-3xl font-extrabold md:text-4xl lg:text-6xl ${
              index === activeIndex ? "text-[#001F3FDB] " : "text-[#C5E6F4]"
            } transition-colors duration-300`}
            onClick={() => handleTitleClick(index)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Right Section - Content */}
      <div className="flex flex-col space-y-4 md:w-2/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTitle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-2"
          >
            <img
              src={activeContent.image}
              alt={activeTitle}
              className="h-40 w-80 rounded-md "
            />
            {activeContent.points.map((point, index) => (
              <p key={index} className="text-lg font-semibold text-gray-700">
                {point}
              </p>
            ))}
            <a
              href={activeContent.link}
              className="font-bold text-orange-500 underline transition-colors hover:text-orange-700"
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhatWeDo;
