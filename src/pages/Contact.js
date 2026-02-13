import '../components/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';

function Contact() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSent(false);

    const directUrl = 'http://localhost:5000/api/contact';
    const proxyUrl = '/api/contact';
    const configuredUrl = apiBaseUrl ? `${apiBaseUrl}/api/contact` : '';
    const isLocalDev =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    const targets = configuredUrl
      ? [configuredUrl]
      : isLocalDev
        ? [directUrl, proxyUrl]
        : [proxyUrl];

    try {
      let res = null;
      let lastError = null;
      let apiErrorMessage = '';

      for (const url of targets) {
        try {
          res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });

          if (!res.ok) {
            try {
              const body = await res.json();
              apiErrorMessage = body.error || '';
            } catch {
              apiErrorMessage = '';
            }
          }

          if (res.ok) break;
        } catch (err) {
          lastError = err;
        }
      }

      if (res && res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        if (lastError) {
          setError('Contact server is not reachable. Check backend URL and deployment.');
          return;
        }
        setError(apiErrorMessage || 'Failed to send (API returned an error).');
      }
    } catch {
      setError('Server error. Try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>I'd Love to Hear<br />From You</h2>
        <p>Whether it's feedback, ideas, or just a hello, I am here.</p>
        <div className="contact-info">
          <p><FaEnvelope /> shrinivaskshreeni@gmail.com</p>
          <p><FaPhone /> (+91) 6362507433</p>
          <p><FaMapMarkerAlt /> Electronic City, Bengaluru, Karnataka</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shrinivas-k-093a17244/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Shrinivas-K2" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/shrinivas_k_shree/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />

          <label>Message</label>
          <textarea rows="5" name="message" placeholder="Enter your message" value={form.message} onChange={handleChange} required />

          <button type="submit">Send Message</button>
          {sent && <p>Thank you. Your inquiry has been sent.</p>}
          {error && <p>{error}</p>}
        </form>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem', color: '#ccc', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Shrinivas. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
