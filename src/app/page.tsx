"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://res.cloudinary.com/dski9pira/video/upload/v1732814921/WhatsApp_Video_2024-11-28_at_22.54.34_4f813c93_ievodp.mp4"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Empowering Defense Tech Innovation
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Nebula Accelerator drives your sparking idea towards a successful
            business with mentoring, acceleration, and global expansion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gray-400 text-black " asChild>
              <Link href="/apply">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              className="bg-white/10  text-black backdrop-blur-sm"
              asChild
            >
              <Link href="/about">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            What We Do
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-6 transition-shadow hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-4 h-52 w-52"
                />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="flex min-h-screen flex-col items-center justify-center py-8">
        <p className="mb-8 text-6xl font-bold md:mb-16 lg:mb-20">
          PARTNERS - IN - GROWTH
        </p>

        {/* Container for profiles */}
        <div className="mb-8 flex w-full flex-wrap justify-center gap-14">
          {/* First row - 3 profiles */}
          <div className="flex w-full flex-wrap justify-center gap-8 ">
            {/* Profile 1 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/Pravash-hover.png"
                  alt="Pravash Dey Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/consultingleaders/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      Led formation of the USIndia Blockchain Council and
                      UKIndia Blockchain Council, a consortium of entrepreneurs,
                      innovators, academia researchers, investors, financial
                      institutions and trade & investment organisations.
                      Currently I am also building multimillion dollar worth
                      Blockchain as a Service (BaaS) - Fintech, DefTech &
                      MediaTech Network for Content Distribution.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">Pravash Dey</h2>
              <p className="text-center text-gray-500">
                Curator At US India Blockchain Council
              </p>
            </div>

            {/* Profile 2 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/navdeep-hover.png"
                  alt="Navdeep Chobhiyal Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/navdeep54g3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      Building VALUE generating systems & Consulting Firms
                      @HansHills | Co-Founder & CBO @GydeXP{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Navdeep Chobhiyal
              </h2>
              <p className="text-center text-gray-500">
                Co-Founder & CBO @GydeXP
              </p>
            </div>

            {/* <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/Yashashvi.jpg"
                  alt="yashashvi"
                  className="absolute inset-0 h-full w-full"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                <a
                  href="https://www.linkedin.com/in/yashashvi-sisodia-b662791a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      I&apos;m Yashashvi Sisodia, an HR Business Partner at
                      NEBULA, passionate about aligning HR strategies with
                      business goals. With a focus on talent management,
                      employee engagement, and fostering a positive work
                      culture, I am dedicated to driving both individual growth
                      and organizational success. My proactive, people-first
                      approach ensures impactful solutions that support business
                      excellence.
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Yashashvi Sisodia
              </h2>
              <p className="text-center text-gray-500">HR Business Partner</p>
            </div> */}
          </div>

          {/* Second row - 4 profiles */}
          <div className="flex w-full flex-wrap justify-center gap-6 ">
            {/* Profile 4 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden lg:h-72 lg:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/Adarsh-hover.png"
                  alt="Adarsh Gautam Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/connect-adarsh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      Co-Curator At US India Blockchain Council
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Adarsh Gautam
              </h2>
              <p className="text-center text-gray-500">Founder @Shardz</p>
            </div>

            {/* Profile 6 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/saksham.png"
                  alt="Saksham"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/saksham-gupta-274152230/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      I am Saksham Gupta, a software developer with 1 year of
                      experience, having collaborated with various startups. I
                      specialize in building scalable and efficient solutions,
                      blending technical skills with a passion for solving
                      complex problems. My goal is to drive innovation and
                      create impactful, user-friendly products.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Saksham Gupta
              </h2>
              <p className="text-center text-gray-500">Software Developer</p>
            </div>

            {/* Profile 7 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/Krishika.jpg"
                  alt="Krishika"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      I&apos;m Krishika Aggarwal, a purpose-driven human and a
                      Fashion Communication student at the National Institute of
                      Fashion Technology, Mumbai. I focus on creating impactful,
                      human-centered designs and am passionate about solving
                      real-world problems by applying my skills in innovative
                      ways to make a meaningful difference.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Krishika Aggarwal
              </h2>
              <p className="text-center text-gray-500">Fashion Communication</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center py-8">
        <p className="mb-8 text-6xl font-bold md:mb-16 lg:mb-20">
          MENTORS-IN-RESIDENCE
        </p>

        {/* Container for profiles */}

        <div className="mb-8 flex w-full flex-wrap justify-center gap-14">
          {/* First row - 3 profiles */}
          <div className="flex w-full flex-wrap justify-center gap-8 ">
            {/* Profile 1 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/mentor5.jpeg"
                  alt="Saksham"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/priya-gupta-2a5324b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      Ms. Priya, a seasoned expert with over seven years of
                      experience in sustainable finance, gender equality, public
                      policy, and leadership, currently works with USAID on
                      sustainable finance initiatives. She is also the founder
                      of Sarvpriye Foundation and Chairperson of the Institute
                      of Internal Auditors.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">Priya Gupta</h2>
              {/* <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p> */}
            </div>

            {/* Profile 2 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/mentor4.jpg"
                  alt="Kush Kalra"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/prachi-sharma-924490118?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      Ms. Prachi Sharma, a tech and marketing strategist
                      specializing in AR and VR, creates immersive experiences
                      that transform brand storytelling and boost customer
                      engagement. She combines technology and creativity to
                      drive growth and empower businesses in the digital era.
                    </span>{" "}
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Ms. Prachi Sharma
              </h2>
              {/* <p className="text-gray-500 text-center">Expertise in tech and marketing Especially AR & VR</p> */}
            </div>

            {/* Profile 3 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/mentor3.jpeg"
                  alt="Ishita Garg Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="http://linkedin.com/in/col-tripati-arya-12dec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      Lieutenant Colonel Tripti Arya, an esteemed officer of the
                      Indian Army&apos;s Army Service Corps, has 14 years of
                      exemplary service in logistics and frontline delivery.
                      Renowned for leading elite technical teams in high-risk
                      environments, she embodies courage and leadership.
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Col.Tripti Arya
              </h2>
              {/* <p className="text-gray-500 text-center">I have been awarded “General Officer Commanding in chief commendation, Northern Command - 2021”</p> */}
            </div>
          </div>

          {/* Second row - 4 profiles */}
          <div className="flex w-full flex-wrap justify-center gap-6 ">
            {/* Profile 4 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/mentor2.jpg"
                  alt="Navdeep Chobhiyal Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/mukeshkestwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      Mukesh Kestwal, Chief Innovation Officer at iHub - AWaDH,
                      IIT Ropar, drives innovation in AI, IoT, and
                      cyber-physical systems. He fosters sustainable growth and
                      supports startups through accelerator programs and
                      industry-academia collaborations.
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Mukesh Kestwal
              </h2>
            </div>

            {/* Profile 5 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/mentor1.jpg"
                  alt="Pravash Dey Hover"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />

                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/akbtheceo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      CEO of AATWRI Aerospace & Defence and an Avionics
                      Engineer, specializes in aerospace innovation, leading
                      projects like AI-based flight simulators with HAL and the
                      Indian Air Force. Recognized as a Young Entrepreneur and
                      iDEX DISC winner, he is also a researcher, mentor, and
                      speaker
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Ashish K. Behera
              </h2>
              {/* <p className="text-gray-500 text-center">Expertise in tech and marketing Especially AR & VR</p> */}
            </div>

            {/* Profile 6 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/adarsh pic.jpg"
                  alt="Saksham"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href=" https://www.linkedin.com/in/group-capt-adarsh-sidharth-retd-80b213121?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5RDCQ39AQIer2SbaqTTKJA%3D%3D "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden p-2 text-center text-sm text-white group-hover:block">
                      With over 25 years of service in the Indian Air Force, my
                      journey has been defined by diverse roles in operations,
                      project management, and advisory capacities, marked by
                      continuous learning and significant contributions to
                      aviation and defense innovation.
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Capt Adarsh Sidharth
              </h2>
              {/* <p className="text-gray-500 text-center">I have been awarded “General Officer Commanding in chief commendation, Northern Command - 2021”</p> */}
            </div>

            {/* Profile 7 */}
            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/v.sSodhi.jpg"
                  alt="Saksham"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/lt-col-js-sodhi-retd-a2921534?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      Veteran from the Bombay Sappers, Corps of Engineers of the
                      Indian Army with over 21 years of distinguished service.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Lt. Col. J.S Sodhi
              </h2>
              {/* <p className="text-gray-500 text-center">I have been awarded “General Officer Commanding in chief commendation, Northern Command - 2021”</p> */}
            </div>

            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/drupad.jpeg"
                  alt="Saksham"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/dhrupad-das1905/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-xs text-white group-hover:block">
                      With over 15 years of experience as a corporate litigator
                      before India&apos;s courts, Dhrupad Das is the founding
                      partner of Panda Law, a firm renowned for its expertise in
                      navigating complex regulatory landscapes for businesses,
                      particularly in the web3 and blockchain sectors. Since
                      2017, he has been a strategic legal advisor to major
                      industry players, adopting a tech-forward approach to
                      guide exchanges, virtual asset service providers, and
                      token issuers through India&apos;s stringent regulations.
                      An advocate for web3 adoption in the northeast region, Das
                      co-founded Colours of India and advises Web3Assam,
                      initiatives fostering education and innovation in
                      decentralized technologies. His blend of legal acumen and
                      commitment to community empowerment positions him as a
                      thought leader poised to mentor the next generation in the
                      digital age.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">Dhrupad</h2>
              {/* <p className="text-gray-500 text-center">I have been awarded “General Officer Commanding in chief commendation, Northern Command - 2021”</p> */}
            </div>

            <div className="group relative flex flex-col items-center justify-around rounded-lg p-6">
              <motion.div
                className="relative mb-4 h-52 w-52 overflow-hidden md:h-72 md:w-72"
                initial={{ borderRadius: "0 30% 0 30%" }}
                whileHover={{
                  borderRadius: "0%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <motion.img
                  src="/vansh.png"
                  alt="vansh"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                />
                {/* LinkedIn Logo and Hover Effects */}
                <a
                  href="https://www.linkedin.com/in/vanshgehlot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80">
                    <span className="hidden text-center text-sm text-white group-hover:block">
                      Vansh Gehlot, a GenAI and blockchain enthusiast. I&apos;m
                      the Co-founder & CEO at Dragverse and Founder & CEO of
                      CodeAsia (test.codeasia.org), a registered 501(c)(3)
                      non-profit community for high students to boost their
                      innovative, collaborative and creative mindset, which is
                      disappearing due to the monotonous education system of
                      India and a few southern Asian countries.{" "}
                    </span>
                  </motion.div>
                  <motion.div className="absolute bottom-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#007F40] p-2 transition-all duration-500 ease-in-out group-hover:scale-0">
                    <FaLinkedin className="h-6 w-6 text-white" />
                  </motion.div>
                </a>
              </motion.div>
              <h2 className="text-center text-lg font-semibold">
                Vansh Gehlot
              </h2>
              <p className="text-center text-gray-500">
                Co-founder & CEO, Dragverse
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Latest News
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {news.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mb-4 text-gray-600">{item.excerpt}</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href={`/news/${item.slug}`}>
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Pre-Incubation",
    description:
      "Transform your idea into a viable business model with expert guidance and support.",
    image: "/preincubation.svg",
  },
  {
    title: "Incubation",
    description:
      "Access resources, mentorship, and infrastructure to build your startup.",
    image: "/incubation.webp",
  },
  {
    title: "Acceleration",
    description:
      "Scale your business with our global network and strategic partnerships.",
    image: "/accelerator.png",
  },
];

const partners = [
  {
    name: "Pravash Dey",
    logo: "/Pravash-hover.png",
  },
  {
    name: "Adarsh Gautam",
    logo: "/Adarsh-hover.png",
  },
  {
    name: "Saksham Gupta",
    logo: "/saksham.png",
  },
  {
    name: "Yashashvi",
    logo: "/Yashashvi.jpg",
  },
  {
    name: "Krishika",
    logo: "/Krishika.jpg",
  },
  {
    name: "Navdeep",
    logo: "/navdeep-hover.png",
  },
];

const mentors = [
  {
    name: "John Doe",
    role: "Defense Technology Expert",
    image: "/images/mentors/mentor1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Innovation Strategist",
    image: "/images/mentors/mentor2.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Blockchain Specialist",
    image: "/images/mentors/mentor3.jpg",
  },
  {
    name: "Sarah Williams",
    role: "AI/ML Expert",
    image: "/images/mentors/mentor4.jpg",
  },
];

const news = [
  {
    title: "Nebula Accelerator Launches New Defense Tech Cohort",
    excerpt:
      "Applications now open for innovative defense technology startups...",
    image: "/newsforum/1.jpg",
    slug: "new-defense-tech-cohort",
  },
  {
    title: "Partnership Announcement with Leading Defense Organization",
    excerpt: "Strategic collaboration to boost defense innovation ecosystem...",
    image: "/newsforum/3.jpg",
    slug: "partnership-announcement",
  },
  {
    title: "Success Story: AI Startup Secures Major Contract",
    excerpt: "Nebula-accelerated startup wins significant defense contract...",
    image: "/newsforum/2.jpg",
    slug: "success-story-ai-startup",
  },
];
