"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const caseStudies = [
  {
    images: [
      "/cs1.jpeg",
      "/cs2.jpeg",
      "/cs3.jpeg",
      "/cs4.jpeg",
      "/cs5.jpeg",
      "/cs6.jpeg",
    ],
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
    ],
    workNumber: "Case Study 1",
  },
  // {
  //   images: [
  //     "/image7.jpg",
  //     "/image8.jpg",
  //     "/image9.jpg",
  //     "/image10.jpg",
  //     "/image11.jpg",
  //     "/image12.jpg",
  //   ],
  //   text: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
  //     ],
  //   workNumber: "Case Study 2",
  // },
  // {
  //   images: [
  //     "/image13.jpg",
  //     "/image14.jpg",
  //     "/image15.jpg",
  //     "/image16.jpg",
  //     "/image17.jpg",
  //     "/image18.jpg",
  //   ],
  //   text: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
  //     ],
  //   workNumber: "Case Study 3",
  // },
  // {
  //   images: [
  //     "/image19.jpg",
  //     "/image20.jpg",
  //     "/image21.jpg",
  //     "/image22.jpg",
  //     "/image23.jpg",
  //     "/image24.jpg",
  //   ],
  //   text: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //       "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
  //     ],
  //   workNumber: "Case Study 4",
  // },
];
const CaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-10 bg-white px-6 py-8 md:px-16 lg:px-24">
        {/* Header */}
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-800">
          Featured
        </h1>

        {/* Main Content */}
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
            {caseStudies[currentIndex].images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="h-36 w-36 overflow-hidden rounded-lg bg-gray-100 shadow-md sm:h-48 sm:w-48 md:h-56 md:w-56"
              >
                <img
                  src={src}
                  alt={`Case Study ${currentIndex + 1} Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Text and Work Section */}
          <div className="flex-1 space-y-8">
            {/* Text Section */}
            <div className="space-y-6">
              {caseStudies[currentIndex].text.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-base leading-relaxed text-gray-700 md:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* All Work Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">All Work</h2>
              <ul className="mt-4 space-y-2">
                {caseStudies.map((caseStudy, index) => (
                  <li
                    key={index}
                    className={`text-lg transition-all md:text-xl ${
                      index === currentIndex
                        ? "font-semibold text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {caseStudy.workNumber}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudy;
