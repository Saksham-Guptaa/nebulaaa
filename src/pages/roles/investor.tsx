import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth"; // Custom hook for authentication

const InvestorForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [preferredIndustries, setPreferredIndustries] = useState<string[]>([]);
  const [investmentSize, setInvestmentSize] = useState<number | string>("");
  const [investmentStrategy, setInvestmentStrategy] = useState<string>("");
  const [investmentHistory, setInvestmentHistory] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    // Prepare data to be saved
    const investorData = {
      preferredIndustries,
      investmentSize,
      investmentStrategy,
      investmentHistory,
      createdAt: new Date().toISOString(),
    };

    try {
      // Save data to Firestore under the user's role (investor)
      await setDoc(
        doc(db, "users", user.uid, "roles", "investor"),
        investorData
      );
      router.push("/dashboard/investor"); // Redirect to investor dashboard
    } catch (error) {
      console.error("Error saving investor data:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Investor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Preferred Industries */}
        <div>
          <label
            htmlFor="preferredIndustries"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Industries
          </label>
          <select
            id="preferredIndustries"
            multiple
            value={preferredIndustries}
            onChange={(e) =>
              setPreferredIndustries(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        {/* Average Investment Size */}
        <div>
          <label
            htmlFor="investmentSize"
            className="block text-sm font-medium text-gray-700"
          >
            Average Investment Size ($)
          </label>
          <input
            type="number"
            id="investmentSize"
            value={investmentSize}
            onChange={(e) => setInvestmentSize(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Investment Strategy */}
        <div>
          <label
            htmlFor="investmentStrategy"
            className="block text-sm font-medium text-gray-700"
          >
            Investment Strategy
          </label>
          <textarea
            id="investmentStrategy"
            value={investmentStrategy}
            onChange={(e) => setInvestmentStrategy(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        {/* Investment History */}
        <div>
          <label
            htmlFor="investmentHistory"
            className="block text-sm font-medium text-gray-700"
          >
            Investment History
          </label>
          <textarea
            id="investmentHistory"
            value={investmentHistory}
            onChange={(e) => setInvestmentHistory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
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

export default InvestorForm;
