"use client";
import NebulaMain from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setUser(auth.currentUser); // Initialize with the current user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        router.push("/auth/signin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Add a loader while checking auth
  }
  return (
    <>
      <DefaultLayout>{user && <NebulaMain />}</DefaultLayout>
    </>
  );
}
