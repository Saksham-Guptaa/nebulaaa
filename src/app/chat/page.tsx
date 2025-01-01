"use client";
import React, { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import UserList from "../../components/UserList/UserList";
import PrivateChat from "../../components/PrivateChat/PrivateChat";
import SignIn from "../auth/signin/page";
import { auth } from "@/utils/firebase";

const Home: React.FC = () => {
  const firebaseContext = useFirebase();
  if (!firebaseContext) return null;

  const { user, userDetails } = firebaseContext;
  const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>(
    null,
  );

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {userDetails?.fullName || user.email}</h1>
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
              currentUserUid={user.uid}
            />
          )}

          <button
            onClick={() => auth.signOut()}
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
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Home;
