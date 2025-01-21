import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WeDo";
import Services from "@/components/Services";
import NewsForum from "@/components/News";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <WhatWeDo />
        <Team />
        <Services />
        <NewsForum />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
