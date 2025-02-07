import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>
                  606, 6th Floor, Tower B, Logix Technova, Sector - 13, Noida,
                  Gautama Buddha Nagar- 201301, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Paltan@nebulaaccelerator.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Careers@nebulaaccelerator.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>CeoOffice@nebulaaccelerator.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 9638413900</span>
              </li>
            </ul>
          </div>
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
