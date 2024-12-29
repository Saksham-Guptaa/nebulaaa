import { createContext, useContext, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

interface RoleWiseUsers {
  mentors: User[];
  investors: User[];
  influencers: User[];
  startups: User[];
  admins: User[];
}

interface UserContextType {
  usersByRole: RoleWiseUsers;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [usersByRole, setUsersByRole] = useState<RoleWiseUsers>({
    mentors: [],
    investors: [],
    influencers: [],
    startups: [],
    admins: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const roles = ["mentor", "investor", "influencer", "startup", "admin"];
        const roleWiseData: RoleWiseUsers = {
          mentors: [],
          investors: [],
          influencers: [],
          startups: [],
          admins: [],
        };

        // Fetch users for each role
        for (const role of roles) {
          const q = query(collection(db, "users"), where("role", "==", role));
          const querySnapshot = await getDocs(q);
          const users: User[] = [];
          querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() } as User);
          });
          roleWiseData[`${role}s` as keyof RoleWiseUsers] = users;
        }

        setUsersByRole(roleWiseData);
      } catch (error) {
        console.error("Error fetching users by role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ usersByRole, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
