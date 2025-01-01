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

  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      user.role?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredUsers.map((user) => (
          <div key={user.uid} onClick={() => onSelectUser(user)}>
            <p>
              <strong>{user.fullName}</strong> - <em>{user.role}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
