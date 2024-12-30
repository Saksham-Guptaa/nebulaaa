"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InfluencersTable from "./InfluencersTable";
import StartupTable from "./StartupTable";
import React from "react";

const DataTables: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Data Tables" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <InfluencersTable />
        <StartupTable />
      </div>
    </>
  );
};

export default DataTables;
