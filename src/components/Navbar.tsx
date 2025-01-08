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
    return <div className="text-center py-4">Loading...</div>;
  }

  return (
    <nav className="flex items-center justify-between lg:px-6 py-4 bg-white border-b-2 border-black shadow-md md:px-12 p-2">
      {/* Logo */}
      <Link href="/">
        <span className="hover:text-gray-400 mr-5 text-lg font-extrabold transition-colors duration-1000 text-black">
          NEBULA
        </span>
      </Link>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold flex-grow justify-evenly items-center">
        
        <Link href="/about" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          ABOUT
        </Link>
        <Link href="/service" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          SERVICES
        </Link>
        <Link href="/work" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          WORK
        </Link>
        {/* <Link href="/social" className="hover:text-gray-400 transition-colors duration-1000 text-xl text-black">
          MEMBERSHIP
        </Link> */}
        <Link href="/" className="hover:text-white transition-colors duration-1000 text-xl text-black bg-[#2baee2] px-4 py-2 rounded">
          MEMBERSHIP
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <Link href="/profile" className="hidden mx-5 md:flex items-center space-x-2">
            {/* <img
              src={user.avatar || "https://via.placeholder.com/150"} // Default avatar if not provided
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full object-cover"
            /> */}
            <span className="font-medium text-black">{user.name || "Profile"}</span>
          </Link>
        ) : (
          <Link
            href="/signup"
            className="flex items-center text-lg font-semibold text-black hover:text-blue-500 transition"
          >
            Visit Dashboard
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden text-black text-4xl"
          aria-label="Toggle Menu"
        >
          <IoMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white h-screen shadow-lg md:hidden z-50 overflow-hidden transition-max-height duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8 px-6 text-lg font-semibold">
          <li>
          {user ? (
          <Link href="/profile" className="hidden mx-5 md:flex items-center space-x-2">
            {/* <img
              src={user.avatar || "https://via.placeholder.com/150"} // Default avatar if not provided
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full object-cover"
            /> */}
            <span className="font-medium text-black">{user.name || "Profile"}</span>
          </Link>
        ) : (
          <Link
            href="/signup"
            className="flex items-center text-lg font-semibold text-black hover:text-blue-500 transition"
          >
            Sign Up
          </Link>
        )}
          </li>
          <li>
            <Link
              href="/"
              className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              href="/social"
              className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
            >
              MEMBERSHIP
            </Link>
          </li>
          <li>
            {user ? (
              <Link
                href="/profile"
                className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
              >
                PROFILE
              </Link>
            ) : (
              <Link
                href="/signup"
                className="block hover:text-blue-500 transition-colors text-black py-2 text-xl"
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