// src/components/Contact.js
import '../components/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Update form state on input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler: sends data to backend
  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setError("Failed to send. Try again.");
    } catch {
      setError("Server error. Try again.");
    }
  };

  if (sent) return <div>Thank you for contacting us!</div>;

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
