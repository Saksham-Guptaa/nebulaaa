"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import React from "react";
import { useFirebase } from "@/context/FirebaseContext";
import { useUsers } from "@/context/RoleContext";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const firebaseContext = useFirebase();
  const { usersByRole } = useUsers();
  if (!firebaseContext) return null;
  const { roles, userDetails } = firebaseContext;
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
          href="/services"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          SERVICES
        </Link>
        <Link
          href="/portfolio"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          PORTFOLIO
        </Link>
        <Link
          href="/Investnow"
          className="text-xl text-black transition-colors duration-1000 hover:text-gray-400"
        >
          INVEST NOW
        </Link>
        {/* <Link href="/social" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          MEMBERSHIP
        </Link> */}
        <Link
          href="/Pricing"
          className="rounded px-4 py-2 text-xl  text-red-600 transition-colors "
        >
          Membership
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <Link
          href="/profile"
          className="mx-5 hidden items-center space-x-2 md:flex"
        >
          {userDetails?.profileImageUrl ? (
            <img
              src={userDetails.profileImageUrl}
              alt="User Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-xl font-bold text-black">Dashboard</span>
          )}
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
              href="/Pricing"
              className="flex items-center  text-xl font-semibold  text-red-500 "
            >
              MEMBERSHIP
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
              href="/portfolio"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href="/Investnow"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              INVEST NOW
            </Link>
          </li>
          <li>
            <Link href="/profile" className=" items-center space-x-2 md:flex">
              {userDetails?.profileImageUrl ? (
                <img
                  src={userDetails.profileImageUrl}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-black">Dashboard</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
