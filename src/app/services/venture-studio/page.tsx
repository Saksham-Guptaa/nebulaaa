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

export default function VentureStudioPage() {
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
            src="https://res.cloudinary.com/dski9pira/video/upload/v1737392766/vid5_i2pqpo.mp4"
          >
            <source src="/videos/venture-studio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Venture Studio
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Building next-generation Defence tech companies from the ground up
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How We Work</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {workProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Investment Focus
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {investmentFocus.map((focus, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <focus.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{focus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{focus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Build With Us</h2>
          <p className="mb-8 text-xl">
            Partner with our venture studio to build the next generation of
            Defence tech companies.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apply">Submit Your Idea</Link>
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
  Target,
  Rocket,
  Users,
  Shield,
  Globe,
  ChartBar,
  Network,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

const workProcess = [
  {
    title: "Ideation & Validation",
    description: "From concept to validated business model",
    icon: Lightbulb,
    points: [
      "Market research and analysis",
      "Technology validation",
      "Business model development",
      "Initial prototyping",
    ],
  },
  {
    title: "Build & Launch",
    description: "Creating and deploying the solution",
    icon: Rocket,
    points: [
      "Product development",
      "Team building",
      "Market testing",
      "Initial customer acquisition",
    ],
  },
  {
    title: "Scale & Grow",
    description: "Expanding market presence",
    icon: ChartBar,
    points: [
      "Market expansion",
      "Additional funding rounds",
      "Strategic partnerships",
      "International growth",
    ],
  },
];

const portfolio = [
  {
    name: "DefenceTech AI",
    category: "Artificial Intelligence",
    description: "AI-powered Defence systems for next-generation security",
    image: "/DefenceTech AI.webp",
    slug: "Defencetech-ai",
    technologies: [
      "AI",
      "Machine Learning",
      "Computer Vision",
      "Edge Computing",
    ],
  },
  {
    name: "CyberShield",
    category: "Cybersecurity",
    description: "Advanced cybersecurity solutions for military applications",
    image: "/CyberShield.jpeg",
    slug: "cyber-shield",
    technologies: [
      "Quantum Cryptography",
      "Blockchain",
      "Zero Trust",
      "Cloud Security",
    ],
  },
  {
    name: "DroneForce",
    category: "Unmanned Systems",
    description: "Next-generation autonomous drone systems",
    image: "/droneforce.jpeg",
    slug: "drone-force",
    technologies: ["Robotics", "AI", "Sensor Fusion", "Autonomous Systems"],
  },
];

const investmentFocus = [
  {
    title: "Defence Tech",
    description: "Advanced technology solutions for Defence applications",
    icon: Shield,
  },
  {
    title: "AI & ML",
    description: "Artificial intelligence and machine learning innovations",
    icon: Target,
  },
  {
    title: "Cybersecurity",
    description: "Next-generation security solutions",
    icon: Network,
  },
  {
    title: "Global Impact",
    description: "Solutions with international Defence applications",
    icon: Globe,
  },
];

const team = [
  {
    name: "John Smith",
    role: "Managing Partner",
    bio: "20+ years in Defence tech venture capital",
    image: "/images/team/john-smith.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    bio: "Former military tech innovation lead",
    image: "/images/team/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    role: "Investment Partner",
    bio: "15+ years in Defence industry investments",
    image: "/images/team/michael-chen.jpg",
  },
  {
    name: "Lisa Williams",
    role: "Operations Director",
    bio: "Expert in scaling Defence tech startups",
    image: "/images/team/lisa-williams.jpg",
  },
];
