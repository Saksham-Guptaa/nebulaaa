import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Home from "../chat/page";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const MessagesPage = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default MessagesPage;
