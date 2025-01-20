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

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Discover how we've helped defense tech startups achieve their goals
            and make an impact.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="/img17.jpg"
                  alt="Featured Case Study"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-3xl mb-2">
                    DefenseTech AI
                  </CardTitle>
                  <CardDescription>
                    AI-powered defense systems for next-generation security
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-gray-600 mb-6">
                    Learn how DefenseTech AI revolutionized military
                    surveillance systems with their AI-powered solution,
                    securing $10M in defense contracts.
                  </p>
                  <Button asChild>
                    <Link href="/case-studies/defensetech-ai">
                      Read Full Story <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{study.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/case-studies/${study.slug}`}>
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join our program and become the next defense tech success story.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

const caseStudies = [
  {
    title: "CyberShield Solutions",
    category: "Cybersecurity",
    excerpt:
      "Developed an advanced cybersecurity system for military communications...",
    image: "/img18.jpg",
    slug: "cyber-shield-solutions",
    tags: ["Cybersecurity", "Military Tech", "Communications"],
  },
  {
    title: "DroneForce",
    category: "Unmanned Systems",
    excerpt:
      "Revolutionary autonomous drone system for defense reconnaissance...",
    image: "/img19.jpg",
    slug: "drone-force",
    tags: ["Drones", "AI", "Defense"],
  },
  {
    title: "SecureComm",
    category: "Communications",
    excerpt:
      "Quantum-resistant communication protocol for defense applications...",
    image: "/img20.jpg",
    slug: "secure-comm",
    tags: ["Quantum", "Communications", "Security"],
  },
  {
    title: "BattleView Analytics",
    category: "Data Analytics",
    excerpt:
      "AI-powered battlefield analytics platform for real-time decision making...",
    image: "/img17.jpg",
    slug: "battle-view-analytics",
    tags: ["Analytics", "AI", "Military"],
  },
  {
    title: "ArmorTech",
    category: "Materials Science",
    excerpt: "Next-generation protective materials for defense applications...",
    image: "/img16.jpg",
    slug: "armor-tech",
    tags: ["Materials", "Protection", "Innovation"],
  },
  {
    title: "NaviGuard",
    category: "Navigation Systems",
    excerpt: "GPS-independent navigation system for defense vehicles...",
    image: "/img15.jpg",
    slug: "navi-guard",
    tags: ["Navigation", "Vehicles", "Defense"],
  },
];

const stats = [
  {
    value: "50+",
    label: "Successful Startups",
  },
  {
    value: "$100M+",
    label: "Total Funding Raised",
  },
  {
    value: "200+",
    label: "Defense Contracts",
  },
  {
    value: "1000+",
    label: "Jobs Created",
  },
];
