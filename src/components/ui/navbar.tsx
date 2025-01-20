"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Rocket } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-16 border-b bg-white text-black backdrop-blur-lg">
      <nav className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-black" />
          <span className="text-xl font-bold text-black">Nebula</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="focus:ring-accent rounded-md p-2 focus:outline-none focus:ring-2 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute left-0 top-16 z-40 w-full bg-white lg:static lg:flex lg:w-auto lg:space-x-6 lg:bg-transparent`}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start space-y-4 px-4 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0 lg:px-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 bg-white p-6 lg:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 font-bold leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none text-black">
                            Who We Are
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Learn about our mission, vision, and values
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 bg-white p-4 lg:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/pre-incubation"
                          className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none">
                            Pre-Incubation
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Early-stage support for innovative ideas
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/incubation"
                          className="hover:bg-accent  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none">
                            Incubation
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Comprehensive support for growing startups
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/acceleration"
                          className="hover:bg-accent  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none">
                            Acceleration
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Scale your business globally
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/pilot-projects"
                          className="hover:bg-accent  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none">
                            Pilot Projects
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Projects in Support
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/venture-studio"
                          className="hover:bg-accent  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none text-black no-underline outline-none transition-colors"
                        >
                          <div className="text-sm font-medium leading-none">
                            Venture-studio
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            Scale your business globally
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink>Case Studies</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mb-10 mt-4 flex flex-col px-4 md:mb-0 lg:mt-0 lg:flex-row lg:space-x-4 lg:px-0">
            <Button variant="outline" asChild>
              <Link href="/profile">Dashboard</Link>
            </Button>
            <Button className="bg-gray-400" asChild>
              <Link className="text-black  " href="/apply">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
