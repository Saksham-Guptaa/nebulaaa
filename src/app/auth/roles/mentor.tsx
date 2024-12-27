import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../hooks/useAuth"; // Custom hook for authentication

const MentorForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [hourlyRate, setHourlyRate] = useState<number | string>("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [interests, setInterests] = useState<string>("");
  const [expertise, setExpertise] = useState<string>("");
  const [certificationLink, setCertificationLink] = useState<string>("");
  const [linkedinProfile, setLinkedinProfile] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<number | string>(
    "",
  );
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [cryptoType, setCryptoType] = useState("");
  const [cryptoWalletAddress, setCryptoWalletAddress] = useState("");
  const [previousMentoringExperience, setPreviousMentoringExperience] =
    useState<string>("");
  const [preferredModeOfMentorship, setPreferredModeOfMentorship] =
    useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    // Prepare data to be saved
    const mentorData = {
      hourlyRate,
      availability,
      interests,
      expertise,
      certificationLink,
      linkedinProfile,
      yearsOfExperience,
      previousMentoringExperience,
      preferredModeOfMentorship,
      location,
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
      // Save data to Firestore under the user's role (mentor)
      await setDoc(doc(db, "users", user.uid, "roles", "mentor"), mentorData);
      router.push("/dashboard/mentor"); // Redirect to mentor dashboard
    } catch (error) {
      console.error("Error saving mentor data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Mentor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hourly Rate */}
        <div>
          <label
            htmlFor="hourlyRate"
            className="block text-sm font-medium text-gray-700"
          >
            Hourly Rate ($)
          </label>
          <input
            type="number"
            id="hourlyRate"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Availability */}
        <div>
          <label
            htmlFor="availability"
            className="block text-sm font-medium text-gray-700"
          >
            Availability (Select Days)
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={day}
                  onChange={(e) => {
                    const newAvailability = e.target.checked
                      ? [...availability, day]
                      : availability.filter((item) => item !== day);
                    setAvailability(newAvailability);
                  }}
                  className="form-checkbox"
                />
                <span className="ml-2">{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-gray-700"
          >
            Interests
          </label>
          <textarea
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
            required
          />
        </div>

        {/* Expertise */}
        <div>
          <label
            htmlFor="expertise"
            className="block text-sm font-medium text-gray-700"
          >
            Expertise
          </label>
          <textarea
            id="expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
            required
          />
        </div>

        {/* Certification Link */}
        <div>
          <label
            htmlFor="certificationLink"
            className="block text-sm font-medium text-gray-700"
          >
            Certification Link
          </label>
          <input
            type="url"
            id="certificationLink"
            value={certificationLink}
            onChange={(e) => setCertificationLink(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* LinkedIn Profile */}
        <div>
          <label
            htmlFor="linkedinProfile"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            id="linkedinProfile"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Years of Experience */}
        <div>
          <label
            htmlFor="yearsOfExperience"
            className="block text-sm font-medium text-gray-700"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="yearsOfExperience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Previous Mentoring Experience */}
        <div>
          <label
            htmlFor="previousMentoringExperience"
            className="block text-sm font-medium text-gray-700"
          >
            Previous Mentoring Experience
          </label>
          <textarea
            id="previousMentoringExperience"
            value={previousMentoringExperience}
            onChange={(e) => setPreviousMentoringExperience(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            rows={4}
            required
          />
        </div>

        {/* Preferred Mode of Mentorship */}
        <div>
          <label
            htmlFor="preferredModeOfMentorship"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Mode of Mentorship
          </label>
          <input
            type="text"
            id="preferredModeOfMentorship"
            value={preferredModeOfMentorship}
            onChange={(e) => setPreferredModeOfMentorship(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            required
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

export default MentorForm;
