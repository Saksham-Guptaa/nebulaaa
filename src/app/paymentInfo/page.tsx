"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PaymentInfo: React.FC = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/profile");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Payment Information
        </h1>
        <p className="mb-4 text-gray-600">
          Please make a payment to the bank account below. We will verify your
          payment shortly.
        </p>

        {/* QR Code */}
        <div className="mb-6 flex justify-center">
          <img src="/QRcode.png" alt="Bank QR Code" className="h-40 w-40" />
        </div>

        {/* Bank Details */}
        <div className="mb-4 rounded-md bg-gray-100 p-4 text-left">
          <p className="text-sm text-gray-800">
            <strong>Account Name:</strong> Nebulex Def-Tech Foundation
          </p>
          <p className="text-sm text-gray-800">
            <strong>Account Number:</strong> 022505007253
          </p>
          <p className="text-sm text-gray-800">
            <strong>IFSC Code:</strong> ICIC0000225
          </p>
          <p className="text-sm text-gray-800">
            <strong>Swift Code:</strong> ICICINBBCTS
          </p>
          <p className="text-sm text-gray-800">
            <strong>UPI ID:</strong> nebulex@icici
          </p>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          After making the payment, please wait for manual verification.
        </p>

        {/* Proceed to Profile Button */}
        <button
          onClick={handleProceed}
          className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Go to Profile Page
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
