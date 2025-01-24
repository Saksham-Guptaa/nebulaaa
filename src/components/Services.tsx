"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contentData = [
  {
    heading: "POLICY MAKING",
    content:
      "Nebula Accelerator is deeply involved in shaping policies to support innovation, entrepreneurship, and the startup ecosystem, particularly in the defense and technology sectors. We collaborate with key stakeholders to drive impactful change.",
    image: "/policy.jpg",
  },
  {
    heading: "DEFENCE PARTNERS",
    content:
      "We collaborate with defense industry leaders and partners to foster innovation in defense technology. Our network spans across government agencies, investors, and defense organizations, enabling startups to explore commercial applications.",
    image: "/defence.jpg",
  },
  {
    heading: "PROGRAMS",
    content:
      "Nebula Accelerator offers diverse programs such as Venture Studio, Pre-Incubation, Incubation, and Accelerator to help entrepreneurs develop, validate, and scale their ideas into successful ventures, with tailored support from industry mentors and experts.",
    image: "/programs.jpg",
  },
  {
    heading: "PORTFOLIOS",
    content:
      "Our portfolio consists of innovative startups from diverse sectors such as FinTech, AI/ML, Blockchain, Cleantech, Healthcare, and more. We support entrepreneurs in scaling their businesses and connecting with investors and strategic partners.",
    image: "/portfolio.jpg",
  },
  {
    heading: "PITCH ROOM",
    content:
      "The Pitch Room is where startups get the chance to showcase their ideas to investors, mentors, and industry experts. Entrepreneurs receive valuable feedback and exposure to secure funding, partnerships, and market opportunities.",
    image: "/pitchrooms.jpg",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentContent = contentData[currentIndex];

  return (
    <>
      {/* Desktop and Tablet View */}
      <div className="mt-6 hidden min-h-screen w-full flex-col items-center justify-center  bg-white p-4 md:flex">
        <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-5">
          {contentData.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-2xl font-extrabold uppercase focus:outline-none md:text-2xl ${
                index === currentIndex
                  ? "text-green-700"
                  : "text-[#A0B985] hover:text-green-500"
              }`}
            >
              {item.heading}
            </button>
          ))}
        </div>

        <motion.div
          key={currentContent.heading}
          className="mt-8 flex w-full max-w-4xl flex-col items-center justify-between md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-300 shadow-lg md:w-1/2">
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 w-full md:ml-8 md:mt-0 md:w-1/2">
            <p className="font-bold text-[#A0B985]">{currentContent.content}</p>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-start justify-between space-y-8 px-4 md:hidden">
        <div className="flex flex-col space-y-4">
          {contentData.map((item, index) => (
            <button
              key={index}
              className={`text-left text-4xl font-extrabold ${
                index === currentIndex ? "text-green-700" : "text-gray-400"
              } transition-colors duration-300`}
              onClick={() => setCurrentIndex(index)}
            >
              {item.heading}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent.heading}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="h-40 w-full rounded-md object-cover"
            />
            <p className="text-lg font-semibold text-gray-700">
              {currentContent.content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Services;
