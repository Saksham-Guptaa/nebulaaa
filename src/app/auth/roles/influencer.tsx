import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../hooks/useAuth"; // Custom hook for authentication

const InfluencerForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [favoriteGenre, setFavoriteGenre] = useState<string>("");
  const [totalReach, setTotalReach] = useState<number | string>("");
  const [followersInstagram, setFollowersInstagram] = useState<number | string>(
    "",
  );
  const [followersTwitter, setFollowersTwitter] = useState<number | string>("");
  const [followersYouTube, setFollowersYouTube] = useState<number | string>("");
  const [rating, setRating] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [otherDetails, setOtherDetails] = useState<string>("");
  const [audienceDemographics, setAudienceDemographics] = useState<string>("");
  const [preferredBrands, setPreferredBrands] = useState<string>("");
  const [collaborationType, setCollaborationType] = useState<string>("");
  const [socialImpact, setSocialImpact] = useState<string>("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [cryptoType, setCryptoType] = useState("");
  const [cryptoWalletAddress, setCryptoWalletAddress] = useState("");

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
      audienceDemographics,
      preferredBrands,
      collaborationType,
      socialImpact,
      bankAccount: {
        accountNumber: bankAccountNumber,
        bankName,
        ifscCode,
      },
      cryptoAccount: {
        type: cryptoType,
        walletAddress: cryptoWalletAddress,
      },
      createdAt: new Date().toISOString(),
    };

    try {
      // Save data to Firestore under the user's role (influencer)
      await setDoc(
        doc(db, "users", user.uid, "roles", "influencer"),
        influencerData,
      );
      router.push("/dashboard/influencer"); // Redirect to influencer dashboard
    } catch (error) {
      console.error("Error saving influencer data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Influencer Form</h1>
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
          />
        </div>

        {/* Audience Demographics */}
        <div>
          <label
            htmlFor="audienceDemographics"
            className="block text-sm font-medium text-gray-700"
          >
            Audience Demographics
          </label>
          <textarea
            id="audienceDemographics"
            value={audienceDemographics}
            onChange={(e) => setAudienceDemographics(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
          />
        </div>

        {/* Preferred Brands */}
        <div>
          <label
            htmlFor="preferredBrands"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Brands for Collaboration
          </label>
          <input
            type="text"
            id="preferredBrands"
            value={preferredBrands}
            onChange={(e) => setPreferredBrands(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Collaboration Type */}
        <div>
          <label
            htmlFor="collaborationType"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Collaboration Type
          </label>
          <input
            type="text"
            id="collaborationType"
            value={collaborationType}
            onChange={(e) => setCollaborationType(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Social Impact */}
        <div>
          <label
            htmlFor="socialImpact"
            className="block text-sm font-medium text-gray-700"
          >
            Social Impact (Causes/Charities)
          </label>
          <textarea
            id="socialImpact"
            value={socialImpact}
            onChange={(e) => setSocialImpact(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
          />
        </div>

        {/* Bank Account Details */}
        <div>
          <label
            htmlFor="bankAccountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Account Number
          </label>
          <input
            type="text"
            id="bankAccountNumber"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="bankName"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <div>
          <label
            htmlFor="ifscCode"
            className="block text-sm font-medium text-gray-700"
          >
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Crypto Account Details */}
        <div>
          <label
            htmlFor="cryptoType"
            className="block text-sm font-medium text-gray-700"
          >
            Cryptocurrency Type
          </label>
          <select
            id="cryptoType"
            value={cryptoType}
            onChange={(e) => setCryptoType(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          >
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Litecoin">Litecoin</option>
            {/* Add more options for different cryptocurrencies */}
          </select>
        </div>

        <div>
          <label
            htmlFor="cryptoWalletAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Crypto Wallet Address
          </label>
          <input
            type="text"
            id="cryptoWalletAddress"
            value={cryptoWalletAddress}
            onChange={(e) => setCryptoWalletAddress(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfluencerForm;
