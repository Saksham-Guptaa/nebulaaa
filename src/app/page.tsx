// import NebulaMain from "@/components/Dashboard/E-commerce";
// import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";

// export const metadata: Metadata = {
//   title: "Nebula",
//   description: "",
// };

// export default function Home() {
//   return (
//     <>
//       <DefaultLayout>
//         <NebulaMain />
//       </DefaultLayout>
//     </>
//   );
// }

"use client";
import NebulaMain from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../utils/firebase"; // Import your Firebase auth instance
import { onAuthStateChanged, User } from "firebase/auth"; // Import User type
export default function Home() {
  const [user, setUser] = useState<User | null>(null); // Explicitly type the state
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        router.push("/auth/signin"); // Redirect to the sign-in page if no user
      }
      setLoading(false); // Stop the loading spinner once auth state is resolved
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
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
