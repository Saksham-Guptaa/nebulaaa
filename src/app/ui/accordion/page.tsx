import React from "react";
import Accordion from "@/components/Accordions";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const AccordionPage = () => {
  return (
    <DefaultLayout>
      <Accordion />
    </DefaultLayout>
  );
};

export default AccordionPage;
