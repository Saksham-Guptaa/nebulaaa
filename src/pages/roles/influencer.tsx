import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth"; // Custom hook for authentication

const InfluencerForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [favoriteGenre, setFavoriteGenre] = useState<string>("");
  const [totalReach, setTotalReach] = useState<number | string>("");
  const [followersInstagram, setFollowersInstagram] = useState<number | string>(
    ""
  );
  const [followersTwitter, setFollowersTwitter] = useState<number | string>("");
  const [followersYouTube, setFollowersYouTube] = useState<number | string>("");
  const [rating, setRating] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [otherDetails, setOtherDetails] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    // Prepare data to be saved
    const influencerData = {
      favoriteGenre,
      totalReach,
      followers: {
        instagram: followersInstagram,
        twitter: followersTwitter,
        youtube: followersYouTube,
      },
      rating,
      description,
      otherDetails,
      createdAt: new Date().toISOString(),
    };

    try {
      // Save data to Firestore under the user's role (influencer)
      await setDoc(
        doc(db, "users", user.uid, "roles", "influencer"),
        influencerData
      );
      router.push("/dashboard/influencer"); // Redirect to influencer dashboard
    } catch (error) {
      console.error("Error saving influencer data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Influencer Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Favorite Genre */}
        <div>
          <label
            htmlFor="favoriteGenre"
            className="block text-sm font-medium text-gray-700"
          >
            Favorite Genre
          </label>
          <select
            id="favoriteGenre"
            value={favoriteGenre}
            onChange={(e) => setFavoriteGenre(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Genre</option>
            <option value="Tech">Tech</option>
            <option value="Fashion">Fashion</option>
            <option value="Fitness">Fitness</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            {/* Add more genres as needed */}
          </select>
        </div>

        {/* Total Reach */}
        <div>
          <label
            htmlFor="totalReach"
            className="block text-sm font-medium text-gray-700"
          >
            Total Reach
          </label>
          <input
            type="number"
            id="totalReach"
            value={totalReach}
            onChange={(e) => setTotalReach(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Followers on Different Platforms */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="followersInstagram"
              className="block text-sm font-medium text-gray-700"
            >
              Instagram Followers
            </label>
            <input
              type="number"
              id="followersInstagram"
              value={followersInstagram}
              onChange={(e) => setFollowersInstagram(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="followersTwitter"
              className="block text-sm font-medium text-gray-700"
            >
              Twitter Followers
            </label>
            <input
              type="number"
              id="followersTwitter"
              value={followersTwitter}
              onChange={(e) => setFollowersTwitter(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="followersYouTube"
              className="block text-sm font-medium text-gray-700"
            >
              YouTube Followers
            </label>
            <input
              type="number"
              id="followersYouTube"
              value={followersYouTube}
              onChange={(e) => setFollowersYouTube(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        {/* Other Details */}
        <div>
          <label
            htmlFor="otherDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Other Details
          </label>
          <textarea
            id="otherDetails"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfluencerForm;
