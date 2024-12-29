"use client";
import React from "react";
import dynamic from "next/dynamic";
const DataStatsTwo = dynamic(() => import("../DataStats/DataStatsTwo"), {
  ssr: false,
});
const ChartFive = dynamic(() => import("../Charts/ChartFive"), { ssr: false });
const TableFour = dynamic(() => import("../Tables/TableFour"), { ssr: false });
const ExternalLink = dynamic(() => import("../ExternalLink"), { ssr: false });
const ChartSix = dynamic(() => import("../Charts/ChartSix"), { ssr: false });
const FeaturedCampaigns = dynamic(() => import("../FeaturedCampaigns"), {
  ssr: false,
});
const Feedback = dynamic(() => import("../Feedback"), { ssr: false });

const Marketing: React.FC = () => {
  return (
    <>
      <DataStatsTwo />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <TableFour />
        <ChartFive />
        <ExternalLink />
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <FeaturedCampaigns />
        <Feedback />
      </div>
    </>
  );
};

export default Marketing;
