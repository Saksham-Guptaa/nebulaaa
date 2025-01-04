"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../utils/firebase";
import { average, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../../hooks/useAuth"; // Custom hook for authentication

const InvestorForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [preferredIndustries, setPreferredIndustries] = useState<string[]>([]);
  const [investmentSize, setInvestmentSize] = useState<number | string>("");

  const [investorEmail, setInvestorEmail] = useState<string>("");
  const [investorName, setInvestorName] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");
  const [linkedInLink, setLinkedInLink] = useState<string>("");
  const [totalCapitalDeployed, setTotalCapitalDeployed] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [facebookLink, setFacebookLink] = useState<string>("");
  const [averageRoi, setAverageRoi] = useState<string>("");
  const [investmentStrategy, setInvestmentStrategy] = useState<string>("");
  const [investmentHistory, setInvestmentHistory] = useState<string>("");
  const [investmentFocus, setInvestmentFocus] = useState<string>("");
  const [geographicalPreferences, setGeographicalPreferences] =
    useState<string>("");
  const [investmentType, setInvestmentType] = useState<string>("");
  const [minInvestmentAmount, setMinInvestmentAmount] = useState<
    number | string
  >("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [cryptoType, setCryptoType] = useState("");
  const [cryptoWalletAddress, setCryptoWalletAddress] = useState("");
  const [exitStrategy, setExitStrategy] = useState<string>("");
  const [riskTolerance, setRiskTolerance] = useState<string>("");
  const [contactPreferences, setContactPreferences] = useState<string>("");
  const [fundSize, setFundSize] = useState<number | string>("");
  const [portfolioOverview, setPortfolioOverview] = useState<string>("");
  const [investmentHorizon, setInvestmentHorizon] = useState<string>("");
  const [advisoryRole, setAdvisoryRole] = useState<boolean>(false);
  const [socialImpactFocus, setSocialImpactFocus] = useState<boolean>(false);
  const [investmentRestrictions, setInvestmentRestrictions] =
    useState<string>("");
  const [websiteLink, setWebsiteLink] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    // Prepare data to be saved
    const investorData = {
      investorEmail,
      investorName,
      contactInfo,
      linkedInLink,
      totalCapitalDeployed,
      instagramLink,
      twitterLink,
      facebookLink,
      averageRoi,
      preferredIndustries,
      investmentSize,
      investmentStrategy,
      investmentHistory,
      investmentFocus,
      geographicalPreferences,
      investmentType,
      minInvestmentAmount,
      exitStrategy,
      riskTolerance,
      contactPreferences,
      fundSize,
      portfolioOverview,
      investmentHorizon,
      advisoryRole,
      socialImpactFocus,
      investmentRestrictions,
      websiteLink,
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
      // Save data to Firestore under the user's role (investor)
      await setDoc(
        doc(db, "users", user.uid, "roles", "investor"),
        investorData,
      );
      router.push("/dashboard/investor"); // Redirect to investor dashboard
    } catch (error) {
      console.error("Error saving investor data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="mx-auto my-8 max-w-4xl rounded-xl bg-blue-100/40 p-6 shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Investor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Preferred Industries */}
        <div>
          <label
            htmlFor="preferredIndustries"
            className="block text-sm font-semibold text-gray-700"
          >
            Preferred Industries
          </label>
          <select
            id="preferredIndustries"
            multiple
            value={preferredIndustries}
            onChange={(e) =>
              setPreferredIndustries(
                Array.from(e.target.selectedOptions, (option) => option.value),
              )
            }
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        {/* Investment Size */}
        <div>
          <label
            htmlFor="investmentSize"
            className="block text-sm font-semibold text-gray-700"
          >
            Average Investment Size ($)
          </label>
          <input
            type="number"
            id="investmentSize"
            value={investmentSize}
            onChange={(e) => setInvestmentSize(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            required
          />
        </div>
        <div>
          {/* Investor Email */}
          <div>
            <label
              htmlFor="investorEmail"
              className="block text-sm font-semibold text-gray-700"
            >
              Investor Email
            </label>
            <input
              id="investorEmail"
              type="email"
              value={investorEmail}
              onChange={(e) => setInvestorEmail(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Investor Name */}
          <div>
            <label
              htmlFor="investorName"
              className="block text-sm font-semibold text-gray-700"
            >
              Investor Name
            </label>
            <input
              id="investorName"
              type="text"
              value={investorName}
              onChange={(e) => setInvestorName(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Contact Info */}
          <div>
            <label
              htmlFor="contactInfo"
              className="block text-sm font-semibold text-gray-700"
            >
              Contact Info
            </label>
            <input
              id="contactInfo"
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
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

          {/* Total Capital Deployed */}
          <div>
            <label
              htmlFor="totalCapitalDeployed"
              className="block text-sm font-semibold text-gray-700"
            >
              Total Capital Deployed
            </label>
            <input
              id="totalCapitalDeployed"
              type="number"
              value={totalCapitalDeployed}
              onChange={(e) => setTotalCapitalDeployed(e.target.value)}
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

          {/* Average ROI */}
          <div>
            <label
              htmlFor="averageRoi"
              className="block text-sm font-semibold text-gray-700"
            >
              Average ROI
            </label>
            <input
              id="averageRoi"
              type="number"
              value={averageRoi}
              onChange={(e) => setAverageRoi(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Investment Strategy */}
        <div>
          <label
            htmlFor="investmentStrategy"
            className="block text-sm font-semibold text-gray-700"
          >
            Investment Strategy
          </label>
          <textarea
            id="investmentStrategy"
            value={investmentStrategy}
            onChange={(e) => setInvestmentStrategy(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
            required
          />
        </div>

        {/* Investment History */}
        <div>
          <label
            htmlFor="investmentHistory"
            className="block text-sm font-semibold text-gray-700"
          >
            Investment History
          </label>
          <textarea
            id="investmentHistory"
            value={investmentHistory}
            onChange={(e) => setInvestmentHistory(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
            required
          />
        </div>

        {/* Investment Focus */}
        <div>
          <label
            htmlFor="investmentFocus"
            className="block text-sm font-semibold text-gray-700"
          >
            Investment Focus
          </label>
          <input
            type="text"
            id="investmentFocus"
            value={investmentFocus}
            onChange={(e) => setInvestmentFocus(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Geographical Preferences */}
        <div>
          <label
            htmlFor="geographicalPreferences"
            className="block text-sm font-semibold text-gray-700"
          >
            Geographical Preferences
          </label>
          <input
            type="text"
            id="geographicalPreferences"
            value={geographicalPreferences}
            onChange={(e) => setGeographicalPreferences(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Minimum Investment Amount */}
        <div>
          <label
            htmlFor="minInvestmentAmount"
            className="block text-sm font-semibold text-gray-700"
          >
            Minimum Investment Amount ($)
          </label>
          <input
            type="number"
            id="minInvestmentAmount"
            value={minInvestmentAmount}
            onChange={(e) => setMinInvestmentAmount(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Exit Strategy */}
        <div>
          <label
            htmlFor="exitStrategy"
            className="block text-sm font-semibold text-gray-700"
          >
            Preferred Exit Strategy
          </label>
          <input
            type="text"
            id="exitStrategy"
            value={exitStrategy}
            onChange={(e) => setExitStrategy(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Risk Tolerance */}
        <div>
          <label
            htmlFor="riskTolerance"
            className="block text-sm font-semibold text-gray-700"
          >
            Risk Tolerance
          </label>
          <select
            id="riskTolerance"
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Contact Preferences */}
        <div>
          <label
            htmlFor="contactPreferences"
            className="block text-sm font-semibold text-gray-700"
          >
            Contact Preferences
          </label>
          <input
            type="text"
            id="contactPreferences"
            value={contactPreferences}
            onChange={(e) => setContactPreferences(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Fund Size */}
        <div>
          <label
            htmlFor="fundSize"
            className="block text-sm font-semibold text-gray-700"
          >
            Fund Size ($)
          </label>
          <input
            type="number"
            id="fundSize"
            value={fundSize}
            onChange={(e) => setFundSize(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Portfolio Overview */}
        <div>
          <label
            htmlFor="portfolioOverview"
            className="block text-sm font-semibold text-gray-700"
          >
            Portfolio Overview
          </label>
          <textarea
            id="portfolioOverview"
            value={portfolioOverview}
            onChange={(e) => setPortfolioOverview(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            rows={4}
          />
        </div>

        {/* Investment Horizon */}
        <div>
          <label
            htmlFor="investmentHorizon"
            className="block text-sm font-semibold text-gray-700"
          >
            Investment Horizon
          </label>
          <input
            type="text"
            id="investmentHorizon"
            value={investmentHorizon}
            onChange={(e) => setInvestmentHorizon(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Advisory Role */}
        <div>
          <label
            htmlFor="advisoryRole"
            className="block text-sm font-semibold text-gray-700"
          >
            Willing to Take Advisory Role?
          </label>
          <input
            type="checkbox"
            id="advisoryRole"
            checked={advisoryRole}
            onChange={(e) => setAdvisoryRole(e.target.checked)}
            className="mt-1"
          />
        </div>

        {/* Social Impact Focus */}
        <div>
          <label
            htmlFor="socialImpactFocus"
            className="block text-sm font-semibold text-gray-700"
          >
            Interested in Social Impact Investments?
          </label>
          <input
            type="checkbox"
            id="socialImpactFocus"
            checked={socialImpactFocus}
            onChange={(e) => setSocialImpactFocus(e.target.checked)}
            className="mt-1"
          />
        </div>

        {/* Investment Restrictions */}
        <div>
          <label
            htmlFor="investmentRestrictions"
            className="block text-sm font-semibold text-gray-700"
          >
            Investment Restrictions
          </label>
          <input
            type="text"
            id="investmentRestrictions"
            value={investmentRestrictions}
            onChange={(e) => setInvestmentRestrictions(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Website Link */}
        <div>
          <label
            htmlFor="websiteLink"
            className="block text-sm font-semibold text-gray-700"
          >
            Website or Portfolio Link
          </label>
          <input
            type="url"
            id="websiteLink"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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

        <div className="mt-4">
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-500 p-3 font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvestorForm;
