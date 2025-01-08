import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-black  py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Logo Section */}
        <div className="mb-6 md:mb-0 text-black">
          <h1 className="font-extrabold text-4xl md:text-5xl tracking-wide transform transition-transform duration-300 hover:scale-110">
            NEBULA
          </h1>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">About</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">Services</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">Work</a>
              </li>
            </ul>
          </div>
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">Membership</a>
              </li>
            </ul>
          </div>
          <div className="text-black">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">X</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-400 transition duration-200">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Reserved Text */}
        <div className="mt-6 md:mt-0 text-black text-sm italic">
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;