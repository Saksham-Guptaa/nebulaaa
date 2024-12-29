"use client";

import dynamic from "next/dynamic";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// Dynamically import charts with SSR disabled
const ChartOne = dynamic(() => import("@/components/Charts/ChartOne"), {
  ssr: false,
});
const ChartTwo = dynamic(() => import("@/components/Charts/ChartTwo"), {
  ssr: false,
});
const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const BasicChart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Basic Chart" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default BasicChart;
