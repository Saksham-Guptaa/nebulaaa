"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useFirebase } from "@/context/FirebaseContext";
import { useUsers } from "@/context/RoleContext";

const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumbs/Breadcrumb"),
  { ssr: false },
);

const DownloadList = dynamic(() => import("@/components/DownloadList"), {
  ssr: false,
});
const FileManager: React.FC = () => {
  const firebaseContext = useFirebase();
  const { usersByRole, loading } = useUsers();
  console.log(usersByRole, loading);
  if (!firebaseContext) return null;
  const { roles, userDetails } = firebaseContext;
  console.log(roles, userDetails);
  return (
    <>
      <Breadcrumb pageName="Deck" />
      <div className="p-4">
        <div className="grid grid-cols-1 text-black dark:text-white/80">
          {userDetails && (
            <div className="card flex justify-between rounded-lg bg-white p-4 shadow-md dark:bg-boxdark">
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

        <DownloadList />
      </div>
    </>
  );
};

export default FileManager;
