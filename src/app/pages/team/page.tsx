import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TeamTwo from "@/components/Teams/TeamTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const Team: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Teams" />
      <div className="flex flex-col gap-7.5">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <TeamTwo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Team;
