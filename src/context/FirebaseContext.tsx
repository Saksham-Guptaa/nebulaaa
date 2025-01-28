import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase"; // Your Firebase setup
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, collection, getDocs } from "firebase/firestore"; // Firestore methods

interface FirebaseContextType {
  user: User | null;
  userDetails: Record<string, any> | null; // To hold additional user details from the database
  roles: Record<string, any> | null; // To hold roles details from Firestore
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<Record<string, any> | null>(
    null,
  );
  const [roles, setRoles] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    // Listen to Firebase Auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setUser(authUser);

      if (authUser) {
        // Fetch user details from Firestore using the user's UID
        try {
          const userDocRef = doc(db, "users", authUser.uid); // Assuming a 'users' collection
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserDetails(userDocSnap.data()); // Set user details from Firestore
          } else {
            console.warn("No such document!");
            setUserDetails(null);
          }

          // Fetch roles from the 'roles' sub-collection
          const rolesCollectionRef = collection(
            db,
            "users",
            authUser.uid,
            "roles",
          );
          const rolesSnapshot = await getDocs(rolesCollectionRef);
          const rolesData: Record<string, any> = {};
          rolesSnapshot.forEach((doc) => {
            rolesData[doc.id] = doc.data(); // Use document ID as the key
          });
          setRoles(rolesData); // Set roles data
        } catch (error) {
          console.error("Error fetching user or roles details:", error);
          setUserDetails(null);
          setRoles(null);
        }
      } else {
        setUserDetails(null);
        setRoles(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, userDetails, roles }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
