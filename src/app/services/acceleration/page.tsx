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
    <main className="">
      <Navbar />
      {/* Hero Section with Video */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
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

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Acceleration Program
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Scale your Defence tech startup globally with strategic support
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Program Overview</h2>
              <p className="mb-8 text-gray-600">
                Our acceleration program is designed to help established Defence
                tech startups scale rapidly through strategic partnerships,
                market access, and funding opportunities.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {programFeatures.map((feature, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <feature.icon className="mb-4 h-8 w-8 text-blue-600" />
                      <h3 className="mb-2 font-semibold">{feature.title}</h3>
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
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/img7.jpg"
                    alt="Acceleration Feature 1"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/img8.jpg"
                    alt="Acceleration Feature 2"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/img9.jpg"
                    alt="Acceleration Feature 3"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/img10.jpg"
                    alt="Acceleration Feature 4"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
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

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Success Metrics
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Global Network
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-8"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Scale Globally?</h2>
          <p className="mb-8 text-xl">
            Join our acceleration program and take your Defence tech startup to
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
      <Footer />
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
import { Footer } from "@/components/ui/footer";
import Navbar from "@/components/Navbar";

const programFeatures = [
  {
    title: "Global Expansion",
    description: "Access to international Defence markets",
    icon: Globe,
  },
  {
    title: "Strategic Partnerships",
    description: "Connect with major Defence contractors",
    icon: Network,
  },
  {
    title: "Growth Capital",
    description: "Access to Defence-focused investors",
    icon: ChartBar,
  },
  {
    title: "Market Access",
    description: "Direct entry to Defence procurement",
    icon: Target,
  },
];

const programBenefits = [
  {
    title: "Market Access",
    description: "Direct connections to Defence procurement",
    image: "/market-access.jpg",
    features: [
      "Defence contractor network",
      "Government procurement access",
      "International market entry",
      "Strategic partnerships",
    ],
  },
  {
    title: "Investment Opportunities",
    description: "Access to Defence-focused investors",
    image: "/investment.jpg",
    features: [
      "Venture capital connections",
      "Defence investment funds",
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
    label: "Defence Contracts",
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
    name: "Defence Corp",
    logo: "/images/partners/partner1.svg",
  },
  {
    name: "Tech Solutions",
    logo: "/images/partners/partner2.svg",
  },
  {
    name: "Global Defence",
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
    name: "Defence Innovation",
    logo: "/images/partners/partner6.svg",
  },
  {
    name: "Cyber Defence",
    logo: "/images/partners/partner7.svg",
  },
  {
    name: "Advanced Systems",
    logo: "/images/partners/partner8 .svg",
  },
];
