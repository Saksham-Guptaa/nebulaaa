"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className="text-6xl font-extrabold mb-8 md:mb-16 lg:mb-20">PARTNERS - IN - GROWTH</p>

      {/* Container for profiles */}
      <div className="flex flex-wrap justify-center w-full gap-14 mb-8">
        
        {/* First row - 3 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-8 ">
          {/* Profile 1 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Pravash-hover.png"
                alt="Pravash Dey Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/consultingleaders/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  Led formation of the USIndia Blockchain Council and UKIndia Blockchain Council, a consortium of entrepreneurs, innovators, academia researchers, investors, financial institutions and trade & investment organisations. Currently I am also building multimillion dollar worth Blockchain as a Service (BaaS) - Fintech, DefTech & MediaTech Network for Content Distribution.                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Pravash Dey</h2>
            <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
          </div>

          {/* Profile 2 */}

          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/saksham.png"
                alt="Saksham"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/saksham-gupta-274152230/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I am Saksham Gupta, a software developer with 1 year of experience, having collaborated with various startups. I specialize in building scalable and efficient solutions, blending technical skills with a passion for solving complex problems. My goal is to drive innovation and create impactful, user-friendly products.                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Saksham Gupta</h2>
            <p className="text-gray-500 text-center">Software Developer</p>
          </div>

          {/* Profile 3 */}
        </div>

        {/* Second row - 4 profiles */}
        <div className="flex flex-wrap justify-center w-full gap-6 ">
          {/* Profile 4 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 lg:w-72 lg:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Adarsh-hover.png"
                alt="Adarsh Gautam Hover"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/connect-adarsh/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I am Adarsh Gautam, a seasoned blockchain entrepreneur and founder of ShardZ. With extensive experience collaborating with startups and industry leaders worldwide, I specialize in developing innovative business and technical solutions in the emerging Web3.0 economy.                  </span>
                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Adarsh Gautam</h2>
            <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
          </div>

          {/* Profile 5 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Yashashvi.jpg"
                alt="Yashashvi"
                className="absolute inset-0 w-full h-full "
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/kush-kalra-12731b246/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I&apos;m Yashashvi Sisodia, an HR Business Partner at NEBULA, passionate about aligning HR strategies with business goals. With a focus on talent management, employee engagement, and fostering a positive work culture, I am dedicated to driving both individual growth and organizational success. My proactive, people-first approach ensures impactful solutions that support business excellence.  </span>            </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Yashashvi Sisodia</h2>
            <p className="text-gray-500 text-center">HR Business Partner</p>
          </div>

          {/* Profile 6 */}
          <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
            <motion.div
              className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
              initial={{ borderRadius: "0 30% 0 30%" }}
              whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            >
              <motion.img
                src="/Tanishq.jpg"
                alt="Tanishq"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
              />

              {/* LinkedIn Logo and Hover Effects */}
              <a href="https://www.linkedin.com/in/saksham-gupta-274152230/" target="_blank" rel="noopener noreferrer">
                <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-sm text-center hidden group-hover:block">
                  I am a UI/UX designer specializing in design thinking, prototyping, wireframing, and identity design. I focus on crafting intuitive, user-centered experiences and transforming ideas into seamless, impactful digital interfaces. </span>                </motion.div>
                <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.div>
              </a>
            </motion.div>
            <h2 className="text-lg font-semibold text-center">Tanishq Kashla</h2>
            <p className="text-gray-500 text-center">UI/UX Designer</p>
          </div>

          {/* Profile 7 */}

        </div>
      </div>
    </div>
  );
}
