"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Who We Are</h1>
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl">
            Nebula Accelerator drives your sparking idea towards a successful
            business with mentoring, acceleration, and global expansion.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 flex-shrink-0 text-blue-600" />
                  <p>
                    Incubating & Accelerating 3,000+ Entrepreneurs by 2024-27
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 flex-shrink-0 text-blue-600" />
                  <p>
                    Equipping 300+ entrepreneurs to be 'Investor Ready' by
                    2024-27
                  </p>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-6 w-6 flex-shrink-0 text-blue-600" />
                  <p>Raising 500cr INR Global Innovation Fund by 2024-29</p>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-6 text-gray-600">
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {areasOfInterest.map((area, index) => (
              <Card
                key={index}
                className="p-6 transition-shadow hover:shadow-lg"
              >
                <img
                  src={area.icon}
                  alt={area.title}
                  className="mb-4 h-12 w-12"
                />
                <h3 className="mb-2 font-semibold">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Nebula Accelerator?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Join Our Program?
          </h2>
          <p className="mb-8 text-xl">
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
    title: "Defence Tech",
    description: "Advanced Defence technology innovations",
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
    title: "Defence Expertise",
    description: "Specialized knowledge and connections in the Defence sector",
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
