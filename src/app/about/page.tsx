"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSlider from "@/components/AboutSlider";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Header Section */}
        <header className="px-6 md:px-16 py-10 bg-white text-center md:text-left">
          <h1 className="text-4xl md:text-7xl 2xl:text-9xl font-bold uppercase leading-tight">
            We Are Nebula
          </h1>
        </header>

        {/* Content Section */}
        <section className="px-6 md:px-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="bg-gray-300 h-60 md:h-80 w-full rounded-lg shadow-md overflow-hidden">
              <img
                src="/programs.jpg"
                alt="About Nebula"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="text-lg leading-relaxed space-y-6">
              <p>
                Nebula Accelerator is inclined towards Global Defence
                technological innovations and aligns them for commercial
                exploitation and social benefits. The Blockchain-driven
                acceleration infuses trust and transparency assuring neutrality
                among the start-ups.
              </p>
              <p>
                Nebula Accelerator drives your sparking idea towards a
                successful business with mentoring, acceleration, and global
                expansion. We facilitate infrastructure, technical, and network
                backing for the start-ups. The aspiring entrepreneurs cross the
                moat and connect with the government, investors, mentors, and
                promoters. During all the stages, Nebula supports you with
                funding.
              </p>
            </div>
          </div>
        </section>

        {/* Why Nebula Accelerator */}
        <section className="px-6 md:px-16 py-10 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <h2 className="text-4xl font-bold uppercase">Why Nebula Accelerator?</h2>
            <ul className="text-lg leading-relaxed space-y-4 list-disc pl-6">
              <li>Experienced mentors to polish your ideas.</li>
              <li>
                Industry-wide mentors spanning academics, technology, and more.
              </li>
              <li>
                Established promoters with decades of experience help you
                network.
              </li>
              <li>
                Platforms to publish and promote your startup branding stories.
              </li>
              <li>
                Blockchain system ensures complete transparency and trust.
              </li>
              <li>
                Connect with local incubation centers to conceive your ideas.
              </li>
              <li>
                Modern infrastructure with 3D printing, AV, and conferencing.
              </li>
              <li>
                Bridges startups in tier-2 and tier-3 cities with incubation
                centers.
              </li>
              <li>Save time, resources, and money as a founder.</li>
            </ul>
          </div>
        </section>

        {/* Vision, Mission, Value Proposition */}
        <section className="bg-[#001f3f] text-white px-6 md:px-16 py-16">
          <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-16">
            {/* Vision */}
            <div className="lg:flex lg:space-x-8 lg:justify-between">
              <h2 className="text-xl lg:text-7xl font-bold uppercase mb-6 lg:mb-0">
                Vision
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                To drive global defense technological innovations and align
                them for social and commercial impact.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:flex lg:items-start lg:space-x-8 lg:justify-between">
              <h2 className="text-xl lg:text-7xl font-bold uppercase mb-6 lg:mb-0">
                Mission
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                To mentor and accelerate startups towards global success by
                providing the infrastructure and network needed for their
                journey.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="lg:flex lg:items-start lg:space-x-8 lg:justify-between">
              <h2 className="text-xl lg:text-7xl font-bold uppercase mb-6 lg:mb-0">
                Value <br />
                Proportion
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                Leveraging blockchain technology for transparency, Nebula
                empowers startups with infrastructure, mentorship, and global
                market connections.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10">
          <AboutSlider />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;