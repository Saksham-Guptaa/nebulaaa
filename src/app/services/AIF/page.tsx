import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

export default function AIFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Alternative Investment Fund (AIF)
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Unlock exclusive investment opportunities with Nebula Accelerator's
            AIF platform, designed to fuel groundbreaking ventures.
          </p>
        </div>
      </section>

      {/* About AIF */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              What is AIF?
            </h2>
            <p className="mb-6 text-gray-600">
              Alternative Investment Funds (AIFs) are specialized investment
              vehicles that cater to sophisticated investors looking for higher
              returns and unique opportunities. At Nebula Accelerator, our AIF
              platform connects investors with high-potential startups, offering
              curated investment options across various sectors.
            </p>
            <ul className="mb-6 list-inside list-disc text-gray-600">
              <li>Access to exclusive high-growth ventures.</li>
              <li>Opportunities across multiple industries and geographies.</li>
              <li>Managed by experienced fund managers and advisors.</li>
            </ul>
            <Link href="/about">
              <Button className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white shadow-md hover:bg-green-700">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div>
            <img
              src="/plane.jpg"
              alt="AIF Overview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Why Choose Nebula AIF?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Curated Investment Options",
                description:
                  "Gain access to a handpicked portfolio of startups with strong growth potential.",
                img: "/2.png",
              },
              {
                title: "Diverse Industry Exposure",
                description:
                  "Invest across sectors like technology, healthcare, sustainability, and more.",
                img: "/3.png",
              },
              {
                title: "Expert Fund Management",
                description:
                  "Our experienced team ensures rigorous due diligence and strategic investments.",
                img: "/4.png",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="rounded-lg shadow-md">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="h-48 w-full rounded-t-lg object-cover"
                />
                <CardHeader className="p-4 text-xl font-bold">
                  {benefit.title}
                </CardHeader>
                <CardContent className="p-4 text-gray-600">
                  {benefit.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How AIF Works */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            How AIF Works
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <ul className="list-inside list-decimal space-y-4 text-gray-600">
                <li>
                  <strong>Registration:</strong> Investors and startups register
                  on our platform, providing essential details.
                </li>
                <li>
                  <strong>Due Diligence:</strong> Our team conducts
                  comprehensive analysis to ensure quality investments.
                </li>
                <li>
                  <strong>Portfolio Selection:</strong> Investors can browse and
                  select startups aligned with their goals.
                </li>
                <li>
                  <strong>Investment Execution:</strong> Seamless and secure
                  investment processes through our platform.
                </li>
                <li>
                  <strong>Post-Investment Support:</strong> Continuous updates
                  and insights to track portfolio performance.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/plane.jpg"
                alt="How AIF Works"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-500 to-green-600 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Invest in the Future?
          </h2>
          <p className="mb-8 text-lg">
            Join Nebula Accelerator's AIF platform and be part of a visionary
            investment ecosystem.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
