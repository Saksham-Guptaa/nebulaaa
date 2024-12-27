import CRM from "@/components/Dashboard/CRM";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const CrmPage = () => {
  return (
    <DefaultLayout>
      <CRM />
    </DefaultLayout>
  );
};

export default CrmPage;
