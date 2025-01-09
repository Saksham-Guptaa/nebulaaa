"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import { auth, db } from "../utils/firebase"; // Replace with the path to your Firebase setup file
import React from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // User object from Firebase
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User is logged in, fetch additional user data from Firestore (optional)
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUser({ ...userDoc.data(), uid: currentUser.uid });
          } else {
            setUser({
              name: currentUser.displayName,
              email: currentUser.email,
              avatar: currentUser.photoURL,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser({
            name: currentUser.displayName,
            email: currentUser.email,
            avatar: currentUser.photoURL,
          });
        }
      } else {
        // User is not logged in
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="py-4 text-center">Loading...</div>;
  }

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
          className="rounded bg-[#2baee2] px-4 py-2 text-xl text-black transition-colors duration-1000 hover:text-white"
        >
          Dashboard
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <Link
            href="/profile"
            className="mx-5 hidden items-center space-x-2 md:flex"
          >
            {/* <img
              src={user.avatar || "https://via.placeholder.com/150"} // Default avatar if not provided
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full object-cover"
            /> */}
            <span className="font-medium text-black">Dashboard</span>
          </Link>
        ) : (
          <Link
            href="/profile"
            className="flex items-center text-lg font-semibold text-black transition hover:text-blue-500"
          >
            Visit Dashboard
          </Link>
        )}

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
            {user ? (
              <Link
                href="/profile"
                className="mx-5 hidden items-center space-x-2 md:flex"
              >
                {/* <img
              src={user.avatar || "https://via.placeholder.com/150"} // Default avatar if not provided
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full object-cover"
            /> */}
                <span className="font-medium text-black">
                  {user.name || "Profile"}
                </span>
              </Link>
            ) : (
              <Link
                href="/signup"
                className="flex items-center text-lg font-semibold text-black transition hover:text-blue-500"
              >
                Sign Up
              </Link>
            )}
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
              href="/social"
              className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
            >
              Dashboard
            </Link>
          </li>
          <li>
            {user ? (
              <Link
                href="/profile"
                className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
              >
                PROFILE
              </Link>
            ) : (
              <Link
                href="/signup"
                className="block py-2 text-xl text-black transition-colors hover:text-blue-500"
              >
                SIGN UP
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
