"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import React from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between border-b-2 border-black bg-white p-2 py-4 shadow-md md:px-12 lg:px-6">
      {/* Logo */}
      <Link href="/home">
        <span className="mr-5 text-lg font-extrabold text-black transition-colors duration-1000 hover:text-gray-400">
          NEBULA
        </span>
      </Link>

      {/* Links for larger screens */}
      <div className="hidden flex-grow items-center justify-evenly space-x-8 text-lg font-semibold md:flex">
        <Link
          href="/about"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          ABOUT
        </Link>
        <Link
          href="/service"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          SERVICES
        </Link>
        <Link
          href="/work"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          WORK
        </Link>
        {/* <Link href="/social" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          MEMBERSHIP
        </Link> */}
        <Link
          href="/"
          className="rounded px-4 py-2 text-xl  text-red-600 transition-colors "
        >
          TedX Bharat
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <Link
          href="/profile"
          className="mx-5 hidden items-center space-x-2 md:flex"
        >
          {/* <img
              src={user.avatar || "https://via.placeholder.com/150"} // Default avatar if not provided
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full object-cover"
            /> */}
          <span className="text-xl font-bold  text-black">Dashboard</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex text-4xl text-black md:hidden"
          aria-label="Toggle Menu"
        >
          <IoMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-max-height absolute left-0 top-16 z-50 h-screen w-full overflow-hidden bg-white shadow-lg duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 px-6 py-8 text-lg font-semibold">
          <li>
            <Link
              href="/signup"
              className="flex items-center  text-xl font-semibold text-black text-red-500 "
            >
              TedX
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/main"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
