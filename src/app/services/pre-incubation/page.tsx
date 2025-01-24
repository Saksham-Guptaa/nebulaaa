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

export default function PreIncubationPage() {
  return (
    <main className="">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://res.cloudinary.com/dski9pira/video/upload/v1737392533/vid1_ohsqtf.mp4"
          >
            <source src="/videos/pre-incubation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Pre-Incubation Program
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Transform your innovative Defence tech idea into a viable business
            model
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Program Overview</h2>
              <p className="mb-6 text-gray-600">
                Our Pre-Incubation program is designed to help aspiring
                entrepreneurs validate their ideas and develop a solid
                foundation for their Defence tech startups.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {programHighlights.map((highlight, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <highlight.icon className="mb-4 h-8 w-8 text-blue-600" />
                      <h3 className="mb-2 font-semibold">{highlight.title}</h3>
                      <p className="text-sm text-gray-600">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src="/overview.png"
                alt="Pre-Incubation Program"
                className=" h-full w-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {programBenefits.map((benefit, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="h-48">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <CardDescription>{story.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{story.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/case-studies/${story.slug}`}>
                      Read Full Story <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-xl">
            Join our pre-incubation program and transform your idea into
            reality.
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

import {
  Lightbulb,
  Users,
  Target,
  Rocket,
  BookOpen,
  Network,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

const programHighlights = [
  {
    title: "Idea Validation",
    description: "Expert guidance to validate your concept and market fit",
    icon: Lightbulb,
  },
  {
    title: "Mentorship",
    description: "One-on-one mentoring from industry veterans",
    icon: Users,
  },
  {
    title: "Market Research",
    description: "Comprehensive market analysis and customer validation",
    icon: Target,
  },
  {
    title: "MVP Development",
    description: "Support in developing your minimum viable product",
    icon: Rocket,
  },
];

const programBenefits = [
  {
    title: "Technical Support",
    description: "Access to cutting-edge Defence tech resources",
    image: "/img3.jpg",
    features: [
      "Access to Defence tech labs",
      "Technical mentorship",
      "Prototype development support",
      "Testing facilities",
    ],
  },
  {
    title: "Business Development",
    description: "Comprehensive business support services",
    image: "/img10.jpg",
    features: [
      "Business model development",
      "Market analysis",
      "Financial planning",
      "Legal support",
    ],
  },
  {
    title: "Network Access",
    description: "Connect with key industry players",
    image: "/img13.jpg",
    features: [
      "Industry connections",
      "Investor network",
      "Partner introductions",
      "Government liaisons",
    ],
  },
];

const successStories = [
  {
    title: "DroneShield",
    subtitle: "Anti-Drone Technology",
    description: "From concept to securing major Defence contracts in 8 months",
    image: "/newsforum/1.jpg",
    slug: "drone-shield",
  },
  {
    title: "CyberArmor",
    subtitle: "Cybersecurity Solutions",
    description:
      "Developed revolutionary encryption technology for military communications",
    image: "/img18.jpg",
    slug: "cyber-armor",
  },
  {
    title: "BattleView",
    subtitle: "Battlefield Analytics",
    description:
      "AI-powered battlefield analysis platform now used by multiple Defence forces",
    image: "/img19.jpg",
    slug: "battle-view",
  },
];
