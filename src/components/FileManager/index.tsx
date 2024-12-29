"use client";
import React from "react";
import dynamic from "next/dynamic";
const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumbs/Breadcrumb"),
  { ssr: false },
);
const ChartTen = dynamic(() => import("@/components/Charts/ChartTen"), {
  ssr: false,
});
const FileDetailsList = dynamic(() => import("@/components/FileDetailsList"), {
  ssr: false,
});
const StorageChart = dynamic(
  () => import("@/components/Storage/StorageChart"),
  { ssr: false },
);
const StorageList = dynamic(() => import("@/components/Storage/StorageList"), {
  ssr: false,
});
const DownloadList = dynamic(() => import("@/components/DownloadList"), {
  ssr: false,
});

const FileManager: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="File Manager" />

      <FileDetailsList />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <ChartTen />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <div className="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5">
            <StorageChart />
            <StorageList />
          </div>
        </div>

        <DownloadList />
      </div>
    </>
  );
};

export default FileManager;
