import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { UserRole } from "../types";

export const useRoleRedirect = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const role = (user as any)?.role as UserRole; // Assuming role is stored in user data
    switch (role) {
      case "super-admin":
        router.push("/dashboard/super-admin");
        break;
      case "admin":
        router.push("/dashboard/admin");
        break;
      case "mentor":
        router.push("/dashboard/mentor");
        break;
      case "incubator":
        router.push("/dashboard/incubator");
        break;
      case "sponsor":
        router.push("/dashboard/sponsor");
        break;
      case "startup":
        router.push("/dashboard/startup");
        break;
      default:
        router.push("/auth/signin");
    }
  }, [user, router]);
};
