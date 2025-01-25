// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// const caseStudies = [
//   {
//     images: [
//       "/cs1.jpeg",
//       "/cs2.jpeg",
//       "/cs3.jpeg",
//       "/cs4.jpeg",
//       "/cs5.jpeg",
//       "/cs6.jpeg",
//     ],
//     text: [
//       "Built partnerships with government bodies, academia, and private enterprises to support innovation.",
//       "Connected start-ups with venture capitalists, angel investors, and strategic advisors.",
//     ],
//     workNumber: "Case Study 1",
//   },
//   {
//     images: [
//       "/cs1.jpeg",
//       "/cs2.jpeg",
//       "/cs3.jpeg",
//       "/cs4.jpeg",
//       "/cs5.jpeg",
//       "/cs6.jpeg",
//     ],
//     text: [
//       "Blockchain & AI CoE: Blockchain-backed transparency and trust in business operations.",
//       "FinTech & EdTech: Promoting advanced financial solutions and educational technologies.",
//     ],
//     workNumber: "Case Study 2",
//   },
//   // {
//   //   images: [
//   //     "/image13.jpg",
//   //     "/image14.jpg",
//   //     "/image15.jpg",
//   //     "/image16.jpg",
//   //     "/image17.jpg",
//   //     "/image18.jpg",
//   //   ],
//   //   text: [
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   //       "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
//   //     ],
//   //   workNumber: "Case Study 3",
//   // },
//   // {
//   //   images: [
//   //     "/image19.jpg",
//   //     "/image20.jpg",
//   //     "/image21.jpg",
//   //     "/image22.jpg",
//   //     "/image23.jpg",
//   //     "/image24.jpg",
//   //   ],
//   //   text: [
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur iaculis felis, eget scelerisque nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   //       "Donec sit amet magna auctor orci feugiat consectetur. Morbi a dui quam. Morbi iaculis sit amet lorem sed eleifend. Pellentesque pharetra consequat quam, nec pellentesque.",
//   //     ],
//   //   workNumber: "Case Study 4",
//   // },
// ];
// const CaseStudy: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col space-y-10 bg-white px-6 py-8 md:px-16 lg:px-24">
//         {/* Header */}
//         <h1 className="text-4xl font-extrabold tracking-wide text-gray-800">
//           Featured
//         </h1>

//         {/* Main Content */}
//         <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0">
//           {/* Images Section */}
//           <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
//             {caseStudies[currentIndex].images.map((src, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-36 w-36 overflow-hidden rounded-lg bg-gray-100 shadow-md sm:h-48 sm:w-48 md:h-56 md:w-56"
//               >
//                 <img
//                   src={src}
//                   alt={`Case Study ${currentIndex + 1} Image ${index + 1}`}
//                   className="h-full w-full object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* Text and Work Section */}
//           <div className="flex-1 space-y-8">
//             {/* Text Section */}
//             <div className="space-y-6">
//               {caseStudies[currentIndex].text.map((text, index) => (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-base leading-relaxed text-gray-700 md:text-lg"
//                 >
//                   {text}
//                 </motion.p>
//               ))}
//             </div>

//             {/* All Work Section */}
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">All Work</h2>
//               <ul className="mt-4 space-y-2">
//                 {caseStudies.map((caseStudy, index) => (
//                   <li
//                     key={index}
//                     className={`cursor-pointer text-lg transition-all md:text-xl ${
//                       index === currentIndex
//                         ? "font-semibold text-blue-600"
//                         : "text-gray-500 hover:text-gray-700"
//                     }`}
//                   >
//                     {caseStudy.workNumber}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CaseStudy;

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function InvestNowPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Invest in Innovation with Nebula Accelerator
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Empowering startups with funding, mentorship, and global networks to
            shape the future of innovation.
          </p>
          <Link
            href="/pages/data-tables"
            className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 shadow-md hover:bg-gray-100"
          >
            Explore Investment Opportunities
          </Link>
        </div>
      </section>

      {/* About Nebula Accelerator */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              About Nebula Accelerator
            </h2>
            <p className="mb-6 text-gray-600">
              Nebula Accelerator is at the forefront of empowering startups
              through a unique ecosystem of collaboration, mentorship, and
              investment. We bring together government partnerships, military
              veterans, academic institutions, and global networks to provide
              startups with holistic support for growth and success.
            </p>
            <ul className="mb-6 list-inside list-disc text-gray-600">
              <li>Comprehensive incubation and acceleration programs.</li>
              <li>
                Access to alternative investment funds and global partnerships.
              </li>
              <li>Dedicated mentorship and guidance from industry leaders.</li>
            </ul>
            <Link
              href="/about"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700"
            >
              Learn More About Us
            </Link>
          </div>
          <div>
            <img
              src="/plane.jpg"
              alt="Nebula Ecosystem"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Angel Investors",
                description:
                  "Support early-stage startups with high-growth potential and become a catalyst for innovation.",
              },
              {
                title: "Venture Capitalists",
                description:
                  "Invest in scalable startups with proven traction and promising market opportunities.",
              },
              {
                title: "Global Partnerships",
                description:
                  "Collaborate with international investors to expand market reach and foster cross-border innovation.",
              },
            ].map((opportunity, idx) => (
              <Card key={idx} className="rounded-lg p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600">{opportunity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Transform the Future?
          </h2>
          <p className="mb-8 text-lg">
            Join Nebula Accelerator and be part of a thriving ecosystem that
            nurtures innovation and drives success.
          </p>
          <Button className="rounded-lg bg-white px-6 py-3 font-medium text-indigo-600 shadow-md hover:bg-gray-100">
            Start Your Journey Today
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
