import React from "react";
import PricingTableOne from "@/components/PricingTables/PricingTableOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const PricingTables: React.FC = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <PricingTableOne />
      </div>
    </div>
  );
};

export default PricingTables;
