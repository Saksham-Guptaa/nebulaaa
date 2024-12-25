import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth"; // Custom hook for authentication

const MentorForm = () => {
  const { user } = useAuth(); // Ensure user is authenticated
  const router = useRouter();

  const [hourlyRate, setHourlyRate] = useState<number | string>("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [interests, setInterests] = useState<string>("");
  const [expertise, setExpertise] = useState<string>("");
  const [certification, setCertification] = useState<File | null>(null);

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
      certification: certification ? certification.name : "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertification(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mentor Form</h1>
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        {/* Certification Upload */}
        <div>
          <label
            htmlFor="certification"
            className="block text-sm font-medium text-gray-700"
          >
            Certification (PDF or Image)
          </label>
          <input
            type="file"
            id="certification"
            accept=".pdf,image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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

export default MentorForm;
