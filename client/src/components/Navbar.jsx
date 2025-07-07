import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 100) {
        setActive(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">kaviya</div>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <div className="social-icons mobile">
          <a href="https://github.com/Kaviya-S-211" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaviya-s-70815b367" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </nav>

      <div className="social-icons desktop">
        <a href="https://github.com/Kaviya-S-211" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kaviya-s-70815b367" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;












