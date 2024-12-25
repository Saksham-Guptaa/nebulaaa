import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    res.status(200).json({ message: "Sign-in successful", uid: user.uid });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}
