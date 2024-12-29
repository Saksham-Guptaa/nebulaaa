"use client";
import dynamic from "next/dynamic";
const NebulaMain = dynamic(() => import("@/components/Dashboard/E-commerce"), {
  ssr: false,
});
const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false },
);
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
