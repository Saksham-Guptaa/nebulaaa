"use client";

import React from "react";
import dynamic from "next/dynamic";

const DataStatsThree = dynamic(() => import("../DataStats/DataStatsThree"), {
  ssr: false,
});
const ChartSeven = dynamic(() => import("../Charts/ChartSeven"), {
  ssr: false,
});
const ChartEight = dynamic(() => import("../Charts/ChartEight"), {
  ssr: false,
});
const ChartNine = dynamic(() => import("../Charts/ChartNine"), { ssr: false });
const LeadsReport = dynamic(() => import("../LeadsReport"), { ssr: false });
const ToDoList = dynamic(() => import("../Todo/ToDoList"), { ssr: false });

const CRM: React.FC = () => {
  return (
    <>
      <DataStatsThree />
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <ChartEight />
        </div>

        <LeadsReport />

        <div className="col-span-12 xl:col-span-5">
          <ChartNine />
        </div>

        <ToDoList />
      </div>
    </>
  );
};

export default CRM;
