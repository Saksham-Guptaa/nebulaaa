import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const MentorDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [mentorData, setMentorData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      router.push("/signin"); // Redirect to signin if not authenticated
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch the user's role
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userRole = userDoc.data()?.role;

        // Check if the user is trying to access the correct dashboard
        if (userRole !== "mentor") {
          router.push("/404"); // Redirect to a 404 page or home if the role doesn't match
          return;
        }

        // Fetch the mentor data
        const docRef = doc(db, "users", user.uid, "roles", "mentor");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMentorData(docSnap.data());
        } else {
          console.log("No mentor data found!");
        }
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!mentorData) {
    return <div>No mentor data available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mentor Dashboard</h1>
      <div className="space-y-4">
        <p>
          <strong>Hourly Rate:</strong> ${mentorData.hourlyRate}
        </p>
        <p>
          <strong>Availability:</strong> {mentorData.availability}
        </p>
        <p>
          <strong>Interests:</strong> {mentorData.interests.join(", ")}
        </p>
        <p>
          <strong>Expertise:</strong> {mentorData.expertise}
        </p>
        <p>
          <strong>Certification:</strong>{" "}
          {mentorData.certification ? "Uploaded" : "Not Uploaded"}
        </p>
      </div>
    </div>
  );
};

export default MentorDashboard;
