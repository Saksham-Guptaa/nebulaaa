import React from "react";
import Messages from "@/components/Messages";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Nebula",
  description: "",
};

const MessagesPage = () => {
  return (
    <DefaultLayout>
      <Messages />
    </DefaultLayout>
  );
};

export default MessagesPage;
