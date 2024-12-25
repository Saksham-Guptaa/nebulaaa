import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth"; // Custom hook for authentication
// import { uploadFileToCloudinary } from "../../utils/cloudinary"; // Custom function for file upload

const StartupForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [gender, setGender] = useState<string>("");
  const [totalFunding, setTotalFunding] = useState<number | string>("");
  const [totalMembers, setTotalMembers] = useState<number | string>("");
  const [members, setMembers] = useState<{ username: string; email: string }[]>(
    []
  );
  const [startupDetails, setStartupDetails] = useState<string>("");
  const [milestones, setMilestones] = useState<string>("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return alert("You must be logged in to submit this form.");
    }

    // Upload PDF to Cloudinary
    let pdfUrl = "";
    // if (pdfFile) {
    //   const uploadResponse = await uploadFileToCloudinary(pdfFile);
    //   pdfUrl = uploadResponse.url;
    // }

    // Prepare data to be saved
    const startupData = {
      gender,
      totalFunding,
      totalMembers,
      members,
      startupDetails,
      pdfUrl,
      milestones,
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Startup Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Gender */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender of Startup
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
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
            className="block text-sm font-medium text-gray-700"
          >
            Total Funding Required ($)
          </label>
          <input
            type="number"
            id="totalFunding"
            value={totalFunding}
            onChange={(e) => setTotalFunding(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Total Members */}
        <div>
          <label
            htmlFor="totalMembers"
            className="block text-sm font-medium text-gray-700"
          >
            Total Members
          </label>
          <input
            type="number"
            id="totalMembers"
            value={totalMembers}
            onChange={(e) => setTotalMembers(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Members (Username and Email) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Startup Details (PDF) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Details About the Startup (PDF)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            // required
          />
        </div>

        {/* Milestones */}
        <div>
          <label
            htmlFor="milestones"
            className="block text-sm font-medium text-gray-700"
          >
            Milestones
          </label>
          <textarea
            id="milestones"
            value={milestones}
            onChange={(e) => setMilestones(e.target.value)}
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

export default StartupForm;
