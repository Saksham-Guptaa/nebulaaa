import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8  text-black">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:items-start">
        {/* Left Logo Section */}
        <div className="mb-6 text-black md:mb-0">
          <h1 className="transform text-4xl font-extrabold tracking-wide transition-transform duration-300 hover:scale-110 md:text-5xl">
            NEBULA
          </h1>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  Work
                </a>
              </li>
            </ul>
          </div>
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black transition duration-200 hover:text-yellow-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Reserved Text */}
        <div className="mt-6 text-sm italic text-black md:mt-0">
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
