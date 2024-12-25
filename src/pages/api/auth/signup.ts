import { NextApiRequest, NextApiResponse } from "next";
import { auth, db } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password, role, fullName, phoneNumber } = req.body;

  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email,
      fullName,
      phoneNumber,
      role,
      formCompleted: false,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ message: "User created successfully", uid: user.uid });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
