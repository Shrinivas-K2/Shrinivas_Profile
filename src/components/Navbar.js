//import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import React, { useState, useEffect } from 'react';

function Navbar() {


  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true); // scrolling up
      } else if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);



     const showResume= () => {
      // Replace the URL below with the page you want to redirect to
      window.location.href = " https://drive.google.com/drive/folders/1sMBZ5yN3p9M8P5hSXdDdDPdRMfgW09qP"; 
    };
  return (
    <nav className={`floating-navbar${show ? '' : ' navbar-hidden'}`}>
      <div className="navbar-left">
        <img src="/logo192.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="demo-btn" onClick={showResume}>Get Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
