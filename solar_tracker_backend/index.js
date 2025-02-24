import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  const { name, email, phone, message, privacyAccepted } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message || privacyAccepted !== true) {
    return res.status(400).json({ error: "Please fill in all required fields and accept the privacy policy." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="text-align: center; color: #333;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #555;">You have received a new message:</p>
        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${message}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Privacy Policy Accepted:</td><td style="padding: 8px;">${privacyAccepted ? "Yes" : "No"}</td></tr>
        </table>
        <p style="margin-top: 20px; text-align: center; color: #555;">This message was sent from your website's contact form.</p>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHTML,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending the message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
