import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Nebula</h3>
            <p className="mb-4 text-gray-400">
              Empowering DefenceTech startups through innovation, mentorship,
              and strategic growth opportunities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/NebulaAccelera1"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/jobs/view/investor-relations-officer-at-nebula-accelerator-2703537395/?originalSubdomain=in"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Apply Now", href: "/apply" },
];

const programs = [
  { label: "Pre-Incubation", href: "/services/pre-incubation" },
  { label: "Incubation", href: "/services/incubation" },
  { label: "Acceleration", href: "/services/acceleration" },
];
