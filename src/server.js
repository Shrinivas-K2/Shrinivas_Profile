const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// 1. UPDATE THESE TWO LINES WITH YOUR INFO:
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shrinivaskshreeni@gmail.com",      // <-- Replace with your Gmail address
    pass: "Shreeni@2004",         // <-- Replace with your Gmail App Password (not your main password)
  },
});


app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: "shrinivaskshreeni@gmail.com",    // <-- Replace with your Gmail address
      to: "shrinivaskshreeni@gmail.com",      // <-- Replace with your Gmail address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));