import '../components/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from "react";
import emailjs from "emailjs-com"; // install with: npm install emailjs-com

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Update form state on input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler: sends email via EmailJS
  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const result = await emailjs.send(
        "service_lzqflim",     // replace with your EmailJS service ID
        "template_8f1h0xe",    // replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "shrinivaskshreeni@gmail.com"
        },
        "LUwADfHLFjSWCpttr"      // replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send. Try again.");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  if (sent) return <div style={{ textAlign: "center", padding: "2rem" }}>✅ Thank you for contacting us!</div>;

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>I’d Love to Hear<br />From You</h2>
        <p>Whether it’s feedback, ideas, or just a hello — I am here.</p>
        <div className="contact-info">
          <p><FaEnvelope /> shrinivaskshreeni@mail.com</p>
          <p><FaPhone /> (+91) 6362507433 </p>
          <p><FaMapMarkerAlt /> Electronic City, Bengaluru, Karnataka </p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shrinivas-k-093a17244/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Shrinivas-K2" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/shrinivas_k_shree/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="contact-right">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", color: "#ccc", fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} Shrinivas. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
