import React from "react";
import DataTables from "@/components/DataTables";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const DataTablesPage = () => {
  return (
    <DefaultLayout>
      <DataTables />
    </DefaultLayout>
  );
};

export default DataTablesPage;
