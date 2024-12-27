"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../../hooks/useAuth"; // Custom hook for authentication

const StartupForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();
  const [gener, setGener] = useState<string>("");
  const [totalFunding, setTotalFunding] = useState<number | string>("");
  const [totalMembers, setTotalMembers] = useState<number | string>("");
  const [members, setMembers] = useState<{ username: string; email: string }[]>(
    [],
  );
  const [startupDetails, setStartupDetails] = useState<string>("");
  const [milestones, setMilestones] = useState<string>("");
  const [pdfLink, setPdfLink] = useState<string>("");
  const [industryCategory, setIndustryCategory] = useState<string>("");
  const [startupStage, setStartupStage] = useState<string>("");
  const [founderBackground, setFounderBackground] = useState<string>("");
  const [fundingSources, setFundingSources] = useState<string>("");
  const [competitors, setCompetitors] = useState<string>("");
  const [marketSize, setMarketSize] = useState<string>("");
  const [technologyStack, setTechnologyStack] = useState<string>("");
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [patentIP, setPatentIP] = useState<string>("");
  const [linkedinProfiles, setLinkedinProfiles] = useState<string[]>([]);
  const [productDemoLink, setProductDemoLink] = useState<string>("");
  const [geographicalReach, setGeographicalReach] = useState<string>("");
  const [exitStrategy, setExitStrategy] = useState<string>("");
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
    const startupData = {
      gener,
      totalFunding,
      totalMembers,
      members,
      startupDetails,
      pdfLink,
      milestones,
      industryCategory,
      startupStage,
      founderBackground,
      fundingSources,
      competitors,
      marketSize,
      technologyStack,
      userFeedback,
      patentIP,
      linkedinProfiles,
      productDemoLink,
      geographicalReach,
      exitStrategy,
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
      // Save data to Firestore under the user's role (startup)
      await setDoc(doc(db, "users", user.uid, "roles", "startup"), startupData);
      router.push("/dashboard/startup"); // Redirect to startup dashboard
    } catch (error) {
      console.error("Error saving startup data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-100/40 my-8 rounded-xl shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Startup Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Gender */}
        <div>
          <label
            htmlFor="gener"
            className="block text-sm font-semibold text-gray-700"
          >
            Gener of Startup
          </label>
          <select
            id="gener"
            value={gener}
            onChange={(e) => setGener(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="">Select Gener</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        {/* Total Funding Required */}
        <div>
          <label
            htmlFor="totalFunding"
            className="block text-sm font-semibold text-gray-700"
          >
            Total Funding Required ($)
          </label>
          <input
            type="number"
            id="totalFunding"
            value={totalFunding}
            onChange={(e) => setTotalFunding(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            required
          />
        </div>

        {/* Total Members */}
        <div>
          <label
            htmlFor="totalMembers"
            className="block text-sm font-semibold text-gray-700"
          >
            Total Members
          </label>
          <input
            type="number"
            id="totalMembers"
            value={totalMembers}
            onChange={(e) => setTotalMembers(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            required
          />
        </div>

        {/* Members (Username and Email) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Members
          </label>
          {Array.from({ length: Number(totalMembers) }).map((_, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                placeholder="Username"
                value={members[index]?.username || ""}
                onChange={(e) => {
                  const updatedMembers = [...members];
                  updatedMembers[index] = {
                    ...updatedMembers[index],
                    username: e.target.value,
                  };
                  setMembers(updatedMembers);
                }}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                value={members[index]?.email || ""}
                onChange={(e) => {
                  const updatedMembers = [...members];
                  updatedMembers[index] = {
                    ...updatedMembers[index],
                    email: e.target.value,
                  };
                  setMembers(updatedMembers);
                }}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          ))}
        </div>

        {/* Industry Category */}
        <div>
          <label
            htmlFor="industryCategory"
            className="block text-sm font-semibold text-gray-700"
          >
            Industry/Category
          </label>
          <select
            id="industryCategory"
            value={industryCategory}
            onChange={(e) => setIndustryCategory(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="">Select Industry</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Fintech">Fintech</option>
            <option value="Retail">Retail</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Stage of Startup */}
        <div>
          <label
            htmlFor="startupStage"
            className="block text-sm font-semibold text-gray-700"
          >
            Stage of Startup
          </label>
          <select
            id="startupStage"
            value={startupStage}
            onChange={(e) => setStartupStage(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="">Select Stage</option>
            <option value="Ideation">Ideation</option>
            <option value="Prototype">Prototype</option>
            <option value="Early Stage">Early Stage</option>
            <option value="Scaling">Scaling</option>
            <option value="Established">Established</option>
          </select>
        </div>

        {/* Founder Background */}
        <div>
          <label
            htmlFor="founderBackground"
            className="block text-sm font-semibold text-gray-700"
          >
            Founder Background
          </label>
          <textarea
            id="founderBackground"
            value={founderBackground}
            onChange={(e) => setFounderBackground(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* Funding Sources */}
        <div>
          <label
            htmlFor="fundingSources"
            className="block text-sm font-semibold text-gray-700"
          >
            Funding Sources
          </label>
          <select
            id="fundingSources"
            value={fundingSources}
            onChange={(e) => setFundingSources(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="">Select Funding Source</option>
            <option value="Bootstrapped">Bootstrapped</option>
            <option value="Angel Investment">Angel Investment</option>
            <option value="VC Funding">VC Funding</option>
            <option value="Crowdfunding">Crowdfunding</option>
            <option value="Government Grants">Government Grants</option>
          </select>
        </div>

        {/* Competitors */}
        <div>
          <label
            htmlFor="competitors"
            className="block text-sm font-semibold text-gray-700"
          >
            Competitors
          </label>
          <textarea
            id="competitors"
            value={competitors}
            onChange={(e) => setCompetitors(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* Market Size */}
        <div>
          <label
            htmlFor="marketSize"
            className="block text-sm font-semibold text-gray-700"
          >
            Market Size
          </label>
          <textarea
            id="marketSize"
            value={marketSize}
            onChange={(e) => setMarketSize(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* Technology Stack */}
        <div>
          <label
            htmlFor="technologyStack"
            className="block text-sm font-semibold text-gray-700"
          >
            Technology Stack
          </label>
          <textarea
            id="technologyStack"
            value={technologyStack}
            onChange={(e) => setTechnologyStack(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* User Feedback */}
        <div>
          <label
            htmlFor="userFeedback"
            className="block text-sm font-semibold text-gray-700"
          >
            User Feedback
          </label>
          <textarea
            id="userFeedback"
            value={userFeedback}
            onChange={(e) => setUserFeedback(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* Patent/IP */}
        <div>
          <label
            htmlFor="patentIP"
            className="block text-sm font-semibold text-gray-700"
          >
            Patent/IP
          </label>
          <textarea
            id="patentIP"
            value={patentIP}
            onChange={(e) => setPatentIP(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* LinkedIn Profiles */}
        <div>
          <label
            htmlFor="linkedinProfiles"
            className="block text-sm font-semibold text-gray-700"
          >
            LinkedIn Profiles
          </label>
          <textarea
            id="linkedinProfiles"
            value={linkedinProfiles.join(", ")}
            onChange={(e) => setLinkedinProfiles(e.target.value.split(", "))}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
            placeholder="Enter LinkedIn profiles, separated by commas"
          />
        </div>

        {/* Product Demo Link */}
        <div>
          <label
            htmlFor="productDemoLink"
            className="block text-sm font-semibold text-gray-700"
          >
            Product Demo Link
          </label>
          <input
            type="url"
            id="productDemoLink"
            value={productDemoLink}
            onChange={(e) => setProductDemoLink(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Geographical Reach */}
        <div>
          <label
            htmlFor="geographicalReach"
            className="block text-sm font-semibold text-gray-700"
          >
            Geographical Reach
          </label>
          <input
            type="text"
            id="geographicalReach"
            value={geographicalReach}
            onChange={(e) => setGeographicalReach(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Exit Strategy */}
        <div>
          <label
            htmlFor="exitStrategy"
            className="block text-sm font-semibold text-gray-700"
          >
            Exit Strategy
          </label>
          <textarea
            id="exitStrategy"
            value={exitStrategy}
            onChange={(e) => setExitStrategy(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
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
          />
        </div>

        {/* Crypto Account Details */}
        <div>
          <label
            htmlFor="cryptoType"
            className="block text-sm font-semibold text-gray-700"
          >
            Cryptocurrency Type
          </label>
          <select
            id="cryptoType"
            value={cryptoType}
            onChange={(e) => setCryptoType(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-blue-500 p-3 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StartupForm;
