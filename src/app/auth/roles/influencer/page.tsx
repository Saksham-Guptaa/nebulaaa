"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../../hooks/useAuth"; // Custom hook for authentication

const InfluencerForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [favoriteGenre, setFavoriteGenre] = useState<string>("");
  const [totalReach, setTotalReach] = useState<number | string>("");
  const [followersInstagram, setFollowersInstagram] = useState<number | string>(
    "",
  );
  const [influencerName, setInfluencerName] = useState<string>("");
  const [linkedInLink, setLinkedInLink] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [facebookLink, setFacebookLink] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
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
      influencerName,
      linkedInLink,
      instagramLink,
      twitterLink,
      facebookLink,
      youtubeLink,
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
    <div className="mx-auto my-8 max-w-5xl rounded-xl bg-blue-100/40 p-8 shadow-lg">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
        Influencer Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Favorite Genre */}
        <div>
          <label
            htmlFor="favoriteGenre"
            className="block text-sm font-semibold text-gray-700"
          >
            Favorite Genre
          </label>
          <select
            id="favoriteGenre"
            value={favoriteGenre}
            onChange={(e) => setFavoriteGenre(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            required
          >
            <option value="">Select Genre</option>
            <option value="Tech">Tech</option>
            <option value="Fashion">Fashion</option>
            <option value="Fitness">Fitness</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
          </select>
        </div>

        <div>
          {/* Influencer Name */}
          <div>
            <label
              htmlFor="influencerName"
              className="block text-sm font-semibold text-gray-700"
            >
              Influencer Name
            </label>
            <input
              id="influencerName"
              type="text"
              value={influencerName}
              onChange={(e) => setInfluencerName(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* LinkedIn Link */}
          <div>
            <label
              htmlFor="linkedInLink"
              className="block text-sm font-semibold text-gray-700"
            >
              LinkedIn Link
            </label>
            <input
              id="linkedInLink"
              type="url"
              value={linkedInLink}
              onChange={(e) => setLinkedInLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Instagram Link */}
          <div>
            <label
              htmlFor="instagramLink"
              className="block text-sm font-semibold text-gray-700"
            >
              Instagram Link
            </label>
            <input
              id="instagramLink"
              type="url"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Twitter Link */}
          <div>
            <label
              htmlFor="twitterLink"
              className="block text-sm font-semibold text-gray-700"
            >
              Twitter Link
            </label>
            <input
              id="twitterLink"
              type="url"
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Facebook Link */}
          <div>
            <label
              htmlFor="facebookLink"
              className="block text-sm font-semibold text-gray-700"
            >
              Facebook Link
            </label>
            <input
              id="facebookLink"
              type="url"
              value={facebookLink}
              onChange={(e) => setFacebookLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* YouTube Link */}
          <div>
            <label
              htmlFor="youtubeLink"
              className="block text-sm font-semibold text-gray-700"
            >
              YouTube Link
            </label>
            <input
              id="youtubeLink"
              type="url"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Total Reach */}
        <div>
          <label
            htmlFor="totalReach"
            className="block text-sm font-semibold text-gray-700"
          >
            Total Reach
          </label>
          <input
            type="number"
            id="totalReach"
            value={totalReach}
            onChange={(e) => setTotalReach(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            required
          />
        </div>

        {/* Followers on Different Platforms (Grid Layout) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="followersInstagram"
              className="block text-sm font-semibold text-gray-700"
            >
              Instagram Followers
            </label>
            <input
              type="number"
              id="followersInstagram"
              value={followersInstagram}
              onChange={(e) => setFollowersInstagram(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="followersTwitter"
              className="block text-sm font-semibold text-gray-700"
            >
              Twitter Followers
            </label>
            <input
              type="number"
              id="followersTwitter"
              value={followersTwitter}
              onChange={(e) => setFollowersTwitter(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="followersYouTube"
              className="block text-sm font-semibold text-gray-700"
            >
              YouTube Followers
            </label>
            <input
              type="number"
              id="followersYouTube"
              value={followersYouTube}
              onChange={(e) => setFollowersYouTube(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-semibold text-gray-700"
          >
            Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            min="1"
            max="5"
            required
          />
        </div>

        {/* Text Fields Group (Description, Other Details, Audience Demographics, Preferred Brands) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
              required
            />
          </div>

          <div>
            <label
              htmlFor="otherDetails"
              className="block text-sm font-semibold text-gray-700"
            >
              Other Details
            </label>
            <textarea
              id="otherDetails"
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          <div>
            <label
              htmlFor="audienceDemographics"
              className="block text-sm font-semibold text-gray-700"
            >
              Audience Demographics
            </label>
            <textarea
              id="audienceDemographics"
              value={audienceDemographics}
              onChange={(e) => setAudienceDemographics(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          <div>
            <label
              htmlFor="preferredBrands"
              className="block text-sm font-semibold text-gray-700"
            >
              Preferred Brands for Collaboration
            </label>
            <input
              type="text"
              id="preferredBrands"
              value={preferredBrands}
              onChange={(e) => setPreferredBrands(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Collaboration Type & Social Impact */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="collaborationType"
              className="block text-sm font-semibold text-gray-700"
            >
              Preferred Collaboration Type
            </label>
            <input
              type="text"
              id="collaborationType"
              value={collaborationType}
              onChange={(e) => setCollaborationType(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="socialImpact"
              className="block text-sm font-semibold text-gray-700"
            >
              Social Impact Focus
            </label>
            <input
              type="text"
              id="socialImpact"
              value={socialImpact}
              onChange={(e) => setSocialImpact(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Bank Details Group */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Bank Details
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="bankAccountNumber"
                className="block text-sm font-semibold text-gray-700"
              >
                Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="bankName"
                className="block text-sm font-semibold text-gray-700"
              >
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="ifscCode"
                className="block text-sm font-semibold text-gray-700"
              >
                IFSC Code
              </label>
              <input
                type="text"
                id="ifscCode"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {/* Crypto Details Group */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Crypto Details
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cryptoType"
                className="block text-sm font-semibold text-gray-700"
              >
                Crypto Type (e.g., Bitcoin)
              </label>
              <input
                type="text"
                id="cryptoType"
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="cryptoWalletAddress"
                className="block text-sm font-semibold text-gray-700"
              >
                Crypto Wallet Address
              </label>
              <input
                type="text"
                id="cryptoWalletAddress"
                value={cryptoWalletAddress}
                onChange={(e) => setCryptoWalletAddress(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-4 text-white"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default InfluencerForm;
