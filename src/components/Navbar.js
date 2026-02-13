import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <nav className={`floating-navbar${show ? '' : ' navbar-hidden'}`}>
      <div className="navbar-left">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`navbar-right${menuOpen ? ' navbar-right-open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><button className="demo-btn" onClick={showResume}>Get Resume</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
