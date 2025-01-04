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
} from "firebase/firestore"; // Firestore imports
import { auth, db } from "../../../../utils/firebase"; // Your Firebase configuration file
import { NextPage } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebase } from "../../../../context/FirebaseContext";
interface UserData {
  fullName: string;
  email: string;
  role: string; // The role field points to a document ID in the roles collection
  [key: string]: any;
}

interface RoleData {
  [roleId: string]: any; // Dynamic structure for roles collection
}

const MentorDetails: NextPage = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;
  const { userDetails } = firebaseContext;

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

  useEffect(() => {
    if (!id) return;
    const fetchUserAndRoles = async () => {
      try {
        setLoading(true);

        // Fetch user document
        const userDocRef = doc(db, "users", id as string); // Assuming 'users' is your collection
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as UserData;
          setUserData(userData);
          console.log("User data:", userData);

          // Fetch roles if roles are a subcollection of the user
          const rolesCollectionRef = collection(
            db,
            "users",
            id as string,
            "roles",
          );
          const rolesSnapshot = await getDocs(rolesCollectionRef);

          const rolesData: RoleData = {};
          rolesSnapshot.forEach((doc) => {
            rolesData[doc.id] = doc.data(); // Use document ID as the key
          });

          setRoleData(rolesData);
          console.log("Role data:", rolesData);
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
  }, [id]);

  const handleShowInterest = async () => {
    if (!currentUser || !id) return;
    try {
      const mentorDocRef = doc(db, "users", id as string);
      await updateDoc(mentorDocRef, {
        interestedUsers: arrayUnion({
          uid: currentUser.uid,
          name: currentUser.fullName,
          email: currentUser.email,
          role: currentUser.role,
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
    <div>
      <DefaultLayout>
        <h1>Investor Details</h1>
        {userData && (
          <div>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
        )}
        <button onClick={handleShowInterest}>Show Interest</button>
      </DefaultLayout>
    </div>
  );
};

export default MentorDetails;
