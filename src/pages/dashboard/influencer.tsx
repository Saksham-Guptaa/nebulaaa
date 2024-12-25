import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const InfluencerDashboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [influencerData, setInfluencerData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      router.push("/signin"); // Redirect to signin if not authenticated
      return;
    }

    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "roles", "influencer");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setInfluencerData(docSnap.data());
        } else {
          console.log("No influencer data found!");
        }
      } catch (error) {
        console.error("Error fetching influencer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!influencerData) {
    return <div>No influencer data available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Influencer Dashboard</h1>
      <div className="space-y-4">
        <p>
          <strong>Favorite Genre:</strong> {influencerData.favoriteGenre}
        </p>
        <p>
          <strong>Total Reach:</strong> {influencerData.totalReach}
        </p>
        <p>
          <strong>Instagram Followers:</strong>{" "}
          {influencerData.followers.instagram}
        </p>
        <p>
          <strong>Twitter Followers:</strong> {influencerData.followers.twitter}
        </p>
        <p>
          <strong>YouTube Followers:</strong> {influencerData.followers.youtube}
        </p>
        <p>
          <strong>Rating:</strong> {influencerData.rating}
        </p>
        <p>
          <strong>Description:</strong> {influencerData.description}
        </p>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
