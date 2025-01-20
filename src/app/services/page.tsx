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
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Comprehensive support for defense tech startups at every stage of their journey.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>
                <CardHeader className="relative pt-52">
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12">Program Timeline</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm text-gray-500">Duration: {item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Idea?</h2>
          <p className="text-xl mb-8">
            Join our next cohort and take your defense tech startup to the next level.
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

const mainServices = [
  {
    title: "Pre-Incubation",
    description: "Transform your idea into a viable business model",
    image: "/images/services/pre-incubation-hero.jpg",
    link: "/services/pre-incubation",
    features: [
      "Idea validation and refinement",
      "Market research support",
      "Business model development",
      "Mentorship from industry experts",
      "Access to workshops and training"
    ]
  },
  {
    title: "Incubation",
    description: "Build and grow your startup with comprehensive support",
    image: "/images/services/incubation-hero.jpg",
    link: "/services/incubation",
    features: [
      "Office space and infrastructure",
      "Technical and business mentoring",
      "Networking opportunities",
      "Legal and compliance support",
      "Access to funding networks"
    ]
  },
  {
    title: "Acceleration",
    description: "Scale your business globally with strategic support",
    image: "/images/services/acceleration-hero.jpg",
    link: "/services/acceleration",
    features: [
      "Growth strategy development",
      "International market access",
      "Investor connections",
      "Strategic partnerships",
      "Advanced business training"
    ]
  }
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
  Network
} from "lucide-react";

const benefits = [
  {
    title: "Expert Mentorship",
    description: "Get guidance from industry veterans and successful entrepreneurs",
    icon: Users
  },
  {
    title: "Defense Network",
    description: "Access to our extensive network in the defense sector",
    icon: Shield
  },
  {
    title: "Global Reach",
    description: "Connect with international markets and partners",
    icon: Globe
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure and resources",
    icon: Building
  },
  {
    title: "Market Access",
    description: "Direct connections to potential customers and partners",
    icon: Target
  },
  {
    title: "Innovation Support",
    description: "Technical expertise and innovation resources",
    icon: Rocket
  }
];

const timeline = [
  {
    title: "Application & Selection",
    description: "Submit your application and go through our selection process",
    duration: "2-3 weeks"
  },
  {
    title: "Program Kickoff",
    description: "Orientation, goal setting, and initial mentorship matching",
    duration: "1 week"
  },
  {
    title: "Core Program",
    description: "Intensive mentoring, workshops, and development support",
    duration: "8-12 weeks"
  },
  {
    title: "Growth & Scaling",
    description: "Market access, investor connections, and expansion support",
    duration: "4-6 weeks"
  },
  {
    title: "Demo Day & Graduation",
    description: "Present to investors and industry leaders",
    duration: "1 week"
  }
];