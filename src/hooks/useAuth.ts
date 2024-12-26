import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";


export const useAuth = () => {
  const [user, setUser] = useState<null | { uid: string; email: string; role: string }>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Auth state changed:", currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          console.log("User document fetched:", userDoc.data());
          if (userDoc.exists()) {
            setUser({ uid: currentUser.uid, email: currentUser.email!, role: userDoc.data().role });
          } else {
            console.warn("User document does not exist in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      } else {
        console.log("No user is signed in");
        setUser(null);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  return { user, loading };
};
