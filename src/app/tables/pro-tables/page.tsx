import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableSix from "@/components/Tables/TableSix";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const ProTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pro Tables" />
      <div className="flex flex-col gap-10">
        <TableSix />
      </div>
    </DefaultLayout>
  );
};

export default ProTablesPage;
