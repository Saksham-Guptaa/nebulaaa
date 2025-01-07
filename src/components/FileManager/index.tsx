"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useFirebase } from "@/context/FirebaseContext";

const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumbs/Breadcrumb"),
  { ssr: false },
);

const DownloadList = dynamic(() => import("@/components/DownloadList"), {
  ssr: false,
});
const FileManager: React.FC = () => {
  const firebaseContext = useFirebase();

  if (!firebaseContext) return null;

  const { userDetails, roles } = firebaseContext;

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
        {roles && (
          <div className="card mt-6 rounded-lg bg-white p-6 shadow-md dark:bg-boxdark">
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
              Role Information
            </h2>
            {Object.entries(roles).map(([roleId, roleInfo]) => {
              return (
                <div
                  key={roleId}
                  className="mb-6 border-b border-gray-300 pb-6 last:border-none last:pb-0"
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {Object.entries(roleInfo)
                      .filter(([_, value]) => typeof value !== "object") // Exclude nested objects and arrays
                      .map(([key, value]) => {
                        const displayKey = key;

                        return (
                          <div
                            key={key}
                            className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                          >
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {displayKey}
                            </p>
                            <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                              {key === "websiteLink" &&
                              typeof value === "string" ? (
                                <a
                                  href={value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  {value}
                                </a>
                              ) : value !== undefined && value !== null ? (
                                value.toString()
                              ) : (
                                "N/A"
                              )}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FileManager;
