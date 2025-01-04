/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import UserList from "../../components/UserList/UserList";
import PrivateChat from "../../components/PrivateChat/PrivateChat";

const Home: React.FC = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;
  const { user, userDetails } = firebaseContext;
  const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>(
    null,
  );

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-4xl font-extrabold">
          Welcome, {userDetails?.fullName || user?.email}
        </h1>
        <div className="mb-6 text-center">
          <p className="text-lg">
            <strong>Role:</strong> {userDetails?.role || "Not specified"}
          </p>
          <p className="text-lg">
            <strong>Phone Number:</strong>{" "}
            {userDetails?.phoneNumber || "Not available"}
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
      </div>
    </div>
  );
};

export default Home;
