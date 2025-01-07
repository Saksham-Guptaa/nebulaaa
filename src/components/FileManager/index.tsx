"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useFirebase } from "@/context/FirebaseContext";
import { useUsers } from "@/context/RoleContext";

const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumbs/Breadcrumb"),
  { ssr: false },
);

const FileDetailsList = dynamic(() => import("@/components/FileDetailsList"), {
  ssr: false,
});

const DownloadList = dynamic(() => import("@/components/DownloadList"), {
  ssr: false,
});
const FileManager: React.FC = () => {
  const firebaseContext = useFirebase();
  const { usersByRole, loading } = useUsers();
  console.log(usersByRole, loading);
  if (!firebaseContext) return null;

  const { userDetails } = firebaseContext;
  

  return (
    <>
      <Breadcrumb pageName="Deck" />
      <div className="p-4">
        <div className="grid grid-cols-1 dark:text-white/80 text-black">
        {userDetails && (
            <div className="card flex justify-between bg-white dark:bg-boxdark shadow-md rounded-lg p-4">
              <p className="tracking-widest">
                <strong>Name:</strong> {userDetails.fullName}
              </p>
              <p className="tracking-widest">
                <strong>Email:</strong> {userDetails.email}
              </p>
              <p className="tracking-widest">
                <strong>Contact Number:</strong> {userDetails.phoneNumber}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileManager;
