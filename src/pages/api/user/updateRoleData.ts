import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { uid, roleData } = req.body;

  try {
    const userDocRef = doc(db, "users", uid);

    // Update role-specific data
    await updateDoc(userDocRef, {
      roleData,
      formCompleted: true,
    });

    res.status(200).json({ message: "Role data updated successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
