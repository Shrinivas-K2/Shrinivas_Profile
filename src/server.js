const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const {
  MAIL_USER,
  MAIL_PASS,
  MAIL_TO = 'shrinivaskshreeni@gmail.com',
  PORT = 5000,
} = process.env;

if (!MAIL_USER || !MAIL_PASS) {
  console.warn('Missing MAIL_USER or MAIL_PASS. Set them in your environment to send mail.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'contact-api' });
});

app.get('/', (_req, res) => {
  res.send('Portfolio API is running');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  if (!MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({
      success: false,
      error: 'Email server not configured. Set MAIL_USER and MAIL_PASS.',
    });
  }

  try {
    await transporter.sendMail({
      from: MAIL_USER,
      to: MAIL_TO,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
