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

  const conversationId =
    currentUser && currentUser.uid > selectedUser.uid
      ? `${currentUser.uid}_${selectedUser.uid}`
      : `${selectedUser.uid}_${currentUser?.uid || ""}`;

  useEffect(() => {
    if (!conversationId) return;

    const q = query(
      collection(db, "conversations", conversationId, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data());
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [conversationId]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "conversations", conversationId, "messages"), {
      text: message,
      sender: currentUser?.uid,
      createdAt: new Date(),
    });

    setMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-100/10 p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">
        Chat with {selectedUser.fullName}
      </h3>
      <div className="flex flex-col flex-grow overflow-y-auto bg-white p-4 rounded-lg mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-3 ${
              msg.sender === currentUser?.uid ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-white text-sm ${
                msg.sender === currentUser?.uid
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }`}
            >
              <p>{msg.text}</p>
              <small className="block mt-2 text-xs text-gray-200">
                {format(
                  msg.createdAt?.toDate
                    ? msg.createdAt.toDate()
                    : new Date(),
                  "dd MMM yyyy, hh:mm a"
                )}
              </small>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PrivateChat;
