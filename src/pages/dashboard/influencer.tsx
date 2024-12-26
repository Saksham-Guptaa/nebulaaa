import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";

const InfluencerDashboard = () => {
  const { user, loading: authLoading } = useAuth(); // Assuming useAuth provides a loading state
  const router = useRouter();
  const [influencerData, setInfluencerData] = useState<any>(null);
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

    const fetchMentorsAndStartups = async () => {
      try {
        // Fetch all mentors
        const mentorsSnapshot = await getDocs(
          collection(db, "users", user.uid, "roles", "mentor")
        );
        const mentorsList = mentorsSnapshot.docs.map((doc) => doc.data());
        setMentors(mentorsList);

        // Fetch all startups
        const startupsSnapshot = await getDocs(collection(db, "startups"));
        const startupsList = startupsSnapshot.docs.map((doc) => doc.data());
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

export default InfluencerDashboard;
