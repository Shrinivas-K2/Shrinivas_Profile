// src/components/Contact.js
import React from 'react';
import '../components/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>I’d Love to Hear<br />From You</h2>
        <p>Whether it’s feedback, ideas, or just a hello — Iam  here.</p>
        <div className="contact-info">
          <p><FaEnvelope /> shrinivaskshreeni@mail.com</p>
          <p><FaPhone /> (+91) 6362507433 </p>
          <p><FaMapMarkerAlt /> Electronic city , Bengaluru , Karnataka </p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shrinivas-k-093a17244/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Shrinivas-K2" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/shrinivas_k_shree/"  rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea rows="5" placeholder="Enter your message" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

        <div style={{ width: "100%", textAlign: "center", marginTop: "2rem", color: "#ccc", fontSize: "0.95rem" }}>
            © {new Date().getFullYear()} Shrinivas. All rights reserved.
        </div>
    </div>

    // Copy right  section
        
  );
}

export default Contact;
