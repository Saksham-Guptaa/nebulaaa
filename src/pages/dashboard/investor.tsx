import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const InvestorDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [investorData, setInvestorData] = useState<any>(null);
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
        if (userRole !== "investor") {
          router.push("/404"); // Redirect to a 404 page or home if the role doesn't match
          return;
        }

        // Fetch the investor data
        const docRef = doc(db, "users", user.uid, "roles", "investor");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInvestorData(docSnap.data());
        } else {
          console.log("No investor data found!");
        }
      } catch (error) {
        console.error("Error fetching investor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!investorData) {
    return <div>No investor data available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Investor Dashboard</h1>
      <div className="space-y-4">
        <p>
          <strong>Preferred Industries:</strong>{" "}
          {investorData.preferredIndustries.join(", ")}
        </p>
        <p>
          <strong>Average Investment Size:</strong> $
          {investorData.averageInvestmentSize}
        </p>
        <p>
          <strong>Other Details:</strong> {investorData.otherDetails}
        </p>
      </div>
    </div>
  );
};

export default InvestorDashboard;
