import nodemailer from "nodemailer";

export const subscribe = async (req, res) => {
  const { email } = req.body;

  // Create the transporter for sending emails using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail service
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail app password or regular password (if no 2FA)
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Subscription Confirmation",
    text: "Thank you for subscribing to EstateHub! We will keep you updated with real estate opportunities.",
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send subscription email." });
  }
};
