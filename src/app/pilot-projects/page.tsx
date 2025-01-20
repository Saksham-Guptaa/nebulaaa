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

export default function PilotProjectsPage() {
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
            src="https://res.cloudinary.com/dski9pira/video/upload/v1737392749/vide4_y7dgoq.mp4"
          >
            <source src="/videos/pilot-projects.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pilot Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Innovative defense tech solutions in action
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <CardHeader className="px-0">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                <span className="text-gray-600">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button asChild>
                          <Link href={`/case-studies/${project.slug}`}>
                            View Case Study{" "}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/services/${category.slug}`}>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Impact Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-blue-600">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Pilot Project</h2>
          <p className="text-xl mb-8">
            Join our program and turn your innovative defense tech solution into
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
    </main>
  );
}

import { Shield, Target, Globe, Users, ChartBar, Rocket } from "lucide-react";

const featuredProjects = [
  {
    title: "Autonomous Defense Drone System",
    category: "Unmanned Systems",
    description:
      "Revolutionary drone system for military reconnaissance and surveillance",
    image: "/dronsystem.jpg",
    slug: "autonomous-defense-drone",
    achievements: [
      "Successfully deployed in 3 military exercises",
      "50% reduction in reconnaissance mission time",
      "Enhanced safety through remote operation",
      "Integration with existing military systems",
    ],
  },
  {
    title: "Quantum-Secure Communications",
    category: "Cybersecurity",
    description:
      "Next-generation secure communication system for military applications",
    image: "/quantum.jpg",
    slug: "quantum-secure-communications",
    achievements: [
      "Breakthrough in quantum encryption",
      "Zero security breaches in testing",
      "Compatible with legacy systems",
      "Reduced latency by 40%",
    ],
  },
  {
    title: "AI-Powered Battlefield Analytics",
    category: "Artificial Intelligence",
    description: "Real-time battlefield analysis and decision support system",
    image: "/aipowered.jpeg",
    slug: "battlefield-analytics",
    achievements: [
      "90% accuracy in threat detection",
      "Real-time processing of multiple data streams",
      "Successful field trials with special forces",
      "Integration with command centers",
    ],
  },
];

const categories = [
  {
    title: "Unmanned Systems",
    description: "Autonomous systems for defense applications",
    image: "/unmanned.jpg",
    slug: "unmanned-systems",
    examples: [
      "Reconnaissance drones",
      "Autonomous ground vehicles",
      "Underwater systems",
      "Swarm technology",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions for defense",
    image: "/cyber.webp",
    slug: "cybersecurity",
    examples: [
      "Quantum encryption",
      "Network defense",
      "Threat detection",
      "Secure communications",
    ],
  },
  {
    title: "AI & Analytics",
    description: "Intelligent systems for military operations",
    image: "/analysis.webp",
    slug: "ai-analytics",
    examples: [
      "Battlefield analytics",
      "Predictive maintenance",
      "Target recognition",
      "Decision support systems",
    ],
  },
];

const metrics = [
  {
    value: "25+",
    label: "Successful Pilots",
    icon: Rocket,
  },
  {
    value: "15+",
    label: "Military Partners",
    icon: Shield,
  },
  {
    value: "$50M+",
    label: "Contract Value",
    icon: ChartBar,
  },
  {
    value: "1000+",
    label: "Field Tests",
    icon: Target,
  },
];
