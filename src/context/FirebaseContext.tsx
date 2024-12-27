// context/FirebaseContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase"; // Your Firebase setup
import { onAuthStateChanged, User } from "firebase/auth";

interface FirebaseContextType {
  user: User | null;
}
const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
