import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import axios from "axios";
import { auth, db } from "../../utils/firebase";

type Role = "startup" | "investor" | "influencer" | "mentor" | "admin";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profileImage: File | null;
  role: Role;
}

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<SignUpFormValues>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImage: null,
    role: "startup",
  });
  interface SignUpFormErrors {
    fullName?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    profileImage?: string;
    role?: string;
  }

  const [errors, setErrors] = useState<SignUpFormErrors>({});
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const files = (e.target as HTMLInputElement).files;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "file" ? (files ? files[0] : null) : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: SignUpFormErrors = {};
    if (!formValues.fullName) newErrors.fullName = "Full Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.password) newErrors.password = "Password is required";
    if (!formValues.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formValues.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // If profile image exists, upload it to Cloudinary
      let uploadedImageUrl = "";
      if (formValues.profileImage) {
        const formData = new FormData();
        formData.append("file", formValues.profileImage as File);
        formData.append("upload_preset", "your_cloudinary_preset");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload",
          formData
        );
        uploadedImageUrl = res.data.secure_url;
      }

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      const userId = userCredential.user.uid;

      // Store user data in Firestore
      await setDoc(doc(db, "users", userId), {
        fullName: formValues.fullName,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        profileImage: uploadedImageUrl || null, // If no image, store null
        role: formValues.role,
      });

      // Redirect to role-specific form
      router.push(`/roles/${formValues.role}`);
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Profile Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Profile Image (Optional)
        </label>
        <input
          type="file"
          name="profileImage"
          onChange={handleInputChange}
          className="w-full"
        />
        {errors.profileImage && (
          <p className="text-red-500 text-sm">{errors.profileImage}</p>
        )}
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Role</label>
        <select
          name="role"
          value={formValues.role}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="startup">Startup</option>
          <option value="investor">Investor</option>
          <option value="influencer">Influencer</option>
          <option value="mentor">Mentor</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
