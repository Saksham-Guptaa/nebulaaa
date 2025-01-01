/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import UserList from "../../components/UserList/UserList";
import PrivateChat from "../../components/PrivateChat/PrivateChat";
import { auth } from "@/utils/firebase";

const Home: React.FC = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of useFirebase
  useEffect(() => {
    if (firebaseContext) {
      setLoading(false); // Once firebaseContext is available, stop loading
    }
  }, [firebaseContext]);

  if (loading) return <div>Loading...</div>; // Show a loading message until firebaseContext is ready

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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <>
        <h1 style={{ color: "#333" }}>
          Welcome, {userDetails?.fullName || user?.email}
        </h1>
        <p>
          <strong>Role:</strong> {userDetails?.role || "Not specified"}
        </p>
        <p>
          <strong>Phone Number:</strong>{" "}
          {userDetails?.phoneNumber || "Not available"}
        </p>
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
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </>
    </div>
  );
};

export default Home;
