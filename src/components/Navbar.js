import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showResume = () => {
    window.open('https://drive.google.com/file/d/180PDKL--cvxJRDcihvTSzmi2Qs-AGRFm/view?usp=sharing', '_blank', 'noopener,noreferrer');
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
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="demo-btn" onClick={showResume}>Get Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
