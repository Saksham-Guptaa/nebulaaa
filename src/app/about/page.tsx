"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Nebula Accelerator drives your sparking idea towards a successful
            business with mentoring, acceleration, and global expansion.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p>
                    Incubating & Accelerating 3,000+ Entrepreneurs by 2024-27
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p>
                    Equipping 300+ entrepreneurs to be 'Investor Ready' by
                    2024-27
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <p>Raising 500cr INR Global Innovation Fund by 2024-29</p>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To facilitate infrastructure, technical, and network backing for
                start-ups, helping aspiring entrepreneurs connect with
                government, investors, mentors, and promoters.
              </p>
              <p className="text-gray-600">
                We are inclined towards Global Defence technological innovations
                and align them for commercial exploitation and social benefits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {areasOfInterest.map((area, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Nebula Accelerator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Program?
          </h2>
          <p className="text-xl mb-8">
            Take the first step towards transforming your innovative idea into
            reality.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

const areasOfInterest = [
  {
    title: "FinTech",
    description: "Revolutionary financial technology solutions",
    icon: "/fintech.jpeg",
  },
  {
    title: "EdTech",
    description: "Innovative educational technology",
    icon: "/edtech.png",
  },
  {
    title: "Blockchain & AI",
    description: "Cutting-edge blockchain and AI solutions",
    icon: "/blockchain.png",
  },
  {
    title: "Defense Tech",
    description: "Advanced defense technology innovations",
    icon: "/defencetech.jpeg",
  },
  {
    title: "Smart City",
    description: "Urban innovation and smart solutions",
    icon: "/smartcity.jpeg",
  },
  {
    title: "Healthcare",
    description: "Digital health and medical innovations",
    icon: "/healthcare.jpeg",
  },
  {
    title: "CleanTech",
    description: "Sustainable and clean technology",
    icon: "/cleantech.jpeg",
  },
  {
    title: "AgriTech",
    description: "Agricultural technology solutions",
    icon: "/agritech.jpeg",
  },
];

import {
  Users,
  Network,
  Globe,
  Building,
  Shield,
  Laptop,
  BookOpen,
  Target,
  Award,
} from "lucide-react";

const benefits = [
  {
    title: "Experienced Mentors",
    description:
      "Access to industry experts who will guide you through your entrepreneurial journey",
    icon: Users,
  },
  {
    title: "Global Network",
    description:
      "Connect with a vast network of entrepreneurs, investors, and industry leaders",
    icon: Globe,
  },
  {
    title: "Modern Infrastructure",
    description:
      "State-of-the-art facilities equipped with the latest technology",
    icon: Building,
  },
  {
    title: "Defense Expertise",
    description: "Specialized knowledge and connections in the defense sector",
    icon: Shield,
  },
  {
    title: "Technical Support",
    description: "Comprehensive technical assistance for your startup",
    icon: Laptop,
  },
  {
    title: "Market Access",
    description: "Strategic partnerships to help you reach your target market",
    icon: Target,
  },
];
