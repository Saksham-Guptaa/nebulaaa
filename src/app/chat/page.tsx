/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import UserList from "../../components/UserList/UserList";
import PrivateChat from "../../components/PrivateChat/PrivateChat";
import { auth } from "@/utils/firebase";

const Home: React.FC = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;
  const { user, userDetails } = firebaseContext;
  const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>(
    null,
  );
  const handleLogout = () => {
    auth.signOut().catch((error) => {
      console.error("Error during logout:", error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-4xl rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Welcome, {userDetails?.fullName || user?.email}
        </h1>
        <div className="text-center mb-6">
          <p className="text-lg">
            <strong>Role:</strong> {userDetails?.role || "Not specified"}
          </p>
          <p className="text-lg">
            <strong>Phone Number:</strong> {userDetails?.phoneNumber || "Not available"}
          </p>
        </div>
        {selectedUser ? (
          <PrivateChat selectedUser={selectedUser} />
        ) : (
          <UserList
            onSelectUser={(user) => setSelectedUser(user)}
            currentUserUid={user?.uid || ""}
          />
        )}

        <button
          onClick={handleLogout}
          className="mt-8 w-full py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
