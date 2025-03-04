"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { auth, db } from "../../../../utils/firebase";
import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useFirebase } from "../../../../context/FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";

interface UserData {
  fullName: string;
  email: string;
  role: string;
  [key: string]: any;
}

interface RoleData {
  [roleId: string]: any;
}

const InvestorDetails: NextPage = () => {
  const firebaseContext = useFirebase();
  const router = useRouter();
  const params = useParams();
  const id = params ? params.id : null;

  const [userData, setUserData] = useState<UserData | null>(null);
  const [roleData, setRoleData] = useState<RoleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<{
    uid: string;
    fullName: string;
    email: string;
    role: string;
  } | null>(null);


  if (!firebaseContext) return <p>Loading...</p>;
  const { userDetails } = firebaseContext;

  useEffect(() => {
    if (!id) return;

    const fetchUserAndRoles = async () => {
      try {
        setLoading(true);

        const userDocRef = doc(db, "users", id as string);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as UserData;
          setUserData(userData);

          const rolesCollectionRef = collection(
            db,
            "users",
            id as string,
            "roles"
          );
          const rolesSnapshot = await getDocs(rolesCollectionRef);

          const rolesData: RoleData = {};
          rolesSnapshot.forEach((doc) => {
            rolesData[doc.id] = doc.data();
          });

          setRoleData(rolesData);
        } else {
          setError("No user found with this ID.");
        }
      } catch (err) {
        setError("Error fetching user or roles.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCurrentUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser({
            uid: user.uid,
            fullName: userDetails?.fullName || "Anonymous",
            email: user.email || "",
            role: userDetails?.role || "",
          });
        }
      });
    };

    fetchUserAndRoles();
    fetchCurrentUser();
  }, [id, userDetails]);

  const handleShowInterest = async () => {
    if (!currentUser || !id) return;

    try {
      const { uid, fullName, email, role } = currentUser;

      if (!uid || !fullName || !email || !role) {
        console.error("Missing fields in currentUser:", {
          uid,
          fullName,
          email,
          role,
        });
        return;
      }

      const investorDocRef = doc(db, "users", id as string);
      await updateDoc(investorDocRef, {
        interestedUsers: arrayUnion({
          uid,
          name: fullName || "Anonymous",
          email: email || "No email provided",
          role: role || "user",
        }),
      });

      console.log("Interest shown successfully.");
    } catch (err) {
      console.error("Error showing interest:", err);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Investor Details</h1>
        <div className="flex flex-col gap-4">
          {userData && (
            <div className="card flex justify-between bg-white dark:bg-boxdark shadow-md rounded-lg p-4">
              <p className="tracking-widest">
                <strong>Name:</strong> {userData.fullName}
              </p>
              <p className="tracking-widest">
                <strong>Email:</strong> {userData.email}
              </p>
              <p className="tracking-widest">
                <strong>Contact Number:</strong> {userData.phoneNumber}
              </p>
            </div>
          )}
          {roleData && (
            <div className="card bg-white dark:bg-boxdark shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Role Information</h2>
              {Object.entries(roleData).map(([roleId, roleInfo]) => {
                // Keys to display
                const keysToDisplay = [
                  "riskTolerance",
                  "socialImpactFocus",
                  "investmentHistory",
                  "investmentFocus",
                  "geographicalPreferences",
                  "websiteLink",
                  "fundSize",
                  "preferredIndustries",
                  "contactPreferences",
                  "minInvestmentAmount",
                  "portfolioOverview",
                  "exitStrategy",
                  "investmentHorizon",
                  "investmentRestrictions",
                ];

                return (
                  <div
                    key={roleId}
                    className="border-b border-gray-300 pb-6 mb-6 last:border-none last:pb-0"
                  >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(roleInfo)
                        .filter(([key]) => keysToDisplay.includes(key)) // Filter the keys
                        .map(([key, value]) => {
                          const keyMapping: { [key: string]: string } = {
                            riskTolerance: "Risk Tolerance",
                            socialImpactFocus: "Social Impact Focus",
                            investmentHistory: "Investment History",
                            investmentFocus: "Investment Focus",
                            geographicalPreferences: "Geographical Preferences",
                            websiteLink: "Website Link",
                            fundSize: "Fund Size",
                            preferredIndustries: "Preferred Industries",
                            contactPreferences: "Contact Preferences",
                            minInvestmentAmount: "Minimum Investment Amount",
                            portfolioOverview: "Portfolio Overview",
                            exitStrategy: "Exit Strategy",
                            investmentHorizon: "Investment Horizon",
                            investmentRestrictions: "Investment Restrictions",
                          };

                          const displayKey = keyMapping[key] || key;

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
        <button
          onClick={handleShowInterest}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Show Interest
        </button>
      </div>
    </DefaultLayout>
  );
};

export default InvestorDetails;
