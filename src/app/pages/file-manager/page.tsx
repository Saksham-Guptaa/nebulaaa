import React from "react";
import FileManager from "@/components/FileManager";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const FileManagerPage = () => {
  return (
    <DefaultLayout>
      <FileManager />
    </DefaultLayout>
  );
};

export default FileManagerPage;
