import React from "react";
import Progress from "@/components/Progress";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ProgressPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Progress />
    </DefaultLayout>
  );
};

export default ProgressPage;
