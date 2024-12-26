import { NextApiRequest, NextApiResponse } from "next";
import { auth, db } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password, role, fullName, phoneNumber, formCompleted } = req.body;

  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data in Firestore with formCompleted initially set to false
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      email,
      fullName,
      phoneNumber,
      role,
      formCompleted: false,  // Initially set to false
      createdAt: new Date().toISOString(),
    });

    // If formCompleted is true, update the Firestore document
    if (formCompleted) {
      await updateDoc(userDocRef, {
        formCompleted: true,
      });
    }

    res.status(201).json({ message: "User created successfully", uid: user.uid });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
