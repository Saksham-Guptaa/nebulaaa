"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PaymentInfo: React.FC = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h1>
        <p className="text-gray-600 mb-4">
          Please make a payment to the bank account below. We will verify your payment shortly.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <img
            src="/QRcode.png"
            alt="Bank QR Code"
            className="w-40 h-40"
          />
        </div>

        {/* Bank Details */}
        <div className="bg-gray-100 p-4 rounded-md mb-4 text-left">
          <p className="text-sm text-gray-800">
            <strong>Account Name:</strong> NEBULA
          </p>
          <p className="text-sm text-gray-800">
            <strong>Account Number:</strong> 123456789
          </p>
          <p className="text-sm text-gray-800">
            <strong>IFSC Code:</strong> ABCD0123456
          </p>
          <p className="text-sm text-gray-800">
            <strong>UPI ID:</strong> your-upi@bank
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          After making the payment, please wait for manual verification.
        </p>

        {/* Proceed to Profile Button */}
        <button
          onClick={handleProceed}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go to Profile Page
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;