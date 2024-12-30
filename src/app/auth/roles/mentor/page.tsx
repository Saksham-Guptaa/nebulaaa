"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../../hooks/useAuth"; // Custom hook for authentication

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
    ""
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

  const handleAvailabilityChange = (day: string) => {
    if (availability.includes(day)) {
      setAvailability(availability.filter((d) => d !== day));
    } else {
      setAvailability([...availability, day]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

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
      await setDoc(doc(db, "users", user.uid, "roles", "mentor"), mentorData);
      router.push("/dashboard/mentor");
    } catch (error) {
      console.error("Error saving mentor data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-100/40 my-8 rounded-xl shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Mentor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section: Personal Information */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hourly Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Hourly Rate ($)
              </label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {/* Section: Availability */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Availability
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={availability.includes(day)}
                  onChange={() => handleAvailabilityChange(day)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                />
                <span className="text-gray-700">{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section: Professional Details */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Professional Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interests */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Interests
              </label>
              <input
                type="text"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* Expertise */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Expertise
              </label>
              <input
                type="text"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Years of Experience
              </label>
              <input
                type="number"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={linkedinProfile}
                onChange={(e) => setLinkedinProfile(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {/* Section: Payment Details */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Payment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bank Account Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Bank Account Number
              </label>
              <input
                type="text"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                IFSC Code
              </label>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>

            {/* Cryptocurrency Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Cryptocurrency Type
              </label>
              <select
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              >
                <option value="">Select Type</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Litecoin">Litecoin</option>
              </select>
            </div>

            {/* Crypto Wallet Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Crypto Wallet Address
              </label>
              <input
                type="text"
                value={cryptoWalletAddress}
                onChange={(e) => setCryptoWalletAddress(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MentorForm;