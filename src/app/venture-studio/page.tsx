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
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
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

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Venture Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Building next-generation defense tech companies from the ground up
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
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

      {/* Portfolio Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Portfolio Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((company, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>{company.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {company.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/case-studies/${company.slug}`}>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Investment Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentFocus.map((focus, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
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
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build With Us</h2>
          <p className="text-xl mb-8">
            Partner with our venture studio to build the next generation of
            defense tech companies.
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
    name: "DefenseTech AI",
    category: "Artificial Intelligence",
    description: "AI-powered defense systems for next-generation security",
    image: "/DefenseTech AI.webp",
    slug: "defensetech-ai",
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
    title: "Defense Tech",
    description: "Advanced technology solutions for defense applications",
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
    description: "Solutions with international defense applications",
    icon: Globe,
  },
];

const team = [
  {
    name: "John Smith",
    role: "Managing Partner",
    bio: "20+ years in defense tech venture capital",
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
    bio: "15+ years in defense industry investments",
    image: "/images/team/michael-chen.jpg",
  },
  {
    name: "Lisa Williams",
    role: "Operations Director",
    bio: "Expert in scaling defense tech startups",
    image: "/images/team/lisa-williams.jpg",
  },
];
