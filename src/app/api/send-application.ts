import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    stage,
    program,
    description,
    problem,
    market,
    team,
    funding,
    support,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail app password
    },
  });

  const mailOptions = {
    from: `"Nebula Accelerator" <${process.env.GMAIL_USER}>`,
    to: "your-email@example.com", // Replace with your recipient email
    subject: `New Startup Application from ${firstName} ${lastName}`,
    text: `
      New Startup Application:
      -------------------------
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Company Name: ${companyName}
      Stage: ${stage}
      Program: ${program}
      Description: ${description}
      Problem: ${problem}
      Market: ${market}
      Team Size: ${team}
      Funding: ${funding}
      Support Needed: ${support.join(", ")}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send application." });
  }
}
