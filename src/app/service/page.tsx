"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageService from "@/components/ServicePageservice";
import ServiceSlider from "@/components/ServiceSlider";
type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
    <section className="bg-black text-white min-h-screen">
      {/* Title Section */}
      <div className="px-6 md:px-16 py-10">
        <h1 className="text-4xl md:text-7xl 2xl:text-9xl font-bold uppercase">Services</h1>
      </div>

      {/* Content Section */}
      <div className="bg-white text-black px-6 md:px-16 py-12">
        <ServicePageService/>

        {/* Bottom Images Section */}
        <ServiceSlider/>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default ServicesPage
