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

export default function IncubationPage() {
  return (
    <main className="pt-16">
      {/* Hero Section with Video */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://res.cloudinary.com/dski9pira/video/upload/v1737392628/vid2_tz2cvl.mp4"
          >
            <source src="/videos/incubation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Incubation Program
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Build and scale your defense tech startup with comprehensive support
          </p>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Program Features</h2>
              <p className="text-gray-600">
                Our incubation program provides comprehensive support to help
                defense tech startups build sustainable businesses and achieve
                significant growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {programFeatures.map((feature, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/incubationfeature1.jpeg"
                    alt="Incubation Feature 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/incubationfeature2.jpeg"
                    alt="Incubation Feature 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/incubationfeature3.jpeg"
                    alt="Incubation Feature 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/incubationfeature4.jpeg"
                    alt="Incubation Feature 4"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Program Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-4" />
                  )}
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>{phase.title}</CardTitle>
                    <CardDescription>{phase.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Incubation Program
          </h2>
          <p className="text-xl mb-8">
            Take your defense tech startup to the next level with our
            comprehensive support.
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
    </main>
  );
}

import {
  Building,
  Users,
  Target,
  Rocket,
  Shield,
  Network,
  BookOpen,
  Globe,
} from "lucide-react";

const programFeatures = [
  {
    title: "Dedicated Space",
    description: "Modern workspace with all necessary facilities",
    icon: Building,
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from defense industry veterans",
    icon: Users,
  },
  {
    title: "Market Access",
    description: "Direct connections to defense sector buyers",
    icon: Target,
  },
  {
    title: "Technical Support",
    description: "Access to advanced defense tech resources",
    icon: Shield,
  },
];

const timeline = [
  {
    title: "Onboarding & Setup",
    duration: "Week 1-2",
    description: "Get settled in and establish your base at our facility",
    activities: [
      "Workspace setup and orientation",
      "Team introduction and mentor matching",
      "Initial goal setting and planning",
      "Resource access setup",
    ],
  },
  {
    title: "Development Phase",
    duration: "Month 1-3",
    description: "Focus on product development and market validation",
    activities: [
      "Technical development support",
      "Market research and validation",
      "Customer discovery",
      "MVP refinement",
    ],
  },
  {
    title: "Growth & Scaling",
    duration: "Month 4-6",
    description: "Prepare for market entry and scaling",
    activities: [
      "Go-to-market strategy",
      "Investor pitch preparation",
      "Partnership development",
      "Scale-up planning",
    ],
  },
  {
    title: "Market Entry",
    duration: "Month 7-12",
    description: "Execute market entry and secure initial customers",
    activities: [
      "Customer acquisition",
      "Contract negotiations",
      "Operations scaling",
      "Further funding preparation",
    ],
  },
];

const facilities = [
  {
    title: "Defense Tech Lab",
    description:
      "State-of-the-art laboratory equipped with the latest defense technology testing equipment",
    image: "/incubationfeature2.jpeg",
  },
  {
    title: "Collaboration Space",
    description:
      "Modern co-working space designed for defense tech startups to collaborate and innovate",
    image: "/incubationfeature3.jpeg",
  },
  {
    title: "Meeting Facilities",
    description:
      "Professional meeting rooms and conference facilities for client and investor meetings",
    image: "/incubationfeature4.jpeg",
  },
];
