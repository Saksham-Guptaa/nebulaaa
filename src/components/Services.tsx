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
      <div className="hidden md:flex flex-col items-center justify-center mt-6 w-full min-h-screen bg-white p-4">
        

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-center">
          {contentData.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-2xl md:text-2xl font-extrabold uppercase focus:outline-none ${
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
          className="flex flex-col md:flex-row items-center justify-between mt-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src={currentContent.image}
              alt={currentContent.heading}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
            <p className="text-[#A0B985]">{currentContent.content}</p>
            <button className="mt-4 text-green-700 font-semibold hover:underline">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden justify-between items-start space-y-8 px-4">
        <div className="flex flex-col space-y-4">
          {contentData.map((item, index) => (
            <button
              key={index}
              className={`text-left font-extrabold text-4xl ${
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
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="text-lg font-semibold text-gray-700">
              {currentContent.content}
            </p>
            <a
              href="#"
              className="text-green-700 font-bold underline hover:text-green-900 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Services;
