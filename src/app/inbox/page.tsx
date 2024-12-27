import Inbox from "@/components/Inbox";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const InboxPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Inbox />
    </DefaultLayout>
  );
};

export default InboxPage;
