import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const StartupDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [startupData, setStartupData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin"); // Redirect to signin if not authenticated
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch the user's role
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userRole = userDoc.data()?.role;

        // Check if the user is trying to access the correct dashboard
        if (userRole !== "startup") {
          router.push("/404"); // Redirect to a 404 page or home if the role doesn't match
          return;
        }

        // Fetch the startup data
        const docRef = doc(db, "users", user.uid, "roles", "startup");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStartupData(docSnap.data());
        } else {
          console.log("No startup data found!");
        }
      } catch (error) {
        console.error("Error fetching startup data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!startupData) {
    return <div>No startup data available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Startup Dashboard</h1>
      <div className="space-y-4">
        <p>
          <strong>Startup Name:</strong> {startupData.name}
        </p>
        <p>
          <strong>Genre:</strong> {startupData.favoriteGenre}
        </p>
        <p>
          <strong>Total Funding Required:</strong> $
          {startupData.totalFundingRequired}
        </p>
        <p>
          <strong>Total Members:</strong> {startupData.totalMembers}
        </p>
        <p>
          <strong>Members:</strong> {startupData.members.join(", ")}
        </p>
        <p>
          <strong>Milestones:</strong> {startupData.milestones}
        </p>
        <p>
          <strong>Description:</strong> {startupData.description}
        </p>
      </div>
    </div>
  );
};

export default StartupDashboard;
