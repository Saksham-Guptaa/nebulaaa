"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../utils/firebase";
import { format } from "date-fns";

interface PrivateChatProps {
  selectedUser: Record<string, any>;
}

const PrivateChat: React.FC<PrivateChatProps> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  const currentUser = auth.currentUser;

  // Ensure conversationId is calculated once and not conditionally inside hooks
  const conversationId =
    currentUser && currentUser.uid > selectedUser.uid
      ? `${currentUser.uid}_${selectedUser.uid}`
      : `${selectedUser.uid}_${currentUser?.uid || ""}`;

  // useEffect should be called unconditionally
  useEffect(() => {
    if (!conversationId) return; // Early return if conversationId is invalid

    const q = query(
      collection(db, "conversations", conversationId, "messages"),
      orderBy("createdAt"),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data());
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [conversationId]); // Only depend on conversationId

  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "conversations", conversationId, "messages"), {
      text: message,
      sender: currentUser?.uid,
      createdAt: new Date(),
    });

    setMessage(""); // Clear the message input after sending
  };

  return (
    <div>
      <h3>Chat with {selectedUser.fullName}</h3>
      <div>
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{
              textAlign: msg.sender === currentUser?.uid ? "right" : "left",
            }}
          >
            <strong>{msg.text}</strong>
            <br />
            <small>
              {format(
                msg.createdAt?.toDate ? msg.createdAt.toDate() : new Date(),
                "dd MMM yyyy, hh:mm a",
              )}
            </small>
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default PrivateChat;
