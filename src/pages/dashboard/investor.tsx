import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const InvestorDashboard = () => {
  const { user, loading: authLoading } = useAuth(); // Assuming useAuth has a loading state
  const router = useRouter();
  const [investorData, setInvestorData] = useState<any>(null);
  const [mentors, setMentors] = useState<any[]>([]); // Store mentor data
  const [startups, setStartups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Wait until user authentication state is loaded
    if (authLoading) return; // Don't proceed until auth is done

    console.log(user); // Check user object

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

    const fetchMentorsAndStartups = async () => {
      try {
        // Fetch all mentors
        const mentorsSnapshot = await getDocs(
          collection(db, "users", user.uid, "roles", "mentor")
        );
        const mentorsList = mentorsSnapshot.docs.map((doc) => doc.data());
        setMentors(mentorsList);

        // Fetch all startups
        const startupsSnapshot = await getDocs(
          collection(db, "users", user.uid, "roles", "startup")
        );
        const startupsList = startupsSnapshot.docs.map((doc) => doc.data());
        console.log(startupsList);
        setStartups(startupsList);
      } catch (error) {
        console.error("Error fetching mentors and startups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorsAndStartups();
  }, [user, authLoading]); // Add authLoading to the dependency array

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
        {/* Preferred Industries */}
        <p>
          <strong>Preferred Industries:</strong>{" "}
          {investorData.preferredIndustries.join(", ")}
        </p>

        {/* Average Investment Size */}
        <p>
          <strong>Average Investment Size:</strong> $
          {investorData.averageInvestmentSize}
        </p>

        {/* Other Details */}
        <p>
          <strong>Other Details:</strong> {investorData.otherDetails}
        </p>

        {/* Bank Account Details */}
        <div>
          <strong>Bank Account Details:</strong>
          <p>
            <strong>Account Number:</strong>{" "}
            {investorData.bankAccount?.accountNumber}
          </p>
          <p>
            <strong>Bank Name:</strong> {investorData.bankAccount?.bankName}
          </p>
          <p>
            <strong>IFSC Code:</strong> {investorData.bankAccount?.ifscCode}
          </p>
        </div>

        {/* Crypto Account Details */}
        <div>
          <strong>Crypto Account Details:</strong>
          <p>
            <strong>Type:</strong> {investorData.cryptoAccount?.type}
          </p>
          <p>
            <strong>Wallet Address:</strong>{" "}
            {investorData.cryptoAccount?.walletAddress}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-6">Mentors</h2>
        {mentors.length > 0 ? (
          <ul className="list-disc pl-6">
            {mentors.map((mentor, index) => (
              <li key={index}>
                <strong>{mentor.name}</strong> - {mentor.expertise}
              </li>
            ))}
          </ul>
        ) : (
          <p>No mentors available.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-6">Startups</h2>
        {startups.length > 0 ? (
          <ul className="list-disc pl-6">
            {startups.map((startup, index) => (
              <li key={index}>
                <strong>{startup.name}</strong> - {startup.industry}
              </li>
            ))}
          </ul>
        ) : (
          <p>No startups available.</p>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard;
