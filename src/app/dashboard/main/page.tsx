import NebulaMain from "@/components/Dashboard/E-commerce";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const MarketingPage = () => {
  return (
    <DefaultLayout>
      <NebulaMain />
    </DefaultLayout>
  );
};

export default MarketingPage;
