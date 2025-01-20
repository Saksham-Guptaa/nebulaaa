import nodemailer from "nodemailer";

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, interest, message } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"Nebula Accelerator" <${process.env.EMAIL_USER}>`,
      to: "contact@nebulaaccelerator.com", // Replace with your recipient email address
      subject: `New Contact Form Submission: ${interest}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nInterested in: ${interest}\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
