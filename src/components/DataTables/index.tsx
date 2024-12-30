"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InfluencersTable from "./InfluencersTable";
import StartupTable from "./StartupTable";
import React from "react";
import { useFirebase } from "../../context/FirebaseContext";
import MentorsTable from "./MentorsTable";
import InvestorTable from "./InvestorsTable";

const DataTables: React.FC = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;

  const { userDetails } = firebaseContext;

  const renderTables = () => {
    switch (userDetails?.role) {
      case "startup":
        return (
          <>
            <InvestorTable />
            <MentorsTable />
            <InfluencersTable />
          </>
        );
      case "investor":
        return (
          <>
            <StartupTable />
            <MentorsTable />
            <InfluencersTable />
          </>
        );
      case "influencer":
        return <StartupTable />;
      case "mentor":
        return (
          <>
            <StartupTable />
            <InvestorTable />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Breadcrumb pageName="Data Tables" />
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        {renderTables()}
      </div>
    </>
  );
};

export default DataTables;
