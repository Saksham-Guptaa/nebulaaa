import Marketing from "@/components/Dashboard/Marketing";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const MarketingPage = () => {
  return (
    <DefaultLayout>
      <Marketing />
    </DefaultLayout>
  );
};

export default MarketingPage;
