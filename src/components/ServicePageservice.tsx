"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contentData = [
  {
    heading: "POLICY MAKING",
    content:
      "Nebula Accelerator is deeply involved in shaping policies to support innovation, entrepreneurship, and the startup ecosystem, particularly in the defence and technology sectors. We collaborate with key stakeholders to drive impactful change.",
    image: "/policy.jpg",
  },
  {
    heading: "DEFENCE PARTNERS",
    content:
      "We collaborate with defence industry leaders and partners to foster innovation in defence technology. Our network spans across government agencies, investors, and defence organizations, enabling startups to explore commercial applications.",
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

const ServicePageService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentContent = contentData[currentIndex];

  return (
    <div className="w-full bg-white">
      {/* Desktop View */}
      <div className="md: hidden w-full grid-cols-[2fr_1fr_1fr] items-start gap-8 px-6 py-10 md:grid">
        {/* Sidebar */}
        <div className=" flex flex-col items-start space-y-4">
          {contentData.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-justify text-3xl font-extrabold uppercase transition-colors duration-300 md:text-4xl lg:text-6xl ${
                index === currentIndex
                  ? "text-red-700"
                  : "text-gray-400 hover:text-red-500"
              }`}
            >
              {item.heading}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          key={currentContent.heading}
          className="col-span-2 flex items-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-1/2">
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">
              {currentContent.content}
            </p>
            <a
              href="#"
              className="mt-4 inline-block font-bold text-red-700 underline hover:text-red-900"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-start space-y-8 px-6 py-10 md:hidden">
        <div className="space-y-4">
          {contentData.map((item, index) => (
            <button
              key={index}
              className={`text-justify text-3xl  font-extrabold tracking-wide ${
                index === currentIndex ? "text-red-700" : "text-gray-400"
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
            className="flex flex-col items-start space-y-4"
          >
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="h-40 w-full rounded-md object-cover shadow-md"
            />
            <p className="text-lg text-gray-700">{currentContent.content}</p>
            <a
              href="#"
              className="font-bold text-red-700 underline hover:text-red-900"
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicePageService;
