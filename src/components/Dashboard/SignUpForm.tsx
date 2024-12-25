import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  profileImage: File;
  role: Role;
}

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    profileImage: yup
      .mixed<File>()
      .test("fileType", "Profile Image is required", (value) => {
        return value && value instanceof File;
      })
      .required("Profile Image is required"),
    role: yup
      .string()
      .oneOf(["startup", "investor", "influencer", "mentor", "admin"])
      .required("Role is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    setLoading(true);

    try {
      // Upload profile image to Cloudinary
      const formData = new FormData();
      formData.append("file", data.profileImage as File);
      formData.append("upload_preset", "your_cloudinary_preset");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload",
        formData
      );
      const uploadedImageUrl = res.data.secure_url;

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userId = userCredential.user.uid;

      // Store user data in Firestore
      await setDoc(doc(db, "users", userId), {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        profileImage: uploadedImageUrl,
        role: data.role,
      });

      // Redirect to role-specific form
      router.push(`/forms/${data.role}`);
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          {...register("fullName")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input {...register("email")} className="w-full p-2 border rounded" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          {...register("phoneNumber")}
          className="w-full p-2 border rounded"
        />
        <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
      </div>

      {/* Profile Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Profile Image</label>
        <input type="file" {...register("profileImage")} className="w-full" />
        <p className="text-red-500 text-sm">{errors.profileImage?.message}</p>
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Role</label>
        <select {...register("role")} className="w-full p-2 border rounded">
          <option value="">Select Role</option>
          <option value="startup">Startup</option>
          <option value="investor">Investor</option>
          <option value="influencer">Influencer</option>
          <option value="mentor">Mentor</option>
          <option value="admin">Admin</option>
        </select>
        <p className="text-red-500 text-sm">{errors.role?.message}</p>
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
