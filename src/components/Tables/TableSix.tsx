"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase"; // Make sure to import auth
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { useRouter } from "next/navigation";
interface TableData {
  uid: string;
  name: string;
  position: string;
  email: string;
  role: string;
}
const TableSix: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    // Monitor the auth state and get the current user's UID
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      } else {
        setCurrentUserUid(null);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  useEffect(() => {
    const fetchInterestedUsers = async () => {
      if (!currentUserUid) return;

      try {
        const userDocRef = doc(db, "users", currentUserUid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const interestedUsers = userSnapshot.data()?.interestedUsers || [];
          setData(interestedUsers);
        }
      } catch (error) {
        console.error("Error fetching interested users:", error);
      }
    };

    fetchInterestedUsers();
  }, [currentUserUid]);

  const handleInterestChange = async (uid: string, status: string) => {
    try {
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, {
        interestStatus: status,
      });
      console.log(`Interest status updated to ${status} for user ${uid}.`);
    } catch (error) {
      console.error("Error updating interest status:", error);
    }
  };

  const Dropdown = ({ uid }: { uid: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
      <div className="relative">
        <button
          className="rounded-lg bg-gray-200 px-3 py-2 text-gray-700 focus:outline-none"
          onClick={toggleDropdown}
        >
          Actions
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  handleInterestChange(uid, "Interested");
                  setIsOpen(false);
                }}
              >
                Interested
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  handleInterestChange(uid, "Uninterested");
                  setIsOpen(false);
                }}
              >
                Uninterested
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="">
        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-3">
            <h5 className="font-medium text-white">Name</h5>
          </div>

          <div className="col-span-3">
            <h5 className="font-medium text-white">Email</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">Role</h5>
          </div>
          <div className="col-span-1">
            <h5 className="text-right font-medium text-white">Edit</h5>
          </div>
        </div>

        <div className=" z-0 rounded-b-[10px] bg-white dark:bg-boxdark">
          {data.map((item, index) => (
            <div
              // onClick={() => {
              //   router.push(`/deck/${item.role}/${currentUserUid}`);
              // }}
              key={index}
              className="z-0 grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div
                className="col-span-3"
                onClick={() => {
                  router.push(`/deck/${item.role}/${currentUserUid}`);
                }}
              >
                <p className="text-[#637381] dark:text-bodydark">{item.name}</p>
              </div>

              <div
                className="col-span-3"
                onClick={() => {
                  router.push(`/deck/${item.role}/${currentUserUid}`);
                }}
              >
                <p className="text-[#637381] dark:text-bodydark">
                  {item.email}
                </p>
              </div>
              <div
                className="col-span-2"
                onClick={() => {
                  router.push(`/deck/${item.role}/${currentUserUid}`);
                }}
              >
                <p className="text-[#637381] dark:text-bodydark">{item.role}</p>
              </div>
              <div className="relative z-99999 col-span-1">
                <Dropdown uid={item.uid} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSix;
