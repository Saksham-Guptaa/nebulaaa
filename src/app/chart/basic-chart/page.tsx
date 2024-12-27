import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
