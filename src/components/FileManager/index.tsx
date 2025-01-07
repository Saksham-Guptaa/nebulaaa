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

  const { userDetails, roles } = firebaseContext;

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
        {roles && (
          <div className="card bg-white dark:bg-boxdark shadow-md rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Role Information</h2>
            {Object.entries(roles).map(([roleId, roleInfo]) => {
              return (
                <div
                  key={roleId}
                  className="border-b border-gray-300 pb-6 mb-6 last:border-none last:pb-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(roleInfo)
                      .filter(([_, value]) => typeof value !== "object") // Exclude nested objects and arrays
                      .map(([key, value]) => {
                        const displayKey = key;

                        return (
                          <div key={key} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                              {displayKey}
                            </p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-semibold">
                              {key === "websiteLink" && typeof value === "string" ? (
                                <a
                                  href={value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  {value}
                                </a>
                              ) : (
                                value !== undefined && value !== null ? value.toString() : "N/A"
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