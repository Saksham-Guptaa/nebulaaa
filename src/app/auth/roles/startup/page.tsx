"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../../../hooks/useAuth"; // Custom hook for authentication

const StartupForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();
  const [genre, setgenre] = useState<string>("");
  const [totalFunding, setTotalFunding] = useState<number | string>("");
  const [totalMembers, setTotalMembers] = useState<number | string>("");
  const [members, setMembers] = useState<{ username: string; email: string }[]>(
    [],
  );
  const [startupEmail, setStartupEmail] = useState<string>("");
  const [startupName, setStartupName] = useState<string>("");
  const [tagline, setTagline] = useState<string>("");
  const [problemStatement, setProblemStatement] = useState<string>("");
  const [solutionStatement, setSolutionStatement] = useState<string>("");
  const [uniqueValueProposition, setUniqueValueProposition] =
    useState<string>("");
  const [pricingStrategy, setPricingStrategy] = useState<string>("");
  const [salesPlans, setSalesPlans] = useState<string>("");
  const [growthStrategy, setGrowthStrategy] = useState<string>("");
  const [profitabilityTimeline, setProfitabilityTimeline] =
    useState<string>("");
  const [valuation, setValuation] = useState<string>("");
  const [potentialRisks, setPotentialRisks] = useState<string>("");
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
  const [influencerName, setInfluencerName] = useState<string>("");
  const [linkedInLink, setLinkedInLink] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [facebookLink, setFacebookLink] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    const startupData = {
      startupEmail,
      startupName,
      tagline,
      linkedInLink,
      instagramLink,
      twitterLink,
      facebookLink,
      youtubeLink,
      problemStatement,
      solutionStatement,
      uniqueValueProposition,
      pricingStrategy,
      salesPlans,
      growthStrategy,
      profitabilityTimeline,
      valuation,
      potentialRisks,
      genre,
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
    <div className="mx-auto my-8 max-w-4xl  rounded-xl p-6 shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Startup Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Gender */}
        <div>
          {/* Startup Email */}
          <div>
            <label
              htmlFor="startupEmail"
              className="block text-sm font-semibold text-gray-700"
            >
              Startup Email
            </label>
            <input
              id="startupEmail"
              type="email"
              value={startupEmail}
              onChange={(e) => setStartupEmail(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Startup Name */}
          <div>
            <label
              htmlFor="startupName"
              className="block text-sm font-semibold text-gray-700"
            >
              Startup Name
            </label>
            <input
              id="startupName"
              type="text"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Tagline */}
          <div>
            <label
              htmlFor="tagline"
              className="block text-sm font-semibold text-gray-700"
            >
              Tagline
            </label>
            <input
              id="tagline"
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Problem Statement */}
          <div>
            <label
              htmlFor="problemStatement"
              className="block text-sm font-semibold text-gray-700"
            >
              Problem Statement
            </label>
            <textarea
              id="problemStatement"
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Solution Statement */}
          <div>
            <label
              htmlFor="solutionStatement"
              className="block text-sm font-semibold text-gray-700"
            >
              Solution Statement
            </label>
            <textarea
              id="solutionStatement"
              value={solutionStatement}
              onChange={(e) => setSolutionStatement(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Unique Value Proposition */}
          <div>
            <label
              htmlFor="uniqueValueProposition"
              className="block text-sm font-semibold text-gray-700"
            >
              Unique Value Proposition
            </label>
            <textarea
              id="uniqueValueProposition"
              value={uniqueValueProposition}
              onChange={(e) => setUniqueValueProposition(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Pricing Strategy */}
          <div>
            <label
              htmlFor="pricingStrategy"
              className="block text-sm font-semibold text-gray-700"
            >
              Pricing Strategy
            </label>
            <textarea
              id="pricingStrategy"
              value={pricingStrategy}
              onChange={(e) => setPricingStrategy(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Sales Plans */}
          <div>
            <label
              htmlFor="salesPlans"
              className="block text-sm font-semibold text-gray-700"
            >
              Sales Plans
            </label>
            <textarea
              id="salesPlans"
              value={salesPlans}
              onChange={(e) => setSalesPlans(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Growth Strategy */}
          <div>
            <label
              htmlFor="growthStrategy"
              className="block text-sm font-semibold text-gray-700"
            >
              Growth Strategy
            </label>
            <textarea
              id="growthStrategy"
              value={growthStrategy}
              onChange={(e) => setGrowthStrategy(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Profitability Timeline */}
          <div>
            <label
              htmlFor="profitabilityTimeline"
              className="block text-sm font-semibold text-gray-700"
            >
              Profitability Timeline
            </label>
            <textarea
              id="profitabilityTimeline"
              value={profitabilityTimeline}
              onChange={(e) => setProfitabilityTimeline(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Valuation */}
          <div>
            <label
              htmlFor="valuation"
              className="block text-sm font-semibold text-gray-700"
            >
              Valuation
            </label>
            <textarea
              id="valuation"
              value={valuation}
              onChange={(e) => setValuation(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Potential Risks */}
          <div>
            <label
              htmlFor="potentialRisks"
              className="block text-sm font-semibold text-gray-700"
            >
              Potential Risks
            </label>
            <textarea
              id="potentialRisks"
              value={potentialRisks}
              onChange={(e) => setPotentialRisks(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          <label
            htmlFor="genre"
            className="block text-sm font-semibold text-gray-700"
          >
            genre of Startup
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <option value="">Select genre</option>
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
          {/* Startup Details */}
          <div>
            <label
              htmlFor="startupDetails"
              className="block text-sm font-semibold text-gray-700"
            >
              Startup Details
            </label>
            <textarea
              id="startupDetails"
              value={startupDetails}
              onChange={(e) => setStartupDetails(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* Milestones */}
          <div>
            <label
              htmlFor="milestones"
              className="block text-sm font-semibold text-gray-700"
            >
              Milestones
            </label>
            <textarea
              id="milestones"
              value={milestones}
              onChange={(e) => setMilestones(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              rows={4}
            />
          </div>

          {/* PDF Link */}
          <div>
            <label
              htmlFor="pdfLink"
              className="block text-sm font-semibold text-gray-700"
            >
              PDF Link
            </label>
            <input
              id="pdfLink"
              type="url"
              value={pdfLink}
              onChange={(e) => setPdfLink(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
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

        {/* Bank Account Number */}
        <div>
          <label
            htmlFor="bankAccountNumber"
            className="block text-sm font-semibold text-gray-700"
          >
            Bank Account Number
          </label>
          <input
            id="bankAccountNumber"
            type="text"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
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
