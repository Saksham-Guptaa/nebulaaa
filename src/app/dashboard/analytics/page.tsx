import Analytics from "@/components/Dashboard/Analytics";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const AnalyticsPage = () => {
  return (
    <DefaultLayout>
      <Analytics />
    </DefaultLayout>
  );
};

export default AnalyticsPage;
