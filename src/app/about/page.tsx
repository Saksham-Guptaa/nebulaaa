"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import AboutSlider from "@/components/AboutSlider";
import { Footer } from "@/components/ui/footer";
import AreasOfInterest from "@/components/AreasofOnterest";
import WhyChoosePitchRoom from "@/components/WhyChoosePitchRoom";
import MentorsInResidence from "@/components/MentorsinResidence";
import InvestorsInResidence from "@/components/InvestorinResidence";
import InfluencersInResidence from "@/components/InfluencersinResidence";
import ProgramRoadmap from "@/components/Roadmap";
import PitchRoom from "@/components/PitchRoom";
const Page = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans min-h-screen bg-white text-black">
        {/* Header Section */}
        <header className="bg-white px-6 py-10 text-center md:px-16 md:text-left">
          <h1 className="text-4xl font-bold uppercase leading-tight md:text-7xl 2xl:text-9xl">
            We Are Nebula
          </h1>
        </header>

        {/* Content Section */}
        <section className="px-6 py-10 md:px-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Image Section */}
            <div className="h-60 w-full overflow-hidden rounded-lg bg-gray-300 shadow-md md:h-80">
              <img
                src="/programs.jpg"
                alt="About Nebula"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="space-y-6 text-lg leading-relaxed">
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
        <section className="bg-gray-50 px-6 py-10 md:px-16">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <h2 className="text-4xl font-bold uppercase">
              Why Nebula Accelerator?
            </h2>
            <ul className="list-disc space-y-4 pl-6 text-lg leading-relaxed">
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
        <section className="bg-[#001f3f] px-6 py-16 text-white md:px-16">
          <div className="space-y-16 lg:grid lg:grid-cols-1 lg:gap-16 lg:space-y-0">
            {/* Vision */}
            <div className="lg:flex lg:justify-between lg:space-x-8">
              <h2 className="mb-6 text-xl font-bold uppercase lg:mb-0 lg:text-7xl">
                Vision
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                To drive global defence technological innovations and align them
                for social and commercial impact.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:flex lg:items-start lg:justify-between lg:space-x-8">
              <h2 className="mb-6 text-xl font-bold uppercase lg:mb-0 lg:text-7xl">
                Mission
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                To mentor and accelerate startups towards global success by
                providing the infrastructure and network needed for their
                journey.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="lg:flex lg:items-start lg:justify-between lg:space-x-8">
              <h2 className="mb-6 text-xl font-bold uppercase lg:mb-0 lg:text-7xl">
                Value <br />
                proposition
              </h2>
              <p className="text-lg leading-relaxed lg:w-1/2">
                Leveraging blockchain technology for transparency, Nebula
                empowers startups with infrastructure, mentorship, and global
                market connections.
              </p>
            </div>
          </div>
        </section>

        <AreasOfInterest />

        <MentorsInResidence />
        <InvestorsInResidence />
        <InfluencersInResidence />
        <ProgramRoadmap />

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
