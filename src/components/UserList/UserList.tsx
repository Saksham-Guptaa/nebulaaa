/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

interface UserListProps {
  onSelectUser: (user: Record<string, any>) => void;
  currentUserUid: string;
}

const UserList: React.FC<UserListProps> = ({
  onSelectUser,
  currentUserUid,
}) => {
  const [users, setUsers] = useState<Record<string, any>[]>([]);
  const [search, setSearch] = useState("");

  // useEffect to fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = collection(db, "users");
      const querySnapshot = await getDocs(userCollection);
      const userList = querySnapshot.docs
        .map((doc) => ({ uid: doc.id, ...doc.data() }))
        .filter((user) => user.uid !== currentUserUid); // Exclude current user
      setUsers(userList);
    };

    fetchUsers();
  }, [currentUserUid]);

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      user.role?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="">
      {/* Search input for filtering users */}
      <input
        type="text"
        placeholder="Search by name or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-full rounded-full"
      />
      <div className="py-5">
        {/* Render filtered users */}
        {filteredUsers.map((user) => (
          <div key={user.uid} onClick={() => onSelectUser(user)}>
            <p className="py-2 cursor-pointer">
              <strong>{user.fullName}</strong> - <em>{user.role}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
