"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Our Services</h1>
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl">
            Comprehensive support for DefenceTech startups at every stage of
            their journey.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-48 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>
                <CardHeader className="relative pt-52">
                  <CardTitle className="mb-2 text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button className="w-full border-2 border-green-400 bg-white hover:bg-green-500 ">
                      <p>Learn More</p>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Program Timeline
          </h2>
          <div className="mx-auto max-w-3xl">
            {timeline.map((item, index) => (
              <div key={index} className="mb-8 flex items-start">
                <div className="mr-4 flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-blue-200" />
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mb-2 text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500">
                    Duration: {item.duration}
                  </p>
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
            Ready to Transform Your Idea?
          </h2>
          <p className="mb-8 text-xl">
            Join our next cohort and take your DefenceTech startup to the next
            level.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const mainServices = [
  {
    title: "Pre-Incubation",
    description: "Transform your idea into a viable business model",
    image: "/preincubation.svg",
    link: "/services/pre-incubation",
    features: [
      "Idea validation and refinement",
      "Market research support",
      "Business model development",
      "Mentorship from industry experts",
      "Access to workshops and training",
    ],
  },
  {
    title: "Incubation",
    description: "Build and grow your startup with comprehensive support",
    image: "/incubation.jpg",
    link: "/services/incubation",
    features: [
      "Office space and infrastructure",
      "Technical and business mentoring",
      "Networking opportunities",
      "Legal and compliance support",
      "Access to funding networks",
    ],
  },
  {
    title: "Accelerator",
    description: "Scale your business globally with strategic support",
    image: "/accelerator.png",
    link: "/services/acceleration",
    features: [
      "Growth strategy development",
      "International market access",
      "Investor connections",
      "Strategic partnerships",
      "Advanced business training",
    ],
  },
  {
    title: "Venture Studio",
    description: "Scale your business globally with strategic support",
    image: "/venture.jpg",
    link: "/services/venture-studio",
    features: [
      "Expert Mentorship and Guidance",
      "Access to Seed Capital",
      "End-to-End Startup Support",
      "Strategic Partnerships",
      "Shared Resources and Infrastructure",
    ],
  },
  {
    title: "AIF (Alternate Investment Funds) ",
    description: "Scale your business globally with strategic support",
    image: "/incubationfeature2.jpeg",
    link: "/services/AIF",
    features: [
      "Diversified Investment Strategies",
      "Access to High-Quality, Non-Public Assets",
      "Professional Management",
      "Risk Mitigation through Portfolio Diversification",
      "Regulatory Oversight and Compliance",
    ],
  },
];

import {
  Rocket,
  Users,
  Target,
  Globe,
  Shield,
  Award,
  BookOpen,
  Building,
  Network,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

const benefits = [
  {
    title: "Expert Mentorship",
    description:
      "Get guidance from industry veterans and successful entrepreneurs",
    icon: Users,
  },
  {
    title: "Defence Network",
    description: "Access to our extensive network in the Defence sector",
    icon: Shield,
  },
  {
    title: "Global Reach",
    description: "Connect with international markets and partners",
    icon: Globe,
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure and resources",
    icon: Building,
  },
  {
    title: "Market Access",
    description: "Direct connections to potential customers and partners",
    icon: Target,
  },
  {
    title: "Innovation Support",
    description: "Technical expertise and innovation resources",
    icon: Rocket,
  },
];

const timeline = [
  {
    title: "Application & Selection",
    description: "Submit your application and go through our selection process",
    duration: "2-3 weeks",
  },
  {
    title: "Program Kickoff",
    description: "Orientation, goal setting, and initial mentorship matching",
    duration: "1 week",
  },
  {
    title: "Core Program",
    description: "Intensive mentoring, workshops, and development support",
    duration: "8-12 weeks",
  },
  {
    title: "Growth & Scaling",
    description: "Market access, investor connections, and expansion support",
    duration: "4-6 weeks",
  },
  {
    title: "Demo Day & Graduation",
    description: "Present to investors and industry leaders",
    duration: "1 week",
  },
];
