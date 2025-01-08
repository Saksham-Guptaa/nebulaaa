"use client"
import React from "react";
import { useState } from "react";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import Footer from "@/components/Footer";

interface FormData {
  username: string;
  mobile: string;
  membership: string;
  post: string;
}

const CreateProfile: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    username: "",
    mobile: "",
    membership: "",
    post: "",
  });

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          username: form.username,
          mobile: form.mobile,
          membership: form.membership,
          post: form.post,
          isVerified: false,
        });
        alert("Profile created successfully!");
        window.location.href = "/paymentInfo";
      } catch (error) {
        alert("An error occurred while creating the profile.");
      }
    } else {
      alert("User is not authenticated.");
    }
  };

  return (

    <div>
    <div>
      <div className="border-b-4 border-black" >
        <h1 className="my-6 text-6xl mx-10 font-extrabold  " >
          NEBULA
        </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-2xl p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          CREATE YOUR PROFILE
        </h1>
        <p className="text-gray-500 text-center">
          Fill in the details below to get started.
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, username: e.target.value }))
              }
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              value={form.mobile}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, mobile: e.target.value }))
              }
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Membership */}
          <div>
            <label
              htmlFor="membership"
              className="block text-sm font-medium text-gray-700"
            >
              Select Membership
            </label>
            <select
              id="membership"
              value={form.membership}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, membership: e.target.value }))
              }
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Membership</option>
              <option value="Exclusive Membership">Exclusive Membership 99$  </option>
              <option value="Founders and Teams Membership">
                Founders and Teams Membership  399$
              </option>
              <option value="Mentors in Residence">Mentors in Residence  699$ </option>
              <option value="Investors in Residence">
                Investors in Residence  $999
              </option>
            </select>
          </div>

          {/* Post */}
          <div>
            <label
              htmlFor="post"
              className="block text-sm font-medium text-gray-700"
            >
              Select Post
            </label>
            <select
              id="post"
              value={form.post}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, post: e.target.value }))
              }
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Post</option>
              {/* <option value="admin">Admin</option>s */}
              <option value="mentor">Mentor</option>
              <option value="investor">Investor</option>
              <option value="startup">Startup</option>
              <option value="founder">Founder</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-lg text-lg font-semibold hover:from-indigo-600 hover:to-blue-500 transition-all"
        >
          Save Profile
        </button>
      </div>
    </div>


      
    </div>
    <Footer/>

    </div>


  );
};

export default CreateProfile;
