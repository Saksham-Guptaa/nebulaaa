"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useFirebase } from "@/context/FirebaseContext";

const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumbs/Breadcrumb"),
  { ssr: false },
);

const FileManager: React.FC = () => {
  const firebaseContext = useFirebase();

  if (!firebaseContext) return null;

  const { userDetails } = firebaseContext;
  

  return (
    <>
      <Breadcrumb pageName="Deck" />
      <div className="p-4">
        <div className="grid grid-cols-1 dark:text-white/80 text-black">
              <div className="shadow-xl bg-bodydark1 dark:bg-boxdark p-16 space-y-6 leading-loose">
                <h3 className="font-semibold text-2xl mb-2">{userDetails?.fullName || "No Name"}</h3>
                <p className="tracking-widest">
                  <strong>Email:</strong> {userDetails?.email || "No Email"}
                </p>
                <p className="tracking-widest">
                  <strong>Role:</strong> {userDetails?.role || "No Role"}
                </p>
                <p className="tracking-widest">
                  <strong>Contact Number:</strong> {userDetails?.phoneNumber || "No Phone Number"}
                </p>
              </div>
        </div>
      </div>
    </>
  );
};

export default FileManager;