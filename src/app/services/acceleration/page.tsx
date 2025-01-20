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

export default function AccelerationPage() {
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
            src="https://res.cloudinary.com/dski9pira/video/upload/v1737392746/vid3_smwqvw.mp4"
          >
            <source src="/videos/acceleration.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Acceleration Program
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Scale your defense tech startup globally with strategic support
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-gray-600 mb-8">
                Our acceleration program is designed to help established defense
                tech startups scale rapidly through strategic partnerships,
                market access, and funding opportunities.
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
                    src="/img7.jpg"
                    alt="Acceleration Feature 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/img8.jpg"
                    alt="Acceleration Feature 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/img9.jpg"
                    alt="Acceleration Feature 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/img10.jpg"
                    alt="Acceleration Feature 4"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="h-48">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
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
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
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

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Metrics
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

      {/* Global Network */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Global Network
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Globally?</h2>
          <p className="text-xl mb-8">
            Join our acceleration program and take your defense tech startup to
            new heights.
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
  Globe,
  Target,
  Rocket,
  Users,
  Shield,
  Network,
  Building,
  ChartBar,
} from "lucide-react";

const programFeatures = [
  {
    title: "Global Expansion",
    description: "Access to international defense markets",
    icon: Globe,
  },
  {
    title: "Strategic Partnerships",
    description: "Connect with major defense contractors",
    icon: Network,
  },
  {
    title: "Growth Capital",
    description: "Access to defense-focused investors",
    icon: ChartBar,
  },
  {
    title: "Market Access",
    description: "Direct entry to defense procurement",
    icon: Target,
  },
];

const programBenefits = [
  {
    title: "Market Access",
    description: "Direct connections to defense procurement",
    image: "/market-access.jpg",
    features: [
      "Defense contractor network",
      "Government procurement access",
      "International market entry",
      "Strategic partnerships",
    ],
  },
  {
    title: "Investment Opportunities",
    description: "Access to defense-focused investors",
    image: "/investment.jpg",
    features: [
      "Venture capital connections",
      "Defense investment funds",
      "Government grants",
      "Strategic investors",
    ],
  },
  {
    title: "Scaling Support",
    description: "Comprehensive scaling assistance",
    image: "/support.avif",
    features: [
      "Operations scaling",
      "Team expansion",
      "Process optimization",
      "Global presence",
    ],
  },
];

const metrics = [
  {
    value: "$100M+",
    label: "Total Funding Raised",
    icon: ChartBar,
  },
  {
    value: "50+",
    label: "Global Partners",
    icon: Globe,
  },
  {
    value: "200+",
    label: "Defense Contracts",
    icon: Shield,
  },
  {
    value: "30+",
    label: "Countries Reached",
    icon: Target,
  },
];

const partners = [
  {
    name: "Defense Corp",
    logo: "/images/partners/partner1.svg",
  },
  {
    name: "Tech Solutions",
    logo: "/images/partners/partner2.svg",
  },
  {
    name: "Global Defense",
    logo: "/images/partners/partner3.svg",
  },
  {
    name: "Security Systems",
    logo: "/images/partners/partner4.svg",
  },
  {
    name: "Military Tech",
    logo: "/images/partners/partner5.svg",
  },
  {
    name: "Defense Innovation",
    logo: "/images/partners/partner6.svg",
  },
  {
    name: "Cyber Defense",
    logo: "/images/partners/partner7.svg",
  },
  {
    name: "Advanced Systems",
    logo: "/images/partners/partner8 .svg",
  },
];
