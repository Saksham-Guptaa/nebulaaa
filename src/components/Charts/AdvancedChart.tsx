"use client";

import dynamic from "next/dynamic";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const ChartFour = dynamic(() => import("@/components/Charts/ChartFour"), {
  ssr: false,
});
const ChartSeven = dynamic(() => import("@/components/Charts/ChartSeven"), {
  ssr: false,
});
const ChartEight = dynamic(() => import("@/components/Charts/ChartEight"), {
  ssr: false,
});
const ChartSix = dynamic(() => import("@/components/Charts/ChartSix"), {
  ssr: false,
});
const ChartNine = dynamic(() => import("@/components/Charts/ChartNine"), {
  ssr: false,
});
const ChartTwelve = dynamic(() => import("@/components/Charts/ChartTwelve"), {
  ssr: false,
});

const AdvancedChart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Advanced Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartEight />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartNine />
        </div>
        <ChartTwelve />
      </div>
    </>
  );
};

export default AdvancedChart;
