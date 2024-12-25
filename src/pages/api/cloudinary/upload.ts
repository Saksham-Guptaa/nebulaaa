import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { file } = req.body;

  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "profile_images",
    });

    res.status(200).json({ url: uploadResponse.secure_url });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
