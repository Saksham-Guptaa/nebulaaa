import Stocks from "@/components/Dashboard/Stocks";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const StocksPage = () => {
  return (
    <DefaultLayout>
      <Stocks />
    </DefaultLayout>
  );
};

export default StocksPage;
