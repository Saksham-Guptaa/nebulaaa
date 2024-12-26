import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for file uploads
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err: Error, fields: formidable.Fields, files: formidable.Files) => {
    if (err) {
      console.error("Formidable Error:", err);
      return res.status(500).json({ message: "File parsing error" });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const folder = fields.folder || "profile_images";

    try {
      // Validate file type
      const allowedFormats = ["image/jpeg", "image/png", "application/pdf"];
      if (!allowedFormats.includes(file.mimetype || "")) {
        return res.status(400).json({ message: "Unsupported file type" });
      }

      // Validate file size (max 5 MB)
      if (file.size > 5 * 1024 * 1024) {
        return res.status(400).json({ message: "File size exceeds the limit of 5 MB" });
      }

      // Upload file to Cloudinary
      const uploadOptions: any = { folder };
      if (file.mimetype === "application/pdf") {
        uploadOptions.resource_type = "raw";
      }

      const uploadResponse = await cloudinary.uploader.upload(file.filepath, uploadOptions);

      // Respond with the uploaded file URL
      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error: any) {
      console.error("Upload Error:", error);
      res.status(500).json({
        message: "An error occurred during file upload",
        error: error.message,
      });
    } finally {
      // Clean up temporary file
      fs.unlink(file.filepath, (unlinkErr) => {
        if (unlinkErr) console.error("File cleanup error:", unlinkErr);
      });
    }
  });
}
