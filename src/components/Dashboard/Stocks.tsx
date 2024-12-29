"use client";
import React from "react";
import dynamic from "next/dynamic";
const ChartTwelve = dynamic(() => import("@/components/Charts/ChartTwelve"), {
  ssr: false,
});
const DataStatsFour = dynamic(
  () => import("@/components/DataStats/DataStatsFour"),
  { ssr: false },
);
const MyStocks = dynamic(() => import("@/components/Stocks/MyStocks"), {
  ssr: false,
});
const TrendingStocks = dynamic(
  () => import("@/components/Stocks/TrendingStocks"),
  { ssr: false },
);
const LatestTransaction = dynamic(
  () => import("@/components/Stocks/LatestTransaction"),
  { ssr: false },
);

const Stocks: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">
        {/* <!-- ====== Data Stats Start --> */}
        <DataStatsFour />
        {/* <!-- ====== Data Stats End --> */}

        {/* <!-- ====== Chart Twelve Start --> */}
        <ChartTwelve />
        {/* <!-- ====== Chart Twelve End --> */}

        {/* <!-- ====== My Stocks Start --> */}
        <MyStocks />
        {/* <!-- ====== My Stocks End --> */}

        {/* <!-- ====== Trending Stocks Start --> */}
        <TrendingStocks />
        {/* <!-- ====== Trending Stocks End --> */}

        {/* <!-- ====== Latest Transaction Start --> */}
        <LatestTransaction />
        {/* <!-- ====== Latest Transaction End --> */}
      </div>
    </>
  );
};

export default Stocks;
